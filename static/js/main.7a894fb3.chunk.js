(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{29:function(e,n,t){},30:function(e,n,t){},32:function(e,n,t){},33:function(e,n,t){},34:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t.n(r),o=t(5),i=t.n(o),a=t(3),s=t(4),l=t(12),d=t(13),u=t(2),h="CHANGE_SEARCH_FIELD",j="REQUEST_ROBOTS_PENDING",b="REQUEST_ROBOTS_SUCCESS",f="REQUEST_ROBOTS_FAILED",O={searchField:""},v={isPending:!1,robots:[],error:""},p=Object(s.c)({searchRobotsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case h:return Object(u.a)(Object(u.a)({},e),{},{searchField:n.payload});default:return e}},requestRobotsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case j:return Object(u.a)(Object(u.a)({},e),{},{isPending:!0});case b:return Object(u.a)(Object(u.a)({},e),{},{robots:n.payload,isPending:!1});case f:return Object(u.a)(Object(u.a)({},e),{},{error:n.payload,isPending:!1});default:return e}}}),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(29),t(30);var x=t(1),m=function(e){var n=e.searchChange;return Object(x.jsx)("div",{className:"search",children:Object(x.jsx)("input",{type:"search",placeholder:"search robots",onChange:n})})},y=function(){var e=Object(a.b)();return Object(x.jsx)("div",{children:Object(x.jsx)(m,{searchChange:function(n){var t;e((t=n.target.value,{type:h,payload:t}))}})})},E=(t(32),function(e){var n=e.robot,t=n.id,r=n.name,c=n.email;return Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:"robots"}),Object(x.jsxs)("article",{children:[Object(x.jsx)("h2",{children:r}),Object(x.jsx)("p",{children:c})]})]})}),R=function(){var e=Object(a.c)((function(e){return e.requestRobotsReducer.robots})),n=Object(a.c)((function(e){return e.searchRobotsReducer.searchField})),t=Object(a.b)();Object(r.useEffect)((function(){t((function(e){e({type:j}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e({type:b,payload:n})})).catch((function(n){return e({type:f,payload:n})}))}))}),[t]);var c=e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(e){return Object(x.jsx)(E,{robot:e},e.id)})),o=e.length?Object(x.jsx)("div",{className:"card-container",children:c}):Object(x.jsx)("h1",{children:"Loading"});return Object(x.jsx)("div",{children:o})},S=t(14),k=t(15),C=t(17),N=t(16),W=function(e){Object(C.a)(t,e);var n=Object(N.a)(t);function t(e){var r;return Object(S.a)(this,t),(r=n.call(this,e)).state={hasError:!1},r}return Object(k.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(x.jsx)("h1",{children:"Something Went Wrong"}):this.props.children}}]),t}(r.Component),L=(t(33),function(e){return Object(x.jsx)("article",{className:"scrollable",children:e.children})});var T=function(){return Object(x.jsx)("div",{className:"head-container",children:Object(x.jsx)("h1",{children:"RoboFriends"})})},_=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(T,{}),Object(x.jsxs)(W,{children:[Object(x.jsx)(y,{}),Object(x.jsx)(L,{children:Object(x.jsx)(R,{})})]})]})},P=Object(l.createLogger)(),U=Object(s.d)(p,Object(s.a)(d.a,P));i.a.render(Object(x.jsx)(a.a,{store:U,children:Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(_,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robofriends","/service-worker.js");g?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):w(n,e)}))}}()}},[[34,1,2]]]);
//# sourceMappingURL=main.7a894fb3.chunk.js.map