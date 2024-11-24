const s=Object.create(null);s.open="0";s.close="1";s.ping="2";s.pong="3";s.message="4";s.upgrade="5";s.noop="6";const w=Object.create(null);Object.keys(s).forEach(e=>{w[s[e]]=e});const p={type:"error",data:"parser error"},U=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",T=typeof ArrayBuffer=="function",C=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,m=({type:e,data:n},r,t)=>U&&n instanceof Blob?r?t(n):b(n,t):T&&(n instanceof ArrayBuffer||C(n))?r?t(n):b(new Blob([n]),t):t(s[e]+(n||"")),b=(e,n)=>{const r=new FileReader;return r.onload=function(){const t=r.result.split(",")[1];n("b"+(t||""))},r.readAsDataURL(e)};function B(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let g;function P(e,n){if(U&&e.data instanceof Blob)return e.data.arrayBuffer().then(B).then(n);if(T&&(e.data instanceof ArrayBuffer||C(e.data)))return n(B(e.data));m(e,!1,r=>{g||(g=new TextEncoder),n(g.encode(r))})}const E="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",y=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let e=0;e<E.length;e++)y[E.charCodeAt(e)]=e;const S=e=>{let n=e.length*.75,r=e.length,t,f=0,o,c,a,i;e[e.length-1]==="="&&(n--,e[e.length-2]==="="&&n--);const l=new ArrayBuffer(n),u=new Uint8Array(l);for(t=0;t<r;t+=4)o=y[e.charCodeAt(t)],c=y[e.charCodeAt(t+1)],a=y[e.charCodeAt(t+2)],i=y[e.charCodeAt(t+3)],u[f++]=o<<2|c>>4,u[f++]=(c&15)<<4|a>>2,u[f++]=(a&3)<<6|i&63;return l},V=typeof ArrayBuffer=="function",R=(e,n)=>{if(typeof e!="string")return{type:"message",data:D(e,n)};const r=e.charAt(0);return r==="b"?{type:"message",data:x(e.substring(1),n)}:w[r]?e.length>1?{type:w[r],data:e.substring(1)}:{type:w[r]}:p},x=(e,n)=>{if(V){const r=S(e);return D(r,n)}else return{base64:!0,data:e}},D=(e,n)=>{switch(n){case"blob":return e instanceof Blob?e:new Blob([e]);case"arraybuffer":default:return e instanceof ArrayBuffer?e:e.buffer}},O="",v=(e,n)=>{const r=e.length,t=new Array(r);let f=0;e.forEach((o,c)=>{m(o,!1,a=>{t[c]=a,++f===r&&n(t.join(O))})})},L=(e,n)=>{const r=e.split(O),t=[];for(let f=0;f<r.length;f++){const o=R(r[f],n);if(t.push(o),o.type==="error")break}return t};function j(){return new TransformStream({transform(e,n){P(e,r=>{const t=r.length;let f;if(t<126)f=new Uint8Array(1),new DataView(f.buffer).setUint8(0,t);else if(t<65536){f=new Uint8Array(3);const o=new DataView(f.buffer);o.setUint8(0,126),o.setUint16(1,t)}else{f=new Uint8Array(9);const o=new DataView(f.buffer);o.setUint8(0,127),o.setBigUint64(1,BigInt(t))}e.data&&typeof e.data!="string"&&(f[0]|=128),n.enqueue(f),n.enqueue(r)})}})}let A;function d(e){return e.reduce((n,r)=>n+r.length,0)}function h(e,n){if(e[0].length===n)return e.shift();const r=new Uint8Array(n);let t=0;for(let f=0;f<n;f++)r[f]=e[0][t++],t===e[0].length&&(e.shift(),t=0);return e.length&&t<e[0].length&&(e[0]=e[0].slice(t)),r}function q(e,n){A||(A=new TextDecoder);const r=[];let t=0,f=-1,o=!1;return new TransformStream({transform(c,a){for(r.push(c);;){if(t===0){if(d(r)<1)break;const i=h(r,1);o=(i[0]&128)===128,f=i[0]&127,f<126?t=3:f===126?t=1:t=2}else if(t===1){if(d(r)<2)break;const i=h(r,2);f=new DataView(i.buffer,i.byteOffset,i.length).getUint16(0),t=3}else if(t===2){if(d(r)<8)break;const i=h(r,8),l=new DataView(i.buffer,i.byteOffset,i.length),u=l.getUint32(0);if(u>Math.pow(2,21)-1){a.enqueue(p);break}f=u*Math.pow(2,32)+l.getUint32(4),t=3}else{if(d(r)<f)break;const i=h(r,f);a.enqueue(R(o?i:A.decode(i),n)),t=0}if(f===0||f>e){a.enqueue(p);break}}}})}const _=4;export{L as a,m as b,q as c,R as d,v as e,j as f,_ as p};
//# sourceMappingURL=engine.io-parser-BiEtp6m2.js.map