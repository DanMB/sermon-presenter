if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const d=e=>s(e,r),f={module:{uri:r},exports:c,require:d};i[r]=Promise.all(n.map((e=>f[e]||d(e)))).then((e=>(o(...e),c)))}}define(["./workbox-b3e22772"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.1095dcb5.css",revision:null},{url:"assets/index.bd6f79eb.js",revision:null},{url:"client.html",revision:"1b76dd0651d835ca759cfcba9a37f74f"},{url:"index.html",revision:"75fb755adb3dbdca8f6d40f59f301822"},{url:"splash.html",revision:"a021bc1e11ab89bf02d8755683f53c27"},{url:"icons/logo-192x192.png",revision:"6ac0d6da8080d42688526bb79df72f4c"},{url:"favicon.ico",revision:"1b5c104385db21a7290d54c20c8a4d46"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"icons/logo-512x512.png",revision:"2df12a118f53b3bfedbc45bc56d1081f"},{url:"manifest.webmanifest",revision:"160155b09d9ff56038b3ec3fcde3a486"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
