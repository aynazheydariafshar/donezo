"use strict";(()=>{var e={};e.id=493,e.ids=[493],e.modules={20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},96041:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>y,patchFetch:()=>w,requestAsyncStorage:()=>m,routeModule:()=>h,serverHooks:()=>g,staticGenerationAsyncStorage:()=>f});var a={};t.r(a),t.d(a,{POST:()=>v});var o=t(57424),i=t(61413),n=t(11032),s=t(24946),x=t(82306),d=t(36985),p=t(57147),u=t.n(p),c=t(17438);let l=(0,s.v)("card.json"),v=async e=>{let r=await e.json(),t=await (0,x.h)(l),a={...r,id:(0,d.D)(),boardId:r.boardId,title:r.title,listId:r.listId},o=[...t,a];return await u().writeFileSync(l,JSON.stringify(o)),c.NextResponse.json(a)},h=new o.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/card/route",pathname:"/api/card",filename:"route",bundlePath:"app/api/card/route"},resolvedPagePath:"/home/aynaz/Desktop/donezo/src/app/api/card/route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:m,staticGenerationAsyncStorage:f,serverHooks:g}=h,y="/api/card/route";function w(){return(0,n.patchFetch)({serverHooks:g,staticGenerationAsyncStorage:f})}},57424:(e,r,t)=>{e.exports=t(30517)},24946:(e,r,t)=>{t.d(r,{v:()=>i});var a=t(71017),o=t.n(a);function i(e){let r=o().join(process.cwd(),"src/app/db");return o().join(r,e)}},82306:(e,r,t)=>{t.d(r,{h:()=>i});var a=t(57147),o=t.n(a);async function i(e){if(!e)throw Error("No directory provided");return JSON.parse(await o().promises.readFile(e,"utf8"))}},36985:(e,r,t)=>{t.d(r,{D:()=>a});function a(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var r=16*Math.random()|0;return("x"==e?r:3&r|8).toString(16)})}}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[683,438],()=>t(96041));module.exports=a})();