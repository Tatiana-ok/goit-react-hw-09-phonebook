(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{96:function(e,t,n){},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(46);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,a=void 0;try{for(var s,i=e[Symbol.iterator]();!(o=(s=i.next()).done)&&(n.push(s.value),!t||n.length!==t);o=!0);}catch(c){r=!0,a=c}finally{try{o||null==i.return||i.return()}finally{if(r)throw a}}return n}}(e,t)||Object(o.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return k})),n.d(t,"b",(function(){return G}));var o=n(0),r=n.n(o);function a(e){var t,n,o="";if("string"===typeof e||"number"===typeof e)o+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var s=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o},i=n(26);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function u(e){return"number"===typeof e&&!isNaN(e)}function l(e){return"boolean"===typeof e}function d(e){return"string"===typeof e}function f(e){return"function"===typeof e}function p(e){return d(e)||f(e)?e:null}function g(e){return 0===e||e}var m=!("undefined"===typeof window||!window.document||!window.document.createElement);function v(e){return Object(o.isValidElement)(e)||d(e)||f(e)||u(e)}var y={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},b={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default",DARK:"dark"};function h(e){var t=e.enter,n=e.exit,a=e.appendPosition,s=void 0!==a&&a,i=e.collapse,c=void 0===i||i,u=e.collapseDuration,l=void 0===u?300:u;return function(e){var a=e.children,i=e.position,u=e.preventExitTransition,d=e.done,f=e.nodeRef,p=e.isIn,g=s?t+"--"+i:t,m=s?n+"--"+i:n,v=Object(o.useRef)(),y=Object(o.useRef)(0);function b(){var e=f.current;e.removeEventListener("animationend",b),0===y.current&&(e.className=v.current)}function h(){var e=f.current;e.removeEventListener("animationend",h),c?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all "+n+"ms",requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,d,l):d()}return Object(o.useLayoutEffect)((function(){!function(){var e=f.current;v.current=e.className,e.className+=" "+g,e.addEventListener("animationend",b)}()}),[]),Object(o.useEffect)((function(){p||(u?h():function(){y.current=1;var e=f.current;e.className+=" "+m,e.addEventListener("animationend",h)}())}),[p]),r.a.createElement(r.a.Fragment,null,a)}}var O={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){for(var t=this,n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];this.list.has(e)&&this.list.get(e).forEach((function(n){var r=setTimeout((function(){n.apply(void 0,o)}),0);t.emitQueue.has(e)||t.emitQueue.set(e,[]),t.emitQueue.get(e).push(r)}))}};function T(e,t){void 0===t&&(t=!1);var n=Object(o.useRef)(e);return Object(o.useEffect)((function(){t&&(n.current=e)})),n.current}function E(e,t){switch(t.type){case 0:return[].concat(e,[t.toastId]).filter((function(e){return e!==t.staleId}));case 1:return g(t.toastId)?e.filter((function(e){return e!==t.toastId})):[]}}function I(e){var t=Object(o.useReducer)((function(e){return e+1}),0)[1],n=Object(o.useReducer)(E,[]),r=n[0],a=n[1],s=Object(o.useRef)(null),i=T(0),c=T([]),m=T({}),y=T({toastKey:1,displayedToast:0,props:e,containerId:null,isToastActive:b,getToast:function(e){return m[e]||null}});function b(e){return-1!==r.indexOf(e)}function h(e){var t=e.containerId;!y.props.limit||t&&y.containerId!==t||(i-=c.length,c=[])}function I(e){a({type:1,toastId:e})}function C(){var e=c.shift();R(e.toastContent,e.toastProps,e.staleId)}function j(e,n){var r=n.delay,a=n.staleId,b=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(n,["delay","staleId"]);if(v(e)&&!function(e){var t=e.containerId,n=e.toastId,o=e.updateId;return!!(!s.current||y.props.enableMultiContainer&&t!==y.props.containerId||m[n]&&null==o)}(b)){var h=b.toastId,O=b.updateId,T=y.props,E=function(){return I(h)},j=null==b.updateId;j&&i++;var N,_,w={toastId:h,updateId:O,isIn:!1,key:b.key||y.toastKey++,type:b.type,closeToast:E,closeButton:b.closeButton,rtl:T.rtl,position:b.position||T.position,transition:b.transition||T.transition,className:p(b.className||T.toastClassName),bodyClassName:p(b.bodyClassName||T.bodyClassName),style:b.style||T.toastStyle,bodyStyle:b.bodyStyle||T.bodyStyle,onClick:b.onClick||T.onClick,pauseOnHover:l(b.pauseOnHover)?b.pauseOnHover:T.pauseOnHover,pauseOnFocusLoss:l(b.pauseOnFocusLoss)?b.pauseOnFocusLoss:T.pauseOnFocusLoss,draggable:l(b.draggable)?b.draggable:T.draggable,draggablePercent:u(b.draggablePercent)?b.draggablePercent:T.draggablePercent,draggableDirection:b.draggableDirection||T.draggableDirection,closeOnClick:l(b.closeOnClick)?b.closeOnClick:T.closeOnClick,progressClassName:p(b.progressClassName||T.progressClassName),progressStyle:b.progressStyle||T.progressStyle,autoClose:(N=b.autoClose,_=T.autoClose,!1===N||u(N)&&N>0?N:_),hideProgressBar:l(b.hideProgressBar)?b.hideProgressBar:T.hideProgressBar,progress:b.progress,role:d(b.role)?b.role:T.role,deleteToast:function(){!function(e){delete m[e];var n=c.length;(i=g(e)?i-1:i-y.displayedToast)<0&&(i=0);if(n>0){var o=g(e)?1:y.props.limit;if(1===n||1===o)y.displayedToast++,C();else{var r=o>n?n:o;y.displayedToast=r;for(var a=0;a<r;a++)C()}}else t()}(h)}};f(b.onOpen)&&(w.onOpen=b.onOpen),f(b.onClose)&&(w.onClose=b.onClose),"y"===w.draggableDirection&&80===w.draggablePercent&&(w.draggablePercent*=1.5);var L=T.closeButton;!1===b.closeButton||v(b.closeButton)?L=b.closeButton:!0===b.closeButton&&(L=!v(T.closeButton)||T.closeButton),w.closeButton=L;var k=e;Object(o.isValidElement)(e)&&!d(e.type)?k=Object(o.cloneElement)(e,{closeToast:E,toastProps:w}):f(e)&&(k=e({closeToast:E,toastProps:w})),T.limit&&T.limit>0&&i>T.limit&&j?c.push({toastContent:k,toastProps:w,staleId:a}):u(r)&&r>0?setTimeout((function(){R(k,w,a)}),r):R(k,w,a)}}function R(e,t,n){var o=t.toastId;n&&delete m[n],m[o]={content:e,props:t},a({type:0,toastId:o,staleId:n})}return Object(o.useEffect)((function(){return y.containerId=e.containerId,O.cancelEmit(3).on(0,j).on(1,(function(e){return s.current&&I(e)})).on(5,h).emit(2,y),function(){return O.emit(3,y)}}),[]),Object(o.useEffect)((function(){y.isToastActive=b,y.displayedToast=r.length,O.emit(4,r.length,e.containerId)}),[r]),Object(o.useEffect)((function(){y.props=e})),{getToastToRender:function(t){for(var n={},o=e.newestOnTop?Object.keys(m).reverse():Object.keys(m),r=0;r<o.length;r++){var a=m[o[r]],s=a.props.position;n[s]||(n[s]=[]),n[s].push(a)}return Object.keys(n).map((function(e){return t(e,n[e])}))},collection:m,containerRef:s,isToastActive:b}}function C(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function j(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function R(e){var t=Object(o.useState)(!0),n=t[0],r=t[1],a=Object(o.useState)(!1),s=a[0],i=a[1],c=Object(o.useRef)(null),u=T({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null}),l=T(e,!0),d=e.autoClose,p=e.pauseOnHover,g=e.closeToast,m=e.onClick,v=e.closeOnClick;function y(t){if(e.draggable){var n=c.current;u.canCloseOnClick=!0,u.canDrag=!0,u.boundingRect=n.getBoundingClientRect(),n.style.transition="",u.x=C(t.nativeEvent),u.y=j(t.nativeEvent),"x"===e.draggableDirection?(u.start=u.x,u.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(u.start=u.y,u.removalDistance=n.offsetHeight*(e.draggablePercent/100))}}function b(){if(u.boundingRect){var t=u.boundingRect,n=t.top,o=t.bottom,r=t.left,a=t.right;e.pauseOnHover&&u.x>=r&&u.x<=a&&u.y>=n&&u.y<=o?O():h()}}function h(){r(!0)}function O(){r(!1)}function E(t){if(u.canDrag){t.preventDefault();var o=c.current;n&&O(),u.x=C(t),u.y=j(t),"x"===e.draggableDirection?u.delta=u.x-u.start:u.delta=u.y-u.start,u.start!==u.x&&(u.canCloseOnClick=!1),o.style.transform="translate"+e.draggableDirection+"("+u.delta+"px)",o.style.opacity=""+(1-Math.abs(u.delta/u.removalDistance))}}function I(){var t=c.current;if(u.canDrag){if(u.canDrag=!1,Math.abs(u.delta)>u.removalDistance)return i(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}Object(o.useEffect)((function(){return f(e.onOpen)&&e.onOpen(Object(o.isValidElement)(e.children)&&e.children.props),function(){f(l.onClose)&&l.onClose(Object(o.isValidElement)(l.children)&&l.children.props)}}),[]),Object(o.useEffect)((function(){return e.draggable&&(document.addEventListener("mousemove",E),document.addEventListener("mouseup",I),document.addEventListener("touchmove",E),document.addEventListener("touchend",I)),function(){e.draggable&&(document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",I))}}),[e.draggable]),Object(o.useEffect)((function(){return e.pauseOnFocusLoss&&function(){document.hasFocus()||O();window.addEventListener("focus",h),window.addEventListener("blur",O)}(),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",h),window.removeEventListener("blur",O))}}),[e.pauseOnFocusLoss]);var R={onMouseDown:y,onTouchStart:y,onMouseUp:b,onTouchEnd:b};return d&&p&&(R.onMouseEnter=O,R.onMouseLeave=h),v&&(R.onClick=function(e){m&&m(e),u.canCloseOnClick&&g()}),{playToast:h,pauseToast:O,isRunning:n,preventExitTransition:s,toastRef:c,eventHandlers:R}}function N(e){var t=e.closeToast,n=e.type,r=e.ariaLabel,a=void 0===r?"close":r;return Object(o.createElement)("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":a},Object(o.createElement)("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Object(o.createElement)("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function _(e){var t,n,r=e.delay,a=e.isRunning,i=e.closeToast,u=e.type,l=e.hide,d=e.className,p=e.style,g=e.controlledProgress,m=e.progress,v=e.rtl,y=e.isIn,b=c({},p,{animationDuration:r+"ms",animationPlayState:a?"running":"paused",opacity:l?0:1});g&&(b.transform="scaleX("+m+")");var h=s("Toastify__progress-bar",g?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar--"+u,((t={})["Toastify__progress-bar--rtl"]=v,t)),O=f(d)?d({rtl:v,type:u,defaultClassName:h}):s(h,d),T=((n={})[g&&m>=1?"onTransitionEnd":"onAnimationEnd"]=g&&m<1?null:function(){y&&i()},n);return Object(o.createElement)("div",Object.assign({role:"progressbar","aria-hidden":l?"true":"false","aria-label":"notification timer",className:O,style:b},T))}_.defaultProps={type:b.DEFAULT,hide:!1};var w=function(e){var t,n=R(e),r=n.isRunning,a=n.preventExitTransition,i=n.toastRef,c=n.eventHandlers,u=e.closeButton,l=e.children,d=e.autoClose,p=e.onClick,g=e.type,m=e.hideProgressBar,v=e.closeToast,y=e.transition,b=e.position,h=e.className,O=e.style,T=e.bodyClassName,E=e.bodyStyle,I=e.progressClassName,C=e.progressStyle,j=e.updateId,N=e.role,w=e.progress,L=e.rtl,k=e.toastId,P=e.deleteToast,D=e.isIn,B=s("Toastify__toast","Toastify__toast--"+g,((t={})["Toastify__toast--rtl"]=L,t)),S=f(h)?h({rtl:L,position:b,type:g,defaultClassName:B}):s(B,h),x=!!w;return Object(o.createElement)(y,{isIn:D,done:P,position:b,preventExitTransition:a,nodeRef:i},Object(o.createElement)("div",Object.assign({id:k,onClick:p,className:S},c,{style:O,ref:i}),Object(o.createElement)("div",Object.assign({},D&&{role:N},{className:f(T)?T({type:g}):s("Toastify__toast-body",T),style:E}),l),function(e){if(e){var t={closeToast:v,type:g};return f(e)?e(t):Object(o.isValidElement)(e)?Object(o.cloneElement)(e,t):void 0}}(u),(d||x)&&Object(o.createElement)(_,Object.assign({},j&&!x?{key:"pb-"+j}:{},{rtl:L,delay:d,isRunning:r,isIn:D,closeToast:v,hide:m,type:g,style:C,className:I,controlledProgress:x,progress:w}))))},L=h({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),k=function(e){var t=I(e),n=t.getToastToRender,r=t.containerRef,a=t.isToastActive,i=e.className,u=e.style,l=e.rtl,d=e.containerId;function g(e){var t,n=s("Toastify__toast-container","Toastify__toast-container--"+e,((t={})["Toastify__toast-container--rtl"]=l,t));return f(i)?i({position:e,rtl:l,defaultClassName:n}):s(n,p(i))}return Object(o.createElement)("div",{ref:r,className:"Toastify",id:d},n((function(e,t){var n=0===t.length?c({},u,{pointerEvents:"none"}):c({},u);return Object(o.createElement)("div",{className:g(e),style:n,key:"container-"+e},t.map((function(e){var t=e.content,n=e.props;return Object(o.createElement)(w,Object.assign({},n,{isIn:a(n.toastId),key:"toast-"+n.key,closeButton:!0===n.closeButton?N:n.closeButton}),t)})))})))};k.defaultProps={position:y.TOP_RIGHT,transition:L,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:N,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert"};var P,D,B,S=new Map,x=[],A=!1;function F(){return Math.random().toString(36).substr(2,9)}function H(e){return e&&(d(e.toastId)||u(e.toastId))?e.toastId:F()}function M(e,t){return S.size>0?O.emit(0,e,t):(x.push({content:e,options:t}),A&&m&&(A=!1,D=document.createElement("div"),document.body.appendChild(D),Object(i.render)(Object(o.createElement)(k,Object.assign({},B)),D))),t.toastId}function Q(e,t){return c({},t,{type:t&&t.type||e,toastId:H(t)})}var U=function(e){return function(t,n){return M(t,Q(e,n))}},G=function(e,t){return M(e,Q(b.DEFAULT,t))};G.success=U(b.SUCCESS),G.info=U(b.INFO),G.error=U(b.ERROR),G.warning=U(b.WARNING),G.dark=U(b.DARK),G.warn=G.warning,G.dismiss=function(e){return O.emit(1,e)},G.clearWaitingQueue=function(e){return void 0===e&&(e={}),O.emit(5,e)},G.isActive=function(e){var t=!1;return S.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},G.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=S.get(n||P);return o?o.getToast(e):null}(e,t);if(n){var o=n.props,r=n.content,a=c({},o,t,{toastId:t.toastId||e,updateId:F()});a.toastId!==e&&(a.staleId=e);var s=a.render||r;delete a.render,M(s,a)}}),0)},G.done=function(e){G.update(e,{progress:1})},G.onChange=function(e){return f(e)&&O.on(4,e),function(){f(e)&&O.off(4,e)}},G.configure=function(e){void 0===e&&(e={}),A=!0,B=e},G.POSITION=y,G.TYPE=b,O.on(2,(function(e){P=e.containerId||e,S.set(P,e),x.forEach((function(e){O.emit(0,e.content,e.options)})),x=[]})).on(3,(function(e){S.delete(e.containerId||e),0===S.size&&O.off(0).off(1).off(5),m&&D&&document.body.removeChild(D)}))}}]);
//# sourceMappingURL=0.97ff78d4.chunk.js.map