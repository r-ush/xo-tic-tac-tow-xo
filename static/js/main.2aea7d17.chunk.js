(this["webpackJsonpxo-tic-tac-tow-xo"]=this["webpackJsonpxo-tic-tac-tow-xo"]||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),i=t(5),a=t.n(i),c=(t(12),t(6)),l=t(2),u={background:"#34666F",border:"2px solid #FFB530",fontSize:"30px",fontWeight:"800",cursor:"pointer",outline:"none",color:"#FFB530"},s=function(e){var n=e.value,t=e.onClick;return r.a.createElement("button",{style:u,onClick:t},n)},f={border:"4px solid #FFB530",borderRadius:"10px",width:"50vh",height:"50vh",margin:"0 auto",display:"grid",gridTemplate:"repeat(3, 1fr) / repeat(3, 1fr)"},d=function(e){var n=e.squares,t=e.onClick;return r.a.createElement("div",{style:f},n.map((function(e,n){return r.a.createElement(s,{key:n,value:e,onClick:function(){return t(n)}})})))};function h(e){for(var n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<n.length;t++){var o=Object(l.a)(n[t],3),r=o[0],i=o[1],a=o[2];if(e[r]&&e[r]===e[i]&&e[r]===e[a])return e[r]}return null}console.log(h([null,null,null,"X","X","O",null,null,null]));var v=function(){var e=Object(o.useState)(Array(9).fill(null)),n=Object(l.a)(e,2),t=n[0],i=n[1],a=Object(o.useState)(!0),u=Object(l.a)(a,2),s=u[0],f=u[1],v=h(t);return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement("h1",{style:{fontSize:"50px",textAlign:"center"}}," xo-tic-tac-toe-xo"),r.a.createElement(d,{squares:t,onClick:function(e){var n=Object(c.a)(t);v||n[e]||(n[e]=s?"X":"O",i(n),f(!s))}}),r.a.createElement("div",{styles:{width:"200px",margin:"20px auto"}},r.a.createElement("h1",null,v?"We have a Winner "+v:"Next Move "+(s?"X":"O")),r.a.createElement("button",{onClick:function(){return i(Array(9).fill(null))}},"Start!!!")),r.a.createElement("h2",null,"Made with \u2764\ufe0f by r-ush"),r.a.createElement("a",{style:{color:"#FFB530",fontSize:"20px"},href:"https://github.com/r-ush/xo-tic-tac-toe-xo"},"github link"))};t(13);var g=function(){return r.a.createElement(v,null)},p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat(".","/service-worker.js");p?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):m(n,e)}))}}()},7:function(e,n,t){e.exports=t(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.2aea7d17.chunk.js.map