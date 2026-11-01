package app.milepost;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

/**
 * Milepost for Android: the web app (GitHub Pages) in a full-screen WebView.
 * Pages work offline through the site's service worker once they have been opened online.
 */
public class MainActivity extends Activity {
    static final String HOME = "https://6ydjtwnzth-jpg.github.io/milepost-app/";
    static final String OFFLINE = "file:///android_asset/offline.html";

    private WebView web;

    @Override
    protected void onCreate(Bundle state) {
        super.onCreate(state);
        web = new WebView(this);
        web.setBackgroundColor(Color.TRANSPARENT);
        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setCacheMode(WebSettings.LOAD_DEFAULT);
        s.setUserAgentString(s.getUserAgentString() + " MilepostAndroid/1");
        web.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest req) {
                Uri u = req.getUrl();
                String url = u.toString();
                if (url.startsWith(HOME) || url.startsWith("file:///android_asset/")) return false;
                // links outside the app open in the browser
                try { startActivity(new Intent(Intent.ACTION_VIEW, u)); } catch (Exception e) { /* no app for this link */ }
                return true;
            }

            @Override
            public void onReceivedError(WebView view, WebResourceRequest req, WebResourceError err) {
                // first launch without a connection: nothing is cached yet
                if (req.isForMainFrame()) view.loadUrl(OFFLINE);
            }
        });
        setContentView(web);
        if (state != null) web.restoreState(state);
        else web.loadUrl(HOME);
    }

    @Override
    protected void onSaveInstanceState(Bundle out) {
        super.onSaveInstanceState(out);
        web.saveState(out);
    }

    @Override
    public void onBackPressed() {
        if (web.canGoBack()) web.goBack();
        else super.onBackPressed();
    }

    @Override
    protected void onPause() { super.onPause(); web.onPause(); }

    @Override
    protected void onResume() { super.onResume(); web.onResume(); }
}
