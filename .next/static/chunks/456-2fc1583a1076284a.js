(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[456],{6759:function(e,t,n){"use strict";n.d(t,{ClientClerkProvider:function(){return U}});var r=n(7787);n(8758);var i=n(7481),o=(0,i.createContext)(null);(0,i.createContext)(null);var a=n(2761);let u="undefined"!=typeof window?i.useLayoutEffect:i.useEffect,l=i.createContext(void 0);l.displayName="ClerkNextOptionsCtx";let s=()=>i.useContext(l).value,c=e=>{let{children:t,options:n}=e;return i.createElement(l.Provider,{value:{value:n}},t)};var d=n(1296),f=n(2044),_=n.n(f);function p(e){let{publishableKey:t,clerkJSUrl:n,clerkJSVersion:o,clerkJSVariant:a,nonce:u}=s(),{domain:l,proxyUrl:c}=(0,r.ll)(),f={domain:l,proxyUrl:c,publishableKey:t,clerkJSUrl:n,clerkJSVersion:o,clerkJSVariant:a,nonce:u},p=(0,d.wE)(f),h="app"===e.router?"script":_();return i.createElement(h,{src:p,"data-clerk-js-script":!0,async:!0,defer:"pages"!==e.router&&void 0,crossOrigin:"anonymous",strategy:"pages"===e.router?"beforeInteractive":void 0,...(0,d.iv)(f)})}var h=n(7556),v=n(1872),E=n(3124),g=n(2749);g.env.NEXT_PUBLIC_CLERK_JS_VERSION,g.env.NEXT_PUBLIC_CLERK_JS_URL,g.env.CLERK_API_VERSION,g.env.CLERK_SECRET_KEY,g.env.CLERK_ENCRYPTION_KEY,g.env.CLERK_API_URL||(e=>{var t;let n=null==(t=(0,v.nQ)(e))?void 0:t.frontendApi;return(null==n?void 0:n.startsWith("clerk."))&&E.mv.some(e=>null==n?void 0:n.endsWith(e))?E.Xv:E.iF.some(e=>null==n?void 0:n.endsWith(e))?E.Fo:E.cM.some(e=>null==n?void 0:n.endsWith(e))?E.Iq:E.Xv})("pk_test_YXdhcmUtbWVlcmthdC0zNC5jbGVyay5hY2NvdW50cy5kZXYk"),g.env.NEXT_PUBLIC_CLERK_DOMAIN,g.env.NEXT_PUBLIC_CLERK_PROXY_URL,(0,h.fQ)(g.env.NEXT_PUBLIC_CLERK_IS_SATELLITE);let m={name:"@clerk/nextjs",version:"5.7.1",environment:"production"};(0,h.fQ)(g.env.NEXT_PUBLIC_CLERK_TELEMETRY_DISABLED),(0,h.fQ)(g.env.NEXT_PUBLIC_CLERK_TELEMETRY_DEBUG);var y=n(2749);let w=e=>{var t;return{...e,publishableKey:e.publishableKey||"pk_test_YXdhcmUtbWVlcmthdC0zNC5jbGVyay5hY2NvdW50cy5kZXYk",clerkJSUrl:e.clerkJSUrl||y.env.NEXT_PUBLIC_CLERK_JS_URL,clerkJSVersion:e.clerkJSVersion||y.env.NEXT_PUBLIC_CLERK_JS_VERSION,proxyUrl:e.proxyUrl||y.env.NEXT_PUBLIC_CLERK_PROXY_URL||"",domain:e.domain||y.env.NEXT_PUBLIC_CLERK_DOMAIN||"",isSatellite:e.isSatellite||(0,h.fQ)(y.env.NEXT_PUBLIC_CLERK_IS_SATELLITE),signInUrl:e.signInUrl||"/sign-in",signUpUrl:e.signUpUrl||"/sign-up",signInForceRedirectUrl:e.signInForceRedirectUrl||y.env.NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL||"",signUpForceRedirectUrl:e.signUpForceRedirectUrl||y.env.NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL||"",signInFallbackRedirectUrl:e.signInFallbackRedirectUrl||y.env.NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL||"",signUpFallbackRedirectUrl:e.signUpFallbackRedirectUrl||y.env.NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL||"",afterSignInUrl:e.afterSignInUrl||"/",afterSignUpUrl:e.afterSignUpUrl||"/",telemetry:null!=(t=e.telemetry)?t:{disabled:(0,h.fQ)(y.env.NEXT_PUBLIC_CLERK_TELEMETRY_DISABLED),debug:(0,h.fQ)(y.env.NEXT_PUBLIC_CLERK_TELEMETRY_DEBUG)},sdkMetadata:m}};n(957);var C=(0,n(1690).$)("dfb6bd19c87de8eac30f65969f597ff5e8281549");let L=e=>{var t;return null!=window.__clerk_internal_navigations||(window.__clerk_internal_navigations={}),null!=(t=window.__clerk_internal_navigations)[e]||(t[e]={}),window.__clerk_internal_navigations[e]},R=e=>{let{windowNav:t,routerNav:n,name:r}=e,o=(0,a.usePathname)(),[u,l]=(0,i.useTransition)();t&&(L(r).fun=(e,i)=>new Promise(o=>{var a,u;null!=(a=L(r)).promisesBuffer||(a.promisesBuffer=[]),null==(u=L(r).promisesBuffer)||u.push(o),l(()=>{var r,o,a;(null==(r=null==i?void 0:i.__internal_metadata)?void 0:r.navigationType)==="internal"?t((null!=(a=null==(o=window.next)?void 0:o.version)?a:"")<"14.1.0"?history.state:null,"",e):n(e)})}));let s=()=>{var e;null==(e=L(r).promisesBuffer)||e.forEach(e=>e()),L(r).promisesBuffer=[]};return(0,i.useEffect)(()=>(s(),s),[]),(0,i.useEffect)(()=>{u||s()},[o,u]),(0,i.useCallback)(e=>L(r).fun(e),[])},I=()=>{let e=(0,a.useRouter)();return R({windowNav:"undefined"!=typeof window?window.history.pushState.bind(window.history):void 0,routerNav:e.push.bind(e),name:"push"})},b=()=>{let e=(0,a.useRouter)();return R({windowNav:"undefined"!=typeof window?window.history.replaceState.bind(window.history):void 0,routerNav:e.replace.bind(e),name:"replace"})},S=()=>{let e=(0,a.useRouter)(),t=(0,a.usePathname)(),n="undefined"==typeof window?new URLSearchParams:(0,a.useSearchParams)(),r="undefined"!=typeof window&&window.next&&window.next.version>="14.1.0";return{mode:"path",name:"NextRouter",push:t=>e.push(t),replace:t=>r?window.history.replaceState(null,"",t):e.replace(t),shallowPush(t){r?window.history.pushState(null,"",t):e.push(t,{})},pathname:()=>t,searchParams:()=>n}},U=e=>{let{__unstable_invokeMiddlewareOnAuthStateChange:t=!0,children:n}=e,l=(0,a.useRouter)(),s=S(),d=I(),f=b(),[_,h]=(0,i.useTransition)();(0,i.useEffect)(()=>{var e;_||null==(e=window.__clerk_internal_invalidateCachePromise)||e.call(window)},[_]),u(()=>{window.__unstable__onBeforeSetActive=()=>new Promise(e=>{window.__clerk_internal_invalidateCachePromise=e,h(()=>{var e;(null==(e=window.next)?void 0:e.version)&&"string"==typeof window.next.version&&window.next.version.startsWith("13")?l.refresh():C()})}),window.__unstable__onAfterSetActive=()=>{if(t)return l.refresh()}},[]);let v=w({...e,routerPush:d,routerReplace:f});return i.createElement(c,{options:v},i.createElement(r.El,{...v},i.createElement(p,{router:"app"}),i.createElement(o.Provider,{value:s},n)))}},29:function(e,t,n){"use strict";n.d(t,{AuthenticateWithRedirectCallback:function(){return r.vn},ClerkLoaded:function(){return r.a7},ClerkLoading:function(){return r.qI},RedirectToCreateOrganization:function(){return r.gM},RedirectToOrganizationProfile:function(){return r.yB},RedirectToSignIn:function(){return r.N1},RedirectToSignUp:function(){return r.C2},RedirectToUserProfile:function(){return r.sO}});var r=n(7787);n(1296)},9420:function(e,t,n){"use strict";n.d(t,{useAuth:function(){return r.aC},useClerk:function(){return r.ll},useEmailLink:function(){return r.E2},useOrganization:function(){return r.o8},useOrganizationList:function(){return r.eW},useSession:function(){return r.kP},useSessionList:function(){return r.xo},useSignIn:function(){return r.zq},useSignUp:function(){return r.QS},useUser:function(){return r.aF}});var r=n(7787);n(7490)},6361:function(e,t,n){"use strict";n.d(t,{CreateOrganization:function(){return _},GoogleOneTap:function(){return r.Kb},OrganizationList:function(){return r.Bg},OrganizationProfile:function(){return p},OrganizationSwitcher:function(){return r.Li},SignIn:function(){return h},SignInButton:function(){return r.$d},SignInWithMetamaskButton:function(){return r.qu},SignOutButton:function(){return r.AM},SignUp:function(){return v},SignUpButton:function(){return r.gX},UserButton:function(){return r.l8},UserProfile:function(){return f}});var r=n(7787),i=n(7481),o=n(1296),a=n(2824),u=n(3361);let l=()=>({pagesRouter:(0,u.useRouter)()}),s=(e,t,n,o=!0)=>{let u=i.useRef(0),{pagesRouter:s}=l(),{session:c,isLoaded:d}=(0,r.kP)();(0,a.rx)()||i.useEffect(()=>{if(!d||n&&"path"!==n||o&&!c)return;let r=new AbortController,i=()=>{let n=s?`${t}/[[...index]].tsx`:`${t}/[[...rest]]/page.tsx`;throw Error(`
Clerk: The <${e}/> component is not configured correctly. The most likely reasons for this error are:

1. The "${t}" route is not a catch-all route.
It is recommended to convert this route to a catch-all route, eg: "${n}". Alternatively, you can update the <${e}/> component to use hash-based routing by setting the "routing" prop to "hash".

2. The <${e}/> component is mounted in a catch-all route, but all routes under "${t}" are protected by the middleware.
To resolve this, ensure that the middleware does not protect the catch-all route or any of its children. If you are using the "createRouteMatcher" helper, consider adding "(.*)" to the end of the route pattern, eg: "${t}(.*)". For more information, see: https://clerk.com/docs/references/nextjs/clerk-middleware#create-route-matcher
`)};return s?s.pathname.match(/\[\[\.\.\..+]]/)||i():(async()=>{let t;if(u.current++,!(u.current>1)){try{let n=`${window.location.origin}${window.location.pathname}/${e}_clerk_catchall_check_${Date.now()}`;t=await fetch(n,{signal:r.signal})}catch(e){}(null==t?void 0:t.status)===404&&i()}})(),()=>{u.current>1&&r.abort()}},[d])},c=()=>{let e=i.useRef(),{pagesRouter:t}=l();if(t)return e.current||(e.current=t.pathname.replace(/\/\[\[\.\.\..*/,"")),e.current;let r=n(2761).usePathname,o=n(2761).useParams,a=(r()||"").split("/").filter(Boolean),u=Object.values(o()||{}).filter(e=>Array.isArray(e)).flat(1/0);return e.current||(e.current=`/${a.slice(0,a.length-u.length).join("/")}`),e.current};function d(e,t,n=!0){let r=c(),i=(0,o.EJ)(e,t,{path:r});return s(e,r,i.routing,n),i}let f=Object.assign(e=>i.createElement(r.Iw,{...d("UserProfile",e)}),{...r.Iw}),_=e=>i.createElement(r.Gp,{...d("CreateOrganization",e)}),p=Object.assign(e=>i.createElement(r.A,{...d("OrganizationProfile",e)}),{...r.A}),h=e=>i.createElement(r.cL,{...d("SignIn",e,!1)}),v=e=>i.createElement(r.Mo,{...d("SignUp",e,!1)})},3361:function(e,t,n){e.exports=n(8853)},1690:function(e,t,n){"use strict";Object.defineProperty(t,"$",{enumerable:!0,get:function(){return i}});let r=n(957);function i(e){let{createServerReference:t}=n(3227);return t(e,r.callServer)}},8853:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useRouter",{enumerable:!0,get:function(){return o}});let r=n(7481),i=n(8086);function o(){return(0,r.useContext)(i.RouterContext)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2923:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},default:function(){return a},isEqualNode:function(){return o}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function i(e){let{type:t,props:n}=e,i=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let o=r[e]||e.toLowerCase();"script"===t&&("async"===o||"defer"===o||"noModule"===o)?i[o]=!!n[e]:i.setAttribute(o,n[e])}let{children:o,dangerouslySetInnerHTML:a}=n;return a?i.innerHTML=a.__html||"":o&&(i.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):""),i}function o(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function a(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,i="";if(r){let{children:e}=r.props;i="string"==typeof e?e:Array.isArray(e)?e.join(""):""}i!==document.title&&(document.title=i),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),a=Number(r.content),u=[];for(let t=0,n=r.previousElementSibling;t<a;t++,n=(null==n?void 0:n.previousElementSibling)||null){var l;(null==n?void 0:null==(l=n.tagName)?void 0:l.toLowerCase())===e&&u.push(n)}let s=t.map(i).filter(e=>{for(let t=0,n=u.length;t<n;t++)if(o(u[t],e))return u.splice(t,1),!1;return!0});u.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),s.forEach(e=>n.insertBefore(e,r)),r.content=(a-u.length+s.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2044:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return m},handleClientScriptLoad:function(){return v},initScriptLoader:function(){return E}});let r=n(2825),i=n(5683),o=n(6764),a=r._(n(8474)),u=i._(n(7481)),l=n(4860),s=n(2923),c=n(480),d=new Map,f=new Set,_=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],p=e=>{if(a.default.preinit){e.forEach(e=>{a.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},h=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:i=null,dangerouslySetInnerHTML:o,children:a="",strategy:u="afterInteractive",onError:l,stylesheets:c}=e,h=n||t;if(h&&f.has(h))return;if(d.has(t)){f.add(h),d.get(t).then(r,l);return}let v=()=>{i&&i(),f.add(h)},E=document.createElement("script"),g=new Promise((e,t)=>{E.addEventListener("load",function(t){e(),r&&r.call(this,t),v()}),E.addEventListener("error",function(e){t(e)})}).catch(function(e){l&&l(e)});for(let[n,r]of(o?(E.innerHTML=o.__html||"",v()):a?(E.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):"",v()):t&&(E.src=t,d.set(t,g)),Object.entries(e))){if(void 0===r||_.includes(n))continue;let e=s.DOMAttributeNames[n]||n.toLowerCase();E.setAttribute(e,r)}"worker"===u&&E.setAttribute("type","text/partytown"),E.setAttribute("data-nscript",u),c&&p(c),document.body.appendChild(E)};function v(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>h(e))}):h(e)}function E(e){e.forEach(v),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function g(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:i=null,strategy:s="afterInteractive",onError:d,stylesheets:_,...p}=e,{updateScripts:v,scripts:E,getIsSsr:g,appDir:m,nonce:y}=(0,u.useContext)(l.HeadManagerContext),w=(0,u.useRef)(!1);(0,u.useEffect)(()=>{let e=t||n;w.current||(i&&e&&f.has(e)&&i(),w.current=!0)},[i,t,n]);let C=(0,u.useRef)(!1);if((0,u.useEffect)(()=>{!C.current&&("afterInteractive"===s?h(e):"lazyOnload"===s&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>h(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>h(e))})),C.current=!0)},[e,s]),("beforeInteractive"===s||"worker"===s)&&(v?(E[s]=(E[s]||[]).concat([{id:t,src:n,onLoad:r,onReady:i,onError:d,...p}]),v(E)):g&&g()?f.add(t||n):g&&!g()&&h(e)),m){if(_&&_.forEach(e=>{a.default.preinit(e,{as:"style"})}),"beforeInteractive"===s)return n?(a.default.preload(n,p.integrity?{as:"script",integrity:p.integrity,nonce:y}:{as:"script",nonce:y}),(0,o.jsx)("script",{nonce:y,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...p,id:t}])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),(0,o.jsx)("script",{nonce:y,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p,id:t}])+")"}}));"afterInteractive"===s&&n&&a.default.preload(n,p.integrity?{as:"script",integrity:p.integrity,nonce:y}:{as:"script",nonce:y})}return null}Object.defineProperty(g,"__nextScript",{value:!0});let m=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1296:function(e,t,n){"use strict";n.d(t,{EJ:function(){return o},iv:function(){return i.iv},wE:function(){return i.wE}});var r=n(7931),i=n(4085);function o(e,t,n){let i=t.path||(null==n?void 0:n.path);return"path"===(t.routing||(null==n?void 0:n.routing)||"path")?i?{...n,...t,routing:"path"}:r.RM.throw((0,r.Gv)(e)):t.path?r.RM.throw((0,r.RE)(e)):{...n,...t,path:void 0}}}}]);