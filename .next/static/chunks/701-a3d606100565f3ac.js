"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[701],{585:function(e,r,t){function o(e,r){var t=r&&r.cache?r.cache:s,o=r&&r.serializer?r.serializer:i;return(r&&r.strategy?r.strategy:function(e,r){var t,o,i=1===e.length?n:l;return t=r.cache.create(),o=r.serializer,i.bind(this,e,t,o)})(e,{cache:t,serializer:o})}function n(e,r,t,o){var n=null==o||"number"==typeof o||"boolean"==typeof o?o:t(o),l=r.get(n);return void 0===l&&(l=e.call(this,o),r.set(n,l)),l}function l(e,r,t){var o=Array.prototype.slice.call(arguments,3),n=t(o),l=r.get(n);return void 0===l&&(l=e.apply(this,o),r.set(n,l)),l}t.r(r),t.d(r,{memoize:function(){return o},strategies:function(){return c}});var i=function(){return JSON.stringify(arguments)};function a(){this.cache=Object.create(null)}a.prototype.get=function(e){return this.cache[e]},a.prototype.set=function(e,r){this.cache[e]=r};var s={create:function(){return new a}},c={variadic:function(e,r){var t,o;return t=r.cache.create(),o=r.serializer,l.bind(this,e,t,o)},monadic:function(e,r){var t,o;return t=r.cache.create(),o=r.serializer,n.bind(this,e,t,o)}}},8418:function(e,r,t){t.d(r,{Z:function(){return s}});var o=t(7481);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>!!e&&t.indexOf(e)===r).join(" ")};/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,o.forwardRef)((e,r)=>{let{color:t="currentColor",size:n=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:c="",children:d,iconNode:u,...p}=e;return(0,o.createElement)("svg",{ref:r,...i,width:n,height:n,stroke:t,strokeWidth:s?24*Number(a)/Number(n):a,className:l("lucide",c),...p},[...u.map(e=>{let[r,t]=e;return(0,o.createElement)(r,t)}),...Array.isArray(d)?d:[d]])}),s=(e,r)=>{let t=(0,o.forwardRef)((t,i)=>{let{className:s,...c}=t;return(0,o.createElement)(a,{ref:i,iconNode:r,className:l("lucide-".concat(n(e)),s),...c})});return t.displayName="".concat(e),t}},380:function(e,r,t){let o=t(7481).createContext(void 0);r.IntlContext=o},6519:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0});var o=t(7481),n=t(6005),l=t(380);t(585);var i=o&&o.__esModule?o:{default:o};r.IntlProvider=function(e){let{children:r,defaultTranslationValues:t,formats:a,getMessageFallback:s,locale:c,messages:d,now:u,onError:p,timeZone:f}=e,m=o.useMemo(()=>n.createCache(),[c]),b=o.useMemo(()=>n.createIntlFormatters(m),[m]),g=o.useMemo(()=>({...n.initializeConfig({locale:c,defaultTranslationValues:t,formats:a,getMessageFallback:s,messages:d,now:u,onError:p,timeZone:f}),formatters:b,cache:m}),[m,t,a,b,s,c,d,u,p,f]);return i.default.createElement(l.IntlContext.Provider,{value:g},r)}},6005:function(e,r,t){var o=t(585);function n(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter(Boolean).join(".")}function l(e){return n(e.namespace,e.key)}function i(e){console.error(e)}function a(e,r){return o.memoize(e,{cache:{create:()=>({get:e=>r[e],set(e,t){r[e]=t}})},strategy:o.strategies.variadic})}function s(e,r){return a(function(){for(var r=arguments.length,t=Array(r),o=0;o<r;o++)t[o]=arguments[o];return new e(...t)},r)}r.createCache=function(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}},r.createIntlFormatters=function(e){return{getDateTimeFormat:s(Intl.DateTimeFormat,e.dateTime),getNumberFormat:s(Intl.NumberFormat,e.number),getPluralRules:s(Intl.PluralRules,e.pluralRules),getRelativeTimeFormat:s(Intl.RelativeTimeFormat,e.relativeTime),getListFormat:s(Intl.ListFormat,e.list),getDisplayNames:s(Intl.DisplayNames,e.displayNames)}},r.defaultGetMessageFallback=l,r.defaultOnError=i,r.initializeConfig=function(e){let{getMessageFallback:r,messages:t,onError:o,...n}=e;return{...n,messages:t,onError:o||i,getMessageFallback:r||l}},r.joinPath=n,r.memoFn=a},5304:function(e,r,t){t.d(r,{M:function(){return o}});function o(e,r,{checkForDefaultPrevented:t=!0}={}){return function(o){if(e?.(o),!1===t||!o.defaultPrevented)return r?.(o)}}},2380:function(e,r,t){t.d(r,{F:function(){return n},e:function(){return l}});var o=t(7481);function n(...e){return r=>e.forEach(e=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})}function l(...e){return o.useCallback(n(...e),e)}},280:function(e,r,t){t.d(r,{b:function(){return i},k:function(){return l}});var o=t(7481),n=t(6764);function l(e,r){let t=o.createContext(r),l=e=>{let{children:r,...l}=e,i=o.useMemo(()=>l,Object.values(l));return(0,n.jsx)(t.Provider,{value:i,children:r})};return l.displayName=e+"Provider",[l,function(n){let l=o.useContext(t);if(l)return l;if(void 0!==r)return r;throw Error(`\`${n}\` must be used within \`${e}\``)}]}function i(e,r=[]){let t=[],l=()=>{let r=t.map(e=>o.createContext(e));return function(t){let n=t?.[e]||r;return o.useMemo(()=>({[`__scope${e}`]:{...t,[e]:n}}),[t,n])}};return l.scopeName=e,[function(r,l){let i=o.createContext(l),a=t.length;t=[...t,l];let s=r=>{let{scope:t,children:l,...s}=r,c=t?.[e]?.[a]||i,d=o.useMemo(()=>s,Object.values(s));return(0,n.jsx)(c.Provider,{value:d,children:l})};return s.displayName=r+"Provider",[s,function(t,n){let s=n?.[e]?.[a]||i,c=o.useContext(s);if(c)return c;if(void 0!==l)return l;throw Error(`\`${t}\` must be used within \`${r}\``)}]},function(...e){let r=e[0];if(1===e.length)return r;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=t.reduce((r,{useScope:t,scopeName:o})=>{let n=t(e)[`__scope${o}`];return{...r,...n}},{});return o.useMemo(()=>({[`__scope${r.scopeName}`]:n}),[n])}};return t.scopeName=r.scopeName,t}(l,...r)]}},1301:function(e,r,t){t.d(r,{z:function(){return i}});var o=t(7481),n=t(2380),l=t(1889),i=e=>{var r,t;let i,s;let{present:c,children:d}=e,u=function(e){var r,t;let[n,i]=o.useState(),s=o.useRef({}),c=o.useRef(e),d=o.useRef("none"),[u,p]=(r=e?"mounted":"unmounted",t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},o.useReducer((e,r)=>{let o=t[e][r];return null!=o?o:e},r));return o.useEffect(()=>{let e=a(s.current);d.current="mounted"===u?e:"none"},[u]),(0,l.b)(()=>{let r=s.current,t=c.current;if(t!==e){let o=d.current,n=a(r);e?p("MOUNT"):"none"===n||(null==r?void 0:r.display)==="none"?p("UNMOUNT"):t&&o!==n?p("ANIMATION_OUT"):p("UNMOUNT"),c.current=e}},[e,p]),(0,l.b)(()=>{if(n){var e;let r;let t=null!==(e=n.ownerDocument.defaultView)&&void 0!==e?e:window,o=e=>{let o=a(s.current).includes(e.animationName);if(e.target===n&&o&&(p("ANIMATION_END"),!c.current)){let e=n.style.animationFillMode;n.style.animationFillMode="forwards",r=t.setTimeout(()=>{"forwards"===n.style.animationFillMode&&(n.style.animationFillMode=e)})}},l=e=>{e.target===n&&(d.current=a(s.current))};return n.addEventListener("animationstart",l),n.addEventListener("animationcancel",o),n.addEventListener("animationend",o),()=>{t.clearTimeout(r),n.removeEventListener("animationstart",l),n.removeEventListener("animationcancel",o),n.removeEventListener("animationend",o)}}p("ANIMATION_END")},[n,p]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:o.useCallback(e=>{e&&(s.current=getComputedStyle(e)),i(e)},[])}}(c),p="function"==typeof d?d({present:u.isPresent}):o.Children.only(d),f=(0,n.e)(u.ref,(i=null===(r=Object.getOwnPropertyDescriptor(p.props,"ref"))||void 0===r?void 0:r.get)&&"isReactWarning"in i&&i.isReactWarning?p.ref:(i=null===(t=Object.getOwnPropertyDescriptor(p,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in i&&i.isReactWarning?p.props.ref:p.props.ref||p.ref);return"function"==typeof d||u.isPresent?o.cloneElement(p,{ref:f}):null};function a(e){return(null==e?void 0:e.animationName)||"none"}i.displayName="Presence"},1956:function(e,r,t){t.d(r,{WV:function(){return a},jH:function(){return s}});var o=t(7481),n=t(8474),l=t(4539),i=t(6764),a=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=o.forwardRef((e,t)=>{let{asChild:o,...n}=e,a=o?l.g7:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(a,{...n,ref:t})});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{});function s(e,r){e&&n.flushSync(()=>e.dispatchEvent(r))}},4539:function(e,r,t){t.d(r,{g7:function(){return i}});var o=t(7481),n=t(2380),l=t(6764),i=o.forwardRef((e,r)=>{let{children:t,...n}=e,i=o.Children.toArray(t),s=i.find(c);if(s){let e=s.props.children,t=i.map(r=>r!==s?r:o.Children.count(e)>1?o.Children.only(null):o.isValidElement(e)?e.props.children:null);return(0,l.jsx)(a,{...n,ref:r,children:o.isValidElement(e)?o.cloneElement(e,void 0,t):null})}return(0,l.jsx)(a,{...n,ref:r,children:t})});i.displayName="Slot";var a=o.forwardRef((e,r)=>{let{children:t,...l}=e;if(o.isValidElement(t)){let e,i;let a=(e=Object.getOwnPropertyDescriptor(t.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?t.ref:(e=Object.getOwnPropertyDescriptor(t,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?t.props.ref:t.props.ref||t.ref;return o.cloneElement(t,{...function(e,r){let t={...r};for(let o in r){let n=e[o],l=r[o];/^on[A-Z]/.test(o)?n&&l?t[o]=(...e)=>{l(...e),n(...e)}:n&&(t[o]=n):"style"===o?t[o]={...n,...l}:"className"===o&&(t[o]=[n,l].filter(Boolean).join(" "))}return{...e,...t}}(l,t.props),ref:r?(0,n.F)(r,a):a})}return o.Children.count(t)>1?o.Children.only(null):null});a.displayName="SlotClone";var s=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function c(e){return o.isValidElement(e)&&e.type===s}},3009:function(e,r,t){t.d(r,{W:function(){return n}});var o=t(7481);function n(e){let r=o.useRef(e);return o.useEffect(()=>{r.current=e}),o.useMemo(()=>(...e)=>r.current?.(...e),[])}},7849:function(e,r,t){t.d(r,{T:function(){return l}});var o=t(7481),n=t(3009);function l({prop:e,defaultProp:r,onChange:t=()=>{}}){let[l,i]=function({defaultProp:e,onChange:r}){let t=o.useState(e),[l]=t,i=o.useRef(l),a=(0,n.W)(r);return o.useEffect(()=>{i.current!==l&&(a(l),i.current=l)},[l,i,a]),t}({defaultProp:r,onChange:t}),a=void 0!==e,s=a?e:l,c=(0,n.W)(t);return[s,o.useCallback(r=>{if(a){let t="function"==typeof r?r(e):r;t!==e&&c(t)}else i(r)},[a,e,i,c])]}},1889:function(e,r,t){t.d(r,{b:function(){return n}});var o=t(7481),n=globalThis?.document?o.useLayoutEffect:()=>{}},3935:function(e,r,t){t.d(r,{j:function(){return l}});let o=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,n=function(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=function e(r){var t,o,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r))for(t=0;t<r.length;t++)r[t]&&(o=e(r[t]))&&(n&&(n+=" "),n+=o);else for(t in r)r[t]&&(n&&(n+=" "),n+=t)}return n}(e))&&(o&&(o+=" "),o+=r);return o},l=(e,r)=>t=>{var l;if((null==r?void 0:r.variants)==null)return n(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:i,defaultVariants:a}=r,s=Object.keys(i).map(e=>{let r=null==t?void 0:t[e],n=null==a?void 0:a[e];if(null===r)return null;let l=o(r)||o(n);return i[e][l]}),c=t&&Object.entries(t).reduce((e,r)=>{let[t,o]=r;return void 0===o||(e[t]=o),e},{});return n(e,s,null==r?void 0:null===(l=r.compoundVariants)||void 0===l?void 0:l.reduce((e,r)=>{let{class:t,className:o,...n}=r;return Object.entries(n).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...a,...c}[r]):({...a,...c})[r]===t})?[...e,t,o]:e},[]),null==t?void 0:t.class,null==t?void 0:t.className)}},7090:function(e,r,t){t.d(r,{W:function(){return o}});function o(){for(var e,r,t=0,o="",n=arguments.length;t<n;t++)(e=arguments[t])&&(r=function e(r){var t,o,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r)){var l=r.length;for(t=0;t<l;t++)r[t]&&(o=e(r[t]))&&(n&&(n+=" "),n+=o)}else for(o in r)r[o]&&(n&&(n+=" "),n+=o)}return n}(e))&&(o&&(o+=" "),o+=r);return o}},9186:function(e,r,t){t.d(r,{m6:function(){return J}});let o=e=>{let r=a(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:e=>{let t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),n(t,r)||i(e)},getConflictingClassGroupIds:(e,r)=>{let n=t[e]||[];return r&&o[e]?[...n,...o[e]]:n}}},n=(e,r)=>{if(0===e.length)return r.classGroupId;let t=e[0],o=r.nextPart.get(t),l=o?n(e.slice(1),o):void 0;if(l)return l;if(0===r.validators.length)return;let i=e.join("-");return r.validators.find(({validator:e})=>e(i))?.classGroupId},l=/^\[(.+)\]$/,i=e=>{if(l.test(e)){let r=l.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},a=e=>{let{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return u(Object.entries(e.classGroups),t).forEach(([e,t])=>{s(t,o,e,r)}),o},s=(e,r,t,o)=>{e.forEach(e=>{if("string"==typeof e){(""===e?r:c(r,e)).classGroupId=t;return}if("function"==typeof e){if(d(e)){s(e(o),r,t,o);return}r.validators.push({validator:e,classGroupId:t});return}Object.entries(e).forEach(([e,n])=>{s(n,c(r,e),t,o)})})},c=(e,r)=>{let t=e;return r.split("-").forEach(e=>{t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)}),t},d=e=>e.isThemeGetter,u=(e,r)=>r?e.map(([e,t])=>[e,t.map(e=>"string"==typeof e?r+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,t])=>[r+e,t])):e)]):e,p=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,t=new Map,o=new Map,n=(n,l)=>{t.set(n,l),++r>e&&(r=0,o=t,t=new Map)};return{get(e){let r=t.get(e);return void 0!==r?r:void 0!==(r=o.get(e))?(n(e,r),r):void 0},set(e,r){t.has(e)?t.set(e,r):n(e,r)}}},f=e=>{let{separator:r,experimentalParseClassName:t}=e,o=1===r.length,n=r[0],l=r.length,i=e=>{let t;let i=[],a=0,s=0;for(let c=0;c<e.length;c++){let d=e[c];if(0===a){if(d===n&&(o||e.slice(c,c+l)===r)){i.push(e.slice(s,c)),s=c+l;continue}if("/"===d){t=c;continue}}"["===d?a++:"]"===d&&a--}let c=0===i.length?e:e.substring(s),d=c.startsWith("!"),u=d?c.substring(1):c;return{modifiers:i,hasImportantModifier:d,baseClassName:u,maybePostfixModifierPosition:t&&t>s?t-s:void 0}};return t?e=>t({className:e,parseClassName:i}):i},m=e=>{if(e.length<=1)return e;let r=[],t=[];return e.forEach(e=>{"["===e[0]?(r.push(...t.sort(),e),t=[]):t.push(e)}),r.push(...t.sort()),r},b=e=>({cache:p(e.cacheSize),parseClassName:f(e),...o(e)}),g=/\s+/,h=(e,r)=>{let{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:n}=r,l=[],i=e.trim().split(g),a="";for(let e=i.length-1;e>=0;e-=1){let r=i[e],{modifiers:s,hasImportantModifier:c,baseClassName:d,maybePostfixModifierPosition:u}=t(r),p=!!u,f=o(p?d.substring(0,u):d);if(!f){if(!p||!(f=o(d))){a=r+(a.length>0?" "+a:a);continue}p=!1}let b=m(s).join(":"),g=c?b+"!":b,h=g+f;if(l.includes(h))continue;l.push(h);let v=n(f,p);for(let e=0;e<v.length;++e){let r=v[e];l.push(g+r)}a=r+(a.length>0?" "+a:a)}return a};function v(){let e,r,t=0,o="";for(;t<arguments.length;)(e=arguments[t++])&&(r=y(e))&&(o&&(o+=" "),o+=r);return o}let y=e=>{let r;if("string"==typeof e)return e;let t="";for(let o=0;o<e.length;o++)e[o]&&(r=y(e[o]))&&(t&&(t+=" "),t+=r);return t},w=e=>{let r=r=>r[e]||[];return r.isThemeGetter=!0,r},x=/^\[(?:([a-z-]+):)?(.+)\]$/i,k=/^\d+\/\d+$/,N=new Set(["px","full","screen"]),z=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,j=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,E=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,C=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,M=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,O=e=>R(e)||N.has(e)||k.test(e),P=e=>V(e,"length",Z),R=e=>!!e&&!Number.isNaN(Number(e)),T=e=>V(e,"number",R),I=e=>!!e&&Number.isInteger(Number(e)),A=e=>e.endsWith("%")&&R(e.slice(0,-1)),F=e=>x.test(e),S=e=>z.test(e),_=new Set(["length","size","percentage"]),W=e=>V(e,_,B),$=e=>V(e,"position",B),D=new Set(["image","url"]),G=e=>V(e,D,H),L=e=>V(e,"",q),U=()=>!0,V=(e,r,t)=>{let o=x.exec(e);return!!o&&(o[1]?"string"==typeof r?o[1]===r:r.has(o[1]):t(o[2]))},Z=e=>j.test(e)&&!E.test(e),B=()=>!1,q=e=>C.test(e),H=e=>M.test(e),J=function(e,...r){let t,o,n;let l=function(a){return o=(t=b(r.reduce((e,r)=>r(e),e()))).cache.get,n=t.cache.set,l=i,i(a)};function i(e){let r=o(e);if(r)return r;let l=h(e,t);return n(e,l),l}return function(){return l(v.apply(null,arguments))}}(()=>{let e=w("colors"),r=w("spacing"),t=w("blur"),o=w("brightness"),n=w("borderColor"),l=w("borderRadius"),i=w("borderSpacing"),a=w("borderWidth"),s=w("contrast"),c=w("grayscale"),d=w("hueRotate"),u=w("invert"),p=w("gap"),f=w("gradientColorStops"),m=w("gradientColorStopPositions"),b=w("inset"),g=w("margin"),h=w("opacity"),v=w("padding"),y=w("saturate"),x=w("scale"),k=w("sepia"),N=w("skew"),z=w("space"),j=w("translate"),E=()=>["auto","contain","none"],C=()=>["auto","hidden","clip","visible","scroll"],M=()=>["auto",F,r],_=()=>[F,r],D=()=>["",O,P],V=()=>["auto",R,F],Z=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],B=()=>["solid","dashed","dotted","double","none"],q=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],H=()=>["start","end","center","between","around","evenly","stretch"],J=()=>["","0",F],K=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Q=()=>[R,F];return{cacheSize:500,separator:":",theme:{colors:[U],spacing:[O,P],blur:["none","",S,F],brightness:Q(),borderColor:[e],borderRadius:["none","","full",S,F],borderSpacing:_(),borderWidth:D(),contrast:Q(),grayscale:J(),hueRotate:Q(),invert:J(),gap:_(),gradientColorStops:[e],gradientColorStopPositions:[A,P],inset:M(),margin:M(),opacity:Q(),padding:_(),saturate:Q(),scale:Q(),sepia:J(),skew:Q(),space:_(),translate:_()},classGroups:{aspect:[{aspect:["auto","square","video",F]}],container:["container"],columns:[{columns:[S]}],"break-after":[{"break-after":K()}],"break-before":[{"break-before":K()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Z(),F]}],overflow:[{overflow:C()}],"overflow-x":[{"overflow-x":C()}],"overflow-y":[{"overflow-y":C()}],overscroll:[{overscroll:E()}],"overscroll-x":[{"overscroll-x":E()}],"overscroll-y":[{"overscroll-y":E()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[b]}],"inset-x":[{"inset-x":[b]}],"inset-y":[{"inset-y":[b]}],start:[{start:[b]}],end:[{end:[b]}],top:[{top:[b]}],right:[{right:[b]}],bottom:[{bottom:[b]}],left:[{left:[b]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",I,F]}],basis:[{basis:M()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",F]}],grow:[{grow:J()}],shrink:[{shrink:J()}],order:[{order:["first","last","none",I,F]}],"grid-cols":[{"grid-cols":[U]}],"col-start-end":[{col:["auto",{span:["full",I,F]},F]}],"col-start":[{"col-start":V()}],"col-end":[{"col-end":V()}],"grid-rows":[{"grid-rows":[U]}],"row-start-end":[{row:["auto",{span:[I,F]},F]}],"row-start":[{"row-start":V()}],"row-end":[{"row-end":V()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",F]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",F]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...H()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...H(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...H(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[z]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[z]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",F,r]}],"min-w":[{"min-w":[F,r,"min","max","fit"]}],"max-w":[{"max-w":[F,r,"none","full","min","max","fit","prose",{screen:[S]},S]}],h:[{h:[F,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[F,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[F,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[F,r,"auto","min","max","fit"]}],"font-size":[{text:["base",S,P]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",T]}],"font-family":[{font:[U]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",F]}],"line-clamp":[{"line-clamp":["none",R,T]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",O,F]}],"list-image":[{"list-image":["none",F]}],"list-style-type":[{list:["none","disc","decimal",F]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...B(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",O,P]}],"underline-offset":[{"underline-offset":["auto",O,F]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:_()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",F]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",F]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Z(),$]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",W]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},G]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[m]}],"gradient-via-pos":[{via:[m]}],"gradient-to-pos":[{to:[m]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...B(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:B()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-s":[{"border-s":[n]}],"border-color-e":[{"border-e":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...B()]}],"outline-offset":[{"outline-offset":[O,F]}],"outline-w":[{outline:[O,P]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:D()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[O,P]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",S,L]}],"shadow-color":[{shadow:[U]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...q(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":q()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[s]}],"drop-shadow":[{"drop-shadow":["","none",S,F]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[u]}],saturate:[{saturate:[y]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[s]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",F]}],duration:[{duration:Q()}],ease:[{ease:["linear","in","out","in-out",F]}],delay:[{delay:Q()}],animate:[{animate:["none","spin","ping","pulse","bounce",F]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[x]}],"scale-x":[{"scale-x":[x]}],"scale-y":[{"scale-y":[x]}],rotate:[{rotate:[I,F]}],"translate-x":[{"translate-x":[j]}],"translate-y":[{"translate-y":[j]}],"skew-x":[{"skew-x":[N]}],"skew-y":[{"skew-y":[N]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",F]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",F]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":_()}],"scroll-mx":[{"scroll-mx":_()}],"scroll-my":[{"scroll-my":_()}],"scroll-ms":[{"scroll-ms":_()}],"scroll-me":[{"scroll-me":_()}],"scroll-mt":[{"scroll-mt":_()}],"scroll-mr":[{"scroll-mr":_()}],"scroll-mb":[{"scroll-mb":_()}],"scroll-ml":[{"scroll-ml":_()}],"scroll-p":[{"scroll-p":_()}],"scroll-px":[{"scroll-px":_()}],"scroll-py":[{"scroll-py":_()}],"scroll-ps":[{"scroll-ps":_()}],"scroll-pe":[{"scroll-pe":_()}],"scroll-pt":[{"scroll-pt":_()}],"scroll-pr":[{"scroll-pr":_()}],"scroll-pb":[{"scroll-pb":_()}],"scroll-pl":[{"scroll-pl":_()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",F]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[O,P,T]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);