(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(t,n,e){(function(t){!function(n){"use strict";var e=Object.freeze({get start(){return Ct},get ensureJQuerySupport(){return pt},get setBootstrapMaxTime(){return C},get setMountMaxTime(){return M},get setUnmountMaxTime(){return I},get setUnloadMaxTime(){return L},get registerApplication(){return Pt},get getMountedApps(){return yt},get getAppStatus(){return Et},get unloadApplication(){return St},get checkActivityFunctions(){return Tt},get getAppNames(){return bt},get declareChildApplication(){return Ot},get unloadChildApplication(){return Nt},get navigateToUrl(){return rt},get triggerAppChange(){return Dt},get addErrorHandler(){return l},get removeErrorHandler(){return f},get mountRootParcel(){return z},get NOT_LOADED(){return m},get LOADING_SOURCE_CODE(){return d},get NOT_BOOTSTRAPPED(){return h},get BOOTSTRAPPING(){return v},get NOT_MOUNTED(){return w},get MOUNTING(){return g},get UPDATING(){return b},get MOUNTED(){return y},get UNMOUNTING(){return E},get SKIP_BECAUSE_BROKEN(){return P}}),r=("undefined"!=typeof window?window:"undefined"!=typeof t?t:"undefined"!=typeof self?self:{}).CustomEvent,o=function(){try{var t=new r("cat",{detail:{foo:"bar"}});return"cat"===t.type&&"bar"===t.detail.foo}catch(t){}return!1}()?r:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(t,n){var e=document.createEvent("CustomEvent");return n?e.initCustomEvent(t,n.bubbles,n.cancelable,n.detail):e.initCustomEvent(t,!1,!1,void 0),e}:function(t,n){var e=document.createEventObject();return e.type=t,n?(e.bubbles=Boolean(n.bubbles),e.cancelable=Boolean(n.cancelable),e.detail=n.detail):(e.bubbles=!1,e.cancelable=!1,e.detail=void 0),e};function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){a(t,n,e[n])})}return t}var c=[];function s(t,n){var e=p(t,n);c.length?c.forEach(function(t){return t(e)}):setTimeout(function(){throw e})}function l(t){if("function"!=typeof t)throw new Error("a single-spa error handler must be a function");c.push(t)}function f(t){if("function"!=typeof t)throw new Error("a single-spa error handler must be a function");var n=!1;return c=c.filter(function(e){var r=e===t;return n=n||r,!r}),n}function p(t,n){var e,r=n.unmountThisParcel?"Parcel":"Application",o="".concat(r," '").concat(n.name,"' died in status ").concat(n.status,": ");if(t instanceof Error){try{t.message=o+t.message}catch(t){}e=t}else{console.warn("While ".concat(n.status,", '").concat(n.name,"' rejected its lifecycle function promise with a non-Error. This will cause stack traces to not be accurate."));try{e=new Error(o+JSON.stringify(t))}catch(n){e=t}}return e.appName=n.name,e.name=n.name,e}var m="NOT_LOADED",d="LOADING_SOURCE_CODE",h="NOT_BOOTSTRAPPED",v="BOOTSTRAPPING",w="NOT_MOUNTED",g="MOUNTING",y="MOUNTED",b="UPDATING",E="UNMOUNTING",O="UNLOADING",P="SKIP_BECAUSE_BROKEN";function T(t){return t.status===y}function A(t){return!T(t)}function N(t){return t.status!==m&&t.status!==d}function S(t){return!N(t)}function U(t){try{return t.activeWhen(window.location)}catch(e){s(e,t),t.status=P}}function _(t){try{return!t.activeWhen(window.location)}catch(e){s(e,t),t.status=P}}function j(t){return t!==P&&(!t||t.status!==P)}function D(t){return t.name}var x={bootstrap:{millis:4e3,dieOnTimeout:!1},mount:{millis:3e3,dieOnTimeout:!1},unmount:{millis:3e3,dieOnTimeout:!1},unload:{millis:3e3,dieOnTimeout:!1}};function C(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("number"!=typeof t||t<=0)throw new Error("bootstrap max time must be a positive integer number of milliseconds");x.bootstrap={millis:t,dieOnTimeout:n}}function M(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("number"!=typeof t||t<=0)throw new Error("mount max time must be a positive integer number of milliseconds");x.mount={millis:t,dieOnTimeout:n}}function I(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("number"!=typeof t||t<=0)throw new Error("unmount max time must be a positive integer number of milliseconds");x.unmount={millis:t,dieOnTimeout:n}}function L(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("number"!=typeof t||t<=0)throw new Error("unload max time must be a positive integer number of milliseconds");x.unload={millis:t,dieOnTimeout:n}}function B(t,n,e){var r=1e3;return new Promise(function(o,i){var a=!1,u=!1;function c(t){if(!a)if(!0===t)u=!0,e.dieOnTimeout?i("".concat(n," did not resolve or reject for ").concat(e.millis," milliseconds")):console.error("".concat(n," did not resolve or reject for ").concat(e.millis," milliseconds -- we're no longer going to warn you about it."));else if(!u){var o=t,s=o*r;console.warn("".concat(n," did not resolve or reject within ").concat(s," milliseconds")),s+r<e.millis&&setTimeout(function(){return c(o+1)},r)}}t.then(function(t){a=!0,o(t)}).catch(function(t){a=!0,i(t)}),setTimeout(function(){return c(1)},r),setTimeout(function(){return c(!0)},e.millis)})}function G(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return u({},x,t)}function R(t,n){for(var e=0;e<t.length;e++)if(n(t[e]))return t[e];return null}function k(t){return t&&("function"==typeof t||(n=t,Array.isArray(n)&&!R(n,function(t){return"function"!=typeof t})));var n}function W(t,n){return 0===(t=Array.isArray(t)?t:[t]).length&&(t=[function(){return Promise.resolve()}]),function(e){return new Promise(function(r,o){!function i(a){var u=t[a](e);q(u)?u.then(function(){a===t.length-1?r():i(a+1)}).catch(o):o("".concat(n," at index ").concat(a," did not return a promise"))}(0)})}}function q(t){return t&&"function"==typeof t.then&&"function"==typeof t.catch}function F(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Promise.resolve().then(function(){return t.status!==h?t:(t.status=v,B(t.bootstrap(Z(t)),"Bootstrapping appOrParcel '".concat(t.name,"'"),t.timeouts.bootstrap).then(function(){return t.status=w,t}).catch(function(e){if(t.status=P,n)throw p(e,t);return s(e,t),t}))})}function K(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Promise.resolve().then(function(){if(t.status!==y)return t;t.status=E;var e=Object.keys(t.parcels).map(function(n){return t.parcels[n].unmountThisParcel()});return Promise.all(e).then(r,function(e){return r().then(function(){var r=new Error(e.message);if(n){var o=p(r,t);throw t.status=P,o}s(r,t),t.status=P})}).then(function(){return t});function r(){return B(t.unmount(Z(t)),"Unmounting application ".concat(t.name,"'"),t.timeouts.unmount).then(function(){t.status=w}).catch(function(e){if(n){var r=p(e,t);throw t.status=P,r}s(e,t),t.status=P})}})}var $=!1,H=!1;function J(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Promise.resolve().then(function(){return t.status!==w?t:($||(window.dispatchEvent(new o("single-spa:before-first-mount")),$=!0),B(t.mount(Z(t)),"Mounting application '".concat(t.name,"'"),t.timeouts.mount).then(function(){return t.status=y,H||(window.dispatchEvent(new o("single-spa:first-mount")),H=!0),t}).catch(function(e){return t.status=y,K(t).then(r,r);function r(){if(n){var r=p(e,t);throw t.status=P,r}return s(e,t),t.status=P,t}}))})}var Q=0,V={parcels:{}};function z(){return X.apply(V,arguments)}function X(t,n){var e=this;if(!t||"object"!==i(t)&&"function"!=typeof t)throw new Error("Cannot mount parcel without a config object or config loading function");if(t.name&&"string"!=typeof t.name)throw new Error("Parcel name must be a string, if provided");if("object"!==i(n))throw new Error("Parcel ".concat(name," has invalid customProps -- must be an object"));if(!n.domElement)throw new Error("Parcel ".concat(name," cannot be mounted without a domElement provided as a prop"));var r,o=Q++,a="function"==typeof t,u=a?t:function(){return Promise.resolve(t)},c={id:o,parcels:{},status:a?d:h,customProps:n,parentName:e.name,unmountThisParcel:function(){if(c.status!==y)throw new Error("Cannot unmount parcel '".concat(name,"' -- it is in a ").concat(c.status," status"));return K(c,!0).then(function(t){return c.parentName&&delete e.parcels[c.id],t}).then(function(t){return l(t),t}).catch(function(t){throw c.status=P,f(t),t})}};e.parcels[o]=c;var s=u();if(!s||"function"!=typeof s.then)throw new Error("When mounting a parcel, the config loading function must return a promise that resolves with the parcel config");var l,f,m=(s=s.then(function(t){if(!t)throw new Error("When mounting a parcel, the config loading function returned a promise that did not resolve with a parcel config");var n=t.name||"parcel-".concat(o);if(!k(t.bootstrap))throw new Error("Parcel ".concat(n," must have a valid bootstrap function"));if(!k(t.mount))throw new Error("Parcel ".concat(n," must have a valid mount function"));if(!k(t.unmount))throw new Error("Parcel ".concat(n," must have a valid unmount function"));if(t.update&&!k(t.update))throw new Error("Parcel ".concat(n," provided an invalid update function"));var e=W(t.bootstrap),i=W(t.mount),a=W(t.unmount);c.status=h,c.name=n,c.bootstrap=e,c.mount=i,c.unmount=a,c.timeouts=G(t.timeouts),t.update&&(c.update=W(t.update),r.update=function(t){return c.customProps=t,Y(function(t){return Promise.resolve().then(function(){if(t.status!==y)throw new Error("Cannot update parcel '".concat(t.name,"' because it is not mounted"));return t.status=b,B(t.update(Z(t)),"Updating parcel '".concat(t.name,"'"),t.timeouts.mount).then(function(){return t.status=y,t}).catch(function(n){var e=p(n,t);throw t.status=P,e})})}(c))})})).then(function(){return F(c,!0)}),v=m.then(function(){return J(c,!0)}),g=new Promise(function(t,n){l=t,f=n});return r={mount:function(){return Y(Promise.resolve().then(function(){if(c.status!==w)throw new Error("Cannot mount parcel '".concat(name,"' -- it is in a ").concat(c.status," status"));return e.parcels[o]=c,J(c)}))},unmount:function(){return Y(c.unmountThisParcel())},getStatus:function(){return c.status},loadPromise:Y(s),bootstrapPromise:Y(m),mountPromise:Y(v),unmountPromise:Y(g)}}function Y(t){return t.then(function(){return null})}function Z(t){var n=u({},t.customProps,{name:t.name,mountParcel:X.bind(t),singleSpa:e});return t.unmountThisParcel&&(n.unmountSelf=t.unmountThisParcel),n}function tt(t){return Promise.resolve().then(function(){return t.status!==m?t:(t.status=d,Promise.resolve().then(function(){var e=t.loadImpl(Z(t));if(!q(e))throw new Error("single-spa loading function did not return a promise. Check the second argument to registerApplication('".concat(t.name,"', loadingFunction, activityFunction)"));return e.then(function(e){var r;return"object"!==i(n=e)&&(r="does not export anything"),k(n.bootstrap)||(r="does not export a bootstrap function or array of functions"),k(n.mount)||(r="does not export a mount function or array of functions"),k(n.unmount)||(r="does not export an unmount function or array of functions"),r?(s(r,t),t.status=P,t):(n.devtools&&n.devtools.overlays&&(t.devtools.overlays=u({},t.devtools.overlays,n.devtools.overlays)),t.status=h,t.bootstrap=W(n.bootstrap,"App '".concat(t.name,"' bootstrap function")),t.mount=W(n.mount,"App '".concat(t.name,"' mount function")),t.unmount=W(n.unmount,"App '".concat(t.name,"' unmount function")),t.unload=W(n.unload||[],"App '".concat(t.name,"' unload function")),t.timeouts=G(n.timeouts),t)})}).catch(function(n){return s(n,t),t.status=P,t}));var n})}var nt={hashchange:[],popstate:[]},et=["hashchange","popstate"];function rt(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof t)n=t;else if(this&&this.href)n=this.href;else{if(!(t&&t.currentTarget&&t.currentTarget.href&&t.preventDefault))throw new Error("singleSpaNavigate must be either called with a string url, with an <a> tag as its context, or with an event whose currentTarget is an <a> tag");n=t.currentTarget.href,t.preventDefault()}var r=lt(window.location.href),o=lt(n);if(0===n.indexOf("#"))window.location.hash="#"+o.anchor;else if(r.host!==o.host&&o.host){if(e.isTestingEnv)return{wouldHaveReloadedThePage:!0};window.location.href=n}else!function(t,n){return n===t||n==="/"+t}(o.path,r.path)?window.history.pushState(null,null,n):window.location.hash="#"+o.anchor}function ot(t){var n=this;if(t){var e=t[0].type;et.indexOf(e)>=0&&nt[e].forEach(function(e){e.apply(n,t)})}}function it(){Dt([],arguments)}window.addEventListener("hashchange",it),window.addEventListener("popstate",it);var at=window.addEventListener,ut=window.removeEventListener;window.addEventListener=function(t,n){if(!("function"==typeof n&&et.indexOf(t)>=0)||R(nt[t],function(t){return t===n}))return at.apply(this,arguments);nt[t].push(n)},window.removeEventListener=function(t,n){if(!("function"==typeof n&&et.indexOf(t)>=0))return ut.apply(this,arguments);nt[t]=nt[t].filter(function(t){return t!==n})};var ct=window.history.pushState;window.history.pushState=function(t){var n=ct.apply(this,arguments);return it(new PopStateEvent("popstate")),n};var st=window.history.replaceState;function lt(t){for(var n={strictMode:!0,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},e=n.parser.strict.exec(t),r={},o=14;o--;)r[n.key[o]]=e[o]||"";return r[n.q.name]={},r[n.key[12]].replace(n.q.parser,function(t,e,o){e&&(r[n.q.name][e]=o)}),r}window.history.replaceState=function(){var t=st.apply(this,arguments);return it(new PopStateEvent("popstate")),t},window.singleSpaNavigate=rt;var ft=!1;function pt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.jQuery;if(t||window.$&&window.$.fn&&window.$.fn.jquery&&(t=window.$),t&&!ft){var n=t.fn.on,e=t.fn.off;t.fn.on=function(t,e){return mt.call(this,n,window.addEventListener,t,e,arguments)},t.fn.off=function(t,n){return mt.call(this,e,window.removeEventListener,t,n,arguments)},ft=!0}}function mt(t,n,e,r,o){return"string"!=typeof e?t.apply(this,o):(e.split(/\s+/).forEach(function(t){et.indexOf(t)>=0&&(n(t,r),e=e.replace(t,""))}),""===e.trim()?this:t.apply(this,o))}var dt={};function ht(t){return Promise.resolve().then(function(){var n=dt[t.name];return n?t.status===m?(vt(t,n),t):t.status===O?n.promise.then(function(){return t}):t.status!==w?t:(t.status=O,B(t.unload(Z(t)),"Unloading application '".concat(t.name,"'"),t.timeouts.unload).then(function(){return vt(t,n),t}).catch(function(e){return function(t,n,e){delete dt[t.name],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,s(e,t),t.status=P,n.reject(e)}(t,n,e),t})):t})}function vt(t,n){delete dt[t.name],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,t.status=m,n.resolve()}function wt(t,n,e,r){dt[t.name]={app:t,resolve:e,reject:r},Object.defineProperty(dt[t.name],"promise",{get:n})}var gt=[];function yt(){return gt.filter(T).map(D)}function bt(){return gt.map(D)}function Et(t){var n=R(gt,function(n){return n.name===t});return n?n.status:null}function Ot(t,n,e){return console.warn('declareChildApplication is deprecated and will be removed in the next major version, use "registerApplication" instead'),Pt(t,n,e)}function Pt(t,n,e){var r,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if("string"!=typeof t||0===t.length)throw new Error("The first argument must be a non-empty string 'appName'");if(-1!==bt().indexOf(t))throw new Error("There is already an app declared with name ".concat(t));if("object"!==i(o)||Array.isArray(o))throw new Error("customProps must be an object");if(!n)throw new Error("The application or loading function is required");if(r="function"!=typeof n?function(){return Promise.resolve(n)}:n,"function"!=typeof e)throw new Error("The activeWhen argument must be a function");gt.push({name:t,loadImpl:r,activeWhen:e,status:m,parcels:{},devtools:{overlays:{options:{},selectors:[]}},customProps:o}),pt(),Dt()}function Tt(t){for(var n=[],e=0;e<gt.length;e++)gt[e].activeWhen(t)&&n.push(gt[e].name);return n}function At(){return gt.filter(j).filter(S).filter(U)}function Nt(t,n){return console.warn('unloadChildApplication is deprecated and will be removed in the next major version, use "unloadApplication" instead'),St(t,n)}function St(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{waitForUnmount:!1};if("string"!=typeof t)throw new Error("unloadApplication requires a string 'appName'");var e=R(gt,function(n){return n.name===t});if(!e)throw new Error("Could not unload application '".concat(t,"' because no such application has been declared"));var r,o=function(t){return dt[t]}(e.name);if(n&&n.waitForUnmount){if(o)return o.promise;var i=new Promise(function(t,n){wt(e,function(){return i},t,n)});return i}return o?(r=o.promise,Ut(e,o.resolve,o.reject)):r=new Promise(function(t,n){wt(e,function(){return r},t,n),Ut(e,t,n)}),r}function Ut(t,n,e){K(t).then(ht).then(function(){n(),setTimeout(function(){Dt()})}).catch(e)}var _t=!1,jt=[];function Dt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;if(_t)return new Promise(function(t,e){jt.push({resolve:t,reject:e,eventArguments:n})});_t=!0;var e=!0;return xt?Promise.resolve().then(function(){window.dispatchEvent(new o("single-spa:before-routing-event",a()));var n=Object.keys(dt).map(function(t){return dt[t].app}).filter(A).map(ht),u=gt.filter(j).filter(T).filter(_).map(K).map(function(t){return t.then(ht)}),c=u.concat(n);c.length>0&&(e=!1);var s=Promise.all(c),l=At(),f=l.map(function(t){return tt(t).then(F).then(function(t){return s.then(function(){return J(t)})})});f.length>0&&(e=!1);var p=gt.filter(j).filter(A).filter(N).filter(U).filter(function(t){return l.indexOf(t)<0}).map(function(t){return F(t).then(function(){return s}).then(function(){return J(t)})});return p.length>0&&(e=!1),s.catch(function(t){throw i(),t}).then(function(){return i(),Promise.all(f.concat(p)).catch(function(n){throw t.forEach(function(t){return t.reject(n)}),n}).then(function(){return r(!1)})})}):Promise.resolve().then(function(){var t=At().map(tt);return t.length>0&&(e=!1),Promise.all(t).then(r).catch(function(t){throw i(),t})});function r(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],r=yt();n&&i(),t.forEach(function(t){return t.resolve(r)});try{var u=e?"single-spa:no-app-change":"single-spa:app-change";window.dispatchEvent(new o(u,a())),window.dispatchEvent(new o("single-spa:routing-event",a()))}catch(t){setTimeout(function(){throw t})}if(_t=!1,jt.length>0){var c=jt;jt=[],Dt(c)}return r}function i(){t.forEach(function(t){ot(t.eventArguments)}),ot(n)}function a(){var t={detail:{}};return n&&n[0]&&(t.detail.originalEvent=n[0]),t}}var xt=!1;function Ct(){xt=!0,Dt()}setTimeout(function(){xt||console.warn("singleSpa.start() has not been called, ".concat(5e3,"ms after single-spa was loaded. Before start() is called, apps can be declared and loaded, but not bootstrapped or mounted. See https://github.com/CanopyTax/single-spa/blob/master/docs/single-spa-api.md#start"))},5e3);var Mt={getRawAppData:function(){return[].concat(gt)},reroute:Dt,NOT_LOADED:m,toLoadPromise:tt,toBootstrapPromise:F};window&&window.__SINGLE_SPA_DEVTOOLS__&&(window.__SINGLE_SPA_DEVTOOLS__.exposedMethods=Mt),n.BOOTSTRAPPING=v,n.LOADING_SOURCE_CODE=d,n.MOUNTED=y,n.MOUNTING=g,n.NOT_BOOTSTRAPPED=h,n.NOT_LOADED=m,n.NOT_MOUNTED=w,n.SKIP_BECAUSE_BROKEN=P,n.UNMOUNTING=E,n.UPDATING=b,n.addErrorHandler=l,n.checkActivityFunctions=Tt,n.declareChildApplication=Ot,n.ensureJQuerySupport=pt,n.getAppNames=bt,n.getAppStatus=Et,n.getMountedApps=yt,n.mountRootParcel=z,n.navigateToUrl=rt,n.registerApplication=Pt,n.removeErrorHandler=f,n.setBootstrapMaxTime=C,n.setMountMaxTime=M,n.setUnloadMaxTime=L,n.setUnmountMaxTime=I,n.start=Ct,n.triggerAppChange=Dt,n.unloadApplication=St,n.unloadChildApplication=Nt,Object.defineProperty(n,"__esModule",{value:!0})}(n)}).call(this,e(1))},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(r){"object"===typeof window&&(e=window)}t.exports=e},function(t,n,e){t.exports=e(4)},function(t,n,e){},function(t,n,e){"use strict";e.r(n);e(3),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=e(0);Object(r.registerApplication)("root",function(){return Promise.all([e.e(2),e.e(3)]).then(e.bind(null,23))},function(){return!0}),Object(r.start)(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[2,1]]]);
//# sourceMappingURL=main.f6abda34.chunk.js.map