const ch=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};ch();var _n,S,Va,Ua,Yt,Ba,so,ja,Gn={},za=[],uh=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Me(t,e){for(var n in e)t[n]=e[n];return t}function Ha(t){var e=t.parentNode;e&&e.removeChild(t)}function Se(t,e,n){var i,r,s,o={};for(s in e)s=="key"?i=e[s]:s=="ref"?r=e[s]:o[s]=e[s];if(arguments.length>2&&(o.children=arguments.length>3?_n.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(s in t.defaultProps)o[s]===void 0&&(o[s]=t.defaultProps[s]);return Jt(t,o,i,r,null)}function Jt(t,e,n,i,r){var s={type:t,props:e,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:r??++Va};return r==null&&S.vnode!=null&&S.vnode(s),s}function Qr(){return{current:null}}function Ie(t){return t.children}function Ee(t,e){this.props=t,this.context=e}function St(t,e){if(e==null)return t.__?St(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?St(t):null}function qa(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return qa(t)}}function dr(t){(!t.__d&&(t.__d=!0)&&Yt.push(t)&&!Qn.__r++||so!==S.debounceRendering)&&((so=S.debounceRendering)||Ba)(Qn)}function Qn(){for(var t;Qn.__r=Yt.length;)t=Yt.sort(function(e,n){return e.__v.__b-n.__v.__b}),Yt=[],t.some(function(e){var n,i,r,s,o,a;e.__d&&(o=(s=(n=e).__v).__e,(a=n.__P)&&(i=[],(r=Me({},s)).__v=s.__v+1,Xr(a,s,r,n.__n,a.ownerSVGElement!==void 0,s.__h!=null?[o]:null,i,o??St(s),s.__h),Qa(i,s),s.__e!=o&&qa(s)))})}function Wa(t,e,n,i,r,s,o,a,u,l){var c,h,d,f,p,k,C,O=i&&i.__k||za,U=O.length;for(n.__k=[],c=0;c<e.length;c++)if((f=n.__k[c]=(f=e[c])==null||typeof f=="boolean"?null:typeof f=="string"||typeof f=="number"||typeof f=="bigint"?Jt(null,f,null,null,f):Array.isArray(f)?Jt(Ie,{children:f},null,null,null):f.__b>0?Jt(f.type,f.props,f.key,null,f.__v):f)!=null){if(f.__=n,f.__b=n.__b+1,(d=O[c])===null||d&&f.key==d.key&&f.type===d.type)O[c]=void 0;else for(h=0;h<U;h++){if((d=O[h])&&f.key==d.key&&f.type===d.type){O[h]=void 0;break}d=null}Xr(t,f,d=d||Gn,r,s,o,a,u,l),p=f.__e,(h=f.ref)&&d.ref!=h&&(C||(C=[]),d.ref&&C.push(d.ref,null,f),C.push(h,f.__c||p,f)),p!=null?(k==null&&(k=p),typeof f.type=="function"&&f.__k===d.__k?f.__d=u=Ka(f,u,t):u=Ga(t,f,d,O,p,u),typeof n.type=="function"&&(n.__d=u)):u&&d.__e==u&&u.parentNode!=t&&(u=St(d))}for(n.__e=k,c=U;c--;)O[c]!=null&&(typeof n.type=="function"&&O[c].__e!=null&&O[c].__e==n.__d&&(n.__d=St(i,c+1)),Ya(O[c],O[c]));if(C)for(c=0;c<C.length;c++)Xa(C[c],C[++c],C[++c])}function Ka(t,e,n){for(var i,r=t.__k,s=0;r&&s<r.length;s++)(i=r[s])&&(i.__=t,e=typeof i.type=="function"?Ka(i,e,n):Ga(n,i,i,r,i.__e,e));return e}function ke(t,e){return e=e||[],t==null||typeof t=="boolean"||(Array.isArray(t)?t.some(function(n){ke(n,e)}):e.push(t)),e}function Ga(t,e,n,i,r,s){var o,a,u;if(e.__d!==void 0)o=e.__d,e.__d=void 0;else if(n==null||r!=s||r.parentNode==null)e:if(s==null||s.parentNode!==t)t.appendChild(r),o=null;else{for(a=s,u=0;(a=a.nextSibling)&&u<i.length;u+=2)if(a==r)break e;t.insertBefore(r,s),o=s}return o!==void 0?o:r.nextSibling}function lh(t,e,n,i,r){var s;for(s in n)s==="children"||s==="key"||s in e||Xn(t,s,null,n[s],i);for(s in e)r&&typeof e[s]!="function"||s==="children"||s==="key"||s==="value"||s==="checked"||n[s]===e[s]||Xn(t,s,e[s],n[s],i)}function oo(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||uh.test(e)?n:n+"px"}function Xn(t,e,n,i,r){var s;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof i=="string"&&(t.style.cssText=i=""),i)for(e in i)n&&e in n||oo(t.style,e,"");if(n)for(e in n)i&&n[e]===i[e]||oo(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")s=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+s]=n,n?i||t.addEventListener(e,s?co:ao,s):t.removeEventListener(e,s?co:ao,s);else if(e!=="dangerouslySetInnerHTML"){if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,n):t.removeAttribute(e))}}function ao(t){this.l[t.type+!1](S.event?S.event(t):t)}function co(t){this.l[t.type+!0](S.event?S.event(t):t)}function Xr(t,e,n,i,r,s,o,a,u){var l,c,h,d,f,p,k,C,O,U,Ce,se=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(u=n.__h,a=e.__e=n.__e,e.__h=null,s=[a]),(l=S.__b)&&l(e);try{e:if(typeof se=="function"){if(C=e.props,O=(l=se.contextType)&&i[l.__c],U=l?O?O.props.value:l.__:i,n.__c?k=(c=e.__c=n.__c).__=c.__E:("prototype"in se&&se.prototype.render?e.__c=c=new se(C,U):(e.__c=c=new Ee(C,U),c.constructor=se,c.render=dh),O&&O.sub(c),c.props=C,c.state||(c.state={}),c.context=U,c.__n=i,h=c.__d=!0,c.__h=[]),c.__s==null&&(c.__s=c.state),se.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=Me({},c.__s)),Me(c.__s,se.getDerivedStateFromProps(C,c.__s))),d=c.props,f=c.state,h)se.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(se.getDerivedStateFromProps==null&&C!==d&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(C,U),!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(C,c.__s,U)===!1||e.__v===n.__v){c.props=C,c.state=c.__s,e.__v!==n.__v&&(c.__d=!1),c.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(Ke){Ke&&(Ke.__=e)}),c.__h.length&&o.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(C,c.__s,U),c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(d,f,p)})}c.context=U,c.props=C,c.state=c.__s,(l=S.__r)&&l(e),c.__d=!1,c.__v=e,c.__P=t,l=c.render(c.props,c.state,c.context),c.state=c.__s,c.getChildContext!=null&&(i=Me(Me({},i),c.getChildContext())),h||c.getSnapshotBeforeUpdate==null||(p=c.getSnapshotBeforeUpdate(d,f)),Ce=l!=null&&l.type===Ie&&l.key==null?l.props.children:l,Wa(t,Array.isArray(Ce)?Ce:[Ce],e,n,i,r,s,o,a,u),c.base=e.__e,e.__h=null,c.__h.length&&o.push(c),k&&(c.__E=c.__=null),c.__e=!1}else s==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=hh(n.__e,e,n,i,r,s,o,u);(l=S.diffed)&&l(e)}catch(Ke){e.__v=null,(u||s!=null)&&(e.__e=a,e.__h=!!u,s[s.indexOf(a)]=null),S.__e(Ke,e,n)}}function Qa(t,e){S.__c&&S.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(i){i.call(n)})}catch(i){S.__e(i,n.__v)}})}function hh(t,e,n,i,r,s,o,a){var u,l,c,h=n.props,d=e.props,f=e.type,p=0;if(f==="svg"&&(r=!0),s!=null){for(;p<s.length;p++)if((u=s[p])&&"setAttribute"in u==!!f&&(f?u.localName===f:u.nodeType===3)){t=u,s[p]=null;break}}if(t==null){if(f===null)return document.createTextNode(d);t=r?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,d.is&&d),s=null,a=!1}if(f===null)h===d||a&&t.data===d||(t.data=d);else{if(s=s&&_n.call(t.childNodes),l=(h=n.props||Gn).dangerouslySetInnerHTML,c=d.dangerouslySetInnerHTML,!a){if(s!=null)for(h={},p=0;p<t.attributes.length;p++)h[t.attributes[p].name]=t.attributes[p].value;(c||l)&&(c&&(l&&c.__html==l.__html||c.__html===t.innerHTML)||(t.innerHTML=c&&c.__html||""))}if(lh(t,d,h,r,a),c)e.__k=[];else if(p=e.props.children,Wa(t,Array.isArray(p)?p:[p],e,n,i,r&&f!=="foreignObject",s,o,s?s[0]:n.__k&&St(n,0),a),s!=null)for(p=s.length;p--;)s[p]!=null&&Ha(s[p]);a||("value"in d&&(p=d.value)!==void 0&&(p!==t.value||f==="progress"&&!p||f==="option"&&p!==h.value)&&Xn(t,"value",p,h.value,!1),"checked"in d&&(p=d.checked)!==void 0&&p!==t.checked&&Xn(t,"checked",p,h.checked,!1))}return t}function Xa(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(i){S.__e(i,n)}}function Ya(t,e,n){var i,r;if(S.unmount&&S.unmount(t),(i=t.ref)&&(i.current&&i.current!==t.__e||Xa(i,null,e)),(i=t.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(s){S.__e(s,e)}i.base=i.__P=null}if(i=t.__k)for(r=0;r<i.length;r++)i[r]&&Ya(i[r],e,typeof t.type!="function");n||t.__e==null||Ha(t.__e),t.__e=t.__d=void 0}function dh(t,e,n){return this.constructor(t,n)}function tt(t,e,n){var i,r,s;S.__&&S.__(t,e),r=(i=typeof n=="function")?null:n&&n.__k||e.__k,s=[],Xr(e,t=(!i&&n||e).__k=Se(Ie,null,[t]),r||Gn,Gn,e.ownerSVGElement!==void 0,!i&&n?[n]:r?null:e.firstChild?_n.call(e.childNodes):null,s,!i&&n?n:r?r.__e:e.firstChild,i),Qa(s,t)}function Yr(t,e){tt(t,e,Yr)}function Ja(t,e,n){var i,r,s,o=Me({},t.props);for(s in e)s=="key"?i=e[s]:s=="ref"?r=e[s]:o[s]=e[s];return arguments.length>2&&(o.children=arguments.length>3?_n.call(arguments,2):n),Jt(t.type,o,i||t.key,r||t.ref,null)}function Jr(t,e){var n={__c:e="__cC"+ja++,__:t,Consumer:function(i,r){return i.children(r)},Provider:function(i){var r,s;return this.getChildContext||(r=[],(s={})[e]=this,this.getChildContext=function(){return s},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&r.some(dr)},this.sub=function(o){r.push(o);var a=o.componentWillUnmount;o.componentWillUnmount=function(){r.splice(r.indexOf(o),1),a&&a.call(o)}}),i.children}};return n.Provider.__=n.Consumer.contextType=n}_n=za.slice,S={__e:function(t,e,n,i){for(var r,s,o;e=e.__;)if((r=e.__c)&&!r.__)try{if((s=r.constructor)&&s.getDerivedStateFromError!=null&&(r.setState(s.getDerivedStateFromError(t)),o=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(t,i||{}),o=r.__d),o)return r.__E=r}catch(a){t=a}throw t}},Va=0,Ua=function(t){return t!=null&&t.constructor===void 0},Ee.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Me({},this.state),typeof t=="function"&&(t=t(Me({},n),this.props)),t&&Me(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),dr(this))},Ee.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),dr(this))},Ee.prototype.render=Ie,Yt=[],Ba=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Qn.__r=0,ja=0;var fh=Object.freeze(Object.defineProperty({__proto__:null,render:tt,hydrate:Yr,createElement:Se,h:Se,Fragment:Ie,createRef:Qr,get isValidElement(){return Ua},Component:Ee,cloneElement:Ja,createContext:Jr,toChildArray:ke,get options(){return S}},Symbol.toStringTag,{value:"Module"})),dt,ee,uo,Tt=0,Za=[],lo=S.__b,ho=S.__r,fo=S.diffed,po=S.__c,go=S.unmount;function Ot(t,e){S.__h&&S.__h(ee,t,Tt||e),Tt=0;var n=ee.__H||(ee.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function fe(t){return Tt=1,Zr(ic,t)}function Zr(t,e,n){var i=Ot(dt++,2);return i.t=t,i.__c||(i.__=[n?n(e):ic(void 0,e),function(r){var s=i.t(i.__[0],r);i.__[0]!==s&&(i.__=[s,i.__[1]],i.__c.setState({}))}],i.__c=ee),i.__}function pe(t,e){var n=Ot(dt++,3);!S.__s&&ns(n.__H,e)&&(n.__=t,n.__H=e,ee.__H.__h.push(n))}function es(t,e){var n=Ot(dt++,4);!S.__s&&ns(n.__H,e)&&(n.__=t,n.__H=e,ee.__h.push(n))}function nt(t){return Tt=5,vi(function(){return{current:t}},[])}function ec(t,e,n){Tt=6,es(function(){return typeof t=="function"?(t(e()),function(){return t(null)}):t?(t.current=e(),function(){return t.current=null}):void 0},n==null?n:n.concat(t))}function vi(t,e){var n=Ot(dt++,7);return ns(n.__H,e)&&(n.__=t(),n.__H=e,n.__h=t),n.__}function tc(t,e){return Tt=8,vi(function(){return t},e)}function nc(t){var e=ee.context[t.__c],n=Ot(dt++,9);return n.c=t,e?(n.__==null&&(n.__=!0,e.sub(ee)),e.props.value):t.__}function ts(t,e){S.useDebugValue&&S.useDebugValue(e?e(t):t)}function ph(t){var e=Ot(dt++,10),n=fe();return e.__=t,ee.componentDidCatch||(ee.componentDidCatch=function(i){e.__&&e.__(i),n[1](i)}),[n[0],function(){n[1](void 0)}]}function gh(){for(var t;t=Za.shift();)if(t.__P)try{t.__H.__h.forEach(zn),t.__H.__h.forEach(fr),t.__H.__h=[]}catch(e){t.__H.__h=[],S.__e(e,t.__v)}}S.__b=function(t){ee=null,lo&&lo(t)},S.__r=function(t){ho&&ho(t),dt=0;var e=(ee=t.__c).__H;e&&(e.__h.forEach(zn),e.__h.forEach(fr),e.__h=[])},S.diffed=function(t){fo&&fo(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(Za.push(e)!==1&&uo===S.requestAnimationFrame||((uo=S.requestAnimationFrame)||function(n){var i,r=function(){clearTimeout(s),mo&&cancelAnimationFrame(i),setTimeout(n)},s=setTimeout(r,100);mo&&(i=requestAnimationFrame(r))})(gh)),ee=null},S.__c=function(t,e){e.some(function(n){try{n.__h.forEach(zn),n.__h=n.__h.filter(function(i){return!i.__||fr(i)})}catch(i){e.some(function(r){r.__h&&(r.__h=[])}),e=[],S.__e(i,n.__v)}}),po&&po(t,e)},S.unmount=function(t){go&&go(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{zn(i)}catch(r){e=r}}),e&&S.__e(e,n.__v))};var mo=typeof requestAnimationFrame=="function";function zn(t){var e=ee,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),ee=e}function fr(t){var e=ee;t.__c=t.__(),ee=e}function ns(t,e){return!t||t.length!==e.length||e.some(function(n,i){return n!==t[i]})}function ic(t,e){return typeof e=="function"?e(t):e}function rc(t){if(t.__esModule)return t;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach(function(n){var i=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,i.get?i:{enumerable:!0,get:function(){return t[n]}})}),e}var mh=rc(fh),sc,oc,ac,pr=mh,yh=0;function yo(t,e,n,i,r){var s,o,a={};for(o in e)o=="ref"?s=e[o]:a[o]=e[o];var u={type:t,props:a,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--yh,__source:r,__self:i};if(typeof t=="function"&&(s=t.defaultProps))for(o in s)a[o]===void 0&&(a[o]=s[o]);return pr.options.vnode&&pr.options.vnode(u),u}ac=pr.Fragment,oc=yo,sc=yo;const y=oc,F=sc,it=ac,vh=()=>F("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[y("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),y("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]});const wh=()=>F("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16",children:[y("path",{d:"M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"}),y("path",{d:"M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"})]}),cc=()=>y("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",children:y("path",{d:"M421.84 37.37a25.86 25.86 0 00-22.6-4.46L199.92 86.49A32.3 32.3 0 00176 118v226c0 6.74-4.36 12.56-11.11 14.83l-.12.05-52 18C92.88 383.53 80 402 80 423.91a55.54 55.54 0 0023.23 45.63A54.78 54.78 0 00135.34 480a55.82 55.82 0 0017.75-2.93l.38-.13 21.84-7.94A47.84 47.84 0 00208 423.91v-212c0-7.29 4.77-13.21 12.16-15.07l.21-.06L395 150.14a4 4 0 015 3.86v141.93c0 6.75-4.25 12.38-11.11 14.68l-.25.09-50.89 18.11A49.09 49.09 0 00304 375.92a55.67 55.67 0 0023.23 45.8 54.63 54.63 0 0049.88 7.35l.36-.12 21.84-7.95A47.83 47.83 0 00432 375.92V58a25.74 25.74 0 00-10.16-20.63z"})}),_h=({type:t})=>y(cc,{});class De{static get(e){const n=localStorage.getItem(e);if(n)try{return JSON.parse(n)}catch{console.error(`Failed to parse JSON data for Storage ${e}: `,n)}}static set(e,n){try{localStorage.setItem(e,JSON.stringify(n))}catch{console.error(`Failed to parse JSON data for Storage ${e}: `,n)}}static remove(e){localStorage.removeItem(e)}static use(e,n){const[i,r]=fe(De.get(e)||n),s=o=>{o.key===e&&r(De.get(e))};return window.addEventListener("storage",s),[i,o=>{De.set(e,o),r(o)}]}}class j{static enabled=!0;static clean(){const e=Date.now();for(var n=0;n<localStorage.length;n++){const i=localStorage.key(n);if(!i)continue;const r=De.get(i);!r||r?.created>0&&r?.expired>0&&r?.value&&r.expired<=e&&De.remove(i)}}static get(e){if(!j.enabled)return;const n=localStorage.getItem(e);if(n)try{const i=JSON.parse(n);if(Date.now()>i.expired){this.remove(e);return}return i.value}catch{console.error(`Failed to parse JSON get data for Cache ${e}: `,n)}}static set(e,n,i=36e3){if(j.enabled)try{const r=Date.now();localStorage.setItem(e,JSON.stringify({value:n,maxAge:i,expired:r+i*1e3,created:r}))}catch{console.error(`Failed to parse JSON save data for Cache ${e}: `,n)}}static remove(e){localStorage.removeItem(e)}static use(e,n){if(!j.enabled)return[n,()=>{}];const[i,r]=fe(j.get(e)||n),s=o=>{o.key===e&&r(j.get(e))};return window.addEventListener("storage",s),[i,o=>{j.set(e,o),r(o)}]}}const vo=t=>{let e;const n=new Set,i=(u,l)=>{const c=typeof u=="function"?u(e):u;if(c!==e){const h=e;e=l?c:Object.assign({},e,c),n.forEach(d=>d(e,h))}},r=()=>e,a={setState:i,getState:r,subscribe:u=>(n.add(u),()=>n.delete(u)),destroy:()=>n.clear()};return e=t(i,r,a),a},bh=t=>t?vo(t):vo;function uc(t,e){for(var n in e)t[n]=e[n];return t}function gr(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var i in e)if(i!=="__source"&&t[i]!==e[i])return!0;return!1}function Yn(t){this.props=t}function lc(t,e){function n(r){var s=this.props.ref,o=s==r.ref;return!o&&s&&(s.call?s(null):s.current=null),e?!e(this.props,r)||!o:gr(this.props,r)}function i(r){return this.shouldComponentUpdate=n,Se(t,r)}return i.displayName="Memo("+(t.displayName||t.name)+")",i.prototype.isReactComponent=!0,i.__f=!0,i}(Yn.prototype=new Ee).isPureReactComponent=!0,Yn.prototype.shouldComponentUpdate=function(t,e){return gr(this.props,t)||gr(this.state,e)};var wo=S.__b;S.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),wo&&wo(t)};var Eh=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function hc(t){function e(n){var i=uc({},n);return delete i.ref,t(i,n.ref||null)}return e.$$typeof=Eh,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(t.displayName||t.name)+")",e}var _o=function(t,e){return t==null?null:ke(ke(t).map(e))},dc={map:_o,forEach:_o,count:function(t){return t?ke(t).length:0},only:function(t){var e=ke(t);if(e.length!==1)throw"Children.only";return e[0]},toArray:ke},Sh=S.__e;S.__e=function(t,e,n,i){if(t.then){for(var r,s=e;s=s.__;)if((r=s.__c)&&r.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),r.__c(t,e)}Sh(t,e,n,i)};var bo=S.unmount;function Zt(){this.__u=0,this.t=null,this.__b=null}function fc(t){var e=t.__.__c;return e&&e.__e&&e.__e(t)}function pc(t){var e,n,i;function r(s){if(e||(e=t()).then(function(o){n=o.default||o},function(o){i=o}),i)throw i;if(!n)throw e;return Se(n,s)}return r.displayName="Lazy",r.__f=!0,r}function gt(){this.u=null,this.o=null}S.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&t.__h===!0&&(t.type=null),bo&&bo(t)},(Zt.prototype=new Ee).__c=function(t,e){var n=e.__c,i=this;i.t==null&&(i.t=[]),i.t.push(n);var r=fc(i.__v),s=!1,o=function(){s||(s=!0,n.__R=null,r?r(a):a())};n.__R=o;var a=function(){if(!--i.__u){if(i.state.__e){var l=i.state.__e;i.__v.__k[0]=function h(d,f,p){return d&&(d.__v=null,d.__k=d.__k&&d.__k.map(function(k){return h(k,f,p)}),d.__c&&d.__c.__P===f&&(d.__e&&p.insertBefore(d.__e,d.__d),d.__c.__e=!0,d.__c.__P=p)),d}(l,l.__c.__P,l.__c.__O)}var c;for(i.setState({__e:i.__b=null});c=i.t.pop();)c.forceUpdate()}},u=e.__h===!0;i.__u++||u||i.setState({__e:i.__b=i.__v.__k[0]}),t.then(o,o)},Zt.prototype.componentWillUnmount=function(){this.t=[]},Zt.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=function s(o,a,u){return o&&(o.__c&&o.__c.__H&&(o.__c.__H.__.forEach(function(l){typeof l.__c=="function"&&l.__c()}),o.__c.__H=null),(o=uc({},o)).__c!=null&&(o.__c.__P===u&&(o.__c.__P=a),o.__c=null),o.__k=o.__k&&o.__k.map(function(l){return s(l,a,u)})),o}(this.__b,n,i.__O=i.__P)}this.__b=null}var r=e.__e&&Se(Ie,null,t.fallback);return r&&(r.__h=null),[Se(Ie,null,e.__e?null:t.children),r]};var Eo=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};function Th(t){return this.getChildContext=function(){return t.context},t.children}function Ih(t){var e=this,n=t.i;e.componentWillUnmount=function(){tt(null,e.l),e.l=null,e.i=null},e.i&&e.i!==n&&e.componentWillUnmount(),t.__v?(e.l||(e.i=n,e.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(i){this.childNodes.push(i),e.i.appendChild(i)},insertBefore:function(i,r){this.childNodes.push(i),e.i.appendChild(i)},removeChild:function(i){this.childNodes.splice(this.childNodes.indexOf(i)>>>1,1),e.i.removeChild(i)}}),tt(Se(Th,{context:e.context},t.__v),e.l)):e.l&&e.componentWillUnmount()}function gc(t,e){return Se(Ih,{__v:t,i:e})}(gt.prototype=new Ee).__e=function(t){var e=this,n=fc(e.__v),i=e.o.get(t);return i[0]++,function(r){var s=function(){e.props.revealOrder?(i.push(r),Eo(e,t,i)):r()};n?n(s):s()}},gt.prototype.render=function(t){this.u=null,this.o=new Map;var e=ke(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},gt.prototype.componentDidUpdate=gt.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(e,n){Eo(t,n,e)})};var mc=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Ch=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,xh=typeof document<"u",Ah=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(t)};function yc(t,e,n){return e.__k==null&&(e.textContent=""),tt(t,e),typeof n=="function"&&n(),t?t.__c:null}function vc(t,e,n){return Yr(t,e),typeof n=="function"&&n(),t?t.__c:null}Ee.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(Ee.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var So=S.event;function kh(){}function Dh(){return this.cancelBubble}function Nh(){return this.defaultPrevented}S.event=function(t){return So&&(t=So(t)),t.persist=kh,t.isPropagationStopped=Dh,t.isDefaultPrevented=Nh,t.nativeEvent=t};var wc,To={configurable:!0,get:function(){return this.class}},Io=S.vnode;S.vnode=function(t){var e=t.type,n=t.props,i=n;if(typeof e=="string"){var r=e.indexOf("-")===-1;for(var s in i={},n){var o=n[s];xh&&s==="children"&&e==="noscript"||s==="value"&&"defaultValue"in n&&o==null||(s==="defaultValue"&&"value"in n&&n.value==null?s="value":s==="download"&&o===!0?o="":/ondoubleclick/i.test(s)?s="ondblclick":/^onchange(textarea|input)/i.test(s+e)&&!Ah(n.type)?s="oninput":/^onfocus$/i.test(s)?s="onfocusin":/^onblur$/i.test(s)?s="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(s)?s=s.toLowerCase():r&&Ch.test(s)?s=s.replace(/[A-Z0-9]/,"-$&").toLowerCase():o===null&&(o=void 0),i[s]=o)}e=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=ke(n.children).forEach(function(a){a.props.selected=i.value.indexOf(a.props.value)!=-1})),e=="select"&&i.defaultValue!=null&&(i.value=ke(n.children).forEach(function(a){a.props.selected=i.multiple?i.defaultValue.indexOf(a.props.value)!=-1:i.defaultValue==a.props.value})),t.props=i,n.class!=n.className&&(To.enumerable="className"in n,n.className!=null&&(i.class=n.className),Object.defineProperty(i,"className",To))}t.$$typeof=mc,Io&&Io(t)};var Co=S.__r;S.__r=function(t){Co&&Co(t),wc=t.__c};var _c={ReactCurrentDispatcher:{current:{readContext:function(t){return wc.__n[t.__c].props.value}}}},Rh="17.0.2";function bc(t){return Se.bind(null,t)}function is(t){return!!t&&t.$$typeof===mc}function Ec(t){return is(t)?Ja.apply(null,arguments):t}function Sc(t){return!!t.__k&&(tt(null,t),!0)}function Tc(t){return t&&(t.base||t.nodeType===1&&t)||null}var Ic=function(t,e){return t(e)},Cc=function(t,e){return t(e)},Mh=Ie,Oh={useState:fe,useReducer:Zr,useEffect:pe,useLayoutEffect:es,useRef:nt,useImperativeHandle:ec,useMemo:vi,useCallback:tc,useContext:nc,useDebugValue:ts,version:"17.0.2",Children:dc,render:yc,hydrate:vc,unmountComponentAtNode:Sc,createPortal:gc,createElement:Se,createContext:Jr,createFactory:bc,cloneElement:Ec,createRef:Qr,Fragment:Ie,isValidElement:is,findDOMNode:Tc,Component:Ee,PureComponent:Yn,memo:lc,forwardRef:hc,flushSync:Cc,unstable_batchedUpdates:Ic,StrictMode:Ie,Suspense:Zt,SuspenseList:gt,lazy:pc,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:_c},Lh=Object.freeze(Object.defineProperty({__proto__:null,default:Oh,version:Rh,Children:dc,render:yc,hydrate:vc,unmountComponentAtNode:Sc,createPortal:gc,createFactory:bc,cloneElement:Ec,isValidElement:is,findDOMNode:Tc,PureComponent:Yn,memo:lc,forwardRef:hc,flushSync:Cc,unstable_batchedUpdates:Ic,StrictMode:Mh,Suspense:Zt,SuspenseList:gt,lazy:pc,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:_c,createElement:Se,createContext:Jr,createRef:Qr,Fragment:Ie,Component:Ee,useState:fe,useReducer:Zr,useEffect:pe,useLayoutEffect:es,useRef:nt,useImperativeHandle:ec,useMemo:vi,useCallback:tc,useContext:nc,useDebugValue:ts,useErrorBoundary:ph},Symbol.toStringTag,{value:"Module"})),xc={exports:{}},Ac={},kc=rc(Lh),Dc={exports:{}},Nc={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var It=kc;function $h(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ph=typeof Object.is=="function"?Object.is:$h,Fh=It.useState,Vh=It.useEffect,Uh=It.useLayoutEffect,Bh=It.useDebugValue;function jh(t,e){var n=e(),i=Fh({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return Uh(function(){r.value=n,r.getSnapshot=e,Hi(r)&&s({inst:r})},[t,n,e]),Vh(function(){return Hi(r)&&s({inst:r}),t(function(){Hi(r)&&s({inst:r})})},[t]),Bh(n),n}function Hi(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ph(t,n)}catch{return!0}}function zh(t,e){return e()}var Hh=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?zh:jh;Nc.useSyncExternalStore=It.useSyncExternalStore!==void 0?It.useSyncExternalStore:Hh;Dc.exports=Nc;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wi=kc,qh=Dc.exports;function Wh(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kh=typeof Object.is=="function"?Object.is:Wh,Gh=qh.useSyncExternalStore,Qh=wi.useRef,Xh=wi.useEffect,Yh=wi.useMemo,Jh=wi.useDebugValue;Ac.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=Qh(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=Yh(function(){function u(f){if(!l){if(l=!0,c=f,f=i(f),r!==void 0&&o.hasValue){var p=o.value;if(r(p,f))return h=p}return h=f}if(p=h,Kh(c,f))return p;var k=i(f);return r!==void 0&&r(p,k)?p:(c=f,h=k)}var l=!1,c,h,d=n===void 0?null:n;return[function(){return u(e())},d===null?void 0:function(){return u(d())}]},[e,n,i,r]);var a=Gh(t,s[0],s[1]);return Xh(function(){o.hasValue=!0,o.value=a},[a]),Jh(a),a};xc.exports=Ac;function Zh(t,e=t.getState,n){const i=xc.exports.useSyncExternalStoreWithSelector(t.subscribe,t.getState,t.getServerState||t.getState,e,n);return ts(i),i}const xo=t=>{const e=typeof t=="function"?bh(t):t,n=(i,r)=>Zh(e,i,r);return Object.assign(n,e),n},ed=t=>t?xo(t):xo;var Rc=ed;const Ln={id:null,flush:!1,maxAge:0};class rs{_store;get zustand(){return this._store}_id=null;_flush=!1;_maxAge=0;constructor(e,{id:n=Ln.id,flush:i=Ln.flush,maxAge:r=Ln.maxAge}=Ln){if(this._id=n,this._flush=i,this._maxAge=r,this._id){let s;this._flush||(this._maxAge>0?s=j.get(this._id):s=De.get(this._id)??e),e=s??e,this._maxAge>0?j.set(this._id,e,this._maxAge):De.set(this._id,e)}this._store=Rc(()=>e)}use=(e,n)=>this._store(e,n);get=()=>this._store.getState();set=(e,n)=>{this._store.setState(e,n),this._id&&(this._maxAge>0?j.set(this._id,this._store.getState(),this._maxAge):De.set(this._id,this._store.getState()))};sub=e=>this._store.subscribe(e)}const td="ourpres";var nd=(t=>(t[t.TYPE=0]="TYPE",t[t.ID=1]="ID",t[t.SONG=2]="SONG",t[t.SLIDE=3]="SLIDE",t))(nd||{}),id=(t=>(t.NEWTAB="newtab",t.SETLIST="setlist",t.PRESENT="present",t))(id||{});const Re=`${td}://newtab`;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},rd=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],u=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(u>>10)),e[i++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},sd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,u=r+2<t.length,l=u?t[r+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;u||(f=64,o||(d=64)),i.push(n[c],n[h],n[d],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Mc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||l==null||h==null)throw Error();const d=s<<2|a>>4;if(i.push(d),l!==64){const f=a<<4&240|l>>2;if(i.push(f),h!==64){const p=l<<6&192|h;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},od=function(t){const e=Mc(t);return sd.encodeByteArray(e,!0)},Oc=function(t){return od(t).replace(/\./g,"")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_i())}function ud(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ld(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hd(){return _i().indexOf("Electron/")>=0}function dd(){const t=_i();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fd(){return _i().indexOf("MSAppHost/")>=0}function pd(){return typeof indexedDB=="object"}function gd(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md="FirebaseError";class Lt extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=md,Object.setPrototypeOf(this,Lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lc.prototype.create)}}class Lc{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?yd(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Lt(r,a,i)}}function yd(t,e){return t.replace(vd,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const vd=/\{\$([^}]+)}/g;function mr(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(Ao(s)&&Ao(o)){if(!mr(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Ao(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(t){return t&&t._delegate?t._delegate:t}class an{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new ad;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e?.identifier),r=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bd(e))try{this.getOrInitializeService({instanceIdentifier:Ge})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Ge){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ge){return this.instances.has(e)}getOptions(e=Ge){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:_d(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ge){return this.component?this.component.multipleInstances?e:Ge:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _d(t){return t===Ge?void 0:t}function bd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})($||($={}));const Sd={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},Td=$.INFO,Id={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},Cd=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=Id[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $c{constructor(e){this.name=e,this._logLevel=Td,this._logHandler=Cd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const xd=(t,e)=>e.some(n=>t instanceof n);let ko,Do;function Ad(){return ko||(ko=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kd(){return Do||(Do=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pc=new WeakMap,yr=new WeakMap,Fc=new WeakMap,qi=new WeakMap,ss=new WeakMap;function Dd(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ve(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Pc.set(n,t)}).catch(()=>{}),ss.set(e,t),e}function Nd(t){if(yr.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});yr.set(t,e)}let vr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ve(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Rd(t){vr=t(vr)}function Md(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Wi(this),e,...n);return Fc.set(i,e.sort?e.sort():[e]),Ve(i)}:kd().includes(t)?function(...e){return t.apply(Wi(this),e),Ve(Pc.get(this))}:function(...e){return Ve(t.apply(Wi(this),e))}}function Od(t){return typeof t=="function"?Md(t):(t instanceof IDBTransaction&&Nd(t),xd(t,Ad())?new Proxy(t,vr):t)}function Ve(t){if(t instanceof IDBRequest)return Dd(t);if(qi.has(t))return qi.get(t);const e=Od(t);return e!==t&&(qi.set(t,e),ss.set(e,t)),e}const Wi=t=>ss.get(t);function Ld(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Ve(o);return i&&o.addEventListener("upgradeneeded",u=>{i(Ve(o.result),u.oldVersion,u.newVersion,Ve(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(u=>{s&&u.addEventListener("close",()=>s()),r&&u.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const $d=["get","getKey","getAll","getAllKeys","count"],Pd=["put","add","delete","clear"],Ki=new Map;function No(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ki.get(e))return Ki.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Pd.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||$d.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,r?"readwrite":"readonly");let l=u.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&u.done]))[0]};return Ki.set(e,s),s}Rd(t=>({...t,get:(e,n,i)=>No(e,n)||t.get(e,n,i),has:(e,n)=>!!No(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Vd(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Vd(t){const e=t.getComponent();return e?.type==="VERSION"}const wr="@firebase/app",Ro="0.7.31";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt=new $c("@firebase/app"),Ud="@firebase/app-compat",Bd="@firebase/analytics-compat",jd="@firebase/analytics",zd="@firebase/app-check-compat",Hd="@firebase/app-check",qd="@firebase/auth",Wd="@firebase/auth-compat",Kd="@firebase/database",Gd="@firebase/database-compat",Qd="@firebase/functions",Xd="@firebase/functions-compat",Yd="@firebase/installations",Jd="@firebase/installations-compat",Zd="@firebase/messaging",ef="@firebase/messaging-compat",tf="@firebase/performance",nf="@firebase/performance-compat",rf="@firebase/remote-config",sf="@firebase/remote-config-compat",of="@firebase/storage",af="@firebase/storage-compat",cf="@firebase/firestore",uf="@firebase/firestore-compat",lf="firebase",hf="9.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc="[DEFAULT]",df={[wr]:"fire-core",[Ud]:"fire-core-compat",[jd]:"fire-analytics",[Bd]:"fire-analytics-compat",[Hd]:"fire-app-check",[zd]:"fire-app-check-compat",[qd]:"fire-auth",[Wd]:"fire-auth-compat",[Kd]:"fire-rtdb",[Gd]:"fire-rtdb-compat",[Qd]:"fire-fn",[Xd]:"fire-fn-compat",[Yd]:"fire-iid",[Jd]:"fire-iid-compat",[Zd]:"fire-fcm",[ef]:"fire-fcm-compat",[tf]:"fire-perf",[nf]:"fire-perf-compat",[rf]:"fire-rc",[sf]:"fire-rc-compat",[of]:"fire-gcs",[af]:"fire-gcs-compat",[cf]:"fire-fst",[uf]:"fire-fst-compat","fire-js":"fire-js",[lf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=new Map,_r=new Map;function ff(t,e){try{t.container.addComponent(e)}catch(n){rt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zn(t){const e=t.name;if(_r.has(e))return rt.debug(`There were multiple attempts to register component ${e}.`),!1;_r.set(e,t);for(const n of Jn.values())ff(n,t);return!0}function pf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},st=new Lc("app","Firebase",gf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new an("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw st.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf=hf;function vf(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Vc,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw st.create("bad-app-name",{appName:String(i)});const r=Jn.get(i);if(r){if(mr(t,r.options)&&mr(n,r.config))return r;throw st.create("duplicate-app",{appName:i})}const s=new Ed(i);for(const a of _r.values())s.addComponent(a);const o=new mf(t,n,s);return Jn.set(i,o),o}function wf(t=Vc){const e=Jn.get(t);if(!e)throw st.create("no-app",{appName:t});return e}function vt(t,e,n){var i;let r=(i=df[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rt.warn(a.join(" "));return}Zn(new an(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f="firebase-heartbeat-database",bf=1,cn="firebase-heartbeat-store";let Gi=null;function Uc(){return Gi||(Gi=Ld(_f,bf,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(cn)}}}).catch(t=>{throw st.create("idb-open",{originalErrorMessage:t.message})})),Gi}async function Ef(t){var e;try{return(await Uc()).transaction(cn).objectStore(cn).get(Bc(t))}catch(n){if(n instanceof Lt)rt.warn(n.message);else{const i=st.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});rt.warn(i.message)}}}async function Mo(t,e){var n;try{const r=(await Uc()).transaction(cn,"readwrite");return await r.objectStore(cn).put(e,Bc(t)),r.done}catch(i){if(i instanceof Lt)rt.warn(i.message);else{const r=st.create("idb-set",{originalErrorMessage:(n=i)===null||n===void 0?void 0:n.message});rt.warn(r.message)}}}function Bc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf=1024,Tf=30*24*60*60*1e3;class If{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xf(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Oo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=Tf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Oo(),{heartbeatsToSend:n,unsentEntries:i}=Cf(this._heartbeatsCache.heartbeats),r=Oc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Oo(){return new Date().toISOString().substring(0,10)}function Cf(t,e=Sf){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Lo(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Lo(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class xf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pd()?gd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ef(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Mo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Mo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Lo(t){return Oc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(t){Zn(new an("platform-logger",e=>new Fd(e),"PRIVATE")),Zn(new an("heartbeat",e=>new If(e),"PRIVATE")),vt(wr,Ro,t),vt(wr,Ro,"esm2017"),vt("fire-js","")}Af("");var kf="firebase",Df="9.9.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt(kf,Df,"app");var Nf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},v,os=os||{},A=Nf||self;function ei(){}function br(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function bn(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Rf(t){return Object.prototype.hasOwnProperty.call(t,Qi)&&t[Qi]||(t[Qi]=++Mf)}var Qi="closure_uid_"+(1e9*Math.random()>>>0),Mf=0;function Of(t,e,n){return t.call.apply(t.bind,arguments)}function Lf(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function te(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?te=Of:te=Lf,te.apply(null,arguments)}function $n(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function re(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(i,o)}}function qe(){this.s=this.s,this.o=this.o}var $f=0;qe.prototype.s=!1;qe.prototype.na=function(){!this.s&&(this.s=!0,this.M(),$f!=0)&&Rf(this)};qe.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const jc=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},zc=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<i;s++)s in r&&e.call(n,r[s],s,t)};function Pf(t){e:{var e=Ap;const n=t.length,i=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in i&&e.call(void 0,i[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function $o(t){return Array.prototype.concat.apply([],arguments)}function as(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function ti(t){return/^[\s\xa0]*$/.test(t)}var Po=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ce(t,e){return t.indexOf(e)!=-1}function Xi(t,e){return t<e?-1:t>e?1:0}var ue;e:{var Fo=A.navigator;if(Fo){var Vo=Fo.userAgent;if(Vo){ue=Vo;break e}}ue=""}function cs(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Hc(t){const e={};for(const n in t)e[n]=t[n];return e}var Uo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qc(t,e){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)t[n]=i[n];for(let s=0;s<Uo.length;s++)n=Uo[s],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function us(t){return us[" "](t),t}us[" "]=ei;function Ff(t){var e=Bf;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Vf=ce(ue,"Opera"),Ct=ce(ue,"Trident")||ce(ue,"MSIE"),Wc=ce(ue,"Edge"),Er=Wc||Ct,Kc=ce(ue,"Gecko")&&!(ce(ue.toLowerCase(),"webkit")&&!ce(ue,"Edge"))&&!(ce(ue,"Trident")||ce(ue,"MSIE"))&&!ce(ue,"Edge"),Uf=ce(ue.toLowerCase(),"webkit")&&!ce(ue,"Edge");function Gc(){var t=A.document;return t?t.documentMode:void 0}var ni;e:{var Yi="",Ji=function(){var t=ue;if(Kc)return/rv:([^\);]+)(\)|;)/.exec(t);if(Wc)return/Edge\/([\d\.]+)/.exec(t);if(Ct)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Uf)return/WebKit\/(\S+)/.exec(t);if(Vf)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ji&&(Yi=Ji?Ji[1]:""),Ct){var Zi=Gc();if(Zi!=null&&Zi>parseFloat(Yi)){ni=String(Zi);break e}}ni=Yi}var Bf={};function jf(){return Ff(function(){let t=0;const e=Po(String(ni)).split("."),n=Po("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r[0].length==0&&s[0].length==0)break;t=Xi(r[1].length==0?0:parseInt(r[1],10),s[1].length==0?0:parseInt(s[1],10))||Xi(r[2].length==0,s[2].length==0)||Xi(r[2],s[2]),r=r[3],s=s[3]}while(t==0)}return 0<=t})}var Sr;if(A.document&&Ct){var Bo=Gc();Sr=Bo||parseInt(ni,10)||void 0}else Sr=void 0;var zf=Sr,Hf=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{A.addEventListener("test",ei,e),A.removeEventListener("test",ei,e)}catch{}return t}();function oe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}oe.prototype.h=function(){this.defaultPrevented=!0};function un(t,e){if(oe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Kc){e:{try{us(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:qf[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&un.Z.h.call(this)}}re(un,oe);var qf={2:"touch",3:"pen",4:"mouse"};un.prototype.h=function(){un.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var En="closure_listenable_"+(1e6*Math.random()|0),Wf=0;function Kf(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=r,this.key=++Wf,this.ca=this.fa=!1}function bi(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Ei(t){this.src=t,this.g={},this.h=0}Ei.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Ir(t,e,i,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new Kf(e,this.src,s,!!i,r),e.fa=n,t.push(e)),e};function Tr(t,e){var n=e.type;if(n in t.g){var i=t.g[n],r=jc(i,e),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(bi(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ir(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==i)return r}return-1}var ls="closure_lm_"+(1e6*Math.random()|0),er={};function Qc(t,e,n,i,r){if(i&&i.once)return Yc(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Qc(t,e[s],n,i,r);return null}return n=fs(n),t&&t[En]?t.N(e,n,bn(i)?!!i.capture:!!i,r):Xc(t,e,n,!1,i,r)}function Xc(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=bn(r)?!!r.capture:!!r,a=ds(t);if(a||(t[ls]=a=new Ei(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=Gf(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Hf||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(Zc(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Gf(){function t(n){return e.call(t.src,t.listener,n)}var e=Qf;return t}function Yc(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Yc(t,e[s],n,i,r);return null}return n=fs(n),t&&t[En]?t.O(e,n,bn(i)?!!i.capture:!!i,r):Xc(t,e,n,!0,i,r)}function Jc(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)Jc(t,e[s],n,i,r);else i=bn(i)?!!i.capture:!!i,n=fs(n),t&&t[En]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Ir(s,n,i,r),-1<n&&(bi(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=ds(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ir(e,n,i,r)),(n=-1<t?e[t]:null)&&hs(n))}function hs(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[En])Tr(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Zc(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=ds(e))?(Tr(n,t),n.h==0&&(n.src=null,e[ls]=null)):bi(t)}}}function Zc(t){return t in er?er[t]:er[t]="on"+t}function Qf(t,e){if(t.ca)t=!0;else{e=new un(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&hs(t),t=n.call(i,e)}return t}function ds(t){return t=t[ls],t instanceof Ei?t:null}var tr="__closure_events_fn_"+(1e9*Math.random()>>>0);function fs(t){return typeof t=="function"?t:(t[tr]||(t[tr]=function(e){return t.handleEvent(e)}),t[tr])}function X(){qe.call(this),this.i=new Ei(this),this.P=this,this.I=null}re(X,qe);X.prototype[En]=!0;X.prototype.removeEventListener=function(t,e,n,i){Jc(this,t,e,n,i)};function ne(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new oe(e,t);else if(e instanceof oe)e.target=e.target||t;else{var r=e;e=new oe(i,t),qc(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=Pn(o,i,!0,e)&&r}if(o=e.g=t,r=Pn(o,i,!0,e)&&r,r=Pn(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=Pn(o,i,!1,e)&&r}X.prototype.M=function(){if(X.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)bi(n[i]);delete t.g[e],t.h--}}this.I=null};X.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};X.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Pn(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&Tr(t.i,o),r=a.call(u,i)!==!1&&r}}return r&&!i.defaultPrevented}var ps=A.JSON.stringify;function Xf(){var t=tu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Yf{constructor(){this.h=this.g=null}add(e,n){const i=eu.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var eu=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Jf,t=>t.reset());class Jf{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Zf(t){A.setTimeout(()=>{throw t},0)}function gs(t,e){Cr||ep(),xr||(Cr(),xr=!0),tu.add(t,e)}var Cr;function ep(){var t=A.Promise.resolve(void 0);Cr=function(){t.then(tp)}}var xr=!1,tu=new Yf;function tp(){for(var t;t=Xf();){try{t.h.call(t.g)}catch(n){Zf(n)}var e=eu;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}xr=!1}function Si(t,e){X.call(this),this.h=t||1,this.g=e||A,this.j=te(this.kb,this),this.l=Date.now()}re(Si,X);v=Si.prototype;v.da=!1;v.S=null;v.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),ne(this,"tick"),this.da&&(ms(this),this.start()))}};v.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ms(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}v.M=function(){Si.Z.M.call(this),ms(this),delete this.g};function ys(t,e,n){if(typeof t=="function")n&&(t=te(t,n));else if(t&&typeof t.handleEvent=="function")t=te(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:A.setTimeout(t,e||0)}function nu(t){t.g=ys(()=>{t.g=null,t.i&&(t.i=!1,nu(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class np extends qe{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:nu(this)}M(){super.M(),this.g&&(A.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ln(t){qe.call(this),this.h=t,this.g={}}re(ln,qe);var jo=[];function iu(t,e,n,i){Array.isArray(n)||(n&&(jo[0]=n.toString()),n=jo);for(var r=0;r<n.length;r++){var s=Qc(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function ru(t){cs(t.g,function(e,n){this.g.hasOwnProperty(n)&&hs(e)},t),t.g={}}ln.prototype.M=function(){ln.Z.M.call(this),ru(this)};ln.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ti(){this.g=!0}Ti.prototype.Aa=function(){this.g=!1};function ip(t,e,n,i,r,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function rp(t,e,n,i,r,s,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+n+`
`+s+" "+o})}function mt(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+op(t,n)+(i?" "+i:"")})}function sp(t,e){t.info(function(){return"TIMEOUT: "+e})}Ti.prototype.info=function(){};function op(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return ps(n)}catch{return e}}var ft={},zo=null;function Ii(){return zo=zo||new X}ft.Ma="serverreachability";function su(t){oe.call(this,ft.Ma,t)}re(su,oe);function hn(t){const e=Ii();ne(e,new su(e))}ft.STAT_EVENT="statevent";function ou(t,e){oe.call(this,ft.STAT_EVENT,t),this.stat=e}re(ou,oe);function he(t){const e=Ii();ne(e,new ou(e,t))}ft.Na="timingevent";function au(t,e){oe.call(this,ft.Na,t),this.size=e}re(au,oe);function Sn(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return A.setTimeout(function(){t()},e)}var Ci={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},cu={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function vs(){}vs.prototype.h=null;function Ho(t){return t.h||(t.h=t.i())}function uu(){}var Tn={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ws(){oe.call(this,"d")}re(ws,oe);function _s(){oe.call(this,"c")}re(_s,oe);var Ar;function xi(){}re(xi,vs);xi.prototype.g=function(){return new XMLHttpRequest};xi.prototype.i=function(){return{}};Ar=new xi;function In(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new ln(this),this.P=ap,t=Er?125:void 0,this.W=new Si(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new lu}function lu(){this.i=null,this.g="",this.h=!1}var ap=45e3,kr={},ii={};v=In.prototype;v.setTimeout=function(t){this.P=t};function Dr(t,e,n){t.K=1,t.v=ki($e(e)),t.s=n,t.U=!0,hu(t,null)}function hu(t,e){t.F=Date.now(),Cn(t),t.A=$e(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),vu(n.h,"t",i),t.C=0,n=t.l.H,t.h=new lu,t.g=Fu(t.l,n?e:null,!t.s),0<t.O&&(t.L=new np(te(t.Ia,t,t.g),t.O)),iu(t.V,t.g,"readystatechange",t.gb),e=t.H?Hc(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),hn(),ip(t.j,t.u,t.A,t.m,t.X,t.s)}v.gb=function(t){t=t.target;const e=this.L;e&&Oe(t)==3?e.l():this.Ia(t)};v.Ia=function(t){try{if(t==this.g)e:{const c=Oe(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||Er||this.g&&(this.h.h||this.g.ga()||Go(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?hn(3):hn(2)),Ai(this);var n=this.g.ba();this.N=n;t:if(du(this)){var i=Go(this.g);t="";var r=i.length,s=Oe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qe(this),en(this);var o="";break t}this.h.i=new A.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,rp(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ti(a)){var l=a;break t}}l=null}if(n=l)mt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Nr(this,n);else{this.i=!1,this.o=3,he(12),Qe(this),en(this);break e}}this.U?(fu(this,c,o),Er&&this.i&&c==3&&(iu(this.V,this.W,"tick",this.fb),this.W.start())):(mt(this.j,this.m,o,null),Nr(this,o)),c==4&&Qe(this),this.i&&!this.I&&(c==4?Ou(this.l,this):(this.i=!1,Cn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,he(12)):(this.o=0,he(13)),Qe(this),en(this)}}}catch{}finally{}};function du(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function fu(t,e,n){let i=!0,r;for(;!t.I&&t.C<n.length;)if(r=cp(t,n),r==ii){e==4&&(t.o=4,he(14),i=!1),mt(t.j,t.m,null,"[Incomplete Response]");break}else if(r==kr){t.o=4,he(15),mt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else mt(t.j,t.m,r,null),Nr(t,r);du(t)&&r!=ii&&r!=kr&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,he(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ks(e),e.L=!0,he(11))):(mt(t.j,t.m,n,"[Invalid Chunked Response]"),Qe(t),en(t))}v.fb=function(){if(this.g){var t=Oe(this.g),e=this.g.ga();this.C<e.length&&(Ai(this),fu(this,t,e),this.i&&t!=4&&Cn(this))}};function cp(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?ii:(n=Number(e.substring(n,i)),isNaN(n)?kr:(i+=1,i+n>e.length?ii:(e=e.substr(i,n),t.C=i+n,e)))}v.cancel=function(){this.I=!0,Qe(this)};function Cn(t){t.Y=Date.now()+t.P,pu(t,t.P)}function pu(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Sn(te(t.eb,t),e)}function Ai(t){t.B&&(A.clearTimeout(t.B),t.B=null)}v.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(sp(this.j,this.A),this.K!=2&&(hn(),he(17)),Qe(this),this.o=2,en(this)):pu(this,this.Y-t)};function en(t){t.l.G==0||t.I||Ou(t.l,t)}function Qe(t){Ai(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ms(t.W),ru(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Nr(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Rr(n.i,t))){if(n.I=t.N,!t.J&&Rr(n.i,t)&&n.G==3){try{var i=n.Ca.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ai(n),Ri(n);else break e;As(n),he(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=Sn(te(n.ab,n),6e3));if(1>=bu(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Xe(n,11)}else if((t.J||n.g==t)&&ai(n),!ti(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const c=l[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=i.i;!s.g&&(ce(p,"spdy")||ce(p,"quic")||ce(p,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Ss(s,s.h),s.h=null))}if(i.D){const k=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;k&&(i.sa=k,B(i.F,i.D,k))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var o=t;if(i.oa=Pu(i,i.H?i.la:null,i.W),o.J){Eu(i.i,o);var a=o,u=i.K;u&&a.setTimeout(u),a.B&&(Ai(a),Cn(a)),i.g=o}else Ru(i);0<n.l.length&&Mi(n)}else l[0]!="stop"&&l[0]!="close"||Xe(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Xe(n,7):xs(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}hn(4)}catch{}}function up(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(br(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function bs(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(br(t)||typeof t=="string")zc(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(br(t)||typeof t=="string"){n=[];for(var i=t.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,t)n[i++]=r;i=up(t),r=i.length;for(var s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}}function $t(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof $t)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}v=$t.prototype;v.R=function(){Es(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};v.T=function(){return Es(this),this.g.concat()};function Es(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];ot(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)i=t.g[e],ot(r,i)||(t.g[n++]=i,r[i]=1),e++;t.g.length=n}}v.get=function(t,e){return ot(this.h,t)?this.h[t]:e};v.set=function(t,e){ot(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};v.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);t.call(e,s,r,this)}};function ot(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var gu=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function lp(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function at(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof at){this.g=e!==void 0?e:t.g,ri(this,t.j),this.s=t.s,si(this,t.i),oi(this,t.m),this.l=t.l,e=t.h;var n=new dn;n.i=e.i,e.g&&(n.g=new $t(e.g),n.h=e.h),qo(this,n),this.o=t.o}else t&&(n=String(t).match(gu))?(this.g=!!e,ri(this,n[1]||"",!0),this.s=tn(n[2]||""),si(this,n[3]||"",!0),oi(this,n[4]),this.l=tn(n[5]||"",!0),qo(this,n[6]||"",!0),this.o=tn(n[7]||"")):(this.g=!!e,this.h=new dn(null,this.g))}at.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Kt(e,Wo,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Kt(e,Wo,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Kt(n,n.charAt(0)=="/"?gp:pp,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Kt(n,yp)),t.join("")};function $e(t){return new at(t)}function ri(t,e,n){t.j=n?tn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function si(t,e,n){t.i=n?tn(e,!0):e}function oi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function qo(t,e,n){e instanceof dn?(t.h=e,vp(t.h,t.g)):(n||(e=Kt(e,mp)),t.h=new dn(e,t.g))}function B(t,e,n){t.h.set(e,n)}function ki(t){return B(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function hp(t){return t instanceof at?$e(t):new at(t,void 0)}function dp(t,e,n,i){var r=new at(null,void 0);return t&&ri(r,t),e&&si(r,e),n&&oi(r,n),i&&(r.l=i),r}function tn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Kt(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,fp),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function fp(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Wo=/[#\/\?@]/g,pp=/[#\?:]/g,gp=/[#\?]/g,mp=/[#\?@]/g,yp=/#/g;function dn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function We(t){t.g||(t.g=new $t,t.h=0,t.i&&lp(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}v=dn.prototype;v.add=function(t,e){We(this),this.i=null,t=Pt(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function mu(t,e){We(t),e=Pt(t,e),ot(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,ot(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Es(t)))}function yu(t,e){return We(t),e=Pt(t,e),ot(t.g.h,e)}v.forEach=function(t,e){We(this),this.g.forEach(function(n,i){zc(n,function(r){t.call(e,r,i,this)},this)},this)};v.T=function(){We(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var r=t[i],s=0;s<r.length;s++)n.push(e[i]);return n};v.R=function(t){We(this);var e=[];if(typeof t=="string")yu(this,t)&&(e=$o(e,this.g.get(Pt(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=$o(e,t[n])}return e};v.set=function(t,e){return We(this),this.i=null,t=Pt(this,t),yu(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};v.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function vu(t,e,n){mu(t,e),0<n.length&&(t.i=null,t.g.set(Pt(t,e),as(n)),t.h+=n.length)}v.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],r=encodeURIComponent(String(i));i=this.R(i);for(var s=0;s<i.length;s++){var o=r;i[s]!==""&&(o+="="+encodeURIComponent(String(i[s]))),t.push(o)}}return this.i=t.join("&")};function Pt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function vp(t,e){e&&!t.j&&(We(t),t.i=null,t.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(mu(this,i),vu(this,r,n))},t)),t.j=e}var wp=class{constructor(t,e){this.h=t,this.g=e}};function wu(t){this.l=t||_p,A.PerformanceNavigationTiming?(t=A.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(A.g&&A.g.Ea&&A.g.Ea()&&A.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var _p=10;function _u(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function bu(t){return t.h?1:t.g?t.g.size:0}function Rr(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ss(t,e){t.g?t.g.add(e):t.h=e}function Eu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}wu.prototype.cancel=function(){if(this.i=Su(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Su(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return as(t.i)}function Ts(){}Ts.prototype.stringify=function(t){return A.JSON.stringify(t,void 0)};Ts.prototype.parse=function(t){return A.JSON.parse(t,void 0)};function bp(){this.g=new Ts}function Ep(t,e,n){const i=n||"";try{bs(t,function(r,s){let o=r;bn(r)&&(o=ps(r)),e.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function Sp(t,e){const n=new Ti;if(A.Image){const i=new Image;i.onload=$n(Fn,n,i,"TestLoadImage: loaded",!0,e),i.onerror=$n(Fn,n,i,"TestLoadImage: error",!1,e),i.onabort=$n(Fn,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=$n(Fn,n,i,"TestLoadImage: timeout",!1,e),A.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Fn(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function xn(t){this.l=t.$b||null,this.j=t.ib||!1}re(xn,vs);xn.prototype.g=function(){return new Di(this.l,this.j)};xn.prototype.i=function(t){return function(){return t}}({});function Di(t,e){X.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Is,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}re(Di,X);var Is=0;v=Di.prototype;v.open=function(t,e){if(this.readyState!=Is)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,fn(this)};v.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||A).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};v.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,An(this)),this.readyState=Is};v.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,fn(this)),this.g&&(this.readyState=3,fn(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof A.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Tu(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Tu(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}v.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?An(this):fn(this),this.readyState==3&&Tu(this)}};v.Ua=function(t){this.g&&(this.response=this.responseText=t,An(this))};v.Ta=function(t){this.g&&(this.response=t,An(this))};v.ha=function(){this.g&&An(this)};function An(t){t.readyState=4,t.l=null,t.j=null,t.A=null,fn(t)}v.setRequestHeader=function(t,e){this.v.append(t,e)};v.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};v.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function fn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Di.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Tp=A.JSON.parse;function W(t){X.call(this),this.headers=new $t,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Iu,this.K=this.L=!1}re(W,X);var Iu="",Ip=/^https?$/i,Cp=["POST","PUT"];v=W.prototype;v.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ar.g(),this.C=this.u?Ho(this.u):Ho(Ar),this.g.onreadystatechange=te(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Ko(this,s);return}t=n||"";const r=new $t(this.headers);i&&bs(i,function(s,o){r.set(o,s)}),i=Pf(r.T()),n=A.FormData&&t instanceof A.FormData,!(0<=jc(Cp,e))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Au(this),0<this.B&&((this.K=xp(this.g))?(this.g.timeout=this.B,this.g.ontimeout=te(this.pa,this)):this.A=ys(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Ko(this,s)}};function xp(t){return Ct&&jf()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function Ap(t){return t.toLowerCase()=="content-type"}v.pa=function(){typeof os<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ne(this,"timeout"),this.abort(8))};function Ko(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Cu(t),Ni(t)}function Cu(t){t.D||(t.D=!0,ne(t,"complete"),ne(t,"error"))}v.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ne(this,"complete"),ne(this,"abort"),Ni(this))};v.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ni(this,!0)),W.Z.M.call(this)};v.Fa=function(){this.s||(this.F||this.v||this.l?xu(this):this.cb())};v.cb=function(){xu(this)};function xu(t){if(t.h&&typeof os<"u"&&(!t.C[1]||Oe(t)!=4||t.ba()!=2)){if(t.v&&Oe(t)==4)ys(t.Fa,0,t);else if(ne(t,"readystatechange"),Oe(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var r=String(t.H).match(gu)[1]||null;if(!r&&A.self&&A.self.location){var s=A.self.location.protocol;r=s.substr(0,s.length-1)}i=!Ip.test(r?r.toLowerCase():"")}n=i}if(n)ne(t,"complete"),ne(t,"success");else{t.m=6;try{var o=2<Oe(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Cu(t)}}finally{Ni(t)}}}}function Ni(t,e){if(t.g){Au(t);const n=t.g,i=t.C[0]?ei:null;t.g=null,t.C=null,e||ne(t,"ready");try{n.onreadystatechange=i}catch{}}}function Au(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(A.clearTimeout(t.A),t.A=null)}function Oe(t){return t.g?t.g.readyState:0}v.ba=function(){try{return 2<Oe(this)?this.g.status:-1}catch{return-1}};v.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};v.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Tp(e)}};function Go(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Iu:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}v.Da=function(){return this.m};v.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function kp(t){let e="";return cs(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Cs(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=kp(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):B(t,e,n))}function Ht(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ku(t){this.za=0,this.l=[],this.h=new Ti,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ht("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ht("baseRetryDelayMs",5e3,t),this.$a=Ht("retryDelaySeedMs",1e4,t),this.Ya=Ht("forwardChannelMaxRetries",2,t),this.ra=Ht("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new wu(t&&t.concurrentRequestLimit),this.Ca=new bp,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}v=ku.prototype;v.ma=8;v.G=1;function xs(t){if(Du(t),t.G==3){var e=t.V++,n=$e(t.F);B(n,"SID",t.J),B(n,"RID",e),B(n,"TYPE","terminate"),kn(t,n),e=new In(t,t.h,e,void 0),e.K=2,e.v=ki($e(n)),n=!1,A.navigator&&A.navigator.sendBeacon&&(n=A.navigator.sendBeacon(e.v.toString(),"")),!n&&A.Image&&(new Image().src=e.v,n=!0),n||(e.g=Fu(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Cn(e)}$u(t)}v.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Ri(t){t.g&&(ks(t),t.g.cancel(),t.g=null)}function Du(t){Ri(t),t.u&&(A.clearTimeout(t.u),t.u=null),ai(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&A.clearTimeout(t.m),t.m=null)}function nr(t,e){t.l.push(new wp(t.Za++,e)),t.G==3&&Mi(t)}function Mi(t){_u(t.i)||t.m||(t.m=!0,gs(t.Ha,t),t.C=0)}function Dp(t,e){return bu(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Sn(te(t.Ha,t,e),Lu(t,t.C)),t.C++,!0)}v.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new In(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=Hc(s),qc(s,this.P)):s=this.P),this.o===null&&(r.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var i=this.l[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Nu(this,r,e),n=$e(this.F),B(n,"RID",t),B(n,"CVER",22),this.D&&B(n,"X-HTTP-Session-Id",this.D),kn(this,n),this.o&&s&&Cs(n,this.o,s),Ss(this.i,r),this.Ra&&B(n,"TYPE","init"),this.ja?(B(n,"$req",e),B(n,"SID","null"),r.$=!0,Dr(r,n,null)):Dr(r,n,e),this.G=2}}else this.G==3&&(t?Qo(this,t):this.l.length==0||_u(this.i)||Qo(this))};function Qo(t,e){var n;e?n=e.m:n=t.V++;const i=$e(t.F);B(i,"SID",t.J),B(i,"RID",n),B(i,"AID",t.U),kn(t,i),t.o&&t.s&&Cs(i,t.o,t.s),n=new In(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Nu(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Ss(t.i,n),Dr(n,i,e)}function kn(t,e){t.j&&bs({},function(n,i){B(e,i,n)})}function Nu(t,e,n){n=Math.min(t.l.length,n);var i=t.j?te(t.j.Oa,t.j,t):null;e:{var r=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=r[u].h;const c=r[u].g;if(l-=s,0>l)s=Math.max(0,r[u].h-100),a=!1;else try{Ep(c,o,"req"+l+"_")}catch{i&&i(c)}}if(a){i=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,i}function Ru(t){t.g||t.u||(t.Y=1,gs(t.Ga,t),t.A=0)}function As(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Sn(te(t.Ga,t),Lu(t,t.A)),t.A++,!0)}v.Ga=function(){if(this.u=null,Mu(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Sn(te(this.bb,this),t)}};v.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,he(10),Ri(this),Mu(this))};function ks(t){t.B!=null&&(A.clearTimeout(t.B),t.B=null)}function Mu(t){t.g=new In(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=$e(t.oa);B(e,"RID","rpc"),B(e,"SID",t.J),B(e,"CI",t.N?"0":"1"),B(e,"AID",t.U),kn(t,e),B(e,"TYPE","xmlhttp"),t.o&&t.s&&Cs(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=ki($e(e)),n.s=null,n.U=!0,hu(n,t)}v.ab=function(){this.v!=null&&(this.v=null,Ri(this),As(this),he(19))};function ai(t){t.v!=null&&(A.clearTimeout(t.v),t.v=null)}function Ou(t,e){var n=null;if(t.g==e){ai(t),ks(t),t.g=null;var i=2}else if(Rr(t.i,e))n=e.D,Eu(t.i,e),i=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;i=Ii(),ne(i,new au(i,n)),Mi(t)}else Ru(t);else if(r=e.o,r==3||r==0&&0<t.I||!(i==1&&Dp(t,e)||i==2&&As(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Xe(t,5);break;case 4:Xe(t,10);break;case 3:Xe(t,6);break;default:Xe(t,2)}}}function Lu(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Xe(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var i=te(t.jb,t);n||(n=new at("//www.google.com/images/cleardot.gif"),A.location&&A.location.protocol=="http"||ri(n,"https"),ki(n)),Sp(n.toString(),i)}else he(2);t.G=0,t.j&&t.j.va(e),$u(t),Du(t)}v.jb=function(t){t?(this.h.info("Successfully pinged google.com"),he(2)):(this.h.info("Failed to ping google.com"),he(1))};function $u(t){t.G=0,t.I=-1,t.j&&((Su(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,as(t.l),t.l.length=0),t.j.ua())}function Pu(t,e,n){let i=hp(n);if(i.i!="")e&&si(i,e+"."+i.i),oi(i,i.m);else{const r=A.location;i=dp(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&cs(t.aa,function(r,s){B(i,s,r)}),e=t.D,n=t.sa,e&&n&&B(i,e,n),B(i,"VER",t.ma),kn(t,i),i}function Fu(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new W(new xn({ib:!0})):new W(t.qa),e.L=t.H,e}function Vu(){}v=Vu.prototype;v.xa=function(){};v.wa=function(){};v.va=function(){};v.ua=function(){};v.Oa=function(){};function ci(){if(Ct&&!(10<=Number(zf)))throw Error("Environmental error: no available transport.")}ci.prototype.g=function(t,e){return new be(t,e)};function be(t,e){X.call(this),this.g=new ku(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!ti(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ti(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ft(this)}re(be,X);be.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),gs(te(t.hb,t,e))),he(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Pu(t,null,t.W),Mi(t)};be.prototype.close=function(){xs(this.g)};be.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,nr(this.g,e)}else this.v?(e={},e.__data__=ps(t),nr(this.g,e)):nr(this.g,t)};be.prototype.M=function(){this.g.j=null,delete this.j,xs(this.g),delete this.g,be.Z.M.call(this)};function Uu(t){ws.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}re(Uu,ws);function Bu(){_s.call(this),this.status=1}re(Bu,_s);function Ft(t){this.g=t}re(Ft,Vu);Ft.prototype.xa=function(){ne(this.g,"a")};Ft.prototype.wa=function(t){ne(this.g,new Uu(t))};Ft.prototype.va=function(t){ne(this.g,new Bu)};Ft.prototype.ua=function(){ne(this.g,"b")};ci.prototype.createWebChannel=ci.prototype.g;be.prototype.send=be.prototype.u;be.prototype.open=be.prototype.m;be.prototype.close=be.prototype.close;Ci.NO_ERROR=0;Ci.TIMEOUT=8;Ci.HTTP_ERROR=6;cu.COMPLETE="complete";uu.EventType=Tn;Tn.OPEN="a";Tn.CLOSE="b";Tn.ERROR="c";Tn.MESSAGE="d";X.prototype.listen=X.prototype.N;W.prototype.listenOnce=W.prototype.O;W.prototype.getLastError=W.prototype.La;W.prototype.getLastErrorCode=W.prototype.Da;W.prototype.getStatus=W.prototype.ba;W.prototype.getResponseJson=W.prototype.Qa;W.prototype.getResponseText=W.prototype.ga;W.prototype.send=W.prototype.ea;var Np=function(){return new ci},Rp=function(){return Ii()},ir=Ci,Mp=cu,Op=ft,Xo={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Lp=xn,Vn=uu,$p=W;const Yo="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ge.UNAUTHENTICATED=new ge(null),ge.GOOGLE_CREDENTIALS=new ge("google-credentials-uid"),ge.FIRST_PARTY=new ge("first-party-uid"),ge.MOCK_USER=new ge("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vt="9.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=new $c("@firebase/firestore");function Jo(){return ct.logLevel}function T(t,...e){if(ct.logLevel<=$.DEBUG){const n=e.map(Ds);ct.debug(`Firestore (${Vt}): ${t}`,...n)}}function Pe(t,...e){if(ct.logLevel<=$.ERROR){const n=e.map(Ds);ct.error(`Firestore (${Vt}): ${t}`,...n)}}function Zo(t,...e){if(ct.logLevel<=$.WARN){const n=e.map(Ds);ct.warn(`Firestore (${Vt}): ${t}`,...n)}}function Ds(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t="Unexpected state"){const e=`FIRESTORE (${Vt}) INTERNAL ASSERTION FAILED: `+t;throw Pe(e),new Error(e)}function q(t,e){t||D()}function L(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends Lt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Fp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ge.UNAUTHENTICATED))}shutdown(){}}class Vp{constructor(e){this.t=e,this.currentUser=ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const r=u=>this.i!==i?(i=this.i,n(u)):Promise.resolve();let s=new Ue;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ue,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await r(this.currentUser)})},a=u=>{T("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(T("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ue)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(T("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(q(typeof i.accessToken=="string"),new Pp(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return q(e===null||typeof e=="string"),new ge(e)}}class Up{constructor(e,n,i){this.type="FirstParty",this.user=ge.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)}}class Bp{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new Up(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zp{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const i=s=>{s.error!=null&&T("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,T("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{T("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?r(s):T("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(q(typeof n.token=="string"),this.p=n.token,new jp(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=Hp(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%e.length))}return i}}function P(t,e){return t<e?-1:t>e?1:0}function xt(t,e,n){return t.length===e.length&&t.every((i,r)=>n(i,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new E(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new E(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new E(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new E(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Q.fromMillis(Date.now())}static fromDate(e){return Q.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new Q(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?P(this.nanoseconds,e.nanoseconds):P(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.timestamp=e}static fromTimestamp(e){return new N(e)}static min(){return new N(new Q(0,0))}static max(){return new N(new Q(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,n,i){n===void 0?n=0:n>e.length&&D(),i===void 0?i=e.length-n:i>e.length-n&&D(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return pn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof pn?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let r=0;r<i;r++){const s=e.get(r),o=n.get(r);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class V extends pn{construct(e,n,i){return new V(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new E(m.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new V(n)}static emptyPath(){return new V([])}}const qp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class le extends pn{construct(e,n,i){return new le(e,n,i)}static isValidIdentifier(e){return qp.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),le.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new le(["__name__"])}static fromServerFormat(e){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new E(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new E(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new E(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=u,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new E(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new le(n)}static emptyPath(){return new le([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.path=e}static fromPath(e){return new I(V.fromString(e))}static fromName(e){return new I(V.fromString(e).popFirst(5))}static empty(){return new I(V.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&V.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return V.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new I(new V(e.slice()))}}function Wp(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=N.fromTimestamp(i===1e9?new Q(n+1,0):new Q(n,i));return new je(r,I.empty(),e)}function Kp(t){return new je(t.readTime,t.key,-1)}class je{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new je(N.min(),I.empty(),-1)}static max(){return new je(N.max(),I.empty(),-1)}}function Gp(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=I.comparator(t.documentKey,e.documentKey),n!==0?n:P(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Xp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(t){if(t.code!==m.FAILED_PRECONDITION||t.message!==Qp)throw t;T("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&D(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new g((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(n,s).next(i,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):g.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):g.reject(n)}static resolve(e){return new g((n,i)=>{n(e)})}static reject(e){return new g((n,i)=>{i(e)})}static waitFor(e){return new g((n,i)=>{let r=0,s=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&n()},u=>i(u))}),o=!0,s===r&&n()})}static or(e){let n=g.resolve(!1);for(const i of e)n=n.next(r=>r?g.resolve(r):i());return n}static forEach(e,n){const i=[];return e.forEach((r,s)=>{i.push(n.call(this,r,s))}),this.waitFor(i)}static mapArray(e,n){return new g((i,r)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const l=u;n(e[l]).next(c=>{o[l]=c,++a,a===s&&i(o)},c=>r(c))}})}static doWhile(e,n){return new g((i,r)=>{const s=()=>{e()===!0?n().next(()=>{s()},r):i()};s()})}}function Dn(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.it(i),this.rt=i=>n.writeSequenceNumber(i))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Nn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function zu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rs.ot=-1;class Y{constructor(e,n){this.comparator=e,this.root=n||J.EMPTY}insert(e,n){return new Y(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,J.BLACK,null,null))}remove(e){return new Y(this.comparator,this.root.remove(e,this.comparator).copy(null,null,J.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Un(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Un(this.root,e,this.comparator,!1)}getReverseIterator(){return new Un(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Un(this.root,e,this.comparator,!0)}}class Un{constructor(e,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?i(e.key,n):1,n&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class J{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??J.RED,this.left=r??J.EMPTY,this.right=s??J.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,r,s){return new J(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return J.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return J.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,J.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,J.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw D();const e=this.left.check();if(e!==this.right.check())throw D();return e+(this.isRed()?0:1)}}J.EMPTY=null,J.RED=!0,J.BLACK=!1;J.EMPTY=new class{constructor(){this.size=0}get key(){throw D()}get value(){throw D()}get color(){throw D()}get left(){throw D()}get right(){throw D()}copy(t,e,n,i,r){return this}insert(t,e,n){return new J(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.comparator=e,this.data=new Y(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ta(this.data.getIterator())}getIteratorFrom(e){return new ta(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof K)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new K(this.comparator);return n.data=e,n}}class ta{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.fields=e,e.sort(le.comparator)}static empty(){return new Je([])}unionWith(e){let n=new K(le.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new Je(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xt(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new ie(n)}static fromUint8Array(e){const n=function(i){let r="";for(let s=0;s<i.length;++s)r+=String.fromCharCode(i[s]);return r}(e);return new ie(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return P(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ie.EMPTY_BYTE_STRING=new ie("");const Yp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ze(t){if(q(!!t),typeof t=="string"){let e=0;const n=Yp.exec(t);if(q(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:H(t.seconds),nanos:H(t.nanos)}}function H(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function At(t){return typeof t=="string"?ie.fromBase64String(t):ie.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function qu(t){const e=t.mapValue.fields.__previous_value__;return Hu(e)?qu(e):e}function gn(t){const e=ze(t.mapValue.fields.__local_write_time__.timestampValue);return new Q(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,n,i,r,s,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class kt{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new kt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof kt&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(t){return t==null}function ui(t){return t===0&&1/t==-1/0}function Zp(t){return typeof t=="number"&&Number.isInteger(t)&&!ui(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ut(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hu(t)?4:eg(t)?9007199254740991:10:D()}function Ne(t,e){if(t===e)return!0;const n=ut(t);if(n!==ut(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return gn(t).isEqual(gn(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const s=ze(i.timestampValue),o=ze(r.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return At(i.bytesValue).isEqual(At(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return H(i.geoPointValue.latitude)===H(r.geoPointValue.latitude)&&H(i.geoPointValue.longitude)===H(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return H(i.integerValue)===H(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const s=H(i.doubleValue),o=H(r.doubleValue);return s===o?ui(s)===ui(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return xt(t.arrayValue.values||[],e.arrayValue.values||[],Ne);case 10:return function(i,r){const s=i.mapValue.fields||{},o=r.mapValue.fields||{};if(ea(s)!==ea(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Ne(s[a],o[a])))return!1;return!0}(t,e);default:return D()}}function mn(t,e){return(t.values||[]).find(n=>Ne(n,e))!==void 0}function Dt(t,e){if(t===e)return 0;const n=ut(t),i=ut(e);if(n!==i)return P(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return P(t.booleanValue,e.booleanValue);case 2:return function(r,s){const o=H(r.integerValue||r.doubleValue),a=H(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return na(t.timestampValue,e.timestampValue);case 4:return na(gn(t),gn(e));case 5:return P(t.stringValue,e.stringValue);case 6:return function(r,s){const o=At(r),a=At(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,s){const o=r.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=P(o[u],a[u]);if(l!==0)return l}return P(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,s){const o=P(H(r.latitude),H(s.latitude));return o!==0?o:P(H(r.longitude),H(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,s){const o=r.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=Dt(o[u],a[u]);if(l)return l}return P(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,s){if(r===Bn.mapValue&&s===Bn.mapValue)return 0;if(r===Bn.mapValue)return 1;if(s===Bn.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),u=s.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const h=P(a[c],l[c]);if(h!==0)return h;const d=Dt(o[a[c]],u[l[c]]);if(d!==0)return d}return P(a.length,l.length)}(t.mapValue,e.mapValue);default:throw D()}}function na(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return P(t,e);const n=ze(t),i=ze(e),r=P(n.seconds,i.seconds);return r!==0?r:P(n.nanos,i.nanos)}function wt(t){return Mr(t)}function Mr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const r=ze(i);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?At(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,I.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let r="[",s=!0;for(const o of i.values||[])s?s=!1:r+=",",r+=Mr(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(i){const r=Object.keys(i.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Mr(i.fields[a])}`;return s+"}"}(t.mapValue):D();var e,n}function ia(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Or(t){return!!t&&"integerValue"in t}function Ms(t){return!!t&&"arrayValue"in t}function ra(t){return!!t&&"nullValue"in t}function sa(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function rr(t){return!!t&&"mapValue"in t}function nn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Nn(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=nn(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=nn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function eg(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.value=e}static empty(){return new xe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!rr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=nn(n)}setAll(e){let n=le.emptyPath(),i={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,i,r),i={},r=[],n=a.popLast()}o?i[a.lastSegment()]=nn(o):r.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(e){const n=this.field(e.popLast());rr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ne(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=n.mapValue.fields[e.get(i)];rr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,i){Nn(n,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new xe(nn(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,n,i,r,s,o){this.key=e,this.documentType=n,this.version=i,this.readTime=r,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Z(e,0,N.min(),N.min(),xe.empty(),0)}static newFoundDocument(e,n,i){return new Z(e,1,n,N.min(),i,0)}static newNoDocument(e,n){return new Z(e,2,n,N.min(),xe.empty(),0)}static newUnknownDocument(e,n){return new Z(e,3,n,N.min(),xe.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=N.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Z&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Z(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,n=null,i=[],r=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.ut=null}}function oa(t,e=null,n=[],i=[],r=null,s=null,o=null){return new tg(t,e,n,i,r,s,o)}function Os(t){const e=L(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>{return(r=i).field.canonicalString()+r.op.toString()+wt(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),Oi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>wt(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>wt(i)).join(",")),e.ut=n}return e.ut}function ng(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(i=n).field.canonicalString()} ${i.op} ${wt(i.value)}`;var i}).join(", ")}]`),Oi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>wt(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>wt(n)).join(",")),`Target(${e})`}function Ls(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!lg(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],i=e.filters[r],n.op!==i.op||!n.field.isEqual(i.field)||!Ne(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ca(t.startAt,e.startAt)&&ca(t.endAt,e.endAt)}function Lr(t){return I.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class de extends class{}{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,i):new ig(e,n,i):n==="array-contains"?new og(e,i):n==="in"?new ag(e,i):n==="not-in"?new cg(e,i):n==="array-contains-any"?new ug(e,i):new de(e,n,i)}static ct(e,n,i){return n==="in"?new rg(e,i):new sg(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(Dt(n,this.value)):n!==null&&ut(this.value)===ut(n)&&this.at(Dt(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return D()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class ig extends de{constructor(e,n,i){super(e,n,i),this.key=I.fromName(i.referenceValue)}matches(e){const n=I.comparator(e.key,this.key);return this.at(n)}}class rg extends de{constructor(e,n){super(e,"in",n),this.keys=Wu("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class sg extends de{constructor(e,n){super(e,"not-in",n),this.keys=Wu("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Wu(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>I.fromName(i.referenceValue))}class og extends de{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ms(n)&&mn(n.arrayValue,this.value)}}class ag extends de{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&mn(this.value.arrayValue,n)}}class cg extends de{constructor(e,n){super(e,"not-in",n)}matches(e){if(mn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!mn(this.value.arrayValue,n)}}class ug extends de{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ms(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>mn(this.value.arrayValue,i))}}class li{constructor(e,n){this.position=e,this.inclusive=n}}class _t{constructor(e,n="asc"){this.field=e,this.dir=n}}function lg(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function aa(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(s.field.isKeyField()?i=I.comparator(I.fromName(o.referenceValue),n.key):i=Dt(o,n.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function ca(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ne(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n=null,i=[],r=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.lt=null,this.ft=null,this.startAt,this.endAt}}function hg(t,e,n,i,r,s,o,a){return new Ut(t,e,n,i,r,s,o,a)}function $s(t){return new Ut(t)}function ua(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ps(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Fs(t){for(const e of t.filters)if(e.ht())return e.field;return null}function Ku(t){return t.collectionGroup!==null}function yn(t){const e=L(t);if(e.lt===null){e.lt=[];const n=Fs(e),i=Ps(e);if(n!==null&&i===null)n.isKeyField()||e.lt.push(new _t(n)),e.lt.push(new _t(le.keyField(),"asc"));else{let r=!1;for(const s of e.explicitOrderBy)e.lt.push(s),s.field.isKeyField()&&(r=!0);if(!r){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new _t(le.keyField(),s))}}}return e.lt}function Fe(t){const e=L(t);if(!e.ft)if(e.limitType==="F")e.ft=oa(e.path,e.collectionGroup,yn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of yn(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new _t(s.field,o))}const i=e.endAt?new li(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new li(e.startAt.position,e.startAt.inclusive):null;e.ft=oa(e.path,e.collectionGroup,n,e.filters,e.limit,i,r)}return e.ft}function $r(t,e,n){return new Ut(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Li(t,e){return Ls(Fe(t),Fe(e))&&t.limitType===e.limitType}function Gu(t){return`${Os(Fe(t))}|lt:${t.limitType}`}function Pr(t){return`Query(target=${ng(Fe(t))}; limitType=${t.limitType})`}function Vs(t,e){return e.isFoundDocument()&&function(n,i){const r=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):I.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,i){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const r of n.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(r,s,o){const a=aa(r,s,o);return r.inclusive?a<=0:a<0}(n.startAt,yn(n),i)||n.endAt&&!function(r,s,o){const a=aa(r,s,o);return r.inclusive?a>=0:a>0}(n.endAt,yn(n),i))}(t,e)}function dg(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Qu(t){return(e,n)=>{let i=!1;for(const r of yn(t)){const s=fg(r,e,n);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function fg(t,e,n){const i=t.field.isKeyField()?I.comparator(e.key,n.key):function(r,s,o){const a=s.data.field(r),u=o.data.field(r);return a!==null&&u!==null?Dt(a,u):D()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return D()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ui(e)?"-0":e}}function Yu(t){return{integerValue:""+t}}function pg(t,e){return Zp(e)?Yu(e):Xu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(){this._=void 0}}function gg(t,e,n){return t instanceof Fr?function(i,r){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&(s.fields.__previous_value__=r),{mapValue:s}}(n,e):t instanceof hi?Ju(t,e):t instanceof di?Zu(t,e):function(i,r){const s=yg(i,r),o=la(s)+la(i._t);return Or(s)&&Or(i._t)?Yu(o):Xu(i.wt,o)}(t,e)}function mg(t,e,n){return t instanceof hi?Ju(t,e):t instanceof di?Zu(t,e):n}function yg(t,e){return t instanceof Vr?Or(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class Fr extends $i{}class hi extends $i{constructor(e){super(),this.elements=e}}function Ju(t,e){const n=el(e);for(const i of t.elements)n.some(r=>Ne(r,i))||n.push(i);return{arrayValue:{values:n}}}class di extends $i{constructor(e){super(),this.elements=e}}function Zu(t,e){let n=el(e);for(const i of t.elements)n=n.filter(r=>!Ne(r,i));return{arrayValue:{values:n}}}class Vr extends $i{constructor(e,n){super(),this.wt=e,this._t=n}}function la(t){return H(t.integerValue||t.doubleValue)}function el(t){return Ms(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function vg(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof hi&&i instanceof hi||n instanceof di&&i instanceof di?xt(n.elements,i.elements,Ne):n instanceof Vr&&i instanceof Vr?Ne(n._t,i._t):n instanceof Fr&&i instanceof Fr}(t.transform,e.transform)}class Ze{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ze}static exists(e){return new Ze(void 0,e)}static updateTime(e){return new Ze(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hn(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Us{}function tl(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _g(t.key,Ze.none()):new Bs(t.key,t.data,Ze.none());{const n=t.data,i=xe.empty();let r=new K(le.comparator);for(let s of e.fields)if(!r.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?i.delete(s):i.set(s,o),r=r.add(s)}return new Pi(t.key,i,new Je(r.toArray()),Ze.none())}}function wg(t,e,n){t instanceof Bs?function(i,r,s){const o=i.value.clone(),a=da(i.fieldTransforms,r,s.transformResults);o.setAll(a),r.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Pi?function(i,r,s){if(!Hn(i.precondition,r))return void r.convertToUnknownDocument(s.version);const o=da(i.fieldTransforms,r,s.transformResults),a=r.data;a.setAll(nl(i)),a.setAll(o),r.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(i,r,s){r.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function rn(t,e,n,i){return t instanceof Bs?function(r,s,o,a){if(!Hn(r.precondition,s))return o;const u=r.value.clone(),l=fa(r.fieldTransforms,a,s);return u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,n,i):t instanceof Pi?function(r,s,o,a){if(!Hn(r.precondition,s))return o;const u=fa(r.fieldTransforms,a,s),l=s.data;return l.setAll(nl(r)),l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(c=>c.field))}(t,e,n,i):function(r,s,o){return Hn(r.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function ha(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&xt(n,i,(r,s)=>vg(r,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Bs extends Us{constructor(e,n,i,r=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Pi extends Us{constructor(e,n,i,r,s=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function nl(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function da(t,e,n){const i=new Map;q(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,mg(o,a,n[r]))}return i}function fa(t,e,n){const i=new Map;for(const r of t){const s=r.transform,o=n.data.field(r.field);i.set(r.field,gg(s,o,e))}return i}class _g extends Us{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z,R;function il(t){if(t===void 0)return Pe("GRPC error has no .code"),m.UNKNOWN;switch(t){case z.OK:return m.OK;case z.CANCELLED:return m.CANCELLED;case z.UNKNOWN:return m.UNKNOWN;case z.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case z.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case z.INTERNAL:return m.INTERNAL;case z.UNAVAILABLE:return m.UNAVAILABLE;case z.UNAUTHENTICATED:return m.UNAUTHENTICATED;case z.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case z.NOT_FOUND:return m.NOT_FOUND;case z.ALREADY_EXISTS:return m.ALREADY_EXISTS;case z.PERMISSION_DENIED:return m.PERMISSION_DENIED;case z.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case z.ABORTED:return m.ABORTED;case z.OUT_OF_RANGE:return m.OUT_OF_RANGE;case z.UNIMPLEMENTED:return m.UNIMPLEMENTED;case z.DATA_LOSS:return m.DATA_LOSS;default:return D()}}(R=z||(z={}))[R.OK=0]="OK",R[R.CANCELLED=1]="CANCELLED",R[R.UNKNOWN=2]="UNKNOWN",R[R.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",R[R.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",R[R.NOT_FOUND=5]="NOT_FOUND",R[R.ALREADY_EXISTS=6]="ALREADY_EXISTS",R[R.PERMISSION_DENIED=7]="PERMISSION_DENIED",R[R.UNAUTHENTICATED=16]="UNAUTHENTICATED",R[R.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",R[R.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",R[R.ABORTED=10]="ABORTED",R[R.OUT_OF_RANGE=11]="OUT_OF_RANGE",R[R.UNIMPLEMENTED=12]="UNIMPLEMENTED",R[R.INTERNAL=13]="INTERNAL",R[R.UNAVAILABLE=14]="UNAVAILABLE",R[R.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),r=this.inner[i];if(r===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[n]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Nn(this.inner,(n,i)=>{for(const[r,s]of i)e(r,s)})}isEmpty(){return zu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=new Y(I.comparator);function He(){return Eg}const rl=new Y(I.comparator);function Gt(...t){let e=rl;for(const n of t)e=e.insert(n.key,n);return e}function Sg(t){let e=rl;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function Ye(){return sn()}function sl(){return sn()}function sn(){return new Bt(t=>t.toString(),(t,e)=>t.isEqual(e))}new Y(I.comparator);const Tg=new K(I.comparator);function M(...t){let e=Tg;for(const n of t)e=e.add(n);return e}const Ig=new K(P);function ol(){return Ig}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,n,i,r,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const i=new Map;return i.set(e,Rn.createSynthesizedTargetChangeForCurrentChange(e,n)),new Fi(N.min(),i,ol(),He(),M())}}class Rn{constructor(e,n,i,r,s){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Rn(ie.EMPTY_BYTE_STRING,n,M(),M(),M())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n,i,r){this.gt=e,this.removedTargetIds=n,this.key=i,this.yt=r}}class al{constructor(e,n){this.targetId=e,this.It=n}}class cl{constructor(e,n,i=ie.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=r}}class pa{constructor(){this.Tt=0,this.Et=ma(),this.At=ie.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=M(),n=M(),i=M();return this.Et.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:i=i.add(r);break;default:D()}}),new Rn(this.At,this.Rt,e,n,i)}Dt(){this.bt=!1,this.Et=ma()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class Cg{constructor(e){this.Ot=e,this.Ft=new Map,this.$t=He(),this.Bt=ga(),this.Lt=new K(P)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const i=this.Qt(n);switch(e.state){case 0:this.jt(n)&&i.Vt(e.resumeToken);break;case 1:i.kt(),i.Pt||i.Dt(),i.Vt(e.resumeToken);break;case 2:i.kt(),i.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(i.Mt(),i.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),i.Vt(e.resumeToken));break;default:D()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((i,r)=>{this.jt(r)&&n(r)})}zt(e){const n=e.targetId,i=e.It.count,r=this.Ht(n);if(r){const s=r.target;if(Lr(s))if(i===0){const o=new I(s.path);this.Kt(n,o,Z.newNoDocument(o,N.min()))}else q(i===1);else this.Jt(n)!==i&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((s,o)=>{const a=this.Ht(o);if(a){if(s.current&&Lr(a.target)){const u=new I(a.target.path);this.$t.get(u)!==null||this.Xt(o,u)||this.Kt(o,u,Z.newNoDocument(u,e))}s.vt&&(n.set(o,s.St()),s.Dt())}});let i=M();this.Bt.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.Ht(u);return!l||l.purpose===2||(a=!1,!1)}),a&&(i=i.add(s))}),this.$t.forEach((s,o)=>o.setReadTime(e));const r=new Fi(e,n,this.Lt,this.$t,i);return this.$t=He(),this.Bt=ga(),this.Lt=new K(P),r}qt(e,n){if(!this.jt(e))return;const i=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,i),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,i){if(!this.jt(e))return;const r=this.Qt(e);this.Xt(e,n)?r.Ct(n,1):r.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),i&&(this.$t=this.$t.insert(n,i))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Ot.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new pa,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new K(P),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||T("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Ot.te(e)}Wt(e){this.Ft.set(e,new pa),this.Ot.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Ot.getRemoteKeysForTarget(e).has(n)}}function ga(){return new Y(I.comparator)}function ma(){return new Y(I.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Ag=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class kg{constructor(e,n){this.databaseId=e,this.dt=n}}function Ur(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ul(t,e){return t.dt?e.toBase64():e.toUint8Array()}function vn(t){return q(!!t),N.fromTimestamp(function(e){const n=ze(e);return new Q(n.seconds,n.nanos)}(t))}function ll(t,e){return function(n){return new V(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function hl(t){const e=V.fromString(t);return q(pl(e)),e}function sr(t,e){const n=hl(e);if(n.get(1)!==t.databaseId.projectId)throw new E(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new E(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new I(dl(n))}function Br(t,e){return ll(t.databaseId,e)}function Dg(t){const e=hl(t);return e.length===4?V.emptyPath():dl(e)}function ya(t){return new V(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function dl(t){return q(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ng(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:D()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(u,l){return u.dt?(q(l===void 0||typeof l=="string"),ie.fromBase64String(l||"")):(q(l===void 0||l instanceof Uint8Array),ie.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?m.UNKNOWN:il(u.code);return new E(l,u.message||"")}(o);n=new cl(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=sr(t,i.document.name),s=vn(i.document.updateTime),o=new xe({mapValue:{fields:i.document.fields}}),a=Z.newFoundDocument(r,s,o),u=i.targetIds||[],l=i.removedTargetIds||[];n=new qn(u,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=sr(t,i.document),s=i.readTime?vn(i.readTime):N.min(),o=Z.newNoDocument(r,s),a=i.removedTargetIds||[];n=new qn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=sr(t,i.document),s=i.removedTargetIds||[];n=new qn([],s,r,null)}else{if(!("filter"in e))return D();{e.filter;const i=e.filter;i.targetId;const r=i.count||0,s=new bg(r),o=i.targetId;n=new al(o,s)}}return n}function Rg(t,e){return{documents:[Br(t,e.path)]}}function Mg(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=Br(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Br(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(u){if(u.length===0)return;const l=u.map(c=>function(h){if(h.op==="=="){if(sa(h.value))return{unaryFilter:{field:pt(h.field),op:"IS_NAN"}};if(ra(h.value))return{unaryFilter:{field:pt(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(sa(h.value))return{unaryFilter:{field:pt(h.field),op:"IS_NOT_NAN"}};if(ra(h.value))return{unaryFilter:{field:pt(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pt(h.field),op:Pg(h.op),value:h.value}}}(c));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const s=function(u){if(u.length!==0)return u.map(l=>function(c){return{field:pt(c.field),direction:$g(c.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(u,l){return u.dt||Oi(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function Og(t){let e=Dg(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){q(i===1);const c=n.from[0];c.allDescendants?r=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=fl(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new _t(yt(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Oi(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(c){const h=!!c.before,d=c.values||[];return new li(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(c){const h=!c.before,d=c.values||[];return new li(d,h)}(n.endAt)),hg(e,r,o,s,a,"F",u,l)}function Lg(t,e){const n=function(i,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return D()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function fl(t){return t?t.unaryFilter!==void 0?[Vg(t)]:t.fieldFilter!==void 0?[Fg(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>fl(e)).reduce((e,n)=>e.concat(n)):D():[]}function $g(t){return xg[t]}function Pg(t){return Ag[t]}function pt(t){return{fieldPath:t.canonicalString()}}function yt(t){return le.fromServerFormat(t.fieldPath)}function Fg(t){return de.create(yt(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return D()}}(t.fieldFilter.op),t.fieldFilter.value)}function Vg(t){switch(t.unaryFilter.op){case"IS_NAN":const e=yt(t.unaryFilter.field);return de.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=yt(t.unaryFilter.field);return de.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=yt(t.unaryFilter.field);return de.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=yt(t.unaryFilter.field);return de.create(r,"!=",{nullValue:"NULL_VALUE"});default:return D()}}function pl(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,n,i,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&wg(s,e,i[r])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=rn(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=rn(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=sl();return this.mutations.forEach(r=>{const s=e.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(r.key)?null:a;const u=tl(o,a);u!==null&&i.set(r.key,u),o.isValidDocument()||o.convertToNoDocument(N.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),M())}isEqual(e){return this.batchId===e.batchId&&xt(this.mutations,e.mutations,(n,i)=>ha(n,i))&&xt(this.baseMutations,e.baseMutations,(n,i)=>ha(n,i))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n,i,r,s=N.min(),o=N.min(),a=ie.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new et(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new et(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new et(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e){this.ne=e}}function zg(t){const e=Og({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?$r(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(){this.ze=new qg}addToCollectionParentIndex(e,n){return this.ze.add(n),g.resolve()}getCollectionParents(e,n){return g.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return g.resolve()}deleteFieldIndex(e,n){return g.resolve()}getDocumentsMatchingTarget(e,n){return g.resolve(null)}getIndexType(e,n){return g.resolve(0)}getFieldIndexes(e,n){return g.resolve([])}getNextCollectionGroupToUpdate(e){return g.resolve(null)}getMinOffset(e,n){return g.resolve(je.min())}getMinOffsetFromCollectionGroup(e,n){return g.resolve(je.min())}updateCollectionGroup(e,n,i){return g.resolve()}updateIndexEntries(e,n){return g.resolve()}}class qg{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n]||new K(V.comparator),s=!r.has(i);return this.index[n]=r.add(i),s}has(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(e){return(this.index[e]||new K(V.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new Nt(0)}static Rn(){return new Nt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(){this.changes=new Bt(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Z.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?g.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,n,i,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=r}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(i=r,this.getBaseDocument(e,n,i))).next(r=>(i!==null&&rn(i.mutation,r,Je.empty(),Q.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,M()).next(()=>i))}getLocalViewOfDocuments(e,n,i=M()){const r=Ye();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,i).next(s=>{let o=Gt();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=Ye();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,M()))}populateOverlays(e,n,i){const r=[];return i.forEach(s=>{n.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(e,r).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,r){let s=He();const o=sn(),a=sn();return n.forEach((u,l)=>{const c=i.get(l.key);r.has(l.key)&&(c===void 0||c.mutation instanceof Pi)?s=s.insert(l.key,l):c!==void 0&&(o.set(l.key,c.mutation.getFieldMask()),rn(c.mutation,l,c.mutation.getFieldMask(),Q.now()))}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((l,c)=>o.set(l,c)),n.forEach((l,c)=>{var h;return a.set(l,new Kg(c,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=sn();let r=new Y((o,a)=>o-a),s=M();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let c=i.get(u)||Je.empty();c=a.applyToLocalView(l,c),i.set(u,c);const h=(r.get(a.batchId)||M()).add(u);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,c=u.value,h=sl();c.forEach(d=>{if(!s.has(d)){const f=tl(n.get(d),i.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return g.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(r){return I.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ku(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,r-s.size):g.resolve(Ye());let a=-1,u=s;return o.next(l=>g.forEach(l,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?g.resolve():this.getBaseDocument(e,c,h).next(d=>{u=u.insert(c,d)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,u,l,M())).next(c=>({batchId:a,changes:Sg(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new I(n)).next(i=>{let r=Gt();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const r=n.collectionGroup;let s=Gt();return this.indexManager.getCollectionParents(e,r).next(o=>g.forEach(o,a=>{const u=function(l,c){return new Ut(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,i).next(l=>{l.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,i){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,i).next(s=>(r=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId))).next(s=>{s.forEach((a,u)=>{const l=u.getKey();r.get(l)===null&&(r=r.insert(l,Z.newInvalidDocument(l)))});let o=Gt();return r.forEach((a,u)=>{const l=s.get(a);l!==void 0&&rn(l.mutation,u,Je.empty(),Q.now()),Vs(n,u)&&(o=o.insert(a,u))}),o})}getBaseDocument(e,n,i){return i===null||i.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):g.resolve(Z.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return g.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var i;return this.Jn.set(n.id,{id:(i=n).id,version:i.version,createTime:vn(i.createTime)}),g.resolve()}getNamedQuery(e,n){return g.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(i){return{name:i.name,query:zg(i.bundledQuery),readTime:vn(i.readTime)}}(n)),g.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(){this.overlays=new Y(I.comparator),this.Xn=new Map}getOverlay(e,n){return g.resolve(this.overlays.get(n))}getOverlays(e,n){const i=Ye();return g.forEach(n,r=>this.getOverlay(e,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((r,s)=>{this.ie(e,n,s)}),g.resolve()}removeOverlaysForBatchId(e,n,i){const r=this.Xn.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.Xn.delete(i)),g.resolve()}getOverlaysForCollection(e,n,i){const r=Ye(),s=n.length+1,o=new I(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>i&&r.set(u.getKey(),u)}return g.resolve(r)}getOverlaysForCollectionGroup(e,n,i,r){let s=new Y((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>i){let c=s.get(l.largestBatchId);c===null&&(c=Ye(),s=s.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=Ye(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=r)););return g.resolve(a)}ie(e,n,i){const r=this.overlays.get(i.key);if(r!==null){const o=this.Xn.get(r.largestBatchId).delete(i.key);this.Xn.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new Bg(n,i));let s=this.Xn.get(n);s===void 0&&(s=M(),this.Xn.set(n,s)),this.Xn.set(n,s.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(){this.Zn=new K(G.ts),this.es=new K(G.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const i=new G(e,n);this.Zn=this.Zn.add(i),this.es=this.es.add(i)}ss(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.rs(new G(e,n))}os(e,n){e.forEach(i=>this.removeReference(i,n))}us(e){const n=new I(new V([])),i=new G(n,e),r=new G(n,e+1),s=[];return this.es.forEachInRange([i,r],o=>{this.rs(o),s.push(o.key)}),s}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new I(new V([])),i=new G(n,e),r=new G(n,e+1);let s=M();return this.es.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new G(e,0),i=this.Zn.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class G{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return I.comparator(e.key,n.key)||P(e.ls,n.ls)}static ns(e,n){return P(e.ls,n.ls)||I.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new K(G.ts)}checkEmpty(e){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,r){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ug(s,n,i,r);this.mutationQueue.push(o);for(const a of r)this.ds=this.ds.add(new G(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(e,n){return g.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,r=this.ws(i),s=r<0?0:r;return g.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new G(n,0),r=new G(n,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([i,r],o=>{const a=this._s(o.ls);s.push(a)}),g.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new K(P);return n.forEach(r=>{const s=new G(r,0),o=new G(r,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],a=>{i=i.add(a.ls)})}),g.resolve(this.gs(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,r=i.length+1;let s=i;I.isDocumentKey(s)||(s=s.child(""));const o=new G(new I(s),0);let a=new K(P);return this.ds.forEachWhile(u=>{const l=u.key.path;return!!i.isPrefixOf(l)&&(l.length===r&&(a=a.add(u.ls)),!0)},o),g.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(i=>{const r=this._s(i);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){q(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.ds;return g.forEach(n.mutations,r=>{const s=new G(r.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ds=i})}In(e){}containsKey(e,n){const i=new G(n,0),r=this.ds.firstAfterOrEqual(i);return g.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,g.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e){this.ps=e,this.docs=new Y(I.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,r=this.docs.get(i),s=r?r.size:0,o=this.ps(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return g.resolve(i?i.document.mutableCopy():Z.newInvalidDocument(n))}getEntries(e,n){let i=He();return n.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():Z.newInvalidDocument(r))}),g.resolve(i)}getAllFromCollection(e,n,i){let r=He();const s=new I(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Gp(Kp(u),i)<=0||(r=r.insert(u.key,u.mutableCopy()))}return g.resolve(r)}getAllFromCollectionGroup(e,n,i,r){D()}Is(e,n){return g.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new Zg(this)}getSize(e){return g.resolve(this.size)}}class Zg extends Wg{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?n.push(this.zn.addEntry(e,r)):this.zn.removeEntry(i)}),g.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e){this.persistence=e,this.Ts=new Bt(n=>Os(n),Ls),this.lastRemoteSnapshotVersion=N.min(),this.highestTargetId=0,this.Es=0,this.As=new js,this.targetCount=0,this.Rs=Nt.An()}forEachTarget(e,n){return this.Ts.forEach((i,r)=>n(r)),g.resolve()}getLastRemoteSnapshotVersion(e){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return g.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Es&&(this.Es=n),g.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Nt(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,g.resolve()}updateTargetData(e,n){return this.vn(n),g.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(e,n,i){let r=0;const s=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Ts.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),g.waitFor(s).next(()=>r)}getTargetCount(e){return g.resolve(this.targetCount)}getTargetData(e,n){const i=this.Ts.get(n)||null;return g.resolve(i)}addMatchingKeys(e,n,i){return this.As.ss(n,i),g.resolve()}removeMatchingKeys(e,n,i){this.As.os(n,i);const r=this.persistence.referenceDelegate,s=[];return r&&n.forEach(o=>{s.push(r.markPotentiallyOrphaned(e,o))}),g.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),g.resolve()}getMatchingKeysForTargetId(e,n){const i=this.As.hs(n);return g.resolve(i)}containsKey(e,n){return g.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,n){this.bs={},this.overlays={},this.Ps=new Rs(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new em(this),this.indexManager=new Hg,this.remoteDocumentCache=function(i){return new Jg(i)}(i=>this.referenceDelegate.Ss(i)),this.wt=new jg(n),this.Ds=new Qg(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Xg,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.bs[e.toKey()];return i||(i=new Yg(n,this.referenceDelegate),this.bs[e.toKey()]=i),i}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,i){T("MemoryPersistence","Starting transaction:",e);const r=new nm(this.Ps.next());return this.referenceDelegate.Cs(),i(r).next(s=>this.referenceDelegate.xs(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Ns(e,n){return g.or(Object.values(this.bs).map(i=>()=>i.containsKey(e,n)))}}class nm extends Xp{constructor(e){super(),this.currentSequenceNumber=e}}class zs{constructor(e){this.persistence=e,this.ks=new js,this.Ms=null}static Os(e){return new zs(e)}get Fs(){if(this.Ms)return this.Ms;throw D()}addReference(e,n,i){return this.ks.addReference(i,n),this.Fs.delete(i.toString()),g.resolve()}removeReference(e,n,i){return this.ks.removeReference(i,n),this.Fs.add(i.toString()),g.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),g.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(r=>this.Fs.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(s=>this.Fs.add(s.toString()))}).next(()=>i.removeTargetData(e,n))}Cs(){this.Ms=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Fs,i=>{const r=I.fromPath(i);return this.$s(e,r).next(s=>{s||n.removeEntry(r,N.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(i=>{i?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return g.or([()=>g.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,n,i,r){this.targetId=e,this.fromCache=n,this.Pi=i,this.vi=r}static Vi(e,n){let i=M(),r=M();for(const s of n.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Hs(e,n.fromCache,i,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,i,r){return this.Ci(e,n).next(s=>s||this.xi(e,n,r,i)).next(s=>s||this.Ni(e,n))}Ci(e,n){if(ua(n))return g.resolve(null);let i=Fe(n);return this.indexManager.getIndexType(e,i).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=$r(n,null,"F"),i=Fe(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(s=>{const o=M(...s);return this.Di.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(u=>{const l=this.ki(n,a);return this.Mi(n,l,o,u.readTime)?this.Ci(e,$r(n,null,"F")):this.Oi(e,l,n,u)}))})))}xi(e,n,i,r){return ua(n)||r.isEqual(N.min())?this.Ni(e,n):this.Di.getDocuments(e,i).next(s=>{const o=this.ki(n,s);return this.Mi(n,o,i,r)?this.Ni(e,n):(Jo()<=$.DEBUG&&T("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Pr(n)),this.Oi(e,o,n,Wp(r,-1)))})}ki(e,n){let i=new K(Qu(e));return n.forEach((r,s)=>{Vs(e,s)&&(i=i.add(s))}),i}Mi(e,n,i,r){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Ni(e,n){return Jo()<=$.DEBUG&&T("QueryEngine","Using full collection scan to execute query:",Pr(n)),this.Di.getDocumentsMatchingQuery(e,n,je.min())}Oi(e,n,i,r){return this.Di.getDocumentsMatchingQuery(e,i,r).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,n,i,r){this.persistence=e,this.Fi=n,this.wt=r,this.$i=new Y(P),this.Bi=new Bt(s=>Os(s),Ls),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(i)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Gg(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function sm(t,e,n,i){return new rm(t,e,n,i)}async function gl(t,e){const n=L(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let r;return n.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,n.qi(e),n.mutationQueue.getAllMutationBatches(i))).next(s=>{const o=[],a=[];let u=M();for(const l of r){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of s){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(i,u).next(l=>({Ki:l,removedBatchIds:o,addedBatchIds:a}))})})}function ml(t){const e=L(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function om(t,e){const n=L(t),i=e.snapshotVersion;let r=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});r=n.$i;const a=[];e.targetChanges.forEach((c,h)=>{const d=r.get(h);if(!d)return;a.push(n.Vs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(ie.EMPTY_BYTE_STRING,N.min()).withLastLimboFreeSnapshotVersion(N.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,i)),r=r.insert(h,f),function(p,k,C){return p.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(d,f,c)&&a.push(n.Vs.updateTargetData(s,f))});let u=He(),l=M();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(am(s,o,e.documentUpdates).next(c=>{u=c.Gi,l=c.Qi})),!i.isEqual(N.min())){const c=n.Vs.getLastRemoteSnapshotVersion(s).next(h=>n.Vs.setTargetsMetadata(s,s.currentSequenceNumber,i));a.push(c)}return g.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,l)).next(()=>u)}).then(s=>(n.$i=r,s))}function am(t,e,n){let i=M(),r=M();return n.forEach(s=>i=i.add(s)),e.getEntries(t,i).next(s=>{let o=He();return n.forEach((a,u)=>{const l=s.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),u.isNoDocument()&&u.version.isEqual(N.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):T("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{Gi:o,Qi:r}})}function cm(t,e){const n=L(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return n.Vs.getTargetData(i,e).next(s=>s?(r=s,g.resolve(r)):n.Vs.allocateTargetId(i).next(o=>(r=new et(e,o,0,i.currentSequenceNumber),n.Vs.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=n.$i.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(i.targetId,i),n.Bi.set(e,i.targetId)),i})}async function jr(t,e,n){const i=L(t),r=i.$i.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,o=>i.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Dn(o))throw o;T("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.$i=i.$i.remove(e),i.Bi.delete(r.target)}function va(t,e,n){const i=L(t);let r=N.min(),s=M();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=L(a),h=c.Bi.get(l);return h!==void 0?g.resolve(c.$i.get(h)):c.Vs.getTargetData(u,l)}(i,o,Fe(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,i.Vs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>i.Fi.getDocumentsMatchingQuery(o,e,n?r:N.min(),n?s:M())).next(a=>(um(i,dg(e),a),{documents:a,ji:s})))}function um(t,e,n){let i=N.min();n.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),t.Li.set(e,i)}class wa{constructor(){this.activeTargetIds=ol()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lm{constructor(){this.Fr=new wa,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,i){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new wa,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){T("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){T("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,i,r,s){const o=this.oo(e,n);T("RestConnection","Sending: ",o,i);const a={};return this.uo(a,r,s),this.co(e,o,a,i).then(u=>(T("RestConnection","Received: ",u),u),u=>{throw Zo("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",i),u})}ao(e,n,i,r,s,o){return this.ro(e,n,i,r,s)}uo(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+Vt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,s)=>e[s]=r),i&&i.headers.forEach((r,s)=>e[s]=r)}oo(e,n){const i=dm[e];return`${this.so}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,i,r){return new Promise((s,o)=>{const a=new $p;a.listenOnce(Mp.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ir.NO_ERROR:const l=a.getResponseJson();T("Connection","XHR received:",JSON.stringify(l)),s(l);break;case ir.TIMEOUT:T("Connection",'RPC "'+e+'" timed out'),o(new E(m.DEADLINE_EXCEEDED,"Request time out"));break;case ir.HTTP_ERROR:const c=a.getStatus();if(T("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const p=f.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(p)>=0?p:m.UNKNOWN}(h.status);o(new E(d,h.message))}else o(new E(m.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new E(m.UNAVAILABLE,"Connection failed."));break;default:D()}}finally{T("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(r);a.send(n,"POST",u,i,15)})}ho(e,n,i){const r=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Np(),o=Rp(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Lp({})),this.uo(a.initMessageHeaders,n,i),cd()||ld()||hd()||dd()||fd()||ud()||(a.httpHeadersOverwriteParam="$httpHeaders");const u=r.join("");T("Connection","Creating WebChannel: "+u,a);const l=s.createWebChannel(u,a);let c=!1,h=!1;const d=new fm({jr:p=>{h?T("Connection","Not sending because WebChannel is closed:",p):(c||(T("Connection","Opening WebChannel transport."),l.open(),c=!0),T("Connection","WebChannel sending:",p),l.send(p))},Wr:()=>l.close()}),f=(p,k,C)=>{p.listen(k,O=>{try{C(O)}catch(U){setTimeout(()=>{throw U},0)}})};return f(l,Vn.EventType.OPEN,()=>{h||T("Connection","WebChannel transport opened.")}),f(l,Vn.EventType.CLOSE,()=>{h||(h=!0,T("Connection","WebChannel transport closed"),d.eo())}),f(l,Vn.EventType.ERROR,p=>{h||(h=!0,Zo("Connection","WebChannel transport errored:",p),d.eo(new E(m.UNAVAILABLE,"The operation could not be completed")))}),f(l,Vn.EventType.MESSAGE,p=>{var k;if(!h){const C=p.data[0];q(!!C);const O=C,U=O.error||((k=O[0])===null||k===void 0?void 0:k.error);if(U){T("Connection","WebChannel received error:",U);const Ce=U.status;let se=function(ah){const ro=z[ah];if(ro!==void 0)return il(ro)}(Ce),Ke=U.message;se===void 0&&(se=m.INTERNAL,Ke="Unknown error status: "+Ce+" with message "+U.message),h=!0,d.eo(new E(se,Ke)),l.close()}else T("Connection","WebChannel received:",C),d.no(C)}}),f(o,Op.STAT_EVENT,p=>{p.stat===Xo.PROXY?T("Connection","Detected buffering proxy"):p.stat===Xo.NOPROXY&&T("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}function or(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t){return new kg(t,!0)}class yl{constructor(e,n,i=1e3,r=1.5,s=6e4){this.js=e,this.timerId=n,this.lo=i,this.fo=r,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),i=Math.max(0,Date.now()-this.yo),r=Math.max(0,n-i);r>0&&T("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,n,i,r,s,o,a,u){this.js=e,this.Ao=i,this.Ro=r,this.bo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new yl(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===m.RESOURCE_EXHAUSTED?(Pe(n.toString()),Pe("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.Po===n&&this.Uo(i,r)},i=>{e(()=>{const r=new E(m.UNKNOWN,"Fetching auth token failed: "+i.message);return this.qo(r)})})}Uo(e,n){const i=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{i(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(r=>{i(()=>this.qo(r))}),this.stream.onMessage(r=>{i(()=>this.onMessage(r))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return T("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(T("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mm extends gm{constructor(e,n,i,r,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,r,o),this.wt=s}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=Ng(this.wt,e),i=function(r){if(!("targetChange"in r))return N.min();const s=r.targetChange;return s.targetIds&&s.targetIds.length?N.min():s.readTime?vn(s.readTime):N.min()}(e);return this.listener.Go(n,i)}Qo(e){const n={};n.database=ya(this.wt),n.addTarget=function(r,s){let o;const a=s.target;return o=Lr(a)?{documents:Rg(r,a)}:{query:Mg(r,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=ul(r,s.resumeToken):s.snapshotVersion.compareTo(N.min())>0&&(o.readTime=Ur(r,s.snapshotVersion.toTimestamp())),o}(this.wt,e);const i=Lg(this.wt,e);i&&(n.labels=i),this.Oo(n)}jo(e){const n={};n.database=ya(this.wt),n.removeTarget=e,this.Oo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym extends class{}{constructor(e,n,i,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=i,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new E(m.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.bo.ro(e,n,i,r,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new E(m.UNKNOWN,r.toString())})}ao(e,n,i,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.bo.ao(e,n,i,s,o,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new E(m.UNKNOWN,s.toString())})}terminate(){this.Zo=!0}}class vm{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Pe(n),this.su=!1):T("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,n,i,r,s){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br(o=>{i.enqueueAndForget(async()=>{On(this)&&(T("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=L(a);u.lu.add(4),await Mn(u),u._u.set("Unknown"),u.lu.delete(4),await Ui(u)}(this))})}),this._u=new vm(i,r)}}async function Ui(t){if(On(t))for(const e of t.fu)await e(!0)}async function Mn(t){for(const e of t.fu)await e(!1)}function vl(t,e){const n=L(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Ks(n)?Ws(n):jt(n).Co()&&qs(n,e))}function wl(t,e){const n=L(t),i=jt(n);n.hu.delete(e),i.Co()&&_l(n,e),n.hu.size===0&&(i.Co()?i.ko():On(n)&&n._u.set("Unknown"))}function qs(t,e){t.wu.Nt(e.targetId),jt(t).Qo(e)}function _l(t,e){t.wu.Nt(e),jt(t).jo(e)}function Ws(t){t.wu=new Cg({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),jt(t).start(),t._u.iu()}function Ks(t){return On(t)&&!jt(t).Do()&&t.hu.size>0}function On(t){return L(t).lu.size===0}function bl(t){t.wu=void 0}async function _m(t){t.hu.forEach((e,n)=>{qs(t,e)})}async function bm(t,e){bl(t),Ks(t)?(t._u.uu(e),Ws(t)):t._u.set("Unknown")}async function Em(t,e,n){if(t._u.set("Online"),e instanceof cl&&e.state===2&&e.cause)try{await async function(i,r){const s=r.cause;for(const o of r.targetIds)i.hu.has(o)&&(await i.remoteSyncer.rejectListen(o,s),i.hu.delete(o),i.wu.removeTarget(o))}(t,e)}catch(i){T("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await ba(t,i)}else if(e instanceof qn?t.wu.Ut(e):e instanceof al?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(N.min()))try{const i=await ml(t.localStore);n.compareTo(i)>=0&&await function(r,s){const o=r.wu.Yt(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.hu.get(u);l&&r.hu.set(u,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const u=r.hu.get(a);if(!u)return;r.hu.set(a,u.withResumeToken(ie.EMPTY_BYTE_STRING,u.snapshotVersion)),_l(r,a);const l=new et(u.target,a,1,u.sequenceNumber);qs(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){T("RemoteStore","Failed to raise snapshot:",i),await ba(t,i)}}async function ba(t,e,n){if(!Dn(e))throw e;t.lu.add(1),await Mn(t),t._u.set("Offline"),n||(n=()=>ml(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{T("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Ui(t)})}async function Ea(t,e){const n=L(t);n.asyncQueue.verifyOperationInProgress(),T("RemoteStore","RemoteStore received new credentials");const i=On(n);n.lu.add(3),await Mn(n),i&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Ui(n)}async function Sm(t,e){const n=L(t);e?(n.lu.delete(2),await Ui(n)):e||(n.lu.add(2),await Mn(n),n._u.set("Unknown"))}function jt(t){return t.mu||(t.mu=function(e,n,i){const r=L(e);return r.tu(),new mm(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,i)}(t.datastore,t.asyncQueue,{zr:_m.bind(null,t),Jr:bm.bind(null,t),Go:Em.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),Ks(t)?Ws(t):t._u.set("Unknown")):(await t.mu.stop(),bl(t))})),t.mu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new Ue,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,a=new Gs(e,n,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new E(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function El(t,e){if(Pe("AsyncQueue",`${e}: ${t}`),Dn(t))return new E(m.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.comparator=e?(n,i)=>e(n,i)||I.comparator(n.key,i.key):(n,i)=>I.comparator(n.key,i.key),this.keyedMap=Gt(),this.sortedSet=new Y(this.comparator)}static emptySet(e){return new bt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bt)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new bt;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(){this.yu=new Y(I.comparator)}track(e){const n=e.doc.key,i=this.yu.get(n);i?e.type!==0&&i.type===3?this.yu=this.yu.insert(n,e):e.type===3&&i.type!==1?this.yu=this.yu.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.yu=this.yu.remove(n):e.type===1&&i.type===2?this.yu=this.yu.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):D():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,i)=>{e.push(i)}),e}}class Rt{constructor(e,n,i,r,s,o,a,u){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u}static fromInitialDocuments(e,n,i,r){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new Rt(e,n,bt.emptySet(n),s,i,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Li(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==i[r].type||!n[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(){this.Iu=void 0,this.listeners=[]}}class Im{constructor(){this.queries=new Bt(e=>Gu(e),Li),this.onlineState="Unknown",this.Tu=new Set}}async function Sl(t,e){const n=L(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new Tm),r)try{s.Iu=await n.onListen(i)}catch(o){const a=El(o,`Initialization of query '${Pr(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.listeners.push(e),e.Eu(n.onlineState),s.Iu&&e.Au(s.Iu)&&Qs(n)}async function Tl(t,e){const n=L(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),r=s.listeners.length===0)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function Cm(t,e){const n=L(t);let i=!1;for(const r of e){const s=r.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Au(r)&&(i=!0);o.Iu=r}}i&&Qs(n)}function xm(t,e,n){const i=L(t),r=i.queries.get(e);if(r)for(const s of r.listeners)s.onError(n);i.queries.delete(e)}function Qs(t){t.Tu.forEach(e=>{e.next()})}class Il{constructor(e,n,i){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=i||{}}Au(e){if(!this.options.includeMetadataChanges){const i=[];for(const r of e.docChanges)r.type!==3&&i.push(r);e=new Rt(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.Du||!i)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=Rt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e){this.key=e}}class xl{constructor(e){this.key=e}}class Am{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=M(),this.mutatedKeys=M(),this.Lu=Qu(e),this.Uu=new bt(this.Lu)}get qu(){return this.Fu}Ku(e,n){const i=n?n.Gu:new Sa,r=n?n.Uu:this.Uu;let s=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((c,h)=>{const d=r.get(c),f=Vs(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),k=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let C=!1;d&&f?d.data.isEqual(f.data)?p!==k&&(i.track({type:3,doc:f}),C=!0):this.Qu(d,f)||(i.track({type:2,doc:f}),C=!0,(u&&this.Lu(f,u)>0||l&&this.Lu(f,l)<0)&&(a=!0)):!d&&f?(i.track({type:0,doc:f}),C=!0):d&&!f&&(i.track({type:1,doc:d}),C=!0,(u||l)&&(a=!0)),C&&(f?(o=o.add(f),s=k?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),i.track({type:1,doc:c})}return{Uu:o,Gu:i,Mi:a,mutatedKeys:s}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const r=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const s=e.Gu.pu();s.sort((l,c)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return D()}};return f(h)-f(d)}(l.type,c.type)||this.Lu(l.doc,c.doc)),this.ju(i);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,u=a!==this.$u;return this.$u=a,s.length!==0||u?{snapshot:new Rt(this.query,e.Uu,r,s,e.mutatedKeys,a===0,u,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Sa,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=M(),this.Uu.forEach(i=>{this.Hu(i.key)&&(this.Bu=this.Bu.add(i.key))});const n=[];return e.forEach(i=>{this.Bu.has(i)||n.push(new xl(i))}),this.Bu.forEach(i=>{e.has(i)||n.push(new Cl(i))}),n}Ju(e){this.Fu=e.ji,this.Bu=M();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return Rt.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class km{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class Dm{constructor(e){this.key=e,this.Xu=!1}}class Nm{constructor(e,n,i,r,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new Bt(a=>Gu(a),Li),this.ec=new Map,this.nc=new Set,this.sc=new Y(I.comparator),this.ic=new Map,this.rc=new js,this.oc={},this.uc=new Map,this.cc=Nt.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function Rm(t,e){const n=Vm(t);let i,r;const s=n.tc.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.Yu();else{const o=await cm(n.localStore,Fe(e));n.isPrimaryClient&&vl(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,r=await Mm(n,e,i,a==="current")}return r}async function Mm(t,e,n,i){t.hc=(c,h,d)=>async function(f,p,k,C){let O=p.view.Ku(k);O.Mi&&(O=await va(f.localStore,p.query,!1).then(({documents:se})=>p.view.Ku(se,O)));const U=C&&C.targetChanges.get(p.targetId),Ce=p.view.applyChanges(O,f.isPrimaryClient,U);return Ia(f,p.targetId,Ce.zu),Ce.snapshot}(t,c,h,d);const r=await va(t.localStore,e,!0),s=new Am(e,r.ji),o=s.Ku(r.documents),a=Rn.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline"),u=s.applyChanges(o,t.isPrimaryClient,a);Ia(t,n,u.zu);const l=new km(e,n,s);return t.tc.set(e,l),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),u.snapshot}async function Om(t,e){const n=L(t),i=n.tc.get(e),r=n.ec.get(i.targetId);if(r.length>1)return n.ec.set(i.targetId,r.filter(s=>!Li(s,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await jr(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),wl(n.remoteStore,i.targetId),zr(n,i.targetId)}).catch(Ns)):(zr(n,i.targetId),await jr(n.localStore,i.targetId,!0))}async function Al(t,e){const n=L(t);try{const i=await om(n.localStore,e);e.targetChanges.forEach((r,s)=>{const o=n.ic.get(s);o&&(q(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Xu=!0:r.modifiedDocuments.size>0?q(o.Xu):r.removedDocuments.size>0&&(q(o.Xu),o.Xu=!1))}),await Dl(n,i,e)}catch(i){await Ns(i)}}function Ta(t,e,n){const i=L(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.tc.forEach((s,o)=>{const a=o.view.Eu(e);a.snapshot&&r.push(a.snapshot)}),function(s,o){const a=L(s);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const h of c.listeners)h.Eu(o)&&(u=!0)}),u&&Qs(a)}(i.eventManager,e),r.length&&i.Zu.Go(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Lm(t,e,n){const i=L(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.ic.get(e),s=r&&r.key;if(s){let o=new Y(I.comparator);o=o.insert(s,Z.newNoDocument(s,N.min()));const a=M().add(s),u=new Fi(N.min(),new Map,new K(P),o,a);await Al(i,u),i.sc=i.sc.remove(s),i.ic.delete(e),Xs(i)}else await jr(i.localStore,e,!1).then(()=>zr(i,e,n)).catch(Ns)}function zr(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.ec.get(e))t.tc.delete(i),n&&t.Zu.lc(i,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(i=>{t.rc.containsKey(i)||kl(t,i)})}function kl(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(wl(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),Xs(t))}function Ia(t,e,n){for(const i of n)i instanceof Cl?(t.rc.addReference(i.key,e),$m(t,i)):i instanceof xl?(T("SyncEngine","Document no longer in limbo: "+i.key),t.rc.removeReference(i.key,e),t.rc.containsKey(i.key)||kl(t,i.key)):D()}function $m(t,e){const n=e.key,i=n.path.canonicalString();t.sc.get(n)||t.nc.has(i)||(T("SyncEngine","New document in limbo: "+n),t.nc.add(i),Xs(t))}function Xs(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new I(V.fromString(e)),i=t.cc.next();t.ic.set(i,new Dm(n)),t.sc=t.sc.insert(n,i),vl(t.remoteStore,new et(Fe($s(n.path)),i,2,Rs.ot))}}async function Dl(t,e,n){const i=L(t),r=[],s=[],o=[];i.tc.isEmpty()||(i.tc.forEach((a,u)=>{o.push(i.hc(u,e,n).then(l=>{if(l){i.isPrimaryClient&&i.sharedClientState.updateQueryState(u.targetId,l.fromCache?"not-current":"current"),r.push(l);const c=Hs.Vi(u.targetId,l);s.push(c)}}))}),await Promise.all(o),i.Zu.Go(r),await async function(a,u){const l=L(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>g.forEach(u,h=>g.forEach(h.Pi,d=>l.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>g.forEach(h.vi,d=>l.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Dn(c))throw c;T("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const d=l.$i.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);l.$i=l.$i.insert(h,p)}}}(i.localStore,s))}async function Pm(t,e){const n=L(t);if(!n.currentUser.isEqual(e)){T("SyncEngine","User change. New user:",e.toKey());const i=await gl(n.localStore,e);n.currentUser=e,function(r,s){r.uc.forEach(o=>{o.forEach(a=>{a.reject(new E(m.CANCELLED,s))})}),r.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Dl(n,i.Ki)}}function Fm(t,e){const n=L(t),i=n.ic.get(e);if(i&&i.Xu)return M().add(i.key);{let r=M();const s=n.ec.get(e);if(!s)return r;for(const o of s){const a=n.tc.get(o);r=r.unionWith(a.view.qu)}return r}}function Vm(t){const e=L(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Al.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fm.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Lm.bind(null,e),e.Zu.Go=Cm.bind(null,e.eventManager),e.Zu.lc=xm.bind(null,e.eventManager),e}class Um{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=Vi(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return sm(this.persistence,new im,e.initialUser,this.wt)}_c(e){return new tm(zs.Os,this.wt)}dc(e){return new lm}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Bm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Ta(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Pm.bind(null,this.syncEngine),await Sm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Im}createDatastore(e){const n=Vi(e.databaseInfo.databaseId),i=(r=e.databaseInfo,new pm(r));var r;return function(s,o,a,u){return new ym(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,r=e.asyncQueue,s=a=>Ta(this.syncEngine,a,0),o=_a.V()?new _a:new hm,new wm(n,i,r,s,o);var n,i,r,s,o}createSyncEngine(e,n){return function(i,r,s,o,a,u,l){const c=new Nm(i,r,s,o,a,u);return l&&(c.ac=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=L(e);T("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await Mn(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):Pe("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,n,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=ge.UNAUTHENTICATED,this.clientId=ju.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{T("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(T("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ue;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=El(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function zm(t,e){t.asyncQueue.verifyOperationInProgress(),T("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async r=>{i.isEqual(r)||(await gl(e.localStore,r),i=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Hm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await qm(t);T("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(r=>Ea(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Ea(e.remoteStore,s)),t.onlineComponents=e}async function qm(t){return t.offlineComponents||(T("FirestoreClient","Using default OfflineComponentProvider"),await zm(t,new Um)),t.offlineComponents}async function Wm(t){return t.onlineComponents||(T("FirestoreClient","Using default OnlineComponentProvider"),await Hm(t,new Bm)),t.onlineComponents}async function Rl(t){const e=await Wm(t),n=e.eventManager;return n.onListen=Rm.bind(null,e.syncEngine),n.onUnlisten=Om.bind(null,e.syncEngine),n}function Km(t,e,n={}){const i=new Ue;return t.asyncQueue.enqueueAndForget(async()=>function(r,s,o,a,u){const l=new Nl({next:h=>{s.enqueueAndForget(()=>Tl(r,c));const d=h.docs.has(o);!d&&h.fromCache?u.reject(new E(m.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?u.reject(new E(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new Il($s(o.path),l,{includeMetadataChanges:!0,Du:!0});return Sl(r,c)}(await Rl(t),t.asyncQueue,e,n,i)),i.promise}function Gm(t,e,n={}){const i=new Ue;return t.asyncQueue.enqueueAndForget(async()=>function(r,s,o,a,u){const l=new Nl({next:h=>{s.enqueueAndForget(()=>Tl(r,c)),h.fromCache&&a.source==="server"?u.reject(new E(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new Il(o,l,{includeMetadataChanges:!0,Du:!0});return Sl(r,c)}(await Rl(t),t.asyncQueue,e,n,i)),i.promise}const Ca=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(t,e,n){if(!n)throw new E(m.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Qm(t,e,n,i){if(e===!0&&i===!0)throw new E(m.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function xa(t){if(!I.isDocumentKey(t))throw new E(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Aa(t){if(I.isDocumentKey(t))throw new E(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Bi(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":D()}function fi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new E(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Bi(t);throw new E(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new E(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new E(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Qm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,n,i){this._authCredentials=n,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ka({}),this._settingsFrozen=!1,e instanceof kt?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new E(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new kt(r.options.projectId)}(e))}get app(){if(!this._app)throw new E(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new E(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ka(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Fp;switch(n.type){case"gapi":const i=n.client;return q(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new Bp(i,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new E(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ca.get(e);n&&(T("ComponentProvider","Removing Datastore"),Ca.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Be(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _e(this.firestore,e,this._key)}}class zt{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new zt(this.firestore,e,this._query)}}class Be extends zt{constructor(e,n,i){super(e,n,$s(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _e(this.firestore,null,new I(e))}withConverter(e){return new Be(this.firestore,e,this._path)}}function ar(t,e,...n){if(t=on(t),Ml("collection","path",e),t instanceof Ys){const i=V.fromString(e,...n);return Aa(i),new Be(t,null,i)}{if(!(t instanceof _e||t instanceof Be))throw new E(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(V.fromString(e,...n));return Aa(i),new Be(t.firestore,null,i)}}function Da(t,e,...n){if(t=on(t),arguments.length===1&&(e=ju.I()),Ml("doc","path",e),t instanceof Ys){const i=V.fromString(e,...n);return xa(i),new _e(t,null,new I(i))}{if(!(t instanceof _e||t instanceof Be))throw new E(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(V.fromString(e,...n));return xa(i),new _e(t.firestore,t instanceof Be?t.converter:null,new I(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new yl(this,"async_queue_retry"),this.Kc=()=>{const n=or();n&&T("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=or();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=or();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new Ue;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Oc.push(e),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(e){if(!Dn(e))throw e;T("AsyncQueue","Operation failed with retryable error: "+e)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Mc.then(()=>(this.Lc=!0,e().catch(i=>{this.Bc=i,this.Lc=!1;const r=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(i);throw Pe("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Lc=!1,i))));return this.Mc=n,n}enqueueAfterDelay(e,n,i){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const r=Gs.createAndSchedule(this,e,n,i,s=>this.Wc(s));return this.$c.push(r),r}Gc(){this.Bc&&D()}verifyOperationInProgress(){}async zc(){let e;do e=this.Mc,await e;while(e!==this.Mc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class Js extends Ys{constructor(e,n,i){super(e,n,i),this.type="firestore",this._queue=new Xm,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Ll(this),this._firestoreClient.terminate()}}function qt(t=wf()){return pf(t,"firestore").getImmediate()}function Ol(t){return t._firestoreClient||Ll(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ll(t){var e;const n=t._freezeSettings(),i=function(r,s,o,a){return new Jp(r,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new jm(t._authCredentials,t._appCheckCredentials,t._queue,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new E(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new le(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mt(ie.fromBase64String(e))}catch(n){throw new E(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Mt(ie.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new E(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new E(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return P(this._lat,e._lat)||P(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym=/^__.*__$/;function Fl(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw D()}}class eo{constructor(e,n,i,r,s,o){this.settings=e,this.databaseId=n,this.wt=i,this.ignoreUndefinedProperties=r,s===void 0&&this.Xc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new eo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ta({path:i,na:!1});return r.sa(e),r}ia(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ta({path:i,na:!1});return r.Xc(),r}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return Hr(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(Fl(this.Zc)&&Ym.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class Jm{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=i||Vi(e)}aa(e,n,i,r=!1){return new eo({Zc:e,methodName:n,ca:i,path:le.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function Zm(t){const e=t._freezeSettings(),n=Vi(t._databaseId);return new Jm(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ey(t,e,n,i=!1){return to(n,t.aa(i?4:3,e))}function to(t,e){if(Vl(t=on(t)))return ny("Unsupported field value:",e,t),ty(t,e);if(t instanceof Pl)return function(n,i){if(!Fl(i.Zc))throw i.oa(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.oa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,i){const r=[];let s=0;for(const o of n){let a=to(o,i.ra(s));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),s++}return{arrayValue:{values:r}}}(t,e)}return function(n,i){if((n=on(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return pg(i.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Q.fromDate(n);return{timestampValue:Ur(i.wt,r)}}if(n instanceof Q){const r=new Q(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ur(i.wt,r)}}if(n instanceof Zs)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Mt)return{bytesValue:ul(i.wt,n._byteString)};if(n instanceof _e){const r=i.databaseId,s=n.firestore._databaseId;if(!s.isEqual(r))throw i.oa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ll(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.oa(`Unsupported field value: ${Bi(n)}`)}(t,e)}function ty(t,e){const n={};return zu(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Nn(t,(i,r)=>{const s=to(r,e.ea(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function Vl(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Q||t instanceof Zs||t instanceof Mt||t instanceof _e||t instanceof Pl)}function ny(t,e,n){if(!Vl(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=Bi(n);throw i==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+i)}}const iy=new RegExp("[~\\*/\\[\\]]");function ry(t,e,n){if(e.search(iy)>=0)throw Hr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new $l(...e.split("."))._internalPath}catch{throw Hr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Hr(t,e,n,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${i}`),o&&(u+=` in document ${r}`),u+=")"),new E(m.INVALID_ARGUMENT,a+t+u)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n,i,r,s){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new _e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ji("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class sy extends Ul{data(){return super.data()}}function ji(t,e){return typeof e=="string"?ry(t,e):e instanceof $l?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Bl extends Ul{constructor(e,n,i,r,s,o){super(e,n,i,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Wn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(ji("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Wn extends Bl{data(e={}){return super.data(e)}}class oy{constructor(e,n,i,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Qt(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Wn(this._firestore,this._userDataWriter,i.key,i,new Qt(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new E(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(o=>({type:"added",doc:new Wn(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Qt(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter),oldIndex:-1,newIndex:s++}))}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Wn(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Qt(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,l=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:ay(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ay(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return D()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new E(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jl{}function cr(t,...e){for(const n of e)t=n._apply(t);return t}class uy extends jl{constructor(e,n,i){super(),this.fa=e,this.da=n,this._a=i,this.type="where"}_apply(e){const n=Zm(e.firestore),i=function(r,s,o,a,u,l,c){let h;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new E(m.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Ma(c,l);const f=[];for(const p of c)f.push(Ra(a,r,p));h={arrayValue:{values:f}}}else h=Ra(a,r,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Ma(c,l),h=ey(o,s,c,l==="in"||l==="not-in");const d=de.create(u,l,h);return function(f,p){if(p.ht()){const C=Fs(f);if(C!==null&&!C.isEqual(p.field))throw new E(m.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${C.toString()}' and '${p.field.toString()}'`);const O=Ps(f);O!==null&&zl(f,p.field,O)}const k=function(C,O){for(const U of C.filters)if(O.indexOf(U.op)>=0)return U.op;return null}(f,function(C){switch(C){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(p.op));if(k!==null)throw k===p.op?new E(m.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${p.op.toString()}' filter.`):new E(m.INVALID_ARGUMENT,`Invalid query. You cannot use '${p.op.toString()}' filters with '${k.toString()}' filters.`)}(r,d),d}(e._query,"where",n,e.firestore._databaseId,this.fa,this.da,this._a);return new zt(e.firestore,e.converter,function(r,s){const o=r.filters.concat([s]);return new Ut(r.path,r.collectionGroup,r.explicitOrderBy.slice(),o,r.limit,r.limitType,r.startAt,r.endAt)}(e._query,i))}}function Na(t,e,n){const i=e,r=ji("where",t);return new uy(r,i,n)}class ly extends jl{constructor(e,n){super(),this.fa=e,this.wa=n,this.type="orderBy"}_apply(e){const n=function(i,r,s){if(i.startAt!==null)throw new E(m.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new E(m.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new _t(r,s);return function(a,u){if(Ps(a)===null){const l=Fs(a);l!==null&&zl(a,l,u.field)}}(i,o),o}(e._query,this.fa,this.wa);return new zt(e.firestore,e.converter,function(i,r){const s=i.explicitOrderBy.concat([r]);return new Ut(i.path,i.collectionGroup,s,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function hy(t,e="asc"){const n=e,i=ji("orderBy",t);return new ly(i,n)}function Ra(t,e,n){if(typeof(n=on(n))=="string"){if(n==="")throw new E(m.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ku(e)&&n.indexOf("/")!==-1)throw new E(m.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(V.fromString(n));if(!I.isDocumentKey(i))throw new E(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return ia(t,new I(i))}if(n instanceof _e)return ia(t,n._key);throw new E(m.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Bi(n)}.`)}function Ma(t,e){if(!Array.isArray(t)||t.length===0)throw new E(m.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new E(m.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function zl(t,e,n){if(!n.isEqual(e))throw new E(m.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{convertValue(e,n="none"){switch(ut(e)){case 0:return null;case 1:return e.booleanValue;case 2:return H(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(At(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw D()}}convertObject(e,n){const i={};return Nn(e.fields,(r,s)=>{i[r]=this.convertValue(s,n)}),i}convertGeoPoint(e){return new Zs(H(e.latitude),H(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=qu(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(gn(e));default:return null}}convertTimestamp(e){const n=ze(e);return new Q(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=V.fromString(e);q(pl(i));const r=new kt(i.get(1),i.get(3)),s=new I(i.popFirst(5));return r.isEqual(n)||Pe(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(t){t=fi(t,_e);const e=fi(t.firestore,Js);return Km(Ol(e),t._key).then(n=>fy(e,t,n))}class Hl extends dy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _e(this.firestore,null,n)}}function ur(t){t=fi(t,zt);const e=fi(t.firestore,Js),n=Ol(e),i=new Hl(e);return cy(t._query),Gm(n,t._query).then(r=>new oy(e,i,t,r))}function fy(t,e,n){const i=n.docs.get(e._key),r=new Hl(t);return new Bl(t,r,e._key,i,new Qt(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Vt=n})(yf),Zn(new an("firestore",(n,{options:i})=>{const r=n.getProvider("app").getImmediate(),s=new Js(r,new Vp(n.getProvider("auth-internal")),new zp(n.getProvider("app-check-internal")));return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s},"PUBLIC")),vt(Yo,"3.4.14",t),vt(Yo,"3.4.14","esm2017")})();class lt{static _instance=null;static get(){return this._instance}static init(e){return this._instance=new lt(e),this._instance}_app;get firebase(){return this._app}constructor(e){this._app=vf(e)}parseSong=(e,n)=>({id:e,title:n.title,authors:n.authors,slides:n.body.replace(/\n\s+\n/g,`

`).split(`

`).map(i=>i.replace(/\/\/.*(\n|$)/g,"")).filter(Boolean)});song=async(e,n=!1)=>{if(!n){const r=j.get(`OurPraise.song.${e}`);if(r)return r}const i=await Oa(Da(qt(),`songs/${e}`)).then(r=>r.exists()?this.parseSong(r.id,r.data()):null);return j.set(`OurPraise.song.${e}`,i),i};event=async(e,n=!1)=>{if(!n){const l=j.get(`OurPraise.event.${e}`);if(l)return l}const i=await Oa(Da(qt(),`events/${e}`));if(!i.exists())return j.set(`OurPraise.event.${e}`,null),null;const r=await this.organisations(),s=i.data(),o=r.find(l=>l.id===s.organisation)?.name??"UNKNOWN",a=[];for(const l of s.songs){const c=await this.song(l.id,n);c&&a.push(c)}const u={id:i.id,organisation:s.organisation,organisationName:o,title:s.title,date:s.date,songs:a};return j.set(`OurPraise.event.${e}`,u),u};events=async(e=!1)=>{if(!e){const s=j.get("OurPraise.events");if(s)return s}const n=await ur(cr(ar(qt(),"events"),hy("date","desc"))),i=await this.organisations(),r=n.docs.map(s=>{const o=s.data(),a=i.find(u=>u.id===o.organisation)?.name??"UNKNOWN";return{id:s.id,organisation:o.organisation,organisationName:a,title:o.title,date:o.date,songs:o.songs.map(u=>u.id)}});return j.set("OurPraise.events",r),r};organisations=async(e=!1)=>{if(!e){const i=j.get("OurPraise.organisations");if(i)return i}const n=(await ur(cr(ar(qt(),"organisations")))).docs.map(i=>{const r=i.data();return{id:i.id,name:r.name}});return j.set("OurPraise.organisations",n),n};search=async(e,n=!1)=>{const i=e.trim().toUpperCase();if(!n){const s=j.get("OurPraise.search."+i);if(s)return s}let r=[];return i!==""&&(r=(await ur(cr(ar(qt(),"songs"),Na("title",">=",i),Na("title","<=",i+"\uF8FF")))).docs.map(s=>s.exists()?this.parseSong(s.id,s.data()):null).filter(Boolean)),j.set("OurPraise.search."+i,r),r}}var ql=(t=>(t.SETLIST="setlist",t.NEWTAB="newtab",t))(ql||{});class zi extends rs{constructor(e){super(e,{id:e.id});const n=e.data;zi.isSetList(n)&&n.id&&lt.get()?.event(n.id).then(i=>{i&&this.set({title:i.title,data:{...i}})})}static isSetList(e){return e?.songs}}class py extends rs{map;constructor(){super({tabs:[Re],active:Re},{id:"tabs"});const e=new Map,n=this.get();let i=!1;for(const r of n.tabs){const s=De.get(r);if(s)e.set(r,new zi(s));else if(r!==Re){const o=this.get().tabs.indexOf(r);o>=0&&(n.tabs=[...this.get().tabs].splice(o,1),i=!0)}}this.get().tabs.includes(this.get().active)||(n.active=Re),i&&this.set(n),this.map=e}move=e=>{const n=this.get().tabs;if(e!=="+"&&e!=="-"){let i=e,r=n.length-1;i>r?i=r:i<0&&(i=0);const s=n[i];if(!s)return;this.set({active:s})}else{let i=this.get().tabs.findIndex(s=>s===this.get().active);e==="+"?(i--,i<0&&(i=n.length-1)):(i++,i+1>n.length&&(i=0));const r=n[i];if(!r)return;this.set({active:r})}};remove=e=>{if(!e)return;const n=this.get().tabs.indexOf(e);if(this.map.delete(e),n>=0){const i=[...this.get().tabs].splice(n,1);e===this.get().active?this.set({tabs:i,active:Re}):this.set({tabs:i})}};getTab=e=>this.map.get(e)}const ye=new py,wn=ye.use,gy=()=>F("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[y("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),y("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]});class no{_store;get store(){return this._store}constructor(e){this._store=Rc(()=>({value:e}))}use=()=>this._store(e=>e.value);get=()=>this._store.getState().value;set=e=>{this._store.setState({value:e})}}const pi=new no(!1),qr=new no(null),Wr=new no(null),my=({tab:t})=>{const e=wn(o=>o.active),n=Wr.use(),i=pi.use(),r=t.use(o=>o.id),s=t.use(o=>o.title);return F("div",{class:`HeaderTab ${r===e?"active":""} ${i&&r===n?"live":""}`,"data-id":r,onClick:()=>{ye.set({active:r})},children:[y("span",{class:"icon",children:y(_h,{})}),y("span",{class:"name",children:s}),y("span",{class:"indicator",children:y(wh,{})}),y("span",{class:"close",onClick:()=>{ye.remove(r)},children:y(gy,{})})]},r)};var Te=(t=>(t.SLIDE="sermon://custom/slide",t.CLEAR="sermon://custom/clear",t.BLACKOUT="sermon://custom/blackout",t.START="sermon://custom/start",t.STOP="sermon://custom/start",t.OPTIONS="sermon://custom/options",t))(Te||{});class ve{static dispatch(e,n){var i=new CustomEvent(e,n?{detail:n}:void 0);window.dispatchEvent(i)}static listen(e,n){window.addEventListener(e,n)}static remove(e,n){window.removeEventListener(e,n)}static once(e,n){var i=r=>{n(r),ve.remove(e,i)};ve.listen(e,i)}}const yy=/^Digit\d+$/i,vy=()=>{const t=wn(r=>r.tabs),e=wn(r=>r.active),n=pi.use(),i=r=>{if(r.ctrlKey){if(r.key==="Tab")r.preventDefault(),r.shiftKey?ye.move("-"):ye.move("+");else if(yy.test(r.code)){r.preventDefault();let s=parseInt(r.key)-1;s===-1&&(s=9),ye.move(s)}}};return pe(()=>(window.addEventListener("keydown",i),function(){window.removeEventListener("keydown",i)}),[]),F("div",{class:"Header",children:[F("div",{class:"nav",children:[y("div",{class:"tabs",children:t.map(r=>{const s=ye.getTab(r);return!s||r===Re?null:y(my,{tab:s},r)})}),y("div",{class:`add ${e.toString()===Re?"active":""}`,onClick:()=>{ye.set({active:Re})},children:y(vh,{})})]}),y("div",{class:"control",children:y("div",{class:`present ${n?"isPresenting":""}`,onClick:()=>{ve.dispatch(Te.START)},children:y("span",{children:n?"Stop":"Start"})})})]})};var Wl=function(t,e){return(Wl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r])})(t,e)};function Kl(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}Wl(t,e),t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var me=function(){return(me=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function w(t,e,n,i){return new(n||(n=Promise))(function(r,s){function o(l){try{u(i.next(l))}catch(c){s(c)}}function a(l){try{u(i.throw(l))}catch(c){s(c)}}function u(l){var c;l.done?r(l.value):(c=l.value,c instanceof n?c:new n(function(h){h(c)})).then(o,a)}u((i=i.apply(t,e||[])).next())})}function b(t,e){var n,i,r,s,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(u){return function(l){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,i&&(r=2&c[0]?i.return:c[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,c[1])).done)return r;switch(i=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,i=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(r=o.trys,!((r=r.length>0&&r[r.length-1])||c[0]!==6&&c[0]!==2)){o=0;continue}if(c[0]===3&&(!r||c[1]>r[0]&&c[1]<r[3])){o.label=c[1];break}if(c[0]===6&&o.label<r[1]){o.label=r[1],r=c;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(c);break}r[2]&&o.ops.pop(),o.trys.pop();continue}c=e.call(t,o)}catch(h){c=[6,h],i=0}finally{n=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([u,l])}}}function gi(t,e){e===void 0&&(e=!1);var n=window.crypto.getRandomValues(new Uint32Array(1))[0],i="_".concat(n);return Object.defineProperty(window,i,{value:function(r){return e&&Reflect.deleteProperty(window,i),t?.(r)},writable:!1,configurable:!0}),n}function io(t,e){return e===void 0&&(e={}),w(this,void 0,void 0,function(){return b(this,function(n){return[2,new Promise(function(i,r){var s=gi(function(a){i(a),Reflect.deleteProperty(window,"_".concat(o))},!0),o=gi(function(a){r(a),Reflect.deleteProperty(window,"_".concat(s))},!0);window.__TAURI_IPC__(me({cmd:t,callback:s,error:o},e))})]})})}function wy(t,e){e===void 0&&(e="asset");var n=encodeURIComponent(t);return navigator.userAgent.includes("Windows")?"https://".concat(e,".localhost/").concat(n):"".concat(e,"://").concat(n)}Object.freeze({__proto__:null,transformCallback:gi,invoke:io,convertFileSrc:wy});function x(t){return w(this,void 0,void 0,function(){return b(this,function(e){return[2,io("tauri",t)]})})}function Gl(t,e){return w(this,void 0,void 0,function(){return b(this,function(n){return[2,x({__tauriModule:"Event",message:{cmd:"unlisten",event:t,eventId:e}})]})})}function _y(t,e,n){return w(this,void 0,void 0,function(){return b(this,function(i){switch(i.label){case 0:return[4,x({__tauriModule:"Event",message:{cmd:"emit",event:t,windowLabel:e,payload:typeof n=="string"?n:JSON.stringify(n)}})];case 1:return i.sent(),[2]}})})}function Ql(t,e,n){return w(this,void 0,void 0,function(){var i=this;return b(this,function(r){return[2,x({__tauriModule:"Event",message:{cmd:"listen",event:t,windowLabel:e,handler:gi(n)}}).then(function(s){return function(){return w(i,void 0,void 0,function(){return b(this,function(o){return[2,Gl(t,s)]})})}})]})})}function by(t,e,n){return w(this,void 0,void 0,function(){return b(this,function(i){return[2,Ql(t,e,function(r){n(r),Gl(t,r.id).catch(function(){})})]})})}var mi,Xl=function(t,e){this.type="Logical",this.width=t,this.height=e},Kr=function(){function t(e,n){this.type="Physical",this.width=e,this.height=n}return t.prototype.toLogical=function(e){return new Xl(this.width/e,this.height/e)},t}(),Yl=function(t,e){this.type="Logical",this.x=t,this.y=e},yi=function(){function t(e,n){this.type="Physical",this.x=e,this.y=n}return t.prototype.toLogical=function(e){return new Yl(this.x/e,this.y/e)},t}();function Ey(){return new ht(window.__TAURI_METADATA__.__currentWindow.label,{skip:!0})}function Jl(){return window.__TAURI_METADATA__.__windows.map(function(t){return new ht(t.label,{skip:!0})})}(function(t){t[t.Critical=1]="Critical",t[t.Informational=2]="Informational"})(mi||(mi={}));var Le,La=["tauri://created","tauri://error"],Zl=function(){function t(e){this.label=e,this.listeners=Object.create(null)}return t.prototype.listen=function(e,n){return w(this,void 0,void 0,function(){var i=this;return b(this,function(r){return this._handleTauriEvent(e,n)?[2,Promise.resolve(function(){var s=i.listeners[e];s.splice(s.indexOf(n),1)})]:[2,Ql(e,this.label,n)]})})},t.prototype.once=function(e,n){return w(this,void 0,void 0,function(){var i=this;return b(this,function(r){return this._handleTauriEvent(e,n)?[2,Promise.resolve(function(){var s=i.listeners[e];s.splice(s.indexOf(n),1)})]:[2,by(e,this.label,n)]})})},t.prototype.emit=function(e,n){return w(this,void 0,void 0,function(){var i,r;return b(this,function(s){if(La.includes(e)){for(i=0,r=this.listeners[e]||[];i<r.length;i++)(0,r[i])({event:e,id:-1,windowLabel:this.label,payload:n});return[2,Promise.resolve()]}return[2,_y(e,this.label,n)]})})},t.prototype._handleTauriEvent=function(e,n){return!!La.includes(e)&&(e in this.listeners?this.listeners[e].push(n):this.listeners[e]=[n],!0)},t}(),eh=function(t){function e(){return t!==null&&t.apply(this,arguments)||this}return Kl(e,t),e.prototype.scaleFactor=function(){return w(this,void 0,void 0,function(){return b(this,function(n){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"scaleFactor"}}}})]})})},e.prototype.innerPosition=function(){return w(this,void 0,void 0,function(){return b(this,function(n){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"innerPosition"}}}}).then(function(i){var r=i.x,s=i.y;return new yi(r,s)})]})})},e.prototype.outerPosition=function(){return w(this,void 0,void 0,function(){return b(this,function(n){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"outerPosition"}}}}).then(function(i){var r=i.x,s=i.y;return new yi(r,s)})]})})},e.prototype.innerSize=function(){return w(this,void 0,void 0,function(){return b(this,function(n){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"innerSize"}}}}).then(function(i){var r=i.width,s=i.height;return new Kr(r,s)})]})})},e.prototype.outerSize=function(){return w(this,void 0,void 0,function(){return b(this,function(n){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"outerSize"}}}}).then(function(i){var r=i.width,s=i.height;return new Kr(r,s)})]})})},e.prototype.isFullscreen=function(){return w(this,void 0,void 0,function(){return b(this,function(n){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isFullscreen"}}}})]})})},e.prototype.isMaximized=function(){return w(this,void 0,void 0,function(){return b(this,function(n){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isMaximized"}}}})]})})},e.prototype.isDecorated=function(){return w(this,void 0,void 0,function(){return b(this,function(n){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isDecorated"}}}})]})})},e.prototype.isResizable=function(){return w(this,void 0,void 0,function(){return b(this,function(n){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isResizable"}}}})]})})},e.prototype.isVisible=function(){return w(this,void 0,void 0,function(){return b(this,function(n){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isVisible"}}}})]})})},e.prototype.theme=function(){return w(this,void 0,void 0,function(){return b(this,function(n){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"theme"}}}})]})})},e.prototype.center=function(){return w(this,void 0,void 0,function(){return b(this,function(n){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"center"}}}})]})})},e.prototype.requestUserAttention=function(n){return w(this,void 0,void 0,function(){var i;return b(this,function(r){return i=null,n&&(i=n===mi.Critical?{type:"Critical"}:{type:"Informational"}),[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"requestUserAttention",payload:i}}}})]})})},e.prototype.setResizable=function(n){return w(this,void 0,void 0,function(){return b(this,function(i){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setResizable",payload:n}}}})]})})},e.prototype.setTitle=function(n){return w(this,void 0,void 0,function(){return b(this,function(i){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setTitle",payload:n}}}})]})})},e.prototype.maximize=function(){return w(this,void 0,void 0,function(){return b(this,function(n){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"maximize"}}}})]})})},e.prototype.unmaximize=function(){return w(this,void 0,void 0,function(){return b(this,function(n){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"unmaximize"}}}})]})})},e.prototype.toggleMaximize=function(){return w(this,void 0,void 0,function(){return b(this,function(n){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"toggleMaximize"}}}})]})})},e.prototype.minimize=function(){return w(this,void 0,void 0,function(){return b(this,function(n){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"minimize"}}}})]})})},e.prototype.unminimize=function(){return w(this,void 0,void 0,function(){return b(this,function(n){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"unminimize"}}}})]})})},e.prototype.show=function(){return w(this,void 0,void 0,function(){return b(this,function(n){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"show"}}}})]})})},e.prototype.hide=function(){return w(this,void 0,void 0,function(){return b(this,function(n){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"hide"}}}})]})})},e.prototype.close=function(){return w(this,void 0,void 0,function(){return b(this,function(n){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"close"}}}})]})})},e.prototype.setDecorations=function(n){return w(this,void 0,void 0,function(){return b(this,function(i){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setDecorations",payload:n}}}})]})})},e.prototype.setAlwaysOnTop=function(n){return w(this,void 0,void 0,function(){return b(this,function(i){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setAlwaysOnTop",payload:n}}}})]})})},e.prototype.setSize=function(n){return w(this,void 0,void 0,function(){return b(this,function(i){if(!n||n.type!=="Logical"&&n.type!=="Physical")throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setSize",payload:{type:n.type,data:{width:n.width,height:n.height}}}}}})]})})},e.prototype.setMinSize=function(n){return w(this,void 0,void 0,function(){return b(this,function(i){if(n&&n.type!=="Logical"&&n.type!=="Physical")throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setMinSize",payload:n?{type:n.type,data:{width:n.width,height:n.height}}:null}}}})]})})},e.prototype.setMaxSize=function(n){return w(this,void 0,void 0,function(){return b(this,function(i){if(n&&n.type!=="Logical"&&n.type!=="Physical")throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setMaxSize",payload:n?{type:n.type,data:{width:n.width,height:n.height}}:null}}}})]})})},e.prototype.setPosition=function(n){return w(this,void 0,void 0,function(){return b(this,function(i){if(!n||n.type!=="Logical"&&n.type!=="Physical")throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setPosition",payload:{type:n.type,data:{x:n.x,y:n.y}}}}}})]})})},e.prototype.setFullscreen=function(n){return w(this,void 0,void 0,function(){return b(this,function(i){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setFullscreen",payload:n}}}})]})})},e.prototype.setFocus=function(){return w(this,void 0,void 0,function(){return b(this,function(n){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setFocus"}}}})]})})},e.prototype.setIcon=function(n){return w(this,void 0,void 0,function(){return b(this,function(i){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setIcon",payload:{icon:typeof n=="string"?n:Array.from(n)}}}}})]})})},e.prototype.setSkipTaskbar=function(n){return w(this,void 0,void 0,function(){return b(this,function(i){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setSkipTaskbar",payload:n}}}})]})})},e.prototype.setCursorGrab=function(n){return w(this,void 0,void 0,function(){return b(this,function(i){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorGrab",payload:n}}}})]})})},e.prototype.setCursorVisible=function(n){return w(this,void 0,void 0,function(){return b(this,function(i){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorVisible",payload:n}}}})]})})},e.prototype.setCursorIcon=function(n){return w(this,void 0,void 0,function(){return b(this,function(i){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorIcon",payload:n}}}})]})})},e.prototype.setCursorPosition=function(n){return w(this,void 0,void 0,function(){return b(this,function(i){if(!n||n.type!=="Logical"&&n.type!=="Physical")throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorPosition",payload:{type:n.type,data:{x:n.x,y:n.y}}}}}})]})})},e.prototype.startDragging=function(){return w(this,void 0,void 0,function(){return b(this,function(n){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"startDragging"}}}})]})})},e.prototype.onResized=function(n){return w(this,void 0,void 0,function(){return b(this,function(i){return[2,this.listen("tauri://resize",n)]})})},e.prototype.onMoved=function(n){return w(this,void 0,void 0,function(){return b(this,function(i){return[2,this.listen("tauri://move",n)]})})},e.prototype.onCloseRequested=function(n){return w(this,void 0,void 0,function(){var i=this;return b(this,function(r){return[2,this.listen("tauri://close-requested",function(s){var o=new th(s);Promise.resolve(n(o)).then(function(){if(!o.isPreventDefault())return i.close()})})]})})},e.prototype.onFocusChanged=function(n){return w(this,void 0,void 0,function(){var i,r;return b(this,function(s){switch(s.label){case 0:return[4,this.listen("tauri://focus",function(o){n(me(me({},o),{payload:!0}))})];case 1:return i=s.sent(),[4,this.listen("tauri://blur",function(o){n(me(me({},o),{payload:!1}))})];case 2:return r=s.sent(),[2,function(){i(),r()}]}})})},e.prototype.onScaleChanged=function(n){return w(this,void 0,void 0,function(){return b(this,function(i){return[2,this.listen("tauri://scale-change",n)]})})},e.prototype.onMenuClicked=function(n){return w(this,void 0,void 0,function(){return b(this,function(i){return[2,this.listen("tauri://menu",n)]})})},e.prototype.onFileDropEvent=function(n){return w(this,void 0,void 0,function(){var i,r,s;return b(this,function(o){switch(o.label){case 0:return[4,this.listen("tauri://file-drop",function(a){n(me(me({},a),{payload:{type:"drop",paths:a.payload}}))})];case 1:return i=o.sent(),[4,this.listen("tauri://file-drop-hover",function(a){n(me(me({},a),{payload:{type:"hover",paths:a.payload}}))})];case 2:return r=o.sent(),[4,this.listen("tauri://file-drop-cancelled",function(a){n(me(me({},a),{payload:{type:"cancel"}}))})];case 3:return s=o.sent(),[2,function(){i(),r(),s()}]}})})},e.prototype.onThemeChanged=function(n){return w(this,void 0,void 0,function(){return b(this,function(i){return[2,this.listen("tauri://theme-changed",n)]})})},e}(Zl),th=function(){function t(e){this._preventDefault=!1,this.event=e.event,this.windowLabel=e.windowLabel,this.id=e.id}return t.prototype.preventDefault=function(){this._preventDefault=!0},t.prototype.isPreventDefault=function(){return this._preventDefault},t}(),ht=function(t){function e(n,i){i===void 0&&(i={});var r=t.call(this,n)||this;return i?.skip||x({__tauriModule:"Window",message:{cmd:"createWebview",data:{options:me({label:n},i)}}}).then(function(){return w(r,void 0,void 0,function(){return b(this,function(s){return[2,this.emit("tauri://created")]})})}).catch(function(s){return w(r,void 0,void 0,function(){return b(this,function(o){return[2,this.emit("tauri://error",s)]})})}),r}return Kl(e,t),e.getByLabel=function(n){return Jl().some(function(i){return i.label===n})?new e(n,{skip:!0}):null},e}(eh);function nh(){return w(this,void 0,void 0,function(){return b(this,function(t){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"currentMonitor"}}}})]})})}function Sy(){return w(this,void 0,void 0,function(){return b(this,function(t){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"primaryMonitor"}}}})]})})}function ih(){return w(this,void 0,void 0,function(){return b(this,function(t){return[2,x({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"availableMonitors"}}}})]})})}"__TAURI_METADATA__"in window?Le=new ht(window.__TAURI_METADATA__.__currentWindow.label,{skip:!0}):(console.warn(`Could not find "window.__TAURI_METADATA__". The "appWindow" value will reference the "main" window label.
Note that this is not an issue if running this frontend on a browser instead of a Tauri window.`),Le=new ht("main",{skip:!0}));Object.freeze({__proto__:null,WebviewWindow:ht,WebviewWindowHandle:Zl,WindowManager:eh,CloseRequestedEvent:th,getCurrent:Ey,getAll:Jl,get appWindow(){return Le},LogicalSize:Xl,PhysicalSize:Kr,LogicalPosition:Yl,PhysicalPosition:yi,get UserAttentionType(){return mi},currentMonitor:nh,primaryMonitor:Sy,availableMonitors:ih});function rh(){return w(this,void 0,void 0,function(){return b(this,function(t){return[2,x({__tauriModule:"App",message:{cmd:"getAppVersion"}})]})})}function Ty(){return w(this,void 0,void 0,function(){return b(this,function(t){return[2,x({__tauriModule:"App",message:{cmd:"getAppName"}})]})})}function sh(){return w(this,void 0,void 0,function(){return b(this,function(t){return[2,x({__tauriModule:"App",message:{cmd:"getTauriVersion"}})]})})}Object.freeze({__proto__:null,getName:Ty,getVersion:rh,getTauriVersion:sh});class we{static isTau=void 0;static versions={tauri:"",client:window.__VERSION__,app:""};static async init(){return new Promise((e,n)=>{typeof window.__TAURI__<"u"&&window.__TAURI__?(we.isTau=!0,this.setup().then(()=>{e()}).catch(()=>{n()})):(we.isTau=!1,this.setup(),n())})}static setup=async()=>{j.enabled=!0,lt.init({apiKey:"AIzaSyCBfNSkzwlXjavTRNq-TmVo7QpcHrZYvgE",authDomain:"ourpraise-fb.firebaseapp.com",projectId:"ourpraise-fb",storageBucket:"ourpraise-fb.appspot.com",messagingSenderId:"485823144275",appId:"1:485823144275:web:a6eae91b382d7ebefc41a6"}),we.isTau&&(this.versions.tauri=await sh(),this.versions.app=await rh(),setTimeout(async()=>{Le.show(),Le.label==="control"&&io("close_splash")},800))};static destroy=()=>{};static getLabel=()=>{let e="control";if(we.isTau)Le.label&&(e=Le.label);else{const n=new URLSearchParams(window.location.search).get("label");n&&(e=n)}return e}}const Iy=()=>{const t=async i=>{const r=i.currentTarget?.getAttribute("data-id");if(!r)return;const s=await lt.get()?.event(r,!0);if(!s)return;console.log(s);const o=`tab.ourpraise.${s.id}`;ye.map.set(o,new zi({id:o,title:s.title,data:s,type:ql.SETLIST,active:""})),ye.set({tabs:[...ye.get().tabs,o]})},[e,n]=fe([]);return pe(()=>{lt.get()?.events(!0).then(i=>{const r=i.reduce((s,o)=>((s[o.organisation]=s[o.organisation]||[]).push(o),s),{});n(Object.values(r).map(s=>{const o=s[0];return{events:s,id:o.organisation,name:o.organisationName}}))})},[]),F("div",{class:"page NewTab",children:[y("div",{class:"title",children:"OurPresenter"}),y("div",{class:"events",children:e.map(i=>F("div",{class:"org","data-id":i.id,children:[y("div",{class:"orgName",children:i.name}),i.events.map(r=>F("div",{class:"event","data-id":r.id,onClick:t,children:[y("span",{class:"evTitle",children:r.title}),y("span",{class:"evDate",children:r.date}),y("span",{class:"evLength",children:r.songs.length})]},r.id))]},i.id))}),F("div",{class:"footer",children:[F("span",{children:["ver ",we.versions.client]}),we.isTau?F("span",{children:[we.versions.tauri," / ",we.versions.app]}):y(it,{})]})]})};const Cy=/[^\S\r\n]{2,}/g;function oh(t){return t.replace(Cy,"")}const xy=({slide:t,listId:e,songId:n,index:i,...r})=>{const s=wn(h=>h.active),o=qr.use(),[a,u]=fe({key:void 0,shift:!1,id:`${i}`}),[l,c]=fe(!1);return pe(()=>{let h=i+1,d=!1;h>10&&(d=!0,h-=10),h===10&&(h=0),h>10&&(h=void 0),u({key:h,shift:d,id:`${e}/${n}/${i}`})},[e,n,i]),pe(()=>{},[s]),F("div",{...r,id:a.id,tabIndex:-1,role:"listitem",class:`slide ${o===a.id?"active":l?"subActive":""}`,children:[a.key!==void 0&&F("div",{class:"hotkey",children:[a.shift?y("li",{}):y(it,{}),a.key]}),y("div",{class:"preview",children:y("div",{class:"textContent",children:y("div",{class:"inner",children:oh(t)})})})]})};var Ae=(t=>(t.PRESENT="sermon://event/present",t.STYLE="sermon://event/style",t.CLEAR="sermon://event/clear",t.STOPPED="sermon://event/stopped",t.LOADED="sermon://event/loaded",t))(Ae||{});class Ay{static settingsToString(e){const n=e;return Object.keys(e).map(i=>{n[i];let r=`${i}=${n[i]}`;return i==="top"?r+=`,screenY=${n[i]}`:i==="left"?r+=`,screenX=${n[i]}`:i==="width"?r+=`,innerWidth=${n[i]}`:i==="height"&&(r+=`,innerHeight=${n[i]}`),r}).join(",")+",popup=1"}}class Et{static _instance=null;static get(){return this._instance}_window=null;get webview(){return this._window}_unlistenWindowClose=()=>null;_unlistenAppClose=()=>null;_native=null;_current="";get current(){return this._current}constructor(){if(Et._instance!==null&&Et._instance.close(),ve.listen(Te.SLIDE,this.onSlideEvent),ve.listen(Te.STOP,this.onStopShow),we.isTau)this._window=new ht("present",{fileDropEnabled:!1,focus:!1,minHeight:300,minWidth:500,title:"OurPresenter",visible:!1,decorations:!1,skipTaskbar:!1,resizable:!0,url:window.location.origin+window.location.pathname}),this._window.once("tauri://created",this.init),this._window.once("tauri://error",e=>{console.error(e),this.close()});else{const e=new URLSearchParams;e.set("label","present"),this._native=window.open(`${window.location.pathname}?${e.toString()}`,"present",Ay.settingsToString({width:500,height:500,location:!1,menubar:!1,resizable:!0,scrollbars:!1,status:!1,toolbar:!1,top:-500,left:-500,fullscreen:!0})),this._native&&this._native.addEventListener("beforeunload",()=>{console.log("unload"),this.destroy()})}Et._instance=this,pi.set(!0)}onSlideEvent=e=>{if(!e.detail){qr.set(null),Wr.set(null);return}this._current=e.detail;const n=e.detail?e.detail.split("/"):[],i=n[0]?ye.getTab(n[0]):void 0,r=n[1]&&i?i.get().data.songs.find(o=>o.id===n[1]):null,s=n[2]&&r?r.slides[parseInt(n[2])]:null;this.set(s),qr.set(e.detail||null),Wr.set(i?.get().id||null)};init=async()=>{if(!this._window)return;this._unlistenAppClose=await Le.onCloseRequested(this.close),this._unlistenWindowClose=await this._window.onCloseRequested(this.destroy);const e=await ih(),n=await nh();if(e.length<=0||!n){console.log("no monitors"),this.close();return}const i=e.find(r=>r.name!==n.name);if(!i){console.log("no 2nd monitor"),this.close();return}await this._window.setPosition(new yi(i.position.x,i.position.y)),await this._window.maximize(),await this._window.setFullscreen(!0)};set=async e=>{this._window?await this._window.emit(Ae.PRESENT,e):this._native&&this._native.postMessage({event:Ae.PRESENT,payload:JSON.stringify(e)},window.location.origin)};style=async e=>{this._window?await this._window.emit(Ae.STYLE,e):this._native&&this._native.postMessage({event:Ae.STYLE,payload:JSON.stringify(e)},window.location.origin)};onStopShow=()=>{this.close()};close=()=>{this.destroy(),this._window&&this._window.close(),this._native&&this._native.close()};destroy=()=>{this._unlistenWindowClose(),this._unlistenAppClose(),ve.remove(Te.SLIDE,this.onSlideEvent),ve.remove(Te.STOP,this.onStopShow),Le.emit(Ae.STOPPED),pi.set(!1)}}const ky=/^Digit\d+$/i,Dy=({song:t,index:e,listId:n})=>{const i=nt(null),r=nt(null);pe(()=>{const a=i.current?[...i.current.children].filter(c=>c.getAttribute("role")==="listitem"&&c.getAttribute("tabindex")==="-1"):[],u=(c,h=!1)=>{const d=document.activeElement;if(i.current){if(!d||r.current===d){let f=0;c===-1&&(f=a.length-1),a[f]&&a[f]?.focus();return}if(!(d&&!i.current.contains(d)))for(let f=0;f<a.length;f++){const p=a[f];if(p===d||p?.contains(d)){let k=f+c;h?c===1?k=a.length-1:k=0:k>=a.length?k=0:k<0&&(k=a.length-1),a[k]?.focus();break}}}},l=c=>{if(i.current){if((c.key==="ArrowUp"||c.key==="ArrowLeft")&&!c.ctrlKey)c.preventDefault(),u(-1);else if((c.key==="ArrowDown"||c.key==="ArrowRight")&&!c.ctrlKey)c.preventDefault(),u(1);else if(c.key==="Home"||(c.key==="ArrowUp"||c.key==="ArrowLeft")&&c.ctrlKey)c.preventDefault(),u(-1,!0);else if(c.key==="End"||(c.key==="ArrowDown"||c.key==="ArrowRight")&&c.ctrlKey)c.preventDefault(),u(1,!0);else if(ky.test(c.code)){let h=parseInt(c.key)-1;h===-1&&(h=9),c.shiftKey&&(h=10),h>a.length-1&&(h=a.length-1),h<0&&(h=0);const d=a[h];d&&(d==document.activeElement?d.click():d.focus())}}};return r.current&&r.current.addEventListener("keydown",l),function(){r.current&&r.current.removeEventListener("keydown",l)}},[]);const s=a=>{ve.dispatch(Te.SLIDE,a.currentTarget.id)},o=a=>{Et.get()?.current!==a.currentTarget.id&&ve.dispatch(Te.SLIDE,a.currentTarget.id)};return F("div",{class:"SongComponent",ref:r,tabIndex:0,role:"list",children:[F("div",{class:"title",children:[e&&`#${e} `,t.title]}),y("div",{class:"slides",ref:i,children:t.slides.map((a,u)=>y(xy,{slide:a,index:u,listId:n,songId:t.id,onClick:s,onFocus:o},`${t.id}_sld${u}`))})]})},Ny=({id:t})=>{const e=ye.getTab(t);if(!e)return null;const n=e.use(i=>i.data);return y("div",{class:"page SongsGroup",children:n.songs.map((i,r)=>y(Dy,{song:i,listId:n.id,index:r+1},i.id))},`${t}/group`)};const Xt={sidebarWidth:200,sidebar:null,padding:{top:25,right:25,bottom:25,left:25},font:"'Fira Sans', sans-serif",scale:1,background:"#000000"};class Ry extends rs{constructor(){super(Xt,{id:"settings"})}}const ae=new Ry;const $a=({id:t,icon:e})=>{const n=ae.use(i=>i.sidebar);return y("div",{class:`SidebarTab ${t===n?"active":""}`,"data-id":t,onClick:()=>{ae.set({sidebar:t===n?null:t})},children:e},t)},My=()=>F("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[y("circle",{cx:"12",cy:"12",r:"3"}),y("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]});const Kn=({className:t,label:e,defaultValue:n,hint:i,prefix:r,invalid:s,onChange:o,inputRef:a,type:u,autoComplete:l="off",...c})=>{const[h,d]=fe(n??"");return pe(()=>{o&&o(h)},[h]),y("input",{...c,class:`Input ${t}`,autoComplete:l??"off",type:u??"text",ref:a,value:h,"aria-label":e,onChange:f=>{d(f?.target?.value??"")}})},Oy=()=>F("div",{class:"SettingsModule",children:[y("div",{class:"title",children:"Settings"}),F("div",{class:"setting",children:[y("label",{for:"font",children:"Font"}),y(Kn,{label:"font",id:"font",defaultValue:ae.get().font,placeholder:ae.get().font,onChange:t=>{ae.set({font:t||Xt.font})}})]}),F("div",{class:"setting",children:[y("label",{for:"background",children:"Background"}),y(Kn,{label:"background",id:"background",defaultValue:ae.get().background,placeholder:ae.get().background,onChange:t=>{ae.set({background:t||Xt.background})}})]}),F("div",{class:"setting",children:[y("label",{for:"scale",children:"Scale"}),y(Kn,{label:"scale",id:"scale",type:"number",defaultValue:`${ae.get().scale}`,placeholder:`${Xt.scale}`,onChange:t=>{ae.set({scale:parseInt(t)||Xt.scale})}})]})]});const Ly=({className:t,defaultValue:e,onChange:n,...i})=>{const[r,s]=fe(e??""),o=nt(null);return pe(()=>{n&&(o.current&&clearTimeout(o),o.current=setTimeout(()=>{n(r)},250))},[r]),pe(()=>function(){o.current&&clearTimeout(o)},[]),y(Kn,{...i,class:`SearchInput ${t}`,value:r,onChange:a=>s(a.trim())})},$y=()=>{const t=e=>{console.log(e),lt.get()?.search(e).then(n=>{console.log(n)})};return F("div",{class:"AddMusicModule",children:[y("div",{class:"title",children:"Songs"}),y(Ly,{label:"Search songs",placeholder:"Search songs",onChange:t})]})},Py=()=>{const t=ae.use(a=>a.sidebar),e=ae.use(a=>a.sidebarWidth),n=nt(0),i=nt(!1),r=()=>{i.current=!0},s=()=>{i.current=!1,n.current=0},o=a=>{if(!i.current)return;let u=ae.get().sidebarWidth+a.movementX;u<100&&(u=100),u>800&&(u=800),ae.set({sidebarWidth:u})};return pe(()=>(document.addEventListener("mouseup",s),document.addEventListener("mousemove",o,!1),function(){document.removeEventListener("mouseup",s),document.removeEventListener("mousemove",o,!1),ae.set({sidebarWidth:e})}),[]),F("div",{class:"Sidebar",children:[F("div",{class:"tabs",children:[y($a,{id:"music",icon:y(cc,{})}),y($a,{id:"settings",icon:y(My,{})})]}),t?F("div",{class:"content",style:{width:`${e}px`},children:[t==="settings"?y(Oy,{}):t==="music"?y($y,{}):y(it,{}),y("div",{class:"resizer",onMouseDown:r,onMouseUp:s,onMouseMove:o})]}):y(it,{})]})},Fy=()=>{const t=wn(i=>i.active),e=i=>{i.key==="Escape"&&(i.preventDefault(),ve.dispatch(Te.CLEAR))},n=()=>{new Et};return pe(()=>(window.addEventListener("keydown",e),ve.listen(Te.START,n),function(){window.removeEventListener("keydown",e),ve.remove(Te.START,n)}),[]),F("div",{class:"Control",children:[y(Py,{}),F("div",{class:"main",children:[y(vy,{}),t==Re?y(Iy,{}):y(Ny,{id:t})]})]})};const Vy=({data:t})=>t?y("div",{class:"PresentingContent",children:y("div",{class:"text",children:oh(t)})}):null,Uy=()=>{const[t,e]=fe(null);return pe(()=>{const n=a=>{const u=a.payload?JSON.parse(a.payload):null;e(u)},i=a=>{};let r=()=>null,s=()=>null;const o=a=>{a.data.event===Ae.PRESENT?n(a.data):a.data.event===Ae.PRESENT&&i(a.data)};return(async()=>{if(we.isTau){const a=ht.getByLabel("control");a&&(r=await a.listen(Ae.PRESENT,n)),a&&(s=await a.listen(Ae.STYLE,i))}else window.addEventListener("message",o,!1),r=()=>window.removeEventListener("message",o)})(),function(){r(),s()}},[]),t?y(Vy,{data:t}):y("div",{class:"Present"})};try{self["workbox:window:6.5.2"]&&_()}catch{}function Gr(t,e){return new Promise(function(n){var i=new MessageChannel;i.port1.onmessage=function(r){n(r.data)},t.postMessage(e,[i.port2])})}function By(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Pa(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function jy(t,e){var n;if(typeof Symbol>"u"||t[Symbol.iterator]==null){if(Array.isArray(t)||(n=function(r,s){if(r){if(typeof r=="string")return Pa(r,s);var o=Object.prototype.toString.call(r).slice(8,-1);return o==="Object"&&r.constructor&&(o=r.constructor.name),o==="Map"||o==="Set"?Array.from(r):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?Pa(r,s):void 0}}(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(n=t[Symbol.iterator]()).next.bind(n)}try{self["workbox:core:6.5.2"]&&_()}catch{}var lr=function(){var t=this;this.promise=new Promise(function(e,n){t.resolve=e,t.reject=n})};function hr(t,e){var n=location.href;return new URL(t,n).href===new URL(e,n).href}var Wt=function(t,e){this.type=t,Object.assign(this,e)};function jn(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function zy(){}var Hy={type:"SKIP_WAITING"};function Fa(t,e){if(!e)return t&&t.then?t.then(zy):Promise.resolve()}var qy=function(t){var e,n;function i(a,u){var l,c;return u===void 0&&(u={}),(l=t.call(this)||this).nn={},l.tn=0,l.rn=new lr,l.en=new lr,l.on=new lr,l.un=0,l.an=new Set,l.cn=function(){var h=l.fn,d=h.installing;l.tn>0||!hr(d.scriptURL,l.sn.toString())||performance.now()>l.un+6e4?(l.vn=d,h.removeEventListener("updatefound",l.cn)):(l.hn=d,l.an.add(d),l.rn.resolve(d)),++l.tn,d.addEventListener("statechange",l.ln)},l.ln=function(h){var d=l.fn,f=h.target,p=f.state,k=f===l.vn,C={sw:f,isExternal:k,originalEvent:h};!k&&l.mn&&(C.isUpdate=!0),l.dispatchEvent(new Wt(p,C)),p==="installed"?l.wn=self.setTimeout(function(){p==="installed"&&d.waiting===f&&l.dispatchEvent(new Wt("waiting",C))},200):p==="activating"&&(clearTimeout(l.wn),k||l.en.resolve(f))},l.dn=function(h){var d=l.hn,f=d!==navigator.serviceWorker.controller;l.dispatchEvent(new Wt("controlling",{isExternal:f,originalEvent:h,sw:d,isUpdate:l.mn})),f||l.on.resolve(d)},l.gn=(c=function(h){var d=h.data,f=h.ports,p=h.source;return jn(l.getSW(),function(){l.an.has(p)&&l.dispatchEvent(new Wt("message",{data:d,originalEvent:h,ports:f,sw:p}))})},function(){for(var h=[],d=0;d<arguments.length;d++)h[d]=arguments[d];try{return Promise.resolve(c.apply(this,h))}catch(f){return Promise.reject(f)}}),l.sn=a,l.nn=u,navigator.serviceWorker.addEventListener("message",l.gn),l}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var r,s,o=i.prototype;return o.register=function(a){var u=(a===void 0?{}:a).immediate,l=u!==void 0&&u;try{var c=this;return function(h,d){var f=h();return f&&f.then?f.then(d):d(f)}(function(){if(!l&&document.readyState!=="complete")return Fa(new Promise(function(h){return window.addEventListener("load",h)}))},function(){return c.mn=Boolean(navigator.serviceWorker.controller),c.yn=c.pn(),jn(c.bn(),function(h){c.fn=h,c.yn&&(c.hn=c.yn,c.en.resolve(c.yn),c.on.resolve(c.yn),c.yn.addEventListener("statechange",c.ln,{once:!0}));var d=c.fn.waiting;return d&&hr(d.scriptURL,c.sn.toString())&&(c.hn=d,Promise.resolve().then(function(){c.dispatchEvent(new Wt("waiting",{sw:d,wasWaitingBeforeRegister:!0}))}).then(function(){})),c.hn&&(c.rn.resolve(c.hn),c.an.add(c.hn)),c.fn.addEventListener("updatefound",c.cn),navigator.serviceWorker.addEventListener("controllerchange",c.dn),c.fn})})}catch(h){return Promise.reject(h)}},o.update=function(){try{return this.fn?Fa(this.fn.update()):void 0}catch(a){return Promise.reject(a)}},o.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},o.messageSW=function(a){try{return jn(this.getSW(),function(u){return Gr(u,a)})}catch(u){return Promise.reject(u)}},o.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&Gr(this.fn.waiting,Hy)},o.pn=function(){var a=navigator.serviceWorker.controller;return a&&hr(a.scriptURL,this.sn.toString())?a:void 0},o.bn=function(){try{var a=this;return function(u,l){try{var c=u()}catch(h){return l(h)}return c&&c.then?c.then(void 0,l):c}(function(){return jn(navigator.serviceWorker.register(a.sn,a.nn),function(u){return a.un=performance.now(),u})},function(u){throw u})}catch(u){return Promise.reject(u)}},r=i,(s=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&By(r.prototype,s),i}(function(){function t(){this.Pn=new Map}var e=t.prototype;return e.addEventListener=function(n,i){this.Sn(n).add(i)},e.removeEventListener=function(n,i){this.Sn(n).delete(i)},e.dispatchEvent=function(n){n.target=this;for(var i,r=jy(this.Sn(n.type));!(i=r()).done;)(0,i.value)(n)},e.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},t}());function Wy(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:i,onRegistered:r,onRegisterError:s}=t;let o,a;const u=async(l=!0)=>{l&&o?.addEventListener("controlling",c=>{c.isUpdate&&window.location.reload()}),a&&a.waiting&&await Gr(a.waiting,{type:"SKIP_WAITING"})};if("serviceWorker"in navigator){o=new qy("/sermon-presenter/sw.js",{scope:"/sermon-presenter/",type:"classic"}),o.addEventListener("activated",l=>{l.isUpdate||i?.()});{const l=()=>{n?.()};o.addEventListener("waiting",l),o.addEventListener("externalwaiting",l)}o.register({immediate:e}).then(l=>{a=l,r?.(l)}).catch(l=>{s?.(l)})}return u}function Ky(t={}){const{immediate:e=!0,onNeedRefresh:n,onOfflineReady:i,onRegistered:r,onRegisterError:s}=t,[o,a]=fe(!1),[u,l]=fe(!1),[c]=fe(()=>Wy({immediate:e,onOfflineReady(){l(!0),i?.()},onNeedRefresh(){a(!0),n?.()},onRegistered:r,onRegisterError:s}));return{needRefresh:[o,a],offlineReady:[u,l],updateServiceWorker:c}}function Gy(){const{offlineReady:[t],needRefresh:[e],updateServiceWorker:n}=Ky({onRegistered(i){console.log("SW Registered: "+i)},onRegisterError(i){console.log("SW registration error",i)}});return pe(()=>{(!t||e)&&n(!0)},[t,e]),y(it,{})}const Qy=()=>{const[t,e]=fe(y(it,{}));return pe(()=>{const n=()=>{j.clean(),we.getLabel()==="present"?e(y(Uy,{})):e(y(Fy,{}))},i=()=>{console.error("Failed to initialize Tauri client"),n()};return we.init().then(n).catch(i),function(){}},[]),F(it,{children:[t,y(Gy,{})]})};tt(y(Qy,{}),document.getElementById("wrapper"));
