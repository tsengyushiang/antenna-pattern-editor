(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();var ih={exports:{}},Oo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eg;function LS(){if(Eg)return Oo;Eg=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Oo.Fragment=t,Oo.jsx=n,Oo.jsxs=n,Oo}var Mg;function NS(){return Mg||(Mg=1,ih.exports=LS()),ih.exports}var Gv=NS(),ah={exports:{}},Po={},rh={exports:{}},sh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg;function OS(){return bg||(bg=1,function(s){function t(P,j){var Y=P.length;P.push(j);t:for(;0<Y;){var yt=Y-1>>>1,U=P[yt];if(0<l(U,j))P[yt]=j,P[Y]=U,Y=yt;else break t}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var j=P[0],Y=P.pop();if(Y!==j){P[0]=Y;t:for(var yt=0,U=P.length,J=U>>>1;yt<J;){var St=2*(yt+1)-1,Et=P[St],Dt=St+1,et=P[Dt];if(0>l(Et,Y))Dt<U&&0>l(et,Et)?(P[yt]=et,P[Dt]=Y,yt=Dt):(P[yt]=Et,P[St]=Y,yt=St);else if(Dt<U&&0>l(et,Y))P[yt]=et,P[Dt]=Y,yt=Dt;else break t}}return j}function l(P,j){var Y=P.sortIndex-j.sortIndex;return Y!==0?Y:P.id-j.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,g=null,x=3,E=!1,A=!1,R=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var j=n(p);j!==null;){if(j.callback===null)r(p);else if(j.startTime<=P)r(p),j.sortIndex=j.expirationTime,t(m,j);else break;j=n(p)}}function z(P){if(R=!1,D(P),!A)if(n(m)!==null)A=!0,k||(k=!0,lt());else{var j=n(p);j!==null&&dt(z,j.startTime-P)}}var k=!1,H=-1,Z=5,w=-1;function C(){return y?!0:!(s.unstable_now()-w<Z)}function B(){if(y=!1,k){var P=s.unstable_now();w=P;var j=!0;try{t:{A=!1,R&&(R=!1,F(H),H=-1),E=!0;var Y=x;try{e:{for(D(P),g=n(m);g!==null&&!(g.expirationTime>P&&C());){var yt=g.callback;if(typeof yt=="function"){g.callback=null,x=g.priorityLevel;var U=yt(g.expirationTime<=P);if(P=s.unstable_now(),typeof U=="function"){g.callback=U,D(P),j=!0;break e}g===n(m)&&r(m),D(P)}else r(m);g=n(m)}if(g!==null)j=!0;else{var J=n(p);J!==null&&dt(z,J.startTime-P),j=!1}}break t}finally{g=null,x=Y,E=!1}j=void 0}}finally{j?lt():k=!1}}}var lt;if(typeof N=="function")lt=function(){N(B)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,ht=ut.port2;ut.port1.onmessage=B,lt=function(){ht.postMessage(null)}}else lt=function(){v(B,0)};function dt(P,j){H=v(function(){P(s.unstable_now())},j)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(P){P.callback=null},s.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<P?Math.floor(1e3/P):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(P){switch(x){case 1:case 2:case 3:var j=3;break;default:j=x}var Y=x;x=j;try{return P()}finally{x=Y}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(P,j){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Y=x;x=P;try{return j()}finally{x=Y}},s.unstable_scheduleCallback=function(P,j,Y){var yt=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?yt+Y:yt):Y=yt,P){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=Y+U,P={id:_++,callback:j,priorityLevel:P,startTime:Y,expirationTime:U,sortIndex:-1},Y>yt?(P.sortIndex=Y,t(p,P),n(m)===null&&P===n(p)&&(R?(F(H),H=-1):R=!0,dt(z,Y-yt))):(P.sortIndex=U,t(m,P),A||E||(A=!0,k||(k=!0,lt()))),P},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(P){var j=x;return function(){var Y=x;x=j;try{return P.apply(this,arguments)}finally{x=Y}}}}(sh)),sh}var Tg;function PS(){return Tg||(Tg=1,rh.exports=OS()),rh.exports}var oh={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function BS(){if(Ag)return le;Ag=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,R={};function y(U,J,St){this.props=U,this.context=J,this.refs=R,this.updater=St||E}y.prototype.isReactComponent={},y.prototype.setState=function(U,J){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,J,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function v(){}v.prototype=y.prototype;function F(U,J,St){this.props=U,this.context=J,this.refs=R,this.updater=St||E}var N=F.prototype=new v;N.constructor=F,A(N,y.prototype),N.isPureReactComponent=!0;var D=Array.isArray,z={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function H(U,J,St,Et,Dt,et){return St=et.ref,{$$typeof:s,type:U,key:J,ref:St!==void 0?St:null,props:et}}function Z(U,J){return H(U.type,J,void 0,void 0,void 0,U.props)}function w(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function C(U){var J={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(St){return J[St]})}var B=/\/+/g;function lt(U,J){return typeof U=="object"&&U!==null&&U.key!=null?C(""+U.key):J.toString(36)}function ut(){}function ht(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(ut,ut):(U.status="pending",U.then(function(J){U.status==="pending"&&(U.status="fulfilled",U.value=J)},function(J){U.status==="pending"&&(U.status="rejected",U.reason=J)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function dt(U,J,St,Et,Dt){var et=typeof U;(et==="undefined"||et==="boolean")&&(U=null);var pt=!1;if(U===null)pt=!0;else switch(et){case"bigint":case"string":case"number":pt=!0;break;case"object":switch(U.$$typeof){case s:case t:pt=!0;break;case _:return pt=U._init,dt(pt(U._payload),J,St,Et,Dt)}}if(pt)return Dt=Dt(U),pt=Et===""?"."+lt(U,0):Et,D(Dt)?(St="",pt!=null&&(St=pt.replace(B,"$&/")+"/"),dt(Dt,J,St,"",function(Zt){return Zt})):Dt!=null&&(w(Dt)&&(Dt=Z(Dt,St+(Dt.key==null||U&&U.key===Dt.key?"":(""+Dt.key).replace(B,"$&/")+"/")+pt)),J.push(Dt)),1;pt=0;var Mt=Et===""?".":Et+":";if(D(U))for(var Bt=0;Bt<U.length;Bt++)Et=U[Bt],et=Mt+lt(Et,Bt),pt+=dt(Et,J,St,et,Dt);else if(Bt=x(U),typeof Bt=="function")for(U=Bt.call(U),Bt=0;!(Et=U.next()).done;)Et=Et.value,et=Mt+lt(Et,Bt++),pt+=dt(Et,J,St,et,Dt);else if(et==="object"){if(typeof U.then=="function")return dt(ht(U),J,St,Et,Dt);throw J=String(U),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return pt}function P(U,J,St){if(U==null)return U;var Et=[],Dt=0;return dt(U,Et,"","",function(et){return J.call(St,et,Dt++)}),Et}function j(U){if(U._status===-1){var J=U._result;J=J(),J.then(function(St){(U._status===0||U._status===-1)&&(U._status=1,U._result=St)},function(St){(U._status===0||U._status===-1)&&(U._status=2,U._result=St)}),U._status===-1&&(U._status=0,U._result=J)}if(U._status===1)return U._result.default;throw U._result}var Y=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function yt(){}return le.Children={map:P,forEach:function(U,J,St){P(U,function(){J.apply(this,arguments)},St)},count:function(U){var J=0;return P(U,function(){J++}),J},toArray:function(U){return P(U,function(J){return J})||[]},only:function(U){if(!w(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},le.Component=y,le.Fragment=n,le.Profiler=l,le.PureComponent=F,le.StrictMode=r,le.Suspense=m,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,le.__COMPILER_RUNTIME={__proto__:null,c:function(U){return z.H.useMemoCache(U)}},le.cache=function(U){return function(){return U.apply(null,arguments)}},le.cloneElement=function(U,J,St){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Et=A({},U.props),Dt=U.key,et=void 0;if(J!=null)for(pt in J.ref!==void 0&&(et=void 0),J.key!==void 0&&(Dt=""+J.key),J)!k.call(J,pt)||pt==="key"||pt==="__self"||pt==="__source"||pt==="ref"&&J.ref===void 0||(Et[pt]=J[pt]);var pt=arguments.length-2;if(pt===1)Et.children=St;else if(1<pt){for(var Mt=Array(pt),Bt=0;Bt<pt;Bt++)Mt[Bt]=arguments[Bt+2];Et.children=Mt}return H(U.type,Dt,void 0,void 0,et,Et)},le.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},le.createElement=function(U,J,St){var Et,Dt={},et=null;if(J!=null)for(Et in J.key!==void 0&&(et=""+J.key),J)k.call(J,Et)&&Et!=="key"&&Et!=="__self"&&Et!=="__source"&&(Dt[Et]=J[Et]);var pt=arguments.length-2;if(pt===1)Dt.children=St;else if(1<pt){for(var Mt=Array(pt),Bt=0;Bt<pt;Bt++)Mt[Bt]=arguments[Bt+2];Dt.children=Mt}if(U&&U.defaultProps)for(Et in pt=U.defaultProps,pt)Dt[Et]===void 0&&(Dt[Et]=pt[Et]);return H(U,et,void 0,void 0,null,Dt)},le.createRef=function(){return{current:null}},le.forwardRef=function(U){return{$$typeof:d,render:U}},le.isValidElement=w,le.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:j}},le.memo=function(U,J){return{$$typeof:p,type:U,compare:J===void 0?null:J}},le.startTransition=function(U){var J=z.T,St={};z.T=St;try{var Et=U(),Dt=z.S;Dt!==null&&Dt(St,Et),typeof Et=="object"&&Et!==null&&typeof Et.then=="function"&&Et.then(yt,Y)}catch(et){Y(et)}finally{z.T=J}},le.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},le.use=function(U){return z.H.use(U)},le.useActionState=function(U,J,St){return z.H.useActionState(U,J,St)},le.useCallback=function(U,J){return z.H.useCallback(U,J)},le.useContext=function(U){return z.H.useContext(U)},le.useDebugValue=function(){},le.useDeferredValue=function(U,J){return z.H.useDeferredValue(U,J)},le.useEffect=function(U,J,St){var Et=z.H;if(typeof St=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Et.useEffect(U,J)},le.useId=function(){return z.H.useId()},le.useImperativeHandle=function(U,J,St){return z.H.useImperativeHandle(U,J,St)},le.useInsertionEffect=function(U,J){return z.H.useInsertionEffect(U,J)},le.useLayoutEffect=function(U,J){return z.H.useLayoutEffect(U,J)},le.useMemo=function(U,J){return z.H.useMemo(U,J)},le.useOptimistic=function(U,J){return z.H.useOptimistic(U,J)},le.useReducer=function(U,J,St){return z.H.useReducer(U,J,St)},le.useRef=function(U){return z.H.useRef(U)},le.useState=function(U){return z.H.useState(U)},le.useSyncExternalStore=function(U,J,St){return z.H.useSyncExternalStore(U,J,St)},le.useTransition=function(){return z.H.useTransition()},le.version="19.1.1",le}var Rg;function Pd(){return Rg||(Rg=1,oh.exports=BS()),oh.exports}var lh={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cg;function zS(){if(Cg)return Dn;Cg=1;var s=Pd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,_)},Dn.flushSync=function(m){var p=h.T,_=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=_,r.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:E}):_==="script"&&r.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Dn.requestFormReset=function(m){r.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Dn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Dn.version="19.1.1",Dn}var wg;function IS(){if(wg)return lh.exports;wg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),lh.exports=zS(),lh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg;function FS(){if(Dg)return Po;Dg=1;var s=PS(),t=Pd(),n=IS();function r(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function h(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function d(e){if(u(e)!==e)throw Error(r(188))}function m(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(r(188));return i!==e?null:e}for(var a=e,o=i;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),e;if(f===o)return d(c),i;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=f;else{for(var S=!1,b=c.child;b;){if(b===a){S=!0,a=c,o=f;break}if(b===o){S=!0,o=c,a=f;break}b=b.sibling}if(!S){for(b=f.child;b;){if(b===a){S=!0,a=f,o=c;break}if(b===o){S=!0,o=f,a=c;break}b=b.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:i}function p(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=p(e),i!==null)return i;e=e.sibling}return null}var _=Object.assign,g=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),F=Symbol.for("react.consumer"),N=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function lt(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var ut=Symbol.for("react.client.reference");function ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ut?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case y:return"Profiler";case R:return"StrictMode";case z:return"Suspense";case k:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case N:return(e.displayName||"Context")+".Provider";case F:return(e._context.displayName||"Context")+".Consumer";case D:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return i=e.displayName||null,i!==null?i:ht(e.type)||"Memo";case Z:i=e._payload,e=e._init;try{return ht(e(i))}catch{}}return null}var dt=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},yt=[],U=-1;function J(e){return{current:e}}function St(e){0>U||(e.current=yt[U],yt[U]=null,U--)}function Et(e,i){U++,yt[U]=e.current,e.current=i}var Dt=J(null),et=J(null),pt=J(null),Mt=J(null);function Bt(e,i){switch(Et(pt,i),Et(et,e),Et(Dt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?K_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=K_(i),e=Q_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}St(Dt),Et(Dt,e)}function Zt(){St(Dt),St(et),St(pt)}function ae(e){e.memoizedState!==null&&Et(Mt,e);var i=Dt.current,a=Q_(i,e.type);i!==a&&(Et(et,e),Et(Dt,a))}function Ve(e){et.current===e&&(St(Dt),St(et)),Mt.current===e&&(St(Mt),wo._currentValue=Y)}var _e=Object.prototype.hasOwnProperty,I=s.unstable_scheduleCallback,Ce=s.unstable_cancelCallback,Jt=s.unstable_shouldYield,Ee=s.unstable_requestPaint,Ht=s.unstable_now,Ge=s.unstable_getCurrentPriorityLevel,Vt=s.unstable_ImmediatePriority,oe=s.unstable_UserBlockingPriority,Ze=s.unstable_NormalPriority,je=s.unstable_LowPriority,L=s.unstable_IdlePriority,M=s.log,$=s.unstable_setDisableYieldValue,ct=null,vt=null;function ot(e){if(typeof M=="function"&&$(e),vt&&typeof vt.setStrictMode=="function")try{vt.setStrictMode(ct,e)}catch{}}var zt=Math.clz32?Math.clz32:qt,Ct=Math.log,Wt=Math.LN2;function qt(e){return e>>>=0,e===0?32:31-(Ct(e)/Wt|0)|0}var bt=256,Nt=4194304;function Kt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xt(e,i,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~f,o!==0?c=Kt(o):(S&=b,S!==0?c=Kt(S):a||(a=b&~e,a!==0&&(c=Kt(a))))):(b=o&~f,b!==0?c=Kt(b):S!==0?c=Kt(S):a||(a=o&~e,a!==0&&(c=Kt(a)))),c===0?0:i!==0&&i!==c&&(i&f)===0&&(f=c&-c,a=i&-i,f>=a||f===32&&(a&4194048)!==0)?i:c}function Ut(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function se(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function G(){var e=bt;return bt<<=1,(bt&4194048)===0&&(bt=256),e}function Rt(){var e=Nt;return Nt<<=1,(Nt&62914560)===0&&(Nt=4194304),e}function wt(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function It(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Tt(e,i,a,o,c,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,O=e.expirationTimes,Q=e.hiddenUpdates;for(a=S&~a;0<a;){var ft=31-zt(a),_t=1<<ft;b[ft]=0,O[ft]=-1;var tt=Q[ft];if(tt!==null)for(Q[ft]=null,ft=0;ft<tt.length;ft++){var it=tt[ft];it!==null&&(it.lane&=-536870913)}a&=~_t}o!==0&&gt(e,o,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~i))}function gt(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-zt(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function kt(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var o=31-zt(a),c=1<<o;c&i|e[o]&i&&(e[o]|=i),a&=~c}}function re(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function we(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Me(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:_g(e.type))}function hi(e,i){var a=j.p;try{return j.p=e,i()}finally{j.p=a}}var un=Math.random().toString(36).slice(2),cn="__reactFiber$"+un,Qe="__reactProps$"+un,Ri="__reactContainer$"+un,Dr="__reactEvents$"+un,al="__reactListeners$"+un,Ur="__reactHandles$"+un,Hs="__reactResources$"+un,Ci="__reactMarker$"+un;function Lr(e){delete e[cn],delete e[Qe],delete e[Dr],delete e[al],delete e[Ur]}function Hi(e){var i=e[cn];if(i)return i;for(var a=e.parentNode;a;){if(i=a[Ri]||a[cn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=eg(e);e!==null;){if(a=e[cn])return a;e=eg(e)}return i}e=a,a=e.parentNode}return null}function fa(e){if(e=e[cn]||e[Ri]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function Ka(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(r(33))}function ha(e){var i=e[Hs];return i||(i=e[Hs]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function rn(e){e[Ci]=!0}var rl=new Set,sl={};function T(e,i){X(e,i),X(e+"Capture",i)}function X(e,i){for(sl[e]=i,e=0;e<i.length;e++)rl.add(i[e])}var rt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),st={},q={};function At(e){return _e.call(q,e)?!0:_e.call(st,e)?!1:rt.test(e)?q[e]=!0:(st[e]=!0,!1)}function Lt(e,i,a){if(At(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function Ft(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function Ot(e,i,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+o)}}var $t,ee;function Yt(e){if($t===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);$t=i&&i[1]||"",ee=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$t+e+ee}var ce=!1;function be(e,i){if(!e||ce)return"";ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(it){var tt=it}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(it){tt=it}e.call(_t.prototype)}}else{try{throw Error()}catch(it){tt=it}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(it){if(it&&tt&&typeof it.stack=="string")return[it.stack,tt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],b=f[1];if(S&&b){var O=S.split(`
`),Q=b.split(`
`);for(c=o=0;o<O.length&&!O[o].includes("DetermineComponentFrameRoot");)o++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(o===O.length||c===Q.length)for(o=O.length-1,c=Q.length-1;1<=o&&0<=c&&O[o]!==Q[c];)c--;for(;1<=o&&0<=c;o--,c--)if(O[o]!==Q[c]){if(o!==1||c!==1)do if(o--,c--,0>c||O[o]!==Q[c]){var ft=`
`+O[o].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=o&&0<=c);break}}}finally{ce=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Yt(a):""}function Ye(e){switch(e.tag){case 26:case 27:case 5:return Yt(e.type);case 16:return Yt("Lazy");case 13:return Yt("Suspense");case 19:return Yt("SuspenseList");case 0:case 15:return be(e.type,!1);case 11:return be(e.type.render,!1);case 1:return be(e.type,!0);case 31:return Yt("Activity");default:return""}}function Le(e){try{var i="";do i+=Ye(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function fe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qt(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function We(e){var i=Qt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),o=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return c.call(this)},set:function(S){o=""+S,f.call(this,S)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function ge(e){e._valueTracker||(e._valueTracker=We(e))}function Rn(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),o="";return e&&(o=Qt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(i.setValue(e),!0):!1}function di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Nn=/[\n"\\]/g;function gn(e){return e.replace(Nn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Fe(e,i,a,o,c,f,S,b){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),i!=null?S==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+fe(i)):e.value!==""+fe(i)&&(e.value=""+fe(i)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),i!=null?Cn(e,S,fe(i)):a!=null?Cn(e,S,fe(a)):o!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+fe(b):e.removeAttribute("name")}function On(e,i,a,o,c,f,S,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),i!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||i!=null))return;a=a!=null?""+fe(a):"",i=i!=null?""+fe(i):a,b||i===e.value||(e.value=i),e.defaultValue=i}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function Cn(e,i,a){i==="number"&&di(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Je(e,i,a,o){if(e=e.options,i){i={};for(var c=0;c<a.length;c++)i["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=i.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+fe(a),i=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}i!==null||e[c].disabled||(i=e[c])}i!==null&&(i.selected=!0)}}function Mn(e,i,a){if(i!=null&&(i=""+fe(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+fe(a):""}function Nr(e,i,a,o){if(i==null){if(o!=null){if(a!=null)throw Error(r(92));if(dt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),i=a}a=fe(i),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function zn(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var w0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kd(e,i,a){var o=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,a):typeof a!="number"||a===0||w0.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function Qd(e,i,a){if(i!=null&&typeof i!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in i)o=i[c],i.hasOwnProperty(c)&&a[c]!==o&&Kd(e,c,o)}else for(var f in i)i.hasOwnProperty(f)&&Kd(e,f,i[f])}function ec(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var D0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),U0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ol(e){return U0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var nc=null;function ic(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Or=null,Pr=null;function Jd(e){var i=fa(e);if(i&&(e=i.stateNode)){var a=e[Qe]||null;t:switch(e=i.stateNode,i.type){case"input":if(Fe(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+gn(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var o=a[i];if(o!==e&&o.form===e.form){var c=o[Qe]||null;if(!c)throw Error(r(90));Fe(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(i=0;i<a.length;i++)o=a[i],o.form===e.form&&Rn(o)}break t;case"textarea":Mn(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&Je(e,!!a.multiple,i,!1)}}}var ac=!1;function $d(e,i,a){if(ac)return e(i,a);ac=!0;try{var o=e(i);return o}finally{if(ac=!1,(Or!==null||Pr!==null)&&(Yl(),Or&&(i=Or,e=Pr,Pr=Or=null,Jd(i),e)))for(i=0;i<e.length;i++)Jd(e[i])}}function Vs(e,i){var a=e.stateNode;if(a===null)return null;var o=a[Qe]||null;if(o===null)return null;a=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,i,typeof a));return a}var Vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rc=!1;if(Vi)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){rc=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{rc=!1}var da=null,sc=null,ll=null;function tp(){if(ll)return ll;var e,i=sc,a=i.length,o,c="value"in da?da.value:da.textContent,f=c.length;for(e=0;e<a&&i[e]===c[e];e++);var S=a-e;for(o=1;o<=S&&i[a-o]===c[f-o];o++);return ll=c.slice(e,1<o?1-o:void 0)}function ul(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function cl(){return!0}function ep(){return!1}function In(e){function i(a,o,c,f,S){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?cl:ep,this.isPropagationStopped=ep,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),i}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fl=In(Qa),ks=_({},Qa,{view:0,detail:0}),L0=In(ks),oc,lc,Xs,hl=_({},ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xs&&(Xs&&e.type==="mousemove"?(oc=e.screenX-Xs.screenX,lc=e.screenY-Xs.screenY):lc=oc=0,Xs=e),oc)},movementY:function(e){return"movementY"in e?e.movementY:lc}}),np=In(hl),N0=_({},hl,{dataTransfer:0}),O0=In(N0),P0=_({},ks,{relatedTarget:0}),uc=In(P0),B0=_({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),z0=In(B0),I0=_({},Qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),F0=In(I0),H0=_({},Qa,{data:0}),ip=In(H0),V0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},G0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},k0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X0(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=k0[e])?!!i[e]:!1}function cc(){return X0}var W0=_({},ks,{key:function(e){if(e.key){var i=V0[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=ul(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?G0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cc,charCode:function(e){return e.type==="keypress"?ul(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ul(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Y0=In(W0),q0=_({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ap=In(q0),Z0=_({},ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cc}),j0=In(Z0),K0=_({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Q0=In(K0),J0=_({},hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$0=In(J0),tx=_({},Qa,{newState:0,oldState:0}),ex=In(tx),nx=[9,13,27,32],fc=Vi&&"CompositionEvent"in window,Ws=null;Vi&&"documentMode"in document&&(Ws=document.documentMode);var ix=Vi&&"TextEvent"in window&&!Ws,rp=Vi&&(!fc||Ws&&8<Ws&&11>=Ws),sp=" ",op=!1;function lp(e,i){switch(e){case"keyup":return nx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function up(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Br=!1;function ax(e,i){switch(e){case"compositionend":return up(i);case"keypress":return i.which!==32?null:(op=!0,sp);case"textInput":return e=i.data,e===sp&&op?null:e;default:return null}}function rx(e,i){if(Br)return e==="compositionend"||!fc&&lp(e,i)?(e=tp(),ll=sc=da=null,Br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return rp&&i.locale!=="ko"?null:i.data;default:return null}}var sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cp(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!sx[e.type]:i==="textarea"}function fp(e,i,a,o){Or?Pr?Pr.push(o):Pr=[o]:Or=o,i=Jl(i,"onChange"),0<i.length&&(a=new fl("onChange","change",null,a,o),e.push({event:a,listeners:i}))}var Ys=null,qs=null;function ox(e){W_(e,0)}function dl(e){var i=Ka(e);if(Rn(i))return e}function hp(e,i){if(e==="change")return i}var dp=!1;if(Vi){var hc;if(Vi){var dc="oninput"in document;if(!dc){var pp=document.createElement("div");pp.setAttribute("oninput","return;"),dc=typeof pp.oninput=="function"}hc=dc}else hc=!1;dp=hc&&(!document.documentMode||9<document.documentMode)}function mp(){Ys&&(Ys.detachEvent("onpropertychange",_p),qs=Ys=null)}function _p(e){if(e.propertyName==="value"&&dl(qs)){var i=[];fp(i,qs,e,ic(e)),$d(ox,i)}}function lx(e,i,a){e==="focusin"?(mp(),Ys=i,qs=a,Ys.attachEvent("onpropertychange",_p)):e==="focusout"&&mp()}function ux(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return dl(qs)}function cx(e,i){if(e==="click")return dl(i)}function fx(e,i){if(e==="input"||e==="change")return dl(i)}function hx(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Yn=typeof Object.is=="function"?Object.is:hx;function Zs(e,i){if(Yn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),o=Object.keys(i);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!_e.call(i,c)||!Yn(e[c],i[c]))return!1}return!0}function gp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vp(e,i){var a=gp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=i&&o>=i)return{node:a,offset:i-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=gp(a)}}function xp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?xp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Sp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=di(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=di(e.document)}return i}function pc(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var dx=Vi&&"documentMode"in document&&11>=document.documentMode,zr=null,mc=null,js=null,_c=!1;function yp(e,i,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_c||zr==null||zr!==di(o)||(o=zr,"selectionStart"in o&&pc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),js&&Zs(js,o)||(js=o,o=Jl(mc,"onSelect"),0<o.length&&(i=new fl("onSelect","select",null,i,a),e.push({event:i,listeners:o}),i.target=zr)))}function Ja(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var Ir={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},gc={},Ep={};Vi&&(Ep=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function $a(e){if(gc[e])return gc[e];if(!Ir[e])return e;var i=Ir[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in Ep)return gc[e]=i[a];return e}var Mp=$a("animationend"),bp=$a("animationiteration"),Tp=$a("animationstart"),px=$a("transitionrun"),mx=$a("transitionstart"),_x=$a("transitioncancel"),Ap=$a("transitionend"),Rp=new Map,vc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vc.push("scrollEnd");function pi(e,i){Rp.set(e,i),T(i,[e])}var Cp=new WeakMap;function ni(e,i){if(typeof e=="object"&&e!==null){var a=Cp.get(e);return a!==void 0?a:(i={value:e,source:i,stack:Le(i)},Cp.set(e,i),i)}return{value:e,source:i,stack:Le(i)}}var ii=[],Fr=0,xc=0;function pl(){for(var e=Fr,i=xc=Fr=0;i<e;){var a=ii[i];ii[i++]=null;var o=ii[i];ii[i++]=null;var c=ii[i];ii[i++]=null;var f=ii[i];if(ii[i++]=null,o!==null&&c!==null){var S=o.pending;S===null?c.next=c:(c.next=S.next,S.next=c),o.pending=c}f!==0&&wp(a,c,f)}}function ml(e,i,a,o){ii[Fr++]=e,ii[Fr++]=i,ii[Fr++]=a,ii[Fr++]=o,xc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Sc(e,i,a,o){return ml(e,i,a,o),_l(e)}function Hr(e,i){return ml(e,null,null,i),_l(e)}function wp(e,i,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&i!==null&&(c=31-zt(a),e=f.hiddenUpdates,o=e[c],o===null?e[c]=[i]:o.push(i),i.lane=a|536870912),f):null}function _l(e){if(50<yo)throw yo=0,Rf=null,Error(r(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Vr={};function gx(e,i,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,i,a,o){return new gx(e,i,a,o)}function yc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gi(e,i){var a=e.alternate;return a===null?(a=qn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Dp(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function gl(e,i,a,o,c,f){var S=0;if(o=e,typeof e=="function")yc(e)&&(S=1);else if(typeof e=="string")S=xS(e,a,Dt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=qn(31,a,i,c),e.elementType=w,e.lanes=f,e;case A:return tr(a.children,c,f,i);case R:S=8,c|=24;break;case y:return e=qn(12,a,i,c|2),e.elementType=y,e.lanes=f,e;case z:return e=qn(13,a,i,c),e.elementType=z,e.lanes=f,e;case k:return e=qn(19,a,i,c),e.elementType=k,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v:case N:S=10;break t;case F:S=9;break t;case D:S=11;break t;case H:S=14;break t;case Z:S=16,o=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return i=qn(S,a,i,c),i.elementType=e,i.type=o,i.lanes=f,i}function tr(e,i,a,o){return e=qn(7,e,o,i),e.lanes=a,e}function Ec(e,i,a){return e=qn(6,e,null,i),e.lanes=a,e}function Mc(e,i,a){return i=qn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Gr=[],kr=0,vl=null,xl=0,ai=[],ri=0,er=null,ki=1,Xi="";function nr(e,i){Gr[kr++]=xl,Gr[kr++]=vl,vl=e,xl=i}function Up(e,i,a){ai[ri++]=ki,ai[ri++]=Xi,ai[ri++]=er,er=e;var o=ki;e=Xi;var c=32-zt(o)-1;o&=~(1<<c),a+=1;var f=32-zt(i)+c;if(30<f){var S=c-c%5;f=(o&(1<<S)-1).toString(32),o>>=S,c-=S,ki=1<<32-zt(i)+c|a<<c|o,Xi=f+e}else ki=1<<f|a<<c|o,Xi=e}function bc(e){e.return!==null&&(nr(e,1),Up(e,1,0))}function Tc(e){for(;e===vl;)vl=Gr[--kr],Gr[kr]=null,xl=Gr[--kr],Gr[kr]=null;for(;e===er;)er=ai[--ri],ai[ri]=null,Xi=ai[--ri],ai[ri]=null,ki=ai[--ri],ai[ri]=null}var Pn=null,$e=null,Re=!1,ir=null,wi=!1,Ac=Error(r(519));function ar(e){var i=Error(r(418,""));throw Js(ni(i,e)),Ac}function Lp(e){var i=e.stateNode,a=e.type,o=e.memoizedProps;switch(i[cn]=e,i[Qe]=o,a){case"dialog":xe("cancel",i),xe("close",i);break;case"iframe":case"object":case"embed":xe("load",i);break;case"video":case"audio":for(a=0;a<Mo.length;a++)xe(Mo[a],i);break;case"source":xe("error",i);break;case"img":case"image":case"link":xe("error",i),xe("load",i);break;case"details":xe("toggle",i);break;case"input":xe("invalid",i),On(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),ge(i);break;case"select":xe("invalid",i);break;case"textarea":xe("invalid",i),Nr(i,o.value,o.defaultValue,o.children),ge(i)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||o.suppressHydrationWarning===!0||j_(i.textContent,a)?(o.popover!=null&&(xe("beforetoggle",i),xe("toggle",i)),o.onScroll!=null&&xe("scroll",i),o.onScrollEnd!=null&&xe("scrollend",i),o.onClick!=null&&(i.onclick=$l),i=!0):i=!1,i||ar(e)}function Np(e){for(Pn=e.return;Pn;)switch(Pn.tag){case 5:case 13:wi=!1;return;case 27:case 3:wi=!0;return;default:Pn=Pn.return}}function Ks(e){if(e!==Pn)return!1;if(!Re)return Np(e),Re=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||kf(e.type,e.memoizedProps)),a=!a),a&&$e&&ar(e),Np(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){$e=_i(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}$e=null}}else i===27?(i=$e,wa(e.type)?(e=qf,qf=null,$e=e):$e=i):$e=Pn?_i(e.stateNode.nextSibling):null;return!0}function Qs(){$e=Pn=null,Re=!1}function Op(){var e=ir;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),ir=null),e}function Js(e){ir===null?ir=[e]:ir.push(e)}var Rc=J(null),rr=null,Wi=null;function pa(e,i,a){Et(Rc,i._currentValue),i._currentValue=a}function Yi(e){e._currentValue=Rc.current,St(Rc)}function Cc(e,i,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===a)break;e=e.return}}function wc(e,i,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var O=0;O<i.length;O++)if(b.context===i[O]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),Cc(f.return,a,e),o||(S=null);break t}f=b.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Cc(S,a,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function $s(e,i,a,o){e=null;for(var c=i,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var b=c.type;Yn(c.pendingProps.value,S.value)||(e!==null?e.push(b):e=[b])}}else if(c===Mt.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(wo):e=[wo])}c=c.return}e!==null&&wc(i,e,a,o),i.flags|=262144}function Sl(e){for(e=e.firstContext;e!==null;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sr(e){rr=e,Wi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return Pp(rr,e)}function yl(e,i){return rr===null&&sr(e),Pp(e,i)}function Pp(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Wi===null){if(e===null)throw Error(r(308));Wi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Wi=Wi.next=i;return a}var vx=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},xx=s.unstable_scheduleCallback,Sx=s.unstable_NormalPriority,fn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Dc(){return{controller:new vx,data:new Map,refCount:0}}function to(e){e.refCount--,e.refCount===0&&xx(Sx,function(){e.controller.abort()})}var eo=null,Uc=0,Xr=0,Wr=null;function yx(e,i){if(eo===null){var a=eo=[];Uc=0,Xr=Of(),Wr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Uc++,i.then(Bp,Bp),i}function Bp(){if(--Uc===0&&eo!==null){Wr!==null&&(Wr.status="fulfilled");var e=eo;eo=null,Xr=0,Wr=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function Ex(e,i){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var c=0;c<a.length;c++)(0,a[c])(i)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var zp=P.S;P.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&yx(e,i),zp!==null&&zp(e,i)};var or=J(null);function Lc(){var e=or.current;return e!==null?e:ke.pooledCache}function El(e,i){i===null?Et(or,or.current):Et(or,i.pool)}function Ip(){var e=Lc();return e===null?null:{parent:fn._currentValue,pool:e}}var no=Error(r(460)),Fp=Error(r(474)),Ml=Error(r(542)),Nc={then:function(){}};function Hp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function bl(){}function Vp(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(bl,bl),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,kp(e),e;default:if(typeof i.status=="string")i.then(bl,bl);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var c=i;c.status="fulfilled",c.value=o}},function(o){if(i.status==="pending"){var c=i;c.status="rejected",c.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,kp(e),e}throw io=i,no}}var io=null;function Gp(){if(io===null)throw Error(r(459));var e=io;return io=null,e}function kp(e){if(e===no||e===Ml)throw Error(r(483))}var ma=!1;function Oc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pc(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _a(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ga(e,i,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(De&2)!==0){var c=o.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),o.pending=i,i=_l(e),wp(e,null,a),i}return ml(e,o,i,a),_l(e)}function ao(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,kt(e,a)}}function Bc(e,i){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=i:f=f.next=i}else c=f=i;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var zc=!1;function ro(){if(zc){var e=Wr;if(e!==null)throw e}}function so(e,i,a,o){zc=!1;var c=e.updateQueue;ma=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var O=b,Q=O.next;O.next=null,S===null?f=Q:S.next=Q,S=O;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,b=ft.lastBaseUpdate,b!==S&&(b===null?ft.firstBaseUpdate=Q:b.next=Q,ft.lastBaseUpdate=O))}if(f!==null){var _t=c.baseState;S=0,ft=Q=O=null,b=f;do{var tt=b.lane&-536870913,it=tt!==b.lane;if(it?(ye&tt)===tt:(o&tt)===tt){tt!==0&&tt===Xr&&(zc=!0),ft!==null&&(ft=ft.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var ie=e,te=b;tt=i;var Pe=a;switch(te.tag){case 1:if(ie=te.payload,typeof ie=="function"){_t=ie.call(Pe,_t,tt);break t}_t=ie;break t;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=te.payload,tt=typeof ie=="function"?ie.call(Pe,_t,tt):ie,tt==null)break t;_t=_({},_t,tt);break t;case 2:ma=!0}}tt=b.callback,tt!==null&&(e.flags|=64,it&&(e.flags|=8192),it=c.callbacks,it===null?c.callbacks=[tt]:it.push(tt))}else it={lane:tt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ft===null?(Q=ft=it,O=_t):ft=ft.next=it,S|=tt;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;it=b,b=it.next,it.next=null,c.lastBaseUpdate=it,c.shared.pending=null}}while(!0);ft===null&&(O=_t),c.baseState=O,c.firstBaseUpdate=Q,c.lastBaseUpdate=ft,f===null&&(c.shared.lanes=0),Ta|=S,e.lanes=S,e.memoizedState=_t}}function Xp(e,i){if(typeof e!="function")throw Error(r(191,e));e.call(i)}function Wp(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Xp(a[e],i)}var Yr=J(null),Tl=J(0);function Yp(e,i){e=$i,Et(Tl,e),Et(Yr,i),$i=e|i.baseLanes}function Ic(){Et(Tl,$i),Et(Yr,Yr.current)}function Fc(){$i=Tl.current,St(Yr),St(Tl)}var va=0,de=null,Ne=null,sn=null,Al=!1,qr=!1,lr=!1,Rl=0,oo=0,Zr=null,Mx=0;function en(){throw Error(r(321))}function Hc(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!Yn(e[a],i[a]))return!1;return!0}function Vc(e,i,a,o,c,f){return va=f,de=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,P.H=e===null||e.memoizedState===null?wm:Dm,lr=!1,f=a(o,c),lr=!1,qr&&(f=Zp(i,a,o,c)),qp(e),f}function qp(e){P.H=Nl;var i=Ne!==null&&Ne.next!==null;if(va=0,sn=Ne=de=null,Al=!1,oo=0,Zr=null,i)throw Error(r(300));e===null||vn||(e=e.dependencies,e!==null&&Sl(e)&&(vn=!0))}function Zp(e,i,a,o){de=e;var c=0;do{if(qr&&(Zr=null),oo=0,qr=!1,25<=c)throw Error(r(301));if(c+=1,sn=Ne=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Dx,f=i(a,o)}while(qr);return f}function bx(){var e=P.H,i=e.useState()[0];return i=typeof i.then=="function"?lo(i):i,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(de.flags|=1024),i}function Gc(){var e=Rl!==0;return Rl=0,e}function kc(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function Xc(e){if(Al){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Al=!1}va=0,sn=Ne=de=null,qr=!1,oo=Rl=0,Zr=null}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?de.memoizedState=sn=e:sn=sn.next=e,sn}function on(){if(Ne===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var i=sn===null?de.memoizedState:sn.next;if(i!==null)sn=i,Ne=e;else{if(e===null)throw de.alternate===null?Error(r(467)):Error(r(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},sn===null?de.memoizedState=sn=e:sn=sn.next=e}return sn}function Wc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function lo(e){var i=oo;return oo+=1,Zr===null&&(Zr=[]),e=Vp(Zr,e,i),i=de,(sn===null?i.memoizedState:sn.next)===null&&(i=i.alternate,P.H=i===null||i.memoizedState===null?wm:Dm),e}function Cl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return lo(e);if(e.$$typeof===N)return wn(e)}throw Error(r(438,String(e)))}function Yc(e){var i=null,a=de.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var o=de.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(c){return c.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Wc(),de.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),o=0;o<e;o++)a[o]=C;return i.index++,a}function qi(e,i){return typeof i=="function"?i(e):i}function wl(e){var i=on();return qc(i,Ne,e)}function qc(e,i,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=e.baseQueue,f=o.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}i.baseQueue=c=f,o.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{i=c.next;var b=S=null,O=null,Q=i,ft=!1;do{var _t=Q.lane&-536870913;if(_t!==Q.lane?(ye&_t)===_t:(va&_t)===_t){var tt=Q.revertLane;if(tt===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),_t===Xr&&(ft=!0);else if((va&tt)===tt){Q=Q.next,tt===Xr&&(ft=!0);continue}else _t={lane:0,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},O===null?(b=O=_t,S=f):O=O.next=_t,de.lanes|=tt,Ta|=tt;_t=Q.action,lr&&a(f,_t),f=Q.hasEagerState?Q.eagerState:a(f,_t)}else tt={lane:_t,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},O===null?(b=O=tt,S=f):O=O.next=tt,de.lanes|=_t,Ta|=_t;Q=Q.next}while(Q!==null&&Q!==i);if(O===null?S=f:O.next=b,!Yn(f,e.memoizedState)&&(vn=!0,ft&&(a=Wr,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=O,o.lastRenderedState=f}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Zc(e){var i=on(),a=i.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,f=i.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=e(f,S.action),S=S.next;while(S!==c);Yn(f,i.memoizedState)||(vn=!0),i.memoizedState=f,i.baseQueue===null&&(i.baseState=f),a.lastRenderedState=f}return[f,o]}function jp(e,i,a){var o=de,c=on(),f=Re;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=i();var S=!Yn((Ne||c).memoizedState,a);S&&(c.memoizedState=a,vn=!0),c=c.queue;var b=Jp.bind(null,o,c,e);if(uo(2048,8,b,[e]),c.getSnapshot!==i||S||sn!==null&&sn.memoizedState.tag&1){if(o.flags|=2048,jr(9,Dl(),Qp.bind(null,o,c,a,i),null),ke===null)throw Error(r(349));f||(va&124)!==0||Kp(o,i,a)}return a}function Kp(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=de.updateQueue,i===null?(i=Wc(),de.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function Qp(e,i,a,o){i.value=a,i.getSnapshot=o,$p(i)&&tm(e)}function Jp(e,i,a){return a(function(){$p(i)&&tm(e)})}function $p(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!Yn(e,a)}catch{return!0}}function tm(e){var i=Hr(e,2);i!==null&&Jn(i,e,2)}function jc(e){var i=Fn();if(typeof e=="function"){var a=e;if(e=a(),lr){ot(!0);try{a()}finally{ot(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:e},i}function em(e,i,a,o){return e.baseState=a,qc(e,Ne,typeof o=="function"?o:qi)}function Tx(e,i,a,o,c){if(Ll(e))throw Error(r(485));if(e=i.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};P.T!==null?a(!0):f.isTransition=!1,o(f),a=i.pending,a===null?(f.next=i.pending=f,nm(i,f)):(f.next=a.next,i.pending=a.next=f)}}function nm(e,i){var a=i.action,o=i.payload,c=e.state;if(i.isTransition){var f=P.T,S={};P.T=S;try{var b=a(c,o),O=P.S;O!==null&&O(S,b),im(e,i,b)}catch(Q){Kc(e,i,Q)}finally{P.T=f}}else try{f=a(c,o),im(e,i,f)}catch(Q){Kc(e,i,Q)}}function im(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){am(e,i,o)},function(o){return Kc(e,i,o)}):am(e,i,a)}function am(e,i,a){i.status="fulfilled",i.value=a,rm(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,nm(e,a)))}function Kc(e,i,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=a,rm(i),i=i.next;while(i!==o)}e.action=null}function rm(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function sm(e,i){return i}function om(e,i){if(Re){var a=ke.formState;if(a!==null){t:{var o=de;if(Re){if($e){e:{for(var c=$e,f=wi;c.nodeType!==8;){if(!f){c=null;break e}if(c=_i(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){$e=_i(c.nextSibling),o=c.data==="F!";break t}}ar(o)}o=!1}o&&(i=a[0])}}return a=Fn(),a.memoizedState=a.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sm,lastRenderedState:i},a.queue=o,a=Am.bind(null,de,o),o.dispatch=a,o=jc(!1),f=ef.bind(null,de,!1,o.queue),o=Fn(),c={state:i,dispatch:null,action:e,pending:null},o.queue=c,a=Tx.bind(null,de,c,f,a),c.dispatch=a,o.memoizedState=e,[i,a,!1]}function lm(e){var i=on();return um(i,Ne,e)}function um(e,i,a){if(i=qc(e,i,sm)[0],e=wl(qi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=lo(i)}catch(S){throw S===no?Ml:S}else o=i;i=on();var c=i.queue,f=c.dispatch;return a!==i.memoizedState&&(de.flags|=2048,jr(9,Dl(),Ax.bind(null,c,a),null)),[o,f,e]}function Ax(e,i){e.action=i}function cm(e){var i=on(),a=Ne;if(a!==null)return um(i,a,e);on(),i=i.memoizedState,a=on();var o=a.queue.dispatch;return a.memoizedState=e,[i,o,!1]}function jr(e,i,a,o){return e={tag:e,create:a,deps:o,inst:i,next:null},i=de.updateQueue,i===null&&(i=Wc(),de.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,i.lastEffect=e),e}function Dl(){return{destroy:void 0,resource:void 0}}function fm(){return on().memoizedState}function Ul(e,i,a,o){var c=Fn();o=o===void 0?null:o,de.flags|=e,c.memoizedState=jr(1|i,Dl(),a,o)}function uo(e,i,a,o){var c=on();o=o===void 0?null:o;var f=c.memoizedState.inst;Ne!==null&&o!==null&&Hc(o,Ne.memoizedState.deps)?c.memoizedState=jr(i,f,a,o):(de.flags|=e,c.memoizedState=jr(1|i,f,a,o))}function hm(e,i){Ul(8390656,8,e,i)}function dm(e,i){uo(2048,8,e,i)}function pm(e,i){return uo(4,2,e,i)}function mm(e,i){return uo(4,4,e,i)}function _m(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function gm(e,i,a){a=a!=null?a.concat([e]):null,uo(4,4,_m.bind(null,i,e),a)}function Qc(){}function vm(e,i){var a=on();i=i===void 0?null:i;var o=a.memoizedState;return i!==null&&Hc(i,o[1])?o[0]:(a.memoizedState=[e,i],e)}function xm(e,i){var a=on();i=i===void 0?null:i;var o=a.memoizedState;if(i!==null&&Hc(i,o[1]))return o[0];if(o=e(),lr){ot(!0);try{e()}finally{ot(!1)}}return a.memoizedState=[o,i],o}function Jc(e,i,a){return a===void 0||(va&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=E_(),de.lanes|=e,Ta|=e,a)}function Sm(e,i,a,o){return Yn(a,i)?a:Yr.current!==null?(e=Jc(e,a,o),Yn(e,i)||(vn=!0),e):(va&42)===0?(vn=!0,e.memoizedState=a):(e=E_(),de.lanes|=e,Ta|=e,i)}function ym(e,i,a,o,c){var f=j.p;j.p=f!==0&&8>f?f:8;var S=P.T,b={};P.T=b,ef(e,!1,i,a);try{var O=c(),Q=P.S;if(Q!==null&&Q(b,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var ft=Ex(O,o);co(e,i,ft,Qn(e))}else co(e,i,o,Qn(e))}catch(_t){co(e,i,{then:function(){},status:"rejected",reason:_t},Qn())}finally{j.p=f,P.T=S}}function Rx(){}function $c(e,i,a,o){if(e.tag!==5)throw Error(r(476));var c=Em(e).queue;ym(e,c,i,Y,a===null?Rx:function(){return Mm(e),a(o)})}function Em(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:Y},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Mm(e){var i=Em(e).next.queue;co(e,i,{},Qn())}function tf(){return wn(wo)}function bm(){return on().memoizedState}function Tm(){return on().memoizedState}function Cx(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=Qn();e=_a(a);var o=ga(i,e,a);o!==null&&(Jn(o,i,a),ao(o,i,a)),i={cache:Dc()},e.payload=i;return}i=i.return}}function wx(e,i,a){var o=Qn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ll(e)?Rm(i,a):(a=Sc(e,i,a,o),a!==null&&(Jn(a,e,o),Cm(a,i,o)))}function Am(e,i,a){var o=Qn();co(e,i,a,o)}function co(e,i,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ll(e))Rm(i,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=i.lastRenderedReducer,f!==null))try{var S=i.lastRenderedState,b=f(S,a);if(c.hasEagerState=!0,c.eagerState=b,Yn(b,S))return ml(e,i,c,0),ke===null&&pl(),!1}catch{}finally{}if(a=Sc(e,i,c,o),a!==null)return Jn(a,e,o),Cm(a,i,o),!0}return!1}function ef(e,i,a,o){if(o={lane:2,revertLane:Of(),action:o,hasEagerState:!1,eagerState:null,next:null},Ll(e)){if(i)throw Error(r(479))}else i=Sc(e,a,o,2),i!==null&&Jn(i,e,2)}function Ll(e){var i=e.alternate;return e===de||i!==null&&i===de}function Rm(e,i){qr=Al=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function Cm(e,i,a){if((a&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,kt(e,a)}}var Nl={readContext:wn,use:Cl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en},wm={readContext:wn,use:Cl,useCallback:function(e,i){return Fn().memoizedState=[e,i===void 0?null:i],e},useContext:wn,useEffect:hm,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Ul(4194308,4,_m.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Ul(4194308,4,e,i)},useInsertionEffect:function(e,i){Ul(4,2,e,i)},useMemo:function(e,i){var a=Fn();i=i===void 0?null:i;var o=e();if(lr){ot(!0);try{e()}finally{ot(!1)}}return a.memoizedState=[o,i],o},useReducer:function(e,i,a){var o=Fn();if(a!==void 0){var c=a(i);if(lr){ot(!0);try{a(i)}finally{ot(!1)}}}else c=i;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=wx.bind(null,de,e),[o.memoizedState,e]},useRef:function(e){var i=Fn();return e={current:e},i.memoizedState=e},useState:function(e){e=jc(e);var i=e.queue,a=Am.bind(null,de,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:Qc,useDeferredValue:function(e,i){var a=Fn();return Jc(a,e,i)},useTransition:function(){var e=jc(!1);return e=ym.bind(null,de,e.queue,!0,!1),Fn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var o=de,c=Fn();if(Re){if(a===void 0)throw Error(r(407));a=a()}else{if(a=i(),ke===null)throw Error(r(349));(ye&124)!==0||Kp(o,i,a)}c.memoizedState=a;var f={value:a,getSnapshot:i};return c.queue=f,hm(Jp.bind(null,o,f,e),[e]),o.flags|=2048,jr(9,Dl(),Qp.bind(null,o,f,a,i),null),a},useId:function(){var e=Fn(),i=ke.identifierPrefix;if(Re){var a=Xi,o=ki;a=(o&~(1<<32-zt(o)-1)).toString(32)+a,i="«"+i+"R"+a,a=Rl++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=Mx++,i="«"+i+"r"+a.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:tf,useFormState:om,useActionState:om,useOptimistic:function(e){var i=Fn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=ef.bind(null,de,!0,a),a.dispatch=i,[e,i]},useMemoCache:Yc,useCacheRefresh:function(){return Fn().memoizedState=Cx.bind(null,de)}},Dm={readContext:wn,use:Cl,useCallback:vm,useContext:wn,useEffect:dm,useImperativeHandle:gm,useInsertionEffect:pm,useLayoutEffect:mm,useMemo:xm,useReducer:wl,useRef:fm,useState:function(){return wl(qi)},useDebugValue:Qc,useDeferredValue:function(e,i){var a=on();return Sm(a,Ne.memoizedState,e,i)},useTransition:function(){var e=wl(qi)[0],i=on().memoizedState;return[typeof e=="boolean"?e:lo(e),i]},useSyncExternalStore:jp,useId:bm,useHostTransitionStatus:tf,useFormState:lm,useActionState:lm,useOptimistic:function(e,i){var a=on();return em(a,Ne,e,i)},useMemoCache:Yc,useCacheRefresh:Tm},Dx={readContext:wn,use:Cl,useCallback:vm,useContext:wn,useEffect:dm,useImperativeHandle:gm,useInsertionEffect:pm,useLayoutEffect:mm,useMemo:xm,useReducer:Zc,useRef:fm,useState:function(){return Zc(qi)},useDebugValue:Qc,useDeferredValue:function(e,i){var a=on();return Ne===null?Jc(a,e,i):Sm(a,Ne.memoizedState,e,i)},useTransition:function(){var e=Zc(qi)[0],i=on().memoizedState;return[typeof e=="boolean"?e:lo(e),i]},useSyncExternalStore:jp,useId:bm,useHostTransitionStatus:tf,useFormState:cm,useActionState:cm,useOptimistic:function(e,i){var a=on();return Ne!==null?em(a,Ne,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Yc,useCacheRefresh:Tm},Kr=null,fo=0;function Ol(e){var i=fo;return fo+=1,Kr===null&&(Kr=[]),Vp(Kr,e,i)}function ho(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Pl(e,i){throw i.$$typeof===g?Error(r(525)):(e=Object.prototype.toString.call(i),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Um(e){var i=e._init;return i(e._payload)}function Lm(e){function i(W,V){if(e){var K=W.deletions;K===null?(W.deletions=[V],W.flags|=16):K.push(V)}}function a(W,V){if(!e)return null;for(;V!==null;)i(W,V),V=V.sibling;return null}function o(W){for(var V=new Map;W!==null;)W.key!==null?V.set(W.key,W):V.set(W.index,W),W=W.sibling;return V}function c(W,V){return W=Gi(W,V),W.index=0,W.sibling=null,W}function f(W,V,K){return W.index=K,e?(K=W.alternate,K!==null?(K=K.index,K<V?(W.flags|=67108866,V):K):(W.flags|=67108866,V)):(W.flags|=1048576,V)}function S(W){return e&&W.alternate===null&&(W.flags|=67108866),W}function b(W,V,K,mt){return V===null||V.tag!==6?(V=Ec(K,W.mode,mt),V.return=W,V):(V=c(V,K),V.return=W,V)}function O(W,V,K,mt){var Gt=K.type;return Gt===A?ft(W,V,K.props.children,mt,K.key):V!==null&&(V.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===Z&&Um(Gt)===V.type)?(V=c(V,K.props),ho(V,K),V.return=W,V):(V=gl(K.type,K.key,K.props,null,W.mode,mt),ho(V,K),V.return=W,V)}function Q(W,V,K,mt){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=Mc(K,W.mode,mt),V.return=W,V):(V=c(V,K.children||[]),V.return=W,V)}function ft(W,V,K,mt,Gt){return V===null||V.tag!==7?(V=tr(K,W.mode,mt,Gt),V.return=W,V):(V=c(V,K),V.return=W,V)}function _t(W,V,K){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Ec(""+V,W.mode,K),V.return=W,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case x:return K=gl(V.type,V.key,V.props,null,W.mode,K),ho(K,V),K.return=W,K;case E:return V=Mc(V,W.mode,K),V.return=W,V;case Z:var mt=V._init;return V=mt(V._payload),_t(W,V,K)}if(dt(V)||lt(V))return V=tr(V,W.mode,K,null),V.return=W,V;if(typeof V.then=="function")return _t(W,Ol(V),K);if(V.$$typeof===N)return _t(W,yl(W,V),K);Pl(W,V)}return null}function tt(W,V,K,mt){var Gt=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Gt!==null?null:b(W,V,""+K,mt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case x:return K.key===Gt?O(W,V,K,mt):null;case E:return K.key===Gt?Q(W,V,K,mt):null;case Z:return Gt=K._init,K=Gt(K._payload),tt(W,V,K,mt)}if(dt(K)||lt(K))return Gt!==null?null:ft(W,V,K,mt,null);if(typeof K.then=="function")return tt(W,V,Ol(K),mt);if(K.$$typeof===N)return tt(W,V,yl(W,K),mt);Pl(W,K)}return null}function it(W,V,K,mt,Gt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return W=W.get(K)||null,b(V,W,""+mt,Gt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case x:return W=W.get(mt.key===null?K:mt.key)||null,O(V,W,mt,Gt);case E:return W=W.get(mt.key===null?K:mt.key)||null,Q(V,W,mt,Gt);case Z:var me=mt._init;return mt=me(mt._payload),it(W,V,K,mt,Gt)}if(dt(mt)||lt(mt))return W=W.get(K)||null,ft(V,W,mt,Gt,null);if(typeof mt.then=="function")return it(W,V,K,Ol(mt),Gt);if(mt.$$typeof===N)return it(W,V,K,yl(V,mt),Gt);Pl(V,mt)}return null}function ie(W,V,K,mt){for(var Gt=null,me=null,jt=V,ne=V=0,Sn=null;jt!==null&&ne<K.length;ne++){jt.index>ne?(Sn=jt,jt=null):Sn=jt.sibling;var Te=tt(W,jt,K[ne],mt);if(Te===null){jt===null&&(jt=Sn);break}e&&jt&&Te.alternate===null&&i(W,jt),V=f(Te,V,ne),me===null?Gt=Te:me.sibling=Te,me=Te,jt=Sn}if(ne===K.length)return a(W,jt),Re&&nr(W,ne),Gt;if(jt===null){for(;ne<K.length;ne++)jt=_t(W,K[ne],mt),jt!==null&&(V=f(jt,V,ne),me===null?Gt=jt:me.sibling=jt,me=jt);return Re&&nr(W,ne),Gt}for(jt=o(jt);ne<K.length;ne++)Sn=it(jt,W,ne,K[ne],mt),Sn!==null&&(e&&Sn.alternate!==null&&jt.delete(Sn.key===null?ne:Sn.key),V=f(Sn,V,ne),me===null?Gt=Sn:me.sibling=Sn,me=Sn);return e&&jt.forEach(function(Oa){return i(W,Oa)}),Re&&nr(W,ne),Gt}function te(W,V,K,mt){if(K==null)throw Error(r(151));for(var Gt=null,me=null,jt=V,ne=V=0,Sn=null,Te=K.next();jt!==null&&!Te.done;ne++,Te=K.next()){jt.index>ne?(Sn=jt,jt=null):Sn=jt.sibling;var Oa=tt(W,jt,Te.value,mt);if(Oa===null){jt===null&&(jt=Sn);break}e&&jt&&Oa.alternate===null&&i(W,jt),V=f(Oa,V,ne),me===null?Gt=Oa:me.sibling=Oa,me=Oa,jt=Sn}if(Te.done)return a(W,jt),Re&&nr(W,ne),Gt;if(jt===null){for(;!Te.done;ne++,Te=K.next())Te=_t(W,Te.value,mt),Te!==null&&(V=f(Te,V,ne),me===null?Gt=Te:me.sibling=Te,me=Te);return Re&&nr(W,ne),Gt}for(jt=o(jt);!Te.done;ne++,Te=K.next())Te=it(jt,W,ne,Te.value,mt),Te!==null&&(e&&Te.alternate!==null&&jt.delete(Te.key===null?ne:Te.key),V=f(Te,V,ne),me===null?Gt=Te:me.sibling=Te,me=Te);return e&&jt.forEach(function(US){return i(W,US)}),Re&&nr(W,ne),Gt}function Pe(W,V,K,mt){if(typeof K=="object"&&K!==null&&K.type===A&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case x:t:{for(var Gt=K.key;V!==null;){if(V.key===Gt){if(Gt=K.type,Gt===A){if(V.tag===7){a(W,V.sibling),mt=c(V,K.props.children),mt.return=W,W=mt;break t}}else if(V.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===Z&&Um(Gt)===V.type){a(W,V.sibling),mt=c(V,K.props),ho(mt,K),mt.return=W,W=mt;break t}a(W,V);break}else i(W,V);V=V.sibling}K.type===A?(mt=tr(K.props.children,W.mode,mt,K.key),mt.return=W,W=mt):(mt=gl(K.type,K.key,K.props,null,W.mode,mt),ho(mt,K),mt.return=W,W=mt)}return S(W);case E:t:{for(Gt=K.key;V!==null;){if(V.key===Gt)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){a(W,V.sibling),mt=c(V,K.children||[]),mt.return=W,W=mt;break t}else{a(W,V);break}else i(W,V);V=V.sibling}mt=Mc(K,W.mode,mt),mt.return=W,W=mt}return S(W);case Z:return Gt=K._init,K=Gt(K._payload),Pe(W,V,K,mt)}if(dt(K))return ie(W,V,K,mt);if(lt(K)){if(Gt=lt(K),typeof Gt!="function")throw Error(r(150));return K=Gt.call(K),te(W,V,K,mt)}if(typeof K.then=="function")return Pe(W,V,Ol(K),mt);if(K.$$typeof===N)return Pe(W,V,yl(W,K),mt);Pl(W,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,V!==null&&V.tag===6?(a(W,V.sibling),mt=c(V,K),mt.return=W,W=mt):(a(W,V),mt=Ec(K,W.mode,mt),mt.return=W,W=mt),S(W)):a(W,V)}return function(W,V,K,mt){try{fo=0;var Gt=Pe(W,V,K,mt);return Kr=null,Gt}catch(jt){if(jt===no||jt===Ml)throw jt;var me=qn(29,jt,null,W.mode);return me.lanes=mt,me.return=W,me}finally{}}}var Qr=Lm(!0),Nm=Lm(!1),si=J(null),Di=null;function xa(e){var i=e.alternate;Et(hn,hn.current&1),Et(si,e),Di===null&&(i===null||Yr.current!==null||i.memoizedState!==null)&&(Di=e)}function Om(e){if(e.tag===22){if(Et(hn,hn.current),Et(si,e),Di===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(Di=e)}}else Sa()}function Sa(){Et(hn,hn.current),Et(si,si.current)}function Zi(e){St(si),Di===e&&(Di=null),St(hn)}var hn=J(0);function Bl(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Yf(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function nf(e,i,a,o){i=e.memoizedState,a=a(o,i),a=a==null?i:_({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var af={enqueueSetState:function(e,i,a){e=e._reactInternals;var o=Qn(),c=_a(o);c.payload=i,a!=null&&(c.callback=a),i=ga(e,c,o),i!==null&&(Jn(i,e,o),ao(i,e,o))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var o=Qn(),c=_a(o);c.tag=1,c.payload=i,a!=null&&(c.callback=a),i=ga(e,c,o),i!==null&&(Jn(i,e,o),ao(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=Qn(),o=_a(a);o.tag=2,i!=null&&(o.callback=i),i=ga(e,o,a),i!==null&&(Jn(i,e,a),ao(i,e,a))}};function Pm(e,i,a,o,c,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,S):i.prototype&&i.prototype.isPureReactComponent?!Zs(a,o)||!Zs(c,f):!0}function Bm(e,i,a,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,o),i.state!==e&&af.enqueueReplaceState(i,i.state,null)}function ur(e,i){var a=i;if("ref"in i){a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}if(e=e.defaultProps){a===i&&(a=_({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var zl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function zm(e){zl(e)}function Im(e){console.error(e)}function Fm(e){zl(e)}function Il(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function Hm(e,i,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function rf(e,i,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){Il(e,i)},a}function Vm(e){return e=_a(e),e.tag=3,e}function Gm(e,i,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;e.payload=function(){return c(f)},e.callback=function(){Hm(i,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Hm(i,a,o),typeof c!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function Ux(e,i,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=a.alternate,i!==null&&$s(i,a,c,!0),a=si.current,a!==null){switch(a.tag){case 13:return Di===null?wf():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Nc?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([o]):i.add(o),Uf(e,o,c)),!1;case 22:return a.flags|=65536,o===Nc?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([o]):a.add(o)),Uf(e,o,c)),!1}throw Error(r(435,a.tag))}return Uf(e,o,c),wf(),!1}if(Re)return i=si.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=c,o!==Ac&&(e=Error(r(422),{cause:o}),Js(ni(e,a)))):(o!==Ac&&(i=Error(r(423),{cause:o}),Js(ni(i,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=ni(o,a),c=rf(e.stateNode,o,c),Bc(e,c),tn!==4&&(tn=2)),!1;var f=Error(r(520),{cause:o});if(f=ni(f,a),So===null?So=[f]:So.push(f),tn!==4&&(tn=2),i===null)return!0;o=ni(o,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=rf(a.stateNode,o,e),Bc(a,e),!1;case 1:if(i=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Aa===null||!Aa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Vm(c),Gm(c,e,a,o),Bc(a,c),!1}a=a.return}while(a!==null);return!1}var km=Error(r(461)),vn=!1;function bn(e,i,a,o){i.child=e===null?Nm(i,null,a,o):Qr(i,e.child,a,o)}function Xm(e,i,a,o,c){a=a.render;var f=i.ref;if("ref"in o){var S={};for(var b in o)b!=="ref"&&(S[b]=o[b])}else S=o;return sr(i),o=Vc(e,i,a,S,f,c),b=Gc(),e!==null&&!vn?(kc(e,i,c),ji(e,i,c)):(Re&&b&&bc(i),i.flags|=1,bn(e,i,o,c),i.child)}function Wm(e,i,a,o,c){if(e===null){var f=a.type;return typeof f=="function"&&!yc(f)&&f.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=f,Ym(e,i,f,o,c)):(e=gl(a.type,null,o,i,i.mode,c),e.ref=i.ref,e.return=i,i.child=e)}if(f=e.child,!df(e,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Zs,a(S,o)&&e.ref===i.ref)return ji(e,i,c)}return i.flags|=1,e=Gi(f,o),e.ref=i.ref,e.return=i,i.child=e}function Ym(e,i,a,o,c){if(e!==null){var f=e.memoizedProps;if(Zs(f,o)&&e.ref===i.ref)if(vn=!1,i.pendingProps=o=f,df(e,c))(e.flags&131072)!==0&&(vn=!0);else return i.lanes=e.lanes,ji(e,i,c)}return sf(e,i,a,o,c)}function qm(e,i,a){var o=i.pendingProps,c=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((i.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,e!==null){for(c=i.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;i.childLanes=f&~o}else i.childLanes=0,i.child=null;return Zm(e,i,o,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&El(i,f!==null?f.cachePool:null),f!==null?Yp(i,f):Ic(),Om(i);else return i.lanes=i.childLanes=536870912,Zm(e,i,f!==null?f.baseLanes|a:a,a)}else f!==null?(El(i,f.cachePool),Yp(i,f),Sa(),i.memoizedState=null):(e!==null&&El(i,null),Ic(),Sa());return bn(e,i,c,a),i.child}function Zm(e,i,a,o){var c=Lc();return c=c===null?null:{parent:fn._currentValue,pool:c},i.memoizedState={baseLanes:a,cachePool:c},e!==null&&El(i,null),Ic(),Om(i),e!==null&&$s(e,i,o,!0),null}function Fl(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function sf(e,i,a,o,c){return sr(i),a=Vc(e,i,a,o,void 0,c),o=Gc(),e!==null&&!vn?(kc(e,i,c),ji(e,i,c)):(Re&&o&&bc(i),i.flags|=1,bn(e,i,a,c),i.child)}function jm(e,i,a,o,c,f){return sr(i),i.updateQueue=null,a=Zp(i,o,a,c),qp(e),o=Gc(),e!==null&&!vn?(kc(e,i,f),ji(e,i,f)):(Re&&o&&bc(i),i.flags|=1,bn(e,i,a,f),i.child)}function Km(e,i,a,o,c){if(sr(i),i.stateNode===null){var f=Vr,S=a.contextType;typeof S=="object"&&S!==null&&(f=wn(S)),f=new a(o,f),i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=af,i.stateNode=f,f._reactInternals=i,f=i.stateNode,f.props=o,f.state=i.memoizedState,f.refs={},Oc(i),S=a.contextType,f.context=typeof S=="object"&&S!==null?wn(S):Vr,f.state=i.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(nf(i,a,S,o),f.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&af.enqueueReplaceState(f,f.state,null),so(i,o,f,c),ro(),f.state=i.memoizedState),typeof f.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){f=i.stateNode;var b=i.memoizedProps,O=ur(a,b);f.props=O;var Q=f.context,ft=a.contextType;S=Vr,typeof ft=="object"&&ft!==null&&(S=wn(ft));var _t=a.getDerivedStateFromProps;ft=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=i.pendingProps!==b,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||Q!==S)&&Bm(i,f,o,S),ma=!1;var tt=i.memoizedState;f.state=tt,so(i,o,f,c),ro(),Q=i.memoizedState,b||tt!==Q||ma?(typeof _t=="function"&&(nf(i,a,_t,o),Q=i.memoizedState),(O=ma||Pm(i,a,O,o,tt,Q,S))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(i.flags|=4194308)):(typeof f.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=Q),f.props=o,f.state=Q,f.context=S,o=O):(typeof f.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{f=i.stateNode,Pc(e,i),S=i.memoizedProps,ft=ur(a,S),f.props=ft,_t=i.pendingProps,tt=f.context,Q=a.contextType,O=Vr,typeof Q=="object"&&Q!==null&&(O=wn(Q)),b=a.getDerivedStateFromProps,(Q=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==_t||tt!==O)&&Bm(i,f,o,O),ma=!1,tt=i.memoizedState,f.state=tt,so(i,o,f,c),ro();var it=i.memoizedState;S!==_t||tt!==it||ma||e!==null&&e.dependencies!==null&&Sl(e.dependencies)?(typeof b=="function"&&(nf(i,a,b,o),it=i.memoizedState),(ft=ma||Pm(i,a,ft,o,tt,it,O)||e!==null&&e.dependencies!==null&&Sl(e.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,it,O),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,it,O)),typeof f.componentDidUpdate=="function"&&(i.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&tt===e.memoizedState||(i.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&tt===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=it),f.props=o,f.state=it,f.context=O,o=ft):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&tt===e.memoizedState||(i.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&tt===e.memoizedState||(i.flags|=1024),o=!1)}return f=o,Fl(e,i),o=(i.flags&128)!==0,f||o?(f=i.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),i.flags|=1,e!==null&&o?(i.child=Qr(i,e.child,null,c),i.child=Qr(i,null,a,c)):bn(e,i,a,c),i.memoizedState=f.state,e=i.child):e=ji(e,i,c),e}function Qm(e,i,a,o){return Qs(),i.flags|=256,bn(e,i,a,o),i.child}var of={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lf(e){return{baseLanes:e,cachePool:Ip()}}function uf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=oi),e}function Jm(e,i,a){var o=i.pendingProps,c=!1,f=(i.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(hn.current&2)!==0),S&&(c=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,e===null){if(Re){if(c?xa(i):Sa(),Re){var b=$e,O;if(O=b){t:{for(O=b,b=wi;O.nodeType!==8;){if(!b){b=null;break t}if(O=_i(O.nextSibling),O===null){b=null;break t}}b=O}b!==null?(i.memoizedState={dehydrated:b,treeContext:er!==null?{id:ki,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},O=qn(18,null,null,0),O.stateNode=b,O.return=i,i.child=O,Pn=i,$e=null,O=!0):O=!1}O||ar(i)}if(b=i.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Yf(b)?i.lanes=32:i.lanes=536870912,null;Zi(i)}return b=o.children,o=o.fallback,c?(Sa(),c=i.mode,b=Hl({mode:"hidden",children:b},c),o=tr(o,c,a,null),b.return=i,o.return=i,b.sibling=o,i.child=b,c=i.child,c.memoizedState=lf(a),c.childLanes=uf(e,S,a),i.memoizedState=of,o):(xa(i),cf(i,b))}if(O=e.memoizedState,O!==null&&(b=O.dehydrated,b!==null)){if(f)i.flags&256?(xa(i),i.flags&=-257,i=ff(e,i,a)):i.memoizedState!==null?(Sa(),i.child=e.child,i.flags|=128,i=null):(Sa(),c=o.fallback,b=i.mode,o=Hl({mode:"visible",children:o.children},b),c=tr(c,b,a,null),c.flags|=2,o.return=i,c.return=i,o.sibling=c,i.child=o,Qr(i,e.child,null,a),o=i.child,o.memoizedState=lf(a),o.childLanes=uf(e,S,a),i.memoizedState=of,i=c);else if(xa(i),Yf(b)){if(S=b.nextSibling&&b.nextSibling.dataset,S)var Q=S.dgst;S=Q,o=Error(r(419)),o.stack="",o.digest=S,Js({value:o,source:null,stack:null}),i=ff(e,i,a)}else if(vn||$s(e,i,a,!1),S=(a&e.childLanes)!==0,vn||S){if(S=ke,S!==null&&(o=a&-a,o=(o&42)!==0?1:re(o),o=(o&(S.suspendedLanes|a))!==0?0:o,o!==0&&o!==O.retryLane))throw O.retryLane=o,Hr(e,o),Jn(S,e,o),km;b.data==="$?"||wf(),i=ff(e,i,a)}else b.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=O.treeContext,$e=_i(b.nextSibling),Pn=i,Re=!0,ir=null,wi=!1,e!==null&&(ai[ri++]=ki,ai[ri++]=Xi,ai[ri++]=er,ki=e.id,Xi=e.overflow,er=i),i=cf(i,o.children),i.flags|=4096);return i}return c?(Sa(),c=o.fallback,b=i.mode,O=e.child,Q=O.sibling,o=Gi(O,{mode:"hidden",children:o.children}),o.subtreeFlags=O.subtreeFlags&65011712,Q!==null?c=Gi(Q,c):(c=tr(c,b,a,null),c.flags|=2),c.return=i,o.return=i,o.sibling=c,i.child=o,o=c,c=i.child,b=e.child.memoizedState,b===null?b=lf(a):(O=b.cachePool,O!==null?(Q=fn._currentValue,O=O.parent!==Q?{parent:Q,pool:Q}:O):O=Ip(),b={baseLanes:b.baseLanes|a,cachePool:O}),c.memoizedState=b,c.childLanes=uf(e,S,a),i.memoizedState=of,o):(xa(i),a=e.child,e=a.sibling,a=Gi(a,{mode:"visible",children:o.children}),a.return=i,a.sibling=null,e!==null&&(S=i.deletions,S===null?(i.deletions=[e],i.flags|=16):S.push(e)),i.child=a,i.memoizedState=null,a)}function cf(e,i){return i=Hl({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Hl(e,i){return e=qn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function ff(e,i,a){return Qr(i,e.child,null,a),e=cf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function $m(e,i,a){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),Cc(e.return,i,a)}function hf(e,i,a,o,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(f.isBackwards=i,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=c)}function t_(e,i,a){var o=i.pendingProps,c=o.revealOrder,f=o.tail;if(bn(e,i,o.children,a),o=hn.current,(o&2)!==0)o=o&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$m(e,a,i);else if(e.tag===19)$m(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(Et(hn,o),c){case"forwards":for(a=i.child,c=null;a!==null;)e=a.alternate,e!==null&&Bl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=i.child,i.child=null):(c=a.sibling,a.sibling=null),hf(i,!1,c,a,f);break;case"backwards":for(a=null,c=i.child,i.child=null;c!==null;){if(e=c.alternate,e!==null&&Bl(e)===null){i.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}hf(i,!0,a,null,f);break;case"together":hf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ji(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),Ta|=i.lanes,(a&i.childLanes)===0)if(e!==null){if($s(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(r(153));if(i.child!==null){for(e=i.child,a=Gi(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=Gi(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function df(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Sl(e)))}function Lx(e,i,a){switch(i.tag){case 3:Bt(i,i.stateNode.containerInfo),pa(i,fn,e.memoizedState.cache),Qs();break;case 27:case 5:ae(i);break;case 4:Bt(i,i.stateNode.containerInfo);break;case 10:pa(i,i.type,i.memoizedProps.value);break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(xa(i),i.flags|=128,null):(a&i.child.childLanes)!==0?Jm(e,i,a):(xa(i),e=ji(e,i,a),e!==null?e.sibling:null);xa(i);break;case 19:var c=(e.flags&128)!==0;if(o=(a&i.childLanes)!==0,o||($s(e,i,a,!1),o=(a&i.childLanes)!==0),c){if(o)return t_(e,i,a);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Et(hn,hn.current),o)break;return null;case 22:case 23:return i.lanes=0,qm(e,i,a);case 24:pa(i,fn,e.memoizedState.cache)}return ji(e,i,a)}function e_(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)vn=!0;else{if(!df(e,a)&&(i.flags&128)===0)return vn=!1,Lx(e,i,a);vn=(e.flags&131072)!==0}else vn=!1,Re&&(i.flags&1048576)!==0&&Up(i,xl,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var o=i.elementType,c=o._init;if(o=c(o._payload),i.type=o,typeof o=="function")yc(o)?(e=ur(o,e),i.tag=1,i=Km(null,i,o,e,a)):(i.tag=0,i=sf(null,i,o,e,a));else{if(o!=null){if(c=o.$$typeof,c===D){i.tag=11,i=Xm(null,i,o,e,a);break t}else if(c===H){i.tag=14,i=Wm(null,i,o,e,a);break t}}throw i=ht(o)||o,Error(r(306,i,""))}}return i;case 0:return sf(e,i,i.type,i.pendingProps,a);case 1:return o=i.type,c=ur(o,i.pendingProps),Km(e,i,o,c,a);case 3:t:{if(Bt(i,i.stateNode.containerInfo),e===null)throw Error(r(387));o=i.pendingProps;var f=i.memoizedState;c=f.element,Pc(e,i),so(i,o,null,a);var S=i.memoizedState;if(o=S.cache,pa(i,fn,o),o!==f.cache&&wc(i,[fn],a,!0),ro(),o=S.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){i=Qm(e,i,o,a);break t}else if(o!==c){c=ni(Error(r(424)),i),Js(c),i=Qm(e,i,o,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for($e=_i(e.firstChild),Pn=i,Re=!0,ir=null,wi=!0,a=Nm(i,null,o,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Qs(),o===c){i=ji(e,i,a);break t}bn(e,i,o,a)}i=i.child}return i;case 26:return Fl(e,i),e===null?(a=rg(i.type,null,i.pendingProps,null))?i.memoizedState=a:Re||(a=i.type,e=i.pendingProps,o=tu(pt.current).createElement(a),o[cn]=i,o[Qe]=e,An(o,a,e),rn(o),i.stateNode=o):i.memoizedState=rg(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return ae(i),e===null&&Re&&(o=i.stateNode=ng(i.type,i.pendingProps,pt.current),Pn=i,wi=!0,c=$e,wa(i.type)?(qf=c,$e=_i(o.firstChild)):$e=c),bn(e,i,i.pendingProps.children,a),Fl(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Re&&((c=o=$e)&&(o=sS(o,i.type,i.pendingProps,wi),o!==null?(i.stateNode=o,Pn=i,$e=_i(o.firstChild),wi=!1,c=!0):c=!1),c||ar(i)),ae(i),c=i.type,f=i.pendingProps,S=e!==null?e.memoizedProps:null,o=f.children,kf(c,f)?o=null:S!==null&&kf(c,S)&&(i.flags|=32),i.memoizedState!==null&&(c=Vc(e,i,bx,null,null,a),wo._currentValue=c),Fl(e,i),bn(e,i,o,a),i.child;case 6:return e===null&&Re&&((e=a=$e)&&(a=oS(a,i.pendingProps,wi),a!==null?(i.stateNode=a,Pn=i,$e=null,e=!0):e=!1),e||ar(i)),null;case 13:return Jm(e,i,a);case 4:return Bt(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=Qr(i,null,o,a):bn(e,i,o,a),i.child;case 11:return Xm(e,i,i.type,i.pendingProps,a);case 7:return bn(e,i,i.pendingProps,a),i.child;case 8:return bn(e,i,i.pendingProps.children,a),i.child;case 12:return bn(e,i,i.pendingProps.children,a),i.child;case 10:return o=i.pendingProps,pa(i,i.type,o.value),bn(e,i,o.children,a),i.child;case 9:return c=i.type._context,o=i.pendingProps.children,sr(i),c=wn(c),o=o(c),i.flags|=1,bn(e,i,o,a),i.child;case 14:return Wm(e,i,i.type,i.pendingProps,a);case 15:return Ym(e,i,i.type,i.pendingProps,a);case 19:return t_(e,i,a);case 31:return o=i.pendingProps,a=i.mode,o={mode:o.mode,children:o.children},e===null?(a=Hl(o,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Gi(e.child,o),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return qm(e,i,a);case 24:return sr(i),o=wn(fn),e===null?(c=Lc(),c===null&&(c=ke,f=Dc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),i.memoizedState={parent:o,cache:c},Oc(i),pa(i,fn,c)):((e.lanes&a)!==0&&(Pc(e,i),so(i,null,null,a),ro()),c=e.memoizedState,f=i.memoizedState,c.parent!==o?(c={parent:o,cache:o},i.memoizedState=c,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=c),pa(i,fn,o)):(o=f.cache,pa(i,fn,o),o!==c.cache&&wc(i,[fn],a,!0))),bn(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function Ki(e){e.flags|=4}function n_(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!cg(i)){if(i=si.current,i!==null&&((ye&4194048)===ye?Di!==null:(ye&62914560)!==ye&&(ye&536870912)===0||i!==Di))throw io=Nc,Fp;e.flags|=8192}}function Vl(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Rt():536870912,e.lanes|=i,es|=i)}function po(e,i){if(!Re)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ke(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(i)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,i}function Nx(e,i,a){var o=i.pendingProps;switch(Tc(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(i),null;case 1:return Ke(i),null;case 3:return a=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),Yi(fn),Zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ks(i)?Ki(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Op())),Ke(i),null;case 26:return a=i.memoizedState,e===null?(Ki(i),a!==null?(Ke(i),n_(i,a)):(Ke(i),i.flags&=-16777217)):a?a!==e.memoizedState?(Ki(i),Ke(i),n_(i,a)):(Ke(i),i.flags&=-16777217):(e.memoizedProps!==o&&Ki(i),Ke(i),i.flags&=-16777217),null;case 27:Ve(i),a=pt.current;var c=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==o&&Ki(i);else{if(!o){if(i.stateNode===null)throw Error(r(166));return Ke(i),null}e=Dt.current,Ks(i)?Lp(i):(e=ng(c,o,a),i.stateNode=e,Ki(i))}return Ke(i),null;case 5:if(Ve(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&Ki(i);else{if(!o){if(i.stateNode===null)throw Error(r(166));return Ke(i),null}if(e=Dt.current,Ks(i))Lp(i);else{switch(c=tu(pt.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}e[cn]=i,e[Qe]=o;t:for(c=i.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===i)break t;for(;c.sibling===null;){if(c.return===null||c.return===i)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}i.stateNode=e;t:switch(An(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ki(i)}}return Ke(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&Ki(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(r(166));if(e=pt.current,Ks(i)){if(e=i.stateNode,a=i.memoizedProps,o=null,c=Pn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[cn]=i,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||j_(e.nodeValue,a)),e||ar(i)}else e=tu(e).createTextNode(o),e[cn]=i,i.stateNode=e}return Ke(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Ks(i),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=i.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[cn]=i}else Qs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ke(i),c=!1}else c=Op(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return i.flags&256?(Zi(i),i):(Zi(i),null)}if(Zi(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=i.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),Vl(i,i.updateQueue),Ke(i),null;case 4:return Zt(),e===null&&If(i.stateNode.containerInfo),Ke(i),null;case 10:return Yi(i.type),Ke(i),null;case 19:if(St(hn),c=i.memoizedState,c===null)return Ke(i),null;if(o=(i.flags&128)!==0,f=c.rendering,f===null)if(o)po(c,!1);else{if(tn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(f=Bl(e),f!==null){for(i.flags|=128,po(c,!1),e=f.updateQueue,i.updateQueue=e,Vl(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)Dp(a,e),a=a.sibling;return Et(hn,hn.current&1|2),i.child}e=e.sibling}c.tail!==null&&Ht()>Xl&&(i.flags|=128,o=!0,po(c,!1),i.lanes=4194304)}else{if(!o)if(e=Bl(f),e!==null){if(i.flags|=128,o=!0,e=e.updateQueue,i.updateQueue=e,Vl(i,e),po(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Re)return Ke(i),null}else 2*Ht()-c.renderingStartTime>Xl&&a!==536870912&&(i.flags|=128,o=!0,po(c,!1),i.lanes=4194304);c.isBackwards?(f.sibling=i.child,i.child=f):(e=c.last,e!==null?e.sibling=f:i.child=f,c.last=f)}return c.tail!==null?(i=c.tail,c.rendering=i,c.tail=i.sibling,c.renderingStartTime=Ht(),i.sibling=null,e=hn.current,Et(hn,o?e&1|2:e&1),i):(Ke(i),null);case 22:case 23:return Zi(i),Fc(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(a&536870912)!==0&&(i.flags&128)===0&&(Ke(i),i.subtreeFlags&6&&(i.flags|=8192)):Ke(i),a=i.updateQueue,a!==null&&Vl(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==a&&(i.flags|=2048),e!==null&&St(or),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Yi(fn),Ke(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function Ox(e,i){switch(Tc(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Yi(fn),Zt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Ve(i),null;case 13:if(Zi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(r(340));Qs()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return St(hn),null;case 4:return Zt(),null;case 10:return Yi(i.type),null;case 22:case 23:return Zi(i),Fc(),e!==null&&St(or),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Yi(fn),null;case 25:return null;default:return null}}function i_(e,i){switch(Tc(i),i.tag){case 3:Yi(fn),Zt();break;case 26:case 27:case 5:Ve(i);break;case 4:Zt();break;case 13:Zi(i);break;case 19:St(hn);break;case 10:Yi(i.type);break;case 22:case 23:Zi(i),Fc(),e!==null&&St(or);break;case 24:Yi(fn)}}function mo(e,i){try{var a=i.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==c)}}catch(b){He(i,i.return,b)}}function ya(e,i,a){try{var o=i.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){var S=o.inst,b=S.destroy;if(b!==void 0){S.destroy=void 0,c=i;var O=a,Q=b;try{Q()}catch(ft){He(c,O,ft)}}}o=o.next}while(o!==f)}}catch(ft){He(i,i.return,ft)}}function a_(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{Wp(i,a)}catch(o){He(e,e.return,o)}}}function r_(e,i,a){a.props=ur(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){He(e,i,o)}}function _o(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){He(e,i,c)}}function Ui(e,i){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){He(e,i,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){He(e,i,c)}else a.current=null}function s_(e){var i=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){He(e,e.return,c)}}function pf(e,i,a){try{var o=e.stateNode;eS(o,e.type,a,i),o[Qe]=i}catch(c){He(e,e.return,c)}}function o_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wa(e.type)||e.tag===4}function mf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||o_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _f(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=$l));else if(o!==4&&(o===27&&wa(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(_f(e,i,a),e=e.sibling;e!==null;)_f(e,i,a),e=e.sibling}function Gl(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(o!==4&&(o===27&&wa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Gl(e,i,a),e=e.sibling;e!==null;)Gl(e,i,a),e=e.sibling}function l_(e){var i=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=i.attributes;c.length;)i.removeAttributeNode(c[0]);An(i,o,a),i[cn]=e,i[Qe]=a}catch(f){He(e,e.return,f)}}var Qi=!1,nn=!1,gf=!1,u_=typeof WeakSet=="function"?WeakSet:Set,xn=null;function Px(e,i){if(e=e.containerInfo,Vf=su,e=Sp(e),pc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,b=-1,O=-1,Q=0,ft=0,_t=e,tt=null;e:for(;;){for(var it;_t!==a||c!==0&&_t.nodeType!==3||(b=S+c),_t!==f||o!==0&&_t.nodeType!==3||(O=S+o),_t.nodeType===3&&(S+=_t.nodeValue.length),(it=_t.firstChild)!==null;)tt=_t,_t=it;for(;;){if(_t===e)break e;if(tt===a&&++Q===c&&(b=S),tt===f&&++ft===o&&(O=S),(it=_t.nextSibling)!==null)break;_t=tt,tt=_t.parentNode}_t=it}a=b===-1||O===-1?null:{start:b,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(Gf={focusedElem:e,selectionRange:a},su=!1,xn=i;xn!==null;)if(i=xn,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,xn=e;else for(;xn!==null;){switch(i=xn,f=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=i,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ie=ur(a.type,c,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ie,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(te){He(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)Wf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Wf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=i.sibling,e!==null){e.return=i.return,xn=e;break}xn=i.return}}function c_(e,i,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ea(e,a),o&4&&mo(5,a);break;case 1:if(Ea(e,a),o&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(S){He(a,a.return,S)}else{var c=ur(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(c,i,e.__reactInternalSnapshotBeforeUpdate)}catch(S){He(a,a.return,S)}}o&64&&a_(a),o&512&&_o(a,a.return);break;case 3:if(Ea(e,a),o&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Wp(e,i)}catch(S){He(a,a.return,S)}}break;case 27:i===null&&o&4&&l_(a);case 26:case 5:Ea(e,a),i===null&&o&4&&s_(a),o&512&&_o(a,a.return);break;case 12:Ea(e,a);break;case 13:Ea(e,a),o&4&&d_(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Xx.bind(null,a),lS(e,a))));break;case 22:if(o=a.memoizedState!==null||Qi,!o){i=i!==null&&i.memoizedState!==null||nn,c=Qi;var f=nn;Qi=o,(nn=i)&&!f?Ma(e,a,(a.subtreeFlags&8772)!==0):Ea(e,a),Qi=c,nn=f}break;case 30:break;default:Ea(e,a)}}function f_(e){var i=e.alternate;i!==null&&(e.alternate=null,f_(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Lr(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,Hn=!1;function Ji(e,i,a){for(a=a.child;a!==null;)h_(e,i,a),a=a.sibling}function h_(e,i,a){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(ct,a)}catch{}switch(a.tag){case 26:nn||Ui(a,i),Ji(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:nn||Ui(a,i);var o=qe,c=Hn;wa(a.type)&&(qe=a.stateNode,Hn=!1),Ji(e,i,a),To(a.stateNode),qe=o,Hn=c;break;case 5:nn||Ui(a,i);case 6:if(o=qe,c=Hn,qe=null,Ji(e,i,a),qe=o,Hn=c,qe!==null)if(Hn)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(a.stateNode)}catch(f){He(a,i,f)}else try{qe.removeChild(a.stateNode)}catch(f){He(a,i,f)}break;case 18:qe!==null&&(Hn?(e=qe,tg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),No(e)):tg(qe,a.stateNode));break;case 4:o=qe,c=Hn,qe=a.stateNode.containerInfo,Hn=!0,Ji(e,i,a),qe=o,Hn=c;break;case 0:case 11:case 14:case 15:nn||ya(2,a,i),nn||ya(4,a,i),Ji(e,i,a);break;case 1:nn||(Ui(a,i),o=a.stateNode,typeof o.componentWillUnmount=="function"&&r_(a,i,o)),Ji(e,i,a);break;case 21:Ji(e,i,a);break;case 22:nn=(o=nn)||a.memoizedState!==null,Ji(e,i,a),nn=o;break;default:Ji(e,i,a)}}function d_(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{No(e)}catch(a){He(i,i.return,a)}}function Bx(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new u_),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new u_),i;default:throw Error(r(435,e.tag))}}function vf(e,i){var a=Bx(e);i.forEach(function(o){var c=Wx.bind(null,e,o);a.has(o)||(a.add(o),o.then(c,c))})}function Zn(e,i){var a=i.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=e,S=i,b=S;t:for(;b!==null;){switch(b.tag){case 27:if(wa(b.type)){qe=b.stateNode,Hn=!1;break t}break;case 5:qe=b.stateNode,Hn=!1;break t;case 3:case 4:qe=b.stateNode.containerInfo,Hn=!0;break t}b=b.return}if(qe===null)throw Error(r(160));h_(f,S,c),qe=null,Hn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)p_(i,e),i=i.sibling}var mi=null;function p_(e,i){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Zn(i,e),jn(e),o&4&&(ya(3,e,e.return),mo(3,e),ya(5,e,e.return));break;case 1:Zn(i,e),jn(e),o&512&&(nn||a===null||Ui(a,a.return)),o&64&&Qi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=mi;if(Zn(i,e),jn(e),o&512&&(nn||a===null||Ui(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ci]||f[cn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),An(f,o,a),f[cn]=e,rn(f),o=f;break t;case"link":var S=lg("link","href",c).get(o+(a.href||""));if(S){for(var b=0;b<S.length;b++)if(f=S[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(b,1);break e}}f=c.createElement(o),An(f,o,a),c.head.appendChild(f);break;case"meta":if(S=lg("meta","content",c).get(o+(a.content||""))){for(b=0;b<S.length;b++)if(f=S[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(b,1);break e}}f=c.createElement(o),An(f,o,a),c.head.appendChild(f);break;default:throw Error(r(468,o))}f[cn]=e,rn(f),o=f}e.stateNode=o}else ug(c,e.type,e.stateNode);else e.stateNode=og(c,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?ug(c,e.type,e.stateNode):og(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&pf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Zn(i,e),jn(e),o&512&&(nn||a===null||Ui(a,a.return)),a!==null&&o&4&&pf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Zn(i,e),jn(e),o&512&&(nn||a===null||Ui(a,a.return)),e.flags&32){c=e.stateNode;try{zn(c,"")}catch(it){He(e,e.return,it)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,pf(e,c,a!==null?a.memoizedProps:c)),o&1024&&(gf=!0);break;case 6:if(Zn(i,e),jn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(it){He(e,e.return,it)}}break;case 3:if(iu=null,c=mi,mi=eu(i.containerInfo),Zn(i,e),mi=c,jn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{No(i.containerInfo)}catch(it){He(e,e.return,it)}gf&&(gf=!1,m_(e));break;case 4:o=mi,mi=eu(e.stateNode.containerInfo),Zn(i,e),jn(e),mi=o;break;case 12:Zn(i,e),jn(e);break;case 13:Zn(i,e),jn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(bf=Ht()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,vf(e,o)));break;case 22:c=e.memoizedState!==null;var O=a!==null&&a.memoizedState!==null,Q=Qi,ft=nn;if(Qi=Q||c,nn=ft||O,Zn(i,e),nn=ft,Qi=Q,jn(e),o&8192)t:for(i=e.stateNode,i._visibility=c?i._visibility&-2:i._visibility|1,c&&(a===null||O||Qi||nn||cr(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){O=a=i;try{if(f=O.stateNode,c)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{b=O.stateNode;var _t=O.memoizedProps.style,tt=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;b.style.display=tt==null||typeof tt=="boolean"?"":(""+tt).trim()}}catch(it){He(O,O.return,it)}}}else if(i.tag===6){if(a===null){O=i;try{O.stateNode.nodeValue=c?"":O.memoizedProps}catch(it){He(O,O.return,it)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,vf(e,a))));break;case 19:Zn(i,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,vf(e,o)));break;case 30:break;case 21:break;default:Zn(i,e),jn(e)}}function jn(e){var i=e.flags;if(i&2){try{for(var a,o=e.return;o!==null;){if(o_(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=mf(e);Gl(e,f,c);break;case 5:var S=a.stateNode;a.flags&32&&(zn(S,""),a.flags&=-33);var b=mf(e);Gl(e,b,S);break;case 3:case 4:var O=a.stateNode.containerInfo,Q=mf(e);_f(e,Q,O);break;default:throw Error(r(161))}}catch(ft){He(e,e.return,ft)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function m_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;m_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Ea(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)c_(e,i.alternate,i),i=i.sibling}function cr(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:ya(4,i,i.return),cr(i);break;case 1:Ui(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&r_(i,i.return,a),cr(i);break;case 27:To(i.stateNode);case 26:case 5:Ui(i,i.return),cr(i);break;case 22:i.memoizedState===null&&cr(i);break;case 30:cr(i);break;default:cr(i)}e=e.sibling}}function Ma(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,c=e,f=i,S=f.flags;switch(f.tag){case 0:case 11:case 15:Ma(c,f,a),mo(4,f);break;case 1:if(Ma(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Q){He(o,o.return,Q)}if(o=f,c=o.updateQueue,c!==null){var b=o.stateNode;try{var O=c.shared.hiddenCallbacks;if(O!==null)for(c.shared.hiddenCallbacks=null,c=0;c<O.length;c++)Xp(O[c],b)}catch(Q){He(o,o.return,Q)}}a&&S&64&&a_(f),_o(f,f.return);break;case 27:l_(f);case 26:case 5:Ma(c,f,a),a&&o===null&&S&4&&s_(f),_o(f,f.return);break;case 12:Ma(c,f,a);break;case 13:Ma(c,f,a),a&&S&4&&d_(c,f);break;case 22:f.memoizedState===null&&Ma(c,f,a),_o(f,f.return);break;case 30:break;default:Ma(c,f,a)}i=i.sibling}}function xf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&to(a))}function Sf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&to(e))}function Li(e,i,a,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)__(e,i,a,o),i=i.sibling}function __(e,i,a,o){var c=i.flags;switch(i.tag){case 0:case 11:case 15:Li(e,i,a,o),c&2048&&mo(9,i);break;case 1:Li(e,i,a,o);break;case 3:Li(e,i,a,o),c&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&to(e)));break;case 12:if(c&2048){Li(e,i,a,o),e=i.stateNode;try{var f=i.memoizedProps,S=f.id,b=f.onPostCommit;typeof b=="function"&&b(S,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(O){He(i,i.return,O)}}else Li(e,i,a,o);break;case 13:Li(e,i,a,o);break;case 23:break;case 22:f=i.stateNode,S=i.alternate,i.memoizedState!==null?f._visibility&2?Li(e,i,a,o):go(e,i):f._visibility&2?Li(e,i,a,o):(f._visibility|=2,Jr(e,i,a,o,(i.subtreeFlags&10256)!==0)),c&2048&&xf(S,i);break;case 24:Li(e,i,a,o),c&2048&&Sf(i.alternate,i);break;default:Li(e,i,a,o)}}function Jr(e,i,a,o,c){for(c=c&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var f=e,S=i,b=a,O=o,Q=S.flags;switch(S.tag){case 0:case 11:case 15:Jr(f,S,b,O,c),mo(8,S);break;case 23:break;case 22:var ft=S.stateNode;S.memoizedState!==null?ft._visibility&2?Jr(f,S,b,O,c):go(f,S):(ft._visibility|=2,Jr(f,S,b,O,c)),c&&Q&2048&&xf(S.alternate,S);break;case 24:Jr(f,S,b,O,c),c&&Q&2048&&Sf(S.alternate,S);break;default:Jr(f,S,b,O,c)}i=i.sibling}}function go(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,o=i,c=o.flags;switch(o.tag){case 22:go(a,o),c&2048&&xf(o.alternate,o);break;case 24:go(a,o),c&2048&&Sf(o.alternate,o);break;default:go(a,o)}i=i.sibling}}var vo=8192;function $r(e){if(e.subtreeFlags&vo)for(e=e.child;e!==null;)g_(e),e=e.sibling}function g_(e){switch(e.tag){case 26:$r(e),e.flags&vo&&e.memoizedState!==null&&yS(mi,e.memoizedState,e.memoizedProps);break;case 5:$r(e);break;case 3:case 4:var i=mi;mi=eu(e.stateNode.containerInfo),$r(e),mi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=vo,vo=16777216,$r(e),vo=i):$r(e));break;default:$r(e)}}function v_(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function xo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];xn=o,S_(o,e)}v_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)x_(e),e=e.sibling}function x_(e){switch(e.tag){case 0:case 11:case 15:xo(e),e.flags&2048&&ya(9,e,e.return);break;case 3:xo(e);break;case 12:xo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,kl(e)):xo(e);break;default:xo(e)}}function kl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];xn=o,S_(o,e)}v_(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:ya(8,i,i.return),kl(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,kl(i));break;default:kl(i)}e=e.sibling}}function S_(e,i){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:ya(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:to(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else t:for(a=e;xn!==null;){o=xn;var c=o.sibling,f=o.return;if(f_(o),o===a){xn=null;break t}if(c!==null){c.return=f,xn=c;break t}xn=f}}}var zx={getCacheForType:function(e){var i=wn(fn),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},Ix=typeof WeakMap=="function"?WeakMap:Map,De=0,ke=null,ve=null,ye=0,Ue=0,Kn=null,ba=!1,ts=!1,yf=!1,$i=0,tn=0,Ta=0,fr=0,Ef=0,oi=0,es=0,So=null,Vn=null,Mf=!1,bf=0,Xl=1/0,Wl=null,Aa=null,Tn=0,Ra=null,ns=null,is=0,Tf=0,Af=null,y_=null,yo=0,Rf=null;function Qn(){if((De&2)!==0&&ye!==0)return ye&-ye;if(P.T!==null){var e=Xr;return e!==0?e:Of()}return Me()}function E_(){oi===0&&(oi=(ye&536870912)===0||Re?G():536870912);var e=si.current;return e!==null&&(e.flags|=32),oi}function Jn(e,i,a){(e===ke&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(as(e,0),Ca(e,ye,oi,!1)),It(e,a),((De&2)===0||e!==ke)&&(e===ke&&((De&2)===0&&(fr|=a),tn===4&&Ca(e,ye,oi,!1)),Ni(e))}function M_(e,i,a){if((De&6)!==0)throw Error(r(327));var o=!a&&(i&124)===0&&(i&e.expiredLanes)===0||Ut(e,i),c=o?Vx(e,i):Df(e,i,!0),f=o;do{if(c===0){ts&&!o&&Ca(e,i,0,!1);break}else{if(a=e.current.alternate,f&&!Fx(a)){c=Df(e,i,!1),f=!1;continue}if(c===2){if(f=i,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;t:{var b=e;c=So;var O=b.current.memoizedState.isDehydrated;if(O&&(as(b,S).flags|=256),S=Df(b,S,!1),S!==2){if(yf&&!O){b.errorRecoveryDisabledLanes|=f,fr|=f,c=4;break t}f=Vn,Vn=c,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){as(e,0),Ca(e,i,0,!0);break}t:{switch(o=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:Ca(o,i,oi,!ba);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(c=bf+300-Ht(),10<c)){if(Ca(o,i,oi,!ba),Xt(o,0,!0)!==0)break t;o.timeoutHandle=J_(b_.bind(null,o,a,Vn,Wl,Mf,i,oi,fr,es,ba,f,2,-0,0),c);break t}b_(o,a,Vn,Wl,Mf,i,oi,fr,es,ba,f,0,-0,0)}}break}while(!0);Ni(e)}function b_(e,i,a,o,c,f,S,b,O,Q,ft,_t,tt,it){if(e.timeoutHandle=-1,_t=i.subtreeFlags,(_t&8192||(_t&16785408)===16785408)&&(Co={stylesheets:null,count:0,unsuspend:SS},g_(i),_t=ES(),_t!==null)){e.cancelPendingCommit=_t(U_.bind(null,e,i,f,a,o,c,S,b,O,ft,1,tt,it)),Ca(e,f,S,!Q);return}U_(e,i,f,a,o,c,S,b,O)}function Fx(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!Yn(f(),c))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ca(e,i,a,o){i&=~Ef,i&=~fr,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var c=i;0<c;){var f=31-zt(c),S=1<<f;o[f]=-1,c&=~S}a!==0&&gt(e,a,i)}function Yl(){return(De&6)===0?(Eo(0),!1):!0}function Cf(){if(ve!==null){if(Ue===0)var e=ve.return;else e=ve,Wi=rr=null,Xc(e),Kr=null,fo=0,e=ve;for(;e!==null;)i_(e.alternate,e),e=e.return;ve=null}}function as(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,iS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Cf(),ke=e,ve=a=Gi(e.current,null),ye=i,Ue=0,Kn=null,ba=!1,ts=Ut(e,i),yf=!1,es=oi=Ef=fr=Ta=tn=0,Vn=So=null,Mf=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var c=31-zt(o),f=1<<c;i|=e[c],o&=~f}return $i=i,pl(),a}function T_(e,i){de=null,P.H=Nl,i===no||i===Ml?(i=Gp(),Ue=3):i===Fp?(i=Gp(),Ue=4):Ue=i===km?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Kn=i,ve===null&&(tn=1,Il(e,ni(i,e.current)))}function A_(){var e=P.H;return P.H=Nl,e===null?Nl:e}function R_(){var e=P.A;return P.A=zx,e}function wf(){tn=4,ba||(ye&4194048)!==ye&&si.current!==null||(ts=!0),(Ta&134217727)===0&&(fr&134217727)===0||ke===null||Ca(ke,ye,oi,!1)}function Df(e,i,a){var o=De;De|=2;var c=A_(),f=R_();(ke!==e||ye!==i)&&(Wl=null,as(e,i)),i=!1;var S=tn;t:do try{if(Ue!==0&&ve!==null){var b=ve,O=Kn;switch(Ue){case 8:Cf(),S=6;break t;case 3:case 2:case 9:case 6:si.current===null&&(i=!0);var Q=Ue;if(Ue=0,Kn=null,rs(e,b,O,Q),a&&ts){S=0;break t}break;default:Q=Ue,Ue=0,Kn=null,rs(e,b,O,Q)}}Hx(),S=tn;break}catch(ft){T_(e,ft)}while(!0);return i&&e.shellSuspendCounter++,Wi=rr=null,De=o,P.H=c,P.A=f,ve===null&&(ke=null,ye=0,pl()),S}function Hx(){for(;ve!==null;)C_(ve)}function Vx(e,i){var a=De;De|=2;var o=A_(),c=R_();ke!==e||ye!==i?(Wl=null,Xl=Ht()+500,as(e,i)):ts=Ut(e,i);t:do try{if(Ue!==0&&ve!==null){i=ve;var f=Kn;e:switch(Ue){case 1:Ue=0,Kn=null,rs(e,i,f,1);break;case 2:case 9:if(Hp(f)){Ue=0,Kn=null,w_(i);break}i=function(){Ue!==2&&Ue!==9||ke!==e||(Ue=7),Ni(e)},f.then(i,i);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:Hp(f)?(Ue=0,Kn=null,w_(i)):(Ue=0,Kn=null,rs(e,i,f,7));break;case 5:var S=null;switch(ve.tag){case 26:S=ve.memoizedState;case 5:case 27:var b=ve;if(!S||cg(S)){Ue=0,Kn=null;var O=b.sibling;if(O!==null)ve=O;else{var Q=b.return;Q!==null?(ve=Q,ql(Q)):ve=null}break e}}Ue=0,Kn=null,rs(e,i,f,5);break;case 6:Ue=0,Kn=null,rs(e,i,f,6);break;case 8:Cf(),tn=6;break t;default:throw Error(r(462))}}Gx();break}catch(ft){T_(e,ft)}while(!0);return Wi=rr=null,P.H=o,P.A=c,De=a,ve!==null?0:(ke=null,ye=0,pl(),tn)}function Gx(){for(;ve!==null&&!Jt();)C_(ve)}function C_(e){var i=e_(e.alternate,e,$i);e.memoizedProps=e.pendingProps,i===null?ql(e):ve=i}function w_(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=jm(a,i,i.pendingProps,i.type,void 0,ye);break;case 11:i=jm(a,i,i.pendingProps,i.type.render,i.ref,ye);break;case 5:Xc(i);default:i_(a,i),i=ve=Dp(i,$i),i=e_(a,i,$i)}e.memoizedProps=e.pendingProps,i===null?ql(e):ve=i}function rs(e,i,a,o){Wi=rr=null,Xc(i),Kr=null,fo=0;var c=i.return;try{if(Ux(e,c,i,a,ye)){tn=1,Il(e,ni(a,e.current)),ve=null;return}}catch(f){if(c!==null)throw ve=c,f;tn=1,Il(e,ni(a,e.current)),ve=null;return}i.flags&32768?(Re||o===1?e=!0:ts||(ye&536870912)!==0?e=!1:(ba=e=!0,(o===2||o===9||o===3||o===6)&&(o=si.current,o!==null&&o.tag===13&&(o.flags|=16384))),D_(i,e)):ql(i)}function ql(e){var i=e;do{if((i.flags&32768)!==0){D_(i,ba);return}e=i.return;var a=Nx(i.alternate,i,$i);if(a!==null){ve=a;return}if(i=i.sibling,i!==null){ve=i;return}ve=i=e}while(i!==null);tn===0&&(tn=5)}function D_(e,i){do{var a=Ox(e.alternate,e);if(a!==null){a.flags&=32767,ve=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){ve=e;return}ve=e=a}while(e!==null);tn=6,ve=null}function U_(e,i,a,o,c,f,S,b,O){e.cancelPendingCommit=null;do Zl();while(Tn!==0);if((De&6)!==0)throw Error(r(327));if(i!==null){if(i===e.current)throw Error(r(177));if(f=i.lanes|i.childLanes,f|=xc,Tt(e,a,f,S,b,O),e===ke&&(ve=ke=null,ye=0),ns=i,Ra=e,is=a,Tf=f,Af=c,y_=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Yx(Ze,function(){return B_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,c=j.p,j.p=2,S=De,De|=4;try{Px(e,i,a)}finally{De=S,j.p=c,P.T=o}}Tn=1,L_(),N_(),O_()}}function L_(){if(Tn===1){Tn=0;var e=Ra,i=ns,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=j.p;j.p=2;var c=De;De|=4;try{p_(i,e);var f=Gf,S=Sp(e.containerInfo),b=f.focusedElem,O=f.selectionRange;if(S!==b&&b&&b.ownerDocument&&xp(b.ownerDocument.documentElement,b)){if(O!==null&&pc(b)){var Q=O.start,ft=O.end;if(ft===void 0&&(ft=Q),"selectionStart"in b)b.selectionStart=Q,b.selectionEnd=Math.min(ft,b.value.length);else{var _t=b.ownerDocument||document,tt=_t&&_t.defaultView||window;if(tt.getSelection){var it=tt.getSelection(),ie=b.textContent.length,te=Math.min(O.start,ie),Pe=O.end===void 0?te:Math.min(O.end,ie);!it.extend&&te>Pe&&(S=Pe,Pe=te,te=S);var W=vp(b,te),V=vp(b,Pe);if(W&&V&&(it.rangeCount!==1||it.anchorNode!==W.node||it.anchorOffset!==W.offset||it.focusNode!==V.node||it.focusOffset!==V.offset)){var K=_t.createRange();K.setStart(W.node,W.offset),it.removeAllRanges(),te>Pe?(it.addRange(K),it.extend(V.node,V.offset)):(K.setEnd(V.node,V.offset),it.addRange(K))}}}}for(_t=[],it=b;it=it.parentNode;)it.nodeType===1&&_t.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<_t.length;b++){var mt=_t[b];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}su=!!Vf,Gf=Vf=null}finally{De=c,j.p=o,P.T=a}}e.current=i,Tn=2}}function N_(){if(Tn===2){Tn=0;var e=Ra,i=ns,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=j.p;j.p=2;var c=De;De|=4;try{c_(e,i.alternate,i)}finally{De=c,j.p=o,P.T=a}}Tn=3}}function O_(){if(Tn===4||Tn===3){Tn=0,Ee();var e=Ra,i=ns,a=is,o=y_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Tn=5:(Tn=0,ns=Ra=null,P_(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Aa=null),we(a),i=i.stateNode,vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(ct,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=P.T,c=j.p,j.p=2,P.T=null;try{for(var f=e.onRecoverableError,S=0;S<o.length;S++){var b=o[S];f(b.value,{componentStack:b.stack})}}finally{P.T=i,j.p=c}}(is&3)!==0&&Zl(),Ni(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===Rf?yo++:(yo=0,Rf=e):yo=0,Eo(0)}}function P_(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,to(i)))}function Zl(e){return L_(),N_(),O_(),B_()}function B_(){if(Tn!==5)return!1;var e=Ra,i=Tf;Tf=0;var a=we(is),o=P.T,c=j.p;try{j.p=32>a?32:a,P.T=null,a=Af,Af=null;var f=Ra,S=is;if(Tn=0,ns=Ra=null,is=0,(De&6)!==0)throw Error(r(331));var b=De;if(De|=4,x_(f.current),__(f,f.current,S,a),De=b,Eo(0,!1),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(ct,f)}catch{}return!0}finally{j.p=c,P.T=o,P_(e,i)}}function z_(e,i,a){i=ni(a,i),i=rf(e.stateNode,i,2),e=ga(e,i,2),e!==null&&(It(e,2),Ni(e))}function He(e,i,a){if(e.tag===3)z_(e,e,a);else for(;i!==null;){if(i.tag===3){z_(i,e,a);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Aa===null||!Aa.has(o))){e=ni(a,e),a=Vm(2),o=ga(i,a,2),o!==null&&(Gm(a,o,i,e),It(o,2),Ni(o));break}}i=i.return}}function Uf(e,i,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Ix;var c=new Set;o.set(i,c)}else c=o.get(i),c===void 0&&(c=new Set,o.set(i,c));c.has(a)||(yf=!0,c.add(a),e=kx.bind(null,e,i,a),i.then(e,e))}function kx(e,i,a){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(ye&a)===a&&(tn===4||tn===3&&(ye&62914560)===ye&&300>Ht()-bf?(De&2)===0&&as(e,0):Ef|=a,es===ye&&(es=0)),Ni(e)}function I_(e,i){i===0&&(i=Rt()),e=Hr(e,i),e!==null&&(It(e,i),Ni(e))}function Xx(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),I_(e,a)}function Wx(e,i){var a=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(i),I_(e,a)}function Yx(e,i){return I(e,i)}var jl=null,ss=null,Lf=!1,Kl=!1,Nf=!1,hr=0;function Ni(e){e!==ss&&e.next===null&&(ss===null?jl=ss=e:ss=ss.next=e),Kl=!0,Lf||(Lf=!0,Zx())}function Eo(e,i){if(!Nf&&Kl){Nf=!0;do for(var a=!1,o=jl;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var S=o.suspendedLanes,b=o.pingedLanes;f=(1<<31-zt(42|e)+1)-1,f&=c&~(S&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,G_(o,f))}else f=ye,f=Xt(o,o===ke?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ut(o,f)||(a=!0,G_(o,f));o=o.next}while(a);Nf=!1}}function qx(){F_()}function F_(){Kl=Lf=!1;var e=0;hr!==0&&(nS()&&(e=hr),hr=0);for(var i=Ht(),a=null,o=jl;o!==null;){var c=o.next,f=H_(o,i);f===0?(o.next=null,a===null?jl=c:a.next=c,c===null&&(ss=a)):(a=o,(e!==0||(f&3)!==0)&&(Kl=!0)),o=c}Eo(e)}function H_(e,i){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-zt(f),b=1<<S,O=c[S];O===-1?((b&a)===0||(b&o)!==0)&&(c[S]=se(b,i)):O<=i&&(e.expiredLanes|=b),f&=~b}if(i=ke,a=ye,a=Xt(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===i&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ce(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ut(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(o!==null&&Ce(o),we(a)){case 2:case 8:a=oe;break;case 32:a=Ze;break;case 268435456:a=L;break;default:a=Ze}return o=V_.bind(null,e),a=I(a,o),e.callbackPriority=i,e.callbackNode=a,i}return o!==null&&o!==null&&Ce(o),e.callbackPriority=2,e.callbackNode=null,2}function V_(e,i){if(Tn!==0&&Tn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Zl()&&e.callbackNode!==a)return null;var o=ye;return o=Xt(e,e===ke?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(M_(e,o,i),H_(e,Ht()),e.callbackNode!=null&&e.callbackNode===a?V_.bind(null,e):null)}function G_(e,i){if(Zl())return null;M_(e,i,!0)}function Zx(){aS(function(){(De&6)!==0?I(Vt,qx):F_()})}function Of(){return hr===0&&(hr=G()),hr}function k_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ol(""+e)}function X_(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function jx(e,i,a,o,c){if(i==="submit"&&a&&a.stateNode===c){var f=k_((c[Qe]||null).action),S=o.submitter;S&&(i=(i=S[Qe]||null)?k_(i.formAction):S.getAttribute("formAction"),i!==null&&(f=i,S=null));var b=new fl("action","action",null,o,c);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(hr!==0){var O=S?X_(c,S):new FormData(c);$c(a,{pending:!0,data:O,method:c.method,action:f},null,O)}}else typeof f=="function"&&(b.preventDefault(),O=S?X_(c,S):new FormData(c),$c(a,{pending:!0,data:O,method:c.method,action:f},f,O))},currentTarget:c}]})}}for(var Pf=0;Pf<vc.length;Pf++){var Bf=vc[Pf],Kx=Bf.toLowerCase(),Qx=Bf[0].toUpperCase()+Bf.slice(1);pi(Kx,"on"+Qx)}pi(Mp,"onAnimationEnd"),pi(bp,"onAnimationIteration"),pi(Tp,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(px,"onTransitionRun"),pi(mx,"onTransitionStart"),pi(_x,"onTransitionCancel"),pi(Ap,"onTransitionEnd"),X("onMouseEnter",["mouseout","mouseover"]),X("onMouseLeave",["mouseout","mouseover"]),X("onPointerEnter",["pointerout","pointerover"]),X("onPointerLeave",["pointerout","pointerover"]),T("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),T("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),T("onBeforeInput",["compositionend","keypress","textInput","paste"]),T("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),T("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),T("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));function W_(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var f=void 0;if(i)for(var S=o.length-1;0<=S;S--){var b=o[S],O=b.instance,Q=b.currentTarget;if(b=b.listener,O!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=Q;try{f(c)}catch(ft){zl(ft)}c.currentTarget=null,f=O}else for(S=0;S<o.length;S++){if(b=o[S],O=b.instance,Q=b.currentTarget,b=b.listener,O!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=Q;try{f(c)}catch(ft){zl(ft)}c.currentTarget=null,f=O}}}}function xe(e,i){var a=i[Dr];a===void 0&&(a=i[Dr]=new Set);var o=e+"__bubble";a.has(o)||(Y_(i,e,2,!1),a.add(o))}function zf(e,i,a){var o=0;i&&(o|=4),Y_(a,e,o,i)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function If(e){if(!e[Ql]){e[Ql]=!0,rl.forEach(function(a){a!=="selectionchange"&&(Jx.has(a)||zf(a,!1,e),zf(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Ql]||(i[Ql]=!0,zf("selectionchange",!1,i))}}function Y_(e,i,a,o){switch(_g(i)){case 2:var c=TS;break;case 8:c=AS;break;default:c=Jf}a=c.bind(null,i,a,e),c=void 0,!rc||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(i,a,{capture:!0,passive:c}):e.addEventListener(i,a,!0):c!==void 0?e.addEventListener(i,a,{passive:c}):e.addEventListener(i,a,!1)}function Ff(e,i,a,o,c){var f=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var b=o.stateNode.containerInfo;if(b===c)break;if(S===4)for(S=o.return;S!==null;){var O=S.tag;if((O===3||O===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;b!==null;){if(S=Hi(b),S===null)return;if(O=S.tag,O===5||O===6||O===26||O===27){o=f=S;continue t}b=b.parentNode}}o=o.return}$d(function(){var Q=f,ft=ic(a),_t=[];t:{var tt=Rp.get(e);if(tt!==void 0){var it=fl,ie=e;switch(e){case"keypress":if(ul(a)===0)break t;case"keydown":case"keyup":it=Y0;break;case"focusin":ie="focus",it=uc;break;case"focusout":ie="blur",it=uc;break;case"beforeblur":case"afterblur":it=uc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=O0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=j0;break;case Mp:case bp:case Tp:it=z0;break;case Ap:it=Q0;break;case"scroll":case"scrollend":it=L0;break;case"wheel":it=$0;break;case"copy":case"cut":case"paste":it=F0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=ap;break;case"toggle":case"beforetoggle":it=ex}var te=(i&4)!==0,Pe=!te&&(e==="scroll"||e==="scrollend"),W=te?tt!==null?tt+"Capture":null:tt;te=[];for(var V=Q,K;V!==null;){var mt=V;if(K=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||K===null||W===null||(mt=Vs(V,W),mt!=null&&te.push(bo(V,mt,K))),Pe)break;V=V.return}0<te.length&&(tt=new it(tt,ie,null,a,ft),_t.push({event:tt,listeners:te}))}}if((i&7)===0){t:{if(tt=e==="mouseover"||e==="pointerover",it=e==="mouseout"||e==="pointerout",tt&&a!==nc&&(ie=a.relatedTarget||a.fromElement)&&(Hi(ie)||ie[Ri]))break t;if((it||tt)&&(tt=ft.window===ft?ft:(tt=ft.ownerDocument)?tt.defaultView||tt.parentWindow:window,it?(ie=a.relatedTarget||a.toElement,it=Q,ie=ie?Hi(ie):null,ie!==null&&(Pe=u(ie),te=ie.tag,ie!==Pe||te!==5&&te!==27&&te!==6)&&(ie=null)):(it=null,ie=Q),it!==ie)){if(te=np,mt="onMouseLeave",W="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(te=ap,mt="onPointerLeave",W="onPointerEnter",V="pointer"),Pe=it==null?tt:Ka(it),K=ie==null?tt:Ka(ie),tt=new te(mt,V+"leave",it,a,ft),tt.target=Pe,tt.relatedTarget=K,mt=null,Hi(ft)===Q&&(te=new te(W,V+"enter",ie,a,ft),te.target=K,te.relatedTarget=Pe,mt=te),Pe=mt,it&&ie)e:{for(te=it,W=ie,V=0,K=te;K;K=os(K))V++;for(K=0,mt=W;mt;mt=os(mt))K++;for(;0<V-K;)te=os(te),V--;for(;0<K-V;)W=os(W),K--;for(;V--;){if(te===W||W!==null&&te===W.alternate)break e;te=os(te),W=os(W)}te=null}else te=null;it!==null&&q_(_t,tt,it,te,!1),ie!==null&&Pe!==null&&q_(_t,Pe,ie,te,!0)}}t:{if(tt=Q?Ka(Q):window,it=tt.nodeName&&tt.nodeName.toLowerCase(),it==="select"||it==="input"&&tt.type==="file")var Gt=hp;else if(cp(tt))if(dp)Gt=fx;else{Gt=ux;var me=lx}else it=tt.nodeName,!it||it.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?Q&&ec(Q.elementType)&&(Gt=hp):Gt=cx;if(Gt&&(Gt=Gt(e,Q))){fp(_t,Gt,a,ft);break t}me&&me(e,tt,Q),e==="focusout"&&Q&&tt.type==="number"&&Q.memoizedProps.value!=null&&Cn(tt,"number",tt.value)}switch(me=Q?Ka(Q):window,e){case"focusin":(cp(me)||me.contentEditable==="true")&&(zr=me,mc=Q,js=null);break;case"focusout":js=mc=zr=null;break;case"mousedown":_c=!0;break;case"contextmenu":case"mouseup":case"dragend":_c=!1,yp(_t,a,ft);break;case"selectionchange":if(dx)break;case"keydown":case"keyup":yp(_t,a,ft)}var jt;if(fc)t:{switch(e){case"compositionstart":var ne="onCompositionStart";break t;case"compositionend":ne="onCompositionEnd";break t;case"compositionupdate":ne="onCompositionUpdate";break t}ne=void 0}else Br?lp(e,a)&&(ne="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ne="onCompositionStart");ne&&(rp&&a.locale!=="ko"&&(Br||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&Br&&(jt=tp()):(da=ft,sc="value"in da?da.value:da.textContent,Br=!0)),me=Jl(Q,ne),0<me.length&&(ne=new ip(ne,e,null,a,ft),_t.push({event:ne,listeners:me}),jt?ne.data=jt:(jt=up(a),jt!==null&&(ne.data=jt)))),(jt=ix?ax(e,a):rx(e,a))&&(ne=Jl(Q,"onBeforeInput"),0<ne.length&&(me=new ip("onBeforeInput","beforeinput",null,a,ft),_t.push({event:me,listeners:ne}),me.data=jt)),jx(_t,e,Q,a,ft)}W_(_t,i)})}function bo(e,i,a){return{instance:e,listener:i,currentTarget:a}}function Jl(e,i){for(var a=i+"Capture",o=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Vs(e,a),c!=null&&o.unshift(bo(e,c,f)),c=Vs(e,i),c!=null&&o.push(bo(e,c,f))),e.tag===3)return o;e=e.return}return[]}function os(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function q_(e,i,a,o,c){for(var f=i._reactName,S=[];a!==null&&a!==o;){var b=a,O=b.alternate,Q=b.stateNode;if(b=b.tag,O!==null&&O===o)break;b!==5&&b!==26&&b!==27||Q===null||(O=Q,c?(Q=Vs(a,f),Q!=null&&S.unshift(bo(a,Q,O))):c||(Q=Vs(a,f),Q!=null&&S.push(bo(a,Q,O)))),a=a.return}S.length!==0&&e.push({event:i,listeners:S})}var $x=/\r\n?/g,tS=/\u0000|\uFFFD/g;function Z_(e){return(typeof e=="string"?e:""+e).replace($x,`
`).replace(tS,"")}function j_(e,i){return i=Z_(i),Z_(e)===i}function $l(){}function Oe(e,i,a,o,c,f){switch(a){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||zn(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&zn(e,""+o);break;case"className":Ft(e,"class",o);break;case"tabIndex":Ft(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ft(e,a,o);break;case"style":Qd(e,o,f);break;case"data":if(i!=="object"){Ft(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ol(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(i!=="input"&&Oe(e,i,"name",c.name,c,null),Oe(e,i,"formEncType",c.formEncType,c,null),Oe(e,i,"formMethod",c.formMethod,c,null),Oe(e,i,"formTarget",c.formTarget,c,null)):(Oe(e,i,"encType",c.encType,c,null),Oe(e,i,"method",c.method,c,null),Oe(e,i,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ol(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=$l);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ol(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":xe("beforetoggle",e),xe("toggle",e),Lt(e,"popover",o);break;case"xlinkActuate":Ot(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ot(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ot(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ot(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ot(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ot(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Lt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=D0.get(a)||a,Lt(e,a,o))}}function Hf(e,i,a,o,c,f){switch(a){case"style":Qd(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?zn(e,o):(typeof o=="number"||typeof o=="bigint")&&zn(e,""+o);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=$l);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!sl.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),i=a.slice(2,c?a.length-7:void 0),f=e[Qe]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(i,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Lt(e,a,o)}}}function An(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Oe(e,i,f,S,a,null)}}c&&Oe(e,i,"srcSet",a.srcSet,a,null),o&&Oe(e,i,"src",a.src,a,null);return;case"input":xe("invalid",e);var b=f=S=c=null,O=null,Q=null;for(o in a)if(a.hasOwnProperty(o)){var ft=a[o];if(ft!=null)switch(o){case"name":c=ft;break;case"type":S=ft;break;case"checked":O=ft;break;case"defaultChecked":Q=ft;break;case"value":f=ft;break;case"defaultValue":b=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,i));break;default:Oe(e,i,o,ft,a,null)}}On(e,f,b,O,Q,S,c,!1),ge(e);return;case"select":xe("invalid",e),o=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":S=b;break;case"multiple":o=b;default:Oe(e,i,c,b,a,null)}i=f,a=S,e.multiple=!!o,i!=null?Je(e,!!o,i,!1):a!=null&&Je(e,!!o,a,!0);return;case"textarea":xe("invalid",e),f=c=o=null;for(S in a)if(a.hasOwnProperty(S)&&(b=a[S],b!=null))switch(S){case"value":o=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Oe(e,i,S,b,a,null)}Nr(e,o,c,f),ge(e);return;case"option":for(O in a)if(a.hasOwnProperty(O)&&(o=a[O],o!=null))switch(O){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Oe(e,i,O,o,a,null)}return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(o=0;o<Mo.length;o++)xe(Mo[o],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(o=a[Q],o!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Oe(e,i,Q,o,a,null)}return;default:if(ec(i)){for(ft in a)a.hasOwnProperty(ft)&&(o=a[ft],o!==void 0&&Hf(e,i,ft,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&Oe(e,i,b,o,a,null))}function eS(e,i,a,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,b=null,O=null,Q=null,ft=null;for(it in a){var _t=a[it];if(a.hasOwnProperty(it)&&_t!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":O=_t;default:o.hasOwnProperty(it)||Oe(e,i,it,null,o,_t)}}for(var tt in o){var it=o[tt];if(_t=a[tt],o.hasOwnProperty(tt)&&(it!=null||_t!=null))switch(tt){case"type":f=it;break;case"name":c=it;break;case"checked":Q=it;break;case"defaultChecked":ft=it;break;case"value":S=it;break;case"defaultValue":b=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,i));break;default:it!==_t&&Oe(e,i,tt,it,o,_t)}}Fe(e,S,b,O,Q,ft,f,c);return;case"select":it=S=b=tt=null;for(f in a)if(O=a[f],a.hasOwnProperty(f)&&O!=null)switch(f){case"value":break;case"multiple":it=O;default:o.hasOwnProperty(f)||Oe(e,i,f,null,o,O)}for(c in o)if(f=o[c],O=a[c],o.hasOwnProperty(c)&&(f!=null||O!=null))switch(c){case"value":tt=f;break;case"defaultValue":b=f;break;case"multiple":S=f;default:f!==O&&Oe(e,i,c,f,o,O)}i=b,a=S,o=it,tt!=null?Je(e,!!a,tt,!1):!!o!=!!a&&(i!=null?Je(e,!!a,i,!0):Je(e,!!a,a?[]:"",!1));return;case"textarea":it=tt=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Oe(e,i,b,null,o,c)}for(S in o)if(c=o[S],f=a[S],o.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":tt=c;break;case"defaultValue":it=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Oe(e,i,S,c,o,f)}Mn(e,tt,it);return;case"option":for(var ie in a)if(tt=a[ie],a.hasOwnProperty(ie)&&tt!=null&&!o.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:Oe(e,i,ie,null,o,tt)}for(O in o)if(tt=o[O],it=a[O],o.hasOwnProperty(O)&&tt!==it&&(tt!=null||it!=null))switch(O){case"selected":e.selected=tt&&typeof tt!="function"&&typeof tt!="symbol";break;default:Oe(e,i,O,tt,o,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)tt=a[te],a.hasOwnProperty(te)&&tt!=null&&!o.hasOwnProperty(te)&&Oe(e,i,te,null,o,tt);for(Q in o)if(tt=o[Q],it=a[Q],o.hasOwnProperty(Q)&&tt!==it&&(tt!=null||it!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(r(137,i));break;default:Oe(e,i,Q,tt,o,it)}return;default:if(ec(i)){for(var Pe in a)tt=a[Pe],a.hasOwnProperty(Pe)&&tt!==void 0&&!o.hasOwnProperty(Pe)&&Hf(e,i,Pe,void 0,o,tt);for(ft in o)tt=o[ft],it=a[ft],!o.hasOwnProperty(ft)||tt===it||tt===void 0&&it===void 0||Hf(e,i,ft,tt,o,it);return}}for(var W in a)tt=a[W],a.hasOwnProperty(W)&&tt!=null&&!o.hasOwnProperty(W)&&Oe(e,i,W,null,o,tt);for(_t in o)tt=o[_t],it=a[_t],!o.hasOwnProperty(_t)||tt===it||tt==null&&it==null||Oe(e,i,_t,tt,o,it)}var Vf=null,Gf=null;function tu(e){return e.nodeType===9?e:e.ownerDocument}function K_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Q_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function kf(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Xf=null;function nS(){var e=window.event;return e&&e.type==="popstate"?e===Xf?!1:(Xf=e,!0):(Xf=null,!1)}var J_=typeof setTimeout=="function"?setTimeout:void 0,iS=typeof clearTimeout=="function"?clearTimeout:void 0,$_=typeof Promise=="function"?Promise:void 0,aS=typeof queueMicrotask=="function"?queueMicrotask:typeof $_<"u"?function(e){return $_.resolve(null).then(e).catch(rS)}:J_;function rS(e){setTimeout(function(){throw e})}function wa(e){return e==="head"}function tg(e,i){var a=i,o=0,c=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var S=e.ownerDocument;if(a&1&&To(S.documentElement),a&2&&To(S.body),a&4)for(a=S.head,To(a),S=a.firstChild;S;){var b=S.nextSibling,O=S.nodeName;S[Ci]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=b}}if(c===0){e.removeChild(f),No(i);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);No(i)}function Wf(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Wf(a),Lr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function sS(e,i,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ci])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function oS(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_i(e.nextSibling),e===null))return null;return e}function Yf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function lS(e,i){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")i();else{var o=function(){i(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function _i(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var qf=null;function eg(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function ng(e,i,a){switch(i=tu(a),e){case"html":if(e=i.documentElement,!e)throw Error(r(452));return e;case"head":if(e=i.head,!e)throw Error(r(453));return e;case"body":if(e=i.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function To(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Lr(e)}var li=new Map,ig=new Set;function eu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ta=j.d;j.d={f:uS,r:cS,D:fS,C:hS,L:dS,m:pS,X:_S,S:mS,M:gS};function uS(){var e=ta.f(),i=Yl();return e||i}function cS(e){var i=fa(e);i!==null&&i.tag===5&&i.type==="form"?Mm(i):ta.r(e)}var ls=typeof document>"u"?null:document;function ag(e,i,a){var o=ls;if(o&&typeof i=="string"&&i){var c=gn(i);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),ig.has(c)||(ig.add(c),e={rel:e,crossOrigin:a,href:i},o.querySelector(c)===null&&(i=o.createElement("link"),An(i,"link",e),rn(i),o.head.appendChild(i)))}}function fS(e){ta.D(e),ag("dns-prefetch",e,null)}function hS(e,i){ta.C(e,i),ag("preconnect",e,i)}function dS(e,i,a){ta.L(e,i,a);var o=ls;if(o&&e&&i){var c='link[rel="preload"][as="'+gn(i)+'"]';i==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+gn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+gn(a.imageSizes)+'"]')):c+='[href="'+gn(e)+'"]';var f=c;switch(i){case"style":f=us(e);break;case"script":f=cs(e)}li.has(f)||(e=_({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),li.set(f,e),o.querySelector(c)!==null||i==="style"&&o.querySelector(Ao(f))||i==="script"&&o.querySelector(Ro(f))||(i=o.createElement("link"),An(i,"link",e),rn(i),o.head.appendChild(i)))}}function pS(e,i){ta.m(e,i);var a=ls;if(a&&e){var o=i&&typeof i.as=="string"?i.as:"script",c='link[rel="modulepreload"][as="'+gn(o)+'"][href="'+gn(e)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=cs(e)}if(!li.has(f)&&(e=_({rel:"modulepreload",href:e},i),li.set(f,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ro(f)))return}o=a.createElement("link"),An(o,"link",e),rn(o),a.head.appendChild(o)}}}function mS(e,i,a){ta.S(e,i,a);var o=ls;if(o&&e){var c=ha(o).hoistableStyles,f=us(e);i=i||"default";var S=c.get(f);if(!S){var b={loading:0,preload:null};if(S=o.querySelector(Ao(f)))b.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":i},a),(a=li.get(f))&&Zf(e,a);var O=S=o.createElement("link");rn(O),An(O,"link",e),O._p=new Promise(function(Q,ft){O.onload=Q,O.onerror=ft}),O.addEventListener("load",function(){b.loading|=1}),O.addEventListener("error",function(){b.loading|=2}),b.loading|=4,nu(S,i,o)}S={type:"stylesheet",instance:S,count:1,state:b},c.set(f,S)}}}function _S(e,i){ta.X(e,i);var a=ls;if(a&&e){var o=ha(a).hoistableScripts,c=cs(e),f=o.get(c);f||(f=a.querySelector(Ro(c)),f||(e=_({src:e,async:!0},i),(i=li.get(c))&&jf(e,i),f=a.createElement("script"),rn(f),An(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function gS(e,i){ta.M(e,i);var a=ls;if(a&&e){var o=ha(a).hoistableScripts,c=cs(e),f=o.get(c);f||(f=a.querySelector(Ro(c)),f||(e=_({src:e,async:!0,type:"module"},i),(i=li.get(c))&&jf(e,i),f=a.createElement("script"),rn(f),An(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function rg(e,i,a,o){var c=(c=pt.current)?eu(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=us(a.href),a=ha(c).hoistableStyles,o=a.get(i),o||(o={type:"style",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=us(a.href);var f=ha(c).hoistableStyles,S=f.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=c.querySelector(Ao(e)))&&!f._p&&(S.instance=f,S.state.loading=5),li.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},li.set(e,a),f||vS(c,e,a,S.state))),i&&o===null)throw Error(r(528,""));return S}if(i&&o!==null)throw Error(r(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=cs(a),a=ha(c).hoistableScripts,o=a.get(i),o||(o={type:"script",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function us(e){return'href="'+gn(e)+'"'}function Ao(e){return'link[rel="stylesheet"]['+e+"]"}function sg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function vS(e,i,a,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),An(i,"link",a),rn(i),e.head.appendChild(i))}function cs(e){return'[src="'+gn(e)+'"]'}function Ro(e){return"script[async]"+e}function og(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+gn(a.href)+'"]');if(o)return i.instance=o,rn(o),o;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),rn(o),An(o,"style",c),nu(o,a.precedence,e),i.instance=o;case"stylesheet":c=us(a.href);var f=e.querySelector(Ao(c));if(f)return i.state.loading|=4,i.instance=f,rn(f),f;o=sg(a),(c=li.get(c))&&Zf(o,c),f=(e.ownerDocument||e).createElement("link"),rn(f);var S=f;return S._p=new Promise(function(b,O){S.onload=b,S.onerror=O}),An(f,"link",o),i.state.loading|=4,nu(f,a.precedence,e),i.instance=f;case"script":return f=cs(a.src),(c=e.querySelector(Ro(f)))?(i.instance=c,rn(c),c):(o=a,(c=li.get(f))&&(o=_({},a),jf(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),rn(c),An(c,"link",o),e.head.appendChild(c),i.instance=c);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,nu(o,a.precedence,e));return i.instance}function nu(e,i,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,S=0;S<o.length;S++){var b=o[S];if(b.dataset.precedence===i)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function Zf(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function jf(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var iu=null;function lg(e,i,a){if(iu===null){var o=new Map,c=iu=new Map;c.set(a,o)}else c=iu,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Ci]||f[cn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(i)||"";S=e+S;var b=o.get(S);b?b.push(f):o.set(S,[f])}}return o}function ug(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function xS(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function cg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Co=null;function SS(){}function yS(e,i,a){if(Co===null)throw Error(r(475));var o=Co;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var c=us(a.href),f=e.querySelector(Ao(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=au.bind(o),e.then(o,o)),i.state.loading|=4,i.instance=f,rn(f);return}f=e.ownerDocument||e,a=sg(a),(c=li.get(c))&&Zf(a,c),f=f.createElement("link"),rn(f);var S=f;S._p=new Promise(function(b,O){S.onload=b,S.onerror=O}),An(f,"link",a),i.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(o.count++,i=au.bind(o),e.addEventListener("load",i),e.addEventListener("error",i))}}function ES(){if(Co===null)throw Error(r(475));var e=Co;return e.stylesheets&&e.count===0&&Kf(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&Kf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function au(){if(this.count--,this.count===0){if(this.stylesheets)Kf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ru=null;function Kf(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ru=new Map,i.forEach(MS,e),ru=null,au.call(e))}function MS(e,i){if(!(i.state.loading&4)){var a=ru.get(e);if(a)var o=a.get(null);else{a=new Map,ru.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}c=i.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,c),a.set(S,c),this.count++,o=au.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),i.state.loading|=4}}var wo={$$typeof:N,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function bS(e,i,a,o,c,f,S,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function fg(e,i,a,o,c,f,S,b,O,Q,ft,_t){return e=new bS(e,i,a,S,b,O,Q,_t),i=1,f===!0&&(i|=24),f=qn(3,null,null,i),e.current=f,f.stateNode=e,i=Dc(),i.refCount++,e.pooledCache=i,i.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:i},Oc(f),e}function hg(e){return e?(e=Vr,e):Vr}function dg(e,i,a,o,c,f){c=hg(c),o.context===null?o.context=c:o.pendingContext=c,o=_a(i),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=ga(e,o,i),a!==null&&(Jn(a,e,i),ao(a,e,i))}function pg(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function Qf(e,i){pg(e,i),(e=e.alternate)&&pg(e,i)}function mg(e){if(e.tag===13){var i=Hr(e,67108864);i!==null&&Jn(i,e,67108864),Qf(e,67108864)}}var su=!0;function TS(e,i,a,o){var c=P.T;P.T=null;var f=j.p;try{j.p=2,Jf(e,i,a,o)}finally{j.p=f,P.T=c}}function AS(e,i,a,o){var c=P.T;P.T=null;var f=j.p;try{j.p=8,Jf(e,i,a,o)}finally{j.p=f,P.T=c}}function Jf(e,i,a,o){if(su){var c=$f(o);if(c===null)Ff(e,i,o,ou,a),gg(e,o);else if(CS(c,e,i,a,o))o.stopPropagation();else if(gg(e,o),i&4&&-1<RS.indexOf(e)){for(;c!==null;){var f=fa(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Kt(f.pendingLanes);if(S!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;S;){var O=1<<31-zt(S);b.entanglements[1]|=O,S&=~O}Ni(f),(De&6)===0&&(Xl=Ht()+500,Eo(0))}}break;case 13:b=Hr(f,2),b!==null&&Jn(b,f,2),Yl(),Qf(f,2)}if(f=$f(o),f===null&&Ff(e,i,o,ou,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else Ff(e,i,o,null,a)}}function $f(e){return e=ic(e),th(e)}var ou=null;function th(e){if(ou=null,e=Hi(e),e!==null){var i=u(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=h(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return ou=e,null}function _g(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ge()){case Vt:return 2;case oe:return 8;case Ze:case je:return 32;case L:return 268435456;default:return 32}default:return 32}}var eh=!1,Da=null,Ua=null,La=null,Do=new Map,Uo=new Map,Na=[],RS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gg(e,i){switch(e){case"focusin":case"focusout":Da=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":Do.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(i.pointerId)}}function Lo(e,i,a,o,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:i,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},i!==null&&(i=fa(i),i!==null&&mg(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),e)}function CS(e,i,a,o,c){switch(i){case"focusin":return Da=Lo(Da,e,i,a,o,c),!0;case"dragenter":return Ua=Lo(Ua,e,i,a,o,c),!0;case"mouseover":return La=Lo(La,e,i,a,o,c),!0;case"pointerover":var f=c.pointerId;return Do.set(f,Lo(Do.get(f)||null,e,i,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Uo.set(f,Lo(Uo.get(f)||null,e,i,a,o,c)),!0}return!1}function vg(e){var i=Hi(e.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=h(a),i!==null){e.blockedOn=i,hi(e.priority,function(){if(a.tag===13){var o=Qn();o=re(o);var c=Hr(a,o);c!==null&&Jn(c,a,o),Qf(a,o)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lu(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=$f(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);nc=o,a.target.dispatchEvent(o),nc=null}else return i=fa(a),i!==null&&mg(i),e.blockedOn=a,!1;i.shift()}return!0}function xg(e,i,a){lu(e)&&a.delete(i)}function wS(){eh=!1,Da!==null&&lu(Da)&&(Da=null),Ua!==null&&lu(Ua)&&(Ua=null),La!==null&&lu(La)&&(La=null),Do.forEach(xg),Uo.forEach(xg)}function uu(e,i){e.blockedOn===i&&(e.blockedOn=null,eh||(eh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,wS)))}var cu=null;function Sg(e){cu!==e&&(cu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){cu===e&&(cu=null);for(var i=0;i<e.length;i+=3){var a=e[i],o=e[i+1],c=e[i+2];if(typeof o!="function"){if(th(o||a)===null)continue;break}var f=fa(a);f!==null&&(e.splice(i,3),i-=3,$c(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function No(e){function i(O){return uu(O,e)}Da!==null&&uu(Da,e),Ua!==null&&uu(Ua,e),La!==null&&uu(La,e),Do.forEach(i),Uo.forEach(i);for(var a=0;a<Na.length;a++){var o=Na[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Na.length&&(a=Na[0],a.blockedOn===null);)vg(a),a.blockedOn===null&&Na.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],S=c[Qe]||null;if(typeof f=="function")S||Sg(a);else if(S){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[Qe]||null)b=S.formAction;else if(th(c)!==null)continue}else b=S.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),Sg(a)}}}function nh(e){this._internalRoot=e}fu.prototype.render=nh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(r(409));var a=i.current,o=Qn();dg(a,o,e,i,null,null)},fu.prototype.unmount=nh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;dg(e.current,2,null,e,null,null),Yl(),i[Ri]=null}};function fu(e){this._internalRoot=e}fu.prototype.unstable_scheduleHydration=function(e){if(e){var i=Me();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Na.length&&i!==0&&i<Na[a].priority;a++);Na.splice(a,0,e),a===0&&vg(e)}};var yg=t.version;if(yg!=="19.1.1")throw Error(r(527,yg,"19.1.1"));j.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(i),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var DS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hu.isDisabled&&hu.supportsFiber)try{ct=hu.inject(DS),vt=hu}catch{}}return Po.createRoot=function(e,i){if(!l(e))throw Error(r(299));var a=!1,o="",c=zm,f=Im,S=Fm,b=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(f=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(b=i.unstable_transitionCallbacks)),i=fg(e,1,!1,null,null,a,o,c,f,S,b,null),e[Ri]=i.current,If(e),new nh(i)},Po.hydrateRoot=function(e,i,a){if(!l(e))throw Error(r(299));var o=!1,c="",f=zm,S=Im,b=Fm,O=null,Q=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(O=a.unstable_transitionCallbacks),a.formState!==void 0&&(Q=a.formState)),i=fg(e,1,!0,i,a??null,o,c,f,S,b,O,Q),i.context=hg(null),a=i.current,o=Qn(),o=re(o),c=_a(o),c.callback=null,ga(a,c,o),a=o,i.current.lanes=a,It(i,a),Ni(i),e[Ri]=i.current,If(e),new fu(i)},Po.version="19.1.1",Po}var Ug;function HS(){if(Ug)return ah.exports;Ug=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),ah.exports=FS(),ah.exports}var VS=HS(),uh=Pd();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bd="179",Ds={ROTATE:0,DOLLY:1,PAN:2},Rs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},GS=0,Lg=1,kS=2,kv=1,XS=2,sa=3,Wa=0,Xn=1,Bi=2,ka=0,Us=1,Ng=2,Og=3,Pg=4,WS=5,Sr=100,YS=101,qS=102,ZS=103,jS=104,KS=200,QS=201,JS=202,$S=203,Gh=204,kh=205,ty=206,ey=207,ny=208,iy=209,ay=210,ry=211,sy=212,oy=213,ly=214,Xh=0,Wh=1,Yh=2,Os=3,qh=4,Zh=5,jh=6,Kh=7,Xv=0,uy=1,cy=2,Xa=0,fy=1,hy=2,dy=3,py=4,my=5,_y=6,gy=7,Wv=300,Ps=301,Bs=302,Qh=303,Jh=304,Ju=306,$h=1e3,Er=1001,td=1002,Mi=1003,vy=1004,du=1005,zi=1006,ch=1007,Mr=1008,ua=1009,Yv=1010,qv=1011,Zo=1012,zd=1013,Tr=1014,oa=1015,$o=1016,Id=1017,Fd=1018,jo=1020,Zv=35902,jv=1021,Kv=1022,yi=1023,Ko=1026,Qo=1027,Qv=1028,Hd=1029,Jv=1030,Vd=1031,Gd=1033,Hu=33776,Vu=33777,Gu=33778,ku=33779,ed=35840,nd=35841,id=35842,ad=35843,rd=36196,sd=37492,od=37496,ld=37808,ud=37809,cd=37810,fd=37811,hd=37812,dd=37813,pd=37814,md=37815,_d=37816,gd=37817,vd=37818,xd=37819,Sd=37820,yd=37821,Xu=36492,Ed=36494,Md=36495,$v=36283,bd=36284,Td=36285,Ad=36286,xy=3200,Sy=3201,yy=0,Ey=1,Ga="",ci="srgb",zs="srgb-linear",qu="linear",Be="srgb",fs=7680,Bg=519,My=512,by=513,Ty=514,t0=515,Ay=516,Ry=517,Cy=518,wy=519,zg=35044,Ig="300 es",Ii=2e3,Zu=2001;class Cr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(n)===-1&&r[t].push(n)}hasEventListener(t,n){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(n)!==-1}removeEventListener(t,n){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(n);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const r=n[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wu=Math.PI/180,Rd=180/Math.PI;function tl(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[n&63|128]+Un[n>>8&255]+"-"+Un[n>>16&255]+Un[n>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function Se(s,t,n){return Math.max(t,Math.min(n,s))}function Dy(s,t){return(s%t+t)%t}function fh(s,t,n){return(1-n)*s+n*t}function Bo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Gn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Uy={DEG2RAD:Wu};class pe{constructor(t=0,n=0){pe.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,r=this.y,l=t.elements;return this.x=l[0]*n+l[3]*r+l[6],this.y=l[1]*n+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Se(this.x,t.x,n.x),this.y=Se(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Se(this.x,t,n),this.y=Se(this.y,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(Se(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y;return n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const r=Math.cos(n),l=Math.sin(n),u=this.x-t.x,h=this.y-t.y;return this.x=u*r-h*l+t.x,this.y=u*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ar{constructor(t=0,n=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=r,this._w=l}static slerpFlat(t,n,r,l,u,h,d){let m=r[l+0],p=r[l+1],_=r[l+2],g=r[l+3];const x=u[h+0],E=u[h+1],A=u[h+2],R=u[h+3];if(d===0){t[n+0]=m,t[n+1]=p,t[n+2]=_,t[n+3]=g;return}if(d===1){t[n+0]=x,t[n+1]=E,t[n+2]=A,t[n+3]=R;return}if(g!==R||m!==x||p!==E||_!==A){let y=1-d;const v=m*x+p*E+_*A+g*R,F=v>=0?1:-1,N=1-v*v;if(N>Number.EPSILON){const z=Math.sqrt(N),k=Math.atan2(z,v*F);y=Math.sin(y*k)/z,d=Math.sin(d*k)/z}const D=d*F;if(m=m*y+x*D,p=p*y+E*D,_=_*y+A*D,g=g*y+R*D,y===1-d){const z=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=z,p*=z,_*=z,g*=z}}t[n]=m,t[n+1]=p,t[n+2]=_,t[n+3]=g}static multiplyQuaternionsFlat(t,n,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],_=r[l+3],g=u[h],x=u[h+1],E=u[h+2],A=u[h+3];return t[n]=d*A+_*g+m*E-p*x,t[n+1]=m*A+_*x+p*g-d*E,t[n+2]=p*A+_*E+d*x-m*g,t[n+3]=_*A-d*g-m*x-p*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,r,l){return this._x=t,this._y=n,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const r=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),_=d(l/2),g=d(u/2),x=m(r/2),E=m(l/2),A=m(u/2);switch(h){case"XYZ":this._x=x*_*g+p*E*A,this._y=p*E*g-x*_*A,this._z=p*_*A+x*E*g,this._w=p*_*g-x*E*A;break;case"YXZ":this._x=x*_*g+p*E*A,this._y=p*E*g-x*_*A,this._z=p*_*A-x*E*g,this._w=p*_*g+x*E*A;break;case"ZXY":this._x=x*_*g-p*E*A,this._y=p*E*g+x*_*A,this._z=p*_*A+x*E*g,this._w=p*_*g-x*E*A;break;case"ZYX":this._x=x*_*g-p*E*A,this._y=p*E*g+x*_*A,this._z=p*_*A-x*E*g,this._w=p*_*g+x*E*A;break;case"YZX":this._x=x*_*g+p*E*A,this._y=p*E*g+x*_*A,this._z=p*_*A-x*E*g,this._w=p*_*g-x*E*A;break;case"XZY":this._x=x*_*g-p*E*A,this._y=p*E*g-x*_*A,this._z=p*_*A+x*E*g,this._w=p*_*g+x*E*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const r=n/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,r=n[0],l=n[4],u=n[8],h=n[1],d=n[5],m=n[9],p=n[2],_=n[6],g=n[10],x=r+d+g;if(x>0){const E=.5/Math.sqrt(x+1);this._w=.25/E,this._x=(_-m)*E,this._y=(u-p)*E,this._z=(h-l)*E}else if(r>d&&r>g){const E=2*Math.sqrt(1+r-d-g);this._w=(_-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(u+p)/E}else if(d>g){const E=2*Math.sqrt(1+d-r-g);this._w=(u-p)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+_)/E}else{const E=2*Math.sqrt(1+g-r-d);this._w=(h-l)/E,this._x=(u+p)/E,this._y=(m+_)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let r=t.dot(n)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,n){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,n/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const r=t._x,l=t._y,u=t._z,h=t._w,d=n._x,m=n._y,p=n._z,_=n._w;return this._x=r*_+h*d+l*p-u*m,this._y=l*_+h*m+u*d-r*p,this._z=u*_+h*p+r*m-l*d,this._w=h*_-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const E=1-n;return this._w=E*h+n*this._w,this._x=E*r+n*this._x,this._y=E*l+n*this._y,this._z=E*u+n*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,d),g=Math.sin((1-n)*_)/p,x=Math.sin(n*_)/p;return this._w=h*g+this._w*x,this._x=r*g+this._x*x,this._y=l*g+this._y*x,this._z=u*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,n,r){return this.copy(t).slerp(n,r)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(n),u*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(t=0,n=0,r=0){nt.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(t,n,r){return r===void 0&&(r=this.z),this.x=t,this.y=n,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Fg.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Fg.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*n+u[3]*r+u[6]*l,this.y=u[1]*n+u[4]*r+u[7]*l,this.z=u[2]*n+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,r=this.y,l=this.z,u=t.elements,h=1/(u[3]*n+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*n+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*n+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(t){const n=this.x,r=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),_=2*(d*n-u*l),g=2*(u*r-h*n);return this.x=n+m*p+h*g-d*_,this.y=r+m*_+d*p-u*g,this.z=l+m*g+u*_-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*n+u[4]*r+u[8]*l,this.y=u[1]*n+u[5]*r+u[9]*l,this.z=u[2]*n+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Se(this.x,t.x,n.x),this.y=Se(this.y,t.y,n.y),this.z=Se(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Se(this.x,t,n),this.y=Se(this.y,t,n),this.z=Se(this.z,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const r=t.x,l=t.y,u=t.z,h=n.x,d=n.y,m=n.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const r=t.dot(this)/n;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return hh.copy(this).projectOnVector(t),this.sub(hh)}reflect(t){return this.sub(hh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(Se(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return n*n+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,r){const l=Math.sin(n)*t;return this.x=l*Math.sin(r),this.y=Math.cos(n)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,r){return this.x=t*Math.sin(n),this.y=r,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=r,this.z=l,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(t),this.y=n,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hh=new nt,Fg=new Ar;class ue{constructor(t,n,r,l,u,h,d,m,p){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,l,u,h,d,m,p)}set(t,n,r,l,u,h,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=n,_[4]=u,_[5]=m,_[6]=r,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(t,n,r){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,l=n.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],_=r[4],g=r[7],x=r[2],E=r[5],A=r[8],R=l[0],y=l[3],v=l[6],F=l[1],N=l[4],D=l[7],z=l[2],k=l[5],H=l[8];return u[0]=h*R+d*F+m*z,u[3]=h*y+d*N+m*k,u[6]=h*v+d*D+m*H,u[1]=p*R+_*F+g*z,u[4]=p*y+_*N+g*k,u[7]=p*v+_*D+g*H,u[2]=x*R+E*F+A*z,u[5]=x*y+E*N+A*k,u[8]=x*v+E*D+A*H,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return n*h*_-n*d*p-r*u*_+r*d*m+l*u*p-l*h*m}invert(){const t=this.elements,n=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],g=_*h-d*p,x=d*m-_*u,E=p*u-h*m,A=n*g+r*x+l*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=g*R,t[1]=(l*p-_*r)*R,t[2]=(d*r-l*h)*R,t[3]=x*R,t[4]=(_*n-l*m)*R,t[5]=(l*u-d*n)*R,t[6]=E*R,t[7]=(r*m-p*n)*R,t[8]=(h*n-r*u)*R,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+n,0,0,1),this}scale(t,n){return this.premultiply(dh.makeScale(t,n)),this}rotate(t){return this.premultiply(dh.makeRotation(-t)),this}translate(t,n){return this.premultiply(dh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,r=t.elements;for(let l=0;l<9;l++)if(n[l]!==r[l])return!1;return!0}fromArray(t,n=0){for(let r=0;r<9;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const dh=new ue;function e0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ju(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ly(){const s=ju("canvas");return s.style.display="block",s}const Hg={};function Ls(s){s in Hg||(Hg[s]=!0,console.warn(s))}function Ny(s,t,n){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}const Vg=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gg=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Oy(){const s={enabled:!0,workingColorSpace:zs,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Be&&(l.r=la(l.r),l.g=la(l.g),l.b=la(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Be&&(l.r=Ns(l.r),l.g=Ns(l.g),l.b=Ns(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ga?qu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Ls("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Ls("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[zs]:{primaries:t,whitePoint:r,transfer:qu,toXYZ:Vg,fromXYZ:Gg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:t,whitePoint:r,transfer:Be,toXYZ:Vg,fromXYZ:Gg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),s}const Ae=Oy();function la(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ns(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let hs;class Py{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{hs===void 0&&(hs=ju("canvas")),hs.width=t.width,hs.height=t.height;const l=hs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=hs}return r.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=ju("canvas");n.width=t.width,n.height=t.height;const r=n.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=la(u[h]/255)*255;return r.putImageData(l,0,0),n}else if(t.data){const n=t.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(la(n[r]/255)*255):n[r]=la(n[r]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let By=0;class kd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=tl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(ph(l[h].image)):u.push(ph(l[h]))}else u=ph(l);r.url=u}return n||(t.images[this.uuid]=r),r}}function ph(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Py.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zy=0;const mh=new nt;class Wn extends Cr{constructor(t=Wn.DEFAULT_IMAGE,n=Wn.DEFAULT_MAPPING,r=Er,l=Er,u=zi,h=Mr,d=yi,m=ua,p=Wn.DEFAULT_ANISOTROPY,_=Ga){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=tl(),this.name="",this.source=new kd(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(mh).x}get height(){return this.source.getSize(mh).y}get depth(){return this.source.getSize(mh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const r=t[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[n]=r}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $h:t.x=t.x-Math.floor(t.x);break;case Er:t.x=t.x<0?0:1;break;case td:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $h:t.y=t.y-Math.floor(t.y);break;case Er:t.y=t.y<0?0:1;break;case td:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=Wv;Wn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,n=0,r=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,r,l){return this.x=t,this.y=n,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,r=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*n+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*n+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*n+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*n+h[7]*r+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,r,l,u;const m=t.elements,p=m[0],_=m[4],g=m[8],x=m[1],E=m[5],A=m[9],R=m[2],y=m[6],v=m[10];if(Math.abs(_-x)<.01&&Math.abs(g-R)<.01&&Math.abs(A-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(g+R)<.1&&Math.abs(A+y)<.1&&Math.abs(p+E+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const N=(p+1)/2,D=(E+1)/2,z=(v+1)/2,k=(_+x)/4,H=(g+R)/4,Z=(A+y)/4;return N>D&&N>z?N<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(N),l=k/r,u=H/r):D>z?D<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),r=k/l,u=Z/l):z<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(z),r=H/u,l=Z/u),this.set(r,l,u,n),this}let F=Math.sqrt((y-A)*(y-A)+(g-R)*(g-R)+(x-_)*(x-_));return Math.abs(F)<.001&&(F=1),this.x=(y-A)/F,this.y=(g-R)/F,this.z=(x-_)/F,this.w=Math.acos((p+E+v-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Se(this.x,t.x,n.x),this.y=Se(this.y,t.y,n.y),this.z=Se(this.z,t.z,n.z),this.w=Se(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Se(this.x,t,n),this.y=Se(this.y,t,n),this.z=Se(this.z,t,n),this.w=Se(this.w,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this.w=t.w+(n.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Iy extends Cr{constructor(t=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=r.depth,this.scissor=new an(0,0,t,n),this.scissorTest=!1,this.viewport=new an(0,0,t,n);const l={width:t,height:n,depth:r.depth},u=new Wn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const n={minFilter:zi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,r=1){if(this.width!==t||this.height!==n||this.depth!==r){this.width=t,this.height=n,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=n,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},t.textures[n].image);this.textures[n].source=new kd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rr extends Iy{constructor(t=1,n=1,r={}){super(t,n,r),this.isWebGLRenderTarget=!0}}class n0 extends Wn{constructor(t=null,n=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:r,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fy extends Wn{constructor(t=null,n=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:r,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class el{constructor(t=new nt(1/0,1/0,1/0),n=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n+=3)this.expandByPoint(gi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,r=t.count;n<r;n++)this.expandByPoint(gi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const r=gi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,gi):gi.fromBufferAttribute(u,h),gi.applyMatrix4(t.matrixWorld),this.expandByPoint(gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pu.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),pu.copy(r.boundingBox)),pu.applyMatrix4(t.matrixWorld),this.union(pu)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gi),gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,r;return t.normal.x>0?(n=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),n<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zo),mu.subVectors(this.max,zo),ds.subVectors(t.a,zo),ps.subVectors(t.b,zo),ms.subVectors(t.c,zo),Pa.subVectors(ps,ds),Ba.subVectors(ms,ps),dr.subVectors(ds,ms);let n=[0,-Pa.z,Pa.y,0,-Ba.z,Ba.y,0,-dr.z,dr.y,Pa.z,0,-Pa.x,Ba.z,0,-Ba.x,dr.z,0,-dr.x,-Pa.y,Pa.x,0,-Ba.y,Ba.x,0,-dr.y,dr.x,0];return!_h(n,ds,ps,ms,mu)||(n=[1,0,0,0,1,0,0,0,1],!_h(n,ds,ps,ms,mu))?!1:(_u.crossVectors(Pa,Ba),n=[_u.x,_u.y,_u.z],_h(n,ds,ps,ms,mu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ea),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ea=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],gi=new nt,pu=new el,ds=new nt,ps=new nt,ms=new nt,Pa=new nt,Ba=new nt,dr=new nt,zo=new nt,mu=new nt,_u=new nt,pr=new nt;function _h(s,t,n,r,l){for(let u=0,h=s.length-3;u<=h;u+=3){pr.fromArray(s,u);const d=l.x*Math.abs(pr.x)+l.y*Math.abs(pr.y)+l.z*Math.abs(pr.z),m=t.dot(pr),p=n.dot(pr),_=r.dot(pr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const Hy=new el,Io=new nt,gh=new nt;class Xd{constructor(t=new nt,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const r=this.center;n!==void 0?r.copy(n):Hy.setFromPoints(t).getCenter(r);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const r=this.center.distanceToSquared(t);return n.copy(t),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Io.subVectors(t,this.center);const n=Io.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),l=(r-this.radius)*.5;this.center.addScaledVector(Io,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Io.copy(t.center).add(gh)),this.expandByPoint(Io.copy(t.center).sub(gh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const na=new nt,vh=new nt,gu=new nt,za=new nt,xh=new nt,vu=new nt,Sh=new nt;class i0{constructor(t=new nt,n=new nt(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,na)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=na.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(na.copy(this.origin).addScaledVector(this.direction,n),na.distanceToSquared(t))}distanceSqToSegment(t,n,r,l){vh.copy(t).add(n).multiplyScalar(.5),gu.copy(n).sub(t).normalize(),za.copy(this.origin).sub(vh);const u=t.distanceTo(n)*.5,h=-this.direction.dot(gu),d=za.dot(this.direction),m=-za.dot(gu),p=za.lengthSq(),_=Math.abs(1-h*h);let g,x,E,A;if(_>0)if(g=h*m-d,x=h*d-m,A=u*_,g>=0)if(x>=-A)if(x<=A){const R=1/_;g*=R,x*=R,E=g*(g+h*x+2*d)+x*(h*g+x+2*m)+p}else x=u,g=Math.max(0,-(h*x+d)),E=-g*g+x*(x+2*m)+p;else x=-u,g=Math.max(0,-(h*x+d)),E=-g*g+x*(x+2*m)+p;else x<=-A?(g=Math.max(0,-(-h*u+d)),x=g>0?-u:Math.min(Math.max(-u,-m),u),E=-g*g+x*(x+2*m)+p):x<=A?(g=0,x=Math.min(Math.max(-u,-m),u),E=x*(x+2*m)+p):(g=Math.max(0,-(h*u+d)),x=g>0?u:Math.min(Math.max(-u,-m),u),E=-g*g+x*(x+2*m)+p);else x=h>0?-u:u,g=Math.max(0,-(h*x+d)),E=-g*g+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(vh).addScaledVector(gu,x),E}intersectSphere(t,n){na.subVectors(t.center,this.origin);const r=na.dot(this.direction),l=na.dot(na)-r*r,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/n;return r>=0?r:null}intersectPlane(t,n){const r=this.distanceToPlane(t);return r===null?null:this.at(r,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let r,l,u,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(r=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(r=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),_>=0?(u=(t.min.y-x.y)*_,h=(t.max.y-x.y)*_):(u=(t.max.y-x.y)*_,h=(t.min.y-x.y)*_),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),g>=0?(d=(t.min.z-x.z)*g,m=(t.max.z-x.z)*g):(d=(t.max.z-x.z)*g,m=(t.min.z-x.z)*g),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,n)}intersectsBox(t){return this.intersectBox(t,na)!==null}intersectTriangle(t,n,r,l,u){xh.subVectors(n,t),vu.subVectors(r,t),Sh.crossVectors(xh,vu);let h=this.direction.dot(Sh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;za.subVectors(this.origin,t);const m=d*this.direction.dot(vu.crossVectors(za,vu));if(m<0)return null;const p=d*this.direction.dot(xh.cross(za));if(p<0||m+p>h)return null;const _=-d*za.dot(Sh);return _<0?null:this.at(_/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pn{constructor(t,n,r,l,u,h,d,m,p,_,g,x,E,A,R,y){pn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,l,u,h,d,m,p,_,g,x,E,A,R,y)}set(t,n,r,l,u,h,d,m,p,_,g,x,E,A,R,y){const v=this.elements;return v[0]=t,v[4]=n,v[8]=r,v[12]=l,v[1]=u,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=_,v[10]=g,v[14]=x,v[3]=E,v[7]=A,v[11]=R,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pn().fromArray(this.elements)}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(t){const n=this.elements,r=t.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,r){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,n,r){return this.set(t.x,n.x,r.x,0,t.y,n.y,r.y,0,t.z,n.z,r.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,r=t.elements,l=1/_s.setFromMatrixColumn(t,0).length(),u=1/_s.setFromMatrixColumn(t,1).length(),h=1/_s.setFromMatrixColumn(t,2).length();return n[0]=r[0]*l,n[1]=r[1]*l,n[2]=r[2]*l,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*h,n[9]=r[9]*h,n[10]=r[10]*h,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,r=t.x,l=t.y,u=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const x=h*_,E=h*g,A=d*_,R=d*g;n[0]=m*_,n[4]=-m*g,n[8]=p,n[1]=E+A*p,n[5]=x-R*p,n[9]=-d*m,n[2]=R-x*p,n[6]=A+E*p,n[10]=h*m}else if(t.order==="YXZ"){const x=m*_,E=m*g,A=p*_,R=p*g;n[0]=x+R*d,n[4]=A*d-E,n[8]=h*p,n[1]=h*g,n[5]=h*_,n[9]=-d,n[2]=E*d-A,n[6]=R+x*d,n[10]=h*m}else if(t.order==="ZXY"){const x=m*_,E=m*g,A=p*_,R=p*g;n[0]=x-R*d,n[4]=-h*g,n[8]=A+E*d,n[1]=E+A*d,n[5]=h*_,n[9]=R-x*d,n[2]=-h*p,n[6]=d,n[10]=h*m}else if(t.order==="ZYX"){const x=h*_,E=h*g,A=d*_,R=d*g;n[0]=m*_,n[4]=A*p-E,n[8]=x*p+R,n[1]=m*g,n[5]=R*p+x,n[9]=E*p-A,n[2]=-p,n[6]=d*m,n[10]=h*m}else if(t.order==="YZX"){const x=h*m,E=h*p,A=d*m,R=d*p;n[0]=m*_,n[4]=R-x*g,n[8]=A*g+E,n[1]=g,n[5]=h*_,n[9]=-d*_,n[2]=-p*_,n[6]=E*g+A,n[10]=x-R*g}else if(t.order==="XZY"){const x=h*m,E=h*p,A=d*m,R=d*p;n[0]=m*_,n[4]=-g,n[8]=p*_,n[1]=x*g+R,n[5]=h*_,n[9]=E*g-A,n[2]=A*g-E,n[6]=d*_,n[10]=R*g+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vy,t,Gy)}lookAt(t,n,r){const l=this.elements;return $n.subVectors(t,n),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Ia.crossVectors(r,$n),Ia.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Ia.crossVectors(r,$n)),Ia.normalize(),xu.crossVectors($n,Ia),l[0]=Ia.x,l[4]=xu.x,l[8]=$n.x,l[1]=Ia.y,l[5]=xu.y,l[9]=$n.y,l[2]=Ia.z,l[6]=xu.z,l[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,l=n.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],_=r[1],g=r[5],x=r[9],E=r[13],A=r[2],R=r[6],y=r[10],v=r[14],F=r[3],N=r[7],D=r[11],z=r[15],k=l[0],H=l[4],Z=l[8],w=l[12],C=l[1],B=l[5],lt=l[9],ut=l[13],ht=l[2],dt=l[6],P=l[10],j=l[14],Y=l[3],yt=l[7],U=l[11],J=l[15];return u[0]=h*k+d*C+m*ht+p*Y,u[4]=h*H+d*B+m*dt+p*yt,u[8]=h*Z+d*lt+m*P+p*U,u[12]=h*w+d*ut+m*j+p*J,u[1]=_*k+g*C+x*ht+E*Y,u[5]=_*H+g*B+x*dt+E*yt,u[9]=_*Z+g*lt+x*P+E*U,u[13]=_*w+g*ut+x*j+E*J,u[2]=A*k+R*C+y*ht+v*Y,u[6]=A*H+R*B+y*dt+v*yt,u[10]=A*Z+R*lt+y*P+v*U,u[14]=A*w+R*ut+y*j+v*J,u[3]=F*k+N*C+D*ht+z*Y,u[7]=F*H+N*B+D*dt+z*yt,u[11]=F*Z+N*lt+D*P+z*U,u[15]=F*w+N*ut+D*j+z*J,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],_=t[2],g=t[6],x=t[10],E=t[14],A=t[3],R=t[7],y=t[11],v=t[15];return A*(+u*m*g-l*p*g-u*d*x+r*p*x+l*d*E-r*m*E)+R*(+n*m*E-n*p*x+u*h*x-l*h*E+l*p*_-u*m*_)+y*(+n*p*g-n*d*E-u*h*g+r*h*E+u*d*_-r*p*_)+v*(-l*d*_-n*m*g+n*d*x+l*h*g-r*h*x+r*m*_)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=n,l[14]=r),this}invert(){const t=this.elements,n=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],g=t[9],x=t[10],E=t[11],A=t[12],R=t[13],y=t[14],v=t[15],F=g*y*p-R*x*p+R*m*E-d*y*E-g*m*v+d*x*v,N=A*x*p-_*y*p-A*m*E+h*y*E+_*m*v-h*x*v,D=_*R*p-A*g*p+A*d*E-h*R*E-_*d*v+h*g*v,z=A*g*m-_*R*m-A*d*x+h*R*x+_*d*y-h*g*y,k=n*F+r*N+l*D+u*z;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/k;return t[0]=F*H,t[1]=(R*x*u-g*y*u-R*l*E+r*y*E+g*l*v-r*x*v)*H,t[2]=(d*y*u-R*m*u+R*l*p-r*y*p-d*l*v+r*m*v)*H,t[3]=(g*m*u-d*x*u-g*l*p+r*x*p+d*l*E-r*m*E)*H,t[4]=N*H,t[5]=(_*y*u-A*x*u+A*l*E-n*y*E-_*l*v+n*x*v)*H,t[6]=(A*m*u-h*y*u-A*l*p+n*y*p+h*l*v-n*m*v)*H,t[7]=(h*x*u-_*m*u+_*l*p-n*x*p-h*l*E+n*m*E)*H,t[8]=D*H,t[9]=(A*g*u-_*R*u-A*r*E+n*R*E+_*r*v-n*g*v)*H,t[10]=(h*R*u-A*d*u+A*r*p-n*R*p-h*r*v+n*d*v)*H,t[11]=(_*d*u-h*g*u-_*r*p+n*g*p+h*r*E-n*d*E)*H,t[12]=z*H,t[13]=(_*R*l-A*g*l+A*r*x-n*R*x-_*r*y+n*g*y)*H,t[14]=(A*d*l-h*R*l-A*r*m+n*R*m+h*r*y-n*d*y)*H,t[15]=(h*g*l-_*d*l+_*r*m-n*g*m-h*r*x+n*d*x)*H,this}scale(t){const n=this.elements,r=t.x,l=t.y,u=t.z;return n[0]*=r,n[4]*=l,n[8]*=u,n[1]*=r,n[5]*=l,n[9]*=u,n[2]*=r,n[6]*=l,n[10]*=u,n[3]*=r,n[7]*=l,n[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,r,l))}makeTranslation(t,n,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const r=Math.cos(n),l=Math.sin(n),u=1-r,h=t.x,d=t.y,m=t.z,p=u*h,_=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+r,_*m-l*h,0,p*m-l*d,_*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(t,n,r){return this.set(t,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,n,r,l,u,h){return this.set(1,r,u,0,t,1,h,0,n,l,1,0,0,0,0,1),this}compose(t,n,r){const l=this.elements,u=n._x,h=n._y,d=n._z,m=n._w,p=u+u,_=h+h,g=d+d,x=u*p,E=u*_,A=u*g,R=h*_,y=h*g,v=d*g,F=m*p,N=m*_,D=m*g,z=r.x,k=r.y,H=r.z;return l[0]=(1-(R+v))*z,l[1]=(E+D)*z,l[2]=(A-N)*z,l[3]=0,l[4]=(E-D)*k,l[5]=(1-(x+v))*k,l[6]=(y+F)*k,l[7]=0,l[8]=(A+N)*H,l[9]=(y-F)*H,l[10]=(1-(x+R))*H,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,n,r){const l=this.elements;let u=_s.set(l[0],l[1],l[2]).length();const h=_s.set(l[4],l[5],l[6]).length(),d=_s.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],vi.copy(this);const p=1/u,_=1/h,g=1/d;return vi.elements[0]*=p,vi.elements[1]*=p,vi.elements[2]*=p,vi.elements[4]*=_,vi.elements[5]*=_,vi.elements[6]*=_,vi.elements[8]*=g,vi.elements[9]*=g,vi.elements[10]*=g,n.setFromRotationMatrix(vi),r.x=u,r.y=h,r.z=d,this}makePerspective(t,n,r,l,u,h,d=Ii,m=!1){const p=this.elements,_=2*u/(n-t),g=2*u/(r-l),x=(n+t)/(n-t),E=(r+l)/(r-l);let A,R;if(m)A=u/(h-u),R=h*u/(h-u);else if(d===Ii)A=-(h+u)/(h-u),R=-2*h*u/(h-u);else if(d===Zu)A=-h/(h-u),R=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,r,l,u,h,d=Ii,m=!1){const p=this.elements,_=2/(n-t),g=2/(r-l),x=-(n+t)/(n-t),E=-(r+l)/(r-l);let A,R;if(m)A=1/(h-u),R=h/(h-u);else if(d===Ii)A=-2/(h-u),R=-(h+u)/(h-u);else if(d===Zu)A=-1/(h-u),R=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=A,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,r=t.elements;for(let l=0;l<16;l++)if(n[l]!==r[l])return!1;return!0}fromArray(t,n=0){for(let r=0;r<16;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t[n+9]=r[9],t[n+10]=r[10],t[n+11]=r[11],t[n+12]=r[12],t[n+13]=r[13],t[n+14]=r[14],t[n+15]=r[15],t}}const _s=new nt,vi=new pn,Vy=new nt(0,0,0),Gy=new nt(1,1,1),Ia=new nt,xu=new nt,$n=new nt,kg=new pn,Xg=new Ar;class ca{constructor(t=0,n=0,r=0,l=ca.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,l=this._order){return this._x=t,this._y=n,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],g=l[2],x=l[6],E=l[10];switch(n){case"XYZ":this._y=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,E),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Se(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,E),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Se(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,E),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return kg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kg,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Xg.setFromEuler(this),this.setFromQuaternion(Xg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ca.DEFAULT_ORDER="XYZ";class a0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ky=0;const Wg=new nt,gs=new Ar,ia=new pn,Su=new nt,Fo=new nt,Xy=new nt,Wy=new Ar,Yg=new nt(1,0,0),qg=new nt(0,1,0),Zg=new nt(0,0,1),jg={type:"added"},Yy={type:"removed"},vs={type:"childadded",child:null},yh={type:"childremoved",child:null};class ei extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=tl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ei.DEFAULT_UP.clone();const t=new nt,n=new ca,r=new Ar,l=new nt(1,1,1);function u(){r.setFromEuler(n,!1)}function h(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new pn},normalMatrix:{value:new ue}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=ei.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new a0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return gs.setFromAxisAngle(t,n),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,n){return gs.setFromAxisAngle(t,n),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(Yg,t)}rotateY(t){return this.rotateOnAxis(qg,t)}rotateZ(t){return this.rotateOnAxis(Zg,t)}translateOnAxis(t,n){return Wg.copy(t).applyQuaternion(this.quaternion),this.position.add(Wg.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Yg,t)}translateY(t){return this.translateOnAxis(qg,t)}translateZ(t){return this.translateOnAxis(Zg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ia.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?Su.copy(t):Su.set(t,n,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ia.lookAt(Fo,Su,this.up):ia.lookAt(Su,Fo,this.up),this.quaternion.setFromRotationMatrix(ia),l&&(ia.extractRotation(l.matrixWorld),gs.setFromRotationMatrix(ia),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jg),vs.child=t,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Yy),yh.child=t,this.dispatchEvent(yh),yh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ia.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ia.multiply(t.parent.matrixWorld)),t.applyMatrix4(ia),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jg),vs.child=t,this.dispatchEvent(vs),vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,n);if(h!==void 0)return h}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,t,Xy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,Wy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let r=0,l=n.length;r<l;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let r=0,l=n.length;r<l;r++)n[r].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let r=0,l=n.length;r<l;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];u(t.shapes,g)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(n){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),_=h(t.images),g=h(t.shapes),x=h(t.skeletons),E=h(t.animations),A=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),E.length>0&&(r.animations=E),A.length>0&&(r.nodes=A)}return r.object=l,r;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}ei.DEFAULT_UP=new nt(0,1,0);ei.DEFAULT_MATRIX_AUTO_UPDATE=!0;ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new nt,aa=new nt,Eh=new nt,ra=new nt,xs=new nt,Ss=new nt,Kg=new nt,Mh=new nt,bh=new nt,Th=new nt,Ah=new an,Rh=new an,Ch=new an;class Si{constructor(t=new nt,n=new nt,r=new nt){this.a=t,this.b=n,this.c=r}static getNormal(t,n,r,l){l.subVectors(r,n),xi.subVectors(t,n),l.cross(xi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,n,r,l,u){xi.subVectors(l,n),aa.subVectors(r,n),Eh.subVectors(t,n);const h=xi.dot(xi),d=xi.dot(aa),m=xi.dot(Eh),p=aa.dot(aa),_=aa.dot(Eh),g=h*p-d*d;if(g===0)return u.set(0,0,0),null;const x=1/g,E=(p*m-d*_)*x,A=(h*_-d*m)*x;return u.set(1-E-A,A,E)}static containsPoint(t,n,r,l){return this.getBarycoord(t,n,r,l,ra)===null?!1:ra.x>=0&&ra.y>=0&&ra.x+ra.y<=1}static getInterpolation(t,n,r,l,u,h,d,m){return this.getBarycoord(t,n,r,l,ra)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ra.x),m.addScaledVector(h,ra.y),m.addScaledVector(d,ra.z),m)}static getInterpolatedAttribute(t,n,r,l,u,h){return Ah.setScalar(0),Rh.setScalar(0),Ch.setScalar(0),Ah.fromBufferAttribute(t,n),Rh.fromBufferAttribute(t,r),Ch.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Ah,u.x),h.addScaledVector(Rh,u.y),h.addScaledVector(Ch,u.z),h}static isFrontFacing(t,n,r,l){return xi.subVectors(r,n),aa.subVectors(t,n),xi.cross(aa).dot(l)<0}set(t,n,r){return this.a.copy(t),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(t,n,r,l){return this.a.copy(t[n]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,n,r,l){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xi.subVectors(this.c,this.b),aa.subVectors(this.a,this.b),xi.cross(aa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Si.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,l,u){return Si.getInterpolation(t,this.a,this.b,this.c,n,r,l,u)}containsPoint(t){return Si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const r=this.a,l=this.b,u=this.c;let h,d;xs.subVectors(l,r),Ss.subVectors(u,r),Mh.subVectors(t,r);const m=xs.dot(Mh),p=Ss.dot(Mh);if(m<=0&&p<=0)return n.copy(r);bh.subVectors(t,l);const _=xs.dot(bh),g=Ss.dot(bh);if(_>=0&&g<=_)return n.copy(l);const x=m*g-_*p;if(x<=0&&m>=0&&_<=0)return h=m/(m-_),n.copy(r).addScaledVector(xs,h);Th.subVectors(t,u);const E=xs.dot(Th),A=Ss.dot(Th);if(A>=0&&E<=A)return n.copy(u);const R=E*p-m*A;if(R<=0&&p>=0&&A<=0)return d=p/(p-A),n.copy(r).addScaledVector(Ss,d);const y=_*A-E*g;if(y<=0&&g-_>=0&&E-A>=0)return Kg.subVectors(u,l),d=(g-_)/(g-_+(E-A)),n.copy(l).addScaledVector(Kg,d);const v=1/(y+R+x);return h=R*v,d=x*v,n.copy(r).addScaledVector(xs,h).addScaledVector(Ss,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const r0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fa={h:0,s:0,l:0},yu={h:0,s:0,l:0};function wh(s,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(t-s)*6*n:n<1/2?t:n<2/3?s+(t-s)*6*(2/3-n):s}let Ie=class{constructor(t,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,r)}set(t,n,r){if(n===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,n,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,n),this}setRGB(t,n,r,l=Ae.workingColorSpace){return this.r=t,this.g=n,this.b=r,Ae.colorSpaceToWorking(this,l),this}setHSL(t,n,r,l=Ae.workingColorSpace){if(t=Dy(t,1),n=Se(n,0,1),r=Se(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,h=2*r-u;this.r=wh(h,u,t+1/3),this.g=wh(h,u,t),this.b=wh(h,u,t-1/3)}return Ae.colorSpaceToWorking(this,l),this}setStyle(t,n=ci){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(h===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=ci){const r=r0[t.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=la(t.r),this.g=la(t.g),this.b=la(t.b),this}copyLinearToSRGB(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return Ae.workingToColorSpace(Ln.copy(this),t),Math.round(Se(Ln.r*255,0,255))*65536+Math.round(Se(Ln.g*255,0,255))*256+Math.round(Se(Ln.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ae.workingColorSpace){Ae.workingToColorSpace(Ln.copy(this),n);const r=Ln.r,l=Ln.g,u=Ln.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=_<=.5?g/(h+d):g/(2-h-d),h){case r:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-r)/g+2;break;case u:m=(r-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,n=Ae.workingColorSpace){return Ae.workingToColorSpace(Ln.copy(this),n),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=ci){Ae.workingToColorSpace(Ln.copy(this),t);const n=Ln.r,r=Ln.g,l=Ln.b;return t!==ci?`color(${t} ${n.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,n,r){return this.getHSL(Fa),this.setHSL(Fa.h+t,Fa.s+n,Fa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,r){return this.r=t.r+(n.r-t.r)*r,this.g=t.g+(n.g-t.g)*r,this.b=t.b+(n.b-t.b)*r,this}lerpHSL(t,n){this.getHSL(Fa),t.getHSL(yu);const r=fh(Fa.h,yu.h,n),l=fh(Fa.s,yu.s,n),u=fh(Fa.l,yu.l,n);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*n+u[3]*r+u[6]*l,this.g=u[1]*n+u[4]*r+u[7]*l,this.b=u[2]*n+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Ln=new Ie;Ie.NAMES=r0;let qy=0;class $u extends Cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=tl(),this.name="",this.type="Material",this.blending=Us,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gh,this.blendDst=kh,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const r=t[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[n]=r}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(r.blending=this.blending),this.side!==Wa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Gh&&(r.blendSrc=this.blendSrc),this.blendDst!==kh&&(r.blendDst=this.blendDst),this.blendEquation!==Sr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(n){const u=l(t.textures),h=l(t.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let r=null;if(n!==null){const l=n.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class s0 extends $u{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ca,this.combine=Xv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ln=new nt,Eu=new pe;let Zy=0;class bi{constructor(t,n,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zy++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=r,this.usage=zg,this.updateRanges=[],this.gpuType=oa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,r){t*=this.itemSize,r*=n.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=n.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Eu.fromBufferAttribute(this,n),Eu.applyMatrix3(t),this.setXY(n,Eu.x,Eu.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)ln.fromBufferAttribute(this,n),ln.applyMatrix3(t),this.setXYZ(n,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let n=0,r=this.count;n<r;n++)ln.fromBufferAttribute(this,n),ln.applyMatrix4(t),this.setXYZ(n,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let n=0,r=this.count;n<r;n++)ln.fromBufferAttribute(this,n),ln.applyNormalMatrix(t),this.setXYZ(n,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let n=0,r=this.count;n<r;n++)ln.fromBufferAttribute(this,n),ln.transformDirection(t),this.setXYZ(n,ln.x,ln.y,ln.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let r=this.array[t*this.itemSize+n];return this.normalized&&(r=Bo(r,this.array)),r}setComponent(t,n,r){return this.normalized&&(r=Gn(r,this.array)),this.array[t*this.itemSize+n]=r,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Bo(n,this.array)),n}setX(t,n){return this.normalized&&(n=Gn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Bo(n,this.array)),n}setY(t,n){return this.normalized&&(n=Gn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Bo(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Gn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Bo(n,this.array)),n}setW(t,n){return this.normalized&&(n=Gn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,r){return t*=this.itemSize,this.normalized&&(n=Gn(n,this.array),r=Gn(r,this.array)),this.array[t+0]=n,this.array[t+1]=r,this}setXYZ(t,n,r,l){return t*=this.itemSize,this.normalized&&(n=Gn(n,this.array),r=Gn(r,this.array),l=Gn(l,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,n,r,l,u){return t*=this.itemSize,this.normalized&&(n=Gn(n,this.array),r=Gn(r,this.array),l=Gn(l,this.array),u=Gn(u,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zg&&(t.usage=this.usage),t}}class o0 extends bi{constructor(t,n,r){super(new Uint16Array(t),n,r)}}class l0 extends bi{constructor(t,n,r){super(new Uint32Array(t),n,r)}}class br extends bi{constructor(t,n,r){super(new Float32Array(t),n,r)}}let jy=0;const ui=new pn,Dh=new ei,ys=new nt,ti=new el,Ho=new el,yn=new nt;class qa extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=tl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(e0(t)?l0:o0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,r=0){this.groups.push({start:t,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ue().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,n,r){return ui.makeTranslation(t,n,r),this.applyMatrix4(ui),this}scale(t,n,r){return ui.makeScale(t,n,r),this.applyMatrix4(ui),this}lookAt(t){return Dh.lookAt(t),Dh.updateMatrix(),this.applyMatrix4(Dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new br(r,3))}else{const r=Math.min(t.length,n.count);for(let l=0;l<r;l++){const u=t[l];n.setXYZ(l,u.x,u.y,u.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new el);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let r=0,l=n.length;r<l;r++){const u=n[r];ti.setFromBufferAttribute(u),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xd);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new nt,1/0);return}if(t){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),n)for(let u=0,h=n.length;u<h;u++){const d=n[u];Ho.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(ti.min,Ho.min),ti.expandByPoint(yn),yn.addVectors(ti.max,Ho.max),ti.expandByPoint(yn)):(ti.expandByPoint(Ho.min),ti.expandByPoint(Ho.max))}ti.getCenter(r);let l=0;for(let u=0,h=t.count;u<h;u++)yn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(yn));if(n)for(let u=0,h=n.length;u<h;u++){const d=n[u],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)yn.fromBufferAttribute(d,p),m&&(ys.fromBufferAttribute(t,p),yn.add(ys)),l=Math.max(l,r.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,l=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Z=0;Z<r.count;Z++)d[Z]=new nt,m[Z]=new nt;const p=new nt,_=new nt,g=new nt,x=new pe,E=new pe,A=new pe,R=new nt,y=new nt;function v(Z,w,C){p.fromBufferAttribute(r,Z),_.fromBufferAttribute(r,w),g.fromBufferAttribute(r,C),x.fromBufferAttribute(u,Z),E.fromBufferAttribute(u,w),A.fromBufferAttribute(u,C),_.sub(p),g.sub(p),E.sub(x),A.sub(x);const B=1/(E.x*A.y-A.x*E.y);isFinite(B)&&(R.copy(_).multiplyScalar(A.y).addScaledVector(g,-E.y).multiplyScalar(B),y.copy(g).multiplyScalar(E.x).addScaledVector(_,-A.x).multiplyScalar(B),d[Z].add(R),d[w].add(R),d[C].add(R),m[Z].add(y),m[w].add(y),m[C].add(y))}let F=this.groups;F.length===0&&(F=[{start:0,count:t.count}]);for(let Z=0,w=F.length;Z<w;++Z){const C=F[Z],B=C.start,lt=C.count;for(let ut=B,ht=B+lt;ut<ht;ut+=3)v(t.getX(ut+0),t.getX(ut+1),t.getX(ut+2))}const N=new nt,D=new nt,z=new nt,k=new nt;function H(Z){z.fromBufferAttribute(l,Z),k.copy(z);const w=d[Z];N.copy(w),N.sub(z.multiplyScalar(z.dot(w))).normalize(),D.crossVectors(k,w);const B=D.dot(m[Z])<0?-1:1;h.setXYZW(Z,N.x,N.y,N.z,B)}for(let Z=0,w=F.length;Z<w;++Z){const C=F[Z],B=C.start,lt=C.count;for(let ut=B,ht=B+lt;ut<ht;ut+=3)H(t.getX(ut+0)),H(t.getX(ut+1)),H(t.getX(ut+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new bi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,E=r.count;x<E;x++)r.setXYZ(x,0,0,0);const l=new nt,u=new nt,h=new nt,d=new nt,m=new nt,p=new nt,_=new nt,g=new nt;if(t)for(let x=0,E=t.count;x<E;x+=3){const A=t.getX(x+0),R=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(n,A),u.fromBufferAttribute(n,R),h.fromBufferAttribute(n,y),_.subVectors(h,u),g.subVectors(l,u),_.cross(g),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,y),d.add(_),m.add(_),p.add(_),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,E=n.count;x<E;x+=3)l.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),h.fromBufferAttribute(n,x+2),_.subVectors(h,u),g.subVectors(l,u),_.cross(g),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,r=t.count;n<r;n++)yn.fromBufferAttribute(t,n),yn.normalize(),t.setXYZ(n,yn.x,yn.y,yn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,g=d.normalized,x=new p.constructor(m.length*_);let E=0,A=0;for(let R=0,y=m.length;R<y;R++){d.isInterleavedBufferAttribute?E=m[R]*d.data.stride+d.offset:E=m[R]*_;for(let v=0;v<_;v++)x[A++]=p[E++]}return new bi(x,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qa,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);n.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let _=0,g=p.length;_<g;_++){const x=p[_],E=t(x,r);m.push(E)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,x=p.length;g<x;g++){const E=p[g];_.push(E.toJSON(t.data))}_.length>0&&(l[m]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(n))}const u=t.morphAttributes;for(const p in u){const _=[],g=u[p];for(let x=0,E=g.length;x<E;x++)_.push(g[x].clone(n));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,_=h.length;p<_;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qg=new pn,mr=new i0,Mu=new Xd,Jg=new nt,bu=new nt,Tu=new nt,Au=new nt,Uh=new nt,Ru=new nt,$g=new nt,Cu=new nt;class Ei extends ei{constructor(t=new qa,n=new s0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const l=n[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,n){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;n.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){Ru.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=d[m],g=u[m];_!==0&&(Uh.fromBufferAttribute(g,t),h?Ru.addScaledVector(Uh,_):Ru.addScaledVector(Uh.sub(n),_))}n.add(Ru)}return n}raycast(t,n){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Mu.copy(r.boundingSphere),Mu.applyMatrix4(u),mr.copy(t.ray).recast(t.near),!(Mu.containsPoint(mr.origin)===!1&&(mr.intersectSphere(Mu,Jg)===null||mr.origin.distanceToSquared(Jg)>(t.far-t.near)**2))&&(Qg.copy(u).invert(),mr.copy(t.ray).applyMatrix4(Qg),!(r.boundingBox!==null&&mr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,n,mr)))}_computeIntersections(t,n,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,g=u.attributes.normal,x=u.groups,E=u.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,R=x.length;A<R;A++){const y=x[A],v=h[y.materialIndex],F=Math.max(y.start,E.start),N=Math.min(d.count,Math.min(y.start+y.count,E.start+E.count));for(let D=F,z=N;D<z;D+=3){const k=d.getX(D),H=d.getX(D+1),Z=d.getX(D+2);l=wu(this,v,t,r,p,_,g,k,H,Z),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,n.push(l))}}else{const A=Math.max(0,E.start),R=Math.min(d.count,E.start+E.count);for(let y=A,v=R;y<v;y+=3){const F=d.getX(y),N=d.getX(y+1),D=d.getX(y+2);l=wu(this,h,t,r,p,_,g,F,N,D),l&&(l.faceIndex=Math.floor(y/3),n.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,R=x.length;A<R;A++){const y=x[A],v=h[y.materialIndex],F=Math.max(y.start,E.start),N=Math.min(m.count,Math.min(y.start+y.count,E.start+E.count));for(let D=F,z=N;D<z;D+=3){const k=D,H=D+1,Z=D+2;l=wu(this,v,t,r,p,_,g,k,H,Z),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,n.push(l))}}else{const A=Math.max(0,E.start),R=Math.min(m.count,E.start+E.count);for(let y=A,v=R;y<v;y+=3){const F=y,N=y+1,D=y+2;l=wu(this,h,t,r,p,_,g,F,N,D),l&&(l.faceIndex=Math.floor(y/3),n.push(l))}}}}function Ky(s,t,n,r,l,u,h,d){let m;if(t.side===Xn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,t.side===Wa,d),m===null)return null;Cu.copy(d),Cu.applyMatrix4(s.matrixWorld);const p=n.ray.origin.distanceTo(Cu);return p<n.near||p>n.far?null:{distance:p,point:Cu.clone(),object:s}}function wu(s,t,n,r,l,u,h,d,m,p){s.getVertexPosition(d,bu),s.getVertexPosition(m,Tu),s.getVertexPosition(p,Au);const _=Ky(s,t,n,r,bu,Tu,Au,$g);if(_){const g=new nt;Si.getBarycoord($g,bu,Tu,Au,g),l&&(_.uv=Si.getInterpolatedAttribute(l,d,m,p,g,new pe)),u&&(_.uv1=Si.getInterpolatedAttribute(u,d,m,p,g,new pe)),h&&(_.normal=Si.getInterpolatedAttribute(h,d,m,p,g,new nt),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new nt,materialIndex:0};Si.getNormal(bu,Tu,Au,x.normal),_.face=x,_.barycoord=g}return _}class nl extends qa{constructor(t=1,n=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],_=[],g=[];let x=0,E=0;A("z","y","x",-1,-1,r,n,t,h,u,0),A("z","y","x",1,-1,r,n,-t,h,u,1),A("x","z","y",1,1,t,r,n,l,h,2),A("x","z","y",1,-1,t,r,-n,l,h,3),A("x","y","z",1,-1,t,n,r,l,u,4),A("x","y","z",-1,-1,t,n,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new br(p,3)),this.setAttribute("normal",new br(_,3)),this.setAttribute("uv",new br(g,2));function A(R,y,v,F,N,D,z,k,H,Z,w){const C=D/H,B=z/Z,lt=D/2,ut=z/2,ht=k/2,dt=H+1,P=Z+1;let j=0,Y=0;const yt=new nt;for(let U=0;U<P;U++){const J=U*B-ut;for(let St=0;St<dt;St++){const Et=St*C-lt;yt[R]=Et*F,yt[y]=J*N,yt[v]=ht,p.push(yt.x,yt.y,yt.z),yt[R]=0,yt[y]=0,yt[v]=k>0?1:-1,_.push(yt.x,yt.y,yt.z),g.push(St/H),g.push(1-U/Z),j+=1}}for(let U=0;U<Z;U++)for(let J=0;J<H;J++){const St=x+J+dt*U,Et=x+J+dt*(U+1),Dt=x+(J+1)+dt*(U+1),et=x+(J+1)+dt*U;m.push(St,Et,et),m.push(Et,Dt,et),Y+=6}d.addGroup(E,Y,w),E+=Y,x+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Is(s){const t={};for(const n in s){t[n]={};for(const r in s[n]){const l=s[n][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][r]=null):t[n][r]=l.clone():Array.isArray(l)?t[n][r]=l.slice():t[n][r]=l}}return t}function Bn(s){const t={};for(let n=0;n<s.length;n++){const r=Is(s[n]);for(const l in r)t[l]=r[l]}return t}function Qy(s){const t=[];for(let n=0;n<s.length;n++)t.push(s[n].clone());return t}function u0(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const Jy={clone:Is,merge:Bn};var $y=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends $u{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$y,this.fragmentShader=tE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=Qy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?n.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?n.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?n.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?n.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?n.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?n.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?n.uniforms[l]={type:"m4",value:h.toArray()}:n.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class c0 extends ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ha=new nt,tv=new pe,ev=new pe;class fi extends c0{constructor(t=50,n=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Rd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rd*2*Math.atan(Math.tan(Wu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,r){Ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z),Ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z)}getViewSize(t,n){return this.getViewBounds(t,tv,ev),n.subVectors(ev,tv)}setViewOffset(t,n,r,l,u,h){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Wu*.5*this.fov)/this.zoom,r=2*n,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,n-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,n,n-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Es=-90,Ms=1;class eE extends ei{constructor(t,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new fi(Es,Ms,t,n);l.layers=this.layers,this.add(l);const u=new fi(Es,Ms,t,n);u.layers=this.layers,this.add(u);const h=new fi(Es,Ms,t,n);h.layers=this.layers,this.add(h);const d=new fi(Es,Ms,t,n);d.layers=this.layers,this.add(d);const m=new fi(Es,Ms,t,n);m.layers=this.layers,this.add(m);const p=new fi(Es,Ms,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[r,l,u,h,d,m]=n;for(const p of n)this.remove(p);if(t===Ii)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Zu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,_]=this.children,g=t.getRenderTarget(),x=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(n,u),t.setRenderTarget(r,1,l),t.render(n,h),t.setRenderTarget(r,2,l),t.render(n,d),t.setRenderTarget(r,3,l),t.render(n,m),t.setRenderTarget(r,4,l),t.render(n,p),r.texture.generateMipmaps=R,t.setRenderTarget(r,5,l),t.render(n,_),t.setRenderTarget(g,x,E),t.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class f0 extends Wn{constructor(t=[],n=Ps,r,l,u,h,d,m,p,_){super(t,n,r,l,u,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nE extends Rr{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new f0(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new nl(5,5,5),u=new Fi({name:"CubemapFromEquirect",uniforms:Is(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xn,blending:ka});u.uniforms.tEquirect.value=n;const h=new Ei(l,u),d=n.minFilter;return n.minFilter===Mr&&(n.minFilter=zi),new eE(1,10,this).update(t,h),n.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,n=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(n,r,l);t.setRenderTarget(u)}}class Du extends ei{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iE={type:"move"};class Lh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Du,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Du,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Du,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const r of t.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const R of t.hand.values()){const y=n.getJointPose(R,r),v=this._getHandJoint(p,R);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=_.position.distanceTo(g.position),E=.02,A=.005;p.inputState.pinching&&x>E+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=E-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=n.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=n.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(iE)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const r=new Du;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[n.jointName]=r,t.add(r)}return t.joints[n.jointName]}}class aE extends ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ca,this.environmentIntensity=1,this.environmentRotation=new ca,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Nh=new nt,rE=new nt,sE=new ue;class Va{constructor(t=new nt(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,r,l){return this.normal.set(t,n,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,r){const l=Nh.subVectors(r,n).cross(rE.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const r=t.delta(Nh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:n.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const n=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return n<0&&r>0||r<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const r=n||sE.getNormalMatrix(t),l=this.coplanarPoint(Nh).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new Xd,oE=new pe(.5,.5),Uu=new nt;class h0{constructor(t=new Va,n=new Va,r=new Va,l=new Va,u=new Va,h=new Va){this.planes=[t,n,r,l,u,h]}set(t,n,r,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(n),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,n=Ii,r=!1){const l=this.planes,u=t.elements,h=u[0],d=u[1],m=u[2],p=u[3],_=u[4],g=u[5],x=u[6],E=u[7],A=u[8],R=u[9],y=u[10],v=u[11],F=u[12],N=u[13],D=u[14],z=u[15];if(l[0].setComponents(p-h,E-_,v-A,z-F).normalize(),l[1].setComponents(p+h,E+_,v+A,z+F).normalize(),l[2].setComponents(p+d,E+g,v+R,z+N).normalize(),l[3].setComponents(p-d,E-g,v-R,z-N).normalize(),r)l[4].setComponents(m,x,y,D).normalize(),l[5].setComponents(p-m,E-x,v-y,z-D).normalize();else if(l[4].setComponents(p-m,E-x,v-y,z-D).normalize(),n===Ii)l[5].setComponents(p+m,E+x,v+y,z+D).normalize();else if(n===Zu)l[5].setComponents(m,x,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(t){_r.center.set(0,0,0);const n=oE.distanceTo(t.center);return _r.radius=.7071067811865476+n,_r.applyMatrix4(t.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(t){const n=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const n=this.planes;for(let r=0;r<6;r++){const l=n[r];if(Uu.x=l.normal.x>0?t.max.x:t.min.x,Uu.y=l.normal.y>0?t.max.y:t.min.y,Uu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Uu)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class d0 extends Wn{constructor(t,n,r=Tr,l,u,h,d=Mi,m=Mi,p,_=Ko,g=1){if(_!==Ko&&_!==Qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:n,depth:g};super(x,l,u,h,d,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new kd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class il extends qa{constructor(t=1,n=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:r,heightSegments:l};const u=t/2,h=n/2,d=Math.floor(r),m=Math.floor(l),p=d+1,_=m+1,g=t/d,x=n/m,E=[],A=[],R=[],y=[];for(let v=0;v<_;v++){const F=v*x-h;for(let N=0;N<p;N++){const D=N*g-u;A.push(D,-F,0),R.push(0,0,1),y.push(N/d),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let F=0;F<d;F++){const N=F+p*v,D=F+p*(v+1),z=F+1+p*(v+1),k=F+1+p*v;E.push(N,D,k),E.push(D,z,k)}this.setIndex(E),this.setAttribute("position",new br(A,3)),this.setAttribute("normal",new br(R,3)),this.setAttribute("uv",new br(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new il(t.width,t.height,t.widthSegments,t.heightSegments)}}class lE extends $u{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class uE extends $u{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class cE extends c0{constructor(t=-1,n=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,h=r+t,d=l+n,m=l-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class fE extends fi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class nv{constructor(t=1,n=0,r=0){this.radius=t,this.phi=n,this.theta=r}set(t,n,r){return this.radius=t,this.phi=n,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Se(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,r){return this.radius=Math.sqrt(t*t+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(Se(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class hE extends Cr{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function iv(s,t,n,r){const l=dE(r);switch(n){case jv:return s*t;case Qv:return s*t/l.components*l.byteLength;case Hd:return s*t/l.components*l.byteLength;case Jv:return s*t*2/l.components*l.byteLength;case Vd:return s*t*2/l.components*l.byteLength;case Kv:return s*t*3/l.components*l.byteLength;case yi:return s*t*4/l.components*l.byteLength;case Gd:return s*t*4/l.components*l.byteLength;case Hu:case Vu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Gu:case ku:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case nd:case ad:return Math.max(s,16)*Math.max(t,8)/4;case ed:case id:return Math.max(s,8)*Math.max(t,8)/2;case rd:case sd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case od:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ld:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ud:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case cd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case fd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case hd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case dd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case pd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case md:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case _d:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case gd:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case vd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case xd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Sd:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case yd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Xu:case Ed:case Md:return Math.ceil(s/4)*Math.ceil(t/4)*16;case $v:case bd:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Td:case Ad:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function dE(s){switch(s){case ua:case Yv:return{byteLength:1,components:1};case Zo:case qv:case $o:return{byteLength:2,components:1};case Id:case Fd:return{byteLength:2,components:4};case Tr:case zd:case oa:return{byteLength:4,components:1};case Zv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function p0(){let s=null,t=!1,n=null,r=null;function l(u,h){n(u,h),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&n!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function pE(s){const t=new WeakMap;function n(d,m){const p=d.array,_=d.usage,g=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,_),d.onUploadCallback();let E;if(p instanceof Float32Array)E=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?E=s.HALF_FLOAT:E=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=s.SHORT;else if(p instanceof Uint32Array)E=s.UNSIGNED_INT;else if(p instanceof Int32Array)E=s.INT;else if(p instanceof Int8Array)E=s.BYTE;else if(p instanceof Uint8Array)E=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,m,p){const _=m.array,g=m.updateRanges;if(s.bindBuffer(p,d),g.length===0)s.bufferSubData(p,0,_);else{g.sort((E,A)=>E.start-A.start);let x=0;for(let E=1;E<g.length;E++){const A=g[x],R=g[E];R.start<=A.start+A.count+1?A.count=Math.max(A.count,R.start+R.count-A.start):(++x,g[x]=R)}g.length=x+1;for(let E=0,A=g.length;E<A;E++){const R=g[E];s.bufferSubData(p,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,n(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var mE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_E=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,SE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,EE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ME=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,TE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,CE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,DE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,UE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,PE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,BE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,IE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,FE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,HE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,VE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WE="gl_FragColor = linearToOutputTexel( gl_FragColor );",YE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ZE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,KE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,QE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,JE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$E=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,iM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,oM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_M=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,EM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,UM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,NM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,OM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,IM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,VM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,GM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,XM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,YM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,QM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,JM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$M=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ib=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ab=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ob=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ub=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,db=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Eb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ab=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Db=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ub=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Nb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ob=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ib=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:mE,alphahash_pars_fragment:_E,alphamap_fragment:gE,alphamap_pars_fragment:vE,alphatest_fragment:xE,alphatest_pars_fragment:SE,aomap_fragment:yE,aomap_pars_fragment:EE,batching_pars_vertex:ME,batching_vertex:bE,begin_vertex:TE,beginnormal_vertex:AE,bsdfs:RE,iridescence_fragment:CE,bumpmap_pars_fragment:wE,clipping_planes_fragment:DE,clipping_planes_pars_fragment:UE,clipping_planes_pars_vertex:LE,clipping_planes_vertex:NE,color_fragment:OE,color_pars_fragment:PE,color_pars_vertex:BE,color_vertex:zE,common:IE,cube_uv_reflection_fragment:FE,defaultnormal_vertex:HE,displacementmap_pars_vertex:VE,displacementmap_vertex:GE,emissivemap_fragment:kE,emissivemap_pars_fragment:XE,colorspace_fragment:WE,colorspace_pars_fragment:YE,envmap_fragment:qE,envmap_common_pars_fragment:ZE,envmap_pars_fragment:jE,envmap_pars_vertex:KE,envmap_physical_pars_fragment:oM,envmap_vertex:QE,fog_vertex:JE,fog_pars_vertex:$E,fog_fragment:tM,fog_pars_fragment:eM,gradientmap_pars_fragment:nM,lightmap_pars_fragment:iM,lights_lambert_fragment:aM,lights_lambert_pars_fragment:rM,lights_pars_begin:sM,lights_toon_fragment:lM,lights_toon_pars_fragment:uM,lights_phong_fragment:cM,lights_phong_pars_fragment:fM,lights_physical_fragment:hM,lights_physical_pars_fragment:dM,lights_fragment_begin:pM,lights_fragment_maps:mM,lights_fragment_end:_M,logdepthbuf_fragment:gM,logdepthbuf_pars_fragment:vM,logdepthbuf_pars_vertex:xM,logdepthbuf_vertex:SM,map_fragment:yM,map_pars_fragment:EM,map_particle_fragment:MM,map_particle_pars_fragment:bM,metalnessmap_fragment:TM,metalnessmap_pars_fragment:AM,morphinstance_vertex:RM,morphcolor_vertex:CM,morphnormal_vertex:wM,morphtarget_pars_vertex:DM,morphtarget_vertex:UM,normal_fragment_begin:LM,normal_fragment_maps:NM,normal_pars_fragment:OM,normal_pars_vertex:PM,normal_vertex:BM,normalmap_pars_fragment:zM,clearcoat_normal_fragment_begin:IM,clearcoat_normal_fragment_maps:FM,clearcoat_pars_fragment:HM,iridescence_pars_fragment:VM,opaque_fragment:GM,packing:kM,premultiplied_alpha_fragment:XM,project_vertex:WM,dithering_fragment:YM,dithering_pars_fragment:qM,roughnessmap_fragment:ZM,roughnessmap_pars_fragment:jM,shadowmap_pars_fragment:KM,shadowmap_pars_vertex:QM,shadowmap_vertex:JM,shadowmask_pars_fragment:$M,skinbase_vertex:tb,skinning_pars_vertex:eb,skinning_vertex:nb,skinnormal_vertex:ib,specularmap_fragment:ab,specularmap_pars_fragment:rb,tonemapping_fragment:sb,tonemapping_pars_fragment:ob,transmission_fragment:lb,transmission_pars_fragment:ub,uv_pars_fragment:cb,uv_pars_vertex:fb,uv_vertex:hb,worldpos_vertex:db,background_vert:pb,background_frag:mb,backgroundCube_vert:_b,backgroundCube_frag:gb,cube_vert:vb,cube_frag:xb,depth_vert:Sb,depth_frag:yb,distanceRGBA_vert:Eb,distanceRGBA_frag:Mb,equirect_vert:bb,equirect_frag:Tb,linedashed_vert:Ab,linedashed_frag:Rb,meshbasic_vert:Cb,meshbasic_frag:wb,meshlambert_vert:Db,meshlambert_frag:Ub,meshmatcap_vert:Lb,meshmatcap_frag:Nb,meshnormal_vert:Ob,meshnormal_frag:Pb,meshphong_vert:Bb,meshphong_frag:zb,meshphysical_vert:Ib,meshphysical_frag:Fb,meshtoon_vert:Hb,meshtoon_frag:Vb,points_vert:Gb,points_frag:kb,shadow_vert:Xb,shadow_frag:Wb,sprite_vert:Yb,sprite_frag:qb},Pt={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Pi={basic:{uniforms:Bn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Bn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ie(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Bn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Bn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Bn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Ie(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Bn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Bn([Pt.points,Pt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Bn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Bn([Pt.common,Pt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Bn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Bn([Pt.sprite,Pt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:Bn([Pt.common,Pt.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:Bn([Pt.lights,Pt.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Pi.physical={uniforms:Bn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const Lu={r:0,b:0,g:0},gr=new ca,Zb=new pn;function jb(s,t,n,r,l,u,h){const d=new Ie(0);let m=u===!0?0:1,p,_,g=null,x=0,E=null;function A(N){let D=N.isScene===!0?N.background:null;return D&&D.isTexture&&(D=(N.backgroundBlurriness>0?n:t).get(D)),D}function R(N){let D=!1;const z=A(N);z===null?v(d,m):z&&z.isColor&&(v(z,1),D=!0);const k=s.xr.getEnvironmentBlendMode();k==="additive"?r.buffers.color.setClear(0,0,0,1,h):k==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(N,D){const z=A(D);z&&(z.isCubeTexture||z.mapping===Ju)?(_===void 0&&(_=new Ei(new nl(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:Is(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(k,H,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),gr.copy(D.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),_.material.uniforms.envMap.value=z,_.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(Zb.makeRotationFromEuler(gr)),_.material.toneMapped=Ae.getTransfer(z.colorSpace)!==Be,(g!==z||x!==z.version||E!==s.toneMapping)&&(_.material.needsUpdate=!0,g=z,x=z.version,E=s.toneMapping),_.layers.enableAll(),N.unshift(_,_.geometry,_.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new Ei(new il(2,2),new Fi({name:"BackgroundMaterial",uniforms:Is(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(z.colorSpace)!==Be,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(g!==z||x!==z.version||E!==s.toneMapping)&&(p.material.needsUpdate=!0,g=z,x=z.version,E=s.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function v(N,D){N.getRGB(Lu,u0(s)),r.buffers.color.setClear(Lu.r,Lu.g,Lu.b,D,h)}function F(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,D=1){d.set(N),m=D,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,v(d,m)},render:R,addToRenderList:y,dispose:F}}function Kb(s,t){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,h=!1;function d(C,B,lt,ut,ht){let dt=!1;const P=g(ut,lt,B);u!==P&&(u=P,p(u.object)),dt=E(C,ut,lt,ht),dt&&A(C,ut,lt,ht),ht!==null&&t.update(ht,s.ELEMENT_ARRAY_BUFFER),(dt||h)&&(h=!1,D(C,B,lt,ut),ht!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ht).buffer))}function m(){return s.createVertexArray()}function p(C){return s.bindVertexArray(C)}function _(C){return s.deleteVertexArray(C)}function g(C,B,lt){const ut=lt.wireframe===!0;let ht=r[C.id];ht===void 0&&(ht={},r[C.id]=ht);let dt=ht[B.id];dt===void 0&&(dt={},ht[B.id]=dt);let P=dt[ut];return P===void 0&&(P=x(m()),dt[ut]=P),P}function x(C){const B=[],lt=[],ut=[];for(let ht=0;ht<n;ht++)B[ht]=0,lt[ht]=0,ut[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:lt,attributeDivisors:ut,object:C,attributes:{},index:null}}function E(C,B,lt,ut){const ht=u.attributes,dt=B.attributes;let P=0;const j=lt.getAttributes();for(const Y in j)if(j[Y].location>=0){const U=ht[Y];let J=dt[Y];if(J===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(J=C.instanceColor)),U===void 0||U.attribute!==J||J&&U.data!==J.data)return!0;P++}return u.attributesNum!==P||u.index!==ut}function A(C,B,lt,ut){const ht={},dt=B.attributes;let P=0;const j=lt.getAttributes();for(const Y in j)if(j[Y].location>=0){let U=dt[Y];U===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(U=C.instanceColor));const J={};J.attribute=U,U&&U.data&&(J.data=U.data),ht[Y]=J,P++}u.attributes=ht,u.attributesNum=P,u.index=ut}function R(){const C=u.newAttributes;for(let B=0,lt=C.length;B<lt;B++)C[B]=0}function y(C){v(C,0)}function v(C,B){const lt=u.newAttributes,ut=u.enabledAttributes,ht=u.attributeDivisors;lt[C]=1,ut[C]===0&&(s.enableVertexAttribArray(C),ut[C]=1),ht[C]!==B&&(s.vertexAttribDivisor(C,B),ht[C]=B)}function F(){const C=u.newAttributes,B=u.enabledAttributes;for(let lt=0,ut=B.length;lt<ut;lt++)B[lt]!==C[lt]&&(s.disableVertexAttribArray(lt),B[lt]=0)}function N(C,B,lt,ut,ht,dt,P){P===!0?s.vertexAttribIPointer(C,B,lt,ht,dt):s.vertexAttribPointer(C,B,lt,ut,ht,dt)}function D(C,B,lt,ut){R();const ht=ut.attributes,dt=lt.getAttributes(),P=B.defaultAttributeValues;for(const j in dt){const Y=dt[j];if(Y.location>=0){let yt=ht[j];if(yt===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(yt=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(yt=C.instanceColor)),yt!==void 0){const U=yt.normalized,J=yt.itemSize,St=t.get(yt);if(St===void 0)continue;const Et=St.buffer,Dt=St.type,et=St.bytesPerElement,pt=Dt===s.INT||Dt===s.UNSIGNED_INT||yt.gpuType===zd;if(yt.isInterleavedBufferAttribute){const Mt=yt.data,Bt=Mt.stride,Zt=yt.offset;if(Mt.isInstancedInterleavedBuffer){for(let ae=0;ae<Y.locationSize;ae++)v(Y.location+ae,Mt.meshPerAttribute);C.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let ae=0;ae<Y.locationSize;ae++)y(Y.location+ae);s.bindBuffer(s.ARRAY_BUFFER,Et);for(let ae=0;ae<Y.locationSize;ae++)N(Y.location+ae,J/Y.locationSize,Dt,U,Bt*et,(Zt+J/Y.locationSize*ae)*et,pt)}else{if(yt.isInstancedBufferAttribute){for(let Mt=0;Mt<Y.locationSize;Mt++)v(Y.location+Mt,yt.meshPerAttribute);C.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Mt=0;Mt<Y.locationSize;Mt++)y(Y.location+Mt);s.bindBuffer(s.ARRAY_BUFFER,Et);for(let Mt=0;Mt<Y.locationSize;Mt++)N(Y.location+Mt,J/Y.locationSize,Dt,U,J*et,J/Y.locationSize*Mt*et,pt)}}else if(P!==void 0){const U=P[j];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(Y.location,U);break;case 3:s.vertexAttrib3fv(Y.location,U);break;case 4:s.vertexAttrib4fv(Y.location,U);break;default:s.vertexAttrib1fv(Y.location,U)}}}}F()}function z(){Z();for(const C in r){const B=r[C];for(const lt in B){const ut=B[lt];for(const ht in ut)_(ut[ht].object),delete ut[ht];delete B[lt]}delete r[C]}}function k(C){if(r[C.id]===void 0)return;const B=r[C.id];for(const lt in B){const ut=B[lt];for(const ht in ut)_(ut[ht].object),delete ut[ht];delete B[lt]}delete r[C.id]}function H(C){for(const B in r){const lt=r[B];if(lt[C.id]===void 0)continue;const ut=lt[C.id];for(const ht in ut)_(ut[ht].object),delete ut[ht];delete lt[C.id]}}function Z(){w(),h=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:w,dispose:z,releaseStatesOfGeometry:k,releaseStatesOfProgram:H,initAttributes:R,enableAttribute:y,disableUnusedAttributes:F}}function Qb(s,t,n){let r;function l(p){r=p}function u(p,_){s.drawArrays(r,p,_),n.update(_,r,1)}function h(p,_,g){g!==0&&(s.drawArraysInstanced(r,p,_,g),n.update(_,r,g))}function d(p,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,g);let E=0;for(let A=0;A<g;A++)E+=_[A];n.update(E,r,1)}function m(p,_,g,x){if(g===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let A=0;A<p.length;A++)h(p[A],_[A],x[A]);else{E.multiDrawArraysInstancedWEBGL(r,p,0,_,0,x,0,g);let A=0;for(let R=0;R<g;R++)A+=_[R]*x[R];n.update(A,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function Jb(s,t,n,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(H){return!(H!==yi&&r.convert(H)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(H){const Z=H===$o&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==ua&&r.convert(H)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==oa&&!Z)}function m(H){if(H==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),E=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),F=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=A>0,k=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:E,maxVertexTextures:A,maxTextureSize:R,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:F,maxVaryings:N,maxFragmentUniforms:D,vertexTextures:z,maxSamples:k}}function $b(s){const t=this;let n=null,r=0,l=!1,u=!1;const h=new Va,d=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const E=g.length!==0||x||r!==0||l;return l=x,r=g.length,E},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,x){n=_(g,x,0)},this.setState=function(g,x,E){const A=g.clippingPlanes,R=g.clipIntersection,y=g.clipShadows,v=s.get(g);if(!l||A===null||A.length===0||u&&!y)u?_(null):p();else{const F=u?0:r,N=F*4;let D=v.clippingState||null;m.value=D,D=_(A,x,N,E);for(let z=0;z!==N;++z)D[z]=n[z];v.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(g,x,E,A){const R=g!==null?g.length:0;let y=null;if(R!==0){if(y=m.value,A!==!0||y===null){const v=E+R*4,F=x.matrixWorldInverse;d.getNormalMatrix(F),(y===null||y.length<v)&&(y=new Float32Array(v));for(let N=0,D=E;N!==R;++N,D+=4)h.copy(g[N]).applyMatrix4(F,d),h.normal.toArray(y,D),y[D+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,y}}function tT(s){let t=new WeakMap;function n(h,d){return d===Qh?h.mapping=Ps:d===Jh&&(h.mapping=Bs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Qh||d===Jh)if(t.has(h)){const m=t.get(h).texture;return n(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new nE(m.height);return p.fromEquirectangularTexture(s,h),t.set(h,p),h.addEventListener("dispose",l),n(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const Cs=4,av=[.125,.215,.35,.446,.526,.582],yr=20,Oh=new cE,rv=new Ie;let Ph=null,Bh=0,zh=0,Ih=!1;const xr=(1+Math.sqrt(5))/2,bs=1/xr,sv=[new nt(-xr,bs,0),new nt(xr,bs,0),new nt(-bs,0,xr),new nt(bs,0,xr),new nt(0,xr,-bs),new nt(0,xr,bs),new nt(-1,1,-1),new nt(1,1,-1),new nt(-1,1,1),new nt(1,1,1)],eT=new nt;class ov{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,r=.1,l=100,u={}){const{size:h=256,position:d=eT}=u;Ph=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ph,Bh,zh),this._renderer.xr.enabled=Ih,t.scissorTest=!1,Nu(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Ps||t.mapping===Bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ph=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:zi,minFilter:zi,generateMipmaps:!1,type:$o,format:yi,colorSpace:zs,depthBuffer:!1},l=lv(t,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lv(t,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nT(u)),this._blurMaterial=iT(u,t,n)}return l}_compileMaterial(t){const n=new Ei(this._lodPlanes[0],t);this._renderer.compile(n,Oh)}_sceneToCubeUV(t,n,r,l,u){const m=new fi(90,1,n,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,E=g.toneMapping;g.getClearColor(rv),g.toneMapping=Xa,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const R=new s0({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),y=new Ei(new nl,R);let v=!1;const F=t.background;F?F.isColor&&(R.color.copy(F),t.background=null,v=!0):(R.color.copy(rv),v=!0);for(let N=0;N<6;N++){const D=N%3;D===0?(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[N],u.y,u.z)):D===1?(m.up.set(0,0,p[N]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[N],u.z)):(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[N]));const z=this._cubeSize;Nu(l,D*z,N>2?z:0,z,z),g.setRenderTarget(l),v&&g.render(y,m),g.render(t,m)}y.geometry.dispose(),y.material.dispose(),g.toneMapping=E,g.autoClear=x,t.background=F}_textureToCubeUV(t,n){const r=this._renderer,l=t.mapping===Ps||t.mapping===Bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=cv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uv());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Ei(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;Nu(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(h,Oh)}_applyPMREM(t){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=sv[(l-u-1)%sv.length];this._blur(t,u-1,u,h,d)}n.autoClear=r}_blur(t,n,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,n,r,l,"latitudinal",u),this._halfBlur(h,t,r,r,l,"longitudinal",u)}_halfBlur(t,n,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new Ei(this._lodPlanes[l],p),x=p.uniforms,E=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*E):2*Math.PI/(2*yr-1),R=u/A,y=isFinite(u)?1+Math.floor(_*R):yr;y>yr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${yr}`);const v=[];let F=0;for(let H=0;H<yr;++H){const Z=H/R,w=Math.exp(-Z*Z/2);v.push(w),H===0?F+=w:H<y&&(F+=2*w)}for(let H=0;H<v.length;H++)v[H]=v[H]/F;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:N}=this;x.dTheta.value=A,x.mipInt.value=N-r;const D=this._sizeLods[l],z=3*D*(l>N-Cs?l-N+Cs:0),k=4*(this._cubeSize-D);Nu(n,z,k,3*D,2*D),m.setRenderTarget(n),m.render(g,Oh)}}function nT(s){const t=[],n=[],r=[];let l=s;const u=s-Cs+1+av.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);n.push(d);let m=1/d;h>s-Cs?m=av[h-s+Cs-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),_=-p,g=1+p,x=[_,_,g,_,g,g,_,_,g,g,_,g],E=6,A=6,R=3,y=2,v=1,F=new Float32Array(R*A*E),N=new Float32Array(y*A*E),D=new Float32Array(v*A*E);for(let k=0;k<E;k++){const H=k%3*2/3-1,Z=k>2?0:-1,w=[H,Z,0,H+2/3,Z,0,H+2/3,Z+1,0,H,Z,0,H+2/3,Z+1,0,H,Z+1,0];F.set(w,R*A*k),N.set(x,y*A*k);const C=[k,k,k,k,k,k];D.set(C,v*A*k)}const z=new qa;z.setAttribute("position",new bi(F,R)),z.setAttribute("uv",new bi(N,y)),z.setAttribute("faceIndex",new bi(D,v)),t.push(z),l>Cs&&l--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function lv(s,t,n){const r=new Rr(s,t,n);return r.texture.mapping=Ju,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Nu(s,t,n,r,l){s.viewport.set(t,n,r,l),s.scissor.set(t,n,r,l)}function iT(s,t,n){const r=new Float32Array(yr),l=new nt(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function uv(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function cv(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function Wd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function aT(s){let t=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Qh||m===Jh,_=m===Ps||m===Bs;if(p||_){let g=t.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new ov(s)),g=p?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const E=d.image;return p&&E&&E.height>0||_&&E&&l(E)?(n===null&&(n=new ov(s)),g=p?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function rT(s){const t={};function n(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const l=n(r);return l===null&&Ls("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function sT(s,t,n,r){const l={},u=new WeakMap;function h(g){const x=g.target;x.index!==null&&t.remove(x.index);for(const A in x.attributes)t.remove(x.attributes[A]);x.removeEventListener("dispose",h),delete l[x.id];const E=u.get(x);E&&(t.remove(E),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(g,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,n.memory.geometries++),x}function m(g){const x=g.attributes;for(const E in x)t.update(x[E],s.ARRAY_BUFFER)}function p(g){const x=[],E=g.index,A=g.attributes.position;let R=0;if(E!==null){const F=E.array;R=E.version;for(let N=0,D=F.length;N<D;N+=3){const z=F[N+0],k=F[N+1],H=F[N+2];x.push(z,k,k,H,H,z)}}else if(A!==void 0){const F=A.array;R=A.version;for(let N=0,D=F.length/3-1;N<D;N+=3){const z=N+0,k=N+1,H=N+2;x.push(z,k,k,H,H,z)}}else return;const y=new(e0(x)?l0:o0)(x,1);y.version=R;const v=u.get(g);v&&t.remove(v),u.set(g,y)}function _(g){const x=u.get(g);if(x){const E=g.index;E!==null&&x.version<E.version&&p(g)}else p(g);return u.get(g)}return{get:d,update:m,getWireframeAttribute:_}}function oT(s,t,n){let r;function l(x){r=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function m(x,E){s.drawElements(r,E,u,x*h),n.update(E,r,1)}function p(x,E,A){A!==0&&(s.drawElementsInstanced(r,E,u,x*h,A),n.update(E,r,A))}function _(x,E,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,E,0,u,x,0,A);let y=0;for(let v=0;v<A;v++)y+=E[v];n.update(y,r,1)}function g(x,E,A,R){if(A===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)p(x[v]/h,E[v],R[v]);else{y.multiDrawElementsInstancedWEBGL(r,E,0,u,x,0,R,0,A);let v=0;for(let F=0;F<A;F++)v+=E[F]*R[F];n.update(v,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function lT(s){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(n.calls++,h){case s.TRIANGLES:n.triangles+=d*(u/3);break;case s.LINES:n.lines+=d*(u/2);break;case s.LINE_STRIP:n.lines+=d*(u-1);break;case s.LINE_LOOP:n.lines+=d*u;break;case s.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:l,update:r}}function uT(s,t,n){const r=new WeakMap,l=new an;function u(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==g){let C=function(){Z.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var E=C;x!==void 0&&x.texture.dispose();const A=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],F=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let D=0;A===!0&&(D=1),R===!0&&(D=2),y===!0&&(D=3);let z=d.attributes.position.count*D,k=1;z>t.maxTextureSize&&(k=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const H=new Float32Array(z*k*4*g),Z=new n0(H,z,k,g);Z.type=oa,Z.needsUpdate=!0;const w=D*4;for(let B=0;B<g;B++){const lt=v[B],ut=F[B],ht=N[B],dt=z*k*4*B;for(let P=0;P<lt.count;P++){const j=P*w;A===!0&&(l.fromBufferAttribute(lt,P),H[dt+j+0]=l.x,H[dt+j+1]=l.y,H[dt+j+2]=l.z,H[dt+j+3]=0),R===!0&&(l.fromBufferAttribute(ut,P),H[dt+j+4]=l.x,H[dt+j+5]=l.y,H[dt+j+6]=l.z,H[dt+j+7]=0),y===!0&&(l.fromBufferAttribute(ht,P),H[dt+j+8]=l.x,H[dt+j+9]=l.y,H[dt+j+10]=l.z,H[dt+j+11]=ht.itemSize===4?l.w:1)}}x={count:g,texture:Z,size:new pe(z,k)},r.set(d,x),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,n);else{let A=0;for(let y=0;y<p.length;y++)A+=p[y];const R=d.morphTargetsRelative?1:1-A;m.getUniforms().setValue(s,"morphTargetBaseInfluence",R),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function cT(s,t,n,r){let l=new WeakMap;function u(m){const p=r.render.frame,_=m.geometry,g=t.get(m,_);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:u,dispose:h}}const m0=new Wn,fv=new d0(1,1),_0=new n0,g0=new Fy,v0=new f0,hv=[],dv=[],pv=new Float32Array(16),mv=new Float32Array(9),_v=new Float32Array(4);function Fs(s,t,n){const r=s[0];if(r<=0||r>0)return s;const l=t*n;let u=hv[l];if(u===void 0&&(u=new Float32Array(l),hv[l]=u),t!==0){r.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=n,s[h].toArray(u,d)}return u}function mn(s,t){if(s.length!==t.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==t[n])return!1;return!0}function _n(s,t){for(let n=0,r=t.length;n<r;n++)s[n]=t[n]}function tc(s,t){let n=dv[t];n===void 0&&(n=new Int32Array(t),dv[t]=n);for(let r=0;r!==t;++r)n[r]=s.allocateTextureUnit();return n}function fT(s,t){const n=this.cache;n[0]!==t&&(s.uniform1f(this.addr,t),n[0]=t)}function hT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mn(n,t))return;s.uniform2fv(this.addr,t),_n(n,t)}}function dT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(mn(n,t))return;s.uniform3fv(this.addr,t),_n(n,t)}}function pT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mn(n,t))return;s.uniform4fv(this.addr,t),_n(n,t)}}function mT(s,t){const n=this.cache,r=t.elements;if(r===void 0){if(mn(n,t))return;s.uniformMatrix2fv(this.addr,!1,t),_n(n,t)}else{if(mn(n,r))return;_v.set(r),s.uniformMatrix2fv(this.addr,!1,_v),_n(n,r)}}function _T(s,t){const n=this.cache,r=t.elements;if(r===void 0){if(mn(n,t))return;s.uniformMatrix3fv(this.addr,!1,t),_n(n,t)}else{if(mn(n,r))return;mv.set(r),s.uniformMatrix3fv(this.addr,!1,mv),_n(n,r)}}function gT(s,t){const n=this.cache,r=t.elements;if(r===void 0){if(mn(n,t))return;s.uniformMatrix4fv(this.addr,!1,t),_n(n,t)}else{if(mn(n,r))return;pv.set(r),s.uniformMatrix4fv(this.addr,!1,pv),_n(n,r)}}function vT(s,t){const n=this.cache;n[0]!==t&&(s.uniform1i(this.addr,t),n[0]=t)}function xT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mn(n,t))return;s.uniform2iv(this.addr,t),_n(n,t)}}function ST(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(mn(n,t))return;s.uniform3iv(this.addr,t),_n(n,t)}}function yT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mn(n,t))return;s.uniform4iv(this.addr,t),_n(n,t)}}function ET(s,t){const n=this.cache;n[0]!==t&&(s.uniform1ui(this.addr,t),n[0]=t)}function MT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mn(n,t))return;s.uniform2uiv(this.addr,t),_n(n,t)}}function bT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(mn(n,t))return;s.uniform3uiv(this.addr,t),_n(n,t)}}function TT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mn(n,t))return;s.uniform4uiv(this.addr,t),_n(n,t)}}function AT(s,t,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(fv.compareFunction=t0,u=fv):u=m0,n.setTexture2D(t||u,l)}function RT(s,t,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),n.setTexture3D(t||g0,l)}function CT(s,t,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),n.setTextureCube(t||v0,l)}function wT(s,t,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),n.setTexture2DArray(t||_0,l)}function DT(s){switch(s){case 5126:return fT;case 35664:return hT;case 35665:return dT;case 35666:return pT;case 35674:return mT;case 35675:return _T;case 35676:return gT;case 5124:case 35670:return vT;case 35667:case 35671:return xT;case 35668:case 35672:return ST;case 35669:case 35673:return yT;case 5125:return ET;case 36294:return MT;case 36295:return bT;case 36296:return TT;case 35678:case 36198:case 36298:case 36306:case 35682:return AT;case 35679:case 36299:case 36307:return RT;case 35680:case 36300:case 36308:case 36293:return CT;case 36289:case 36303:case 36311:case 36292:return wT}}function UT(s,t){s.uniform1fv(this.addr,t)}function LT(s,t){const n=Fs(t,this.size,2);s.uniform2fv(this.addr,n)}function NT(s,t){const n=Fs(t,this.size,3);s.uniform3fv(this.addr,n)}function OT(s,t){const n=Fs(t,this.size,4);s.uniform4fv(this.addr,n)}function PT(s,t){const n=Fs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function BT(s,t){const n=Fs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function zT(s,t){const n=Fs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function IT(s,t){s.uniform1iv(this.addr,t)}function FT(s,t){s.uniform2iv(this.addr,t)}function HT(s,t){s.uniform3iv(this.addr,t)}function VT(s,t){s.uniform4iv(this.addr,t)}function GT(s,t){s.uniform1uiv(this.addr,t)}function kT(s,t){s.uniform2uiv(this.addr,t)}function XT(s,t){s.uniform3uiv(this.addr,t)}function WT(s,t){s.uniform4uiv(this.addr,t)}function YT(s,t,n){const r=this.cache,l=t.length,u=tc(n,l);mn(r,u)||(s.uniform1iv(this.addr,u),_n(r,u));for(let h=0;h!==l;++h)n.setTexture2D(t[h]||m0,u[h])}function qT(s,t,n){const r=this.cache,l=t.length,u=tc(n,l);mn(r,u)||(s.uniform1iv(this.addr,u),_n(r,u));for(let h=0;h!==l;++h)n.setTexture3D(t[h]||g0,u[h])}function ZT(s,t,n){const r=this.cache,l=t.length,u=tc(n,l);mn(r,u)||(s.uniform1iv(this.addr,u),_n(r,u));for(let h=0;h!==l;++h)n.setTextureCube(t[h]||v0,u[h])}function jT(s,t,n){const r=this.cache,l=t.length,u=tc(n,l);mn(r,u)||(s.uniform1iv(this.addr,u),_n(r,u));for(let h=0;h!==l;++h)n.setTexture2DArray(t[h]||_0,u[h])}function KT(s){switch(s){case 5126:return UT;case 35664:return LT;case 35665:return NT;case 35666:return OT;case 35674:return PT;case 35675:return BT;case 35676:return zT;case 5124:case 35670:return IT;case 35667:case 35671:return FT;case 35668:case 35672:return HT;case 35669:case 35673:return VT;case 5125:return GT;case 36294:return kT;case 36295:return XT;case 36296:return WT;case 35678:case 36198:case 36298:case 36306:case 35682:return YT;case 35679:case 36299:case 36307:return qT;case 35680:case 36300:case 36308:case 36293:return ZT;case 36289:case 36303:case 36311:case 36292:return jT}}class QT{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.setValue=DT(n.type)}}class JT{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=KT(n.type)}}class $T{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,n[d.id],r)}}}const Fh=/(\w+)(\])?(\[|\.)?/g;function gv(s,t){s.seq.push(t),s.map[t.id]=t}function tA(s,t,n){const r=s.name,l=r.length;for(Fh.lastIndex=0;;){const u=Fh.exec(r),h=Fh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){gv(n,p===void 0?new QT(d,s,t):new JT(d,s,t));break}else{let g=n.map[d];g===void 0&&(g=new $T(d),gv(n,g)),n=g}}}class Yu{constructor(t,n){this.seq=[],this.map={};const r=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(n,l),h=t.getUniformLocation(n,u.name);tA(u,h,this)}}setValue(t,n,r,l){const u=this.map[n];u!==void 0&&u.setValue(t,r,l)}setOptional(t,n,r){const l=n[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,n,r,l){for(let u=0,h=n.length;u!==h;++u){const d=n[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,n){const r=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in n&&r.push(h)}return r}}function vv(s,t,n){const r=s.createShader(t);return s.shaderSource(r,n),s.compileShader(r),r}const eA=37297;let nA=0;function iA(s,t){const n=s.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,n.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${n[h]}`)}return r.join(`
`)}const xv=new ue;function aA(s){Ae._getMatrix(xv,Ae.workingColorSpace,s);const t=`mat3( ${xv.elements.map(n=>n.toFixed(4))} )`;switch(Ae.getTransfer(s)){case qu:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Sv(s,t,n){const r=s.getShaderParameter(t,s.COMPILE_STATUS),u=(s.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return n.toUpperCase()+`

`+u+`

`+iA(s.getShaderSource(t),d)}else return u}function rA(s,t){const n=aA(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function sA(s,t){let n;switch(t){case fy:n="Linear";break;case hy:n="Reinhard";break;case dy:n="Cineon";break;case py:n="ACESFilmic";break;case _y:n="AgX";break;case gy:n="Neutral";break;case my:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ou=new nt;function oA(){Ae.getLuminanceCoefficients(Ou);const s=Ou.x.toFixed(4),t=Ou.y.toFixed(4),n=Ou.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function uA(s){const t=[];for(const n in s){const r=s[n];r!==!1&&t.push("#define "+n+" "+r)}return t.join(`
`)}function cA(s,t){const n={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(t,l),h=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),n[h]={type:u.type,location:s.getAttribLocation(t,h),locationSize:d}}return n}function Xo(s){return s!==""}function yv(s,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ev(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cd(s){return s.replace(fA,dA)}const hA=new Map;function dA(s,t){let n=he[t];if(n===void 0){const r=hA.get(t);if(r!==void 0)n=he[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Cd(n)}const pA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mv(s){return s.replace(pA,mA)}function mA(s,t,n,r){let l="";for(let u=parseInt(t);u<parseInt(n);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function bv(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function _A(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===kv?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===XS?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===sa&&(t="SHADOWMAP_TYPE_VSM"),t}function gA(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ps:case Bs:t="ENVMAP_TYPE_CUBE";break;case Ju:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vA(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Bs:t="ENVMAP_MODE_REFRACTION";break}return t}function xA(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Xv:t="ENVMAP_BLENDING_MULTIPLY";break;case uy:t="ENVMAP_BLENDING_MIX";break;case cy:t="ENVMAP_BLENDING_ADD";break}return t}function SA(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function yA(s,t,n,r){const l=s.getContext(),u=n.defines;let h=n.vertexShader,d=n.fragmentShader;const m=_A(n),p=gA(n),_=vA(n),g=xA(n),x=SA(n),E=lA(n),A=uA(u),R=l.createProgram();let y,v,F=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(Xo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(Xo).join(`
`),v.length>0&&(v+=`
`)):(y=[bv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),v=[bv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+_:"",n.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Xa?"#define TONE_MAPPING":"",n.toneMapping!==Xa?he.tonemapping_pars_fragment:"",n.toneMapping!==Xa?sA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,rA("linearToOutputTexel",n.outputColorSpace),oA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xo).join(`
`)),h=Cd(h),h=yv(h,n),h=Ev(h,n),d=Cd(d),d=yv(d,n),d=Ev(d,n),h=Mv(h),d=Mv(d),n.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",n.glslVersion===Ig?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ig?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=F+y+h,D=F+v+d,z=vv(l,l.VERTEX_SHADER,N),k=vv(l,l.FRAGMENT_SHADER,D);l.attachShader(R,z),l.attachShader(R,k),n.index0AttributeName!==void 0?l.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function H(B){if(s.debug.checkShaderErrors){const lt=l.getProgramInfoLog(R)||"",ut=l.getShaderInfoLog(z)||"",ht=l.getShaderInfoLog(k)||"",dt=lt.trim(),P=ut.trim(),j=ht.trim();let Y=!0,yt=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,R,z,k);else{const U=Sv(l,z,"vertex"),J=Sv(l,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+dt+`
`+U+`
`+J)}else dt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",dt):(P===""||j==="")&&(yt=!1);yt&&(B.diagnostics={runnable:Y,programLog:dt,vertexShader:{log:P,prefix:y},fragmentShader:{log:j,prefix:v}})}l.deleteShader(z),l.deleteShader(k),Z=new Yu(l,R),w=cA(l,R)}let Z;this.getUniforms=function(){return Z===void 0&&H(this),Z};let w;this.getAttributes=function(){return w===void 0&&H(this),w};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,eA)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=nA++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=z,this.fragmentShader=k,this}let EA=0;class MA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(n),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let r=n.get(t);return r===void 0&&(r=new Set,n.set(t,r)),r}_getShaderStage(t){const n=this.shaderCache;let r=n.get(t);return r===void 0&&(r=new bA(t),n.set(t,r)),r}}class bA{constructor(t){this.id=EA++,this.code=t,this.usedTimes=0}}function TA(s,t,n,r,l,u,h){const d=new a0,m=new MA,p=new Set,_=[],g=l.logarithmicDepthBuffer,x=l.vertexTextures;let E=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,C,B,lt,ut){const ht=lt.fog,dt=ut.geometry,P=w.isMeshStandardMaterial?lt.environment:null,j=(w.isMeshStandardMaterial?n:t).get(w.envMap||P),Y=j&&j.mapping===Ju?j.image.height:null,yt=A[w.type];w.precision!==null&&(E=l.getMaxPrecision(w.precision),E!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",E,"instead."));const U=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,J=U!==void 0?U.length:0;let St=0;dt.morphAttributes.position!==void 0&&(St=1),dt.morphAttributes.normal!==void 0&&(St=2),dt.morphAttributes.color!==void 0&&(St=3);let Et,Dt,et,pt;if(yt){const Me=Pi[yt];Et=Me.vertexShader,Dt=Me.fragmentShader}else Et=w.vertexShader,Dt=w.fragmentShader,m.update(w),et=m.getVertexShaderID(w),pt=m.getFragmentShaderID(w);const Mt=s.getRenderTarget(),Bt=s.state.buffers.depth.getReversed(),Zt=ut.isInstancedMesh===!0,ae=ut.isBatchedMesh===!0,Ve=!!w.map,_e=!!w.matcap,I=!!j,Ce=!!w.aoMap,Jt=!!w.lightMap,Ee=!!w.bumpMap,Ht=!!w.normalMap,Ge=!!w.displacementMap,Vt=!!w.emissiveMap,oe=!!w.metalnessMap,Ze=!!w.roughnessMap,je=w.anisotropy>0,L=w.clearcoat>0,M=w.dispersion>0,$=w.iridescence>0,ct=w.sheen>0,vt=w.transmission>0,ot=je&&!!w.anisotropyMap,zt=L&&!!w.clearcoatMap,Ct=L&&!!w.clearcoatNormalMap,Wt=L&&!!w.clearcoatRoughnessMap,qt=$&&!!w.iridescenceMap,bt=$&&!!w.iridescenceThicknessMap,Nt=ct&&!!w.sheenColorMap,Kt=ct&&!!w.sheenRoughnessMap,Xt=!!w.specularMap,Ut=!!w.specularColorMap,se=!!w.specularIntensityMap,G=vt&&!!w.transmissionMap,Rt=vt&&!!w.thicknessMap,wt=!!w.gradientMap,It=!!w.alphaMap,Tt=w.alphaTest>0,gt=!!w.alphaHash,kt=!!w.extensions;let re=Xa;w.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(re=s.toneMapping);const we={shaderID:yt,shaderType:w.type,shaderName:w.name,vertexShader:Et,fragmentShader:Dt,defines:w.defines,customVertexShaderID:et,customFragmentShaderID:pt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:E,batching:ae,batchingColor:ae&&ut._colorsTexture!==null,instancing:Zt,instancingColor:Zt&&ut.instanceColor!==null,instancingMorph:Zt&&ut.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Mt===null?s.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:zs,alphaToCoverage:!!w.alphaToCoverage,map:Ve,matcap:_e,envMap:I,envMapMode:I&&j.mapping,envMapCubeUVHeight:Y,aoMap:Ce,lightMap:Jt,bumpMap:Ee,normalMap:Ht,displacementMap:x&&Ge,emissiveMap:Vt,normalMapObjectSpace:Ht&&w.normalMapType===Ey,normalMapTangentSpace:Ht&&w.normalMapType===yy,metalnessMap:oe,roughnessMap:Ze,anisotropy:je,anisotropyMap:ot,clearcoat:L,clearcoatMap:zt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Wt,dispersion:M,iridescence:$,iridescenceMap:qt,iridescenceThicknessMap:bt,sheen:ct,sheenColorMap:Nt,sheenRoughnessMap:Kt,specularMap:Xt,specularColorMap:Ut,specularIntensityMap:se,transmission:vt,transmissionMap:G,thicknessMap:Rt,gradientMap:wt,opaque:w.transparent===!1&&w.blending===Us&&w.alphaToCoverage===!1,alphaMap:It,alphaTest:Tt,alphaHash:gt,combine:w.combine,mapUv:Ve&&R(w.map.channel),aoMapUv:Ce&&R(w.aoMap.channel),lightMapUv:Jt&&R(w.lightMap.channel),bumpMapUv:Ee&&R(w.bumpMap.channel),normalMapUv:Ht&&R(w.normalMap.channel),displacementMapUv:Ge&&R(w.displacementMap.channel),emissiveMapUv:Vt&&R(w.emissiveMap.channel),metalnessMapUv:oe&&R(w.metalnessMap.channel),roughnessMapUv:Ze&&R(w.roughnessMap.channel),anisotropyMapUv:ot&&R(w.anisotropyMap.channel),clearcoatMapUv:zt&&R(w.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&R(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&R(w.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&R(w.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&R(w.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&R(w.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&R(w.sheenRoughnessMap.channel),specularMapUv:Xt&&R(w.specularMap.channel),specularColorMapUv:Ut&&R(w.specularColorMap.channel),specularIntensityMapUv:se&&R(w.specularIntensityMap.channel),transmissionMapUv:G&&R(w.transmissionMap.channel),thicknessMapUv:Rt&&R(w.thicknessMap.channel),alphaMapUv:It&&R(w.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(Ht||je),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:ut.isPoints===!0&&!!dt.attributes.uv&&(Ve||It),fog:!!ht,useFog:w.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Bt,skinning:ut.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:St,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:re,decodeVideoTexture:Ve&&w.map.isVideoTexture===!0&&Ae.getTransfer(w.map.colorSpace)===Be,decodeVideoTextureEmissive:Vt&&w.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(w.emissiveMap.colorSpace)===Be,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Bi,flipSided:w.side===Xn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:kt&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&w.extensions.multiDraw===!0||ae)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return we.vertexUv1s=p.has(1),we.vertexUv2s=p.has(2),we.vertexUv3s=p.has(3),p.clear(),we}function v(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const B in w.defines)C.push(B),C.push(w.defines[B]);return w.isRawShaderMaterial===!1&&(F(C,w),N(C,w),C.push(s.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function F(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function N(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const C=A[w.type];let B;if(C){const lt=Pi[C];B=Jy.clone(lt.uniforms)}else B=w.uniforms;return B}function z(w,C){let B;for(let lt=0,ut=_.length;lt<ut;lt++){const ht=_[lt];if(ht.cacheKey===C){B=ht,++B.usedTimes;break}}return B===void 0&&(B=new yA(s,C,w,u),_.push(B)),B}function k(w){if(--w.usedTimes===0){const C=_.indexOf(w);_[C]=_[_.length-1],_.pop(),w.destroy()}}function H(w){m.remove(w)}function Z(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:D,acquireProgram:z,releaseProgram:k,releaseShaderCache:H,programs:_,dispose:Z}}function AA(){let s=new WeakMap;function t(h){return s.has(h)}function n(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,m){s.get(h)[d]=m}function u(){s=new WeakMap}return{has:t,get:n,remove:r,update:l,dispose:u}}function RA(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Tv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Av(){const s=[];let t=0;const n=[],r=[],l=[];function u(){t=0,n.length=0,r.length=0,l.length=0}function h(g,x,E,A,R,y){let v=s[t];return v===void 0?(v={id:g.id,object:g,geometry:x,material:E,groupOrder:A,renderOrder:g.renderOrder,z:R,group:y},s[t]=v):(v.id=g.id,v.object=g,v.geometry=x,v.material=E,v.groupOrder=A,v.renderOrder=g.renderOrder,v.z=R,v.group=y),t++,v}function d(g,x,E,A,R,y){const v=h(g,x,E,A,R,y);E.transmission>0?r.push(v):E.transparent===!0?l.push(v):n.push(v)}function m(g,x,E,A,R,y){const v=h(g,x,E,A,R,y);E.transmission>0?r.unshift(v):E.transparent===!0?l.unshift(v):n.unshift(v)}function p(g,x){n.length>1&&n.sort(g||RA),r.length>1&&r.sort(x||Tv),l.length>1&&l.sort(x||Tv)}function _(){for(let g=t,x=s.length;g<x;g++){const E=s[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:n,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:_,sort:p}}function CA(){let s=new WeakMap;function t(r,l){const u=s.get(r);let h;return u===void 0?(h=new Av,s.set(r,[h])):l>=u.length?(h=new Av,u.push(h)):h=u[l],h}function n(){s=new WeakMap}return{get:t,dispose:n}}function wA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new nt,color:new Ie};break;case"SpotLight":n={position:new nt,direction:new nt,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new nt,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":n={direction:new nt,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":n={color:new Ie,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return s[t.id]=n,n}}}function DA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=n,n}}}let UA=0;function LA(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function NA(s){const t=new wA,n=DA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new nt);const l=new nt,u=new pn,h=new pn;function d(p){let _=0,g=0,x=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let E=0,A=0,R=0,y=0,v=0,F=0,N=0,D=0,z=0,k=0,H=0;p.sort(LA);for(let w=0,C=p.length;w<C;w++){const B=p[w],lt=B.color,ut=B.intensity,ht=B.distance,dt=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)_+=lt.r*ut,g+=lt.g*ut,x+=lt.b*ut;else if(B.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(B.sh.coefficients[P],ut);H++}else if(B.isDirectionalLight){const P=t.get(B);if(P.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const j=B.shadow,Y=n.get(B);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,r.directionalShadow[E]=Y,r.directionalShadowMap[E]=dt,r.directionalShadowMatrix[E]=B.shadow.matrix,F++}r.directional[E]=P,E++}else if(B.isSpotLight){const P=t.get(B);P.position.setFromMatrixPosition(B.matrixWorld),P.color.copy(lt).multiplyScalar(ut),P.distance=ht,P.coneCos=Math.cos(B.angle),P.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),P.decay=B.decay,r.spot[R]=P;const j=B.shadow;if(B.map&&(r.spotLightMap[z]=B.map,z++,j.updateMatrices(B),B.castShadow&&k++),r.spotLightMatrix[R]=j.matrix,B.castShadow){const Y=n.get(B);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,r.spotShadow[R]=Y,r.spotShadowMap[R]=dt,D++}R++}else if(B.isRectAreaLight){const P=t.get(B);P.color.copy(lt).multiplyScalar(ut),P.halfWidth.set(B.width*.5,0,0),P.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=P,y++}else if(B.isPointLight){const P=t.get(B);if(P.color.copy(B.color).multiplyScalar(B.intensity),P.distance=B.distance,P.decay=B.decay,B.castShadow){const j=B.shadow,Y=n.get(B);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,Y.shadowCameraNear=j.camera.near,Y.shadowCameraFar=j.camera.far,r.pointShadow[A]=Y,r.pointShadowMap[A]=dt,r.pointShadowMatrix[A]=B.shadow.matrix,N++}r.point[A]=P,A++}else if(B.isHemisphereLight){const P=t.get(B);P.skyColor.copy(B.color).multiplyScalar(ut),P.groundColor.copy(B.groundColor).multiplyScalar(ut),r.hemi[v]=P,v++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pt.LTC_FLOAT_1,r.rectAreaLTC2=Pt.LTC_FLOAT_2):(r.rectAreaLTC1=Pt.LTC_HALF_1,r.rectAreaLTC2=Pt.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=x;const Z=r.hash;(Z.directionalLength!==E||Z.pointLength!==A||Z.spotLength!==R||Z.rectAreaLength!==y||Z.hemiLength!==v||Z.numDirectionalShadows!==F||Z.numPointShadows!==N||Z.numSpotShadows!==D||Z.numSpotMaps!==z||Z.numLightProbes!==H)&&(r.directional.length=E,r.spot.length=R,r.rectArea.length=y,r.point.length=A,r.hemi.length=v,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=D+z-k,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=H,Z.directionalLength=E,Z.pointLength=A,Z.spotLength=R,Z.rectAreaLength=y,Z.hemiLength=v,Z.numDirectionalShadows=F,Z.numPointShadows=N,Z.numSpotShadows=D,Z.numSpotMaps=z,Z.numLightProbes=H,r.version=UA++)}function m(p,_){let g=0,x=0,E=0,A=0,R=0;const y=_.matrixWorldInverse;for(let v=0,F=p.length;v<F;v++){const N=p[v];if(N.isDirectionalLight){const D=r.directional[g];D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),g++}else if(N.isSpotLight){const D=r.spot[E];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),E++}else if(N.isRectAreaLight){const D=r.rectArea[A];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(y),h.identity(),u.copy(N.matrixWorld),u.premultiply(y),h.extractRotation(u),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),A++}else if(N.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(y),x++}else if(N.isHemisphereLight){const D=r.hemi[R];D.direction.setFromMatrixPosition(N.matrixWorld),D.direction.transformDirection(y),R++}}}return{setup:d,setupView:m,state:r}}function Rv(s){const t=new NA(s),n=[],r=[];function l(_){p.camera=_,n.length=0,r.length=0}function u(_){n.push(_)}function h(_){r.push(_)}function d(){t.setup(n)}function m(_){t.setupView(n,_)}const p={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function OA(s){let t=new WeakMap;function n(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new Rv(s),t.set(l,[d])):u>=h.length?(d=new Rv(s),h.push(d)):d=h[u],d}function r(){t=new WeakMap}return{get:n,dispose:r}}const PA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zA(s,t,n){let r=new h0;const l=new pe,u=new pe,h=new an,d=new lE({depthPacking:Sy}),m=new uE,p={},_=n.maxTextureSize,g={[Wa]:Xn,[Xn]:Wa,[Bi]:Bi},x=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:PA,fragmentShader:BA}),E=x.clone();E.defines.HORIZONTAL_PASS=1;const A=new qa;A.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ei(A,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kv;let v=this.type;this.render=function(k,H,Z){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||k.length===0)return;const w=s.getRenderTarget(),C=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),lt=s.state;lt.setBlending(ka),lt.buffers.depth.getReversed()?lt.buffers.color.setClear(0,0,0,0):lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const ut=v!==sa&&this.type===sa,ht=v===sa&&this.type!==sa;for(let dt=0,P=k.length;dt<P;dt++){const j=k[dt],Y=j.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const yt=Y.getFrameExtents();if(l.multiply(yt),u.copy(Y.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/yt.x),l.x=u.x*yt.x,Y.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/yt.y),l.y=u.y*yt.y,Y.mapSize.y=u.y)),Y.map===null||ut===!0||ht===!0){const J=this.type!==sa?{minFilter:Mi,magFilter:Mi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Rr(l.x,l.y,J),Y.map.texture.name=j.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const U=Y.getViewportCount();for(let J=0;J<U;J++){const St=Y.getViewport(J);h.set(u.x*St.x,u.y*St.y,u.x*St.z,u.y*St.w),lt.viewport(h),Y.updateMatrices(j,J),r=Y.getFrustum(),D(H,Z,Y.camera,j,this.type)}Y.isPointLightShadow!==!0&&this.type===sa&&F(Y,Z),Y.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(w,C,B)};function F(k,H){const Z=t.update(R);x.defines.VSM_SAMPLES!==k.blurSamples&&(x.defines.VSM_SAMPLES=k.blurSamples,E.defines.VSM_SAMPLES=k.blurSamples,x.needsUpdate=!0,E.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Rr(l.x,l.y)),x.uniforms.shadow_pass.value=k.map.texture,x.uniforms.resolution.value=k.mapSize,x.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(H,null,Z,x,R,null),E.uniforms.shadow_pass.value=k.mapPass.texture,E.uniforms.resolution.value=k.mapSize,E.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(H,null,Z,E,R,null)}function N(k,H,Z,w){let C=null;const B=Z.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(B!==void 0)C=B;else if(C=Z.isPointLight===!0?m:d,s.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const lt=C.uuid,ut=H.uuid;let ht=p[lt];ht===void 0&&(ht={},p[lt]=ht);let dt=ht[ut];dt===void 0&&(dt=C.clone(),ht[ut]=dt,H.addEventListener("dispose",z)),C=dt}if(C.visible=H.visible,C.wireframe=H.wireframe,w===sa?C.side=H.shadowSide!==null?H.shadowSide:H.side:C.side=H.shadowSide!==null?H.shadowSide:g[H.side],C.alphaMap=H.alphaMap,C.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,C.map=H.map,C.clipShadows=H.clipShadows,C.clippingPlanes=H.clippingPlanes,C.clipIntersection=H.clipIntersection,C.displacementMap=H.displacementMap,C.displacementScale=H.displacementScale,C.displacementBias=H.displacementBias,C.wireframeLinewidth=H.wireframeLinewidth,C.linewidth=H.linewidth,Z.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const lt=s.properties.get(C);lt.light=Z}return C}function D(k,H,Z,w,C){if(k.visible===!1)return;if(k.layers.test(H.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&C===sa)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,k.matrixWorld);const ut=t.update(k),ht=k.material;if(Array.isArray(ht)){const dt=ut.groups;for(let P=0,j=dt.length;P<j;P++){const Y=dt[P],yt=ht[Y.materialIndex];if(yt&&yt.visible){const U=N(k,yt,w,C);k.onBeforeShadow(s,k,H,Z,ut,U,Y),s.renderBufferDirect(Z,null,ut,U,k,Y),k.onAfterShadow(s,k,H,Z,ut,U,Y)}}}else if(ht.visible){const dt=N(k,ht,w,C);k.onBeforeShadow(s,k,H,Z,ut,dt,null),s.renderBufferDirect(Z,null,ut,dt,k,null),k.onAfterShadow(s,k,H,Z,ut,dt,null)}}const lt=k.children;for(let ut=0,ht=lt.length;ut<ht;ut++)D(lt[ut],H,Z,w,C)}function z(k){k.target.removeEventListener("dispose",z);for(const Z in p){const w=p[Z],C=k.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const IA={[Xh]:Wh,[Yh]:jh,[qh]:Kh,[Os]:Zh,[Wh]:Xh,[jh]:Yh,[Kh]:qh,[Zh]:Os};function FA(s,t){function n(){let G=!1;const Rt=new an;let wt=null;const It=new an(0,0,0,0);return{setMask:function(Tt){wt!==Tt&&!G&&(s.colorMask(Tt,Tt,Tt,Tt),wt=Tt)},setLocked:function(Tt){G=Tt},setClear:function(Tt,gt,kt,re,we){we===!0&&(Tt*=re,gt*=re,kt*=re),Rt.set(Tt,gt,kt,re),It.equals(Rt)===!1&&(s.clearColor(Tt,gt,kt,re),It.copy(Rt))},reset:function(){G=!1,wt=null,It.set(-1,0,0,0)}}}function r(){let G=!1,Rt=!1,wt=null,It=null,Tt=null;return{setReversed:function(gt){if(Rt!==gt){const kt=t.get("EXT_clip_control");gt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),Rt=gt;const re=Tt;Tt=null,this.setClear(re)}},getReversed:function(){return Rt},setTest:function(gt){gt?Mt(s.DEPTH_TEST):Bt(s.DEPTH_TEST)},setMask:function(gt){wt!==gt&&!G&&(s.depthMask(gt),wt=gt)},setFunc:function(gt){if(Rt&&(gt=IA[gt]),It!==gt){switch(gt){case Xh:s.depthFunc(s.NEVER);break;case Wh:s.depthFunc(s.ALWAYS);break;case Yh:s.depthFunc(s.LESS);break;case Os:s.depthFunc(s.LEQUAL);break;case qh:s.depthFunc(s.EQUAL);break;case Zh:s.depthFunc(s.GEQUAL);break;case jh:s.depthFunc(s.GREATER);break;case Kh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}It=gt}},setLocked:function(gt){G=gt},setClear:function(gt){Tt!==gt&&(Rt&&(gt=1-gt),s.clearDepth(gt),Tt=gt)},reset:function(){G=!1,wt=null,It=null,Tt=null,Rt=!1}}}function l(){let G=!1,Rt=null,wt=null,It=null,Tt=null,gt=null,kt=null,re=null,we=null;return{setTest:function(Me){G||(Me?Mt(s.STENCIL_TEST):Bt(s.STENCIL_TEST))},setMask:function(Me){Rt!==Me&&!G&&(s.stencilMask(Me),Rt=Me)},setFunc:function(Me,hi,un){(wt!==Me||It!==hi||Tt!==un)&&(s.stencilFunc(Me,hi,un),wt=Me,It=hi,Tt=un)},setOp:function(Me,hi,un){(gt!==Me||kt!==hi||re!==un)&&(s.stencilOp(Me,hi,un),gt=Me,kt=hi,re=un)},setLocked:function(Me){G=Me},setClear:function(Me){we!==Me&&(s.clearStencil(Me),we=Me)},reset:function(){G=!1,Rt=null,wt=null,It=null,Tt=null,gt=null,kt=null,re=null,we=null}}}const u=new n,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let _={},g={},x=new WeakMap,E=[],A=null,R=!1,y=null,v=null,F=null,N=null,D=null,z=null,k=null,H=new Ie(0,0,0),Z=0,w=!1,C=null,B=null,lt=null,ut=null,ht=null;const dt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,j=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),P=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),P=j>=2);let yt=null,U={};const J=s.getParameter(s.SCISSOR_BOX),St=s.getParameter(s.VIEWPORT),Et=new an().fromArray(J),Dt=new an().fromArray(St);function et(G,Rt,wt,It){const Tt=new Uint8Array(4),gt=s.createTexture();s.bindTexture(G,gt),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let kt=0;kt<wt;kt++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Rt,0,s.RGBA,1,1,It,0,s.RGBA,s.UNSIGNED_BYTE,Tt):s.texImage2D(Rt+kt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Tt);return gt}const pt={};pt[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),pt[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),pt[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Mt(s.DEPTH_TEST),h.setFunc(Os),Ee(!1),Ht(Lg),Mt(s.CULL_FACE),Ce(ka);function Mt(G){_[G]!==!0&&(s.enable(G),_[G]=!0)}function Bt(G){_[G]!==!1&&(s.disable(G),_[G]=!1)}function Zt(G,Rt){return g[G]!==Rt?(s.bindFramebuffer(G,Rt),g[G]=Rt,G===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Rt),G===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Rt),!0):!1}function ae(G,Rt){let wt=E,It=!1;if(G){wt=x.get(Rt),wt===void 0&&(wt=[],x.set(Rt,wt));const Tt=G.textures;if(wt.length!==Tt.length||wt[0]!==s.COLOR_ATTACHMENT0){for(let gt=0,kt=Tt.length;gt<kt;gt++)wt[gt]=s.COLOR_ATTACHMENT0+gt;wt.length=Tt.length,It=!0}}else wt[0]!==s.BACK&&(wt[0]=s.BACK,It=!0);It&&s.drawBuffers(wt)}function Ve(G){return A!==G?(s.useProgram(G),A=G,!0):!1}const _e={[Sr]:s.FUNC_ADD,[YS]:s.FUNC_SUBTRACT,[qS]:s.FUNC_REVERSE_SUBTRACT};_e[ZS]=s.MIN,_e[jS]=s.MAX;const I={[KS]:s.ZERO,[QS]:s.ONE,[JS]:s.SRC_COLOR,[Gh]:s.SRC_ALPHA,[ay]:s.SRC_ALPHA_SATURATE,[ny]:s.DST_COLOR,[ty]:s.DST_ALPHA,[$S]:s.ONE_MINUS_SRC_COLOR,[kh]:s.ONE_MINUS_SRC_ALPHA,[iy]:s.ONE_MINUS_DST_COLOR,[ey]:s.ONE_MINUS_DST_ALPHA,[ry]:s.CONSTANT_COLOR,[sy]:s.ONE_MINUS_CONSTANT_COLOR,[oy]:s.CONSTANT_ALPHA,[ly]:s.ONE_MINUS_CONSTANT_ALPHA};function Ce(G,Rt,wt,It,Tt,gt,kt,re,we,Me){if(G===ka){R===!0&&(Bt(s.BLEND),R=!1);return}if(R===!1&&(Mt(s.BLEND),R=!0),G!==WS){if(G!==y||Me!==w){if((v!==Sr||D!==Sr)&&(s.blendEquation(s.FUNC_ADD),v=Sr,D=Sr),Me)switch(G){case Us:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ng:s.blendFunc(s.ONE,s.ONE);break;case Og:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Pg:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Us:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ng:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Og:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}F=null,N=null,z=null,k=null,H.set(0,0,0),Z=0,y=G,w=Me}return}Tt=Tt||Rt,gt=gt||wt,kt=kt||It,(Rt!==v||Tt!==D)&&(s.blendEquationSeparate(_e[Rt],_e[Tt]),v=Rt,D=Tt),(wt!==F||It!==N||gt!==z||kt!==k)&&(s.blendFuncSeparate(I[wt],I[It],I[gt],I[kt]),F=wt,N=It,z=gt,k=kt),(re.equals(H)===!1||we!==Z)&&(s.blendColor(re.r,re.g,re.b,we),H.copy(re),Z=we),y=G,w=!1}function Jt(G,Rt){G.side===Bi?Bt(s.CULL_FACE):Mt(s.CULL_FACE);let wt=G.side===Xn;Rt&&(wt=!wt),Ee(wt),G.blending===Us&&G.transparent===!1?Ce(ka):Ce(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),h.setFunc(G.depthFunc),h.setTest(G.depthTest),h.setMask(G.depthWrite),u.setMask(G.colorWrite);const It=G.stencilWrite;d.setTest(It),It&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Vt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Mt(s.SAMPLE_ALPHA_TO_COVERAGE):Bt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(G){C!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),C=G)}function Ht(G){G!==GS?(Mt(s.CULL_FACE),G!==B&&(G===Lg?s.cullFace(s.BACK):G===kS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Bt(s.CULL_FACE),B=G}function Ge(G){G!==lt&&(P&&s.lineWidth(G),lt=G)}function Vt(G,Rt,wt){G?(Mt(s.POLYGON_OFFSET_FILL),(ut!==Rt||ht!==wt)&&(s.polygonOffset(Rt,wt),ut=Rt,ht=wt)):Bt(s.POLYGON_OFFSET_FILL)}function oe(G){G?Mt(s.SCISSOR_TEST):Bt(s.SCISSOR_TEST)}function Ze(G){G===void 0&&(G=s.TEXTURE0+dt-1),yt!==G&&(s.activeTexture(G),yt=G)}function je(G,Rt,wt){wt===void 0&&(yt===null?wt=s.TEXTURE0+dt-1:wt=yt);let It=U[wt];It===void 0&&(It={type:void 0,texture:void 0},U[wt]=It),(It.type!==G||It.texture!==Rt)&&(yt!==wt&&(s.activeTexture(wt),yt=wt),s.bindTexture(G,Rt||pt[G]),It.type=G,It.texture=Rt)}function L(){const G=U[yt];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function M(){try{s.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $(){try{s.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ct(){try{s.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function vt(){try{s.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ot(){try{s.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function zt(){try{s.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ct(){try{s.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Wt(){try{s.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function qt(){try{s.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function bt(){try{s.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Nt(G){Et.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Et.copy(G))}function Kt(G){Dt.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Dt.copy(G))}function Xt(G,Rt){let wt=p.get(Rt);wt===void 0&&(wt=new WeakMap,p.set(Rt,wt));let It=wt.get(G);It===void 0&&(It=s.getUniformBlockIndex(Rt,G.name),wt.set(G,It))}function Ut(G,Rt){const It=p.get(Rt).get(G);m.get(Rt)!==It&&(s.uniformBlockBinding(Rt,It,G.__bindingPointIndex),m.set(Rt,It))}function se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},yt=null,U={},g={},x=new WeakMap,E=[],A=null,R=!1,y=null,v=null,F=null,N=null,D=null,z=null,k=null,H=new Ie(0,0,0),Z=0,w=!1,C=null,B=null,lt=null,ut=null,ht=null,Et.set(0,0,s.canvas.width,s.canvas.height),Dt.set(0,0,s.canvas.width,s.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:Mt,disable:Bt,bindFramebuffer:Zt,drawBuffers:ae,useProgram:Ve,setBlending:Ce,setMaterial:Jt,setFlipSided:Ee,setCullFace:Ht,setLineWidth:Ge,setPolygonOffset:Vt,setScissorTest:oe,activeTexture:Ze,bindTexture:je,unbindTexture:L,compressedTexImage2D:M,compressedTexImage3D:$,texImage2D:qt,texImage3D:bt,updateUBOMapping:Xt,uniformBlockBinding:Ut,texStorage2D:Ct,texStorage3D:Wt,texSubImage2D:ct,texSubImage3D:vt,compressedTexSubImage2D:ot,compressedTexSubImage3D:zt,scissor:Nt,viewport:Kt,reset:se}}function HA(s,t,n,r,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new pe,_=new WeakMap;let g;const x=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(L,M){return E?new OffscreenCanvas(L,M):ju("canvas")}function R(L,M,$){let ct=1;const vt=je(L);if((vt.width>$||vt.height>$)&&(ct=$/Math.max(vt.width,vt.height)),ct<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ot=Math.floor(ct*vt.width),zt=Math.floor(ct*vt.height);g===void 0&&(g=A(ot,zt));const Ct=M?A(ot,zt):g;return Ct.width=ot,Ct.height=zt,Ct.getContext("2d").drawImage(L,0,0,ot,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ot+"x"+zt+")."),Ct}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),L;return L}function y(L){return L.generateMipmaps}function v(L){s.generateMipmap(L)}function F(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(L,M,$,ct,vt=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ot=M;if(M===s.RED&&($===s.FLOAT&&(ot=s.R32F),$===s.HALF_FLOAT&&(ot=s.R16F),$===s.UNSIGNED_BYTE&&(ot=s.R8)),M===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(ot=s.R8UI),$===s.UNSIGNED_SHORT&&(ot=s.R16UI),$===s.UNSIGNED_INT&&(ot=s.R32UI),$===s.BYTE&&(ot=s.R8I),$===s.SHORT&&(ot=s.R16I),$===s.INT&&(ot=s.R32I)),M===s.RG&&($===s.FLOAT&&(ot=s.RG32F),$===s.HALF_FLOAT&&(ot=s.RG16F),$===s.UNSIGNED_BYTE&&(ot=s.RG8)),M===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(ot=s.RG8UI),$===s.UNSIGNED_SHORT&&(ot=s.RG16UI),$===s.UNSIGNED_INT&&(ot=s.RG32UI),$===s.BYTE&&(ot=s.RG8I),$===s.SHORT&&(ot=s.RG16I),$===s.INT&&(ot=s.RG32I)),M===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(ot=s.RGB8UI),$===s.UNSIGNED_SHORT&&(ot=s.RGB16UI),$===s.UNSIGNED_INT&&(ot=s.RGB32UI),$===s.BYTE&&(ot=s.RGB8I),$===s.SHORT&&(ot=s.RGB16I),$===s.INT&&(ot=s.RGB32I)),M===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(ot=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(ot=s.RGBA16UI),$===s.UNSIGNED_INT&&(ot=s.RGBA32UI),$===s.BYTE&&(ot=s.RGBA8I),$===s.SHORT&&(ot=s.RGBA16I),$===s.INT&&(ot=s.RGBA32I)),M===s.RGB&&$===s.UNSIGNED_INT_5_9_9_9_REV&&(ot=s.RGB9_E5),M===s.RGBA){const zt=vt?qu:Ae.getTransfer(ct);$===s.FLOAT&&(ot=s.RGBA32F),$===s.HALF_FLOAT&&(ot=s.RGBA16F),$===s.UNSIGNED_BYTE&&(ot=zt===Be?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(ot=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(ot=s.RGB5_A1)}return(ot===s.R16F||ot===s.R32F||ot===s.RG16F||ot===s.RG32F||ot===s.RGBA16F||ot===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function D(L,M){let $;return L?M===null||M===Tr||M===jo?$=s.DEPTH24_STENCIL8:M===oa?$=s.DEPTH32F_STENCIL8:M===Zo&&($=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Tr||M===jo?$=s.DEPTH_COMPONENT24:M===oa?$=s.DEPTH_COMPONENT32F:M===Zo&&($=s.DEPTH_COMPONENT16),$}function z(L,M){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==Mi&&L.minFilter!==zi?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function k(L){const M=L.target;M.removeEventListener("dispose",k),Z(M),M.isVideoTexture&&_.delete(M)}function H(L){const M=L.target;M.removeEventListener("dispose",H),C(M)}function Z(L){const M=r.get(L);if(M.__webglInit===void 0)return;const $=L.source,ct=x.get($);if(ct){const vt=ct[M.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&w(L),Object.keys(ct).length===0&&x.delete($)}r.remove(L)}function w(L){const M=r.get(L);s.deleteTexture(M.__webglTexture);const $=L.source,ct=x.get($);delete ct[M.__cacheKey],h.memory.textures--}function C(L){const M=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(M.__webglFramebuffer[ct]))for(let vt=0;vt<M.__webglFramebuffer[ct].length;vt++)s.deleteFramebuffer(M.__webglFramebuffer[ct][vt]);else s.deleteFramebuffer(M.__webglFramebuffer[ct]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[ct])}else{if(Array.isArray(M.__webglFramebuffer))for(let ct=0;ct<M.__webglFramebuffer.length;ct++)s.deleteFramebuffer(M.__webglFramebuffer[ct]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ct=0;ct<M.__webglColorRenderbuffer.length;ct++)M.__webglColorRenderbuffer[ct]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[ct]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const $=L.textures;for(let ct=0,vt=$.length;ct<vt;ct++){const ot=r.get($[ct]);ot.__webglTexture&&(s.deleteTexture(ot.__webglTexture),h.memory.textures--),r.remove($[ct])}r.remove(L)}let B=0;function lt(){B=0}function ut(){const L=B;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),B+=1,L}function ht(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function dt(L,M){const $=r.get(L);if(L.isVideoTexture&&oe(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&$.__version!==L.version){const ct=L.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt($,L,M);return}}else L.isExternalTexture&&($.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+M)}function P(L,M){const $=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){pt($,L,M);return}n.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+M)}function j(L,M){const $=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){pt($,L,M);return}n.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+M)}function Y(L,M){const $=r.get(L);if(L.version>0&&$.__version!==L.version){Mt($,L,M);return}n.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+M)}const yt={[$h]:s.REPEAT,[Er]:s.CLAMP_TO_EDGE,[td]:s.MIRRORED_REPEAT},U={[Mi]:s.NEAREST,[vy]:s.NEAREST_MIPMAP_NEAREST,[du]:s.NEAREST_MIPMAP_LINEAR,[zi]:s.LINEAR,[ch]:s.LINEAR_MIPMAP_NEAREST,[Mr]:s.LINEAR_MIPMAP_LINEAR},J={[My]:s.NEVER,[wy]:s.ALWAYS,[by]:s.LESS,[t0]:s.LEQUAL,[Ty]:s.EQUAL,[Cy]:s.GEQUAL,[Ay]:s.GREATER,[Ry]:s.NOTEQUAL};function St(L,M){if(M.type===oa&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===zi||M.magFilter===ch||M.magFilter===du||M.magFilter===Mr||M.minFilter===zi||M.minFilter===ch||M.minFilter===du||M.minFilter===Mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,yt[M.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,yt[M.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,yt[M.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,U[M.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,U[M.minFilter]),M.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,J[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Mi||M.minFilter!==du&&M.minFilter!==Mr||M.type===oa&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function Et(L,M){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",k));const ct=M.source;let vt=x.get(ct);vt===void 0&&(vt={},x.set(ct,vt));const ot=ht(M);if(ot!==L.__cacheKey){vt[ot]===void 0&&(vt[ot]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,$=!0),vt[ot].usedTimes++;const zt=vt[L.__cacheKey];zt!==void 0&&(vt[L.__cacheKey].usedTimes--,zt.usedTimes===0&&w(M)),L.__cacheKey=ot,L.__webglTexture=vt[ot].texture}return $}function Dt(L,M,$){return Math.floor(Math.floor(L/$)/M)}function et(L,M,$,ct){const ot=L.updateRanges;if(ot.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,$,ct,M.data);else{ot.sort((bt,Nt)=>bt.start-Nt.start);let zt=0;for(let bt=1;bt<ot.length;bt++){const Nt=ot[zt],Kt=ot[bt],Xt=Nt.start+Nt.count,Ut=Dt(Kt.start,M.width,4),se=Dt(Nt.start,M.width,4);Kt.start<=Xt+1&&Ut===se&&Dt(Kt.start+Kt.count-1,M.width,4)===Ut?Nt.count=Math.max(Nt.count,Kt.start+Kt.count-Nt.start):(++zt,ot[zt]=Kt)}ot.length=zt+1;const Ct=s.getParameter(s.UNPACK_ROW_LENGTH),Wt=s.getParameter(s.UNPACK_SKIP_PIXELS),qt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let bt=0,Nt=ot.length;bt<Nt;bt++){const Kt=ot[bt],Xt=Math.floor(Kt.start/4),Ut=Math.ceil(Kt.count/4),se=Xt%M.width,G=Math.floor(Xt/M.width),Rt=Ut,wt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,se),s.pixelStorei(s.UNPACK_SKIP_ROWS,G),n.texSubImage2D(s.TEXTURE_2D,0,se,G,Rt,wt,$,ct,M.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ct),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Wt),s.pixelStorei(s.UNPACK_SKIP_ROWS,qt)}}function pt(L,M,$){let ct=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ct=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ct=s.TEXTURE_3D);const vt=Et(L,M),ot=M.source;n.bindTexture(ct,L.__webglTexture,s.TEXTURE0+$);const zt=r.get(ot);if(ot.version!==zt.__version||vt===!0){n.activeTexture(s.TEXTURE0+$);const Ct=Ae.getPrimaries(Ae.workingColorSpace),Wt=M.colorSpace===Ga?null:Ae.getPrimaries(M.colorSpace),qt=M.colorSpace===Ga||Ct===Wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let bt=R(M.image,!1,l.maxTextureSize);bt=Ze(M,bt);const Nt=u.convert(M.format,M.colorSpace),Kt=u.convert(M.type);let Xt=N(M.internalFormat,Nt,Kt,M.colorSpace,M.isVideoTexture);St(ct,M);let Ut;const se=M.mipmaps,G=M.isVideoTexture!==!0,Rt=zt.__version===void 0||vt===!0,wt=ot.dataReady,It=z(M,bt);if(M.isDepthTexture)Xt=D(M.format===Qo,M.type),Rt&&(G?n.texStorage2D(s.TEXTURE_2D,1,Xt,bt.width,bt.height):n.texImage2D(s.TEXTURE_2D,0,Xt,bt.width,bt.height,0,Nt,Kt,null));else if(M.isDataTexture)if(se.length>0){G&&Rt&&n.texStorage2D(s.TEXTURE_2D,It,Xt,se[0].width,se[0].height);for(let Tt=0,gt=se.length;Tt<gt;Tt++)Ut=se[Tt],G?wt&&n.texSubImage2D(s.TEXTURE_2D,Tt,0,0,Ut.width,Ut.height,Nt,Kt,Ut.data):n.texImage2D(s.TEXTURE_2D,Tt,Xt,Ut.width,Ut.height,0,Nt,Kt,Ut.data);M.generateMipmaps=!1}else G?(Rt&&n.texStorage2D(s.TEXTURE_2D,It,Xt,bt.width,bt.height),wt&&et(M,bt,Nt,Kt)):n.texImage2D(s.TEXTURE_2D,0,Xt,bt.width,bt.height,0,Nt,Kt,bt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){G&&Rt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,It,Xt,se[0].width,se[0].height,bt.depth);for(let Tt=0,gt=se.length;Tt<gt;Tt++)if(Ut=se[Tt],M.format!==yi)if(Nt!==null)if(G){if(wt)if(M.layerUpdates.size>0){const kt=iv(Ut.width,Ut.height,M.format,M.type);for(const re of M.layerUpdates){const we=Ut.data.subarray(re*kt/Ut.data.BYTES_PER_ELEMENT,(re+1)*kt/Ut.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Tt,0,0,re,Ut.width,Ut.height,1,Nt,we)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Tt,0,0,0,Ut.width,Ut.height,bt.depth,Nt,Ut.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Tt,Xt,Ut.width,Ut.height,bt.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?wt&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,Tt,0,0,0,Ut.width,Ut.height,bt.depth,Nt,Kt,Ut.data):n.texImage3D(s.TEXTURE_2D_ARRAY,Tt,Xt,Ut.width,Ut.height,bt.depth,0,Nt,Kt,Ut.data)}else{G&&Rt&&n.texStorage2D(s.TEXTURE_2D,It,Xt,se[0].width,se[0].height);for(let Tt=0,gt=se.length;Tt<gt;Tt++)Ut=se[Tt],M.format!==yi?Nt!==null?G?wt&&n.compressedTexSubImage2D(s.TEXTURE_2D,Tt,0,0,Ut.width,Ut.height,Nt,Ut.data):n.compressedTexImage2D(s.TEXTURE_2D,Tt,Xt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?wt&&n.texSubImage2D(s.TEXTURE_2D,Tt,0,0,Ut.width,Ut.height,Nt,Kt,Ut.data):n.texImage2D(s.TEXTURE_2D,Tt,Xt,Ut.width,Ut.height,0,Nt,Kt,Ut.data)}else if(M.isDataArrayTexture)if(G){if(Rt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,It,Xt,bt.width,bt.height,bt.depth),wt)if(M.layerUpdates.size>0){const Tt=iv(bt.width,bt.height,M.format,M.type);for(const gt of M.layerUpdates){const kt=bt.data.subarray(gt*Tt/bt.data.BYTES_PER_ELEMENT,(gt+1)*Tt/bt.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,gt,bt.width,bt.height,1,Nt,Kt,kt)}M.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Nt,Kt,bt.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Xt,bt.width,bt.height,bt.depth,0,Nt,Kt,bt.data);else if(M.isData3DTexture)G?(Rt&&n.texStorage3D(s.TEXTURE_3D,It,Xt,bt.width,bt.height,bt.depth),wt&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Nt,Kt,bt.data)):n.texImage3D(s.TEXTURE_3D,0,Xt,bt.width,bt.height,bt.depth,0,Nt,Kt,bt.data);else if(M.isFramebufferTexture){if(Rt)if(G)n.texStorage2D(s.TEXTURE_2D,It,Xt,bt.width,bt.height);else{let Tt=bt.width,gt=bt.height;for(let kt=0;kt<It;kt++)n.texImage2D(s.TEXTURE_2D,kt,Xt,Tt,gt,0,Nt,Kt,null),Tt>>=1,gt>>=1}}else if(se.length>0){if(G&&Rt){const Tt=je(se[0]);n.texStorage2D(s.TEXTURE_2D,It,Xt,Tt.width,Tt.height)}for(let Tt=0,gt=se.length;Tt<gt;Tt++)Ut=se[Tt],G?wt&&n.texSubImage2D(s.TEXTURE_2D,Tt,0,0,Nt,Kt,Ut):n.texImage2D(s.TEXTURE_2D,Tt,Xt,Nt,Kt,Ut);M.generateMipmaps=!1}else if(G){if(Rt){const Tt=je(bt);n.texStorage2D(s.TEXTURE_2D,It,Xt,Tt.width,Tt.height)}wt&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Nt,Kt,bt)}else n.texImage2D(s.TEXTURE_2D,0,Xt,Nt,Kt,bt);y(M)&&v(ct),zt.__version=ot.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function Mt(L,M,$){if(M.image.length!==6)return;const ct=Et(L,M),vt=M.source;n.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+$);const ot=r.get(vt);if(vt.version!==ot.__version||ct===!0){n.activeTexture(s.TEXTURE0+$);const zt=Ae.getPrimaries(Ae.workingColorSpace),Ct=M.colorSpace===Ga?null:Ae.getPrimaries(M.colorSpace),Wt=M.colorSpace===Ga||zt===Ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const qt=M.isCompressedTexture||M.image[0].isCompressedTexture,bt=M.image[0]&&M.image[0].isDataTexture,Nt=[];for(let gt=0;gt<6;gt++)!qt&&!bt?Nt[gt]=R(M.image[gt],!0,l.maxCubemapSize):Nt[gt]=bt?M.image[gt].image:M.image[gt],Nt[gt]=Ze(M,Nt[gt]);const Kt=Nt[0],Xt=u.convert(M.format,M.colorSpace),Ut=u.convert(M.type),se=N(M.internalFormat,Xt,Ut,M.colorSpace),G=M.isVideoTexture!==!0,Rt=ot.__version===void 0||ct===!0,wt=vt.dataReady;let It=z(M,Kt);St(s.TEXTURE_CUBE_MAP,M);let Tt;if(qt){G&&Rt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,It,se,Kt.width,Kt.height);for(let gt=0;gt<6;gt++){Tt=Nt[gt].mipmaps;for(let kt=0;kt<Tt.length;kt++){const re=Tt[kt];M.format!==yi?Xt!==null?G?wt&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,kt,0,0,re.width,re.height,Xt,re.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,kt,se,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?wt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,kt,0,0,re.width,re.height,Xt,Ut,re.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,kt,se,re.width,re.height,0,Xt,Ut,re.data)}}}else{if(Tt=M.mipmaps,G&&Rt){Tt.length>0&&It++;const gt=je(Nt[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,It,se,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(bt){G?wt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Nt[gt].width,Nt[gt].height,Xt,Ut,Nt[gt].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,se,Nt[gt].width,Nt[gt].height,0,Xt,Ut,Nt[gt].data);for(let kt=0;kt<Tt.length;kt++){const we=Tt[kt].image[gt].image;G?wt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,kt+1,0,0,we.width,we.height,Xt,Ut,we.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,kt+1,se,we.width,we.height,0,Xt,Ut,we.data)}}else{G?wt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Xt,Ut,Nt[gt]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,se,Xt,Ut,Nt[gt]);for(let kt=0;kt<Tt.length;kt++){const re=Tt[kt];G?wt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,kt+1,0,0,Xt,Ut,re.image[gt]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,kt+1,se,Xt,Ut,re.image[gt])}}}y(M)&&v(s.TEXTURE_CUBE_MAP),ot.__version=vt.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function Bt(L,M,$,ct,vt,ot){const zt=u.convert($.format,$.colorSpace),Ct=u.convert($.type),Wt=N($.internalFormat,zt,Ct,$.colorSpace),qt=r.get(M),bt=r.get($);if(bt.__renderTarget=M,!qt.__hasExternalTextures){const Nt=Math.max(1,M.width>>ot),Kt=Math.max(1,M.height>>ot);vt===s.TEXTURE_3D||vt===s.TEXTURE_2D_ARRAY?n.texImage3D(vt,ot,Wt,Nt,Kt,M.depth,0,zt,Ct,null):n.texImage2D(vt,ot,Wt,Nt,Kt,0,zt,Ct,null)}n.bindFramebuffer(s.FRAMEBUFFER,L),Vt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,vt,bt.__webglTexture,0,Ge(M)):(vt===s.TEXTURE_2D||vt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ct,vt,bt.__webglTexture,ot),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Zt(L,M,$){if(s.bindRenderbuffer(s.RENDERBUFFER,L),M.depthBuffer){const ct=M.depthTexture,vt=ct&&ct.isDepthTexture?ct.type:null,ot=D(M.stencilBuffer,vt),zt=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=Ge(M);Vt(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct,ot,M.width,M.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,ot,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ot,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,zt,s.RENDERBUFFER,L)}else{const ct=M.textures;for(let vt=0;vt<ct.length;vt++){const ot=ct[vt],zt=u.convert(ot.format,ot.colorSpace),Ct=u.convert(ot.type),Wt=N(ot.internalFormat,zt,Ct,ot.colorSpace),qt=Ge(M);$&&Vt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,Wt,M.width,M.height):Vt(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qt,Wt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Wt,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ae(L,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ct=r.get(M.depthTexture);ct.__renderTarget=M,(!ct.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),dt(M.depthTexture,0);const vt=ct.__webglTexture,ot=Ge(M);if(M.depthTexture.format===Ko)Vt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,vt,0,ot):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,vt,0);else if(M.depthTexture.format===Qo)Vt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,vt,0,ot):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function Ve(L){const M=r.get(L),$=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){const ct=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ct){const vt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ct.removeEventListener("dispose",vt)};ct.addEventListener("dispose",vt),M.__depthDisposeCallback=vt}M.__boundDepthTexture=ct}if(L.depthTexture&&!M.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const ct=L.texture.mipmaps;ct&&ct.length>0?ae(M.__webglFramebuffer[0],L):ae(M.__webglFramebuffer,L)}else if($){M.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[ct]),M.__webglDepthbuffer[ct]===void 0)M.__webglDepthbuffer[ct]=s.createRenderbuffer(),Zt(M.__webglDepthbuffer[ct],L,!1);else{const vt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=M.__webglDepthbuffer[ct];s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,vt,s.RENDERBUFFER,ot)}}else{const ct=L.texture.mipmaps;if(ct&&ct.length>0?n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Zt(M.__webglDepthbuffer,L,!1);else{const vt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,vt,s.RENDERBUFFER,ot)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function _e(L,M,$){const ct=r.get(L);M!==void 0&&Bt(ct.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&Ve(L)}function I(L){const M=L.texture,$=r.get(L),ct=r.get(M);L.addEventListener("dispose",H);const vt=L.textures,ot=L.isWebGLCubeRenderTarget===!0,zt=vt.length>1;if(zt||(ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture()),ct.__version=M.version,h.memory.textures++),ot){$.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer[Ct]=[];for(let Wt=0;Wt<M.mipmaps.length;Wt++)$.__webglFramebuffer[Ct][Wt]=s.createFramebuffer()}else $.__webglFramebuffer[Ct]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ct=0;Ct<M.mipmaps.length;Ct++)$.__webglFramebuffer[Ct]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(zt)for(let Ct=0,Wt=vt.length;Ct<Wt;Ct++){const qt=r.get(vt[Ct]);qt.__webglTexture===void 0&&(qt.__webglTexture=s.createTexture(),h.memory.textures++)}if(L.samples>0&&Vt(L)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ct=0;Ct<vt.length;Ct++){const Wt=vt[Ct];$.__webglColorRenderbuffer[Ct]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[Ct]);const qt=u.convert(Wt.format,Wt.colorSpace),bt=u.convert(Wt.type),Nt=N(Wt.internalFormat,qt,bt,Wt.colorSpace,L.isXRRenderTarget===!0),Kt=Ge(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Kt,Nt,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,$.__webglColorRenderbuffer[Ct])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),Zt($.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ot){n.bindTexture(s.TEXTURE_CUBE_MAP,ct.__webglTexture),St(s.TEXTURE_CUBE_MAP,M);for(let Ct=0;Ct<6;Ct++)if(M.mipmaps&&M.mipmaps.length>0)for(let Wt=0;Wt<M.mipmaps.length;Wt++)Bt($.__webglFramebuffer[Ct][Wt],L,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Wt);else Bt($.__webglFramebuffer[Ct],L,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);y(M)&&v(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(zt){for(let Ct=0,Wt=vt.length;Ct<Wt;Ct++){const qt=vt[Ct],bt=r.get(qt);let Nt=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Nt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Nt,bt.__webglTexture),St(Nt,qt),Bt($.__webglFramebuffer,L,qt,s.COLOR_ATTACHMENT0+Ct,Nt,0),y(qt)&&v(Nt)}n.unbindTexture()}else{let Ct=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ct=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ct,ct.__webglTexture),St(Ct,M),M.mipmaps&&M.mipmaps.length>0)for(let Wt=0;Wt<M.mipmaps.length;Wt++)Bt($.__webglFramebuffer[Wt],L,M,s.COLOR_ATTACHMENT0,Ct,Wt);else Bt($.__webglFramebuffer,L,M,s.COLOR_ATTACHMENT0,Ct,0);y(M)&&v(Ct),n.unbindTexture()}L.depthBuffer&&Ve(L)}function Ce(L){const M=L.textures;for(let $=0,ct=M.length;$<ct;$++){const vt=M[$];if(y(vt)){const ot=F(L),zt=r.get(vt).__webglTexture;n.bindTexture(ot,zt),v(ot),n.unbindTexture()}}}const Jt=[],Ee=[];function Ht(L){if(L.samples>0){if(Vt(L)===!1){const M=L.textures,$=L.width,ct=L.height;let vt=s.COLOR_BUFFER_BIT;const ot=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,zt=r.get(L),Ct=M.length>1;if(Ct)for(let qt=0;qt<M.length;qt++)n.bindFramebuffer(s.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qt,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,zt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qt,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);const Wt=L.texture.mipmaps;Wt&&Wt.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let qt=0;qt<M.length;qt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(vt|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(vt|=s.STENCIL_BUFFER_BIT)),Ct){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,zt.__webglColorRenderbuffer[qt]);const bt=r.get(M[qt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,bt,0)}s.blitFramebuffer(0,0,$,ct,0,0,$,ct,vt,s.NEAREST),m===!0&&(Jt.length=0,Ee.length=0,Jt.push(s.COLOR_ATTACHMENT0+qt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Jt.push(ot),Ee.push(ot),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ee)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Jt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ct)for(let qt=0;qt<M.length;qt++){n.bindFramebuffer(s.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qt,s.RENDERBUFFER,zt.__webglColorRenderbuffer[qt]);const bt=r.get(M[qt]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,zt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qt,s.TEXTURE_2D,bt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const M=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Ge(L){return Math.min(l.maxSamples,L.samples)}function Vt(L){const M=r.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function oe(L){const M=h.render.frame;_.get(L)!==M&&(_.set(L,M),L.update())}function Ze(L,M){const $=L.colorSpace,ct=L.format,vt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||$!==zs&&$!==Ga&&(Ae.getTransfer($)===Be?(ct!==yi||vt!==ua)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),M}function je(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=ut,this.resetTextureUnits=lt,this.setTexture2D=dt,this.setTexture2DArray=P,this.setTexture3D=j,this.setTextureCube=Y,this.rebindTextures=_e,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=Bt,this.useMultisampledRTT=Vt}function VA(s,t){function n(r,l=Ga){let u;const h=Ae.getTransfer(l);if(r===ua)return s.UNSIGNED_BYTE;if(r===Id)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Fd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Zv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Yv)return s.BYTE;if(r===qv)return s.SHORT;if(r===Zo)return s.UNSIGNED_SHORT;if(r===zd)return s.INT;if(r===Tr)return s.UNSIGNED_INT;if(r===oa)return s.FLOAT;if(r===$o)return s.HALF_FLOAT;if(r===jv)return s.ALPHA;if(r===Kv)return s.RGB;if(r===yi)return s.RGBA;if(r===Ko)return s.DEPTH_COMPONENT;if(r===Qo)return s.DEPTH_STENCIL;if(r===Qv)return s.RED;if(r===Hd)return s.RED_INTEGER;if(r===Jv)return s.RG;if(r===Vd)return s.RG_INTEGER;if(r===Gd)return s.RGBA_INTEGER;if(r===Hu||r===Vu||r===Gu||r===ku)if(h===Be)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Hu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ku)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Hu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ku)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ed||r===nd||r===id||r===ad)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===ed)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===nd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===id)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ad)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===rd||r===sd||r===od)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===rd||r===sd)return h===Be?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===od)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ld||r===ud||r===cd||r===fd||r===hd||r===dd||r===pd||r===md||r===_d||r===gd||r===vd||r===xd||r===Sd||r===yd)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===ld)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ud)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===cd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===fd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===dd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===pd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===md)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===_d)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===gd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===vd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===xd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Sd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===yd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xu||r===Ed||r===Md)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Xu)return h===Be?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ed)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Md)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$v||r===bd||r===Td||r===Ad)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Xu)return u.COMPRESSED_RED_RGTC1_EXT;if(r===bd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Td)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ad)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===jo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class x0 extends Wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const GA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class XA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const r=new x0(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,r=new Fi({vertexShader:GA,fragmentShader:kA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ei(new il(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WA extends Cr{constructor(t,n){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,_=null,g=null,x=null,E=null,A=null;const R=new XA,y={},v=n.getContextAttributes();let F=null,N=null;const D=[],z=[],k=new pe;let H=null;const Z=new fi;Z.viewport=new an;const w=new fi;w.viewport=new an;const C=[Z,w],B=new fE;let lt=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let pt=D[et];return pt===void 0&&(pt=new Lh,D[et]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(et){let pt=D[et];return pt===void 0&&(pt=new Lh,D[et]=pt),pt.getGripSpace()},this.getHand=function(et){let pt=D[et];return pt===void 0&&(pt=new Lh,D[et]=pt),pt.getHandSpace()};function ht(et){const pt=z.indexOf(et.inputSource);if(pt===-1)return;const Mt=D[pt];Mt!==void 0&&(Mt.update(et.inputSource,et.frame,p||h),Mt.dispatchEvent({type:et.type,data:et.inputSource}))}function dt(){l.removeEventListener("select",ht),l.removeEventListener("selectstart",ht),l.removeEventListener("selectend",ht),l.removeEventListener("squeeze",ht),l.removeEventListener("squeezestart",ht),l.removeEventListener("squeezeend",ht),l.removeEventListener("end",dt),l.removeEventListener("inputsourceschange",P);for(let et=0;et<D.length;et++){const pt=z[et];pt!==null&&(z[et]=null,D[et].disconnect(pt))}lt=null,ut=null,R.reset();for(const et in y)delete y[et];t.setRenderTarget(F),E=null,x=null,g=null,l=null,N=null,Dt.stop(),r.isPresenting=!1,t.setPixelRatio(H),t.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){u=et,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){d=et,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(et){p=et},this.getBaseLayer=function(){return x!==null?x:E},this.getBinding=function(){return g},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(F=t.getRenderTarget(),l.addEventListener("select",ht),l.addEventListener("selectstart",ht),l.addEventListener("selectend",ht),l.addEventListener("squeeze",ht),l.addEventListener("squeezestart",ht),l.addEventListener("squeezeend",ht),l.addEventListener("end",dt),l.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await n.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(k),typeof XRWebGLBinding<"u"&&(g=new XRWebGLBinding(l,n)),g!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Bt=null,Zt=null;v.depth&&(Zt=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Mt=v.stencil?Qo:Ko,Bt=v.stencil?jo:Tr);const ae={colorFormat:n.RGBA8,depthFormat:Zt,scaleFactor:u};x=g.createProjectionLayer(ae),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),N=new Rr(x.textureWidth,x.textureHeight,{format:yi,type:ua,depthTexture:new d0(x.textureWidth,x.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Mt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,n,Mt),l.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),N=new Rr(E.framebufferWidth,E.framebufferHeight,{format:yi,type:ua,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Dt.setContext(l),Dt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function P(et){for(let pt=0;pt<et.removed.length;pt++){const Mt=et.removed[pt],Bt=z.indexOf(Mt);Bt>=0&&(z[Bt]=null,D[Bt].disconnect(Mt))}for(let pt=0;pt<et.added.length;pt++){const Mt=et.added[pt];let Bt=z.indexOf(Mt);if(Bt===-1){for(let ae=0;ae<D.length;ae++)if(ae>=z.length){z.push(Mt),Bt=ae;break}else if(z[ae]===null){z[ae]=Mt,Bt=ae;break}if(Bt===-1)break}const Zt=D[Bt];Zt&&Zt.connect(Mt)}}const j=new nt,Y=new nt;function yt(et,pt,Mt){j.setFromMatrixPosition(pt.matrixWorld),Y.setFromMatrixPosition(Mt.matrixWorld);const Bt=j.distanceTo(Y),Zt=pt.projectionMatrix.elements,ae=Mt.projectionMatrix.elements,Ve=Zt[14]/(Zt[10]-1),_e=Zt[14]/(Zt[10]+1),I=(Zt[9]+1)/Zt[5],Ce=(Zt[9]-1)/Zt[5],Jt=(Zt[8]-1)/Zt[0],Ee=(ae[8]+1)/ae[0],Ht=Ve*Jt,Ge=Ve*Ee,Vt=Bt/(-Jt+Ee),oe=Vt*-Jt;if(pt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(oe),et.translateZ(Vt),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Zt[10]===-1)et.projectionMatrix.copy(pt.projectionMatrix),et.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Ze=Ve+Vt,je=_e+Vt,L=Ht-oe,M=Ge+(Bt-oe),$=I*_e/je*Ze,ct=Ce*_e/je*Ze;et.projectionMatrix.makePerspective(L,M,$,ct,Ze,je),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function U(et,pt){pt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(pt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let pt=et.near,Mt=et.far;R.texture!==null&&(R.depthNear>0&&(pt=R.depthNear),R.depthFar>0&&(Mt=R.depthFar)),B.near=w.near=Z.near=pt,B.far=w.far=Z.far=Mt,(lt!==B.near||ut!==B.far)&&(l.updateRenderState({depthNear:B.near,depthFar:B.far}),lt=B.near,ut=B.far),B.layers.mask=et.layers.mask|6,Z.layers.mask=B.layers.mask&3,w.layers.mask=B.layers.mask&5;const Bt=et.parent,Zt=B.cameras;U(B,Bt);for(let ae=0;ae<Zt.length;ae++)U(Zt[ae],Bt);Zt.length===2?yt(B,Z,w):B.projectionMatrix.copy(Z.projectionMatrix),J(et,B,Bt)};function J(et,pt,Mt){Mt===null?et.matrix.copy(pt.matrixWorld):(et.matrix.copy(Mt.matrixWorld),et.matrix.invert(),et.matrix.multiply(pt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(pt.projectionMatrix),et.projectionMatrixInverse.copy(pt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Rd*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(x===null&&E===null))return m},this.setFoveation=function(et){m=et,x!==null&&(x.fixedFoveation=et),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=et)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(B)},this.getCameraTexture=function(et){return y[et]};let St=null;function Et(et,pt){if(_=pt.getViewerPose(p||h),A=pt,_!==null){const Mt=_.views;E!==null&&(t.setRenderTargetFramebuffer(N,E.framebuffer),t.setRenderTarget(N));let Bt=!1;Mt.length!==B.cameras.length&&(B.cameras.length=0,Bt=!0);for(let _e=0;_e<Mt.length;_e++){const I=Mt[_e];let Ce=null;if(E!==null)Ce=E.getViewport(I);else{const Ee=g.getViewSubImage(x,I);Ce=Ee.viewport,_e===0&&(t.setRenderTargetTextures(N,Ee.colorTexture,Ee.depthStencilTexture),t.setRenderTarget(N))}let Jt=C[_e];Jt===void 0&&(Jt=new fi,Jt.layers.enable(_e),Jt.viewport=new an,C[_e]=Jt),Jt.matrix.fromArray(I.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(I.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),_e===0&&(B.matrix.copy(Jt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Bt===!0&&B.cameras.push(Jt)}const Zt=l.enabledFeatures;if(Zt&&Zt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&g){const _e=g.getDepthInformation(Mt[0]);_e&&_e.isValid&&_e.texture&&R.init(_e,l.renderState)}if(Zt&&Zt.includes("camera-access")&&(t.state.unbindTexture(),g))for(let _e=0;_e<Mt.length;_e++){const I=Mt[_e].camera;if(I){let Ce=y[I];Ce||(Ce=new x0,y[I]=Ce);const Jt=g.getCameraImage(I);Ce.sourceTexture=Jt}}}for(let Mt=0;Mt<D.length;Mt++){const Bt=z[Mt],Zt=D[Mt];Bt!==null&&Zt!==void 0&&Zt.update(Bt,pt,p||h)}St&&St(et,pt),pt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pt}),A=null}const Dt=new p0;Dt.setAnimationLoop(Et),this.setAnimationLoop=function(et){St=et},this.dispose=function(){}}}const vr=new ca,YA=new pn;function qA(s,t){function n(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,u0(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,F,N,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(y,v):v.isMeshToonMaterial?(u(y,v),g(y,v)):v.isMeshPhongMaterial?(u(y,v),_(y,v)):v.isMeshStandardMaterial?(u(y,v),x(y,v),v.isMeshPhysicalMaterial&&E(y,v,D)):v.isMeshMatcapMaterial?(u(y,v),A(y,v)):v.isMeshDepthMaterial?u(y,v):v.isMeshDistanceMaterial?(u(y,v),R(y,v)):v.isMeshNormalMaterial?u(y,v):v.isLineBasicMaterial?(h(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?m(y,v,F,N):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,n(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Xn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,n(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Xn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,n(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,n(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const F=t.get(v),N=F.envMap,D=F.envMapRotation;N&&(y.envMap.value=N,vr.copy(D),vr.x*=-1,vr.y*=-1,vr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),y.envMapRotation.value.setFromMatrix4(YA.makeRotationFromEuler(vr)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,y.aoMapTransform))}function h(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,F,N){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*F,y.scale.value=N*.5,v.map&&(y.map.value=v.map,n(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function _(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function g(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function E(y,v,F){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Xn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=F.texture,y.transmissionSamplerSize.value.set(F.width,F.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,v){v.matcap&&(y.matcap.value=v.matcap)}function R(y,v){const F=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(F.matrixWorld),y.nearDistance.value=F.shadow.camera.near,y.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function ZA(s,t,n,r){let l={},u={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(F,N){const D=N.program;r.uniformBlockBinding(F,D)}function p(F,N){let D=l[F.id];D===void 0&&(A(F),D=_(F),l[F.id]=D,F.addEventListener("dispose",y));const z=N.program;r.updateUBOMapping(F,z);const k=t.render.frame;u[F.id]!==k&&(x(F),u[F.id]=k)}function _(F){const N=g();F.__bindingPointIndex=N;const D=s.createBuffer(),z=F.__size,k=F.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,z,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,D),D}function g(){for(let F=0;F<d;F++)if(h.indexOf(F)===-1)return h.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(F){const N=l[F.id],D=F.uniforms,z=F.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let k=0,H=D.length;k<H;k++){const Z=Array.isArray(D[k])?D[k]:[D[k]];for(let w=0,C=Z.length;w<C;w++){const B=Z[w];if(E(B,k,w,z)===!0){const lt=B.__offset,ut=Array.isArray(B.value)?B.value:[B.value];let ht=0;for(let dt=0;dt<ut.length;dt++){const P=ut[dt],j=R(P);typeof P=="number"||typeof P=="boolean"?(B.__data[0]=P,s.bufferSubData(s.UNIFORM_BUFFER,lt+ht,B.__data)):P.isMatrix3?(B.__data[0]=P.elements[0],B.__data[1]=P.elements[1],B.__data[2]=P.elements[2],B.__data[3]=0,B.__data[4]=P.elements[3],B.__data[5]=P.elements[4],B.__data[6]=P.elements[5],B.__data[7]=0,B.__data[8]=P.elements[6],B.__data[9]=P.elements[7],B.__data[10]=P.elements[8],B.__data[11]=0):(P.toArray(B.__data,ht),ht+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,lt,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function E(F,N,D,z){const k=F.value,H=N+"_"+D;if(z[H]===void 0)return typeof k=="number"||typeof k=="boolean"?z[H]=k:z[H]=k.clone(),!0;{const Z=z[H];if(typeof k=="number"||typeof k=="boolean"){if(Z!==k)return z[H]=k,!0}else if(Z.equals(k)===!1)return Z.copy(k),!0}return!1}function A(F){const N=F.uniforms;let D=0;const z=16;for(let H=0,Z=N.length;H<Z;H++){const w=Array.isArray(N[H])?N[H]:[N[H]];for(let C=0,B=w.length;C<B;C++){const lt=w[C],ut=Array.isArray(lt.value)?lt.value:[lt.value];for(let ht=0,dt=ut.length;ht<dt;ht++){const P=ut[ht],j=R(P),Y=D%z,yt=Y%j.boundary,U=Y+yt;D+=yt,U!==0&&z-U<j.storage&&(D+=z-U),lt.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=D,D+=j.storage}}}const k=D%z;return k>0&&(D+=z-k),F.__size=D,F.__cache={},this}function R(F){const N={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(N.boundary=4,N.storage=4):F.isVector2?(N.boundary=8,N.storage=8):F.isVector3||F.isColor?(N.boundary=16,N.storage=12):F.isVector4?(N.boundary=16,N.storage=16):F.isMatrix3?(N.boundary=48,N.storage=48):F.isMatrix4?(N.boundary=64,N.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),N}function y(F){const N=F.target;N.removeEventListener("dispose",y);const D=h.indexOf(N.__bindingPointIndex);h.splice(D,1),s.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function v(){for(const F in l)s.deleteBuffer(l[F]);h=[],l={},u={}}return{bind:m,update:p,dispose:v}}class jA{constructor(t={}){const{canvas:n=Ly(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=h;const A=new Uint32Array(4),R=new Int32Array(4);let y=null,v=null;const F=[],N=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let z=!1;this._outputColorSpace=ci;let k=0,H=0,Z=null,w=-1,C=null;const B=new an,lt=new an;let ut=null;const ht=new Ie(0);let dt=0,P=n.width,j=n.height,Y=1,yt=null,U=null;const J=new an(0,0,P,j),St=new an(0,0,P,j);let Et=!1;const Dt=new h0;let et=!1,pt=!1;const Mt=new pn,Bt=new nt,Zt=new an,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function _e(){return Z===null?Y:1}let I=r;function Ce(T,X){return n.getContext(T,X)}try{const T={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Bd}`),n.addEventListener("webglcontextlost",wt,!1),n.addEventListener("webglcontextrestored",It,!1),n.addEventListener("webglcontextcreationerror",Tt,!1),I===null){const X="webgl2";if(I=Ce(X,T),I===null)throw Ce(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Jt,Ee,Ht,Ge,Vt,oe,Ze,je,L,M,$,ct,vt,ot,zt,Ct,Wt,qt,bt,Nt,Kt,Xt,Ut,se;function G(){Jt=new rT(I),Jt.init(),Xt=new VA(I,Jt),Ee=new Jb(I,Jt,t,Xt),Ht=new FA(I,Jt),Ee.reversedDepthBuffer&&x&&Ht.buffers.depth.setReversed(!0),Ge=new lT(I),Vt=new AA,oe=new HA(I,Jt,Ht,Vt,Ee,Xt,Ge),Ze=new tT(D),je=new aT(D),L=new pE(I),Ut=new Kb(I,L),M=new sT(I,L,Ge,Ut),$=new cT(I,M,L,Ge),bt=new uT(I,Ee,oe),Ct=new $b(Vt),ct=new TA(D,Ze,je,Jt,Ee,Ut,Ct),vt=new qA(D,Vt),ot=new CA,zt=new OA(Jt),qt=new jb(D,Ze,je,Ht,$,E,m),Wt=new zA(D,$,Ee),se=new ZA(I,Ge,Ee,Ht),Nt=new Qb(I,Jt,Ge),Kt=new oT(I,Jt,Ge),Ge.programs=ct.programs,D.capabilities=Ee,D.extensions=Jt,D.properties=Vt,D.renderLists=ot,D.shadowMap=Wt,D.state=Ht,D.info=Ge}G();const Rt=new WA(D,I);this.xr=Rt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=Jt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Jt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(P,j,!1))},this.getSize=function(T){return T.set(P,j)},this.setSize=function(T,X,rt=!0){if(Rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=T,j=X,n.width=Math.floor(T*Y),n.height=Math.floor(X*Y),rt===!0&&(n.style.width=T+"px",n.style.height=X+"px"),this.setViewport(0,0,T,X)},this.getDrawingBufferSize=function(T){return T.set(P*Y,j*Y).floor()},this.setDrawingBufferSize=function(T,X,rt){P=T,j=X,Y=rt,n.width=Math.floor(T*rt),n.height=Math.floor(X*rt),this.setViewport(0,0,T,X)},this.getCurrentViewport=function(T){return T.copy(B)},this.getViewport=function(T){return T.copy(J)},this.setViewport=function(T,X,rt,st){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,X,rt,st),Ht.viewport(B.copy(J).multiplyScalar(Y).round())},this.getScissor=function(T){return T.copy(St)},this.setScissor=function(T,X,rt,st){T.isVector4?St.set(T.x,T.y,T.z,T.w):St.set(T,X,rt,st),Ht.scissor(lt.copy(St).multiplyScalar(Y).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(T){Ht.setScissorTest(Et=T)},this.setOpaqueSort=function(T){yt=T},this.setTransparentSort=function(T){U=T},this.getClearColor=function(T){return T.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(T=!0,X=!0,rt=!0){let st=0;if(T){let q=!1;if(Z!==null){const At=Z.texture.format;q=At===Gd||At===Vd||At===Hd}if(q){const At=Z.texture.type,Lt=At===ua||At===Tr||At===Zo||At===jo||At===Id||At===Fd,Ft=qt.getClearColor(),Ot=qt.getClearAlpha(),$t=Ft.r,ee=Ft.g,Yt=Ft.b;Lt?(A[0]=$t,A[1]=ee,A[2]=Yt,A[3]=Ot,I.clearBufferuiv(I.COLOR,0,A)):(R[0]=$t,R[1]=ee,R[2]=Yt,R[3]=Ot,I.clearBufferiv(I.COLOR,0,R))}else st|=I.COLOR_BUFFER_BIT}X&&(st|=I.DEPTH_BUFFER_BIT),rt&&(st|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",wt,!1),n.removeEventListener("webglcontextrestored",It,!1),n.removeEventListener("webglcontextcreationerror",Tt,!1),qt.dispose(),ot.dispose(),zt.dispose(),Vt.dispose(),Ze.dispose(),je.dispose(),$.dispose(),Ut.dispose(),se.dispose(),ct.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",un),Rt.removeEventListener("sessionend",cn),Qe.stop()};function wt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const T=Ge.autoReset,X=Wt.enabled,rt=Wt.autoUpdate,st=Wt.needsUpdate,q=Wt.type;G(),Ge.autoReset=T,Wt.enabled=X,Wt.autoUpdate=rt,Wt.needsUpdate=st,Wt.type=q}function Tt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function gt(T){const X=T.target;X.removeEventListener("dispose",gt),kt(X)}function kt(T){re(T),Vt.remove(T)}function re(T){const X=Vt.get(T).programs;X!==void 0&&(X.forEach(function(rt){ct.releaseProgram(rt)}),T.isShaderMaterial&&ct.releaseShaderCache(T))}this.renderBufferDirect=function(T,X,rt,st,q,At){X===null&&(X=ae);const Lt=q.isMesh&&q.matrixWorld.determinant()<0,Ft=fa(T,X,rt,st,q);Ht.setMaterial(st,Lt);let Ot=rt.index,$t=1;if(st.wireframe===!0){if(Ot=M.getWireframeAttribute(rt),Ot===void 0)return;$t=2}const ee=rt.drawRange,Yt=rt.attributes.position;let ce=ee.start*$t,be=(ee.start+ee.count)*$t;At!==null&&(ce=Math.max(ce,At.start*$t),be=Math.min(be,(At.start+At.count)*$t)),Ot!==null?(ce=Math.max(ce,0),be=Math.min(be,Ot.count)):Yt!=null&&(ce=Math.max(ce,0),be=Math.min(be,Yt.count));const Ye=be-ce;if(Ye<0||Ye===1/0)return;Ut.setup(q,st,Ft,rt,Ot);let Le,fe=Nt;if(Ot!==null&&(Le=L.get(Ot),fe=Kt,fe.setIndex(Le)),q.isMesh)st.wireframe===!0?(Ht.setLineWidth(st.wireframeLinewidth*_e()),fe.setMode(I.LINES)):fe.setMode(I.TRIANGLES);else if(q.isLine){let Qt=st.linewidth;Qt===void 0&&(Qt=1),Ht.setLineWidth(Qt*_e()),q.isLineSegments?fe.setMode(I.LINES):q.isLineLoop?fe.setMode(I.LINE_LOOP):fe.setMode(I.LINE_STRIP)}else q.isPoints?fe.setMode(I.POINTS):q.isSprite&&fe.setMode(I.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Ls("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))fe.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Qt=q._multiDrawStarts,We=q._multiDrawCounts,ge=q._multiDrawCount,Rn=Ot?L.get(Ot).bytesPerElement:1,di=Vt.get(st).currentProgram.getUniforms();for(let Nn=0;Nn<ge;Nn++)di.setValue(I,"_gl_DrawID",Nn),fe.render(Qt[Nn]/Rn,We[Nn])}else if(q.isInstancedMesh)fe.renderInstances(ce,Ye,q.count);else if(rt.isInstancedBufferGeometry){const Qt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,We=Math.min(rt.instanceCount,Qt);fe.renderInstances(ce,Ye,We)}else fe.render(ce,Ye)};function we(T,X,rt){T.transparent===!0&&T.side===Bi&&T.forceSinglePass===!1?(T.side=Xn,T.needsUpdate=!0,Ci(T,X,rt),T.side=Wa,T.needsUpdate=!0,Ci(T,X,rt),T.side=Bi):Ci(T,X,rt)}this.compile=function(T,X,rt=null){rt===null&&(rt=T),v=zt.get(rt),v.init(X),N.push(v),rt.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),T!==rt&&T.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),v.setupLights();const st=new Set;return T.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const At=q.material;if(At)if(Array.isArray(At))for(let Lt=0;Lt<At.length;Lt++){const Ft=At[Lt];we(Ft,rt,q),st.add(Ft)}else we(At,rt,q),st.add(At)}),v=N.pop(),st},this.compileAsync=function(T,X,rt=null){const st=this.compile(T,X,rt);return new Promise(q=>{function At(){if(st.forEach(function(Lt){Vt.get(Lt).currentProgram.isReady()&&st.delete(Lt)}),st.size===0){q(T);return}setTimeout(At,10)}Jt.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Me=null;function hi(T){Me&&Me(T)}function un(){Qe.stop()}function cn(){Qe.start()}const Qe=new p0;Qe.setAnimationLoop(hi),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(T){Me=T,Rt.setAnimationLoop(T),T===null?Qe.stop():Qe.start()},Rt.addEventListener("sessionstart",un),Rt.addEventListener("sessionend",cn),this.render=function(T,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(X),X=Rt.getCamera()),T.isScene===!0&&T.onBeforeRender(D,T,X,Z),v=zt.get(T,N.length),v.init(X),N.push(v),Mt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Dt.setFromProjectionMatrix(Mt,Ii,X.reversedDepth),pt=this.localClippingEnabled,et=Ct.init(this.clippingPlanes,pt),y=ot.get(T,F.length),y.init(),F.push(y),Rt.enabled===!0&&Rt.isPresenting===!0){const At=D.xr.getDepthSensingMesh();At!==null&&Ri(At,X,-1/0,D.sortObjects)}Ri(T,X,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(yt,U),Ve=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,Ve&&qt.addToRenderList(y,T),this.info.render.frame++,et===!0&&Ct.beginShadows();const rt=v.state.shadowsArray;Wt.render(rt,T,X),et===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=y.opaque,q=y.transmissive;if(v.setupLights(),X.isArrayCamera){const At=X.cameras;if(q.length>0)for(let Lt=0,Ft=At.length;Lt<Ft;Lt++){const Ot=At[Lt];al(st,q,T,Ot)}Ve&&qt.render(T);for(let Lt=0,Ft=At.length;Lt<Ft;Lt++){const Ot=At[Lt];Dr(y,T,Ot,Ot.viewport)}}else q.length>0&&al(st,q,T,X),Ve&&qt.render(T),Dr(y,T,X);Z!==null&&H===0&&(oe.updateMultisampleRenderTarget(Z),oe.updateRenderTargetMipmap(Z)),T.isScene===!0&&T.onAfterRender(D,T,X),Ut.resetDefaultState(),w=-1,C=null,N.pop(),N.length>0?(v=N[N.length-1],et===!0&&Ct.setGlobalState(D.clippingPlanes,v.state.camera)):v=null,F.pop(),F.length>0?y=F[F.length-1]:y=null};function Ri(T,X,rt,st){if(T.visible===!1)return;if(T.layers.test(X.layers)){if(T.isGroup)rt=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(X);else if(T.isLight)v.pushLight(T),T.castShadow&&v.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Dt.intersectsSprite(T)){st&&Zt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Mt);const Lt=$.update(T),Ft=T.material;Ft.visible&&y.push(T,Lt,Ft,rt,Zt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Dt.intersectsObject(T))){const Lt=$.update(T),Ft=T.material;if(st&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Zt.copy(T.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Zt.copy(Lt.boundingSphere.center)),Zt.applyMatrix4(T.matrixWorld).applyMatrix4(Mt)),Array.isArray(Ft)){const Ot=Lt.groups;for(let $t=0,ee=Ot.length;$t<ee;$t++){const Yt=Ot[$t],ce=Ft[Yt.materialIndex];ce&&ce.visible&&y.push(T,Lt,ce,rt,Zt.z,Yt)}}else Ft.visible&&y.push(T,Lt,Ft,rt,Zt.z,null)}}const At=T.children;for(let Lt=0,Ft=At.length;Lt<Ft;Lt++)Ri(At[Lt],X,rt,st)}function Dr(T,X,rt,st){const q=T.opaque,At=T.transmissive,Lt=T.transparent;v.setupLightsView(rt),et===!0&&Ct.setGlobalState(D.clippingPlanes,rt),st&&Ht.viewport(B.copy(st)),q.length>0&&Ur(q,X,rt),At.length>0&&Ur(At,X,rt),Lt.length>0&&Ur(Lt,X,rt),Ht.buffers.depth.setTest(!0),Ht.buffers.depth.setMask(!0),Ht.buffers.color.setMask(!0),Ht.setPolygonOffset(!1)}function al(T,X,rt,st){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[st.id]===void 0&&(v.state.transmissionRenderTarget[st.id]=new Rr(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?$o:ua,minFilter:Mr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const At=v.state.transmissionRenderTarget[st.id],Lt=st.viewport||B;At.setSize(Lt.z*D.transmissionResolutionScale,Lt.w*D.transmissionResolutionScale);const Ft=D.getRenderTarget(),Ot=D.getActiveCubeFace(),$t=D.getActiveMipmapLevel();D.setRenderTarget(At),D.getClearColor(ht),dt=D.getClearAlpha(),dt<1&&D.setClearColor(16777215,.5),D.clear(),Ve&&qt.render(rt);const ee=D.toneMapping;D.toneMapping=Xa;const Yt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),v.setupLightsView(st),et===!0&&Ct.setGlobalState(D.clippingPlanes,st),Ur(T,rt,st),oe.updateMultisampleRenderTarget(At),oe.updateRenderTargetMipmap(At),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let be=0,Ye=X.length;be<Ye;be++){const Le=X[be],fe=Le.object,Qt=Le.geometry,We=Le.material,ge=Le.group;if(We.side===Bi&&fe.layers.test(st.layers)){const Rn=We.side;We.side=Xn,We.needsUpdate=!0,Hs(fe,rt,st,Qt,We,ge),We.side=Rn,We.needsUpdate=!0,ce=!0}}ce===!0&&(oe.updateMultisampleRenderTarget(At),oe.updateRenderTargetMipmap(At))}D.setRenderTarget(Ft,Ot,$t),D.setClearColor(ht,dt),Yt!==void 0&&(st.viewport=Yt),D.toneMapping=ee}function Ur(T,X,rt){const st=X.isScene===!0?X.overrideMaterial:null;for(let q=0,At=T.length;q<At;q++){const Lt=T[q],Ft=Lt.object,Ot=Lt.geometry,$t=Lt.group;let ee=Lt.material;ee.allowOverride===!0&&st!==null&&(ee=st),Ft.layers.test(rt.layers)&&Hs(Ft,X,rt,Ot,ee,$t)}}function Hs(T,X,rt,st,q,At){T.onBeforeRender(D,X,rt,st,q,At),T.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(D,X,rt,st,T,At),q.transparent===!0&&q.side===Bi&&q.forceSinglePass===!1?(q.side=Xn,q.needsUpdate=!0,D.renderBufferDirect(rt,X,st,q,T,At),q.side=Wa,q.needsUpdate=!0,D.renderBufferDirect(rt,X,st,q,T,At),q.side=Bi):D.renderBufferDirect(rt,X,st,q,T,At),T.onAfterRender(D,X,rt,st,q,At)}function Ci(T,X,rt){X.isScene!==!0&&(X=ae);const st=Vt.get(T),q=v.state.lights,At=v.state.shadowsArray,Lt=q.state.version,Ft=ct.getParameters(T,q.state,At,X,rt),Ot=ct.getProgramCacheKey(Ft);let $t=st.programs;st.environment=T.isMeshStandardMaterial?X.environment:null,st.fog=X.fog,st.envMap=(T.isMeshStandardMaterial?je:Ze).get(T.envMap||st.environment),st.envMapRotation=st.environment!==null&&T.envMap===null?X.environmentRotation:T.envMapRotation,$t===void 0&&(T.addEventListener("dispose",gt),$t=new Map,st.programs=$t);let ee=$t.get(Ot);if(ee!==void 0){if(st.currentProgram===ee&&st.lightsStateVersion===Lt)return Hi(T,Ft),ee}else Ft.uniforms=ct.getUniforms(T),T.onBeforeCompile(Ft,D),ee=ct.acquireProgram(Ft,Ot),$t.set(Ot,ee),st.uniforms=Ft.uniforms;const Yt=st.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Yt.clippingPlanes=Ct.uniform),Hi(T,Ft),st.needsLights=ha(T),st.lightsStateVersion=Lt,st.needsLights&&(Yt.ambientLightColor.value=q.state.ambient,Yt.lightProbe.value=q.state.probe,Yt.directionalLights.value=q.state.directional,Yt.directionalLightShadows.value=q.state.directionalShadow,Yt.spotLights.value=q.state.spot,Yt.spotLightShadows.value=q.state.spotShadow,Yt.rectAreaLights.value=q.state.rectArea,Yt.ltc_1.value=q.state.rectAreaLTC1,Yt.ltc_2.value=q.state.rectAreaLTC2,Yt.pointLights.value=q.state.point,Yt.pointLightShadows.value=q.state.pointShadow,Yt.hemisphereLights.value=q.state.hemi,Yt.directionalShadowMap.value=q.state.directionalShadowMap,Yt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Yt.spotShadowMap.value=q.state.spotShadowMap,Yt.spotLightMatrix.value=q.state.spotLightMatrix,Yt.spotLightMap.value=q.state.spotLightMap,Yt.pointShadowMap.value=q.state.pointShadowMap,Yt.pointShadowMatrix.value=q.state.pointShadowMatrix),st.currentProgram=ee,st.uniformsList=null,ee}function Lr(T){if(T.uniformsList===null){const X=T.currentProgram.getUniforms();T.uniformsList=Yu.seqWithValue(X.seq,T.uniforms)}return T.uniformsList}function Hi(T,X){const rt=Vt.get(T);rt.outputColorSpace=X.outputColorSpace,rt.batching=X.batching,rt.batchingColor=X.batchingColor,rt.instancing=X.instancing,rt.instancingColor=X.instancingColor,rt.instancingMorph=X.instancingMorph,rt.skinning=X.skinning,rt.morphTargets=X.morphTargets,rt.morphNormals=X.morphNormals,rt.morphColors=X.morphColors,rt.morphTargetsCount=X.morphTargetsCount,rt.numClippingPlanes=X.numClippingPlanes,rt.numIntersection=X.numClipIntersection,rt.vertexAlphas=X.vertexAlphas,rt.vertexTangents=X.vertexTangents,rt.toneMapping=X.toneMapping}function fa(T,X,rt,st,q){X.isScene!==!0&&(X=ae),oe.resetTextureUnits();const At=X.fog,Lt=st.isMeshStandardMaterial?X.environment:null,Ft=Z===null?D.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:zs,Ot=(st.isMeshStandardMaterial?je:Ze).get(st.envMap||Lt),$t=st.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ee=!!rt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Yt=!!rt.morphAttributes.position,ce=!!rt.morphAttributes.normal,be=!!rt.morphAttributes.color;let Ye=Xa;st.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ye=D.toneMapping);const Le=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,fe=Le!==void 0?Le.length:0,Qt=Vt.get(st),We=v.state.lights;if(et===!0&&(pt===!0||T!==C)){const Je=T===C&&st.id===w;Ct.setState(st,T,Je)}let ge=!1;st.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==We.state.version||Qt.outputColorSpace!==Ft||q.isBatchedMesh&&Qt.batching===!1||!q.isBatchedMesh&&Qt.batching===!0||q.isBatchedMesh&&Qt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Qt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Qt.instancing===!1||!q.isInstancedMesh&&Qt.instancing===!0||q.isSkinnedMesh&&Qt.skinning===!1||!q.isSkinnedMesh&&Qt.skinning===!0||q.isInstancedMesh&&Qt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Qt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Qt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Qt.instancingMorph===!1&&q.morphTexture!==null||Qt.envMap!==Ot||st.fog===!0&&Qt.fog!==At||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Ct.numPlanes||Qt.numIntersection!==Ct.numIntersection)||Qt.vertexAlphas!==$t||Qt.vertexTangents!==ee||Qt.morphTargets!==Yt||Qt.morphNormals!==ce||Qt.morphColors!==be||Qt.toneMapping!==Ye||Qt.morphTargetsCount!==fe)&&(ge=!0):(ge=!0,Qt.__version=st.version);let Rn=Qt.currentProgram;ge===!0&&(Rn=Ci(st,X,q));let di=!1,Nn=!1,gn=!1;const Fe=Rn.getUniforms(),On=Qt.uniforms;if(Ht.useProgram(Rn.program)&&(di=!0,Nn=!0,gn=!0),st.id!==w&&(w=st.id,Nn=!0),di||C!==T){Ht.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Fe.setValue(I,"projectionMatrix",T.projectionMatrix),Fe.setValue(I,"viewMatrix",T.matrixWorldInverse);const Mn=Fe.map.cameraPosition;Mn!==void 0&&Mn.setValue(I,Bt.setFromMatrixPosition(T.matrixWorld)),Ee.logarithmicDepthBuffer&&Fe.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Fe.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),C!==T&&(C=T,Nn=!0,gn=!0)}if(q.isSkinnedMesh){Fe.setOptional(I,q,"bindMatrix"),Fe.setOptional(I,q,"bindMatrixInverse");const Je=q.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),Fe.setValue(I,"boneTexture",Je.boneTexture,oe))}q.isBatchedMesh&&(Fe.setOptional(I,q,"batchingTexture"),Fe.setValue(I,"batchingTexture",q._matricesTexture,oe),Fe.setOptional(I,q,"batchingIdTexture"),Fe.setValue(I,"batchingIdTexture",q._indirectTexture,oe),Fe.setOptional(I,q,"batchingColorTexture"),q._colorsTexture!==null&&Fe.setValue(I,"batchingColorTexture",q._colorsTexture,oe));const Cn=rt.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&bt.update(q,rt,Rn),(Nn||Qt.receiveShadow!==q.receiveShadow)&&(Qt.receiveShadow=q.receiveShadow,Fe.setValue(I,"receiveShadow",q.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(On.envMap.value=Ot,On.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&X.environment!==null&&(On.envMapIntensity.value=X.environmentIntensity),Nn&&(Fe.setValue(I,"toneMappingExposure",D.toneMappingExposure),Qt.needsLights&&Ka(On,gn),At&&st.fog===!0&&vt.refreshFogUniforms(On,At),vt.refreshMaterialUniforms(On,st,Y,j,v.state.transmissionRenderTarget[T.id]),Yu.upload(I,Lr(Qt),On,oe)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Yu.upload(I,Lr(Qt),On,oe),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Fe.setValue(I,"center",q.center),Fe.setValue(I,"modelViewMatrix",q.modelViewMatrix),Fe.setValue(I,"normalMatrix",q.normalMatrix),Fe.setValue(I,"modelMatrix",q.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Je=st.uniformsGroups;for(let Mn=0,Nr=Je.length;Mn<Nr;Mn++){const zn=Je[Mn];se.update(zn,Rn),se.bind(zn,Rn)}}return Rn}function Ka(T,X){T.ambientLightColor.needsUpdate=X,T.lightProbe.needsUpdate=X,T.directionalLights.needsUpdate=X,T.directionalLightShadows.needsUpdate=X,T.pointLights.needsUpdate=X,T.pointLightShadows.needsUpdate=X,T.spotLights.needsUpdate=X,T.spotLightShadows.needsUpdate=X,T.rectAreaLights.needsUpdate=X,T.hemisphereLights.needsUpdate=X}function ha(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(T,X,rt){const st=Vt.get(T);st.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),Vt.get(T.texture).__webglTexture=X,Vt.get(T.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:rt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,X){const rt=Vt.get(T);rt.__webglFramebuffer=X,rt.__useDefaultFramebuffer=X===void 0};const rn=I.createFramebuffer();this.setRenderTarget=function(T,X=0,rt=0){Z=T,k=X,H=rt;let st=!0,q=null,At=!1,Lt=!1;if(T){const Ot=Vt.get(T);if(Ot.__useDefaultFramebuffer!==void 0)Ht.bindFramebuffer(I.FRAMEBUFFER,null),st=!1;else if(Ot.__webglFramebuffer===void 0)oe.setupRenderTarget(T);else if(Ot.__hasExternalTextures)oe.rebindTextures(T,Vt.get(T.texture).__webglTexture,Vt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Yt=T.depthTexture;if(Ot.__boundDepthTexture!==Yt){if(Yt!==null&&Vt.has(Yt)&&(T.width!==Yt.image.width||T.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(T)}}const $t=T.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Lt=!0);const ee=Vt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ee[X])?q=ee[X][rt]:q=ee[X],At=!0):T.samples>0&&oe.useMultisampledRTT(T)===!1?q=Vt.get(T).__webglMultisampledFramebuffer:Array.isArray(ee)?q=ee[rt]:q=ee,B.copy(T.viewport),lt.copy(T.scissor),ut=T.scissorTest}else B.copy(J).multiplyScalar(Y).floor(),lt.copy(St).multiplyScalar(Y).floor(),ut=Et;if(rt!==0&&(q=rn),Ht.bindFramebuffer(I.FRAMEBUFFER,q)&&st&&Ht.drawBuffers(T,q),Ht.viewport(B),Ht.scissor(lt),Ht.setScissorTest(ut),At){const Ot=Vt.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ot.__webglTexture,rt)}else if(Lt){const Ot=X;for(let $t=0;$t<T.textures.length;$t++){const ee=Vt.get(T.textures[$t]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+$t,ee.__webglTexture,rt,Ot)}}else if(T!==null&&rt!==0){const Ot=Vt.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ot.__webglTexture,rt)}w=-1},this.readRenderTargetPixels=function(T,X,rt,st,q,At,Lt,Ft=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Vt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot){Ht.bindFramebuffer(I.FRAMEBUFFER,Ot);try{const $t=T.textures[Ft],ee=$t.format,Yt=$t.type;if(!Ee.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ee.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=T.width-st&&rt>=0&&rt<=T.height-q&&(T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ft),I.readPixels(X,rt,st,q,Xt.convert(ee),Xt.convert(Yt),At))}finally{const $t=Z!==null?Vt.get(Z).__webglFramebuffer:null;Ht.bindFramebuffer(I.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(T,X,rt,st,q,At,Lt,Ft=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Vt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot)if(X>=0&&X<=T.width-st&&rt>=0&&rt<=T.height-q){Ht.bindFramebuffer(I.FRAMEBUFFER,Ot);const $t=T.textures[Ft],ee=$t.format,Yt=$t.type;if(!Ee.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ee.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ce),I.bufferData(I.PIXEL_PACK_BUFFER,At.byteLength,I.STREAM_READ),T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ft),I.readPixels(X,rt,st,q,Xt.convert(ee),Xt.convert(Yt),0);const be=Z!==null?Vt.get(Z).__webglFramebuffer:null;Ht.bindFramebuffer(I.FRAMEBUFFER,be);const Ye=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Ny(I,Ye,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ce),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,At),I.deleteBuffer(ce),I.deleteSync(Ye),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,X=null,rt=0){const st=Math.pow(2,-rt),q=Math.floor(T.image.width*st),At=Math.floor(T.image.height*st),Lt=X!==null?X.x:0,Ft=X!==null?X.y:0;oe.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,rt,0,0,Lt,Ft,q,At),Ht.unbindTexture()};const rl=I.createFramebuffer(),sl=I.createFramebuffer();this.copyTextureToTexture=function(T,X,rt=null,st=null,q=0,At=null){At===null&&(q!==0?(Ls("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=q,q=0):At=0);let Lt,Ft,Ot,$t,ee,Yt,ce,be,Ye;const Le=T.isCompressedTexture?T.mipmaps[At]:T.image;if(rt!==null)Lt=rt.max.x-rt.min.x,Ft=rt.max.y-rt.min.y,Ot=rt.isBox3?rt.max.z-rt.min.z:1,$t=rt.min.x,ee=rt.min.y,Yt=rt.isBox3?rt.min.z:0;else{const Cn=Math.pow(2,-q);Lt=Math.floor(Le.width*Cn),Ft=Math.floor(Le.height*Cn),T.isDataArrayTexture?Ot=Le.depth:T.isData3DTexture?Ot=Math.floor(Le.depth*Cn):Ot=1,$t=0,ee=0,Yt=0}st!==null?(ce=st.x,be=st.y,Ye=st.z):(ce=0,be=0,Ye=0);const fe=Xt.convert(X.format),Qt=Xt.convert(X.type);let We;X.isData3DTexture?(oe.setTexture3D(X,0),We=I.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(oe.setTexture2DArray(X,0),We=I.TEXTURE_2D_ARRAY):(oe.setTexture2D(X,0),We=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,X.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,X.unpackAlignment);const ge=I.getParameter(I.UNPACK_ROW_LENGTH),Rn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),di=I.getParameter(I.UNPACK_SKIP_PIXELS),Nn=I.getParameter(I.UNPACK_SKIP_ROWS),gn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Le.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Le.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$t),I.pixelStorei(I.UNPACK_SKIP_ROWS,ee),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Yt);const Fe=T.isDataArrayTexture||T.isData3DTexture,On=X.isDataArrayTexture||X.isData3DTexture;if(T.isDepthTexture){const Cn=Vt.get(T),Je=Vt.get(X),Mn=Vt.get(Cn.__renderTarget),Nr=Vt.get(Je.__renderTarget);Ht.bindFramebuffer(I.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,Nr.__webglFramebuffer);for(let zn=0;zn<Ot;zn++)Fe&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Vt.get(T).__webglTexture,q,Yt+zn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Vt.get(X).__webglTexture,At,Ye+zn)),I.blitFramebuffer($t,ee,Lt,Ft,ce,be,Lt,Ft,I.DEPTH_BUFFER_BIT,I.NEAREST);Ht.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(q!==0||T.isRenderTargetTexture||Vt.has(T)){const Cn=Vt.get(T),Je=Vt.get(X);Ht.bindFramebuffer(I.READ_FRAMEBUFFER,rl),Ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,sl);for(let Mn=0;Mn<Ot;Mn++)Fe?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Cn.__webglTexture,q,Yt+Mn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Cn.__webglTexture,q),On?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Je.__webglTexture,At,Ye+Mn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Je.__webglTexture,At),q!==0?I.blitFramebuffer($t,ee,Lt,Ft,ce,be,Lt,Ft,I.COLOR_BUFFER_BIT,I.NEAREST):On?I.copyTexSubImage3D(We,At,ce,be,Ye+Mn,$t,ee,Lt,Ft):I.copyTexSubImage2D(We,At,ce,be,$t,ee,Lt,Ft);Ht.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else On?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(We,At,ce,be,Ye,Lt,Ft,Ot,fe,Qt,Le.data):X.isCompressedArrayTexture?I.compressedTexSubImage3D(We,At,ce,be,Ye,Lt,Ft,Ot,fe,Le.data):I.texSubImage3D(We,At,ce,be,Ye,Lt,Ft,Ot,fe,Qt,Le):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,At,ce,be,Lt,Ft,fe,Qt,Le.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,At,ce,be,Le.width,Le.height,fe,Le.data):I.texSubImage2D(I.TEXTURE_2D,At,ce,be,Lt,Ft,fe,Qt,Le);I.pixelStorei(I.UNPACK_ROW_LENGTH,ge),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Rn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,di),I.pixelStorei(I.UNPACK_SKIP_ROWS,Nn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,gn),At===0&&X.generateMipmaps&&I.generateMipmap(We),Ht.unbindTexture()},this.copyTextureToTexture3D=function(T,X,rt=null,st=null,q=0){return Ls('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,X,rt,st,q)},this.initRenderTarget=function(T){Vt.get(T).__webglFramebuffer===void 0&&oe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?oe.setTextureCube(T,0):T.isData3DTexture?oe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?oe.setTexture2DArray(T,0):oe.setTexture2D(T,0),Ht.unbindTexture()},this.resetState=function(){k=0,H=0,Z=null,Ht.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ae._getUnpackColorSpace()}}const Cv={type:"change"},Yd={type:"start"},S0={type:"end"},Pu=new i0,wv=new Va,KA=Math.cos(70*Uy.DEG2RAD),dn=new nt,kn=2*Math.PI,ze={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Hh=1e-6;class QA extends hE{constructor(t,n=null){super(t,n),this.state=ze.NONE,this.target=new nt,this.cursor=new nt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ds.ROTATE,MIDDLE:Ds.DOLLY,RIGHT:Ds.PAN},this.touches={ONE:Rs.ROTATE,TWO:Rs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new nt,this._lastQuaternion=new Ar,this._lastTargetPosition=new nt,this._quat=new Ar().setFromUnitVectors(t.up,new nt(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new nv,this._sphericalDelta=new nv,this._scale=1,this._panOffset=new nt,this._rotateStart=new pe,this._rotateEnd=new pe,this._rotateDelta=new pe,this._panStart=new pe,this._panEnd=new pe,this._panDelta=new pe,this._dollyStart=new pe,this._dollyEnd=new pe,this._dollyDelta=new pe,this._dollyDirection=new nt,this._mouse=new pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$A.bind(this),this._onPointerDown=JA.bind(this),this._onPointerUp=t1.bind(this),this._onContextMenu=o1.bind(this),this._onMouseWheel=i1.bind(this),this._onKeyDown=a1.bind(this),this._onTouchStart=r1.bind(this),this._onTouchMove=s1.bind(this),this._onMouseDown=e1.bind(this),this._onMouseMove=n1.bind(this),this._interceptControlDown=l1.bind(this),this._interceptControlUp=u1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Cv),this.update(),this.state=ze.NONE}update(t=null){const n=this.object.position;dn.copy(n).sub(this.target),dn.applyQuaternion(this._quat),this._spherical.setFromVector3(dn),this.autoRotate&&this.state===ze.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=kn:r>Math.PI&&(r-=kn),l<-Math.PI?l+=kn:l>Math.PI&&(l-=kn),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(dn.setFromSpherical(this._spherical),dn.applyQuaternion(this._quatInverse),n.copy(this.target).add(dn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=dn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const d=new nt(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const p=new nt(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=dn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Pu.origin.copy(this.object.position),Pu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Pu.direction))<KA?this.object.lookAt(this.target):(wv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Pu.intersectPlane(wv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>Hh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Hh||this._lastTargetPosition.distanceToSquared(this.target)>Hh?(this.dispatchEvent(Cv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?kn/60*this.autoRotateSpeed*t:kn/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){dn.setFromMatrixColumn(n,0),dn.multiplyScalar(-t),this._panOffset.add(dn)}_panUp(t,n){this.screenSpacePanning===!0?dn.setFromMatrixColumn(n,1):(dn.setFromMatrixColumn(n,0),dn.crossVectors(this.object.up,dn)),dn.multiplyScalar(t),this._panOffset.add(dn)}_pan(t,n){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;dn.copy(l).sub(this.target);let u=dn.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*u/r.clientHeight,this.object.matrix),this._panUp(2*n*u/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=t-r.left,u=n-r.top,h=r.width,d=r.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/n.clientHeight),this._rotateUp(kn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._panStart.set(r,l)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),r=t.pageX-n.x,l=t.pageY-n.y,u=Math.sqrt(r*r+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const r=this._getSecondPointerPosition(t),l=.5*(t.pageX+r.x),u=.5*(t.pageY+r.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/n.clientHeight),this._rotateUp(kn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),r=t.pageX-n.x,l=t.pageY-n.y,u=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+n.x)*.5,d=(t.pageY+n.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new pe,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,r={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function JA(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function $A(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function t1(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(S0),this.state=ze.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function e1(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ds.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ze.DOLLY;break;case Ds.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ze.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ze.ROTATE}break;case Ds.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ze.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ze.PAN}break;default:this.state=ze.NONE}this.state!==ze.NONE&&this.dispatchEvent(Yd)}function n1(s){switch(this.state){case ze.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ze.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ze.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function i1(s){this.enabled===!1||this.enableZoom===!1||this.state!==ze.NONE||(s.preventDefault(),this.dispatchEvent(Yd),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(S0))}function a1(s){this.enabled!==!1&&this._handleKeyDown(s)}function r1(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Rs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ze.TOUCH_ROTATE;break;case Rs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ze.TOUCH_PAN;break;default:this.state=ze.NONE}break;case 2:switch(this.touches.TWO){case Rs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ze.TOUCH_DOLLY_PAN;break;case Rs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ze.TOUCH_DOLLY_ROTATE;break;default:this.state=ze.NONE}break;default:this.state=ze.NONE}this.state!==ze.NONE&&this.dispatchEvent(Yd)}function s1(s){switch(this._trackPointer(s),this.state){case ze.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ze.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ze.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ze.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ze.NONE}}function o1(s){this.enabled!==!1&&s.preventDefault()}function l1(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function u1(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const c1=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,f1=`
#define POINT_COUNT 13

varying vec2 vUv;
uniform float values[POINT_COUNT];
uniform float thickness;

vec4 tex2d(vec2 uv) {

  float stepX = 1.0 / float(POINT_COUNT - 1);
  float interpolatedValue = 0.0;

  for (int i = 0; i < POINT_COUNT - 1; i++) {
    float x0 = float(i) * stepX;
    float x1 = float(i + 1) * stepX;
    if (uv.x >= x0 && uv.x <= x1) {
      float t = (uv.x - x0) / (x1 - x0);
      interpolatedValue = mix(values[i], values[i + 1], t);
    }
  }

  if (abs(uv.y - interpolatedValue) < thickness) {
    return vec4(1.0, 0.0, 0.0, 1.0);
  }

  float threshold = 2e-2;
  vec2 unit = vec2(float(POINT_COUNT)-1.0, 10.0);
  vec2 offsetUV = uv + vec2(1.0/unit.x, 0.0);
  if (abs(trunc(offsetUV.x * unit.x) - offsetUV.x * unit.x) < threshold ||
      abs(trunc(offsetUV.y * unit.y) - offsetUV.y * unit.y) < threshold) {
    return vec4(0.0,0.0,0.0,1.0);
  }

  return vec4(0.0);
}

vec2 cartesianToPolar(vec2 xy) {
  float r = length(xy) / 0.5;
  float theta = atan(xy.y, xy.x) + 3.1415926;
  return vec2(theta / 6.28, r);
}

void main() {
  vec2 uv = vUv;
  vec2 coord = cartesianToPolar(uv - vec2(0.5));

  if (length(uv - vec2(0.5)) > 0.5+1e-2) discard;

  vec4 color = tex2d(coord);
  if(color.a < 1e-3){
    discard;
    return;
  }

  gl_FragColor = color;
}
`;class Dv extends Ei{constructor(){const t=new il(2,2),n=new Fi({vertexShader:c1,fragmentShader:f1,side:Bi,uniforms:{values:{value:[1,1,1,1,1,1,1,1,1,1,1,1,1]},thickness:{value:.02}}});super(t,n)}setPattern(t){if(t.length!==12){console.warn("invalid pattern data");return}this.material.uniforms.values.value=[...t,t[0]]}}const y0=`
#define POINT_COUNT 13

uniform float horizontal[POINT_COUNT];
uniform float vertical[POINT_COUNT];

float transformY(vec2 uv) {
  float y = uv.y / 2.0;
  if (uv.x > 0.5) {
    return (0.5 - y) + 0.5;
  }
  return y;
}

float uvToIntensity(vec2 uv) {
  float stepX = 1.0 / float(POINT_COUNT - 1);

  float interpolatedHorizontalValue = 0.0;
  for (int i = 0; i < POINT_COUNT - 1; i++) {
    float x0 = float(i) * stepX;
    float x1 = float(i + 1) * stepX;
    if (uv.x >= x0 && uv.x <= x1) {
      float t = (uv.x - x0) / (x1 - x0);
      interpolatedHorizontalValue = mix(horizontal[i], horizontal[i + 1], t);
    }
  }
  float interpolatedVerticalValue = 0.0;
  for (int i = 0; i < POINT_COUNT - 1; i++) {
    float y = transformY(uv);
    float y0 = float(i) * stepX;
    float y1 = float(i + 1) * stepX;
    if (y >= y0 && y <= y1) {
      float t = (y - y0) / (y1 - y0);
      interpolatedVerticalValue = mix(vertical[i], vertical[i + 1], t);
    }
  }

  float value = min(interpolatedVerticalValue, interpolatedHorizontalValue);

  return value;
}
`,h1=`
varying vec2 vUv;
varying float vIntensity;

${y0}

vec3 uvToSphere(vec2 uv, float r) {
  float theta = uv.y * 3.14159265359;
  float phi = uv.x * 6.28318530718;
  float sinTheta = sin(theta);
  return vec3(
    r * sinTheta * cos(phi),
    r * cos(theta),
    r * sinTheta * sin(phi)
  );
}

void main() {
  vUv = position.xy;
  vIntensity = uvToIntensity(vUv);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(uvToSphere(vUv, vIntensity), 1.0);
}
`,d1=`
varying float vIntensity;

${y0}

vec3 hue2rgb(float h) {
  h = fract(h) * 6.0;
  vec3 rgb = clamp(
    abs(mod(h + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0,
    0.0,
    1.0
  );
  return rgb;
}

void main() {
  vec3 color = hue2rgb(1.0 - vIntensity);
  gl_FragColor = vec4(color, 0.8);
}
`;class p1 extends Ei{constructor(){const t=new qa,n=100,r=[];for(let u=0;u<n;u++)for(let h=0;h<n;h++){const d=[u,h,0],m=[u,h+1,0],p=[(u+1)%n,h,0],_=[(u+1)%n,h+1,0];r.push(...d,...p,..._),r.push(...d,..._,...m)}t.setAttribute("position",new bi(new Float32Array(r.map(u=>u/n)),3));const l=new Fi({transparent:!0,vertexShader:h1,fragmentShader:d1,uniforms:{horizontal:{value:[1,1,1,1,1,1,1,1,1,1,1,1,1]},vertical:{value:[1,1,1,1,1,1,1,1,1,1,1,1,1]}}});super(t,l),this.geometry=t}setPattern(t,n){if(t.length!==12||n.length!==12){console.warn("invalid pattern data");return}this.material.uniforms.horizontal.value=[...t,t[0]],this.material.uniforms.vertical.value=[...n,n[0]]}}class m1{constructor(t){this.canvas=t,this.scene=new aE,this.camera=new fi(75,t.clientWidth/t.clientHeight,.1,1e3),this.camera.position.z=3,this.renderer=new jA({antialias:!0,canvas:t,alpha:!0}),this.renderer.setSize(t.clientWidth,t.clientHeight),this.controls=new QA(this.camera,this.renderer.domElement),this.controls.minPolarAngle=.1,this.controls.maxPolarAngle=3,this.pattern3D=new p1,this.verticalPattern2D=new Dv,this.verticalPattern2D.rotateZ(-Math.PI/2),this.verticalPattern2D.rotateX(-Math.PI/2),this.horizontalPattern2D=new Dv,this.horizontalPattern2D.rotateX(Math.PI/2),this.horizontalPattern2D.rotateZ(Math.PI),this.scene.add(this.pattern3D),this.scene.add(this.verticalPattern2D),this.scene.add(this.horizontalPattern2D),this.animate=this.animate.bind(this),this.handleResize=this.handleResize.bind(this),this.animate(),window.addEventListener("resize",this.handleResize)}handleResize(){const t=document.body.clientWidth,n=document.body.clientHeight;this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,n)}animate(){requestAnimationFrame(this.animate),this.controls.update(),this.renderer.render(this.scene,this.camera)}dispose(){this.renderer.dispose(),window.removeEventListener("resize",this.handleResize)}setPattern(t,n){this.horizontalPattern2D.setPattern(t),this.verticalPattern2D.setPattern(n),this.pattern3D.setPattern(t,n)}setVisibility({horizontal:t,vertical:n,pattern3d:r}){this.horizontalPattern2D.visible=t,this.verticalPattern2D.visible=n,this.pattern3D.visible=r}}function _1(s){if(!(typeof window>"u")){var t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=s,document.head.appendChild(t),s}}function ws(s,t){var n=s.__state.conversionName.toString(),r=Math.round(s.r),l=Math.round(s.g),u=Math.round(s.b),h=s.a,d=Math.round(s.h),m=s.s.toFixed(1),p=s.v.toFixed(1);if(t||n==="THREE_CHAR_HEX"||n==="SIX_CHAR_HEX"){for(var _=s.hex.toString(16);_.length<6;)_="0"+_;return"#"+_}else{if(n==="CSS_RGB")return"rgb("+r+","+l+","+u+")";if(n==="CSS_RGBA")return"rgba("+r+","+l+","+u+","+h+")";if(n==="HEX")return"0x"+s.hex.toString(16);if(n==="RGB_ARRAY")return"["+r+","+l+","+u+"]";if(n==="RGBA_ARRAY")return"["+r+","+l+","+u+","+h+"]";if(n==="RGB_OBJ")return"{r:"+r+",g:"+l+",b:"+u+"}";if(n==="RGBA_OBJ")return"{r:"+r+",g:"+l+",b:"+u+",a:"+h+"}";if(n==="HSV_OBJ")return"{h:"+d+",s:"+m+",v:"+p+"}";if(n==="HSVA_OBJ")return"{h:"+d+",s:"+m+",v:"+p+",a:"+h+"}"}return"unknown format"}var Uv=Array.prototype.forEach,Vo=Array.prototype.slice,xt={BREAK:{},extend:function(t){return this.each(Vo.call(arguments,1),function(n){var r=this.isObject(n)?Object.keys(n):[];r.forEach((function(l){this.isUndefined(n[l])||(t[l]=n[l])}).bind(this))},this),t},defaults:function(t){return this.each(Vo.call(arguments,1),function(n){var r=this.isObject(n)?Object.keys(n):[];r.forEach((function(l){this.isUndefined(t[l])&&(t[l]=n[l])}).bind(this))},this),t},compose:function(){var t=Vo.call(arguments);return function(){for(var n=Vo.call(arguments),r=t.length-1;r>=0;r--)n=[t[r].apply(this,n)];return n[0]}},each:function(t,n,r){if(t){if(Uv&&t.forEach&&t.forEach===Uv)t.forEach(n,r);else if(t.length===t.length+0){var l=void 0,u=void 0;for(l=0,u=t.length;l<u;l++)if(l in t&&n.call(r,t[l],l)===this.BREAK)return}else for(var h in t)if(n.call(r,t[h],h)===this.BREAK)return}},defer:function(t){setTimeout(t,0)},debounce:function(t,n,r){var l=void 0;return function(){var u=this,h=arguments;function d(){l=null,r||t.apply(u,h)}var m=r||!l;clearTimeout(l),l=setTimeout(d,n),m&&t.apply(u,h)}},toArray:function(t){return t.toArray?t.toArray():Vo.call(t)},isUndefined:function(t){return t===void 0},isNull:function(t){return t===null},isNaN:function(s){function t(n){return s.apply(this,arguments)}return t.toString=function(){return s.toString()},t}(function(s){return isNaN(s)}),isArray:Array.isArray||function(s){return s.constructor===Array},isObject:function(t){return t===Object(t)},isNumber:function(t){return t===t+0},isString:function(t){return t===t+""},isBoolean:function(t){return t===!1||t===!0},isFunction:function(t){return t instanceof Function}},g1=[{litmus:xt.isString,conversions:{THREE_CHAR_HEX:{read:function(t){var n=t.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return n===null?!1:{space:"HEX",hex:parseInt("0x"+n[1].toString()+n[1].toString()+n[2].toString()+n[2].toString()+n[3].toString()+n[3].toString(),0)}},write:ws},SIX_CHAR_HEX:{read:function(t){var n=t.match(/^#([A-F0-9]{6})$/i);return n===null?!1:{space:"HEX",hex:parseInt("0x"+n[1].toString(),0)}},write:ws},CSS_RGB:{read:function(t){var n=t.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return n===null?!1:{space:"RGB",r:parseFloat(n[1]),g:parseFloat(n[2]),b:parseFloat(n[3])}},write:ws},CSS_RGBA:{read:function(t){var n=t.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return n===null?!1:{space:"RGB",r:parseFloat(n[1]),g:parseFloat(n[2]),b:parseFloat(n[3]),a:parseFloat(n[4])}},write:ws}}},{litmus:xt.isNumber,conversions:{HEX:{read:function(t){return{space:"HEX",hex:t,conversionName:"HEX"}},write:function(t){return t.hex}}}},{litmus:xt.isArray,conversions:{RGB_ARRAY:{read:function(t){return t.length!==3?!1:{space:"RGB",r:t[0],g:t[1],b:t[2]}},write:function(t){return[t.r,t.g,t.b]}},RGBA_ARRAY:{read:function(t){return t.length!==4?!1:{space:"RGB",r:t[0],g:t[1],b:t[2],a:t[3]}},write:function(t){return[t.r,t.g,t.b,t.a]}}}},{litmus:xt.isObject,conversions:{RGBA_OBJ:{read:function(t){return xt.isNumber(t.r)&&xt.isNumber(t.g)&&xt.isNumber(t.b)&&xt.isNumber(t.a)?{space:"RGB",r:t.r,g:t.g,b:t.b,a:t.a}:!1},write:function(t){return{r:t.r,g:t.g,b:t.b,a:t.a}}},RGB_OBJ:{read:function(t){return xt.isNumber(t.r)&&xt.isNumber(t.g)&&xt.isNumber(t.b)?{space:"RGB",r:t.r,g:t.g,b:t.b}:!1},write:function(t){return{r:t.r,g:t.g,b:t.b}}},HSVA_OBJ:{read:function(t){return xt.isNumber(t.h)&&xt.isNumber(t.s)&&xt.isNumber(t.v)&&xt.isNumber(t.a)?{space:"HSV",h:t.h,s:t.s,v:t.v,a:t.a}:!1},write:function(t){return{h:t.h,s:t.s,v:t.v,a:t.a}}},HSV_OBJ:{read:function(t){return xt.isNumber(t.h)&&xt.isNumber(t.s)&&xt.isNumber(t.v)?{space:"HSV",h:t.h,s:t.s,v:t.v}:!1},write:function(t){return{h:t.h,s:t.s,v:t.v}}}}}],Go=void 0,Bu=void 0,wd=function(){Bu=!1;var t=arguments.length>1?xt.toArray(arguments):arguments[0];return xt.each(g1,function(n){if(n.litmus(t))return xt.each(n.conversions,function(r,l){if(Go=r.read(t),Bu===!1&&Go!==!1)return Bu=Go,Go.conversionName=l,Go.conversion=r,xt.BREAK}),xt.BREAK}),Bu},Lv=void 0,Ku={hsv_to_rgb:function(t,n,r){var l=Math.floor(t/60)%6,u=t/60-Math.floor(t/60),h=r*(1-n),d=r*(1-u*n),m=r*(1-(1-u)*n),p=[[r,m,h],[d,r,h],[h,r,m],[h,d,r],[m,h,r],[r,h,d]][l];return{r:p[0]*255,g:p[1]*255,b:p[2]*255}},rgb_to_hsv:function(t,n,r){var l=Math.min(t,n,r),u=Math.max(t,n,r),h=u-l,d=void 0,m=void 0;if(u!==0)m=h/u;else return{h:NaN,s:0,v:0};return t===u?d=(n-r)/h:n===u?d=2+(r-t)/h:d=4+(t-n)/h,d/=6,d<0&&(d+=1),{h:d*360,s:m,v:u/255}},rgb_to_hex:function(t,n,r){var l=this.hex_with_component(0,2,t);return l=this.hex_with_component(l,1,n),l=this.hex_with_component(l,0,r),l},component_from_hex:function(t,n){return t>>n*8&255},hex_with_component:function(t,n,r){return r<<(Lv=n*8)|t&~(255<<Lv)}},v1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Ti=function(s,t){if(!(s instanceof t))throw new TypeError("Cannot call a class as a function")},Ai=function(){function s(t,n){for(var r=0;r<n.length;r++){var l=n[r];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}return function(t,n,r){return n&&s(t.prototype,n),r&&s(t,r),t}}(),Ya=function s(t,n,r){t===null&&(t=Function.prototype);var l=Object.getOwnPropertyDescriptor(t,n);if(l===void 0){var u=Object.getPrototypeOf(t);return u===null?void 0:s(u,n,r)}else{if("value"in l)return l.value;var h=l.get;return h===void 0?void 0:h.call(r)}},Za=function(s,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);s.prototype=Object.create(t&&t.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(s,t):s.__proto__=t)},ja=function(s,t){if(!s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:s},En=function(){function s(){if(Ti(this,s),this.__state=wd.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Ai(s,[{key:"toString",value:function(){return ws(this)}},{key:"toHexString",value:function(){return ws(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),s}();function qd(s,t,n){Object.defineProperty(s,t,{get:function(){return this.__state.space==="RGB"?this.__state[t]:(En.recalculateRGB(this,t,n),this.__state[t])},set:function(l){this.__state.space!=="RGB"&&(En.recalculateRGB(this,t,n),this.__state.space="RGB"),this.__state[t]=l}})}function Zd(s,t){Object.defineProperty(s,t,{get:function(){return this.__state.space==="HSV"?this.__state[t]:(En.recalculateHSV(this),this.__state[t])},set:function(r){this.__state.space!=="HSV"&&(En.recalculateHSV(this),this.__state.space="HSV"),this.__state[t]=r}})}En.recalculateRGB=function(s,t,n){if(s.__state.space==="HEX")s.__state[t]=Ku.component_from_hex(s.__state.hex,n);else if(s.__state.space==="HSV")xt.extend(s.__state,Ku.hsv_to_rgb(s.__state.h,s.__state.s,s.__state.v));else throw new Error("Corrupted color state")};En.recalculateHSV=function(s){var t=Ku.rgb_to_hsv(s.r,s.g,s.b);xt.extend(s.__state,{s:t.s,v:t.v}),xt.isNaN(t.h)?xt.isUndefined(s.__state.h)&&(s.__state.h=0):s.__state.h=t.h};En.COMPONENTS=["r","g","b","h","s","v","hex","a"];qd(En.prototype,"r",2);qd(En.prototype,"g",1);qd(En.prototype,"b",0);Zd(En.prototype,"h");Zd(En.prototype,"s");Zd(En.prototype,"v");Object.defineProperty(En.prototype,"a",{get:function(){return this.__state.a},set:function(t){this.__state.a=t}});Object.defineProperty(En.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=Ku.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(t){this.__state.space="HEX",this.__state.hex=t}});var wr=function(){function s(t,n){Ti(this,s),this.initialValue=t[n],this.domElement=document.createElement("div"),this.object=t,this.property=n,this.__onChange=void 0,this.__onFinishChange=void 0}return Ai(s,[{key:"onChange",value:function(n){return this.__onChange=n,this}},{key:"onFinishChange",value:function(n){return this.__onFinishChange=n,this}},{key:"setValue",value:function(n){return this.object[this.property]=n,this.__onChange&&this.__onChange.call(this,n),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),s}(),x1={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},E0={};xt.each(x1,function(s,t){xt.each(s,function(n){E0[n]=t})});var S1=/(\d+(\.\d+)?)px/;function Oi(s){if(s==="0"||xt.isUndefined(s))return 0;var t=s.match(S1);return xt.isNull(t)?0:parseFloat(t[1])}var at={makeSelectable:function(t,n){t===void 0||t.style===void 0||(t.onselectstart=n?function(){return!1}:function(){},t.style.MozUserSelect=n?"auto":"none",t.style.KhtmlUserSelect=n?"auto":"none",t.unselectable=n?"on":"off")},makeFullscreen:function(t,n,r){var l=r,u=n;xt.isUndefined(u)&&(u=!0),xt.isUndefined(l)&&(l=!0),t.style.position="absolute",u&&(t.style.left=0,t.style.right=0),l&&(t.style.top=0,t.style.bottom=0)},fakeEvent:function(t,n,r,l){var u=r||{},h=E0[n];if(!h)throw new Error("Event type "+n+" not supported.");var d=document.createEvent(h);switch(h){case"MouseEvents":{var m=u.x||u.clientX||0,p=u.y||u.clientY||0;d.initMouseEvent(n,u.bubbles||!1,u.cancelable||!0,window,u.clickCount||1,0,0,m,p,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var _=d.initKeyboardEvent||d.initKeyEvent;xt.defaults(u,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),_(n,u.bubbles||!1,u.cancelable,window,u.ctrlKey,u.altKey,u.shiftKey,u.metaKey,u.keyCode,u.charCode);break}default:{d.initEvent(n,u.bubbles||!1,u.cancelable||!0);break}}xt.defaults(d,l),t.dispatchEvent(d)},bind:function(t,n,r,l){var u=l||!1;return t.addEventListener?t.addEventListener(n,r,u):t.attachEvent&&t.attachEvent("on"+n,r),at},unbind:function(t,n,r,l){var u=l||!1;return t.removeEventListener?t.removeEventListener(n,r,u):t.detachEvent&&t.detachEvent("on"+n,r),at},addClass:function(t,n){if(t.className===void 0)t.className=n;else if(t.className!==n){var r=t.className.split(/ +/);r.indexOf(n)===-1&&(r.push(n),t.className=r.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return at},removeClass:function(t,n){if(n)if(t.className===n)t.removeAttribute("class");else{var r=t.className.split(/ +/),l=r.indexOf(n);l!==-1&&(r.splice(l,1),t.className=r.join(" "))}else t.className=void 0;return at},hasClass:function(t,n){return new RegExp("(?:^|\\s+)"+n+"(?:\\s+|$)").test(t.className)||!1},getWidth:function(t){var n=getComputedStyle(t);return Oi(n["border-left-width"])+Oi(n["border-right-width"])+Oi(n["padding-left"])+Oi(n["padding-right"])+Oi(n.width)},getHeight:function(t){var n=getComputedStyle(t);return Oi(n["border-top-width"])+Oi(n["border-bottom-width"])+Oi(n["padding-top"])+Oi(n["padding-bottom"])+Oi(n.height)},getOffset:function(t){var n=t,r={left:0,top:0};if(n.offsetParent)do r.left+=n.offsetLeft,r.top+=n.offsetTop,n=n.offsetParent;while(n);return r},isActive:function(t){return t===document.activeElement&&(t.type||t.href)}},M0=function(s){Za(t,s);function t(n,r){Ti(this,t);var l=ja(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,r)),u=l;l.__prev=l.getValue(),l.__checkbox=document.createElement("input"),l.__checkbox.setAttribute("type","checkbox");function h(){u.setValue(!u.__prev)}return at.bind(l.__checkbox,"change",h,!1),l.domElement.appendChild(l.__checkbox),l.updateDisplay(),l}return Ai(t,[{key:"setValue",value:function(r){var l=Ya(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,r);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),l}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Ya(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(wr),y1=function(s){Za(t,s);function t(n,r,l){Ti(this,t);var u=ja(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,r)),h=l,d=u;if(u.__select=document.createElement("select"),xt.isArray(h)){var m={};xt.each(h,function(p){m[p]=p}),h=m}return xt.each(h,function(p,_){var g=document.createElement("option");g.innerHTML=_,g.setAttribute("value",p),d.__select.appendChild(g)}),u.updateDisplay(),at.bind(u.__select,"change",function(){var p=this.options[this.selectedIndex].value;d.setValue(p)}),u.domElement.appendChild(u.__select),u}return Ai(t,[{key:"setValue",value:function(r){var l=Ya(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,r);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),l}},{key:"updateDisplay",value:function(){return at.isActive(this.__select)?this:(this.__select.value=this.getValue(),Ya(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this))}}]),t}(wr),E1=function(s){Za(t,s);function t(n,r){Ti(this,t);var l=ja(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,r)),u=l;function h(){u.setValue(u.__input.value)}function d(){u.__onFinishChange&&u.__onFinishChange.call(u,u.getValue())}return l.__input=document.createElement("input"),l.__input.setAttribute("type","text"),at.bind(l.__input,"keyup",h),at.bind(l.__input,"change",h),at.bind(l.__input,"blur",d),at.bind(l.__input,"keydown",function(m){m.keyCode===13&&this.blur()}),l.updateDisplay(),l.domElement.appendChild(l.__input),l}return Ai(t,[{key:"updateDisplay",value:function(){return at.isActive(this.__input)||(this.__input.value=this.getValue()),Ya(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(wr);function Nv(s){var t=s.toString();return t.indexOf(".")>-1?t.length-t.indexOf(".")-1:0}var b0=function(s){Za(t,s);function t(n,r,l){Ti(this,t);var u=ja(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,r)),h=l||{};return u.__min=h.min,u.__max=h.max,u.__step=h.step,xt.isUndefined(u.__step)?u.initialValue===0?u.__impliedStep=1:u.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(u.initialValue))/Math.LN10))/10:u.__impliedStep=u.__step,u.__precision=Nv(u.__impliedStep),u}return Ai(t,[{key:"setValue",value:function(r){var l=r;return this.__min!==void 0&&l<this.__min?l=this.__min:this.__max!==void 0&&l>this.__max&&(l=this.__max),this.__step!==void 0&&l%this.__step!==0&&(l=Math.round(l/this.__step)*this.__step),Ya(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,l)}},{key:"min",value:function(r){return this.__min=r,this}},{key:"max",value:function(r){return this.__max=r,this}},{key:"step",value:function(r){return this.__step=r,this.__impliedStep=r,this.__precision=Nv(r),this}}]),t}(wr);function M1(s,t){var n=Math.pow(10,t);return Math.round(s*n)/n}var Qu=function(s){Za(t,s);function t(n,r,l){Ti(this,t);var u=ja(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,r,l));u.__truncationSuspended=!1;var h=u,d=void 0;function m(){var A=parseFloat(h.__input.value);xt.isNaN(A)||h.setValue(A)}function p(){h.__onFinishChange&&h.__onFinishChange.call(h,h.getValue())}function _(){p()}function g(A){var R=d-A.clientY;h.setValue(h.getValue()+R*h.__impliedStep),d=A.clientY}function x(){at.unbind(window,"mousemove",g),at.unbind(window,"mouseup",x),p()}function E(A){at.bind(window,"mousemove",g),at.bind(window,"mouseup",x),d=A.clientY}return u.__input=document.createElement("input"),u.__input.setAttribute("type","text"),at.bind(u.__input,"change",m),at.bind(u.__input,"blur",_),at.bind(u.__input,"mousedown",E),at.bind(u.__input,"keydown",function(A){A.keyCode===13&&(h.__truncationSuspended=!0,this.blur(),h.__truncationSuspended=!1,p())}),u.updateDisplay(),u.domElement.appendChild(u.__input),u}return Ai(t,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():M1(this.getValue(),this.__precision),Ya(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(b0);function Ov(s,t,n,r,l){return r+(l-r)*((s-t)/(n-t))}var Dd=function(s){Za(t,s);function t(n,r,l,u,h){Ti(this,t);var d=ja(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,r,{min:l,max:u,step:h})),m=d;d.__background=document.createElement("div"),d.__foreground=document.createElement("div"),at.bind(d.__background,"mousedown",p),at.bind(d.__background,"touchstart",x),at.addClass(d.__background,"slider"),at.addClass(d.__foreground,"slider-fg");function p(R){document.activeElement.blur(),at.bind(window,"mousemove",_),at.bind(window,"mouseup",g),_(R)}function _(R){R.preventDefault();var y=m.__background.getBoundingClientRect();return m.setValue(Ov(R.clientX,y.left,y.right,m.__min,m.__max)),!1}function g(){at.unbind(window,"mousemove",_),at.unbind(window,"mouseup",g),m.__onFinishChange&&m.__onFinishChange.call(m,m.getValue())}function x(R){R.touches.length===1&&(at.bind(window,"touchmove",E),at.bind(window,"touchend",A),E(R))}function E(R){var y=R.touches[0].clientX,v=m.__background.getBoundingClientRect();m.setValue(Ov(y,v.left,v.right,m.__min,m.__max))}function A(){at.unbind(window,"touchmove",E),at.unbind(window,"touchend",A),m.__onFinishChange&&m.__onFinishChange.call(m,m.getValue())}return d.updateDisplay(),d.__background.appendChild(d.__foreground),d.domElement.appendChild(d.__background),d}return Ai(t,[{key:"updateDisplay",value:function(){var r=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=r*100+"%",Ya(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(b0),T0=function(s){Za(t,s);function t(n,r,l){Ti(this,t);var u=ja(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,r)),h=u;return u.__button=document.createElement("div"),u.__button.innerHTML=l===void 0?"Fire":l,at.bind(u.__button,"click",function(d){return d.preventDefault(),h.fire(),!1}),at.addClass(u.__button,"button"),u.domElement.appendChild(u.__button),u}return Ai(t,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),t}(wr),Ud=function(s){Za(t,s);function t(n,r){Ti(this,t);var l=ja(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,r));l.__color=new En(l.getValue()),l.__temp=new En(0);var u=l;l.domElement=document.createElement("div"),at.makeSelectable(l.domElement,!1),l.__selector=document.createElement("div"),l.__selector.className="selector",l.__saturation_field=document.createElement("div"),l.__saturation_field.className="saturation-field",l.__field_knob=document.createElement("div"),l.__field_knob.className="field-knob",l.__field_knob_border="2px solid ",l.__hue_knob=document.createElement("div"),l.__hue_knob.className="hue-knob",l.__hue_field=document.createElement("div"),l.__hue_field.className="hue-field",l.__input=document.createElement("input"),l.__input.type="text",l.__input_textShadow="0 1px 1px ",at.bind(l.__input,"keydown",function(R){R.keyCode===13&&g.call(this)}),at.bind(l.__input,"blur",g),at.bind(l.__selector,"mousedown",function(){at.addClass(this,"drag").bind(window,"mouseup",function(){at.removeClass(u.__selector,"drag")})}),at.bind(l.__selector,"touchstart",function(){at.addClass(this,"drag").bind(window,"touchend",function(){at.removeClass(u.__selector,"drag")})});var h=document.createElement("div");xt.extend(l.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),xt.extend(l.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:l.__field_knob_border+(l.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),xt.extend(l.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),xt.extend(l.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),xt.extend(h.style,{width:"100%",height:"100%",background:"none"}),Pv(h,"top","rgba(0,0,0,0)","#000"),xt.extend(l.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),T1(l.__hue_field),xt.extend(l.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:l.__input_textShadow+"rgba(0,0,0,0.7)"}),at.bind(l.__saturation_field,"mousedown",d),at.bind(l.__saturation_field,"touchstart",d),at.bind(l.__field_knob,"mousedown",d),at.bind(l.__field_knob,"touchstart",d),at.bind(l.__hue_field,"mousedown",m),at.bind(l.__hue_field,"touchstart",m);function d(R){E(R),at.bind(window,"mousemove",E),at.bind(window,"touchmove",E),at.bind(window,"mouseup",p),at.bind(window,"touchend",p)}function m(R){A(R),at.bind(window,"mousemove",A),at.bind(window,"touchmove",A),at.bind(window,"mouseup",_),at.bind(window,"touchend",_)}function p(){at.unbind(window,"mousemove",E),at.unbind(window,"touchmove",E),at.unbind(window,"mouseup",p),at.unbind(window,"touchend",p),x()}function _(){at.unbind(window,"mousemove",A),at.unbind(window,"touchmove",A),at.unbind(window,"mouseup",_),at.unbind(window,"touchend",_),x()}function g(){var R=wd(this.value);R!==!1?(u.__color.__state=R,u.setValue(u.__color.toOriginal())):this.value=u.__color.toString()}function x(){u.__onFinishChange&&u.__onFinishChange.call(u,u.__color.toOriginal())}l.__saturation_field.appendChild(h),l.__selector.appendChild(l.__field_knob),l.__selector.appendChild(l.__saturation_field),l.__selector.appendChild(l.__hue_field),l.__hue_field.appendChild(l.__hue_knob),l.domElement.appendChild(l.__input),l.domElement.appendChild(l.__selector),l.updateDisplay();function E(R){R.type.indexOf("touch")===-1&&R.preventDefault();var y=u.__saturation_field.getBoundingClientRect(),v=R.touches&&R.touches[0]||R,F=v.clientX,N=v.clientY,D=(F-y.left)/(y.right-y.left),z=1-(N-y.top)/(y.bottom-y.top);return z>1?z=1:z<0&&(z=0),D>1?D=1:D<0&&(D=0),u.__color.v=z,u.__color.s=D,u.setValue(u.__color.toOriginal()),!1}function A(R){R.type.indexOf("touch")===-1&&R.preventDefault();var y=u.__hue_field.getBoundingClientRect(),v=R.touches&&R.touches[0]||R,F=v.clientY,N=1-(F-y.top)/(y.bottom-y.top);return N>1?N=1:N<0&&(N=0),u.__color.h=N*360,u.setValue(u.__color.toOriginal()),!1}return l}return Ai(t,[{key:"updateDisplay",value:function(){var r=wd(this.getValue());if(r!==!1){var l=!1;xt.each(En.COMPONENTS,function(d){if(!xt.isUndefined(r[d])&&!xt.isUndefined(this.__color.__state[d])&&r[d]!==this.__color.__state[d])return l=!0,{}},this),l&&xt.extend(this.__color.__state,r)}xt.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var u=this.__color.v<.5||this.__color.s>.5?255:0,h=255-u;xt.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+u+","+u+","+u+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,Pv(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),xt.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+u+","+u+","+u+")",textShadow:this.__input_textShadow+"rgba("+h+","+h+","+h+",.7)"})}}]),t}(wr),b1=["-moz-","-o-","-webkit-","-ms-",""];function Pv(s,t,n,r){s.style.background="",xt.each(b1,function(l){s.style.cssText+="background: "+l+"linear-gradient("+t+", "+n+" 0%, "+r+" 100%); "})}function T1(s){s.style.background="",s.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",s.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var A1={load:function(t,n){var r=n||document,l=r.createElement("link");l.type="text/css",l.rel="stylesheet",l.href=t,r.getElementsByTagName("head")[0].appendChild(l)},inject:function(t,n){var r=n||document,l=document.createElement("style");l.type="text/css",l.innerHTML=t;var u=r.getElementsByTagName("head")[0];try{u.appendChild(l)}catch{}}},R1=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,C1=function(t,n){var r=t[n];return xt.isArray(arguments[2])||xt.isObject(arguments[2])?new y1(t,n,arguments[2]):xt.isNumber(r)?xt.isNumber(arguments[2])&&xt.isNumber(arguments[3])?xt.isNumber(arguments[4])?new Dd(t,n,arguments[2],arguments[3],arguments[4]):new Dd(t,n,arguments[2],arguments[3]):xt.isNumber(arguments[4])?new Qu(t,n,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Qu(t,n,{min:arguments[2],max:arguments[3]}):xt.isString(r)?new E1(t,n):xt.isFunction(r)?new T0(t,n,""):xt.isBoolean(r)?new M0(t,n):null};function w1(s){setTimeout(s,1e3/60)}var D1=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||w1,U1=function(){function s(){Ti(this,s),this.backgroundElement=document.createElement("div"),xt.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),at.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),xt.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var t=this;at.bind(this.backgroundElement,"click",function(){t.hide()})}return Ai(s,[{key:"show",value:function(){var n=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),xt.defer(function(){n.backgroundElement.style.opacity=1,n.domElement.style.opacity=1,n.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var n=this,r=function l(){n.domElement.style.display="none",n.backgroundElement.style.display="none",at.unbind(n.domElement,"webkitTransitionEnd",l),at.unbind(n.domElement,"transitionend",l),at.unbind(n.domElement,"oTransitionEnd",l)};at.bind(this.domElement,"webkitTransitionEnd",r),at.bind(this.domElement,"transitionend",r),at.bind(this.domElement,"oTransitionEnd",r),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-at.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-at.getHeight(this.domElement)/2+"px"}}]),s}(),L1=_1(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);A1.inject(L1);var Bv="dg",zv=72,Iv=20,Jo="Default",Wo=function(){try{return!!window.localStorage}catch{return!1}}(),Yo=void 0,Fv=!0,Ts=void 0,Vh=!1,A0=[],Xe=function s(t){var n=this,r=t||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),at.addClass(this.domElement,Bv),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],r=xt.defaults(r,{closeOnTop:!1,autoPlace:!0,width:s.DEFAULT_WIDTH}),r=xt.defaults(r,{resizable:r.autoPlace,hideable:r.autoPlace}),xt.isUndefined(r.load)?r.load={preset:Jo}:r.preset&&(r.load.preset=r.preset),xt.isUndefined(r.parent)&&r.hideable&&A0.push(this),r.resizable=xt.isUndefined(r.parent)&&r.resizable,r.autoPlace&&xt.isUndefined(r.scrollable)&&(r.scrollable=!0);var l=Wo&&localStorage.getItem(As(this,"isLocal"))==="true",u=void 0,h=void 0;if(Object.defineProperties(this,{parent:{get:function(){return r.parent}},scrollable:{get:function(){return r.scrollable}},autoPlace:{get:function(){return r.autoPlace}},closeOnTop:{get:function(){return r.closeOnTop}},preset:{get:function(){return n.parent?n.getRoot().preset:r.load.preset},set:function(x){n.parent?n.getRoot().preset=x:r.load.preset=x,B1(this),n.revert()}},width:{get:function(){return r.width},set:function(x){r.width=x,Od(n,x)}},name:{get:function(){return r.name},set:function(x){r.name=x,h&&(h.innerHTML=r.name)}},closed:{get:function(){return r.closed},set:function(x){r.closed=x,r.closed?at.addClass(n.__ul,s.CLASS_CLOSED):at.removeClass(n.__ul,s.CLASS_CLOSED),this.onResize(),n.__closeButton&&(n.__closeButton.innerHTML=x?s.TEXT_OPEN:s.TEXT_CLOSED)}},load:{get:function(){return r.load}},useLocalStorage:{get:function(){return l},set:function(x){Wo&&(l=x,x?at.bind(window,"unload",u):at.unbind(window,"unload",u),localStorage.setItem(As(n,"isLocal"),x))}}}),xt.isUndefined(r.parent)){if(this.closed=r.closed||!1,at.addClass(this.domElement,s.CLASS_MAIN),at.makeSelectable(this.domElement,!1),Wo&&l){n.useLocalStorage=!0;var d=localStorage.getItem(As(this,"gui"));d&&(r.load=JSON.parse(d))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=s.TEXT_CLOSED,at.addClass(this.__closeButton,s.CLASS_CLOSE_BUTTON),r.closeOnTop?(at.addClass(this.__closeButton,s.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(at.addClass(this.__closeButton,s.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),at.bind(this.__closeButton,"click",function(){n.closed=!n.closed})}else{r.closed===void 0&&(r.closed=!0);var m=document.createTextNode(r.name);at.addClass(m,"controller-name"),h=jd(n,m);var p=function(x){return x.preventDefault(),n.closed=!n.closed,!1};at.addClass(this.__ul,s.CLASS_CLOSED),at.addClass(h,"title"),at.bind(h,"click",p),r.closed||(this.closed=!1)}r.autoPlace&&(xt.isUndefined(r.parent)&&(Fv&&(Ts=document.createElement("div"),at.addClass(Ts,Bv),at.addClass(Ts,s.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Ts),Fv=!1),Ts.appendChild(this.domElement),at.addClass(this.domElement,s.CLASS_AUTO_PLACE)),this.parent||Od(n,r.width)),this.__resizeHandler=function(){n.onResizeDebounced()},at.bind(window,"resize",this.__resizeHandler),at.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),at.bind(this.__ul,"transitionend",this.__resizeHandler),at.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),r.resizable&&P1(this),u=function(){Wo&&localStorage.getItem(As(n,"isLocal"))==="true"&&localStorage.setItem(As(n,"gui"),JSON.stringify(n.getSaveObject()))},this.saveToLocalStorageIfPossible=u;function _(){var g=n.getRoot();g.width+=1,xt.defer(function(){g.width-=1})}r.parent||_()};Xe.toggleHide=function(){Vh=!Vh,xt.each(A0,function(s){s.domElement.style.display=Vh?"none":""})};Xe.CLASS_AUTO_PLACE="a";Xe.CLASS_AUTO_PLACE_CONTAINER="ac";Xe.CLASS_MAIN="main";Xe.CLASS_CONTROLLER_ROW="cr";Xe.CLASS_TOO_TALL="taller-than-window";Xe.CLASS_CLOSED="closed";Xe.CLASS_CLOSE_BUTTON="close-button";Xe.CLASS_CLOSE_TOP="close-top";Xe.CLASS_CLOSE_BOTTOM="close-bottom";Xe.CLASS_DRAG="drag";Xe.DEFAULT_WIDTH=245;Xe.TEXT_CLOSED="Close Controls";Xe.TEXT_OPEN="Open Controls";Xe._keydownHandler=function(s){document.activeElement.type!=="text"&&(s.which===zv||s.keyCode===zv)&&Xe.toggleHide()};at.bind(window,"keydown",Xe._keydownHandler,!1);xt.extend(Xe.prototype,{add:function(t,n){return qo(this,t,n,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(t,n){return qo(this,t,n,{color:!0})},remove:function(t){this.__ul.removeChild(t.__li),this.__controllers.splice(this.__controllers.indexOf(t),1);var n=this;xt.defer(function(){n.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Ts.removeChild(this.domElement);var t=this;xt.each(this.__folders,function(n){t.removeFolder(n)}),at.unbind(window,"keydown",Xe._keydownHandler,!1),Hv(this)},addFolder:function(t){if(this.__folders[t]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+t+'"');var n={name:t,parent:this};n.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[t]&&(n.closed=this.load.folders[t].closed,n.load=this.load.folders[t]);var r=new Xe(n);this.__folders[t]=r;var l=jd(this,r.domElement);return at.addClass(l,"folder"),r},removeFolder:function(t){this.__ul.removeChild(t.domElement.parentElement),delete this.__folders[t.name],this.load&&this.load.folders&&this.load.folders[t.name]&&delete this.load.folders[t.name],Hv(t);var n=this;xt.each(t.__folders,function(r){t.removeFolder(r)}),xt.defer(function(){n.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var t=this.getRoot();if(t.scrollable){var n=at.getOffset(t.__ul).top,r=0;xt.each(t.__ul.childNodes,function(l){t.autoPlace&&l===t.__save_row||(r+=at.getHeight(l))}),window.innerHeight-n-Iv<r?(at.addClass(t.domElement,Xe.CLASS_TOO_TALL),t.__ul.style.height=window.innerHeight-n-Iv+"px"):(at.removeClass(t.domElement,Xe.CLASS_TOO_TALL),t.__ul.style.height="auto")}t.__resize_handle&&xt.defer(function(){t.__resize_handle.style.height=t.__ul.offsetHeight+"px"}),t.__closeButton&&(t.__closeButton.style.width=t.width+"px")},onResizeDebounced:xt.debounce(function(){this.onResize()},50),remember:function(){if(xt.isUndefined(Yo)&&(Yo=new U1,Yo.domElement.innerHTML=R1),this.parent)throw new Error("You can only call remember on a top level GUI.");var t=this;xt.each(Array.prototype.slice.call(arguments),function(n){t.__rememberedObjects.length===0&&O1(t),t.__rememberedObjects.indexOf(n)===-1&&t.__rememberedObjects.push(n)}),this.autoPlace&&Od(this,this.width)},getRoot:function(){for(var t=this;t.parent;)t=t.parent;return t},getSaveObject:function(){var t=this.load;return t.closed=this.closed,this.__rememberedObjects.length>0&&(t.preset=this.preset,t.remembered||(t.remembered={}),t.remembered[this.preset]=zu(this)),t.folders={},xt.each(this.__folders,function(n,r){t.folders[r]=n.getSaveObject()}),t},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=zu(this),Ld(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(t){this.load.remembered||(this.load.remembered={},this.load.remembered[Jo]=zu(this,!0)),this.load.remembered[t]=zu(this),this.preset=t,Nd(this,t,!0),this.saveToLocalStorageIfPossible()},revert:function(t){xt.each(this.__controllers,function(n){this.getRoot().load.remembered?R0(t||this.getRoot(),n):n.setValue(n.initialValue),n.__onFinishChange&&n.__onFinishChange.call(n,n.getValue())},this),xt.each(this.__folders,function(n){n.revert(n)}),t||Ld(this.getRoot(),!1)},listen:function(t){var n=this.__listening.length===0;this.__listening.push(t),n&&C0(this.__listening)},updateDisplay:function(){xt.each(this.__controllers,function(t){t.updateDisplay()}),xt.each(this.__folders,function(t){t.updateDisplay()})}});function jd(s,t,n){var r=document.createElement("li");return t&&r.appendChild(t),n?s.__ul.insertBefore(r,n):s.__ul.appendChild(r),s.onResize(),r}function Hv(s){at.unbind(window,"resize",s.__resizeHandler),s.saveToLocalStorageIfPossible&&at.unbind(window,"unload",s.saveToLocalStorageIfPossible)}function Ld(s,t){var n=s.__preset_select[s.__preset_select.selectedIndex];t?n.innerHTML=n.value+"*":n.innerHTML=n.value}function N1(s,t,n){if(n.__li=t,n.__gui=s,xt.extend(n,{options:function(h){if(arguments.length>1){var d=n.__li.nextElementSibling;return n.remove(),qo(s,n.object,n.property,{before:d,factoryArgs:[xt.toArray(arguments)]})}if(xt.isArray(h)||xt.isObject(h)){var m=n.__li.nextElementSibling;return n.remove(),qo(s,n.object,n.property,{before:m,factoryArgs:[h]})}},name:function(h){return n.__li.firstElementChild.firstElementChild.innerHTML=h,n},listen:function(){return n.__gui.listen(n),n},remove:function(){return n.__gui.remove(n),n}}),n instanceof Dd){var r=new Qu(n.object,n.property,{min:n.__min,max:n.__max,step:n.__step});xt.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(u){var h=n[u],d=r[u];n[u]=r[u]=function(){var m=Array.prototype.slice.call(arguments);return d.apply(r,m),h.apply(n,m)}}),at.addClass(t,"has-slider"),n.domElement.insertBefore(r.domElement,n.domElement.firstElementChild)}else if(n instanceof Qu){var l=function(h){if(xt.isNumber(n.__min)&&xt.isNumber(n.__max)){var d=n.__li.firstElementChild.firstElementChild.innerHTML,m=n.__gui.__listening.indexOf(n)>-1;n.remove();var p=qo(s,n.object,n.property,{before:n.__li.nextElementSibling,factoryArgs:[n.__min,n.__max,n.__step]});return p.name(d),m&&p.listen(),p}return h};n.min=xt.compose(l,n.min),n.max=xt.compose(l,n.max)}else n instanceof M0?(at.bind(t,"click",function(){at.fakeEvent(n.__checkbox,"click")}),at.bind(n.__checkbox,"click",function(u){u.stopPropagation()})):n instanceof T0?(at.bind(t,"click",function(){at.fakeEvent(n.__button,"click")}),at.bind(t,"mouseover",function(){at.addClass(n.__button,"hover")}),at.bind(t,"mouseout",function(){at.removeClass(n.__button,"hover")})):n instanceof Ud&&(at.addClass(t,"color"),n.updateDisplay=xt.compose(function(u){return t.style.borderLeftColor=n.__color.toString(),u},n.updateDisplay),n.updateDisplay());n.setValue=xt.compose(function(u){return s.getRoot().__preset_select&&n.isModified()&&Ld(s.getRoot(),!0),u},n.setValue)}function R0(s,t){var n=s.getRoot(),r=n.__rememberedObjects.indexOf(t.object);if(r!==-1){var l=n.__rememberedObjectIndecesToControllers[r];if(l===void 0&&(l={},n.__rememberedObjectIndecesToControllers[r]=l),l[t.property]=t,n.load&&n.load.remembered){var u=n.load.remembered,h=void 0;if(u[s.preset])h=u[s.preset];else if(u[Jo])h=u[Jo];else return;if(h[r]&&h[r][t.property]!==void 0){var d=h[r][t.property];t.initialValue=d,t.setValue(d)}}}}function qo(s,t,n,r){if(t[n]===void 0)throw new Error('Object "'+t+'" has no property "'+n+'"');var l=void 0;if(r.color)l=new Ud(t,n);else{var u=[t,n].concat(r.factoryArgs);l=C1.apply(s,u)}r.before instanceof wr&&(r.before=r.before.__li),R0(s,l),at.addClass(l.domElement,"c");var h=document.createElement("span");at.addClass(h,"property-name"),h.innerHTML=l.property;var d=document.createElement("div");d.appendChild(h),d.appendChild(l.domElement);var m=jd(s,d,r.before);return at.addClass(m,Xe.CLASS_CONTROLLER_ROW),l instanceof Ud?at.addClass(m,"color"):at.addClass(m,v1(l.getValue())),N1(s,m,l),s.__controllers.push(l),l}function As(s,t){return document.location.href+"."+t}function Nd(s,t,n){var r=document.createElement("option");r.innerHTML=t,r.value=t,s.__preset_select.appendChild(r),n&&(s.__preset_select.selectedIndex=s.__preset_select.length-1)}function Vv(s,t){t.style.display=s.useLocalStorage?"block":"none"}function O1(s){var t=s.__save_row=document.createElement("li");at.addClass(s.domElement,"has-save"),s.__ul.insertBefore(t,s.__ul.firstChild),at.addClass(t,"save-row");var n=document.createElement("span");n.innerHTML="&nbsp;",at.addClass(n,"button gears");var r=document.createElement("span");r.innerHTML="Save",at.addClass(r,"button"),at.addClass(r,"save");var l=document.createElement("span");l.innerHTML="New",at.addClass(l,"button"),at.addClass(l,"save-as");var u=document.createElement("span");u.innerHTML="Revert",at.addClass(u,"button"),at.addClass(u,"revert");var h=s.__preset_select=document.createElement("select");if(s.load&&s.load.remembered?xt.each(s.load.remembered,function(g,x){Nd(s,x,x===s.preset)}):Nd(s,Jo,!1),at.bind(h,"change",function(){for(var g=0;g<s.__preset_select.length;g++)s.__preset_select[g].innerHTML=s.__preset_select[g].value;s.preset=this.value}),t.appendChild(h),t.appendChild(n),t.appendChild(r),t.appendChild(l),t.appendChild(u),Wo){var d=document.getElementById("dg-local-explain"),m=document.getElementById("dg-local-storage"),p=document.getElementById("dg-save-locally");p.style.display="block",localStorage.getItem(As(s,"isLocal"))==="true"&&m.setAttribute("checked","checked"),Vv(s,d),at.bind(m,"change",function(){s.useLocalStorage=!s.useLocalStorage,Vv(s,d)})}var _=document.getElementById("dg-new-constructor");at.bind(_,"keydown",function(g){g.metaKey&&(g.which===67||g.keyCode===67)&&Yo.hide()}),at.bind(n,"click",function(){_.innerHTML=JSON.stringify(s.getSaveObject(),void 0,2),Yo.show(),_.focus(),_.select()}),at.bind(r,"click",function(){s.save()}),at.bind(l,"click",function(){var g=prompt("Enter a new preset name.");g&&s.saveAs(g)}),at.bind(u,"click",function(){s.revert()})}function P1(s){var t=void 0;s.__resize_handle=document.createElement("div"),xt.extend(s.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function n(u){return u.preventDefault(),s.width+=t-u.clientX,s.onResize(),t=u.clientX,!1}function r(){at.removeClass(s.__closeButton,Xe.CLASS_DRAG),at.unbind(window,"mousemove",n),at.unbind(window,"mouseup",r)}function l(u){return u.preventDefault(),t=u.clientX,at.addClass(s.__closeButton,Xe.CLASS_DRAG),at.bind(window,"mousemove",n),at.bind(window,"mouseup",r),!1}at.bind(s.__resize_handle,"mousedown",l),at.bind(s.__closeButton,"mousedown",l),s.domElement.insertBefore(s.__resize_handle,s.domElement.firstElementChild)}function Od(s,t){s.domElement.style.width=t+"px",s.__save_row&&s.autoPlace&&(s.__save_row.style.width=t+"px"),s.__closeButton&&(s.__closeButton.style.width=t+"px")}function zu(s,t){var n={};return xt.each(s.__rememberedObjects,function(r,l){var u={},h=s.__rememberedObjectIndecesToControllers[l];xt.each(h,function(d,m){u[m]=t?d.initialValue:d.getValue()}),n[l]=u}),n}function B1(s){for(var t=0;t<s.__preset_select.length;t++)s.__preset_select[t].value===s.preset&&(s.__preset_select.selectedIndex=t)}function C0(s){s.length!==0&&D1.call(window,function(){C0(s)}),xt.each(s,function(t){t.updateDisplay()})}var z1=Xe;const Iu=[.5,1,1,1,1,.5,.5,.5,.5,.5,.5,.5],Fu=[1,.5,1,1,1,.5,1,1,1,1,1,1],ko={horizontal:!0,vertical:!0,pattern3d:!0};function I1(){const s=uh.useRef(null),t=uh.useRef(null);return uh.useEffect(()=>{s.current&&(t.current=new m1(s.current),t.current.setPattern(Iu,Fu),t.current.setVisibility(ko));const n=()=>t.current.setPattern(Iu,Fu),r=()=>t.current.setVisibility(ko),l=new z1,u=l.addFolder("Visibility");u.add(ko,"horizontal").onChange(r),u.add(ko,"vertical").onChange(r),u.add(ko,"pattern3d").onChange(r);const h=l.addFolder("Vertical Plane");Fu.forEach((m,p)=>{h.add(Fu,`${p}`,0,1).onChange(n)});const d=l.addFolder("Horizontal Plane");return Iu.forEach((m,p)=>{d.add(Iu,`${p}`,0,1).onChange(n)}),()=>{t.current&&t.current.dispose()}},[]),Gv.jsx("canvas",{ref:s,style:{width:"100%",height:"100%"}})}VS.createRoot(document.getElementById("root")).render(Gv.jsx(I1,{}));
