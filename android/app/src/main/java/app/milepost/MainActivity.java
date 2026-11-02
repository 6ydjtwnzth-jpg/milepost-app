package app.milepost;

import android.app.Activity;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.graphics.Typeface;
import android.net.Uri;
import android.os.Bundle;
import android.provider.Settings;
import android.text.InputType;
import android.util.TypedValue;
import android.view.Gravity;
import android.view.View;
import android.view.inputmethod.EditorInfo;
import android.webkit.MimeTypeMap;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.ScrollView;
import android.widget.TextView;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.util.regex.Matcher;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Pattern;

/**
 * Milepost for Android: the web app (GitHub Pages) in a full-screen WebView.
 * Pages work offline through the site's service worker once they have been opened online.
 *
 * Beta build: before the app opens, it asks for a personal invite code. The code is checked by Supabase
 * (supabase/beta.sql): it works on the first phone that uses it and on no other. The Supabase address and
 * public key are read from the site's sync-config.js, so the beta starts working as soon as the site is set up.
 * Every later launch checks the code again in the background, so a revoked code stops working.
 *
 * Standalone build (flavor «francese»): the pages and the audio are inside the APK (assets/site, packed by
 * tools/standalone.py) and are served under a private https address, so the app needs no website and no connection.
 */
public class MainActivity extends Activity {
    static final String HOME = "https://6ydjtwnzth-jpg.github.io/milepost-app/";
    static final String OFFLINE = "file:///android_asset/offline.html";
    /* standalone: a private address that never reaches the network; every request is answered from assets/site */
    static final String LOCAL = "https://appassets.androidplatform.net/";

    private WebView web;
    private SharedPreferences prefs;

    @Override
    protected void onCreate(Bundle state) {
        super.onCreate(state);
        if (BuildConfig.BETA) {
            prefs = getSharedPreferences("beta", MODE_PRIVATE);
            String code = prefs.getString("code", null);
            if (code == null) { showGate(null); return; }
            recheck(code);
        }
        openWeb(state);
    }

    /* ---------- the app ---------- */
    private void openWeb(Bundle state) {
        web = new WebView(this);
        web.setBackgroundColor(Color.TRANSPARENT);
        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setCacheMode(WebSettings.LOAD_DEFAULT);
        s.setUserAgentString(s.getUserAgentString() + (BuildConfig.STANDALONE ? " MilepostAndroidStandalone/1" : BuildConfig.BETA ? " MilepostAndroidBeta/1" : " MilepostAndroid/1"));
        // the course plays the exam recordings by itself after the first tap
        if (BuildConfig.STANDALONE) s.setMediaPlaybackRequiresUserGesture(false);
        final String home = BuildConfig.STANDALONE ? LOCAL : HOME;
        web.setWebViewClient(new WebViewClient() {
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest req) {
                if (!BuildConfig.STANDALONE) return null;
                String url = req.getUrl().toString();
                if (!url.startsWith(LOCAL)) return blocked();
                return asset(req.getUrl().getPath());
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest req) {
                Uri u = req.getUrl();
                String url = u.toString();
                if (url.startsWith(home) || url.startsWith("file:///android_asset/")) return false;
                // links outside the app open in the browser
                try { startActivity(new Intent(Intent.ACTION_VIEW, u)); } catch (Exception e) { /* no app for this link */ }
                return true;
            }

            @Override
            public void onReceivedError(WebView view, WebResourceRequest req, WebResourceError err) {
                // first launch without a connection: nothing is cached yet (the standalone app never needs one)
                if (req.isForMainFrame() && !BuildConfig.STANDALONE) view.loadUrl(OFFLINE);
            }
        });
        setContentView(web);
        if (state != null) web.restoreState(state);
        else web.loadUrl(home);
    }

    /* ---------- standalone: pages and audio from assets/site ---------- */
    private static final Map<String, String> TYPES = new HashMap<>();
    static {
        TYPES.put("html", "text/html"); TYPES.put("js", "text/javascript"); TYPES.put("css", "text/css");
        TYPES.put("json", "application/json"); TYPES.put("svg", "image/svg+xml"); TYPES.put("png", "image/png");
        TYPES.put("mp3", "audio/mpeg"); TYPES.put("woff2", "font/woff2"); TYPES.put("webmanifest", "application/manifest+json");
    }

    private WebResourceResponse asset(String path) {
        if (path == null || path.isEmpty() || path.endsWith("/")) path = (path == null ? "/" : path) + "index.html";
        String rel = Uri.decode(path).replaceFirst("^/+", "");
        if (rel.contains("..")) return notFound();
        String ext = rel.substring(rel.lastIndexOf('.') + 1).toLowerCase();
        String type = TYPES.get(ext);
        if (type == null) type = MimeTypeMap.getSingleton().getMimeTypeFromExtension(ext);
        if (type == null) type = "application/octet-stream";
        try {
            InputStream in = getAssets().open("site/" + rel);
            boolean text = type.startsWith("text/") || type.endsWith("javascript") || type.endsWith("json") || type.endsWith("xml");
            WebResourceResponse r = new WebResourceResponse(type, text ? "UTF-8" : null, in);
            Map<String, String> h = new HashMap<>();
            h.put("Cache-Control", "no-cache");
            h.put("Access-Control-Allow-Origin", "*");
            r.setResponseHeaders(h);
            return r;
        } catch (Exception e) {
            return notFound();
        }
    }

    private static WebResourceResponse notFound() {
        return new WebResourceResponse("text/plain", "UTF-8", 404, "Not Found", new HashMap<>(), new java.io.ByteArrayInputStream(new byte[0]));
    }

    /** the standalone app never goes on the internet */
    private static WebResourceResponse blocked() {
        return new WebResourceResponse("text/plain", "UTF-8", 403, "Offline app", new HashMap<>(), new java.io.ByteArrayInputStream(new byte[0]));
    }

    /* ---------- beta: invite code ---------- */
    private int dp(int v) { return (int) TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP, v, getResources().getDisplayMetrics()); }

    private void showGate(String message) {
        ScrollView scroll = new ScrollView(this);
        scroll.setFillViewport(true);
        LinearLayout box = new LinearLayout(this);
        box.setOrientation(LinearLayout.VERTICAL);
        box.setGravity(Gravity.CENTER_HORIZONTAL | Gravity.CENTER_VERTICAL);
        box.setPadding(dp(24), dp(48), dp(24), dp(48));
        scroll.addView(box, new ScrollView.LayoutParams(-1, -1));

        TextView title = new TextView(this);
        title.setText("Milepost Beta");
        title.setTextSize(28);
        title.setTypeface(Typeface.DEFAULT_BOLD);
        title.setGravity(Gravity.CENTER);
        box.addView(title);

        TextView lead = new TextView(this);
        lead.setText("Inserisci il codice invito che hai ricevuto. Vale per un solo telefono: il primo su cui lo usi.\n\n输入你收到的邀请码。每个邀请码只能在一部手机上使用。");
        lead.setTextSize(16);
        lead.setGravity(Gravity.CENTER);
        lead.setPadding(0, dp(16), 0, dp(24));
        box.addView(lead);

        final EditText input = new EditText(this);
        input.setHint("MP-XXXX-XXXX");
        input.setTextSize(22);
        input.setGravity(Gravity.CENTER);
        input.setSingleLine(true);
        input.setInputType(InputType.TYPE_CLASS_TEXT | InputType.TYPE_TEXT_FLAG_CAP_CHARACTERS | InputType.TYPE_TEXT_FLAG_NO_SUGGESTIONS);
        input.setImeOptions(EditorInfo.IME_ACTION_DONE);
        input.setMinHeight(dp(56));
        box.addView(input, new LinearLayout.LayoutParams(-1, -2));

        final Button go = new Button(this);
        go.setText("Attiva · 激活");
        go.setTextSize(18);
        go.setMinHeight(dp(56));
        LinearLayout.LayoutParams lp = new LinearLayout.LayoutParams(-1, -2);
        lp.topMargin = dp(16);
        box.addView(go, lp);

        final TextView status = new TextView(this);
        status.setTextSize(15);
        status.setGravity(Gravity.CENTER);
        status.setPadding(0, dp(16), 0, 0);
        if (message != null) status.setText(message);
        box.addView(status);

        final Runnable submit = () -> {
            final String code = normalize(input.getText().toString());
            if (code.length() < 6) { status.setText("Scrivi il codice completo. · 请输入完整的邀请码。"); return; }
            go.setEnabled(false);
            status.setText("Controllo… · 正在检查…");
            new Thread(() -> {
                String r = activate(code);
                runOnUiThread(() -> {
                    go.setEnabled(true);
                    if ("ok".equals(r)) {
                        prefs.edit().putString("code", code).apply();
                        openWeb(null);
                    } else {
                        status.setText(explain(r));
                    }
                });
            }).start();
        };
        go.setOnClickListener(v -> submit.run());
        input.setOnEditorActionListener((v, id, ev) -> { if (id == EditorInfo.IME_ACTION_DONE) { submit.run(); return true; } return false; });
        setContentView(scroll);
    }

    private static String normalize(String s) { return s.trim().toUpperCase().replaceAll("\\s+", ""); }

    private static String explain(String r) {
        switch (r) {
            case "used": return "Questo codice è già attivo su un altro telefono. Chiedine uno nuovo a chi te l'ha dato.\n这个邀请码已经在另一部手机上使用了。";
            case "invalid": return "Codice non valido o revocato. Controlla di averlo scritto bene.\n邀请码无效或已被撤销。";
            case "noconfig": return "La beta non è ancora aperta: riprova più tardi.\n测试版还没有开放，请稍后再试。";
            default: return "Serve la connessione a internet per attivare il codice. Riprova.\n激活邀请码需要联网，请重试。";
        }
    }

    /** later launches: check again without blocking; lock only on a clear answer from the server */
    private void recheck(final String code) {
        new Thread(() -> {
            String r = activate(code);
            if ("used".equals(r) || "invalid".equals(r)) {
                prefs.edit().remove("code").apply();
                runOnUiThread(() -> { if (web != null) { web.destroy(); web = null; } showGate(explain(r)); });
            }
        }).start();
    }

    /** a fingerprint of this phone for this app: a hash, never the raw Android id */
    private String device() {
        String id = Settings.Secure.getString(getContentResolver(), Settings.Secure.ANDROID_ID);
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            byte[] h = md.digest(("milepost-beta:" + getPackageName() + ":" + id).getBytes(StandardCharsets.UTF_8));
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < 16; i++) sb.append(String.format("%02x", h[i]));
            return sb.toString();
        } catch (Exception e) { return "android-" + id; }
    }

    /** 'ok', 'used', 'invalid', 'noconfig' or 'error' (no connection, server down) */
    private String activate(String code) {
        try {
            // the file's comments hold an example address: only the live code counts
            String cfg = get(HOME + "sync-config.js").replaceAll("(?s)/\\*.*?\\*/", "");
            Matcher u = Pattern.compile("url\\s*:\\s*\"(https://[^\"]+)\"").matcher(cfg);
            Matcher k = Pattern.compile("key\\s*:\\s*\"([^\"]+)\"").matcher(cfg);
            if (!cfg.contains("MP_SYNC_CONFIG = {") || !u.find() || !k.find()) return "noconfig";
            String url = u.group(1).replaceAll("/+$", "") + "/rest/v1/rpc/beta_activate";
            String body = "{\"p_code\":\"" + code.replace("\"", "") + "\",\"p_device\":\"" + device() + "\"}";
            HttpURLConnection c = (HttpURLConnection) new URL(url).openConnection();
            c.setConnectTimeout(10000);
            c.setReadTimeout(10000);
            c.setRequestMethod("POST");
            c.setDoOutput(true);
            c.setRequestProperty("Content-Type", "application/json");
            c.setRequestProperty("apikey", k.group(1));
            // legacy anon keys are JWTs and may go in Authorization; new publishable keys (sb_publishable_…) only in apikey
            if (k.group(1).startsWith("eyJ")) c.setRequestProperty("Authorization", "Bearer " + k.group(1));
            try (OutputStream o = c.getOutputStream()) { o.write(body.getBytes(StandardCharsets.UTF_8)); }
            if (c.getResponseCode() != 200) return "error";
            String r = read(c.getInputStream()).trim().replace("\"", "");
            return ("ok".equals(r) || "used".equals(r) || "invalid".equals(r)) ? r : "error";
        } catch (Exception e) {
            return "error";
        }
    }

    private static String get(String url) throws Exception {
        HttpURLConnection c = (HttpURLConnection) new URL(url + "?t=" + System.currentTimeMillis()).openConnection();
        c.setConnectTimeout(10000);
        c.setReadTimeout(10000);
        c.setUseCaches(false);
        return read(c.getInputStream());
    }

    private static String read(InputStream in) throws Exception {
        ByteArrayOutputStream b = new ByteArrayOutputStream();
        byte[] buf = new byte[4096];
        int n;
        while ((n = in.read(buf)) > 0) b.write(buf, 0, n);
        in.close();
        return b.toString("UTF-8");
    }

    /* ---------- lifecycle ---------- */
    @Override
    protected void onSaveInstanceState(Bundle out) {
        super.onSaveInstanceState(out);
        if (web != null) web.saveState(out);
    }

    @Override
    public void onBackPressed() {
        if (web != null && web.canGoBack()) web.goBack();
        else super.onBackPressed();
    }

    @Override
    protected void onPause() { super.onPause(); if (web != null) web.onPause(); }

    @Override
    protected void onResume() { super.onResume(); if (web != null) web.onResume(); }
}
