(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{398:function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"c",function(){return m}),n.d(t,"d",function(){return v}),n.d(t,"b",function(){return p});var r=n(2),a=n.n(r),i=n(475),o=n(385),c=n(99);n(399),n(424);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var u=["#444","#3498db","#ff874d","#67a2a0"],l=null,d=null,f=Object(r.memo)(function(e){var t=e.toolbar,n=e.disabled,f=e.hideGrid,m=Object(r.useRef)(),v=s(Object(r.useState)(u[0]),2),p=v[0],h=v[1],b=function(){window.localStorage.setItem("fusumaCanvasCoordinate",m.current.getSaveData())},w=function(){var e=window.localStorage.getItem("fusumaCanvasCoordinate");l!==e&&(m.current.loadSaveData(e,!0),l=e)};return Object(r.useEffect)(function(){return d=t?setInterval(b,1e3):setInterval(w,1e3),function(){d&&clearInterval(d)}},[]),a.a.createElement(a.a.Fragment,null,t&&a.a.createElement("div",{className:"fusuma-canvas-toolbar"},a.a.createElement(c.b,{onClick:function(){m.current.clear()},size:"32"}),a.a.createElement(o.m,{onClick:function(){m.current.undo()}}),a.a.createElement("div",{style:{background:p},onClick:function(){u=u.concat(u.splice(0,1)),h(u[0])},className:"fusuma-canvas-toolbar-color"})),a.a.createElement(i.a,{ref:m,className:"fusuma-canvas",canvasWidth:"100%",canvasHeight:"100%",loadTimeOffset:0,brushColor:p,disabled:n,hideGrid:f,lazyRadius:0,brushRadius:8}))});function m(){var e=window.localStorage.getItem("fusumaCanvasEvent");return JSON.parse(e||{status:"none"})}function v(e){window.addEventListener("storage",function(t){"fusumaCanvasEvent"===t.key&&e(JSON.parse(t.newValue))})}function p(e){window.localStorage.setItem("fusumaCanvasEvent",JSON.stringify(e))}},399:function(e,t,n){var r=n(400);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(51)(r,a);r.locals&&(e.exports=r.locals)},400:function(e,t,n){},416:function(e,t,n){"use strict";function r(e,t,n,r,a,i,o){try{var c=e[i](o),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return o});var o=function(){function e(){var t=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"setupRecording",function(){navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(t.handlerRecording)}),i(this,"handlerRecording",function(e){var n=[];t.stream=e,t.mediaRecorder=new MediaRecorder(e,{}),t.mediaRecorder.addEventListener("dataavailable",function(e){e.data.size>0&&n.push(e.data)}),t.mediaRecorder.addEventListener("stop",function(){t.finishedProcess=!0,t.url=URL.createObjectURL(new Blob(n,{type:"audio/webm"}))})}),i(this,"startRecording",function(){t.mediaRecorder.start(),t.finishedProcess=!1,t.url=null}),i(this,"stopRecording",function(){return new Promise(function(e){t.mediaRecorder.stop();var n=setInterval(function(){t.finishedProcess&&(clearInterval(n),e(t.url))},100)})}),i(this,"disposeRecording",function(){t.mediaRecorder.stream.getTracks().forEach(function(e){return e.stop()}),t.finishedProcess=!1,t.url=null}),!navigator.mediaDevices.getUserMedia)throw new Error("Not supported");this.url=null,this.finishedProcess=!1}var t,n,o;return t=e,(n=[{key:"startCapturing",value:function(){var e,t=(e=regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.prev=1,e.next=4,navigator.mediaDevices.getDisplayMedia(t);case 4:n=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0);case 10:return e.abrupt("return",n);case 11:case"end":return e.stop()}},e,null,[[1,7]])}),function(){var t=this,n=arguments;return new Promise(function(a,i){var o=e.apply(t,n);function c(e){r(o,a,i,c,s,"next",e)}function s(e){r(o,a,i,c,s,"throw",e)}c(void 0)})});return function(e){return t.apply(this,arguments)}}()},{key:"stopCapturing",value:function(e){e.srcObject.getTracks().forEach(function(e){return e.stop()}),e.srcObject=null}}])&&a(t.prototype,n),o&&a(t,o),e}()},649:function(e,t,n){var r=n(650);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(51)(r,a);r.locals&&(e.exports=r.locals)},650:function(e,t,n){},678:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),i=n(636),o=n.n(i),c=n(385),s=n(99);function u(e,t,n,r,a,i,o){try{var c=e[i](o),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.receiverQuery="?presenter=view",this.apiType="function"==typeof window.PresentationRequest?"presentation":"localStorage",this.windowId=null}var t,n,r;return t=e,(n=[{key:"openView",value:function(){var e=this;return new Promise(function(t,n){"presentation"===e.apiType?(e.presentationRequest=new PresentationRequest([e.receiverQuery]),navigator.presentation.defaultRequest=e.presentationRequest,e.presentationRequest.addEventListener("connectionavailable",function(n){e.presentationConnection=n.connection,t(n.connection.id)}),e.presentationRequest.start().catch(function(e){return n(e)})):(e.windowId=window.open(e.receiverQuery,"_blank","width=800,height=600"),t())})}},{key:"changePage",value:function(e){var t=JSON.stringify({date:Date.now(),page:e});"presentation"===this.apiType&&this.presentationConnection&&this.presentationConnection.send(t),"localStorage"===this.apiType&&window.localStorage.setItem("page",t)}},{key:"reconnect",value:function(){var e,t=(e=regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("presentation"!==this.apiType){e.next=2;break}return e.abrupt("return",this.presentationRequest.reconnect(t));case 2:return e.abrupt("return",Promise.resolve());case 3:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,a){var i=e.apply(t,n);function o(e){u(i,r,a,o,c,"next",e)}function c(e){u(i,r,a,o,c,"throw",e)}o(void 0)})});return function(e){return t.apply(this,arguments)}}()},{key:"terminate",value:function(){"presentation"===this.apiType&&this.presentationConnection?(this.presentationConnection.terminate(),this.presentationConnection.close(),this.presentationConnection=null):this.windowId&&(this.windowId.close(),this.windowId=null)}}])&&l(t.prototype,n),r&&l(t,r),e}(),f=n(398);function m(e){parseInt(e%1e3/100);var t=Math.floor(e/1e3%60).toString().padStart(2,"0"),n=Math.floor(e/6e4%60).toString().padStart(2,"0"),r=Math.floor(e/36e5%24).toString().padStart(2,"0");return"".concat(r,":").concat(n,":").concat(t)}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p=0,h=null,b=Object(r.memo)(function(e){var t=e.start,n=e.stop,i=e.reset,o=e.disabledStart,s=e.disabledStop,u=e.disabledReset,l=v(Object(r.useState)(!0),2),d=l[0],f=l[1],b=v(Object(r.useState)("00:00:00"),2),w=b[0],y=b[1];return Object(r.useEffect)(function(){return function(){h&&clearInterval(h)}},[]),a.a.createElement("div",{className:"host-timer"},a.a.createElement(c.i,{onClick:function(){h&&n(),p=0,y("00:00:00"),i()},className:u?"disabled":void 0}),d?a.a.createElement(c.h,{onClick:function(){h=setInterval(function(){y(m(p+=1e3))},1e3),f(!1),t()},className:o?"disabled":void 0}):a.a.createElement(c.j,{onClick:function(){clearInterval(h),f(!0),h=null,n()},className:s?"disabled":void 0}),a.a.createElement("span",null,w))}),w=n(645);function y(e,t,n,r,a,i,o){try{var c=e[i](o),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}var g=function(e){var t=e.items,n=e.url,i=Object(r.useRef)();return Object(r.useEffect)(function(){if(i.current){var e=i.current,n=function(){var t,n=(t=regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(t){e.addEventListener("loadedmetadata",function(){if(e.duration===1/0){e.currentTime=Number.MAX_SAFE_INTEGER;e.addEventListener("timeupdate",function n(){e.currentTime=0,e.removeEventListener("timeupdate",n),t()})}})}));case 1:case"end":return t.stop()}},t)}),function(){var e=this,n=arguments;return new Promise(function(r,a){var i=t.apply(e,n);function o(e){y(i,r,a,o,c,"next",e)}function c(e){y(i,r,a,o,c,"throw",e)}o(void 0)})});return function(){return n.apply(this,arguments)}}(),r=document.querySelectorAll(".ReactModalPortal section > div");n();var a=!1;e.addEventListener("playing",function(){a||(e.currentTime=0,a=!0)}),e.addEventListener("timeupdate",function(){var n=function(e){for(var n=0,r=0;r<t.length;r++)if(e<=t[r].time){n=r;break}return n}(1e3*e.currentTime);r[n].scrollIntoView()})}},[]),a.a.createElement("div",{className:"host-timeline-container"},n&&a.a.createElement("div",{className:"host-timeline-audio"},a.a.createElement("audio",{src:n,controls:!0,ref:i})),a.a.createElement("div",{className:"host-timeline-body"},a.a.createElement(w.Timeline,null,t.map(function(e,t){var n=e.title,r=e.time,i=e.timeStr,o=e.Slide,c=e.color,s=e.Icon;return a.a.createElement(w.TimelineEvent,{key:r,title:n,createdAt:i,iconColor:c,icon:s},o&&a.a.createElement(o,null))}))))},E=n(416);n(649);function R(e,t,n,r,a,i,o){try{var c=e[i](o),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function S(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var i=e.apply(t,n);function o(e){R(i,r,a,o,c,"next",e)}function c(e){R(i,r,a,o,c,"throw",e)}o(void 0)})}}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}o.a.setAppElement("#root");var I=function(e){var t=e.slideUrl,n=e.slideIndex;return a.a.createElement("iframe",{src:"".concat(t.replace(/slide=(\d?)/,"slide=".concat(n))),width:"100%",height:"100%"})},C=null,N=null,x=null,O=[],T=0,j=null,P=Object(r.memo)(function(e){var t=e.slides,n=e.currentIndex,i=e.terminate,u=e.onChangeSlideIndex;if(!x){var l=new URL(window.location),v=l.origin,p=l.pathname;N="".concat(v,"/").concat(p,"?sidebar=false&isLive=false#slide="),x=new d}var h=k(Object(r.useState)("prepare"),2),w=h[0],y=h[1],R=k(Object(r.useState)(!1),2),P=R[0],L=R[1],A=k(Object(r.useState)(!1),2),M=A[0],q=A[1],D=k(Object(r.useState)(!0),2),U=D[0],z=D[1],J=k(Object(r.useState)(!1),2),_=J[0],G=J[1],V=function(){try{i(),x&&(x.terminate(),x=null)}catch(e){console.error(e)}},Q=function(e){if("start"===w){var n=(new Date).getTime()-T,r=O.slice(-1)[0];O.push({slideNum:e+1,time:n,timeStr:"".concat(m(n)," (+").concat(m(n-r.time),")"),event:"changed",title:"Moved to the ".concat(e+1," slide from the ").concat(e," slide."),Slide:t[e].slide,color:"#3498db",Icon:a.a.createElement(c.b,{size:"22"})})}u(e),x.changePage(e)},F=function(){0===O.length&&(T=(new Date).getTime());var e=0===O.length?0:(new Date).getTime()-T;O.push({slideNum:n+1,time:e,timeStr:m(e),event:"started",title:"Started from the ".concat(n+1," slide."),Slide:t[n].slide,color:"#6fba1c",Icon:a.a.createElement(c.a,null)}),P&&(C.startRecording(),j=null),z(!1),y("start")},H=function(){var e=S(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=(new Date).getTime()-T,O.push({slideNum:n+1,time:t,timeStr:m(t),event:"stopped",title:"Stopped at the ".concat(n+1," slide."),color:"#e9546b",Icon:a.a.createElement(c.c,null)}),!P){e.next=6;break}return e.next=5,C.stopRecording();case 5:j=e.sent;case 6:y("stop");case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),B=function(){C&&(C.disposeRecording(),C=null),L(!1)};return Object(r.useEffect)(function(){function e(){return(e=S(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,x){e.next=3;break}throw new Error("Not found PresenterController.");case 3:return e.next=5,x.openView();case 5:e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){document.onkeyup=null,x&&V(),B()}},[]),Object(r.useEffect)(function(){document.onkeyup=function(e){"ArrowLeft"===e.key?Q(Math.max(0,n-1)):"ArrowRight"===e.key&&Q(Math.min(t.length-1,n+1))}}),a.a.createElement("div",{className:"host-container"},a.a.createElement(o.a,{isOpen:M,onRequestClose:function(){q(!1)}},a.a.createElement(g,{items:O,url:j})),a.a.createElement("div",{className:"host-left-box"},a.a.createElement("div",{className:"host-note"},t&&a.a.createElement("pre",{dangerouslySetInnerHTML:{__html:t[n].fusumaProps.note}}))),a.a.createElement("div",{className:"host-right-box"},a.a.createElement("div",{className:"host-slide-layer"},a.a.createElement("h2",null,"Current"),a.a.createElement(s.g,{size:28,onClick:function(){G(!0),Object(f.b)({status:"start"})}}),a.a.createElement(I,{slideUrl:N,slideIndex:n+1})),a.a.createElement(o.a,{isOpen:_,onRequestClose:function(){G(!1),Object(f.b)({status:"stop"})}},_&&a.a.createElement("div",{className:"host-slide-canvas"},a.a.createElement(f.a,{toolbar:!0,hideGrid:!0}),a.a.createElement(I,{slideUrl:N,slideIndex:n+1}))),a.a.createElement("div",{className:"host-slide-layer"},a.a.createElement("h2",null,"Next"),a.a.createElement(I,{slideUrl:N,slideIndex:n+2}))),a.a.createElement("div",{className:"host-bottom-box"},a.a.createElement(c.k,{onClick:V,className:"terminate-button"}),a.a.createElement("div",{className:"host-bottom-box-info"},a.a.createElement(b,{start:F,stop:H,reset:function(){j=null,O=[],T=0,y("prepare"),z(!0)},disabledStart:"stop"===w&&P&&!F.isEmptyRecordedTimeline,disabledStop:"stop"===w&&P&&!F.isEmptyRecordedTimeline,disabledReset:"start"===w&&P}),a.a.createElement("span",{className:"current-slide-num"},"".concat(n+1).padStart(2,"0")," / ","".concat(t.length).padStart(2,"0")),a.a.createElement(c.e,{onClick:function(){q(!0)},size:18,className:"start"===w&&P||U?"disabled":void 0}),P?a.a.createElement(c.f,{onClick:B,className:"start"!==w&&U?void 0:"disabled",size:20,color:"#6fba1c"}):a.a.createElement(c.g,{onClick:function(){if(!C)try{(C=new E.a).setupRecording(),L(!0)}catch(e){alert(e)}},className:"start"!==w&&U?void 0:"disabled",size:20}))))});t.default=P}}]);