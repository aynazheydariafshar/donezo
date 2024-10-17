(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[791],{104:function(e,t,n){Promise.resolve().then(n.bind(n,3182))},3713:function(e,t,n){"use strict";n.d(t,{z:function(){return c}});var s=n(6764),r=n(7481),i=n(4539),a=n(3935),l=n(2049);let o=(0,a.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=r.forwardRef(function(e,t){let{className:n,variant:r,size:a,asChild:c=!1,...d}=e,u=c?i.g7:"button";return(0,s.jsx)(u,{className:(0,l.cn)(o({variant:r,size:a,className:n})),ref:t,...d})});c.displayName="Button"},8750:function(e,t,n){"use strict";n.d(t,{O:function(){return i}});var s=n(6764),r=n(2049);function i(e){let{className:t,...n}=e;return(0,s.jsx)("div",{className:(0,r.cn)("animate-pulse rounded-md bg-muted",t),...n})}},3182:function(e,t,n){"use strict";n.d(t,{SidebarDashboard:function(){return z}});var s=n(6764),r=n(3713),i=n(8750),a=n(7787),l=n(8310),o=n(3508),c=n(7699),d=n(6621),u=n(2049),f=n(2761),m=n(7481),h=n(3446),x=n(3683);let g=h.fC,v=m.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)(h.ck,{ref:t,className:(0,u.cn)("border-b",n),...r})});v.displayName="AccordionItem";let b=m.forwardRef((e,t)=>{let{className:n,children:r,...i}=e;return(0,s.jsx)(h.h4,{className:"flex",children:(0,s.jsxs)(h.xz,{ref:t,className:(0,u.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",n),...i,children:[r,(0,s.jsx)(x.Z,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})})});b.displayName=h.xz.displayName;let p=m.forwardRef((e,t)=>{let{className:n,children:r,...i}=e;return(0,s.jsx)(h.VY,{ref:t,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...i,children:(0,s.jsx)("div",{className:(0,u.cn)("pb-4 pt-0",n),children:r})})});p.displayName=h.VY.displayName;var j=n(3656),N=n(9947),w=n(678);function y(e){let{onExpand:t,organization:n,isActive:i,isExpanded:a}=e,l=(0,o.useTranslations)(),c=(0,f.useRouter)(),m=(0,f.usePathname)(),h=[{label:"boards",icon:(0,s.jsx)(j.Z,{className:"h-4 w-4 mr-2"}),href:"/organization/".concat(n.id)},{label:"activity",icon:(0,s.jsx)(N.Z,{className:"h-4 w-4 mr-2"}),href:"/organization/".concat(n.id,"/activity")},{label:"settings",icon:(0,s.jsx)(w.Z,{className:"h-4 w-4 mr-2"}),href:"/organization/".concat(n.id,"/settings")}];return(0,s.jsxs)(v,{className:"border-none",value:n.id,children:[(0,s.jsx)(b,{className:(0,u.cn)("flex my-1 items-center p-1.5 gap-x-2 text-black dark:text-white hover:bg-white dark:hover:bg-slate-600 rounded-md transition text-start no-underline hover:no-underline",i&&!a&&"bg-white dark:bg-slate-600"),onClick:()=>t(n.id),children:(0,s.jsxs)("div",{className:"flex items-center gap-x-2",children:[(0,s.jsx)("div",{className:"w-7 h-7 relative",children:(0,s.jsx)(d.default,{src:n.imageUrl,fill:!0,alt:"organization list"})}),(0,s.jsx)("span",{className:"font-medium",children:n.name})]})}),(0,s.jsx)(p,{children:h.map(e=>(0,s.jsxs)(r.z,{size:"sm",className:(0,u.cn)("w-full my-1 flex justify-between items-center",m===e.href&&"bg-white dark:bg-slate-600"),onClick:()=>c.push(e.href),variant:"ghost",children:[e.icon,l(e.label)]},e.href))})]})}y.Skeleton=function(){return(0,s.jsxs)("div",{className:"items-center flex mb-2 gap-x-2",children:[(0,s.jsx)("div",{className:"w-10 h-10 relative shrink-0",children:(0,s.jsx)(i.O,{className:"h-full w-full"})}),(0,s.jsx)(i.O,{className:"h-10 w-full"})]})};var k=n(7347);function z(e){let{storageKey:t="t-sidebar-state"}=e,n=(0,o.useTranslations)(),d="",[f,h]=function(e,t){let[n,s]=(0,m.useState)(()=>{{let n=localStorage.getItem(e);return n?JSON.parse(n):t}});return(0,m.useEffect)(()=>{localStorage.setItem(e,JSON.stringify(n))},[e,n]),[n,s]}(t,{}),{organization:x,isLoaded:v}=(0,a.o8)(),{userMemberships:b,isLoaded:p}=(0,a.eW)({userMemberships:{infinite:!0}}),j=Object.keys(f).reduce((e,t)=>(f[t]&&e.push(t),e),[]),N=e=>{h(t=>({...t,[e]:!f[e]}))};return((0,m.useEffect)(()=>{d=(0,k.e)("language")||"en"},[]),v&&p&&!b.isLoading)?(0,s.jsxs)("div",{className:(0,u.cn)("font-medium w-full text-xs xl:w-60 flex flex-col mb-1 fixed top-30","en"===d?"left-30":"right-30"),children:[(0,s.jsxs)("div",{className:"flex items-center justify-between my-1",children:[(0,s.jsx)("div",{children:(0,s.jsx)("p",{children:n("workspaces")})}),(0,s.jsx)("div",{children:(0,s.jsx)(r.z,{asChild:!0,size:"icon",variant:"ghost",className:"ml-auto",type:"button",children:(0,s.jsx)(c.default,{href:"/select-org",children:(0,s.jsx)(l.Z,{})})})})]}),(0,s.jsx)(g,{className:"w-full space-y-2",defaultValue:j,type:"multiple",children:b.data.map(e=>{let{organization:t}=e;return(0,s.jsx)(y,{onExpand:N,organization:t,isActive:(null==x?void 0:x.id)===t.id,isExpanded:f[t.id]},t.id)})})]}):(0,s.jsxs)("div",{className:(0,u.cn)("w-60 fixed top-30","en"===d?"left-30":"right-30"),children:[(0,s.jsxs)("div",{className:"items-center justify-between flex mb-2",children:[(0,s.jsx)(i.O,{className:"h-10 w-[50%]"}),(0,s.jsx)(i.O,{className:"h-10 w-10"})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(y.Skeleton,{}),(0,s.jsx)(y.Skeleton,{}),(0,s.jsx)(y.Skeleton,{})]})]})}},7347:function(e,t,n){"use strict";function s(e){let t=e+"=",n=decodeURIComponent(document.cookie).split(";");for(let e=0;e<n.length;e++){let s=n[e];for(;" "==s.charAt(0);)s=s.substring(1);if(0==s.indexOf(t))return s.substring(t.length,s.length)}return""}n.d(t,{e:function(){return s}})},2049:function(e,t,n){"use strict";n.d(t,{cn:function(){return i}});var s=n(7090),r=n(9186);function i(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.m6)((0,s.W)(t))}}},function(e){e.O(0,[787,701,145,31,835,638,677,14,744],function(){return e(e.s=104)}),_N_E=e.O()}]);