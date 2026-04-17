(function(){var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n)),l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function te(){}var S={H:null,A:null,T:null,S:null},C=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function w(e,t){return ne(e.type,t,e.props)}function T(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var E=/\/+/g;function ie(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function ae(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(te,te):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function D(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,D(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ie(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(E,`$&/`)+`/`),D(o,r,i,``,function(e){return e})):o!=null&&(T(o)&&(o=w(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(E,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ie(a,u),c+=D(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ie(a,u++),c+=D(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return D(ae(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function oe(e,t,n){if(e==null)return e;var r=[],i=0;return D(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function se(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var O=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},k={map:oe,forEach:function(e,t,n){oe(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oe(e,function(){t++}),t},toArray:function(e){return oe(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=k,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!C.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)C.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=T,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:se}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=S.T,n={};S.T=n;try{var r=e(),i=S.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(te,O)}catch(e){O(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),S.T=t}},e.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},e.use=function(e){return S.H.use(e)},e.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},e.useCallback=function(e,t){return S.H.useCallback(e,t)},e.useContext=function(e){return S.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return S.H.useEffect(e,t)},e.useEffectEvent=function(e){return S.H.useEffectEvent(e)},e.useId=function(){return S.H.useId()},e.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return S.H.useMemo(e,t)},e.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},e.useRef=function(e){return S.H.useRef(e)},e.useState=function(e){return S.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return S.H.useTransition()},e.version=`19.2.4`})),u=o(((e,t)=>{process.env.NODE_ENV!==`production`&&(function(){function n(e,t){Object.defineProperty(a.prototype,e,{get:function(){console.warn(`%s(...) is deprecated in plain JavaScript React classes. %s`,t[0],t[1])}})}function r(e){return typeof e!=`object`||!e?null:(e=_e&&e[_e]||e[`@@iterator`],typeof e==`function`?e:null)}function i(e,t){e=(e=e.constructor)&&(e.displayName||e.name)||`ReactClass`;var n=e+`.`+t;ve[n]||(console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",t,e),ve[n]=!0)}function a(e,t,n){this.props=e,this.context=t,this.refs=be,this.updater=n||ye}function o(){}function s(e,t,n){this.props=e,this.context=t,this.refs=be,this.updater=n||ye}function c(){}function l(e){return``+e}function u(e){try{l(e);var t=!1}catch{t=!0}if(t){t=console;var n=t.error,r=typeof Symbol==`function`&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||`Object`;return n.call(t,`The provided key is an unsupported type %s. This value must be coerced to a string before using it here.`,r),l(e)}}function d(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===Ce?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case k:return`Fragment`;case le:return`Profiler`;case ce:return`StrictMode`;case pe:return`Suspense`;case me:return`SuspenseList`;case ge:return`Activity`}if(typeof e==`object`)switch(typeof e.tag==`number`&&console.error(`Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.`),e.$$typeof){case O:return`Portal`;case de:return e.displayName||`Context`;case ue:return(e._context.displayName||`Context`)+`.Consumer`;case fe:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case A:return t=e.displayName||null,t===null?d(e.type)||`Memo`:t;case he:t=e._payload,e=e._init;try{return d(e(t))}catch{}}return null}function f(e){if(e===k)return`<>`;if(typeof e==`object`&&e&&e.$$typeof===he)return`<...>`;try{var t=d(e);return t?`<`+t+`>`:`<...>`}catch{return`<...>`}}function p(){var e=M.A;return e===null?null:e.getOwner()}function m(){return Error(`react-stack-top-frame`)}function h(e){if(N.call(e,`key`)){var t=Object.getOwnPropertyDescriptor(e,`key`).get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function g(e,t){function n(){Te||(Te=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",t))}n.isReactWarning=!0,Object.defineProperty(e,`key`,{get:n,configurable:!0})}function _(){var e=d(this.type);return De[e]||(De[e]=!0,console.error(`Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.`)),e=this.props.ref,e===void 0?null:e}function v(e,t,n,r,i,a){var o=n.ref;return e={$$typeof:se,type:e,key:t,props:n,_owner:r},(o===void 0?null:o)===null?Object.defineProperty(e,`ref`,{enumerable:!1,value:null}):Object.defineProperty(e,`ref`,{enumerable:!1,get:_}),e._store={},Object.defineProperty(e._store,`validated`,{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,`_debugInfo`,{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(e,`_debugStack`,{configurable:!1,enumerable:!1,writable:!0,value:i}),Object.defineProperty(e,`_debugTask`,{configurable:!1,enumerable:!1,writable:!0,value:a}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function y(e,t){return t=v(e.type,t,e.props,e._owner,e._debugStack,e._debugTask),e._store&&(t._store.validated=e._store.validated),t}function b(e){x(e)?e._store&&(e._store.validated=1):typeof e==`object`&&e&&e.$$typeof===he&&(e._payload.status===`fulfilled`?x(e._payload.value)&&e._payload.value._store&&(e._payload.value._store.validated=1):e._store&&(e._store.validated=1))}function x(e){return typeof e==`object`&&!!e&&e.$$typeof===se}function ee(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}function te(e,t){return typeof e==`object`&&e&&e.key!=null?(u(e.key),ee(``+e.key)):t.toString(36)}function S(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(c,c):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function C(e,t,n,i,a){var o=typeof e;(o===`undefined`||o===`boolean`)&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case`bigint`:case`string`:case`number`:s=!0;break;case`object`:switch(e.$$typeof){case se:case O:s=!0;break;case he:return s=e._init,C(s(e._payload),t,n,i,a)}}if(s){s=e,a=a(s);var c=i===``?`.`+te(s,0):i;return Se(a)?(n=``,c!=null&&(n=c.replace(je,`$&/`)+`/`),C(a,t,n,``,function(e){return e})):a!=null&&(x(a)&&(a.key!=null&&(s&&s.key===a.key||u(a.key)),n=y(a,n+(a.key==null||s&&s.key===a.key?``:(``+a.key).replace(je,`$&/`)+`/`)+c),i!==``&&s!=null&&x(s)&&s.key==null&&s._store&&!s._store.validated&&(n._store.validated=2),a=n),t.push(a)),1}if(s=0,c=i===``?`.`:i+`:`,Se(e))for(var l=0;l<e.length;l++)i=e[l],o=c+te(i,l),s+=C(i,t,n,o,a);else if(l=r(e),typeof l==`function`)for(l===e.entries&&(Ae||console.warn(`Using Maps as children is not supported. Use an array of keyed ReactElements instead.`),Ae=!0),e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,o=c+te(i,l++),s+=C(i,t,n,o,a);else if(o===`object`){if(typeof e.then==`function`)return C(S(e),t,n,i,a);throw t=String(e),Error(`Objects are not valid as a React child (found: `+(t===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:t)+`). If you meant to render a collection of children, use an array instead.`)}return s}function ne(e,t,n){if(e==null)return e;var r=[],i=0;return C(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function w(e){if(e._status===-1){var t=e._ioInfo;t!=null&&(t.start=t.end=performance.now()),t=e._result;var n=t();if(n.then(function(t){if(e._status===0||e._status===-1){e._status=1,e._result=t;var r=e._ioInfo;r!=null&&(r.end=performance.now()),n.status===void 0&&(n.status=`fulfilled`,n.value=t)}},function(t){if(e._status===0||e._status===-1){e._status=2,e._result=t;var r=e._ioInfo;r!=null&&(r.end=performance.now()),n.status===void 0&&(n.status=`rejected`,n.reason=t)}}),t=e._ioInfo,t!=null){t.value=n;var r=n.displayName;typeof r==`string`&&(t.name=r)}e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return t=e._result,t===void 0&&console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,t),`default`in t||console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,t),t.default;throw e._result}function T(){var e=M.H;return e===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),e}function re(){M.asyncTransitions--}function E(e){if(Pe===null)try{var n=(`require`+Math.random()).slice(0,7);Pe=(t&&t[n]).call(t,`timers`).setImmediate}catch{Pe=function(e){!1===Ne&&(Ne=!0,typeof MessageChannel>`u`&&console.error(`This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.`));var t=new MessageChannel;t.port1.onmessage=e,t.port2.postMessage(void 0)}}return Pe(e)}function ie(e){return 1<e.length&&typeof AggregateError==`function`?AggregateError(e):e[0]}function ae(e,t){t!==Fe-1&&console.error(`You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. `),Fe=t}function D(e,t,n){var r=M.actQueue;if(r!==null)if(r.length!==0)try{oe(r),E(function(){return D(e,t,n)});return}catch(e){M.thrownErrors.push(e)}else M.actQueue=null;0<M.thrownErrors.length?(r=ie(M.thrownErrors),M.thrownErrors.length=0,n(r)):t(e)}function oe(e){if(!Ie){Ie=!0;var t=0;try{for(;t<e.length;t++){var n=e[t];do{M.didUsePromise=!1;var r=n(!1);if(r!==null){if(M.didUsePromise){e[t]=n,e.splice(0,t);return}n=r}else break}while(1)}e.length=0}catch(n){e.splice(0,t+1),M.thrownErrors.push(n)}finally{Ie=!1}}}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==`function`&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var se=Symbol.for(`react.transitional.element`),O=Symbol.for(`react.portal`),k=Symbol.for(`react.fragment`),ce=Symbol.for(`react.strict_mode`),le=Symbol.for(`react.profiler`),ue=Symbol.for(`react.consumer`),de=Symbol.for(`react.context`),fe=Symbol.for(`react.forward_ref`),pe=Symbol.for(`react.suspense`),me=Symbol.for(`react.suspense_list`),A=Symbol.for(`react.memo`),he=Symbol.for(`react.lazy`),ge=Symbol.for(`react.activity`),_e=Symbol.iterator,ve={},ye={isMounted:function(){return!1},enqueueForceUpdate:function(e){i(e,`forceUpdate`)},enqueueReplaceState:function(e){i(e,`replaceState`)},enqueueSetState:function(e){i(e,`setState`)}},j=Object.assign,be={};Object.freeze(be),a.prototype.isReactComponent={},a.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},a.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};var xe={isMounted:[`isMounted`,`Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.`],replaceState:[`replaceState`,`Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).`]};for(F in xe)xe.hasOwnProperty(F)&&n(F,xe[F]);o.prototype=a.prototype,xe=s.prototype=new o,xe.constructor=s,j(xe,a.prototype),xe.isPureReactComponent=!0;var Se=Array.isArray,Ce=Symbol.for(`react.client.reference`),M={H:null,A:null,T:null,S:null,actQueue:null,asyncTransitions:0,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1,didUsePromise:!1,thrownErrors:[],getCurrentStack:null,recentlyCreatedOwnerStacks:0},N=Object.prototype.hasOwnProperty,we=console.createTask?console.createTask:function(){return null};xe={react_stack_bottom_frame:function(e){return e()}};var Te,Ee,De={},Oe=xe.react_stack_bottom_frame.bind(xe,m)(),ke=we(f(m)),Ae=!1,je=/\/+/g,Me=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Ne=!1,Pe=null,Fe=0,P=!1,Ie=!1,Le=typeof queueMicrotask==`function`?function(e){queueMicrotask(function(){return queueMicrotask(e)})}:E;xe=Object.freeze({__proto__:null,c:function(e){return T().useMemoCache(e)}});var F={map:ne,forEach:function(e,t,n){ne(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ne(e,function(){t++}),t},toArray:function(e){return ne(e,function(e){return e})||[]},only:function(e){if(!x(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=ge,e.Children=F,e.Component=a,e.Fragment=k,e.Profiler=le,e.PureComponent=s,e.StrictMode=ce,e.Suspense=pe,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=M,e.__COMPILER_RUNTIME=xe,e.act=function(e){var t=M.actQueue,n=Fe;Fe++;var r=M.actQueue=t===null?[]:t,i=!1;try{var a=e()}catch(e){M.thrownErrors.push(e)}if(0<M.thrownErrors.length)throw ae(t,n),e=ie(M.thrownErrors),M.thrownErrors.length=0,e;if(typeof a==`object`&&a&&typeof a.then==`function`){var o=a;return Le(function(){i||P||(P=!0,console.error(`You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);`))}),{then:function(e,a){i=!0,o.then(function(i){if(ae(t,n),n===0){try{oe(r),E(function(){return D(i,e,a)})}catch(e){M.thrownErrors.push(e)}if(0<M.thrownErrors.length){var o=ie(M.thrownErrors);M.thrownErrors.length=0,a(o)}}else e(i)},function(e){ae(t,n),0<M.thrownErrors.length?(e=ie(M.thrownErrors),M.thrownErrors.length=0,a(e)):a(e)})}}}var s=a;if(ae(t,n),n===0&&(oe(r),r.length!==0&&Le(function(){i||P||(P=!0,console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"))}),M.actQueue=null),0<M.thrownErrors.length)throw e=ie(M.thrownErrors),M.thrownErrors.length=0,e;return{then:function(e,t){i=!0,n===0?(M.actQueue=r,E(function(){return D(s,e,t)})):e(s)}}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.captureOwnerStack=function(){var e=M.getCurrentStack;return e===null?null:e()},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=j({},e.props),i=e.key,a=e._owner;if(t!=null){var o;a:{if(N.call(t,`ref`)&&(o=Object.getOwnPropertyDescriptor(t,`ref`).get)&&o.isReactWarning){o=!1;break a}o=t.ref!==void 0}for(s in o&&(a=p()),h(t)&&(u(t.key),i=``+t.key),t)!N.call(t,s)||s===`key`||s===`__self`||s===`__source`||s===`ref`&&t.ref===void 0||(r[s]=t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){o=Array(s);for(var c=0;c<s;c++)o[c]=arguments[c+2];r.children=o}for(r=v(e.type,i,r,a,e._debugStack,e._debugTask),i=2;i<arguments.length;i++)b(arguments[i]);return r},e.createContext=function(e){return e={$$typeof:de,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:ue,_context:e},e._currentRenderer=null,e._currentRenderer2=null,e},e.createElement=function(e,t,n){for(var r=2;r<arguments.length;r++)b(arguments[r]);r={};var i=null;if(t!=null)for(c in Ee||!(`__self`in t)||`key`in t||(Ee=!0,console.warn(`Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform`)),h(t)&&(u(t.key),i=``+t.key),t)N.call(t,c)&&c!==`key`&&c!==`__self`&&c!==`__source`&&(r[c]=t[c]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];Object.freeze&&Object.freeze(o),r.children=o}if(e&&e.defaultProps)for(c in a=e.defaultProps,a)r[c]===void 0&&(r[c]=a[c]);i&&g(r,typeof e==`function`?e.displayName||e.name||`Unknown`:e);var c=1e4>M.recentlyCreatedOwnerStacks++;return v(e,i,r,p(),c?Error(`react-stack-top-frame`):Oe,c?we(f(e)):ke)},e.createRef=function(){var e={current:null};return Object.seal(e),e},e.forwardRef=function(e){e!=null&&e.$$typeof===A?console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof e==`function`?e.length!==0&&e.length!==2&&console.error(`forwardRef render functions accept exactly two parameters: props and ref. %s`,e.length===1?`Did you forget to use the ref parameter?`:`Any additional parameter will be undefined.`):console.error(`forwardRef requires a render function but was given %s.`,e===null?`null`:typeof e),e!=null&&e.defaultProps!=null&&console.error(`forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?`);var t={$$typeof:fe,render:e},n;return Object.defineProperty(t,`displayName`,{enumerable:!1,configurable:!0,get:function(){return n},set:function(t){n=t,e.name||e.displayName||(Object.defineProperty(e,`name`,{value:t}),e.displayName=t)}}),t},e.isValidElement=x,e.lazy=function(e){e={_status:-1,_result:e};var t={$$typeof:he,_payload:e,_init:w},n={name:`lazy`,start:-1,end:-1,value:null,owner:null,debugStack:Error(`react-stack-top-frame`),debugTask:console.createTask?console.createTask(`lazy()`):null};return e._ioInfo=n,t._debugInfo=[{awaited:n}],t},e.memo=function(e,t){e??console.error(`memo: The first argument must be a component. Instead received: %s`,e===null?`null`:typeof e),t={$$typeof:A,type:e,compare:t===void 0?null:t};var n;return Object.defineProperty(t,`displayName`,{enumerable:!1,configurable:!0,get:function(){return n},set:function(t){n=t,e.name||e.displayName||(Object.defineProperty(e,`name`,{value:t}),e.displayName=t)}}),t},e.startTransition=function(e){var t=M.T,n={};n._updatedFibers=new Set,M.T=n;try{var r=e(),i=M.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&(M.asyncTransitions++,r.then(re,re),r.then(c,Me))}catch(e){Me(e)}finally{t===null&&n._updatedFibers&&(e=n._updatedFibers.size,n._updatedFibers.clear(),10<e&&console.warn(`Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.`)),t!==null&&n.types!==null&&(t.types!==null&&t.types!==n.types&&console.error(`We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React.`),t.types=n.types),M.T=t}},e.unstable_useCacheRefresh=function(){return T().useCacheRefresh()},e.use=function(e){return T().use(e)},e.useActionState=function(e,t,n){return T().useActionState(e,t,n)},e.useCallback=function(e,t){return T().useCallback(e,t)},e.useContext=function(e){var t=T();return e.$$typeof===ue&&console.error(`Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?`),t.useContext(e)},e.useDebugValue=function(e,t){return T().useDebugValue(e,t)},e.useDeferredValue=function(e,t){return T().useDeferredValue(e,t)},e.useEffect=function(e,t){return e??console.warn(`React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?`),T().useEffect(e,t)},e.useEffectEvent=function(e){return T().useEffectEvent(e)},e.useId=function(){return T().useId()},e.useImperativeHandle=function(e,t,n){return T().useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return e??console.warn(`React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?`),T().useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return e??console.warn(`React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?`),T().useLayoutEffect(e,t)},e.useMemo=function(e,t){return T().useMemo(e,t)},e.useOptimistic=function(e,t){return T().useOptimistic(e,t)},e.useReducer=function(e,t,n){return T().useReducer(e,t,n)},e.useRef=function(e){return T().useRef(e)},e.useState=function(e){return T().useState(e)},e.useSyncExternalStore=function(e,t,n){return T().useSyncExternalStore(e,t,n)},e.useTransition=function(){return T().useTransition()},e.version=`19.2.4`,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==`function`&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()})),d=o(((e,t)=>{process.env.NODE_ENV===`production`?t.exports=l():t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,T());else{var t=n(l);t!==null&&ie(x,t.startTime-e)}}var ee=!1,te=-1,S=5,C=-1;function ne(){return g?!0:!(e.unstable_now()-C<S)}function w(){if(g=!1,ee){var t=e.unstable_now();C=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(te),te=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ie(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?T():ee=!1}}}var T;if(typeof y==`function`)T=function(){y(w)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,E=re.port2;re.port1.onmessage=w,T=function(){E.postMessage(null)}}else T=function(){_(w,0)};function ie(t,n){te=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):S=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(te),te=-1):h=!0,ie(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,T()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o((e=>{process.env.NODE_ENV!==`production`&&(function(){function t(){if(x=!1,C){var t=e.unstable_now();T=t;var n=!0;try{a:{y=!1,b&&(b=!1,te(ne),ne=-1),v=!0;var a=_;try{b:{for(o(t),g=r(p);g!==null&&!(g.expirationTime>t&&c());){var u=g.callback;if(typeof u==`function`){g.callback=null,_=g.priorityLevel;var d=u(g.expirationTime<=t);if(t=e.unstable_now(),typeof d==`function`){g.callback=d,o(t),n=!0;break b}g===r(p)&&i(p),o(t)}else i(p);g=r(p)}if(g!==null)n=!0;else{var f=r(m);f!==null&&l(s,f.startTime-t),n=!1}}break a}finally{g=null,_=a,v=!1}n=void 0}}finally{n?re():C=!1}}}function n(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,i=e[r];if(0<a(i,t))e[r]=t,e[n]=i,n=r;else break a}}function r(e){return e.length===0?null:e[0]}function i(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,i=e.length,o=i>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>a(c,n))l<i&&0>a(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<i&&0>a(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}function o(e){for(var t=r(m);t!==null;){if(t.callback===null)i(m);else if(t.startTime<=e)i(m),t.sortIndex=t.expirationTime,n(p,t);else break;t=r(m)}}function s(e){if(b=!1,o(e),!y)if(r(p)!==null)y=!0,C||(C=!0,re());else{var t=r(m);t!==null&&l(s,t.startTime-e)}}function c(){return x?!0:!(e.unstable_now()-T<w)}function l(t,n){ne=ee(function(){t(e.unstable_now())},n)}if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==`function`&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()),e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var u=performance;e.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();e.unstable_now=function(){return d.now()-f}}var p=[],m=[],h=1,g=null,_=3,v=!1,y=!1,b=!1,x=!1,ee=typeof setTimeout==`function`?setTimeout:null,te=typeof clearTimeout==`function`?clearTimeout:null,S=typeof setImmediate<`u`?setImmediate:null,C=!1,ne=-1,w=5,T=-1;if(typeof S==`function`)var re=function(){S(t)};else if(typeof MessageChannel<`u`){var E=new MessageChannel,ie=E.port2;E.port1.onmessage=t,re=function(){ie.postMessage(null)}}else re=function(){ee(t,0)};e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return _},e.unstable_next=function(e){switch(_){case 1:case 2:case 3:var t=3;break;default:t=_}var n=_;_=t;try{return e()}finally{_=n}},e.unstable_requestPaint=function(){x=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=_;_=e;try{return t()}finally{_=n}},e.unstable_scheduleCallback=function(t,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,t){case 1:var c=-1;break;case 2:c=250;break;case 5:c=1073741823;break;case 4:c=1e4;break;default:c=5e3}return c=a+c,t={id:h++,callback:i,priorityLevel:t,startTime:a,expirationTime:c,sortIndex:-1},a>o?(t.sortIndex=a,n(m,t),r(p)===null&&t===r(m)&&(b?(te(ne),ne=-1):b=!0,l(s,a-o))):(t.sortIndex=c,n(p,t),y||v||(y=!0,C||(C=!0,re()))),t},e.unstable_shouldYield=c,e.unstable_wrapCallback=function(e){var t=_;return function(){var n=_;_=t;try{return e.apply(this,arguments)}finally{_=n}}},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==`function`&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()})),m=o(((e,t)=>{process.env.NODE_ENV===`production`?t.exports=f():t.exports=p()})),h=o((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.4`})),g=o((e=>{process.env.NODE_ENV!==`production`&&(function(){function t(){}function n(e){return``+e}function r(e,t,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;try{n(i);var a=!1}catch{a=!0}return a&&(console.error(`The provided key is an unsupported type %s. This value must be coerced to a string before using it here.`,typeof Symbol==`function`&&Symbol.toStringTag&&i[Symbol.toStringTag]||i.constructor.name||`Object`),n(i)),{$$typeof:u,key:i==null?null:``+i,children:e,containerInfo:t,implementation:r}}function i(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}function a(e){return e===null?"`null`":e===void 0?"`undefined`":e===``?`an empty string`:`something with type "`+typeof e+`"`}function o(e){return e===null?"`null`":e===void 0?"`undefined`":e===``?`an empty string`:typeof e==`string`?JSON.stringify(e):typeof e==`number`?"`"+e+"`":`something with type "`+typeof e+`"`}function s(){var e=f.H;return e===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),e}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==`function`&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var c=d(),l={d:{f:t,r:function(){throw Error(`Invalid form element. requestFormReset must be passed a form that was rendered by React.`)},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},u=Symbol.for(`react.portal`),f=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;typeof Map==`function`&&Map.prototype!=null&&typeof Map.prototype.forEach==`function`&&typeof Set==`function`&&Set.prototype!=null&&typeof Set.prototype.clear==`function`&&typeof Set.prototype.forEach==`function`||console.error(`React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills`),e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(`Target container is not a DOM element.`);return r(e,t,null,n)},e.flushSync=function(e){var t=f.T,n=l.p;try{if(f.T=null,l.p=2,e)return e()}finally{f.T=t,l.p=n,l.d.f()&&console.error(`flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.`)}},e.preconnect=function(e,t){typeof e==`string`&&e?t!=null&&typeof t!=`object`?console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",o(t)):t!=null&&typeof t.crossOrigin!=`string`&&console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",a(t.crossOrigin)):console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",a(e)),typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,l.d.C(e,t))},e.prefetchDNS=function(e){if(typeof e!=`string`||!e)console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",a(e));else if(1<arguments.length){var t=arguments[1];typeof t==`object`&&t.hasOwnProperty(`crossOrigin`)?console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",o(t)):console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",o(t))}typeof e==`string`&&l.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&e?typeof t!=`object`||!t?console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",o(t)):t.as!==`style`&&t.as!==`script`&&console.error('ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',o(t.as)):console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",a(e)),typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=i(n,t.crossOrigin),s=typeof t.integrity==`string`?t.integrity:void 0,c=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?l.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:s,fetchPriority:c}):n===`script`&&l.d.X(e,{crossOrigin:r,integrity:s,fetchPriority:c,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){var n=``;if(typeof e==`string`&&e||(n+=" The `href` argument encountered was "+a(e)+`.`),t!==void 0&&typeof t!=`object`?n+=" The `options` argument encountered was "+a(t)+`.`:t&&`as`in t&&t.as!==`script`&&(n+=" The `as` option encountered was "+o(t.as)+`.`),n)console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",n);else switch(n=t&&typeof t.as==`string`?t.as:`script`,n){case`script`:break;default:n=o(n),console.error('ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',n,e)}typeof e==`string`&&(typeof t==`object`&&t?(t.as==null||t.as===`script`)&&(n=i(t.as,t.crossOrigin),l.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})):t??l.d.M(e))},e.preload=function(e,t){var n=``;if(typeof e==`string`&&e||(n+=" The `href` argument encountered was "+a(e)+`.`),typeof t!=`object`||!t?n+=" The `options` argument encountered was "+a(t)+`.`:typeof t.as==`string`&&t.as||(n+=" The `as` option encountered was "+a(t.as)+`.`),n&&console.error('ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',n),typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){n=t.as;var r=i(n,t.crossOrigin);l.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){var n=``;typeof e==`string`&&e||(n+=" The `href` argument encountered was "+a(e)+`.`),t!==void 0&&typeof t!=`object`?n+=" The `options` argument encountered was "+a(t)+`.`:t&&`as`in t&&typeof t.as!=`string`&&(n+=" The `as` option encountered was "+a(t.as)+`.`),n&&console.error('ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',n),typeof e==`string`&&(t?(n=i(t.as,t.crossOrigin),l.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})):l.d.m(e))},e.requestFormReset=function(e){l.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s().useFormState(e,t,n)},e.useFormStatus=function(){return s().useHostTransitionStatus()},e.version=`19.2.4`,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==`function`&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()})),_=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`)){if(process.env.NODE_ENV!==`production`)throw Error(`^_^`);try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}}process.env.NODE_ENV===`production`?(n(),t.exports=h()):t.exports=g()})),v=o((e=>{var t=m(),n=d(),r=_();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var p=Object.assign,h=Symbol.for(`react.element`),g=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),te=Symbol.for(`react.context`),S=Symbol.for(`react.forward_ref`),C=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),w=Symbol.for(`react.memo`),T=Symbol.for(`react.lazy`),re=Symbol.for(`react.activity`),E=Symbol.for(`react.memo_cache_sentinel`),ie=Symbol.iterator;function ae(e){return typeof e!=`object`||!e?null:(e=ie&&e[ie]||e[`@@iterator`],typeof e==`function`?e:null)}var D=Symbol.for(`react.client.reference`);function oe(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===D?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case C:return`Suspense`;case ne:return`SuspenseList`;case re:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case te:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case S:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case w:return t=e.displayName||null,t===null?oe(e.type)||`Memo`:t;case T:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}var se=Array.isArray,O=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},le=[],ue=-1;function de(e){return{current:e}}function fe(e){0>ue||(e.current=le[ue],le[ue]=null,ue--)}function pe(e,t){ue++,le[ue]=e.current,e.current=t}var me=de(null),A=de(null),he=de(null),ge=de(null);function _e(e,t){switch(pe(he,t),pe(A,e),pe(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Kd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Kd(t),e=qd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}fe(me),pe(me,e)}function ve(){fe(me),fe(A),fe(he)}function ye(e){e.memoizedState!==null&&pe(ge,e);var t=me.current,n=qd(t,e.type);t!==n&&(pe(A,e),pe(me,n))}function j(e){A.current===e&&(fe(me),fe(A)),ge.current===e&&(fe(ge),np._currentValue=ce)}var be,xe;function Se(e){if(be===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);be=t&&t[1]||``,xe=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+be+e+xe}var Ce=!1;function M(e,t){if(!e||Ce)return``;Ce=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ce=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Se(n):``}function N(e,t){switch(e.tag){case 26:case 27:case 5:return Se(e.type);case 16:return Se(`Lazy`);case 13:return e.child!==t&&t!==null?Se(`Suspense Fallback`):Se(`Suspense`);case 19:return Se(`SuspenseList`);case 0:case 15:return M(e.type,!1);case 11:return M(e.type.render,!1);case 1:return M(e.type,!0);case 31:return Se(`Activity`);default:return``}}function we(e){try{var t=``,n=null;do t+=N(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Te=Object.prototype.hasOwnProperty,Ee=t.unstable_scheduleCallback,De=t.unstable_cancelCallback,Oe=t.unstable_shouldYield,ke=t.unstable_requestPaint,Ae=t.unstable_now,je=t.unstable_getCurrentPriorityLevel,Me=t.unstable_ImmediatePriority,Ne=t.unstable_UserBlockingPriority,Pe=t.unstable_NormalPriority,Fe=t.unstable_LowPriority,P=t.unstable_IdlePriority,Ie=t.log,Le=t.unstable_setDisableYieldValue,F=null,I=null;function Re(e){if(typeof Ie==`function`&&Le(e),I&&typeof I.setStrictMode==`function`)try{I.setStrictMode(F,e)}catch{}}var ze=Math.clz32?Math.clz32:He,Be=Math.log,Ve=Math.LN2;function He(e){return e>>>=0,e===0?32:31-(Be(e)/Ve|0)|0}var Ue=256,We=262144,Ge=4194304;function Ke(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function L(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ke(n))):i=Ke(o):i=Ke(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ke(n))):i=Ke(o)):i=Ke(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function qe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Je(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ye(){var e=Ge;return Ge<<=1,!(Ge&62914560)&&(Ge=4194304),e}function Xe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ze(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Qe(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-ze(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&$e(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function $e(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-ze(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function et(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function tt(e,t){var n=t&-t;return n=n&42?1:nt(n),(n&(e.suspendedLanes|t))===0?n:0}function nt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function rt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function it(){var e=k.p;return e===0?(e=window.event,e===void 0?32:vp(e.type)):e}function at(e,t){var n=k.p;try{return k.p=e,t()}finally{k.p=n}}var ot=Math.random().toString(36).slice(2),st=`__reactFiber$`+ot,R=`__reactProps$`+ot,ct=`__reactContainer$`+ot,lt=`__reactEvents$`+ot,ut=`__reactListeners$`+ot,dt=`__reactHandles$`+ot,ft=`__reactResources$`+ot,pt=`__reactMarker$`+ot;function mt(e){delete e[st],delete e[R],delete e[lt],delete e[ut],delete e[dt]}function ht(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ct]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=gf(e);e!==null;){if(n=e[st])return n;e=gf(e)}return t}e=n,n=e.parentNode}return null}function gt(e){if(e=e[st]||e[ct]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function _t(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function vt(e){var t=e[ft];return t||=e[ft]={hoistableStyles:new Map,hoistableScripts:new Map},t}function yt(e){e[pt]=!0}var bt=new Set,xt={};function St(e,t){Ct(e,t),Ct(e+`Capture`,t)}function Ct(e,t){for(xt[e]=t,e=0;e<t.length;e++)bt.add(t[e])}var z=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),wt={},Tt={};function Et(e){return Te.call(Tt,e)?!0:Te.call(wt,e)?!1:z.test(e)?Tt[e]=!0:(wt[e]=!0,!1)}function Dt(e,t,n){if(Et(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Ot(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function kt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function At(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function jt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Mt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Nt(e){if(!e._valueTracker){var t=jt(e)?`checked`:`value`;e._valueTracker=Mt(e,t,``+e[t])}}function Pt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=jt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Ft(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var It=/[\n"\\]/g;function Lt(e){return e.replace(It,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Rt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+At(t)):e.value!==``+At(t)&&(e.value=``+At(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Bt(e,o,At(n)):Bt(e,o,At(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+At(s):e.removeAttribute(`name`)}function zt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Nt(e);return}n=n==null?``:``+At(n),t=t==null?n:``+At(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Nt(e)}function Bt(e,t,n){t===`number`&&Ft(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Vt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+At(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ht(e,t,n){if(t!=null&&(t=``+At(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+At(n)}function Ut(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(se(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=At(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Nt(e)}function Wt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Gt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Kt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Gt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function qt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Kt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Kt(e,o,t[o])}function Jt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Yt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Xt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zt(e){return Xt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function B(){}var Qt=null;function $t(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var en=null,tn=null;function nn(e){var t=gt(e);if(t&&(e=t.stateNode)){var n=e[R]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Rt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Lt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[R]||null;if(!a)throw Error(i(90));Rt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Pt(r)}break a;case`textarea`:Ht(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Vt(e,!!n.multiple,t,!1)}}}var rn=!1;function V(e,t,n){if(rn)return e(t,n);rn=!0;try{return e(t)}finally{if(rn=!1,(en!==null||tn!==null)&&(Su(),en&&(t=en,e=tn,tn=en=null,nn(t),e)))for(t=0;t<e.length;t++)nn(e[t])}}function H(e,t){var n=e.stateNode;if(n===null)return null;var r=n[R]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var an=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),on=!1;if(an)try{var sn={};Object.defineProperty(sn,`passive`,{get:function(){on=!0}}),window.addEventListener(`test`,sn,sn),window.removeEventListener(`test`,sn,sn)}catch{on=!1}var cn=null,ln=null,un=null;function dn(){if(un)return un;var e,t=ln,n=t.length,r,i=`value`in cn?cn.value:cn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return un=i.slice(e,1<r?1-r:void 0)}function fn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pn(){return!0}function mn(){return!1}function hn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?pn:mn,this.isPropagationStopped=mn,this}return p(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=pn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=pn)},persist:function(){},isPersistent:pn}),t}var gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_n=hn(gn),vn=p({},gn,{view:0,detail:0}),yn=hn(vn),bn,xn,Sn,Cn=p({},vn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Sn&&(Sn&&e.type===`mousemove`?(bn=e.screenX-Sn.screenX,xn=e.screenY-Sn.screenY):xn=bn=0,Sn=e),bn)},movementY:function(e){return`movementY`in e?e.movementY:xn}}),wn=hn(Cn),Tn=hn(p({},Cn,{dataTransfer:0})),En=hn(p({},vn,{relatedTarget:0})),Dn=hn(p({},gn,{animationName:0,elapsedTime:0,pseudoElement:0})),On=hn(p({},gn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),kn=hn(p({},gn,{data:0})),An={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},jn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Mn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Nn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mn[e])?!!t[e]:!1}function Pn(){return Nn}var Fn=hn(p({},vn,{key:function(e){if(e.key){var t=An[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=fn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?jn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pn,charCode:function(e){return e.type===`keypress`?fn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?fn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),In=hn(p({},Cn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Ln=hn(p({},vn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pn})),Rn=hn(p({},gn,{propertyName:0,elapsedTime:0,pseudoElement:0})),zn=hn(p({},Cn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Bn=hn(p({},gn,{newState:0,oldState:0})),Vn=[9,13,27,32],Hn=an&&`CompositionEvent`in window,Un=null;an&&`documentMode`in document&&(Un=document.documentMode);var Wn=an&&`TextEvent`in window&&!Un,Gn=an&&(!Hn||Un&&8<Un&&11>=Un),Kn=` `,qn=!1;function Jn(e,t){switch(e){case`keyup`:return Vn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Yn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Xn=!1;function Zn(e,t){switch(e){case`compositionend`:return Yn(t);case`keypress`:return t.which===32?(qn=!0,Kn):null;case`textInput`:return e=t.data,e===Kn&&qn?null:e;default:return null}}function Qn(e,t){if(Xn)return e===`compositionend`||!Hn&&Jn(e,t)?(e=dn(),un=ln=cn=null,Xn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Gn&&t.locale!==`ko`?null:t.data;default:return null}}var $n={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function er(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!$n[e.type]:t===`textarea`}function tr(e,t,n,r){en?tn?tn.push(r):tn=[r]:en=r,t=Ad(t,`onChange`),0<t.length&&(n=new _n(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var nr=null,rr=null;function ir(e){Sd(e,0)}function ar(e){if(Pt(_t(e)))return e}function or(e,t){if(e===`change`)return t}var sr=!1;if(an){var cr;if(an){var U=`oninput`in document;if(!U){var lr=document.createElement(`div`);lr.setAttribute(`oninput`,`return;`),U=typeof lr.oninput==`function`}cr=U}else cr=!1;sr=cr&&(!document.documentMode||9<document.documentMode)}function ur(){nr&&(nr.detachEvent(`onpropertychange`,dr),rr=nr=null)}function dr(e){if(e.propertyName===`value`&&ar(rr)){var t=[];tr(t,rr,e,$t(e)),V(ir,t)}}function fr(e,t,n){e===`focusin`?(ur(),nr=t,rr=n,nr.attachEvent(`onpropertychange`,dr)):e===`focusout`&&ur()}function pr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return ar(rr)}function mr(e,t){if(e===`click`)return ar(t)}function hr(e,t){if(e===`input`||e===`change`)return ar(t)}function gr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var _r=typeof Object.is==`function`?Object.is:gr;function vr(e,t){if(_r(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Te.call(t,i)||!_r(e[i],t[i]))return!1}return!0}function yr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function br(e,t){var n=yr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=yr(n)}}function xr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Sr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ft(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ft(e.document)}return t}function Cr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var wr=an&&`documentMode`in document&&11>=document.documentMode,Tr=null,Er=null,Dr=null,Or=!1;function kr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Or||Tr==null||Tr!==Ft(r)||(r=Tr,`selectionStart`in r&&Cr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dr&&vr(Dr,r)||(Dr=r,r=Ad(Er,`onSelect`),0<r.length&&(t=new _n(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Tr)))}function Ar(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var jr={animationend:Ar(`Animation`,`AnimationEnd`),animationiteration:Ar(`Animation`,`AnimationIteration`),animationstart:Ar(`Animation`,`AnimationStart`),transitionrun:Ar(`Transition`,`TransitionRun`),transitionstart:Ar(`Transition`,`TransitionStart`),transitioncancel:Ar(`Transition`,`TransitionCancel`),transitionend:Ar(`Transition`,`TransitionEnd`)},Mr={},Nr={};an&&(Nr=document.createElement(`div`).style,`AnimationEvent`in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),`TransitionEvent`in window||delete jr.transitionend.transition);function Pr(e){if(Mr[e])return Mr[e];if(!jr[e])return e;var t=jr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Nr)return Mr[e]=t[n];return e}var Fr=Pr(`animationend`),Ir=Pr(`animationiteration`),Lr=Pr(`animationstart`),Rr=Pr(`transitionrun`),zr=Pr(`transitionstart`),Br=Pr(`transitioncancel`),Vr=Pr(`transitionend`),Hr=new Map,Ur=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Ur.push(`scrollEnd`);function Wr(e,t){Hr.set(e,t),St(t,[e])}var W=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Gr=[],Kr=0,qr=0;function Jr(){for(var e=Kr,t=qr=Kr=0;t<e;){var n=Gr[t];Gr[t++]=null;var r=Gr[t];Gr[t++]=null;var i=Gr[t];Gr[t++]=null;var a=Gr[t];if(Gr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Qr(n,i,a)}}function Yr(e,t,n,r){Gr[Kr++]=e,Gr[Kr++]=t,Gr[Kr++]=n,Gr[Kr++]=r,qr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Xr(e,t,n,r){return Yr(e,t,n,r),$r(e)}function Zr(e,t){return Yr(e,null,null,t),$r(e)}function Qr(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-ze(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function $r(e){if(50<pu)throw pu=0,mu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ei={};function ti(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(e,t,n,r){return new ti(e,t,n,r)}function ri(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ii(e,t){var n=e.alternate;return n===null?(n=ni(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ai(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function oi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ri(e)&&(s=1);else if(typeof e==`string`)s=qf(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case re:return e=ni(31,n,t,a),e.elementType=re,e.lanes=o,e;case y:return si(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=ni(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case C:return e=ni(13,n,t,a),e.elementType=C,e.lanes=o,e;case ne:return e=ni(19,n,t,a),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case te:s=10;break a;case ee:s=9;break a;case S:s=11;break a;case w:s=14;break a;case T:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ni(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function si(e,t,n,r){return e=ni(7,e,r,t),e.lanes=n,e}function ci(e,t,n){return e=ni(6,e,null,t),e.lanes=n,e}function li(e){var t=ni(18,null,null,0);return t.stateNode=e,t}function ui(e,t,n){return t=ni(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var di=new WeakMap;function fi(e,t){if(typeof e==`object`&&e){var n=di.get(e);return n===void 0?(t={value:e,source:t,stack:we(t)},di.set(e,t),t):n}return{value:e,source:t,stack:we(t)}}var pi=[],mi=0,hi=null,gi=0,_i=[],vi=0,yi=null,bi=1,xi=``;function Si(e,t){pi[mi++]=gi,pi[mi++]=hi,hi=e,gi=t}function Ci(e,t,n){_i[vi++]=bi,_i[vi++]=xi,_i[vi++]=yi,yi=e;var r=bi;e=xi;var i=32-ze(r)-1;r&=~(1<<i),n+=1;var a=32-ze(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,bi=1<<32-ze(t)+i|n<<i|r,xi=a+e}else bi=1<<a|n<<i|r,xi=e}function wi(e){e.return!==null&&(Si(e,1),Ci(e,1,0))}function Ti(e){for(;e===hi;)hi=pi[--mi],pi[mi]=null,gi=pi[--mi],pi[mi]=null;for(;e===yi;)yi=_i[--vi],_i[vi]=null,xi=_i[--vi],_i[vi]=null,bi=_i[--vi],_i[vi]=null}function Ei(e,t){_i[vi++]=bi,_i[vi++]=xi,_i[vi++]=yi,bi=t.id,xi=t.overflow,yi=e}var G=null,Di=null,Oi=!1,ki=null,Ai=!1,ji=Error(i(519));function Mi(e){throw Ri(fi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),ji}function Ni(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[st]=e,t[R]=r,n){case`dialog`:Cd(`cancel`,t),Cd(`close`,t);break;case`iframe`:case`object`:case`embed`:Cd(`load`,t);break;case`video`:case`audio`:for(n=0;n<bd.length;n++)Cd(bd[n],t);break;case`source`:Cd(`error`,t);break;case`img`:case`image`:case`link`:Cd(`error`,t),Cd(`load`,t);break;case`details`:Cd(`toggle`,t);break;case`input`:Cd(`invalid`,t),zt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Cd(`invalid`,t);break;case`textarea`:Cd(`invalid`,t),Ut(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Id(t.textContent,n)?(r.popover!=null&&(Cd(`beforetoggle`,t),Cd(`toggle`,t)),r.onScroll!=null&&Cd(`scroll`,t),r.onScrollEnd!=null&&Cd(`scrollend`,t),r.onClick!=null&&(t.onclick=B),t=!0):t=!1,t||Mi(e,!0)}function Pi(e){for(G=e.return;G;)switch(G.tag){case 5:case 31:case 13:Ai=!1;return;case 27:case 3:Ai=!0;return;default:G=G.return}}function Fi(e){if(e!==G)return!1;if(!Oi)return Pi(e),Oi=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Jd(e.type,e.memoizedProps)),n=!n),n&&Di&&Mi(e),Pi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Di=hf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Di=hf(e)}else t===27?(t=Di,nf(e.type)?(e=mf,mf=null,Di=e):Di=t):Di=G?pf(e.stateNode.nextSibling):null;return!0}function Ii(){Di=G=null,Oi=!1}function Li(){var e=ki;return e!==null&&($l===null?$l=e:$l.push.apply($l,e),ki=null),e}function Ri(e){ki===null?ki=[e]:ki.push(e)}var zi=de(null),Bi=null,Vi=null;function Hi(e,t,n){pe(zi,t._currentValue),t._currentValue=n}function Ui(e){e._currentValue=zi.current,fe(zi)}function Wi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Gi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Wi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Wi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Ki(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;_r(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ge.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[np]:e.push(np))}a=a.return}e!==null&&Gi(t,e,n,r),t.flags|=262144}function qi(e){for(e=e.firstContext;e!==null;){if(!_r(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ji(e){Bi=e,Vi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function K(e){return Xi(Bi,e)}function Yi(e,t){return Bi===null&&Ji(e),Xi(e,t)}function Xi(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Vi===null){if(e===null)throw Error(i(308));Vi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Vi=Vi.next=t;return n}var Zi=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Qi=t.unstable_scheduleCallback,$i=t.unstable_NormalPriority,ea={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ta(){return{controller:new Zi,data:new Map,refCount:0}}function na(e){e.refCount--,e.refCount===0&&Qi($i,function(){e.controller.abort()})}var ra=null,q=0,J=0,ia=null;function aa(e,t){if(ra===null){var n=ra=[];q=0,J=md(),ia={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return q++,t.then(oa,oa),t}function oa(){if(--q===0&&ra!==null){ia!==null&&(ia.status=`fulfilled`);var e=ra;ra=null,J=0,ia=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function sa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ca=O.S;O.S=function(e,t){nu=Ae(),typeof t==`object`&&t&&typeof t.then==`function`&&aa(e,t),ca!==null&&ca(e,t)};var la=de(null);function ua(){var e=la.current;return e===null?Ll.pooledCache:e}function da(e,t){t===null?pe(la,la.current):pe(la,t.pool)}function fa(){var e=ua();return e===null?null:{parent:ea._currentValue,pool:e}}var pa=Error(i(460)),ma=Error(i(474)),ha=Error(i(542)),ga={then:function(){}};function _a(e){return e=e.status,e===`fulfilled`||e===`rejected`}function va(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(B,B),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Sa(e),e;default:if(typeof t.status==`string`)t.then(B,B);else{if(e=Ll,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Sa(e),e}throw ba=t,pa}}function ya(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ba=e,pa):e}}var ba=null;function xa(){if(ba===null)throw Error(i(459));var e=ba;return ba=null,e}function Sa(e){if(e===pa||e===ha)throw Error(i(483))}var Ca=null,wa=0;function Ta(e){var t=wa;return wa+=1,Ca===null&&(Ca=[]),va(Ca,e,t)}function Ea(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Da(e,t){throw t.$$typeof===h?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Oa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=ii(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=ci(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===T&&ya(i)===t.type)?(t=a(t,n.props),Ea(t,n),t.return=e,t):(t=oi(n.type,n.key,n.props,null,e.mode,r),Ea(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=ui(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=si(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=ci(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case g:return n=oi(t.type,t.key,t.props,null,e.mode,n),Ea(n,t),n.return=e,n;case v:return t=ui(t,e.mode,n),t.return=e,t;case T:return t=ya(t),f(e,t,n)}if(se(t)||ae(t))return t=si(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ta(t),n);if(t.$$typeof===te)return f(e,Yi(e,t),n);Da(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case g:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case T:return n=ya(n),p(e,t,n,r)}if(se(n)||ae(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ta(n),r);if(n.$$typeof===te)return p(e,t,Yi(e,n),r);Da(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case g:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case T:return r=ya(r),m(e,t,n,r,i)}if(se(r)||ae(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ta(r),i);if(r.$$typeof===te)return m(e,t,n,Yi(t,r),i);Da(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),Oi&&Si(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return Oi&&Si(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),Oi&&Si(i,h),l}function _(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),Oi&&Si(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return Oi&&Si(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),Oi&&Si(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case g:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===T&&ya(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ea(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=si(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=oi(o.type,o.key,o.props,null,e.mode,c),Ea(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=ui(o,e.mode,c),c.return=e,e=c}return s(e);case T:return o=ya(o),b(e,r,o,c)}if(se(o))return h(e,r,o,c);if(ae(o)){if(l=ae(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),_(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ta(o),c);if(o.$$typeof===te)return b(e,r,Yi(e,o),c);Da(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=ci(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{wa=0;var i=b(e,t,n,r);return Ca=null,i}catch(t){if(t===pa||t===ha)throw t;var a=ni(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var ka=Oa(!0),Aa=Oa(!1),ja=!1;function Ma(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Na(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Fa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Il&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=$r(e),Qr(e,null,n),t}return Yr(e,r,t,n),$r(e)}function Ia(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,et(e,n)}}function La(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ra=!1;function za(){if(Ra){var e=ia;if(e!==null)throw e}}function Ba(e,t,n,r){Ra=!1;var i=e.updateQueue;ja=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,m=f!==s.lane;if(m?(zl&f)===f:(r&f)===f){f!==0&&f===J&&(Ra=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=p({},d,f);break a;case 2:ja=!0}}f=s.callback,f!==null&&(e.flags|=64,m&&(e.flags|=8192),m=i.callbacks,m===null?i.callbacks=[f]:m.push(f))}else m={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=m,c=d):u=u.next=m,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),ql|=o,e.lanes=o,e.memoizedState=d}}function Va(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Ha(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Va(n[e],t)}var Ua=de(null),Wa=de(0);function Ga(e,t){e=Gl,pe(Wa,e),pe(Ua,t),Gl=e|t.baseLanes}function Ka(){pe(Wa,Gl),pe(Ua,Ua.current)}function qa(){Gl=Wa.current,fe(Ua),fe(Wa)}var Ja=de(null),Ya=null;function Xa(e){var t=e.alternate;pe(to,to.current&1),pe(Ja,e),Ya===null&&(t===null||Ua.current!==null||t.memoizedState!==null)&&(Ya=e)}function Za(e){pe(to,to.current),pe(Ja,e),Ya===null&&(Ya=e)}function Qa(e){e.tag===22?(pe(to,to.current),pe(Ja,e),Ya===null&&(Ya=e)):$a(e)}function $a(){pe(to,to.current),pe(Ja,Ja.current)}function eo(e){fe(Ja),Ya===e&&(Ya=null),fe(to)}var to=de(0);function no(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||uf(n)||df(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ro=0,io=null,ao=null,oo=null,so=!1,co=!1,lo=!1,uo=0,fo=0,po=null,mo=0;function ho(){throw Error(i(321))}function go(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_r(e[n],t[n]))return!1;return!0}function _o(e,t,n,r,i,a){return ro=a,io=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?Ps:Fs,lo=!1,a=n(r,i),lo=!1,co&&(a=yo(t,n,r,i)),vo(e),a}function vo(e){O.H=Ns;var t=ao!==null&&ao.next!==null;if(ro=0,oo=ao=io=null,so=!1,fo=0,po=null,t)throw Error(i(300));e===null||Qs||(e=e.dependencies,e!==null&&qi(e)&&(Qs=!0))}function yo(e,t,n,r){io=e;var a=0;do{if(co&&(po=null),fo=0,co=!1,25<=a)throw Error(i(301));if(a+=1,oo=ao=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}O.H=Is,o=t(n,r)}while(co);return o}function bo(){var e=O.H,t=e.useState()[0];return t=typeof t.then==`function`?Do(t):t,e=e.useState()[0],(ao===null?null:ao.memoizedState)!==e&&(io.flags|=1024),t}function xo(){var e=uo!==0;return uo=0,e}function So(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Co(e){if(so){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}so=!1}ro=0,oo=ao=io=null,co=!1,fo=uo=0,po=null}function wo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oo===null?io.memoizedState=oo=e:oo=oo.next=e,oo}function To(){if(ao===null){var e=io.alternate;e=e===null?null:e.memoizedState}else e=ao.next;var t=oo===null?io.memoizedState:oo.next;if(t!==null)oo=t,ao=e;else{if(e===null)throw io.alternate===null?Error(i(467)):Error(i(310));ao=e,e={memoizedState:ao.memoizedState,baseState:ao.baseState,baseQueue:ao.baseQueue,queue:ao.queue,next:null},oo===null?io.memoizedState=oo=e:oo=oo.next=e}return oo}function Eo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Do(e){var t=fo;return fo+=1,po===null&&(po=[]),e=va(po,e,t),t=io,(oo===null?t.memoizedState:oo.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?Ps:Fs),e}function Oo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Do(e);if(e.$$typeof===te)return K(e)}throw Error(i(438,String(e)))}function ko(e){var t=null,n=io.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=io.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Eo(),io.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=E;return t.index++,n}function Ao(e,t){return typeof t==`function`?t(e):t}function jo(e){return Mo(To(),ao,e)}function Mo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(ro&f)===f:(zl&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===J&&(d=!0);else if((ro&p)===p){u=u.next,p===J&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,io.lanes|=p,ql|=p;f=u.action,lo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,io.lanes|=f,ql|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!_r(o,e.memoizedState)&&(Qs=!0,d&&(n=ia,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function No(e){var t=To(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);_r(o,t.memoizedState)||(Qs=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Po(e,t,n){var r=io,a=To(),o=Oi;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!_r((ao||a).memoizedState,n);if(s&&(a.memoizedState=n,Qs=!0),a=a.queue,as(Lo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||oo!==null&&oo.memoizedState.tag&1){if(r.flags|=2048,es(9,{destroy:void 0},Io.bind(null,r,a,n,t),null),Ll===null)throw Error(i(349));o||ro&127||Fo(r,t,n)}return n}function Fo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=io.updateQueue,t===null?(t=Eo(),io.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Io(e,t,n,r){t.value=n,t.getSnapshot=r,Ro(t)&&zo(e)}function Lo(e,t,n){return n(function(){Ro(t)&&zo(e)})}function Ro(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_r(e,n)}catch{return!0}}function zo(e){var t=Zr(e,2);t!==null&&_u(t,e,2)}function Bo(e){var t=wo();if(typeof e==`function`){var n=e;if(e=n(),lo){Re(!0);try{n()}finally{Re(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:e},t}function Vo(e,t,n,r){return e.baseState=n,Mo(e,ao,typeof r==`function`?r:Ao)}function Ho(e,t,n,r,a){if(As(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};O.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Uo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Uo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=O.T,o={};O.T=o;try{var s=n(i,r),c=O.S;c!==null&&c(o,s),Wo(e,t,s)}catch(n){Ko(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),O.T=a}}else try{a=n(i,r),Wo(e,t,a)}catch(n){Ko(e,t,n)}}function Wo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Go(e,t,n)},function(n){return Ko(e,t,n)}):Go(e,t,n)}function Go(e,t,n){t.status=`fulfilled`,t.value=n,qo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Uo(e,n)))}function Ko(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,qo(t),t=t.next;while(t!==r)}e.action=null}function qo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Jo(e,t){return t}function Yo(e,t){if(Oi){var n=Ll.formState;if(n!==null){a:{var r=io;if(Oi){if(Di){b:{for(var i=Di,a=Ai;i.nodeType!==8;){if(!a){i=null;break b}if(i=pf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Di=pf(i.nextSibling),r=i.data===`F!`;break a}}Mi(r)}r=!1}r&&(t=n[0])}}return n=wo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jo,lastRenderedState:t},n.queue=r,n=Ds.bind(null,io,r),r.dispatch=n,r=Bo(!1),a=ks.bind(null,io,!1,r.queue),r=wo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Ho.bind(null,io,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Xo(e){return Zo(To(),ao,e)}function Zo(e,t,n){if(t=Mo(e,t,Jo)[0],e=jo(Ao)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Do(t)}catch(e){throw e===pa?ha:e}else r=t;t=To();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(io.flags|=2048,es(9,{destroy:void 0},Qo.bind(null,i,n),null)),[r,a,e]}function Qo(e,t){e.action=t}function $o(e){var t=To(),n=ao;if(n!==null)return Zo(t,n,e);To(),t=t.memoizedState,n=To();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function es(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=io.updateQueue,t===null&&(t=Eo(),io.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ts(){return To().memoizedState}function ns(e,t,n,r){var i=wo();io.flags|=e,i.memoizedState=es(1|t,{destroy:void 0},n,r===void 0?null:r)}function rs(e,t,n,r){var i=To();r=r===void 0?null:r;var a=i.memoizedState.inst;ao!==null&&r!==null&&go(r,ao.memoizedState.deps)?i.memoizedState=es(t,a,n,r):(io.flags|=e,i.memoizedState=es(1|t,a,n,r))}function is(e,t){ns(8390656,8,e,t)}function as(e,t){rs(2048,8,e,t)}function os(e){io.flags|=4;var t=io.updateQueue;if(t===null)t=Eo(),io.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ss(e){var t=To().memoizedState;return os({ref:t,nextImpl:e}),function(){if(Il&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function cs(e,t){return rs(4,2,e,t)}function ls(e,t){return rs(4,4,e,t)}function us(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ds(e,t,n){n=n==null?null:n.concat([e]),rs(4,4,us.bind(null,t,e),n)}function fs(){}function ps(e,t){var n=To();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&go(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ms(e,t){var n=To();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&go(t,r[1]))return r[0];if(r=e(),lo){Re(!0);try{e()}finally{Re(!1)}}return n.memoizedState=[r,t],r}function hs(e,t,n){return n===void 0||ro&1073741824&&!(zl&261930)?e.memoizedState=t:(e.memoizedState=n,e=gu(),io.lanes|=e,ql|=e,n)}function gs(e,t,n,r){return _r(n,t)?n:Ua.current===null?!(ro&42)||ro&1073741824&&!(zl&261930)?(Qs=!0,e.memoizedState=n):(e=gu(),io.lanes|=e,ql|=e,t):(e=hs(e,n,r),_r(e,t)||(Qs=!0),e)}function _s(e,t,n,r,i){var a=k.p;k.p=a!==0&&8>a?a:8;var o=O.T,s={};O.T=s,ks(e,!1,t,n);try{var c=i(),l=O.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Os(e,t,sa(c,r),hu(e)):Os(e,t,r,hu(e))}catch(n){Os(e,t,{then:function(){},status:`rejected`,reason:n},hu())}finally{k.p=a,o!==null&&s.types!==null&&(o.types=s.types),O.T=o}}function vs(){}function ys(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=bs(e).queue;_s(e,a,t,ce,n===null?vs:function(){return xs(e),n(r)})}function bs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:ce},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function xs(e){var t=bs(e);t.next===null&&(t=e.alternate.memoizedState),Os(e,t.next.queue,{},hu())}function Ss(){return K(np)}function Cs(){return To().memoizedState}function ws(){return To().memoizedState}function Ts(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=hu();e=Pa(n);var r=Fa(t,e,n);r!==null&&(_u(r,t,n),Ia(r,t,n)),t={cache:ta()},e.payload=t;return}t=t.return}}function Es(e,t,n){var r=hu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},As(e)?js(t,n):(n=Xr(e,t,n,r),n!==null&&(_u(n,e,r),Ms(n,t,r)))}function Ds(e,t,n){Os(e,t,n,hu())}function Os(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(As(e))js(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,_r(s,o))return Yr(e,t,i,0),Ll===null&&Jr(),!1}catch{}if(n=Xr(e,t,i,r),n!==null)return _u(n,e,r),Ms(n,t,r),!0}return!1}function ks(e,t,n,r){if(r={lane:2,revertLane:md(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},As(e)){if(t)throw Error(i(479))}else t=Xr(e,n,r,2),t!==null&&_u(t,e,2)}function As(e){var t=e.alternate;return e===io||t!==null&&t===io}function js(e,t){co=so=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ms(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,et(e,n)}}var Ns={readContext:K,use:Oo,useCallback:ho,useContext:ho,useEffect:ho,useImperativeHandle:ho,useLayoutEffect:ho,useInsertionEffect:ho,useMemo:ho,useReducer:ho,useRef:ho,useState:ho,useDebugValue:ho,useDeferredValue:ho,useTransition:ho,useSyncExternalStore:ho,useId:ho,useHostTransitionStatus:ho,useFormState:ho,useActionState:ho,useOptimistic:ho,useMemoCache:ho,useCacheRefresh:ho};Ns.useEffectEvent=ho;var Ps={readContext:K,use:Oo,useCallback:function(e,t){return wo().memoizedState=[e,t===void 0?null:t],e},useContext:K,useEffect:is,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ns(4194308,4,us.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ns(4194308,4,e,t)},useInsertionEffect:function(e,t){ns(4,2,e,t)},useMemo:function(e,t){var n=wo();t=t===void 0?null:t;var r=e();if(lo){Re(!0);try{e()}finally{Re(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=wo();if(n!==void 0){var i=n(t);if(lo){Re(!0);try{n(t)}finally{Re(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Es.bind(null,io,e),[r.memoizedState,e]},useRef:function(e){var t=wo();return e={current:e},t.memoizedState=e},useState:function(e){e=Bo(e);var t=e.queue,n=Ds.bind(null,io,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:fs,useDeferredValue:function(e,t){return hs(wo(),e,t)},useTransition:function(){var e=Bo(!1);return e=_s.bind(null,io,e.queue,!0,!1),wo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=io,a=wo();if(Oi){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Ll===null)throw Error(i(349));zl&127||Fo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,is(Lo.bind(null,r,o,e),[e]),r.flags|=2048,es(9,{destroy:void 0},Io.bind(null,r,o,n,t),null),n},useId:function(){var e=wo(),t=Ll.identifierPrefix;if(Oi){var n=xi,r=bi;n=(r&~(1<<32-ze(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=uo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=mo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ss,useFormState:Yo,useActionState:Yo,useOptimistic:function(e){var t=wo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ks.bind(null,io,!0,n),n.dispatch=t,[e,t]},useMemoCache:ko,useCacheRefresh:function(){return wo().memoizedState=Ts.bind(null,io)},useEffectEvent:function(e){var t=wo(),n={impl:e};return t.memoizedState=n,function(){if(Il&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Fs={readContext:K,use:Oo,useCallback:ps,useContext:K,useEffect:as,useImperativeHandle:ds,useInsertionEffect:cs,useLayoutEffect:ls,useMemo:ms,useReducer:jo,useRef:ts,useState:function(){return jo(Ao)},useDebugValue:fs,useDeferredValue:function(e,t){return gs(To(),ao.memoizedState,e,t)},useTransition:function(){var e=jo(Ao)[0],t=To().memoizedState;return[typeof e==`boolean`?e:Do(e),t]},useSyncExternalStore:Po,useId:Cs,useHostTransitionStatus:Ss,useFormState:Xo,useActionState:Xo,useOptimistic:function(e,t){return Vo(To(),ao,e,t)},useMemoCache:ko,useCacheRefresh:ws};Fs.useEffectEvent=ss;var Is={readContext:K,use:Oo,useCallback:ps,useContext:K,useEffect:as,useImperativeHandle:ds,useInsertionEffect:cs,useLayoutEffect:ls,useMemo:ms,useReducer:No,useRef:ts,useState:function(){return No(Ao)},useDebugValue:fs,useDeferredValue:function(e,t){var n=To();return ao===null?hs(n,e,t):gs(n,ao.memoizedState,e,t)},useTransition:function(){var e=No(Ao)[0],t=To().memoizedState;return[typeof e==`boolean`?e:Do(e),t]},useSyncExternalStore:Po,useId:Cs,useHostTransitionStatus:Ss,useFormState:$o,useActionState:$o,useOptimistic:function(e,t){var n=To();return ao===null?(n.baseState=e,[e,n.queue.dispatch]):Vo(n,ao,e,t)},useMemoCache:ko,useCacheRefresh:ws};Is.useEffectEvent=ss;function Ls(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:p({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Rs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=hu(),i=Pa(r);i.payload=t,n!=null&&(i.callback=n),t=Fa(e,i,r),t!==null&&(_u(t,e,r),Ia(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=hu(),i=Pa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Fa(e,i,r),t!==null&&(_u(t,e,r),Ia(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=hu(),r=Pa(n);r.tag=2,t!=null&&(r.callback=t),t=Fa(e,r,n),t!==null&&(_u(t,e,n),Ia(t,e,n))}};function zs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!vr(n,r)||!vr(i,a):!0}function Bs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Rs.enqueueReplaceState(t,t.state,null)}function Vs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=p({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Hs(e){W(e)}function Us(e){console.error(e)}function Ws(e){W(e)}function Gs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Ks(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function qs(e,t,n){return n=Pa(n),n.tag=3,n.payload={element:null},n.callback=function(){Gs(e,t)},n}function Js(e){return e=Pa(e),e.tag=3,e}function Ys(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Ks(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Ks(t,n,r),typeof i!=`function`&&(au===null?au=new Set([this]):au.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Xs(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Ki(t,n,a,!0),n=Ja.current,n!==null){switch(n.tag){case 31:case 13:return Ya===null?ku():n.alternate===null&&Kl===0&&(Kl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ga?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Ju(e,r,a)),!1;case 22:return n.flags|=65536,r===ga?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Ju(e,r,a)),!1}throw Error(i(435,n.tag))}return Ju(e,r,a),ku(),!1}if(Oi)return t=Ja.current,t===null?(r!==ji&&(t=Error(i(423),{cause:r}),Ri(fi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=fi(r,n),a=qs(e.stateNode,r,a),La(e,a),Kl!==4&&(Kl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==ji&&(e=Error(i(422),{cause:r}),Ri(fi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=fi(o,n),Ql===null?Ql=[o]:Ql.push(o),Kl!==4&&(Kl=2),t===null)return!0;r=fi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=qs(n.stateNode,r,e),La(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(au===null||!au.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Js(a),Ys(a,e,n,r),La(n,a),!1}n=n.return}while(n!==null);return!1}var Zs=Error(i(461)),Qs=!1;function $s(e,t,n,r){t.child=e===null?Aa(t,null,n,r):ka(t,e.child,n,r)}function ec(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Ji(t),r=_o(e,t,n,o,a,i),s=xo(),e!==null&&!Qs?(So(e,t,i),wc(e,t,i)):(Oi&&s&&wi(t),t.flags|=1,$s(e,t,r,i),t.child)}function tc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ri(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,nc(e,t,a,r,i)):(e=oi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Tc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?vr:n,n(o,r)&&e.ref===t.ref)return wc(e,t,i)}return t.flags|=1,e=ii(a,r),e.ref=t.ref,e.return=t,t.child=e}function nc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(vr(a,r)&&e.ref===t.ref)if(Qs=!1,t.pendingProps=r=a,Tc(e,i))e.flags&131072&&(Qs=!0);else return t.lanes=e.lanes,wc(e,t,i)}return uc(e,t,n,r,i)}function rc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return ac(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&da(t,a===null?null:a.cachePool),a===null?Ka():Ga(t,a),Qa(t);else return r=t.lanes=536870912,ac(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&da(t,null),Ka(),$a(t)):(da(t,a.cachePool),Ga(t,a),$a(t),t.memoizedState=null);return $s(e,t,i,n),t.child}function ic(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ac(e,t,n,r,i){var a=ua();return a=a===null?null:{parent:ea._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&da(t,null),Ka(),Qa(t),e!==null&&Ki(e,t,r,!0),t.childLanes=i,null}function oc(e,t){return t=yc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function sc(e,t,n){return ka(t,e.child,null,n),e=oc(t,t.pendingProps),e.flags|=2,eo(t),t.memoizedState=null,e}function cc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(Oi){if(r.mode===`hidden`)return e=oc(t,r),t.lanes=536870912,ic(null,e);if(Za(t),(e=Di)?(e=lf(e,Ai),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:yi===null?null:{id:bi,overflow:xi},retryLane:536870912,hydrationErrors:null},n=li(e),n.return=t,t.child=n,G=t,Di=null)):e=null,e===null)throw Mi(t);return t.lanes=536870912,null}return oc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Za(t),a)if(t.flags&256)t.flags&=-257,t=sc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(Qs||Ki(e,t,n,!1),a=(n&e.childLanes)!==0,Qs||a){if(r=Ll,r!==null&&(s=tt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Zr(e,s),_u(r,e,s),Zs;ku(),t=sc(e,t,n)}else e=o.treeContext,Di=pf(s.nextSibling),G=t,Oi=!0,ki=null,Ai=!1,e!==null&&Ei(t,e),t=oc(t,r),t.flags|=4096;return t}return e=ii(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function lc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function uc(e,t,n,r,i){return Ji(t),n=_o(e,t,n,r,void 0,i),r=xo(),e!==null&&!Qs?(So(e,t,i),wc(e,t,i)):(Oi&&r&&wi(t),t.flags|=1,$s(e,t,n,i),t.child)}function dc(e,t,n,r,i,a){return Ji(t),t.updateQueue=null,n=yo(t,r,n,i),vo(e),r=xo(),e!==null&&!Qs?(So(e,t,a),wc(e,t,a)):(Oi&&r&&wi(t),t.flags|=1,$s(e,t,n,a),t.child)}function fc(e,t,n,r,i){if(Ji(t),t.stateNode===null){var a=ei,o=n.contextType;typeof o==`object`&&o&&(a=K(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Rs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ma(t),o=n.contextType,a.context=typeof o==`object`&&o?K(o):ei,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ls(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Rs.enqueueReplaceState(a,a.state,null),Ba(t,r,a,i),za(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Vs(n,s);a.props=c;var l=a.context,u=n.contextType;o=ei,typeof u==`object`&&u&&(o=K(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Bs(t,a,r,o),ja=!1;var f=t.memoizedState;a.state=f,Ba(t,r,a,i),za(),l=t.memoizedState,s||f!==l||ja?(typeof d==`function`&&(Ls(t,n,d,r),l=t.memoizedState),(c=ja||zs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Na(e,t),o=t.memoizedProps,u=Vs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ei,typeof l==`object`&&l&&(c=K(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Bs(t,a,r,c),ja=!1,f=t.memoizedState,a.state=f,Ba(t,r,a,i),za();var p=t.memoizedState;o!==d||f!==p||ja||e!==null&&e.dependencies!==null&&qi(e.dependencies)?(typeof s==`function`&&(Ls(t,n,s,r),p=t.memoizedState),(u=ja||zs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&qi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,lc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=ka(t,e.child,null,i),t.child=ka(t,null,n,i)):$s(e,t,n,i),t.memoizedState=a.state,e=t.child):e=wc(e,t,i),e}function pc(e,t,n,r){return Ii(),t.flags|=256,$s(e,t,n,r),t.child}var mc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hc(e){return{baseLanes:e,cachePool:fa()}}function gc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Xl),e}function _c(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(to.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(Oi){if(a?Xa(t):$a(t),(e=Di)?(e=lf(e,Ai),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:yi===null?null:{id:bi,overflow:xi},retryLane:536870912,hydrationErrors:null},n=li(e),n.return=t,t.child=n,G=t,Di=null)):e=null,e===null)throw Mi(t);return df(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?($a(t),a=t.mode,c=yc({mode:`hidden`,children:c},a),r=si(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=hc(n),r.childLanes=gc(e,s,n),t.memoizedState=mc,ic(null,r)):(Xa(t),vc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(Xa(t),t.flags&=-257,t=bc(e,t,n)):t.memoizedState===null?($a(t),c=r.fallback,a=t.mode,r=yc({mode:`visible`,children:r.children},a),c=si(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,ka(t,e.child,null,n),r=t.child,r.memoizedState=hc(n),r.childLanes=gc(e,s,n),t.memoizedState=mc,t=ic(null,r)):($a(t),t.child=e.child,t.flags|=128,t=null);else if(Xa(t),df(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ri({value:r,source:null,stack:null}),t=bc(e,t,n)}else if(Qs||Ki(e,t,n,!1),s=(n&e.childLanes)!==0,Qs||s){if(s=Ll,s!==null&&(r=tt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,Zr(e,r),_u(s,e,r),Zs;uf(c)||ku(),t=bc(e,t,n)}else uf(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Di=pf(c.nextSibling),G=t,Oi=!0,ki=null,Ai=!1,e!==null&&Ei(t,e),t=vc(t,r.children),t.flags|=4096);return t}return a?($a(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=ii(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=si(c,a,n,null),c.flags|=2):c=ii(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,ic(null,r),r=t.child,c=e.child.memoizedState,c===null?c=hc(n):(a=c.cachePool,a===null?a=fa():(l=ea._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=gc(e,s,n),t.memoizedState=mc,ic(e.child,r)):(Xa(t),n=e.child,e=n.sibling,n=ii(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function vc(e,t){return t=yc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function yc(e,t){return e=ni(22,e,null,t),e.lanes=0,e}function bc(e,t,n){return ka(t,e.child,null,n),e=vc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Wi(e.return,t,n)}function Sc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Cc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=to.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,pe(to,o),$s(e,t,r,n),r=Oi?gi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xc(e,n,t);else if(e.tag===19)xc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&no(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Sc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&no(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Sc(t,!0,n,null,a,r);break;case`together`:Sc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function wc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ql|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ki(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=ii(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ii(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Tc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&qi(e))):!0}function Ec(e,t,n){switch(t.tag){case 3:_e(t,t.stateNode.containerInfo),Hi(t,ea,e.memoizedState.cache),Ii();break;case 27:case 5:ye(t);break;case 4:_e(t,t.stateNode.containerInfo);break;case 10:Hi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Za(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(Xa(t),e=wc(e,t,n),e===null?null:e.sibling):_c(e,t,n):(Xa(t),t.flags|=128,null);Xa(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Ki(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Cc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(to,to.current),r)break;return null;case 22:return t.lanes=0,rc(e,t,n,t.pendingProps);case 24:Hi(t,ea,e.memoizedState.cache)}return wc(e,t,n)}function Dc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qs=!0;else{if(!Tc(e,n)&&!(t.flags&128))return Qs=!1,Ec(e,t,n);Qs=!!(e.flags&131072)}else Qs=!1,Oi&&t.flags&1048576&&Ci(t,gi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ya(t.elementType),t.type=e,typeof e==`function`)ri(e)?(r=Vs(e,r),t.tag=1,t=fc(null,t,e,r,n)):(t.tag=0,t=uc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===S){t.tag=11,t=ec(null,t,e,r,n);break a}else if(a===w){t.tag=14,t=tc(null,t,e,r,n);break a}}throw t=oe(e)||e,Error(i(306,t,``))}}return t;case 0:return uc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Vs(r,t.pendingProps),fc(e,t,r,a,n);case 3:a:{if(_e(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Na(e,t),Ba(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Hi(t,ea,r),r!==o.cache&&Gi(t,[ea],n,!0),za(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=pc(e,t,r,n);break a}else if(r!==a){a=fi(Error(i(424)),t),Ri(a),t=pc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Di=pf(e.firstChild),G=t,Oi=!0,ki=null,Ai=!0,n=Aa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ii(),r===a){t=wc(e,t,n);break a}$s(e,t,r,n)}t=t.child}return t;case 26:return lc(e,t),e===null?(n=Pf(t.type,null,t.pendingProps,null))?t.memoizedState=n:Oi||(n=t.type,e=t.pendingProps,r=Gd(he.current).createElement(n),r[st]=t,r[R]=e,zd(r,n,e),yt(r),t.stateNode=r):t.memoizedState=Pf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ye(t),e===null&&Oi&&(r=t.stateNode=_f(t.type,t.pendingProps,he.current),G=t,Ai=!0,a=Di,nf(t.type)?(mf=a,Di=pf(r.firstChild)):Di=a),$s(e,t,t.pendingProps.children,n),lc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Oi&&((a=r=Di)&&(r=sf(r,t.type,t.pendingProps,Ai),r===null?a=!1:(t.stateNode=r,G=t,Di=pf(r.firstChild),Ai=!1,a=!0)),a||Mi(t)),ye(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Jd(a,o)?r=null:s!==null&&Jd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=_o(e,t,bo,null,null,n),np._currentValue=a),lc(e,t),$s(e,t,r,n),t.child;case 6:return e===null&&Oi&&((e=n=Di)&&(n=cf(n,t.pendingProps,Ai),n===null?e=!1:(t.stateNode=n,G=t,Di=null,e=!0)),e||Mi(t)),null;case 13:return _c(e,t,n);case 4:return _e(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ka(t,null,r,n):$s(e,t,r,n),t.child;case 11:return ec(e,t,t.type,t.pendingProps,n);case 7:return $s(e,t,t.pendingProps,n),t.child;case 8:return $s(e,t,t.pendingProps.children,n),t.child;case 12:return $s(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Hi(t,t.type,r.value),$s(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Ji(t),a=K(a),r=r(a),t.flags|=1,$s(e,t,r,n),t.child;case 14:return tc(e,t,t.type,t.pendingProps,n);case 15:return nc(e,t,t.type,t.pendingProps,n);case 19:return Cc(e,t,n);case 31:return cc(e,t,n);case 22:return rc(e,t,n,t.pendingProps);case 24:return Ji(t),r=K(ea),e===null?(a=ua(),a===null&&(a=Ll,o=ta(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ma(t),Hi(t,ea,a)):((e.lanes&n)!==0&&(Na(e,t),Ba(t,null,null,n),za()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Hi(t,ea,r),r!==a.cache&&Gi(t,[ea],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Hi(t,ea,r))),$s(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Oc(e){e.flags|=4}function kc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Eu())e.flags|=8192;else throw ba=ga,ma}else e.flags&=-16777217}function Ac(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Jf(t))if(Eu())e.flags|=8192;else throw ba=ga,ma}function jc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Ye(),e.lanes|=t,Zl|=t)}function Mc(e,t){if(!Oi)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Nc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Pc(e,t,n){var r=t.pendingProps;switch(Ti(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nc(t),null;case 1:return Nc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Ui(ea),ve(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Fi(t)?Oc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Li())),Nc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Oc(t),o===null?(Nc(t),kc(t,a,null,r,n)):(Nc(t),Ac(t,o))):o?o===e.memoizedState?(Nc(t),t.flags&=-16777217):(Oc(t),Nc(t),Ac(t,o)):(e=e.memoizedProps,e!==r&&Oc(t),Nc(t),kc(t,a,e,r,n)),null;case 27:if(j(t),n=he.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Oc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Nc(t),null}e=me.current,Fi(t)?Ni(t,e):(e=_f(a,r,n),t.stateNode=e,Oc(t))}return Nc(t),null;case 5:if(j(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Oc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Nc(t),null}if(o=me.current,Fi(t))Ni(t,o);else{var s=Gd(he.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[st]=t,o[R]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(zd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Oc(t)}}return Nc(t),kc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Oc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=he.current,Fi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=G,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[st]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Id(e.nodeValue,n)),e||Mi(t,!0)}else e=Gd(e).createTextNode(r),e[st]=t,t.stateNode=e}return Nc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Fi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[st]=t}else Ii(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Nc(t),e=!1}else n=Li(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(eo(t),t):(eo(t),null);if(t.flags&128)throw Error(i(558))}return Nc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Fi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[st]=t}else Ii(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Nc(t),a=!1}else a=Li(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(eo(t),t):(eo(t),null)}return eo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),jc(t,t.updateQueue),Nc(t),null);case 4:return ve(),e===null&&Ed(t.stateNode.containerInfo),Nc(t),null;case 10:return Ui(t.type),Nc(t),null;case 19:if(fe(to),r=t.memoizedState,r===null)return Nc(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Mc(r,!1);else{if(Kl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=no(e),o!==null){for(t.flags|=128,Mc(r,!1),e=o.updateQueue,t.updateQueue=e,jc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ai(n,e),n=n.sibling;return pe(to,to.current&1|2),Oi&&Si(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ae()>ru&&(t.flags|=128,a=!0,Mc(r,!1),t.lanes=4194304)}else{if(!a)if(e=no(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,jc(t,e),Mc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!Oi)return Nc(t),null}else 2*Ae()-r.renderingStartTime>ru&&n!==536870912&&(t.flags|=128,a=!0,Mc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Nc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ae(),e.sibling=null,n=to.current,pe(to,a?n&1|2:n&1),Oi&&Si(t,r.treeForkCount),e);case 22:case 23:return eo(t),qa(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Nc(t),t.subtreeFlags&6&&(t.flags|=8192)):Nc(t),n=t.updateQueue,n!==null&&jc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&fe(la),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ui(ea),Nc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Fc(e,t){switch(Ti(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ui(ea),ve(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return j(t),null;case 31:if(t.memoizedState!==null){if(eo(t),t.alternate===null)throw Error(i(340));Ii()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(eo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ii()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(to),null;case 4:return ve(),null;case 10:return Ui(t.type),null;case 22:case 23:return eo(t),qa(),e!==null&&fe(la),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ui(ea),null;case 25:return null;default:return null}}function Ic(e,t){switch(Ti(t),t.tag){case 3:Ui(ea),ve();break;case 26:case 27:case 5:j(t);break;case 4:ve();break;case 31:t.memoizedState!==null&&eo(t);break;case 13:eo(t);break;case 19:fe(to);break;case 10:Ui(t.type);break;case 22:case 23:eo(t),qa(),e!==null&&fe(la);break;case 24:Ui(ea)}}function Lc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){qu(t,t.return,e)}}function Rc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){qu(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){qu(t,t.return,e)}}function zc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ha(t,n)}catch(t){qu(e,e.return,t)}}}function Bc(e,t,n){n.props=Vs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){qu(e,t,n)}}function Vc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){qu(e,t,n)}}function Hc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){qu(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){qu(e,t,n)}else n.current=null}function Uc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){qu(e,e.return,t)}}function Wc(e,t,n){try{var r=e.stateNode;Bd(r,e.type,n,t),r[R]=t}catch(t){qu(e,e.return,t)}}function Gc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&nf(e.type)||e.tag===4}function Kc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Gc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&nf(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=B));else if(r!==4&&(r===27&&nf(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(qc(e,t,n),e=e.sibling;e!==null;)qc(e,t,n),e=e.sibling}function Jc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&nf(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Jc(e,t,n),e=e.sibling;e!==null;)Jc(e,t,n),e=e.sibling}function Yc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);zd(t,r,n),t[st]=e,t[R]=n}catch(t){qu(e,e.return,t)}}var Xc=!1,Zc=!1,Qc=!1,$c=typeof WeakSet==`function`?WeakSet:Set,el=null;function tl(e,t){if(e=e.containerInfo,Ud=dp,e=Sr(e),Cr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Wd={focusedElem:e,selectionRange:n},dp=!1,el=t;el!==null;)if(t=el,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,el=e;else for(;el!==null;){switch(t=el,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Vs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){qu(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)of(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:of(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,el=e;break}el=t.return}}function nl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:_l(e,n),r&4&&Lc(5,n);break;case 1:if(_l(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){qu(n,n.return,e)}else{var i=Vs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){qu(n,n.return,e)}}r&64&&zc(n),r&512&&Vc(n,n.return);break;case 3:if(_l(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ha(e,t)}catch(e){qu(n,n.return,e)}}break;case 27:t===null&&r&4&&Yc(n);case 26:case 5:_l(e,n),t===null&&r&4&&Uc(n),r&512&&Vc(n,n.return);break;case 12:_l(e,n);break;case 31:_l(e,n),r&4&&cl(e,n);break;case 13:_l(e,n),r&4&&ll(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Zu.bind(null,n),ff(e,n))));break;case 22:if(r=n.memoizedState!==null||Xc,!r){t=t!==null&&t.memoizedState!==null||Zc,i=Xc;var a=Zc;Xc=r,(Zc=t)&&!a?yl(e,n,(n.subtreeFlags&8772)!=0):_l(e,n),Xc=i,Zc=a}break;case 30:break;default:_l(e,n)}}function rl(e){var t=e.alternate;t!==null&&(e.alternate=null,rl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&mt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var il=null,al=!1;function ol(e,t,n){for(n=n.child;n!==null;)sl(e,t,n),n=n.sibling}function sl(e,t,n){if(I&&typeof I.onCommitFiberUnmount==`function`)try{I.onCommitFiberUnmount(F,n)}catch{}switch(n.tag){case 26:Zc||Hc(n,t),ol(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Zc||Hc(n,t);var r=il,i=al;nf(n.type)&&(il=n.stateNode,al=!1),ol(e,t,n),vf(n.stateNode),il=r,al=i;break;case 5:Zc||Hc(n,t);case 6:if(r=il,i=al,il=null,ol(e,t,n),il=r,al=i,il!==null)if(al)try{(il.nodeType===9?il.body:il.nodeName===`HTML`?il.ownerDocument.body:il).removeChild(n.stateNode)}catch(e){qu(n,t,e)}else try{il.removeChild(n.stateNode)}catch(e){qu(n,t,e)}break;case 18:il!==null&&(al?(e=il,rf(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Lp(e)):rf(il,n.stateNode));break;case 4:r=il,i=al,il=n.stateNode.containerInfo,al=!0,ol(e,t,n),il=r,al=i;break;case 0:case 11:case 14:case 15:Rc(2,n,t),Zc||Rc(4,n,t),ol(e,t,n);break;case 1:Zc||(Hc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Bc(n,t,r)),ol(e,t,n);break;case 21:ol(e,t,n);break;case 22:Zc=(r=Zc)||n.memoizedState!==null,ol(e,t,n),Zc=r;break;default:ol(e,t,n)}}function cl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Lp(e)}catch(e){qu(t,t.return,e)}}}function ll(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Lp(e)}catch(e){qu(t,t.return,e)}}function ul(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new $c),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new $c),t;default:throw Error(i(435,e.tag))}}function dl(e,t){var n=ul(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Qu.bind(null,e,t);t.then(r,r)}})}function fl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(nf(c.type)){il=c.stateNode,al=!1;break a}break;case 5:il=c.stateNode,al=!1;break a;case 3:case 4:il=c.stateNode.containerInfo,al=!0;break a}c=c.return}if(il===null)throw Error(i(160));sl(o,s,a),il=null,al=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ml(t,e),t=t.sibling}var pl=null;function ml(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:fl(t,e),hl(e),r&4&&(Rc(3,e,e.return),Lc(3,e),Rc(5,e,e.return));break;case 1:fl(t,e),hl(e),r&512&&(Zc||n===null||Hc(n,n.return)),r&64&&Xc&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=pl;if(fl(t,e),hl(e),r&512&&(Zc||n===null||Hc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[pt]||o[st]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),zd(o,r,n),o[st]=e,yt(o),r=o;break a;case`link`:var s=Gf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),zd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Gf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),zd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[st]=e,yt(o),r=o}e.stateNode=r}else Kf(a,e.type,e.stateNode);else e.stateNode=Bf(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Wc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Kf(a,e.type,e.stateNode):Bf(a,r,e.memoizedProps))}break;case 27:fl(t,e),hl(e),r&512&&(Zc||n===null||Hc(n,n.return)),n!==null&&r&4&&Wc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(fl(t,e),hl(e),r&512&&(Zc||n===null||Hc(n,n.return)),e.flags&32){a=e.stateNode;try{Wt(a,``)}catch(t){qu(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Wc(e,a,n===null?a:n.memoizedProps)),r&1024&&(Qc=!0);break;case 6:if(fl(t,e),hl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){qu(e,e.return,t)}}break;case 3:if(Wf=null,a=pl,pl=xf(t.containerInfo),fl(t,e),pl=a,hl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Lp(t.containerInfo)}catch(t){qu(e,e.return,t)}Qc&&(Qc=!1,gl(e));break;case 4:r=pl,pl=xf(e.stateNode.containerInfo),fl(t,e),hl(e),pl=r;break;case 12:fl(t,e),hl(e);break;case 31:fl(t,e),hl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,dl(e,r)));break;case 13:fl(t,e),hl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(tu=Ae()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,dl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=Xc,d=Zc;if(Xc=u||a,Zc=d||l,fl(t,e),Zc=d,Xc=u,hl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Xc||Zc||vl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){qu(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){qu(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?af(m,!0):af(l.stateNode,!1)}catch(e){qu(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,dl(e,n))));break;case 19:fl(t,e),hl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,dl(e,r)));break;case 30:break;case 21:break;default:fl(t,e),hl(e)}}function hl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Gc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Jc(e,Kc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Wt(o,``),n.flags&=-33),Jc(e,Kc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;qc(e,Kc(e),s);break;default:throw Error(i(161))}}catch(t){qu(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;gl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function _l(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)nl(e,t.alternate,t),t=t.sibling}function vl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Rc(4,t,t.return),vl(t);break;case 1:Hc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Bc(t,t.return,n),vl(t);break;case 27:vf(t.stateNode);case 26:case 5:Hc(t,t.return),vl(t);break;case 22:t.memoizedState===null&&vl(t);break;case 30:vl(t);break;default:vl(t)}e=e.sibling}}function yl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:yl(i,a,n),Lc(4,a);break;case 1:if(yl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){qu(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Va(c[i],s)}catch(e){qu(r,r.return,e)}}n&&o&64&&zc(a),Vc(a,a.return);break;case 27:Yc(a);case 26:case 5:yl(i,a,n),n&&r===null&&o&4&&Uc(a),Vc(a,a.return);break;case 12:yl(i,a,n);break;case 31:yl(i,a,n),n&&o&4&&cl(i,a);break;case 13:yl(i,a,n),n&&o&4&&ll(i,a);break;case 22:a.memoizedState===null&&yl(i,a,n),Vc(a,a.return);break;case 30:break;default:yl(i,a,n)}t=t.sibling}}function bl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&na(n))}function xl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&na(e))}function Sl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Cl(e,t,n,r),t=t.sibling}function Cl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Sl(e,t,n,r),i&2048&&Lc(9,t);break;case 1:Sl(e,t,n,r);break;case 3:Sl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&na(e)));break;case 12:if(i&2048){Sl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){qu(t,t.return,e)}}else Sl(e,t,n,r);break;case 31:Sl(e,t,n,r);break;case 13:Sl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Sl(e,t,n,r):(a._visibility|=2,wl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Sl(e,t,n,r):Tl(e,t),i&2048&&bl(o,t);break;case 24:Sl(e,t,n,r),i&2048&&xl(t.alternate,t);break;default:Sl(e,t,n,r)}}function wl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:wl(a,o,s,c,i),Lc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,wl(a,o,s,c,i)):u._visibility&2?wl(a,o,s,c,i):Tl(a,o),i&&l&2048&&bl(o.alternate,o);break;case 24:wl(a,o,s,c,i),i&&l&2048&&xl(o.alternate,o);break;default:wl(a,o,s,c,i)}t=t.sibling}}function Tl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Tl(n,r),i&2048&&bl(r.alternate,r);break;case 24:Tl(n,r),i&2048&&xl(r.alternate,r);break;default:Tl(n,r)}t=t.sibling}}var El=8192;function Dl(e,t,n){if(e.subtreeFlags&El)for(e=e.child;e!==null;)Ol(e,t,n),e=e.sibling}function Ol(e,t,n){switch(e.tag){case 26:Dl(e,t,n),e.flags&El&&e.memoizedState!==null&&Yf(n,pl,e.memoizedState,e.memoizedProps);break;case 5:Dl(e,t,n);break;case 3:case 4:var r=pl;pl=xf(e.stateNode.containerInfo),Dl(e,t,n),pl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=El,El=16777216,Dl(e,t,n),El=r):Dl(e,t,n));break;default:Dl(e,t,n)}}function kl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Al(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];el=r,Nl(r,e)}kl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jl(e),e=e.sibling}function jl(e){switch(e.tag){case 0:case 11:case 15:Al(e),e.flags&2048&&Rc(9,e,e.return);break;case 3:Al(e);break;case 12:Al(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ml(e)):Al(e);break;default:Al(e)}}function Ml(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];el=r,Nl(r,e)}kl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Rc(8,t,t.return),Ml(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ml(t));break;default:Ml(t)}e=e.sibling}}function Nl(e,t){for(;el!==null;){var n=el;switch(n.tag){case 0:case 11:case 15:Rc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:na(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,el=r;else a:for(n=e;el!==null;){r=el;var i=r.sibling,a=r.return;if(rl(r),r===n){el=null;break a}if(i!==null){i.return=a,el=i;break a}el=a}}}var Pl={getCacheForType:function(e){var t=K(ea),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return K(ea).controller.signal}},Fl=typeof WeakMap==`function`?WeakMap:Map,Il=0,Ll=null,Rl=null,zl=0,Bl=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=0,Ql=null,$l=null,eu=!1,tu=0,nu=0,ru=1/0,iu=null,au=null,ou=0,su=null,cu=null,lu=0,uu=0,du=null,fu=null,pu=0,mu=null;function hu(){return Il&2&&zl!==0?zl&-zl:O.T===null?it():md()}function gu(){if(Xl===0)if(!(zl&536870912)||Oi){var e=We;We<<=1,!(We&3932160)&&(We=262144),Xl=e}else Xl=536870912;return e=Ja.current,e!==null&&(e.flags|=32),Xl}function _u(e,t,n){(e===Ll&&(Bl===2||Bl===9)||e.cancelPendingCommit!==null)&&(wu(e,0),xu(e,zl,Xl,!1)),Ze(e,n),(!(Il&2)||e!==Ll)&&(e===Ll&&(!(Il&2)&&(Jl|=n),Kl===4&&xu(e,zl,Xl,!1)),od(e))}function vu(e,t,n){if(Il&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||qe(e,t),a=r?Mu(e,t):Au(e,t,!0),o=r;do{if(a===0){Ul&&!r&&xu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!bu(n)){a=Au(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Ql;var l=c.current.memoizedState.isDehydrated;if(l&&(wu(c,s).flags|=256),s=Au(c,s,!1),s!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=o,Jl|=o,a=4;break a}o=$l,$l=a,o!==null&&($l===null?$l=o:$l.push.apply($l,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){wu(e,0),xu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:xu(r,t,Xl,!Hl);break a;case 2:$l=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=tu+300-Ae(),10<a)){if(xu(r,t,Xl,!Hl),L(r,0,!0)!==0)break a;lu=t,r.timeoutHandle=Zd(yu.bind(null,r,n,$l,iu,eu,t,Xl,Jl,Zl,Hl,o,`Throttled`,-0,0),a);break a}yu(r,n,$l,iu,eu,t,Xl,Jl,Zl,Hl,o,null,-0,0)}}break}while(1);od(e)}function yu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:B},Ol(t,a,d);var m=(a&62914560)===a?tu-Ae():(a&4194048)===a?nu-Ae():0;if(m=Zf(d,m),m!==null){lu=a,e.cancelPendingCommit=m(zu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),xu(e,a,o,!l);return}}zu(e,t,a,n,r,i,o,s,c)}function bu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!_r(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xu(e,t,n,r){t&=~Yl,t&=~Jl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-ze(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&$e(e,n,t)}function Su(){return Il&6?!0:(sd(0,!1),!1)}function Cu(){if(Rl!==null){if(Bl===0)var e=Rl.return;else e=Rl,Vi=Bi=null,Co(e),Ca=null,wa=0,e=Rl;for(;e!==null;)Ic(e.alternate,e),e=e.return;Rl=null}}function wu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),lu=0,Cu(),Ll=e,Rl=n=ii(e.current,null),zl=t,Bl=0,Vl=null,Hl=!1,Ul=qe(e,t),Wl=!1,Zl=Xl=Yl=Jl=ql=Kl=0,$l=Ql=null,eu=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-ze(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,Jr(),n}function Tu(e,t){io=null,O.H=Ns,t===pa||t===ha?(t=xa(),Bl=3):t===ma?(t=xa(),Bl=4):Bl=t===Zs?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,Rl===null&&(Kl=1,Gs(e,fi(t,e.current)))}function Eu(){var e=Ja.current;return e===null?!0:(zl&4194048)===zl?Ya===null:(zl&62914560)===zl||zl&536870912?e===Ya:!1}function Du(){var e=O.H;return O.H=Ns,e===null?Ns:e}function Ou(){var e=O.A;return O.A=Pl,e}function ku(){Kl=4,Hl||(zl&4194048)!==zl&&Ja.current!==null||(Ul=!0),!(ql&134217727)&&!(Jl&134217727)||Ll===null||xu(Ll,zl,Xl,!1)}function Au(e,t,n){var r=Il;Il|=2;var i=Du(),a=Ou();(Ll!==e||zl!==t)&&(iu=null,wu(e,t)),t=!1;var o=Kl;a:do try{if(Bl!==0&&Rl!==null){var s=Rl,c=Vl;switch(Bl){case 8:Cu(),o=6;break a;case 3:case 2:case 9:case 6:Ja.current===null&&(t=!0);var l=Bl;if(Bl=0,Vl=null,Iu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=Bl,Bl=0,Vl=null,Iu(e,s,c,l)}}ju(),o=Kl;break}catch(t){Tu(e,t)}while(1);return t&&e.shellSuspendCounter++,Vi=Bi=null,Il=r,O.H=i,O.A=a,Rl===null&&(Ll=null,zl=0,Jr()),o}function ju(){for(;Rl!==null;)Pu(Rl)}function Mu(e,t){var n=Il;Il|=2;var r=Du(),a=Ou();Ll!==e||zl!==t?(iu=null,ru=Ae()+500,wu(e,t)):Ul=qe(e,t);a:do try{if(Bl!==0&&Rl!==null){t=Rl;var o=Vl;b:switch(Bl){case 1:Bl=0,Vl=null,Iu(e,t,o,1);break;case 2:case 9:if(_a(o)){Bl=0,Vl=null,Fu(t);break}t=function(){Bl!==2&&Bl!==9||Ll!==e||(Bl=7),od(e)},o.then(t,t);break a;case 3:Bl=7;break a;case 4:Bl=5;break a;case 7:_a(o)?(Bl=0,Vl=null,Fu(t)):(Bl=0,Vl=null,Iu(e,t,o,7));break;case 5:var s=null;switch(Rl.tag){case 26:s=Rl.memoizedState;case 5:case 27:var c=Rl;if(s?Jf(s):c.stateNode.complete){Bl=0,Vl=null;var l=c.sibling;if(l!==null)Rl=l;else{var u=c.return;u===null?Rl=null:(Rl=u,Lu(u))}break b}}Bl=0,Vl=null,Iu(e,t,o,5);break;case 6:Bl=0,Vl=null,Iu(e,t,o,6);break;case 8:Cu(),Kl=6;break a;default:throw Error(i(462))}}Nu();break}catch(t){Tu(e,t)}while(1);return Vi=Bi=null,O.H=r,O.A=a,Il=n,Rl===null?(Ll=null,zl=0,Jr(),Kl):0}function Nu(){for(;Rl!==null&&!Oe();)Pu(Rl)}function Pu(e){var t=Dc(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Lu(e):Rl=t}function Fu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=dc(n,t,t.pendingProps,t.type,void 0,zl);break;case 11:t=dc(n,t,t.pendingProps,t.type.render,t.ref,zl);break;case 5:Co(t);default:Ic(n,t),t=Rl=ai(t,Gl),t=Dc(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Lu(e):Rl=t}function Iu(e,t,n,r){Vi=Bi=null,Co(t),Ca=null,wa=0;var i=t.return;try{if(Xs(e,i,t,n,zl)){Kl=1,Gs(e,fi(n,e.current)),Rl=null;return}}catch(t){if(i!==null)throw Rl=i,t;Kl=1,Gs(e,fi(n,e.current)),Rl=null;return}t.flags&32768?(Oi||r===1?e=!0:Ul||zl&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=Ja.current,r!==null&&r.tag===13&&(r.flags|=16384))),Ru(t,e)):Lu(t)}function Lu(e){var t=e;do{if(t.flags&32768){Ru(t,Hl);return}e=t.return;var n=Pc(t.alternate,t,Gl);if(n!==null){Rl=n;return}if(t=t.sibling,t!==null){Rl=t;return}Rl=t=e}while(t!==null);Kl===0&&(Kl=5)}function Ru(e,t){do{var n=Fc(e.alternate,e);if(n!==null){n.flags&=32767,Rl=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Rl=e;return}Rl=e=n}while(e!==null);Kl=6,Rl=null}function zu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Wu();while(ou!==0);if(Il&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=qr,Qe(e,n,o,s,c,l),e===Ll&&(Rl=Ll=null,zl=0),cu=t,su=e,lu=n,uu=o,du=a,fu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,$u(Pe,function(){return Gu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=O.T,O.T=null,a=k.p,k.p=2,s=Il,Il|=4;try{tl(e,t,n)}finally{Il=s,k.p=a,O.T=r}}ou=1,Bu(),Vu(),Hu()}}function Bu(){if(ou===1){ou=0;var e=su,t=cu,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=Il;Il|=4;try{ml(t,e);var a=Wd,o=Sr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&xr(s.ownerDocument.documentElement,s)){if(c!==null&&Cr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=br(s,h),v=br(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}dp=!!Ud,Wd=Ud=null}finally{Il=i,k.p=r,O.T=n}}e.current=t,ou=2}}function Vu(){if(ou===2){ou=0;var e=su,t=cu,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=Il;Il|=4;try{nl(e,t.alternate,t)}finally{Il=i,k.p=r,O.T=n}}ou=3}}function Hu(){if(ou===4||ou===3){ou=0,ke();var e=su,t=cu,n=lu,r=fu;t.subtreeFlags&10256||t.flags&10256?ou=5:(ou=0,cu=su=null,Uu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(au=null),rt(n),t=t.stateNode,I&&typeof I.onCommitFiberRoot==`function`)try{I.onCommitFiberRoot(F,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=O.T,i=k.p,k.p=2,O.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{O.T=t,k.p=i}}lu&3&&Wu(),od(e),i=e.pendingLanes,n&261930&&i&42?e===mu?pu++:(pu=0,mu=e):pu=0,sd(0,!1)}}function Uu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,na(t)))}function Wu(){return Bu(),Vu(),Hu(),Gu()}function Gu(){if(ou!==5)return!1;var e=su,t=uu;uu=0;var n=rt(lu),r=O.T,a=k.p;try{k.p=32>n?32:n,O.T=null,n=du,du=null;var o=su,s=lu;if(ou=0,cu=su=null,lu=0,Il&6)throw Error(i(331));var c=Il;if(Il|=4,jl(o.current),Cl(o,o.current,s,n),Il=c,sd(0,!1),I&&typeof I.onPostCommitFiberRoot==`function`)try{I.onPostCommitFiberRoot(F,o)}catch{}return!0}finally{k.p=a,O.T=r,Uu(e,t)}}function Ku(e,t,n){t=fi(n,t),t=qs(e.stateNode,t,2),e=Fa(e,t,2),e!==null&&(Ze(e,2),od(e))}function qu(e,t,n){if(e.tag===3)Ku(e,e,n);else for(;t!==null;){if(t.tag===3){Ku(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(au===null||!au.has(r))){e=fi(n,e),n=Js(2),r=Fa(t,n,2),r!==null&&(Ys(n,r,t,e),Ze(r,2),od(r));break}}t=t.return}}function Ju(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Fl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Yu.bind(null,e,t,n),t.then(e,e))}function Yu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ll===e&&(zl&n)===n&&(Kl===4||Kl===3&&(zl&62914560)===zl&&300>Ae()-tu?!(Il&2)&&wu(e,0):Yl|=n,Zl===zl&&(Zl=0)),od(e)}function Xu(e,t){t===0&&(t=Ye()),e=Zr(e,t),e!==null&&(Ze(e,t),od(e))}function Zu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xu(e,n)}function Qu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Xu(e,n)}function $u(e,t){return Ee(e,t)}var ed=null,td=null,nd=!1,rd=!1,id=!1,ad=0;function od(e){e!==td&&e.next===null&&(td===null?ed=td=e:td=td.next=e),rd=!0,nd||(nd=!0,pd())}function sd(e,t){if(!id&&rd){id=!0;do for(var n=!1,r=ed;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-ze(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,fd(r,a))}else a=zl,a=L(r,r===Ll?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||qe(r,a)||(n=!0,fd(r,a));r=r.next}while(n);id=!1}}function cd(){ld()}function ld(){rd=nd=!1;var e=0;ad!==0&&Xd()&&(e=ad);for(var t=Ae(),n=null,r=ed;r!==null;){var i=r.next,a=ud(r,t);a===0?(r.next=null,n===null?ed=i:n.next=i,i===null&&(td=n)):(n=r,(e!==0||a&3)&&(rd=!0)),r=i}ou!==0&&ou!==5||sd(e,!1),ad!==0&&(ad=0)}function ud(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-ze(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Je(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Ll,n=zl,n=L(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Bl===2||Bl===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&De(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||qe(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&De(r),rt(n)){case 2:case 8:n=Ne;break;case 32:n=Pe;break;case 268435456:n=P;break;default:n=Pe}return r=dd.bind(null,e),n=Ee(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&De(r),e.callbackPriority=2,e.callbackNode=null,2}function dd(e,t){if(ou!==0&&ou!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Wu()&&e.callbackNode!==n)return null;var r=zl;return r=L(e,e===Ll?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(vu(e,r,t),ud(e,Ae()),e.callbackNode!=null&&e.callbackNode===n?dd.bind(null,e):null)}function fd(e,t){if(Wu())return null;vu(e,t,!0)}function pd(){ef(function(){Il&6?Ee(Me,cd):ld()})}function md(){if(ad===0){var e=J;e===0&&(e=Ue,Ue<<=1,!(Ue&261888)&&(Ue=256)),ad=e}return ad}function hd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Zt(``+e)}function gd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function _d(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=hd((i[R]||null).action),o=r.submitter;o&&(t=(t=o[R]||null)?hd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new _n(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ad!==0){var e=o?gd(i,o):new FormData(i);ys(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?gd(i,o):new FormData(i),ys(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var vd=0;vd<Ur.length;vd++){var yd=Ur[vd];Wr(yd.toLowerCase(),`on`+(yd[0].toUpperCase()+yd.slice(1)))}Wr(Fr,`onAnimationEnd`),Wr(Ir,`onAnimationIteration`),Wr(Lr,`onAnimationStart`),Wr(`dblclick`,`onDoubleClick`),Wr(`focusin`,`onFocus`),Wr(`focusout`,`onBlur`),Wr(Rr,`onTransitionRun`),Wr(zr,`onTransitionStart`),Wr(Br,`onTransitionCancel`),Wr(Vr,`onTransitionEnd`),Ct(`onMouseEnter`,[`mouseout`,`mouseover`]),Ct(`onMouseLeave`,[`mouseout`,`mouseover`]),Ct(`onPointerEnter`,[`pointerout`,`pointerover`]),Ct(`onPointerLeave`,[`pointerout`,`pointerover`]),St(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),St(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),St(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),St(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),St(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),St(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var bd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),xd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(bd));function Sd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){W(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){W(e)}i.currentTarget=null,a=c}}}}function Cd(e,t){var n=t[lt];n===void 0&&(n=t[lt]=new Set);var r=e+`__bubble`;n.has(r)||(Dd(t,e,2,!1),n.add(r))}function wd(e,t,n){var r=0;t&&(r|=4),Dd(n,e,r,t)}var Td=`_reactListening`+Math.random().toString(36).slice(2);function Ed(e){if(!e[Td]){e[Td]=!0,bt.forEach(function(t){t!==`selectionchange`&&(xd.has(t)||wd(t,!1,e),wd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Td]||(t[Td]=!0,wd(`selectionchange`,!1,t))}}function Dd(e,t,n,r){switch(vp(t)){case 2:var i=fp;break;case 8:i=pp;break;default:i=mp}n=i.bind(null,t,n,e),i=void 0,!on||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Od(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=ht(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}V(function(){var r=a,i=$t(n),s=[];a:{var c=Hr.get(e);if(c!==void 0){var l=_n,u=e;switch(e){case`keypress`:if(fn(n)===0)break a;case`keydown`:case`keyup`:l=Fn;break;case`focusin`:u=`focus`,l=En;break;case`focusout`:u=`blur`,l=En;break;case`beforeblur`:case`afterblur`:l=En;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=wn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Tn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Ln;break;case Fr:case Ir:case Lr:l=Dn;break;case Vr:l=Rn;break;case`scroll`:case`scrollend`:l=yn;break;case`wheel`:l=zn;break;case`copy`:case`cut`:case`paste`:l=On;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=In;break;case`toggle`:case`beforetoggle`:l=Bn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=H(m,p),g!=null&&d.push(kd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==Qt&&(u=n.relatedTarget||n.fromElement)&&(ht(u)||u[ct]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?ht(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=wn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=In,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:_t(l),h=u==null?c:_t(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,ht(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=jd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Md(s,c,l,d,!1),u!==null&&f!==null&&Md(s,f,u,d,!0)}}a:{if(c=r?_t(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=or;else if(er(c))if(sr)v=hr;else{v=pr;var y=fr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Jt(r.elementType)&&(v=or):v=mr;if(v&&=v(e,r)){tr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Bt(c,`number`,c.value)}switch(y=r?_t(r):window,e){case`focusin`:(er(y)||y.contentEditable===`true`)&&(Tr=y,Er=r,Dr=null);break;case`focusout`:Dr=Er=Tr=null;break;case`mousedown`:Or=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Or=!1,kr(s,n,i);break;case`selectionchange`:if(wr)break;case`keydown`:case`keyup`:kr(s,n,i)}var b;if(Hn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else Xn?Jn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Gn&&n.locale!==`ko`&&(Xn||x!==`onCompositionStart`?x===`onCompositionEnd`&&Xn&&(b=dn()):(cn=i,ln=`value`in cn?cn.value:cn.textContent,Xn=!0)),y=Ad(r,x),0<y.length&&(x=new kn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=Yn(n),b!==null&&(x.data=b)))),(b=Wn?Zn(e,n):Qn(e,n))&&(x=Ad(r,`onBeforeInput`),0<x.length&&(y=new kn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),_d(s,e,r,n,i)}Sd(s,t)})}function kd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ad(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=H(e,n),i!=null&&r.unshift(kd(e,i,a)),i=H(e,t),i!=null&&r.push(kd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function jd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Md(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=H(n,a),l!=null&&o.unshift(kd(n,l,c))):i||(l=H(n,a),l!=null&&o.push(kd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Nd=/\r\n?/g,Pd=/\u0000|\uFFFD/g;function Fd(e){return(typeof e==`string`?e:``+e).replace(Nd,`
`).replace(Pd,``)}function Id(e,t){return t=Fd(t),Fd(e)===t}function Ld(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Wt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Wt(e,``+r);break;case`className`:Ot(e,`class`,r);break;case`tabIndex`:Ot(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Ot(e,n,r);break;case`style`:qt(e,r,o);break;case`data`:if(t!==`object`){Ot(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Zt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&Ld(e,t,`name`,a.name,a,null),Ld(e,t,`formEncType`,a.formEncType,a,null),Ld(e,t,`formMethod`,a.formMethod,a,null),Ld(e,t,`formTarget`,a.formTarget,a,null)):(Ld(e,t,`encType`,a.encType,a,null),Ld(e,t,`method`,a.method,a,null),Ld(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Zt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=B);break;case`onScroll`:r!=null&&Cd(`scroll`,e);break;case`onScrollEnd`:r!=null&&Cd(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Zt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Cd(`beforetoggle`,e),Cd(`toggle`,e),Dt(e,`popover`,r);break;case`xlinkActuate`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:kt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:kt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:kt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Dt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Yt.get(n)||n,Dt(e,n,r))}}function Rd(e,t,n,r,a,o){switch(n){case`style`:qt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Wt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Wt(e,``+r);break;case`onScroll`:r!=null&&Cd(`scroll`,e);break;case`onScrollEnd`:r!=null&&Cd(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=B);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!xt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[R]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Dt(e,n,r)}}}function zd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Cd(`error`,e),Cd(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Ld(e,t,o,s,n,null)}}a&&Ld(e,t,`srcSet`,n.srcSet,n,null),r&&Ld(e,t,`src`,n.src,n,null);return;case`input`:Cd(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Ld(e,t,r,d,n,null)}}zt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Cd(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Ld(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Vt(e,!!r,n,!0):Vt(e,!!r,t,!1);return;case`textarea`:for(s in Cd(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Ld(e,t,s,c,n,null)}Ut(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Ld(e,t,l,r,n,null)}return;case`dialog`:Cd(`beforetoggle`,e),Cd(`toggle`,e),Cd(`cancel`,e),Cd(`close`,e);break;case`iframe`:case`object`:Cd(`load`,e);break;case`video`:case`audio`:for(r=0;r<bd.length;r++)Cd(bd[r],e);break;case`image`:Cd(`error`,e),Cd(`load`,e);break;case`details`:Cd(`toggle`,e);break;case`embed`:case`source`:case`link`:Cd(`error`,e),Cd(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Ld(e,t,u,r,n,null)}return;default:if(Jt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Rd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Ld(e,t,c,r,n,null))}function Bd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Ld(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Ld(e,t,p,m,r,f)}}Rt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Ld(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Ld(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Vt(e,!!n,n?[]:``,!1):Vt(e,!!n,t,!0)):Vt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Ld(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Ld(e,t,s,a,r,o)}Ht(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Ld(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Ld(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Ld(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Ld(e,t,u,p,r,m)}return;default:if(Jt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Rd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Rd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Ld(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Ld(e,t,f,p,r,m)}function Vd(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Hd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Vd(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Vd(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Ud=null,Wd=null;function Gd(e){return e.nodeType===9?e:e.ownerDocument}function Kd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function qd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Jd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yd=null;function Xd(){var e=window.event;return e&&e.type===`popstate`?e===Yd?!1:(Yd=e,!0):(Yd=null,!1)}var Zd=typeof setTimeout==`function`?setTimeout:void 0,Qd=typeof clearTimeout==`function`?clearTimeout:void 0,$d=typeof Promise==`function`?Promise:void 0,ef=typeof queueMicrotask==`function`?queueMicrotask:$d===void 0?Zd:function(e){return $d.resolve(null).then(e).catch(tf)};function tf(e){setTimeout(function(){throw e})}function nf(e){return e===`head`}function rf(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Lp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)vf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,vf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[pt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&vf(e.ownerDocument.body);n=i}while(n);Lp(t)}function af(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function of(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:of(n),mt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function sf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[pt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=pf(e.nextSibling),e===null)break}return null}function cf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=pf(e.nextSibling),e===null))return null;return e}function lf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=pf(e.nextSibling),e===null))return null;return e}function uf(e){return e.data===`$?`||e.data===`$~`}function df(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function ff(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function pf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var mf=null;function hf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return pf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function gf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function _f(e,t,n){switch(t=Gd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function vf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);mt(e)}var yf=new Map,bf=new Set;function xf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Sf=k.d;k.d={f:Cf,r:wf,D:Df,C:Of,L:kf,m:Af,X:Mf,S:jf,M:Nf};function Cf(){var e=Sf.f(),t=Su();return e||t}function wf(e){var t=gt(e);t!==null&&t.tag===5&&t.type===`form`?xs(t):Sf.r(e)}var Tf=typeof document>`u`?null:document;function Ef(e,t,n){var r=Tf;if(r&&typeof t==`string`&&t){var i=Lt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),bf.has(i)||(bf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),zd(t,`link`,e),yt(t),r.head.appendChild(t)))}}function Df(e){Sf.D(e),Ef(`dns-prefetch`,e,null)}function Of(e,t){Sf.C(e,t),Ef(`preconnect`,e,t)}function kf(e,t,n){Sf.L(e,t,n);var r=Tf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Lt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Lt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Lt(n.imageSizes)+`"]`)):i+=`[href="`+Lt(e)+`"]`;var a=i;switch(t){case`style`:a=Ff(e);break;case`script`:a=zf(e)}yf.has(a)||(e=p({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),yf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(If(a))||t===`script`&&r.querySelector(Y(a))||(t=r.createElement(`link`),zd(t,`link`,e),yt(t),r.head.appendChild(t)))}}function Af(e,t){Sf.m(e,t);var n=Tf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Lt(r)+`"][href="`+Lt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=zf(e)}if(!yf.has(a)&&(e=p({rel:`modulepreload`,href:e},t),yf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Y(a)))return}r=n.createElement(`link`),zd(r,`link`,e),yt(r),n.head.appendChild(r)}}}function jf(e,t,n){Sf.S(e,t,n);var r=Tf;if(r&&e){var i=vt(r).hoistableStyles,a=Ff(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(If(a)))s.loading=5;else{e=p({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=yf.get(a))&&Hf(e,n);var c=o=r.createElement(`link`);yt(c),zd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Mf(e,t){Sf.X(e,t);var n=Tf;if(n&&e){var r=vt(n).hoistableScripts,i=zf(e),a=r.get(i);a||(a=n.querySelector(Y(i)),a||(e=p({src:e,async:!0},t),(t=yf.get(i))&&Uf(e,t),a=n.createElement(`script`),yt(a),zd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nf(e,t){Sf.M(e,t);var n=Tf;if(n&&e){var r=vt(n).hoistableScripts,i=zf(e),a=r.get(i);a||(a=n.querySelector(Y(i)),a||(e=p({src:e,async:!0,type:`module`},t),(t=yf.get(i))&&Uf(e,t),a=n.createElement(`script`),yt(a),zd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Pf(e,t,n,r){var a=(a=he.current)?xf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Ff(n.href),n=vt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Ff(n.href);var o=vt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(If(e)))&&!o._p&&(s.instance=o,s.state.loading=5),yf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},yf.set(e,n),o||Rf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=zf(n),n=vt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Ff(e){return`href="`+Lt(e)+`"`}function If(e){return`link[rel="stylesheet"][`+e+`]`}function Lf(e){return p({},e,{"data-precedence":e.precedence,precedence:null})}function Rf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),zd(t,`link`,n),yt(t),e.head.appendChild(t))}function zf(e){return`[src="`+Lt(e)+`"]`}function Y(e){return`script[async]`+e}function Bf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Lt(n.href)+`"]`);if(r)return t.instance=r,yt(r),r;var a=p({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),yt(r),zd(r,`style`,a),Vf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Ff(n.href);var o=e.querySelector(If(a));if(o)return t.state.loading|=4,t.instance=o,yt(o),o;r=Lf(n),(a=yf.get(a))&&Hf(r,a),o=(e.ownerDocument||e).createElement(`link`),yt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),zd(o,`link`,r),t.state.loading|=4,Vf(o,n.precedence,e),t.instance=o;case`script`:return o=zf(n.src),(a=e.querySelector(Y(o)))?(t.instance=a,yt(a),a):(r=n,(a=yf.get(o))&&(r=p({},n),Uf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),yt(a),zd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vf(r,n.precedence,e));return t.instance}function Vf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Uf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wf=null;function Gf(e,t,n){if(Wf===null){var r=new Map,i=Wf=new Map;i.set(n,r)}else i=Wf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[pt]||a[st]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Kf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Yf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Ff(r.href),a=t.querySelector(If(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Qf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,yt(a);return}a=t.ownerDocument||t,r=Lf(r),(i=yf.get(i))&&Hf(r,i),a=a.createElement(`link`),yt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),zd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Qf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Xf=0;function Zf(e,t){return e.stylesheets&&e.count===0&&ep(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ep(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Xf===0&&(Xf=62500*Hd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ep(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Xf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Qf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ep(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $f=null;function ep(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$f=new Map,t.forEach(tp,e),$f=null,Qf.call(e))}function tp(e,t){if(!(t.state.loading&4)){var n=$f.get(e);if(n)var r=n.get(null);else{n=new Map,$f.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Qf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var np={$$typeof:te,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function rp(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xe(0),this.hiddenUpdates=Xe(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ip(e,t,n,r,i,a,o,s,c,l,u,d){return e=new rp(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ni(3,null,null,t),e.current=a,a.stateNode=e,t=ta(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ma(a),e}function ap(e){return e?(e=ei,e):ei}function op(e,t,n,r,i,a){i=ap(i),r.context===null?r.context=i:r.pendingContext=i,r=Pa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Fa(e,r,t),n!==null&&(_u(n,e,t),Ia(n,e,t))}function sp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cp(e,t){sp(e,t),(e=e.alternate)&&sp(e,t)}function lp(e){if(e.tag===13||e.tag===31){var t=Zr(e,67108864);t!==null&&_u(t,e,67108864),cp(e,67108864)}}function up(e){if(e.tag===13||e.tag===31){var t=hu();t=nt(t);var n=Zr(e,t);n!==null&&_u(n,e,t),cp(e,t)}}var dp=!0;function fp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=2,mp(e,t,n,r)}finally{k.p=a,O.T=i}}function pp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=8,mp(e,t,n,r)}finally{k.p=a,O.T=i}}function mp(e,t,n,r){if(dp){var i=hp(r);if(i===null)Od(e,t,r,gp,n),Dp(e,r);else if(kp(i,e,t,n,r))r.stopPropagation();else if(Dp(e,r),t&4&&-1<Ep.indexOf(e)){for(;i!==null;){var a=gt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ke(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-ze(o);s.entanglements[1]|=c,o&=~c}od(a),!(Il&6)&&(ru=Ae()+500,sd(0,!1))}}break;case 31:case 13:s=Zr(a,2),s!==null&&_u(s,a,2),Su(),cp(a,2)}if(a=hp(r),a===null&&Od(e,t,r,gp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Od(e,t,r,null,n)}}function hp(e){return e=$t(e),_p(e)}var gp=null;function _p(e){if(gp=null,e=ht(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return gp=e,null}function vp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(je()){case Me:return 2;case Ne:return 8;case Pe:case Fe:return 32;case P:return 268435456;default:return 32}default:return 32}}var yp=!1,bp=null,xp=null,Sp=null,Cp=new Map,wp=new Map,Tp=[],Ep=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Dp(e,t){switch(e){case`focusin`:case`focusout`:bp=null;break;case`dragenter`:case`dragleave`:xp=null;break;case`mouseover`:case`mouseout`:Sp=null;break;case`pointerover`:case`pointerout`:Cp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:wp.delete(t.pointerId)}}function Op(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=gt(t),t!==null&&lp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function kp(e,t,n,r,i){switch(t){case`focusin`:return bp=Op(bp,e,t,n,r,i),!0;case`dragenter`:return xp=Op(xp,e,t,n,r,i),!0;case`mouseover`:return Sp=Op(Sp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Cp.set(a,Op(Cp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,wp.set(a,Op(wp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ap(e){var t=ht(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,at(e.priority,function(){up(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,at(e.priority,function(){up(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=hp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Qt=r,n.target.dispatchEvent(r),Qt=null}else return t=gt(n),t!==null&&lp(t),e.blockedOn=n,!1;t.shift()}return!0}function Mp(e,t,n){jp(e)&&n.delete(t)}function Np(){yp=!1,bp!==null&&jp(bp)&&(bp=null),xp!==null&&jp(xp)&&(xp=null),Sp!==null&&jp(Sp)&&(Sp=null),Cp.forEach(Mp),wp.forEach(Mp)}function Pp(e,n){e.blockedOn===n&&(e.blockedOn=null,yp||(yp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Np)))}var Fp=null;function Ip(e){Fp!==e&&(Fp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Fp===e&&(Fp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(_p(r||n)===null)continue;break}var a=gt(n);a!==null&&(e.splice(t,3),t-=3,ys(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Lp(e){function t(t){return Pp(t,e)}bp!==null&&Pp(bp,e),xp!==null&&Pp(xp,e),Sp!==null&&Pp(Sp,e),Cp.forEach(t),wp.forEach(t);for(var n=0;n<Tp.length;n++){var r=Tp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Tp.length&&(n=Tp[0],n.blockedOn===null);)Ap(n),n.blockedOn===null&&Tp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[R]||null;if(typeof a==`function`)o||Ip(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[R]||null)s=o.formAction;else if(_p(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Ip(n)}}}function Rp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function zp(e){this._internalRoot=e}Bp.prototype.render=zp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;op(n,hu(),e,t,null,null)},Bp.prototype.unmount=zp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;op(e.current,2,null,e,null,null),Su(),t[ct]=null}};function Bp(e){this._internalRoot=e}Bp.prototype.unstable_scheduleHydration=function(e){if(e){var t=it();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Tp.length&&t!==0&&t<Tp[n].priority;n++);Tp.splice(n,0,e),n===0&&Ap(e)}};var Vp=n.version;if(Vp!==`19.2.4`)throw Error(i(527,Vp,`19.2.4`));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Hp={bundleType:0,version:`19.2.4`,rendererPackageName:`react-dom`,currentDispatcherRef:O,reconcilerVersion:`19.2.4`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Up=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Up.isDisabled&&Up.supportsFiber)try{F=Up.inject(Hp),I=Up}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Hs,s=Us,c=Ws;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ip(e,1,!1,null,null,n,r,null,o,s,c,Rp),e[ct]=t.current,Ed(e),new zp(t)},e.hydrateRoot=function(e,t,n){if(!a(e))throw Error(i(299));var r=!1,o=``,s=Hs,c=Us,l=Ws,u=null;return n!=null&&(!0===n.unstable_strictMode&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(l=n.onRecoverableError),n.formState!==void 0&&(u=n.formState)),t=ip(e,1,!0,t,n??null,r,o,u,s,c,l,Rp),t.context=ap(null),n=t.current,r=hu(),r=nt(r),o=Pa(r),o.callback=null,Fa(n,o,r),n=r,t.current.lanes=n,Ze(t,n),od(t),e[ct]=t.current,Ed(e),new Bp(t)},e.version=`19.2.4`})),y=o((e=>{process.env.NODE_ENV!==`production`&&(function(){function t(e,t){for(e=e.memoizedState;e!==null&&0<t;)e=e.next,t--;return e}function n(e,t,r,i){if(r>=t.length)return i;var a=t[r],o=zf(e)?e.slice():xf({},e);return o[a]=n(e[a],t,r+1,i),o}function r(e,t,n){if(t.length!==n.length)console.warn(`copyWithRename() expects paths of the same length`);else{for(var r=0;r<n.length-1;r++)if(t[r]!==n[r]){console.warn(`copyWithRename() expects paths to be the same except for the deepest key`);return}return i(e,t,n,0)}}function i(e,t,n,r){var a=t[r],o=zf(e)?e.slice():xf({},e);return r+1===t.length?(o[n[r]]=o[a],zf(o)?o.splice(a,1):delete o[a]):o[a]=i(e[a],t,n,r+1),o}function a(e,t,n){var r=t[n],i=zf(e)?e.slice():xf({},e);return n+1===t.length?(zf(i)?i.splice(r,1):delete i[r],i):(i[r]=a(e[r],t,n+1),i)}function o(){return!1}function s(){return null}function c(){console.error(`Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks`)}function l(){console.error(`Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().`)}function u(){}function f(){}function p(e){var t=[];return e.forEach(function(e){t.push(e)}),t.sort().join(`, `)}function h(e,t,n,r){return new U(e,t,n,r)}function g(e,t){e.context===Og&&(Gd(e.current,2,t,e,null,null),Yc())}function v(e,t){if(kg!==null){var n=t.staleFamilies;t=t.updatedFamilies,xl(),cr(e.current,t,n),Yc()}}function y(e){kg=e}function b(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function x(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ee(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function te(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function S(e){if(x(e)!==e)throw Error(`Unable to find node on an unmounted component.`)}function C(e){var t=e.alternate;if(!t){if(t=x(e),t===null)throw Error(`Unable to find node on an unmounted component.`);return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return S(i),e;if(a===r)return S(i),t;a=a.sibling}throw Error(`Unable to find node on an unmounted component.`)}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(`Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.`)}}if(n.alternate!==r)throw Error(`Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.`)}if(n.tag!==3)throw Error(`Unable to find node on an unmounted component.`);return n.stateNode.current===n?e:t}function ne(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=ne(e),t!==null)return t;e=e.sibling}return null}function w(e){return typeof e!=`object`||!e?null:(e=Lf&&e[Lf]||e[`@@iterator`],typeof e==`function`?e:null)}function T(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===Rf?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case Tf:return`Fragment`;case Df:return`Profiler`;case Ef:return`StrictMode`;case jf:return`Suspense`;case Mf:return`SuspenseList`;case Ff:return`Activity`}if(typeof e==`object`)switch(typeof e.tag==`number`&&console.error(`Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.`),e.$$typeof){case wf:return`Portal`;case kf:return e.displayName||`Context`;case Of:return(e._context.displayName||`Context`)+`.Consumer`;case Af:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case Nf:return t=e.displayName||null,t===null?T(e.type)||`Memo`:t;case Pf:t=e._payload,e=e._init;try{return T(e(t))}catch{}}return null}function re(e){return typeof e.tag==`number`?E(e):typeof e.name==`string`?e.name:null}function E(e){var t=e.type;switch(e.tag){case 31:return`Activity`;case 24:return`Cache`;case 9:return(t._context.displayName||`Context`)+`.Consumer`;case 10:return t.displayName||`Context`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 26:case 27:case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return T(t);case 8:return t===Ef?`StrictMode`:`Mode`;case 22:return`Offscreen`;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 1:case 0:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t;break;case 29:if(t=e._debugInfo,t!=null){for(var n=t.length-1;0<=n;n--)if(typeof t[n].name==`string`)return t[n].name}if(e.return!==null)return E(e.return)}return null}function ie(e){return{current:e}}function ae(e,t){0>Wf?console.error(`Unexpected pop.`):(t!==Uf[Wf]&&console.error(`Unexpected Fiber popped.`),e.current=Hf[Wf],Hf[Wf]=null,Uf[Wf]=null,Wf--)}function D(e,t,n){Wf++,Hf[Wf]=e.current,Uf[Wf]=n,e.current=t}function oe(e){return e===null&&console.error(`Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.`),e}function se(e,t){D(qf,t,e),D(Kf,e,e),D(Gf,null,e);var n=t.nodeType;switch(n){case 9:case 11:n=n===9?`#document`:`#fragment`,t=(t=t.documentElement)&&(t=t.namespaceURI)?ju(t):WS;break;default:if(n=t.tagName,t=t.namespaceURI)t=ju(t),t=Mu(t,n);else switch(n){case`svg`:t=GS;break;case`math`:t=KS;break;default:t=WS}}n=n.toLowerCase(),n=Pt(null,n),n={context:t,ancestorInfo:n},ae(Gf,e),D(Gf,n,e)}function O(e){ae(Gf,e),ae(Kf,e),ae(qf,e)}function k(){return oe(Gf.current)}function ce(e){e.memoizedState!==null&&D(Jf,e,e);var t=oe(Gf.current),n=e.type,r=Mu(t.context,n);n=Pt(t.ancestorInfo,n),r={context:r,ancestorInfo:n},t!==r&&(D(Kf,e,e),D(Gf,r,e))}function le(e){Kf.current===e&&(ae(Gf,e),ae(Kf,e)),Jf.current===e&&(ae(Jf,e),xC._currentValue=bC)}function ue(){}function de(){if(Yf===0){Xf=console.log,Zf=console.info,Qf=console.warn,$f=console.error,ep=console.group,tp=console.groupCollapsed,np=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ue,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}Yf++}function fe(){if(Yf--,Yf===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:xf({},e,{value:Xf}),info:xf({},e,{value:Zf}),warn:xf({},e,{value:Qf}),error:xf({},e,{value:$f}),group:xf({},e,{value:ep}),groupCollapsed:xf({},e,{value:tp}),groupEnd:xf({},e,{value:np})})}0>Yf&&console.error(`disabledDepth fell below zero. This is a bug in React. Please file an issue.`)}function pe(e){var t=Error.prepareStackTrace;if(Error.prepareStackTrace=void 0,e=e.stack,Error.prepareStackTrace=t,e.startsWith(`Error: react-stack-top-frame
`)&&(e=e.slice(29)),t=e.indexOf(`
`),t!==-1&&(e=e.slice(t+1)),t=e.indexOf(`react_stack_bottom_frame`),t!==-1&&(t=e.lastIndexOf(`
`,t)),t!==-1)e=e.slice(0,t);else return``;return e}function me(e){if(rp===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);rp=t&&t[1]||``,ip=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+rp+e+ip}function A(e,t){if(!e||ap)return``;var n=op.get(e);if(n!==void 0)return n;ap=!0,n=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var r=null;r=Y.H,Y.H=null,de();try{var i={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,`name`);a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var o=i.DetermineComponentFrameRoot(),s=o[0],c=o[1];if(s&&c){var l=s.split(`
`),u=c.split(`
`);for(o=a=0;a<l.length&&!l[a].includes(`DetermineComponentFrameRoot`);)a++;for(;o<u.length&&!u[o].includes(`DetermineComponentFrameRoot`);)o++;if(a===l.length||o===u.length)for(a=l.length-1,o=u.length-1;1<=a&&0<=o&&l[a]!==u[o];)o--;for(;1<=a&&0<=o;a--,o--)if(l[a]!==u[o]){if(a!==1||o!==1)do if(a--,o--,0>o||l[a]!==u[o]){var d=`
`+l[a].replace(` at new `,` at `);return e.displayName&&d.includes(`<anonymous>`)&&(d=d.replace(`<anonymous>`,e.displayName)),typeof e==`function`&&op.set(e,d),d}while(1<=a&&0<=o);break}}}finally{ap=!1,Y.H=r,fe(),Error.prepareStackTrace=n}return l=(l=e?e.displayName||e.name:``)?me(l):``,typeof e==`function`&&op.set(e,l),l}function he(e,t){switch(e.tag){case 26:case 27:case 5:return me(e.type);case 16:return me(`Lazy`);case 13:return e.child!==t&&t!==null?me(`Suspense Fallback`):me(`Suspense`);case 19:return me(`SuspenseList`);case 0:case 15:return A(e.type,!1);case 11:return A(e.type.render,!1);case 1:return A(e.type,!0);case 31:return me(`Activity`);default:return``}}function ge(e){try{var t=``,n=null;do{t+=he(e,n);var r=e._debugInfo;if(r)for(var i=r.length-1;0<=i;i--){var a=r[i];if(typeof a.name==`string`){var o=t;a:{var s=a.name,c=a.env,l=a.debugLocation;if(l!=null){var u=pe(l),d=u.lastIndexOf(`
`),f=d===-1?u:u.slice(d+1);if(f.indexOf(s)!==-1){var p=`
`+f;break a}}p=me(s+(c?` [`+c+`]`:``))}t=o+p}}n=e,e=e.return}while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}function _e(e){return(e=e?e.displayName||e.name:``)?me(e):``}function ve(){if(sp===null)return null;var e=sp._debugOwner;return e==null?null:re(e)}function ye(){if(sp===null)return``;var e=sp;try{var t=``;switch(e.tag===6&&(e=e.return),e.tag){case 26:case 27:case 5:t+=me(e.type);break;case 13:t+=me(`Suspense`);break;case 19:t+=me(`SuspenseList`);break;case 31:t+=me(`Activity`);break;case 30:case 0:case 15:case 1:e._debugOwner||t!==``||(t+=_e(e.type));break;case 11:e._debugOwner||t!==``||(t+=_e(e.type.render))}for(;e;)if(typeof e.tag==`number`){var n=e;e=n._debugOwner;var r=n._debugStack;if(e&&r){var i=pe(r);i!==``&&(t+=`
`+i)}}else if(e.debugStack!=null){var a=e.debugStack;(e=e.owner)&&a&&(t+=`
`+pe(a))}else break;var o=t}catch(e){o=`
Error generating stack: `+e.message+`
`+e.stack}return o}function j(e,t,n,r,i,a,o){var s=sp;be(e);try{return e!==null&&e._debugTask?e._debugTask.run(t.bind(null,n,r,i,a,o)):t(n,r,i,a,o)}finally{be(s)}throw Error(`runWithFiberInDEV should never be called in production. This is a bug in React.`)}function be(e){Y.getCurrentStack=e===null?null:ye,cp=!1,sp=e}function xe(e){return typeof Symbol==`function`&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||`Object`}function Se(e){try{return Ce(e),!1}catch{return!0}}function Ce(e){return``+e}function M(e,t){if(Se(e))return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",t,xe(e)),Ce(e)}function N(e,t){if(Se(e))return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",t,xe(e)),Ce(e)}function we(e){if(Se(e))return console.error(`Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.`,xe(e)),Ce(e)}function Te(e){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`)return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled)return!0;if(!t.supportsFiber)return console.error(`The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools`),!0;try{Cp=t.inject(e),wp=t}catch(e){console.error(`React instrumentation encountered an error: %o.`,e)}return!!t.checkDCE}function Ee(e){if(typeof xp==`function`&&Sp(e),wp&&typeof wp.setStrictMode==`function`)try{wp.setStrictMode(Cp,e)}catch(e){Tp||(Tp=!0,console.error(`React instrumentation encountered an error: %o`,e))}}function De(e){return e>>>=0,e===0?32:31-(Op(e)/kp|0)|0}function Oe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return console.error(`Should have found matching lanes. This is a bug in React.`),e}}function ke(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Oe(n))):i=Oe(o):i=Oe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Oe(n))):i=Oe(o)):i=Oe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ae(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function je(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return console.error(`Should have found matching lanes. This is a bug in React.`),-1}}function Me(){var e=Mp;return Mp<<=1,!(Mp&62914560)&&(Mp=4194304),e}function Ne(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pe(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Fe(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Dp(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&P(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function P(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Dp(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function Ie(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Dp(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function Le(e,t){var n=t&-t;return n=n&42?1:F(n),(n&(e.suspendedLanes|t))===0?n:0}function F(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function I(e,t,n){if(Ep)for(e=e.pendingUpdatersLaneMap;0<n;){var r=31-Dp(n),i=1<<r;e[r].add(t),n&=~i}}function Re(e,t){if(Ep)for(var n=e.pendingUpdatersLaneMap,r=e.memoizedUpdaters;0<t;){var i=31-Dp(t);e=1<<i,i=n[i],0<i.size&&(i.forEach(function(e){var t=e.alternate;t!==null&&r.has(t)||r.add(e)}),i.clear()),t&=~e}}function ze(e){return e&=-e,Np!==0&&Np<e?Pp!==0&&Pp<e?e&134217727?Fp:Ip:Pp:Np}function Be(){var e=Bf.p;return e===0?(e=window.event,e===void 0?Fp:nf(e.type)):e}function Ve(e,t){var n=Bf.p;try{return Bf.p=e,t()}finally{Bf.p=n}}function He(e){delete e[Rp],delete e[zp],delete e[Vp],delete e[Hp],delete e[Up]}function Ue(e){var t=e[Rp];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bp]||n[Rp]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fd(e);e!==null;){if(n=e[Rp])return n;e=fd(e)}return t}e=n,n=e.parentNode}return null}function We(e){if(e=e[Rp]||e[Bp]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ge(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(`getNodeFromInstance: Invalid argument.`)}function Ke(e){var t=e[Wp];return t||=e[Wp]={hoistableStyles:new Map,hoistableScripts:new Map},t}function L(e){e[Gp]=!0}function qe(e,t){Je(e,t),Je(e+`Capture`,t)}function Je(e,t){qp[e]&&console.error("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",e),qp[e]=t;var n=e.toLowerCase();for(Jp[n]=e,e===`onDoubleClick`&&(Jp.ondblclick=e),e=0;e<t.length;e++)Kp.add(t[e])}function Ye(e,t){Yp[t.type]||t.onChange||t.onInput||t.readOnly||t.disabled||t.value==null||console.error(e===`select`?"You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`.":"You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."),t.onChange||t.readOnly||t.disabled||t.checked==null||console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}function Xe(e){return lp.call(Qp,e)?!0:lp.call(Zp,e)?!1:Xp.test(e)?Qp[e]=!0:(Zp[e]=!0,console.error("Invalid attribute name: `%s`",e),!1)}function Ze(e,t,n){if(Xe(t)){if(!e.hasAttribute(t)){switch(typeof n){case`symbol`:case`object`:return n;case`function`:return n;case`boolean`:if(!1===n)return n}return n===void 0?void 0:null}return e=e.getAttribute(t),e===``&&!0===n?!0:(M(n,t),e===``+n?n:e)}}function Qe(e,t,n){if(Xe(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}M(n,t),e.setAttribute(t,``+n)}}function $e(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}M(n,t),e.setAttribute(t,``+n)}}function et(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}M(r,n),e.setAttributeNS(t,n,``+r)}}function tt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return we(e),e;default:return``}}function nt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function rt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){we(e),n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){we(e),n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function it(e){if(!e._valueTracker){var t=nt(e)?`checked`:`value`;e._valueTracker=rt(e,t,``+e[t])}}function at(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=nt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function ot(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function st(e){return e.replace($p,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function R(e,t){t.checked===void 0||t.defaultChecked===void 0||tm||(console.error(`%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components`,ve()||`A component`,t.type),tm=!0),t.value===void 0||t.defaultValue===void 0||em||(console.error(`%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components`,ve()||`A component`,t.type),em=!0)}function ct(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?(M(o,`type`),e.type=o):e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+tt(t)):e.value!==``+tt(t)&&(e.value=``+tt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):ut(e,o,tt(n)):ut(e,o,tt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?(M(s,`name`),e.name=``+tt(s)):e.removeAttribute(`name`)}function lt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(M(a,`type`),e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){it(e);return}n=n==null?``:``+tt(n),t=t==null?n:``+tt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(M(o,`name`),e.name=o),it(e)}function ut(e,t,n){t===`number`&&ot(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function dt(e,t){t.value??(typeof t.children==`object`&&t.children!==null?yf.Children.forEach(t.children,function(e){e==null||typeof e==`string`||typeof e==`number`||typeof e==`bigint`||rm||(rm=!0,console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."))}):t.dangerouslySetInnerHTML==null||im||(im=!0,console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))),t.selected==null||nm||(console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),nm=!0)}function ft(){var e=ve();return e?`

Check the render method of \``+e+"`.":``}function pt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+tt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function mt(e,t){for(e=0;e<om.length;e++){var n=om[e];if(t[n]!=null){var r=zf(t[n]);t.multiple&&!r?console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",n,ft()):!t.multiple&&r&&console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",n,ft())}}t.value===void 0||t.defaultValue===void 0||am||(console.error(`Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components`),am=!0)}function ht(e,t){t.value===void 0||t.defaultValue===void 0||sm||(console.error(`%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components`,ve()||`A component`),sm=!0),t.children!=null&&t.value==null&&console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.")}function gt(e,t,n){if(t!=null&&(t=``+tt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+tt(n)}function _t(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(zf(r)){if(1<r.length)throw Error(`<textarea> can only have at most one child.`);r=r[0]}n=r}n??=``,t=n}n=tt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),it(e)}function vt(e,t){return e.serverProps===void 0&&e.serverTail.length===0&&e.children.length===1&&3<e.distanceFromLeaf&&e.distanceFromLeaf>15-t?vt(e.children[0],t):e}function yt(e){return`  `+`  `.repeat(e)}function bt(e){return`+ `+`  `.repeat(e)}function xt(e){return`- `+`  `.repeat(e)}function St(e){switch(e.tag){case 26:case 27:case 5:return e.type;case 16:return`Lazy`;case 31:return`Activity`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 0:case 15:return e=e.type,e.displayName||e.name||null;case 11:return e=e.type.render,e.displayName||e.name||null;case 1:return e=e.type,e.displayName||e.name||null;default:return null}}function Ct(e,t){return cm.test(e)?(e=JSON.stringify(e),e.length>t-2?8>t?`{"..."}`:`{`+e.slice(0,t-7)+`..."}`:`{`+e+`}`):e.length>t?5>t?`{"..."}`:e.slice(0,t-3)+`...`:e}function z(e,t,n){var r=120-2*n;if(t===null)return bt(n)+Ct(e,r)+`
`;if(typeof t==`string`){for(var i=0;i<t.length&&i<e.length&&t.charCodeAt(i)===e.charCodeAt(i);i++);return i>r-8&&10<i&&(e=`...`+e.slice(i-8),t=`...`+t.slice(i-8)),bt(n)+Ct(e,r)+`
`+xt(n)+Ct(t,r)+`
`}return yt(n)+Ct(e,r)+`
`}function wt(e){return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/,function(e,t){return t})}function Tt(e,t){switch(typeof e){case`string`:return e=JSON.stringify(e),e.length>t?5>t?`"..."`:e.slice(0,t-4)+`..."`:e;case`object`:if(e===null)return`null`;if(zf(e))return`[...]`;if(e.$$typeof===Cf)return(t=T(e.type))?`<`+t+`>`:`<...>`;var n=wt(e);if(n===`Object`){for(var r in n=``,t-=2,e)if(e.hasOwnProperty(r)){var i=JSON.stringify(r);if(i!==`"`+r+`"`&&(r=i),t-=r.length-2,i=Tt(e[r],15>t?t:15),t-=i.length,0>t){n+=n===``?`...`:`, ...`;break}n+=(n===``?``:`,`)+r+`:`+i}return`{`+n+`}`}return n;case`function`:return(t=e.displayName||e.name)?`function `+t:`function`;default:return String(e)}}function Et(e,t){return typeof e!=`string`||cm.test(e)?`{`+Tt(e,t-2)+`}`:e.length>t-2?5>t?`"..."`:`"`+e.slice(0,t-5)+`..."`:`"`+e+`"`}function Dt(e,t,n){var r=120-n.length-e.length,i=[],a;for(a in t)if(t.hasOwnProperty(a)&&a!==`children`){var o=Et(t[a],120-n.length-a.length-1);r-=a.length+o.length+2,i.push(a+`=`+o)}return i.length===0?n+`<`+e+`>
`:0<r?n+`<`+e+` `+i.join(` `)+`>
`:n+`<`+e+`
`+n+`  `+i.join(`
`+n+`  `)+`
`+n+`>
`}function Ot(e,t,n){var r=``,i=xf({},t),a;for(a in e)if(e.hasOwnProperty(a)){delete i[a];var o=120-2*n-a.length-2,s=Tt(e[a],o);t.hasOwnProperty(a)?(o=Tt(t[a],o),r+=bt(n)+a+`: `+s+`
`,r+=xt(n)+a+`: `+o+`
`):r+=bt(n)+a+`: `+s+`
`}for(var c in i)i.hasOwnProperty(c)&&(e=Tt(i[c],120-2*n-c.length-2),r+=xt(n)+c+`: `+e+`
`);return r}function kt(e,t,n,r){var i=``,a=new Map;for(l in n)n.hasOwnProperty(l)&&a.set(l.toLowerCase(),l);if(a.size===1&&a.has(`children`))i+=Dt(e,t,yt(r));else{for(var o in t)if(t.hasOwnProperty(o)&&o!==`children`){var s=120-2*(r+1)-o.length-1,c=a.get(o.toLowerCase());if(c!==void 0){a.delete(o.toLowerCase());var l=t[o];c=n[c];var u=Et(l,s);s=Et(c,s),typeof l==`object`&&l&&typeof c==`object`&&c&&wt(l)===`Object`&&wt(c)===`Object`&&(2<Object.keys(l).length||2<Object.keys(c).length||-1<u.indexOf(`...`)||-1<s.indexOf(`...`))?i+=yt(r+1)+o+`={{
`+Ot(l,c,r+2)+yt(r+1)+`}}
`:(i+=bt(r+1)+o+`=`+u+`
`,i+=xt(r+1)+o+`=`+s+`
`)}else i+=yt(r+1)+o+`=`+Et(t[o],s)+`
`}a.forEach(function(e){if(e!==`children`){var t=120-2*(r+1)-e.length-1;i+=xt(r+1)+e+`=`+Et(n[e],t)+`
`}}),i=i===``?yt(r)+`<`+e+`>
`:yt(r)+`<`+e+`
`+i+yt(r)+`>
`}return e=n.children,t=t.children,typeof e==`string`||typeof e==`number`||typeof e==`bigint`?(a=``,(typeof t==`string`||typeof t==`number`||typeof t==`bigint`)&&(a=``+t),i+=z(a,``+e,r+1)):(typeof t==`string`||typeof t==`number`||typeof t==`bigint`)&&(i=e==null?i+z(``+t,null,r+1):i+z(``+t,void 0,r+1)),i}function At(e,t){var n=St(e);if(n===null){for(n=``,e=e.child;e;)n+=At(e,t),e=e.sibling;return n}return yt(t)+`<`+n+`>
`}function jt(e,t){var n=vt(e,t);if(n!==e&&(e.children.length!==1||e.children[0]!==n))return yt(t)+`...
`+jt(n,t+1);n=``;var r=e.fiber._debugInfo;if(r)for(var i=0;i<r.length;i++){var a=r[i].name;typeof a==`string`&&(n+=yt(t)+`<`+a+`>
`,t++)}if(r=``,i=e.fiber.pendingProps,e.fiber.tag===6)r=z(i,e.serverProps,t),t++;else if(a=St(e.fiber),a!==null)if(e.serverProps===void 0){r=t;var o=120-2*r-a.length-2,s=``;for(l in i)if(i.hasOwnProperty(l)&&l!==`children`){var c=Et(i[l],15);if(o-=l.length+c.length+2,0>o){s+=` ...`;break}s+=` `+l+`=`+c}r=yt(r)+`<`+a+s+`>
`,t++}else e.serverProps===null?(r=Dt(a,i,bt(t)),t++):typeof e.serverProps==`string`?console.error(`Should not have matched a non HostText fiber to a Text node. This is a bug in React.`):(r=kt(a,i,e.serverProps,t),t++);var l=``;for(i=e.fiber.child,a=0;i&&a<e.children.length;)o=e.children[a],o.fiber===i?(l+=jt(o,t),a++):l+=At(i,t),i=i.sibling;for(i&&0<e.children.length&&(l+=yt(t)+`...
`),i=e.serverTail,e.serverProps===null&&t--,e=0;e<i.length;e++)a=i[e],l=typeof a==`string`?l+(xt(t)+Ct(a,120-2*t)+`
`):l+Dt(a.type,a.props,xt(t));return n+r+l}function Mt(e){try{return`

`+jt(e,0)}catch{return``}}function Nt(e,t,n){for(var r=t,i=null,a=0;r;)r===e&&(a=0),i={fiber:r,children:i===null?[]:[i],serverProps:r===t?n:r===e?null:void 0,serverTail:[],distanceFromLeaf:a},a++,r=r.return;return i===null?``:Mt(i).replaceAll(/^[+-]/gm,`>`)}function Pt(e,t){var n=xf({},e||pm),r={tag:t};return um.indexOf(t)!==-1&&(n.aTagInScope=null,n.buttonTagInScope=null,n.nobrTagInScope=null),dm.indexOf(t)!==-1&&(n.pTagInButtonScope=null),lm.indexOf(t)!==-1&&t!==`address`&&t!==`div`&&t!==`p`&&(n.listItemTagAutoclosing=null,n.dlItemTagAutoclosing=null),n.current=r,t===`form`&&(n.formTag=r),t===`a`&&(n.aTagInScope=r),t===`button`&&(n.buttonTagInScope=r),t===`nobr`&&(n.nobrTagInScope=r),t===`p`&&(n.pTagInButtonScope=r),t===`li`&&(n.listItemTagAutoclosing=r),(t===`dd`||t===`dt`)&&(n.dlItemTagAutoclosing=r),t===`#document`||t===`html`?n.containerTagInScope=null:n.containerTagInScope||=r,e!==null||t!==`#document`&&t!==`html`&&t!==`body`?!0===n.implicitRootScope&&(n.implicitRootScope=!1):n.implicitRootScope=!0,n}function Ft(e,t,n){switch(t){case`select`:return e===`hr`||e===`option`||e===`optgroup`||e===`script`||e===`template`||e===`#text`;case`optgroup`:return e===`option`||e===`#text`;case`option`:return e===`#text`;case`tr`:return e===`th`||e===`td`||e===`style`||e===`script`||e===`template`;case`tbody`:case`thead`:case`tfoot`:return e===`tr`||e===`style`||e===`script`||e===`template`;case`colgroup`:return e===`col`||e===`template`;case`table`:return e===`caption`||e===`colgroup`||e===`tbody`||e===`tfoot`||e===`thead`||e===`style`||e===`script`||e===`template`;case`head`:return e===`base`||e===`basefont`||e===`bgsound`||e===`link`||e===`meta`||e===`title`||e===`noscript`||e===`noframes`||e===`style`||e===`script`||e===`template`;case`html`:if(n)break;return e===`head`||e===`body`||e===`frameset`;case`frameset`:return e===`frame`;case`#document`:if(!n)return e===`html`}switch(e){case`h1`:case`h2`:case`h3`:case`h4`:case`h5`:case`h6`:return t!==`h1`&&t!==`h2`&&t!==`h3`&&t!==`h4`&&t!==`h5`&&t!==`h6`;case`rp`:case`rt`:return fm.indexOf(t)===-1;case`caption`:case`col`:case`colgroup`:case`frameset`:case`frame`:case`tbody`:case`td`:case`tfoot`:case`th`:case`thead`:case`tr`:return t==null;case`head`:return n||t===null;case`html`:return n&&t===`#document`||t===null;case`body`:return n&&(t===`#document`||t===`html`)||t===null}return!0}function It(e,t){switch(e){case`address`:case`article`:case`aside`:case`blockquote`:case`center`:case`details`:case`dialog`:case`dir`:case`div`:case`dl`:case`fieldset`:case`figcaption`:case`figure`:case`footer`:case`header`:case`hgroup`:case`main`:case`menu`:case`nav`:case`ol`:case`p`:case`section`:case`summary`:case`ul`:case`pre`:case`listing`:case`table`:case`hr`:case`xmp`:case`h1`:case`h2`:case`h3`:case`h4`:case`h5`:case`h6`:return t.pTagInButtonScope;case`form`:return t.formTag||t.pTagInButtonScope;case`li`:return t.listItemTagAutoclosing;case`dd`:case`dt`:return t.dlItemTagAutoclosing;case`button`:return t.buttonTagInScope;case`a`:return t.aTagInScope;case`nobr`:return t.nobrTagInScope}return null}function Lt(e,t){for(;e;){switch(e.tag){case 5:case 26:case 27:if(e.type===t)return e}e=e.return}return null}function Rt(e,t){t||=pm;var n=t.current;if(t=(n=Ft(e,n&&n.tag,t.implicitRootScope)?null:n)?null:It(e,t),t=n||t,!t)return!0;var r=t.tag;if(t=String(!!n)+`|`+e+`|`+r,mm[t])return!1;mm[t]=!0;var i=(t=sp)?Lt(t.return,r):null,a=t!==null&&i!==null?Nt(i,t,null):``,o=`<`+e+`>`;return n?(n=``,r===`table`&&e===`tr`&&(n+=` Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser.`),console.error(`In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,o,r,n,a)):console.error(`In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,o,r,a),t&&(e=t.return,i===null||e===null||i===e&&e._debugOwner===t._debugOwner||j(i,function(){console.error(`<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,r,o)})),!1}function zt(e,t,n){if(n||Ft(`#text`,t,!1))return!0;if(n=`#text|`+t,mm[n])return!1;mm[n]=!0;var r=(n=sp)?Lt(n,t):null;return n=n!==null&&r!==null?Nt(r,n,n.tag===6?null:{children:null}):``,/\S/.test(e)?console.error(`In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,t,n):console.error(`In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,t,n),!1}function Bt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}function Vt(e){return e.replace(bm,function(e,t){return t.toUpperCase()})}function Ht(e,t,n){var r=t.indexOf(`--`)===0;r||(-1<t.indexOf(`-`)?Sm.hasOwnProperty(t)&&Sm[t]||(Sm[t]=!0,console.error(`Unsupported style property %s. Did you mean %s?`,t,Vt(t.replace(ym,`ms-`)))):vm.test(t)?Sm.hasOwnProperty(t)&&Sm[t]||(Sm[t]=!0,console.error(`Unsupported vendor-prefixed style property %s. Did you mean %s?`,t,t.charAt(0).toUpperCase()+t.slice(1))):!xm.test(n)||Cm.hasOwnProperty(n)&&Cm[n]||(Cm[n]=!0,console.error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,t,n.replace(xm,``))),typeof n==`number`&&(isNaN(n)?wm||(wm=!0,console.error("`NaN` is an invalid value for the `%s` css style property.",t)):isFinite(n)||Tm||(Tm=!0,console.error("`Infinity` is an invalid value for the `%s` css style property.",t)))),n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Em.has(t)?t===`float`?e.cssFloat=n:(N(n,t),e[t]=(``+n).trim()):e[t]=n+`px`}function Ut(e,t,n){if(t!=null&&typeof t!=`object`)throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");if(t&&Object.freeze(t),e=e.style,n!=null){if(t){var r={};if(n){for(var i in n)if(n.hasOwnProperty(i)&&!t.hasOwnProperty(i))for(var a=hm[i]||[i],o=0;o<a.length;o++)r[a[o]]=i}for(var s in t)if(t.hasOwnProperty(s)&&(!n||n[s]!==t[s]))for(i=hm[s]||[s],a=0;a<i.length;a++)r[i[a]]=s;for(var c in s={},t)for(i=hm[c]||[c],a=0;a<i.length;a++)s[i[a]]=c;for(var l in c={},r)if(i=r[l],(a=s[l])&&i!==a&&(o=i+`,`+a,!c[o])){c[o]=!0,o=console;var u=t[i];o.error.call(o,`%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.`,u==null||typeof u==`boolean`||u===``?`Removing`:`Updating`,i,a)}}for(var d in n)!n.hasOwnProperty(d)||t!=null&&t.hasOwnProperty(d)||(d.indexOf(`--`)===0?e.setProperty(d,``):d===`float`?e.cssFloat=``:e[d]=``);for(var f in t)l=t[f],t.hasOwnProperty(f)&&n[f]!==l&&Ht(e,f,l)}else for(r in t)t.hasOwnProperty(r)&&Ht(e,r,t[r])}function Wt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}function Gt(e){return km.get(e)||e}function Kt(e,t){if(lp.call(Mm,t)&&Mm[t])return!0;if(Pm.test(t)){if(e=`aria-`+t.slice(4).toLowerCase(),e=jm.hasOwnProperty(e)?e:null,e==null)return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",t),Mm[t]=!0;if(t!==e)return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?",t,e),Mm[t]=!0}if(Nm.test(t)){if(e=t.toLowerCase(),e=jm.hasOwnProperty(e)?e:null,e==null)return Mm[t]=!0,!1;t!==e&&(console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?",t,e),Mm[t]=!0)}return!0}function qt(e,t){var n=[],r;for(r in t)Kt(e,r)||n.push(r);t=n.map(function(e){return"`"+e+"`"}).join(`, `),n.length===1?console.error(`Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props`,t,e):1<n.length&&console.error(`Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props`,t,e)}function Jt(e,t,n,r){if(lp.call(Im,t)&&Im[t])return!0;var i=t.toLowerCase();if(i===`onfocusin`||i===`onfocusout`)return console.error(`React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.`),Im[t]=!0;if(typeof n==`function`&&(e===`form`&&t===`action`||e===`input`&&t===`formAction`||e===`button`&&t===`formAction`))return!0;if(r!=null){if(e=r.possibleRegistrationNames,r.registrationNameDependencies.hasOwnProperty(t))return!0;if(r=e.hasOwnProperty(i)?e[i]:null,r!=null)return console.error("Invalid event handler property `%s`. Did you mean `%s`?",t,r),Im[t]=!0;if(Lm.test(t))return console.error("Unknown event handler property `%s`. It will be ignored.",t),Im[t]=!0}else if(Lm.test(t))return Rm.test(t)&&console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",t),Im[t]=!0;if(zm.test(t)||Bm.test(t))return!0;if(i===`innerhtml`)return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),Im[t]=!0;if(i===`aria`)return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),Im[t]=!0;if(i===`is`&&n!=null&&typeof n!=`string`)return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",typeof n),Im[t]=!0;if(typeof n==`number`&&isNaN(n))return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",t),Im[t]=!0;if(Am.hasOwnProperty(i)){if(i=Am[i],i!==t)return console.error("Invalid DOM property `%s`. Did you mean `%s`?",t,i),Im[t]=!0}else if(t!==i)return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",t,i),Im[t]=!0;switch(t){case`dangerouslySetInnerHTML`:case`children`:case`style`:case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:return!0;case`innerText`:case`textContent`:return!0}switch(typeof n){case`boolean`:switch(t){case`autoFocus`:case`checked`:case`multiple`:case`muted`:case`selected`:case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:case`capture`:case`download`:case`inert`:return!0;default:return i=t.toLowerCase().slice(0,5),i===`data-`||i===`aria-`?!0:(n?console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',n,t,t,n,t):console.error(`Received \`%s\` for a non-boolean attribute \`%s\`.

If you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.

If you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.`,n,t,t,n,t,t,t),Im[t]=!0)}case`function`:case`symbol`:return Im[t]=!0,!1;case`string`:if(n===`false`||n===`true`){switch(t){case`checked`:case`selected`:case`multiple`:case`muted`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:case`inert`:break;default:return!0}console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",n,t,n===`false`?`The browser will interpret it as a truthy value.`:`Although this works, it will not work as expected if you pass the string "false".`,t,n),Im[t]=!0}}return!0}function Yt(e,t,n){var r=[],i;for(i in t)Jt(e,i,t[i],n)||r.push(i);t=r.map(function(e){return"`"+e+"`"}).join(`, `),r.length===1?console.error(`Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior `,t,e):1<r.length&&console.error(`Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior `,t,e)}function Xt(e){return Vm.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function Zt(){}function B(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}function Qt(e){var t=We(e);if(t&&(e=t.stateNode)){var n=e[zp]||null;a:switch(e=t.stateNode,t.type){case`input`:if(ct(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(M(t,`name`),n=n.querySelectorAll(`input[name="`+st(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[zp]||null;if(!i)throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");ct(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&at(r)}break a;case`textarea`:gt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&pt(e,!!n.multiple,t,!1)}}}function $t(e,t,n){if(Gm)return e(t,n);Gm=!0;try{return e(t)}finally{if(Gm=!1,(Um!==null||Wm!==null)&&(Yc(),Um&&(t=Um,e=Wm,Wm=Um=null,Qt(t),e)))for(t=0;t<e.length;t++)Qt(e[t])}}function en(e,t){var n=e.stateNode;if(n===null)return null;var r=n[zp]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error("Expected `"+t+"` listener to be a function, instead got a value of `"+typeof n+"` type.");return n}function tn(){if(Zm)return Zm;var e,t=Xm,n=t.length,r,i=`value`in Ym?Ym.value:Ym.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Zm=i.slice(e,1<r?1-r:void 0)}function nn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function rn(){return!0}function V(){return!1}function H(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?rn:V,this.isPropagationStopped=V,this}return xf(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=rn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=rn)},persist:function(){},isPersistent:rn}),t}function an(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hh[e])?!!t[e]:!1}function on(){return an}function sn(e,t){switch(e){case`keyup`:return Sh.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==Ch;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function cn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}function ln(e,t){switch(e){case`compositionend`:return cn(t);case`keypress`:return t.which===Oh?(Ah=!0,kh):null;case`textInput`:return e=t.data,e===kh&&Ah?null:e;default:return null}}function un(e,t){if(jh)return e===`compositionend`||!wh&&sn(e,t)?(e=tn(),Zm=Xm=Ym=null,jh=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Dh&&t.locale!==`ko`?null:t.data;default:return null}}function dn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Mh[e.type]:t===`textarea`}function fn(e){if(!Km)return!1;e=`on`+e;var t=e in document;return t||=(t=document.createElement(`div`),t.setAttribute(e,`return;`),typeof t[e]==`function`),t}function pn(e,t,n,r){Um?Wm?Wm.push(r):Wm=[r]:Um=r,t=iu(t,`onChange`),0<t.length&&(n=new $m(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}function mn(e){Zl(e,0)}function hn(e){if(at(Ge(e)))return e}function gn(e,t){if(e===`change`)return t}function _n(){Nh&&(Nh.detachEvent(`onpropertychange`,vn),Ph=Nh=null)}function vn(e){if(e.propertyName===`value`&&hn(Ph)){var t=[];pn(t,Ph,e,B(e)),$t(mn,t)}}function yn(e,t,n){e===`focusin`?(_n(),Nh=t,Ph=n,Nh.attachEvent(`onpropertychange`,vn)):e===`focusout`&&_n()}function bn(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return hn(Ph)}function xn(e,t){if(e===`click`)return hn(t)}function Sn(e,t){if(e===`input`||e===`change`)return hn(t)}function Cn(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}function wn(e,t){if(Ih(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!lp.call(t,i)||!Ih(e[i],t[i]))return!1}return!0}function Tn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function En(e,t){var n=Tn(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Tn(n)}}function Dn(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Dn(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function On(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ot(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=ot(e.document)}return t}function kn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function An(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vh||Rh==null||Rh!==ot(r)||(r=Rh,`selectionStart`in r&&kn(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bh&&wn(Bh,r)||(Bh=r,r=iu(zh,`onSelect`),0<r.length&&(t=new $m(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Rh)))}function jn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}function Mn(e){if(Uh[e])return Uh[e];if(!Hh[e])return e;var t=Hh[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wh)return Uh[e]=t[n];return e}function Nn(e,t){Qh.set(e,t),qe(t,[e])}function Pn(e){for(var t=og,n=0;n<e.length;n++){var r=e[n];if(typeof r==`object`&&r)if(zf(r)&&r.length===2&&typeof r[0]==`string`){if(t!==og&&t!==lg)return sg;t=lg}else return sg;else{if(typeof r==`function`||typeof r==`string`&&50<r.length||t!==og&&t!==cg)return sg;t=cg}}return t}function Fn(e,t,n,r){for(var i in e)lp.call(e,i)&&i[0]!==`_`&&In(i,e[i],t,n,r)}function In(e,t,n,r,i){switch(typeof t){case`object`:if(t===null){t=`null`;break}else{if(t.$$typeof===Cf){var a=T(t.type)||`…`,o=t.key;t=t.props;var s=Object.keys(t),c=s.length;if(o==null&&c===0){t=`<`+a+` />`;break}if(3>r||c===1&&s[0]===`children`&&o==null){t=`<`+a+` … />`;break}for(var l in n.push([i+`\xA0\xA0`.repeat(r)+e,`<`+a]),o!==null&&In(`key`,o,n,r+1,i),e=!1,t)l===`children`?t.children!=null&&(!zf(t.children)||0<t.children.length)&&(e=!0):lp.call(t,l)&&l[0]!==`_`&&In(l,t[l],n,r+1,i);n.push([``,e?`>…</`+a+`>`:`/>`]);return}if(a=Object.prototype.toString.call(t),a=a.slice(8,a.length-1),a===`Array`){if(l=Pn(t),l===cg||l===og){t=JSON.stringify(t);break}else if(l===lg){for(n.push([i+`\xA0\xA0`.repeat(r)+e,``]),e=0;e<t.length;e++)a=t[e],In(a[0],a[1],n,r+1,i);return}}if(a===`Promise`){if(t.status===`fulfilled`){if(a=n.length,In(e,t.value,n,r,i),n.length>a){n=n[a],n[1]=`Promise<`+(n[1]||`Object`)+`>`;return}}else if(t.status===`rejected`&&(a=n.length,In(e,t.reason,n,r,i),n.length>a)){n=n[a],n[1]=`Rejected Promise<`+n[1]+`>`;return}n.push([`\xA0\xA0`.repeat(r)+e,`Promise`]);return}a===`Object`&&(l=Object.getPrototypeOf(t))&&typeof l.constructor==`function`&&(a=l.constructor.name),n.push([i+`\xA0\xA0`.repeat(r)+e,a===`Object`?3>r?``:`…`:a]),3>r&&Fn(t,n,r+1,i);return}case`function`:t=t.name===``?`() => {}`:t.name+`() {}`;break;case`string`:t=t===ag?`…`:JSON.stringify(t);break;case`undefined`:t=`undefined`;break;case`boolean`:t=t?`true`:`false`;break;default:t=String(t)}n.push([i+`\xA0\xA0`.repeat(r)+e,t])}function Ln(e,t,n,r){var i=!0;for(o in e)o in t||(n.push([ug+`\xA0\xA0`.repeat(r)+o,`…`]),i=!1);for(var a in t)if(a in e){var o=e[a],s=t[a];if(o!==s){if(r===0&&a===`children`)i=`\xA0\xA0`.repeat(r)+a,n.push([ug+i,`…`],[dg+i,`…`]);else{if(!(3<=r)){if(typeof o==`object`&&typeof s==`object`&&o!==null&&s!==null&&o.$$typeof===s.$$typeof)if(s.$$typeof===Cf){if(o.type===s.type&&o.key===s.key){o=T(s.type)||`…`,i=`\xA0\xA0`.repeat(r)+a,o=`<`+o+` … />`,n.push([ug+i,o],[dg+i,o]),i=!1;continue}}else{var c=Object.prototype.toString.call(o),l=Object.prototype.toString.call(s);if(c===l&&(l===`[object Object]`||l===`[object Array]`)){c=[fg+`\xA0\xA0`.repeat(r)+a,l===`[object Array]`?`Array`:``],n.push(c),l=n.length,Ln(o,s,n,r+1)?l===n.length&&(c[1]=`Referentially unequal but deeply equal objects. Consider memoization.`):i=!1;continue}}else if(typeof o==`function`&&typeof s==`function`&&o.name===s.name&&o.length===s.length&&(c=Function.prototype.toString.call(o),l=Function.prototype.toString.call(s),c===l)){o=s.name===``?`() => {}`:s.name+`() {}`,n.push([fg+`\xA0\xA0`.repeat(r)+a,o+` Referentially unequal function closure. Consider memoization.`]);continue}}In(a,o,n,r,ug),In(a,s,n,r,dg)}i=!1}}else n.push([dg+`\xA0\xA0`.repeat(r)+a,`…`]),i=!1;return i}function Rn(e){gg=e&63?`Blocking`:e&64?`Gesture`:e&4194176?`Transition`:e&62914560?`Suspense`:e&2080374784?`Idle`:`Other`}function zn(e,t,n,r){pg&&(yg.start=t,yg.end=n,vg.color=`warning`,vg.tooltipText=r,vg.properties=null,(e=e._debugTask)?e.run(performance.measure.bind(performance,r,yg)):performance.measure(r,yg))}function Bn(e,t,n){zn(e,t,n,`Reconnect`)}function Vn(e,t,n,r,i){var a=E(e);if(a!==null&&pg){var o=e.alternate,s=e.actualDuration;if(o===null||o.child!==e.child)for(var c=e.child;c!==null;c=c.sibling)s-=c.actualDuration;r=.5>s?r?`tertiary-light`:`primary-light`:10>s?r?`tertiary`:`primary`:100>s?r?`tertiary-dark`:`primary-dark`:`error`;var l=e.memoizedProps;s=e._debugTask,l!==null&&o!==null&&o.memoizedProps!==l?(c=[bg],l=Ln(o.memoizedProps,l,c,0),1<c.length&&(l&&!_g&&(o.lanes&i)===0&&100<e.actualDuration?(_g=!0,c[0]=Sg,vg.color=`warning`,vg.tooltipText=xg):(vg.color=r,vg.tooltipText=a),vg.properties=c,yg.start=t,yg.end=n,s==null?performance.measure(`​`+a,yg):s.run(performance.measure.bind(performance,`​`+a,yg)))):s==null?console.timeStamp(a,t,n,mg,void 0,r):s.run(console.timeStamp.bind(console,a,t,n,mg,void 0,r))}}function Hn(e,t,n,r){if(pg){var i=E(e);if(i!==null){for(var a=null,o=[],s=0;s<r.length;s++){var c=r[s];a==null&&c.source!==null&&(a=c.source._debugTask),c=c.value,o.push([`Error`,typeof c==`object`&&c&&typeof c.message==`string`?String(c.message):String(c)])}e.key!==null&&In(`key`,e.key,o,0,``),e.memoizedProps!==null&&Fn(e.memoizedProps,o,0,``),a??=e._debugTask,e={start:t,end:n,detail:{devtools:{color:`error`,track:mg,tooltipText:e.tag===13?`Hydration failed`:`Error boundary caught an error`,properties:o}}},a?a.run(performance.measure.bind(performance,`​`+i,e)):performance.measure(`​`+i,e)}}}function Un(e,t,n,r,i){if(i!==null){if(pg){var a=E(e);if(a!==null){r=[];for(var o=0;o<i.length;o++){var s=i[o].value;r.push([`Error`,typeof s==`object`&&s&&typeof s.message==`string`?String(s.message):String(s)])}e.key!==null&&In(`key`,e.key,r,0,``),e.memoizedProps!==null&&Fn(e.memoizedProps,r,0,``),t={start:t,end:n,detail:{devtools:{color:`error`,track:mg,tooltipText:`A lifecycle or effect errored`,properties:r}}},(e=e._debugTask)?e.run(performance.measure.bind(performance,`​`+a,t)):performance.measure(`​`+a,t)}}}else a=E(e),a!==null&&pg&&(i=1>r?`secondary-light`:100>r?`secondary`:500>r?`secondary-dark`:`error`,(e=e._debugTask)?e.run(console.timeStamp.bind(console,a,t,n,mg,void 0,i)):console.timeStamp(a,t,n,mg,void 0,i))}function Wn(e,t,n,r){if(pg&&!(t<=e)){var i=(n&738197653)===n?`tertiary-dark`:`primary-dark`;n=(n&536870912)===n?`Prepared`:(n&201326741)===n?`Hydrated`:`Render`,r?r.run(console.timeStamp.bind(console,n,e,t,gg,hg,i)):console.timeStamp(n,e,t,gg,hg,i)}}function Gn(e,t,n,r){!pg||t<=e||(n=(n&738197653)===n?`tertiary-dark`:`primary-dark`,r?r.run(console.timeStamp.bind(console,`Prewarm`,e,t,gg,hg,n)):console.timeStamp(`Prewarm`,e,t,gg,hg,n))}function Kn(e,t,n,r){!pg||t<=e||(n=(n&738197653)===n?`tertiary-dark`:`primary-dark`,r?r.run(console.timeStamp.bind(console,`Suspended`,e,t,gg,hg,n)):console.timeStamp(`Suspended`,e,t,gg,hg,n))}function qn(e,t,n,r,i,a){if(pg&&!(t<=e)){n=[];for(var o=0;o<r.length;o++){var s=r[o].value;n.push([`Recoverable Error`,typeof s==`object`&&s&&typeof s.message==`string`?String(s.message):String(s)])}e={start:e,end:t,detail:{devtools:{color:`primary-dark`,track:gg,trackGroup:hg,tooltipText:i?`Hydration Failed`:`Recovered after Error`,properties:n}}},a?a.run(performance.measure.bind(performance,`Recovered`,e)):performance.measure(`Recovered`,e)}}function Jn(e,t,n,r){!pg||t<=e||(r?r.run(console.timeStamp.bind(console,`Errored`,e,t,gg,hg,`error`)):console.timeStamp(`Errored`,e,t,gg,hg,`error`))}function Yn(e,t,n,r){!pg||t<=e||(r?r.run(console.timeStamp.bind(console,n,e,t,gg,hg,`secondary-light`)):console.timeStamp(n,e,t,gg,hg,`secondary-light`))}function Xn(e,t,n,r,i){if(pg&&!(t<=e)){for(var a=[],o=0;o<n.length;o++){var s=n[o].value;a.push([`Error`,typeof s==`object`&&s&&typeof s.message==`string`?String(s.message):String(s)])}e={start:e,end:t,detail:{devtools:{color:`error`,track:gg,trackGroup:hg,tooltipText:r?`Remaining Effects Errored`:`Commit Errored`,properties:a}}},i?i.run(performance.measure.bind(performance,`Errored`,e)):performance.measure(`Errored`,e)}}function Zn(e,t,n){!pg||t<=e||(n?n.run(console.timeStamp.bind(console,`Animating`,e,t,gg,hg,`secondary-dark`)):console.timeStamp(`Animating`,e,t,gg,hg,`secondary-dark`))}function Qn(){for(var e=Eg,t=Dg=Eg=0;t<e;){var n=Tg[t];Tg[t++]=null;var r=Tg[t];Tg[t++]=null;var i=Tg[t];Tg[t++]=null;var a=Tg[t];if(Tg[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&nr(n,i,a)}}function $n(e,t,n,r){Tg[Eg++]=e,Tg[Eg++]=t,Tg[Eg++]=n,Tg[Eg++]=r,Dg|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function er(e,t,n,r){return $n(e,t,n,r),rr(e)}function tr(e,t){return $n(e,null,null,t),rr(e)}function nr(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&Cg||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Dp(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function rr(e){if(qx>Kx)throw Qx=qx=0,$x=Jx=null,Error(`Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.`);Qx>Zx&&(Qx=0,$x=null,console.error(`Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.`)),e.alternate===null&&e.flags&4098&&Nl(e);for(var t=e,n=t.return;n!==null;)t.alternate===null&&t.flags&4098&&Nl(e),t=n,n=t.return;return t.tag===3?t.stateNode:null}function ir(e){if(kg===null)return e;var t=kg(e);return t===void 0?e:t.current}function ar(e){if(kg===null)return e;var t=kg(e);return t===void 0?e!=null&&typeof e.render==`function`&&(t=ir(e.render),e.render!==t)?(t={$$typeof:Af,render:t},e.displayName!==void 0&&(t.displayName=e.displayName),t):e:t.current}function or(e,t){if(kg===null)return!1;var n=e.elementType;t=t.type;var r=!1,i=typeof t==`object`&&t?t.$$typeof:null;switch(e.tag){case 1:typeof t==`function`&&(r=!0);break;case 0:(typeof t==`function`||i===Pf)&&(r=!0);break;case 11:(i===Af||i===Pf)&&(r=!0);break;case 14:case 15:(i===Nf||i===Pf)&&(r=!0);break;default:return!1}return!!(r&&(e=kg(n),e!==void 0&&e===kg(t)))}function sr(e){kg!==null&&typeof WeakSet==`function`&&(Ag===null&&(Ag=new WeakSet),Ag.add(e))}function cr(e,t,n){do{var r=e,i=r.alternate,a=r.child,o=r.sibling,s=r.tag;r=r.type;var c=null;switch(s){case 0:case 15:case 1:c=r;break;case 11:c=r.render}if(kg===null)throw Error(`Expected resolveFamily to be set during hot reload.`);var l=!1;if(r=!1,c!==null&&(c=kg(c),c!==void 0&&(n.has(c)?r=!0:t.has(c)&&(s===1?r=!0:l=!0))),Ag!==null&&(Ag.has(e)||i!==null&&Ag.has(i))&&(r=!0),r&&(e._debugNeedsRemount=!0),(r||l)&&(i=tr(e,2),i!==null&&Wc(i,e,2)),a===null||r||cr(a,t,n),o===null)break;e=o}while(1)}function U(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null,this.actualDuration=-0,this.actualStartTime=-1.1,this.treeBaseDuration=this.selfBaseDuration=-0,this._debugTask=this._debugStack=this._debugOwner=this._debugInfo=null,this._debugNeedsRemount=!1,this._debugHookTypes=null,Ig||typeof Object.preventExtensions!=`function`||Object.preventExtensions(this)}function lr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ur(e,t){var n=e.alternate;switch(n===null?(n=h(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n._debugOwner=e._debugOwner,n._debugStack=e._debugStack,n._debugTask=e._debugTask,n._debugHookTypes=e._debugHookTypes,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null,n.actualDuration=-0,n.actualStartTime=-1.1),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext,_debugThenableState:t._debugThenableState},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n.selfBaseDuration=e.selfBaseDuration,n.treeBaseDuration=e.treeBaseDuration,n._debugInfo=e._debugInfo,n._debugNeedsRemount=e._debugNeedsRemount,n.tag){case 0:case 15:n.type=ir(e.type);break;case 1:n.type=ir(e.type);break;case 11:n.type=ar(e.type)}return n}function dr(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null,e.selfBaseDuration=0,e.treeBaseDuration=0):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext,_debugThenableState:t._debugThenableState},e.selfBaseDuration=n.selfBaseDuration,e.treeBaseDuration=n.treeBaseDuration),e}function fr(e,t,n,r,i,a){var o=0,s=e;if(typeof e==`function`)lr(e)&&(o=1),s=ir(s);else if(typeof e==`string`)o=k(),o=Fd(e,n,o)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case Ff:return t=h(31,n,t,i),t.elementType=Ff,t.lanes=a,t;case Tf:return mr(n.children,i,a,t);case Ef:o=8,i|=Ng,i|=Pg;break;case Df:return e=n,r=i,typeof e.id!=`string`&&console.error('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',typeof e.id),t=h(12,e,t,r|Mg),t.elementType=Df,t.lanes=a,t.stateNode={effectDuration:0,passiveEffectDuration:0},t;case jf:return t=h(13,n,t,i),t.elementType=jf,t.lanes=a,t;case Mf:return t=h(19,n,t,i),t.elementType=Mf,t.lanes=a,t;default:if(typeof e==`object`&&e)switch(e.$$typeof){case kf:o=10;break a;case Of:o=9;break a;case Af:o=11,s=ar(s);break a;case Nf:o=14;break a;case Pf:o=16,s=null;break a}s=``,(e===void 0||typeof e==`object`&&e&&Object.keys(e).length===0)&&(s+=` You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.`),e===null?n=`null`:zf(e)?n=`array`:e!==void 0&&e.$$typeof===Cf?(n=`<`+(T(e.type)||`Unknown`)+` />`,s=` Did you accidentally export a JSX literal instead of a component?`):n=typeof e,(o=r?re(r):null)&&(s+=`

Check the render method of \``+o+"`."),o=29,n=Error(`Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: `+(n+`.`+s)),s=null}return t=h(o,n,t,i),t.elementType=e,t.type=s,t.lanes=a,t._debugOwner=r,t}function pr(e,t,n){return t=fr(e.type,e.key,e.props,e._owner,t,n),t._debugOwner=e._owner,t._debugStack=e._debugStack,t._debugTask=e._debugTask,t}function mr(e,t,n,r){return e=h(7,e,r,t),e.lanes=n,e}function hr(e,t,n){return e=h(6,e,null,t),e.lanes=n,e}function gr(e){var t=h(18,null,null,X);return t.stateNode=e,t}function _r(e,t,n){return t=h(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function vr(e,t){if(typeof e==`object`&&e){var n=Rg.get(e);return n===void 0?(t={value:e,source:t,stack:ge(t)},Rg.set(e,t),t):n}return{value:e,source:t,stack:ge(t)}}function yr(e,t){Tr(),zg[Bg++]=Hg,zg[Bg++]=Vg,Vg=e,Hg=t}function br(e,t,n){Tr(),Ug[Wg++]=Kg,Ug[Wg++]=qg,Ug[Wg++]=Gg,Gg=e;var r=Kg;e=qg;var i=32-Dp(r)-1;r&=~(1<<i),n+=1;var a=32-Dp(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Kg=1<<32-Dp(t)+i|n<<i|r,qg=a+e}else Kg=1<<a|n<<i|r,qg=e}function xr(e){Tr(),e.return!==null&&(yr(e,1),br(e,1,0))}function Sr(e){for(;e===Vg;)Vg=zg[--Bg],zg[Bg]=null,Hg=zg[--Bg],zg[Bg]=null;for(;e===Gg;)Gg=Ug[--Wg],Ug[Wg]=null,qg=Ug[--Wg],Ug[Wg]=null,Kg=Ug[--Wg],Ug[Wg]=null}function Cr(){return Tr(),Gg===null?null:{id:Kg,overflow:qg}}function wr(e,t){Tr(),Ug[Wg++]=Kg,Ug[Wg++]=qg,Ug[Wg++]=Gg,Kg=t.id,qg=t.overflow,Gg=e}function Tr(){Xg||console.error(`Expected to be hydrating. This is a bug in React. Please file an issue.`)}function Er(e,t){if(e.return===null){if(Qg===null)Qg={fiber:e,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:t};else{if(Qg.fiber!==e)throw Error(`Saw multiple hydration diff roots in a pass. This is a bug in React.`);Qg.distanceFromLeaf>t&&(Qg.distanceFromLeaf=t)}return Qg}var n=Er(e.return,t+1).children;return 0<n.length&&n[n.length-1].fiber===e?(n=n[n.length-1],n.distanceFromLeaf>t&&(n.distanceFromLeaf=t),n):(t={fiber:e,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:t},n.push(t),t)}function Dr(){Xg&&console.error(`We should not be hydrating here. This is a bug in React. Please file a bug.`)}function Or(e,t){Zg||(e=Er(e,0),e.serverProps=null,t!==null&&(t=ld(t),e.serverTail.push(t)))}function kr(e){var t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:!1,n=``,r=Qg;throw r!==null&&(Qg=null,n=Mt(r)),Fr(vr(Error(`Hydration failed because the server rendered `+(t?`text`:`HTML`)+` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch`+n),e)),t_}function Ar(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Rp]=e,t[zp]=r,su(n,r),n){case`dialog`:Ql(`cancel`,t),Ql(`close`,t);break;case`iframe`:case`object`:case`embed`:Ql(`load`,t);break;case`video`:case`audio`:for(n=0;n<pS.length;n++)Ql(pS[n],t);break;case`source`:Ql(`error`,t);break;case`img`:case`image`:case`link`:Ql(`error`,t),Ql(`load`,t);break;case`details`:Ql(`toggle`,t);break;case`input`:Ye(`input`,r),Ql(`invalid`,t),R(t,r),lt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`option`:dt(t,r);break;case`select`:Ye(`select`,r),Ql(`invalid`,t),mt(t,r);break;case`textarea`:Ye(`textarea`,r),Ql(`invalid`,t),ht(t,r),_t(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||pu(t.textContent,n)?(r.popover!=null&&(Ql(`beforetoggle`,t),Ql(`toggle`,t)),r.onScroll!=null&&Ql(`scroll`,t),r.onScrollEnd!=null&&Ql(`scrollend`,t),r.onClick!=null&&(t.onclick=Zt),t=!0):t=!1,t||kr(e,!0)}function jr(e){for(Jg=e.return;Jg;)switch(Jg.tag){case 5:case 31:case 13:e_=!1;return;case 27:case 3:e_=!0;return;default:Jg=Jg.return}}function Mr(e){if(e!==Jg)return!1;if(!Xg)return jr(e),Xg=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Nu(e.type,e.memoizedProps)),n=!n),n&&Yg){for(n=Yg;n;){var r=Er(e,0),i=ld(n);r.serverTail.push(i),n=i.type===`Suspense`?dd(n):cd(n.nextSibling)}kr(e)}if(jr(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(`Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.`);Yg=dd(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(`Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.`);Yg=dd(e)}else t===27?(t=Yg,Wu(e.type)?(e=rC,rC=null,Yg=e):Yg=t):Yg=Jg?cd(e.stateNode.nextSibling):null;return!0}function Nr(){Yg=Jg=null,Zg=Xg=!1}function Pr(){var e=$g;return e!==null&&(hx===null?hx=e:hx.push.apply(hx,e),$g=null),e}function Fr(e){$g===null?$g=[e]:$g.push(e)}function Ir(){var e=Qg;if(e!==null){Qg=null;for(var t=Mt(e);0<e.children.length;)e=e.children[0];j(e.fiber,function(){console.error(`A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,`https://react.dev/link/hydration-mismatch`,t)})}}function Lr(){o_=a_=null,s_=!1}function Rr(e,t,n){D(n_,t._currentValue,e),t._currentValue=n,D(r_,t._currentRenderer,e),t._currentRenderer!==void 0&&t._currentRenderer!==null&&t._currentRenderer!==i_&&console.error(`Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.`),t._currentRenderer=i_}function zr(e,t){e._currentValue=n_.current;var n=r_.current;ae(r_,t),e._currentRenderer=n,ae(n_,t)}function Br(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}e!==n&&console.error(`Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.`)}function Vr(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var s=a;a=i;for(var c=0;c<t.length;c++)if(s.context===t[c]){a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Br(a.return,n,e),r||(o=null);break a}a=s.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(`We just came from a parent so we must have had a parent. This is a bug in React.`);o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Br(o,n,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function Hr(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(`Should have a current fiber. This is a bug in React.`);if(o=o.memoizedProps,o!==null){var s=i.type;Ih(i.pendingProps.value,o.value)||(e===null?e=[s]:e.push(s))}}else if(i===Jf.current){if(o=i.alternate,o===null)throw Error(`Should have a current fiber. This is a bug in React.`);o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[xC]:e.push(xC))}i=i.return}e!==null&&Vr(t,e,n,r),t.flags|=262144}function Ur(e){for(e=e.firstContext;e!==null;){if(!Ih(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Wr(e){a_=e,o_=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function W(e){return s_&&console.error(`Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().`),Kr(a_,e)}function Gr(e,t){return a_===null&&Wr(e),Kr(e,t)}function Kr(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},o_===null){if(e===null)throw Error(`Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().`);o_=t,e.dependencies={lanes:0,firstContext:t,_debugThenableState:null},e.flags|=524288}else o_=o_.next=t;return n}function qr(){return{controller:new c_,data:new Map,refCount:0}}function Jr(e){e.controller.signal.aborted&&console.warn(`A cache instance was retained after it was already freed. This likely indicates a bug in React.`),e.refCount++}function Yr(e){e.refCount--,0>e.refCount&&console.warn(`A cache instance was released after it was already freed. This likely indicates a bug in React.`),e.refCount===0&&l_(u_,function(){e.controller.abort()})}function Xr(e,t,n){e&127?0>E_&&(E_=f_(),D_=p_(t),k_=t,n!=null&&(A_=E(n)),(Hb&(Nb|Pb))!==Mb&&(w_=!0,O_=m_),e=Iu(),t=Fu(),e!==N_||t!==M_?N_=-1.1:t!==null&&(O_=m_),j_=e,M_=t):e&4194048&&0>L_&&(L_=f_(),z_=p_(t),B_=t,n!=null&&(V_=E(n)),0>I_)&&(e=Iu(),t=Fu(),(e!==W_||t!==U_)&&(W_=-1.1),H_=e,U_=t)}function Zr(e){if(0>E_){E_=f_(),D_=e._debugTask==null?null:e._debugTask,(Hb&(Nb|Pb))!==Mb&&(O_=m_);var t=Iu(),n=Fu();t!==N_||n!==M_?N_=-1.1:n!==null&&(O_=m_),j_=t,M_=n}0>L_&&(L_=f_(),z_=e._debugTask==null?null:e._debugTask,0>I_)&&(e=Iu(),t=Fu(),(e!==W_||t!==U_)&&(W_=-1.1),H_=e,U_=t)}function Qr(){var e=x_;return x_=0,e}function $r(e){var t=x_;return x_=e,t}function ei(e){var t=x_;return x_+=e,t}function ti(){Q=Z=-1.1}function ni(){var e=Z;return Z=-1.1,e}function ri(e){0<=e&&(Z=e)}function ii(){var e=S_;return S_=-0,e}function ai(e){0<=e&&(S_=e)}function oi(){var e=C_;return C_=null,e}function si(){var e=w_;return w_=!1,e}function ci(e){b_=f_(),0>e.actualStartTime&&(e.actualStartTime=b_)}function li(e){if(0<=b_){var t=f_()-b_;e.actualDuration+=t,e.selfBaseDuration=t,b_=-1}}function ui(e){if(0<=b_){var t=f_()-b_;e.actualDuration+=t,b_=-1}}function di(){if(0<=b_){var e=f_(),t=e-b_;b_=-1,x_+=t,S_+=t,Q=e}}function fi(e){C_===null&&(C_=[]),C_.push(e),y_===null&&(y_=[]),y_.push(e)}function pi(){b_=f_(),0>Z&&(Z=b_)}function mi(e){for(var t=e.child;t;)e.actualDuration+=t.actualDuration,t=t.sibling}function hi(e,t){if(ev===null){var n=ev=[];tv=0,nv=Kl(),rv={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return tv++,t.then(gi,gi),t}function gi(){if(--tv===0&&(-1<L_||(I_=-1.1),ev!==null)){rv!==null&&(rv.status=`fulfilled`);var e=ev;ev=null,nv=0,rv=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function _i(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}function vi(){var e=av.current;return e===null?Ub.pooledCache:e}function yi(e,t){t===null?D(av,av.current,e):D(av,t.pool,e)}function bi(){var e=vi();return e===null?null:{parent:d_._currentValue,pool:e}}function xi(){return{didWarnAboutUncachedPromise:!1,thenables:[]}}function Si(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ci(e,t,n){Y.actQueue!==null&&(Y.didUsePromise=!0);var r=e.thenables;if(n=r[n],n===void 0?r.push(t):n!==t&&(e.didWarnAboutUncachedPromise||(e.didWarnAboutUncachedPromise=!0,console.error(`A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.`)),t.then(Zt,Zt),t=n),t._debugInfo===void 0){e=performance.now(),r=t.displayName;var i={name:typeof r==`string`?r:`Promise`,start:e,end:e,value:t};t._debugInfo=[{awaited:i}],t.status!==`fulfilled`&&t.status!==`rejected`&&(e=function(){i.end=performance.now()},t.then(e,e))}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ei(e),e;default:if(typeof t.status==`string`)t.then(Zt,Zt);else{if(e=Ub,e!==null&&100<e.shellSuspendCounter)throw Error("An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ei(e),e}throw Rv=t,zv=!0,Pv}}function wi(e){try{return Nv(e)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Rv=e,zv=!0,Pv):e}}function Ti(){if(Rv===null)throw Error(`Expected a suspended thenable. This is a bug in React. Please file an issue.`);var e=Rv;return Rv=null,zv=!1,e}function Ei(e){if(e===Pv||e===Iv)throw Error("Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.")}function G(e){var t=Hv;return e!=null&&(Hv=t===null?e:t.concat(e)),t}function Di(){var e=Hv;if(e!=null){for(var t=e.length-1;0<=t;t--)if(e[t].name!=null){var n=e[t].debugTask;if(n!=null)return n}}return null}function Oi(e,t,n){for(var r=Object.keys(e.props),i=0;i<r.length;i++){var a=r[i];if(a!==`children`&&a!==`key`){t===null&&(t=pr(e,n.mode,0),t._debugInfo=Hv,t.return=n),j(t,function(e){console.error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",e)},a);break}}}function ki(e){var t=Vv;return Vv+=1,Bv===null&&(Bv=xi()),Ci(Bv,e,t)}function Ai(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function ji(e,t){throw t.$$typeof===Sf?Error(`A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`):(e=Object.prototype.toString.call(t),Error(`Objects are not valid as a React child (found: `+(e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)+`). If you meant to render a collection of children, use an array instead.`))}function Mi(e,t){var n=Di();n===null?ji(e,t):n.run(ji.bind(null,e,t))}function Ni(e,t){var n=E(e)||`Component`;Kv[n]||(Kv[n]=!0,t=t.displayName||t.name||`Component`,e.tag===3?console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,t,t,t):console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,t,t,n,t,n))}function Pi(e,t){var n=Di();n===null?Ni(e,t):n.run(Ni.bind(null,e,t))}function Fi(e,t){var n=E(e)||`Component`;qv[n]||(qv[n]=!0,t=String(t),e.tag===3?console.error(`Symbols are not valid as a React child.
  root.render(%s)`,t):console.error(`Symbols are not valid as a React child.
  <%s>%s</%s>`,n,t,n))}function Ii(e,t){var n=Di();n===null?Fi(e,t):n.run(Fi.bind(null,e,t))}function Li(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=ur(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function s(e,t,n,r){return t===null||t.tag!==6?(t=hr(n,e.mode,r),t.return=e,t._debugOwner=e,t._debugTask=e._debugTask,t._debugInfo=Hv,t):(t=i(t,n),t.return=e,t._debugInfo=Hv,t)}function c(e,t,n,r){var a=n.type;return a===Tf?(t=u(e,t,n.props.children,r,n.key),Oi(n,t,e),t):t!==null&&(t.elementType===a||or(t,n)||typeof a==`object`&&a&&a.$$typeof===Pf&&wi(a)===t.type)?(t=i(t,n.props),Ai(t,n),t.return=e,t._debugOwner=n._owner,t._debugInfo=Hv,t):(t=pr(n,e.mode,r),Ai(t,n),t.return=e,t._debugInfo=Hv,t)}function l(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=_r(n,e.mode,r),t.return=e,t._debugInfo=Hv,t):(t=i(t,n.children||[]),t.return=e,t._debugInfo=Hv,t)}function u(e,t,n,r,a){return t===null||t.tag!==7?(t=mr(n,e.mode,r,a),t.return=e,t._debugOwner=e,t._debugTask=e._debugTask,t._debugInfo=Hv,t):(t=i(t,n),t.return=e,t._debugInfo=Hv,t)}function d(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=hr(``+t,e.mode,n),t.return=e,t._debugOwner=e,t._debugTask=e._debugTask,t._debugInfo=Hv,t;if(typeof t==`object`&&t){switch(t.$$typeof){case Cf:return n=pr(t,e.mode,n),Ai(n,t),n.return=e,e=G(t._debugInfo),n._debugInfo=Hv,Hv=e,n;case wf:return t=_r(t,e.mode,n),t.return=e,t._debugInfo=Hv,t;case Pf:var r=G(t._debugInfo);return t=wi(t),e=d(e,t,n),Hv=r,e}if(zf(t)||w(t))return n=mr(t,e.mode,n,null),n.return=e,n._debugOwner=e,n._debugTask=e._debugTask,e=G(t._debugInfo),n._debugInfo=Hv,Hv=e,n;if(typeof t.then==`function`)return r=G(t._debugInfo),e=d(e,ki(t),n),Hv=r,e;if(t.$$typeof===kf)return d(e,Gr(e,t),n);Mi(e,t)}return typeof t==`function`&&Pi(e,t),typeof t==`symbol`&&Ii(e,t),null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?s(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case Cf:return n.key===i?(i=G(n._debugInfo),e=c(e,t,n,r),Hv=i,e):null;case wf:return n.key===i?l(e,t,n,r):null;case Pf:return i=G(n._debugInfo),n=wi(n),e=p(e,t,n,r),Hv=i,e}if(zf(n)||w(n))return i===null?(i=G(n._debugInfo),e=u(e,t,n,r,null),Hv=i,e):null;if(typeof n.then==`function`)return i=G(n._debugInfo),e=p(e,t,ki(n),r),Hv=i,e;if(n.$$typeof===kf)return p(e,t,Gr(e,n),r);Mi(e,n)}return typeof n==`function`&&Pi(e,n),typeof n==`symbol`&&Ii(e,n),null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,s(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case Cf:return n=e.get(r.key===null?n:r.key)||null,e=G(r._debugInfo),t=c(t,n,r,i),Hv=e,t;case wf:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case Pf:var a=G(r._debugInfo);return r=wi(r),t=m(e,t,n,r,i),Hv=a,t}if(zf(r)||w(r))return n=e.get(n)||null,e=G(r._debugInfo),t=u(t,n,r,i,null),Hv=e,t;if(typeof r.then==`function`)return a=G(r._debugInfo),t=m(e,t,n,ki(r),i),Hv=a,t;if(r.$$typeof===kf)return m(e,t,n,Gr(t,r),i);Mi(t,r)}return typeof r==`function`&&Pi(t,r),typeof r==`symbol`&&Ii(t,r),null}function g(e,t,n,r){if(typeof n!=`object`||!n)return r;switch(n.$$typeof){case Cf:case wf:f(e,t,n);var i=n.key;if(typeof i!=`string`)break;if(r===null){r=new Set,r.add(i);break}if(!r.has(i)){r.add(i);break}j(t,function(){console.error("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",i)});break;case Pf:n=wi(n),g(e,t,n,r)}return r}function _(i,o,s,c){for(var l=null,u=null,f=null,h=o,_=o=0,v=null;h!==null&&_<s.length;_++){h.index>_?(v=h,h=null):v=h.sibling;var y=p(i,h,s[_],c);if(y===null){h===null&&(h=v);break}l=g(i,y,s[_],l),e&&h&&y.alternate===null&&t(i,h),o=a(y,o,_),f===null?u=y:f.sibling=y,f=y,h=v}if(_===s.length)return n(i,h),Xg&&yr(i,_),u;if(h===null){for(;_<s.length;_++)h=d(i,s[_],c),h!==null&&(l=g(i,h,s[_],l),o=a(h,o,_),f===null?u=h:f.sibling=h,f=h);return Xg&&yr(i,_),u}for(h=r(h);_<s.length;_++)v=m(h,i,_,s[_],c),v!==null&&(l=g(i,v,s[_],l),e&&v.alternate!==null&&h.delete(v.key===null?_:v.key),o=a(v,o,_),f===null?u=v:f.sibling=v,f=v);return e&&h.forEach(function(e){return t(i,e)}),Xg&&yr(i,_),u}function v(i,o,s,c){if(s==null)throw Error(`An iterable object provided no iterator.`);for(var l=null,u=null,f=o,h=o=0,_=null,v=null,y=s.next();f!==null&&!y.done;h++,y=s.next()){f.index>h?(_=f,f=null):_=f.sibling;var b=p(i,f,y.value,c);if(b===null){f===null&&(f=_);break}v=g(i,b,y.value,v),e&&f&&b.alternate===null&&t(i,f),o=a(b,o,h),u===null?l=b:u.sibling=b,u=b,f=_}if(y.done)return n(i,f),Xg&&yr(i,h),l;if(f===null){for(;!y.done;h++,y=s.next())f=d(i,y.value,c),f!==null&&(v=g(i,f,y.value,v),o=a(f,o,h),u===null?l=f:u.sibling=f,u=f);return Xg&&yr(i,h),l}for(f=r(f);!y.done;h++,y=s.next())_=m(f,i,h,y.value,c),_!==null&&(v=g(i,_,y.value,v),e&&_.alternate!==null&&f.delete(_.key===null?h:_.key),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_);return e&&f.forEach(function(e){return t(i,e)}),Xg&&yr(i,h),l}function y(e,r,a,s){if(typeof a==`object`&&a&&a.type===Tf&&a.key===null&&(Oi(a,null,e),a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case Cf:var c=G(a._debugInfo);a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===Tf){if(r.tag===7){n(e,r.sibling),s=i(r,a.props.children),s.return=e,s._debugOwner=a._owner,s._debugInfo=Hv,Oi(a,s,e),e=s;break a}}else if(r.elementType===l||or(r,a)||typeof l==`object`&&l&&l.$$typeof===Pf&&wi(l)===r.type){n(e,r.sibling),s=i(r,a.props),Ai(s,a),s.return=e,s._debugOwner=a._owner,s._debugInfo=Hv,e=s;break a}n(e,r);break}else t(e,r);r=r.sibling}a.type===Tf?(s=mr(a.props.children,e.mode,s,a.key),s.return=e,s._debugOwner=e,s._debugTask=e._debugTask,s._debugInfo=Hv,Oi(a,s,e),e=s):(s=pr(a,e.mode,s),Ai(s,a),s.return=e,s._debugInfo=Hv,e=s)}return e=o(e),Hv=c,e;case wf:a:{for(c=a,a=c.key;r!==null;){if(r.key===a)if(r.tag===4&&r.stateNode.containerInfo===c.containerInfo&&r.stateNode.implementation===c.implementation){n(e,r.sibling),s=i(r,c.children||[]),s.return=e,e=s;break a}else{n(e,r);break}else t(e,r);r=r.sibling}s=_r(c,e.mode,s),s.return=e,e=s}return o(e);case Pf:return c=G(a._debugInfo),a=wi(a),e=y(e,r,a,s),Hv=c,e}if(zf(a))return c=G(a._debugInfo),e=_(e,r,a,s),Hv=c,e;if(w(a)){if(c=G(a._debugInfo),l=w(a),typeof l!=`function`)throw Error(`An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.`);var u=l.call(a);return u===a?(e.tag!==0||Object.prototype.toString.call(e.type)!==`[object GeneratorFunction]`||Object.prototype.toString.call(u)!==`[object Generator]`)&&(Wv||console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."),Wv=!0):a.entries!==l||Uv||(console.error(`Using Maps as children is not supported. Use an array of keyed ReactElements instead.`),Uv=!0),e=v(e,r,u,s),Hv=c,e}if(typeof a.then==`function`)return c=G(a._debugInfo),e=y(e,r,ki(a),s),Hv=c,e;if(a.$$typeof===kf)return y(e,r,Gr(e,a),s);Mi(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(c=``+a,r!==null&&r.tag===6?(n(e,r.sibling),s=i(r,c),s.return=e,e=s):(n(e,r),s=hr(c,e.mode,s),s.return=e,s._debugOwner=e,s._debugTask=e._debugTask,s._debugInfo=Hv,e=s),o(e)):(typeof a==`function`&&Pi(e,a),typeof a==`symbol`&&Ii(e,a),n(e,r))}return function(e,t,n,r){var i=Hv;Hv=null;try{Vv=0;var a=y(e,t,n,r);return Bv=null,a}catch(t){if(t===Pv||t===Iv)throw t;var o=h(29,t,null,e.mode);o.lanes=r,o.return=e;var s=o._debugInfo=Hv;if(o._debugOwner=e._debugOwner,o._debugTask=e._debugTask,s!=null){for(var c=s.length-1;0<=c;c--)if(typeof s[c].stack==`string`){o._debugOwner=s[c],o._debugTask=s[c].debugTask;break}}return o}finally{Hv=i}}}function Ri(e,t){var n=zf(e);return e=!n&&typeof w(e)==`function`,n||e?(n=n?`array`:`iterable`,console.error(`A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>`,n,t,n),!1):!0}function zi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Vi(e){return{lane:e,tag:Xv,payload:null,callback:null,next:null}}function Hi(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ny===r&&!ty){var i=E(e);console.error(`An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,i),ty=!0}return(Hb&Nb)===Mb?($n(e,r,t,n),rr(e)):(i=r.pending,i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=rr(e),nr(e,null,n),t)}function Ui(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ie(e,n)}}function Wi(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Gi(){if(ry){var e=rv;if(e!==null)throw e}}function Ki(e,t,n,r){ry=!1;var i=e.updateQueue;ey=!1,ny=i.shared;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Gb&f)===f:(r&f)===f){f!==0&&f===nv&&(ry=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{f=e;var m=s,h=t,g=n;switch(m.tag){case Zv:if(m=m.payload,typeof m==`function`){s_=!0;var _=m.call(g,d,h);if(f.mode&Ng){Ee(!0);try{m.call(g,d,h)}finally{Ee(!1)}}s_=!1,d=_;break a}d=m;break a;case $v:f.flags=f.flags&-65537|128;case Xv:if(_=m.payload,typeof _==`function`){if(s_=!0,m=_.call(g,d,h),f.mode&Ng){Ee(!0);try{_.call(g,d,h)}finally{Ee(!1)}}s_=!1}else m=_;if(m==null)break a;d=xf({},d,m);break a;case Qv:ey=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),lx|=o,e.lanes=o,e.memoizedState=d}ny=null}function qi(e,t){if(typeof e!=`function`)throw Error(`Invalid argument passed as callback. Expected a function. Instead received: `+e);e.call(t)}function Ji(e,t){var n=e.shared.hiddenCallbacks;if(n!==null)for(e.shared.hiddenCallbacks=null,e=0;e<n.length;e++)qi(n[e],t)}function K(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)qi(n[e],t)}function Yi(e,t){var n=sx;D(ay,n,e),D(iy,t,e),sx=n|t.baseLanes}function Xi(e){D(ay,sx,e),D(iy,iy.current,e)}function Zi(e){sx=ay.current,ae(iy,e),ae(ay,e)}function Qi(e){var t=e.alternate;D(uy,uy.current&cy,e),D(oy,e,e),sy===null&&(t===null||iy.current!==null||t.memoizedState!==null)&&(sy=e)}function $i(e){D(uy,uy.current,e),D(oy,e,e),sy===null&&(sy=e)}function ea(e){e.tag===22?(D(uy,uy.current,e),D(oy,e,e),sy===null&&(sy=e)):ta(e)}function ta(e){D(uy,uy.current,e),D(oy,oy.current,e)}function na(e){ae(oy,e),sy===e&&(sy=null),ae(uy,e)}function ra(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||ad(n)||od(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function q(){var e=$;Ny===null?Ny=[e]:Ny.push(e)}function J(){var e=$;if(Ny!==null&&(Py++,Ny[Py]!==e)){var t=E(Sy);if(!_y.has(t)&&(_y.add(t),Ny!==null)){for(var n=``,r=0;r<=Py;r++){var i=Ny[r],a=r===Py?e:i;for(i=r+1+`. `+i;30>i.length;)i+=` `;i+=a+`
`,n+=i}console.error(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,t,n)}}}function ia(e){e==null||zf(e)||console.error("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",$,typeof e)}function aa(){var e=E(Sy);by.has(e)||(by.add(e),console.error(`ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.`,e))}function oa(){throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`)}function sa(e,t){if(Fy)return!1;if(t===null)return console.error(`%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.`,$),!1;e.length!==t.length&&console.error(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,$,`[`+t.join(`, `)+`]`,`[`+e.join(`, `)+`]`);for(var n=0;n<t.length&&n<e.length;n++)if(!Ih(e[n],t[n]))return!1;return!0}function ca(e,t,n,r,i,a){xy=a,Sy=t,Ny=e===null?null:e._debugHookTypes,Py=-1,Fy=e!==null&&e.type!==t.type,(Object.prototype.toString.call(n)===`[object AsyncFunction]`||Object.prototype.toString.call(n)===`[object AsyncGeneratorFunction]`)&&(a=E(Sy),yy.has(a)||(yy.add(a),console.error("%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",a===null?`An unknown Component`:`<`+a+`>`))),t.memoizedState=null,t.updateQueue=null,t.lanes=0,Y.H=e!==null&&e.memoizedState!==null?zy:Ny===null?Ly:Ry,Dy=a=(t.mode&Ng)!==X;var o=_v(n,r,i);if(Dy=!1,Ey&&(o=ua(t,n,r,i)),a){Ee(!0);try{o=ua(t,n,r,i)}finally{Ee(!1)}}return la(e,t),o}function la(e,t){t._debugHookTypes=Ny,t.dependencies===null?Ay!==null&&(t.dependencies={lanes:0,firstContext:null,_debugThenableState:Ay}):t.dependencies._debugThenableState=Ay,Y.H=Iy;var n=Cy!==null&&Cy.next!==null;if(xy=0,Ny=$=wy=Cy=Sy=null,Py=-1,e!==null&&(e.flags&65011712)!=(t.flags&65011712)&&console.error(`Internal React error: Expected static flag was missing. Please notify the React team.`),Ty=!1,ky=0,Ay=null,n)throw Error(`Rendered fewer hooks than expected. This may be caused by an accidental early return statement.`);e===null||ab||(e=e.dependencies,e!==null&&Ur(e)&&(ab=!0)),zv?(zv=!1,e=!0):e=!1,e&&(t=E(t)||`Unknown`,vy.has(t)||yy.has(t)||(vy.add(t),console.error("`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary.")))}function ua(e,t,n,r){Sy=e;var i=0;do{if(Ey&&(Ay=null),ky=0,Ey=!1,i>=My)throw Error(`Too many re-renders. React limits the number of renders to prevent an infinite loop.`);if(i+=1,Fy=!1,wy=Cy=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Py=-1,Y.H=By,a=_v(t,n,r)}while(Ey);return a}function da(){var e=Y.H,t=e.useState()[0];return t=typeof t.then==`function`?va(t):t,e=e.useState()[0],(Cy===null?null:Cy.memoizedState)!==e&&(Sy.flags|=1024),t}function fa(){var e=Oy!==0;return Oy=0,e}function pa(e,t,n){t.updateQueue=e.updateQueue,t.flags=(t.mode&Pg)===X?t.flags&-2053:t.flags&-402655237,e.lanes&=~n}function ma(e){if(Ty){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ty=!1}xy=0,Ny=wy=Cy=Sy=null,Py=-1,$=null,Ey=!1,ky=Oy=0,Ay=null}function ha(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wy===null?Sy.memoizedState=wy=e:wy=wy.next=e,wy}function ga(){if(Cy===null){var e=Sy.alternate;e=e===null?null:e.memoizedState}else e=Cy.next;var t=wy===null?Sy.memoizedState:wy.next;if(t!==null)wy=t,Cy=e;else{if(e===null)throw Sy.alternate===null?Error(`Update hook called on initial render. This is likely a bug in React. Please file an issue.`):Error(`Rendered more hooks than during the previous render.`);Cy=e,e={memoizedState:Cy.memoizedState,baseState:Cy.baseState,baseQueue:Cy.baseQueue,queue:Cy.queue,next:null},wy===null?Sy.memoizedState=wy=e:wy=wy.next=e}return wy}function _a(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function va(e){var t=ky;return ky+=1,Ay===null&&(Ay=xi()),e=Ci(Ay,e,t),t=Sy,(wy===null?t.memoizedState:wy.next)===null&&(t=t.alternate,Y.H=t!==null&&t.memoizedState!==null?zy:Ly),e}function ya(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return va(e);if(e.$$typeof===kf)return W(e)}throw Error(`An unsupported type was passed to use(): `+String(e))}function ba(e){var t=null,n=Sy.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=Sy.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=_a(),Sy.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0||Fy)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=If;else n.length!==e&&console.error(`Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.`,n.length,e);return t.index++,n}function xa(e,t){return typeof t==`function`?t(e):t}function Sa(e,t,n){var r=ha();if(n!==void 0){var i=n(t);if(Dy){Ee(!0);try{n(t)}finally{Ee(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=jo.bind(null,Sy,e),[r.memoizedState,e]}function Ca(e){return wa(ga(),Cy,e)}function wa(e,t,n){var r=e.queue;if(r===null)throw Error(`Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)`);r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue!==i&&console.error(`Internal error: Expected work-in-progress queue to be a clone. This is a bug in React.`),t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var s=o=null,c=null,l=t,u=!1;do{var d=l.lane&-536870913;if(d===l.lane?(xy&d)===d:(Gb&d)===d){var f=l.revertLane;if(f===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d===nv&&(u=!0);else if((xy&f)===f){l=l.next,f===nv&&(u=!0);continue}else d={lane:0,revertLane:l.revertLane,gesture:null,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null},c===null?(s=c=d,o=a):c=c.next=d,Sy.lanes|=f,lx|=f;d=l.action,Dy&&n(a,d),a=l.hasEagerState?l.eagerState:n(a,d)}else f={lane:d,revertLane:l.revertLane,gesture:l.gesture,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null},c===null?(s=c=f,o=a):c=c.next=f,Sy.lanes|=d,lx|=d;l=l.next}while(l!==null&&l!==t);if(c===null?o=a:c.next=s,!Ih(a,e.memoizedState)&&(ab=!0,u&&(n=rv,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=c,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ta(e){var t=ga(),n=t.queue;if(n===null)throw Error(`Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)`);n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Ih(a,t.memoizedState)||(ab=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Ea(e,t,n){var r=Sy,i=ha();if(Xg){if(n===void 0)throw Error(`Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.`);var a=n();gy||a===n()||(console.error(`The result of getServerSnapshot should be cached to avoid an infinite loop`),gy=!0)}else{if(a=t(),gy||(n=t(),Ih(a,n)||(console.error(`The result of getSnapshot should be cached to avoid an infinite loop`),gy=!0)),Ub===null)throw Error(`Expected a work-in-progress root. This is a bug in React. Please file an issue.`);Gb&127||Oa(r,t,a)}return i.memoizedState=a,n={value:a,getSnapshot:t},i.queue=n,to(Aa.bind(null,r,n,e),[e]),r.flags|=2048,Za(fy|hy,{destroy:void 0},ka.bind(null,r,n,a,t),null),a}function Da(e,t,n){var r=Sy,i=ga(),a=Xg;if(a){if(n===void 0)throw Error(`Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.`);n=n()}else if(n=t(),!gy){var o=t();Ih(n,o)||(console.error(`The result of getSnapshot should be cached to avoid an infinite loop`),gy=!0)}if((o=!Ih((Cy||i).memoizedState,n))&&(i.memoizedState=n,ab=!0),i=i.queue,eo(2048,hy,Aa.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||wy!==null&&wy.memoizedState.tag&fy){if(r.flags|=2048,Za(fy|hy,{destroy:void 0},ka.bind(null,r,i,n,t),null),Ub===null)throw Error(`Expected a work-in-progress root. This is a bug in React. Please file an issue.`);a||xy&127||Oa(r,t,n)}return n}function Oa(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Sy.updateQueue,t===null?(t=_a(),Sy.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ka(e,t,n,r){t.value=n,t.getSnapshot=r,ja(t)&&Ma(e)}function Aa(e,t,n){return n(function(){ja(t)&&(Xr(2,`updateSyncExternalStore()`,e),Ma(e))})}function ja(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ih(e,n)}catch{return!0}}function Ma(e){var t=tr(e,2);t!==null&&Wc(t,e,2)}function Na(e){var t=ha();if(typeof e==`function`){var n=e;if(e=n(),Dy){Ee(!0);try{n()}finally{Ee(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:e},t}function Pa(e){e=Na(e);var t=e.queue,n=Mo.bind(null,Sy,t);return t.dispatch=n,[e.memoizedState,n]}function Fa(e){var t=ha();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Po.bind(null,Sy,!0,n),n.dispatch=t,[e,t]}function Ia(e,t){return La(ga(),Cy,e,t)}function La(e,t,n,r){return e.baseState=n,wa(e,Cy,typeof r==`function`?r:xa)}function Ra(e,t){var n=ga();return Cy===null?(n.baseState=e,[e,n.queue.dispatch]):La(n,Cy,e,t)}function za(e,t,n,r,i){if(Fo(e))throw Error(`Cannot update form state while rendering.`);if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};Y.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,Ba(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Ba(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=Y.T,o={};o._updatedFibers=new Set,Y.T=o;try{var s=n(i,r),c=Y.S;c!==null&&c(o,s),Va(e,t,s)}catch(n){Ua(e,t,n)}finally{a!==null&&o.types!==null&&(a.types!==null&&a.types!==o.types&&console.error(`We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React.`),a.types=o.types),Y.T=a,a===null&&o._updatedFibers&&(e=o._updatedFibers.size,o._updatedFibers.clear(),10<e&&console.warn(`Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.`))}}else try{o=n(i,r),Va(e,t,o)}catch(n){Ua(e,t,n)}}function Va(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?(Y.asyncTransitions++,n.then(yo,yo),n.then(function(n){Ha(e,t,n)},function(n){return Ua(e,t,n)}),t.isTransition||console.error("An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop.")):Ha(e,t,n)}function Ha(e,t,n){t.status=`fulfilled`,t.value=n,Wa(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ba(e,n)))}function Ua(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Wa(t),t=t.next;while(t!==r)}e.action=null}function Wa(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ga(e,t){return t}function Ka(e,t){if(Xg){var n=Ub.formState;if(n!==null){a:{var r=Sy;if(Xg){if(Yg){b:{for(var i=Yg,a=e_;i.nodeType!==8;){if(!a){i=null;break b}if(i=cd(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===BS||a===VS?i:null}if(i){Yg=cd(i.nextSibling),r=i.data===BS;break a}}kr(r)}r=!1}r&&(t=n[0])}}return n=ha(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:t},n.queue=r,n=Mo.bind(null,Sy,r),r.dispatch=n,r=Na(!1),a=Po.bind(null,Sy,!1,r.queue),r=ha(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=za.bind(null,Sy,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function qa(e){return Ja(ga(),Cy,e)}function Ja(e,t,n){if(t=wa(e,t,Ga)[0],e=Ca(xa)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=va(t)}catch(e){throw e===Pv?Iv:e}else r=t;t=ga();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(Sy.flags|=2048,Za(fy|hy,{destroy:void 0},Ya.bind(null,i,n),null)),[r,a,e]}function Ya(e,t){e.action=t}function Xa(e){var t=ga(),n=Cy;if(n!==null)return Ja(t,n,e);ga(),t=t.memoizedState,n=ga();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Za(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=Sy.updateQueue,t===null&&(t=_a(),Sy.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Qa(e){var t=ha();return e={current:e},t.memoizedState=e}function $a(e,t,n,r){var i=ha();Sy.flags|=e,i.memoizedState=Za(fy|t,{destroy:void 0},n,r===void 0?null:r)}function eo(e,t,n,r){var i=ga();r=r===void 0?null:r;var a=i.memoizedState.inst;Cy!==null&&r!==null&&sa(r,Cy.memoizedState.deps)?i.memoizedState=Za(t,a,n,r):(Sy.flags|=e,i.memoizedState=Za(fy|t,a,n,r))}function to(e,t){(Sy.mode&Pg)===X?$a(8390656,hy,e,t):$a(276826112,hy,e,t)}function no(e){Sy.flags|=4;var t=Sy.updateQueue;if(t===null)t=_a(),Sy.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ro(e){var t=ha(),n={impl:e};return t.memoizedState=n,function(){if((Hb&Nb)!==Mb)throw Error(`A function wrapped in useEffectEvent can't be called during rendering.`);return n.impl.apply(void 0,arguments)}}function io(e){var t=ga().memoizedState;return no({ref:t,nextImpl:e}),function(){if((Hb&Nb)!==Mb)throw Error(`A function wrapped in useEffectEvent can't be called during rendering.`);return t.impl.apply(void 0,arguments)}}function ao(e,t){var n=4194308;return(Sy.mode&Pg)!==X&&(n|=134217728),$a(n,my,e,t)}function oo(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return t.hasOwnProperty(`current`)||console.error(`Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.`,`an object with keys {`+Object.keys(t).join(`, `)+`}`),e=e(),t.current=e,function(){t.current=null}}function so(e,t,n){typeof t!=`function`&&console.error(`Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.`,t===null?`null`:typeof t),n=n==null?null:n.concat([e]);var r=4194308;(Sy.mode&Pg)!==X&&(r|=134217728),$a(r,my,oo.bind(null,t,e),n)}function co(e,t,n){typeof t!=`function`&&console.error(`Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.`,t===null?`null`:typeof t),n=n==null?null:n.concat([e]),eo(4,my,oo.bind(null,t,e),n)}function lo(e,t){return ha().memoizedState=[e,t===void 0?null:t],e}function uo(e,t){var n=ga();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&sa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function fo(e,t){var n=ha();t=t===void 0?null:t;var r=e();if(Dy){Ee(!0);try{e()}finally{Ee(!1)}}return n.memoizedState=[r,t],r}function po(e,t){var n=ga();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&sa(t,r[1]))return r[0];if(r=e(),Dy){Ee(!0);try{e()}finally{Ee(!1)}}return n.memoizedState=[r,t],r}function mo(e,t){return _o(ha(),e,t)}function ho(e,t){return vo(ga(),Cy.memoizedState,e,t)}function go(e,t){var n=ga();return Cy===null?_o(n,e,t):vo(n,Cy.memoizedState,e,t)}function _o(e,t,n){return n===void 0||xy&1073741824&&!(Gb&261930)?e.memoizedState=t:(e.memoizedState=n,e=Uc(),Sy.lanes|=e,lx|=e,n)}function vo(e,t,n,r){return Ih(n,t)?n:iy.current===null?!(xy&42)||xy&1073741824&&!(Gb&261930)?(ab=!0,e.memoizedState=n):(e=Uc(),Sy.lanes|=e,lx|=e,t):(e=_o(e,n,r),Ih(e,t)||(ab=!0),e)}function yo(){Y.asyncTransitions--}function bo(e,t,n,r,i){var a=Bf.p;Bf.p=a!==0&&a<Pp?a:Pp;var o=Y.T,s={};s._updatedFibers=new Set,Y.T=s,Po(e,!1,t,n);try{var c=i(),l=Y.S;if(l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`){Y.asyncTransitions++,c.then(yo,yo);var u=_i(c,r);No(e,t,u,Hc(e))}else No(e,t,r,Hc(e))}catch(n){No(e,t,{then:function(){},status:`rejected`,reason:n},Hc(e))}finally{Bf.p=a,o!==null&&s.types!==null&&(o.types!==null&&o.types!==s.types&&console.error(`We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React.`),o.types=s.types),Y.T=o,o===null&&s._updatedFibers&&(e=s._updatedFibers.size,s._updatedFibers.clear(),10<e&&console.warn(`Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.`))}}function xo(e,t,n,r){if(e.tag!==5)throw Error(`Expected the form instance to be a HostComponent. This is a bug in React.`);var i=So(e).queue;Zr(e),bo(e,i,t,bC,n===null?u:function(){return Co(e),n(r)})}function So(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:bC,baseState:bC,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:bC},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Co(e){Y.T===null&&console.error(`requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition.`);var t=So(e);t.next===null&&(t=e.alternate.memoizedState),No(e,t.next.queue,{},Hc(e))}function wo(){var e=Na(!1);return e=bo.bind(null,Sy,e.queue,!0,!1),ha().memoizedState=e,[!1,e]}function To(){var e=Ca(xa)[0],t=ga().memoizedState;return[typeof e==`boolean`?e:va(e),t]}function Eo(){var e=Ta(xa)[0],t=ga().memoizedState;return[typeof e==`boolean`?e:va(e),t]}function Do(){return W(xC)}function Oo(){var e=ha(),t=Ub.identifierPrefix;if(Xg){var n=qg,r=Kg;n=(r&~(1<<32-Dp(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Oy++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=jy++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t}function ko(){return ha().memoizedState=Ao.bind(null,Sy)}function Ao(e,t){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var r=Hc(n),i=Vi(r),a=Hi(n,i,r);a!==null&&(Xr(r,`refresh()`,e),Wc(a,n,r),Ui(a,n,r)),e=qr(),t!=null&&a!==null&&console.error(`The seed argument is not enabled outside experimental channels.`),i.payload={cache:e};return}n=n.return}}function jo(e,t,n){var r=arguments;typeof r[3]==`function`&&console.error(`State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().`),r=Hc(e);var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};Fo(e)?Io(t,i):(i=er(e,t,i,r),i!==null&&(Xr(r,`dispatch()`,e),Wc(i,e,r),Lo(i,t,r)))}function Mo(e,t,n){var r=arguments;typeof r[3]==`function`&&console.error(`State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().`),r=Hc(e),No(e,t,n,r)&&Xr(r,`setState()`,e)}function No(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fo(e))Io(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null)){var o=Y.H;Y.H=Hy;try{var s=t.lastRenderedState,c=a(s,n);if(i.hasEagerState=!0,i.eagerState=c,Ih(c,s))return $n(e,t,i,0),Ub===null&&Qn(),!1}catch{}finally{Y.H=o}}if(n=er(e,t,i,r),n!==null)return Wc(n,e,r),Lo(n,t,r),!0}return!1}function Po(e,t,n,r){if(Y.T===null&&nv===0&&console.error(`An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition.`),r={lane:2,revertLane:Kl(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Fo(e)){if(t)throw Error(`Cannot update optimistic state while rendering.`);console.error(`Cannot call startTransition while rendering.`)}else t=er(e,n,r,2),t!==null&&(Xr(2,`setOptimistic()`,e),Wc(t,e,2))}function Fo(e){var t=e.alternate;return e===Sy||t!==null&&t===Sy}function Io(e,t){Ey=Ty=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Lo(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ie(e,n)}}function Ro(e){if(e!==null&&typeof e!=`function`){var t=String(e);eb.has(t)||(eb.add(t),console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",e))}}function zo(e,t,n,r){var i=e.memoizedState,a=n(r,i);if(e.mode&Ng){Ee(!0);try{a=n(r,i)}finally{Ee(!1)}}a===void 0&&(t=T(t)||`Component`,Xy.has(t)||(Xy.add(t),console.error(`%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.`,t))),i=a==null?i:xf({},i,a),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}function Bo(e,t,n,r,i,a,o){var s=e.stateNode;if(typeof s.shouldComponentUpdate==`function`){if(n=s.shouldComponentUpdate(r,a,o),e.mode&Ng){Ee(!0);try{n=s.shouldComponentUpdate(r,a,o)}finally{Ee(!1)}}return n===void 0&&console.error(`%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.`,T(t)||`Component`),n}return t.prototype&&t.prototype.isPureReactComponent?!wn(n,r)||!wn(i,a):!0}function Vo(e,t,n,r){var i=t.state;typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==i&&(e=E(e)||`Component`,Gy.has(e)||(Gy.add(e),console.error(`%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.`,e)),tb.enqueueReplaceState(t,t.state,null))}function Ho(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=xf({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Uo(e){ig(e),console.warn(`%s

%s
`,nb?`An error occurred in the <`+nb+`> component.`:`An error occurred in one of your React components.`,`Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`)}function Wo(e){var t=nb?`The above error occurred in the <`+nb+`> component.`:`The above error occurred in one of your React components.`,n=`React will try to recreate this component tree from scratch using the error boundary you provided, `+((rb||`Anonymous`)+`.`);if(typeof e==`object`&&e&&typeof e.environmentName==`string`){var r=e.environmentName;e=[`%o

%s

%s
`,e,t,n].slice(0),typeof e[0]==`string`?e.splice(0,1,SC+` `+e[0],CC,TC+r+TC,wC):e.splice(0,0,SC,CC,TC+r+TC,wC),e.unshift(console),r=EC.apply(console.error,e),r()}else console.error(`%o

%s

%s
`,e,t,n)}function Go(e){ig(e)}function Ko(e,t){try{nb=t.source?E(t.source):null,rb=null;var n=t.value;if(Y.actQueue!==null)Y.thrownErrors.push(n);else{var r=e.onUncaughtError;r(n,{componentStack:t.stack})}}catch(e){setTimeout(function(){throw e})}}function qo(e,t,n){try{nb=n.source?E(n.source):null,rb=E(t);var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Jo(e,t,n){return n=Vi(n),n.tag=$v,n.payload={element:null},n.callback=function(){j(t.source,Ko,e,t)},n}function Yo(e){return e=Vi(e),e.tag=$v,e}function Xo(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){sr(n),j(r.source,qo,t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){sr(n),j(r.source,qo,t,n,r),typeof i!=`function`&&(wx===null?wx=new Set([this]):wx.add(this)),Tv(this,r),typeof i==`function`||!(n.lanes&2)&&console.error(`%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.`,E(n)||`Unknown`)})}function Zo(e,t,n,r,i){if(n.flags|=32768,Ep&&Pl(e,i),typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Hr(t,n,i,!0),Xg&&(Zg=!0),n=oy.current,n!==null){switch(n.tag){case 31:case 13:return sy===null?il():n.alternate===null&&cx===Fb&&(cx=Rb),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Lv?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Tl(e,r,i)),!1;case 22:return n.flags|=65536,r===Lv?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Tl(e,r,i)),!1}throw Error(`Unexpected Suspense handler tag (`+n.tag+`). This is a bug in React.`)}return Tl(e,r,i),il(),!1}if(Xg)return Zg=!0,t=oy.current,t===null?(r!==t_&&Fr(vr(Error(`There was an error while hydrating but React was able to recover by instead client rendering the entire root.`,{cause:r}),n)),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=vr(r,n),i=Jo(e.stateNode,r,i),Wi(e,i),cx!==zb&&(cx=Lb)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==t_&&Fr(vr(Error(`There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.`,{cause:r}),n))),!1;var a=vr(Error(`There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.`,{cause:r}),n);if(mx===null?mx=[a]:mx.push(a),cx!==zb&&(cx=Lb),t===null)return!0;r=vr(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=Jo(n.stateNode,r,e),Wi(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(wx===null||!wx.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Yo(i),Xo(i,e,n,r),Wi(n,i),!1}n=n.return}while(n!==null);return!1}function Qo(e,t,n,r){t.child=e===null?Yv(t,null,n,r):Jv(t,e.child,n,r)}function $o(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Wr(t),r=ca(e,t,n,o,a,i),s=fa(),e!==null&&!ab?(pa(e,t,i),Cs(e,t,i)):(Xg&&s&&xr(t),t.flags|=1,Qo(e,t,r,i),t.child)}function es(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!lr(a)&&a.defaultProps===void 0&&n.compare===null?(n=ir(a),t.tag=15,t.type=n,ps(t,a),ts(e,t,n,r,i)):(e=fr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!ws(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?wn:n,n(o,r)&&e.ref===t.ref)return Cs(e,t,i)}return t.flags|=1,e=ur(a,r),e.ref=t.ref,e.return=t,t.child=e}function ts(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(wn(a,r)&&e.ref===t.ref&&t.type===e.type)if(ab=!1,t.pendingProps=r=a,ws(e,i))e.flags&131072&&(ab=!0);else return t.lanes=e.lanes,Cs(e,t,i)}return ls(e,t,n,r,i)}function ns(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:Cg,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return is(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&yi(t,a===null?null:a.cachePool),a===null?Xi(t):Yi(t,a),ea(t);else return r=t.lanes=536870912,is(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&yi(t,null),Xi(t),ta(t)):(yi(t,a.cachePool),Yi(t,a),ta(t),t.memoizedState=null);return Qo(e,t,i,n),t.child}function rs(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:Cg,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function is(e,t,n,r,i){var a=vi();return a=a===null?null:{parent:d_._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&yi(t,null),Xi(t),ea(t),e!==null&&Hr(e,t,r,!0),t.childLanes=i,null}function as(e,t){var n=t.hidden;return n!==void 0&&console.error(`<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,!0===n?`hidden`:!1===n?`hidden={false}`:`hidden={...}`,n?`mode="hidden"`:`mode="visible"`),t=vs({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function os(e,t,n){return Jv(t,e.child,null,n),e=as(t,t.pendingProps),e.flags|=2,na(t),t.memoizedState=null,e}function ss(e,t,n){var r=t.pendingProps,i=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(Xg){if(r.mode===`hidden`)return e=as(t,r),t.lanes=536870912,rs(null,e);if($i(t),(e=Yg)?(n=id(e,e_),n=n!==null&&n.data===AS?n:null,n!==null&&(r={dehydrated:n,treeContext:Cr(),retryLane:536870912,hydrationErrors:null},t.memoizedState=r,r=gr(n),r.return=t,t.child=r,Jg=t,Yg=null)):n=null,n===null)throw Or(t,e),kr(t);return t.lanes=536870912,null}return as(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if($i(t),i)if(t.flags&256)t.flags&=-257,t=os(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(`Client rendering an Activity suspended it again. This is a bug in React.`);else if(Dr(),n&536870912&&rl(t),ab||Hr(e,t,n,!1),i=(n&e.childLanes)!==0,ab||i){if(r=Ub,r!==null&&(o=Le(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,tr(e,o),Wc(r,e,o),ib;il(),t=os(e,t,n)}else e=a.treeContext,Yg=cd(o.nextSibling),Jg=t,Xg=!0,$g=null,Zg=!1,Qg=null,e_=!1,e!==null&&wr(t,e),t=as(t,r),t.flags|=4096;return t}return a=e.child,r={mode:r.mode,children:r.children},n&536870912&&(n&e.lanes)!==0&&rl(t),e=ur(a,r),e.ref=t.ref,t.child=e,e.return=t,e}function cs(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(`Expected ref to be a function, an object returned by React.createRef(), or undefined/null.`);(e===null||e.ref!==n)&&(t.flags|=4194816)}}function ls(e,t,n,r,i){if(n.prototype&&typeof n.prototype.render==`function`){var a=T(n)||`Unknown`;ob[a]||(console.error(`The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.`,a,a),ob[a]=!0)}return t.mode&Ng&&ov.recordLegacyContextWarning(t,null),e===null&&(ps(t,t.type),n.contextTypes&&(a=T(n)||`Unknown`,cb[a]||(cb[a]=!0,console.error(`%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)`,a)))),Wr(t),n=ca(e,t,n,r,void 0,i),r=fa(),e!==null&&!ab?(pa(e,t,i),Cs(e,t,i)):(Xg&&r&&xr(t),t.flags|=1,Qo(e,t,n,i),t.child)}function us(e,t,n,r,i,a){return Wr(t),Py=-1,Fy=e!==null&&e.type!==t.type,t.updateQueue=null,n=ua(t,r,n,i),la(e,t),r=fa(),e!==null&&!ab?(pa(e,t,a),Cs(e,t,a)):(Xg&&r&&xr(t),t.flags|=1,Qo(e,t,n,a),t.child)}function ds(e,t,n,r,i){switch(s(t)){case!1:var a=t.stateNode,o=new t.type(t.memoizedProps,a.context).state;a.updater.enqueueSetState(a,o,null);break;case!0:t.flags|=128,t.flags|=65536,a=Error(`Simulated error coming from DevTools`);var c=i&-i;if(t.lanes|=c,o=Ub,o===null)throw Error(`Expected a work-in-progress root. This is a bug in React. Please file an issue.`);c=Yo(c),Xo(c,o,t,vr(a,t)),Wi(t,c)}if(Wr(t),t.stateNode===null){if(o=Og,a=n.contextType,`contextType`in n&&a!==null&&(a===void 0||a.$$typeof!==kf)&&!$y.has(n)&&($y.add(n),c=a===void 0?` However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.`:typeof a==`object`?a.$$typeof===Of?` Did you accidentally pass the Context.Consumer instead?`:` However, it is set to an object with keys {`+Object.keys(a).join(`, `)+`}.`:` However, it is set to a `+typeof a+`.`,console.error(`%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s`,T(n)||`Component`,c)),typeof a==`object`&&a&&(o=W(a)),a=new n(r,o),t.mode&Ng){Ee(!0);try{a=new n(r,o)}finally{Ee(!1)}}if(o=t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=tb,t.stateNode=a,a._reactInternals=t,a._reactInternalInstance=Wy,typeof n.getDerivedStateFromProps==`function`&&o===null&&(o=T(n)||`Component`,Ky.has(o)||(Ky.add(o),console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",o,a.state===null?`null`:`undefined`,o))),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`){var l=c=o=null;if(typeof a.componentWillMount==`function`&&!0!==a.componentWillMount.__suppressDeprecationWarning?o=`componentWillMount`:typeof a.UNSAFE_componentWillMount==`function`&&(o=`UNSAFE_componentWillMount`),typeof a.componentWillReceiveProps==`function`&&!0!==a.componentWillReceiveProps.__suppressDeprecationWarning?c=`componentWillReceiveProps`:typeof a.UNSAFE_componentWillReceiveProps==`function`&&(c=`UNSAFE_componentWillReceiveProps`),typeof a.componentWillUpdate==`function`&&!0!==a.componentWillUpdate.__suppressDeprecationWarning?l=`componentWillUpdate`:typeof a.UNSAFE_componentWillUpdate==`function`&&(l=`UNSAFE_componentWillUpdate`),o!==null||c!==null||l!==null){a=T(n)||`Component`;var u=typeof n.getDerivedStateFromProps==`function`?`getDerivedStateFromProps()`:`getSnapshotBeforeUpdate()`;Jy.has(a)||(Jy.add(a),console.error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,a,u,o===null?``:`
  `+o,c===null?``:`
  `+c,l===null?``:`
  `+l))}}a=t.stateNode,o=T(n)||`Component`,a.render||(n.prototype&&typeof n.prototype.render==`function`?console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?",o):console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.",o)),!a.getInitialState||a.getInitialState.isReactClassApproved||a.state||console.error(`getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?`,o),a.getDefaultProps&&!a.getDefaultProps.isReactClassApproved&&console.error(`getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.`,o),a.contextType&&console.error(`contextType was defined as an instance property on %s. Use a static property to define contextType instead.`,o),n.childContextTypes&&!Qy.has(n)&&(Qy.add(n),console.error(`%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)`,o)),n.contextTypes&&!Zy.has(n)&&(Zy.add(n),console.error(`%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)`,o)),typeof a.componentShouldUpdate==`function`&&console.error(`%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.`,o),n.prototype&&n.prototype.isPureReactComponent&&a.shouldComponentUpdate!==void 0&&console.error(`%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.`,T(n)||`A pure component`),typeof a.componentDidUnmount==`function`&&console.error(`%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?`,o),typeof a.componentDidReceiveProps==`function`&&console.error(`%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().`,o),typeof a.componentWillRecieveProps==`function`&&console.error(`%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?`,o),typeof a.UNSAFE_componentWillRecieveProps==`function`&&console.error(`%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?`,o),c=a.props!==r,a.props!==void 0&&c&&console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",o),a.defaultProps&&console.error(`Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.`,o,o),typeof a.getSnapshotBeforeUpdate!=`function`||typeof a.componentDidUpdate==`function`||qy.has(n)||(qy.add(n),console.error(`%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.`,T(n))),typeof a.getDerivedStateFromProps==`function`&&console.error(`%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.`,o),typeof a.getDerivedStateFromError==`function`&&console.error(`%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.`,o),typeof n.getSnapshotBeforeUpdate==`function`&&console.error(`%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.`,o),(c=a.state)&&(typeof c!=`object`||zf(c))&&console.error(`%s.state: must be set to an object or null`,o),typeof a.getChildContext==`function`&&typeof n.childContextTypes!=`object`&&console.error(`%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().`,o),a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},zi(t),o=n.contextType,a.context=typeof o==`object`&&o?W(o):Og,a.state===r&&(o=T(n)||`Component`,Yy.has(o)||(Yy.add(o),console.error(`%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.`,o))),t.mode&Ng&&ov.recordLegacyContextWarning(t,a),ov.recordUnsafeLifecycleWarnings(t,a),a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(zo(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&(console.error(`%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.`,E(t)||`Component`),tb.enqueueReplaceState(a,a.state,null)),Ki(t,r,a,i),Gi(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),(t.mode&Pg)!==X&&(t.flags|=134217728),a=!0}else if(e===null){a=t.stateNode;var d=t.memoizedProps;c=Ho(n,d),a.props=c;var f=a.context;l=n.contextType,o=Og,typeof l==`object`&&l&&(o=W(l)),u=n.getDerivedStateFromProps,l=typeof u==`function`||typeof a.getSnapshotBeforeUpdate==`function`,d=t.pendingProps!==d,l||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(d||f!==o)&&Vo(t,a,r,o),ey=!1;var p=t.memoizedState;a.state=p,Ki(t,r,a,i),Gi(),f=t.memoizedState,d||p!==f||ey?(typeof u==`function`&&(zo(t,n,u,r),f=t.memoizedState),(c=ey||Bo(t,n,c,r,p,f,o))?(l||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308),(t.mode&Pg)!==X&&(t.flags|=134217728)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),(t.mode&Pg)!==X&&(t.flags|=134217728),t.memoizedProps=r,t.memoizedState=f),a.props=r,a.state=f,a.context=o,a=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),(t.mode&Pg)!==X&&(t.flags|=134217728),a=!1)}else{a=t.stateNode,Bi(e,t),o=t.memoizedProps,l=Ho(n,o),a.props=l,u=t.pendingProps,p=a.context,f=n.contextType,c=Og,typeof f==`object`&&f&&(c=W(f)),d=n.getDerivedStateFromProps,(f=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==u||p!==c)&&Vo(t,a,r,c),ey=!1,p=t.memoizedState,a.state=p,Ki(t,r,a,i),Gi();var m=t.memoizedState;o!==u||p!==m||ey||e!==null&&e.dependencies!==null&&Ur(e.dependencies)?(typeof d==`function`&&(zo(t,n,d,r),m=t.memoizedState),(l=ey||Bo(t,n,l,r,p,m,c)||e!==null&&e.dependencies!==null&&Ur(e.dependencies))?(f||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,m,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,m,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=c,a=l):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),a=!1)}if(c=a,cs(e,t),o=(t.flags&128)!=0,c||o){if(c=t.stateNode,be(t),o&&typeof n.getDerivedStateFromError!=`function`)n=null,b_=-1;else if(n=yv(c),t.mode&Ng){Ee(!0);try{yv(c)}finally{Ee(!1)}}t.flags|=1,e!==null&&o?(t.child=Jv(t,e.child,null,i),t.child=Jv(t,null,n,i)):Qo(e,t,n,i),t.memoizedState=c.state,e=t.child}else e=Cs(e,t,i);return i=t.stateNode,a&&i.props!==r&&(ub||console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",E(t)||`a component`),ub=!0),e}function fs(e,t,n,r){return Nr(),t.flags|=256,Qo(e,t,n,r),t.child}function ps(e,t){t&&t.childContextTypes&&console.error(`childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,t.displayName||t.name||`Component`),typeof t.getDerivedStateFromProps==`function`&&(e=T(t)||`Unknown`,lb[e]||(console.error(`%s: Function components do not support getDerivedStateFromProps.`,e),lb[e]=!0)),typeof t.contextType==`object`&&t.contextType!==null&&(t=T(t)||`Unknown`,sb[t]||(console.error(`%s: Function components do not support contextType.`,t),sb[t]=!0))}function ms(e){return{baseLanes:e,cachePool:bi()}}function hs(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=fx),e}function gs(e,t,n){var r,i=t.pendingProps;o(t)&&(t.flags|=128);var a=!1,s=(t.flags&128)!=0;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(uy.current&ly)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!=0,t.flags&=-33,e===null){if(Xg){if(a?Qi(t):ta(t),(e=Yg)?(n=id(e,e_),n=n!==null&&n.data!==AS?n:null,n!==null&&(r={dehydrated:n,treeContext:Cr(),retryLane:536870912,hydrationErrors:null},t.memoizedState=r,r=gr(n),r.return=t,t.child=r,Jg=t,Yg=null)):n=null,n===null)throw Or(t,e),kr(t);return od(n)?t.lanes=32:t.lanes=536870912,null}var c=i.children;if(i=i.fallback,a){ta(t);var l=t.mode;return c=vs({mode:`hidden`,children:c},l),i=mr(i,l,n,null),c.return=t,i.return=t,c.sibling=i,t.child=c,i=t.child,i.memoizedState=ms(n),i.childLanes=hs(e,r,n),t.memoizedState=pb,rs(null,i)}return Qi(t),_s(t,c)}var u=e.memoizedState;if(u!==null){var d=u.dehydrated;if(d!==null){if(s)t.flags&256?(Qi(t),t.flags&=-257,t=ys(e,t,n)):t.memoizedState===null?(ta(t),c=i.fallback,l=t.mode,i=vs({mode:`visible`,children:i.children},l),c=mr(c,l,n,null),c.flags|=2,i.return=t,c.return=t,i.sibling=c,t.child=i,Jv(t,e.child,null,n),i=t.child,i.memoizedState=ms(n),i.childLanes=hs(e,r,n),t.memoizedState=pb,t=rs(null,i)):(ta(t),t.child=e.child,t.flags|=128,t=null);else if(Qi(t),Dr(),n&536870912&&rl(t),od(d)){if(r=d.nextSibling&&d.nextSibling.dataset,r){c=r.dgst;var f=r.msg;l=r.stck;var p=r.cstck}a=f,r=c,i=l,d=p,c=a,l=d,c=Error(c||`The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.`),c.stack=i||``,c.digest=r,r=l===void 0?null:l,i={value:c,source:null,stack:r},typeof r==`string`&&Rg.set(c,i),Fr(i),t=ys(e,t,n)}else if(ab||Hr(e,t,n,!1),r=(n&e.childLanes)!==0,ab||r){if(r=Ub,r!==null&&(i=Le(r,n),i!==0&&i!==u.retryLane))throw u.retryLane=i,tr(e,i),Wc(r,e,i),ib;ad(d)||il(),t=ys(e,t,n)}else ad(d)?(t.flags|=192,t.child=e.child,t=null):(e=u.treeContext,Yg=cd(d.nextSibling),Jg=t,Xg=!0,$g=null,Zg=!1,Qg=null,e_=!1,e!==null&&wr(t,e),t=_s(t,i.children),t.flags|=4096);return t}}return a?(ta(t),c=i.fallback,l=t.mode,p=e.child,d=p.sibling,i=ur(p,{mode:`hidden`,children:i.children}),i.subtreeFlags=p.subtreeFlags&65011712,d===null?(c=mr(c,l,n,null),c.flags|=2):c=ur(d,c),c.return=t,i.return=t,i.sibling=c,t.child=i,rs(null,i),i=t.child,c=e.child.memoizedState,c===null?c=ms(n):(l=c.cachePool,l===null?l=bi():(p=d_._currentValue,l=l.parent===p?l:{parent:p,pool:p}),c={baseLanes:c.baseLanes|n,cachePool:l}),i.memoizedState=c,i.childLanes=hs(e,r,n),t.memoizedState=pb,rs(e.child,i)):(u!==null&&(n&62914560)===n&&(n&e.lanes)!==0&&rl(t),Qi(t),n=e.child,e=n.sibling,n=ur(n,{mode:`visible`,children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function _s(e,t){return t=vs({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function vs(e,t){return e=h(22,e,null,t),e.lanes=0,e}function ys(e,t,n){return Jv(t,e.child,null,n),e=_s(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Br(e.return,t,n)}function xs(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ss(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail,o=r.children,s=uy.current;if((r=(s&ly)!==0)?(s=s&cy|ly,t.flags|=128):s&=cy,D(uy,s,t),s=i??`null`,i!==`forwards`&&i!==`unstable_legacy-backwards`&&i!==`together`&&i!==`independent`&&!db[s])if(db[s]=!0,i==null)console.error(`The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".`);else if(i===`backwards`)console.error(`The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.`);else if(typeof i==`string`)switch(i.toLowerCase()){case`together`:case`forwards`:case`backwards`:case`independent`:console.error(`"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.`,i,i.toLowerCase());break;case`forward`:case`backward`:console.error(`"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.`,i,i.toLowerCase());break;default:console.error(`"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?`,i)}else console.error(`%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?`,i);s=a??`null`,fb[s]||(a==null?(i===`forwards`||i===`backwards`||i===`unstable_legacy-backwards`)&&(fb[s]=!0,console.error(`The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".`)):a!==`visible`&&a!==`collapsed`&&a!==`hidden`?(fb[s]=!0,console.error(`"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?`,a)):i!==`forwards`&&i!==`backwards`&&i!==`unstable_legacy-backwards`&&(fb[s]=!0,console.error(`<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?`,a)));a:if((i===`forwards`||i===`backwards`||i===`unstable_legacy-backwards`)&&o!=null&&!1!==o)if(zf(o)){for(s=0;s<o.length;s++)if(!Ri(o[s],s))break a}else if(s=w(o),typeof s==`function`){if(s=s.call(o))for(var c=s.next(),l=0;!c.done;c=s.next()){if(!Ri(c.value,l))break a;l++}}else console.error(`A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?`,i);if(Qo(e,t,o,n),Xg?(Tr(),o=Hg):o=0,!r&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bs(e,n,t);else if(e.tag===19)bs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ra(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),xs(t,!1,i,n,a,o);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ra(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}xs(t,!0,n,null,a,o);break;case`together`:xs(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function Cs(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),b_=-1,lx|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Hr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(`Resuming work not yet implemented.`);if(t.child!==null){for(e=t.child,n=ur(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ur(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ws(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Ur(e))):!0}function Ts(e,t,n){switch(t.tag){case 3:se(t,t.stateNode.containerInfo),Rr(t,d_,e.memoizedState.cache),Nr();break;case 27:case 5:ce(t);break;case 4:se(t,t.stateNode.containerInfo);break;case 10:Rr(t,t.type,t.memoizedProps.value);break;case 12:(n&t.childLanes)!==0&&(t.flags|=4),t.flags|=2048;var r=t.stateNode;r.effectDuration=-0,r.passiveEffectDuration=-0;break;case 31:if(t.memoizedState!==null)return t.flags|=128,$i(t),null;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(Qi(t),e=Cs(e,t,n),e===null?null:e.sibling):gs(e,t,n):(Qi(t),t.flags|=128,null);Qi(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Hr(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ss(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(uy,uy.current,t),r)break;return null;case 22:return t.lanes=0,ns(e,t,n,t.pendingProps);case 24:Rr(t,d_,e.memoizedState.cache)}return Cs(e,t,n)}function Es(e,t,n){if(t._debugNeedsRemount&&e!==null){n=fr(t.type,t.key,t.pendingProps,t._debugOwner||null,t.mode,t.lanes),n._debugStack=t._debugStack,n._debugTask=t._debugTask;var r=t.return;if(r===null)throw Error(`Cannot swap the root fiber.`);if(e.alternate=null,t.alternate=null,n.index=t.index,n.sibling=t.sibling,n.return=t.return,n.ref=t.ref,n._debugInfo=t._debugInfo,t===r.child)r.child=n;else{var i=r.child;if(i===null)throw Error(`Expected parent to have a child.`);for(;i.sibling!==t;)if(i=i.sibling,i===null)throw Error(`Expected to find the previous sibling.`);i.sibling=n}return t=r.deletions,t===null?(r.deletions=[e],r.flags|=16):t.push(e),n.flags|=2,n}if(e!==null)if(e.memoizedProps!==t.pendingProps||t.type!==e.type)ab=!0;else{if(!ws(e,n)&&!(t.flags&128))return ab=!1,Ts(e,t,n);ab=!!(e.flags&131072)}else ab=!1,(r=Xg)&&(Tr(),r=(t.flags&1048576)!=0),r&&(r=t.index,Tr(),br(t,Hg,r));switch(t.lanes=0,t.tag){case 16:a:if(r=t.pendingProps,e=wi(t.elementType),t.type=e,typeof e==`function`)lr(e)?(r=Ho(e,r),t.tag=1,t.type=e=ir(e),t=ds(null,t,e,r,n)):(t.tag=0,ps(t,e),t.type=e=ir(e),t=ls(null,t,e,r,n));else{if(e!=null){if(i=e.$$typeof,i===Af){t.tag=11,t.type=e=ar(e),t=$o(null,t,e,r,n);break a}else if(i===Nf){t.tag=14,t=es(null,t,e,r,n);break a}}throw t=``,typeof e==`object`&&e&&e.$$typeof===Pf&&(t=` Did you wrap a component in React.lazy() more than once?`),n=T(e)||e,Error(`Element type is invalid. Received a promise that resolves to: `+n+`. Lazy element type must resolve to a class or function.`+t)}return t;case 0:return ls(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Ho(r,t.pendingProps),ds(e,t,r,i,n);case 3:a:{if(se(t,t.stateNode.containerInfo),e===null)throw Error(`Should have a current fiber. This is a bug in React.`);r=t.pendingProps;var a=t.memoizedState;i=a.element,Bi(e,t),Ki(t,r,null,n);var o=t.memoizedState;if(r=o.cache,Rr(t,d_,r),r!==a.cache&&Vr(t,[d_],n,!0),Gi(),r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=fs(e,t,r,n);break a}else if(r!==i){i=vr(Error(`This root received an early update, before anything was able hydrate. Switched the entire root to client rendering.`),t),Fr(i),t=fs(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Yg=cd(e.firstChild),Jg=t,Xg=!0,$g=null,Zg=!1,Qg=null,e_=!0,n=Yv(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Nr(),r===i){t=Cs(e,t,n);break a}Qo(e,t,r,n)}t=t.child}return t;case 26:return cs(e,t),e===null?(n=xd(t.type,null,t.pendingProps,null))?t.memoizedState=n:Xg||(n=t.type,e=t.pendingProps,r=oe(qf.current),r=Au(r).createElement(n),r[Rp]=t,r[zp]=e,gu(r,n,e),L(r),t.stateNode=r):t.memoizedState=xd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ce(t),e===null&&Xg&&(r=oe(qf.current),i=k(),r=t.stateNode=gd(t.type,t.pendingProps,r,i,!1),Zg||(i=Eu(r,t.type,t.pendingProps,i),i!==null&&(Er(t,0).serverProps=i)),Jg=t,e_=!0,i=Yg,Wu(t.type)?(rC=i,Yg=cd(r.firstChild)):Yg=i),Qo(e,t,t.pendingProps.children,n),cs(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Xg&&(a=k(),r=Rt(t.type,a.ancestorInfo),i=Yg,(o=!i)||(o=nd(i,t.type,t.pendingProps,e_),o===null?a=!1:(t.stateNode=o,Zg||(a=Eu(o,t.type,t.pendingProps,a),a!==null&&(Er(t,0).serverProps=a)),Jg=t,Yg=cd(o.firstChild),e_=!1,a=!0),o=!a),o&&(r&&Or(t,i),kr(t))),ce(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,Nu(i,a)?r=null:o!==null&&Nu(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=ca(e,t,da,null,null,n),xC._currentValue=i),cs(e,t),Qo(e,t,r,n),t.child;case 6:return e===null&&Xg&&(n=t.pendingProps,e=k(),r=e.ancestorInfo.current,n=r==null?!0:zt(n,r.tag,e.ancestorInfo.implicitRootScope),e=Yg,(r=!e)||(r=rd(e,t.pendingProps,e_),r===null?r=!1:(t.stateNode=r,Jg=t,Yg=null,r=!0),r=!r),r&&(n&&Or(t,e),kr(t))),null;case 13:return gs(e,t,n);case 4:return se(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Jv(t,null,r,n):Qo(e,t,r,n),t.child;case 11:return $o(e,t,t.type,t.pendingProps,n);case 7:return Qo(e,t,t.pendingProps,n),t.child;case 8:return Qo(e,t,t.pendingProps.children,n),t.child;case 12:return t.flags|=4,t.flags|=2048,r=t.stateNode,r.effectDuration=-0,r.passiveEffectDuration=-0,Qo(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.type,i=t.pendingProps,a=i.value,`value`in i||mb||(mb=!0,console.error("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?")),Rr(t,r,a),Qo(e,t,i.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,typeof r!=`function`&&console.error(`A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.`),Wr(t),i=W(i),r=_v(r,i,void 0),t.flags|=1,Qo(e,t,r,n),t.child;case 14:return es(e,t,t.type,t.pendingProps,n);case 15:return ts(e,t,t.type,t.pendingProps,n);case 19:return Ss(e,t,n);case 31:return ss(e,t,n);case 22:return ns(e,t,n,t.pendingProps);case 24:return Wr(t),r=W(d_),e===null?(i=vi(),i===null&&(i=Ub,a=qr(),i.pooledCache=a,Jr(a),a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},zi(t),Rr(t,d_,i)):((e.lanes&n)!==0&&(Bi(e,t),Ki(t,null,null,n),Gi()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,Rr(t,d_,r),r!==i.cache&&Vr(t,[d_],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Rr(t,d_,r))),Qo(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(`Unknown unit of work tag (`+t.tag+`). This error is likely caused by a bug in React. Please file an issue.`)}function Ds(e){e.flags|=4}function Os(e,t,n,r,i){if((t=(e.mode&Fg)!==X)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(el())e.flags|=8192;else throw Rv=Lv,Fv}else e.flags&=-16777217}function ks(e,t){if(t.type!==`stylesheet`||(t.state.loading&cC)!==iC)e.flags&=-16777217;else if(e.flags|=16777216,!Id(t))if(el())e.flags|=8192;else throw Rv=Lv,Fv}function As(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Me(),e.lanes|=t,px|=t)}function js(e,t){if(!Xg)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ms(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)if((e.mode&Mg)!==X){for(var i=e.selfBaseDuration,a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&65011712,r|=a.flags&65011712,i+=a.treeBaseDuration,a=a.sibling;e.treeBaseDuration=i}else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else if((e.mode&Mg)!==X){i=e.actualDuration,a=e.selfBaseDuration;for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,i+=o.actualDuration,a+=o.treeBaseDuration,o=o.sibling;e.actualDuration=i,e.treeBaseDuration=a}else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ns(e,t,n){var r=t.pendingProps;switch(Sr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ms(t),null;case 1:return Ms(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),zr(d_,t),O(t),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Mr(t)?(Ir(),Ds(t)):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pr())),Ms(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(Ds(t),a===null?(Ms(t),Os(t,i,null,r,n)):(Ms(t),ks(t,a))):a?a===e.memoizedState?(Ms(t),t.flags&=-16777217):(Ds(t),Ms(t),ks(t,a)):(e=e.memoizedProps,e!==r&&Ds(t),Ms(t),Os(t,i,e,r,n)),null;case 27:if(le(t),n=oe(qf.current),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ds(t);else{if(!r){if(t.stateNode===null)throw Error(`We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.`);return Ms(t),null}e=k(),Mr(t)?Ar(t,e):(e=gd(i,r,n,e,!0),t.stateNode=e,Ds(t))}return Ms(t),null;case 5:if(le(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ds(t);else{if(!r){if(t.stateNode===null)throw Error(`We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.`);return Ms(t),null}var o=k();if(Mr(t))Ar(t,o);else{switch(a=oe(qf.current),Rt(i,o.ancestorInfo),o=o.context,a=Au(a),o){case GS:a=a.createElementNS(Om,i);break;case KS:a=a.createElementNS(Dm,i);break;default:switch(i){case`svg`:a=a.createElementNS(Om,i);break;case`math`:a=a.createElementNS(Dm,i);break;case`script`:a=a.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?a.createElement(`select`,{is:r.is}):a.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?a.createElement(i,{is:r.is}):a.createElement(i),i.indexOf(`-`)===-1&&(i!==i.toLowerCase()&&console.error(`<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.`,i),Object.prototype.toString.call(a)!==`[object HTMLUnknownElement]`||lp.call(YS,i)||(YS[i]=!0,console.error(`The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.`,i)))}}a[Rp]=t,a[zp]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(gu(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Ds(t)}}return Ms(t),Os(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ds(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(`We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.`);if(e=oe(qf.current),n=k(),Mr(t)){if(e=t.stateNode,n=t.memoizedProps,i=!Zg,r=null,a=Jg,a!==null)switch(a.tag){case 3:i&&(i=ud(e,n,r),i!==null&&(Er(t,0).serverProps=i));break;case 27:case 5:r=a.memoizedProps,i&&(i=ud(e,n,r),i!==null&&(Er(t,0).serverProps=i))}e[Rp]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||pu(e.nodeValue,n)),e||kr(t,!0)}else i=n.ancestorInfo.current,i!=null&&zt(r,i.tag,n.ancestorInfo.implicitRootScope),e=Au(e).createTextNode(r),e[Rp]=t,t.stateNode=e}return Ms(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Mr(t),n!==null){if(e===null){if(!r)throw Error(`A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.`);if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(`Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue.`);e[Rp]=t,Ms(t),(t.mode&Mg)!==X&&n!==null&&(e=t.child,e!==null&&(t.treeBaseDuration-=e.treeBaseDuration))}else Ir(),Nr(),!(t.flags&128)&&(n=t.memoizedState=null),t.flags|=4,Ms(t),(t.mode&Mg)!==X&&n!==null&&(e=t.child,e!==null&&(t.treeBaseDuration-=e.treeBaseDuration));e=!1}else n=Pr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(na(t),t):(na(t),null);if(t.flags&128)throw Error(`Client rendering an Activity suspended it again. This is a bug in React.`)}return Ms(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=r,a=Mr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(`A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.`);if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(`Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.`);a[Rp]=t,Ms(t),(t.mode&Mg)!==X&&i!==null&&(i=t.child,i!==null&&(t.treeBaseDuration-=i.treeBaseDuration))}else Ir(),Nr(),!(t.flags&128)&&(i=t.memoizedState=null),t.flags|=4,Ms(t),(t.mode&Mg)!==X&&i!==null&&(i=t.child,i!==null&&(t.treeBaseDuration-=i.treeBaseDuration));i=!1}else i=Pr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(na(t),t):(na(t),null)}return na(t),t.flags&128?(t.lanes=n,(t.mode&Mg)!==X&&mi(t),t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),As(t,t.updateQueue),Ms(t),(t.mode&Mg)!==X&&n&&(e=t.child,e!==null&&(t.treeBaseDuration-=e.treeBaseDuration)),null);case 4:return O(t),e===null&&eu(t.stateNode.containerInfo),Ms(t),null;case 10:return zr(t.type,t),Ms(t),null;case 19:if(ae(uy,t),r=t.memoizedState,r===null)return Ms(t),null;if(i=(t.flags&128)!=0,a=r.rendering,a===null)if(i)js(r,!1);else{if(cx!==Fb||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ra(e),a!==null){for(t.flags|=128,js(r,!1),e=a.updateQueue,t.updateQueue=e,As(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)dr(n,e),n=n.sibling;return D(uy,uy.current&cy|ly,t),Xg&&yr(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&mp()>bx&&(t.flags|=128,i=!0,js(r,!1),t.lanes=4194304)}else{if(!i)if(e=ra(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,As(t,e),js(r,!0),r.tail===null&&r.tailMode===`hidden`&&!a.alternate&&!Xg)return Ms(t),null}else 2*mp()-r.renderingStartTime>bx&&n!==536870912&&(t.flags|=128,i=!0,js(r,!1),t.lanes=4194304);r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}return r.tail===null?(Ms(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=mp(),e.sibling=null,n=uy.current,n=i?n&cy|ly:n&cy,D(uy,n,t),Xg&&yr(t,r.treeForkCount),e);case 22:case 23:return na(t),Zi(t),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Ms(t),t.subtreeFlags&6&&(t.flags|=8192)):Ms(t),n=t.updateQueue,n!==null&&As(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&ae(av,t),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),zr(d_,t),Ms(t),null;case 25:return null;case 30:return null}throw Error(`Unknown unit of work tag (`+t.tag+`). This error is likely caused by a bug in React. Please file an issue.`)}function Ps(e,t){switch(Sr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,(t.mode&Mg)!==X&&mi(t),t):null;case 3:return zr(d_,t),O(t),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return le(t),null;case 31:if(t.memoizedState!==null){if(na(t),t.alternate===null)throw Error(`Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.`);Nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,(t.mode&Mg)!==X&&mi(t),t):null;case 13:if(na(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(`Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.`);Nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,(t.mode&Mg)!==X&&mi(t),t):null;case 19:return ae(uy,t),null;case 4:return O(t),null;case 10:return zr(t.type,t),null;case 22:case 23:return na(t),Zi(t),e!==null&&ae(av,t),e=t.flags,e&65536?(t.flags=e&-65537|128,(t.mode&Mg)!==X&&mi(t),t):null;case 24:return zr(d_,t),null;case 25:return null;default:return null}}function Fs(e,t){switch(Sr(t),t.tag){case 3:zr(d_,t),O(t);break;case 26:case 27:case 5:le(t);break;case 4:O(t);break;case 31:t.memoizedState!==null&&na(t);break;case 13:na(t);break;case 19:ae(uy,t);break;case 10:zr(t.type,t);break;case 22:case 23:na(t),Zi(t),e!==null&&ae(av,t);break;case 24:zr(d_,t)}}function Is(e){return(e.mode&Mg)!==X}function Ls(e,t){Is(e)?(pi(),zs(t,e),di()):zs(t,e)}function Rs(e,t,n){Is(e)?(pi(),Bs(n,e,t),di()):Bs(n,e,t)}function zs(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e&&(r=void 0,(e&py)!==dy&&(eS=!0),r=j(t,kv,n),(e&py)!==dy&&(eS=!1),r!==void 0&&typeof r!=`function`)){var a=void 0;a=(n.tag&my)===0?(n.tag&py)===0?`useEffect`:`useInsertionEffect`:`useLayoutEffect`;var o=void 0;o=r===null?` You returned null. If your effect does not require clean up, return undefined (or nothing).`:typeof r.then==`function`?`

It looks like you wrote `+a+`(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

`+a+`(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching`:` You returned: `+r,j(t,function(e,t){console.error(`%s must not return anything besides a function, which is used for clean-up.%s`,e,t)},a,o)}n=n.next}while(n!==i)}}catch(e){wl(t,t.return,e)}}function Bs(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;s!==void 0&&(o.destroy=void 0,(e&py)!==dy&&(eS=!0),i=t,j(i,jv,i,n,s),(e&py)!==dy&&(eS=!1))}r=r.next}while(r!==a)}}catch(e){wl(t,t.return,e)}}function Vs(e,t){Is(e)?(pi(),zs(t,e),di()):zs(t,e)}function Hs(e,t,n){Is(e)?(pi(),Bs(n,e,t),di()):Bs(n,e,t)}function Us(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;e.type.defaultProps||`ref`in e.memoizedProps||ub||(n.props!==e.memoizedProps&&console.error("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",E(e)||`instance`),n.state!==e.memoizedState&&console.error("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",E(e)||`instance`));try{j(e,K,t,n)}catch(t){wl(e,e.return,t)}}}function Ws(e,t,n){return e.getSnapshotBeforeUpdate(t,n)}function Gs(e,t){var n=t.memoizedProps,r=t.memoizedState;t=e.stateNode,e.type.defaultProps||`ref`in e.memoizedProps||ub||(t.props!==e.memoizedProps&&console.error("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",E(e)||`instance`),t.state!==e.memoizedState&&console.error("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",E(e)||`instance`));try{var i=Ho(e.type,n),a=j(e,Ws,t,i,r);n=hb,a!==void 0||n.has(e.type)||(n.add(e.type),j(e,function(){console.error(`%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.`,E(e))})),t.__reactInternalSnapshotBeforeUpdate=a}catch(t){wl(e,e.return,t)}}function Ks(e,t,n){n.props=Ho(e.type,e.memoizedProps),n.state=e.memoizedState,Is(e)?(pi(),j(e,Dv,e,t,n),di()):j(e,Dv,e,t,n)}function qs(e){var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}if(typeof t==`function`)if(Is(e))try{pi(),e.refCleanup=t(n)}finally{di()}else e.refCleanup=t(n);else typeof t==`string`?console.error(`String refs are no longer supported.`):t.hasOwnProperty(`current`)||console.error(`Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().`,E(e)),t.current=n}}function Js(e,t){try{j(e,qs,e)}catch(n){wl(e,t,n)}}function Ys(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{if(Is(e))try{pi(),j(e,r)}finally{di(e)}else j(e,r)}catch(n){wl(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{if(Is(e))try{pi(),j(e,n,null)}finally{di(e)}else j(e,n,null)}catch(n){wl(e,t,n)}else n.current=null}function Xs(e,t,n,r){var i=e.memoizedProps,a=i.id,o=i.onCommit;i=i.onRender,t=t===null?`mount`:`update`,Q_&&(t=`nested-update`),typeof i==`function`&&i(a,t,e.actualDuration,e.treeBaseDuration,e.actualStartTime,n),typeof o==`function`&&o(a,t,r,n)}function Zs(e,t,n,r){var i=e.memoizedProps;e=i.id,i=i.onPostCommit,t=t===null?`mount`:`update`,Q_&&(t=`nested-update`),typeof i==`function`&&i(e,t,r,n)}function Qs(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{j(e,Ru,r,t,n,e)}catch(t){wl(e,e.return,t)}}function $s(e,t,n){try{j(e,Bu,e.stateNode,e.type,n,t,e)}catch(t){wl(e,e.return,t)}}function ec(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Wu(e.type)||e.tag===4}function tc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||ec(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Wu(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(Uu(n),(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t)):(Uu(n),t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zt));else if(r!==4&&(r===27&&Wu(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(nc(e,t,n),e=e.sibling;e!==null;)nc(e,t,n),e=e.sibling}function rc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Wu(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(rc(e,t,n),e=e.sibling;e!==null;)rc(e,t,n),e=e.sibling}function ic(e){for(var t,n=e.return;n!==null;){if(ec(n)){t=n;break}n=n.return}if(t==null)throw Error(`Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.`);switch(t.tag){case 27:t=t.stateNode,n=tc(e),rc(e,n,t);break;case 5:n=t.stateNode,t.flags&32&&(Vu(n),t.flags&=-33),t=tc(e),rc(e,t,n);break;case 3:case 4:t=t.stateNode.containerInfo,n=tc(e),nc(e,n,t);break;default:throw Error(`Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.`)}}function ac(e){var t=e.stateNode,n=e.memoizedProps;try{j(e,_d,e.type,n,t,e)}catch(t){wl(e,e.return,t)}}function oc(e,t){return t.tag===31?(t=t.memoizedState,e.memoizedState!==null&&t===null):t.tag===13?(e=e.memoizedState,t=t.memoizedState,e!==null&&e.dehydrated!==null&&(t===null||t.dehydrated===null)):t.tag===3?e.memoizedState.isDehydrated&&(t.flags&256)==0:!1}function sc(e,t){if(e=e.containerInfo,qS=RC,e=On(e),kn(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break a}var o=0,s=-1,c=-1,l=0,u=0,d=e,f=null;b:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(s=o+i),d!==a||r!==0&&d.nodeType!==3||(c=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===e)break b;if(f===n&&++l===i&&(s=o),f===a&&++u===r&&(c=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n||={start:0,end:0}}else n=null;for(JS={focusedElem:e,selectionRange:n},RC=!1,bb=t;bb!==null;)if(t=bb,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,bb=e;else for(;bb!==null;){switch(e=t=bb,n=e.alternate,i=e.flags,e.tag){case 0:if(i&4&&(e=e.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:i&1024&&n!==null&&Gs(e,n);break;case 3:if(i&1024){if(e=e.stateNode.containerInfo,n=e.nodeType,n===9)td(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:td(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(i&1024)throw Error(`This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.`)}if(e=t.sibling,e!==null){e.return=t.return,bb=e;break}bb=t.return}}function cc(e,t,n){var r=ni(),i=ii(),a=oi(),o=si(),s=n.flags;switch(n.tag){case 0:case 11:case 15:bc(e,n),s&4&&Ls(n,my|fy);break;case 1:if(bc(e,n),s&4)if(e=n.stateNode,t===null)n.type.defaultProps||`ref`in n.memoizedProps||ub||(e.props!==n.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",E(n)||`instance`),e.state!==n.memoizedState&&console.error("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",E(n)||`instance`)),Is(n)?(pi(),j(n,xv,n,e),di()):j(n,xv,n,e);else{var c=Ho(n.type,t.memoizedProps);t=t.memoizedState,n.type.defaultProps||`ref`in n.memoizedProps||ub||(e.props!==n.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",E(n)||`instance`),e.state!==n.memoizedState&&console.error("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",E(n)||`instance`)),Is(n)?(pi(),j(n,Cv,n,e,c,t,e.__reactInternalSnapshotBeforeUpdate),di()):j(n,Cv,n,e,c,t,e.__reactInternalSnapshotBeforeUpdate)}s&64&&Us(n),s&512&&Js(n,n.return);break;case 3:if(t=Qr(),bc(e,n),s&64&&(s=n.updateQueue,s!==null)){if(c=null,n.child!==null)switch(n.child.tag){case 27:case 5:c=n.child.stateNode;break;case 1:c=n.child.stateNode}try{j(n,K,s,c)}catch(e){wl(n,n.return,e)}}e.effectDuration+=$r(t);break;case 27:t===null&&s&4&&ac(n);case 26:case 5:if(bc(e,n),t===null){if(s&4)Qs(n);else if(s&64){e=n.type,t=n.memoizedProps,c=n.stateNode;try{j(n,zu,c,e,t,n)}catch(e){wl(n,n.return,e)}}}s&512&&Js(n,n.return);break;case 12:if(s&4){s=Qr(),bc(e,n),e=n.stateNode,e.effectDuration+=ei(s);try{j(n,Xs,n,t,__,e.effectDuration)}catch(e){wl(n,n.return,e)}}else bc(e,n);break;case 31:bc(e,n),s&4&&fc(e,n);break;case 13:bc(e,n),s&4&&pc(e,n),s&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=Ol.bind(null,n),sd(e,s))));break;case 22:if(s=n.memoizedState!==null||gb,!s){t=t!==null&&t.memoizedState!==null||_b,c=gb;var l=_b;gb=s,(_b=t)&&!l?(wc(e,n,(n.subtreeFlags&8772)!=0),(n.mode&Mg)!==X&&0<=Z&&0<=Q&&.05<Q-Z&&Bn(n,Z,Q)):bc(e,n),gb=c,_b=l}break;case 30:break;default:bc(e,n)}(n.mode&Mg)!==X&&0<=Z&&0<=Q&&((w_||.05<S_)&&Un(n,Z,Q,S_,C_),n.alternate===null&&n.return!==null&&n.return.alternate!==null&&.05<Q-Z&&(oc(n.return.alternate,n.return)||zn(n,Z,Q,`Mount`))),ri(r),ai(i),C_=a,w_=o}function lc(e){var t=e.alternate;t!==null&&(e.alternate=null,lc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&He(t)),e.stateNode=null,e._debugOwner=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function uc(e,t,n){for(n=n.child;n!==null;)dc(e,t,n),n=n.sibling}function dc(e,t,n){if(wp&&typeof wp.onCommitFiberUnmount==`function`)try{wp.onCommitFiberUnmount(Cp,n)}catch(e){Tp||(Tp=!0,console.error(`React instrumentation encountered an error: %o`,e))}var r=ni(),i=ii(),a=oi(),o=si();switch(n.tag){case 26:_b||Ys(n,t),uc(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(e=n.stateNode,e.parentNode.removeChild(e));break;case 27:_b||Ys(n,t);var s=Cb,c=wb;Wu(n.type)&&(Cb=n.stateNode,wb=!1),uc(e,t,n),j(n,vd,n.stateNode),Cb=s,wb=c;break;case 5:_b||Ys(n,t);case 6:if(s=Cb,c=wb,Cb=null,uc(e,t,n),Cb=s,wb=c,Cb!==null)if(wb)try{j(n,Ku,Cb,n.stateNode)}catch(e){wl(n,t,e)}else try{j(n,Gu,Cb,n.stateNode)}catch(e){wl(n,t,e)}break;case 18:Cb!==null&&(wb?(e=Cb,qu(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),pf(e)):qu(Cb,n.stateNode));break;case 4:s=Cb,c=wb,Cb=n.stateNode.containerInfo,wb=!0,uc(e,t,n),Cb=s,wb=c;break;case 0:case 11:case 14:case 15:Bs(py,n,t),_b||Rs(n,t,my),uc(e,t,n);break;case 1:_b||(Ys(n,t),s=n.stateNode,typeof s.componentWillUnmount==`function`&&Ks(n,t,s)),uc(e,t,n);break;case 21:uc(e,t,n);break;case 22:_b=(s=_b)||n.memoizedState!==null,uc(e,t,n),_b=s;break;default:uc(e,t,n)}(n.mode&Mg)!==X&&0<=Z&&0<=Q&&(w_||.05<S_)&&Un(n,Z,Q,S_,C_),ri(r),ai(i),C_=a,w_=o}function fc(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{j(t,md,e)}catch(e){wl(t,t.return,e)}}}function pc(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{j(t,hd,e)}catch(e){wl(t,t.return,e)}}function mc(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new yb),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new yb),t;default:throw Error(`Unexpected Suspense handler tag (`+e.tag+`). This is a bug in React.`)}}function hc(e,t){var n=mc(e);t.forEach(function(t){if(!n.has(t)){if(n.add(t),Ep)if(xb!==null&&Sb!==null)Pl(Sb,xb);else throw Error(`Expected finished root and lanes to be set. This is a bug in React.`);var r=kl.bind(null,e,t);t.then(r,r)}})}function gc(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=e,a=t,o=n[r],s=ni(),c=a;a:for(;c!==null;){switch(c.tag){case 27:if(Wu(c.type)){Cb=c.stateNode,wb=!1;break a}break;case 5:Cb=c.stateNode,wb=!1;break a;case 3:case 4:Cb=c.stateNode.containerInfo,wb=!0;break a}c=c.return}if(Cb===null)throw Error(`Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.`);dc(i,a,o),Cb=null,wb=!1,(o.mode&Mg)!==X&&0<=Z&&0<=Q&&.05<Q-Z&&zn(o,Z,Q,`Unmount`),ri(s),i=o,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_c(t,e),t=t.sibling}function _c(e,t){var n=ni(),r=ii(),i=oi(),a=si(),o=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gc(t,e),vc(e),s&4&&(Bs(py|fy,e,e.return),zs(py|fy,e),Rs(e,e.return,my|fy));break;case 1:if(gc(t,e),vc(e),s&512&&(_b||o===null||Ys(o,o.return)),s&64&&gb&&(s=e.updateQueue,s!==null&&(o=s.callbacks,o!==null))){var c=s.shared.hiddenCallbacks;s.shared.hiddenCallbacks=c===null?o:c.concat(o)}break;case 26:if(c=Tb,gc(t,e),vc(e),s&512&&(_b||o===null||Ys(o,o.return)),s&4){var l=o===null?null:o.memoizedState;if(s=e.memoizedState,o===null)if(s===null)if(e.stateNode===null){a:{s=e.type,o=e.memoizedProps,c=c.ownerDocument||c;b:switch(s){case`title`:l=c.getElementsByTagName(`title`)[0],(!l||l[Gp]||l[Rp]||l.namespaceURI===Om||l.hasAttribute(`itemprop`))&&(l=c.createElement(s),c.head.insertBefore(l,c.querySelector(`head > title`))),gu(l,s,o),l[Rp]=e,L(l),s=l;break a;case`link`:var u=Nd(`link`,`href`,c).get(s+(o.href||``));if(u){for(var d=0;d<u.length;d++)if(l=u[d],l.getAttribute(`href`)===(o.href==null||o.href===``?null:o.href)&&l.getAttribute(`rel`)===(o.rel==null?null:o.rel)&&l.getAttribute(`title`)===(o.title==null?null:o.title)&&l.getAttribute(`crossorigin`)===(o.crossOrigin==null?null:o.crossOrigin)){u.splice(d,1);break b}}l=c.createElement(s),gu(l,s,o),c.head.appendChild(l);break;case`meta`:if(u=Nd(`meta`,`content`,c).get(s+(o.content||``))){for(d=0;d<u.length;d++)if(l=u[d],M(o.content,`content`),l.getAttribute(`content`)===(o.content==null?null:``+o.content)&&l.getAttribute(`name`)===(o.name==null?null:o.name)&&l.getAttribute(`property`)===(o.property==null?null:o.property)&&l.getAttribute(`http-equiv`)===(o.httpEquiv==null?null:o.httpEquiv)&&l.getAttribute(`charset`)===(o.charSet==null?null:o.charSet)){u.splice(d,1);break b}}l=c.createElement(s),gu(l,s,o),c.head.appendChild(l);break;default:throw Error(`getNodesForType encountered a type it did not expect: "`+s+`". This is a bug in React.`)}l[Rp]=e,L(l),s=l}e.stateNode=s}else Pd(c,e.type,e.stateNode);else e.stateNode=kd(c,s,e.memoizedProps);else l===s?s===null&&e.stateNode!==null&&$s(e,e.memoizedProps,o.memoizedProps):(l===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):l.count--,s===null?Pd(c,e.type,e.stateNode):kd(c,s,e.memoizedProps))}break;case 27:gc(t,e),vc(e),s&512&&(_b||o===null||Ys(o,o.return)),o!==null&&s&4&&$s(e,e.memoizedProps,o.memoizedProps);break;case 5:if(gc(t,e),vc(e),s&512&&(_b||o===null||Ys(o,o.return)),e.flags&32){c=e.stateNode;try{j(e,Vu,c)}catch(t){wl(e,e.return,t)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,$s(e,c,o===null?c:o.memoizedProps)),s&1024&&(vb=!0,e.type!==`form`&&console.error(`Unexpected host component type. Expected a form. This is a bug in React.`));break;case 6:if(gc(t,e),vc(e),s&4){if(e.stateNode===null)throw Error(`This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.`);s=e.memoizedProps,o=o===null?s:o.memoizedProps,c=e.stateNode;try{j(e,Hu,c,o,s)}catch(t){wl(e,e.return,t)}}break;case 3:if(c=Qr(),pC=null,l=Tb,Tb=yd(t.containerInfo),gc(t,e),Tb=l,vc(e),s&4&&o!==null&&o.memoizedState.isDehydrated)try{j(e,pd,t.containerInfo)}catch(t){wl(e,e.return,t)}vb&&(vb=!1,yc(e)),t.effectDuration+=$r(c);break;case 4:s=Tb,Tb=yd(e.stateNode.containerInfo),gc(t,e),vc(e),Tb=s;break;case 12:s=Qr(),gc(t,e),vc(e),e.stateNode.effectDuration+=ei(s);break;case 31:gc(t,e),vc(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,hc(e,s)));break;case 13:gc(t,e),vc(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(_x=mp()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,hc(e,s)));break;case 22:c=e.memoizedState!==null;var f=o!==null&&o.memoizedState!==null,p=gb,m=_b;if(gb=p||c,_b=m||f,gc(t,e),_b=m,gb=p,f&&!c&&!p&&!m&&(e.mode&Mg)!==X&&0<=Z&&0<=Q&&.05<Q-Z&&Bn(e,Z,Q),vc(e),s&8192)a:for(t=e.stateNode,t._visibility=c?t._visibility&~Cg:t._visibility|Cg,!c||o===null||f||gb||_b||(Sc(e),(e.mode&Mg)!==X&&0<=Z&&0<=Q&&.05<Q-Z&&zn(e,Z,Q,`Disconnect`)),o=null,t=e;;){if(t.tag===5||t.tag===26){if(o===null){f=o=t;try{l=f.stateNode,c?j(f,Xu,l):j(f,$u,f.stateNode,f.memoizedProps)}catch(e){wl(f,f.return,e)}}}else if(t.tag===6){if(o===null){f=t;try{u=f.stateNode,c?j(f,Zu,u):j(f,ed,u,f.memoizedProps)}catch(e){wl(f,f.return,e)}}}else if(t.tag===18){if(o===null){f=t;try{d=f.stateNode,c?j(f,Yu,d):j(f,Qu,f.stateNode)}catch(e){wl(f,f.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;o===t&&(o=null),t=t.return}o===t&&(o=null),t.sibling.return=t.return,t=t.sibling}s&4&&(s=e.updateQueue,s!==null&&(o=s.retryQueue,o!==null&&(s.retryQueue=null,hc(e,o))));break;case 19:gc(t,e),vc(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,hc(e,s)));break;case 30:break;case 21:break;default:gc(t,e),vc(e)}(e.mode&Mg)!==X&&0<=Z&&0<=Q&&((w_||.05<S_)&&Un(e,Z,Q,S_,C_),e.alternate===null&&e.return!==null&&e.return.alternate!==null&&.05<Q-Z&&(oc(e.return.alternate,e.return)||zn(e,Z,Q,`Mount`))),ri(n),ai(r),C_=i,w_=a}function vc(e){var t=e.flags;if(t&2){try{j(e,ic,e)}catch(t){wl(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yc(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yc(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bc(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cc(e,t.alternate,t),t=t.sibling}function xc(e){var t=ni(),n=ii(),r=oi(),i=si();switch(e.tag){case 0:case 11:case 14:case 15:Rs(e,e.return,my),Sc(e);break;case 1:Ys(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount==`function`&&Ks(e,e.return,a),Sc(e);break;case 27:j(e,vd,e.stateNode);case 26:case 5:Ys(e,e.return),Sc(e);break;case 22:e.memoizedState===null&&Sc(e);break;case 30:Sc(e);break;default:Sc(e)}(e.mode&Mg)!==X&&0<=Z&&0<=Q&&(w_||.05<S_)&&Un(e,Z,Q,S_,C_),ri(t),ai(n),C_=r,w_=i}function Sc(e){for(e=e.child;e!==null;)xc(e),e=e.sibling}function Cc(e,t,n,r){var i=ni(),a=ii(),o=oi(),s=si(),c=n.flags;switch(n.tag){case 0:case 11:case 15:wc(e,n,r),Ls(n,my);break;case 1:if(wc(e,n,r),t=n.stateNode,typeof t.componentDidMount==`function`&&j(n,xv,n,t),t=n.updateQueue,t!==null){e=n.stateNode;try{j(n,Ji,t,e)}catch(e){wl(n,n.return,e)}}r&&c&64&&Us(n),Js(n,n.return);break;case 27:ac(n);case 26:case 5:wc(e,n,r),r&&t===null&&c&4&&Qs(n),Js(n,n.return);break;case 12:if(r&&c&4){c=Qr(),wc(e,n,r),r=n.stateNode,r.effectDuration+=ei(c);try{j(n,Xs,n,t,__,r.effectDuration)}catch(e){wl(n,n.return,e)}}else wc(e,n,r);break;case 31:wc(e,n,r),r&&c&4&&fc(e,n);break;case 13:wc(e,n,r),r&&c&4&&pc(e,n);break;case 22:n.memoizedState===null&&wc(e,n,r),Js(n,n.return);break;case 30:break;default:wc(e,n,r)}(n.mode&Mg)!==X&&0<=Z&&0<=Q&&(w_||.05<S_)&&Un(n,Z,Q,S_,C_),ri(i),ai(a),C_=o,w_=s}function wc(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;)Cc(e,t.alternate,t,n),t=t.sibling}function Tc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&Jr(e),n!=null&&Yr(n))}function Ec(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(Jr(t),e!=null&&Yr(e))}function Dc(e,t,n,r,i){if(t.subtreeFlags&10256||t.actualDuration!==0&&(t.alternate===null||t.alternate.child!==t.child))for(t=t.child;t!==null;){var a=t.sibling;Oc(e,t,n,r,a===null?i:a.actualStartTime),t=a}}function Oc(e,t,n,r,i){var a=ni(),o=ii(),s=oi(),c=si(),l=_g,u=t.flags;switch(t.tag){case 0:case 11:case 15:(t.mode&Mg)!==X&&0<t.actualStartTime&&t.flags&1&&Vn(t,t.actualStartTime,i,Eb,n),Dc(e,t,n,r,i),u&2048&&Vs(t,hy|fy);break;case 1:(t.mode&Mg)!==X&&0<t.actualStartTime&&(t.flags&128?Hn(t,t.actualStartTime,i,[]):t.flags&1&&Vn(t,t.actualStartTime,i,Eb,n)),Dc(e,t,n,r,i);break;case 3:var d=Qr(),f=Eb;Eb=t.alternate!==null&&t.alternate.memoizedState.isDehydrated&&(t.flags&256)==0,Dc(e,t,n,r,i),Eb=f,u&2048&&(n=null,t.alternate!==null&&(n=t.alternate.memoizedState.cache),r=t.memoizedState.cache,r!==n&&(Jr(r),n!=null&&Yr(n))),e.passiveEffectDuration+=$r(d);break;case 12:if(u&2048){u=Qr(),Dc(e,t,n,r,i),e=t.stateNode,e.passiveEffectDuration+=ei(u);try{j(t,Zs,t,t.alternate,__,e.passiveEffectDuration)}catch(e){wl(t,t.return,e)}}else Dc(e,t,n,r,i);break;case 31:u=Eb,d=t.alternate===null?null:t.alternate.memoizedState,f=t.memoizedState,d!==null&&f===null?(f=t.deletions,f!==null&&0<f.length&&f[0].tag===18?(Eb=!1,d=d.hydrationErrors,d!==null&&Hn(t,t.actualStartTime,i,d)):Eb=!0):Eb=!1,Dc(e,t,n,r,i),Eb=u;break;case 13:u=Eb,d=t.alternate===null?null:t.alternate.memoizedState,f=t.memoizedState,d===null||d.dehydrated===null||f!==null&&f.dehydrated!==null?Eb=!1:(f=t.deletions,f!==null&&0<f.length&&f[0].tag===18?(Eb=!1,d=d.hydrationErrors,d!==null&&Hn(t,t.actualStartTime,i,d)):Eb=!0),Dc(e,t,n,r,i),Eb=u;break;case 23:break;case 22:f=t.stateNode,d=t.alternate,t.memoizedState===null?f._visibility&wg?Dc(e,t,n,r,i):(f._visibility|=wg,kc(e,t,n,r,(t.subtreeFlags&10256)!=0||t.actualDuration!==0&&(t.alternate===null||t.alternate.child!==t.child),i),(t.mode&Mg)===X||Eb||(e=t.actualStartTime,0<=e&&.05<i-e&&Bn(t,e,i),0<=Z&&0<=Q&&.05<Q-Z&&Bn(t,Z,Q))):f._visibility&wg?Dc(e,t,n,r,i):jc(e,t,n,r,i),u&2048&&Tc(d,t);break;case 24:Dc(e,t,n,r,i),u&2048&&Ec(t.alternate,t);break;default:Dc(e,t,n,r,i)}(t.mode&Mg)!==X&&((e=!Eb&&t.alternate===null&&t.return!==null&&t.return.alternate!==null)&&(n=t.actualStartTime,0<=n&&.05<i-n&&zn(t,n,i,`Mount`)),0<=Z&&0<=Q&&((w_||.05<S_)&&Un(t,Z,Q,S_,C_),e&&.05<Q-Z&&zn(t,Z,Q,`Mount`))),ri(a),ai(o),C_=s,w_=c,_g=l}function kc(e,t,n,r,i,a){for(i&&=(t.subtreeFlags&10256)!=0||t.actualDuration!==0&&(t.alternate===null||t.alternate.child!==t.child),t=t.child;t!==null;){var o=t.sibling;Ac(e,t,n,r,i,o===null?a:o.actualStartTime),t=o}}function Ac(e,t,n,r,i,a){var o=ni(),s=ii(),c=oi(),l=si(),u=_g;i&&(t.mode&Mg)!==X&&0<t.actualStartTime&&t.flags&1&&Vn(t,t.actualStartTime,a,Eb,n);var d=t.flags;switch(t.tag){case 0:case 11:case 15:kc(e,t,n,r,i,a),Vs(t,hy);break;case 23:break;case 22:var f=t.stateNode;t.memoizedState===null?(f._visibility|=wg,kc(e,t,n,r,i,a)):f._visibility&wg?kc(e,t,n,r,i,a):jc(e,t,n,r,a),i&&d&2048&&Tc(t.alternate,t);break;case 24:kc(e,t,n,r,i,a),i&&d&2048&&Ec(t.alternate,t);break;default:kc(e,t,n,r,i,a)}(t.mode&Mg)!==X&&0<=Z&&0<=Q&&(w_||.05<S_)&&Un(t,Z,Q,S_,C_),ri(o),ai(s),C_=c,w_=l,_g=u}function jc(e,t,n,r,i){if(t.subtreeFlags&10256||t.actualDuration!==0&&(t.alternate===null||t.alternate.child!==t.child))for(var a=t.child;a!==null;){t=a.sibling;var o=e,s=n,c=r,l=t===null?i:t.actualStartTime,u=_g;(a.mode&Mg)!==X&&0<a.actualStartTime&&a.flags&1&&Vn(a,a.actualStartTime,l,Eb,s);var d=a.flags;switch(a.tag){case 22:jc(o,a,s,c,l),d&2048&&Tc(a.alternate,a);break;case 24:jc(o,a,s,c,l),d&2048&&Ec(a.alternate,a);break;default:jc(o,a,s,c,l)}_g=u,a=t}}function Mc(e,t,n){if(e.subtreeFlags&Db)for(e=e.child;e!==null;)Nc(e,t,n),e=e.sibling}function Nc(e,t,n){switch(e.tag){case 26:Mc(e,t,n),e.flags&Db&&e.memoizedState!==null&&Ld(n,Tb,e.memoizedState,e.memoizedProps);break;case 5:Mc(e,t,n);break;case 3:case 4:var r=Tb;Tb=yd(e.stateNode.containerInfo),Mc(e,t,n),Tb=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Db,Db=16777216,Mc(e,t,n),Db=r):Mc(e,t,n));break;default:Mc(e,t,n)}}function Pc(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fc(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n],i=ni();bb=r,zc(r,e),(r.mode&Mg)!==X&&0<=Z&&0<=Q&&.05<Q-Z&&zn(r,Z,Q,`Unmount`),ri(i)}Pc(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ic(e),e=e.sibling}function Ic(e){var t=ni(),n=ii(),r=oi(),i=si();switch(e.tag){case 0:case 11:case 15:Fc(e),e.flags&2048&&Hs(e,e.return,hy|fy);break;case 3:var a=Qr();Fc(e),e.stateNode.passiveEffectDuration+=$r(a);break;case 12:a=Qr(),Fc(e),e.stateNode.passiveEffectDuration+=ei(a);break;case 22:a=e.stateNode,e.memoizedState!==null&&a._visibility&wg&&(e.return===null||e.return.tag!==13)?(a._visibility&=~wg,Lc(e),(e.mode&Mg)!==X&&0<=Z&&0<=Q&&.05<Q-Z&&zn(e,Z,Q,`Disconnect`)):Fc(e);break;default:Fc(e)}(e.mode&Mg)!==X&&0<=Z&&0<=Q&&(w_||.05<S_)&&Un(e,Z,Q,S_,C_),ri(t),ai(n),w_=i,C_=r}function Lc(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n],i=ni();bb=r,zc(r,e),(r.mode&Mg)!==X&&0<=Z&&0<=Q&&.05<Q-Z&&zn(r,Z,Q,`Unmount`),ri(i)}Pc(e)}for(e=e.child;e!==null;)Rc(e),e=e.sibling}function Rc(e){var t=ni(),n=ii(),r=oi(),i=si();switch(e.tag){case 0:case 11:case 15:Hs(e,e.return,hy),Lc(e);break;case 22:var a=e.stateNode;a._visibility&wg&&(a._visibility&=~wg,Lc(e));break;default:Lc(e)}(e.mode&Mg)!==X&&0<=Z&&0<=Q&&(w_||.05<S_)&&Un(e,Z,Q,S_,C_),ri(t),ai(n),w_=i,C_=r}function zc(e,t){for(;bb!==null;){var n=bb,r=n,i=t,a=ni(),o=ii(),s=oi(),c=si();switch(r.tag){case 0:case 11:case 15:Hs(r,i,hy);break;case 23:case 22:r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool,i!=null&&Jr(i));break;case 24:Yr(r.memoizedState.cache)}if((r.mode&Mg)!==X&&0<=Z&&0<=Q&&(w_||.05<S_)&&Un(r,Z,Q,S_,C_),ri(a),ai(o),w_=c,C_=s,r=n.child,r!==null)r.return=n,bb=r;else a:for(n=e;bb!==null;){if(r=bb,a=r.sibling,o=r.return,lc(r),r===n){bb=null;break a}if(a!==null){a.return=o,bb=a;break a}bb=o}}}function Bc(){Ab.forEach(function(e){return e()})}function Vc(){var e=typeof IS_REACT_ACT_ENVIRONMENT<`u`?IS_REACT_ACT_ENVIRONMENT:void 0;return e||Y.actQueue===null||console.error(`The current testing environment is not configured to support act(...)`),e}function Hc(e){if((Hb&Nb)!==Mb&&Gb!==0)return Gb&-Gb;var t=Y.T;return t===null?Be():(t._updatedFibers||=new Set,t._updatedFibers.add(e),Kl())}function Uc(){if(fx===0)if(!(Gb&536870912)||Xg){var e=jp;jp<<=1,!(jp&3932160)&&(jp=262144),fx=e}else fx=536870912;return e=oy.current,e!==null&&(e.flags|=32),fx}function Wc(e,t,n){if(eS&&console.error(`useInsertionEffect must not schedule updates.`),Yx&&(Xx=!0),(e===Ub&&(nx===Jb||nx===tx)||e.cancelPendingCommit!==null)&&(Qc(e,0),Jc(e,Gb,fx,!1)),Pe(e,n),(Hb&Nb)!==Mb&&e===Ub){if(cp)switch(t.tag){case 0:case 11:case 15:e=Wb&&E(Wb)||`Unknown`,rS.has(e)||(rS.add(e),t=E(t)||`Unknown`,console.error("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",t,e,e));break;case 1:nS||=(console.error("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),!0)}}else Ep&&I(e,t,n),Il(t),e===Ub&&((Hb&Nb)===Mb&&(ux|=n),cx===zb&&Jc(e,Gb,fx,!1)),Ll(e)}function Gc(e,t,n){if((Hb&(Nb|Pb))!==Mb)throw Error(`Should not already be working.`);if(Gb!==0&&Wb!==null){var r=Wb,i=mp();switch(X_){case Yb:case Jb:var a=Z_;pg&&((r=r._debugTask)?r.run(console.timeStamp.bind(console,`Suspended`,a,i,mg,void 0,`primary-light`)):console.timeStamp(`Suspended`,a,i,mg,void 0,`primary-light`));break;case tx:a=Z_,pg&&((r=r._debugTask)?r.run(console.timeStamp.bind(console,`Action`,a,i,mg,void 0,`primary-light`)):console.timeStamp(`Action`,a,i,mg,void 0,`primary-light`));break;default:pg&&(r=i-Z_,3>r||console.timeStamp(`Blocked`,Z_,i,mg,void 0,5>r?`primary-light`:10>r?`primary`:100>r?`primary-dark`:`error`))}}a=(n=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Ae(e,t))?sl(e,t):al(e,t,!0);var o=n;do{if(a===Fb){ax&&!n&&Jc(e,t,0,!1),t=nx,Z_=f_(),X_=t;break}else{if(r=mp(),i=e.current.alternate,o&&!qc(i)){Rn(t),i=g_,a=r,!pg||a<=i||(Cx?Cx.run(console.timeStamp.bind(console,`Teared Render`,i,a,gg,hg,`error`)):console.timeStamp(`Teared Render`,i,a,gg,hg,`error`)),Zc(t,r),a=al(e,t,!1),o=!1;continue}if(a===Lb){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){Rn(t),Jn(g_,r,t,Cx),Zc(t,r),t=s;a:{r=e,a=o,o=mx;var c=r.current.memoizedState.isDehydrated;if(c&&(Qc(r,s).flags|=256),s=al(r,s,!1),s!==Lb){if(ox&&!c){r.errorRecoveryDisabledLanes|=a,ux|=a,a=zb;break a}r=hx,hx=o,r!==null&&(hx===null?hx=r:hx.push.apply(hx,r))}a=s}if(o=!1,a!==Lb)continue;r=mp()}}if(a===Ib){Rn(t),Jn(g_,r,t,Cx),Zc(t,r),Qc(e,0),Jc(e,t,0,!0);break}a:{switch(n=e,a){case Fb:case Ib:throw Error(`Root did not complete. This is a bug in React.`);case zb:if((t&4194048)!==t)break;case Bb:Rn(t),Gn(g_,r,t,Cx),Zc(t,r),i=t,i&127?P_=r:i&4194048&&(G_=r),Jc(n,t,fx,!ix);break a;case Lb:hx=null;break;case Rb:case Vb:break;default:throw Error(`Unknown root exit status.`)}if(Y.actQueue!==null)hl(n,i,t,hx,Sx,gx,fx,ux,px,a,null,null,g_,r);else{if((t&62914560)===t&&(o=_x+yx-mp(),10<o)){if(Jc(n,t,fx,!ix),ke(n,0,!0)!==0)break a;Rx=t,n.timeoutHandle=QS(Kc.bind(null,n,i,hx,Sx,gx,t,fx,ux,px,ix,a,`Throttled`,g_,r),o);break a}Kc(n,i,hx,Sx,gx,t,fx,ux,px,ix,a,null,g_,r)}}}break}while(1);Ll(e)}function Kc(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=eC;var m=t.subtreeFlags,h=null;if((m&8192||(m&16785408)==16785408)&&(h={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zt},Nc(t,a,h),m=(a&62914560)===a?_x-mp():(a&4194048)===a?vx-mp():0,m=Rd(h,m),m!==null)){Rx=a,e.cancelPendingCommit=m(hl.bind(null,e,t,a,n,r,i,o,s,c,u,h,h.waitingForViewTransition?`Waiting for the previous Animation`:0<h.count?0<h.imgCount?`Suspended on CSS and Images`:`Suspended on CSS`:h.imgCount===1?`Suspended on an Image`:0<h.imgCount?`Suspended on Images`:null,f,p)),Jc(e,a,o,!l);return}hl(e,t,a,n,r,i,o,s,c,u,h,d,f,p)}function qc(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ih(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jc(e,t,n,r){t&=~dx,t&=~ux,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Dp(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&P(e,n,t)}function Yc(){return(Hb&(Nb|Pb))===Mb?(Rl(0,!1),!1):!0}function Xc(){if(Wb!==null){if(nx===Kb)var e=Wb.return;else e=Wb,Lr(),ma(e),Bv=null,Vv=0,e=Wb;for(;e!==null;)Fs(e.alternate,e),e=e.return;Wb=null}}function Zc(e,t){e&127&&(T_=t),e&4194048&&(F_=t),e&62914560&&(K_=t),e&2080374784&&(q_=t)}function Qc(e,t){pg&&(console.timeStamp(`Blocking Track`,.003,.003,`Blocking`,hg,`primary-light`),console.timeStamp(`Transition Track`,.003,.003,`Transition`,hg,`primary-light`),console.timeStamp(`Suspense Track`,.003,.003,`Suspense`,hg,`primary-light`),console.timeStamp(`Idle Track`,.003,.003,`Idle`,hg,`primary-light`));var n=g_;if(g_=f_(),Gb!==0&&0<n){if(Rn(Gb),cx===Rb||cx===zb)Gn(n,g_,t,Cx);else{var r=g_,i=Cx;if(pg&&!(r<=n)){var a=(t&738197653)===t?`tertiary-dark`:`primary-dark`,o=(t&536870912)===t?`Prewarm`:(t&201326741)===t?`Interrupted Hydration`:`Interrupted Render`;i?i.run(console.timeStamp.bind(console,o,n,r,gg,hg,a)):console.timeStamp(o,n,r,gg,hg,a)}}Zc(Gb,g_)}if(n=Cx,Cx=null,t&127){Cx=D_,i=0<=E_&&E_<T_?T_:E_,r=0<=j_&&j_<T_?T_:j_,a=0<=r?r:0<=i?i:g_,0<=P_?(Rn(2),Kn(P_,a,t,n)):J_&127&&(Rn(2),Zn(T_,a,Y_)),n=i;var s=r,c=M_,l=0<N_,u=O_===m_,d=O_===h_;if(i=g_,r=D_,a=k_,o=A_,pg){if(gg=`Blocking`,0<n?n>i&&(n=i):n=i,0<s?s>n&&(s=n):s=n,c!==null&&n>s){var f=l?`secondary-light`:`warning`;r?r.run(console.timeStamp.bind(console,l?`Consecutive`:`Event: `+c,s,n,gg,hg,f)):console.timeStamp(l?`Consecutive`:`Event: `+c,s,n,gg,hg,f)}i>n&&(s=u?`error`:(t&738197653)===t?`tertiary-light`:`primary-light`,u=d?`Promise Resolved`:u?`Cascading Update`:5<i-n?`Update Blocked`:`Update`,d=[],o!=null&&d.push([`Component name`,o]),a!=null&&d.push([`Method name`,a]),n={start:n,end:i,detail:{devtools:{properties:d,track:gg,trackGroup:hg,color:s}}},r?r.run(performance.measure.bind(performance,u,n)):performance.measure(u,n))}E_=-1.1,O_=0,A_=k_=null,P_=-1.1,N_=j_,j_=-1.1,T_=f_()}if(t&4194048&&(Cx=z_,i=0<=I_&&I_<F_?F_:I_,n=0<=L_&&L_<F_?F_:L_,r=0<=H_&&H_<F_?F_:H_,a=0<=r?r:0<=n?n:g_,0<=G_?(Rn(256),Kn(G_,a,t,Cx)):J_&4194048&&(Rn(256),Zn(F_,a,Y_)),d=r,s=U_,c=0<W_,l=R_===h_,a=g_,r=z_,o=B_,u=V_,pg&&(gg=`Transition`,0<n?n>a&&(n=a):n=a,0<i?i>n&&(i=n):i=n,0<d?d>i&&(d=i):d=i,i>d&&s!==null&&(f=c?`secondary-light`:`warning`,r?r.run(console.timeStamp.bind(console,c?`Consecutive`:`Event: `+s,d,i,gg,hg,f)):console.timeStamp(c?`Consecutive`:`Event: `+s,d,i,gg,hg,f)),n>i&&(r?r.run(console.timeStamp.bind(console,`Action`,i,n,gg,hg,`primary-dark`)):console.timeStamp(`Action`,i,n,gg,hg,`primary-dark`)),a>n&&(i=l?`Promise Resolved`:5<a-n?`Update Blocked`:`Update`,d=[],u!=null&&d.push([`Component name`,u]),o!=null&&d.push([`Method name`,o]),n={start:n,end:a,detail:{devtools:{properties:d,track:gg,trackGroup:hg,color:`primary-light`}}},r?r.run(performance.measure.bind(performance,i,n)):performance.measure(i,n))),L_=I_=-1.1,R_=0,G_=-1.1,W_=H_,H_=-1.1,F_=f_()),t&62914560&&J_&62914560&&(Rn(4194304),Zn(K_,g_,Y_)),t&2080374784&&J_&2080374784&&(Rn(268435456),Zn(q_,g_,Y_)),n=e.timeoutHandle,n!==eC&&(e.timeoutHandle=eC,$S(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Rx=0,Xc(),Ub=e,Wb=n=ur(e.current,null),Gb=t,nx=Kb,rx=null,ix=!1,ax=Ae(e,t),ox=!1,cx=Fb,px=fx=dx=ux=lx=0,hx=mx=null,gx=!1,t&8&&(t|=t&32),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=t;0<r;)i=31-Dp(r),a=1<<i,t|=e[i],r&=~a;return sx=t,Qn(),e=ng(),1e3<e-eg&&(Y.recentlyCreatedOwnerStacks=0,eg=e),ov.discardPendingWarnings(),n}function $c(e,t){Sy=null,Y.H=Iy,Y.getCurrentStack=null,cp=!1,sp=null,t===Pv||t===Iv?(t=Ti(),nx=Yb):t===Fv?(t=Ti(),nx=Xb):nx=t===ib?ex:typeof t==`object`&&t&&typeof t.then==`function`?Qb:qb,rx=t;var n=Wb;n===null?(cx=Ib,Ko(e,vr(t,e.current))):n.mode&Mg&&li(n)}function el(){var e=oy.current;return e===null?!0:(Gb&4194048)===Gb?sy===null:(Gb&62914560)===Gb||Gb&536870912?e===sy:!1}function tl(){var e=Y.H;return Y.H=Iy,e===null?Iy:e}function nl(){var e=Y.A;return Y.A=Ob,e}function rl(e){Cx===null&&(Cx=e._debugTask==null?null:e._debugTask)}function il(){cx=zb,ix||(Gb&4194048)!==Gb&&oy.current!==null||(ax=!0),!(lx&134217727)&&!(ux&134217727)||Ub===null||Jc(Ub,Gb,fx,!1)}function al(e,t,n){var r=Hb;Hb|=Nb;var i=tl(),a=nl();if(Ub!==e||Gb!==t){if(Ep){var o=e.memoizedUpdaters;0<o.size&&(Pl(e,Gb),o.clear()),Re(e,t)}Sx=null,Qc(e,t)}t=!1,o=cx;a:do try{if(nx!==Kb&&Wb!==null){var s=Wb,c=rx;switch(nx){case ex:Xc(),o=Bb;break a;case Yb:case Jb:case tx:case Qb:oy.current===null&&(t=!0);var l=nx;if(nx=Kb,rx=null,fl(e,s,c,l),n&&ax){o=Fb;break a}break;default:l=nx,nx=Kb,rx=null,fl(e,s,c,l)}}ol(),o=cx;break}catch(t){$c(e,t)}while(1);return t&&e.shellSuspendCounter++,Lr(),Hb=r,Y.H=i,Y.A=a,Wb===null&&(Ub=null,Gb=0,Qn()),o}function ol(){for(;Wb!==null;)ll(Wb)}function sl(e,t){var n=Hb;Hb|=Nb;var r=tl(),i=nl();if(Ub!==e||Gb!==t){if(Ep){var a=e.memoizedUpdaters;0<a.size&&(Pl(e,Gb),a.clear()),Re(e,t)}Sx=null,bx=mp()+xx,Qc(e,t)}else ax=Ae(e,t);a:do try{if(nx!==Kb&&Wb!==null)b:switch(t=Wb,a=rx,nx){case qb:nx=Kb,rx=null,fl(e,t,a,qb);break;case Jb:case tx:if(Si(a)){nx=Kb,rx=null,ul(t);break}t=function(){nx!==Jb&&nx!==tx||Ub!==e||(nx=$b),Ll(e)},a.then(t,t);break a;case Yb:nx=$b;break a;case Xb:nx=Zb;break a;case $b:Si(a)?(nx=Kb,rx=null,ul(t)):(nx=Kb,rx=null,fl(e,t,a,$b));break;case Zb:var o=null;switch(Wb.tag){case 26:o=Wb.memoizedState;case 5:case 27:var s=Wb;if(o?Id(o):s.stateNode.complete){nx=Kb,rx=null;var c=s.sibling;if(c!==null)Wb=c;else{var l=s.return;l===null?Wb=null:(Wb=l,pl(l))}break b}break;default:console.error(`Unexpected type of fiber triggered a suspensey commit. This is a bug in React.`)}nx=Kb,rx=null,fl(e,t,a,Zb);break;case Qb:nx=Kb,rx=null,fl(e,t,a,Qb);break;case ex:Xc(),cx=Bb;break a;default:throw Error(`Unexpected SuspendedReason. This is a bug in React.`)}Y.actQueue===null?cl():ol();break}catch(t){$c(e,t)}while(1);return Lr(),Y.H=r,Y.A=i,Hb=n,Wb===null?(Ub=null,Gb=0,Qn(),cx):Fb}function cl(){for(;Wb!==null&&!fp();)ll(Wb)}function ll(e){var t=e.alternate;(e.mode&Mg)===X?t=j(e,Es,t,e,sx):(ci(e),t=j(e,Es,t,e,sx),li(e)),e.memoizedProps=e.pendingProps,t===null?pl(e):Wb=t}function ul(e){var t=j(e,dl,e);e.memoizedProps=e.pendingProps,t===null?pl(e):Wb=t}function dl(e){var t=e.alternate,n=(e.mode&Mg)!==X;switch(n&&ci(e),e.tag){case 15:case 0:t=us(t,e,e.pendingProps,e.type,void 0,Gb);break;case 11:t=us(t,e,e.pendingProps,e.type.render,e.ref,Gb);break;case 5:ma(e);default:Fs(t,e),e=Wb=dr(e,sx),t=Es(t,e,sx)}return n&&li(e),t}function fl(e,t,n,r){Lr(),ma(t),Bv=null,Vv=0;var i=t.return;try{if(Zo(e,i,t,n,Gb)){cx=Ib,Ko(e,vr(n,e.current)),Wb=null;return}}catch(t){if(i!==null)throw Wb=i,t;cx=Ib,Ko(e,vr(n,e.current)),Wb=null;return}t.flags&32768?(Xg||r===qb?e=!0:ax||Gb&536870912?e=!1:(ix=e=!0,(r===Jb||r===tx||r===Yb||r===Qb)&&(r=oy.current,r!==null&&r.tag===13&&(r.flags|=16384))),ml(t,e)):pl(t)}function pl(e){var t=e;do{if(t.flags&32768){ml(t,ix);return}var n=t.alternate;if(e=t.return,ci(t),n=j(t,Ns,n,t,sx),(t.mode&Mg)!==X&&ui(t),n!==null){Wb=n;return}if(t=t.sibling,t!==null){Wb=t;return}Wb=t=e}while(t!==null);cx===Fb&&(cx=Vb)}function ml(e,t){do{var n=Ps(e.alternate,e);if(n!==null){n.flags&=32767,Wb=n;return}if((e.mode&Mg)!==X){ui(e),n=e.actualDuration;for(var r=e.child;r!==null;)n+=r.actualDuration,r=r.sibling;e.actualDuration=n}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Wb=e;return}Wb=e=n}while(e!==null);cx=Bb,Wb=null}function hl(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.cancelPendingCommit=null;do xl();while(Fx!==kx);if(ov.flushLegacyContextWarning(),ov.flushPendingUnsafeLifecycleWarnings(),(Hb&(Nb|Pb))!==Mb)throw Error(`Should not already be working.`);if(Rn(n),l===Lb?Jn(f,p,n,Cx):r===null?Wn(f,p,n,Cx):qn(f,p,n,r,t!==null&&t.alternate!==null&&t.alternate.memoizedState.isDehydrated&&(t.flags&256)!=0,Cx),t!==null){if(n===0&&console.error(`finishedLanes should not be empty during a commit. This is a bug in React.`),t===e.current)throw Error(`Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.`);if(a=t.lanes|t.childLanes,a|=Dg,Fe(e,n,a,o,s,c),e===Ub&&(Wb=Ub=null,Gb=0),Lx=t,Ix=e,Rx=n,zx=a,Vx=i,Hx=r,Bx=p,Ux=d,Wx=Tx,Gx=null,t.actualDuration!==0||t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Fl(vp,function(){return ZS=window.event,Wx===Tx&&(Wx=Dx),Sl(),null})):(e.callbackNode=null,e.callbackPriority=0),y_=null,__=f_(),d!==null&&Yn(p,__,d,Cx),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=Y.T,Y.T=null,i=Bf.p,Bf.p=Np,o=Hb,Hb|=Pb;try{sc(e,t,n)}finally{Hb=o,Bf.p=i,Y.T=r}}Fx=Ax,gl(),_l(),vl()}}function gl(){if(Fx===Ax){Fx=kx;var e=Ix,t=Lx,n=Rx,r=(t.flags&13878)!=0;if(t.subtreeFlags&13878||r){r=Y.T,Y.T=null;var i=Bf.p;Bf.p=Np;var a=Hb;Hb|=Pb;try{xb=n,Sb=e,ti(),_c(t,e),Sb=xb=null,n=JS;var o=On(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Dn(s.ownerDocument.documentElement,s)){if(c!==null&&kn(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=En(s,h),v=En(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}RC=!!qS,JS=qS=null}finally{Hb=a,Bf.p=i,Y.T=r}}e.current=t,Fx=jx}}function _l(){if(Fx===jx){Fx=kx;var e=Gx;if(e!==null){__=f_();var t=v_,n=__;!pg||n<=t||(Y_?Y_.run(console.timeStamp.bind(console,e,t,n,gg,hg,`secondary-light`)):console.timeStamp(e,t,n,gg,hg,`secondary-light`))}e=Ix,t=Lx,n=Rx;var r=(t.flags&8772)!=0;if(t.subtreeFlags&8772||r){r=Y.T,Y.T=null;var i=Bf.p;Bf.p=Np;var a=Hb;Hb|=Pb;try{xb=n,Sb=e,ti(),cc(e,t.alternate,t),Sb=xb=null}finally{Hb=a,Bf.p=i,Y.T=r}}e=Bx,t=Ux,v_=f_(),e=t===null?e:__,t=v_,n=Wx===Ex,r=Cx,y_===null?!pg||t<=e||(r?r.run(console.timeStamp.bind(console,n?`Commit Interrupted View Transition`:`Commit`,e,t,gg,hg,n?`error`:`secondary-dark`)):console.timeStamp(n?`Commit Interrupted View Transition`:`Commit`,e,t,gg,hg,n?`error`:`secondary-dark`)):Xn(e,t,y_,!1,r),Fx=Mx}}function vl(){if(Fx===Nx||Fx===Mx){if(Fx===Nx){var e=v_;v_=f_();var t=v_,n=Wx===Ex;!pg||t<=e||(Y_?Y_.run(console.timeStamp.bind(console,n?`Interrupted View Transition`:`Starting Animation`,e,t,gg,hg,n?`error`:`secondary-light`)):console.timeStamp(n?`Interrupted View Transition`:`Starting Animation`,e,t,gg,hg,n?` error`:`secondary-light`)),Wx!==Ex&&(Wx=Ox)}Fx=kx,pp(),e=Ix;var r=Lx;t=Rx,n=Hx;var i=r.actualDuration!==0||(r.subtreeFlags&10256)!=0||(r.flags&10256)!=0;i?Fx=Px:(Fx=kx,Lx=Ix=null,bl(e,e.pendingLanes),Qx=0,$x=null);var a=e.pendingLanes;if(a===0&&(wx=null),i||Ml(e),a=ze(t),r=r.stateNode,wp&&typeof wp.onCommitFiberRoot==`function`)try{var o=(r.current.flags&128)==128;switch(a){case Np:var s=gp;break;case Pp:s=_p;break;case Fp:s=vp;break;case Ip:s=bp;break;default:s=vp}wp.onCommitFiberRoot(Cp,r,s,o)}catch(e){Tp||(Tp=!0,console.error(`React instrumentation encountered an error: %o`,e))}if(Ep&&e.memoizedUpdaters.clear(),Bc(),n!==null){o=Y.T,s=Bf.p,Bf.p=Np,Y.T=null;try{var c=e.onRecoverableError;for(r=0;r<n.length;r++){var l=n[r],u=yl(l.stack);j(l.source,c,l.value,u)}}finally{Y.T=o,Bf.p=s}}Rx&3&&xl(),Ll(e),a=e.pendingLanes,t&261930&&a&42?($_=!0,e===Jx?qx++:(qx=0,Jx=e)):qx=0,i||Zc(t,v_),Rl(0,!1)}}function yl(e){return e={componentStack:e},Object.defineProperty(e,`digest`,{get:function(){console.error(`You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.`)}}),e}function bl(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Yr(t)))}function xl(){return gl(),_l(),vl(),Sl()}function Sl(){if(Fx!==Px)return!1;var e=Ix,t=zx;zx=0;var n=ze(Rx),r=Fp===0||Fp>n?Fp:n;n=Y.T;var i=Bf.p;try{Bf.p=r,Y.T=null;var a=Vx;Vx=null,r=Ix;var o=Rx;if(Fx=kx,Lx=Ix=null,Rx=0,(Hb&(Nb|Pb))!==Mb)throw Error(`Cannot flush passive effects while already rendering.`);Rn(o),Yx=!0,Xx=!1;var s=0;if(y_=null,s=mp(),Wx===Ox)Zn(v_,s,Y_);else{var c=v_,l=s,u=Wx===Dx;!pg||l<=c||(Cx?Cx.run(console.timeStamp.bind(console,u?`Waiting for Paint`:`Waiting`,c,l,gg,hg,`secondary-light`)):console.timeStamp(u?`Waiting for Paint`:`Waiting`,c,l,gg,hg,`secondary-light`))}c=Hb,Hb|=Pb;var d=r.current;ti(),Ic(d);var f=r.current;d=Bx,ti(),Oc(r,f,o,a,d),Ml(r),Hb=c;var p=mp();if(f=s,d=Cx,y_===null?!pg||p<=f||(d?d.run(console.timeStamp.bind(console,`Remaining Effects`,f,p,gg,hg,`secondary-dark`)):console.timeStamp(`Remaining Effects`,f,p,gg,hg,`secondary-dark`)):Xn(f,p,y_,!0,d),Zc(o,p),Rl(0,!1),Xx?r===$x?Qx++:(Qx=0,$x=r):Qx=0,Xx=Yx=!1,wp&&typeof wp.onPostCommitFiberRoot==`function`)try{wp.onPostCommitFiberRoot(Cp,r)}catch(e){Tp||(Tp=!0,console.error(`React instrumentation encountered an error: %o`,e))}var m=r.current.stateNode;return m.effectDuration=0,m.passiveEffectDuration=0,!0}finally{Bf.p=i,Y.T=n,bl(e,t)}}function Cl(e,t,n){t=vr(n,t),fi(t),t=Jo(e.stateNode,t,2),e=Hi(e,t,2),e!==null&&(Pe(e,2),Ll(e))}function wl(e,t,n){if(eS=!1,e.tag===3)Cl(e,e,n);else{for(;t!==null;){if(t.tag===3){Cl(t,e,n);return}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(wx===null||!wx.has(r))){e=vr(n,e),fi(e),n=Yo(2),r=Hi(t,n,2),r!==null&&(Xo(n,r,t,e),Pe(r,2),Ll(r));return}}t=t.return}console.error(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,n)}}function Tl(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new jb;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(ox=!0,i.add(n),r=El.bind(null,e,t,n),Ep&&Pl(e,n),t.then(r,r))}function El(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,n&127?0>E_&&(T_=E_=f_(),D_=p_(`Promise Resolved`),O_=h_):n&4194048&&0>L_&&(F_=L_=f_(),z_=p_(`Promise Resolved`),R_=h_),Vc()&&Y.actQueue===null&&console.error(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`),Ub===e&&(Gb&n)===n&&(cx===zb||cx===Rb&&(Gb&62914560)===Gb&&mp()-_x<yx?(Hb&Nb)===Mb&&Qc(e,0):dx|=n,px===Gb&&(px=0)),Ll(e)}function Dl(e,t){t===0&&(t=Me()),e=tr(e,t),e!==null&&(Pe(e,t),Ll(e))}function Ol(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Dl(e,n)}function kl(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(`Pinged unknown suspense boundary type. This is probably a bug in React.`)}r!==null&&r.delete(t),Dl(e,n)}function Al(e,t,n){if(t.subtreeFlags&67117056)for(t=t.child;t!==null;){var r=e,i=t,a=i.type===Ef;a=n||a,i.tag===22?i.memoizedState===null&&(a&&i.flags&8192?j(i,jl,r,i):i.subtreeFlags&67108864&&j(i,Al,r,i,a)):i.flags&67108864?a&&j(i,jl,r,i):Al(r,i,a),t=t.sibling}}function jl(e,t){Ee(!0);try{xc(t),Rc(t),Cc(e,t.alternate,t,!1),Ac(e,t,0,null,!1,0)}finally{Ee(!1)}}function Ml(e){var t=!0;e.current.mode&(Ng|Pg)||(t=!1),Al(e,e.current,t)}function Nl(e){if((Hb&Nb)===Mb){var t=e.tag;if(t===3||t===1||t===0||t===11||t===14||t===15){if(t=E(e)||`ReactComponent`,tS!==null){if(tS.has(t))return;tS.add(t)}else tS=new Set([t]);j(e,function(){console.error(`Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead.`)})}}}function Pl(e,t){Ep&&e.memoizedUpdaters.forEach(function(n){I(e,n,t)})}function Fl(e,t){var n=Y.actQueue;return n===null?up(e,t):(n.push(t),iS)}function Il(e){Vc()&&Y.actQueue===null&&j(e,function(){console.error(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,E(e))})}function Ll(e){e!==oS&&e.next===null&&(oS===null?aS=oS=e:oS=oS.next=e),lS=!0,Y.actQueue===null?sS||(sS=!0,Gl()):cS||(cS=!0,Gl())}function Rl(e,t){if(!uS&&lS){uS=!0;do for(var n=!1,r=aS;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Dp(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Ul(r,a))}else a=Gb,a=ke(r,r===Ub?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==eC),!(a&3)||Ae(r,a)||(n=!0,Ul(r,a));r=r.next}while(n);uS=!1}}function zl(){ZS=window.event,Bl()}function Bl(){lS=cS=sS=!1;var e=0;dS!==0&&Pu()&&(e=dS);for(var t=mp(),n=null,r=aS;r!==null;){var i=r.next,a=Vl(r,t);a===0?(r.next=null,n===null?aS=i:n.next=i,i===null&&(oS=n)):(n=r,(e!==0||a&3)&&(lS=!0)),r=i}Fx!==kx&&Fx!==Px||Rl(e,!1),dS!==0&&(dS=0)}function Vl(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Dp(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=je(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Ub,n=Gb,n=ke(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==eC),r=e.callbackNode,n===0||e===t&&(nx===Jb||nx===tx)||e.cancelPendingCommit!==null)return r!==null&&Wl(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ae(e,n)){if(t=n&-n,t!==e.callbackPriority||Y.actQueue!==null&&r!==fS)Wl(r);else return t;switch(ze(n)){case Np:case Pp:n=_p;break;case Fp:n=vp;break;case Ip:n=bp;break;default:n=vp}return r=Hl.bind(null,e),Y.actQueue===null?n=up(n,r):(Y.actQueue.push(r),n=fS),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&Wl(r),e.callbackPriority=2,e.callbackNode=null,2}function Hl(e,t){if($_=Q_=!1,ZS=window.event,Fx!==kx&&Fx!==Px)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Wx===Tx&&(Wx=Dx),xl()&&e.callbackNode!==n)return null;var r=Gb;return r=ke(e,e===Ub?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==eC),r===0?null:(Gc(e,r,t),Vl(e,mp()),e.callbackNode!=null&&e.callbackNode===n?Hl.bind(null,e):null)}function Ul(e,t){if(xl())return null;Q_=$_,$_=!1,Gc(e,t,!0)}function Wl(e){e!==fS&&e!==null&&dp(e)}function Gl(){Y.actQueue!==null&&Y.actQueue.push(function(){return Bl(),null}),nC(function(){(Hb&(Nb|Pb))===Mb?Bl():up(gp,zl)})}function Kl(){if(dS===0){var e=nv;e===0&&(e=Ap,Ap<<=1,!(Ap&261888)&&(Ap=256)),dS=e}return dS}function ql(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:(M(e,`action`),Xt(``+e))}function Jl(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Yl(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=ql((i[zp]||null).action),o=r.submitter;o&&(t=(t=o[zp]||null)?ql(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new $m(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(dS!==0){var e=o?Jl(i,o):new FormData(i),t={pending:!0,data:e,method:i.method,action:a};Object.freeze(t),xo(n,t,null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?Jl(i,o):new FormData(i),t={pending:!0,data:e,method:i.method,action:a},Object.freeze(t),xo(n,t,a,e))},currentTarget:i}]})}}function Xl(e,t,n){e.currentTarget=n;try{t(e)}catch(e){ig(e)}e.currentTarget=null}function Zl(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n];a:{var i=void 0,a=r.event;if(r=r.listeners,t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==i&&a.isPropagationStopped())break a;c===null?Xl(a,s,l):j(c,Xl,a,s,l),i=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==i&&a.isPropagationStopped())break a;c===null?Xl(a,s,l):j(c,Xl,a,s,l),i=c}}}}function Ql(e,t){mS.has(e)||console.error(`Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.`,e);var n=t[Vp];n===void 0&&(n=t[Vp]=new Set);var r=e+`__bubble`;n.has(r)||(tu(t,e,2,!1),n.add(r))}function $l(e,t,n){mS.has(e)&&!t&&console.error(`Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.`,e);var r=0;t&&(r|=4),tu(n,e,r,t)}function eu(e){if(!e[hS]){e[hS]=!0,Kp.forEach(function(t){t!==`selectionchange`&&(mS.has(t)||$l(t,!1,e),$l(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hS]||(t[hS]=!0,$l(`selectionchange`,!1,t))}}function tu(e,t,n,r){switch(nf(t)){case Np:var i=Zd;break;case Pp:i=Qd;break;default:i=$d}n=i.bind(null,t,n,e),i=void 0,!qm||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function nu(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=Ue(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}$t(function(){var r=a,i=B(n),o=[];a:{var s=Qh.get(e);if(s!==void 0){var c=$m,l=e;switch(e){case`keypress`:if(nn(n)===0)break a;case`keydown`:case`keyup`:c=gh;break;case`focusin`:l=`focus`,c=ch;break;case`focusout`:l=`blur`,c=ch;break;case`beforeblur`:case`afterblur`:c=ch;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=oh;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=sh;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=vh;break;case Gh:case Kh:case qh:c=lh;break;case Zh:c=yh;break;case`scroll`:case`scrollend`:c=th;break;case`wheel`:c=bh;break;case`copy`:case`cut`:case`paste`:c=uh;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=_h;break;case`toggle`:case`beforetoggle`:c=xh}var u=(t&4)!=0,d=!u&&(e===`scroll`||e===`scrollend`),f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){var h=p;if(m=h.stateNode,h=h.tag,h!==5&&h!==26&&h!==27||m===null||f===null||(h=en(p,f),h!=null&&u.push(ru(p,h,m))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==Hm&&(l=n.relatedTarget||n.fromElement)&&(Ue(l)||l[Bp]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Ue(l):null,l!==null&&(d=x(l),u=l.tag,l!==d||u!==5&&u!==27&&u!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=oh,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=_h,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:Ge(c),m=l==null?s:Ge(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,Ue(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=au,f=c,p=l,m=0,h=f;h;h=u(h))m++;h=0;for(var g=p;g;g=u(g))h++;for(;0<m-h;)f=u(f),m--;for(;0<h-m;)p=u(p),h--;for(;m--;){if(f===p||p!==null&&f===p.alternate){u=f;break b}f=u(f),p=u(p)}u=null}else u=null;c!==null&&ou(o,s,c,u,!1),l!==null&&d!==null&&ou(o,d,l,u,!0)}}a:{if(s=r?Ge(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var _=gn;else if(dn(s))if(Fh)_=Sn;else{_=bn;var v=yn}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&Wt(r.elementType)&&(_=gn):_=xn;if(_&&=_(e,r)){pn(o,_,n,i);break a}v&&v(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&ut(s,`number`,s.value)}switch(v=r?Ge(r):window,e){case`focusin`:(dn(v)||v.contentEditable===`true`)&&(Rh=v,zh=r,Bh=null);break;case`focusout`:Bh=zh=Rh=null;break;case`mousedown`:Vh=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Vh=!1,An(o,n,i);break;case`selectionchange`:if(Lh)break;case`keydown`:case`keyup`:An(o,n,i)}var y;if(wh)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else jh?sn(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===Ch&&(b=`onCompositionStart`);b&&(Dh&&n.locale!==`ko`&&(jh||b!==`onCompositionStart`?b===`onCompositionEnd`&&jh&&(y=tn()):(Ym=i,Xm=`value`in Ym?Ym.value:Ym.textContent,jh=!0)),v=iu(r,b),0<v.length&&(b=new dh(b,e,null,n,i),o.push({event:b,listeners:v}),y?b.data=y:(y=cn(n),y!==null&&(b.data=y)))),(y=Eh?ln(e,n):un(e,n))&&(b=iu(r,`onBeforeInput`),0<b.length&&(v=new fh(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:v,listeners:b}),v.data=y)),Yl(o,e,r,n,i)}Zl(o,t)})}function ru(e,t,n){return{instance:e,listener:t,currentTarget:n}}function iu(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=en(e,n),i!=null&&r.unshift(ru(e,i,a)),i=en(e,t),i!=null&&r.push(ru(e,i,a))),e.tag===3)return r;e=e.return}return[]}function au(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ou(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=en(n,a),l!=null&&o.unshift(ru(n,l,c))):i||(l=en(n,a),l!=null&&o.push(ru(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}function su(e,t){qt(e,t),e!==`input`&&e!==`textarea`&&e!==`select`||t==null||t.value!==null||Fm||(Fm=!0,e===`select`&&t.multiple?console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",e):console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",e));var n={registrationNameDependencies:qp,possibleRegistrationNames:Jp};Wt(e)||typeof t.is==`string`||Yt(e,t,n),t.contentEditable&&!t.suppressContentEditableWarning&&t.children!=null&&console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.")}function cu(e,t,n,r){t!==n&&(n=fu(n),fu(t)!==n&&(r[e]=t))}function lu(e,t,n){t.forEach(function(t){n[vu(t)]=t===`style`?yu(e):e.getAttribute(t)})}function uu(e,t){!1===t?console.error("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",e,e,e):console.error("Expected `%s` listener to be a function, instead got a value of `%s` type.",e,typeof t)}function du(e,t){return e=e.namespaceURI===Dm||e.namespaceURI===Om?e.ownerDocument.createElementNS(e.namespaceURI,e.tagName):e.ownerDocument.createElement(e.tagName),e.innerHTML=t,e.innerHTML}function fu(e){return Se(e)&&(console.error(`The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.`,xe(e)),Ce(e)),(typeof e==`string`?e:``+e).replace(wS,`
`).replace(TS,``)}function pu(e,t){return t=fu(t),fu(e)===t}function mu(e,t,n,r,i,a){switch(n){case`children`:typeof r==`string`?(zt(r,t,!1),t===`body`||t===`textarea`&&r===``||Bt(e,r)):(typeof r==`number`||typeof r==`bigint`)&&(zt(``+r,t,!1),t!==`body`&&Bt(e,``+r));break;case`className`:$e(e,`class`,r);break;case`tabIndex`:$e(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:$e(e,n,r);break;case`style`:Ut(e,r,a);break;case`data`:if(t!==`object`){$e(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){console.error(n===`src`?`An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.`:`An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.`,n,n),e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}M(r,n),r=Xt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(r!=null&&(t===`form`?n===`formAction`?console.error(`You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>.`):typeof r==`function`&&(i.encType==null&&i.method==null||xS||(xS=!0,console.error(`Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden.`)),i.target==null||bS||(bS=!0,console.error(`Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window.`))):t===`input`||t===`button`?n===`action`?console.error(`You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>.`):t!==`input`||i.type===`submit`||i.type===`image`||vS?t!==`button`||i.type==null||i.type===`submit`||vS?typeof r==`function`&&(i.name==null||yS||(yS=!0,console.error(`Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.`)),i.formEncType==null&&i.formMethod==null||xS||(xS=!0,console.error(`Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden.`)),i.formTarget==null||bS||(bS=!0,console.error(`Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window.`))):(vS=!0,console.error(`A button can only specify a formAction along with type="submit" or no type.`)):(vS=!0,console.error(`An input can only specify a formAction along with type="submit" or type="image".`)):console.error(n===`action`?`You can only pass the action prop to <form>.`:`You can only pass the formAction prop to <input> or <button>.`)),typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof a==`function`&&(n===`formAction`?(t!==`input`&&mu(e,t,`name`,i.name,i,null),mu(e,t,`formEncType`,i.formEncType,i,null),mu(e,t,`formMethod`,i.formMethod,i,null),mu(e,t,`formTarget`,i.formTarget,i,null)):(mu(e,t,`encType`,i.encType,i,null),mu(e,t,`method`,i.method,i,null),mu(e,t,`target`,i.target,i,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}M(r,n),r=Xt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(typeof r!=`function`&&uu(n,r),e.onclick=Zt);break;case`onScroll`:r!=null&&(typeof r!=`function`&&uu(n,r),Ql(`scroll`,e));break;case`onScrollEnd`:r!=null&&(typeof r!=`function`&&uu(n,r),Ql(`scrollend`,e));break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(n=r.__html,n!=null){if(i.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}M(r,n),n=Xt(``+r),e.setAttributeNS(ES,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?(M(r,n),e.setAttribute(n,``+r)):e.removeAttribute(n);break;case`inert`:r!==``||CS[n]||(CS[n]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",n));case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?(M(r,n),e.setAttribute(n,r)):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?(M(r,n),e.setAttribute(n,r)):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):(M(r,n),e.setAttribute(n,r));break;case`popover`:Ql(`beforetoggle`,e),Ql(`toggle`,e),Qe(e,`popover`,r);break;case`xlinkActuate`:et(e,ES,`xlink:actuate`,r);break;case`xlinkArcrole`:et(e,ES,`xlink:arcrole`,r);break;case`xlinkRole`:et(e,ES,`xlink:role`,r);break;case`xlinkShow`:et(e,ES,`xlink:show`,r);break;case`xlinkTitle`:et(e,ES,`xlink:title`,r);break;case`xlinkType`:et(e,ES,`xlink:type`,r);break;case`xmlBase`:et(e,DS,`xml:base`,r);break;case`xmlLang`:et(e,DS,`xml:lang`,r);break;case`xmlSpace`:et(e,DS,`xml:space`,r);break;case`is`:a!=null&&console.error(`Cannot update the "is" prop after it has been initialized.`),Qe(e,`is`,r);break;case`innerText`:case`textContent`:break;case`popoverTarget`:SS||typeof r!=`object`||!r||(SS=!0,console.error("The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",r));default:!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`?(n=Gt(n),Qe(e,n,r)):qp.hasOwnProperty(n)&&r!=null&&typeof r!=`function`&&uu(n,r)}}function hu(e,t,n,r,i,a){switch(n){case`style`:Ut(e,r,a);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(n=r.__html,n!=null){if(i.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");e.innerHTML=n}}break;case`children`:typeof r==`string`?Bt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Bt(e,``+r);break;case`onScroll`:r!=null&&(typeof r!=`function`&&uu(n,r),Ql(`scroll`,e));break;case`onScrollEnd`:r!=null&&(typeof r!=`function`&&uu(n,r),Ql(`scrollend`,e));break;case`onClick`:r!=null&&(typeof r!=`function`&&uu(n,r),e.onclick=Zt);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(qp.hasOwnProperty(n))r!=null&&typeof r!=`function`&&uu(n,r);else a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),a=e[zp]||null,a=a==null?null:a[n],typeof a==`function`&&e.removeEventListener(t,a,i),typeof r==`function`)){typeof a!=`function`&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Qe(e,n,r)}}}function gu(e,t,n){switch(su(t,n),t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Ql(`error`,e),Ql(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(t+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:mu(e,t,a,o,n,null)}}i&&mu(e,t,`srcSet`,n.srcSet,n,null),r&&mu(e,t,`src`,n.src,n,null);return;case`input`:Ye(`input`,n),Ql(`invalid`,e);var s=a=o=i=null,c=null,l=null;for(r in n)if(n.hasOwnProperty(r)){var u=n[r];if(u!=null)switch(r){case`name`:i=u;break;case`type`:o=u;break;case`checked`:c=u;break;case`defaultChecked`:l=u;break;case`value`:a=u;break;case`defaultValue`:s=u;break;case`children`:case`dangerouslySetInnerHTML`:if(u!=null)throw Error(t+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:mu(e,t,r,u,n,null)}}R(e,n),lt(e,a,s,c,l,o,i,!1);return;case`select`:for(i in Ye(`select`,n),Ql(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(s=n[i],s!=null))switch(i){case`value`:a=s;break;case`defaultValue`:o=s;break;case`multiple`:r=s;default:mu(e,t,i,s,n,null)}mt(e,n),t=a,n=o,e.multiple=!!r,t==null?n!=null&&pt(e,!!r,n,!0):pt(e,!!r,t,!1);return;case`textarea`:for(o in Ye(`textarea`,n),Ql(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(s=n[o],s!=null))switch(o){case`value`:r=s;break;case`defaultValue`:i=s;break;case`children`:a=s;break;case`dangerouslySetInnerHTML`:if(s!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:mu(e,t,o,s,n,null)}ht(e,n),_t(e,r,i,a);return;case`option`:for(c in dt(e,n),n)if(n.hasOwnProperty(c)&&(r=n[c],r!=null))switch(c){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:mu(e,t,c,r,n,null)}return;case`dialog`:Ql(`beforetoggle`,e),Ql(`toggle`,e),Ql(`cancel`,e),Ql(`close`,e);break;case`iframe`:case`object`:Ql(`load`,e);break;case`video`:case`audio`:for(r=0;r<pS.length;r++)Ql(pS[r],e);break;case`image`:Ql(`error`,e),Ql(`load`,e);break;case`details`:Ql(`toggle`,e);break;case`embed`:case`source`:case`link`:Ql(`error`,e),Ql(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`children`:case`dangerouslySetInnerHTML`:throw Error(t+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:mu(e,t,l,r,n,null)}return;default:if(Wt(t)){for(u in n)n.hasOwnProperty(u)&&(r=n[u],r!==void 0&&hu(e,t,u,r,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(r=n[s],r!=null&&mu(e,t,s,r,n,null))}function _u(e,t,n,r){switch(su(t,r),t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,s=null,c=null,l=null,u=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case`checked`:break;case`value`:break;case`defaultValue`:c=d;default:r.hasOwnProperty(p)||mu(e,t,p,null,r,d)}}for(var f in r){var p=r[f];if(d=n[f],r.hasOwnProperty(f)&&(p!=null||d!=null))switch(f){case`type`:a=p;break;case`name`:i=p;break;case`checked`:l=p;break;case`defaultChecked`:u=p;break;case`value`:o=p;break;case`defaultValue`:s=p;break;case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(t+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:p!==d&&mu(e,t,f,p,r,d)}}t=n.type===`checkbox`||n.type===`radio`?n.checked!=null:n.value!=null,r=r.type===`checkbox`||r.type===`radio`?r.checked!=null:r.value!=null,t||!r||_S||(console.error(`A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components`),_S=!0),!t||r||gS||(console.error(`A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components`),gS=!0),ct(e,o,s,c,l,u,a,i);return;case`select`:for(a in p=o=s=f=null,n)if(c=n[a],n.hasOwnProperty(a)&&c!=null)switch(a){case`value`:break;case`multiple`:p=c;default:r.hasOwnProperty(a)||mu(e,t,a,null,r,c)}for(i in r)if(a=r[i],c=n[i],r.hasOwnProperty(i)&&(a!=null||c!=null))switch(i){case`value`:f=a;break;case`defaultValue`:s=a;break;case`multiple`:o=a;default:a!==c&&mu(e,t,i,a,r,c)}r=s,t=o,n=p,f==null?!!n!=!!t&&(r==null?pt(e,!!t,t?[]:``,!1):pt(e,!!t,r,!0)):pt(e,!!t,f,!1);return;case`textarea`:for(s in p=f=null,n)if(i=n[s],n.hasOwnProperty(s)&&i!=null&&!r.hasOwnProperty(s))switch(s){case`value`:break;case`children`:break;default:mu(e,t,s,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:f=i;break;case`defaultValue`:p=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:i!==a&&mu(e,t,o,i,r,a)}gt(e,f,p);return;case`option`:for(var m in n)if(f=n[m],n.hasOwnProperty(m)&&f!=null&&!r.hasOwnProperty(m))switch(m){case`selected`:e.selected=!1;break;default:mu(e,t,m,null,r,f)}for(c in r)if(f=r[c],p=n[c],r.hasOwnProperty(c)&&f!==p&&(f!=null||p!=null))switch(c){case`selected`:e.selected=f&&typeof f!=`function`&&typeof f!=`symbol`;break;default:mu(e,t,c,f,r,p)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var h in n)f=n[h],n.hasOwnProperty(h)&&f!=null&&!r.hasOwnProperty(h)&&mu(e,t,h,null,r,f);for(l in r)if(f=r[l],p=n[l],r.hasOwnProperty(l)&&f!==p&&(f!=null||p!=null))switch(l){case`children`:case`dangerouslySetInnerHTML`:if(f!=null)throw Error(t+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:mu(e,t,l,f,r,p)}return;default:if(Wt(t)){for(var g in n)f=n[g],n.hasOwnProperty(g)&&f!==void 0&&!r.hasOwnProperty(g)&&hu(e,t,g,void 0,r,f);for(u in r)f=r[u],p=n[u],!r.hasOwnProperty(u)||f===p||f===void 0&&p===void 0||hu(e,t,u,f,r,p);return}}for(var _ in n)f=n[_],n.hasOwnProperty(_)&&f!=null&&!r.hasOwnProperty(_)&&mu(e,t,_,null,r,f);for(d in r)f=r[d],p=n[d],!r.hasOwnProperty(d)||f===p||f==null&&p==null||mu(e,t,d,f,r,p)}function vu(e){switch(e){case`class`:return`className`;case`for`:return`htmlFor`;default:return e}}function yu(e){var t={};e=e.style;for(var n=0;n<e.length;n++){var r=e[n];t[r]=e.getPropertyValue(r)}return t}function bu(e,t,n){if(t!=null&&typeof t!=`object`)console.error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");else{var r,i=r=``,a;for(a in t)if(t.hasOwnProperty(a)){var o=t[a];o!=null&&typeof o!=`boolean`&&o!==``&&(a.indexOf(`--`)===0?(N(o,a),r+=i+a+`:`+(``+o).trim()):typeof o!=`number`||o===0||Em.has(a)?(N(o,a),r+=i+a.replace(gm,`-$1`).toLowerCase().replace(_m,`-ms-`)+`:`+(``+o).trim()):r+=i+a.replace(gm,`-$1`).toLowerCase().replace(_m,`-ms-`)+`:`+o+`px`,i=`;`)}r||=null,t=e.getAttribute(`style`),t!==r&&(r=fu(r),fu(t)!==r&&(n.style=yu(e)))}}function xu(e,t,n,r,i,a){if(i.delete(n),e=e.getAttribute(n),e===null)switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:return}else if(r!=null)switch(typeof r){case`function`:case`symbol`:case`boolean`:break;default:if(M(r,t),e===``+r)return}cu(t,e,r,a)}function Su(e,t,n,r,i,a){if(i.delete(n),e=e.getAttribute(n),e===null){switch(typeof r){case`function`:case`symbol`:return}if(!r)return}else switch(typeof r){case`function`:case`symbol`:break;default:if(r)return}cu(t,e,r,a)}function Cu(e,t,n,r,i,a){if(i.delete(n),e=e.getAttribute(n),e===null)switch(typeof r){case`undefined`:case`function`:case`symbol`:return}else if(r!=null)switch(typeof r){case`function`:case`symbol`:break;default:if(M(r,n),e===``+r)return}cu(t,e,r,a)}function wu(e,t,n,r,i,a){if(i.delete(n),e=e.getAttribute(n),e===null)switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:return;default:if(isNaN(r))return}else if(r!=null)switch(typeof r){case`function`:case`symbol`:case`boolean`:break;default:if(!isNaN(r)&&(M(r,t),e===``+r))return}cu(t,e,r,a)}function Tu(e,t,n,r,i,a){if(i.delete(n),e=e.getAttribute(n),e===null)switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:return}else if(r!=null)switch(typeof r){case`function`:case`symbol`:case`boolean`:break;default:if(M(r,t),n=Xt(``+r),e===n)return}cu(t,e,r,a)}function Eu(e,t,n,r){for(var i={},a=new Set,o=e.attributes,s=0;s<o.length;s++)switch(o[s].name.toLowerCase()){case`value`:break;case`checked`:break;case`selected`:break;default:a.add(o[s].name)}if(Wt(t)){for(var c in n)if(n.hasOwnProperty(c)){var l=n[c];if(l!=null){if(qp.hasOwnProperty(c))typeof l!=`function`&&uu(c,l);else if(!0!==n.suppressHydrationWarning)switch(c){case`children`:typeof l!=`string`&&typeof l!=`number`||cu(`children`,e.textContent,l,i);continue;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:continue;case`dangerouslySetInnerHTML`:o=e.innerHTML,l=l?l.__html:void 0,l!=null&&(l=du(e,l),cu(c,o,l,i));continue;case`style`:a.delete(c),bu(e,l,i);continue;case`offsetParent`:case`offsetTop`:case`offsetLeft`:case`offsetWidth`:case`offsetHeight`:case`isContentEditable`:case`outerText`:case`outerHTML`:a.delete(c.toLowerCase()),console.error("Assignment to read-only property will result in a no-op: `%s`",c);continue;case`className`:a.delete(`class`),o=Ze(e,`class`,l),cu(`className`,o,l,i);continue;default:r.context===WS&&t!==`svg`&&t!==`math`?a.delete(c.toLowerCase()):a.delete(c),o=Ze(e,c,l),cu(c,o,l,i)}}}}else for(l in n)if(n.hasOwnProperty(l)&&(c=n[l],c!=null)){if(qp.hasOwnProperty(l))typeof c!=`function`&&uu(l,c);else if(!0!==n.suppressHydrationWarning)switch(l){case`children`:typeof c!=`string`&&typeof c!=`number`||cu(`children`,e.textContent,c,i);continue;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`value`:case`checked`:case`selected`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:continue;case`dangerouslySetInnerHTML`:o=e.innerHTML,c=c?c.__html:void 0,c!=null&&(c=du(e,c),o!==c&&(i[l]={__html:o}));continue;case`className`:xu(e,l,`class`,c,a,i);continue;case`tabIndex`:xu(e,l,`tabindex`,c,a,i);continue;case`style`:a.delete(l),bu(e,c,i);continue;case`multiple`:a.delete(l),cu(l,e.multiple,c,i);continue;case`muted`:a.delete(l),cu(l,e.muted,c,i);continue;case`autoFocus`:a.delete(`autofocus`),cu(l,e.autofocus,c,i);continue;case`data`:if(t!==`object`){a.delete(l),o=e.getAttribute(`data`),cu(l,o,c,i);continue}case`src`:case`href`:if(!(c!==``||t===`a`&&l===`href`||t===`object`&&l===`data`)){console.error(l===`src`?`An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.`:`An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.`,l,l);continue}Tu(e,l,l,c,a,i);continue;case`action`:case`formAction`:if(o=e.getAttribute(l),typeof c==`function`){a.delete(l.toLowerCase()),l===`formAction`?(a.delete(`name`),a.delete(`formenctype`),a.delete(`formmethod`),a.delete(`formtarget`)):(a.delete(`enctype`),a.delete(`method`),a.delete(`target`));continue}else if(o===OS){a.delete(l.toLowerCase()),cu(l,`function`,c,i);continue}Tu(e,l,l.toLowerCase(),c,a,i);continue;case`xlinkHref`:Tu(e,l,`xlink:href`,c,a,i);continue;case`contentEditable`:Cu(e,l,`contenteditable`,c,a,i);continue;case`spellCheck`:Cu(e,l,`spellcheck`,c,a,i);continue;case`draggable`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:Cu(e,l,l,c,a,i);continue;case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:Su(e,l,l.toLowerCase(),c,a,i);continue;case`capture`:case`download`:a:{s=e;var u=o=l,d=i;if(a.delete(u),s=s.getAttribute(u),s===null)switch(typeof c){case`undefined`:case`function`:case`symbol`:break a;default:if(!1===c)break a}else if(c!=null)switch(typeof c){case`function`:case`symbol`:break;case`boolean`:if(!0===c&&s===``)break a;break;default:if(M(c,o),s===``+c)break a}cu(o,s,c,d)}continue;case`cols`:case`rows`:case`size`:case`span`:a:{if(s=e,u=o=l,d=i,a.delete(u),s=s.getAttribute(u),s===null)switch(typeof c){case`undefined`:case`function`:case`symbol`:case`boolean`:break a;default:if(isNaN(c)||1>c)break a}else if(c!=null)switch(typeof c){case`function`:case`symbol`:case`boolean`:break;default:if(!(isNaN(c)||1>c)&&(M(c,o),s===``+c))break a}cu(o,s,c,d)}continue;case`rowSpan`:wu(e,l,`rowspan`,c,a,i);continue;case`start`:wu(e,l,l,c,a,i);continue;case`xHeight`:xu(e,l,`x-height`,c,a,i);continue;case`xlinkActuate`:xu(e,l,`xlink:actuate`,c,a,i);continue;case`xlinkArcrole`:xu(e,l,`xlink:arcrole`,c,a,i);continue;case`xlinkRole`:xu(e,l,`xlink:role`,c,a,i);continue;case`xlinkShow`:xu(e,l,`xlink:show`,c,a,i);continue;case`xlinkTitle`:xu(e,l,`xlink:title`,c,a,i);continue;case`xlinkType`:xu(e,l,`xlink:type`,c,a,i);continue;case`xmlBase`:xu(e,l,`xml:base`,c,a,i);continue;case`xmlLang`:xu(e,l,`xml:lang`,c,a,i);continue;case`xmlSpace`:xu(e,l,`xml:space`,c,a,i);continue;case`inert`:c!==``||CS[l]||(CS[l]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",l)),Su(e,l,l,c,a,i);continue;default:if(!(2<l.length)||l[0]!==`o`&&l[0]!==`O`||l[1]!==`n`&&l[1]!==`N`){s=Gt(l),o=!1,r.context===WS&&t!==`svg`&&t!==`math`?a.delete(s.toLowerCase()):(u=l.toLowerCase(),u=Am.hasOwnProperty(u)&&Am[u]||null,u!==null&&u!==l&&(o=!0,a.delete(u)),a.delete(s));a:if(u=e,d=s,s=c,Xe(d))if(u.hasAttribute(d))u=u.getAttribute(d),M(s,d),s=u===``+s?s:u;else{switch(typeof s){case`function`:case`symbol`:break a;case`boolean`:if(u=d.toLowerCase().slice(0,5),u!==`data-`&&u!==`aria-`)break a}s=s===void 0?void 0:null}else s=void 0;o||cu(l,s,c,i)}}}return 0<a.size&&!0!==n.suppressHydrationWarning&&lu(e,a,i),Object.keys(i).length===0?null:i}function Du(e,t){switch(e.length){case 0:return``;case 1:return e[0];case 2:return e[0]+` `+t+` `+e[1];default:return e.slice(0,-1).join(`, `)+`, `+t+` `+e[e.length-1]}}function Ou(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function ku(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Ou(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Ou(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}function Au(e){return e.nodeType===9?e:e.ownerDocument}function ju(e){switch(e){case Om:return GS;case Dm:return KS;default:return WS}}function Mu(e,t){if(e===WS)switch(t){case`svg`:return GS;case`math`:return KS;default:return WS}return e===GS&&t===`foreignObject`?WS:e}function Nu(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}function Pu(){var e=window.event;return e&&e.type===`popstate`?e===XS?!1:(XS=e,!0):(XS=null,!1)}function Fu(){var e=window.event;return e&&e!==ZS?e.type:null}function Iu(){var e=window.event;return e&&e!==ZS?e.timeStamp:-1.1}function Lu(e){setTimeout(function(){throw e})}function Ru(e,t,n){switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&e.focus();break;case`img`:n.src?e.src=n.src:n.srcSet&&(e.srcset=n.srcSet)}}function zu(){}function Bu(e,t,n,r){_u(e,t,n,r),e[zp]=r}function Vu(e){Bt(e,``)}function Hu(e,t,n){e.nodeValue=n}function Uu(e){if(!e.__reactWarnedAboutChildrenConflict){var t=e[zp]||null;if(t!==null){var n=We(e);n!==null&&(typeof t.children==`string`||typeof t.children==`number`?(e.__reactWarnedAboutChildrenConflict=!0,j(n,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})):t.dangerouslySetInnerHTML!=null&&(e.__reactWarnedAboutChildrenConflict=!0,j(n,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})))}}}function Wu(e){return e===`head`}function Gu(e,t){e.removeChild(t)}function Ku(e,t){(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e).removeChild(t)}function qu(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===NS||n===jS){if(r===0){e.removeChild(i),pf(t);return}r--}else if(n===MS||n===PS||n===FS||n===IS||n===AS)r++;else if(n===LS)vd(e.ownerDocument.documentElement);else if(n===zS){n=e.ownerDocument.head,vd(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Gp]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===RS&&vd(e.ownerDocument.body);n=i}while(n);pf(t)}function Ju(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===NS){if(e===0)break;e--}else n!==MS&&n!==PS&&n!==FS&&n!==IS||e++;n=r}while(n)}function Yu(e){Ju(e,!0)}function Xu(e){e=e.style,typeof e.setProperty==`function`?e.setProperty(`display`,`none`,`important`):e.display=`none`}function Zu(e){e.nodeValue=``}function Qu(e){Ju(e,!1)}function $u(e,t){t=t[US],t=t!=null&&t.hasOwnProperty(`display`)?t.display:null,e.style.display=t==null||typeof t==`boolean`?``:(``+t).trim()}function ed(e,t){e.nodeValue=t}function td(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:td(n),He(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function nd(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){M(i.name,`name`);var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[Gp])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cd(e.nextSibling),e===null)break}return null}function rd(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cd(e.nextSibling),e===null))return null;return e}function id(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cd(e.nextSibling),e===null))return null;return e}function ad(e){return e.data===PS||e.data===FS}function od(e){return e.data===IS||e.data===PS&&e.ownerDocument.readyState!==HS}function sd(e,t){var n=e.ownerDocument;if(e.data===FS)e._reactRetry=t;else if(e.data!==PS||n.readyState!==HS)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cd(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===MS||t===IS||t===PS||t===FS||t===AS||t===BS||t===VS)break;if(t===NS||t===jS)return null}}return e}function ld(e){if(e.nodeType===1){for(var t=e.nodeName.toLowerCase(),n={},r=e.attributes,i=0;i<r.length;i++){var a=r[i];n[vu(a.name)]=a.name.toLowerCase()===`style`?yu(e):a.value}return{type:t,props:n}}return e.nodeType===8?e.data===AS?{type:`Activity`,props:{}}:{type:`Suspense`,props:{}}:e.nodeValue}function ud(e,t,n){return n===null||!0!==n[kS]?(e.nodeValue===t?e=null:(t=fu(t),e=fu(e.nodeValue)===t?null:e.nodeValue),e):null}function dd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===NS||n===jS){if(t===0)return cd(e.nextSibling);t--}else n!==MS&&n!==IS&&n!==PS&&n!==FS&&n!==AS||t++}e=e.nextSibling}return null}function fd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===MS||n===IS||n===PS||n===FS||n===AS){if(t===0)return e;t--}else n!==NS&&n!==jS||t++}e=e.previousSibling}return null}function pd(e){pf(e)}function md(e){pf(e)}function hd(e){pf(e)}function gd(e,t,n,r,i){switch(i&&Rt(e,r.ancestorInfo),t=Au(n),e){case`html`:if(e=t.documentElement,!e)throw Error(`React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page.`);return e;case`head`:if(e=t.head,!e)throw Error(`React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page.`);return e;case`body`:if(e=t.body,!e)throw Error(`React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page.`);return e;default:throw Error(`resolveSingletonInstance was called with an element type that is not supported. This is a bug in React.`)}}function _d(e,t,n,r){if(!n[Bp]&&We(n)){var i=n.tagName.toLowerCase();console.error(`You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.`,i,i,i)}switch(e){case`html`:case`head`:case`body`:break;default:console.error(`acquireSingletonInstance was called with an element type that is not supported. This is a bug in React.`)}for(i=n.attributes;i.length;)n.removeAttributeNode(i[0]);gu(n,e,t),n[Rp]=r,n[zp]=t}function vd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);He(e)}function yd(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}function bd(e,t,n){var r=fC;if(r&&typeof t==`string`&&t){var i=st(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),uC.has(i)||(uC.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),gu(t,`link`,e),L(t),r.head.appendChild(t)))}}function xd(e,t,n,r){var i=(i=qf.current)?yd(i):null;if(!i)throw Error(`"resourceRoot" was expected to exist. This is a bug in React.`);switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Cd(n.href),t=Ke(i).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Cd(n.href);var a=Ke(i).hoistableStyles,o=a.get(e);if(!o&&(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:iC,preload:null}},a.set(e,o),(a=i.querySelector(wd(e)))&&!a._p&&(o.instance=a,o.state.loading=aC|cC),!lC.has(e))){var s={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy};lC.set(e,s),a||Ed(i,e,s,o.state)}if(t&&r===null)throw n=`

  - `+Sd(t)+`
  + `+Sd(n),Error("Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+n);return o}if(t&&r!==null)throw n=`

  - `+Sd(t)+`
  + `+Sd(n),Error("Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+n);return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Dd(n),t=Ke(i).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(`getResource encountered a type it did not expect: "`+e+`". this is a bug in React.`)}}function Sd(e){var t=0,n=`<link`;return typeof e.rel==`string`?(t++,n+=` rel="`+e.rel+`"`):lp.call(e,`rel`)&&(t++,n+=` rel="`+(e.rel===null?`null`:`invalid type `+typeof e.rel)+`"`),typeof e.href==`string`?(t++,n+=` href="`+e.href+`"`):lp.call(e,`href`)&&(t++,n+=` href="`+(e.href===null?`null`:`invalid type `+typeof e.href)+`"`),typeof e.precedence==`string`?(t++,n+=` precedence="`+e.precedence+`"`):lp.call(e,`precedence`)&&(t++,n+=` precedence={`+(e.precedence===null?`null`:`invalid type `+typeof e.precedence)+`}`),Object.getOwnPropertyNames(e).length>t&&(n+=` ...`),n+` />`}function Cd(e){return`href="`+st(e)+`"`}function wd(e){return`link[rel="stylesheet"][`+e+`]`}function Td(e){return xf({},e,{"data-precedence":e.precedence,precedence:null})}function Ed(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=aC:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=aC}),t.addEventListener(`error`,function(){return r.loading|=oC}),gu(t,`link`,n),L(t),e.head.appendChild(t))}function Dd(e){return`[src="`+st(e)+`"]`}function Od(e){return`script[async]`+e}function kd(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+st(n.href)+`"]`);if(r)return t.instance=r,L(r),r;var i=xf({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),L(r),gu(r,`style`,i),Ad(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Cd(n.href);var a=e.querySelector(wd(i));if(a)return t.state.loading|=cC,t.instance=a,L(a),a;r=Td(n),(i=lC.get(i))&&jd(r,i),a=(e.ownerDocument||e).createElement(`link`),L(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),gu(a,`link`,r),t.state.loading|=cC,Ad(a,n.precedence,e),t.instance=a;case`script`:return a=Dd(n.src),(i=e.querySelector(Od(a)))?(t.instance=i,L(i),i):(r=n,(i=lC.get(a))&&(r=xf({},n),Md(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),L(i),gu(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(`acquireResource encountered a resource type it did not expect: "`+t.type+`". this is a bug in React.`)}else t.type===`stylesheet`&&(t.state.loading&cC)===iC&&(r=t.instance,t.state.loading|=cC,Ad(r,n.precedence,e));return t.instance}function Ad(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function jd(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Md(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}function Nd(e,t,n){if(pC===null){var r=new Map,i=pC=new Map;i.set(n,r)}else i=pC,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Gp]||a[Rp]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==Om){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Pd(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Fd(e,t,n){var r=!n.ancestorInfo.containerTagInScope;if(n.context===GS||t.itemProp!=null)return!r||t.itemProp==null||e!==`meta`&&e!==`title`&&e!==`style`&&e!==`link`&&e!==`script`||console.error("Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",e,e),!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``){r&&console.error('Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.');break}return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError){if(t.rel===`stylesheet`&&typeof t.precedence==`string`){e=t.href;var i=t.onError,a=t.disabled;n=[],t.onLoad&&n.push("`onLoad`"),i&&n.push("`onError`"),a!=null&&n.push("`disabled`"),i=Du(n,`and`),i+=n.length===1?` prop`:` props`,a=n.length===1?`an `+i:`the `+i,n.length&&console.error('React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',e,a,i)}r&&(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``?console.error("Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"):(t.onError||t.onLoad)&&console.error(`Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>.`));break}switch(t.rel){case`stylesheet`:return e=t.precedence,t=t.disabled,typeof e!=`string`&&r&&console.error(`Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.`),typeof e==`string`&&t==null;default:return!0}case`script`:if(e=t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`,!e||t.onLoad||t.onError||!t.src||typeof t.src!=`string`){r&&(e?t.onLoad||t.onError?console.error(`Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>.`):console.error("Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."):console.error(`Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.`));break}return!0;case`noscript`:case`template`:r&&console.error(`Cannot render <%s> outside the main document. Try moving it into the root <head> tag.`,e)}return!1}function Id(e){return!(e.type===`stylesheet`&&(e.state.loading&sC)===iC)}function Ld(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&(n.state.loading&cC)===iC){if(n.instance===null){var i=Cd(r.href),a=t.querySelector(wd(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=zd.bind(e),t.then(e,e)),n.state.loading|=cC,n.instance=a,L(a);return}a=t.ownerDocument||t,r=Td(r),(i=lC.get(i))&&jd(r,i),a=a.createElement(`link`),L(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),gu(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&sC)===iC&&(e.count++,n=zd.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}function Rd(e,t){return e.stylesheets&&e.count===0&&Bd(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Bd(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},mC+t);0<e.imgBytes&&_C===0&&(_C=125*ku()*gC);var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Bd(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>_C?50:hC)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function zd(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Bd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}function Bd(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,yC=new Map,t.forEach(Vd,e),yC=null,zd.call(e))}function Vd(e,t){if(!(t.state.loading&cC)){var n=yC.get(e);if(n)var r=n.get(vC);else{n=new Map,yC.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(vC,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(vC,i),n.set(o,i),this.count++,r=zd.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=cC}}function Hd(e,t,n,r,i,a,o,s,c){for(this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=eC,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ne(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ne(0),this.hiddenUpdates=Ne(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map,this.passiveEffectDuration=this.effectDuration=-0,this.memoizedUpdaters=new Set,e=this.pendingUpdatersLaneMap=[],t=0;31>t;t++)e.push(new Set);this._debugRootType=n?`hydrateRoot()`:`createRoot()`}function Ud(e,t,n,r,i,a,o,s,c,l,u,d){return e=new Hd(e,t,n,o,c,l,u,d,s),t=jg,!0===a&&(t|=Ng|Pg),t|=Mg,a=h(3,null,null,t),e.current=a,a.stateNode=e,t=qr(),Jr(t),e.pooledCache=t,Jr(t),a.memoizedState={element:r,isDehydrated:n,cache:t},zi(a),e}function Wd(e){return e?(e=Og,e):Og}function Gd(e,t,n,r,i,a){if(wp&&typeof wp.onScheduleFiberRoot==`function`)try{wp.onScheduleFiberRoot(Cp,r,n)}catch(e){Tp||(Tp=!0,console.error(`React instrumentation encountered an error: %o`,e))}i=Wd(i),r.context===null?r.context=i:r.pendingContext=i,cp&&sp!==null&&!DC&&(DC=!0,console.error(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,E(sp)||`Unknown`)),r=Vi(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(typeof a!=`function`&&console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",a),r.callback=a),n=Hi(e,r,t),n!==null&&(Xr(t,`root.render()`,null),Wc(n,e,t),Ui(n,e,t))}function Kd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function qd(e,t){Kd(e,t),(e=e.alternate)&&Kd(e,t)}function Jd(e){if(e.tag===13||e.tag===31){var t=tr(e,67108864);t!==null&&Wc(t,e,67108864),qd(e,67108864)}}function Yd(e){if(e.tag===13||e.tag===31){var t=Hc(e);t=F(t);var n=tr(e,t);n!==null&&Wc(n,e,t),qd(e,t)}}function Xd(){return sp}function Zd(e,t,n,r){var i=Y.T;Y.T=null;var a=Bf.p;try{Bf.p=Np,$d(e,t,n,r)}finally{Bf.p=a,Y.T=i}}function Qd(e,t,n,r){var i=Y.T;Y.T=null;var a=Bf.p;try{Bf.p=Pp,$d(e,t,n,r)}finally{Bf.p=a,Y.T=i}}function $d(e,t,n,r){if(RC){var i=ef(r);if(i===null)nu(e,t,r,zC,n),rf(e,r);else if(of(i,e,t,n,r))r.stopPropagation();else if(rf(e,r),t&4&&-1<qC.indexOf(e)){for(;i!==null;){var a=We(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Oe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Dp(o);s.entanglements[1]|=c,o&=~c}Ll(a),(Hb&(Nb|Pb))===Mb&&(bx=mp()+xx,Rl(0,!1))}}break;case 31:case 13:s=tr(a,2),s!==null&&Wc(s,a,2),Yc(),qd(a,2)}if(a=ef(r),a===null&&nu(e,t,r,zC,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else nu(e,t,r,null,n)}}function ef(e){return e=B(e),tf(e)}function tf(e){if(zC=null,e=Ue(e),e!==null){var t=x(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=ee(t),e!==null)return e;e=null}else if(n===31){if(e=te(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return zC=e,null}function nf(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return Np;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return Pp;case`message`:switch(hp()){case gp:return Np;case _p:return Pp;case vp:case yp:return Fp;case bp:return Ip;default:return Fp}default:return Fp}}function rf(e,t){switch(e){case`focusin`:case`focusout`:VC=null;break;case`dragenter`:case`dragleave`:HC=null;break;case`mouseover`:case`mouseout`:UC=null;break;case`pointerover`:case`pointerout`:WC.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:GC.delete(t.pointerId)}}function af(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=We(t),t!==null&&Jd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function of(e,t,n,r,i){switch(t){case`focusin`:return VC=af(VC,e,t,n,r,i),!0;case`dragenter`:return HC=af(HC,e,t,n,r,i),!0;case`mouseover`:return UC=af(UC,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return WC.set(a,af(WC.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,GC.set(a,af(GC.get(a)||null,e,t,n,r,i)),!0}return!1}function sf(e){var t=Ue(e.target);if(t!==null){var n=x(t);if(n!==null){if(t=n.tag,t===13){if(t=ee(n),t!==null){e.blockedOn=t,Ve(e.priority,function(){Yd(n)});return}}else if(t===31){if(t=te(n),t!==null){e.blockedOn=t,Ve(e.priority,function(){Yd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cf(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ef(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n),i=r;Hm!==null&&console.error(`Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue.`),Hm=i,n.target.dispatchEvent(r),Hm===null&&console.error(`Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue.`),Hm=null}else return t=We(n),t!==null&&Jd(t),e.blockedOn=n,!1;t.shift()}return!0}function lf(e,t,n){cf(e)&&n.delete(t)}function uf(){BC=!1,VC!==null&&cf(VC)&&(VC=null),HC!==null&&cf(HC)&&(HC=null),UC!==null&&cf(UC)&&(UC=null),WC.forEach(lf),GC.forEach(lf)}function df(e,t){e.blockedOn===t&&(e.blockedOn=null,BC||(BC=!0,vf.unstable_scheduleCallback(vf.unstable_NormalPriority,uf)))}function ff(e){JC!==e&&(JC=e,vf.unstable_scheduleCallback(vf.unstable_NormalPriority,function(){JC===e&&(JC=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(tf(r||n)===null)continue;break}var a=We(n);a!==null&&(e.splice(t,3),t-=3,n={pending:!0,data:i,method:n.method,action:r},Object.freeze(n),xo(a,n,r,i))}}))}function pf(e){function t(t){return df(t,e)}VC!==null&&df(VC,e),HC!==null&&df(HC,e),UC!==null&&df(UC,e),WC.forEach(t),GC.forEach(t);for(var n=0;n<KC.length;n++){var r=KC[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<KC.length&&(n=KC[0],n.blockedOn===null);)sf(n),n.blockedOn===null&&KC.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[zp]||null;if(typeof a==`function`)o||ff(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[zp]||null)s=o.formAction;else if(tf(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),ff(n)}}}function mf(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function hf(e){this._internalRoot=e}function gf(e){this._internalRoot=e}function _f(e){e[Bp]&&(e._reactRootContainer?console.error(`You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.`):console.error(`You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it.`))}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==`function`&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var vf=m(),yf=d(),bf=_(),xf=Object.assign,Sf=Symbol.for(`react.element`),Cf=Symbol.for(`react.transitional.element`),wf=Symbol.for(`react.portal`),Tf=Symbol.for(`react.fragment`),Ef=Symbol.for(`react.strict_mode`),Df=Symbol.for(`react.profiler`),Of=Symbol.for(`react.consumer`),kf=Symbol.for(`react.context`),Af=Symbol.for(`react.forward_ref`),jf=Symbol.for(`react.suspense`),Mf=Symbol.for(`react.suspense_list`),Nf=Symbol.for(`react.memo`),Pf=Symbol.for(`react.lazy`),Ff=Symbol.for(`react.activity`),If=Symbol.for(`react.memo_cache_sentinel`),Lf=Symbol.iterator,Rf=Symbol.for(`react.client.reference`),zf=Array.isArray,Y=yf.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Bf=bf.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Vf=Object.freeze({pending:!1,data:null,method:null,action:null}),Hf=[],Uf=[],Wf=-1,Gf=ie(null),Kf=ie(null),qf=ie(null),Jf=ie(null),Yf=0,Xf,Zf,Qf,$f,ep,tp,np;ue.__reactDisabledLog=!0;var rp,ip,ap=!1,op=new(typeof WeakMap==`function`?WeakMap:Map),sp=null,cp=!1,lp=Object.prototype.hasOwnProperty,up=vf.unstable_scheduleCallback,dp=vf.unstable_cancelCallback,fp=vf.unstable_shouldYield,pp=vf.unstable_requestPaint,mp=vf.unstable_now,hp=vf.unstable_getCurrentPriorityLevel,gp=vf.unstable_ImmediatePriority,_p=vf.unstable_UserBlockingPriority,vp=vf.unstable_NormalPriority,yp=vf.unstable_LowPriority,bp=vf.unstable_IdlePriority,xp=vf.log,Sp=vf.unstable_setDisableYieldValue,Cp=null,wp=null,Tp=!1,Ep=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`,Dp=Math.clz32?Math.clz32:De,Op=Math.log,kp=Math.LN2,Ap=256,jp=262144,Mp=4194304,Np=2,Pp=8,Fp=32,Ip=268435456,Lp=Math.random().toString(36).slice(2),Rp=`__reactFiber$`+Lp,zp=`__reactProps$`+Lp,Bp=`__reactContainer$`+Lp,Vp=`__reactEvents$`+Lp,Hp=`__reactListeners$`+Lp,Up=`__reactHandles$`+Lp,Wp=`__reactResources$`+Lp,Gp=`__reactMarker$`+Lp,Kp=new Set,qp={},Jp={},Yp={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},Xp=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Zp={},Qp={},$p=/[\n"\\]/g,em=!1,tm=!1,nm=!1,rm=!1,im=!1,am=!1,om=[`value`,`defaultValue`],sm=!1,cm=/["'&<>\n\t]|^\s|\s$/,lm=`address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp`.split(` `),um=`applet caption html table td th marquee object template foreignObject desc title`.split(` `),dm=um.concat([`button`]),fm=`dd dt li option optgroup p rp rt`.split(` `),pm={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null,containerTagInScope:null,implicitRootScope:!1},mm={},hm={animation:`animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction`.split(` `),background:`backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize`.split(` `),backgroundPosition:[`backgroundPositionX`,`backgroundPositionY`],border:`borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth`.split(` `),borderBlockEnd:[`borderBlockEndColor`,`borderBlockEndStyle`,`borderBlockEndWidth`],borderBlockStart:[`borderBlockStartColor`,`borderBlockStartStyle`,`borderBlockStartWidth`],borderBottom:[`borderBottomColor`,`borderBottomStyle`,`borderBottomWidth`],borderColor:[`borderBottomColor`,`borderLeftColor`,`borderRightColor`,`borderTopColor`],borderImage:[`borderImageOutset`,`borderImageRepeat`,`borderImageSlice`,`borderImageSource`,`borderImageWidth`],borderInlineEnd:[`borderInlineEndColor`,`borderInlineEndStyle`,`borderInlineEndWidth`],borderInlineStart:[`borderInlineStartColor`,`borderInlineStartStyle`,`borderInlineStartWidth`],borderLeft:[`borderLeftColor`,`borderLeftStyle`,`borderLeftWidth`],borderRadius:[`borderBottomLeftRadius`,`borderBottomRightRadius`,`borderTopLeftRadius`,`borderTopRightRadius`],borderRight:[`borderRightColor`,`borderRightStyle`,`borderRightWidth`],borderStyle:[`borderBottomStyle`,`borderLeftStyle`,`borderRightStyle`,`borderTopStyle`],borderTop:[`borderTopColor`,`borderTopStyle`,`borderTopWidth`],borderWidth:[`borderBottomWidth`,`borderLeftWidth`,`borderRightWidth`,`borderTopWidth`],columnRule:[`columnRuleColor`,`columnRuleStyle`,`columnRuleWidth`],columns:[`columnCount`,`columnWidth`],flex:[`flexBasis`,`flexGrow`,`flexShrink`],flexFlow:[`flexDirection`,`flexWrap`],font:`fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight`.split(` `),fontVariant:`fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition`.split(` `),gap:[`columnGap`,`rowGap`],grid:`gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows`.split(` `),gridArea:[`gridColumnEnd`,`gridColumnStart`,`gridRowEnd`,`gridRowStart`],gridColumn:[`gridColumnEnd`,`gridColumnStart`],gridColumnGap:[`columnGap`],gridGap:[`columnGap`,`rowGap`],gridRow:[`gridRowEnd`,`gridRowStart`],gridRowGap:[`rowGap`],gridTemplate:[`gridTemplateAreas`,`gridTemplateColumns`,`gridTemplateRows`],listStyle:[`listStyleImage`,`listStylePosition`,`listStyleType`],margin:[`marginBottom`,`marginLeft`,`marginRight`,`marginTop`],marker:[`markerEnd`,`markerMid`,`markerStart`],mask:`maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize`.split(` `),maskPosition:[`maskPositionX`,`maskPositionY`],outline:[`outlineColor`,`outlineStyle`,`outlineWidth`],overflow:[`overflowX`,`overflowY`],padding:[`paddingBottom`,`paddingLeft`,`paddingRight`,`paddingTop`],placeContent:[`alignContent`,`justifyContent`],placeItems:[`alignItems`,`justifyItems`],placeSelf:[`alignSelf`,`justifySelf`],textDecoration:[`textDecorationColor`,`textDecorationLine`,`textDecorationStyle`],textEmphasis:[`textEmphasisColor`,`textEmphasisStyle`],transition:[`transitionDelay`,`transitionDuration`,`transitionProperty`,`transitionTimingFunction`],wordWrap:[`overflowWrap`]},gm=/([A-Z])/g,_m=/^ms-/,vm=/^(?:webkit|moz|o)[A-Z]/,ym=/^-ms-/,bm=/-(.)/g,xm=/;\s*$/,Sm={},Cm={},wm=!1,Tm=!1,Em=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `)),Dm=`http://www.w3.org/1998/Math/MathML`,Om=`http://www.w3.org/2000/svg`,km=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Am={accept:`accept`,acceptcharset:`acceptCharset`,"accept-charset":`acceptCharset`,accesskey:`accessKey`,action:`action`,allowfullscreen:`allowFullScreen`,alt:`alt`,as:`as`,async:`async`,autocapitalize:`autoCapitalize`,autocomplete:`autoComplete`,autocorrect:`autoCorrect`,autofocus:`autoFocus`,autoplay:`autoPlay`,autosave:`autoSave`,capture:`capture`,cellpadding:`cellPadding`,cellspacing:`cellSpacing`,challenge:`challenge`,charset:`charSet`,checked:`checked`,children:`children`,cite:`cite`,class:`className`,classid:`classID`,classname:`className`,cols:`cols`,colspan:`colSpan`,content:`content`,contenteditable:`contentEditable`,contextmenu:`contextMenu`,controls:`controls`,controlslist:`controlsList`,coords:`coords`,crossorigin:`crossOrigin`,dangerouslysetinnerhtml:`dangerouslySetInnerHTML`,data:`data`,datetime:`dateTime`,default:`default`,defaultchecked:`defaultChecked`,defaultvalue:`defaultValue`,defer:`defer`,dir:`dir`,disabled:`disabled`,disablepictureinpicture:`disablePictureInPicture`,disableremoteplayback:`disableRemotePlayback`,download:`download`,draggable:`draggable`,enctype:`encType`,enterkeyhint:`enterKeyHint`,fetchpriority:`fetchPriority`,for:`htmlFor`,form:`form`,formmethod:`formMethod`,formaction:`formAction`,formenctype:`formEncType`,formnovalidate:`formNoValidate`,formtarget:`formTarget`,frameborder:`frameBorder`,headers:`headers`,height:`height`,hidden:`hidden`,high:`high`,href:`href`,hreflang:`hrefLang`,htmlfor:`htmlFor`,httpequiv:`httpEquiv`,"http-equiv":`httpEquiv`,icon:`icon`,id:`id`,imagesizes:`imageSizes`,imagesrcset:`imageSrcSet`,inert:`inert`,innerhtml:`innerHTML`,inputmode:`inputMode`,integrity:`integrity`,is:`is`,itemid:`itemID`,itemprop:`itemProp`,itemref:`itemRef`,itemscope:`itemScope`,itemtype:`itemType`,keyparams:`keyParams`,keytype:`keyType`,kind:`kind`,label:`label`,lang:`lang`,list:`list`,loop:`loop`,low:`low`,manifest:`manifest`,marginwidth:`marginWidth`,marginheight:`marginHeight`,max:`max`,maxlength:`maxLength`,media:`media`,mediagroup:`mediaGroup`,method:`method`,min:`min`,minlength:`minLength`,multiple:`multiple`,muted:`muted`,name:`name`,nomodule:`noModule`,nonce:`nonce`,novalidate:`noValidate`,open:`open`,optimum:`optimum`,pattern:`pattern`,placeholder:`placeholder`,playsinline:`playsInline`,poster:`poster`,preload:`preload`,profile:`profile`,radiogroup:`radioGroup`,readonly:`readOnly`,referrerpolicy:`referrerPolicy`,rel:`rel`,required:`required`,reversed:`reversed`,role:`role`,rows:`rows`,rowspan:`rowSpan`,sandbox:`sandbox`,scope:`scope`,scoped:`scoped`,scrolling:`scrolling`,seamless:`seamless`,selected:`selected`,shape:`shape`,size:`size`,sizes:`sizes`,span:`span`,spellcheck:`spellCheck`,src:`src`,srcdoc:`srcDoc`,srclang:`srcLang`,srcset:`srcSet`,start:`start`,step:`step`,style:`style`,summary:`summary`,tabindex:`tabIndex`,target:`target`,title:`title`,type:`type`,usemap:`useMap`,value:`value`,width:`width`,wmode:`wmode`,wrap:`wrap`,about:`about`,accentheight:`accentHeight`,"accent-height":`accentHeight`,accumulate:`accumulate`,additive:`additive`,alignmentbaseline:`alignmentBaseline`,"alignment-baseline":`alignmentBaseline`,allowreorder:`allowReorder`,alphabetic:`alphabetic`,amplitude:`amplitude`,arabicform:`arabicForm`,"arabic-form":`arabicForm`,ascent:`ascent`,attributename:`attributeName`,attributetype:`attributeType`,autoreverse:`autoReverse`,azimuth:`azimuth`,basefrequency:`baseFrequency`,baselineshift:`baselineShift`,"baseline-shift":`baselineShift`,baseprofile:`baseProfile`,bbox:`bbox`,begin:`begin`,bias:`bias`,by:`by`,calcmode:`calcMode`,capheight:`capHeight`,"cap-height":`capHeight`,clip:`clip`,clippath:`clipPath`,"clip-path":`clipPath`,clippathunits:`clipPathUnits`,cliprule:`clipRule`,"clip-rule":`clipRule`,color:`color`,colorinterpolation:`colorInterpolation`,"color-interpolation":`colorInterpolation`,colorinterpolationfilters:`colorInterpolationFilters`,"color-interpolation-filters":`colorInterpolationFilters`,colorprofile:`colorProfile`,"color-profile":`colorProfile`,colorrendering:`colorRendering`,"color-rendering":`colorRendering`,contentscripttype:`contentScriptType`,contentstyletype:`contentStyleType`,cursor:`cursor`,cx:`cx`,cy:`cy`,d:`d`,datatype:`datatype`,decelerate:`decelerate`,descent:`descent`,diffuseconstant:`diffuseConstant`,direction:`direction`,display:`display`,divisor:`divisor`,dominantbaseline:`dominantBaseline`,"dominant-baseline":`dominantBaseline`,dur:`dur`,dx:`dx`,dy:`dy`,edgemode:`edgeMode`,elevation:`elevation`,enablebackground:`enableBackground`,"enable-background":`enableBackground`,end:`end`,exponent:`exponent`,externalresourcesrequired:`externalResourcesRequired`,fill:`fill`,fillopacity:`fillOpacity`,"fill-opacity":`fillOpacity`,fillrule:`fillRule`,"fill-rule":`fillRule`,filter:`filter`,filterres:`filterRes`,filterunits:`filterUnits`,floodopacity:`floodOpacity`,"flood-opacity":`floodOpacity`,floodcolor:`floodColor`,"flood-color":`floodColor`,focusable:`focusable`,fontfamily:`fontFamily`,"font-family":`fontFamily`,fontsize:`fontSize`,"font-size":`fontSize`,fontsizeadjust:`fontSizeAdjust`,"font-size-adjust":`fontSizeAdjust`,fontstretch:`fontStretch`,"font-stretch":`fontStretch`,fontstyle:`fontStyle`,"font-style":`fontStyle`,fontvariant:`fontVariant`,"font-variant":`fontVariant`,fontweight:`fontWeight`,"font-weight":`fontWeight`,format:`format`,from:`from`,fx:`fx`,fy:`fy`,g1:`g1`,g2:`g2`,glyphname:`glyphName`,"glyph-name":`glyphName`,glyphorientationhorizontal:`glyphOrientationHorizontal`,"glyph-orientation-horizontal":`glyphOrientationHorizontal`,glyphorientationvertical:`glyphOrientationVertical`,"glyph-orientation-vertical":`glyphOrientationVertical`,glyphref:`glyphRef`,gradienttransform:`gradientTransform`,gradientunits:`gradientUnits`,hanging:`hanging`,horizadvx:`horizAdvX`,"horiz-adv-x":`horizAdvX`,horizoriginx:`horizOriginX`,"horiz-origin-x":`horizOriginX`,ideographic:`ideographic`,imagerendering:`imageRendering`,"image-rendering":`imageRendering`,in2:`in2`,in:`in`,inlist:`inlist`,intercept:`intercept`,k1:`k1`,k2:`k2`,k3:`k3`,k4:`k4`,k:`k`,kernelmatrix:`kernelMatrix`,kernelunitlength:`kernelUnitLength`,kerning:`kerning`,keypoints:`keyPoints`,keysplines:`keySplines`,keytimes:`keyTimes`,lengthadjust:`lengthAdjust`,letterspacing:`letterSpacing`,"letter-spacing":`letterSpacing`,lightingcolor:`lightingColor`,"lighting-color":`lightingColor`,limitingconeangle:`limitingConeAngle`,local:`local`,markerend:`markerEnd`,"marker-end":`markerEnd`,markerheight:`markerHeight`,markermid:`markerMid`,"marker-mid":`markerMid`,markerstart:`markerStart`,"marker-start":`markerStart`,markerunits:`markerUnits`,markerwidth:`markerWidth`,mask:`mask`,maskcontentunits:`maskContentUnits`,maskunits:`maskUnits`,mathematical:`mathematical`,mode:`mode`,numoctaves:`numOctaves`,offset:`offset`,opacity:`opacity`,operator:`operator`,order:`order`,orient:`orient`,orientation:`orientation`,origin:`origin`,overflow:`overflow`,overlineposition:`overlinePosition`,"overline-position":`overlinePosition`,overlinethickness:`overlineThickness`,"overline-thickness":`overlineThickness`,paintorder:`paintOrder`,"paint-order":`paintOrder`,panose1:`panose1`,"panose-1":`panose1`,pathlength:`pathLength`,patterncontentunits:`patternContentUnits`,patterntransform:`patternTransform`,patternunits:`patternUnits`,pointerevents:`pointerEvents`,"pointer-events":`pointerEvents`,points:`points`,pointsatx:`pointsAtX`,pointsaty:`pointsAtY`,pointsatz:`pointsAtZ`,popover:`popover`,popovertarget:`popoverTarget`,popovertargetaction:`popoverTargetAction`,prefix:`prefix`,preservealpha:`preserveAlpha`,preserveaspectratio:`preserveAspectRatio`,primitiveunits:`primitiveUnits`,property:`property`,r:`r`,radius:`radius`,refx:`refX`,refy:`refY`,renderingintent:`renderingIntent`,"rendering-intent":`renderingIntent`,repeatcount:`repeatCount`,repeatdur:`repeatDur`,requiredextensions:`requiredExtensions`,requiredfeatures:`requiredFeatures`,resource:`resource`,restart:`restart`,result:`result`,results:`results`,rotate:`rotate`,rx:`rx`,ry:`ry`,scale:`scale`,security:`security`,seed:`seed`,shaperendering:`shapeRendering`,"shape-rendering":`shapeRendering`,slope:`slope`,spacing:`spacing`,specularconstant:`specularConstant`,specularexponent:`specularExponent`,speed:`speed`,spreadmethod:`spreadMethod`,startoffset:`startOffset`,stddeviation:`stdDeviation`,stemh:`stemh`,stemv:`stemv`,stitchtiles:`stitchTiles`,stopcolor:`stopColor`,"stop-color":`stopColor`,stopopacity:`stopOpacity`,"stop-opacity":`stopOpacity`,strikethroughposition:`strikethroughPosition`,"strikethrough-position":`strikethroughPosition`,strikethroughthickness:`strikethroughThickness`,"strikethrough-thickness":`strikethroughThickness`,string:`string`,stroke:`stroke`,strokedasharray:`strokeDasharray`,"stroke-dasharray":`strokeDasharray`,strokedashoffset:`strokeDashoffset`,"stroke-dashoffset":`strokeDashoffset`,strokelinecap:`strokeLinecap`,"stroke-linecap":`strokeLinecap`,strokelinejoin:`strokeLinejoin`,"stroke-linejoin":`strokeLinejoin`,strokemiterlimit:`strokeMiterlimit`,"stroke-miterlimit":`strokeMiterlimit`,strokewidth:`strokeWidth`,"stroke-width":`strokeWidth`,strokeopacity:`strokeOpacity`,"stroke-opacity":`strokeOpacity`,suppresscontenteditablewarning:`suppressContentEditableWarning`,suppresshydrationwarning:`suppressHydrationWarning`,surfacescale:`surfaceScale`,systemlanguage:`systemLanguage`,tablevalues:`tableValues`,targetx:`targetX`,targety:`targetY`,textanchor:`textAnchor`,"text-anchor":`textAnchor`,textdecoration:`textDecoration`,"text-decoration":`textDecoration`,textlength:`textLength`,textrendering:`textRendering`,"text-rendering":`textRendering`,to:`to`,transform:`transform`,transformorigin:`transformOrigin`,"transform-origin":`transformOrigin`,typeof:`typeof`,u1:`u1`,u2:`u2`,underlineposition:`underlinePosition`,"underline-position":`underlinePosition`,underlinethickness:`underlineThickness`,"underline-thickness":`underlineThickness`,unicode:`unicode`,unicodebidi:`unicodeBidi`,"unicode-bidi":`unicodeBidi`,unicoderange:`unicodeRange`,"unicode-range":`unicodeRange`,unitsperem:`unitsPerEm`,"units-per-em":`unitsPerEm`,unselectable:`unselectable`,valphabetic:`vAlphabetic`,"v-alphabetic":`vAlphabetic`,values:`values`,vectoreffect:`vectorEffect`,"vector-effect":`vectorEffect`,version:`version`,vertadvy:`vertAdvY`,"vert-adv-y":`vertAdvY`,vertoriginx:`vertOriginX`,"vert-origin-x":`vertOriginX`,vertoriginy:`vertOriginY`,"vert-origin-y":`vertOriginY`,vhanging:`vHanging`,"v-hanging":`vHanging`,videographic:`vIdeographic`,"v-ideographic":`vIdeographic`,viewbox:`viewBox`,viewtarget:`viewTarget`,visibility:`visibility`,vmathematical:`vMathematical`,"v-mathematical":`vMathematical`,vocab:`vocab`,widths:`widths`,wordspacing:`wordSpacing`,"word-spacing":`wordSpacing`,writingmode:`writingMode`,"writing-mode":`writingMode`,x1:`x1`,x2:`x2`,x:`x`,xchannelselector:`xChannelSelector`,xheight:`xHeight`,"x-height":`xHeight`,xlinkactuate:`xlinkActuate`,"xlink:actuate":`xlinkActuate`,xlinkarcrole:`xlinkArcrole`,"xlink:arcrole":`xlinkArcrole`,xlinkhref:`xlinkHref`,"xlink:href":`xlinkHref`,xlinkrole:`xlinkRole`,"xlink:role":`xlinkRole`,xlinkshow:`xlinkShow`,"xlink:show":`xlinkShow`,xlinktitle:`xlinkTitle`,"xlink:title":`xlinkTitle`,xlinktype:`xlinkType`,"xlink:type":`xlinkType`,xmlbase:`xmlBase`,"xml:base":`xmlBase`,xmllang:`xmlLang`,"xml:lang":`xmlLang`,xmlns:`xmlns`,"xml:space":`xmlSpace`,xmlnsxlink:`xmlnsXlink`,"xmlns:xlink":`xmlnsXlink`,xmlspace:`xmlSpace`,y1:`y1`,y2:`y2`,y:`y`,ychannelselector:`yChannelSelector`,z:`z`,zoomandpan:`zoomAndPan`},jm={"aria-current":0,"aria-description":0,"aria-details":0,"aria-disabled":0,"aria-hidden":0,"aria-invalid":0,"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,"aria-dropeffect":0,"aria-grabbed":0,"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0,"aria-braillelabel":0,"aria-brailleroledescription":0,"aria-colindextext":0,"aria-rowindextext":0},Mm={},Nm=RegExp(`^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Pm=RegExp(`^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Fm=!1,Im={},Lm=/^on./,Rm=/^on[^A-Z]/,zm=RegExp(`^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Bm=RegExp(`^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Vm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i,Hm=null,Um=null,Wm=null,Gm=!1,Km=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),qm=!1;if(Km)try{var Jm={};Object.defineProperty(Jm,`passive`,{get:function(){qm=!0}}),window.addEventListener(`test`,Jm,Jm),window.removeEventListener(`test`,Jm,Jm)}catch{qm=!1}var Ym=null,Xm=null,Zm=null,Qm={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$m=H(Qm),eh=xf({},Qm,{view:0,detail:0}),th=H(eh),nh,rh,ih,ah=xf({},eh,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:on,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==ih&&(ih&&e.type===`mousemove`?(nh=e.screenX-ih.screenX,rh=e.screenY-ih.screenY):rh=nh=0,ih=e),nh)},movementY:function(e){return`movementY`in e?e.movementY:rh}}),oh=H(ah),sh=H(xf({},ah,{dataTransfer:0})),ch=H(xf({},eh,{relatedTarget:0})),lh=H(xf({},Qm,{animationName:0,elapsedTime:0,pseudoElement:0})),uh=H(xf({},Qm,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),dh=H(xf({},Qm,{data:0})),fh=dh,ph={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},mh={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},hh={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`},gh=H(xf({},eh,{key:function(e){if(e.key){var t=ph[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=nn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?mh[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:on,charCode:function(e){return e.type===`keypress`?nn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?nn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),_h=H(xf({},ah,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),vh=H(xf({},eh,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:on})),yh=H(xf({},Qm,{propertyName:0,elapsedTime:0,pseudoElement:0})),bh=H(xf({},ah,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),xh=H(xf({},Qm,{newState:0,oldState:0})),Sh=[9,13,27,32],Ch=229,wh=Km&&`CompositionEvent`in window,Th=null;Km&&`documentMode`in document&&(Th=document.documentMode);var Eh=Km&&`TextEvent`in window&&!Th,Dh=Km&&(!wh||Th&&8<Th&&11>=Th),Oh=32,kh=String.fromCharCode(Oh),Ah=!1,jh=!1,Mh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},Nh=null,Ph=null,Fh=!1;Km&&(Fh=fn(`input`)&&(!document.documentMode||9<document.documentMode));var Ih=typeof Object.is==`function`?Object.is:Cn,Lh=Km&&`documentMode`in document&&11>=document.documentMode,Rh=null,zh=null,Bh=null,Vh=!1,Hh={animationend:jn(`Animation`,`AnimationEnd`),animationiteration:jn(`Animation`,`AnimationIteration`),animationstart:jn(`Animation`,`AnimationStart`),transitionrun:jn(`Transition`,`TransitionRun`),transitionstart:jn(`Transition`,`TransitionStart`),transitioncancel:jn(`Transition`,`TransitionCancel`),transitionend:jn(`Transition`,`TransitionEnd`)},Uh={},Wh={};Km&&(Wh=document.createElement(`div`).style,`AnimationEvent`in window||(delete Hh.animationend.animation,delete Hh.animationiteration.animation,delete Hh.animationstart.animation),`TransitionEvent`in window||delete Hh.transitionend.transition);var Gh=Mn(`animationend`),Kh=Mn(`animationiteration`),qh=Mn(`animationstart`),Jh=Mn(`transitionrun`),Yh=Mn(`transitionstart`),Xh=Mn(`transitioncancel`),Zh=Mn(`transitionend`),Qh=new Map,$h=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);$h.push(`scrollEnd`);var eg=0;if(typeof performance==`object`&&typeof performance.now==`function`)var tg=performance,ng=function(){return tg.now()};else{var rg=Date;ng=function(){return rg.now()}}var ig=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ag=`This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.`,og=0,sg=1,cg=2,lg=3,ug=`–\xA0`,dg=`+\xA0`,fg=` \xA0`,pg=typeof console<`u`&&typeof console.timeStamp==`function`&&typeof performance<`u`&&typeof performance.measure==`function`,mg=`Components ⚛`,hg=`Scheduler ⚛`,gg=`Blocking`,_g=!1,vg={color:`primary`,properties:null,tooltipText:``,track:mg},yg={start:-0,end:-0,detail:{devtools:vg}},bg=[`Changed Props`,``],xg=`This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.`,Sg=[`Changed Props`,xg],Cg=1,wg=2,Tg=[],Eg=0,Dg=0,Og={};Object.freeze(Og);var kg=null,Ag=null,X=0,jg=1,Mg=2,Ng=8,Pg=16,Fg=32,Ig=!1;try{var Lg=Object.preventExtensions({});new Map([[Lg,null]]),new Set([Lg])}catch{Ig=!0}var Rg=new WeakMap,zg=[],Bg=0,Vg=null,Hg=0,Ug=[],Wg=0,Gg=null,Kg=1,qg=``,Jg=null,Yg=null,Xg=!1,Zg=!1,Qg=null,$g=null,e_=!1,t_=Error(`Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React.`),n_=ie(null),r_=ie(null),i_={},a_=null,o_=null,s_=!1,c_=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},l_=vf.unstable_scheduleCallback,u_=vf.unstable_NormalPriority,d_={$$typeof:kf,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0,_currentRenderer:null,_currentRenderer2:null},f_=vf.unstable_now,p_=console.createTask?console.createTask:function(){return null},m_=1,h_=2,g_=-0,__=-0,v_=-0,y_=null,b_=-1.1,x_=-0,S_=-0,Z=-1.1,Q=-1.1,C_=null,w_=!1,T_=-0,E_=-1.1,D_=null,O_=0,k_=null,A_=null,j_=-1.1,M_=null,N_=-1.1,P_=-1.1,F_=-0,I_=-1.1,L_=-1.1,R_=0,z_=null,B_=null,V_=null,H_=-1.1,U_=null,W_=-1.1,G_=-1.1,K_=-0,q_=-0,J_=0,Y_=null,X_=0,Z_=-1.1,Q_=!1,$_=!1,ev=null,tv=0,nv=0,rv=null,iv=Y.S;Y.S=function(e,t){if(vx=mp(),typeof t==`object`&&t&&typeof t.then==`function`){if(0>I_&&0>L_){I_=f_();var n=Iu(),r=Fu();(n!==W_||r!==U_)&&(W_=-1.1),H_=n,U_=r}hi(e,t)}iv!==null&&iv(e,t)};var av=ie(null),ov={recordUnsafeLifecycleWarnings:function(){},flushPendingUnsafeLifecycleWarnings:function(){},recordLegacyContextWarning:function(){},flushLegacyContextWarning:function(){},discardPendingWarnings:function(){}},sv=[],cv=[],lv=[],uv=[],dv=[],fv=[],pv=new Set;ov.recordUnsafeLifecycleWarnings=function(e,t){pv.has(e.type)||(typeof t.componentWillMount==`function`&&!0!==t.componentWillMount.__suppressDeprecationWarning&&sv.push(e),e.mode&Ng&&typeof t.UNSAFE_componentWillMount==`function`&&cv.push(e),typeof t.componentWillReceiveProps==`function`&&!0!==t.componentWillReceiveProps.__suppressDeprecationWarning&&lv.push(e),e.mode&Ng&&typeof t.UNSAFE_componentWillReceiveProps==`function`&&uv.push(e),typeof t.componentWillUpdate==`function`&&!0!==t.componentWillUpdate.__suppressDeprecationWarning&&dv.push(e),e.mode&Ng&&typeof t.UNSAFE_componentWillUpdate==`function`&&fv.push(e))},ov.flushPendingUnsafeLifecycleWarnings=function(){var e=new Set;0<sv.length&&(sv.forEach(function(t){e.add(E(t)||`Component`),pv.add(t.type)}),sv=[]);var t=new Set;0<cv.length&&(cv.forEach(function(e){t.add(E(e)||`Component`),pv.add(e.type)}),cv=[]);var n=new Set;0<lv.length&&(lv.forEach(function(e){n.add(E(e)||`Component`),pv.add(e.type)}),lv=[]);var r=new Set;0<uv.length&&(uv.forEach(function(e){r.add(E(e)||`Component`),pv.add(e.type)}),uv=[]);var i=new Set;0<dv.length&&(dv.forEach(function(e){i.add(E(e)||`Component`),pv.add(e.type)}),dv=[]);var a=new Set;if(0<fv.length&&(fv.forEach(function(e){a.add(E(e)||`Component`),pv.add(e.type)}),fv=[]),0<t.size){var o=p(t);console.error(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,o)}0<r.size&&(o=p(r),console.error(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,o)),0<a.size&&(o=p(a),console.error(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,o)),0<e.size&&(o=p(e),console.warn(`componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,o)),0<n.size&&(o=p(n),console.warn(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,o)),0<i.size&&(o=p(i),console.warn(`componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,o))};var mv=new Map,hv=new Set;ov.recordLegacyContextWarning=function(e,t){for(var n=null,r=e;r!==null;)r.mode&Ng&&(n=r),r=r.return;n===null?console.error(`Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.`):!hv.has(e.type)&&(r=mv.get(n),e.type.contextTypes!=null||e.type.childContextTypes!=null||t!==null&&typeof t.getChildContext==`function`)&&(r===void 0&&(r=[],mv.set(n,r)),r.push(e))},ov.flushLegacyContextWarning=function(){mv.forEach(function(e){if(e.length!==0){var t=e[0],n=new Set;e.forEach(function(e){n.add(E(e)||`Component`),hv.add(e.type)});var r=p(n);j(t,function(){console.error(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,r)})}})},ov.discardPendingWarnings=function(){sv=[],cv=[],lv=[],uv=[],dv=[],fv=[],mv=new Map};var gv={react_stack_bottom_frame:function(e,t,n){var r=cp;cp=!0;try{return e(t,n)}finally{cp=r}}},_v=gv.react_stack_bottom_frame.bind(gv),vv={react_stack_bottom_frame:function(e){var t=cp;cp=!0;try{return e.render()}finally{cp=t}}},yv=vv.react_stack_bottom_frame.bind(vv),bv={react_stack_bottom_frame:function(e,t){try{t.componentDidMount()}catch(t){wl(e,e.return,t)}}},xv=bv.react_stack_bottom_frame.bind(bv),Sv={react_stack_bottom_frame:function(e,t,n,r,i){try{t.componentDidUpdate(n,r,i)}catch(t){wl(e,e.return,t)}}},Cv=Sv.react_stack_bottom_frame.bind(Sv),wv={react_stack_bottom_frame:function(e,t){var n=t.stack;e.componentDidCatch(t.value,{componentStack:n===null?``:n})}},Tv=wv.react_stack_bottom_frame.bind(wv),Ev={react_stack_bottom_frame:function(e,t,n){try{n.componentWillUnmount()}catch(n){wl(e,t,n)}}},Dv=Ev.react_stack_bottom_frame.bind(Ev),Ov={react_stack_bottom_frame:function(e){var t=e.create;return e=e.inst,t=t(),e.destroy=t}},kv=Ov.react_stack_bottom_frame.bind(Ov),Av={react_stack_bottom_frame:function(e,t,n){try{n()}catch(n){wl(e,t,n)}}},jv=Av.react_stack_bottom_frame.bind(Av),Mv={react_stack_bottom_frame:function(e){var t=e._init;return t(e._payload)}},Nv=Mv.react_stack_bottom_frame.bind(Mv),Pv=Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."),Fv=Error(`Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React.`),Iv=Error("Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."),Lv={then:function(){console.error(`Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.`)}},Rv=null,zv=!1,Bv=null,Vv=0,Hv=null,Uv,Wv=Uv=!1,Gv={},Kv={},qv={};f=function(e,t,n){if(typeof n==`object`&&n&&n._store&&(!n._store.validated&&n.key==null||n._store.validated===2)){if(typeof n._store!=`object`)throw Error(`React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.`);n._store.validated=1;var r=E(e),i=r||`null`;if(!Gv[i]){Gv[i]=!0,n=n._owner,e=e._debugOwner;var a=``;e&&typeof e.tag==`number`&&(i=E(e))&&(a=`

Check the render method of \``+i+"`."),a||r&&(a=`

Check the top-level render call using <`+r+`>.`);var o=``;n!=null&&e!==n&&(r=null,typeof n.tag==`number`?r=E(n):typeof n.name==`string`&&(r=n.name),r&&(o=` It was passed a child from `+r+`.`)),j(t,function(){console.error(`Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.`,a,o)})}}};var Jv=Li(!0),Yv=Li(!1),Xv=0,Zv=1,Qv=2,$v=3,ey=!1,ty=!1,ny=null,ry=!1,iy=ie(null),ay=ie(0),oy=ie(null),sy=null,cy=1,ly=2,uy=ie(0),dy=0,fy=1,py=2,my=4,hy=8,gy,_y=new Set,vy=new Set,yy=new Set,by=new Set,xy=0,Sy=null,Cy=null,wy=null,Ty=!1,Ey=!1,Dy=!1,Oy=0,ky=0,Ay=null,jy=0,My=25,$=null,Ny=null,Py=-1,Fy=!1,Iy={readContext:W,use:ya,useCallback:oa,useContext:oa,useEffect:oa,useImperativeHandle:oa,useLayoutEffect:oa,useInsertionEffect:oa,useMemo:oa,useReducer:oa,useRef:oa,useState:oa,useDebugValue:oa,useDeferredValue:oa,useTransition:oa,useSyncExternalStore:oa,useId:oa,useHostTransitionStatus:oa,useFormState:oa,useActionState:oa,useOptimistic:oa,useMemoCache:oa,useCacheRefresh:oa};Iy.useEffectEvent=oa;var Ly=null,Ry=null,zy=null,By=null,Vy=null,Hy=null,Uy=null;Ly={readContext:function(e){return W(e)},use:ya,useCallback:function(e,t){return $=`useCallback`,q(),ia(t),lo(e,t)},useContext:function(e){return $=`useContext`,q(),W(e)},useEffect:function(e,t){return $=`useEffect`,q(),ia(t),to(e,t)},useImperativeHandle:function(e,t,n){return $=`useImperativeHandle`,q(),ia(n),so(e,t,n)},useInsertionEffect:function(e,t){$=`useInsertionEffect`,q(),ia(t),$a(4,py,e,t)},useLayoutEffect:function(e,t){return $=`useLayoutEffect`,q(),ia(t),ao(e,t)},useMemo:function(e,t){$=`useMemo`,q(),ia(t);var n=Y.H;Y.H=Vy;try{return fo(e,t)}finally{Y.H=n}},useReducer:function(e,t,n){$=`useReducer`,q();var r=Y.H;Y.H=Vy;try{return Sa(e,t,n)}finally{Y.H=r}},useRef:function(e){return $=`useRef`,q(),Qa(e)},useState:function(e){$=`useState`,q();var t=Y.H;Y.H=Vy;try{return Pa(e)}finally{Y.H=t}},useDebugValue:function(){$=`useDebugValue`,q()},useDeferredValue:function(e,t){return $=`useDeferredValue`,q(),mo(e,t)},useTransition:function(){return $=`useTransition`,q(),wo()},useSyncExternalStore:function(e,t,n){return $=`useSyncExternalStore`,q(),Ea(e,t,n)},useId:function(){return $=`useId`,q(),Oo()},useFormState:function(e,t){return $=`useFormState`,q(),aa(),Ka(e,t)},useActionState:function(e,t){return $=`useActionState`,q(),Ka(e,t)},useOptimistic:function(e){return $=`useOptimistic`,q(),Fa(e)},useHostTransitionStatus:Do,useMemoCache:ba,useCacheRefresh:function(){return $=`useCacheRefresh`,q(),ko()},useEffectEvent:function(e){return $=`useEffectEvent`,q(),ro(e)}},Ry={readContext:function(e){return W(e)},use:ya,useCallback:function(e,t){return $=`useCallback`,J(),lo(e,t)},useContext:function(e){return $=`useContext`,J(),W(e)},useEffect:function(e,t){return $=`useEffect`,J(),to(e,t)},useImperativeHandle:function(e,t,n){return $=`useImperativeHandle`,J(),so(e,t,n)},useInsertionEffect:function(e,t){$=`useInsertionEffect`,J(),$a(4,py,e,t)},useLayoutEffect:function(e,t){return $=`useLayoutEffect`,J(),ao(e,t)},useMemo:function(e,t){$=`useMemo`,J();var n=Y.H;Y.H=Vy;try{return fo(e,t)}finally{Y.H=n}},useReducer:function(e,t,n){$=`useReducer`,J();var r=Y.H;Y.H=Vy;try{return Sa(e,t,n)}finally{Y.H=r}},useRef:function(e){return $=`useRef`,J(),Qa(e)},useState:function(e){$=`useState`,J();var t=Y.H;Y.H=Vy;try{return Pa(e)}finally{Y.H=t}},useDebugValue:function(){$=`useDebugValue`,J()},useDeferredValue:function(e,t){return $=`useDeferredValue`,J(),mo(e,t)},useTransition:function(){return $=`useTransition`,J(),wo()},useSyncExternalStore:function(e,t,n){return $=`useSyncExternalStore`,J(),Ea(e,t,n)},useId:function(){return $=`useId`,J(),Oo()},useActionState:function(e,t){return $=`useActionState`,J(),Ka(e,t)},useFormState:function(e,t){return $=`useFormState`,J(),aa(),Ka(e,t)},useOptimistic:function(e){return $=`useOptimistic`,J(),Fa(e)},useHostTransitionStatus:Do,useMemoCache:ba,useCacheRefresh:function(){return $=`useCacheRefresh`,J(),ko()},useEffectEvent:function(e){return $=`useEffectEvent`,J(),ro(e)}},zy={readContext:function(e){return W(e)},use:ya,useCallback:function(e,t){return $=`useCallback`,J(),uo(e,t)},useContext:function(e){return $=`useContext`,J(),W(e)},useEffect:function(e,t){$=`useEffect`,J(),eo(2048,hy,e,t)},useImperativeHandle:function(e,t,n){return $=`useImperativeHandle`,J(),co(e,t,n)},useInsertionEffect:function(e,t){return $=`useInsertionEffect`,J(),eo(4,py,e,t)},useLayoutEffect:function(e,t){return $=`useLayoutEffect`,J(),eo(4,my,e,t)},useMemo:function(e,t){$=`useMemo`,J();var n=Y.H;Y.H=Hy;try{return po(e,t)}finally{Y.H=n}},useReducer:function(e,t,n){$=`useReducer`,J();var r=Y.H;Y.H=Hy;try{return Ca(e,t,n)}finally{Y.H=r}},useRef:function(){return $=`useRef`,J(),ga().memoizedState},useState:function(){$=`useState`,J();var e=Y.H;Y.H=Hy;try{return Ca(xa)}finally{Y.H=e}},useDebugValue:function(){$=`useDebugValue`,J()},useDeferredValue:function(e,t){return $=`useDeferredValue`,J(),ho(e,t)},useTransition:function(){return $=`useTransition`,J(),To()},useSyncExternalStore:function(e,t,n){return $=`useSyncExternalStore`,J(),Da(e,t,n)},useId:function(){return $=`useId`,J(),ga().memoizedState},useFormState:function(e){return $=`useFormState`,J(),aa(),qa(e)},useActionState:function(e){return $=`useActionState`,J(),qa(e)},useOptimistic:function(e,t){return $=`useOptimistic`,J(),Ia(e,t)},useHostTransitionStatus:Do,useMemoCache:ba,useCacheRefresh:function(){return $=`useCacheRefresh`,J(),ga().memoizedState},useEffectEvent:function(e){return $=`useEffectEvent`,J(),io(e)}},By={readContext:function(e){return W(e)},use:ya,useCallback:function(e,t){return $=`useCallback`,J(),uo(e,t)},useContext:function(e){return $=`useContext`,J(),W(e)},useEffect:function(e,t){$=`useEffect`,J(),eo(2048,hy,e,t)},useImperativeHandle:function(e,t,n){return $=`useImperativeHandle`,J(),co(e,t,n)},useInsertionEffect:function(e,t){return $=`useInsertionEffect`,J(),eo(4,py,e,t)},useLayoutEffect:function(e,t){return $=`useLayoutEffect`,J(),eo(4,my,e,t)},useMemo:function(e,t){$=`useMemo`,J();var n=Y.H;Y.H=Uy;try{return po(e,t)}finally{Y.H=n}},useReducer:function(e,t,n){$=`useReducer`,J();var r=Y.H;Y.H=Uy;try{return Ta(e,t,n)}finally{Y.H=r}},useRef:function(){return $=`useRef`,J(),ga().memoizedState},useState:function(){$=`useState`,J();var e=Y.H;Y.H=Uy;try{return Ta(xa)}finally{Y.H=e}},useDebugValue:function(){$=`useDebugValue`,J()},useDeferredValue:function(e,t){return $=`useDeferredValue`,J(),go(e,t)},useTransition:function(){return $=`useTransition`,J(),Eo()},useSyncExternalStore:function(e,t,n){return $=`useSyncExternalStore`,J(),Da(e,t,n)},useId:function(){return $=`useId`,J(),ga().memoizedState},useFormState:function(e){return $=`useFormState`,J(),aa(),Xa(e)},useActionState:function(e){return $=`useActionState`,J(),Xa(e)},useOptimistic:function(e,t){return $=`useOptimistic`,J(),Ra(e,t)},useHostTransitionStatus:Do,useMemoCache:ba,useCacheRefresh:function(){return $=`useCacheRefresh`,J(),ga().memoizedState},useEffectEvent:function(e){return $=`useEffectEvent`,J(),io(e)}},Vy={readContext:function(e){return l(),W(e)},use:function(e){return c(),ya(e)},useCallback:function(e,t){return $=`useCallback`,c(),q(),lo(e,t)},useContext:function(e){return $=`useContext`,c(),q(),W(e)},useEffect:function(e,t){return $=`useEffect`,c(),q(),to(e,t)},useImperativeHandle:function(e,t,n){return $=`useImperativeHandle`,c(),q(),so(e,t,n)},useInsertionEffect:function(e,t){$=`useInsertionEffect`,c(),q(),$a(4,py,e,t)},useLayoutEffect:function(e,t){return $=`useLayoutEffect`,c(),q(),ao(e,t)},useMemo:function(e,t){$=`useMemo`,c(),q();var n=Y.H;Y.H=Vy;try{return fo(e,t)}finally{Y.H=n}},useReducer:function(e,t,n){$=`useReducer`,c(),q();var r=Y.H;Y.H=Vy;try{return Sa(e,t,n)}finally{Y.H=r}},useRef:function(e){return $=`useRef`,c(),q(),Qa(e)},useState:function(e){$=`useState`,c(),q();var t=Y.H;Y.H=Vy;try{return Pa(e)}finally{Y.H=t}},useDebugValue:function(){$=`useDebugValue`,c(),q()},useDeferredValue:function(e,t){return $=`useDeferredValue`,c(),q(),mo(e,t)},useTransition:function(){return $=`useTransition`,c(),q(),wo()},useSyncExternalStore:function(e,t,n){return $=`useSyncExternalStore`,c(),q(),Ea(e,t,n)},useId:function(){return $=`useId`,c(),q(),Oo()},useFormState:function(e,t){return $=`useFormState`,c(),q(),Ka(e,t)},useActionState:function(e,t){return $=`useActionState`,c(),q(),Ka(e,t)},useOptimistic:function(e){return $=`useOptimistic`,c(),q(),Fa(e)},useMemoCache:function(e){return c(),ba(e)},useHostTransitionStatus:Do,useCacheRefresh:function(){return $=`useCacheRefresh`,q(),ko()},useEffectEvent:function(e){return $=`useEffectEvent`,c(),q(),ro(e)}},Hy={readContext:function(e){return l(),W(e)},use:function(e){return c(),ya(e)},useCallback:function(e,t){return $=`useCallback`,c(),J(),uo(e,t)},useContext:function(e){return $=`useContext`,c(),J(),W(e)},useEffect:function(e,t){$=`useEffect`,c(),J(),eo(2048,hy,e,t)},useImperativeHandle:function(e,t,n){return $=`useImperativeHandle`,c(),J(),co(e,t,n)},useInsertionEffect:function(e,t){return $=`useInsertionEffect`,c(),J(),eo(4,py,e,t)},useLayoutEffect:function(e,t){return $=`useLayoutEffect`,c(),J(),eo(4,my,e,t)},useMemo:function(e,t){$=`useMemo`,c(),J();var n=Y.H;Y.H=Hy;try{return po(e,t)}finally{Y.H=n}},useReducer:function(e,t,n){$=`useReducer`,c(),J();var r=Y.H;Y.H=Hy;try{return Ca(e,t,n)}finally{Y.H=r}},useRef:function(){return $=`useRef`,c(),J(),ga().memoizedState},useState:function(){$=`useState`,c(),J();var e=Y.H;Y.H=Hy;try{return Ca(xa)}finally{Y.H=e}},useDebugValue:function(){$=`useDebugValue`,c(),J()},useDeferredValue:function(e,t){return $=`useDeferredValue`,c(),J(),ho(e,t)},useTransition:function(){return $=`useTransition`,c(),J(),To()},useSyncExternalStore:function(e,t,n){return $=`useSyncExternalStore`,c(),J(),Da(e,t,n)},useId:function(){return $=`useId`,c(),J(),ga().memoizedState},useFormState:function(e){return $=`useFormState`,c(),J(),qa(e)},useActionState:function(e){return $=`useActionState`,c(),J(),qa(e)},useOptimistic:function(e,t){return $=`useOptimistic`,c(),J(),Ia(e,t)},useMemoCache:function(e){return c(),ba(e)},useHostTransitionStatus:Do,useCacheRefresh:function(){return $=`useCacheRefresh`,J(),ga().memoizedState},useEffectEvent:function(e){return $=`useEffectEvent`,c(),J(),io(e)}},Uy={readContext:function(e){return l(),W(e)},use:function(e){return c(),ya(e)},useCallback:function(e,t){return $=`useCallback`,c(),J(),uo(e,t)},useContext:function(e){return $=`useContext`,c(),J(),W(e)},useEffect:function(e,t){$=`useEffect`,c(),J(),eo(2048,hy,e,t)},useImperativeHandle:function(e,t,n){return $=`useImperativeHandle`,c(),J(),co(e,t,n)},useInsertionEffect:function(e,t){return $=`useInsertionEffect`,c(),J(),eo(4,py,e,t)},useLayoutEffect:function(e,t){return $=`useLayoutEffect`,c(),J(),eo(4,my,e,t)},useMemo:function(e,t){$=`useMemo`,c(),J();var n=Y.H;Y.H=Hy;try{return po(e,t)}finally{Y.H=n}},useReducer:function(e,t,n){$=`useReducer`,c(),J();var r=Y.H;Y.H=Hy;try{return Ta(e,t,n)}finally{Y.H=r}},useRef:function(){return $=`useRef`,c(),J(),ga().memoizedState},useState:function(){$=`useState`,c(),J();var e=Y.H;Y.H=Hy;try{return Ta(xa)}finally{Y.H=e}},useDebugValue:function(){$=`useDebugValue`,c(),J()},useDeferredValue:function(e,t){return $=`useDeferredValue`,c(),J(),go(e,t)},useTransition:function(){return $=`useTransition`,c(),J(),Eo()},useSyncExternalStore:function(e,t,n){return $=`useSyncExternalStore`,c(),J(),Da(e,t,n)},useId:function(){return $=`useId`,c(),J(),ga().memoizedState},useFormState:function(e){return $=`useFormState`,c(),J(),Xa(e)},useActionState:function(e){return $=`useActionState`,c(),J(),Xa(e)},useOptimistic:function(e,t){return $=`useOptimistic`,c(),J(),Ra(e,t)},useMemoCache:function(e){return c(),ba(e)},useHostTransitionStatus:Do,useCacheRefresh:function(){return $=`useCacheRefresh`,J(),ga().memoizedState},useEffectEvent:function(e){return $=`useEffectEvent`,c(),J(),io(e)}};var Wy={},Gy=new Set,Ky=new Set,qy=new Set,Jy=new Set,Yy=new Set,Xy=new Set,Zy=new Set,Qy=new Set,$y=new Set,eb=new Set;Object.freeze(Wy);var tb={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Hc(e),i=Vi(r);i.payload=t,n!=null&&(Ro(n),i.callback=n),t=Hi(e,i,r),t!==null&&(Xr(r,`this.setState()`,e),Wc(t,e,r),Ui(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Hc(e),i=Vi(r);i.tag=Zv,i.payload=t,n!=null&&(Ro(n),i.callback=n),t=Hi(e,i,r),t!==null&&(Xr(r,`this.replaceState()`,e),Wc(t,e,r),Ui(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Hc(e),r=Vi(n);r.tag=Qv,t!=null&&(Ro(t),r.callback=t),t=Hi(e,r,n),t!==null&&(Xr(n,`this.forceUpdate()`,e),Wc(t,e,n),Ui(t,e,n))}},nb=null,rb=null,ib=Error(`This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue.`),ab=!1,ob={},sb={},cb={},lb={},ub=!1,db={},fb={},pb={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null},mb=!1,hb=null;hb=new Set;var gb=!1,_b=!1,vb=!1,yb=typeof WeakSet==`function`?WeakSet:Set,bb=null,xb=null,Sb=null,Cb=null,wb=!1,Tb=null,Eb=!1,Db=8192,Ob={getCacheForType:function(e){var t=W(d_),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return W(d_).controller.signal},getOwner:function(){return sp}};if(typeof Symbol==`function`&&Symbol.for){var kb=Symbol.for;kb(`selector.component`),kb(`selector.has_pseudo_class`),kb(`selector.role`),kb(`selector.test_id`),kb(`selector.text`)}var Ab=[],jb=typeof WeakMap==`function`?WeakMap:Map,Mb=0,Nb=2,Pb=4,Fb=0,Ib=1,Lb=2,Rb=3,zb=4,Bb=6,Vb=5,Hb=Mb,Ub=null,Wb=null,Gb=0,Kb=0,qb=1,Jb=2,Yb=3,Xb=4,Zb=5,Qb=6,$b=7,ex=8,tx=9,nx=Kb,rx=null,ix=!1,ax=!1,ox=!1,sx=0,cx=Fb,lx=0,ux=0,dx=0,fx=0,px=0,mx=null,hx=null,gx=!1,_x=0,vx=0,yx=300,bx=1/0,xx=500,Sx=null,Cx=null,wx=null,Tx=0,Ex=1,Dx=2,Ox=3,kx=0,Ax=1,jx=2,Mx=3,Nx=4,Px=5,Fx=0,Ix=null,Lx=null,Rx=0,zx=0,Bx=-0,Vx=null,Hx=null,Ux=null,Wx=Tx,Gx=null,Kx=50,qx=0,Jx=null,Yx=!1,Xx=!1,Zx=50,Qx=0,$x=null,eS=!1,tS=null,nS=!1,rS=new Set,iS={},aS=null,oS=null,sS=!1,cS=!1,lS=!1,uS=!1,dS=0,fS={};(function(){for(var e=0;e<$h.length;e++){var t=$h[e],n=t.toLowerCase();t=t[0].toUpperCase()+t.slice(1),Nn(n,`on`+t)}Nn(Gh,`onAnimationEnd`),Nn(Kh,`onAnimationIteration`),Nn(qh,`onAnimationStart`),Nn(`dblclick`,`onDoubleClick`),Nn(`focusin`,`onFocus`),Nn(`focusout`,`onBlur`),Nn(Jh,`onTransitionRun`),Nn(Yh,`onTransitionStart`),Nn(Xh,`onTransitionCancel`),Nn(Zh,`onTransitionEnd`)})(),Je(`onMouseEnter`,[`mouseout`,`mouseover`]),Je(`onMouseLeave`,[`mouseout`,`mouseover`]),Je(`onPointerEnter`,[`pointerout`,`pointerover`]),Je(`onPointerLeave`,[`pointerout`,`pointerover`]),qe(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),qe(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),qe(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),qe(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),qe(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),qe(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var pS=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),mS=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(pS)),hS=`_reactListening`+Math.random().toString(36).slice(2),gS=!1,_S=!1,vS=!1,yS=!1,bS=!1,xS=!1,SS=!1,CS={},wS=/\r\n?/g,TS=/\u0000|\uFFFD/g,ES=`http://www.w3.org/1999/xlink`,DS=`http://www.w3.org/XML/1998/namespace`,OS=`javascript:throw new Error('React form unexpectedly submitted.')`,kS=`suppressHydrationWarning`,AS=`&`,jS=`/&`,MS=`$`,NS=`/$`,PS=`$?`,FS=`$~`,IS=`$!`,LS=`html`,RS=`body`,zS=`head`,BS=`F!`,VS=`F`,HS=`loading`,US=`style`,WS=0,GS=1,KS=2,qS=null,JS=null,YS={dialog:!0,webview:!0},XS=null,ZS=void 0,QS=typeof setTimeout==`function`?setTimeout:void 0,$S=typeof clearTimeout==`function`?clearTimeout:void 0,eC=-1,tC=typeof Promise==`function`?Promise:void 0,nC=typeof queueMicrotask==`function`?queueMicrotask:tC===void 0?QS:function(e){return tC.resolve(null).then(e).catch(Lu)},rC=null,iC=0,aC=1,oC=2,sC=3,cC=4,lC=new Map,uC=new Set,dC=Bf.d;Bf.d={f:function(){var e=dC.f(),t=Yc();return e||t},r:function(e){var t=We(e);t!==null&&t.tag===5&&t.type===`form`?Co(t):dC.r(e)},D:function(e){dC.D(e),bd(`dns-prefetch`,e,null)},C:function(e,t){dC.C(e,t),bd(`preconnect`,e,t)},L:function(e,t,n){dC.L(e,t,n);var r=fC;if(r&&e&&t){var i=`link[rel="preload"][as="`+st(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+st(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+st(n.imageSizes)+`"]`)):i+=`[href="`+st(e)+`"]`;var a=i;switch(t){case`style`:a=Cd(e);break;case`script`:a=Dd(e)}lC.has(a)||(e=xf({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),lC.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(wd(a))||t===`script`&&r.querySelector(Od(a))||(t=r.createElement(`link`),gu(t,`link`,e),L(t),r.head.appendChild(t)))}},m:function(e,t){dC.m(e,t);var n=fC;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+st(r)+`"][href="`+st(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Dd(e)}if(!lC.has(a)&&(e=xf({rel:`modulepreload`,href:e},t),lC.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Od(a)))return}r=n.createElement(`link`),gu(r,`link`,e),L(r),n.head.appendChild(r)}}},X:function(e,t){dC.X(e,t);var n=fC;if(n&&e){var r=Ke(n).hoistableScripts,i=Dd(e),a=r.get(i);a||(a=n.querySelector(Od(i)),a||(e=xf({src:e,async:!0},t),(t=lC.get(i))&&Md(e,t),a=n.createElement(`script`),L(a),gu(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}},S:function(e,t,n){dC.S(e,t,n);var r=fC;if(r&&e){var i=Ke(r).hoistableStyles,a=Cd(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:iC,preload:null};if(o=r.querySelector(wd(a)))s.loading=aC|cC;else{e=xf({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=lC.get(a))&&jd(e,n);var c=o=r.createElement(`link`);L(c),gu(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=aC}),c.addEventListener(`error`,function(){s.loading|=oC}),s.loading|=cC,Ad(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}},M:function(e,t){dC.M(e,t);var n=fC;if(n&&e){var r=Ke(n).hoistableScripts,i=Dd(e),a=r.get(i);a||(a=n.querySelector(Od(i)),a||(e=xf({src:e,async:!0,type:`module`},t),(t=lC.get(i))&&Md(e,t),a=n.createElement(`script`),L(a),gu(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}};var fC=typeof document>`u`?null:document,pC=null,mC=6e4,hC=800,gC=500,_C=0,vC=null,yC=null,bC=Vf,xC={$$typeof:kf,Provider:null,Consumer:null,_currentValue:bC,_currentValue2:bC,_threadCount:0},SC=`%c%s%c`,CC=`background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px`,wC=``,TC=` `,EC=Function.prototype.bind,DC=!1,OC=null,kC=null,AC=null,jC=null,MC=null,NC=null,PC=null,FC=null,IC=null,LC=null;OC=function(e,r,i,a){r=t(e,r),r!==null&&(i=n(r.memoizedState,i,0,a),r.memoizedState=i,r.baseState=i,e.memoizedProps=xf({},e.memoizedProps),i=tr(e,2),i!==null&&Wc(i,e,2))},kC=function(e,n,r){n=t(e,n),n!==null&&(r=a(n.memoizedState,r,0),n.memoizedState=r,n.baseState=r,e.memoizedProps=xf({},e.memoizedProps),r=tr(e,2),r!==null&&Wc(r,e,2))},AC=function(e,n,i,a){n=t(e,n),n!==null&&(i=r(n.memoizedState,i,a),n.memoizedState=i,n.baseState=i,e.memoizedProps=xf({},e.memoizedProps),i=tr(e,2),i!==null&&Wc(i,e,2))},jC=function(e,t,r){e.pendingProps=n(e.memoizedProps,t,0,r),e.alternate&&(e.alternate.pendingProps=e.pendingProps),t=tr(e,2),t!==null&&Wc(t,e,2)},MC=function(e,t){e.pendingProps=a(e.memoizedProps,t,0),e.alternate&&(e.alternate.pendingProps=e.pendingProps),t=tr(e,2),t!==null&&Wc(t,e,2)},NC=function(e,t,n){e.pendingProps=r(e.memoizedProps,t,n),e.alternate&&(e.alternate.pendingProps=e.pendingProps),t=tr(e,2),t!==null&&Wc(t,e,2)},PC=function(e){var t=tr(e,2);t!==null&&Wc(t,e,2)},FC=function(e){var t=Me(),n=tr(e,t);n!==null&&Wc(n,e,t)},IC=function(e){s=e},LC=function(e){o=e};var RC=!0,zC=null,BC=!1,VC=null,HC=null,UC=null,WC=new Map,GC=new Map,KC=[],qC=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `),JC=null;if(gf.prototype.render=hf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(`Cannot update an unmounted root.`);var n=arguments;typeof n[1]==`function`?console.error(`does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().`):b(n[1])?console.error(`You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.`):n[1]!==void 0&&console.error(`You passed a second argument to root.render(...) but it only accepts one argument.`),n=e;var r=t.current;Gd(r,Hc(r),n,t,null,null)},gf.prototype.unmount=hf.prototype.unmount=function(){var e=arguments;if(typeof e[0]==`function`&&console.error(`does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().`),e=this._internalRoot,e!==null){this._internalRoot=null;var t=e.containerInfo;(Hb&(Nb|Pb))!==Mb&&console.error(`Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition.`),Gd(e.current,2,null,e,null,null),Yc(),t[Bp]=null}},gf.prototype.unstable_scheduleHydration=function(e){if(e){var t=Be();e={blockedOn:null,target:e,priority:t};for(var n=0;n<KC.length&&t!==0&&t<KC[n].priority;n++);KC.splice(n,0,e),n===0&&sf(e)}},(function(){var e=yf.version;if(e!==`19.2.4`)throw Error(`Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      `+(e+`
  - react-dom:  19.2.4
Learn more: https://react.dev/warnings/version-mismatch`))})(),typeof Map==`function`&&Map.prototype!=null&&typeof Map.prototype.forEach==`function`&&typeof Set==`function`&&Set.prototype!=null&&typeof Set.prototype.clear==`function`&&typeof Set.prototype.forEach==`function`||console.error(`React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills`),Bf.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(`Unable to find node on an unmounted component.`):(e=Object.keys(e).join(`,`),Error(`Argument appears to not be a ReactComponent. Keys: `+e));return e=C(t),e=e===null?null:ne(e),e=e===null?null:e.stateNode,e},!(function(){var e={bundleType:1,version:`19.2.4`,rendererPackageName:`react-dom`,currentDispatcherRef:Y,reconcilerVersion:`19.2.4`};return e.overrideHookState=OC,e.overrideHookStateDeletePath=kC,e.overrideHookStateRenamePath=AC,e.overrideProps=jC,e.overridePropsDeletePath=MC,e.overridePropsRenamePath=NC,e.scheduleUpdate=PC,e.scheduleRetry=FC,e.setErrorHandler=IC,e.setSuspenseHandler=LC,e.scheduleRefresh=v,e.scheduleRoot=g,e.setRefreshHandler=y,e.getCurrentFiber=Xd,Te(e)})()&&Km&&window.top===window.self&&(-1<navigator.userAgent.indexOf(`Chrome`)&&navigator.userAgent.indexOf(`Edge`)===-1||-1<navigator.userAgent.indexOf(`Firefox`))){var YC=window.location.protocol;/^(https?|file):$/.test(YC)&&console.info(`%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools`+(YC===`file:`?`
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq`:``),`font-weight:bold`)}e.createRoot=function(e,t){if(!b(e))throw Error(`Target container is not a DOM element.`);_f(e);var n=!1,r=``,i=Uo,a=Wo,o=Go;return t!=null&&(t.hydrate?console.warn(`hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.`):typeof t==`object`&&t&&t.$$typeof===Cf&&console.error(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ud(e,1,!1,null,null,n,r,null,i,a,o,mf),e[Bp]=t.current,eu(e),new hf(t)},e.hydrateRoot=function(e,t,n){if(!b(e))throw Error(`Target container is not a DOM element.`);_f(e),t===void 0&&console.error(`Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)`);var r=!1,i=``,a=Uo,o=Wo,s=Go,c=null;return n!=null&&(!0===n.unstable_strictMode&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError),n.formState!==void 0&&(c=n.formState)),t=Ud(e,1,!0,t,n??null,r,i,c,a,o,s,mf),t.context=Wd(null),n=t.current,r=Hc(n),r=F(r),i=Vi(r),i.callback=null,Hi(n,i,r),Xr(r,`hydrateRoot()`,null),n=r,t.current.lanes=n,Pe(t,n),Ll(t),e[Bp]=t.current,eu(e),new gf(t)},e.version=`19.2.4`,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==`function`&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()})),b=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`)){if(process.env.NODE_ENV!==`production`)throw Error(`^_^`);try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}}process.env.NODE_ENV===`production`?(n(),t.exports=v()):t.exports=y()})),x=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),ee=o((e=>{process.env.NODE_ENV!==`production`&&(function(){function t(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===re?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case v:return`Fragment`;case b:return`Profiler`;case y:return`StrictMode`;case S:return`Suspense`;case C:return`SuspenseList`;case T:return`Activity`}if(typeof e==`object`)switch(typeof e.tag==`number`&&console.error(`Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.`),e.$$typeof){case _:return`Portal`;case ee:return e.displayName||`Context`;case x:return(e._context.displayName||`Context`)+`.Consumer`;case te:var n=e.render;return e=e.displayName,e||=(e=n.displayName||n.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ne:return n=e.displayName||null,n===null?t(e.type)||`Memo`:n;case w:n=e._payload,e=e._init;try{return t(e(n))}catch{}}return null}function n(e){return``+e}function r(e){try{n(e);var t=!1}catch{t=!0}if(t){t=console;var r=t.error,i=typeof Symbol==`function`&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||`Object`;return r.call(t,`The provided key is an unsupported type %s. This value must be coerced to a string before using it here.`,i),n(e)}}function i(e){if(e===v)return`<>`;if(typeof e==`object`&&e&&e.$$typeof===w)return`<...>`;try{var n=t(e);return n?`<`+n+`>`:`<...>`}catch{return`<...>`}}function a(){var e=E.A;return e===null?null:e.getOwner()}function o(){return Error(`react-stack-top-frame`)}function s(e){if(ie.call(e,`key`)){var t=Object.getOwnPropertyDescriptor(e,`key`).get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function c(e,t){function n(){oe||(oe=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",t))}n.isReactWarning=!0,Object.defineProperty(e,`key`,{get:n,configurable:!0})}function l(){var e=t(this.type);return se[e]||(se[e]=!0,console.error(`Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.`)),e=this.props.ref,e===void 0?null:e}function u(e,t,n,r,i,a){var o=n.ref;return e={$$typeof:g,type:e,key:t,props:n,_owner:r},(o===void 0?null:o)===null?Object.defineProperty(e,`ref`,{enumerable:!1,value:null}):Object.defineProperty(e,`ref`,{enumerable:!1,get:l}),e._store={},Object.defineProperty(e._store,`validated`,{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,`_debugInfo`,{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(e,`_debugStack`,{configurable:!1,enumerable:!1,writable:!0,value:i}),Object.defineProperty(e,`_debugTask`,{configurable:!1,enumerable:!1,writable:!0,value:a}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function f(e,n,i,o,l,d){var f=n.children;if(f!==void 0)if(o)if(ae(f)){for(o=0;o<f.length;o++)p(f[o]);Object.freeze&&Object.freeze(f)}else console.error(`React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.`);else p(f);if(ie.call(n,`key`)){f=t(e);var m=Object.keys(n).filter(function(e){return e!==`key`});o=0<m.length?`{key: someKey, `+m.join(`: ..., `)+`: ...}`:`{key: someKey}`,ce[f+o]||(m=0<m.length?`{`+m.join(`: ..., `)+`: ...}`:`{}`,console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,o,f,m,f),ce[f+o]=!0)}if(f=null,i!==void 0&&(r(i),f=``+i),s(n)&&(r(n.key),f=``+n.key),`key`in n)for(var h in i={},n)h!==`key`&&(i[h]=n[h]);else i=n;return f&&c(i,typeof e==`function`?e.displayName||e.name||`Unknown`:e),u(e,f,i,a(),l,d)}function p(e){m(e)?e._store&&(e._store.validated=1):typeof e==`object`&&e&&e.$$typeof===w&&(e._payload.status===`fulfilled`?m(e._payload.value)&&e._payload.value._store&&(e._payload.value._store.validated=1):e._store&&(e._store.validated=1))}function m(e){return typeof e==`object`&&!!e&&e.$$typeof===g}var h=d(),g=Symbol.for(`react.transitional.element`),_=Symbol.for(`react.portal`),v=Symbol.for(`react.fragment`),y=Symbol.for(`react.strict_mode`),b=Symbol.for(`react.profiler`),x=Symbol.for(`react.consumer`),ee=Symbol.for(`react.context`),te=Symbol.for(`react.forward_ref`),S=Symbol.for(`react.suspense`),C=Symbol.for(`react.suspense_list`),ne=Symbol.for(`react.memo`),w=Symbol.for(`react.lazy`),T=Symbol.for(`react.activity`),re=Symbol.for(`react.client.reference`),E=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=Object.prototype.hasOwnProperty,ae=Array.isArray,D=console.createTask?console.createTask:function(){return null};h={react_stack_bottom_frame:function(e){return e()}};var oe,se={},O=h.react_stack_bottom_frame.bind(h,o)(),k=D(i(o)),ce={};e.Fragment=v,e.jsx=function(e,t,n){var r=1e4>E.recentlyCreatedOwnerStacks++;return f(e,t,n,!1,r?Error(`react-stack-top-frame`):O,r?D(i(e)):k)},e.jsxs=function(e,t,n){var r=1e4>E.recentlyCreatedOwnerStacks++;return f(e,t,n,!0,r?Error(`react-stack-top-frame`):O,r?D(i(e)):k)}})()})),te=o(((e,t)=>{process.env.NODE_ENV===`production`?t.exports=x():t.exports=ee()})),S=b(),C=c(d(),1),ne=_(),w=te(),T=`.styles-module__popup___IhzrD svg[fill=none] {
  fill: none !important;
}
.styles-module__popup___IhzrD svg[fill=none] :not([fill]) {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem 14px;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: var(--agentation-color-blue);
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: var(--agentation-color-green);
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.5rem;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR {
  padding: 0.4rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}`,re={popup:`styles-module__popup___IhzrD`,enter:`styles-module__enter___L7U7N`,popupEnter:`styles-module__popupEnter___AuQDN`,entered:`styles-module__entered___COX-w`,exit:`styles-module__exit___5eGjE`,popupExit:`styles-module__popupExit___JJKQX`,shake:`styles-module__shake___jdbWe`,header:`styles-module__header___wWsSi`,element:`styles-module__element___fTV2z`,headerToggle:`styles-module__headerToggle___WpW0b`,chevron:`styles-module__chevron___ZZJlR`,expanded:`styles-module__expanded___2Hxgv`,stylesWrapper:`styles-module__stylesWrapper___pnHgy`,stylesInner:`styles-module__stylesInner___YYZe2`,stylesBlock:`styles-module__stylesBlock___VfQKn`,styleLine:`styles-module__styleLine___1YQiD`,styleProperty:`styles-module__styleProperty___84L1i`,styleValue:`styles-module__styleValue___q51-h`,timestamp:`styles-module__timestamp___Dtpsv`,quote:`styles-module__quote___mcMmQ`,textarea:`styles-module__textarea___jrSae`,green:`styles-module__green___99l3h`,actions:`styles-module__actions___D6x3f`,cancel:`styles-module__cancel___hRjnL`,submit:`styles-module__submit___K-mIR`,deleteWrapper:`styles-module__deleteWrapper___oSjdo`,deleteButton:`styles-module__deleteButton___4VuAE`,light:`styles-module__light___6AaSQ`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-annotation-popup-css-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-annotation-popup-css-styles`,document.head.appendChild(e)),e.textContent=T}var E=re,ie=`.icon-transitions-module__iconState___uqK9J {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: center;
}

.icon-transitions-module__iconStateFast___HxlMm {
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform-origin: center;
}

.icon-transitions-module__iconFade___nPwXg {
  transition: opacity 0.2s ease;
}

.icon-transitions-module__iconFadeFast___Ofb2t {
  transition: opacity 0.15s ease;
}

.icon-transitions-module__visible___PlHsU {
  opacity: 1 !important;
}

.icon-transitions-module__visibleScaled___8Qog- {
  opacity: 1 !important;
  transform: scale(1);
}

.icon-transitions-module__hidden___ETykt {
  opacity: 0 !important;
}

.icon-transitions-module__hiddenScaled___JXn-m {
  opacity: 0 !important;
  transform: scale(0.8);
}

.icon-transitions-module__sending___uaLN- {
  opacity: 0.5 !important;
  transform: scale(0.8);
}`,ae={iconState:`icon-transitions-module__iconState___uqK9J`,iconStateFast:`icon-transitions-module__iconStateFast___HxlMm`,iconFade:`icon-transitions-module__iconFade___nPwXg`,iconFadeFast:`icon-transitions-module__iconFadeFast___Ofb2t`,visible:`icon-transitions-module__visible___PlHsU`,visibleScaled:`icon-transitions-module__visibleScaled___8Qog-`,hidden:`icon-transitions-module__hidden___ETykt`,hiddenScaled:`icon-transitions-module__hiddenScaled___JXn-m`,sending:`icon-transitions-module__sending___uaLN-`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-components-icon-transitions`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-components-icon-transitions`,document.head.appendChild(e)),e.textContent=ie}var D=ae,oe=({size:e=16})=>(0,w.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 16 16`,fill:`none`,children:(0,w.jsx)(`path`,{d:`M8 3v10M3 8h10`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})}),se=({size:e=24,style:t={}})=>(0,w.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,style:t,children:[(0,w.jsxs)(`g`,{clipPath:`url(#clip0_list_sparkle)`,children:[(0,w.jsx)(`path`,{d:`M11.5 12L5.5 12`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,w.jsx)(`path`,{d:`M18.5 6.75L5.5 6.75`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,w.jsx)(`path`,{d:`M9.25 17.25L5.5 17.25`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,w.jsx)(`path`,{d:`M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinejoin:`round`})]}),(0,w.jsx)(`defs`,{children:(0,w.jsx)(`clipPath`,{id:`clip0_list_sparkle`,children:(0,w.jsx)(`rect`,{width:`24`,height:`24`,fill:`white`})})})]}),O=({size:e=20,...t})=>(0,w.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 20 20`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...t,children:[(0,w.jsx)(`circle`,{cx:`10`,cy:`10`,r:`5.375`,stroke:`currentColor`,strokeWidth:`1.25`}),(0,w.jsx)(`path`,{d:`M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,w.jsx)(`circle`,{cx:`10`,cy:`12.625`,r:`0.625`,fill:`currentColor`})]}),k=({size:e=24,copied:t=!1,tint:n})=>(0,w.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,style:n?{color:n,transition:`color 0.3s ease`}:void 0,children:[(0,w.jsxs)(`g`,{className:`${D.iconState} ${t?D.hiddenScaled:D.visibleScaled}`,children:[(0,w.jsx)(`path`,{d:`M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,w.jsx)(`path`,{d:`M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]}),(0,w.jsxs)(`g`,{className:`${D.iconState} ${t?D.visibleScaled:D.hiddenScaled}`,children:[(0,w.jsx)(`path`,{d:`M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z`,stroke:`var(--agentation-color-green)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,w.jsx)(`path`,{d:`M15 10L11 14.25L9.25 12.25`,stroke:`var(--agentation-color-green)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]})]}),ce=({size:e=24,state:t=`idle`})=>{let n=t===`idle`,r=t===`sent`,i=t===`failed`,a=t===`sending`;return(0,w.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,w.jsx)(`g`,{className:`${D.iconStateFast} ${n?D.visibleScaled:a?D.sending:D.hiddenScaled}`,children:(0,w.jsx)(`path`,{d:`M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),(0,w.jsxs)(`g`,{className:`${D.iconStateFast} ${r?D.visibleScaled:D.hiddenScaled}`,children:[(0,w.jsx)(`path`,{d:`M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z`,stroke:`var(--agentation-color-green)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,w.jsx)(`path`,{d:`M15 10L11 14.25L9.25 12.25`,stroke:`var(--agentation-color-green)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),(0,w.jsxs)(`g`,{className:`${D.iconStateFast} ${i?D.visibleScaled:D.hiddenScaled}`,children:[(0,w.jsx)(`path`,{d:`M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z`,stroke:`var(--agentation-color-red)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,w.jsx)(`path`,{d:`M12 8V12`,stroke:`var(--agentation-color-red)`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,w.jsx)(`circle`,{cx:`12`,cy:`15`,r:`0.5`,fill:`var(--agentation-color-red)`,stroke:`var(--agentation-color-red)`,strokeWidth:`1`})]})]})},le=({size:e=24,isOpen:t=!0})=>(0,w.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,w.jsxs)(`g`,{className:`${D.iconFade} ${t?D.visible:D.hidden}`,children:[(0,w.jsx)(`path`,{d:`M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,w.jsx)(`path`,{d:`M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),(0,w.jsxs)(`g`,{className:`${D.iconFade} ${t?D.hidden:D.visible}`,children:[(0,w.jsx)(`path`,{d:`M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z`,fill:`currentColor`}),(0,w.jsx)(`path`,{d:`M5 19L19 5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]})]}),ue=({size:e=24,isPaused:t=!1})=>(0,w.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,w.jsxs)(`g`,{className:`${D.iconFadeFast} ${t?D.hidden:D.visible}`,children:[(0,w.jsx)(`path`,{d:`M8 6L8 18`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,w.jsx)(`path`,{d:`M16 18L16 6`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]}),(0,w.jsx)(`path`,{className:`${D.iconFadeFast} ${t?D.visible:D.hidden}`,d:`M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z`,stroke:`currentColor`,strokeWidth:`1.5`})]}),de=({size:e=16})=>(0,w.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,w.jsx)(`path`,{d:`M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,w.jsx)(`circle`,{cx:`12`,cy:`12`,r:`2.5`,stroke:`currentColor`,strokeWidth:`1.5`})]}),fe=({size:e=16})=>(0,w.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:(0,w.jsx)(`path`,{d:`M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z`,fill:`currentColor`})}),pe=({size:e=16})=>(0,w.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,w.jsxs)(`g`,{clipPath:`url(#clip0_2_53)`,children:[(0,w.jsx)(`path`,{d:`M16.25 16.25L7.75 7.75`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,w.jsx)(`path`,{d:`M7.75 16.25L16.25 7.75`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),(0,w.jsx)(`defs`,{children:(0,w.jsx)(`clipPath`,{id:`clip0_2_53`,children:(0,w.jsx)(`rect`,{width:`24`,height:`24`,fill:`white`})})})]}),me=({size:e=24})=>(0,w.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:(0,w.jsx)(`path`,{d:`M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z`,fill:`currentColor`})}),A=({size:e=16})=>(0,w.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 20 20`,fill:`none`,children:[(0,w.jsx)(`path`,{d:`M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,w.jsx)(`path`,{d:`M10 3.9585V5.05698`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,w.jsx)(`path`,{d:`M10 14.9429V16.0414`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,w.jsx)(`path`,{d:`M5.7269 5.72656L6.50682 6.50649`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,w.jsx)(`path`,{d:`M13.4932 13.4932L14.2731 14.2731`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,w.jsx)(`path`,{d:`M3.95834 10H5.05683`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,w.jsx)(`path`,{d:`M14.9432 10H16.0417`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,w.jsx)(`path`,{d:`M5.7269 14.2731L6.50682 13.4932`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,w.jsx)(`path`,{d:`M13.4932 6.50649L14.2731 5.72656`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),he=({size:e=16})=>(0,w.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 20 20`,fill:`none`,children:(0,w.jsx)(`path`,{d:`M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z`,stroke:`currentColor`,strokeWidth:`1.13793`,strokeLinecap:`round`,strokeLinejoin:`round`})}),ge=({size:e=16})=>(0,w.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,w.jsx)(`path`,{d:`M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375`,stroke:`currentColor`,strokeWidth:`0.9`,strokeLinecap:`round`,strokeLinejoin:`round`})}),_e=({size:e=24})=>(0,w.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,w.jsx)(`path`,{d:`M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z`,fill:`currentColor`})}),ve=({size:e=16})=>(0,w.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,w.jsx)(`path`,{d:`M8.5 3.5L4 8L8.5 12.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),ye=({size:e=24})=>(0,w.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,w.jsx)(`line`,{x1:`3`,y1:`9`,x2:`21`,y2:`9`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,w.jsx)(`line`,{x1:`9`,y1:`9`,x2:`9`,y2:`21`,stroke:`currentColor`,strokeWidth:`1.5`})]}),j=[`data-feedback-toolbar`,`data-annotation-popup`,`data-annotation-marker`],be=j.flatMap(e=>[`:not([${e}])`,`:not([${e}] *)`]).join(``),xe=`feedback-freeze-styles`,Se=`__agentation_freeze`;function Ce(){if(typeof window>`u`)return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:e=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};let e=window;return e[Se]||(e[Se]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),e[Se]}var M=Ce();typeof window<`u`&&!M.installed&&(M.origSetTimeout=window.setTimeout.bind(window),M.origSetInterval=window.setInterval.bind(window),M.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(e,t,...n)=>typeof e==`string`?M.origSetTimeout(e,t):M.origSetTimeout((...t)=>{M.frozen?M.frozenTimeoutQueue.push(()=>e(...t)):e(...t)},t,...n),window.setInterval=(e,t,...n)=>typeof e==`string`?M.origSetInterval(e,t):M.origSetInterval((...t)=>{M.frozen||e(...t)},t,...n),window.requestAnimationFrame=e=>M.origRAF(t=>{M.frozen?M.frozenRAFQueue.push(e):e(t)}),M.installed=!0);var N=M.origSetTimeout,we=M.origSetInterval,Te=M.origRAF;function Ee(e){return e?j.some(t=>!!e.closest?.(`[${t}]`)):!1}function De(){if(typeof document>`u`||M.frozen)return;M.frozen=!0,M.frozenTimeoutQueue=[],M.frozenRAFQueue=[];let e=document.getElementById(xe);e||(e=document.createElement(`style`),e.id=xe),e.textContent=`
    *${be},
    *${be}::before,
    *${be}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(e),M.pausedAnimations=[];try{document.getAnimations().forEach(e=>{if(e.playState!==`running`)return;let t=e.effect?.target;Ee(t)||(e.pause(),M.pausedAnimations.push(e))})}catch{}document.querySelectorAll(`video`).forEach(e=>{e.paused||(e.dataset.wasPaused=`false`,e.pause())})}function Oe(){if(typeof document>`u`||!M.frozen)return;M.frozen=!1;let e=M.frozenTimeoutQueue;M.frozenTimeoutQueue=[];for(let t of e)M.origSetTimeout(()=>{if(M.frozen){M.frozenTimeoutQueue.push(t);return}try{t()}catch(e){console.warn(`[agentation] Error replaying queued timeout:`,e)}},0);let t=M.frozenRAFQueue;M.frozenRAFQueue=[];for(let e of t)M.origRAF(t=>{if(M.frozen){M.frozenRAFQueue.push(e);return}e(t)});for(let e of M.pausedAnimations)try{e.play()}catch(e){console.warn(`[agentation] Error resuming animation:`,e)}M.pausedAnimations=[],document.getElementById(xe)?.remove(),document.querySelectorAll(`video`).forEach(e=>{e.dataset.wasPaused===`false`&&(e.play().catch(()=>{}),delete e.dataset.wasPaused)})}function ke(e){if(!e)return;let t=e=>e.stopImmediatePropagation();document.addEventListener(`focusin`,t,!0),document.addEventListener(`focusout`,t,!0);try{e.focus()}finally{document.removeEventListener(`focusin`,t,!0),document.removeEventListener(`focusout`,t,!0)}}var Ae=(0,C.forwardRef)(function({element:e,timestamp:t,selectedText:n,placeholder:r=`What should change?`,initialValue:i=``,submitLabel:a=`Add`,onSubmit:o,onCancel:s,onDelete:c,style:l,accentColor:u=`#3c82f7`,isExiting:d=!1,lightMode:f=!1,computedStyles:p},m){let[h,g]=(0,C.useState)(i),[_,v]=(0,C.useState)(!1),[y,b]=(0,C.useState)(`initial`),[x,ee]=(0,C.useState)(!1),[te,S]=(0,C.useState)(!1),ne=(0,C.useRef)(null),T=(0,C.useRef)(null),re=(0,C.useRef)(null),ie=(0,C.useRef)(null);(0,C.useEffect)(()=>{d&&y!==`exit`&&b(`exit`)},[d,y]),(0,C.useEffect)(()=>{N(()=>{b(`enter`)},0);let e=N(()=>{b(`entered`)},200),t=N(()=>{let e=ne.current;e&&(ke(e),e.selectionStart=e.selectionEnd=e.value.length,e.scrollTop=e.scrollHeight)},50);return()=>{clearTimeout(e),clearTimeout(t),re.current&&clearTimeout(re.current),ie.current&&clearTimeout(ie.current)}},[]);let ae=(0,C.useCallback)(()=>{ie.current&&clearTimeout(ie.current),v(!0),ie.current=N(()=>{v(!1),ke(ne.current)},250)},[]);(0,C.useImperativeHandle)(m,()=>({shake:ae}),[ae]);let D=(0,C.useCallback)(()=>{b(`exit`),re.current=N(()=>{s()},150)},[s]),oe=(0,C.useCallback)(()=>{h.trim()&&o(h.trim())},[h,o]),se=(0,C.useCallback)(e=>{e.stopPropagation(),!e.nativeEvent.isComposing&&(e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),oe()),e.key===`Escape`&&D())},[oe,D]);return(0,w.jsxs)(`div`,{ref:T,className:[E.popup,f?E.light:``,y===`enter`?E.enter:``,y===`entered`?E.entered:``,y===`exit`?E.exit:``,_?E.shake:``].filter(Boolean).join(` `),"data-annotation-popup":!0,style:l,onClick:e=>e.stopPropagation(),children:[(0,w.jsxs)(`div`,{className:E.header,children:[p&&Object.keys(p).length>0?(0,w.jsxs)(`button`,{className:E.headerToggle,onClick:()=>{let e=te;S(!te),e&&N(()=>ke(ne.current),0)},type:`button`,children:[(0,w.jsx)(`svg`,{className:`${E.chevron} ${te?E.expanded:``}`,width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,w.jsx)(`path`,{d:`M5.5 10.25L9 7.25L5.75 4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),(0,w.jsx)(`span`,{className:E.element,children:e})]}):(0,w.jsx)(`span`,{className:E.element,children:e}),t&&(0,w.jsx)(`span`,{className:E.timestamp,children:t})]}),p&&Object.keys(p).length>0&&(0,w.jsx)(`div`,{className:`${E.stylesWrapper} ${te?E.expanded:``}`,children:(0,w.jsx)(`div`,{className:E.stylesInner,children:(0,w.jsx)(`div`,{className:E.stylesBlock,children:Object.entries(p).map(([e,t])=>(0,w.jsxs)(`div`,{className:E.styleLine,children:[(0,w.jsx)(`span`,{className:E.styleProperty,children:e.replace(/([A-Z])/g,`-$1`).toLowerCase()}),`: `,(0,w.jsx)(`span`,{className:E.styleValue,children:t}),`;`]},e))})})}),n&&(0,w.jsxs)(`div`,{className:E.quote,children:[`“`,n.slice(0,80),n.length>80?`...`:``,`”`]}),(0,w.jsx)(`textarea`,{ref:ne,className:E.textarea,style:{borderColor:x?u:void 0},placeholder:r,value:h,onChange:e=>g(e.target.value),onFocus:()=>ee(!0),onBlur:()=>ee(!1),rows:2,onKeyDown:se}),(0,w.jsxs)(`div`,{className:E.actions,children:[c&&(0,w.jsx)(`div`,{className:E.deleteWrapper,children:(0,w.jsx)(`button`,{className:E.deleteButton,onClick:c,type:`button`,children:(0,w.jsx)(_e,{size:22})})}),(0,w.jsx)(`button`,{className:E.cancel,onClick:D,children:`Cancel`}),(0,w.jsx)(`button`,{className:E.submit,style:{backgroundColor:u,opacity:h.trim()?1:.4},onClick:oe,disabled:!h.trim(),children:a})]})]})}),je=({content:e,children:t,...n})=>{let[r,i]=(0,C.useState)(!1),[a,o]=(0,C.useState)(!1),[s,c]=(0,C.useState)({top:0,right:0}),l=(0,C.useRef)(null),u=(0,C.useRef)(null),d=(0,C.useRef)(null),f=()=>{if(l.current){let e=l.current.getBoundingClientRect();c({top:e.top+e.height/2,right:window.innerWidth-e.left+8})}};return(0,C.useEffect)(()=>()=>{u.current&&clearTimeout(u.current),d.current&&clearTimeout(d.current)},[]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(`span`,{ref:l,onMouseEnter:()=>{o(!0),d.current&&=(clearTimeout(d.current),null),f(),u.current=N(()=>{i(!0)},500)},onMouseLeave:()=>{u.current&&=(clearTimeout(u.current),null),i(!1),d.current=N(()=>{o(!1)},150)},...n,children:t}),a&&(0,ne.createPortal)((0,w.jsx)(`div`,{"data-feedback-toolbar":!0,style:{position:`fixed`,top:s.top,right:s.right,transform:`translateY(-50%)`,padding:`6px 10px`,background:`#383838`,color:`rgba(255, 255, 255, 0.7)`,fontSize:`11px`,fontWeight:400,lineHeight:`14px`,borderRadius:`10px`,width:`180px`,textAlign:`left`,zIndex:100020,pointerEvents:`none`,boxShadow:`0px 1px 8px rgba(0, 0, 0, 0.28)`,opacity:+!!r,transition:`opacity 0.15s ease`},children:e}),document.body)]})},Me=`.styles-module__tooltip___mcXL2 {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: help;
}

.styles-module__tooltipIcon___Nq2nD {
  transform: translateY(0.5px);
  color: #fff;
  opacity: 0.2;
  transition: opacity 0.15s ease;
  will-change: transform;
}
.styles-module__tooltip___mcXL2:hover .styles-module__tooltipIcon___Nq2nD {
  opacity: 0.5;
}
[data-agentation-theme=light] .styles-module__tooltipIcon___Nq2nD {
  color: #000;
}`,Ne={tooltip:`styles-module__tooltip___mcXL2`,tooltipIcon:`styles-module__tooltipIcon___Nq2nD`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-help-tooltip-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-help-tooltip-styles`,document.head.appendChild(e)),e.textContent=Me}var Pe=Ne,Fe=({content:e})=>(0,w.jsx)(je,{className:Pe.tooltip,content:e,children:(0,w.jsx)(O,{className:Pe.tooltipIcon})}),P={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},Ie=[{section:`Layout`,items:[{type:`navigation`,label:`Navigation`,...P.navigation},{type:`header`,label:`Header`,...P.header},{type:`hero`,label:`Hero`,...P.hero},{type:`section`,label:`Section`,...P.section},{type:`sidebar`,label:`Sidebar`,...P.sidebar},{type:`footer`,label:`Footer`,...P.footer},{type:`modal`,label:`Modal`,...P.modal},{type:`banner`,label:`Banner`,...P.banner},{type:`drawer`,label:`Drawer`,...P.drawer},{type:`popover`,label:`Popover`,...P.popover},{type:`divider`,label:`Divider`,...P.divider}]},{section:`Content`,items:[{type:`card`,label:`Card`,...P.card},{type:`text`,label:`Text`,...P.text},{type:`image`,label:`Image`,...P.image},{type:`video`,label:`Video`,...P.video},{type:`table`,label:`Table`,...P.table},{type:`grid`,label:`Grid`,...P.grid},{type:`list`,label:`List`,...P.list},{type:`chart`,label:`Chart`,...P.chart},{type:`codeBlock`,label:`Code Block`,...P.codeBlock},{type:`map`,label:`Map`,...P.map},{type:`timeline`,label:`Timeline`,...P.timeline},{type:`calendar`,label:`Calendar`,...P.calendar},{type:`accordion`,label:`Accordion`,...P.accordion},{type:`carousel`,label:`Carousel`,...P.carousel},{type:`logo`,label:`Logo`,...P.logo},{type:`faq`,label:`FAQ`,...P.faq},{type:`gallery`,label:`Gallery`,...P.gallery}]},{section:`Controls`,items:[{type:`button`,label:`Button`,...P.button},{type:`input`,label:`Input`,...P.input},{type:`search`,label:`Search`,...P.search},{type:`form`,label:`Form`,...P.form},{type:`tabs`,label:`Tabs`,...P.tabs},{type:`dropdown`,label:`Dropdown`,...P.dropdown},{type:`toggle`,label:`Toggle`,...P.toggle},{type:`stepper`,label:`Stepper`,...P.stepper},{type:`rating`,label:`Rating`,...P.rating},{type:`fileUpload`,label:`File Upload`,...P.fileUpload},{type:`checkbox`,label:`Checkbox`,...P.checkbox},{type:`radio`,label:`Radio`,...P.radio},{type:`slider`,label:`Slider`,...P.slider},{type:`datePicker`,label:`Date Picker`,...P.datePicker}]},{section:`Elements`,items:[{type:`avatar`,label:`Avatar`,...P.avatar},{type:`badge`,label:`Badge`,...P.badge},{type:`tag`,label:`Tag`,...P.tag},{type:`breadcrumb`,label:`Breadcrumb`,...P.breadcrumb},{type:`pagination`,label:`Pagination`,...P.pagination},{type:`progress`,label:`Progress`,...P.progress},{type:`alert`,label:`Alert`,...P.alert},{type:`toast`,label:`Toast`,...P.toast},{type:`notification`,label:`Notification`,...P.notification},{type:`tooltip`,label:`Tooltip`,...P.tooltip},{type:`stat`,label:`Stat`,...P.stat},{type:`skeleton`,label:`Skeleton`,...P.skeleton},{type:`chip`,label:`Chip`,...P.chip},{type:`icon`,label:`Icon`,...P.icon},{type:`spinner`,label:`Spinner`,...P.spinner}]},{section:`Blocks`,items:[{type:`pricing`,label:`Pricing`,...P.pricing},{type:`testimonial`,label:`Testimonial`,...P.testimonial},{type:`cta`,label:`CTA`,...P.cta},{type:`productCard`,label:`Product Card`,...P.productCard},{type:`profile`,label:`Profile`,...P.profile},{type:`feature`,label:`Feature`,...P.feature},{type:`team`,label:`Team`,...P.team},{type:`login`,label:`Login`,...P.login},{type:`contact`,label:`Contact`,...P.contact}]}],Le={};for(let e of Ie)for(let t of e.items)Le[t.type]=t;function F({w:e,h:t=3,strong:n}){return(0,w.jsx)(`div`,{style:{width:typeof e==`number`?`${e}px`:e,height:t,borderRadius:2,background:n?`var(--agd-bar-strong)`:`var(--agd-bar)`,flexShrink:0}})}function I({w:e,h:t,radius:n=3,style:r}){return(0,w.jsx)(`div`,{style:{width:typeof e==`number`?`${e}px`:e,height:typeof t==`number`?`${t}px`:t,borderRadius:n,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,flexShrink:0,...r}})}function Re({size:e}){return(0,w.jsx)(`div`,{style:{width:e,height:e,borderRadius:`50%`,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,flexShrink:0}})}function ze({width:e,height:t}){return(0,w.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,height:`100%`,padding:`0 ${Math.max(8,t*.2)}px`,gap:e*.02},children:[(0,w.jsx)(I,{w:Math.max(20,t*.5),h:Math.max(12,t*.4),radius:2}),(0,w.jsxs)(`div`,{style:{flex:1,display:`flex`,gap:e*.03,marginLeft:e*.04},children:[(0,w.jsx)(F,{w:e*.06}),(0,w.jsx)(F,{w:e*.07}),(0,w.jsx)(F,{w:e*.05}),(0,w.jsx)(F,{w:e*.06})]}),(0,w.jsx)(I,{w:e*.1,h:Math.min(28,t*.5),radius:4})]})}function Be({width:e,height:t,text:n}){return(0,w.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:t*.05},children:[n?(0,w.jsx)(`span`,{style:{fontSize:Math.min(20,t*.08),fontWeight:600,color:`var(--agd-text-3)`,textAlign:`center`,maxWidth:`80%`},children:n}):(0,w.jsx)(F,{w:e*.5,h:Math.max(6,t*.04),strong:!0}),(0,w.jsx)(F,{w:e*.6}),(0,w.jsx)(F,{w:e*.4}),(0,w.jsx)(I,{w:Math.min(140,e*.2),h:Math.min(36,t*.12),radius:6,style:{marginTop:t*.06}})]})}function Ve({width:e,height:t}){let n=Math.max(3,Math.floor(t/36));return(0,w.jsxs)(`div`,{style:{padding:e*.08,display:`flex`,flexDirection:`column`,gap:t*.03},children:[(0,w.jsx)(F,{w:e*.6,h:4,strong:!0}),Array.from({length:n},(t,n)=>(0,w.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,w.jsx)(I,{w:10,h:10,radius:2}),(0,w.jsx)(F,{w:e*(.4+n*17%30/100)})]},n))]})}function He({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/160)));return(0,w.jsx)(`div`,{style:{display:`flex`,padding:`${t*.12}px ${e*.03}px`,gap:e*.05},children:Array.from({length:n},(e,t)=>(0,w.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:4},children:[(0,w.jsx)(F,{w:`60%`,h:3,strong:!0}),(0,w.jsx)(F,{w:`80%`,h:2}),(0,w.jsx)(F,{w:`70%`,h:2}),(0,w.jsx)(F,{w:`60%`,h:2})]},t))})}function Ue({width:e,height:t}){return(0,w.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,w.jsxs)(`div`,{style:{padding:`10px 12px`,borderBottom:`1px solid var(--agd-stroke)`,display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,w.jsx)(F,{w:e*.3,h:4,strong:!0}),(0,w.jsx)(`div`,{style:{width:14,height:14,border:`1px solid var(--agd-stroke)`,borderRadius:3}})]}),(0,w.jsxs)(`div`,{style:{flex:1,padding:12,display:`flex`,flexDirection:`column`,gap:6},children:[(0,w.jsx)(F,{w:`90%`}),(0,w.jsx)(F,{w:`70%`}),(0,w.jsx)(F,{w:`80%`})]}),(0,w.jsxs)(`div`,{style:{padding:`10px 12px`,borderTop:`1px solid var(--agd-stroke)`,display:`flex`,justifyContent:`flex-end`,gap:8},children:[(0,w.jsx)(I,{w:70,h:26,radius:4}),(0,w.jsx)(I,{w:70,h:26,radius:4,style:{background:`var(--agd-bar)`}})]})]})}function We({width:e,height:t}){return(0,w.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,w.jsx)(`div`,{style:{height:`40%`,background:`var(--agd-fill)`,borderBottom:`1px dashed var(--agd-stroke)`}}),(0,w.jsxs)(`div`,{style:{flex:1,padding:10,display:`flex`,flexDirection:`column`,gap:5},children:[(0,w.jsx)(F,{w:`70%`,h:4,strong:!0}),(0,w.jsx)(F,{w:`95%`,h:2}),(0,w.jsx)(F,{w:`85%`,h:2}),(0,w.jsx)(F,{w:`50%`,h:2})]})]})}function Ge({width:e,height:t,text:n}){if(n)return(0,w.jsx)(`div`,{style:{padding:4,fontSize:Math.min(14,t*.3),lineHeight:1.5,color:`var(--agd-text-3)`,wordBreak:`break-word`,overflow:`hidden`},children:n});let r=Math.max(2,Math.floor(t/18));return(0,w.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:6,padding:4},children:[(0,w.jsx)(F,{w:e*.6,h:5,strong:!0}),Array.from({length:r},(e,t)=>(0,w.jsx)(F,{w:`${70+t*13%25}%`,h:2},t))]})}function Ke({width:e,height:t}){return(0,w.jsx)(`div`,{style:{height:`100%`,position:`relative`},children:(0,w.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,preserveAspectRatio:`none`,fill:`none`,children:[(0,w.jsx)(`line`,{x1:`0`,y1:`0`,x2:e,y2:t,stroke:`var(--agd-stroke)`,strokeWidth:`1`}),(0,w.jsx)(`line`,{x1:e,y1:`0`,x2:`0`,y2:t,stroke:`var(--agd-stroke)`,strokeWidth:`1`}),(0,w.jsx)(`circle`,{cx:e*.3,cy:t*.3,r:Math.min(e,t)*.08,fill:`var(--agd-fill)`,stroke:`var(--agd-stroke)`,strokeWidth:`0.8`})]})})}function L({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(e/100))),r=Math.max(2,Math.min(6,Math.floor(t/32)));return(0,w.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,w.jsx)(`div`,{style:{display:`flex`,borderBottom:`1px solid var(--agd-stroke)`,padding:`6px 0`},children:Array.from({length:n},(e,t)=>(0,w.jsx)(`div`,{style:{flex:1,padding:`0 8px`},children:(0,w.jsx)(F,{w:`70%`,h:3,strong:!0})},t))}),Array.from({length:r},(e,t)=>(0,w.jsx)(`div`,{style:{display:`flex`,borderBottom:`1px solid rgba(255,255,255,0.03)`,padding:`6px 0`},children:Array.from({length:n},(e,n)=>(0,w.jsx)(`div`,{style:{flex:1,padding:`0 8px`},children:(0,w.jsx)(F,{w:`${50+(t*7+n*13)%40}%`,h:2})},n))},t))]})}function qe({width:e,height:t}){let n=Math.max(2,Math.floor(t/28));return(0,w.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4,padding:4},children:Array.from({length:n},(e,t)=>(0,w.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,padding:`4px 0`},children:[(0,w.jsx)(Re,{size:8}),(0,w.jsx)(F,{w:`${55+t*17%35}%`,h:2})]},t))})}function Je({width:e,height:t,text:n}){return(0,w.jsx)(`div`,{style:{height:`100%`,borderRadius:Math.min(8,t/3),border:`1px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:n?(0,w.jsx)(`span`,{style:{fontSize:Math.min(13,t*.4),fontWeight:500,color:`var(--agd-text-3)`,letterSpacing:`-0.01em`},children:n}):(0,w.jsx)(F,{w:Math.max(20,e*.5),h:3,strong:!0})})}function Ye({width:e,height:t}){return(0,w.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4,height:`100%`,justifyContent:`center`},children:[(0,w.jsx)(F,{w:Math.min(80,e*.3),h:2}),(0,w.jsx)(`div`,{style:{height:Math.min(36,t*.6),borderRadius:4,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,paddingLeft:8},children:(0,w.jsx)(F,{w:`40%`,h:2})})]})}function Xe({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(t/56)));return(0,w.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:t*.04,padding:8},children:[Array.from({length:n},(e,t)=>(0,w.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4},children:[(0,w.jsx)(F,{w:60+t*17%30,h:2}),(0,w.jsx)(I,{w:`100%`,h:28,radius:4})]},t)),(0,w.jsx)(I,{w:Math.min(120,e*.35),h:30,radius:6,style:{marginTop:8,alignSelf:`flex-end`,background:`var(--agd-bar)`}})]})}function Ze({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120)));return(0,w.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,w.jsx)(`div`,{style:{display:`flex`,gap:2,borderBottom:`1px solid var(--agd-stroke)`},children:Array.from({length:n},(e,t)=>(0,w.jsx)(`div`,{style:{padding:`8px 12px`,borderBottom:t===0?`2px solid var(--agd-bar-strong)`:`none`},children:(0,w.jsx)(F,{w:60,h:3,strong:t===0})},t))}),(0,w.jsxs)(`div`,{style:{flex:1,padding:12,display:`flex`,flexDirection:`column`,gap:6},children:[(0,w.jsx)(F,{w:`80%`,h:2}),(0,w.jsx)(F,{w:`65%`,h:2}),(0,w.jsx)(F,{w:`75%`,h:2})]})]})}function Qe({width:e,height:t}){let n=Math.min(e,t)/2;return(0,w.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,w.jsx)(`circle`,{cx:e/2,cy:t/2,r:n-1,stroke:`var(--agd-stroke)`,fill:`var(--agd-fill)`,strokeWidth:`1.5`,strokeDasharray:`3 2`}),(0,w.jsx)(`circle`,{cx:e/2,cy:t*.38,r:n*.28,stroke:`var(--agd-stroke)`,fill:`var(--agd-fill)`,strokeWidth:`0.8`}),(0,w.jsx)(`path`,{d:`M${e/2-n*.55} ${t*.78} C${e/2-n*.55} ${t*.55} ${e/2+n*.55} ${t*.55} ${e/2+n*.55} ${t*.78}`,stroke:`var(--agd-stroke)`,fill:`var(--agd-fill)`,strokeWidth:`0.8`})]})}function $e({width:e,height:t}){return(0,w.jsx)(`div`,{style:{height:`100%`,borderRadius:t/2,border:`1px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,w.jsx)(F,{w:Math.max(16,e*.5),h:2,strong:!0})})}function et({width:e,height:t}){return(0,w.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:t*.08},children:[(0,w.jsx)(F,{w:e*.5,h:Math.max(5,t*.06),strong:!0}),(0,w.jsx)(F,{w:e*.35})]})}function tt({width:e,height:t}){return(0,w.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:t*.04,padding:e*.04},children:[(0,w.jsx)(F,{w:e*.3,h:4,strong:!0}),(0,w.jsx)(F,{w:e*.7}),(0,w.jsx)(F,{w:e*.5}),(0,w.jsxs)(`div`,{style:{flex:1,display:`flex`,gap:e*.03,marginTop:t*.06},children:[(0,w.jsx)(I,{w:`33%`,h:`100%`,radius:4}),(0,w.jsx)(I,{w:`33%`,h:`100%`,radius:4}),(0,w.jsx)(I,{w:`33%`,h:`100%`,radius:4})]})]})}function nt({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/140))),r=Math.max(1,Math.min(3,Math.floor(t/120)));return(0,w.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${r}, 1fr)`,gap:6,height:`100%`},children:Array.from({length:n*r},(e,t)=>(0,w.jsx)(I,{w:`100%`,h:`100%`,radius:4},t))})}function rt({width:e,height:t}){let n=Math.max(2,Math.floor((t-32)/28));return(0,w.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,w.jsx)(`div`,{style:{padding:`6px 8px`,borderBottom:`1px solid var(--agd-stroke)`},children:(0,w.jsx)(F,{w:e*.5,h:3,strong:!0})}),(0,w.jsx)(`div`,{style:{flex:1,padding:4,display:`flex`,flexDirection:`column`,gap:2},children:Array.from({length:n},(e,t)=>(0,w.jsx)(`div`,{style:{padding:`4px 6px`,borderRadius:3,background:t===0?`var(--agd-fill)`:`transparent`},children:(0,w.jsx)(F,{w:`${50+t*17%35}%`,h:2,strong:t===0})},t))})]})}function it({width:e,height:t}){let n=Math.min(e,t)/2;return(0,w.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`1`,y:`1`,width:e-2,height:t-2,rx:n,stroke:`var(--agd-stroke)`,strokeWidth:`1`}),(0,w.jsx)(`circle`,{cx:e-n,cy:t/2,r:n*.7,fill:`var(--agd-bar)`})]})}function at({width:e,height:t}){let n=Math.min(t/2,20);return(0,w.jsxs)(`div`,{style:{height:`100%`,borderRadius:n,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 ${n*.6}px`,gap:6},children:[(0,w.jsx)(Re,{size:Math.min(14,t*.4)}),(0,w.jsx)(F,{w:`50%`,h:2})]})}function ot({width:e,height:t}){return(0,w.jsxs)(`div`,{style:{height:`100%`,borderRadius:8,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 10px`,gap:8},children:[(0,w.jsx)(Re,{size:Math.min(20,t*.5)}),(0,w.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,w.jsx)(F,{w:`60%`,h:3,strong:!0}),(0,w.jsx)(F,{w:`80%`,h:2})]}),(0,w.jsx)(`div`,{style:{width:14,height:14,border:`1px solid var(--agd-stroke)`,borderRadius:3,flexShrink:0}})]})}function st({width:e,height:t}){return(0,w.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`0`,y:`0`,width:e,height:t,rx:t/2,stroke:`var(--agd-stroke)`,strokeWidth:`0.8`}),(0,w.jsx)(`rect`,{x:`1`,y:`1`,width:e*.65,height:t-2,rx:(t-2)/2,fill:`var(--agd-bar)`})]})}function R({width:e,height:t}){let n=Math.max(3,Math.min(7,Math.floor(e/50))),r=e/(n*2);return(0,w.jsx)(`div`,{style:{height:`100%`,display:`flex`,alignItems:`flex-end`,justifyContent:`space-around`,padding:`0 4px`,borderBottom:`1px solid var(--agd-stroke)`},children:Array.from({length:n},(e,t)=>(0,w.jsx)(I,{w:r,h:`${30+(t*37+17)%55}%`,radius:2},t))})}function ct({width:e,height:t}){let n=Math.min(e,t)*.12;return(0,w.jsxs)(`div`,{style:{height:`100%`,position:`relative`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:[(0,w.jsx)(I,{w:`100%`,h:`100%`,radius:4}),(0,w.jsx)(`div`,{style:{position:`absolute`,width:n*2,height:n*2,borderRadius:`50%`,border:`1.5px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,w.jsx)(`div`,{style:{width:0,height:0,borderLeft:`${n*.6}px solid var(--agd-bar-strong)`,borderTop:`${n*.4}px solid transparent`,borderBottom:`${n*.4}px solid transparent`,marginLeft:n*.15}})})]})}function lt({width:e,height:t}){return(0,w.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`},children:[(0,w.jsx)(`div`,{style:{flex:1,width:`100%`,borderRadius:6,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,w.jsx)(F,{w:`60%`,h:2})}),(0,w.jsx)(`div`,{style:{width:8,height:8,background:`var(--agd-fill)`,border:`1px dashed var(--agd-stroke)`,borderTop:`none`,borderLeft:`none`,transform:`rotate(45deg)`,marginTop:-5}})]})}function ut({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/80)));return(0,w.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,height:`100%`,gap:4},children:Array.from({length:n},(e,t)=>(0,w.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:4},children:[t>0&&(0,w.jsx)(`span`,{style:{color:`var(--agd-stroke)`,fontSize:10},children:`/`}),(0,w.jsx)(F,{w:40+t*13%20,h:2,strong:t===n-1})]},t))})}function dt({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(e/40))),r=Math.min(28,t*.8);return(0,w.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:4},children:Array.from({length:n},(e,t)=>(0,w.jsx)(I,{w:r,h:r,radius:4,style:t===1?{background:`var(--agd-bar)`}:void 0},t))})}function ft({width:e}){return(0,w.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,height:`100%`},children:(0,w.jsx)(`div`,{style:{width:`100%`,height:1,background:`var(--agd-stroke)`}})})}function pt({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(t/40)));return(0,w.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`},children:Array.from({length:n},(e,t)=>(0,w.jsxs)(`div`,{style:{borderBottom:`1px solid var(--agd-stroke)`,padding:`8px 6px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,flex:t===0?2:1},children:[(0,w.jsx)(F,{w:`${40+t*17%25}%`,h:3,strong:!0}),(0,w.jsx)(`span`,{style:{fontSize:8,color:`var(--agd-stroke)`},children:t===0?`▼`:`▶`})]},t))})}function mt({width:e,height:t}){return(0,w.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,gap:6},children:[(0,w.jsxs)(`div`,{style:{flex:1,display:`flex`,gap:6,alignItems:`center`},children:[(0,w.jsx)(`span`,{style:{fontSize:12,color:`var(--agd-stroke)`},children:`‹`}),(0,w.jsx)(I,{w:`100%`,h:`100%`,radius:4}),(0,w.jsx)(`span`,{style:{fontSize:12,color:`var(--agd-stroke)`},children:`›`})]}),(0,w.jsxs)(`div`,{style:{display:`flex`,justifyContent:`center`,gap:4},children:[(0,w.jsx)(Re,{size:5}),(0,w.jsx)(Re,{size:5}),(0,w.jsx)(Re,{size:5})]})]})}function ht({width:e,height:t}){return(0,w.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,padding:10,gap:t*.04},children:[(0,w.jsx)(F,{w:e*.4,h:3,strong:!0}),(0,w.jsx)(F,{w:e*.3,h:6,strong:!0}),(0,w.jsx)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:4,width:`100%`,padding:`8px 0`},children:Array.from({length:4},(e,t)=>(0,w.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:4},children:[(0,w.jsx)(Re,{size:5}),(0,w.jsx)(F,{w:`${50+t*17%35}%`,h:2})]},t))}),(0,w.jsx)(I,{w:e*.7,h:Math.min(32,t*.1),radius:6,style:{background:`var(--agd-bar)`}})]})}function gt({width:e,height:t}){return(0,w.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,padding:10,gap:8},children:[(0,w.jsx)(`span`,{style:{fontSize:18,lineHeight:1,color:`var(--agd-stroke)`,fontFamily:`serif`},children:`“`}),(0,w.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:4},children:[(0,w.jsx)(F,{w:`90%`,h:2}),(0,w.jsx)(F,{w:`75%`,h:2}),(0,w.jsx)(F,{w:`60%`,h:2})]}),(0,w.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,w.jsx)(Re,{size:20}),(0,w.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:2},children:[(0,w.jsx)(F,{w:60,h:3,strong:!0}),(0,w.jsx)(F,{w:40,h:2})]})]})]})}function _t({width:e,height:t}){return(0,w.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:t*.08},children:[(0,w.jsx)(F,{w:e*.5,h:Math.max(4,t*.05),strong:!0}),(0,w.jsx)(F,{w:e*.35}),(0,w.jsx)(I,{w:Math.min(140,e*.25),h:Math.min(32,t*.15),radius:6,style:{marginTop:t*.04,background:`var(--agd-bar)`}})]})}function vt({width:e,height:t}){return(0,w.jsxs)(`div`,{style:{height:`100%`,borderRadius:6,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 10px`,gap:8},children:[(0,w.jsx)(`div`,{style:{width:16,height:16,borderRadius:`50%`,border:`1.5px solid var(--agd-bar-strong)`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0},children:(0,w.jsx)(`div`,{style:{width:2,height:6,background:`var(--agd-bar-strong)`,borderRadius:1}})}),(0,w.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,w.jsx)(F,{w:`40%`,h:3,strong:!0}),(0,w.jsx)(F,{w:`70%`,h:2})]})]})}function yt({width:e,height:t}){return(0,w.jsxs)(`div`,{style:{height:`100%`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:8,padding:`0 12px`},children:[(0,w.jsx)(F,{w:e*.4,h:3,strong:!0}),(0,w.jsx)(I,{w:60,h:Math.min(24,t*.6),radius:4})]})}function bt({width:e,height:t}){return(0,w.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:t*.06},children:[(0,w.jsx)(F,{w:e*.5,h:2}),(0,w.jsx)(F,{w:e*.4,h:Math.max(8,t*.18),strong:!0}),(0,w.jsx)(F,{w:e*.3,h:2})]})}function xt({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(e/100))),r=Math.min(12,t*.35);return(0,w.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,height:`100%`,padding:`0 8px`},children:Array.from({length:n},(e,t)=>(0,w.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:0,flex:1},children:[(0,w.jsx)(`div`,{style:{width:r,height:r,borderRadius:`50%`,border:`1.5px solid var(--agd-stroke)`,background:t===0?`var(--agd-bar)`:`transparent`,flexShrink:0}}),t<n-1&&(0,w.jsx)(`div`,{style:{flex:1,height:1,background:`var(--agd-stroke)`,margin:`0 4px`}})]},t))})}function St({width:e,height:t}){return(0,w.jsxs)(`div`,{style:{height:`100%`,borderRadius:4,border:`1px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:4,padding:`0 6px`},children:[(0,w.jsx)(F,{w:Math.max(16,e*.5),h:2,strong:!0}),(0,w.jsx)(`div`,{style:{width:8,height:8,borderRadius:`50%`,border:`1px solid var(--agd-stroke)`,flexShrink:0}})]})}function Ct({width:e,height:t}){let n=Math.min(t*.7,e/(5*1.5));return(0,w.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:n*.2},children:Array.from({length:5},(e,t)=>(0,w.jsx)(`svg`,{width:n,height:n,viewBox:`0 0 16 16`,fill:`none`,children:(0,w.jsx)(`path`,{d:`M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z`,stroke:`var(--agd-stroke)`,strokeWidth:`0.8`,fill:t<3?`var(--agd-bar)`:`none`})},t))})}function z({width:e,height:t}){return(0,w.jsxs)(`div`,{style:{height:`100%`,position:`relative`,borderRadius:4,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,overflow:`hidden`},children:[(0,w.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,style:{position:`absolute`,inset:0},children:[(0,w.jsx)(`line`,{x1:0,y1:t*.3,x2:e,y2:t*.7,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`,opacity:`.2`}),(0,w.jsx)(`line`,{x1:0,y1:t*.6,x2:e,y2:t*.2,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`,opacity:`.15`}),(0,w.jsx)(`line`,{x1:e*.4,y1:0,x2:e*.6,y2:t,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`,opacity:`.15`})]}),(0,w.jsx)(`div`,{style:{position:`absolute`,left:`50%`,top:`40%`,transform:`translate(-50%, -100%)`},children:(0,w.jsxs)(`svg`,{width:`16`,height:`22`,viewBox:`0 0 16 22`,fill:`none`,children:[(0,w.jsx)(`path`,{d:`M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z`,fill:`var(--agd-bar)`,opacity:`.4`}),(0,w.jsx)(`circle`,{cx:`8`,cy:`8`,r:`3`,fill:`var(--agd-fill)`})]})})]})}function wt({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(t/60)));return(0,w.jsxs)(`div`,{style:{display:`flex`,height:`100%`,padding:`8px 0`},children:[(0,w.jsx)(`div`,{style:{width:16,display:`flex`,flexDirection:`column`,alignItems:`center`},children:Array.from({length:n},(e,t)=>(0,w.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,flex:1},children:[(0,w.jsx)(Re,{size:8}),t<n-1&&(0,w.jsx)(`div`,{style:{flex:1,width:1,background:`var(--agd-stroke)`}})]},t))}),(0,w.jsx)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,justifyContent:`space-around`,paddingLeft:8},children:Array.from({length:n},(e,t)=>(0,w.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:3},children:[(0,w.jsx)(F,{w:`${35+t*13%25}%`,h:3,strong:!0}),(0,w.jsx)(F,{w:`${50+t*17%30}%`,h:2})]},t))})]})}function Tt({width:e,height:t}){return(0,w.jsxs)(`div`,{style:{height:`100%`,borderRadius:8,border:`2px dashed var(--agd-stroke)`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:t*.06},children:[(0,w.jsxs)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,w.jsx)(`path`,{d:`M12 16V4m0 0l-4 4m4-4l4 4`,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`}),(0,w.jsx)(`path`,{d:`M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2`,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`})]}),(0,w.jsx)(F,{w:e*.4,h:2}),(0,w.jsx)(F,{w:e*.25,h:2})]})}function Et({width:e,height:t}){let n=Math.max(3,Math.min(8,Math.floor(t/20)));return(0,w.jsxs)(`div`,{style:{height:`100%`,borderRadius:6,background:`var(--agd-fill)`,border:`1px solid var(--agd-stroke)`,padding:8,display:`flex`,flexDirection:`column`,gap:4},children:[(0,w.jsxs)(`div`,{style:{display:`flex`,gap:3,marginBottom:4},children:[(0,w.jsx)(Re,{size:6}),(0,w.jsx)(Re,{size:6}),(0,w.jsx)(Re,{size:6})]}),Array.from({length:n},(e,t)=>(0,w.jsx)(`div`,{style:{display:`flex`,gap:6,paddingLeft:t>0&&t<n-1?12:0},children:(0,w.jsx)(F,{w:`${25+t*23%50}%`,h:2,strong:t===0})},t))]})}function Dt({width:e,height:t}){let n=Math.min((e-16)/7,(t-40)/6);return(0,w.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,w.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`6px 8px`},children:[(0,w.jsx)(`span`,{style:{fontSize:8,color:`var(--agd-stroke)`},children:`‹`}),(0,w.jsx)(F,{w:e*.3,h:3,strong:!0}),(0,w.jsx)(`span`,{style:{fontSize:8,color:`var(--agd-stroke)`},children:`›`})]}),(0,w.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(7, 1fr)`,gap:2,padding:`0 4px`,flex:1},children:[Array.from({length:7},(e,t)=>(0,w.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:n*.6},children:(0,w.jsx)(F,{w:n*.5,h:2})},`h${t}`)),Array.from({length:35},(e,t)=>(0,w.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:n},children:(0,w.jsx)(`div`,{style:{width:n*.6,height:n*.6,borderRadius:`50%`,background:t===12?`var(--agd-bar)`:`transparent`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,w.jsx)(`div`,{style:{width:2,height:2,borderRadius:1,background:`var(--agd-bar-strong)`,opacity:t===12?1:.3}})})},t))]})]})}function Ot({width:e,height:t}){return(0,w.jsxs)(`div`,{style:{height:`100%`,borderRadius:8,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 10px`,gap:8},children:[(0,w.jsx)(Re,{size:Math.min(32,t*.55)}),(0,w.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,w.jsx)(F,{w:`50%`,h:3,strong:!0}),(0,w.jsx)(F,{w:`75%`,h:2})]}),(0,w.jsx)(F,{w:30,h:2})]})}function kt({width:e,height:t}){return(0,w.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,w.jsx)(`div`,{style:{height:`50%`,background:`var(--agd-fill)`,borderBottom:`1px dashed var(--agd-stroke)`}}),(0,w.jsxs)(`div`,{style:{flex:1,padding:10,display:`flex`,flexDirection:`column`,gap:5},children:[(0,w.jsx)(F,{w:`65%`,h:4,strong:!0}),(0,w.jsx)(F,{w:`40%`,h:3}),(0,w.jsx)(`div`,{style:{flex:1}}),(0,w.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,w.jsx)(F,{w:`30%`,h:5,strong:!0}),(0,w.jsx)(I,{w:Math.min(70,e*.3),h:26,radius:4,style:{background:`var(--agd-bar)`}})]})]})]})}function At({width:e,height:t}){let n=Math.min(48,t*.3);return(0,w.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:t*.06},children:[(0,w.jsx)(Re,{size:n}),(0,w.jsx)(F,{w:e*.45,h:4,strong:!0}),(0,w.jsx)(F,{w:e*.3,h:2}),(0,w.jsxs)(`div`,{style:{display:`flex`,gap:e*.08,marginTop:t*.04},children:[(0,w.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,w.jsx)(F,{w:20,h:3,strong:!0}),(0,w.jsx)(F,{w:28,h:2})]}),(0,w.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,w.jsx)(F,{w:20,h:3,strong:!0}),(0,w.jsx)(F,{w:28,h:2})]}),(0,w.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,w.jsx)(F,{w:20,h:3,strong:!0}),(0,w.jsx)(F,{w:28,h:2})]})]})]})}function jt({width:e,height:t}){let n=Math.max(e*.6,80),r=Math.max(3,Math.floor(t/40));return(0,w.jsxs)(`div`,{style:{height:`100%`,display:`flex`},children:[(0,w.jsx)(`div`,{style:{width:e-n,background:`var(--agd-fill)`,opacity:.3}}),(0,w.jsxs)(`div`,{style:{flex:1,borderLeft:`1px solid var(--agd-stroke)`,display:`flex`,flexDirection:`column`,padding:e*.04},children:[(0,w.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:t*.06},children:[(0,w.jsx)(F,{w:n*.4,h:4,strong:!0}),(0,w.jsx)(`div`,{style:{width:12,height:12,border:`1px solid var(--agd-stroke)`,borderRadius:3}})]}),Array.from({length:r},(e,t)=>(0,w.jsx)(`div`,{style:{padding:`6px 0`},children:(0,w.jsx)(F,{w:`${50+t*17%35}%`,h:2,strong:t===0})},t))]})]})}function Mt({width:e,height:t}){return(0,w.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`},children:[(0,w.jsxs)(`div`,{style:{flex:1,width:`100%`,borderRadius:8,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,padding:10,display:`flex`,flexDirection:`column`,gap:5},children:[(0,w.jsx)(F,{w:`70%`,h:3,strong:!0}),(0,w.jsx)(F,{w:`90%`,h:2}),(0,w.jsx)(F,{w:`60%`,h:2})]}),(0,w.jsx)(`div`,{style:{width:10,height:10,background:`var(--agd-fill)`,border:`1px dashed var(--agd-stroke)`,borderTop:`none`,borderLeft:`none`,transform:`rotate(45deg)`,marginTop:-6}})]})}function Nt({width:e,height:t}){let n=Math.min(t*.7,e*.3);return(0,w.jsxs)(`div`,{style:{height:`100%`,display:`flex`,alignItems:`center`,gap:e*.08},children:[(0,w.jsx)(I,{w:n,h:n,radius:n*.25}),(0,w.jsx)(F,{w:e*.45,h:Math.max(4,t*.2),strong:!0})]})}function Pt({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(t/56)));return(0,w.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`},children:Array.from({length:n},(t,n)=>(0,w.jsxs)(`div`,{style:{borderBottom:`1px solid var(--agd-stroke)`,padding:`8px 6px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,flex:n===0?2:1},children:[(0,w.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,w.jsx)(`span`,{style:{fontSize:9,fontWeight:700,color:`var(--agd-stroke)`},children:`Q`}),(0,w.jsx)(F,{w:e*(.3+n*13%25/100),h:3,strong:!0})]}),(0,w.jsx)(`span`,{style:{fontSize:8,color:`var(--agd-stroke)`},children:n===0?`▼`:`▶`})]},n))})}function Ft({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120))),r=Math.max(1,Math.min(3,Math.floor(t/120)));return(0,w.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${r}, 1fr)`,gap:4,height:`100%`},children:Array.from({length:n*r},(e,t)=>(0,w.jsx)(`div`,{style:{borderRadius:4,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,position:`relative`,overflow:`hidden`},children:(0,w.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 100 100`,preserveAspectRatio:`none`,fill:`none`,children:[(0,w.jsx)(`line`,{x1:`0`,y1:`0`,x2:`100`,y2:`100`,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`}),(0,w.jsx)(`line`,{x1:`100`,y1:`0`,x2:`0`,y2:`100`,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`})]})},t))})}function It({width:e,height:t}){let n=Math.min(e,t);return(0,w.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`1`,y:(t-n+2)/2,width:n-2,height:n-2,rx:n*.15,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`}),(0,w.jsx)(`path`,{d:`M${n*.25} ${t/2}l${n*.2} ${n*.2} ${n*.3}-${n*.35}`,stroke:`var(--agd-bar)`,strokeWidth:`1.5`,fill:`none`,strokeLinecap:`round`,strokeLinejoin:`round`})]})}function Lt({width:e,height:t}){let n=Math.min(e,t)/2-1;return(0,w.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,w.jsx)(`circle`,{cx:e/2,cy:t/2,r:n,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`}),(0,w.jsx)(`circle`,{cx:e/2,cy:t/2,r:n*.45,fill:`var(--agd-bar)`})]})}function Rt({width:e,height:t}){let n=Math.max(2,t*.12),r=Math.min(t*.35,10),i=e*.55;return(0,w.jsxs)(`div`,{style:{height:`100%`,display:`flex`,alignItems:`center`,position:`relative`},children:[(0,w.jsx)(`div`,{style:{width:`100%`,height:n,borderRadius:n/2,background:`var(--agd-fill)`,border:`1px solid var(--agd-stroke)`,position:`relative`},children:(0,w.jsx)(`div`,{style:{width:i,height:`100%`,borderRadius:n/2,background:`var(--agd-bar)`}})}),(0,w.jsx)(`div`,{style:{position:`absolute`,left:i-r,width:r*2,height:r*2,borderRadius:`50%`,border:`1.5px solid var(--agd-stroke)`,background:`var(--agd-fill)`}})]})}function zt({width:e,height:t}){let n=Math.min(36,t*.15),r=Math.min((e-16)/7,(t-n-40)/5);return(0,w.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,gap:4},children:[(0,w.jsxs)(`div`,{style:{height:n,borderRadius:4,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 8px`,justifyContent:`space-between`},children:[(0,w.jsx)(F,{w:`40%`,h:2}),(0,w.jsxs)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`2`,y:`3`,width:`12`,height:`11`,rx:`1`,stroke:`var(--agd-stroke)`,strokeWidth:`1`}),(0,w.jsx)(`line`,{x1:`2`,y1:`6`,x2:`14`,y2:`6`,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`})]})]}),(0,w.jsxs)(`div`,{style:{flex:1,borderRadius:6,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,flexDirection:`column`},children:[(0,w.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`4px 6px`},children:[(0,w.jsx)(`span`,{style:{fontSize:7,color:`var(--agd-stroke)`},children:`‹`}),(0,w.jsx)(F,{w:e*.25,h:2,strong:!0}),(0,w.jsx)(`span`,{style:{fontSize:7,color:`var(--agd-stroke)`},children:`›`})]}),(0,w.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(7, 1fr)`,gap:1,padding:`0 4px`,flex:1},children:Array.from({length:28},(e,t)=>(0,w.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:r},children:(0,w.jsx)(`div`,{style:{width:r*.5,height:r*.5,borderRadius:`50%`,background:t===10?`var(--agd-bar)`:`transparent`},children:(0,w.jsx)(`div`,{style:{width:`100%`,height:`100%`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,w.jsx)(`div`,{style:{width:1.5,height:1.5,borderRadius:1,background:`var(--agd-bar-strong)`,opacity:t===10?1:.25}})})})},t))})]})]})}function Bt({width:e,height:t}){return(0,w.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,gap:t*.08,padding:4},children:[(0,w.jsx)(`div`,{style:{width:`100%`,height:t*.2,borderRadius:4,background:`var(--agd-fill)`}}),(0,w.jsx)(`div`,{style:{width:`70%`,height:Math.max(6,t*.1),borderRadius:3,background:`var(--agd-fill)`}}),(0,w.jsx)(`div`,{style:{width:`90%`,height:Math.max(4,t*.06),borderRadius:3,background:`var(--agd-fill)`}}),(0,w.jsx)(`div`,{style:{width:`50%`,height:Math.max(4,t*.06),borderRadius:3,background:`var(--agd-fill)`}})]})}function Vt({width:e,height:t}){return(0,w.jsx)(`div`,{style:{height:`100%`,display:`flex`,alignItems:`center`,gap:6},children:(0,w.jsxs)(`div`,{style:{height:`100%`,flex:1,borderRadius:t/2,border:`1px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 ${t*.3}px`,gap:4},children:[(0,w.jsx)(F,{w:`60%`,h:2,strong:!0}),(0,w.jsx)(`div`,{style:{width:Math.max(6,t*.3),height:Math.max(6,t*.3),borderRadius:`50%`,border:`1px solid var(--agd-stroke)`,flexShrink:0,marginLeft:`auto`}})]})})}function Ht({width:e,height:t}){let n=Math.min(e,t);return(0,w.jsx)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:(0,w.jsx)(`path`,{d:`M${e/2} ${(t-n)/2+n*.1}l${n*.12} ${n*.25} ${n*.28} ${n*.04}-${n*.2} ${n*.2} ${n*.05} ${n*.28}-${n*.25}-${n*.12}-${n*.25} ${n*.12} ${n*.05}-${n*.28}-${n*.2}-${n*.2} ${n*.28}-${n*.04}z`,stroke:`var(--agd-stroke)`,strokeWidth:`1`,fill:`var(--agd-fill)`})})}function Ut({width:e,height:t}){let n=Math.min(e,t)/2-2;return(0,w.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,w.jsx)(`circle`,{cx:e/2,cy:t/2,r:n,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`,opacity:`.2`}),(0,w.jsx)(`path`,{d:`M${e/2} ${t/2-n}a${n} ${n} 0 0 1 ${n} ${n}`,stroke:`var(--agd-bar-strong)`,strokeWidth:`1.5`,strokeLinecap:`round`})]})}function Wt({width:e,height:t}){let n=Math.min(36,t*.25,e*.12),r=Math.max(1,Math.min(3,Math.floor(t/80)));return(0,w.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,justifyContent:`space-around`,padding:8},children:Array.from({length:r},(t,r)=>(0,w.jsxs)(`div`,{style:{display:`flex`,gap:e*.04,alignItems:`flex-start`},children:[(0,w.jsx)(I,{w:n,h:n,radius:n*.25}),(0,w.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:4},children:[(0,w.jsx)(F,{w:`${40+r*13%20}%`,h:3,strong:!0}),(0,w.jsx)(F,{w:`${60+r*17%25}%`,h:2})]})]},r))})}function Gt({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120))),r=Math.min(36,t*.25);return(0,w.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:t*.06,padding:t*.06},children:[(0,w.jsx)(F,{w:e*.3,h:4,strong:!0}),(0,w.jsx)(`div`,{style:{display:`flex`,gap:e*.06,justifyContent:`center`,flex:1,alignItems:`center`},children:Array.from({length:n},(t,n)=>(0,w.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6},children:[(0,w.jsx)(Re,{size:r}),(0,w.jsx)(F,{w:e*.12,h:3,strong:!0}),(0,w.jsx)(F,{w:e*.08,h:2})]},n))})]})}function Kt({width:e,height:t}){let n=Math.max(2,Math.min(3,Math.floor(t/80)));return(0,w.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,padding:e*.06,gap:t*.04},children:[(0,w.jsx)(F,{w:e*.5,h:Math.max(5,t*.04),strong:!0}),(0,w.jsx)(F,{w:e*.35,h:2}),(0,w.jsx)(`div`,{style:{width:`100%`,display:`flex`,flexDirection:`column`,gap:t*.03,marginTop:t*.04},children:Array.from({length:n},(n,r)=>(0,w.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:3},children:[(0,w.jsx)(F,{w:Math.min(60,e*.2),h:2}),(0,w.jsx)(I,{w:`100%`,h:Math.min(32,t*.1),radius:4})]},r))}),(0,w.jsx)(I,{w:`100%`,h:Math.min(36,t*.12),radius:6,style:{marginTop:t*.03,background:`var(--agd-bar)`}}),(0,w.jsx)(F,{w:e*.4,h:2})]})}function qt({width:e,height:t}){return(0,w.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,padding:e*.04,gap:t*.03},children:[(0,w.jsx)(F,{w:e*.4,h:4,strong:!0}),(0,w.jsx)(F,{w:e*.6,h:2}),(0,w.jsxs)(`div`,{style:{display:`flex`,gap:6,marginTop:t*.03},children:[(0,w.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,w.jsx)(F,{w:50,h:2}),(0,w.jsx)(I,{w:`100%`,h:Math.min(28,t*.1),radius:4})]}),(0,w.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,w.jsx)(F,{w:40,h:2}),(0,w.jsx)(I,{w:`100%`,h:Math.min(28,t*.1),radius:4})]})]}),(0,w.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:3},children:[(0,w.jsx)(F,{w:50,h:2}),(0,w.jsx)(I,{w:`100%`,h:Math.min(28,t*.1),radius:4})]}),(0,w.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:3,flex:1},children:[(0,w.jsx)(F,{w:60,h:2}),(0,w.jsx)(I,{w:`100%`,h:`100%`,radius:4})]}),(0,w.jsx)(I,{w:Math.min(120,e*.3),h:Math.min(30,t*.1),radius:6,style:{alignSelf:`flex-end`,background:`var(--agd-bar)`}})]})}var Jt={navigation:ze,hero:Be,sidebar:Ve,footer:He,modal:Ue,card:We,text:Ge,image:Ke,table:L,list:qe,button:Je,input:Ye,form:Xe,tabs:Ze,avatar:Qe,badge:$e,header:et,section:tt,grid:nt,dropdown:rt,toggle:it,search:at,toast:ot,progress:st,chart:R,video:ct,tooltip:lt,breadcrumb:ut,pagination:dt,divider:ft,accordion:pt,carousel:mt,pricing:ht,testimonial:gt,cta:_t,alert:vt,banner:yt,stat:bt,stepper:xt,tag:St,rating:Ct,map:z,timeline:wt,fileUpload:Tt,codeBlock:Et,calendar:Dt,notification:Ot,productCard:kt,profile:At,drawer:jt,popover:Mt,logo:Nt,faq:Pt,gallery:Ft,checkbox:It,radio:Lt,slider:Rt,datePicker:zt,skeleton:Bt,chip:Vt,icon:Ht,spinner:Ut,feature:Wt,team:Gt,login:Kt,contact:qt};function Yt({type:e,width:t,height:n,text:r}){let i=Jt[e];return i?(0,w.jsx)(`div`,{style:{width:`100%`,height:`100%`,padding:8,position:`relative`,pointerEvents:`none`},children:(0,w.jsx)(i,{width:t,height:n,text:r})}):(0,w.jsx)(`div`,{style:{width:`100%`,height:`100%`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,w.jsx)(`span`,{style:{fontSize:10,fontWeight:600,color:`var(--agd-text-3)`,textTransform:`uppercase`,letterSpacing:`0.06em`,opacity:.5},children:e})})}var Xt=`svg[fill=none] {
  fill: none !important;
}

.styles-module__overlayExiting___iEmYr {
  opacity: 0 !important;
  transition: opacity 0.25s ease !important;
  pointer-events: none !important;
}

.styles-module__overlay___aWh-q {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: auto;
  cursor: default;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
  --agd-stroke: rgba(59, 130, 246, 0.35);
  --agd-fill: rgba(59, 130, 246, 0.06);
  --agd-bar: rgba(59, 130, 246, 0.18);
  --agd-bar-strong: rgba(59, 130, 246, 0.28);
  --agd-text-3: rgba(255, 255, 255, 0.6);
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q.styles-module__light___ORIft {
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) {
  --agd-surface: #141414;
}
.styles-module__overlay___aWh-q.styles-module__wireframe___itvQU {
  --agd-stroke: rgba(249, 115, 22, 0.35);
  --agd-fill: rgba(249, 115, 22, 0.06);
  --agd-bar: rgba(249, 115, 22, 0.18);
  --agd-bar-strong: rgba(249, 115, 22, 0.28);
}
.styles-module__overlay___aWh-q.styles-module__placing___45yD8 {
  cursor: crosshair;
}
.styles-module__overlay___aWh-q.styles-module__passthrough___xaFeE {
  pointer-events: none;
}

.styles-module__blankCanvas___t2Eue {
  position: fixed;
  inset: 0;
  z-index: 99994;
  background: #fff;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__visible___OKKqX {
  opacity: var(--canvas-opacity, 1);
  pointer-events: auto;
}
.styles-module__blankCanvas___t2Eue::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: 12px 12px;
  pointer-events: none;
  transition: opacity 0.2s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__gridActive___OZ-cf::after {
  opacity: 1;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.22) 1px, transparent 1px);
}

.styles-module__paletteHeader___-Q5gQ {
  padding: 0 1rem 0.375rem;
}

.styles-module__paletteHeaderTitle___oHqZC {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.0094em;
}
.styles-module__light___ORIft .styles-module__paletteHeaderTitle___oHqZC {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__paletteHeaderDesc___6i74T {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 2px;
  line-height: 14px;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T {
  color: rgba(0, 0, 0, 0.45);
}
.styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__paletteHeaderDesc___6i74T a:hover {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__wireframePurposeWrap___To-tS {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__wireframePurposeWrap___To-tS.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__wireframePurposeInner___Lrahs {
  overflow: hidden;
}

.styles-module__wireframePurposeInput___7EtBN {
  display: block;
  width: calc(100% - 2rem);
  margin: 0.25rem 1rem 0.375rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.8125rem;
  font-family: inherit;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN {
  color: rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.03);
  border-color: rgba(0, 0, 0, 0.1);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__canvasToggle___-QqSy {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  margin: 0.25rem 1rem 0.25rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  background: transparent;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.styles-module__canvasToggle___-QqSy:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.15);
}
.styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy {
  border-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy:hover {
  background: rgba(0, 0, 0, 0.02);
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}

.styles-module__canvasToggleIcon___7pJ82 {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__light___ORIft .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(0, 0, 0, 0.25);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__canvasToggleLabel___OanpY {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: -0.0094em;
}
.styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__canvasToggleLabel___OanpY {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}

.styles-module__canvasPurposeWrap___hj6zk {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__canvasPurposeWrap___hj6zk.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__canvasPurposeInner___VWiyu {
  overflow: hidden;
}

.styles-module__canvasPurposeToggle___byDH2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  margin: 0.375rem 1rem 0.375rem 1.1875rem;
}
.styles-module__canvasPurposeToggle___byDH2 input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.styles-module__canvasPurposeCheck___xqd7l {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.styles-module__canvasPurposeCheck___xqd7l svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
.styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH svg {
  color: #fff;
}

.styles-module__canvasPurposeLabel___Zu-tD {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.styles-module__light___ORIft .styles-module__canvasPurposeLabel___Zu-tD {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__canvasPurposeHelp___jijwR {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: help;
}
.styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(255, 255, 255, 0.2);
  transform: translateY(2px);
  transition: color 0.15s ease;
}
.styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__placement___zcxv8 {
  position: absolute;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.08);
  cursor: grab;
  transition: box-shadow 0.15s, border-color 0.15s, opacity 0.15s ease, transform 0.15s ease;
  user-select: none;
  pointer-events: auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  animation: styles-module__placementEnter___TdRhf 0.25s cubic-bezier(0.34, 1.2, 0.64, 1);
}
.styles-module__placement___zcxv8:active {
  cursor: grabbing;
}
.styles-module__placement___zcxv8:hover {
  border-color: rgba(59, 130, 246, 0.5);
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.12);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #3c82f7;
  border-style: solid;
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8 {
  border-color: rgba(249, 115, 22, 0.4);
  background: rgba(249, 115, 22, 0.08);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8:hover {
  border-color: rgba(249, 115, 22, 0.5);
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.12);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__placement___zcxv8.styles-module__dragging___le6KZ {
  opacity: 0.85;
  z-index: 50;
}
.styles-module__placement___zcxv8.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__placementContent___f64A4 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.styles-module__placementLabel___0KvWl {
  position: absolute;
  top: -18px;
  left: 0;
  font-size: 10px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.7);
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(255, 255, 255, 0.5);
}
.styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__placementLabel___0KvWl {
  color: rgba(249, 115, 22, 0.7);
}
.styles-module__wireframe___itvQU .styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #f97316;
}

.styles-module__placementAnnotation___78pTr {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(0, 0, 0, 0.5);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__placementAnnotation___78pTr.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__sectionAnnotation___aUIs0 {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(59, 130, 246, 0.6);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__sectionAnnotation___aUIs0.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__handle___Ikbxm {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fff;
  border: 1.5px solid #3c82f7;
  border-radius: 2px;
  z-index: 12;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.12);
  opacity: 0;
  transform: scale(0.3);
  pointer-events: none;
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.styles-module__placement___zcxv8:hover .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:hover .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:hover .styles-module__handle___Ikbxm, .styles-module__placement___zcxv8:active .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:active .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:active .styles-module__handle___Ikbxm, .styles-module__selected___6yrp6 .styles-module__handle___Ikbxm {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__sectionOutline___s0hy- .styles-module__handle___Ikbxm {
  border-color: inherit;
}
.styles-module__wireframe___itvQU .styles-module__handle___Ikbxm {
  border-color: #f97316;
}

.styles-module__handleNw___4TMIj {
  top: -4px;
  left: -4px;
  cursor: nw-resize;
}

.styles-module__handleNe___mnsTh {
  top: -4px;
  right: -4px;
  cursor: ne-resize;
}

.styles-module__handleSe___oSFnk {
  bottom: -4px;
  right: -4px;
  cursor: se-resize;
}

.styles-module__handleSw___pi--Z {
  bottom: -4px;
  left: -4px;
  cursor: sw-resize;
}

.styles-module__handleN___aBA-Q, .styles-module__handleE___0hM5u, .styles-module__handleS___JjDRv, .styles-module__handleW___ERWGQ {
  opacity: 0 !important;
  pointer-events: none !important;
}

.styles-module__edgeHandle___XxXdT {
  position: absolute;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__edgeHandle___XxXdT::after {
  content: "";
  position: absolute;
  border-radius: 4px;
  background: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__edgeHandle___XxXdT::after {
  background: #f97316;
}
.styles-module__edgeHandle___XxXdT::after {
  opacity: 0;
  transition: opacity 0.1s ease, transform 0.1s ease;
  transform: scale(0.8);
}
.styles-module__edgeHandle___XxXdT:hover::after {
  opacity: 0.85;
  transform: scale(1);
}
.styles-module__edgeHandle___XxXdT svg {
  position: relative;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.1s ease;
  filter: drop-shadow(0 0 2px var(--agd-surface));
}
.styles-module__edgeHandle___XxXdT:hover svg {
  opacity: 1;
}

.styles-module__edgeN___-JJDj, .styles-module__edgeS___66lMX {
  left: 12px;
  right: 12px;
  height: 12px;
  cursor: n-resize;
}
.styles-module__edgeN___-JJDj::after, .styles-module__edgeS___66lMX::after {
  width: 24px;
  height: 4px;
}

.styles-module__edgeN___-JJDj {
  top: -6px;
}

.styles-module__edgeS___66lMX {
  bottom: -6px;
  cursor: s-resize;
}

.styles-module__edgeE___1bGDa, .styles-module__edgeW___lHQNo {
  top: 12px;
  bottom: 12px;
  width: 12px;
  cursor: e-resize;
}
.styles-module__edgeE___1bGDa::after, .styles-module__edgeW___lHQNo::after {
  width: 4px;
  height: 24px;
}

.styles-module__edgeE___1bGDa {
  right: -6px;
}

.styles-module__edgeW___lHQNo {
  left: -6px;
  cursor: w-resize;
}

.styles-module__deleteButton___LkGCb {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
  z-index: 15;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.12s ease, color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}
.styles-module__placement___zcxv8:hover .styles-module__deleteButton___LkGCb, .styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-:hover .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO:hover .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
  box-shadow: 0 1px 4px rgba(239, 68, 68, 0.3);
  transform: scale(1.1);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb {
  background: rgba(40, 40, 40, 0.9);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
}

.styles-module__drawBox___BrVAa {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 2px solid #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.15);
}

.styles-module__selectBox___Iu8kB {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 1px dashed #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  border-radius: 2px;
}

.styles-module__sizeIndicator___7zJ4y {
  position: fixed;
  pointer-events: none;
  z-index: 100001;
  font-size: 10px;
  color: #fff;
  background: #3c82f7;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.styles-module__guideLine___DUQY2 {
  pointer-events: none;
  z-index: 100001;
  background: #f0f;
  opacity: 0.5;
}

.styles-module__dragPreview___onPbU {
  position: fixed;
  z-index: 100002;
  pointer-events: none;
  border: 1.5px dashed #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 600;
  color: #3c82f7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15);
  transition: width 0.08s ease, height 0.08s ease, opacity 0.08s ease;
}

.styles-module__dragPreviewWireframe___jsg0G {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  color: #f97316;
  box-shadow: 0 4px 16px rgba(249, 115, 22, 0.15);
}

.styles-module__palette___C7iSH {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  width: 256px;
  overflow: hidden;
  background: #1c1c1c;
  border: none;
  border-radius: 1rem;
  padding: 13px 0 16px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 100001;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  cursor: default;
  opacity: 0;
  filter: blur(5px);
}
.styles-module__palette___C7iSH .styles-module__paletteItem___6TlnA,
.styles-module__palette___C7iSH .styles-module__paletteItemLabel___6ncO4,
.styles-module__palette___C7iSH .styles-module__paletteSectionTitle___PqnjX,
.styles-module__palette___C7iSH .styles-module__paletteFooter___QYnAG {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__palette___C7iSH.styles-module__enter___6LYk5 {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__palette___C7iSH.styles-module__exit___iSGRw {
  opacity: 0;
  transform: translateY(6px);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
.styles-module__palette___C7iSH.styles-module__light___ORIft {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}

.styles-module__paletteSection___V8DEA {
  padding: 0 1rem;
}
.styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteSectionTitle___PqnjX {
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  padding: 0 0 3px 3px;
}
.styles-module__light___ORIft .styles-module__paletteSectionTitle___PqnjX {
  color: rgba(0, 0, 0, 0.4);
}

.styles-module__paletteItem___6TlnA {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.25rem;
  margin-bottom: 1px;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  border: 1px solid transparent;
  user-select: none;
  min-height: 24px;
}
.styles-module__paletteItem___6TlnA:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}

.styles-module__paletteItemIcon___0NPQK {
  width: 20px;
  height: 16px;
  border-radius: 2px;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.45);
}
.styles-module__paletteItemIcon___0NPQK svg {
  display: block;
  width: 20px;
  height: 16px;
}
.styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.02);
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__paletteItemLabel___6ncO4 {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: -0.0094em;
  line-height: 1;
  min-width: 0;
}
.styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}
.styles-module__light___ORIft .styles-module__paletteItemLabel___6ncO4 {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}

.styles-module__placeScroll___7sClM {
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 0.25rem;
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px);
}
.styles-module__placeScroll___7sClM.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar {
  width: 3px;
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 2px;
}
.styles-module__light___ORIft .styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
}

.styles-module__paletteFooterWrap___71-fI {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.25s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__paletteFooterWrap___71-fI.styles-module__footerHidden___fJUik {
  grid-template-rows: 0fr;
}

.styles-module__paletteFooterInnerContent___VC26h {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__footerHidden___fJUik .styles-module__paletteFooterInnerContent___VC26h {
  opacity: 0;
  transform: translateY(4px);
}

.styles-module__paletteFooterInner___dfylY {
  overflow: hidden;
}

.styles-module__paletteFooter___QYnAG {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  padding: 0 1rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteFooter___QYnAG {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteFooterCount___D3Fia {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterCount___D3Fia {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__paletteFooterClear___ybBoa {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  transition: color 0.15s ease;
}
.styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__paletteFooterActions___fLzv8 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.styles-module__rollingWrap___S75jM {
  display: inline-block;
  overflow: hidden;
  height: 1.15em;
  position: relative;
  vertical-align: bottom;
}

.styles-module__rollingNum___1RKDx {
  position: absolute;
  left: 0;
  top: 0;
}

.styles-module__exitUp___AFDRW {
  animation: styles-module__numExitUp___FRQqx 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterUp___CPlXb {
  animation: styles-module__numEnterUp___2Yd-w 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__exitDown___-1yAy {
  animation: styles-module__numExitDown___xm5by 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterDown___DDuFR {
  animation: styles-module__numEnterDown___hpxBk 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

@keyframes styles-module__numExitUp___FRQqx {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterUp___2Yd-w {
  from {
    transform: translateY(110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes styles-module__numExitDown___xm5by {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterDown___hpxBk {
  from {
    transform: translateY(-110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.styles-module__rearrangeOverlay___-3R3t {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: none;
  cursor: default;
  user-select: none;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
}

.styles-module__hoverHighlight___8eT-v {
  position: fixed;
  pointer-events: none;
  z-index: 99994;
  border: 2px dashed rgba(59, 130, 246, 0.5);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.06);
  animation: styles-module__highlightFadeIn___Lg7KY 0.12s ease;
}

.styles-module__sectionOutline___s0hy- {
  position: fixed;
  border: 2px solid;
  border-radius: 4px;
  cursor: grab;
}
.styles-module__sectionOutline___s0hy-:active {
  cursor: grabbing;
}
.styles-module__sectionOutline___s0hy- {
  transition: box-shadow 0.15s, border-color 0.3s, background-color 0.3s, border-style 0s;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}
.styles-module__sectionOutline___s0hy-:hover {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 {
  border-style: solid;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) {
  border: 1.5px dashed rgba(150, 150, 150, 0.35);
  background-color: transparent !important;
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover {
  border-color: rgba(150, 150, 150, 0.6);
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionLabel___F80HQ {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionLabel___F80HQ {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__movedBadge___s8z-q,
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionDimensions___RcJSL {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionDimensions___RcJSL {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__sectionLabel___F80HQ {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  max-width: calc(100% - 8px);
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__movedBadge___s8z-q {
  position: absolute;
  bottom: 22px;
  right: 4px;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  background: #22c55e;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__movedBadge___s8z-q.styles-module__badgeVisible___npbdS {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.2s cubic-bezier(0.34, 1.2, 0.64, 1), transform 0.2s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.styles-module__resizedBadge___u51V8 {
  background: #3c82f7;
  bottom: 40px;
}

.styles-module__sectionDimensions___RcJSL {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.5);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.styles-module__light___ORIft .styles-module__sectionDimensions___RcJSL {
  color: rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.7);
}

.styles-module__wireframeNotice___4GJyB {
  position: fixed;
  bottom: 16px;
  left: 24px;
  z-index: 99995;
  font-size: 9.5px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: auto;
  animation: styles-module__overlayFadeIn___aECVy 0.3s ease;
  line-height: 1.5;
  max-width: 280px;
}

.styles-module__wireframeOpacityRow___CJXzi {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.styles-module__wireframeOpacityLabel___afkfT {
  font-size: 9px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.32);
  letter-spacing: 0.02em;
  white-space: nowrap;
  user-select: none;
}

.styles-module__wireframeOpacitySlider___YcoEs {
  -webkit-appearance: none;
  appearance: none;
  width: 56px;
  height: 4px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs:hover {
  background: rgba(0, 0, 0, 0.13);
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  cursor: pointer;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb:hover {
  background: rgb(224.4209205021, 95.3548117155, 5.7790794979);
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-thumb {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  border: none;
  cursor: pointer;
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-track {
  background: rgba(0, 0, 0, 0.08);
  height: 4px;
  border-radius: 2px;
}

.styles-module__wireframeNoticeTitleRow___PJqyG {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 2px;
}

.styles-module__wireframeNoticeTitle___okr08 {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.55);
}

.styles-module__wireframeNoticeDivider___PNKQ6 {
  width: 1px;
  height: 8px;
  background: rgba(0, 0, 0, 0.12);
  margin: 0 8px;
  flex-shrink: 0;
}

.styles-module__wireframeStartOver___YFk-I {
  font-size: 9.5px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  text-decoration: none;
  transition: color 0.12s ease;
  white-space: nowrap;
}
.styles-module__wireframeStartOver___YFk-I:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__ghostOutline___po-kO {
  position: fixed;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.04);
  cursor: grab;
  opacity: 0.5;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__ghostEnter___EC3Mb 0.25s ease;
  transition: box-shadow 0.15s, border-color 0.3s, opacity 0.25s;
}
.styles-module__ghostOutline___po-kO:active {
  cursor: grabbing;
}
.styles-module__ghostOutline___po-kO:hover {
  opacity: 0.7;
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);
}
.styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 {
  opacity: 1;
  border-style: solid;
  border-width: 2px;
  border-color: #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__ghostOutline___po-kO.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__ghostBadge___tsQUK {
  position: absolute;
  bottom: calc(100% + 4px);
  left: -1px;
  font-size: 9px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.9);
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  letter-spacing: 0.02em;
  line-height: 1.2;
  animation: styles-module__badgeSlideIn___typJ7 0.2s ease both;
}

@keyframes styles-module__badgeSlideIn___typJ7 {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__ghostBadgeExtra___6CVoD {
  display: inline;
  animation: styles-module__badgeExtraIn___i4W8F 0.2s ease both;
}

@keyframes styles-module__badgeExtraIn___i4W8F {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.styles-module__originalOutline___Y6DD1 {
  position: fixed;
  border: 1.5px dashed rgba(150, 150, 150, 0.3);
  border-radius: 4px;
  background: transparent;
  pointer-events: none;
  user-select: none;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}

.styles-module__originalLabel___HqI9g {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(150, 150, 150, 0.5);
  padding: 1px 6px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: rgba(150, 150, 150, 0.08);
}

.styles-module__connectorSvg___Lovld {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__connectorLine___XeWh- {
  transition: opacity 0.2s ease;
  animation: styles-module__connectorDraw___8sK5I 0.3s ease both;
}

.styles-module__connectorDot___yvf7C {
  transform-box: fill-box;
  transform-origin: center;
  animation: styles-module__connectorDotIn___NwTUq 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
}

@keyframes styles-module__connectorDraw___8sK5I {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__connectorDotIn___NwTUq {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.styles-module__connectorExiting___2lLOs {
  animation: styles-module__connectorOut___5QoPl 0.2s ease forwards;
}
.styles-module__connectorExiting___2lLOs .styles-module__connectorDot___yvf7C {
  animation: styles-module__connectorDotOut___FEq7e 0.2s ease forwards;
}

@keyframes styles-module__connectorOut___5QoPl {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__connectorDotOut___FEq7e {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes styles-module__placementEnter___TdRhf {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__sectionEnter___-8BXT {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__highlightFadeIn___Lg7KY {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__overlayFadeIn___aECVy {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__ghostEnter___EC3Mb {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 0.6;
    transform: scale(1);
  }
}`,Zt={overlayExiting:`styles-module__overlayExiting___iEmYr`,overlay:`styles-module__overlay___aWh-q`,overlayFadeIn:`styles-module__overlayFadeIn___aECVy`,light:`styles-module__light___ORIft`,wireframe:`styles-module__wireframe___itvQU`,placing:`styles-module__placing___45yD8`,passthrough:`styles-module__passthrough___xaFeE`,blankCanvas:`styles-module__blankCanvas___t2Eue`,visible:`styles-module__visible___OKKqX`,gridActive:`styles-module__gridActive___OZ-cf`,paletteHeader:`styles-module__paletteHeader___-Q5gQ`,paletteHeaderTitle:`styles-module__paletteHeaderTitle___oHqZC`,paletteHeaderDesc:`styles-module__paletteHeaderDesc___6i74T`,wireframePurposeWrap:`styles-module__wireframePurposeWrap___To-tS`,collapsed:`styles-module__collapsed___Ms9vS`,wireframePurposeInner:`styles-module__wireframePurposeInner___Lrahs`,wireframePurposeInput:`styles-module__wireframePurposeInput___7EtBN`,canvasToggle:`styles-module__canvasToggle___-QqSy`,active:`styles-module__active___hosp7`,canvasToggleIcon:`styles-module__canvasToggleIcon___7pJ82`,canvasToggleLabel:`styles-module__canvasToggleLabel___OanpY`,canvasPurposeWrap:`styles-module__canvasPurposeWrap___hj6zk`,canvasPurposeInner:`styles-module__canvasPurposeInner___VWiyu`,canvasPurposeToggle:`styles-module__canvasPurposeToggle___byDH2`,canvasPurposeCheck:`styles-module__canvasPurposeCheck___xqd7l`,checked:`styles-module__checked___-1JGH`,canvasPurposeLabel:`styles-module__canvasPurposeLabel___Zu-tD`,canvasPurposeHelp:`styles-module__canvasPurposeHelp___jijwR`,placement:`styles-module__placement___zcxv8`,placementEnter:`styles-module__placementEnter___TdRhf`,selected:`styles-module__selected___6yrp6`,dragging:`styles-module__dragging___le6KZ`,exiting:`styles-module__exiting___YrM8F`,placementContent:`styles-module__placementContent___f64A4`,placementLabel:`styles-module__placementLabel___0KvWl`,placementAnnotation:`styles-module__placementAnnotation___78pTr`,annotationVisible:`styles-module__annotationVisible___mrUyA`,sectionAnnotation:`styles-module__sectionAnnotation___aUIs0`,handle:`styles-module__handle___Ikbxm`,sectionOutline:`styles-module__sectionOutline___s0hy-`,ghostOutline:`styles-module__ghostOutline___po-kO`,handleNw:`styles-module__handleNw___4TMIj`,handleNe:`styles-module__handleNe___mnsTh`,handleSe:`styles-module__handleSe___oSFnk`,handleSw:`styles-module__handleSw___pi--Z`,handleN:`styles-module__handleN___aBA-Q`,handleE:`styles-module__handleE___0hM5u`,handleS:`styles-module__handleS___JjDRv`,handleW:`styles-module__handleW___ERWGQ`,edgeHandle:`styles-module__edgeHandle___XxXdT`,edgeN:`styles-module__edgeN___-JJDj`,edgeS:`styles-module__edgeS___66lMX`,edgeE:`styles-module__edgeE___1bGDa`,edgeW:`styles-module__edgeW___lHQNo`,deleteButton:`styles-module__deleteButton___LkGCb`,rearrangeOverlay:`styles-module__rearrangeOverlay___-3R3t`,drawBox:`styles-module__drawBox___BrVAa`,selectBox:`styles-module__selectBox___Iu8kB`,sizeIndicator:`styles-module__sizeIndicator___7zJ4y`,guideLine:`styles-module__guideLine___DUQY2`,dragPreview:`styles-module__dragPreview___onPbU`,dragPreviewWireframe:`styles-module__dragPreviewWireframe___jsg0G`,palette:`styles-module__palette___C7iSH`,paletteItem:`styles-module__paletteItem___6TlnA`,paletteItemLabel:`styles-module__paletteItemLabel___6ncO4`,paletteSectionTitle:`styles-module__paletteSectionTitle___PqnjX`,paletteFooter:`styles-module__paletteFooter___QYnAG`,enter:`styles-module__enter___6LYk5`,exit:`styles-module__exit___iSGRw`,paletteSection:`styles-module__paletteSection___V8DEA`,paletteItemIcon:`styles-module__paletteItemIcon___0NPQK`,placeScroll:`styles-module__placeScroll___7sClM`,fadeTop:`styles-module__fadeTop___KT9tF`,fadeBottom:`styles-module__fadeBottom___x3ShT`,paletteFooterWrap:`styles-module__paletteFooterWrap___71-fI`,footerHidden:`styles-module__footerHidden___fJUik`,paletteFooterInnerContent:`styles-module__paletteFooterInnerContent___VC26h`,paletteFooterInner:`styles-module__paletteFooterInner___dfylY`,paletteFooterCount:`styles-module__paletteFooterCount___D3Fia`,paletteFooterClear:`styles-module__paletteFooterClear___ybBoa`,paletteFooterActions:`styles-module__paletteFooterActions___fLzv8`,rollingWrap:`styles-module__rollingWrap___S75jM`,rollingNum:`styles-module__rollingNum___1RKDx`,exitUp:`styles-module__exitUp___AFDRW`,numExitUp:`styles-module__numExitUp___FRQqx`,enterUp:`styles-module__enterUp___CPlXb`,numEnterUp:`styles-module__numEnterUp___2Yd-w`,exitDown:`styles-module__exitDown___-1yAy`,numExitDown:`styles-module__numExitDown___xm5by`,enterDown:`styles-module__enterDown___DDuFR`,numEnterDown:`styles-module__numEnterDown___hpxBk`,hoverHighlight:`styles-module__hoverHighlight___8eT-v`,highlightFadeIn:`styles-module__highlightFadeIn___Lg7KY`,sectionEnter:`styles-module__sectionEnter___-8BXT`,settled:`styles-module__settled___b5U5o`,sectionLabel:`styles-module__sectionLabel___F80HQ`,movedBadge:`styles-module__movedBadge___s8z-q`,sectionDimensions:`styles-module__sectionDimensions___RcJSL`,badgeVisible:`styles-module__badgeVisible___npbdS`,resizedBadge:`styles-module__resizedBadge___u51V8`,wireframeNotice:`styles-module__wireframeNotice___4GJyB`,wireframeOpacityRow:`styles-module__wireframeOpacityRow___CJXzi`,wireframeOpacityLabel:`styles-module__wireframeOpacityLabel___afkfT`,wireframeOpacitySlider:`styles-module__wireframeOpacitySlider___YcoEs`,wireframeNoticeTitleRow:`styles-module__wireframeNoticeTitleRow___PJqyG`,wireframeNoticeTitle:`styles-module__wireframeNoticeTitle___okr08`,wireframeNoticeDivider:`styles-module__wireframeNoticeDivider___PNKQ6`,wireframeStartOver:`styles-module__wireframeStartOver___YFk-I`,ghostEnter:`styles-module__ghostEnter___EC3Mb`,ghostBadge:`styles-module__ghostBadge___tsQUK`,badgeSlideIn:`styles-module__badgeSlideIn___typJ7`,ghostBadgeExtra:`styles-module__ghostBadgeExtra___6CVoD`,badgeExtraIn:`styles-module__badgeExtraIn___i4W8F`,originalOutline:`styles-module__originalOutline___Y6DD1`,originalLabel:`styles-module__originalLabel___HqI9g`,connectorSvg:`styles-module__connectorSvg___Lovld`,connectorLine:`styles-module__connectorLine___XeWh-`,connectorDraw:`styles-module__connectorDraw___8sK5I`,connectorDot:`styles-module__connectorDot___yvf7C`,connectorDotIn:`styles-module__connectorDotIn___NwTUq`,connectorExiting:`styles-module__connectorExiting___2lLOs`,connectorOut:`styles-module__connectorOut___5QoPl`,connectorDotOut:`styles-module__connectorDotOut___FEq7e`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-design-mode-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-design-mode-styles`,document.head.appendChild(e)),e.textContent=Xt}var B=Zt,Qt=24,$t=5;function en(e,t,n,r,i){let a=1/0,o=1/0,s=e.x,c=e.x+e.width,l=e.x+e.width/2,u=e.y,d=e.y+e.height,f=e.y+e.height/2,p=!r,m=p?[s,c,l]:[...r.left?[s]:[],...r.right?[c]:[]],h=p?[u,d,f]:[...r.top?[u]:[],...r.bottom?[d]:[]],g=[];for(let e of t)n.has(e.id)||g.push(e);i&&g.push(...i);for(let e of g){let t=e.x,n=e.x+e.width,r=e.x+e.width/2,i=e.y,s=e.y+e.height,c=e.y+e.height/2;for(let e of m)for(let i of[t,n,r]){let t=i-e;Math.abs(t)<$t&&Math.abs(t)<Math.abs(a)&&(a=t)}for(let e of h)for(let t of[i,s,c]){let n=t-e;Math.abs(n)<$t&&Math.abs(n)<Math.abs(o)&&(o=n)}}let _=Math.abs(a)<$t?a:0,v=Math.abs(o)<$t?o:0,y=[],b=new Set,x=s+_,ee=c+_,te=l+_,S=u+v,C=d+v,ne=f+v;for(let e of g){let t=e.x,n=e.x+e.width,r=e.x+e.width/2,i=e.y,a=e.y+e.height,o=e.y+e.height/2;for(let e of[t,r,n])for(let t of[x,te,ee])if(Math.abs(t-e)<.5){let t=`x:${Math.round(e)}`;b.has(t)||(b.add(t),y.push({axis:`x`,pos:e}))}for(let e of[i,o,a])for(let t of[S,ne,C])if(Math.abs(t-e)<.5){let t=`y:${Math.round(e)}`;b.has(t)||(b.add(t),y.push({axis:`y`,pos:e}))}}return{dx:_,dy:v,guides:y}}function tn(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function nn({placements:e,onChange:t,activeComponent:n,onActiveComponentChange:r,isDarkMode:i,exiting:a,onInteractionChange:o,className:s,passthrough:c,extraSnapRects:l,onSelectionChange:u,deselectSignal:d,onDragMove:f,onDragEnd:p,clearSignal:m,wireframe:h}){let[g,_]=(0,C.useState)(new Set),[v,y]=(0,C.useState)(null),[b,x]=(0,C.useState)(null),[ee,te]=(0,C.useState)(null),[S,ne]=(0,C.useState)([]),[T,re]=(0,C.useState)(null),[E,ie]=(0,C.useState)(!1),ae=(0,C.useRef)(!1),[D,oe]=(0,C.useState)(new Set),se=(0,C.useRef)(new Map),O=(0,C.useRef)(null),k=(0,C.useRef)(null),ce=(0,C.useRef)(e);ce.current=e;let le=(0,C.useRef)(u);le.current=u;let ue=(0,C.useRef)(f);ue.current=f;let de=(0,C.useRef)(p);de.current=p;let fe=(0,C.useRef)(d);(0,C.useEffect)(()=>{d!==fe.current&&(fe.current=d,_(new Set))},[d]);let pe=(0,C.useRef)(m);(0,C.useEffect)(()=>{if(m!==void 0&&m!==pe.current){pe.current=m;let e=new Set(ce.current.map(e=>e.id));e.size>0&&(oe(e),_(new Set),k.current=null,N(()=>{t([]),oe(new Set)},180))}},[m,t]),(0,C.useEffect)(()=>{let i=i=>{let a=i.target;if(!(a.tagName===`INPUT`||a.tagName===`TEXTAREA`||a.isContentEditable)){if((i.key===`Backspace`||i.key===`Delete`)&&g.size>0){i.preventDefault();let e=new Set(g);oe(e),_(new Set),N(()=>{t(ce.current.filter(t=>!e.has(t.id))),oe(new Set)},180);return}if([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(i.key)&&g.size>0){i.preventDefault();let n=i.shiftKey?20:1,r=i.key===`ArrowLeft`?-n:i.key===`ArrowRight`?n:0,a=i.key===`ArrowUp`?-n:i.key===`ArrowDown`?n:0;t(e.map(e=>g.has(e.id)?{...e,x:Math.max(0,e.x+r),y:Math.max(0,e.y+a)}:e));return}if(i.key===`Escape`){n?r(null):g.size>0&&_(new Set);return}}};return document.addEventListener(`keydown`,i),()=>document.removeEventListener(`keydown`,i)},[g,n,e,t,r]);let me=(0,C.useCallback)(i=>{if(i.button!==0||c||i.target.closest(`.${B.placement}`))return;i.preventDefault(),i.stopPropagation();let a=window.scrollY,s=i.clientX,l=i.clientY;if(n){k.current=`place`,o?.(!0);let i=!1,c=s,u=l,d=e=>{c=e.clientX,u=e.clientY;let t=Math.abs(c-s),n=Math.abs(u-l);if((t>5||n>5)&&(i=!0),i){let t=Math.min(s,c),n=Math.min(l,u),r=Math.abs(c-s),i=Math.abs(u-l);y({x:t,y:n,w:r,h:i}),te({x:e.clientX+12,y:e.clientY+12,text:`${Math.round(r)} \xD7 ${Math.round(i)}`})}},f=p=>{window.removeEventListener(`mousemove`,d),window.removeEventListener(`mouseup`,f),y(null),te(null),k.current=null,o?.(!1);let m=P[n],h,g,v,b;i?(h=Math.min(s,c),g=Math.min(l,u)+a,v=Math.max(Qt,Math.abs(c-s)),b=Math.max(Qt,Math.abs(u-l))):(v=m.width,b=m.height,h=s-v/2,g=l+a-b/2),h=Math.max(0,h),g=Math.max(0,g);let x={id:tn(),type:n,x:h,y:g,width:v,height:b,scrollY:a,timestamp:Date.now()};t([...e,x]),_(new Set([x.id])),r(null)};window.addEventListener(`mousemove`,d),window.addEventListener(`mouseup`,f)}else{i.shiftKey||_(new Set),k.current=`select`;let t=!1,n=e=>{let n=Math.abs(e.clientX-s),r=Math.abs(e.clientY-l);(n>4||r>4)&&(t=!0),t&&x({x:Math.min(s,e.clientX),y:Math.min(l,e.clientY),w:Math.abs(e.clientX-s),h:Math.abs(e.clientY-l)})},r=o=>{if(window.removeEventListener(`mousemove`,n),window.removeEventListener(`mouseup`,r),k.current=null,t){let t=Math.min(s,o.clientX),n=Math.min(l,o.clientY)+a,r=Math.abs(o.clientX-s),c=Math.abs(o.clientY-l),u=new Set(i.shiftKey?g:new Set);for(let i of e)i.y-a,i.x+i.width>t&&i.x<t+r&&i.y+i.height>n&&i.y<n+c&&u.add(i.id);_(u)}x(null)};window.addEventListener(`mousemove`,n),window.addEventListener(`mouseup`,r)}},[n,c,e,t,g]),A=(0,C.useCallback)((n,r)=>{if(n.button!==0)return;let i=n.target;if(i.closest(`.${B.handle}`)||i.closest(`.${B.deleteButton}`))return;n.preventDefault(),n.stopPropagation();let a;n.shiftKey?(a=new Set(g),a.has(r)?a.delete(r):a.add(r)):a=g.has(r)?new Set(g):new Set([r]),_(a),(a.size!==g.size||[...a].some(e=>!g.has(e)))&&le.current?.(a,n.shiftKey),window.scrollY;let s=n.clientX,c=n.clientY,u=new Map;for(let t of e)a.has(t.id)&&u.set(t.id,{x:t.x,y:t.y});k.current=`move`,o?.(!0);let d=!1,f=!1,p=e,m=0,h=0,v=new Map;for(let t of e)u.has(t.id)&&v.set(t.id,{w:t.width,h:t.height});let y=n=>{let r=n.clientX-s,i=n.clientY-c;if((Math.abs(r)>2||Math.abs(i)>2)&&(d=!0),!d)return;if(n.altKey&&!f){f=!0;let t=[];for(let n of e)u.has(n.id)&&t.push({...n,id:tn(),timestamp:Date.now()});p=[...e,...t]}let a=1/0,o=1/0,g=-1/0,_=-1/0;for(let[e,t]of u){let n=v.get(e);n&&(a=Math.min(a,t.x+r),o=Math.min(o,t.y+i),g=Math.max(g,t.x+r+n.w),_=Math.max(_,t.y+i+n.h))}let{dx:y,dy:b,guides:x}=en({x:a,y:o,width:g-a,height:_-o},p,new Set(u.keys()),void 0,l);ne(x);let ee=r+y,te=i+b;m=ee,h=te,t(p.map(e=>{let t=u.get(e.id);return t?{...e,x:Math.max(0,t.x+ee),y:Math.max(0,t.y+te)}:e})),ue.current?.(ee,te)},b=()=>{window.removeEventListener(`mousemove`,y),window.removeEventListener(`mouseup`,b),k.current=null,o?.(!1),ne([]),de.current?.(m,h,d)};window.addEventListener(`mousemove`,y),window.addEventListener(`mouseup`,b)},[g,e,t,o]),he=(0,C.useCallback)((n,r,i)=>{n.preventDefault(),n.stopPropagation();let a=e.find(e=>e.id===r);if(!a)return;_(new Set([r])),k.current=`resize`,o?.(!0);let s=n.clientX,c=n.clientY,u=a.width,d=a.height,f=a.x,p=a.y,m={left:i.includes(`w`),right:i.includes(`e`),top:i.includes(`n`),bottom:i.includes(`s`)},h=e=>{let n=e.clientX-s,a=e.clientY-c,o=u,h=d,g=f,_=p;i.includes(`e`)&&(o=Math.max(Qt,u+n)),i.includes(`w`)&&(o=Math.max(Qt,u-n),g=f+u-o),i.includes(`s`)&&(h=Math.max(Qt,d+a)),i.includes(`n`)&&(h=Math.max(Qt,d-a),_=p+d-h);let{dx:v,dy:y,guides:b}=en({x:g,y:_,width:o,height:h},ce.current,new Set([r]),m,l);ne(b),v!==0&&(m.right?o+=v:m.left&&(g+=v,o-=v)),y!==0&&(m.bottom?h+=y:m.top&&(_+=y,h-=y)),t(ce.current.map(e=>e.id===r?{...e,x:g,y:_,width:o,height:h}:e)),te({x:e.clientX+12,y:e.clientY+12,text:`${Math.round(o)} \xD7 ${Math.round(h)}`})},g=()=>{window.removeEventListener(`mousemove`,h),window.removeEventListener(`mouseup`,g),te(null),k.current=null,o?.(!1),ne([])};window.addEventListener(`mousemove`,h),window.addEventListener(`mouseup`,g)},[e,t,o]),ge=(0,C.useCallback)(e=>{k.current=null,oe(t=>{let n=new Set(t);return n.add(e),n}),_(t=>{let n=new Set(t);return n.delete(e),n}),N(()=>{t(ce.current.filter(t=>t.id!==e)),oe(t=>{let n=new Set(t);return n.delete(e),n})},180)},[t]),_e={hero:`Headline text`,button:`Button label`,badge:`Badge label`,cta:`Call to action text`,toast:`Notification message`,modal:`Dialog title`,card:`Card title`,navigation:`Brand / nav items`,tabs:`Tab labels`,input:`Placeholder text`,search:`Search placeholder`,pricing:`Plan name or price`,testimonial:`Quote text`,alert:`Alert message`,banner:`Banner text`,tag:`Tag label`,notification:`Notification message`,stat:`Metric value`,productCard:`Product name`},ve=(0,C.useCallback)(t=>{let n=e.find(e=>e.id===t);n&&(ae.current=!!n.text,re(t),ie(!1))},[e]),ye=(0,C.useCallback)(()=>{T&&(ie(!0),N(()=>{re(null),ie(!1)},150))},[T]);(0,C.useEffect)(()=>{a&&T&&ye()},[a]);let j=(0,C.useCallback)(n=>{T&&(t(e.map(e=>e.id===T?{...e,text:n.trim()||void 0}:e)),ye())},[T,e,t,ye]),be=typeof window<`u`?window.scrollY:0,xe=[`nw`,`ne`,`se`,`sw`],Se=h?`#f97316`:`#3c82f7`,Ce=[{dir:`n`,cls:B.edgeN,arrow:(0,w.jsx)(`svg`,{width:`8`,height:`6`,viewBox:`0 0 8 6`,fill:`none`,children:(0,w.jsx)(`path`,{d:`M4 0.5L1 4.5h6z`,fill:Se})})},{dir:`e`,cls:B.edgeE,arrow:(0,w.jsx)(`svg`,{width:`6`,height:`8`,viewBox:`0 0 6 8`,fill:`none`,children:(0,w.jsx)(`path`,{d:`M5.5 4L1.5 1v6z`,fill:Se})})},{dir:`s`,cls:B.edgeS,arrow:(0,w.jsx)(`svg`,{width:`8`,height:`6`,viewBox:`0 0 8 6`,fill:`none`,children:(0,w.jsx)(`path`,{d:`M4 5.5L1 1.5h6z`,fill:Se})})},{dir:`w`,cls:B.edgeW,arrow:(0,w.jsx)(`svg`,{width:`6`,height:`8`,viewBox:`0 0 6 8`,fill:`none`,children:(0,w.jsx)(`path`,{d:`M0.5 4L4.5 1v6z`,fill:Se})})}];return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(`div`,{ref:O,className:`${B.overlay} ${i?``:B.light} ${n?B.placing:``} ${c?B.passthrough:``} ${a?B.overlayExiting:``} ${h?B.wireframe:``}${s?` ${s}`:``}`,"data-feedback-toolbar":!0,onMouseDown:me,children:e.map(e=>{let t=g.has(e.id),n=Le[e.type]?.label||e.type,r=e.y-be;return(0,w.jsxs)(`div`,{"data-design-placement":e.id,className:`${B.placement} ${t?B.selected:``} ${D.has(e.id)?B.exiting:``}`,style:{left:e.x,top:r,width:e.width,height:e.height,position:`fixed`},onMouseDown:t=>A(t,e.id),onDoubleClick:()=>ve(e.id),children:[(0,w.jsx)(`span`,{className:B.placementLabel,children:n}),(0,w.jsx)(`span`,{className:`${B.placementAnnotation} ${e.text?B.annotationVisible:``}`,children:(e.text&&se.current.set(e.id,e.text),e.text||se.current.get(e.id)||``)}),(0,w.jsx)(`div`,{className:B.placementContent,children:(0,w.jsx)(Yt,{type:e.type,width:e.width,height:e.height,text:e.text})}),(0,w.jsx)(`div`,{className:B.deleteButton,onMouseDown:e=>e.stopPropagation(),onClick:()=>ge(e.id),children:`✕`}),xe.map(t=>(0,w.jsx)(`div`,{className:`${B.handle} ${B[`handle${t.charAt(0).toUpperCase()}${t.slice(1)}`]}`,onMouseDown:n=>he(n,e.id,t)},t)),Ce.map(({dir:t,cls:n,arrow:r})=>(0,w.jsx)(`div`,{className:`${B.edgeHandle} ${n}`,onMouseDown:n=>he(n,e.id,t),children:r},t))]},e.id)})}),T&&(()=>{let t=e.find(e=>e.id===T);if(!t)return null;let n=t.y-be,r=t.x+t.width/2,a=n-8,o=n+t.height+8,s=a>200,c=o<window.innerHeight-100,l=Math.max(160,Math.min(window.innerWidth-160,r)),u;return u=s?{left:l,bottom:window.innerHeight-a}:c?{left:l,top:o}:{left:l,top:Math.max(80,window.innerHeight/2-80)},(0,w.jsx)(Ae,{element:Le[t.type]?.label||t.type,placeholder:_e[t.type]||`Label or content text`,initialValue:t.text??``,submitLabel:ae.current?`Save`:`Set`,onSubmit:j,onCancel:ye,onDelete:ae.current?()=>{j(``)}:void 0,isExiting:E,lightMode:!i,style:u})})(),v&&(0,w.jsx)(`div`,{className:B.drawBox,style:{left:v.x,top:v.y,width:v.w,height:v.h},"data-feedback-toolbar":!0}),b&&(0,w.jsx)(`div`,{className:B.selectBox,style:{left:b.x,top:b.y,width:b.w,height:b.h},"data-feedback-toolbar":!0}),ee&&(0,w.jsx)(`div`,{className:B.sizeIndicator,style:{left:ee.x,top:ee.y},"data-feedback-toolbar":!0,children:ee.text}),S.map((e,t)=>(0,w.jsx)(`div`,{className:B.guideLine,style:e.axis===`x`?{position:`fixed`,left:e.pos,top:0,width:1,bottom:0}:{position:`fixed`,left:0,top:e.pos-be,right:0,height:1},"data-feedback-toolbar":!0},`${e.axis}-${e.pos}-${t}`))]})}function rn(e){if(!e)return``;let t=e.scrollTop>2,n=e.scrollTop+e.clientHeight<e.scrollHeight-2;return`${t?B.fadeTop:``} ${n?B.fadeBottom:``}`}var V=`currentColor`,H=`0.5`;function an({type:e}){switch(e){case`navigation`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`1`,y:`4`,width:`18`,height:`8`,rx:`1`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`2.5`,y:`7`,width:`3`,height:`1.5`,rx:`.5`,fill:V,opacity:`.4`}),(0,w.jsx)(`rect`,{x:`7`,y:`7`,width:`2.5`,height:`1.5`,rx:`.5`,fill:V,opacity:`.25`}),(0,w.jsx)(`rect`,{x:`11`,y:`7`,width:`2.5`,height:`1.5`,rx:`.5`,fill:V,opacity:`.25`})]});case`header`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`1`,y:`2`,width:`18`,height:`12`,rx:`1`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`3`,y:`5.5`,width:`8`,height:`2`,rx:`.5`,fill:V,opacity:`.35`}),(0,w.jsx)(`rect`,{x:`3`,y:`9`,width:`12`,height:`1`,rx:`.5`,fill:V,opacity:`.15`})]});case`hero`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`1`,y:`1`,width:`18`,height:`14`,rx:`1`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`5`,y:`5`,width:`10`,height:`1.5`,rx:`.5`,fill:V,opacity:`.35`}),(0,w.jsx)(`rect`,{x:`7`,y:`8`,width:`6`,height:`1`,rx:`.5`,fill:V,opacity:`.15`}),(0,w.jsx)(`rect`,{x:`7.5`,y:`10.5`,width:`5`,height:`2.5`,rx:`1`,stroke:V,strokeWidth:H})]});case`section`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`1`,y:`1`,width:`18`,height:`14`,rx:`1`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`3`,y:`4`,width:`6`,height:`1`,rx:`.5`,fill:V,opacity:`.3`}),(0,w.jsx)(`rect`,{x:`3`,y:`6.5`,width:`14`,height:`1`,rx:`.5`,fill:V,opacity:`.15`}),(0,w.jsx)(`rect`,{x:`3`,y:`9`,width:`10`,height:`1`,rx:`.5`,fill:V,opacity:`.15`})]});case`sidebar`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`1`,y:`1`,width:`7`,height:`14`,rx:`1`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`2.5`,y:`4`,width:`4`,height:`1`,rx:`.5`,fill:V,opacity:`.3`}),(0,w.jsx)(`rect`,{x:`2.5`,y:`6.5`,width:`3.5`,height:`1`,rx:`.5`,fill:V,opacity:`.15`}),(0,w.jsx)(`rect`,{x:`2.5`,y:`9`,width:`4`,height:`1`,rx:`.5`,fill:V,opacity:`.15`})]});case`footer`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`1`,y:`7`,width:`18`,height:`8`,rx:`1`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`3`,y:`9.5`,width:`4`,height:`1`,rx:`.5`,fill:V,opacity:`.25`}),(0,w.jsx)(`rect`,{x:`9`,y:`9.5`,width:`4`,height:`1`,rx:`.5`,fill:V,opacity:`.25`}),(0,w.jsx)(`rect`,{x:`15`,y:`9.5`,width:`3`,height:`1`,rx:`.5`,fill:V,opacity:`.2`})]});case`modal`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`12`,rx:`1.5`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`5`,y:`4.5`,width:`7`,height:`1`,rx:`.5`,fill:V,opacity:`.3`}),(0,w.jsx)(`rect`,{x:`5`,y:`7`,width:`10`,height:`1`,rx:`.5`,fill:V,opacity:`.15`}),(0,w.jsx)(`rect`,{x:`11`,y:`11`,width:`5`,height:`2`,rx:`.75`,stroke:V,strokeWidth:H})]});case`divider`:return(0,w.jsx)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:(0,w.jsx)(`line`,{x1:`2`,y1:`8`,x2:`18`,y2:`8`,stroke:V,strokeWidth:`0.5`,opacity:`.3`})});case`card`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`14`,rx:`1.5`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`5.5`,rx:`1`,fill:V,opacity:`.04`}),(0,w.jsx)(`rect`,{x:`4`,y:`8.5`,width:`8`,height:`1`,rx:`.5`,fill:V,opacity:`.25`}),(0,w.jsx)(`rect`,{x:`4`,y:`11`,width:`11`,height:`1`,rx:`.5`,fill:V,opacity:`.12`})]});case`text`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`2`,y:`4`,width:`14`,height:`1.5`,rx:`.5`,fill:V,opacity:`.3`}),(0,w.jsx)(`rect`,{x:`2`,y:`7`,width:`11`,height:`1`,rx:`.5`,fill:V,opacity:`.15`}),(0,w.jsx)(`rect`,{x:`2`,y:`9.5`,width:`13`,height:`1`,rx:`.5`,fill:V,opacity:`.15`}),(0,w.jsx)(`rect`,{x:`2`,y:`12`,width:`8`,height:`1`,rx:`.5`,fill:V,opacity:`.12`})]});case`image`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`12`,rx:`1`,stroke:V,strokeWidth:H}),(0,w.jsx)(`line`,{x1:`2`,y1:`2`,x2:`18`,y2:`14`,stroke:V,strokeWidth:`.3`,opacity:`.25`}),(0,w.jsx)(`line`,{x1:`18`,y1:`2`,x2:`2`,y2:`14`,stroke:V,strokeWidth:`.3`,opacity:`.25`})]});case`video`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`12`,rx:`1`,stroke:V,strokeWidth:H}),(0,w.jsx)(`path`,{d:`M8.5 5.5v5l4.5-2.5z`,stroke:V,strokeWidth:H,fill:V,opacity:`.15`})]});case`table`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`1`,y:`2`,width:`18`,height:`12`,rx:`1`,stroke:V,strokeWidth:H}),(0,w.jsx)(`line`,{x1:`1`,y1:`5.5`,x2:`19`,y2:`5.5`,stroke:V,strokeWidth:`.3`,opacity:`.25`}),(0,w.jsx)(`line`,{x1:`1`,y1:`9`,x2:`19`,y2:`9`,stroke:V,strokeWidth:`.3`,opacity:`.25`}),(0,w.jsx)(`line`,{x1:`7`,y1:`2`,x2:`7`,y2:`14`,stroke:V,strokeWidth:`.3`,opacity:`.25`}),(0,w.jsx)(`line`,{x1:`13`,y1:`2`,x2:`13`,y2:`14`,stroke:V,strokeWidth:`.3`,opacity:`.25`})]});case`grid`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`1.5`,y:`2`,width:`7`,height:`5.5`,rx:`1`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`11.5`,y:`2`,width:`7`,height:`5.5`,rx:`1`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`1.5`,y:`9.5`,width:`7`,height:`5.5`,rx:`1`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`11.5`,y:`9.5`,width:`7`,height:`5.5`,rx:`1`,stroke:V,strokeWidth:H})]});case`list`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`circle`,{cx:`3.5`,cy:`4.5`,r:`1`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`6.5`,y:`4`,width:`10`,height:`1`,rx:`.5`,fill:V,opacity:`.2`}),(0,w.jsx)(`circle`,{cx:`3.5`,cy:`8`,r:`1`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`6.5`,y:`7.5`,width:`8`,height:`1`,rx:`.5`,fill:V,opacity:`.2`}),(0,w.jsx)(`circle`,{cx:`3.5`,cy:`11.5`,r:`1`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`6.5`,y:`11`,width:`11`,height:`1`,rx:`.5`,fill:V,opacity:`.2`})]});case`chart`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`3`,y:`9`,width:`2.5`,height:`4`,rx:`.5`,fill:V,opacity:`.2`}),(0,w.jsx)(`rect`,{x:`7`,y:`6`,width:`2.5`,height:`7`,rx:`.5`,fill:V,opacity:`.25`}),(0,w.jsx)(`rect`,{x:`11`,y:`3`,width:`2.5`,height:`10`,rx:`.5`,fill:V,opacity:`.3`}),(0,w.jsx)(`rect`,{x:`15`,y:`5`,width:`2.5`,height:`8`,rx:`.5`,fill:V,opacity:`.2`})]});case`accordion`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`1.5`,y:`2`,width:`17`,height:`4`,rx:`1`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`3`,y:`3.5`,width:`6`,height:`1`,rx:`.5`,fill:V,opacity:`.25`}),(0,w.jsx)(`rect`,{x:`1.5`,y:`7.5`,width:`17`,height:`3`,rx:`1`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`1.5`,y:`12`,width:`17`,height:`3`,rx:`1`,stroke:V,strokeWidth:H})]});case`carousel`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`10`,rx:`1`,stroke:V,strokeWidth:H}),(0,w.jsx)(`path`,{d:`M1.5 7L3 8.5 1.5 10`,stroke:V,strokeWidth:H,opacity:`.35`}),(0,w.jsx)(`path`,{d:`M18.5 7L17 8.5 18.5 10`,stroke:V,strokeWidth:H,opacity:`.35`}),(0,w.jsx)(`circle`,{cx:`8.5`,cy:`14`,r:`.6`,fill:V,opacity:`.35`}),(0,w.jsx)(`circle`,{cx:`10`,cy:`14`,r:`.6`,fill:V,opacity:`.15`}),(0,w.jsx)(`circle`,{cx:`11.5`,cy:`14`,r:`.6`,fill:V,opacity:`.15`})]});case`button`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`3`,y:`5`,width:`14`,height:`6`,rx:`2`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`6.5`,y:`7.5`,width:`7`,height:`1`,rx:`.5`,fill:V,opacity:`.25`})]});case`input`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`2`,y:`4`,width:`5.5`,height:`1`,rx:`.5`,fill:V,opacity:`.25`}),(0,w.jsx)(`rect`,{x:`2`,y:`6.5`,width:`16`,height:`5.5`,rx:`1`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`3.5`,y:`8.5`,width:`7`,height:`1`,rx:`.5`,fill:V,opacity:`.12`})]});case`search`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`2`,y:`4.5`,width:`16`,height:`7`,rx:`3.5`,stroke:V,strokeWidth:H}),(0,w.jsx)(`circle`,{cx:`6`,cy:`8`,r:`2`,stroke:V,strokeWidth:H,opacity:`.3`}),(0,w.jsx)(`line`,{x1:`7.5`,y1:`9.5`,x2:`9`,y2:`11`,stroke:V,strokeWidth:H,opacity:`.3`}),(0,w.jsx)(`rect`,{x:`9.5`,y:`7.5`,width:`6`,height:`1`,rx:`.5`,fill:V,opacity:`.12`})]});case`form`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`2`,y:`1.5`,width:`5.5`,height:`1`,rx:`.5`,fill:V,opacity:`.25`}),(0,w.jsx)(`rect`,{x:`2`,y:`3.5`,width:`16`,height:`3`,rx:`.75`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`2`,y:`8`,width:`7`,height:`1`,rx:`.5`,fill:V,opacity:`.25`}),(0,w.jsx)(`rect`,{x:`2`,y:`10`,width:`16`,height:`3`,rx:`.75`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`12`,y:`14`,width:`6`,height:`2`,rx:`.75`,stroke:V,strokeWidth:H})]});case`tabs`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`1`,y:`5`,width:`18`,height:`10`,rx:`1`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`1`,y:`2`,width:`6`,height:`3.5`,rx:`.75`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`2.5`,y:`3.25`,width:`3`,height:`1`,rx:`.5`,fill:V,opacity:`.25`}),(0,w.jsx)(`rect`,{x:`7`,y:`2`,width:`6`,height:`3.5`,rx:`.75`,stroke:V,strokeWidth:H})]});case`dropdown`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`4`,rx:`1`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`3.5`,y:`3.5`,width:`7`,height:`1`,rx:`.5`,fill:V,opacity:`.2`}),(0,w.jsx)(`path`,{d:`M15 3.5l1.5 1.5L18 3.5`,stroke:V,strokeWidth:H,opacity:`.3`}),(0,w.jsx)(`rect`,{x:`2`,y:`7`,width:`16`,height:`7`,rx:`1`,stroke:V,strokeWidth:H,strokeDasharray:`2 1`,opacity:`.3`})]});case`toggle`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`4`,y:`5`,width:`12`,height:`6`,rx:`3`,stroke:V,strokeWidth:H}),(0,w.jsx)(`circle`,{cx:`13`,cy:`8`,r:`2`,fill:V,opacity:`.3`})]});case`avatar`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`circle`,{cx:`10`,cy:`8`,r:`6`,stroke:V,strokeWidth:H}),(0,w.jsx)(`circle`,{cx:`10`,cy:`6.5`,r:`2`,stroke:V,strokeWidth:H}),(0,w.jsx)(`path`,{d:`M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5`,stroke:V,strokeWidth:H})]});case`badge`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`3`,y:`5`,width:`14`,height:`6`,rx:`3`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`6`,y:`7.5`,width:`8`,height:`1`,rx:`.5`,fill:V,opacity:`.25`})]});case`breadcrumb`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`1.5`,y:`7`,width:`3.5`,height:`1`,rx:`.5`,fill:V,opacity:`.3`}),(0,w.jsx)(`path`,{d:`M6.5 7l1 1-1 1`,stroke:V,strokeWidth:H,opacity:`.2`}),(0,w.jsx)(`rect`,{x:`9`,y:`7`,width:`3.5`,height:`1`,rx:`.5`,fill:V,opacity:`.2`}),(0,w.jsx)(`path`,{d:`M14 7l1 1-1 1`,stroke:V,strokeWidth:H,opacity:`.2`}),(0,w.jsx)(`rect`,{x:`16.5`,y:`7`,width:`2`,height:`1`,rx:`.5`,fill:V,opacity:`.15`})]});case`pagination`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`2`,y:`5.5`,width:`3.5`,height:`5`,rx:`1`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`6.5`,y:`5.5`,width:`3.5`,height:`5`,rx:`1`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`11`,y:`5.5`,width:`3.5`,height:`5`,rx:`1`,fill:V,opacity:`.15`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`15.5`,y:`5.5`,width:`3.5`,height:`5`,rx:`1`,stroke:V,strokeWidth:H})]});case`progress`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`2`,y:`7`,width:`16`,height:`2`,rx:`1`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`2`,y:`7`,width:`10`,height:`2`,rx:`1`,fill:V,opacity:`.2`})]});case`toast`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`2`,y:`4`,width:`16`,height:`8`,rx:`1.5`,stroke:V,strokeWidth:H}),(0,w.jsx)(`circle`,{cx:`5`,cy:`8`,r:`1.5`,stroke:V,strokeWidth:H,opacity:`.3`}),(0,w.jsx)(`rect`,{x:`8`,y:`6.5`,width:`7`,height:`1`,rx:`.5`,fill:V,opacity:`.25`}),(0,w.jsx)(`rect`,{x:`8`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:V,opacity:`.12`})]});case`tooltip`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`3`,y:`3`,width:`14`,height:`7`,rx:`1.5`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`5.5`,y:`5.5`,width:`9`,height:`1`,rx:`.5`,fill:V,opacity:`.25`}),(0,w.jsx)(`path`,{d:`M9 10l1 2.5 1-2.5`,stroke:V,strokeWidth:H})]});case`pricing`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`14`,rx:`1.5`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`6`,y:`3`,width:`8`,height:`1.5`,rx:`.5`,fill:V,opacity:`.25`}),(0,w.jsx)(`rect`,{x:`7`,y:`5.5`,width:`6`,height:`2`,rx:`.5`,fill:V,opacity:`.15`}),(0,w.jsx)(`rect`,{x:`5`,y:`9`,width:`10`,height:`1`,rx:`.5`,fill:V,opacity:`.1`}),(0,w.jsx)(`rect`,{x:`5`,y:`11`,width:`10`,height:`1`,rx:`.5`,fill:V,opacity:`.1`}),(0,w.jsx)(`rect`,{x:`6`,y:`13`,width:`8`,height:`1.5`,rx:`.5`,fill:V,opacity:`.2`})]});case`testimonial`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`14`,rx:`1.5`,stroke:V,strokeWidth:H}),(0,w.jsx)(`text`,{x:`4`,y:`5.5`,fontSize:`4`,fill:V,opacity:`.2`,fontFamily:`serif`,children:`“`}),(0,w.jsx)(`rect`,{x:`4`,y:`7`,width:`12`,height:`1`,rx:`.5`,fill:V,opacity:`.15`}),(0,w.jsx)(`rect`,{x:`4`,y:`9`,width:`9`,height:`1`,rx:`.5`,fill:V,opacity:`.12`}),(0,w.jsx)(`circle`,{cx:`5.5`,cy:`12.5`,r:`1.5`,stroke:V,strokeWidth:H,opacity:`.25`}),(0,w.jsx)(`rect`,{x:`8`,y:`12`,width:`5`,height:`1`,rx:`.5`,fill:V,opacity:`.15`})]});case`cta`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`1`,y:`2`,width:`18`,height:`12`,rx:`1`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`5`,y:`4.5`,width:`10`,height:`1.5`,rx:`.5`,fill:V,opacity:`.3`}),(0,w.jsx)(`rect`,{x:`6`,y:`7.5`,width:`8`,height:`1`,rx:`.5`,fill:V,opacity:`.15`}),(0,w.jsx)(`rect`,{x:`7`,y:`10`,width:`6`,height:`2.5`,rx:`1`,stroke:V,strokeWidth:H})]});case`alert`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`2`,y:`4`,width:`16`,height:`8`,rx:`1.5`,stroke:V,strokeWidth:H}),(0,w.jsx)(`circle`,{cx:`6`,cy:`8`,r:`2`,stroke:V,strokeWidth:H,opacity:`.3`}),(0,w.jsx)(`line`,{x1:`6`,y1:`7`,x2:`6`,y2:`8.5`,stroke:V,strokeWidth:`0.6`,opacity:`.5`}),(0,w.jsx)(`circle`,{cx:`6`,cy:`9.3`,r:`.3`,fill:V,opacity:`.5`}),(0,w.jsx)(`rect`,{x:`9.5`,y:`7`,width:`6`,height:`1`,rx:`.5`,fill:V,opacity:`.2`})]});case`banner`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`1`,y:`5`,width:`18`,height:`6`,rx:`1`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`4`,y:`7.5`,width:`8`,height:`1`,rx:`.5`,fill:V,opacity:`.25`}),(0,w.jsx)(`rect`,{x:`14`,y:`7`,width:`3.5`,height:`2`,rx:`.75`,stroke:V,strokeWidth:H})]});case`stat`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`12`,rx:`1.5`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`6`,y:`4.5`,width:`8`,height:`1`,rx:`.5`,fill:V,opacity:`.15`}),(0,w.jsx)(`rect`,{x:`5`,y:`7`,width:`10`,height:`2.5`,rx:`.5`,fill:V,opacity:`.3`}),(0,w.jsx)(`rect`,{x:`7`,y:`11`,width:`6`,height:`1`,rx:`.5`,fill:V,opacity:`.12`})]});case`stepper`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`circle`,{cx:`4`,cy:`8`,r:`2`,fill:V,opacity:`.2`,stroke:V,strokeWidth:H}),(0,w.jsx)(`line`,{x1:`6`,y1:`8`,x2:`8`,y2:`8`,stroke:V,strokeWidth:`.4`,opacity:`.3`}),(0,w.jsx)(`circle`,{cx:`10`,cy:`8`,r:`2`,stroke:V,strokeWidth:H}),(0,w.jsx)(`line`,{x1:`12`,y1:`8`,x2:`14`,y2:`8`,stroke:V,strokeWidth:`.4`,opacity:`.3`}),(0,w.jsx)(`circle`,{cx:`16`,cy:`8`,r:`2`,stroke:V,strokeWidth:H})]});case`tag`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`3`,y:`5`,width:`14`,height:`6`,rx:`1.5`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`5.5`,y:`7.5`,width:`6`,height:`1`,rx:`.5`,fill:V,opacity:`.25`}),(0,w.jsx)(`line`,{x1:`14`,y1:`6.5`,x2:`15.5`,y2:`9.5`,stroke:V,strokeWidth:H,opacity:`.2`}),(0,w.jsx)(`line`,{x1:`15.5`,y1:`6.5`,x2:`14`,y2:`9.5`,stroke:V,strokeWidth:H,opacity:`.2`})]});case`rating`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`path`,{d:`M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z`,fill:V,opacity:`.25`}),(0,w.jsx)(`path`,{d:`M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z`,fill:V,opacity:`.25`}),(0,w.jsx)(`path`,{d:`M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z`,stroke:V,strokeWidth:H,opacity:`.25`})]});case`map`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`12`,rx:`1`,stroke:V,strokeWidth:H}),(0,w.jsx)(`line`,{x1:`2`,y1:`6`,x2:`18`,y2:`10`,stroke:V,strokeWidth:`.3`,opacity:`.15`}),(0,w.jsx)(`line`,{x1:`7`,y1:`2`,x2:`11`,y2:`14`,stroke:V,strokeWidth:`.3`,opacity:`.15`}),(0,w.jsx)(`path`,{d:`M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z`,fill:V,opacity:`.15`,stroke:V,strokeWidth:H})]});case`timeline`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`line`,{x1:`5`,y1:`2`,x2:`5`,y2:`14`,stroke:V,strokeWidth:`.4`,opacity:`.25`}),(0,w.jsx)(`circle`,{cx:`5`,cy:`4`,r:`1.5`,fill:V,opacity:`.2`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`8`,y:`3`,width:`8`,height:`1`,rx:`.5`,fill:V,opacity:`.25`}),(0,w.jsx)(`circle`,{cx:`5`,cy:`8.5`,r:`1.5`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`8`,y:`7.5`,width:`6`,height:`1`,rx:`.5`,fill:V,opacity:`.15`}),(0,w.jsx)(`circle`,{cx:`5`,cy:`13`,r:`1.5`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`8`,y:`12`,width:`7`,height:`1`,rx:`.5`,fill:V,opacity:`.15`})]});case`fileUpload`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`12`,rx:`1.5`,stroke:V,strokeWidth:H,strokeDasharray:`2 1`}),(0,w.jsx)(`path`,{d:`M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8`,stroke:V,strokeWidth:H,opacity:`.3`}),(0,w.jsx)(`rect`,{x:`7`,y:`11.5`,width:`6`,height:`1`,rx:`.5`,fill:V,opacity:`.15`})]});case`codeBlock`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`12`,rx:`1`,stroke:V,strokeWidth:H}),(0,w.jsx)(`circle`,{cx:`4`,cy:`4`,r:`.6`,fill:V,opacity:`.3`}),(0,w.jsx)(`circle`,{cx:`5.5`,cy:`4`,r:`.6`,fill:V,opacity:`.3`}),(0,w.jsx)(`circle`,{cx:`7`,cy:`4`,r:`.6`,fill:V,opacity:`.3`}),(0,w.jsx)(`rect`,{x:`4`,y:`7`,width:`7`,height:`1`,rx:`.5`,fill:V,opacity:`.2`}),(0,w.jsx)(`rect`,{x:`6`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:V,opacity:`.15`}),(0,w.jsx)(`rect`,{x:`4`,y:`11`,width:`8`,height:`1`,rx:`.5`,fill:V,opacity:`.12`})]});case`calendar`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`2`,y:`3`,width:`16`,height:`12`,rx:`1`,stroke:V,strokeWidth:H}),(0,w.jsx)(`line`,{x1:`2`,y1:`6.5`,x2:`18`,y2:`6.5`,stroke:V,strokeWidth:`.4`,opacity:`.25`}),(0,w.jsx)(`rect`,{x:`5`,y:`4`,width:`1`,height:`1.5`,rx:`.3`,fill:V,opacity:`.2`}),(0,w.jsx)(`rect`,{x:`14`,y:`4`,width:`1`,height:`1.5`,rx:`.3`,fill:V,opacity:`.2`}),(0,w.jsx)(`circle`,{cx:`7`,cy:`9`,r:`.6`,fill:V,opacity:`.2`}),(0,w.jsx)(`circle`,{cx:`10`,cy:`9`,r:`.6`,fill:V,opacity:`.2`}),(0,w.jsx)(`circle`,{cx:`13`,cy:`9`,r:`.6`,fill:V,opacity:`.3`}),(0,w.jsx)(`circle`,{cx:`7`,cy:`12`,r:`.6`,fill:V,opacity:`.2`}),(0,w.jsx)(`circle`,{cx:`10`,cy:`12`,r:`.6`,fill:V,opacity:`.2`})]});case`notification`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`2`,y:`3`,width:`16`,height:`10`,rx:`1.5`,stroke:V,strokeWidth:H}),(0,w.jsx)(`circle`,{cx:`5.5`,cy:`8`,r:`2`,stroke:V,strokeWidth:H,opacity:`.25`}),(0,w.jsx)(`rect`,{x:`9`,y:`6`,width:`6`,height:`1`,rx:`.5`,fill:V,opacity:`.25`}),(0,w.jsx)(`rect`,{x:`9`,y:`8.5`,width:`4.5`,height:`1`,rx:`.5`,fill:V,opacity:`.12`}),(0,w.jsx)(`circle`,{cx:`16.5`,cy:`4.5`,r:`1.5`,fill:V,opacity:`.25`})]});case`productCard`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`3`,y:`1`,width:`14`,height:`14`,rx:`1.5`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`3`,y:`1`,width:`14`,height:`6`,rx:`1`,fill:V,opacity:`.04`}),(0,w.jsx)(`rect`,{x:`5`,y:`8.5`,width:`7`,height:`1`,rx:`.5`,fill:V,opacity:`.25`}),(0,w.jsx)(`rect`,{x:`5`,y:`10.5`,width:`4`,height:`1.5`,rx:`.5`,fill:V,opacity:`.15`}),(0,w.jsx)(`rect`,{x:`12`,y:`12`,width:`4`,height:`2`,rx:`.75`,stroke:V,strokeWidth:H})]});case`profile`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`circle`,{cx:`10`,cy:`5`,r:`3`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`5`,y:`10`,width:`10`,height:`1.5`,rx:`.5`,fill:V,opacity:`.25`}),(0,w.jsx)(`rect`,{x:`7`,y:`12.5`,width:`6`,height:`1`,rx:`.5`,fill:V,opacity:`.12`})]});case`drawer`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`9`,y:`1`,width:`10`,height:`14`,rx:`1`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`10.5`,y:`4`,width:`5`,height:`1`,rx:`.5`,fill:V,opacity:`.25`}),(0,w.jsx)(`rect`,{x:`10.5`,y:`6.5`,width:`7`,height:`1`,rx:`.5`,fill:V,opacity:`.15`}),(0,w.jsx)(`rect`,{x:`10.5`,y:`9`,width:`6`,height:`1`,rx:`.5`,fill:V,opacity:`.15`}),(0,w.jsx)(`rect`,{x:`1`,y:`1`,width:`7`,height:`14`,rx:`1`,stroke:V,strokeWidth:H,opacity:`.15`})]});case`popover`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`9`,rx:`1.5`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`5`,y:`4.5`,width:`8`,height:`1`,rx:`.5`,fill:V,opacity:`.25`}),(0,w.jsx)(`rect`,{x:`5`,y:`7`,width:`6`,height:`1`,rx:`.5`,fill:V,opacity:`.15`}),(0,w.jsx)(`path`,{d:`M9 11l1 2.5 1-2.5`,stroke:V,strokeWidth:H})]});case`logo`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`2`,y:`3`,width:`10`,height:`10`,rx:`2`,stroke:V,strokeWidth:H}),(0,w.jsx)(`path`,{d:`M5 9.5l2-4 2 4`,stroke:V,strokeWidth:H,opacity:`.3`}),(0,w.jsx)(`rect`,{x:`14`,y:`6`,width:`4`,height:`1`,rx:`.5`,fill:V,opacity:`.2`}),(0,w.jsx)(`rect`,{x:`14`,y:`8.5`,width:`3`,height:`1`,rx:`.5`,fill:V,opacity:`.12`})]});case`faq`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`text`,{x:`2.5`,y:`5.5`,fontSize:`4`,fill:V,opacity:`.3`,fontWeight:`bold`,children:`?`}),(0,w.jsx)(`rect`,{x:`7`,y:`3`,width:`10`,height:`1`,rx:`.5`,fill:V,opacity:`.25`}),(0,w.jsx)(`rect`,{x:`7`,y:`5.5`,width:`8`,height:`1`,rx:`.5`,fill:V,opacity:`.12`}),(0,w.jsx)(`text`,{x:`2.5`,y:`11.5`,fontSize:`4`,fill:V,opacity:`.3`,fontWeight:`bold`,children:`?`}),(0,w.jsx)(`rect`,{x:`7`,y:`9`,width:`9`,height:`1`,rx:`.5`,fill:V,opacity:`.25`}),(0,w.jsx)(`rect`,{x:`7`,y:`11.5`,width:`7`,height:`1`,rx:`.5`,fill:V,opacity:`.12`})]});case`gallery`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`1.5`,y:`1.5`,width:`5`,height:`5`,rx:`.75`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`7.5`,y:`1.5`,width:`5`,height:`5`,rx:`.75`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`13.5`,y:`1.5`,width:`5`,height:`5`,rx:`.75`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`1.5`,y:`9.5`,width:`5`,height:`5`,rx:`.75`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`7.5`,y:`9.5`,width:`5`,height:`5`,rx:`.75`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`13.5`,y:`9.5`,width:`5`,height:`5`,rx:`.75`,stroke:V,strokeWidth:H})]});case`checkbox`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`5`,y:`4`,width:`8`,height:`8`,rx:`1.5`,stroke:V,strokeWidth:H}),(0,w.jsx)(`path`,{d:`M7.5 8l1.5 1.5 3-3`,stroke:V,strokeWidth:H,opacity:`.35`})]});case`radio`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`circle`,{cx:`10`,cy:`8`,r:`4`,stroke:V,strokeWidth:H}),(0,w.jsx)(`circle`,{cx:`10`,cy:`8`,r:`2`,fill:V,opacity:`.3`})]});case`slider`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`2`,y:`7.5`,width:`16`,height:`1`,rx:`.5`,fill:V,opacity:`.15`}),(0,w.jsx)(`rect`,{x:`2`,y:`7.5`,width:`10`,height:`1`,rx:`.5`,fill:V,opacity:`.25`}),(0,w.jsx)(`circle`,{cx:`12`,cy:`8`,r:`2.5`,stroke:V,strokeWidth:H})]});case`datePicker`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`5`,rx:`1`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`3.5`,y:`3`,width:`5`,height:`1`,rx:`.5`,fill:V,opacity:`.2`}),(0,w.jsx)(`rect`,{x:`14`,y:`2.5`,width:`2.5`,height:`2`,rx:`.5`,fill:V,opacity:`.12`}),(0,w.jsx)(`rect`,{x:`2`,y:`7`,width:`16`,height:`8`,rx:`1`,stroke:V,strokeWidth:H,strokeDasharray:`2 1`,opacity:`.3`}),(0,w.jsx)(`circle`,{cx:`6`,cy:`10`,r:`.6`,fill:V,opacity:`.2`}),(0,w.jsx)(`circle`,{cx:`10`,cy:`10`,r:`.6`,fill:V,opacity:`.3`}),(0,w.jsx)(`circle`,{cx:`14`,cy:`10`,r:`.6`,fill:V,opacity:`.2`}),(0,w.jsx)(`circle`,{cx:`6`,cy:`13`,r:`.6`,fill:V,opacity:`.2`}),(0,w.jsx)(`circle`,{cx:`10`,cy:`13`,r:`.6`,fill:V,opacity:`.2`})]});case`skeleton`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`3`,rx:`1`,fill:V,opacity:`.08`}),(0,w.jsx)(`rect`,{x:`2`,y:`7`,width:`10`,height:`2`,rx:`.75`,fill:V,opacity:`.08`}),(0,w.jsx)(`rect`,{x:`2`,y:`11`,width:`13`,height:`2`,rx:`.75`,fill:V,opacity:`.08`})]});case`chip`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`1.5`,y:`5`,width:`10`,height:`6`,rx:`3`,fill:V,opacity:`.08`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`4`,y:`7.5`,width:`4`,height:`1`,rx:`.5`,fill:V,opacity:`.25`}),(0,w.jsx)(`line`,{x1:`9.5`,y1:`6.5`,x2:`10.5`,y2:`9.5`,stroke:V,strokeWidth:H,opacity:`.2`}),(0,w.jsx)(`line`,{x1:`10.5`,y1:`6.5`,x2:`9.5`,y2:`9.5`,stroke:V,strokeWidth:H,opacity:`.2`}),(0,w.jsx)(`rect`,{x:`13`,y:`5`,width:`5.5`,height:`6`,rx:`3`,stroke:V,strokeWidth:H,opacity:`.25`})]});case`icon`:return(0,w.jsx)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:(0,w.jsx)(`path`,{d:`M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z`,stroke:V,strokeWidth:H,opacity:`.3`})});case`spinner`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`circle`,{cx:`10`,cy:`8`,r:`5`,stroke:V,strokeWidth:H,opacity:`.12`}),(0,w.jsx)(`path`,{d:`M10 3a5 5 0 0 1 5 5`,stroke:V,strokeWidth:H,opacity:`.35`,strokeLinecap:`round`})]});case`feature`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`2`,y:`2`,width:`5`,height:`5`,rx:`1.5`,stroke:V,strokeWidth:H}),(0,w.jsx)(`path`,{d:`M4.5 3.5v3m-1.5-1.5h3`,stroke:V,strokeWidth:H,opacity:`.25`}),(0,w.jsx)(`rect`,{x:`9`,y:`2.5`,width:`8`,height:`1.5`,rx:`.5`,fill:V,opacity:`.25`}),(0,w.jsx)(`rect`,{x:`9`,y:`5.5`,width:`6`,height:`1`,rx:`.5`,fill:V,opacity:`.12`}),(0,w.jsx)(`rect`,{x:`2`,y:`10`,width:`5`,height:`5`,rx:`1.5`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`9`,y:`10.5`,width:`7`,height:`1.5`,rx:`.5`,fill:V,opacity:`.25`}),(0,w.jsx)(`rect`,{x:`9`,y:`13.5`,width:`5`,height:`1`,rx:`.5`,fill:V,opacity:`.12`})]});case`team`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`circle`,{cx:`5`,cy:`5`,r:`2.5`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`2.5`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:V,opacity:`.2`}),(0,w.jsx)(`circle`,{cx:`15`,cy:`5`,r:`2.5`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`12.5`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:V,opacity:`.2`}),(0,w.jsx)(`circle`,{cx:`10`,cy:`5`,r:`2.5`,stroke:V,strokeWidth:H,opacity:`.5`}),(0,w.jsx)(`rect`,{x:`7.5`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:V,opacity:`.15`}),(0,w.jsx)(`rect`,{x:`4`,y:`12`,width:`12`,height:`1`,rx:`.5`,fill:V,opacity:`.1`})]});case`login`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`3`,y:`1`,width:`14`,height:`14`,rx:`1.5`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`6`,y:`3`,width:`8`,height:`1.5`,rx:`.5`,fill:V,opacity:`.25`}),(0,w.jsx)(`rect`,{x:`5`,y:`5.5`,width:`10`,height:`3`,rx:`.75`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`5`,y:`9.5`,width:`10`,height:`3`,rx:`.75`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`6.5`,y:`13.5`,width:`7`,height:`2`,rx:`.75`,fill:V,opacity:`.2`})]});case`contact`:return(0,w.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`14`,rx:`1.5`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`4`,y:`3`,width:`5`,height:`1`,rx:`.5`,fill:V,opacity:`.2`}),(0,w.jsx)(`rect`,{x:`4`,y:`5`,width:`12`,height:`2.5`,rx:`.75`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`4`,y:`8.5`,width:`12`,height:`4`,rx:`.75`,stroke:V,strokeWidth:H}),(0,w.jsx)(`rect`,{x:`11`,y:`13.5`,width:`5`,height:`1.5`,rx:`.5`,fill:V,opacity:`.2`})]});default:return null}}function on({activeType:e,onSelect:t,onDragStart:n,scrollRef:r,fadeClass:i,blankCanvas:a}){return(0,w.jsx)(`div`,{ref:r,className:`${B.placeScroll} ${i||``}`,children:Ie.map(r=>(0,w.jsxs)(`div`,{className:B.paletteSection,children:[(0,w.jsx)(`div`,{className:B.paletteSectionTitle,children:r.section}),r.items.map(r=>(0,w.jsxs)(`div`,{className:`${B.paletteItem} ${e===r.type?B.active:``} ${a?B.wireframe:``}`,onClick:()=>t(r.type),onMouseDown:e=>{e.button===0&&n(r.type,e)},children:[(0,w.jsx)(`div`,{className:B.paletteItemIcon,children:(0,w.jsx)(an,{type:r.type})}),(0,w.jsx)(`span`,{className:B.paletteItemLabel,children:r.label})]},r.type))]},r.section))})}function sn({value:e,suffix:t}){let[n,r]=(0,C.useState)(null),[i,a]=(0,C.useState)(t),[o,s]=(0,C.useState)(`up`),c=(0,C.useRef)(e),l=(0,C.useRef)(t),u=(0,C.useRef)(),d=n!==null&&i!==t;return(0,C.useEffect)(()=>{if(e!==c.current){if(e===0){c.current=e,l.current=t,r(null);return}s(e>c.current?`up`:`down`),r(c.current),a(l.current),c.current=e,l.current=t,clearTimeout(u.current),u.current=N(()=>r(null),250)}else l.current=t},[e,t]),n===null?(0,w.jsxs)(w.Fragment,{children:[e,t?` ${t}`:``]}):d?(0,w.jsxs)(`span`,{className:B.rollingWrap,children:[(0,w.jsxs)(`span`,{style:{visibility:`hidden`},children:[e,` `,t]}),(0,w.jsxs)(`span`,{className:`${B.rollingNum} ${o===`up`?B.exitUp:B.exitDown}`,children:[n,` `,i]},`o${n}-${e}`),(0,w.jsxs)(`span`,{className:`${B.rollingNum} ${o===`up`?B.enterUp:B.enterDown}`,children:[e,` `,t]},`n${e}`)]}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(`span`,{className:B.rollingWrap,children:[(0,w.jsx)(`span`,{style:{visibility:`hidden`},children:e}),(0,w.jsx)(`span`,{className:`${B.rollingNum} ${o===`up`?B.exitUp:B.exitDown}`,children:n},`o${n}-${e}`),(0,w.jsx)(`span`,{className:`${B.rollingNum} ${o===`up`?B.enterUp:B.enterDown}`,children:e},`n${e}`)]}),t?` ${t}`:``]})}function cn({activeType:e,onSelect:t,isDarkMode:n,sectionCount:r,onDetectSections:i,visible:a,onExited:o,placementCount:s,onClearPlacements:c,onDragStart:l,blankCanvas:u,onBlankCanvasChange:d,wireframePurpose:f,onWireframePurposeChange:p,Tooltip:m}){let[h,g]=(0,C.useState)(!1),[_,v]=(0,C.useState)(`exit`),[y,b]=(0,C.useState)(!1),[x,ee]=(0,C.useState)(!0),te=(0,C.useRef)(0),S=(0,C.useRef)(``),ne=(0,C.useRef)(0),T=(0,C.useRef)(),re=(0,C.useRef)(null),[E,ie]=(0,C.useState)(``);(0,C.useEffect)(()=>(a?(g(!0),clearTimeout(T.current),cancelAnimationFrame(ne.current),ne.current=Te(()=>{ne.current=Te(()=>{v(`enter`)})})):(cancelAnimationFrame(ne.current),v(`exit`),clearTimeout(T.current),T.current=N(()=>{g(!1),o?.()},200)),()=>cancelAnimationFrame(ne.current)),[a]);let ae=s>0||r>0,D=s+r;if(D>0&&(te.current=D,S.current=u?D===1?`Component`:`Components`:D===1?`Change`:`Changes`),(0,C.useEffect)(()=>{if(ae)y?ee(!1):(ee(!0),b(!0),Te(()=>{Te(()=>{ee(!1)})}));else{ee(!0);let e=N(()=>b(!1),300);return()=>clearTimeout(e)}},[ae]),(0,C.useEffect)(()=>{if(!h)return;let e=re.current;if(!e)return;let t=()=>ie(rn(e));t(),e.addEventListener(`scroll`,t,{passive:!0});let n=new ResizeObserver(t);return n.observe(e),()=>{e.removeEventListener(`scroll`,t),n.disconnect()}},[h]),!h)return null;let oe=[];return s>0&&oe.push(`placed`),r>0&&oe.push(`captured`),(0,w.jsxs)(`div`,{className:`${B.palette} ${B[_]} ${n?``:B.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:e=>e.stopPropagation(),onMouseDown:e=>e.stopPropagation(),onTransitionEnd:e=>{e.target===e.currentTarget&&(a||(clearTimeout(T.current),g(!1),v(`exit`),o?.()))},children:[(0,w.jsxs)(`div`,{className:B.paletteHeader,children:[(0,w.jsx)(`div`,{className:B.paletteHeaderTitle,children:`Layout Mode`}),(0,w.jsxs)(`div`,{className:B.paletteHeaderDesc,children:[`Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary.`,` `,(0,w.jsx)(`a`,{href:`https://agentation.dev/features#layout-mode`,target:`_blank`,rel:`noopener noreferrer`,children:`Learn more.`})]})]}),(0,w.jsxs)(`div`,{className:`${B.canvasToggle} ${u?B.active:``}`,onClick:()=>d(!u),children:[(0,w.jsx)(`span`,{className:B.canvasToggleIcon,children:(0,w.jsxs)(`svg`,{viewBox:`0 0 14 14`,width:`14`,height:`14`,fill:`none`,children:[(0,w.jsx)(`rect`,{x:`1`,y:`1`,width:`12`,height:`12`,rx:`2`,stroke:`currentColor`,strokeWidth:`1`}),(0,w.jsx)(`circle`,{cx:`4.5`,cy:`4.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,w.jsx)(`circle`,{cx:`7`,cy:`4.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,w.jsx)(`circle`,{cx:`9.5`,cy:`4.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,w.jsx)(`circle`,{cx:`4.5`,cy:`7`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,w.jsx)(`circle`,{cx:`7`,cy:`7`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,w.jsx)(`circle`,{cx:`9.5`,cy:`7`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,w.jsx)(`circle`,{cx:`4.5`,cy:`9.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,w.jsx)(`circle`,{cx:`7`,cy:`9.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,w.jsx)(`circle`,{cx:`9.5`,cy:`9.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`})]})}),(0,w.jsx)(`span`,{className:B.canvasToggleLabel,children:`Wireframe New Page`})]}),(0,w.jsx)(`div`,{className:`${B.wireframePurposeWrap} ${u?``:B.collapsed}`,children:(0,w.jsx)(`div`,{className:B.wireframePurposeInner,children:(0,w.jsx)(`textarea`,{className:B.wireframePurposeInput,placeholder:`Describe this page to provide additional context for your agent.`,value:f,onChange:e=>p(e.target.value),rows:2})})}),(0,w.jsx)(on,{activeType:e,onSelect:t,onDragStart:l,scrollRef:re,fadeClass:E,blankCanvas:u}),y&&(0,w.jsx)(`div`,{className:`${B.paletteFooterWrap} ${x?B.footerHidden:``}`,children:(0,w.jsx)(`div`,{className:B.paletteFooterInner,children:(0,w.jsx)(`div`,{className:B.paletteFooterInnerContent,children:(0,w.jsxs)(`div`,{className:B.paletteFooter,children:[(0,w.jsx)(`span`,{className:B.paletteFooterCount,children:(0,w.jsx)(sn,{value:te.current,suffix:S.current})}),(0,w.jsx)(`button`,{className:B.paletteFooterClear,onClick:c,children:`Clear`})]})})})})]})}function ln(e){if(e.parentElement)return e.parentElement;let t=e.getRootNode();return t instanceof ShadowRoot?t.host:null}function un(e,t){let n=e;for(;n;){if(n.matches(t))return n;n=ln(n)}return null}function dn(e,t=4){let n=[],r=e,i=0;for(;r&&i<t;){let e=r.tagName.toLowerCase();if(e===`html`||e===`body`)break;let t=e;if(r.id)t=`#${r.id}`;else if(r.className&&typeof r.className==`string`){let e=r.className.split(/\s+/).find(e=>e.length>2&&!e.match(/^[a-z]{1,2}$/)&&!e.match(/[A-Z0-9]{5,}/));e&&(t=`.${e.split(`_`)[0]}`)}let a=ln(r);!r.parentElement&&a&&(t=`\u27E8shadow\u27E9 ${t}`),n.unshift(t),r=a,i++}return n.join(` > `)}function fn(e){let t=dn(e);if(e.dataset.element)return{name:e.dataset.element,path:t};let n=e.tagName.toLowerCase();if([`path`,`circle`,`rect`,`line`,`g`].includes(n)){let n=un(e,`svg`);if(n){let e=ln(n);if(e instanceof HTMLElement)return{name:`graphic in ${fn(e).name}`,path:t}}return{name:`graphic element`,path:t}}if(n===`svg`){let n=ln(e);if(n?.tagName.toLowerCase()===`button`){let e=n.textContent?.trim();return{name:e?`icon in "${e}" button`:`button icon`,path:t}}return{name:`icon`,path:t}}if(n===`button`){let n=e.textContent?.trim(),r=e.getAttribute(`aria-label`);return r?{name:`button [${r}]`,path:t}:{name:n?`button "${n.slice(0,25)}"`:`button`,path:t}}if(n===`a`){let n=e.textContent?.trim(),r=e.getAttribute(`href`);return n?{name:`link "${n.slice(0,25)}"`,path:t}:r?{name:`link to ${r.slice(0,30)}`,path:t}:{name:`link`,path:t}}if(n===`input`){let n=e.getAttribute(`type`)||`text`,r=e.getAttribute(`placeholder`),i=e.getAttribute(`name`);return r?{name:`input "${r}"`,path:t}:i?{name:`input [${i}]`,path:t}:{name:`${n} input`,path:t}}if([`h1`,`h2`,`h3`,`h4`,`h5`,`h6`].includes(n)){let r=e.textContent?.trim();return{name:r?`${n} "${r.slice(0,35)}"`:n,path:t}}if(n===`p`){let n=e.textContent?.trim();return n?{name:`paragraph: "${n.slice(0,40)}${n.length>40?`...`:``}"`,path:t}:{name:`paragraph`,path:t}}if(n===`span`||n===`label`){let r=e.textContent?.trim();return r&&r.length<40?{name:`"${r}"`,path:t}:{name:n,path:t}}if(n===`li`){let n=e.textContent?.trim();return n&&n.length<40?{name:`list item: "${n.slice(0,35)}"`,path:t}:{name:`list item`,path:t}}if(n===`blockquote`)return{name:`blockquote`,path:t};if(n===`code`){let n=e.textContent?.trim();return n&&n.length<30?{name:`code: \`${n}\``,path:t}:{name:`code`,path:t}}if(n===`pre`)return{name:`code block`,path:t};if(n===`img`){let n=e.getAttribute(`alt`);return{name:n?`image "${n.slice(0,30)}"`:`image`,path:t}}if(n===`video`)return{name:`video`,path:t};if([`div`,`section`,`article`,`nav`,`header`,`footer`,`aside`,`main`].includes(n)){let r=e.className,i=e.getAttribute(`role`),a=e.getAttribute(`aria-label`);if(a)return{name:`${n} [${a}]`,path:t};if(i)return{name:`${i}`,path:t};if(typeof r==`string`&&r){let e=r.split(/[\s_-]+/).map(e=>e.replace(/[A-Z0-9]{5,}.*$/,``)).filter(e=>e.length>2&&!/^[a-z]{1,2}$/.test(e)).slice(0,2);if(e.length>0)return{name:e.join(` `),path:t}}return{name:n===`div`?`container`:n,path:t}}return{name:n,path:t}}function pn(e){let t=[],n=e.textContent?.trim();n&&n.length<100&&t.push(n);let r=e.previousElementSibling;if(r){let e=r.textContent?.trim();e&&e.length<50&&t.unshift(`[before: "${e.slice(0,40)}"]`)}let i=e.nextElementSibling;if(i){let e=i.textContent?.trim();e&&e.length<50&&t.push(`[after: "${e.slice(0,40)}"]`)}return t.join(` `)}function mn(e){let t=ln(e);if(!t)return``;let n=(e.getRootNode()instanceof ShadowRoot&&e.parentElement?Array.from(e.parentElement.children):Array.from(t.children)).filter(t=>t!==e&&t instanceof HTMLElement);if(n.length===0)return``;let r=n.slice(0,4).map(e=>{let t=e.tagName.toLowerCase(),n=e.className,r=``;if(typeof n==`string`&&n){let e=n.split(/\s+/).map(e=>e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``)).find(e=>e.length>2&&!/^[a-z]{1,2}$/.test(e));e&&(r=`.${e}`)}if(t===`button`||t===`a`){let n=e.textContent?.trim().slice(0,15);if(n)return`${t}${r} "${n}"`}return`${t}${r}`}),i=t.tagName.toLowerCase();if(typeof t.className==`string`&&t.className){let e=t.className.split(/\s+/).map(e=>e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``)).find(e=>e.length>2&&!/^[a-z]{1,2}$/.test(e));e&&(i=`.${e}`)}let a=t.children.length,o=a>r.length+1?` (${a} total in ${i})`:``;return r.join(`, `)+o}function hn(e){let t=e.className;return typeof t!=`string`||!t?``:t.split(/\s+/).filter(e=>e.length>0).map(e=>{let t=e.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return t?t[1]:e}).filter((e,t,n)=>n.indexOf(e)===t).join(`, `)}var gn=new Set([`none`,`normal`,`auto`,`0px`,`rgba(0, 0, 0, 0)`,`transparent`,`static`,`visible`]),_n=new Set(`p.span.h1.h2.h3.h4.h5.h6.label.li.td.th.blockquote.figcaption.caption.legend.dt.dd.pre.code.em.strong.b.i.a.time.cite.q`.split(`.`)),vn=new Set([`input`,`textarea`,`select`]),yn=new Set([`img`,`video`,`canvas`,`svg`]),bn=new Set([`div`,`section`,`article`,`nav`,`header`,`footer`,`aside`,`main`,`ul`,`ol`,`form`,`fieldset`]);function xn(e){if(typeof window>`u`)return{};let t=window.getComputedStyle(e),n={},r=e.tagName.toLowerCase(),i;i=_n.has(r)?[`color`,`fontSize`,`fontWeight`,`fontFamily`,`lineHeight`]:r===`button`||r===`a`&&e.getAttribute(`role`)===`button`||vn.has(r)?[`backgroundColor`,`color`,`padding`,`borderRadius`,`fontSize`]:yn.has(r)?[`width`,`height`,`objectFit`,`borderRadius`]:bn.has(r)?[`display`,`padding`,`margin`,`gap`,`backgroundColor`]:[`color`,`fontSize`,`margin`,`padding`,`backgroundColor`];for(let e of i){let r=e.replace(/([A-Z])/g,`-$1`).toLowerCase(),i=t.getPropertyValue(r);i&&!gn.has(i)&&(n[e]=i)}return n}var Sn=`color.backgroundColor.borderColor.fontSize.fontWeight.fontFamily.lineHeight.letterSpacing.textAlign.width.height.padding.margin.border.borderRadius.display.position.top.right.bottom.left.zIndex.flexDirection.justifyContent.alignItems.gap.opacity.visibility.overflow.boxShadow.transform`.split(`.`);function Cn(e){if(typeof window>`u`)return``;let t=window.getComputedStyle(e),n=[];for(let e of Sn){let r=e.replace(/([A-Z])/g,`-$1`).toLowerCase(),i=t.getPropertyValue(r);i&&!gn.has(i)&&n.push(`${r}: ${i}`)}return n.join(`; `)}function wn(e){if(!e)return;let t={},n=e.split(`;`).map(e=>e.trim()).filter(Boolean);for(let e of n){let n=e.indexOf(`:`);if(n>0){let r=e.slice(0,n).trim(),i=e.slice(n+1).trim();r&&i&&(t[r]=i)}}return Object.keys(t).length>0?t:void 0}function Tn(e){let t=[],n=e.getAttribute(`role`),r=e.getAttribute(`aria-label`),i=e.getAttribute(`aria-describedby`),a=e.getAttribute(`tabindex`),o=e.getAttribute(`aria-hidden`);return n&&t.push(`role="${n}"`),r&&t.push(`aria-label="${r}"`),i&&t.push(`aria-describedby="${i}"`),a&&t.push(`tabindex=${a}`),o===`true`&&t.push(`aria-hidden`),e.matches(`a, button, input, select, textarea, [tabindex]`)&&t.push(`focusable`),t.join(`, `)}function En(e){let t=[],n=e;for(;n&&n.tagName.toLowerCase()!==`html`;){let e=n.tagName.toLowerCase(),r=e;if(n.id)r=`${e}#${n.id}`;else if(n.className&&typeof n.className==`string`){let t=n.className.split(/\s+/).map(e=>e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``)).find(e=>e.length>2);t&&(r=`${e}.${t}`)}let i=ln(n);!n.parentElement&&i&&(r=`\u27E8shadow\u27E9 ${r}`),t.unshift(r),n=i}return t.join(` > `)}var Dn=new Set([`nav`,`header`,`main`,`section`,`article`,`footer`,`aside`]),On={banner:`Header`,navigation:`Navigation`,main:`Main Content`,contentinfo:`Footer`,complementary:`Sidebar`,region:`Section`},kn={nav:`Navigation`,header:`Header`,main:`Main Content`,section:`Section`,article:`Article`,footer:`Footer`,aside:`Sidebar`},An=new Set([`script`,`style`,`noscript`,`link`,`meta`]),jn=40;function Mn(e){let t=e;for(;t&&t!==document.body&&t!==document.documentElement;){let e=window.getComputedStyle(t).position;if(e===`fixed`||e===`sticky`)return!0;t=t.parentElement}return!1}function Nn(e){let t=e.tagName.toLowerCase();if([`nav`,`header`,`footer`,`main`].includes(t)&&document.querySelectorAll(t).length===1)return t;if(e.id)return`#${CSS.escape(e.id)}`;if(e.className&&typeof e.className==`string`){let n=e.className.split(/\s+/).filter(e=>e.length>0).find(e=>e.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(e)&&!/^[a-z]{1,2}$/.test(e));if(n){let e=`${t}.${CSS.escape(n)}`;if(document.querySelectorAll(e).length===1)return e}}let n=e.parentElement;if(n){let r=Array.from(n.children).indexOf(e)+1;return`${n===document.body?`body`:Nn(n)} > ${t}:nth-child(${r})`}return t}function Pn(e){let t=e.tagName.toLowerCase(),n=e.getAttribute(`aria-label`);if(n)return n;let r=e.getAttribute(`role`);if(r&&On[r])return On[r];if(kn[t])return kn[t];let i=e.querySelector(`h1, h2, h3, h4, h5, h6`);if(i){let e=i.textContent?.trim();if(e&&e.length<=50)return e;if(e)return e.slice(0,47)+`...`}let{name:a}=fn(e);return a.charAt(0).toUpperCase()+a.slice(1)}function Fn(e){let t=e.className;return typeof t!=`string`||!t?null:t.split(/\s+/).map(e=>e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``)).find(e=>e.length>2&&!/^[a-z]{1,2}$/.test(e))||null}function In(e){let t=e.textContent?.trim();if(!t)return null;let n=t.replace(/\s+/g,` `);return n.length<=30?n:n.slice(0,30)+`…`}function Ln(){let e=document.querySelector(`main`)||document.body,t=Array.from(e.children),n=t;e!==document.body&&t.length<3&&(n=Array.from(document.body.children));let r=[];return n.forEach((e,t)=>{if(!(e instanceof HTMLElement))return;let n=e.tagName.toLowerCase();if(An.has(n)||e.hasAttribute(`data-feedback-toolbar`)||e.closest(`[data-feedback-toolbar]`))return;let i=window.getComputedStyle(e);if(i.display===`none`||i.visibility===`hidden`)return;let a=e.getBoundingClientRect();if(a.height<jn)return;let o=Dn.has(n),s=e.getAttribute(`role`)&&On[e.getAttribute(`role`)],c=n===`div`&&a.height>=60;if(!o&&!s&&!c)return;let l=window.scrollY,u=Mn(e),d={x:a.x,y:u?a.y:a.y+l,width:a.width,height:a.height};r.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Pn(e),tagName:n,selector:Nn(e),role:e.getAttribute(`role`),className:Fn(e),textSnippet:In(e),originalRect:d,currentRect:{...d},originalIndex:t,isFixed:u})}),r}function Rn(e){let t=window.scrollY,n=e.getBoundingClientRect(),r=Mn(e),i={x:n.x,y:r?n.y:n.y+t,width:n.width,height:n.height},a=e.parentElement,o=0;return a&&(o=Array.from(a.children).indexOf(e)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Pn(e),tagName:e.tagName.toLowerCase(),selector:Nn(e),role:e.getAttribute(`role`),className:Fn(e),textSnippet:In(e),originalRect:i,currentRect:{...i},originalIndex:o,isFixed:r}}var zn={bg:`rgba(59, 130, 246, 0.08)`,border:`rgba(59, 130, 246, 0.5)`,pill:`#3b82f6`},Bn=[`nw`,`n`,`ne`,`e`,`se`,`s`,`sw`,`w`],Vn=24,Hn=16,Un=5;function Wn(e,t,n,r){let i=1/0,a=1/0,o=e.x,s=e.x+e.width,c=e.x+e.width/2,l=e.y,u=e.y+e.height,d=e.y+e.height/2,f=[];for(let e of t)n.has(e.id)||f.push(e.currentRect);r&&f.push(...r);for(let e of f){let t=e.x,n=e.x+e.width,r=e.x+e.width/2,f=e.y,p=e.y+e.height,m=e.y+e.height/2;for(let e of[o,s,c])for(let a of[t,n,r]){let t=a-e;Math.abs(t)<Un&&Math.abs(t)<Math.abs(i)&&(i=t)}for(let e of[l,u,d])for(let t of[f,p,m]){let n=t-e;Math.abs(n)<Un&&Math.abs(n)<Math.abs(a)&&(a=n)}}let p=Math.abs(i)<Un?i:0,m=Math.abs(a)<Un?a:0,h=[],g=new Set,_=o+p,v=s+p,y=c+p,b=l+m,x=u+m,ee=d+m;for(let e of f){let t=e.x,n=e.x+e.width,r=e.x+e.width/2,i=e.y,a=e.y+e.height,o=e.y+e.height/2;for(let e of[t,r,n])for(let t of[_,y,v])if(Math.abs(t-e)<.5){let t=`x:${Math.round(e)}`;g.has(t)||(g.add(t),h.push({axis:`x`,pos:e}))}for(let e of[i,o,a])for(let t of[b,ee,x])if(Math.abs(t-e)<.5){let t=`y:${Math.round(e)}`;g.has(t)||(g.add(t),h.push({axis:`y`,pos:e}))}}return{dx:p,dy:m,guides:h}}var Gn=new Set([`script`,`style`,`noscript`,`link`,`meta`,`br`,`hr`]);function Kn(e){let t=e;for(;t&&t!==document.body&&t!==document.documentElement;){if(t.closest(`[data-feedback-toolbar]`))return null;if(Gn.has(t.tagName.toLowerCase())){t=t.parentElement;continue}let e=t.getBoundingClientRect();if(e.width>=Hn&&e.height>=Hn)return t;t=t.parentElement}return null}function qn({rearrangeState:e,onChange:t,isDarkMode:n,exiting:r,className:i,blankCanvas:a,extraSnapRects:o,onSelectionChange:s,deselectSignal:c,onDragMove:l,onDragEnd:u,clearSignal:d}){let{sections:f}=e,p=(0,C.useRef)(e);p.current=e;let[m,h]=(0,C.useState)(new Set),[g,_]=(0,C.useState)(!1),v=(0,C.useRef)(d);(0,C.useEffect)(()=>{d!==void 0&&d!==v.current&&(v.current=d,f.length>0&&_(!0))},[d,f.length]);let y=(0,C.useRef)(c);(0,C.useEffect)(()=>{c!==y.current&&(y.current=c,h(new Set))},[c]);let[b,x]=(0,C.useState)(null),[ee,te]=(0,C.useState)(!1),S=(0,C.useRef)(!1),ne=(0,C.useCallback)(e=>{let t=f.find(t=>t.id===e);t&&(S.current=!!t.note,x(e),te(!1))},[f]),T=(0,C.useCallback)(()=>{b&&(te(!0),N(()=>{x(null),te(!1)},150))},[b]),re=(0,C.useCallback)(n=>{b&&(t({...e,sections:f.map(e=>e.id===b?{...e,note:n.trim()||void 0}:e)}),T())},[b,f,e,t,T]);(0,C.useEffect)(()=>{r&&b&&T()},[r]);let[E,ie]=(0,C.useState)(new Set),ae=(0,C.useRef)(new Map),[D,oe]=(0,C.useState)(null),[se,O]=(0,C.useState)(null),[k,ce]=(0,C.useState)([]),[le,ue]=(0,C.useState)(0),de=(0,C.useRef)(null),fe=(0,C.useRef)(new Set),pe=(0,C.useRef)(new Map),[me,A]=(0,C.useState)(new Map),[he,ge]=(0,C.useState)(new Map),_e=(0,C.useRef)(new Set),ve=(0,C.useRef)(new Map),ye=(0,C.useRef)(s);ye.current=s;let j=(0,C.useRef)(l);j.current=l;let be=(0,C.useRef)(u);be.current=u,(0,C.useEffect)(()=>{a&&h(new Set)},[a]);let[xe,Se]=(0,C.useState)(()=>!e.sections.some(e=>{let t=e.originalRect,n=e.currentRect;return Math.abs(t.x-n.x)>1||Math.abs(t.y-n.y)>1||Math.abs(t.width-n.width)>1||Math.abs(t.height-n.height)>1}));(0,C.useEffect)(()=>{if(!xe){let e=N(()=>Se(!0),380);return()=>clearTimeout(e)}},[]);let Ce=(0,C.useRef)(new Set);(0,C.useEffect)(()=>{Ce.current=new Set(f.map(e=>e.selector))},[f]),(0,C.useEffect)(()=>{let e=()=>ue(window.scrollY);return e(),window.addEventListener(`scroll`,e,{passive:!0}),window.addEventListener(`resize`,e,{passive:!0}),()=>{window.removeEventListener(`scroll`,e),window.removeEventListener(`resize`,e)}},[]),(0,C.useEffect)(()=>{let e=e=>{if(de.current){oe(null);return}let t=document.elementFromPoint(e.clientX,e.clientY);if(!t){oe(null);return}if(t.closest(`[data-feedback-toolbar]`)){oe(null);return}if(t.closest(`[data-design-placement]`)){oe(null);return}if(t.closest(`[data-annotation-popup]`)){oe(null);return}let n=Kn(t);if(!n){oe(null);return}for(let e of Ce.current)try{let t=document.querySelector(e);if(t&&(t===n||n.contains(t))){oe(null);return}}catch{}let r=n.getBoundingClientRect();oe({x:r.x,y:r.y,w:r.width,h:r.height})};return document.addEventListener(`mousemove`,e,{passive:!0}),()=>document.removeEventListener(`mousemove`,e)},[f]),(0,C.useEffect)(()=>{let e=document.body.style.userSelect;return document.body.style.userSelect=`none`,()=>{document.body.style.userSelect=e}},[]),(0,C.useEffect)(()=>{let n=n=>{if(de.current||n.button!==0)return;let r=n.target;if(!r||r.closest(`[data-feedback-toolbar]`)||r.closest(`[data-design-placement]`)||r.closest(`[data-annotation-popup]`))return;let i=Kn(r),a=!1;if(i)for(let e of Ce.current)try{let t=document.querySelector(e);if(t&&(t===i||i.contains(t))){a=!0;break}}catch{}let s=!!(n.shiftKey||n.metaKey||n.ctrlKey);if(i&&!a){n.preventDefault(),n.stopPropagation();let r=Rn(i),a=[...f,r],c=[...e.originalOrder,r.id];t({...e,sections:a,originalOrder:c});let l=new Set([r.id]);h(l),ye.current?.(l,s),oe(null);let u=n.clientX,d=n.clientY,p={x:r.currentRect.x,y:r.currentRect.y};r.originalRect;let m=!1,g=0,_=0;de.current=`move`;let v=e=>{let t=e.clientX-u,n=e.clientY-d;if(!m&&(Math.abs(t)>2||Math.abs(n)>2)&&(m=!0),!m)return;let i=Wn({x:p.x+t,y:p.y+n,width:r.currentRect.width,height:r.currentRect.height},a,new Set([r.id]),o);ce(i.guides);let s=t+i.dx,c=n+i.dy;g=s,_=c;let l=document.querySelector(`[data-rearrange-section="${r.id}"]`);l&&(l.style.transform=`translate(${s}px, ${c}px)`),A(new Map([[r.id,{x:p.x+s,y:p.y+c,width:r.currentRect.width,height:r.currentRect.height}]])),j.current?.(s,c)},y=()=>{window.removeEventListener(`mousemove`,v),window.removeEventListener(`mouseup`,y),de.current=null,ce([]),A(new Map);let n=document.querySelector(`[data-rearrange-section="${r.id}"]`);n&&(n.style.transform=``),m&&t({...e,sections:a.map(e=>e.id===r.id?{...e,currentRect:{...e.currentRect,x:Math.max(0,p.x+g),y:Math.max(0,p.y+_)}}:e),originalOrder:c}),be.current?.(g,_,m)};window.addEventListener(`mousemove`,v),window.addEventListener(`mouseup`,y)}else if(a&&i){n.preventDefault();for(let e of f)try{let t=document.querySelector(e.selector);if(t&&t===i){let t=new Set([e.id]);h(t),ye.current?.(t,s);return}}catch{}s||(h(new Set),ye.current?.(new Set,!1))}else s||(h(new Set),ye.current?.(new Set,!1))};return document.addEventListener(`mousedown`,n,!0),()=>document.removeEventListener(`mousedown`,n,!0)},[f,e,t]),(0,C.useEffect)(()=>{let n=n=>{let r=n.target;if(!(r.tagName===`INPUT`||r.tagName===`TEXTAREA`||r.isContentEditable)){if((n.key===`Backspace`||n.key===`Delete`)&&m.size>0){n.preventDefault();let e=new Set(m);ie(t=>{let n=new Set(t);for(let t of e)n.add(t);return n}),h(new Set),N(()=>{let n=p.current;t({...n,sections:n.sections.filter(t=>!e.has(t.id)),originalOrder:n.originalOrder.filter(t=>!e.has(t))}),ie(t=>{let n=new Set(t);for(let t of e)n.delete(t);return n})},180);return}if([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(n.key)&&m.size>0){n.preventDefault();let r=n.shiftKey?20:1,i=n.key===`ArrowLeft`?-r:n.key===`ArrowRight`?r:0,a=n.key===`ArrowUp`?-r:n.key===`ArrowDown`?r:0;t({...e,sections:f.map(e=>m.has(e.id)?{...e,currentRect:{...e.currentRect,x:Math.max(0,e.currentRect.x+i),y:Math.max(0,e.currentRect.y+a)}}:e)});return}n.key===`Escape`&&m.size>0&&h(new Set)}};return document.addEventListener(`keydown`,n),()=>document.removeEventListener(`keydown`,n)},[m,f,e,t]);let M=(0,C.useCallback)((n,r)=>{if(n.button!==0)return;let i=n.target;if(i.closest(`.${B.handle}`)||i.closest(`.${B.deleteButton}`))return;n.preventDefault(),n.stopPropagation();let a;n.shiftKey||n.metaKey||n.ctrlKey?(a=new Set(m),a.has(r)?a.delete(r):a.add(r)):a=m.has(r)?new Set(m):new Set([r]),h(a),(a.size!==m.size||[...a].some(e=>!m.has(e)))&&ye.current?.(a,!!(n.shiftKey||n.metaKey||n.ctrlKey));let s=n.clientX,c=n.clientY,l=new Map;for(let e of f)a.has(e.id)&&l.set(e.id,{x:e.currentRect.x,y:e.currentRect.y});de.current=`move`;let u=!1,d=0,p=0,g=new Map;for(let e of f)if(a.has(e.id)){let t=document.querySelector(`[data-rearrange-section="${e.id}"]`);g.set(e.id,{outlineEl:t,curW:e.currentRect.width,curH:e.currentRect.height})}let _=e=>{let t=e.clientX-s,n=e.clientY-c;if(t===0&&n===0)return;u=!0;let r=1/0,i=1/0,m=-1/0,h=-1/0;for(let[e,{curW:a,curH:o}]of g){let s=l.get(e);if(!s)continue;let c=s.x+t,u=s.y+n;r=Math.min(r,c),i=Math.min(i,u),m=Math.max(m,c+a),h=Math.max(h,u+o)}let _=Wn({x:r,y:i,width:m-r,height:h-i},f,a,o),v=t+_.dx,y=n+_.dy;d=v,p=y,ce(_.guides);for(let[,{outlineEl:e}]of g)e&&(e.style.transform=`translate(${v}px, ${y}px)`);let b=new Map;for(let[e,{curW:t,curH:n}]of g){let r=l.get(e);if(r){let i={x:Math.max(0,r.x+v),y:Math.max(0,r.y+y),width:t,height:n};b.set(e,i)}}A(b),j.current?.(v,y)},v=n=>{window.removeEventListener(`mousemove`,_),window.removeEventListener(`mouseup`,v),de.current=null,ce([]),A(new Map);for(let[,{outlineEl:e}]of g)e&&(e.style.transform=``);if(u){let r=n.clientX-s,i=n.clientY-c;if(Math.abs(r)<5&&Math.abs(i)<5)t({...e,sections:f.map(e=>{let t=l.get(e.id);return t?{...e,currentRect:{...e.currentRect,x:t.x,y:t.y}}:e})});else{t({...e,sections:f.map(e=>{let t=l.get(e.id);return t?{...e,currentRect:{...e.currentRect,x:Math.max(0,t.x+d),y:Math.max(0,t.y+p)}}:e})}),be.current?.(d,p,!0);return}}be.current?.(0,0,!1)};window.addEventListener(`mousemove`,_),window.addEventListener(`mouseup`,v)},[m,f,e,t]),we=(0,C.useCallback)((n,r,i)=>{n.preventDefault(),n.stopPropagation();let a=f.find(e=>e.id===r);if(!a)return;h(new Set([r])),de.current=`resize`;let o=n.clientX,s=n.clientY,c={...a.currentRect};a.originalRect;let l=c.width/c.height,u={...c},d=document.querySelector(`[data-rearrange-section="${r}"]`),p=e=>{let t=e.clientX-o,n=e.clientY-s,a=c.x,f=c.y,p=c.width,m=c.height;i.includes(`e`)&&(p=Math.max(Vn,c.width+t)),i.includes(`w`)&&(p=Math.max(Vn,c.width-t),a=c.x+c.width-p),i.includes(`s`)&&(m=Math.max(Vn,c.height+n)),i.includes(`n`)&&(m=Math.max(Vn,c.height-n),f=c.y+c.height-m),e.shiftKey&&(i.length===2?(Math.abs(p-c.width)>Math.abs(m-c.height)?m=p/l:p=m*l,i.includes(`w`)&&(a=c.x+c.width-p),i.includes(`n`)&&(f=c.y+c.height-m)):(i===`e`||i===`w`?m=p/l:p=m*l,i===`w`&&(a=c.x+c.width-p),i===`n`&&(f=c.y+c.height-m))),u={x:a,y:f,width:p,height:m},d&&(d.style.left=`${a}px`,d.style.top=`${f-le}px`,d.style.width=`${p}px`,d.style.height=`${m}px`),O({x:e.clientX+12,y:e.clientY+12,text:`${Math.round(p)} \xD7 ${Math.round(m)}`}),A(new Map([[r,u]]))},m=()=>{window.removeEventListener(`mousemove`,p),window.removeEventListener(`mouseup`,m),O(null),de.current=null,A(new Map),t({...e,sections:f.map(e=>e.id===r?{...e,currentRect:u}:e)})};window.addEventListener(`mousemove`,p),window.addEventListener(`mouseup`,m)},[f,e,t,le]),Te=(0,C.useCallback)(e=>{ie(t=>{let n=new Set(t);return n.add(e),n}),h(t=>{let n=new Set(t);return n.delete(e),n}),N(()=>{let n=p.current;t({...n,sections:n.sections.filter(t=>t.id!==e),originalOrder:n.originalOrder.filter(t=>t!==e)}),ie(t=>{let n=new Set(t);return n.delete(e),n})},180)},[t]),Ee=e=>{let t=e.originalRect,n=e.currentRect;return Math.abs(t.x-n.x)>1||Math.abs(t.y-n.y)>1||Math.abs(t.width-n.width)>1||Math.abs(t.height-n.height)>1},De=e=>{let t=e.originalRect,n=e.currentRect;return Math.abs(t.x-n.x)>1||Math.abs(t.y-n.y)>1},Oe=e=>{let t=e.originalRect,n=e.currentRect;return Math.abs(t.width-n.width)>1||Math.abs(t.height-n.height)>1};for(let e of f)pe.current.has(e.id)||(De(e)?pe.current.set(e.id,`move`):Oe(e)&&pe.current.set(e.id,`resize`));for(let e of pe.current.keys())f.some(t=>t.id===e)||pe.current.delete(e);let ke=f.filter(e=>{try{if(E.has(e.id)||m.has(e.id))return!0;let t=document.querySelector(e.selector);if(!t)return!1;let n=t.getBoundingClientRect(),r=e.originalRect;return Math.abs(n.width-r.width)+Math.abs(n.height-r.height)<200}catch{return!1}}),je=ke.filter(e=>Ee(e)),Me=ke.filter(e=>!Ee(e)),Ne=new Set(je.map(e=>e.id));for(let e of fe.current)Ne.has(e)||fe.current.delete(e);let Pe=[...Ne].sort().join(`,`);for(let e of je)ve.current.set(e.id,{currentRect:e.currentRect,originalRect:e.originalRect,isFixed:e.isFixed});return(0,C.useEffect)(()=>{let e=_e.current;_e.current=Ne;let t=new Map;for(let n of e)if(!Ne.has(n)){if(!f.some(e=>e.id===n))continue;let e=ve.current.get(n);e&&(t.set(n,{orig:e.originalRect,target:e.currentRect,isFixed:e.isFixed}),ve.current.delete(n))}if(t.size>0){ge(e=>{let n=new Map(e);for(let[e,r]of t)n.set(e,r);return n});let e=N(()=>{ge(e=>{let n=new Map(e);for(let e of t.keys())n.delete(e);return n})},250);return()=>clearTimeout(e)}},[Pe,f]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(`div`,{className:`${B.rearrangeOverlay} ${n?``:B.light} ${r?B.overlayExiting:``}${i?` ${i}`:``}`,"data-feedback-toolbar":!0,children:[D&&(0,w.jsx)(`div`,{className:B.hoverHighlight,style:{left:D.x,top:D.y,width:D.w,height:D.h}}),Me.map(e=>{let t=e.currentRect,n=e.isFixed?t.y:t.y-le,i=zn,a=m.has(e.id);return(0,w.jsxs)(`div`,{"data-rearrange-section":e.id,className:`${B.sectionOutline} ${a?B.selected:``} ${g||r||E.has(e.id)?B.exiting:``}`,style:{left:t.x,top:n,width:t.width,height:t.height,borderColor:i.border,backgroundColor:i.bg,...xe?{}:{opacity:0,animation:`none`,transition:`none`}},onMouseDown:t=>M(t,e.id),onDoubleClick:()=>ne(e.id),children:[(0,w.jsx)(`span`,{className:B.sectionLabel,style:{backgroundColor:i.pill},children:e.label}),(0,w.jsx)(`span`,{className:`${B.sectionAnnotation} ${e.note?B.annotationVisible:``}`,children:(e.note&&ae.current.set(e.id,e.note),e.note||ae.current.get(e.id)||``)}),(0,w.jsxs)(`span`,{className:B.sectionDimensions,children:[Math.round(t.width),` × `,Math.round(t.height)]}),(0,w.jsx)(`div`,{className:B.deleteButton,onMouseDown:e=>e.stopPropagation(),onClick:()=>Te(e.id),children:`✕`}),Bn.map(t=>(0,w.jsx)(`div`,{className:`${B.handle} ${B[`handle${t.charAt(0).toUpperCase()}${t.slice(1)}`]}`,onMouseDown:n=>we(n,e.id,t)},t))]},e.id)}),je.map(e=>{let t=e.currentRect,n=e.isFixed?t.y:t.y-le,i=m.has(e.id),o=De(e),s=Oe(e);if(a&&!i)return null;let c=!fe.current.has(e.id);return c&&fe.current.add(e.id),(0,w.jsxs)(`div`,{"data-rearrange-section":e.id,className:`${B.ghostOutline} ${i?B.selected:``} ${g||r||E.has(e.id)?B.exiting:``}`,style:{left:t.x,top:n,width:t.width,height:t.height,...xe?{}:{opacity:0,animation:`none`,transition:`none`},...c?{}:{animation:`none`}},onMouseDown:t=>M(t,e.id),onDoubleClick:()=>ne(e.id),children:[(0,w.jsx)(`span`,{className:B.sectionLabel,style:{backgroundColor:zn.pill},children:e.label}),(0,w.jsx)(`span`,{className:`${B.sectionAnnotation} ${e.note?B.annotationVisible:``}`,children:(e.note&&ae.current.set(e.id,e.note),e.note||ae.current.get(e.id)||``)}),(0,w.jsxs)(`span`,{className:B.sectionDimensions,children:[Math.round(t.width),` × `,Math.round(t.height)]}),(0,w.jsx)(`div`,{className:B.deleteButton,onMouseDown:e=>e.stopPropagation(),onClick:()=>Te(e.id),children:`✕`}),Bn.map(t=>(0,w.jsx)(`div`,{className:`${B.handle} ${B[`handle${t.charAt(0).toUpperCase()}${t.slice(1)}`]}`,onMouseDown:n=>we(n,e.id,t)},t)),(0,w.jsx)(`span`,{className:B.ghostBadge,children:(()=>{let t=pe.current.get(e.id);if(o&&s){let[e,n]=t===`resize`?[`Resize`,`Move`]:[`Move`,`Resize`];return(0,w.jsxs)(w.Fragment,{children:[`Suggested `,e,` `,(0,w.jsxs)(`span`,{className:B.ghostBadgeExtra,children:[`& `,n]})]})}return`Suggested ${s?`Resize`:`Move`}`})()})]},e.id)})]}),!a&&(()=>{let e=[];for(let t of je){let n=me.get(t.id);e.push({id:t.id,orig:t.originalRect,target:n||t.currentRect,isFixed:t.isFixed,isSelected:m.has(t.id),isExiting:E.has(t.id)})}for(let[t,n]of me)if(!e.some(e=>e.id===t)){let r=f.find(e=>e.id===t);r&&e.push({id:t,orig:r.originalRect,target:n,isFixed:r.isFixed,isSelected:m.has(t)})}for(let[t,n]of he)e.some(e=>e.id===t)||e.push({id:t,orig:n.orig,target:n.target,isFixed:n.isFixed,isSelected:!1,isExiting:!0});return e.length===0?null:(0,w.jsxs)(`svg`,{className:`${B.connectorSvg} ${g||r?B.connectorExiting:``}`,children:[e.map(({id:e,orig:t,target:n,isFixed:r,isSelected:i,isExiting:a})=>{let o=t.x+t.width/2,s=(r?t.y:t.y-le)+t.height/2,c=n.x+n.width/2,l=(r?n.y:n.y-le)+n.height/2,u=c-o,d=l-s,f=Math.sqrt(u*u+d*d);if(f<2)return null;let p=Math.min(1,f/40),m=Math.min(f*.3,60),h=f>0?-d/f:0,g=f>0?u/f:0,_=(o+c)/2+h*m,v=(s+l)/2+g*m,y=me.has(e),b=y||i?1:.4,x=y||i?1:.5;return(0,w.jsxs)(`g`,{className:a?B.connectorExiting:``,children:[(0,w.jsx)(`path`,{className:B.connectorLine,d:`M ${o} ${s} Q ${_} ${v} ${c} ${l}`,fill:`none`,stroke:`rgba(59, 130, 246, 0.45)`,strokeWidth:`1.5`,opacity:b*p}),(0,w.jsx)(`circle`,{className:B.connectorDot,cx:o,cy:s,r:4*p,fill:`rgba(59, 130, 246, 0.8)`,stroke:`#fff`,strokeWidth:`1.5`,opacity:x*p,filter:`url(#connDotShadow)`}),(0,w.jsx)(`circle`,{className:B.connectorDot,cx:c,cy:l,r:4*p,fill:`rgba(59, 130, 246, 0.8)`,stroke:`#fff`,strokeWidth:`1.5`,opacity:x*p,filter:`url(#connDotShadow)`})]},`conn-${e}`)}),(0,w.jsx)(`defs`,{children:(0,w.jsx)(`filter`,{id:`connDotShadow`,x:`-50%`,y:`-50%`,width:`200%`,height:`200%`,children:(0,w.jsx)(`feDropShadow`,{dx:`0`,dy:`0.5`,stdDeviation:`1`,floodOpacity:`0.15`})})})]})})(),b&&(()=>{let e=f.find(e=>e.id===b);if(!e)return null;let t=e.currentRect,r=e.isFixed?t.y:t.y-le,i=t.x+t.width/2,a=r-8,o=r+t.height+8,s=a>200,c=o<window.innerHeight-100,l=Math.max(160,Math.min(window.innerWidth-160,i)),u;return u=s?{left:l,bottom:window.innerHeight-a}:c?{left:l,top:o}:{left:l,top:Math.max(80,window.innerHeight/2-80)},(0,w.jsx)(Ae,{element:e.label,placeholder:`Add a note about this section`,initialValue:e.note??``,submitLabel:S.current?`Save`:`Set`,onSubmit:re,onCancel:T,onDelete:S.current?()=>{re(``)}:void 0,isExiting:ee,lightMode:!n,style:u})})(),se&&(0,w.jsx)(`div`,{className:B.sizeIndicator,style:{left:se.x,top:se.y},"data-feedback-toolbar":!0,children:se.text}),k.map((e,t)=>(0,w.jsx)(`div`,{className:B.guideLine,style:e.axis===`x`?{position:`fixed`,left:e.pos,top:0,width:1,height:`100vh`}:{position:`fixed`,left:0,top:e.pos-le,width:`100vw`,height:1}},`${e.axis}-${e.pos}-${t}`))]})}var Jn=new Set([`script`,`style`,`noscript`,`link`,`meta`,`br`,`hr`]);function Yn(){let e=document.querySelector(`main`)||document.body,t=[],n=Array.from(e.children),r=e!==document.body&&n.length<3?Array.from(document.body.children):n;for(let e of r){if(!(e instanceof HTMLElement)||Jn.has(e.tagName.toLowerCase())||e.hasAttribute(`data-feedback-toolbar`))continue;let n=window.getComputedStyle(e);if(n.display===`none`||n.visibility===`hidden`)continue;let r=e.getBoundingClientRect();if(!(r.height<10||r.width<10)){t.push({label:Pn(e),selector:Nn(e),top:r.top,bottom:r.bottom,left:r.left,right:r.right,area:r.width*r.height});for(let n of Array.from(e.children)){if(!(n instanceof HTMLElement)||Jn.has(n.tagName.toLowerCase())||n.hasAttribute(`data-feedback-toolbar`))continue;let e=window.getComputedStyle(n);if(e.display===`none`||e.visibility===`hidden`)continue;let r=n.getBoundingClientRect();r.height<10||r.width<10||t.push({label:Pn(n),selector:Nn(n),top:r.top,bottom:r.bottom,left:r.left,right:r.right,area:r.width*r.height})}}}return t}function Xn(e){let t=window.scrollY;return e.map(({label:e,selector:n,rect:r})=>{let i=r.y-t;return{label:e,selector:n,top:i,bottom:i+r.height,left:r.x,right:r.x+r.width,area:r.width*r.height}})}function Zn(e){let t=window.scrollY,n=e.y-t,r=e.x;return{top:n,bottom:n+e.height,left:r,right:r+e.width,area:e.width*e.height}}function Qn(e,t){let n=t?Xn(t):Yn(),r=Zn(e),i=null,a=null,o=null,s=null,c=null;for(let t of n){if(Math.abs(t.left-r.left)<2&&Math.abs(t.top-r.top)<2&&Math.abs(t.right-t.left-e.width)<2&&Math.abs(t.bottom-t.top-e.height)<2)continue;t.left<=r.left+2&&t.right>=r.right-2&&t.top<=r.top+2&&t.bottom>=r.bottom-2&&t.area>r.area*1.5&&(!c||t.area<c._area)&&(c={label:t.label,selector:t.selector,_area:t.area});let n=r.right>t.left+5&&r.left<t.right-5,l=r.bottom>t.top+5&&r.top<t.bottom-5;if(n&&t.bottom<=r.top+5){let e=Math.round(r.top-t.bottom);(!i||e<i._dist)&&(i={label:t.label,selector:t.selector,gap:Math.max(0,e),_dist:e})}if(n&&t.top>=r.bottom-5){let e=Math.round(t.top-r.bottom);(!a||e<a._dist)&&(a={label:t.label,selector:t.selector,gap:Math.max(0,e),_dist:e})}if(l&&t.right<=r.left+5){let e=Math.round(r.left-t.right);(!o||e<o._dist)&&(o={label:t.label,selector:t.selector,gap:Math.max(0,e),_dist:e})}if(l&&t.left>=r.right-5){let e=Math.round(t.left-r.right);(!s||e<s._dist)&&(s={label:t.label,selector:t.selector,gap:Math.max(0,e),_dist:e})}}let l=window.innerWidth,u=window.innerHeight,d=er(e,l),f=e=>e?{label:e.label,selector:e.selector,gap:e.gap}:null,p=$n(r,e,l,u,c?{label:c.label,selector:c.selector,_area:c._area}:null,n);return{above:f(i),below:f(a),left:f(o),right:f(s),alignment:d,containedIn:c?{label:c.label,selector:c.selector}:null,outOfBounds:p}}function $n(e,t,n,r,i,a){let o={},s=!1,c=[];if(e.left<-2&&c.push(`left`),e.right>n+2&&c.push(`right`),e.top<-2&&c.push(`top`),e.bottom>r+2&&c.push(`bottom`),c.length>0&&(o.viewport=c,s=!0),i){let t=a.find(e=>e.label===i.label&&e.selector===i.selector&&Math.abs(e.area-i._area)<10);if(t){let n=[];e.left<t.left-2&&n.push(`left`),e.right>t.right+2&&n.push(`right`),e.top<t.top-2&&n.push(`top`),e.bottom>t.bottom+2&&n.push(`bottom`),n.length>0&&(o.container={label:i.label,edges:n},s=!0)}}return s?o:null}function er(e,t){if(e.width/t>.85)return`full-width`;let n=e.x+e.width/2-t/2,r=t*.08;return Math.abs(n)<r?`center`:n<0?`left`:`right`}function tr(e){switch(e){case`full-width`:return`full-width`;case`center`:return`centered`;case`left`:return`left-aligned`;case`right`:return`right-aligned`}}function nr(e,t={}){let n=[];e.above&&n.push(`Below \`${e.above.label}\`${e.above.gap>0?` (${e.above.gap}px gap)`:``}`),e.below&&n.push(`Above \`${e.below.label}\`${e.below.gap>0?` (${e.below.gap}px gap)`:``}`),t.includeLeftRight&&(e.left&&n.push(`Right of \`${e.left.label}\`${e.left.gap>0?` (${e.left.gap}px gap)`:``}`),e.right&&n.push(`Left of \`${e.right.label}\`${e.right.gap>0?` (${e.right.gap}px gap)`:``}`));let r=tr(e.alignment);return e.containedIn?n.push(`${r.charAt(0).toUpperCase()+r.slice(1)} in \`${e.containedIn.label}\``):n.push(`${r.charAt(0).toUpperCase()+r.slice(1)} in page`),t.includePixelRef&&t.pixelRef&&n.push(`Pixel ref: \`${t.pixelRef}\``),e.outOfBounds&&(e.outOfBounds.viewport&&n.push(`**Outside viewport** (${e.outOfBounds.viewport.join(`, `)} edge${e.outOfBounds.viewport.length>1?`s`:``})`),e.outOfBounds.container&&n.push(`**Outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(`, `)} edge${e.outOfBounds.container.edges.length>1?`s`:``})`)),n}function rr(e,t,n){let r=[];e.above&&r.push(`below \`${e.above.label}\``),e.below&&r.push(`above \`${e.below.label}\``),e.left&&r.push(`right of \`${e.left.label}\``),e.right&&r.push(`left of \`${e.right.label}\``),e.containedIn&&r.push(`inside \`${e.containedIn.label}\``),r.push(tr(e.alignment)),e.outOfBounds?.viewport&&r.push(`**outside viewport** (${e.outOfBounds.viewport.join(`, `)})`),e.outOfBounds?.container&&r.push(`**outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(`, `)})`);let i=n?`, ${Math.round(n.width)}\xD7${Math.round(n.height)}px`:``;return`at (${Math.round(t.x)}, ${Math.round(t.y)})${i}: ${r.join(`, `)}`}var ir=15;function ar(e){if(e.length<2)return[];let t=[],n=new Set;for(let r=0;r<e.length;r++){if(n.has(r))continue;let i=[r];for(let t=r+1;t<e.length;t++)n.has(t)||Math.abs(e[r].rect.y-e[t].rect.y)<ir&&i.push(t);if(i.length>=2){let r=i.map(t=>e[t]);r.sort((e,t)=>e.rect.x-t.rect.x);let a=[];for(let e=0;e<r.length-1;e++)a.push(Math.round(r[e+1].rect.x-(r[e].rect.x+r[e].rect.width)));let o=Math.round(r.reduce((e,t)=>e+t.rect.y,0)/r.length);t.push({labels:r.map(e=>e.label),type:`row`,sharedEdge:o,gaps:a,avgGap:a.length?Math.round(a.reduce((e,t)=>e+t,0)/a.length):0}),i.forEach(e=>n.add(e))}}for(let r=0;r<e.length;r++){if(n.has(r))continue;let i=[r];for(let t=r+1;t<e.length;t++)n.has(t)||Math.abs(e[r].rect.x-e[t].rect.x)<ir&&i.push(t);if(i.length>=2){let r=i.map(t=>e[t]);r.sort((e,t)=>e.rect.y-t.rect.y);let a=[];for(let e=0;e<r.length-1;e++)a.push(Math.round(r[e+1].rect.y-(r[e].rect.y+r[e].rect.height)));let o=Math.round(r.reduce((e,t)=>e+t.rect.x,0)/r.length);t.push({labels:r.map(e=>e.label),type:`column`,sharedEdge:o,gaps:a,avgGap:a.length?Math.round(a.reduce((e,t)=>e+t,0)/a.length):0}),i.forEach(e=>n.add(e))}}return t}function or(e){if(e.length<2)return[];let t=ar(e.map(e=>({label:e.label,rect:e.originalRect}))),n=ar(e.map(e=>({label:e.label,rect:e.currentRect}))),r=[],i=new Set;for(let e of t){let t=new Set(e.labels),a=null,o=0;for(let e of n){let n=e.labels.filter(e=>t.has(e)).length;n>=2&&n>o&&(a=e,o=n)}if(a){let n=a.labels.filter(e=>t.has(e)),o=n.join(`, `);if(a.type!==e.type){let t=e.type===`row`?`y`:`x`,n=a.type===`row`?`y`:`x`;r.push(`**${o}**: ${e.type} (${t}\u2248${e.sharedEdge}, ${e.avgGap}px gaps) \u2192 ${a.type} (${n}\u2248${a.sharedEdge}, ${a.avgGap}px gaps)`)}else if(Math.abs(e.sharedEdge-a.sharedEdge)>20||Math.abs(e.avgGap-a.avgGap)>5){let t=e.type===`row`?`y`:`x`,n=Math.abs(e.sharedEdge-a.sharedEdge)>20?` ${t}: ${e.sharedEdge} \u2192 ${a.sharedEdge}`:``,i=Math.abs(e.avgGap-a.avgGap)>5?` gaps: ${e.avgGap}px \u2192 ${a.avgGap}px`:``;r.push(`**${o}**: ${e.type} shifted \u2014${n}${i}`)}n.forEach(e=>i.add(e))}else{let t=e.labels.join(`, `),n=e.type===`row`?`y`:`x`;r.push(`**${t}**: ${e.type} (${n}\u2248${e.sharedEdge}) dissolved`),e.labels.forEach(e=>i.add(e))}}for(let e of n)if(!e.labels.every(e=>i.has(e))&&!(e.labels.filter(e=>!i.has(e)).length<2)&&!t.some(t=>t.labels.filter(t=>e.labels.includes(t)).length>=2)){let t=e.type===`row`?`y`:`x`;r.push(`**${e.labels.join(`, `)}**: new ${e.type} (${t}\u2248${e.sharedEdge}, ${e.avgGap}px gaps)`),e.labels.forEach(e=>i.add(e))}let a=e.filter(e=>!i.has(e.label));if(a.length>=2){let e={};for(let t of a){let n=Math.round(t.currentRect.x/5)*5;(e[n]??(e[n]=[])).push(t.label)}for(let[t,n]of Object.entries(e))n.length>=2&&r.push(`**${n.join(`, `)}**: shared left edge at x\u2248${t}`)}return r}function sr(e){if(typeof document>`u`)return{viewport:e,contentArea:null};let t=[],n=new Set,r=e=>{n.has(e)||e instanceof HTMLElement&&(e.hasAttribute(`data-feedback-toolbar`)||Jn.has(e.tagName.toLowerCase())||(n.add(e),t.push(e)))},i=document.querySelector(`main`);i&&r(i);let a=document.querySelector(`[role='main']`);a&&r(a);for(let e of Array.from(document.body.children))if(r(e),e.children){for(let t of Array.from(e.children))if(r(t),t.children)for(let e of Array.from(t.children))r(e)}let o=null;for(let n of t){let t=n.getBoundingClientRect();if(t.height<50)continue;let r=getComputedStyle(n);if(r.maxWidth&&r.maxWidth!==`none`&&r.maxWidth!==`0px`){(!o||t.width<o.rect.width)&&(o={el:n,rect:t});continue}!o&&t.width<e.width-20&&t.width>100&&(o={el:n,rect:t})}if(o){let{el:t,rect:n}=o;return{viewport:e,contentArea:{width:Math.round(n.width),left:Math.round(n.left),right:Math.round(n.right),centerX:Math.round(n.left+n.width/2),selector:Nn(t)}}}return{viewport:e,contentArea:null}}function cr(e){if(typeof document>`u`)return null;let t=document.querySelector(e);if(!t?.parentElement)return null;let n=getComputedStyle(t.parentElement),r={parentDisplay:n.display,parentSelector:Nn(t.parentElement)};return n.display.includes(`flex`)&&(r.flexDirection=n.flexDirection),n.display.includes(`grid`)&&n.gridTemplateColumns!==`none`&&(r.gridCols=n.gridTemplateColumns),n.gap&&n.gap!==`normal`&&n.gap!==`0px`&&(r.gap=n.gap),r}function U(e,t){let n=t.contentArea,r=n?n.width:t.viewport.width,i=n?n.left:0,a=n?n.centerX:Math.round(t.viewport.width/2),o=Math.round(e.x-i),s=Math.round(i+r-(e.x+e.width)),c=(e.width/r*100).toFixed(1),l=e.x+e.width/2,u=Math.abs(l-a)<20,d=e.width/r>.95,f=[];return d?f.push("`width: 100%` of container"):f.push(`left \`${o}px\` in container, right \`${s}px\`, width \`${c}%\` (\`${Math.round(e.width)}px\`)`),u&&!d&&f.push("centered — `margin-inline: auto`"),f.join(` — `)}function lr(e){let{viewport:t,contentArea:n}=e,r=`### Reference Frame
`;if(r+=`- Viewport: \`${t.width}\xD7${t.height}px\`
`,n){let e=n;r+=`- Content area: \`${e.width}px\` wide, left edge at \`x=${e.left}\`, right at \`x=${e.right}\` (\`${e.selector}\`)
`,r+=`- Pixel → CSS translation:
`,r+=`  - **Horizontal position in container**: \`element.x - ${e.left}\` \u2192 use as \`margin-left\` or \`left\`
`,r+=`  - **Width as % of container**: \`element.width / ${e.width} \xD7 100\` \u2192 use as \`width: X%\`
`,r+="  - **Vertical gap between elements**: `nextElement.y - (prevElement.y + prevElement.height)` → use as `margin-top` or `gap`\n",r+=`  - **Centered**: if \`|element.centerX - ${e.centerX}| < 20px\` \u2192 use \`margin-inline: auto\`
`}else r+=`- No distinct content container — elements positioned relative to full viewport
`,r+=`- Pixel → CSS translation:
`,r+=`  - **Width as % of viewport**: \`element.width / ${t.width} \xD7 100\` \u2192 use as \`width: X%\`
`,r+=`  - **Centered**: if \`|(element.x + element.width/2) - ${Math.round(t.width/2)}| < 20px\` \u2192 use \`margin-inline: auto\`
`;return r+=`
`,r}function ur(e){let t=cr(e);if(!t)return null;let n=`\`${t.parentDisplay}\``;return t.flexDirection&&(n+=`, flex-direction: \`${t.flexDirection}\``),t.gridCols&&(n+=`, grid-template-columns: \`${t.gridCols}\``),t.gap&&(n+=`, gap: \`${t.gap}\``),`Parent: ${n} (\`${t.parentSelector}\`)`}function dr(e,t,n,r=`standard`){if(e.length===0)return``;let i=[...e].sort((e,t)=>Math.abs(e.y-t.y)<20?e.x-t.x:e.y-t.y),a=``;if(n?.blankCanvas?(a+=`## Wireframe: New Page

`,n.wireframePurpose&&(a+=`> **Purpose:** ${n.wireframePurpose}
>
`),a+=`> ${e.length} component${e.length===1?``:`s`} placed \u2014 this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):a+=`## Design Layout

> ${e.length} component${e.length===1?``:`s`} placed

`,r===`compact`)return a+=`### Components
`,i.forEach((e,t)=>{let n=Le[e.type]?.label||e.type;a+=`${t+1}. **${n}** \u2014 \`${Math.round(e.width)}\xD7${Math.round(e.height)}px\` at \`(${Math.round(e.x)}, ${Math.round(e.y)})\`
`}),a;let o=sr(t);a+=lr(o),a+=`### Components
`,i.forEach((e,t)=>{let n=Le[e.type]?.label||e.type,i={x:e.x,y:e.y,width:e.width,height:e.height};a+=`${t+1}. **${n}** \u2014 \`${Math.round(e.width)}\xD7${Math.round(e.height)}px\` at \`(${Math.round(e.x)}, ${Math.round(e.y)})\`
`;let s=nr(Qn(i),{includeLeftRight:r===`detailed`||r===`forensic`});for(let e of s)a+=`   - ${e}
`;let c=U(i,o);c&&(a+=`   - CSS: ${c}
`)}),a+=`
### Layout Analysis
`;let s=[];for(let e of i){let t=s.find(t=>Math.abs(t.y-e.y)<30);t?t.items.push(e):s.push({y:e.y,items:[e]})}if(s.sort((e,t)=>e.y-t.y),s.forEach((e,n)=>{e.items.sort((e,t)=>e.x-t.x);let r=e.items.map(e=>Le[e.type]?.label||e.type);if(e.items.length===1){let i=e.items[0].width>t.width*.8;a+=`- Row ${n+1} (y\u2248${Math.round(e.y)}): ${r[0]}${i?` — full width`:``}
`}else a+=`- Row ${n+1} (y\u2248${Math.round(e.y)}): ${r.join(` | `)} \u2014 ${e.items.length} items side by side
`}),r===`detailed`||r===`forensic`){a+=`
### Spacing & Gaps
`;for(let e=0;e<i.length-1;e++){let t=i[e],n=i[e+1],r=Le[t.type]?.label||t.type,o=Le[n.type]?.label||n.type,s=Math.round(n.y-(t.y+t.height)),c=Math.round(n.x-(t.x+t.width));Math.abs(t.y-n.y)<30?a+=`- ${r} \u2192 ${o}: \`${c}px\` horizontal gap
`:a+=`- ${r} \u2192 ${o}: \`${s}px\` vertical gap
`}if(r===`forensic`&&i.length>2){a+=`
### All Pairwise Gaps
`;for(let e=0;e<i.length;e++)for(let t=e+1;t<i.length;t++){let n=i[e],r=i[t],o=Le[n.type]?.label||n.type,s=Le[r.type]?.label||r.type,c=Math.round(r.y-(n.y+n.height)),l=Math.round(r.x-(n.x+n.width));a+=`- ${o} \u2194 ${s}: h=\`${l}px\` v=\`${c}px\`
`}}r===`forensic`&&(a+=`
### Z-Order (placement order)
`,e.forEach((e,t)=>{let n=Le[e.type]?.label||e.type;a+=`${t}. ${n} at \`(${Math.round(e.x)}, ${Math.round(e.y)})\`
`}))}a+=`
### Suggested Implementation
`;let c=i.some(e=>e.type===`navigation`),l=i.some(e=>e.type===`hero`),u=i.some(e=>e.type===`sidebar`),d=i.some(e=>e.type===`footer`),f=i.filter(e=>e.type===`card`),p=i.filter(e=>e.type===`form`),m=i.filter(e=>e.type===`table`),h=i.filter(e=>e.type===`modal`);if(c&&(a+=`- Top navigation bar with logo + nav links + CTA
`),l&&(a+=`- Hero section with heading, subtext, and call-to-action
`),u&&(a+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),f.length>1?a+=`- ${f.length}-column card grid \u2014 use CSS Grid or Flexbox
`:f.length===1&&(a+=`- Card component with image + content area
`),p.length>0&&(a+=`- ${p.length} form${p.length>1?`s`:``} \u2014 add proper labels, validation, and submit handling
`),m.length>0&&(a+=`- Data table — consider sortable columns and pagination
`),h.length>0&&(a+=`- Modal dialog — add overlay backdrop and focus trapping
`),d&&(a+=`- Multi-column footer with links
`),r===`detailed`||r===`forensic`){if(a+=`
### CSS Suggestions
`,u){let e=i.find(e=>e.type===`sidebar`);a+=`- \`display: grid; grid-template-columns: ${Math.round(e.width)}px 1fr;\`
`}if(f.length>1){let e=Math.round(f[0].width);a+=`- \`display: grid; grid-template-columns: repeat(${f.length}, ${e}px); gap: 16px;\`
`}c&&(a+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return a}function fr(e,t=`standard`,n){let{sections:r}=e,i=[];for(let e of r){let n=e.originalRect,r=e.currentRect,a=Math.abs(n.x-r.x)>1||Math.abs(n.y-r.y)>1,o=Math.abs(n.width-r.width)>1||Math.abs(n.height-r.height)>1;if(!a&&!o){t===`forensic`&&i.push({section:e,posMoved:!1,sizeChanged:!1});continue}i.push({section:e,posMoved:a,sizeChanged:o})}if(i.length===0||t!==`forensic`&&i.every(e=>!e.posMoved&&!e.sizeChanged))return``;let a=`## Suggested Layout Changes

`,o=sr({width:n?n.width:typeof window<`u`?window.innerWidth:0,height:n?n.height:typeof window<`u`?window.innerHeight:0});t!==`compact`&&(a+=lr(o)),t===`forensic`&&(a+=`> Detected at: \`${new Date(e.detectedAt).toISOString()}\`
`,a+=`> Total sections: ${r.length}

`);let s=e=>r.map(t=>({label:t.label,selector:t.selector,rect:e===`original`?t.originalRect:t.currentRect}));a+=`**Changes:**
`;for(let{section:e,posMoved:n,sizeChanged:r}of i){let i=e.originalRect,c=e.currentRect;if(!n&&!r){a+=`- ${e.label} \u2014 unchanged at (${Math.round(c.x)}, ${Math.round(c.y)}) ${Math.round(c.width)}\xD7${Math.round(c.height)}px
`;continue}if(t===`compact`){n&&r?a+=`- Suggested: move **${e.label}** to (${Math.round(c.x)}, ${Math.round(c.y)}) ${Math.round(c.width)}\xD7${Math.round(c.height)}px
`:n?a+=`- Suggested: move **${e.label}** to (${Math.round(c.x)}, ${Math.round(c.y)})
`:a+=`- Suggested: resize **${e.label}** to ${Math.round(c.width)}\xD7${Math.round(c.height)}px
`;continue}if(n&&r?a+=`- Suggested: move and resize **${e.label}**
`:n?a+=`- Suggested: move **${e.label}**
`:a+=`- Suggested: resize **${e.label}** from ${Math.round(i.width)}\xD7${Math.round(i.height)}px to ${Math.round(c.width)}\xD7${Math.round(c.height)}px
`,n){let e=Qn(i,s(`original`)),n=Qn(c,s(`current`)),l=r?{width:i.width,height:i.height}:void 0;a+=`  - Currently ${rr(e,{x:i.x,y:i.y},l)}
`;let u=r?{width:c.width,height:c.height}:void 0,d=`at (${Math.round(c.x)}, ${Math.round(c.y)})`,f=u?`, ${Math.round(u.width)}\xD7${Math.round(u.height)}px`:``,p=nr(n,{includeLeftRight:t===`detailed`||t===`forensic`});if(p.length>0){a+=`  - Suggested position ${d}${f}: ${p[0]}
`;for(let e=1;e<p.length;e++)a+=`    ${p[e]}
`}else a+=`  - Suggested position ${d}${f}
`;let m=U(c,o);m&&(a+=`  - CSS: ${m}
`)}let l=ur(e.selector);if(l&&(a+=`  - ${l}
`),a+=`  - Selector: \`${e.selector}\`
`,t===`detailed`||t===`forensic`){let n=e.className?`${e.tagName}.${e.className.split(` `)[0]}`:e.tagName;n!==e.selector&&(a+=`  - Element: \`${n}\`
`),e.role&&(a+=`  - Role: \`${e.role}\`
`),t===`forensic`&&e.textSnippet&&(a+=`  - Text: "${e.textSnippet}"
`)}t===`forensic`&&(a+=`  - Original rect: \`{ x: ${Math.round(i.x)}, y: ${Math.round(i.y)}, w: ${Math.round(i.width)}, h: ${Math.round(i.height)} }\`
`,a+=`  - Current rect: \`{ x: ${Math.round(c.x)}, y: ${Math.round(c.y)}, w: ${Math.round(c.width)}, h: ${Math.round(c.height)} }\`
`)}if(t!==`compact`){let e=or(i.filter(e=>e.posMoved).map(e=>({label:e.section.label,originalRect:e.section.originalRect,currentRect:e.section.currentRect})));if(e.length>0){a+=`
### Layout Summary
`;for(let t of e)a+=`- ${t}
`}}if(t!==`compact`&&r.length>1){a+=`
### All Sections (current positions)
`;let e=[...r].sort((e,t)=>Math.abs(e.currentRect.y-t.currentRect.y)<20?e.currentRect.x-t.currentRect.x:e.currentRect.y-t.currentRect.y);for(let t of e){let e=t.currentRect,n=Math.abs(e.x-t.originalRect.x)>1||Math.abs(e.y-t.originalRect.y)>1||Math.abs(e.width-t.originalRect.width)>1||Math.abs(e.height-t.originalRect.height)>1;a+=`- ${t.label}: \`${Math.round(e.width)}\xD7${Math.round(e.height)}px\` at \`(${Math.round(e.x)}, ${Math.round(e.y)})\`${n?` ← suggested`:``}
`}}return a}var pr=`feedback-annotations-`,mr=7;function hr(e){return`${pr}${e}`}function gr(e){if(typeof window>`u`)return[];try{let t=localStorage.getItem(hr(e));if(!t)return[];let n=JSON.parse(t),r=Date.now()-mr*24*60*60*1e3;return n.filter(e=>!e.timestamp||e.timestamp>r)}catch{return[]}}function _r(e,t){if(!(typeof window>`u`))try{localStorage.setItem(hr(e),JSON.stringify(t))}catch{}}function vr(){let e=new Map;if(typeof window>`u`)return e;try{let t=Date.now()-mr*24*60*60*1e3;for(let n=0;n<localStorage.length;n++){let r=localStorage.key(n);if(r?.startsWith(pr)){let n=r.slice(pr.length),i=localStorage.getItem(r);if(i){let r=JSON.parse(i).filter(e=>!e.timestamp||e.timestamp>t);r.length>0&&e.set(n,r)}}}}catch{}return e}function yr(e,t,n){_r(e,t.map(e=>({...e,_syncedTo:n})))}var br=`agentation-design-`;function xr(e){if(typeof window>`u`)return[];try{let t=localStorage.getItem(`${br}${e}`);return t?JSON.parse(t):[]}catch{return[]}}function Sr(e,t){if(!(typeof window>`u`))try{localStorage.setItem(`${br}${e}`,JSON.stringify(t))}catch{}}function Cr(e){if(!(typeof window>`u`))try{localStorage.removeItem(`${br}${e}`)}catch{}}var wr=`agentation-rearrange-`;function Tr(e){if(typeof window>`u`)return null;try{let t=localStorage.getItem(`${wr}${e}`);return t?JSON.parse(t):null}catch{return null}}function Er(e,t){if(!(typeof window>`u`))try{localStorage.setItem(`${wr}${e}`,JSON.stringify(t))}catch{}}function Dr(e){if(!(typeof window>`u`))try{localStorage.removeItem(`${wr}${e}`)}catch{}}var Or=`agentation-wireframe-`;function kr(e){if(typeof window>`u`)return null;try{let t=localStorage.getItem(`${Or}${e}`);return t?JSON.parse(t):null}catch{return null}}function Ar(e,t){if(!(typeof window>`u`))try{localStorage.setItem(`${Or}${e}`,JSON.stringify(t))}catch{}}function jr(e){if(!(typeof window>`u`))try{localStorage.removeItem(`${Or}${e}`)}catch{}}var Mr=`agentation-session-`;function Nr(e){return`${Mr}${e}`}function Pr(e){if(typeof window>`u`)return null;try{return localStorage.getItem(Nr(e))}catch{return null}}function Fr(e,t){if(!(typeof window>`u`))try{localStorage.setItem(Nr(e),t)}catch{}}function Ir(e){if(!(typeof window>`u`))try{localStorage.removeItem(Nr(e))}catch{}}var Lr=`${Mr}toolbar-hidden`;function Rr(){if(typeof window>`u`)return!1;try{return sessionStorage.getItem(Lr)===`1`}catch{return!1}}function zr(e){if(!(typeof window>`u`))try{e?sessionStorage.setItem(Lr,`1`):sessionStorage.removeItem(Lr)}catch{}}async function Br(e,t){let n=await fetch(`${e}/sessions`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({url:t})});if(!n.ok)throw Error(`Failed to create session: ${n.status}`);return n.json()}async function Vr(e,t){let n=await fetch(`${e}/sessions/${t}`);if(!n.ok)throw Error(`Failed to get session: ${n.status}`);return n.json()}async function Hr(e,t,n){let r=await fetch(`${e}/sessions/${t}/annotations`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(n)});if(!r.ok)throw Error(`Failed to sync annotation: ${r.status}`);return r.json()}async function Ur(e,t,n){let r=await fetch(`${e}/annotations/${t}`,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify(n)});if(!r.ok)throw Error(`Failed to update annotation: ${r.status}`);return r.json()}async function Wr(e,t){let n=await fetch(`${e}/annotations/${t}`,{method:`DELETE`});if(!n.ok)throw Error(`Failed to delete annotation: ${n.status}`)}var W={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},Gr=new Set([`Component`,`PureComponent`,`Fragment`,`Suspense`,`Profiler`,`StrictMode`,`Routes`,`Route`,`Outlet`,`Root`,`ErrorBoundaryHandler`,`HotReload`,`Hot`]),Kr=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],qr=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function Jr(e){let t=e?.mode??`filtered`,n=Gr;if(e?.skipExact){let t=e.skipExact instanceof Set?e.skipExact:new Set(e.skipExact);n=new Set([...Gr,...t])}return{maxComponents:e?.maxComponents??6,maxDepth:e?.maxDepth??30,mode:t,skipExact:n,skipPatterns:e?.skipPatterns?[...Kr,...e.skipPatterns]:Kr,userPatterns:e?.userPatterns??qr,filter:e?.filter}}function Yr(e){return e.replace(/([a-z])([A-Z])/g,`$1-$2`).replace(/([A-Z])([A-Z][a-z])/g,`$1-$2`).toLowerCase()}function Xr(e,t=10){let n=new Set,r=e,i=0;for(;r&&i<t;)r.className&&typeof r.className==`string`&&r.className.split(/\s+/).forEach(e=>{if(e.length>1){let t=e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``).toLowerCase();t.length>1&&n.add(t)}}),r=r.parentElement,i++;return n}function Zr(e,t){let n=Yr(e);for(let e of t){if(e===n)return!0;let t=n.split(`-`).filter(e=>e.length>2),r=e.split(`-`).filter(e=>e.length>2);for(let e of t)for(let t of r)if(e===t||e.includes(t)||t.includes(e))return!0}return!1}function Qr(e,t,n,r){if(n.filter)return n.filter(e,t);switch(n.mode){case`all`:return!0;case`filtered`:return!(n.skipExact.has(e)||n.skipPatterns.some(t=>t.test(e)));case`smart`:return n.skipExact.has(e)||n.skipPatterns.some(t=>t.test(e))?!1:!!(r&&Zr(e,r)||n.userPatterns.some(t=>t.test(e)));default:return!0}}var $r=null,ei=new WeakMap;function ti(e){return Object.keys(e).some(e=>e.startsWith(`__reactFiber$`)||e.startsWith(`__reactInternalInstance$`)||e.startsWith(`__reactProps$`))}function ni(){if($r!==null)return $r;if(typeof document>`u`)return!1;if(document.body&&ti(document.body))return $r=!0,!0;for(let e of[`#root`,`#app`,`#__next`,`[data-reactroot]`]){let t=document.querySelector(e);if(t&&ti(t))return $r=!0,!0}if(document.body){for(let e of document.body.children)if(ti(e))return $r=!0,!0}return $r=!1,!1}var ri={map:ei};function ii(e){return Object.keys(e).find(e=>e.startsWith(`__reactFiber$`)||e.startsWith(`__reactInternalInstance$`))||null}function ai(e){let t=ii(e);return t?e[t]:null}function oi(e){return e?e.displayName?e.displayName:e.name?e.name:null:null}function si(e){let{tag:t,type:n,elementType:r}=e;if(t===W.HostComponent||t===W.HostText||t===W.HostHoistable||t===W.HostSingleton||t===W.Fragment||t===W.Mode||t===W.Profiler||t===W.DehydratedFragment||t===W.HostRoot||t===W.HostPortal||t===W.ScopeComponent||t===W.OffscreenComponent||t===W.LegacyHiddenComponent||t===W.CacheComponent||t===W.TracingMarkerComponent||t===W.Throw||t===W.ViewTransitionComponent||t===W.ActivityComponent)return null;if(t===W.ForwardRef){let e=r;if(e?.render){let t=oi(e.render);if(t)return t}return e?.displayName?e.displayName:oi(n)}if(t===W.MemoComponent||t===W.SimpleMemoComponent){let e=r;if(e?.type){let t=oi(e.type);if(t)return t}return e?.displayName?e.displayName:oi(n)}if(t===W.ContextProvider){let e=n;return e?._context?.displayName?`${e._context.displayName}.Provider`:null}if(t===W.ContextConsumer){let e=n;return e?.displayName?`${e.displayName}.Consumer`:null}if(t===W.LazyComponent){let e=r;return e?._status===1&&e._result?oi(e._result):null}return t===W.SuspenseComponent||t===W.SuspenseListComponent?null:t===W.IncompleteClassComponent||t===W.IncompleteFunctionComponent||t===W.FunctionComponent||t===W.ClassComponent||t===W.IndeterminateComponent?oi(n):null}function ci(e){return e.length<=2||e.length<=3&&e===e.toLowerCase()}function li(e,t){let n=Jr(t),r=n.mode===`all`;if(r){let t=ri.map.get(e);if(t!==void 0)return t}if(!ni()){let t={path:null,components:[]};return r&&ri.map.set(e,t),t}let i=n.mode===`smart`?Xr(e):void 0,a=[];try{let t=ai(e),r=0;for(;t&&r<n.maxDepth&&a.length<n.maxComponents;){let e=si(t);e&&!ci(e)&&Qr(e,r,n,i)&&a.push(e),t=t.return,r++}}catch{let t={path:null,components:[]};return r&&ri.map.set(e,t),t}if(a.length===0){let t={path:null,components:[]};return r&&ri.map.set(e,t),t}let o={path:a.slice().reverse().map(e=>`<${e}>`).join(` `),components:a};return r&&ri.map.set(e,o),o}var ui={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16};function di(e){if(!e||typeof e!=`object`)return null;let t=Object.keys(e),n=t.find(e=>e.startsWith(`__reactFiber$`));if(n)return e[n]||null;let r=t.find(e=>e.startsWith(`__reactInternalInstance$`));if(r)return e[r]||null;let i=t.find(t=>{if(!t.startsWith(`__react`))return!1;let n=e[t];return n&&typeof n==`object`&&`_debugSource`in n});return i&&e[i]||null}function fi(e){if(!e.type||typeof e.type==`string`)return null;if(typeof e.type==`object`||typeof e.type==`function`){let t=e.type;if(t.displayName)return t.displayName;if(t.name)return t.name}return null}function pi(e,t=50){let n=e,r=0;for(;n&&r<t;){if(n._debugSource)return{source:n._debugSource,componentName:fi(n)};if(n._debugOwner?._debugSource)return{source:n._debugOwner._debugSource,componentName:fi(n._debugOwner)};n=n.return,r++}return null}function mi(e){let t=e,n=0;for(;t&&n<50;){let e=t;for(let n of[`_debugSource`,`__source`,`_source`,`debugSource`]){let r=e[n];if(r&&typeof r==`object`&&`fileName`in r)return{source:r,componentName:fi(t)}}if(t.memoizedProps){let e=t.memoizedProps;if(e.__source&&typeof e.__source==`object`){let n=e.__source;if(n.fileName&&n.lineNumber)return{source:{fileName:n.fileName,lineNumber:n.lineNumber,columnNumber:n.columnNumber},componentName:fi(t)}}}t=t.return,n++}return null}var hi=new Map;function gi(e){let t=e.tag,n=e.type,r=e.elementType;if(typeof n==`string`||n==null||typeof n==`function`&&n.prototype?.isReactComponent)return null;if((t===ui.FunctionComponent||t===ui.IndeterminateComponent)&&typeof n==`function`)return n;if(t===ui.ForwardRef&&r){let e=r.render;if(typeof e==`function`)return e}if((t===ui.MemoComponent||t===ui.SimpleMemoComponent)&&r){let e=r.type;if(typeof e==`function`)return e}return typeof n==`function`?n:null}function _i(){let e=C.default,t=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(t&&`H`in t)return{get:()=>t.H,set:e=>{t.H=e}};let n=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(n){let e=n.ReactCurrentDispatcher;if(e&&`current`in e)return{get:()=>e.current,set:t=>{e.current=t}}}return null}function vi(e){let t=e.split(`
`),n=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],r=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,i=/^[^@]*@(.+?):(\d+):(\d+)$/;for(let e of t){let t=e.trim();if(!t||n.some(e=>e.test(t)))continue;let a=r.exec(t)||i.exec(t);if(a)return{fileName:a[1],line:parseInt(a[2],10),column:parseInt(a[3],10)}}return null}function yi(e){let t=e;return t=t.replace(/[?#].*$/,``),t=t.replace(/^turbopack:\/\/\/\[project\]\//,``),t=t.replace(/^webpack-internal:\/\/\/\.\//,``),t=t.replace(/^webpack-internal:\/\/\//,``),t=t.replace(/^webpack:\/\/\/\.\//,``),t=t.replace(/^webpack:\/\/\//,``),t=t.replace(/^turbopack:\/\/\//,``),t=t.replace(/^https?:\/\/[^/]+\//,``),t=t.replace(/^file:\/\/\//,`/`),t=t.replace(/^\([^)]+\)\/\.\//,``),t=t.replace(/^\.\//,``),t}function bi(e){let t=gi(e);if(!t)return null;if(hi.has(t))return hi.get(t);let n=_i();if(!n)return hi.set(t,null),null;let r=n.get(),i=null;try{let r=new Proxy({},{get(){throw Error(`probe`)}});n.set(r);try{t({})}catch(t){if(t instanceof Error&&t.message===`probe`&&t.stack){let n=vi(t.stack);n&&(i={fileName:yi(n.fileName),lineNumber:n.line,columnNumber:n.column,componentName:fi(e)||void 0})}}}finally{n.set(r)}return hi.set(t,i),i}function xi(e,t=15){let n=e,r=0;for(;n&&r<t;){let e=bi(n);if(e)return e;n=n.return,r++}return null}function Si(e){let t=di(e);if(!t)return{found:!1,reason:`no-fiber`,isReactApp:!1,isProduction:!1};let n=pi(t);if(n||=mi(t),n?.source)return{found:!0,source:{fileName:n.source.fileName,lineNumber:n.source.lineNumber,columnNumber:n.source.columnNumber,componentName:n.componentName||void 0},isReactApp:!0,isProduction:!1};let r=xi(t);return r?{found:!0,source:r,isReactApp:!0,isProduction:!1}:{found:!1,reason:`no-debug-source`,isReactApp:!0,isProduction:!1}}function Ci(e,t=`path`){let{fileName:n,lineNumber:r,columnNumber:i}=e,a=`${n}:${r}`;return i!==void 0&&(a+=`:${i}`),t===`vscode`?`vscode://file${n.startsWith(`/`)?``:`/`}${a}`:a}function wi(e,t=10){let n=e,r=0;for(;n&&r<t;){let e=Si(n);if(e.found)return e;n=n.parentElement,r++}return Si(e)}var Ti=`.styles-module__toolbar___wNsdK svg[fill=none],
.styles-module__markersLayer___-25j1 svg[fill=none],
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] {
  fill: none !important;
}
.styles-module__toolbar___wNsdK svg[fill=none] :not([fill]),
.styles-module__markersLayer___-25j1 svg[fill=none] :not([fill]),
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__controlsContent___9GJWU :where(button, input, select, textarea, label) {
  background: unset;
  border: unset;
  border-radius: unset;
  padding: unset;
  margin: unset;
  color: unset;
  font-family: unset;
  font-weight: unset;
  font-style: unset;
  line-height: unset;
  letter-spacing: unset;
  text-transform: unset;
  text-decoration: unset;
  box-shadow: unset;
  outline: unset;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__toolbarHide___y8kaT {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.styles-module__disableTransitions___EopxO :is(*, *::before, *::after) {
  transition: none !important;
}

.styles-module__toolbar___wNsdK {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 337px;
  z-index: 100000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0s, top 0s, right 0s, bottom 0s;
}

:where(.styles-module__toolbar___wNsdK) {
  bottom: 1.25rem;
  right: 1.25rem;
}

.styles-module__toolbarContainer___dIhma {
  position: relative;
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__hiding___1td44 {
  animation: styles-module__toolbarHide___y8kaT 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;
  pointer-events: none;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn svg {
  margin-top: -1px;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 1.5rem;
  padding: 0.375rem;
  width: 297px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 337px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toggleContent___0yfyP.styles-module__visible___KHwEW {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.styles-module__toggleContent___0yfyP.styles-module__hidden___Ae8H4 {
  opacity: 0;
  pointer-events: none;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: filter 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(10px);
  transform: scale(0.4);
}

.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background-color: color-mix(in srgb, var(--agentation-color-blue) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
[data-agentation-theme=light] .styles-module__buttonBadge___NeFWb {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-yellow) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-yellow) 0%, transparent);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background-color 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background-color: var(--agentation-color-green);
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background-color: var(--agentation-color-red);
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__tooltipsInSession___-0lHH .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transition-delay: 0s;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -0.375rem;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1), margin 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 0.125rem;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-accent) 50%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-accent) 4%, transparent);
  pointer-events: none !important;
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-green) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-blue) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-blue) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(255, 255, 255, 0.07);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___InP0r {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___NKlmo {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: var(--agentation-color-blue);
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
[data-agentation-theme=light] .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
  color: var(--agentation-color-blue);
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-color: var(--swatch);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___IodiY {
    background-color: var(--swatch-p3);
  }
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
  border-color: var(--swatch);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
    border-color: var(--swatch-p3);
  }
}

.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

.styles-module__customCheckbox___U39ax {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color 0.25s ease, border-color 0.25s ease;
}
.styles-module__customCheckbox___U39ax svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
input[type=checkbox]:checked + .styles-module__customCheckbox___U39ax {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo svg {
  color: #fff;
}

.styles-module__toggleLabel___Xm8Aa {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
[data-agentation-theme=light] .styles-module__toggleLabel___Xm8Aa {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__toggleSwitch___l4Ygm {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.styles-module__toggleSwitch___l4Ygm input {
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn {
  background-color: var(--agentation-color-blue);
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn::before {
  transform: translateX(8px);
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw {
  opacity: 0.4;
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw .styles-module__toggleSlider___wprIn {
  cursor: not-allowed;
}

.styles-module__toggleSlider___wprIn {
  position: absolute;
  cursor: pointer;
  inset: 0;
  border-radius: 16px;
  background: #484848;
}
[data-agentation-theme=light] .styles-module__toggleSlider___wprIn {
  background: #dddddd;
}
.styles-module__toggleSlider___wprIn::before {
  content: "";
  position: absolute;
  height: 12px;
  width: 12px;
  left: 2px;
  bottom: 2px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__drawCanvas___7cG9U {
  position: fixed;
  inset: 0;
  z-index: 99996;
  pointer-events: none !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6 {
  pointer-events: auto !important;
  cursor: crosshair !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6[data-stroke-hover] {
  cursor: pointer !important;
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-green) 8%, transparent);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--agentation-color-green);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  border-radius: 4px;
  background: color-mix(in srgb, var(--agentation-color-green) 6%, transparent);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
[data-agentation-theme=light] .styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}`,Ei={toolbar:`styles-module__toolbar___wNsdK`,markersLayer:`styles-module__markersLayer___-25j1`,fixedMarkersLayer:`styles-module__fixedMarkersLayer___ffyX6`,controlsContent:`styles-module__controlsContent___9GJWU`,disableTransitions:`styles-module__disableTransitions___EopxO`,toolbarContainer:`styles-module__toolbarContainer___dIhma`,entrance:`styles-module__entrance___sgHd8`,toolbarEnter:`styles-module__toolbarEnter___u8RRu`,hiding:`styles-module__hiding___1td44`,toolbarHide:`styles-module__toolbarHide___y8kaT`,collapsed:`styles-module__collapsed___Rydsn`,expanded:`styles-module__expanded___ofKPx`,serverConnected:`styles-module__serverConnected___Gfbou`,toggleContent:`styles-module__toggleContent___0yfyP`,visible:`styles-module__visible___KHwEW`,hidden:`styles-module__hidden___Ae8H4`,badge:`styles-module__badge___2XsgF`,fadeOut:`styles-module__fadeOut___6Ut6-`,badgeEnter:`styles-module__badgeEnter___mVQLj`,controlButton:`styles-module__controlButton___8Q0jc`,statusShowing:`styles-module__statusShowing___te6iu`,buttonBadge:`styles-module__buttonBadge___NeFWb`,mcpIndicator:`styles-module__mcpIndicator___zGJeL`,connected:`styles-module__connected___7c28g`,mcpIndicatorPulseConnected:`styles-module__mcpIndicatorPulseConnected___EDodZ`,connecting:`styles-module__connecting___uo-CW`,mcpIndicatorPulseConnecting:`styles-module__mcpIndicatorPulseConnecting___cCYte`,connectionIndicatorWrapper:`styles-module__connectionIndicatorWrapper___L-e-3`,connectionIndicator:`styles-module__connectionIndicator___afk9p`,connectionIndicatorVisible:`styles-module__connectionIndicatorVisible___C-i5B`,connectionIndicatorConnected:`styles-module__connectionIndicatorConnected___IY8pR`,connectionPulse:`styles-module__connectionPulse___-Zycw`,connectionIndicatorDisconnected:`styles-module__connectionIndicatorDisconnected___kmpaZ`,connectionIndicatorConnecting:`styles-module__connectionIndicatorConnecting___QmSLH`,buttonWrapper:`styles-module__buttonWrapper___rBcdv`,buttonTooltip:`styles-module__buttonTooltip___Burd9`,tooltipsInSession:`styles-module__tooltipsInSession___-0lHH`,sendButtonWrapper:`styles-module__sendButtonWrapper___UUxG6`,sendButtonVisible:`styles-module__sendButtonVisible___WPSQU`,shortcut:`styles-module__shortcut___lEAQk`,tooltipBelow:`styles-module__tooltipBelow___m6ats`,tooltipsHidden:`styles-module__tooltipsHidden___VtLJG`,tooltipVisible:`styles-module__tooltipVisible___0jcCv`,buttonWrapperAlignLeft:`styles-module__buttonWrapperAlignLeft___myzIp`,buttonWrapperAlignRight:`styles-module__buttonWrapperAlignRight___HCQFR`,divider:`styles-module__divider___c--s1`,overlay:`styles-module__overlay___Q1O9y`,hoverHighlight:`styles-module__hoverHighlight___ogakW`,enter:`styles-module__enter___WFIki`,hoverHighlightIn:`styles-module__hoverHighlightIn___6WYHY`,multiSelectOutline:`styles-module__multiSelectOutline___cSJ-m`,fadeIn:`styles-module__fadeIn___b9qmf`,exit:`styles-module__exit___fyOJ0`,singleSelectOutline:`styles-module__singleSelectOutline___QhX-O`,hoverTooltip:`styles-module__hoverTooltip___bvLk7`,hoverTooltipIn:`styles-module__hoverTooltipIn___FYGQx`,hoverReactPath:`styles-module__hoverReactPath___gx1IJ`,hoverElementName:`styles-module__hoverElementName___QMLMl`,marker:`styles-module__marker___6sQrs`,clearing:`styles-module__clearing___FQ--7`,markerIn:`styles-module__markerIn___5FaAP`,markerOut:`styles-module__markerOut___GU5jX`,pending:`styles-module__pending___2IHLC`,fixed:`styles-module__fixed___dBMHC`,multiSelect:`styles-module__multiSelect___YWiuz`,hovered:`styles-module__hovered___ZgXIy`,renumber:`styles-module__renumber___nCTxD`,renumberRoll:`styles-module__renumberRoll___Wgbq3`,markerTooltip:`styles-module__markerTooltip___aLJID`,tooltipIn:`styles-module__tooltipIn___0N31w`,markerQuote:`styles-module__markerQuote___FHmrz`,markerNote:`styles-module__markerNote___QkrrS`,markerHint:`styles-module__markerHint___2iF-6`,settingsPanel:`styles-module__settingsPanel___OxX3Y`,settingsHeader:`styles-module__settingsHeader___pwDY9`,settingsBrand:`styles-module__settingsBrand___0gJeM`,settingsBrandSlash:`styles-module__settingsBrandSlash___uTG18`,settingsVersion:`styles-module__settingsVersion___TUcFq`,settingsSection:`styles-module__settingsSection___m-YM2`,settingsLabel:`styles-module__settingsLabel___8UjfX`,cycleButton:`styles-module__cycleButton___FMKfw`,cycleDot:`styles-module__cycleDot___nPgLY`,dropdownButton:`styles-module__dropdownButton___16NPz`,toggleLabel:`styles-module__toggleLabel___Xm8Aa`,customCheckbox:`styles-module__customCheckbox___U39ax`,sliderLabel:`styles-module__sliderLabel___U8sPr`,slider:`styles-module__slider___GLdxp`,themeToggle:`styles-module__themeToggle___2rUjA`,settingsOption:`styles-module__settingsOption___UNa12`,selected:`styles-module__selected___OwRqP`,settingsPanelContainer:`styles-module__settingsPanelContainer___Xksv8`,settingsPage:`styles-module__settingsPage___6YfHH`,slideLeft:`styles-module__slideLeft___Ps01J`,automationsPage:`styles-module__automationsPage___uvCq6`,slideIn:`styles-module__slideIn___4-qXe`,settingsNavLink:`styles-module__settingsNavLink___wCzJt`,settingsNavLinkRight:`styles-module__settingsNavLinkRight___ZWwhj`,mcpNavIndicator:`styles-module__mcpNavIndicator___cl9pO`,mcpPulse:`styles-module__mcpPulse___uNggr`,settingsBackButton:`styles-module__settingsBackButton___bIe2j`,automationHeader:`styles-module__automationHeader___InP0r`,automationDescription:`styles-module__automationDescription___NKlmo`,learnMoreLink:`styles-module__learnMoreLink___8xv-x`,autoSendRow:`styles-module__autoSendRow___UblX5`,autoSendLabel:`styles-module__autoSendLabel___icDc2`,active:`styles-module__active___-zoN6`,webhookUrlInput:`styles-module__webhookUrlInput___2375C`,settingsSectionExtraPadding:`styles-module__settingsSectionExtraPadding___jdhFV`,settingsSectionGrow:`styles-module__settingsSectionGrow___h-5HZ`,settingsRow:`styles-module__settingsRow___3sdhc`,settingsRowMarginTop:`styles-module__settingsRowMarginTop___zA0Sp`,dropdownContainer:`styles-module__dropdownContainer___BVnxe`,settingsRowDisabled:`styles-module__settingsRowDisabled___EgS0V`,toggleSwitch:`styles-module__toggleSwitch___l4Ygm`,cycleButtonText:`styles-module__cycleButtonText___fD1LR`,cycleTextIn:`styles-module__cycleTextIn___Q6zJf`,cycleDots:`styles-module__cycleDots___LWuoQ`,dropdownMenu:`styles-module__dropdownMenu___k73ER`,scaleIn:`styles-module__scaleIn___c-r1K`,dropdownItem:`styles-module__dropdownItem___ylsLj`,settingsLabelMarker:`styles-module__settingsLabelMarker___ewdtV`,settingsOptions:`styles-module__settingsOptions___LyrBA`,sliderContainer:`styles-module__sliderContainer___ducXj`,sliderLabels:`styles-module__sliderLabels___FhLDB`,colorOptions:`styles-module__colorOptions___iHCNX`,colorOption:`styles-module__colorOption___IodiY`,colorOptionRing:`styles-module__colorOptionRing___U2xpo`,settingsToggle:`styles-module__settingsToggle___fBrFn`,settingsToggleMarginBottom:`styles-module__settingsToggleMarginBottom___MZUyF`,checked:`styles-module__checked___mnZLo`,toggleSlider:`styles-module__toggleSlider___wprIn`,disabled:`styles-module__disabled___332Jw`,mcpStatusDot:`styles-module__mcpStatusDot___ibgkc`,disconnected:`styles-module__disconnected___cHPxR`,mcpPulseError:`styles-module__mcpPulseError___fov9B`,drawCanvas:`styles-module__drawCanvas___7cG9U`,dragSelection:`styles-module__dragSelection___kZLq2`,dragCount:`styles-module__dragCount___KM90j`,highlightsContainer:`styles-module__highlightsContainer___-0xzG`,selectedElementHighlight:`styles-module__selectedElementHighlight___fyVlI`,scaleOut:`styles-module__scaleOut___Wctwz`,slideUp:`styles-module__slideUp___kgD36`,slideDown:`styles-module__slideDown___zcdje`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-page-toolbar-css-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-page-toolbar-css-styles`,document.head.appendChild(e)),e.textContent=Ti}var G=Ei,Di=[{value:`compact`,label:`Compact`},{value:`standard`,label:`Standard`},{value:`detailed`,label:`Detailed`},{value:`forensic`,label:`Forensic`}];function Oi(e,t,n=`standard`){if(e.length===0)return``;let r=typeof window<`u`?`${window.innerWidth}\xD7${window.innerHeight}`:`unknown`,i=`## Page Feedback: ${t}
`;return n===`forensic`?(i+=`
**Environment:**
`,i+=`- Viewport: ${r}
`,typeof window<`u`&&(i+=`- URL: ${window.location.href}
`,i+=`- User Agent: ${navigator.userAgent}
`,i+=`- Timestamp: ${new Date().toISOString()}
`,i+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`),i+=`
---
`):n!==`compact`&&(i+=`**Viewport:** ${r}
`),i+=`
`,e.forEach((e,t)=>{n===`compact`?(i+=`${t+1}. **${e.element}**${e.sourceFile?` (${e.sourceFile})`:``}: ${e.comment}`,e.selectedText&&(i+=` (re: "${e.selectedText.slice(0,30)}${e.selectedText.length>30?`...`:``}")`),i+=`
`):n===`forensic`?(i+=`### ${t+1}. ${e.element}
`,e.isMultiSelect&&e.fullPath&&(i+=`*Forensic data shown for first element of selection*
`),e.fullPath&&(i+=`**Full DOM Path:** ${e.fullPath}
`),e.cssClasses&&(i+=`**CSS Classes:** ${e.cssClasses}
`),e.boundingBox&&(i+=`**Position:** x:${Math.round(e.boundingBox.x)}, y:${Math.round(e.boundingBox.y)} (${Math.round(e.boundingBox.width)}\xD7${Math.round(e.boundingBox.height)}px)
`),i+=`**Annotation at:** ${e.x.toFixed(1)}% from left, ${Math.round(e.y)}px from top
`,e.selectedText&&(i+=`**Selected text:** "${e.selectedText}"
`),e.nearbyText&&!e.selectedText&&(i+=`**Context:** ${e.nearbyText.slice(0,100)}
`),e.computedStyles&&(i+=`**Computed Styles:** ${e.computedStyles}
`),e.accessibility&&(i+=`**Accessibility:** ${e.accessibility}
`),e.nearbyElements&&(i+=`**Nearby Elements:** ${e.nearbyElements}
`),e.sourceFile&&(i+=`**Source:** ${e.sourceFile}
`),e.reactComponents&&(i+=`**React:** ${e.reactComponents}
`),i+=`**Feedback:** ${e.comment}

`):(i+=`### ${t+1}. ${e.element}
`,i+=`**Location:** ${e.elementPath}
`,e.sourceFile&&(i+=`**Source:** ${e.sourceFile}
`),e.reactComponents&&(i+=`**React:** ${e.reactComponents}
`),n===`detailed`&&(e.cssClasses&&(i+=`**Classes:** ${e.cssClasses}
`),e.boundingBox&&(i+=`**Position:** ${Math.round(e.boundingBox.x)}px, ${Math.round(e.boundingBox.y)}px (${Math.round(e.boundingBox.width)}\xD7${Math.round(e.boundingBox.height)}px)
`)),e.selectedText&&(i+=`**Selected text:** "${e.selectedText}"
`),n===`detailed`&&e.nearbyText&&!e.selectedText&&(i+=`**Context:** ${e.nearbyText.slice(0,100)}
`),i+=`**Feedback:** ${e.comment}

`)}),i.trim()}var ki=`@keyframes styles-module__markerIn___x4G8D {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___6VhQN {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__tooltipIn___aJslQ {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(2px) scale(0.891);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(0.909);
  }
}
@keyframes styles-module__renumberRoll___akV9B {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__marker___9CKF7 {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___9CKF7:hover {
  z-index: 2;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___9CKF7.styles-module__enter___8kI3q {
  animation: styles-module__markerIn___x4G8D 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___9CKF7.styles-module__exit___KBdR3 {
  animation: styles-module__markerOut___6VhQN 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7.styles-module__clearing___8rM7K {
  animation: styles-module__markerOut___6VhQN 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___9CKF7.styles-module__fixed___aKrQO {
  position: fixed;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___9CKF7.styles-module__hovered___-mg2N {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___16lvD {
  display: block;
  animation: styles-module__renumberRoll___akV9B 0.2s ease-out;
}

.styles-module__markerTooltip___-VUm- {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___-VUm-.styles-module__enter___8kI3q {
  animation: styles-module__tooltipIn___aJslQ 0.1s ease-out forwards;
}

.styles-module__markerQuote___tQake {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___Rh4eI {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- {
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerQuote___tQake {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerNote___Rh4eI {
  color: rgba(0, 0, 0, 0.85);
}`,Ai={marker:`styles-module__marker___9CKF7`,enter:`styles-module__enter___8kI3q`,exit:`styles-module__exit___KBdR3`,clearing:`styles-module__clearing___8rM7K`,markerIn:`styles-module__markerIn___x4G8D`,markerOut:`styles-module__markerOut___6VhQN`,pending:`styles-module__pending___BiY-U`,fixed:`styles-module__fixed___aKrQO`,multiSelect:`styles-module__multiSelect___CPfTC`,hovered:`styles-module__hovered___-mg2N`,renumber:`styles-module__renumber___16lvD`,renumberRoll:`styles-module__renumberRoll___akV9B`,markerTooltip:`styles-module__markerTooltip___-VUm-`,tooltipIn:`styles-module__tooltipIn___aJslQ`,markerQuote:`styles-module__markerQuote___tQake`,markerNote:`styles-module__markerNote___Rh4eI`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-annotation-marker-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-annotation-marker-styles`,document.head.appendChild(e)),e.textContent=ki}var ji=Ai;function Mi({annotation:e,globalIndex:t,layerIndex:n,layerSize:r,isExiting:i,isClearing:a,isAnimated:o,isHovered:s,isDeleting:c,isEditingAny:l,renumberFrom:u,markerClickBehavior:d,tooltipStyle:f,onHoverEnter:p,onHoverLeave:m,onClick:h,onContextMenu:g}){let _=(s||c)&&!l,v=_&&d===`delete`,y=e.isMultiSelect,b=y?`var(--agentation-color-green)`:`var(--agentation-color-accent)`,x=i?ji.exit:a?ji.clearing:o?``:ji.enter,ee=i?`${(r-1-n)*20}ms`:`${n*20}ms`;return(0,w.jsxs)(`div`,{className:`${ji.marker} ${y?ji.multiSelect:``} ${x} ${v?ji.hovered:``}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y,backgroundColor:v?void 0:b,animationDelay:ee},onMouseEnter:()=>p(e),onMouseLeave:m,onClick:t=>{t.stopPropagation(),i||h(e)},onContextMenu:g?t=>{d===`delete`&&(t.preventDefault(),t.stopPropagation(),i||g(e))}:void 0,children:[_?v?(0,w.jsx)(pe,{size:y?18:16}):(0,w.jsx)(ge,{size:16}):(0,w.jsx)(`span`,{className:u!==null&&t>=u?ji.renumber:void 0,children:t+1}),s&&!l&&(0,w.jsxs)(`div`,{className:`${ji.markerTooltip} ${ji.enter}`,style:f,children:[(0,w.jsxs)(`span`,{className:ji.markerQuote,children:[e.element,e.selectedText&&` "${e.selectedText.slice(0,30)}${e.selectedText.length>30?`...`:``}"`]}),(0,w.jsx)(`span`,{className:ji.markerNote,children:e.comment})]})]})}function Ni({x:e,y:t,isMultiSelect:n,isExiting:r}){return(0,w.jsx)(`div`,{className:`${ji.marker} ${ji.pending} ${n?ji.multiSelect:``} ${r?ji.exit:ji.enter}`,style:{left:`${e}%`,top:t,backgroundColor:n?`var(--agentation-color-green)`:`var(--agentation-color-accent)`},children:(0,w.jsx)(oe,{size:12})})}function Pi({annotation:e,fixed:t}){let n=e.isMultiSelect;return(0,w.jsx)(`div`,{className:`${ji.marker} ${t?ji.fixed:``} ${ji.hovered} ${n?ji.multiSelect:``} ${ji.exit}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y},children:(0,w.jsx)(pe,{size:n?12:10})})}var Fi=`.styles-module__switchContainer___Ka-AB {
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px;
  width: 24px;
  height: 16px;
  border-radius: 8px;
  background-color: #cdcdcd;
  transition: background-color 0.15s, opacity 0.15s;
}
[data-agentation-theme=dark] .styles-module__switchContainer___Ka-AB {
  background-color: #484848;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) {
  background-color: var(--agentation-color-blue);
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:disabled) {
  opacity: 0.3;
}

.styles-module__switchInput___kYDSD {
  position: absolute;
  z-index: 1;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}
.styles-module__switchInput___kYDSD:disabled {
  cursor: not-allowed;
}

.styles-module__switchThumb___4sCPH {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: #fff;
  transition: transform 0.15s;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) .styles-module__switchThumb___4sCPH {
  transform: translateX(8px);
}`,Ii={switchContainer:`styles-module__switchContainer___Ka-AB`,switchInput:`styles-module__switchInput___kYDSD`,switchThumb:`styles-module__switchThumb___4sCPH`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-switch-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-switch-styles`,document.head.appendChild(e)),e.textContent=Fi}var Li=Ii,Ri=({className:e=``,...t})=>(0,w.jsxs)(`div`,{className:`${Li.switchContainer} ${e}`,children:[(0,w.jsx)(`input`,{className:Li.switchInput,type:`checkbox`,...t}),(0,w.jsx)(`div`,{className:Li.switchThumb})]}),zi=`.styles-module__checkboxContainer___joqZk {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 4px;
  width: 14px;
  height: 14px;
  background-color: #fff;
  transition: background-color 0.2s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk {
  border-color: rgba(255, 255, 255, 0.2);
  background-color: #252525;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #1a1a1a;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #fff;
}

.styles-module__checkboxInput___ECzzO {
  position: absolute;
  z-index: 1;
  inset: -1px;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}

.styles-module__checkboxCheck___fUXpr {
  color: #fafafa;
}
[data-agentation-theme=dark] .styles-module__checkboxCheck___fUXpr {
  color: #1a1a1a;
}

.styles-module__checkboxCheckPath___cDyh8 {
  stroke-dasharray: 9.29px;
  stroke-dashoffset: 9.29px;
  color: #fafafa;
  transition: stroke-dashoffset 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxCheckPath___cDyh8 {
  color: #1a1a1a;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) .styles-module__checkboxCheckPath___cDyh8 {
  transition-duration: 0.2s;
  stroke-dashoffset: 0;
}`,Bi={checkboxContainer:`styles-module__checkboxContainer___joqZk`,checkboxInput:`styles-module__checkboxInput___ECzzO`,checkboxCheck:`styles-module__checkboxCheck___fUXpr`,checkboxCheckPath:`styles-module__checkboxCheckPath___cDyh8`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-checkbox-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-checkbox-styles`,document.head.appendChild(e)),e.textContent=zi}var Vi=Bi,Hi=({className:e=``,...t})=>(0,w.jsxs)(`div`,{className:`${Vi.checkboxContainer} ${e}`,children:[(0,w.jsx)(`input`,{className:Vi.checkboxInput,type:`checkbox`,...t}),(0,w.jsx)(`svg`,{className:Vi.checkboxCheck,width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,children:(0,w.jsx)(`path`,{className:Vi.checkboxCheckPath,d:`M3.94 7L6.13 9.19L10.5 4.81`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})]}),Ui=`.styles-module__container___w8eAF {
  display: flex;
  align-items: center;
  height: 24px;
}

.styles-module__label___J5mxE {
  padding-inline: 8px 2px;
  line-height: 20px;
  font-size: 13px;
  letter-spacing: -0.15px;
  color: rgba(26, 26, 26, 0.5);
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__label___J5mxE {
  color: rgba(255, 255, 255, 0.5);
}`,Wi={container:`styles-module__container___w8eAF`,label:`styles-module__label___J5mxE`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-checkbox-field-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-checkbox-field-styles`,document.head.appendChild(e)),e.textContent=Ui}var Gi=Wi,Ki=({className:e=``,label:t,tooltip:n,checked:r,onChange:i,...a})=>{let o=(0,C.useId)();return(0,w.jsxs)(`div`,{className:`${Gi.container} ${e}`,...a,children:[(0,w.jsx)(Hi,{id:o,onChange:i,checked:r}),(0,w.jsx)(`label`,{className:Gi.label,htmlFor:o,children:t}),n&&(0,w.jsx)(Fe,{content:n})]})},qi=`@keyframes styles-module__cycleTextIn___VBNTi {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes styles-module__scaleIn___QpQ8E {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__mcpPulse___5Q3Jj {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___VHxhx {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
@keyframes styles-module__themeIconIn___qUWMV {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
.styles-module__settingsPanel___qNkn- {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 16px;
  padding: 12px 0;
  width: 100%;
  max-width: 253px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___qNkn-::before, .styles-module__settingsPanel___qNkn-::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___qNkn-::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn-::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrandSlash___Q-AU9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4,
.styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ,
.styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3,
.styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY,
.styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8,
.styles-module__settingsPanel___qNkn- .styles-module__sliderLabel___6K5v1,
.styles-module__settingsPanel___qNkn- .styles-module__slider___v5z-c,
.styles-module__settingsPanel___qNkn- .styles-module__themeToggle___3imlT {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__enter___wginS {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__exit___A4iJc {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH- {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-.styles-module__selected___k1-Vq {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__settingsPanelContainer___5it-H {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 16px;
}

.styles-module__settingsPage___BMn-3 {
  min-width: 100%;
  flex-basis: 0;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___BMn-3.styles-module__slideLeft___qUvW4 {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 0 16px 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0.styles-module__slideIn___uXDSu {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsHeader___Fn1DP {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
}

.styles-module__settingsBrand___OoKlM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___Q-AU9 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___rXmL9 {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__themeToggle___3imlT {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 8px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease;
  cursor: pointer;
}
.styles-module__themeToggle___3imlT:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___pyaYa {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___w7lAm {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___qUWMV 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.styles-module__settingsSectionGrow___eZTRw {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___y-tDE {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___y-tDE.styles-module__settingsRowMarginTop___uLpGb {
  margin-top: 8px;
}

.styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.2);
}

.styles-module__settingsLabel___VCVOQ {
  display: flex;
  align-items: center;
  column-gap: 2px;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.15px;
  color: rgba(255, 255, 255, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__cycleButton___XMBx3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___XMBx3:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__cycleButtonText___mbbnD {
  display: inline-block;
  animation: styles-module__cycleTextIn___VBNTi 0.2s ease-out;
}

.styles-module__cycleDots___ehp6i {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___zgSXY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__colorOptions___pbxZx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  height: 26px;
}

.styles-module__colorOption___Co955 {
  padding: 0;
  position: relative;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #fff;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__colorOption___Co955 {
  background-color: #1a1a1a;
}
.styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: var(--swatch);
  transition: opacity 0.2s, transform 0.2s;
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
    --color: var(--swatch-p3);
  }
}
.styles-module__colorOption___Co955::after {
  z-index: -1;
  transform: scale(1.2);
  opacity: 0;
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::before {
  transform: scale(0.8);
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::after {
  opacity: 1;
}

.styles-module__settingsNavLink___uYIwM {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.15s ease;
  cursor: pointer;
}
.styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(255, 255, 255, 0.9);
}
.styles-module__settingsNavLink___uYIwM svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___uYIwM:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(0, 0, 0, 0.8);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___XBUzC {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__settingsBackButton___fflll {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___fflll {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___Avra9 {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___Avra9 {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___vFTmJ {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___vFTmJ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___cG7OI {
  color: rgba(255, 255, 255, 0.8);
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___cG7OI:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendContainer___VpkXk {
  display: flex;
  align-items: center;
}

.styles-module__autoSendLabel___ngNdC {
  padding-inline-end: 8px;
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s, opacity 0.15s;
  cursor: pointer;
}
.styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: var(--agentation-color-blue);
}
.styles-module__autoSendLabel___ngNdC.styles-module__disabled___9AZYS {
  opacity: 0.3;
  cursor: not-allowed;
}

.styles-module__mcpStatusDot___8AMxP {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__disconnected___mvmvQ {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___VHxhx 2s infinite;
}

.styles-module__mcpNavIndicator___auBHI {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s ease-in-out infinite;
}

.styles-module__webhookUrlInput___WDDDC {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM {
  color: #E5484D;
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8:hover {
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__checkboxField___ZrSqv:not(:first-child) {
  margin-top: 8px;
}

.styles-module__divider___h6Yux {
  margin-block: 8px;
  width: 100%;
  height: 1px;
  background-color: rgba(26, 26, 26, 0.07);
}
[data-agentation-theme=dark] .styles-module__divider___h6Yux {
  background-color: rgba(255, 255, 255, 0.07);
}`,Ji={settingsPanel:`styles-module__settingsPanel___qNkn-`,settingsHeader:`styles-module__settingsHeader___Fn1DP`,settingsBrand:`styles-module__settingsBrand___OoKlM`,settingsBrandSlash:`styles-module__settingsBrandSlash___Q-AU9`,settingsVersion:`styles-module__settingsVersion___rXmL9`,settingsSection:`styles-module__settingsSection___n5V-4`,settingsLabel:`styles-module__settingsLabel___VCVOQ`,cycleButton:`styles-module__cycleButton___XMBx3`,cycleDot:`styles-module__cycleDot___zgSXY`,dropdownButton:`styles-module__dropdownButton___mKHe8`,sliderLabel:`styles-module__sliderLabel___6K5v1`,slider:`styles-module__slider___v5z-c`,themeToggle:`styles-module__themeToggle___3imlT`,enter:`styles-module__enter___wginS`,exit:`styles-module__exit___A4iJc`,settingsOption:`styles-module__settingsOption___JoyH-`,selected:`styles-module__selected___k1-Vq`,settingsPanelContainer:`styles-module__settingsPanelContainer___5it-H`,settingsPage:`styles-module__settingsPage___BMn-3`,slideLeft:`styles-module__slideLeft___qUvW4`,automationsPage:`styles-module__automationsPage___N7By0`,slideIn:`styles-module__slideIn___uXDSu`,themeIconWrapper:`styles-module__themeIconWrapper___pyaYa`,themeIcon:`styles-module__themeIcon___w7lAm`,themeIconIn:`styles-module__themeIconIn___qUWMV`,settingsSectionGrow:`styles-module__settingsSectionGrow___eZTRw`,settingsRow:`styles-module__settingsRow___y-tDE`,settingsRowMarginTop:`styles-module__settingsRowMarginTop___uLpGb`,settingsRowDisabled:`styles-module__settingsRowDisabled___ydl3Q`,cycleButtonText:`styles-module__cycleButtonText___mbbnD`,cycleTextIn:`styles-module__cycleTextIn___VBNTi`,cycleDots:`styles-module__cycleDots___ehp6i`,active:`styles-module__active___dpAhM`,colorOptions:`styles-module__colorOptions___pbxZx`,colorOption:`styles-module__colorOption___Co955`,settingsNavLink:`styles-module__settingsNavLink___uYIwM`,settingsNavLinkRight:`styles-module__settingsNavLinkRight___XBUzC`,settingsBackButton:`styles-module__settingsBackButton___fflll`,automationHeader:`styles-module__automationHeader___Avra9`,automationDescription:`styles-module__automationDescription___vFTmJ`,learnMoreLink:`styles-module__learnMoreLink___cG7OI`,autoSendContainer:`styles-module__autoSendContainer___VpkXk`,autoSendLabel:`styles-module__autoSendLabel___ngNdC`,disabled:`styles-module__disabled___9AZYS`,mcpStatusDot:`styles-module__mcpStatusDot___8AMxP`,connecting:`styles-module__connecting___QEO1r`,mcpPulse:`styles-module__mcpPulse___5Q3Jj`,connected:`styles-module__connected___WyFkx`,disconnected:`styles-module__disconnected___mvmvQ`,mcpPulseError:`styles-module__mcpPulseError___VHxhx`,mcpNavIndicator:`styles-module__mcpNavIndicator___auBHI`,webhookUrlInput:`styles-module__webhookUrlInput___WDDDC`,checkboxField:`styles-module__checkboxField___ZrSqv`,divider:`styles-module__divider___h6Yux`,scaleIn:`styles-module__scaleIn___QpQ8E`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-settings-panel-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-settings-panel-styles`,document.head.appendChild(e)),e.textContent=qi}var K=Ji;function Yi({settings:e,onSettingsChange:t,isDarkMode:n,onToggleTheme:r,isDevMode:i,connectionStatus:a,endpoint:o,isVisible:s,toolbarNearBottom:c,settingsPage:l,onSettingsPageChange:u,onHideToolbar:d}){return(0,w.jsx)(`div`,{className:`${K.settingsPanel} ${s?K.enter:K.exit}`,style:c?{bottom:`auto`,top:`calc(100% + 0.5rem)`}:void 0,"data-agentation-settings-panel":!0,children:(0,w.jsxs)(`div`,{className:K.settingsPanelContainer,children:[(0,w.jsxs)(`div`,{className:`${K.settingsPage} ${l===`automations`?K.slideLeft:``}`,children:[(0,w.jsxs)(`div`,{className:K.settingsHeader,children:[(0,w.jsx)(`a`,{className:K.settingsBrand,href:`https://agentation.com`,target:`_blank`,rel:`noopener noreferrer`,children:(0,w.jsx)(`svg`,{width:`72`,height:`16`,viewBox:`0 0 676 151`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,w.jsx)(`path`,{d:`M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z`,fill:`currentColor`})})}),(0,w.jsxs)(`p`,{className:K.settingsVersion,children:[`v`,`3.0.2`]}),(0,w.jsx)(`button`,{className:K.themeToggle,onClick:r,title:n?`Switch to light mode`:`Switch to dark mode`,children:(0,w.jsx)(`span`,{className:K.themeIconWrapper,children:(0,w.jsx)(`span`,{className:K.themeIcon,children:n?(0,w.jsx)(A,{size:20}):(0,w.jsx)(he,{size:20})},n?`sun`:`moon`)})})]}),(0,w.jsx)(`div`,{className:K.divider}),(0,w.jsxs)(`div`,{className:K.settingsSection,children:[(0,w.jsxs)(`div`,{className:K.settingsRow,children:[(0,w.jsxs)(`div`,{className:K.settingsLabel,children:[`Output Detail`,(0,w.jsx)(Fe,{content:`Controls how much detail is included in the copied output`})]}),(0,w.jsxs)(`button`,{className:K.cycleButton,onClick:()=>{t({outputDetail:Di[(Di.findIndex(t=>t.value===e.outputDetail)+1)%Di.length].value})},children:[(0,w.jsx)(`span`,{className:K.cycleButtonText,children:Di.find(t=>t.value===e.outputDetail)?.label},e.outputDetail),(0,w.jsx)(`span`,{className:K.cycleDots,children:Di.map(t=>(0,w.jsx)(`span`,{className:`${K.cycleDot} ${e.outputDetail===t.value?K.active:``}`},t.value))})]})]}),(0,w.jsxs)(`div`,{className:`${K.settingsRow} ${K.settingsRowMarginTop} ${i?``:K.settingsRowDisabled}`,children:[(0,w.jsxs)(`div`,{className:K.settingsLabel,children:[`React Components`,(0,w.jsx)(Fe,{content:i?`Include React component names in annotations`:`Disabled — production builds minify component names, making detection unreliable. Use in development mode.`})]}),(0,w.jsx)(Ri,{checked:i&&e.reactEnabled,onChange:e=>t({reactEnabled:e.target.checked}),disabled:!i})]}),(0,w.jsxs)(`div`,{className:`${K.settingsRow} ${K.settingsRowMarginTop}`,children:[(0,w.jsxs)(`div`,{className:K.settingsLabel,children:[`Hide Until Restart`,(0,w.jsx)(Fe,{content:`Hides the toolbar until you open a new tab`})]}),(0,w.jsx)(Ri,{checked:!1,onChange:e=>{e.target.checked&&d()}})]})]}),(0,w.jsx)(`div`,{className:K.divider}),(0,w.jsxs)(`div`,{className:K.settingsSection,children:[(0,w.jsx)(`div`,{className:`${K.settingsLabel} ${K.settingsLabelMarker}`,children:`Marker Color`}),(0,w.jsx)(`div`,{className:K.colorOptions,children:ta.map(n=>(0,w.jsx)(`button`,{className:`${K.colorOption} ${e.annotationColorId===n.id?K.selected:``}`,style:{"--swatch":n.srgb,"--swatch-p3":n.p3},onClick:()=>t({annotationColorId:n.id}),title:n.label,type:`button`},n.id))})]}),(0,w.jsx)(`div`,{className:K.divider}),(0,w.jsxs)(`div`,{className:K.settingsSection,children:[(0,w.jsx)(Ki,{className:`checkbox-field`,label:`Clear on copy/send`,checked:e.autoClearAfterCopy,onChange:e=>t({autoClearAfterCopy:e.target.checked}),tooltip:`Automatically clear annotations after copying`}),(0,w.jsx)(Ki,{className:K.checkboxField,label:`Block page interactions`,checked:e.blockInteractions,onChange:e=>t({blockInteractions:e.target.checked})})]}),(0,w.jsx)(`div`,{className:K.divider}),(0,w.jsxs)(`button`,{className:K.settingsNavLink,onClick:()=>u(`automations`),children:[(0,w.jsx)(`span`,{children:`Manage MCP & Webhooks`}),(0,w.jsxs)(`span`,{className:K.settingsNavLinkRight,children:[o&&a!==`disconnected`&&(0,w.jsx)(`span`,{className:`${K.mcpNavIndicator} ${K[a]}`}),(0,w.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,w.jsx)(`path`,{d:`M7.5 12.5L12 8L7.5 3.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})]})]})]}),(0,w.jsxs)(`div`,{className:`${K.settingsPage} ${K.automationsPage} ${l===`automations`?K.slideIn:``}`,children:[(0,w.jsxs)(`button`,{className:K.settingsBackButton,onClick:()=>u(`main`),children:[(0,w.jsx)(ve,{size:16}),(0,w.jsx)(`span`,{children:`Manage MCP & Webhooks`})]}),(0,w.jsx)(`div`,{className:K.divider}),(0,w.jsxs)(`div`,{className:K.settingsSection,children:[(0,w.jsxs)(`div`,{className:K.settingsRow,children:[(0,w.jsxs)(`span`,{className:K.automationHeader,children:[`MCP Connection`,(0,w.jsx)(Fe,{content:`Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time.`})]}),o&&(0,w.jsx)(`div`,{className:`${K.mcpStatusDot} ${K[a]}`,title:a===`connected`?`Connected`:a===`connecting`?`Connecting...`:`Disconnected`})]}),(0,w.jsxs)(`p`,{className:K.automationDescription,style:{paddingBottom:6},children:[`MCP connection allows agents to receive and act on annotations.`,` `,(0,w.jsx)(`a`,{href:`https://agentation.dev/mcp`,target:`_blank`,rel:`noopener noreferrer`,className:K.learnMoreLink,children:`Learn more`})]})]}),(0,w.jsx)(`div`,{className:K.divider}),(0,w.jsxs)(`div`,{className:`${K.settingsSection} ${K.settingsSectionGrow}`,children:[(0,w.jsxs)(`div`,{className:K.settingsRow,children:[(0,w.jsxs)(`span`,{className:K.automationHeader,children:[`Webhooks`,(0,w.jsx)(Fe,{content:`Send annotation data to any URL endpoint when annotations change. Useful for custom integrations.`})]}),(0,w.jsxs)(`div`,{className:K.autoSendContainer,children:[(0,w.jsx)(`label`,{htmlFor:`agentation-auto-send`,className:`${K.autoSendLabel} ${e.webhooksEnabled?K.active:``} ${e.webhookUrl?``:K.disabled}`,children:`Auto-Send`}),(0,w.jsx)(Ri,{id:`agentation-auto-send`,checked:e.webhooksEnabled,onChange:e=>t({webhooksEnabled:e.target.checked}),disabled:!e.webhookUrl})]})]}),(0,w.jsx)(`p`,{className:K.automationDescription,children:`The webhook URL will receive live annotation changes and annotation data.`}),(0,w.jsx)(`textarea`,{className:K.webhookUrlInput,placeholder:`Webhook URL`,value:e.webhookUrl,onKeyDown:e=>e.stopPropagation(),onChange:e=>t({webhookUrl:e.target.value})})]})]})]})})}function Xi(e,t=`filtered`){let{name:n,path:r}=fn(e);if(t===`off`)return{name:n,elementName:n,path:r,reactComponents:null};let i=li(e,{mode:t});return{name:i.path?`${i.path} ${n}`:n,elementName:n,path:r,reactComponents:i.path}}var Zi=!1,Qi={outputDetail:`standard`,autoClearAfterCopy:!1,annotationColorId:`blue`,blockInteractions:!0,reactEnabled:!0,markerClickBehavior:`edit`,webhookUrl:``,webhooksEnabled:!0},$i=e=>{if(!e||!e.trim())return!1;try{let t=new URL(e.trim());return t.protocol===`http:`||t.protocol===`https:`}catch{return!1}},ea={compact:`off`,standard:`filtered`,detailed:`smart`,forensic:`all`},ta=[{id:`indigo`,label:`Indigo`,srgb:`#6155F5`,p3:`color(display-p3 0.38 0.33 0.96)`},{id:`blue`,label:`Blue`,srgb:`#0088FF`,p3:`color(display-p3 0.00 0.53 1.00)`},{id:`cyan`,label:`Cyan`,srgb:`#00C3D0`,p3:`color(display-p3 0.00 0.76 0.82)`},{id:`green`,label:`Green`,srgb:`#34C759`,p3:`color(display-p3 0.20 0.78 0.35)`},{id:`yellow`,label:`Yellow`,srgb:`#FFCC00`,p3:`color(display-p3 1.00 0.80 0.00)`},{id:`orange`,label:`Orange`,srgb:`#FF8D28`,p3:`color(display-p3 1.00 0.55 0.16)`},{id:`red`,label:`Red`,srgb:`#FF383C`,p3:`color(display-p3 1.00 0.22 0.24)`}];(()=>{if(typeof document>`u`||document.getElementById(`agentation-color-tokens`))return;let e=document.createElement(`style`);e.id=`agentation-color-tokens`,e.textContent=[...ta.map(e=>`
      [data-agentation-accent="${e.id}"] {
        --agentation-color-accent: ${e.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${e.id}"] {
          --agentation-color-accent: ${e.p3};
        }
      }
    `),`:root {
      ${ta.map(e=>`--agentation-color-${e.id}: ${e.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${ta.map(e=>`--agentation-color-${e.id}: ${e.p3};`).join(`
`)}
      }
    }`].join(``),document.head.appendChild(e)})();function na(e,t){let n=document.elementFromPoint(e,t);if(!n)return null;for(;n?.shadowRoot;){let r=n.shadowRoot.elementFromPoint(e,t);if(!r||r===n)break;n=r}return n}function ra(e){let t=e;for(;t&&t!==document.body;){let e=window.getComputedStyle(t).position;if(e===`fixed`||e===`sticky`)return!0;t=t.parentElement}return!1}function q(e){return e.status!==`resolved`&&e.status!==`dismissed`}function J(e){let t=Si(e),n=t.found?t:wi(e);if(n.found&&n.source)return Ci(n.source,`path`)}function ia({demoAnnotations:e,demoDelay:t=1e3,enableDemoMode:n=!1,onAnnotationAdd:r,onAnnotationDelete:i,onAnnotationUpdate:a,onAnnotationsClear:o,onCopy:s,onSubmit:c,copyToClipboard:l=!0,endpoint:u,sessionId:d,onSessionCreated:f,webhookUrl:p,className:m}={}){let[h,g]=(0,C.useState)(!1),[_,v]=(0,C.useState)([]),[y,b]=(0,C.useState)(!0),[x,ee]=(0,C.useState)(()=>Rr()),[te,S]=(0,C.useState)(!1),T=(0,C.useRef)(null);(0,C.useEffect)(()=>{let e=e=>{let t=T.current;t&&t.contains(e.target)&&e.stopPropagation()},t=[`mousedown`,`click`,`pointerdown`];return t.forEach(t=>document.body.addEventListener(t,e)),()=>{t.forEach(t=>document.body.removeEventListener(t,e))}},[]);let[re,E]=(0,C.useState)(!1),[ie,ae]=(0,C.useState)(!1),[D,oe]=(0,C.useState)(null),[O,pe]=(0,C.useState)({x:0,y:0}),[A,he]=(0,C.useState)(null),[ge,_e]=(0,C.useState)(!1),[ve,j]=(0,C.useState)(`idle`),[be,xe]=(0,C.useState)(!1),[Se,Ce]=(0,C.useState)(!1),[M,Ee]=(0,C.useState)(null),[ke,je]=(0,C.useState)(null),[Me,Ne]=(0,C.useState)([]),[Pe,Ie]=(0,C.useState)(null),[Le,F]=(0,C.useState)(null),[I,Re]=(0,C.useState)(null),[ze,Be]=(0,C.useState)(null),[Ve,He]=(0,C.useState)([]),[Ue,We]=(0,C.useState)(0),[Ge,Ke]=(0,C.useState)(!1),[L,qe]=(0,C.useState)(!1),[Je,Ye]=(0,C.useState)(!1),[Xe,Ze]=(0,C.useState)(!1),[Qe,$e]=(0,C.useState)(!1),[et,tt]=(0,C.useState)(`main`),[nt,rt]=(0,C.useState)(!1),[it,at]=(0,C.useState)(!1),[ot,st]=(0,C.useState)(!1),[R,ct]=(0,C.useState)([]),[lt,ut]=(0,C.useState)(null),dt=(0,C.useRef)(!1),[ft,pt]=(0,C.useState)(!1),[mt,ht]=(0,C.useState)(!1),[gt,_t]=(0,C.useState)(1),[vt,yt]=(0,C.useState)(`new-page`),[bt,xt]=(0,C.useState)(``),[St,Ct]=(0,C.useState)(!1),[z,wt]=(0,C.useState)(null),Tt=(0,C.useRef)(!1),Et=(0,C.useRef)({rearrange:null,placements:[]}),Dt=(0,C.useRef)({rearrange:null,placements:[]}),[Ot,kt]=(0,C.useState)(0),[At,jt]=(0,C.useState)(0),[Mt,Nt]=(0,C.useState)(0),[Pt,Ft]=(0,C.useState)(0),It=(0,C.useRef)(new Set),Lt=(0,C.useRef)(new Set),Rt=(0,C.useRef)(null),zt=(0,C.useRef)(),Bt=it&&h&&!ot&&ft;(0,C.useEffect)(()=>{if(Bt){ht(!1);let e=Te(()=>{ht(!0)});return()=>cancelAnimationFrame(e)}else ht(!1)},[Bt]);let Vt=(0,C.useRef)(new Map),Ht=(0,C.useRef)(new Map),Ut=(0,C.useRef)(),[Wt,Gt]=(0,C.useState)(!1),[Kt,qt]=(0,C.useState)([]),Jt=(0,C.useRef)(Kt);Jt.current=Kt;let[Yt,Xt]=(0,C.useState)(null),Zt=(0,C.useRef)(null);(0,C.useRef)(!1),(0,C.useRef)([]),(0,C.useRef)(0),(0,C.useRef)(null),(0,C.useRef)(null),(0,C.useRef)(1);let[Qt,$t]=(0,C.useState)(!1),en=(0,C.useRef)(null),[tn,rn]=(0,C.useState)([]),V=(0,C.useRef)({cmd:!1,shift:!1}),H=()=>{rt(!0)},an=()=>{rt(!1)},on=()=>{Qt||(en.current=N(()=>$t(!0),850))},sn=()=>{en.current&&=(clearTimeout(en.current),null),$t(!1),an()};(0,C.useEffect)(()=>()=>{en.current&&clearTimeout(en.current)},[]);let[ln,dn]=(0,C.useState)(()=>{try{let e=JSON.parse(localStorage.getItem(`feedback-toolbar-settings`)??``);return{...Qi,...e,annotationColorId:ta.find(t=>t.id===e.annotationColorId)?e.annotationColorId:Qi.annotationColorId}}catch{return Qi}}),[gn,_n]=(0,C.useState)(!0),[vn,yn]=(0,C.useState)(!1),bn=()=>{T.current?.classList.add(G.disableTransitions),_n(e=>!e),Te(()=>{T.current?.classList.remove(G.disableTransitions)})},Sn=process.env.NODE_ENV===`development`,Dn=Sn&&ln.reactEnabled?ea[ln.outputDetail]:`off`,[On,kn]=(0,C.useState)(d??null),An=(0,C.useRef)(!1),[jn,Mn]=(0,C.useState)(u?`connecting`:`disconnected`),[Nn,Pn]=(0,C.useState)(null),[Fn,In]=(0,C.useState)(!1),[Rn,zn]=(0,C.useState)(null),Bn=(0,C.useRef)(!1),[Vn,Hn]=(0,C.useState)(new Set),[Un,Wn]=(0,C.useState)(new Set),[Gn,Kn]=(0,C.useState)(!1),[Jn,Yn]=(0,C.useState)(!1),[Xn,Zn]=(0,C.useState)(!1),Qn=(0,C.useRef)(null),$n=(0,C.useRef)(null),er=(0,C.useRef)(null),tr=(0,C.useRef)(null),nr=(0,C.useRef)(!1),rr=(0,C.useRef)(0),ir=(0,C.useRef)(null),ar=(0,C.useRef)(null),or=(0,C.useRef)(null),sr=(0,C.useRef)(null),cr=(0,C.useRef)(null),U=typeof window<`u`?window.location.pathname:`/`;(0,C.useEffect)(()=>{if(Xe)$e(!0);else{rt(!1),tt(`main`);let e=N(()=>$e(!1),0);return()=>clearTimeout(e)}},[Xe]);let lr=h&&y&&!it;(0,C.useEffect)(()=>{if(lr){ae(!1),E(!0),Hn(new Set);let e=N(()=>{Hn(e=>{let t=new Set(e);return _.forEach(e=>t.add(e.id)),t})},350);return()=>clearTimeout(e)}else if(re){ae(!0);let e=N(()=>{E(!1),ae(!1)},250);return()=>clearTimeout(e)}},[lr]),(0,C.useEffect)(()=>{qe(!0),We(window.scrollY),v(gr(U).filter(q)),Zi||(yn(!0),Zi=!0,N(()=>yn(!1),750));try{let e=localStorage.getItem(`feedback-toolbar-theme`);e!==null&&_n(e===`dark`)}catch{}try{let e=localStorage.getItem(`feedback-toolbar-position`);if(e){let t=JSON.parse(e);typeof t.x==`number`&&typeof t.y==`number`&&Pn(t)}}catch{}},[U]),(0,C.useEffect)(()=>{L&&localStorage.setItem(`feedback-toolbar-settings`,JSON.stringify(ln))},[ln,L]),(0,C.useEffect)(()=>{L&&localStorage.setItem(`feedback-toolbar-theme`,gn?`dark`:`light`)},[gn,L]);let ur=(0,C.useRef)(!1);(0,C.useEffect)(()=>{let e=ur.current;ur.current=Fn,e&&!Fn&&Nn&&L&&localStorage.setItem(`feedback-toolbar-position`,JSON.stringify(Nn))},[Fn,Nn,L]),(0,C.useEffect)(()=>{!u||!L||An.current||(An.current=!0,Mn(`connecting`),(async()=>{try{let e=Pr(U),t=d||e,n=!1;if(t)try{let e=await Vr(u,t);kn(e.id),Mn(`connected`),Fr(U,e.id),n=!0;let r=gr(U),i=new Set(e.annotations.map(e=>e.id)),a=r.filter(e=>!i.has(e.id));if(a.length>0){let t=`${typeof window<`u`?window.location.origin:``}${U}`,n=(await Promise.allSettled(a.map(n=>Hr(u,e.id,{...n,sessionId:e.id,url:t})))).map((e,t)=>e.status===`fulfilled`?e.value:(console.warn(`[Agentation] Failed to sync annotation:`,e.reason),a[t])),r=[...e.annotations,...n];v(r.filter(q)),yr(U,r.filter(q),e.id)}else v(e.annotations.filter(q)),yr(U,e.annotations.filter(q),e.id)}catch(e){console.warn(`[Agentation] Could not join session, creating new:`,e),Ir(U)}if(!n){let e=await Br(u,typeof window<`u`?window.location.href:`/`);kn(e.id),Mn(`connected`),Fr(U,e.id),f?.(e.id);let t=vr(),n=typeof window<`u`?window.location.origin:``,r=[];for(let[i,a]of t){let t=a.filter(e=>!e._syncedTo);if(t.length===0)continue;let o=`${n}${i}`,s=i===U;r.push((async()=>{try{let n=s?e:await Br(u,o),r=(await Promise.allSettled(t.map(e=>Hr(u,n.id,{...e,sessionId:n.id,url:o})))).map((e,n)=>e.status===`fulfilled`?e.value:(console.warn(`[Agentation] Failed to sync annotation:`,e.reason),t[n])).filter(q);if(yr(i,r,n.id),s){let e=new Set(t.map(e=>e.id));v(t=>{let n=t.filter(t=>!e.has(t.id));return[...r,...n]})}}catch(e){console.warn(`[Agentation] Failed to sync annotations for ${i}:`,e)}})())}await Promise.allSettled(r)}}catch(e){Mn(`disconnected`),console.warn(`[Agentation] Failed to initialize session, using local storage:`,e)}})())},[u,d,L,f,U]),(0,C.useEffect)(()=>{if(!u||!L)return;let e=async()=>{try{(await fetch(`${u}/health`)).ok?Mn(`connected`):Mn(`disconnected`)}catch{Mn(`disconnected`)}};e();let t=we(e,1e4);return()=>clearInterval(t)},[u,L]),(0,C.useEffect)(()=>{if(!u||!L||!On)return;let e=new EventSource(`${u}/sessions/${On}/events`),t=[`resolved`,`dismissed`],n=e=>{try{let n=JSON.parse(e.data);if(t.includes(n.payload?.status)){let e=n.payload.id,t=n.payload.kind;if(t===`placement`){for(let[t,n]of Vt.current)if(n===e){Vt.current.delete(t),ct(e=>e.filter(e=>e.id!==t));break}}else if(t===`rearrange`){for(let[t,n]of Ht.current)if(n===e){Ht.current.delete(t),wt(e=>{if(!e)return null;let n=e.sections.filter(e=>e.id!==t);return n.length===0?null:{...e,sections:n}});break}}else Wn(t=>new Set(t).add(e)),N(()=>{v(t=>t.filter(t=>t.id!==e)),Wn(t=>{let n=new Set(t);return n.delete(e),n})},150)}}catch{}};return e.addEventListener(`annotation.updated`,n),()=>{e.removeEventListener(`annotation.updated`,n),e.close()}},[u,L,On]),(0,C.useEffect)(()=>{if(!u||!L)return;let e=ar.current===`disconnected`,t=jn===`connected`;ar.current=jn,e&&t&&(async()=>{try{let e=gr(U);if(e.length===0)return;let t=`${typeof window<`u`?window.location.origin:``}${U}`,n=On,r=[];if(n)try{r=(await Vr(u,n)).annotations}catch{n=null}n||(n=(await Br(u,t)).id,kn(n),Fr(U,n));let i=new Set(r.map(e=>e.id)),a=e.filter(e=>!i.has(e.id));if(a.length>0){let e=(await Promise.allSettled(a.map(e=>Hr(u,n,{...e,sessionId:n,url:t})))).map((e,t)=>e.status===`fulfilled`?e.value:(console.warn(`[Agentation] Failed to sync annotation on reconnect:`,e.reason),a[t])),i=[...r,...e].filter(q);v(i),yr(U,i,n)}}catch(e){console.warn(`[Agentation] Failed to sync on reconnect:`,e)}})()},[jn,u,L,On,U]);let pr=(0,C.useCallback)(()=>{te||(S(!0),Ze(!1),g(!1),N(()=>{zr(!0),ee(!0),S(!1)},400))},[te]);(0,C.useEffect)(()=>{if(!n||!L||!e||e.length===0||_.length>0)return;let r=[];return r.push(N(()=>{g(!0)},t-200)),e.forEach((e,n)=>{let i=t+n*300;r.push(N(()=>{let t=document.querySelector(e.selector);if(!t)return;let r=t.getBoundingClientRect(),{name:i,path:a}=fn(t),o={id:`demo-${Date.now()}-${n}`,x:(r.left+r.width/2)/window.innerWidth*100,y:r.top+r.height/2+window.scrollY,comment:e.comment,element:i,elementPath:a,timestamp:Date.now(),selectedText:e.selectedText,boundingBox:{x:r.left,y:r.top+window.scrollY,width:r.width,height:r.height},nearbyText:pn(t),cssClasses:hn(t)};v(e=>[...e,o])},i))}),()=>{r.forEach(clearTimeout)}},[n,L,e,t]),(0,C.useEffect)(()=>{let e=()=>{We(window.scrollY),Ke(!0),cr.current&&clearTimeout(cr.current),cr.current=N(()=>{Ke(!1)},150)};return window.addEventListener(`scroll`,e,{passive:!0}),()=>{window.removeEventListener(`scroll`,e),cr.current&&clearTimeout(cr.current)}},[]),(0,C.useEffect)(()=>{L&&_.length>0?On?yr(U,_,On):_r(U,_):L&&_.length===0&&localStorage.removeItem(hr(U))},[_,U,L,On]),(0,C.useEffect)(()=>{if(L&&!dt.current){dt.current=!0;let e=xr(U);e.length>0&&ct(e)}},[L,U]),(0,C.useEffect)(()=>{L&&dt.current&&!ft&&(R.length>0?Sr(U,R):Cr(U))},[R,U,L,ft]),(0,C.useEffect)(()=>{if(L&&!Tt.current){Tt.current=!0;let e=Tr(U);e&&wt({...e,sections:e.sections.map(e=>({...e,currentRect:e.currentRect??{...e.originalRect}}))})}},[L,U]),(0,C.useEffect)(()=>{L&&Tt.current&&!ft&&(z?Er(U,z):Dr(U))},[z,U,L,ft]);let mr=(0,C.useRef)(!1);(0,C.useEffect)(()=>{if(L&&!mr.current){mr.current=!0;let e=kr(U);e&&(Dt.current={rearrange:e.rearrange,placements:e.placements||[]},e.purpose&&xt(e.purpose))}},[L,U]),(0,C.useEffect)(()=>{if(!L||!mr.current)return;let e=Dt.current;ft?(z?.sections?.length??0)>0||R.length>0||bt?Ar(U,{rearrange:z,placements:R,purpose:bt}):jr(U):(e.rearrange?.sections?.length??0)>0||e.placements.length>0||bt?Ar(U,{rearrange:e.rearrange,placements:e.placements,purpose:bt}):jr(U)},[z,R,bt,ft,U,L]),(0,C.useEffect)(()=>{it&&!z&&wt({sections:[],originalOrder:[],detectedAt:Date.now()})},[it,z]),(0,C.useEffect)(()=>{if(!u||!On)return;let e=Vt.current,t=new Set(R.map(e=>e.id));for(let t of R){if(e.has(t.id))continue;e.set(t.id,``);let n=typeof window<`u`?window.location.pathname+window.location.search+window.location.hash:U;Hr(u,On,{id:t.id,x:t.x/window.innerWidth*100,y:t.y,comment:`Place ${t.type} at (${Math.round(t.x)}, ${Math.round(t.y)}), ${t.width}\xD7${t.height}px${t.text?` \u2014 "${t.text}"`:``}`,element:`[design:${t.type}]`,elementPath:`[placement]`,timestamp:t.timestamp,url:n,intent:`change`,severity:`important`,kind:`placement`,placement:{componentType:t.type,width:t.width,height:t.height,scrollY:t.scrollY,text:t.text}}).then(n=>{e.has(t.id)&&e.set(t.id,n.id)}).catch(n=>{console.warn(`[Agentation] Failed to sync placement annotation:`,n),e.delete(t.id)})}for(let[n,r]of e)t.has(n)||(e.delete(n),r&&Wr(u,r).catch(()=>{}))},[R,u,On,U]),(0,C.useEffect)(()=>{if(!(!u||!On))return Ut.current&&clearTimeout(Ut.current),Ut.current=N(()=>{let e=Ht.current;if(!z||z.sections.length===0){for(let[,t]of e)t&&Wr(u,t).catch(()=>{});e.clear();return}let t=new Set(z.sections.map(e=>e.id)),n=typeof window<`u`?window.location.pathname+window.location.search+window.location.hash:U;for(let t of z.sections){let r=t.originalRect,i=t.currentRect;if(!(Math.abs(r.x-i.x)>1||Math.abs(r.y-i.y)>1||Math.abs(r.width-i.width)>1||Math.abs(r.height-i.height)>1)){let n=e.get(t.id);n&&(e.delete(t.id),Wr(u,n).catch(()=>{}));continue}let a=e.get(t.id);a?Ur(u,a,{comment:`Move ${t.label} section (${t.tagName}) \u2014 from (${Math.round(r.x)},${Math.round(r.y)}) ${Math.round(r.width)}\xD7${Math.round(r.height)} to (${Math.round(i.x)},${Math.round(i.y)}) ${Math.round(i.width)}\xD7${Math.round(i.height)}`}).catch(e=>{console.warn(`[Agentation] Failed to update rearrange annotation:`,e)}):(e.set(t.id,``),Hr(u,On,{id:t.id,x:i.x/window.innerWidth*100,y:i.y,comment:`Move ${t.label} section (${t.tagName}) \u2014 from (${Math.round(r.x)},${Math.round(r.y)}) ${Math.round(r.width)}\xD7${Math.round(r.height)} to (${Math.round(i.x)},${Math.round(i.y)}) ${Math.round(i.width)}\xD7${Math.round(i.height)}`,element:t.selector,elementPath:`[rearrange]`,timestamp:Date.now(),url:n,intent:`change`,severity:`important`,kind:`rearrange`,rearrange:{selector:t.selector,label:t.label,tagName:t.tagName,originalRect:r,currentRect:i}}).then(n=>{e.has(t.id)&&e.set(t.id,n.id)}).catch(n=>{console.warn(`[Agentation] Failed to sync rearrange annotation:`,n),e.delete(t.id)}))}for(let[n,r]of e)t.has(n)||(e.delete(n),r&&Wr(u,r).catch(()=>{}))},300),()=>{Ut.current&&clearTimeout(Ut.current)}},[z,u,On,U]);let br=(0,C.useRef)(new Map);(0,C.useLayoutEffect)(()=>{let e=z?.sections??[],t=new Set;if((it||ot)&&h)for(let n of e){t.add(n.id);try{let e=document.querySelector(n.selector);if(!e)continue;if(!br.current.has(n.id)){let t={transform:e.style.transform,transformOrigin:e.style.transformOrigin,opacity:e.style.opacity,position:e.style.position,zIndex:e.style.zIndex,display:e.style.display},r=[],i=e.parentElement;for(;i&&i!==document.body;){let e=getComputedStyle(i);(e.overflow!==`visible`||e.overflowX!==`visible`||e.overflowY!==`visible`)&&(r.push({el:i,overflow:i.style.overflow}),i.style.overflow=`visible`),i=i.parentElement}getComputedStyle(e).display===`inline`&&(e.style.display=`inline-block`),br.current.set(n.id,{el:e,origStyles:t,ancestors:r}),e.style.transformOrigin=`top left`,e.style.zIndex=`9999`}}catch{}}for(let[e,n]of br.current)if(!t.has(e)){let{el:t,origStyles:r,ancestors:i}=n;t.style.transition=`transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)`,t.style.transform=r.transform,t.style.transformOrigin=r.transformOrigin,t.style.opacity=r.opacity,t.style.position=r.position,t.style.zIndex=r.zIndex,br.current.delete(e),N(()=>{t.style.transition=``,t.style.display=r.display;for(let e of i)e.el.style.overflow=e.overflow},450)}},[z,it,ot,h]),(0,C.useEffect)(()=>()=>{for(let[,e]of br.current){let{el:t,origStyles:n,ancestors:r}=e;t.style.transition=`transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)`,t.style.transform=n.transform,t.style.transformOrigin=n.transformOrigin,t.style.opacity=n.opacity,t.style.position=n.position,t.style.zIndex=n.zIndex,N(()=>{t.style.transition=``,t.style.display=n.display;for(let e of r)e.el.style.overflow=e.overflow},450)}br.current.clear()},[]);let wr=(0,C.useCallback)(()=>{st(!0),at(!1),ut(null),clearTimeout(zt.current),zt.current=N(()=>{st(!1)},300)},[]),Or=(0,C.useCallback)(()=>{it&&(st(!0),at(!1),ut(null),clearTimeout(zt.current),zt.current=N(()=>{st(!1)},300)),g(!1)},[it]),Mr=(0,C.useCallback)(()=>{Je||(De(),Ye(!0))},[Je]),Nr=(0,C.useCallback)(()=>{Je&&(Oe(),Ye(!1))},[Je]),Lr=(0,C.useCallback)(()=>{Je?Nr():Mr()},[Je,Mr,Nr]),W=(0,C.useCallback)(()=>{if(tn.length===0)return;let e=tn[0],t=e.element,n=tn.length>1,r=tn.map(e=>e.element.getBoundingClientRect());if(n){let e={left:Math.min(...r.map(e=>e.left)),top:Math.min(...r.map(e=>e.top)),right:Math.max(...r.map(e=>e.right)),bottom:Math.max(...r.map(e=>e.bottom))},n=tn.slice(0,5).map(e=>e.name).join(`, `),i=tn.length>5?` +${tn.length-5} more`:``,a=r.map(e=>({x:e.left,y:e.top+window.scrollY,width:e.width,height:e.height})),o=tn[tn.length-1].element,s=r[r.length-1],c=s.left+s.width/2,l=s.top+s.height/2,u=ra(o);he({x:c/window.innerWidth*100,y:u?l:l+window.scrollY,clientY:l,element:`${tn.length} elements: ${n}${i}`,elementPath:`multi-select`,boundingBox:{x:e.left,y:e.top+window.scrollY,width:e.right-e.left,height:e.bottom-e.top},isMultiSelect:!0,isFixed:u,elementBoundingBoxes:a,multiSelectElements:tn.map(e=>e.element),targetElement:o,fullPath:En(t),accessibility:Tn(t),computedStyles:Cn(t),computedStylesObj:xn(t),nearbyElements:mn(t),cssClasses:hn(t),nearbyText:pn(t),sourceFile:J(t)})}else{let n=r[0],i=ra(t);he({x:n.left/window.innerWidth*100,y:i?n.top:n.top+window.scrollY,clientY:n.top,element:e.name,elementPath:e.path,boundingBox:{x:n.left,y:i?n.top:n.top+window.scrollY,width:n.width,height:n.height},isFixed:i,fullPath:En(t),accessibility:Tn(t),computedStyles:Cn(t),computedStylesObj:xn(t),nearbyElements:mn(t),cssClasses:hn(t),nearbyText:pn(t),reactComponents:e.reactComponents,sourceFile:J(t)})}rn([]),oe(null)},[tn]);(0,C.useEffect)(()=>{h||(he(null),Re(null),Be(null),He([]),oe(null),Ze(!1),rn([]),V.current={cmd:!1,shift:!1},Je&&Nr())},[h,Je,Nr]),(0,C.useEffect)(()=>()=>{Oe()},[]),(0,C.useEffect)(()=>{if(!h)return;let e=`p.span.h1.h2.h3.h4.h5.h6.li.td.th.label.blockquote.figcaption.caption.legend.dt.dd.pre.code.em.strong.b.i.u.s.a.time.address.cite.q.abbr.dfn.mark.small.sub.sup.[contenteditable]`.split(`.`).join(`, `),t=`:not([data-agentation-root]):not([data-agentation-root] *)`,n=document.createElement(`style`);return n.id=`feedback-cursor-styles`,n.textContent=`
      body ${t} {
        cursor: crosshair !important;
      }

      body :is(${e})${t} {
        cursor: text !important;
      }
    `,document.head.appendChild(n),()=>{let e=document.getElementById(`feedback-cursor-styles`);e&&e.remove()}},[h]),(0,C.useEffect)(()=>{if(Yt!==null&&h)return document.documentElement.setAttribute(`data-drawing-hover`,``),()=>document.documentElement.removeAttribute(`data-drawing-hover`)},[Yt,h]),(0,C.useEffect)(()=>{if(!h||A||Wt||it)return;let e=e=>{if(un(e.composedPath()[0]||e.target,`[data-feedback-toolbar]`)){oe(null);return}let t=na(e.clientX,e.clientY);if(!t||un(t,`[data-feedback-toolbar]`)){oe(null);return}let{name:n,elementName:r,path:i,reactComponents:a}=Xi(t,Dn);oe({element:n,elementName:r,elementPath:i,rect:t.getBoundingClientRect(),reactComponents:a}),pe({x:e.clientX,y:e.clientY})};return document.addEventListener(`mousemove`,e),()=>document.removeEventListener(`mousemove`,e)},[h,A,Wt,it,Dn,Kt]);let Gr=(0,C.useCallback)(e=>{if(Re(e),Ee(null),je(null),Ne([]),e.elementBoundingBoxes?.length){let t=[];for(let n of e.elementBoundingBoxes){let e=na(n.x+n.width/2,n.y+n.height/2-window.scrollY);e&&t.push(e)}He(t),Be(null)}else if(e.boundingBox){let t=e.boundingBox,n=na(t.x+t.width/2,e.isFixed?t.y+t.height/2:t.y+t.height/2-window.scrollY);if(n){let e=n.getBoundingClientRect(),r=e.width/t.width,i=e.height/t.height;Be(r<.5||i<.5?null:n)}else Be(null);He([])}else Be(null),He([])},[]);(0,C.useEffect)(()=>{if(!h||Wt||it)return;let e=e=>{if(nr.current){nr.current=!1;return}let t=e.composedPath()[0]||e.target;if(un(t,`[data-feedback-toolbar]`)||un(t,`[data-annotation-popup]`)||un(t,`[data-annotation-marker]`))return;if(e.metaKey&&e.shiftKey&&!A&&!I){e.preventDefault(),e.stopPropagation();let t=na(e.clientX,e.clientY);if(!t)return;let n=t.getBoundingClientRect(),{name:r,path:i,reactComponents:a}=Xi(t,Dn),o=tn.findIndex(e=>e.element===t);rn(o>=0?e=>e.filter((e,t)=>t!==o):e=>[...e,{element:t,rect:n,name:r,path:i,reactComponents:a??void 0}]);return}let n=un(t,`button, a, input, select, textarea, [role='button'], [onclick]`);if(ln.blockInteractions&&n&&(e.preventDefault(),e.stopPropagation()),A){if(n&&!ln.blockInteractions)return;e.preventDefault(),or.current?.shake();return}if(I){if(n&&!ln.blockInteractions)return;e.preventDefault(),sr.current?.shake();return}e.preventDefault();let r=na(e.clientX,e.clientY);if(!r)return;let{name:i,path:a,reactComponents:o}=Xi(r,Dn),s=r.getBoundingClientRect(),c=e.clientX/window.innerWidth*100,l=ra(r),u=l?e.clientY:e.clientY+window.scrollY,d=window.getSelection(),f;d&&d.toString().trim().length>0&&(f=d.toString().trim().slice(0,500));let p=xn(r),m=Cn(r);he({x:c,y:u,clientY:e.clientY,element:i,elementPath:a,selectedText:f,boundingBox:{x:s.left,y:l?s.top:s.top+window.scrollY,width:s.width,height:s.height},nearbyText:pn(r),cssClasses:hn(r),isFixed:l,fullPath:En(r),accessibility:Tn(r),computedStyles:m,computedStylesObj:p,nearbyElements:mn(r),reactComponents:o??void 0,sourceFile:J(r),targetElement:r}),oe(null)};return document.addEventListener(`click`,e,!0),()=>document.removeEventListener(`click`,e,!0)},[h,Wt,it,A,I,ln.blockInteractions,Dn,tn]),(0,C.useEffect)(()=>{if(!h)return;let e=e=>{e.key===`Meta`&&(V.current.cmd=!0),e.key===`Shift`&&(V.current.shift=!0)},t=e=>{let t=V.current.cmd&&V.current.shift;e.key===`Meta`&&(V.current.cmd=!1),e.key===`Shift`&&(V.current.shift=!1);let n=V.current.cmd&&V.current.shift;t&&!n&&tn.length>0&&W()},n=()=>{V.current={cmd:!1,shift:!1},rn([])};return document.addEventListener(`keydown`,e),document.addEventListener(`keyup`,t),window.addEventListener(`blur`,n),()=>{document.removeEventListener(`keydown`,e),document.removeEventListener(`keyup`,t),window.removeEventListener(`blur`,n)}},[h,tn,W]),(0,C.useEffect)(()=>{if(!h||A||Wt||it)return;let e=e=>{let t=e.composedPath()[0]||e.target;un(t,`[data-feedback-toolbar]`)||un(t,`[data-annotation-marker]`)||un(t,`[data-annotation-popup]`)||new Set(`P.SPAN.H1.H2.H3.H4.H5.H6.LI.TD.TH.LABEL.BLOCKQUOTE.FIGCAPTION.CAPTION.LEGEND.DT.DD.PRE.CODE.EM.STRONG.B.I.U.S.A.TIME.ADDRESS.CITE.Q.ABBR.DFN.MARK.SMALL.SUB.SUP`.split(`.`)).has(t.tagName)||t.isContentEditable||(e.preventDefault(),Qn.current={x:e.clientX,y:e.clientY})};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[h,A,Wt,it]),(0,C.useEffect)(()=>{if(!h||A)return;let e=e=>{if(!Qn.current)return;let t=e.clientX-Qn.current.x,n=e.clientY-Qn.current.y,r=t*t+n*n;if(!Xn&&r>=64&&($n.current=Qn.current,Zn(!0),e.preventDefault()),(Xn||r>=64)&&$n.current){if(er.current){let t=Math.min($n.current.x,e.clientX),n=Math.min($n.current.y,e.clientY),r=Math.abs(e.clientX-$n.current.x),i=Math.abs(e.clientY-$n.current.y);er.current.style.transform=`translate(${t}px, ${n}px)`,er.current.style.width=`${r}px`,er.current.style.height=`${i}px`}let t=Date.now();if(t-rr.current<50)return;rr.current=t;let n=$n.current.x,r=$n.current.y,i=Math.min(n,e.clientX),a=Math.min(r,e.clientY),o=Math.max(n,e.clientX),s=Math.max(r,e.clientY),c=(i+o)/2,l=(a+s)/2,u=new Set,d=[[i,a],[o,a],[i,s],[o,s],[c,l],[c,a],[c,s],[i,l],[o,l]];for(let[e,t]of d){let n=document.elementsFromPoint(e,t);for(let e of n)e instanceof HTMLElement&&u.add(e)}let f=document.querySelectorAll(`button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav`);for(let e of f)if(e instanceof HTMLElement){let t=e.getBoundingClientRect(),n=t.left+t.width/2,r=t.top+t.height/2,c=n>=i&&n<=o&&r>=a&&r<=s,l=Math.min(t.right,o)-Math.max(t.left,i),d=Math.min(t.bottom,s)-Math.max(t.top,a),f=l>0&&d>0?l*d:0,p=t.width*t.height,m=p>0?f/p:0;(c||m>.5)&&u.add(e)}let p=[],m=new Set([`BUTTON`,`A`,`INPUT`,`IMG`,`P`,`H1`,`H2`,`H3`,`H4`,`H5`,`H6`,`LI`,`LABEL`,`TD`,`TH`,`SECTION`,`ARTICLE`,`ASIDE`,`NAV`]);for(let e of u){if(un(e,`[data-feedback-toolbar]`)||un(e,`[data-annotation-marker]`))continue;let t=e.getBoundingClientRect();if(!(t.width>window.innerWidth*.8&&t.height>window.innerHeight*.5)&&!(t.width<10||t.height<10)&&t.left<o&&t.right>i&&t.top<s&&t.bottom>a){let n=e.tagName,r=m.has(n);if(!r&&(n===`DIV`||n===`SPAN`)){let t=e.textContent&&e.textContent.trim().length>0,n=e.onclick!==null||e.getAttribute(`role`)===`button`||e.getAttribute(`role`)===`link`||e.classList.contains(`clickable`)||e.hasAttribute(`data-clickable`);(t||n)&&!e.querySelector(`p, h1, h2, h3, h4, h5, h6, button, a`)&&(r=!0)}if(r){let e=!1;for(let n of p)if(n.left<=t.left&&n.right>=t.right&&n.top<=t.top&&n.bottom>=t.bottom){e=!0;break}e||p.push(t)}}}if(tr.current){let e=tr.current;for(;e.children.length>p.length;)e.removeChild(e.lastChild);p.forEach((t,n)=>{let r=e.children[n];r||(r=document.createElement(`div`),r.className=G.selectedElementHighlight,e.appendChild(r)),r.style.transform=`translate(${t.left}px, ${t.top}px)`,r.style.width=`${t.width}px`,r.style.height=`${t.height}px`})}}};return document.addEventListener(`mousemove`,e,{passive:!0}),()=>document.removeEventListener(`mousemove`,e)},[h,A,Xn,8]),(0,C.useEffect)(()=>{if(!h)return;let e=e=>{let t=Xn,n=$n.current;if(Xn&&n){nr.current=!0;let t=Math.min(n.x,e.clientX),r=Math.min(n.y,e.clientY),i=Math.max(n.x,e.clientX),a=Math.max(n.y,e.clientY),o=[];document.querySelectorAll(`button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th`).forEach(e=>{if(!(e instanceof HTMLElement)||un(e,`[data-feedback-toolbar]`)||un(e,`[data-annotation-marker]`))return;let n=e.getBoundingClientRect();n.width>window.innerWidth*.8&&n.height>window.innerHeight*.5||n.width<10||n.height<10||n.left<i&&n.right>t&&n.top<a&&n.bottom>r&&o.push({element:e,rect:n})});let s=o.filter(({element:e})=>!o.some(({element:t})=>t!==e&&e.contains(t))),c=e.clientX/window.innerWidth*100,l=e.clientY+window.scrollY;if(s.length>0){let t=s.reduce((e,{rect:t})=>({left:Math.min(e.left,t.left),top:Math.min(e.top,t.top),right:Math.max(e.right,t.right),bottom:Math.max(e.bottom,t.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),n=s.slice(0,5).map(({element:e})=>fn(e).name).join(`, `),r=s.length>5?` +${s.length-5} more`:``,i=s[0].element,a=xn(i),o=Cn(i);he({x:c,y:l,clientY:e.clientY,element:`${s.length} elements: ${n}${r}`,elementPath:`multi-select`,boundingBox:{x:t.left,y:t.top+window.scrollY,width:t.right-t.left,height:t.bottom-t.top},isMultiSelect:!0,fullPath:En(i),accessibility:Tn(i),computedStyles:o,computedStylesObj:a,nearbyElements:mn(i),cssClasses:hn(i),nearbyText:pn(i),sourceFile:J(i)})}else{let n=Math.abs(i-t),o=Math.abs(a-r);n>20&&o>20&&he({x:c,y:l,clientY:e.clientY,element:`Area selection`,elementPath:`region at (${Math.round(t)}, ${Math.round(r)})`,boundingBox:{x:t,y:r+window.scrollY,width:n,height:o},isMultiSelect:!0})}oe(null)}else t&&(nr.current=!0);Qn.current=null,$n.current=null,Zn(!1),tr.current&&(tr.current.innerHTML=``)};return document.addEventListener(`mouseup`,e),()=>document.removeEventListener(`mouseup`,e)},[h,Xn]);let Kr=(0,C.useCallback)(async(e,t,n)=>{let r=ln.webhookUrl||p;if(!r||!ln.webhooksEnabled&&!n)return!1;try{return(await fetch(r,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({event:e,timestamp:Date.now(),url:typeof window<`u`?window.location.href:void 0,...t})})).ok}catch(e){return console.warn(`[Agentation] Webhook failed:`,e),!1}},[p,ln.webhookUrl,ln.webhooksEnabled]),qr=(0,C.useCallback)(e=>{if(!A)return;let t={id:Date.now().toString(),x:A.x,y:A.y,comment:e,element:A.element,elementPath:A.elementPath,timestamp:Date.now(),selectedText:A.selectedText,boundingBox:A.boundingBox,nearbyText:A.nearbyText,cssClasses:A.cssClasses,isMultiSelect:A.isMultiSelect,isFixed:A.isFixed,fullPath:A.fullPath,accessibility:A.accessibility,computedStyles:A.computedStyles,nearbyElements:A.nearbyElements,reactComponents:A.reactComponents,sourceFile:A.sourceFile,elementBoundingBoxes:A.elementBoundingBoxes,...u&&On?{sessionId:On,url:typeof window<`u`?window.location.href:void 0,status:`pending`}:{}};v(e=>[...e,t]),ir.current=t.id,N(()=>{ir.current=null},300),N(()=>{Hn(e=>new Set(e).add(t.id))},250),r?.(t),Kr(`annotation.add`,{annotation:t}),Kn(!0),N(()=>{he(null),Kn(!1)},150),window.getSelection()?.removeAllRanges(),u&&On&&Hr(u,On,t).then(e=>{e.id!==t.id&&(v(n=>n.map(n=>n.id===t.id?{...n,id:e.id}:n)),Hn(n=>{let r=new Set(n);return r.delete(t.id),r.add(e.id),r}))}).catch(e=>{console.warn(`[Agentation] Failed to sync annotation:`,e)})},[A,r,Kr,u,On]),Jr=(0,C.useCallback)(()=>{Kn(!0),N(()=>{he(null),Kn(!1)},150)},[]),Yr=(0,C.useCallback)(e=>{let t=_.findIndex(t=>t.id===e),n=_[t];I?.id===e&&(Yn(!0),N(()=>{Re(null),Be(null),He([]),Yn(!1)},150)),Ie(e),Wn(t=>new Set(t).add(e)),n&&(i?.(n),Kr(`annotation.delete`,{annotation:n})),u&&Wr(u,e).catch(e=>{console.warn(`[Agentation] Failed to delete annotation from server:`,e)}),N(()=>{v(t=>t.filter(t=>t.id!==e)),Wn(t=>{let n=new Set(t);return n.delete(e),n}),Ie(null),t<_.length-1&&(F(t),N(()=>F(null),200))},150)},[_,I,i,Kr,u]),Xr=(0,C.useCallback)(e=>{if(!e){Ee(null),je(null),Ne([]);return}if(Ee(e.id),e.elementBoundingBoxes?.length){let t=[];for(let n of e.elementBoundingBoxes){let e=n.x+n.width/2,r=n.y+n.height/2-window.scrollY,i=document.elementsFromPoint(e,r).find(e=>!e.closest(`[data-annotation-marker]`)&&!e.closest(`[data-agentation-root]`));i&&t.push(i)}Ne(t),je(null)}else if(e.boundingBox){let t=e.boundingBox,n=na(t.x+t.width/2,e.isFixed?t.y+t.height/2:t.y+t.height/2-window.scrollY);if(n){let e=n.getBoundingClientRect(),r=e.width/t.width,i=e.height/t.height;je(r<.5||i<.5?null:n)}else je(null);Ne([])}else je(null),Ne([])},[]),Zr=(0,C.useCallback)(e=>{if(!I)return;let t={...I,comment:e};v(e=>e.map(e=>e.id===I.id?t:e)),a?.(t),Kr(`annotation.update`,{annotation:t}),u&&Ur(u,I.id,{comment:e}).catch(e=>{console.warn(`[Agentation] Failed to update annotation on server:`,e)}),Yn(!0),N(()=>{Re(null),Be(null),He([]),Yn(!1)},150)},[I,a,Kr,u]),Qr=(0,C.useCallback)(()=>{Yn(!0),N(()=>{Re(null),Be(null),He([]),Yn(!1)},150)},[]),$r=(0,C.useCallback)(()=>{let e=_.length,t=R.length>0||!!z;if(e===0&&Kt.length===0&&!t)return;if(o?.(_),Kr(`annotations.clear`,{annotations:_}),u){Promise.all(_.map(e=>Wr(u,e.id).catch(e=>{console.warn(`[Agentation] Failed to delete annotation from server:`,e)})));for(let[,e]of Vt.current)e&&Wr(u,e).catch(()=>{});Vt.current.clear();for(let[,e]of Ht.current)e&&Wr(u,e).catch(()=>{});Ht.current.clear()}Ce(!0),xe(!0),qt([]);let n=Zt.current;if(n){let e=n.getContext(`2d`);e&&e.clearRect(0,0,n.width,n.height)}(R.length>0||z)&&(Nt(e=>e+1),Ft(e=>e+1),N(()=>{ct([]),wt(null)},200)),ft&&pt(!1),bt&&xt(``),Dt.current={rearrange:null,placements:[]},jr(U),N(()=>{v([]),Hn(new Set),localStorage.removeItem(hr(U)),Ce(!1)},e*30+200),N(()=>xe(!1),1500)},[U,_,Kt,R,z,ft,bt,o,Kr,u]),ei=(0,C.useCallback)(async()=>{let e=typeof window<`u`?window.location.pathname+window.location.search+window.location.hash:U,t=it&&ft,n;if(t){if(R.length===0&&!z&&!bt)return;n=``}else{if(n=Oi(_,e,ln.outputDetail),!n&&Kt.length===0&&R.length===0&&!z)return;n||=`## Page Feedback: ${e}
`}if(!t&&Kt.length>0){let e=new Set;for(let t of _)t.drawingIndex!=null&&e.add(t.drawingIndex);let t=Zt.current;t&&(t.style.visibility=`hidden`);let r=[],i=window.scrollY;for(let t=0;t<Kt.length;t++){if(e.has(t))continue;let n=Kt[t];if(n.points.length<2)continue;let a=n.fixed?n.points:n.points.map(e=>({x:e.x,y:e.y-i})),o=1/0,s=1/0,c=-1/0,l=-1/0;for(let e of a)o=Math.min(o,e.x),s=Math.min(s,e.y),c=Math.max(c,e.x),l=Math.max(l,e.y);let u=c-o,d=l-s,f=Math.hypot(u,d),p=a[0],m=a[a.length-1],h=Math.hypot(m.x-p.x,m.y-p.y),g,_=h<f*.35,v=u/Math.max(d,1);if(_&&f>20){let e=Math.max(u,d)*.15,t=0;for(let n of a){let r=n.x-o<e,i=c-n.x<e,a=n.y-s<e,u=l-n.y<e;(r||i)&&(a||u)&&t++}g=t>a.length*.15?`box`:`circle`}else g=v>3&&d<40?`underline`:h>f*.5?`arrow`:`drawing`;let y=Math.min(10,a.length),b=Math.max(1,Math.floor(a.length/y)),x=new Set,ee=[],te=[p];for(let e=b;e<a.length-1;e+=b)te.push(a[e]);te.push(m);for(let e of te){let t=na(e.x,e.y);if(!t||x.has(t)||un(t,`[data-feedback-toolbar]`))continue;x.add(t);let{name:n}=fn(t);ee.includes(n)||ee.push(n)}let S=`${Math.round(o)},${Math.round(s)} \u2192 ${Math.round(c)},${Math.round(l)}`,C;C=(g===`circle`||g===`box`)&&ee.length>0?`${g===`box`?`Boxed`:`Circled`} **${ee[0]}**${ee.length>1?` (and ${ee.slice(1).join(`, `)})`:``} (region: ${S})`:g===`underline`&&ee.length>0?`Underlined **${ee[0]}** (${S})`:g===`arrow`&&ee.length>=2?`Arrow from **${ee[0]}** to **${ee[ee.length-1]}** (${Math.round(p.x)},${Math.round(p.y)} \u2192 ${Math.round(m.x)},${Math.round(m.y)})`:ee.length>0?`${g===`arrow`?`Arrow`:`Drawing`} near **${ee.join(`**, **`)}** (region: ${S})`:`Drawing at ${S}`,r.push(C)}t&&(t.style.visibility=``),r.length>0&&(n+=`
**Drawings:**
`,r.forEach((e,t)=>{n+=`${t+1}. ${e}
`}))}if((R.length>0||t&&bt)&&(n+=`
`+dr(R,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:ft,wireframePurpose:bt||void 0},ln.outputDetail)),z){let e=fr(z,ln.outputDetail,{width:window.innerWidth,height:window.innerHeight});e&&(n+=`
`+e)}if(l)try{await navigator.clipboard.writeText(n)}catch{}s?.(n),_e(!0),N(()=>_e(!1),2e3),ln.autoClearAfterCopy&&N(()=>$r(),500)},[_,Kt,R,z,ft,it,vt,bt,U,ln.outputDetail,Dn,ln.autoClearAfterCopy,$r,l,s]),ti=(0,C.useCallback)(async()=>{let e=typeof window<`u`?window.location.pathname+window.location.search+window.location.hash:U,t=Oi(_,e,ln.outputDetail);if(!t&&R.length===0&&!z)return;if(t||=`## Page Feedback: ${e}
`,R.length>0&&(t+=`
`+dr(R,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:ft,wireframePurpose:bt||void 0},ln.outputDetail)),z){let e=fr(z,ln.outputDetail,{width:window.innerWidth,height:window.innerHeight});e&&(t+=`
`+e)}c&&c(t,_),j(`sending`),await new Promise(e=>N(e,150));let n=await Kr(`submit`,{output:t,annotations:_},!0);j(n?`sent`:`failed`),N(()=>j(`idle`),2500),n&&ln.autoClearAfterCopy&&N(()=>$r(),500)},[c,Kr,_,R,z,ft,vt,U,ln.outputDetail,Dn,ln.autoClearAfterCopy,$r]);(0,C.useEffect)(()=>{if(!Rn)return;let e=e=>{let t=e.clientX-Rn.x,n=e.clientY-Rn.y,r=Math.sqrt(t*t+n*n);if(!Fn&&r>10&&In(!0),Fn||r>10){let e=Rn.toolbarX+t,r=Rn.toolbarY+n,i=20-(337-(h?jn===`connected`?297:257:44)),a=window.innerWidth-20-337;e=Math.max(i,Math.min(a,e)),r=Math.max(20,Math.min(window.innerHeight-44-20,r)),Pn({x:e,y:r})}},t=()=>{Fn&&(Bn.current=!0),In(!1),zn(null)};return document.addEventListener(`mousemove`,e),document.addEventListener(`mouseup`,t),()=>{document.removeEventListener(`mousemove`,e),document.removeEventListener(`mouseup`,t)}},[Rn,Fn,h,jn]);let ni=(0,C.useCallback)(e=>{if(e.target.closest(`button`)||e.target.closest(`[data-agentation-settings-panel]`))return;let t=e.currentTarget.parentElement;if(!t)return;let n=t.getBoundingClientRect(),r=Nn?.x??n.left,i=Nn?.y??n.top;zn({x:e.clientX,y:e.clientY,toolbarX:r,toolbarY:i})},[Nn]);if((0,C.useEffect)(()=>{if(!Nn)return;let e=()=>{let e=Nn.x,t=Nn.y,n=20-(337-(h?jn===`connected`?297:257:44)),r=window.innerWidth-20-337;e=Math.max(n,Math.min(r,e)),t=Math.max(20,Math.min(window.innerHeight-44-20,t)),(e!==Nn.x||t!==Nn.y)&&Pn({x:e,y:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[Nn,h,jn]),(0,C.useEffect)(()=>{let e=e=>{let t=e.target,n=t.tagName===`INPUT`||t.tagName===`TEXTAREA`||t.isContentEditable;if(e.key===`Escape`){if(it){lt?ut(null):wr();return}if(Wt){Gt(!1);return}if(tn.length>0){rn([]);return}A||h&&(H(),g(!1))}if((e.metaKey||e.ctrlKey)&&e.shiftKey&&(e.key===`f`||e.key===`F`)){e.preventDefault(),H(),h?Or():g(!0);return}if(!(n||e.metaKey||e.ctrlKey)&&((e.key===`p`||e.key===`P`)&&(e.preventDefault(),H(),Lr()),(e.key===`l`||e.key===`L`)&&(e.preventDefault(),H(),Wt&&Gt(!1),Xe&&Ze(!1),A&&Jr(),it?wr():at(!0)),(e.key===`h`||e.key===`H`)&&_.length>0&&(e.preventDefault(),H(),b(e=>!e)),(e.key===`c`||e.key===`C`)&&(_.length>0||R.length>0||z)&&(e.preventDefault(),H(),ei()),(e.key===`x`||e.key===`X`)&&(_.length>0||R.length>0||z)&&(e.preventDefault(),H(),$r(),R.length>0&&ct([]),z&&wt(null)),e.key===`s`||e.key===`S`)){let t=$i(ln.webhookUrl)||$i(p||``);_.length>0&&t&&ve===`idle`&&(e.preventDefault(),H(),ti())}};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[h,Wt,it,lt,R,z,A,_.length,ln.webhookUrl,p,ve,ti,Lr,ei,$r,tn]),!L||x)return null;let ri=_.length>0,ii=_.filter(e=>!Un.has(e.id)&&e.kind!==`placement`&&e.kind!==`rearrange`),ai=ii.length>0,oi=_.filter(e=>Un.has(e.id)),si=e=>{let t=e.x/100*window.innerWidth,n=typeof e.y==`string`?parseFloat(e.y):e.y,r={};window.innerHeight-n-22-10<80&&(r.top=`auto`,r.bottom=`calc(100% + 10px)`);let i=t-200/2;return i<10?r.left=`calc(50% + ${10-i}px)`:i+200>window.innerWidth-10&&(r.left=`calc(50% - ${i+200-(window.innerWidth-10)}px)`),r};return(0,ne.createPortal)((0,w.jsxs)(`div`,{ref:T,style:{display:`contents`},"data-agentation-theme":gn?`dark`:`light`,"data-agentation-accent":ln.annotationColorId,"data-agentation-root":``,children:[(0,w.jsx)(`div`,{className:`${G.toolbar}${m?` ${m}`:``}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:Nn?{left:Nn.x,top:Nn.y,right:`auto`,bottom:`auto`}:void 0,children:(0,w.jsxs)(`div`,{className:`${G.toolbarContainer} ${h?G.expanded:G.collapsed} ${vn?G.entrance:``} ${te?G.hiding:``} ${!ln.webhooksEnabled&&($i(ln.webhookUrl)||$i(p||``))?G.serverConnected:``}`,onClick:h?void 0:e=>{if(Bn.current){Bn.current=!1,e.preventDefault();return}g(!0)},onMouseDown:ni,role:h?void 0:`button`,tabIndex:h?-1:0,title:h?void 0:`Start feedback mode`,children:[(0,w.jsxs)(`div`,{className:`${G.toggleContent} ${h?G.hidden:G.visible}`,children:[(0,w.jsx)(se,{size:24}),ai&&(0,w.jsx)(`span`,{className:`${G.badge} ${h?G.fadeOut:``} ${vn?G.entrance:``}`,children:ii.length})]}),(0,w.jsxs)(`div`,{className:`${G.controlsContent} ${h?G.visible:G.hidden} ${Nn&&Nn.y<100?G.tooltipBelow:``} ${nt||Xe?G.tooltipsHidden:``} ${Qt?G.tooltipsInSession:``}`,onMouseEnter:on,onMouseLeave:sn,children:[(0,w.jsxs)(`div`,{className:`${G.buttonWrapper} ${Nn&&Nn.x<120?G.buttonWrapperAlignLeft:``}`,children:[(0,w.jsx)(`button`,{className:G.controlButton,onClick:e=>{e.stopPropagation(),H(),Lr()},"data-active":Je,children:(0,w.jsx)(ue,{size:24,isPaused:Je})}),(0,w.jsxs)(`span`,{className:G.buttonTooltip,children:[Je?`Resume animations`:`Pause animations`,(0,w.jsx)(`span`,{className:G.shortcut,children:`P`})]})]}),(0,w.jsxs)(`div`,{className:G.buttonWrapper,children:[(0,w.jsx)(`button`,{className:`${G.controlButton} ${gn?``:G.light}`,onClick:e=>{e.stopPropagation(),H(),Wt&&Gt(!1),Xe&&Ze(!1),A&&Jr(),it?wr():at(!0)},"data-active":it,style:it&&ft?{color:`#f97316`,background:`rgba(249, 115, 22, 0.25)`}:void 0,children:(0,w.jsx)(ye,{size:21})}),(0,w.jsxs)(`span`,{className:G.buttonTooltip,children:[it?`Exit layout mode`:`Layout mode`,(0,w.jsx)(`span`,{className:G.shortcut,children:`L`})]})]}),(0,w.jsxs)(`div`,{className:G.buttonWrapper,children:[(0,w.jsx)(`button`,{className:G.controlButton,onClick:e=>{e.stopPropagation(),H(),b(!y)},disabled:!ri||it,children:(0,w.jsx)(le,{size:24,isOpen:y})}),(0,w.jsxs)(`span`,{className:G.buttonTooltip,children:[y?`Hide markers`:`Show markers`,(0,w.jsx)(`span`,{className:G.shortcut,children:`H`})]})]}),(0,w.jsxs)(`div`,{className:G.buttonWrapper,children:[(0,w.jsx)(`button`,{className:`${G.controlButton} ${ge?G.statusShowing:``}`,onClick:e=>{e.stopPropagation(),H(),ei()},disabled:it&&ft?R.length===0&&!z?.sections?.length:!ri&&Kt.length===0&&R.length===0&&!z?.sections?.length,"data-active":ge,children:(0,w.jsx)(k,{size:24,copied:ge,tint:it&&ft&&(R.length>0||z?.sections?.length)?`#f97316`:void 0})}),(0,w.jsxs)(`span`,{className:G.buttonTooltip,children:[it&&ft?`Copy layout`:`Copy feedback`,(0,w.jsx)(`span`,{className:G.shortcut,children:`C`})]})]}),(0,w.jsxs)(`div`,{className:`${G.buttonWrapper} ${G.sendButtonWrapper} ${h&&!ln.webhooksEnabled&&($i(ln.webhookUrl)||$i(p||``))?G.sendButtonVisible:``}`,children:[(0,w.jsxs)(`button`,{className:`${G.controlButton} ${ve===`sent`||ve===`failed`?G.statusShowing:``}`,onClick:e=>{e.stopPropagation(),H(),ti()},disabled:!ri||!$i(ln.webhookUrl)&&!$i(p||``)||ve===`sending`,"data-no-hover":ve===`sent`||ve===`failed`,tabIndex:$i(ln.webhookUrl)||$i(p||``)?0:-1,children:[(0,w.jsx)(ce,{size:24,state:ve}),ri&&ve===`idle`&&(0,w.jsx)(`span`,{className:G.buttonBadge,children:_.length})]}),(0,w.jsxs)(`span`,{className:G.buttonTooltip,children:[`Send Annotations`,(0,w.jsx)(`span`,{className:G.shortcut,children:`S`})]})]}),(0,w.jsxs)(`div`,{className:G.buttonWrapper,children:[(0,w.jsx)(`button`,{className:G.controlButton,onClick:e=>{e.stopPropagation(),H(),$r()},disabled:!ri&&Kt.length===0&&R.length===0&&!z?.sections?.length,"data-danger":!0,children:(0,w.jsx)(fe,{size:24})}),(0,w.jsxs)(`span`,{className:G.buttonTooltip,children:[`Clear all`,(0,w.jsx)(`span`,{className:G.shortcut,children:`X`})]})]}),(0,w.jsxs)(`div`,{className:G.buttonWrapper,children:[(0,w.jsx)(`button`,{className:G.controlButton,onClick:e=>{e.stopPropagation(),H(),it&&wr(),Ze(!Xe)},children:(0,w.jsx)(de,{size:24})}),u&&jn!==`disconnected`&&(0,w.jsx)(`span`,{className:`${G.mcpIndicator} ${G[jn]} ${Xe?G.hidden:``}`,title:jn===`connected`?`MCP Connected`:`MCP Connecting...`}),(0,w.jsx)(`span`,{className:G.buttonTooltip,children:`Settings`})]}),(0,w.jsx)(`div`,{className:G.divider}),(0,w.jsxs)(`div`,{className:`${G.buttonWrapper} ${Nn&&typeof window<`u`&&Nn.x>window.innerWidth-120?G.buttonWrapperAlignRight:``}`,children:[(0,w.jsx)(`button`,{className:G.controlButton,onClick:e=>{e.stopPropagation(),H(),Or()},children:(0,w.jsx)(me,{size:24})}),(0,w.jsxs)(`span`,{className:G.buttonTooltip,children:[`Exit`,(0,w.jsx)(`span`,{className:G.shortcut,children:`Esc`})]})]})]}),(0,w.jsx)(cn,{visible:it&&h,activeType:lt,onSelect:e=>{ut(lt===e?null:e)},isDarkMode:gn,sectionCount:z?.sections.length??0,onDetectSections:()=>{let e=Ln(),t=z?.sections??[],n=new Set(t.map(e=>e.selector)),r=e.filter(e=>!n.has(e.selector));wt({sections:[...t,...r],originalOrder:[...z?.originalOrder??[],...r.map(e=>e.id)],detectedAt:Date.now()})},placementCount:R.length,onClearPlacements:()=>{Nt(e=>e+1),Ft(e=>e+1),N(()=>{wt({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:ft,onBlankCanvasChange:e=>{let t={sections:[],originalOrder:[],detectedAt:Date.now()};e?(Et.current={rearrange:z,placements:R},wt(Dt.current.rearrange||t),ct(Dt.current.placements),ut(null)):(Dt.current={rearrange:z,placements:R},wt(Et.current.rearrange||t),ct(Et.current.placements)),pt(e)},wireframePurpose:bt,onWireframePurposeChange:xt,Tooltip:Fe,onDragStart:(e,t)=>{t.preventDefault();let n=P[e],r=null,i=!1,a=t.clientX,o=t.clientY,s=t.target.closest(`[data-feedback-toolbar]`)?.getBoundingClientRect().top??window.innerHeight,c=t=>{let c=t.clientX-a,l=t.clientY-o;if(!i&&(Math.abs(c)>4||Math.abs(l)>4)&&(i=!0,r=document.createElement(`div`),r.className=`${B.dragPreview}${ft?` ${B.dragPreviewWireframe}`:``}`,document.body.appendChild(r)),!r)return;let u=Math.max(0,s-t.clientY),d=1-(1-Math.min(1,u/180))**2,f=Math.min(140,n.width*.18),p=Math.min(90,n.height*.18),m=28+(f-28)*d,h=20+(p-20)*d;r.style.width=`${m}px`,r.style.height=`${h}px`,r.style.left=`${t.clientX-m/2}px`,r.style.top=`${t.clientY-h/2}px`,r.style.opacity=`${.5+.5*d}`,r.textContent=d>.25?e:``},l=t=>{if(window.removeEventListener(`mousemove`,c),window.removeEventListener(`mouseup`,l),r&&document.body.removeChild(r),i){let r=n.width,i=n.height,a=window.scrollY,o=Math.max(0,t.clientX-r/2),s=Math.max(0,t.clientY+a-i/2),c={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:e,x:o,y:s,width:r,height:i,scrollY:a,timestamp:Date.now()};ct(e=>[...e,c]),ut(null),It.current=new Set,kt(e=>e+1)}};window.addEventListener(`mousemove`,c),window.addEventListener(`mouseup`,l)}}),(0,w.jsx)(Yi,{settings:ln,onSettingsChange:e=>dn(t=>({...t,...e})),isDarkMode:gn,onToggleTheme:bn,isDevMode:Sn,connectionStatus:jn,endpoint:u,isVisible:Qe,toolbarNearBottom:!!Nn&&Nn.y<230,settingsPage:et,onSettingsPageChange:tt,onHideToolbar:pr})]})}),(it||ot)&&(0,w.jsx)(`div`,{className:`${B.blankCanvas} ${mt?B.visible:``} ${St?B.gridActive:``}`,style:{"--canvas-opacity":gt},"data-feedback-toolbar":!0}),it&&ft&&mt&&(0,w.jsxs)(`div`,{className:B.wireframeNotice,"data-feedback-toolbar":!0,children:[(0,w.jsxs)(`div`,{className:B.wireframeOpacityRow,children:[(0,w.jsx)(`span`,{className:B.wireframeOpacityLabel,children:`Toggle Opacity`}),(0,w.jsx)(`input`,{type:`range`,className:B.wireframeOpacitySlider,min:0,max:1,step:.01,value:gt,onChange:e=>_t(Number(e.target.value))})]}),(0,w.jsxs)(`div`,{className:B.wireframeNoticeTitleRow,children:[(0,w.jsx)(`span`,{className:B.wireframeNoticeTitle,children:`Wireframe Mode`}),(0,w.jsx)(`span`,{className:B.wireframeNoticeDivider}),(0,w.jsx)(`button`,{className:B.wireframeStartOver,onClick:()=>{Nt(e=>e+1),wt({sections:[],originalOrder:[],detectedAt:Date.now()}),Dt.current={rearrange:null,placements:[]},xt(``),jr(U)},children:`Start Over`})]}),`Drag components onto the canvas.`,(0,w.jsx)(`br`,{}),`Copied output will only include the wireframed layout.`]}),(it||ot)&&(0,w.jsx)(nn,{placements:R,onChange:ct,activeComponent:ot?null:lt,onActiveComponentChange:ut,isDarkMode:gn,exiting:ot,onInteractionChange:Ct,passthrough:!lt,extraSnapRects:z?.sections.map(e=>e.currentRect),deselectSignal:Ot,clearSignal:Mt,wireframe:ft,onSelectionChange:(e,t)=>{It.current=e,t||(Lt.current=new Set,jt(e=>e+1))},onDragMove:(e,t)=>{let n=Lt.current;if(!(!n.size||!z)){if(!Rt.current){Rt.current=new Map;for(let e of z.sections)n.has(e.id)&&Rt.current.set(e.id,{x:e.currentRect.x,y:e.currentRect.y})}for(let r of z.sections){if(!n.has(r.id)||!Rt.current.get(r.id))continue;let i=document.querySelector(`[data-rearrange-section="${r.id}"]`);i&&(i.style.transform=`translate(${e}px, ${t}px)`)}}},onDragEnd:(e,t,n)=>{let r=Lt.current,i=Rt.current;if(Rt.current=null,!(!r.size||!z||!i)){for(let e of r){let t=document.querySelector(`[data-rearrange-section="${e}"]`);t&&(t.style.transform=``)}n&&wt(n=>n&&{...n,sections:n.sections.map(n=>{let r=i.get(n.id);return r?{...n,currentRect:{...n.currentRect,x:Math.max(0,r.x+e),y:Math.max(0,r.y+t)}}:n})})}}}),(it||ot)&&z&&(0,w.jsx)(qn,{rearrangeState:z,onChange:wt,isDarkMode:gn,exiting:ot,blankCanvas:ft,extraSnapRects:R.map(e=>({x:e.x,y:e.y,width:e.width,height:e.height})),clearSignal:Pt,deselectSignal:At,onSelectionChange:(e,t)=>{Lt.current=e,t||(It.current=new Set,kt(e=>e+1))},onDragMove:(e,t)=>{let n=It.current;if(n.size){if(!Rt.current){Rt.current=new Map;for(let e of R)n.has(e.id)&&Rt.current.set(e.id,{x:e.x,y:e.y})}for(let r of n){let n=document.querySelector(`[data-design-placement="${r}"]`);n&&(n.style.transform=`translate(${e}px, ${t}px)`)}}},onDragEnd:(e,t,n)=>{let r=It.current,i=Rt.current;if(Rt.current=null,!(!r.size||!i)){for(let e of r){let t=document.querySelector(`[data-design-placement="${e}"]`);t&&(t.style.transform=``)}n&&ct(n=>n.map(n=>{let r=i.get(n.id);return r?{...n,x:Math.max(0,r.x+e),y:Math.max(0,r.y+t)}:n}))}}}),(0,w.jsx)(`canvas`,{ref:Zt,className:`${G.drawCanvas} ${Wt?G.active:``}`,style:{opacity:+!!lr,transition:`opacity 0.15s ease`},"data-feedback-toolbar":!0}),(0,w.jsxs)(`div`,{className:G.markersLayer,"data-feedback-toolbar":!0,children:[re&&ii.filter(e=>!e.isFixed).map((e,t,n)=>(0,w.jsx)(Mi,{annotation:e,globalIndex:ii.findIndex(t=>t.id===e.id),layerIndex:t,layerSize:n.length,isExiting:ie,isClearing:Se,isAnimated:Vn.has(e.id),isHovered:!ie&&M===e.id,isDeleting:Pe===e.id,isEditingAny:!!I,renumberFrom:Le,markerClickBehavior:ln.markerClickBehavior,tooltipStyle:si(e),onHoverEnter:e=>!ie&&e.id!==ir.current&&Xr(e),onHoverLeave:()=>Xr(null),onClick:e=>ln.markerClickBehavior===`delete`?Yr(e.id):Gr(e),onContextMenu:Gr},e.id)),re&&!ie&&oi.filter(e=>!e.isFixed).map(e=>(0,w.jsx)(Pi,{annotation:e},e.id))]}),(0,w.jsxs)(`div`,{className:G.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[re&&ii.filter(e=>e.isFixed).map((e,t,n)=>(0,w.jsx)(Mi,{annotation:e,globalIndex:ii.findIndex(t=>t.id===e.id),layerIndex:t,layerSize:n.length,isExiting:ie,isClearing:Se,isAnimated:Vn.has(e.id),isHovered:!ie&&M===e.id,isDeleting:Pe===e.id,isEditingAny:!!I,renumberFrom:Le,markerClickBehavior:ln.markerClickBehavior,tooltipStyle:si(e),onHoverEnter:e=>!ie&&e.id!==ir.current&&Xr(e),onHoverLeave:()=>Xr(null),onClick:e=>ln.markerClickBehavior===`delete`?Yr(e.id):Gr(e),onContextMenu:Gr},e.id)),re&&!ie&&oi.filter(e=>e.isFixed).map(e=>(0,w.jsx)(Pi,{annotation:e,fixed:!0},e.id))]}),h&&(0,w.jsxs)(`div`,{className:G.overlay,"data-feedback-toolbar":!0,style:A||I?{zIndex:99999}:void 0,children:[D?.rect&&!A&&!Ge&&!Xn&&(0,w.jsx)(`div`,{className:`${G.hoverHighlight} ${G.enter}`,style:{left:D.rect.left,top:D.rect.top,width:D.rect.width,height:D.rect.height,borderColor:`color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)`}}),tn.filter(e=>document.contains(e.element)).map((e,t)=>{let n=e.element.getBoundingClientRect(),r=tn.length>1;return(0,w.jsx)(`div`,{className:r?G.multiSelectOutline:G.singleSelectOutline,style:{position:`fixed`,left:n.left,top:n.top,width:n.width,height:n.height,...r?{}:{borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}}},t)}),M&&!A&&(()=>{let e=_.find(e=>e.id===M);if(!e?.boundingBox)return null;if(e.elementBoundingBoxes?.length)return Me.length>0?Me.filter(e=>document.contains(e)).map((e,t)=>{let n=e.getBoundingClientRect();return(0,w.jsx)(`div`,{className:`${G.multiSelectOutline} ${G.enter}`,style:{left:n.left,top:n.top,width:n.width,height:n.height}},`hover-outline-live-${t}`)}):e.elementBoundingBoxes.map((e,t)=>(0,w.jsx)(`div`,{className:`${G.multiSelectOutline} ${G.enter}`,style:{left:e.x,top:e.y-Ue,width:e.width,height:e.height}},`hover-outline-${t}`));let t=ke&&document.contains(ke)?ke.getBoundingClientRect():null,n=t?{x:t.left,y:t.top,width:t.width,height:t.height}:{x:e.boundingBox.x,y:e.isFixed?e.boundingBox.y:e.boundingBox.y-Ue,width:e.boundingBox.width,height:e.boundingBox.height},r=e.isMultiSelect;return(0,w.jsx)(`div`,{className:`${r?G.multiSelectOutline:G.singleSelectOutline} ${G.enter}`,style:{left:n.x,top:n.y,width:n.width,height:n.height,...r?{}:{borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}}})})(),D&&!A&&!Ge&&!Xn&&(0,w.jsxs)(`div`,{className:`${G.hoverTooltip} ${G.enter}`,style:{left:Math.max(8,Math.min(O.x,window.innerWidth-100)),top:Math.max(O.y-(D.reactComponents?48:32),8)},children:[D.reactComponents&&(0,w.jsx)(`div`,{className:G.hoverReactPath,children:D.reactComponents}),(0,w.jsx)(`div`,{className:G.hoverElementName,children:D.elementName})]}),A&&(0,w.jsxs)(w.Fragment,{children:[A.multiSelectElements?.length?A.multiSelectElements.filter(e=>document.contains(e)).map((e,t)=>{let n=e.getBoundingClientRect();return(0,w.jsx)(`div`,{className:`${G.multiSelectOutline} ${Gn?G.exit:G.enter}`,style:{left:n.left,top:n.top,width:n.width,height:n.height}},`pending-multi-${t}`)}):A.targetElement&&document.contains(A.targetElement)?(()=>{let e=A.targetElement.getBoundingClientRect();return(0,w.jsx)(`div`,{className:`${G.singleSelectOutline} ${Gn?G.exit:G.enter}`,style:{left:e.left,top:e.top,width:e.width,height:e.height,borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}})})():A.boundingBox&&(0,w.jsx)(`div`,{className:`${A.isMultiSelect?G.multiSelectOutline:G.singleSelectOutline} ${Gn?G.exit:G.enter}`,style:{left:A.boundingBox.x,top:A.boundingBox.y-Ue,width:A.boundingBox.width,height:A.boundingBox.height,...A.isMultiSelect?{}:{borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}}}),(()=>{let e=A.x,t=A.isFixed?A.y:A.y-Ue;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(Ni,{x:e,y:t,isMultiSelect:A.isMultiSelect,isExiting:Gn}),(0,w.jsx)(Ae,{ref:or,element:A.element,selectedText:A.selectedText,computedStyles:A.computedStylesObj,placeholder:A.element===`Area selection`?`What should change in this area?`:A.isMultiSelect?`Feedback for this group of elements...`:`What should change?`,onSubmit:qr,onCancel:Jr,isExiting:Gn,lightMode:!gn,accentColor:A.isMultiSelect?`var(--agentation-color-green)`:`var(--agentation-color-accent)`,style:{left:Math.max(160,Math.min(window.innerWidth-160,e/100*window.innerWidth)),...t>window.innerHeight-290?{bottom:window.innerHeight-t+20}:{top:t+20}}})]})})()]}),I&&(0,w.jsxs)(w.Fragment,{children:[I.elementBoundingBoxes?.length?Ve.length>0?Ve.filter(e=>document.contains(e)).map((e,t)=>{let n=e.getBoundingClientRect();return(0,w.jsx)(`div`,{className:`${G.multiSelectOutline} ${G.enter}`,style:{left:n.left,top:n.top,width:n.width,height:n.height}},`edit-multi-live-${t}`)}):I.elementBoundingBoxes.map((e,t)=>(0,w.jsx)(`div`,{className:`${G.multiSelectOutline} ${G.enter}`,style:{left:e.x,top:e.y-Ue,width:e.width,height:e.height}},`edit-multi-${t}`)):(()=>{let e=ze&&document.contains(ze)?ze.getBoundingClientRect():null,t=e?{x:e.left,y:e.top,width:e.width,height:e.height}:I.boundingBox?{x:I.boundingBox.x,y:I.isFixed?I.boundingBox.y:I.boundingBox.y-Ue,width:I.boundingBox.width,height:I.boundingBox.height}:null;return t?(0,w.jsx)(`div`,{className:`${I.isMultiSelect?G.multiSelectOutline:G.singleSelectOutline} ${G.enter}`,style:{left:t.x,top:t.y,width:t.width,height:t.height,...I.isMultiSelect?{}:{borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}}}):null})(),(0,w.jsx)(Ae,{ref:sr,element:I.element,selectedText:I.selectedText,computedStyles:wn(I.computedStyles),placeholder:`Edit your feedback...`,initialValue:I.comment,submitLabel:`Save`,onSubmit:Zr,onCancel:Qr,onDelete:()=>Yr(I.id),isExiting:Jn,lightMode:!gn,accentColor:I.isMultiSelect?`var(--agentation-color-green)`:`var(--agentation-color-accent)`,style:(()=>{let e=I.isFixed?I.y:I.y-Ue;return{left:Math.max(160,Math.min(window.innerWidth-160,I.x/100*window.innerWidth)),...e>window.innerHeight-290?{bottom:window.innerHeight-e+20}:{top:e+20}}})()})]}),Xn&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(`div`,{ref:er,className:G.dragSelection}),(0,w.jsx)(`div`,{ref:tr,className:G.highlightsContainer})]})]})]}),document.body)}function aa(){return(0,w.jsx)(ia,{onSubmit:(e,t)=>{console.log(`[Agentation] Annotations submitted:`,t)}})}function oa(){let e=document.createElement(`div`);e.id=`agentation-root`,document.body.appendChild(e),(0,S.createRoot)(e).render((0,w.jsx)(aa,{}))}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,oa):oa()})();