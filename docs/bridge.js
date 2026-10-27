/* Runs inside a course page opened from Milepost: adds the way back to the app home. */
(function(){
  if(document.getElementById("mp-home"))return;
  var zh=(document.documentElement.lang||"").indexOf("zh")===0;
  var a=document.createElement("a");
  a.id="mp-home";a.href="../../";a.setAttribute("aria-label",zh?"返回 Milepost":"Torna a Milepost");
  a.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>'+
    '<svg class="mp-logo" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="9" fill="#ea4a2a"/><path d="M10 25V14a6 6 0 0 1 12 0v11z" fill="#fff"/><path d="M13 19h6" stroke="#ea4a2a" stroke-width="2.4" stroke-linecap="round"/><path d="M6 25h20" stroke="#ffc532" stroke-width="2.6" stroke-linecap="round"/></svg>';
  document.body.appendChild(a);
})();
