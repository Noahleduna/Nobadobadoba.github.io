import{_ as i}from"./preload-helper-41c905a7.js";const s=(o,e)=>{const t=o[e];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((n,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e)))})};async function a({params:o}){const e=await s(Object.assign({"../../../lib/posts/q.svx":()=>i(()=>import("./q-2f8bbf5d.js"),["./q-2f8bbf5d.js","./index-3b0df29e.js"],import.meta.url),"../../../lib/posts/r.svx":()=>i(()=>import("./r-e0aa9f1e.js"),["./r-e0aa9f1e.js","./index-3b0df29e.js"],import.meta.url),"../../../lib/posts/start.svx":()=>i(()=>import("./start-c5bdb592.js"),["./start-c5bdb592.js","./index-3b0df29e.js"],import.meta.url)}),`../../../lib/posts/${o.path}.svx`),{title:t,date:n,keywords:r}=e.metadata;return{content:e.default,title:t,date:n,keywords:r}}const u=Object.freeze(Object.defineProperty({__proto__:null,load:a},Symbol.toStringTag,{value:"Module"}));export{u as _,a as l};