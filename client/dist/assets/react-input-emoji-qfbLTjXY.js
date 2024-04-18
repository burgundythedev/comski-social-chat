import{R as j,r as w}from"./react-C0PVtSo4.js";import{r as dn,R as un}from"./react-dom-ysRME76E.js";function on(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],d=document.createElement("style");d.type="text/css",n==="top"&&r.firstChild?r.insertBefore(d,r.firstChild):r.appendChild(d),d.styleSheet?d.styleSheet.cssText=e:d.appendChild(document.createTextNode(e))}}var an=`.react-input-emoji--container {
  color: #4b4b4b;
  text-rendering: optimizeLegibility;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 21px;
  margin: 5px 10px;
  box-sizing: border-box;
  flex: 1 1 auto;
  font-size: 15px;
  font-family: sans-serif;
  font-weight: 400;
  line-height: 20px;
  min-height: 20px;
  min-width: 0;
  outline: none;
  width: inherit;
  will-change: width;
  vertical-align: baseline;
  border: 1px solid #eaeaea;
  margin-right: 0;
}

.react-input-emoji--wrapper {
  display: flex;
  overflow: hidden;
  flex: 1;
  position: relative;
  padding-right: 0;
  vertical-align: baseline;
  outline: none;
  margin: 0;
  padding: 0;
  border: 0;
}

.react-input-emoji--input {
  font-weight: 400;
  max-height: 100px;
  min-height: 20px;
  outline: none;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  white-space: pre-wrap;
  word-wrap: break-word;
  z-index: 1;
  width: 100%;
  user-select: text;
  padding: 9px 12px 11px;
  text-align: left;
}

.react-input-emoji--input img {
  vertical-align: middle;
  width: 18px !important;
  height: 18px !important;
  display: inline !important;
  margin-left: 1px;
  margin-right: 1px;
}

.react-input-emoji--overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9;
}

.react-input-emoji--placeholder {
  color: #a0a0a0;
  pointer-events: none;
  position: absolute;
  user-select: none;
  z-index: 2;
  left: 16px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  width: calc(100% - 22px);
}

.react-input-emoji--button {
  position: relative;
  display: block;
  text-align: center;
  padding: 0 10px;
  overflow: hidden;
  transition: color 0.1s ease-out;
  margin: 0;
  box-shadow: none;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
}

.react-input-emoji--button svg {
  fill: #858585;
}

.react-input-emoji--button__show svg {
  fill: #128b7e;
}

.react-emoji {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
}

.react-emoji-picker--container {
  position: absolute;
  top: 0;
  width: 100%;
}

.react-emoji-picker--wrapper {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 435px;
  width: 352px;
  overflow: hidden;
  z-index: 10;
}

.react-emoji-picker {
  position: absolute;
  top: 0;
  left: 0;
  animation: slidein 0.1s ease-in-out;
}

.react-emoji-picker__show {
  top: 0;
}

.react-input-emoji--mention--container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}

.react-input-emoji--mention--list {
  background-color: #fafafa;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 5px;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
}

.react-input-emoji--mention--item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
  background-color: transparent;
  width: 100%;
  margin: 0;
  border: 0;
}

.react-input-emoji--mention--item__selected {
  background-color: #eeeeee;
}

.react-input-emoji--mention--item--img {
  width: 34px;
  height: 34px;
  border-radius: 50%;
}

.react-input-emoji--mention--item--name {
  font-size: 16px;
  color: #333;
}

.react-input-emoji--mention--item--name__selected {
  color: green;
}

.react-input-emoji--mention--text {
  color: #039be5;
}

.react-input-emoji--mention--loading {
  background-color: #fafafa;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

.react-input-emoji--mention--loading--spinner,
.react-input-emoji--mention--loading--spinner::after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}

.react-input-emoji--mention--loading--spinner {
  margin: 1px auto;
  font-size: 2px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(0, 0, 0, 0.1);
  border-right: 1.1em solid rgba(0, 0, 0, 0.1);
  border-bottom: 1.1em solid rgba(0, 0, 0, 0.1);
  border-left: 1.1em solid rgba(0, 0, 0, 0.4);
  transform: translateZ(0);
  animation: load8 1.1s infinite linear;
}

@keyframes load8 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes slidein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
`;on(an);function cn(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,d,u,i,a=[],o=!0,s=!1;try{if(u=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;o=!1}else for(;!(o=(r=u.call(n)).done)&&(a.push(r.value),a.length!==t);o=!0);}catch(c){s=!0,d=c}finally{try{if(!o&&n.return!=null&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw d}}return a}}function We(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(d){return Object.getOwnPropertyDescriptor(e,d).enumerable})),n.push.apply(n,r)}return n}function Ke(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?We(Object(n),!0).forEach(function(r){sn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):We(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Z(){Z=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,d=Object.defineProperty||function(p,m,_){p[m]=_.value},u=typeof Symbol=="function"?Symbol:{},i=u.iterator||"@@iterator",a=u.asyncIterator||"@@asyncIterator",o=u.toStringTag||"@@toStringTag";function s(p,m,_){return Object.defineProperty(p,m,{value:_,enumerable:!0,configurable:!0,writable:!0}),p[m]}try{s({},"")}catch{s=function(m,_,$){return m[_]=$}}function c(p,m,_,$){var k=m&&m.prototype instanceof x?m:x,T=Object.create(k.prototype),A=new re($||[]);return d(T,"_invoke",{value:ie(p,_,A)}),T}function l(p,m,_){try{return{type:"normal",arg:p.call(m,_)}}catch($){return{type:"throw",arg:$}}}t.wrap=c;var f="suspendedStart",g="suspendedYield",v="executing",y="completed",b={};function x(){}function E(){}function S(){}var R={};s(R,i,function(){return this});var M=Object.getPrototypeOf,z=M&&M(M(le([])));z&&z!==n&&r.call(z,i)&&(R=z);var N=S.prototype=x.prototype=Object.create(R);function F(p){["next","throw","return"].forEach(function(m){s(p,m,function(_){return this._invoke(m,_)})})}function Q(p,m){function _(k,T,A,P){var O=l(p[k],p,T);if(O.type!=="throw"){var ee=O.arg,de=ee.value;return de&&typeof de=="object"&&r.call(de,"__await")?m.resolve(de.__await).then(function(U){_("next",U,A,P)},function(U){_("throw",U,A,P)}):m.resolve(de).then(function(U){ee.value=U,A(ee)},function(U){return _("throw",U,A,P)})}P(O.arg)}var $;d(this,"_invoke",{value:function(k,T){function A(){return new m(function(P,O){_(k,T,P,O)})}return $=$?$.then(A,A):A()}})}function ie(p,m,_){var $=f;return function(k,T){if($===v)throw new Error("Generator is already running");if($===y){if(k==="throw")throw T;return{value:e,done:!0}}for(_.method=k,_.arg=T;;){var A=_.delegate;if(A){var P=D(A,_);if(P){if(P===b)continue;return P}}if(_.method==="next")_.sent=_._sent=_.arg;else if(_.method==="throw"){if($===f)throw $=y,_.arg;_.dispatchException(_.arg)}else _.method==="return"&&_.abrupt("return",_.arg);$=v;var O=l(p,m,_);if(O.type==="normal"){if($=_.done?y:g,O.arg===b)continue;return{value:O.arg,done:_.done}}O.type==="throw"&&($=y,_.method="throw",_.arg=O.arg)}}}function D(p,m){var _=m.method,$=p.iterator[_];if($===e)return m.delegate=null,_==="throw"&&p.iterator.return&&(m.method="return",m.arg=e,D(p,m),m.method==="throw")||_!=="return"&&(m.method="throw",m.arg=new TypeError("The iterator does not provide a '"+_+"' method")),b;var k=l($,p.iterator,m.arg);if(k.type==="throw")return m.method="throw",m.arg=k.arg,m.delegate=null,b;var T=k.arg;return T?T.done?(m[p.resultName]=T.value,m.next=p.nextLoc,m.method!=="return"&&(m.method="next",m.arg=e),m.delegate=null,b):T:(m.method="throw",m.arg=new TypeError("iterator result is not an object"),m.delegate=null,b)}function V(p){var m={tryLoc:p[0]};1 in p&&(m.catchLoc=p[1]),2 in p&&(m.finallyLoc=p[2],m.afterLoc=p[3]),this.tryEntries.push(m)}function K(p){var m=p.completion||{};m.type="normal",delete m.arg,p.completion=m}function re(p){this.tryEntries=[{tryLoc:"root"}],p.forEach(V,this),this.reset(!0)}function le(p){if(p||p===""){var m=p[i];if(m)return m.call(p);if(typeof p.next=="function")return p;if(!isNaN(p.length)){var _=-1,$=function k(){for(;++_<p.length;)if(r.call(p,_))return k.value=p[_],k.done=!1,k;return k.value=e,k.done=!0,k};return $.next=$}}throw new TypeError(typeof p+" is not iterable")}return E.prototype=S,d(N,"constructor",{value:S,configurable:!0}),d(S,"constructor",{value:E,configurable:!0}),E.displayName=s(S,o,"GeneratorFunction"),t.isGeneratorFunction=function(p){var m=typeof p=="function"&&p.constructor;return!!m&&(m===E||(m.displayName||m.name)==="GeneratorFunction")},t.mark=function(p){return Object.setPrototypeOf?Object.setPrototypeOf(p,S):(p.__proto__=S,s(p,o,"GeneratorFunction")),p.prototype=Object.create(N),p},t.awrap=function(p){return{__await:p}},F(Q.prototype),s(Q.prototype,a,function(){return this}),t.AsyncIterator=Q,t.async=function(p,m,_,$,k){k===void 0&&(k=Promise);var T=new Q(c(p,m,_,$),k);return t.isGeneratorFunction(m)?T:T.next().then(function(A){return A.done?A.value:T.next()})},F(N),s(N,o,"Generator"),s(N,i,function(){return this}),s(N,"toString",function(){return"[object Generator]"}),t.keys=function(p){var m=Object(p),_=[];for(var $ in m)_.push($);return _.reverse(),function k(){for(;_.length;){var T=_.pop();if(T in m)return k.value=T,k.done=!1,k}return k.done=!0,k}},t.values=le,re.prototype={constructor:re,reset:function(p){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(K),!p)for(var m in this)m.charAt(0)==="t"&&r.call(this,m)&&!isNaN(+m.slice(1))&&(this[m]=e)},stop:function(){this.done=!0;var p=this.tryEntries[0].completion;if(p.type==="throw")throw p.arg;return this.rval},dispatchException:function(p){if(this.done)throw p;var m=this;function _(O,ee){return T.type="throw",T.arg=p,m.next=O,ee&&(m.method="next",m.arg=e),!!ee}for(var $=this.tryEntries.length-1;$>=0;--$){var k=this.tryEntries[$],T=k.completion;if(k.tryLoc==="root")return _("end");if(k.tryLoc<=this.prev){var A=r.call(k,"catchLoc"),P=r.call(k,"finallyLoc");if(A&&P){if(this.prev<k.catchLoc)return _(k.catchLoc,!0);if(this.prev<k.finallyLoc)return _(k.finallyLoc)}else if(A){if(this.prev<k.catchLoc)return _(k.catchLoc,!0)}else{if(!P)throw new Error("try statement without catch or finally");if(this.prev<k.finallyLoc)return _(k.finallyLoc)}}}},abrupt:function(p,m){for(var _=this.tryEntries.length-1;_>=0;--_){var $=this.tryEntries[_];if($.tryLoc<=this.prev&&r.call($,"finallyLoc")&&this.prev<$.finallyLoc){var k=$;break}}k&&(p==="break"||p==="continue")&&k.tryLoc<=m&&m<=k.finallyLoc&&(k=null);var T=k?k.completion:{};return T.type=p,T.arg=m,k?(this.method="next",this.next=k.finallyLoc,b):this.complete(T)},complete:function(p,m){if(p.type==="throw")throw p.arg;return p.type==="break"||p.type==="continue"?this.next=p.arg:p.type==="return"?(this.rval=this.arg=p.arg,this.method="return",this.next="end"):p.type==="normal"&&m&&(this.next=m),b},finish:function(p){for(var m=this.tryEntries.length-1;m>=0;--m){var _=this.tryEntries[m];if(_.finallyLoc===p)return this.complete(_.completion,_.afterLoc),K(_),b}},catch:function(p){for(var m=this.tryEntries.length-1;m>=0;--m){var _=this.tryEntries[m];if(_.tryLoc===p){var $=_.completion;if($.type==="throw"){var k=$.arg;K(_)}return k}}throw new Error("illegal catch attempt")},delegateYield:function(p,m,_){return this.delegate={iterator:le(p),resultName:m,nextLoc:_},this.method==="next"&&(this.arg=e),b}},t}function qe(e,t,n,r,d,u,i){try{var a=e[u](i),o=a.value}catch(s){n(s);return}a.done?t(o):Promise.resolve(o).then(r,d)}function ye(e){return function(){var t=this,n=arguments;return new Promise(function(r,d){var u=e.apply(t,n);function i(o){qe(u,r,d,i,a,"next",o)}function a(o){qe(u,r,d,i,a,"throw",o)}i(void 0)})}}function sn(e,t,n){return t=_n(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function fn(e,t){if(e==null)return{};var n={},r=Object.keys(e),d,u;for(u=0;u<r.length;u++)d=r[u],!(t.indexOf(d)>=0)&&(n[d]=e[d]);return n}function ln(e,t){if(e==null)return{};var n=fn(e,t),r,d;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(d=0;d<u.length;d++)r=u[d],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function G(e,t){return pn(e)||cn(e,t)||Ct(e,t)||vn()}function xt(e){return hn(e)||mn(e)||Ct(e)||bn()}function hn(e){if(Array.isArray(e))return Ae(e)}function pn(e){if(Array.isArray(e))return e}function mn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ct(e,t){if(e){if(typeof e=="string")return Ae(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ae(e,t)}}function Ae(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function bn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gn(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _n(e){var t=gn(e,"string");return typeof t=="symbol"?t:String(t)}var yn="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";function $t(e){var t=wn(e);return t&&(t=xt(new Set(t)),t.forEach(function(n){e=Et(e,n,St("",n))})),e}function Et(e,t,n){return e.replace(new RegExp(t,"g"),n)}function wn(e){return e.match(/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*/g)}function kn(e){var t,n=document.querySelector("em-emoji-picker");if(!n)return Ge(e.native);var r=n==null||(t=n.shadowRoot)===null||t===void 0?void 0:t.querySelector('[title="'.concat(e.name,'"] > span > span'));if(!r)return Ge(e.native);var d=Et(r.style.cssText,'"',"'");return St(d,e.native)}function St(e,t){return'<img style="'.concat(e,'; display: inline-block" data-emoji="').concat(t,'" src="').concat(yn,'" />')}function Ge(e){return'<span class="width: 18px; height: 18px; display: inline-block; margin: 0 1px;">'.concat(e,"</span>")}function ve(e){var t=document.createElement("div");t.innerHTML=e;var n=Array.prototype.slice.call(t.querySelectorAll("img"));return n.forEach(function(r){t.innerHTML=t.innerHTML.replace(r.outerHTML,r.dataset.emoji)}),t.innerHTML}function xn(e){var t=window.getSelection();if(t!==null){for(var n=document.createElement("div"),r=0,d=t.rangeCount;r<d;++r)n.appendChild(t.getRangeAt(r).cloneContents());n=$n(n),e.clipboardData.setData("text",n.innerText),e.preventDefault()}}function Cn(e){var t,n;if(window.getSelection){if(t=window.getSelection(),t===null)return;if(t.getRangeAt&&t.rangeCount){n=t.getRangeAt(0),n.deleteContents();var r=document.createElement("div");r.innerHTML=e;for(var d=document.createDocumentFragment(),u,i;u=r.firstChild;)i=d.appendChild(u);n.insertNode(d),i&&(n=n.cloneRange(),n.setStartAfter(i),n.collapse(!0),t.removeAllRanges(),t.addRange(n))}}}function $n(e){var t=Array.prototype.slice.call(e.querySelectorAll("img"));return t.forEach(function(n){n.outerHTML=n.dataset.emoji}),e}function Xe(e){var t=e.text,n=e.html,r=t.length,d=(n.match(/<img/g)||[]).length;return r+d}function En(e){var t=e.innerHTML.replaceAll(/<br\s*\/?>/gi,"[BR]"),n=document.createElement("div");n.innerHTML=t;var r=n.innerText,d=r.replaceAll(/\[BR\]/gi,"</br>");return d}function Sn(e){var t=e.startContainer,n=e.startOffset;if(t.nodeType!==Node.TEXT_NODE){for(;t.nodeType!==Node.TEXT_NODE&&(t=t.nextSibling,!!t););if(!t)for(t=e.commonAncestorContainer;t.nodeType!==Node.TEXT_NODE;)t=t.firstChild;n=0}return{node:t,offset:n}}function jn(){var e=window.getSelection(),t=e.getRangeAt(0),n=Sn(t);return{selection:e,range:t,selectionStart:n}}function Ln(){var e=jn(),t=e.selection,n=e.range,r=e.selectionStart;if(t.isCollapsed&&r.offset===r.node.textContent.length){var d=document.createElement("br");n.insertNode(d),n.setStartAfter(d),n.setEndAfter(d),t.removeAllRanges(),t.addRange(n);var u=document.createElement("br");n.insertNode(u),n.setStartAfter(u),n.setEndAfter(u),t.removeAllRanges(),t.addRange(n)}else{var i=document.createElement("br");n.insertNode(i),n.setStartAfter(i),n.setEndAfter(i),t.removeAllRanges(),t.addRange(n),r.node.nextSibling&&r.node.nextSibling.nodeType===Node.TEXT_NODE&&(n.setStart(r.node.nextSibling,1),n.setEnd(r.node.nextSibling,1)),t.removeAllRanges(),t.addRange(n)}}function Je(e,t,n,r){if(typeof e!="string")throw new Error("First param must be a string");if(typeof t!="string"&&!(t instanceof RegExp))throw new Error("Second param must be a string pattern or a regular expression");var d=typeof t=="string"?Rn:Tn;return d(e,t,n,r)}function Rn(e,t,n,r){var d=e.indexOf(t);if(d>=0){var u=[],i=d+t.length;return d>0&&u.push(e.substring(0,d)),u.push(typeof n=="function"?n(e.substring(d,i),d+r,e):n),i<e.length&&u.push(e.substring(i)),u}else return[e]}function Tn(e,t,n,r){var d=[],u=typeof n=="function",i=t.lastIndex;t.lastIndex=0;for(var a,o=0;a=t.exec(e);){var s=a.index;a[0]===""&&t.lastIndex++,s!==o&&d.push(e.substring(o,s));var c=a[0];o=s+c.length;var l=u?n.apply(this,a.concat(s+r,a.input)):n;if(d.push(l),!t.global)break}return o<e.length&&d.push(e.substring(o)),t.lastIndex=i,d}var Mn=function(t,n,r){if(typeof t=="string")return Je(t,n,r,0);if(!Array.isArray(t)||!t[0])throw new TypeError("First argument must be an array or non-empty string");for(var d=t.length,u=[],i=0,a=0;a<d;++a){var o=t[a];typeof o=="string"?(u.push.apply(u,Je(o,n,r,i)),i+=o.length):u.push(o)}return u},zn=/(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c[\udffc-\udfff]|\ud83e\udef1\ud83c\udffc\u200d\ud83e\udef2\ud83c[\udffb\udffd-\udfff]|\ud83e\udef1\ud83c\udffd\u200d\ud83e\udef2\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\udef1\ud83c\udffe\u200d\ud83e\udef2\ud83c[\udffb-\udffd\udfff]|\ud83e\udef1\ud83c\udfff\u200d\ud83e\udef2\ud83c[\udffb-\udffe]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83e\udd1d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91]|\ud83e\udd1d)|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd\udec3-\udec5\udef0-\udef6]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udedd-\udedf\udeeb\udeec\udef4-\udefc\udfe0-\udfeb\udff0]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78-\uddb4\uddb7\uddba\uddbc-\uddcc\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7c\ude80-\ude86\ude90-\udeac\udeb0-\udeba\udec0-\udec2\uded0-\uded9\udee0-\udee7]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g;function An(e,t){for(var n=[],r=0,d=0,u=0;u<e.length;)r=e.charCodeAt(u++),d?(n.push((65536+(d-55296<<10)+(r-56320)).toString(16)),d=0):55296<=r&&r<=56319?d=r:n.push(r.toString(16));return n.join(t||"-")}var Pn=/\uFE0F/g,Dn="‍";function In(e){return An(e.indexOf(Dn)<0?e.replace(Pn,""):e)}var Hn=function(t,n){return Mn(t,zn,function(d,u,i){var a=In(d);return n(a,d,i)})},On=j.createElement,Bn=typeof location>"u"?"":location.protocol==="https:"?"https:":"http:",Fn={height:"1em",width:"1em",margin:"0 .05em 0 .1em",verticalAlign:"-0.1em"};function Nn(e){return e&&e.length>0&&e.charAt(e.length-1)!==":"?e+":":e}var Un=function(t){return t=Ye({protocol:Bn,baseUrl:"//cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/",size:"72x72",ext:".png",props:null},t),function(r,d,u){var i="";return t.baseUrl.indexOf("http")!==0&&(i+=Nn(t.protocol)),i+=t.baseUrl+t.size+"/"+r+t.ext,On("img",Ye({key:u,alt:d,draggable:!1,src:i,style:Fn},t.props))}};function Ye(){for(var e={},t=arguments.length,n=0;n<t;++n){var r=arguments[n];if(r)for(var d in r)Object.prototype.hasOwnProperty.call(r,d)&&(e[d]=r[d])}return e}var Vn=Hn,Wn=Un,Kn=function(t,n){var r=typeof n=="function"?n:Wn(n);return Vn(t,r)},qn=Kn,Gn=new RegExp(/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*/g);function jt(e,t){var n=w.useRef([]),r=w.useRef(""),d=w.useCallback(function(i){n.current.push(i)},[]),u=w.useCallback(function(i){var a=n.current.reduce(function(o,s){return s(o)},i);return a=Xn(a,e),t&&(a=Jn(a)),r.current=a,a},[e,t]);return{addSanitizeFn:d,sanitize:u,sanitizedTextRef:r}}function Xn(e,t){var n=document.createElement("div");n.innerHTML=e;var r;return t?r=En(n):r=n.innerText||"",r=r.replace(/\n/gi,""),r}function Jn(e){return e=Yn(e),e=dn(qn(e)),e=e.replace(new RegExp("&lt;span class=&quot;message-emoji&quot;&gt;","g"),'<span class="message-emoji">'),e=e.replace(new RegExp("&lt;/span&gt;","g"),"</span>"),e}function Yn(e){return e.replace(Gn,'<span class="message-emoji">$&</span>')}function Zn(e){var t=e.ref,n=e.textInputRef,r=e.setValue,d=e.emitChange,u=e.shouldConvertEmojiToImage,i=jt(!1,u),a=i.sanitize,o=i.sanitizedTextRef;w.useImperativeHandle(t,function(){return{get value(){return o.current},set value(s){r(s)},focus:function(){n.current!==null&&n.current.focus()},blur:function(){n.current!==null&&a(n.current.html),d()}}})}function Qn(e,t,n){var r=w.useRef(null),d=w.useRef(n),u=w.useCallback(function(){if(e.current!==null){var a=r.current,o=e.current.size;(!a||a.width!==o.width||a.height!==o.height)&&typeof t=="function"&&t(o),r.current=o}},[t,e]),i=w.useCallback(function(a){typeof d.current=="function"&&d.current(a),typeof t=="function"&&u()},[u,t]);return w.useEffect(function(){e.current&&u()},[u,e]),i}var er=["placeholder","style","tabIndex","className","onChange"],tr=function(t,n){var r=t.placeholder,d=t.style,u=t.tabIndex,i=t.className,a=t.onChange,o=ln(t,er);w.useImperativeHandle(n,function(){return{appendContent:function(x){f.current&&f.current.focus(),Cn(x),f.current&&f.current.focus(),f.current&&l.current&&ve(f.current.innerHTML)===""?l.current.style.visibility="visible":l.current&&(l.current.style.visibility="hidden"),f.current&&typeof a=="function"&&a(f.current.innerHTML)},set html(b){if(f.current&&(f.current.innerHTML=b),l.current){var x=ve(b);x===""?l.current.style.visibility="visible":l.current.style.visibility="hidden"}typeof a=="function"&&f.current&&a(f.current.innerHTML)},get html(){return f.current?f.current.innerHTML:""},get text(){return f.current?f.current.innerText:""},get size(){return f.current?{width:f.current.offsetWidth,height:f.current.offsetHeight}:{width:0,height:0}},focus:function(){f.current&&f.current.focus()}}});var s=w.useMemo(function(){var b={};return d.placeholderColor&&(b.color=d.placeholderColor),b},[d==null?void 0:d.placeholderColor]),c=w.useMemo(function(){var b={};return d.color&&(b.color=d.color),b},[d==null?void 0:d.color]),l=w.useRef(null),f=w.useRef(null);function g(b){if(b.key==="Enter"&&(b.shiftKey===!0||b.ctrlKey===!0)&&o.shouldReturn&&(b.preventDefault(),f.current)){Ln();return}b.key==="Enter"?o.onEnter(b):b.key==="ArrowUp"?o.onArrowUp(b):b.key==="ArrowDown"?o.onArrowDown(b):b.key.length===1&&l.current&&(l.current.style.visibility="hidden"),o.onKeyDown(b)}function v(){o.onFocus()}function y(b){o.onKeyUp(b);var x=f.current;if(l.current&&x){var E=ve(x.innerHTML);E===""?l.current.style.visibility="visible":l.current.style.visibility="hidden"}typeof a=="function"&&f.current&&a(f.current.innerHTML)}return j.createElement("div",{className:"react-input-emoji--container",style:d},j.createElement("div",{className:"react-input-emoji--wrapper",onClick:v},j.createElement("div",{ref:l,className:"react-input-emoji--placeholder",style:s},r),j.createElement("div",{ref:f,onKeyDown:g,onKeyUp:y,tabIndex:u,contentEditable:!0,className:"react-input-emoji--input".concat(i?" ".concat(i):""),onBlur:o.onBlur,onCopy:o.onCopy,onPaste:o.onPaste,"data-testid":"react-input-emoji--input",style:c})))},nr=w.forwardRef(tr);function Ze(e){var t=e.showPicker,n=e.toggleShowPicker,r=e.buttonElement,d=e.buttonRef,u=w.useRef(null),i=w.useState(!1),a=G(i,2),o=a[0],s=a[1];return w.useEffect(function(){var c,l,f,g;((c=d==null||(l=d.current)===null||l===void 0||(l=l.childNodes)===null||l===void 0?void 0:l.length)!==null&&c!==void 0?c:0)>2?(u.current.appendChild(d.current.childNodes[0]),s(!0)):((f=r==null||(g=r.childNodes)===null||g===void 0?void 0:g.length)!==null&&f!==void 0?f:0)>2&&(u.current.appendChild(r==null?void 0:r.childNodes[0]),s(!0))},[r==null?void 0:r.childNodes]),j.createElement("button",{ref:u,type:"button",className:"react-input-emoji--button".concat(t?" react-input-emoji--button__show":""),onClick:n},!o&&j.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",className:"react-input-emoji--button--icon"},j.createElement("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),j.createElement("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})))}function Lt(e){return e&&e.__esModule?e.default:e}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Se,C,Rt,he,Tt,Qe,we={},Mt=[],rr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function te(e,t){for(var n in t)e[n]=t[n];return e}function zt(e){var t=e.parentNode;t&&t.removeChild(e)}function Pe(e,t,n){var r,d,u,i={};for(u in t)u=="key"?r=t[u]:u=="ref"?d=t[u]:i[u]=t[u];if(arguments.length>2&&(i.children=arguments.length>3?Se.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(u in e.defaultProps)i[u]===void 0&&(i[u]=e.defaultProps[u]);return ge(e,i,r,d,null)}function ge(e,t,n,r,d){var u={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:d??++Rt};return d==null&&C.vnode!=null&&C.vnode(u),u}function J(){return{current:null}}function se(e){return e.children}function X(e,t){this.props=e,this.context=t}function fe(e,t){if(t==null)return e.__?fe(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?fe(e):null}function At(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return At(e)}}function et(e){(!e.__d&&(e.__d=!0)&&he.push(e)&&!ke.__r++||Qe!==C.debounceRendering)&&((Qe=C.debounceRendering)||Tt)(ke)}function ke(){for(var e;ke.__r=he.length;)e=he.sort(function(t,n){return t.__v.__b-n.__v.__b}),he=[],e.some(function(t){var n,r,d,u,i,a;t.__d&&(i=(u=(n=t).__v).__e,(a=n.__P)&&(r=[],(d=te({},u)).__v=u.__v+1,Ne(a,u,d,n.__n,a.ownerSVGElement!==void 0,u.__h!=null?[i]:null,r,i??fe(u),u.__h),Ht(r,u),u.__e!=i&&At(u)))})}function Pt(e,t,n,r,d,u,i,a,o,s){var c,l,f,g,v,y,b,x=r&&r.__k||Mt,E=x.length;for(n.__k=[],c=0;c<t.length;c++)if((g=n.__k[c]=(g=t[c])==null||typeof g=="boolean"?null:typeof g=="string"||typeof g=="number"||typeof g=="bigint"?ge(null,g,null,null,g):Array.isArray(g)?ge(se,{children:g},null,null,null):g.__b>0?ge(g.type,g.props,g.key,null,g.__v):g)!=null){if(g.__=n,g.__b=n.__b+1,(f=x[c])===null||f&&g.key==f.key&&g.type===f.type)x[c]=void 0;else for(l=0;l<E;l++){if((f=x[l])&&g.key==f.key&&g.type===f.type){x[l]=void 0;break}f=null}Ne(e,g,f=f||we,d,u,i,a,o,s),v=g.__e,(l=g.ref)&&f.ref!=l&&(b||(b=[]),f.ref&&b.push(f.ref,null,g),b.push(l,g.__c||v,g)),v!=null?(y==null&&(y=v),typeof g.type=="function"&&g.__k===f.__k?g.__d=o=Dt(g,o,e):o=It(e,g,f,x,v,o),typeof n.type=="function"&&(n.__d=o)):o&&f.__e==o&&o.parentNode!=e&&(o=fe(f))}for(n.__e=y,c=E;c--;)x[c]!=null&&(typeof n.type=="function"&&x[c].__e!=null&&x[c].__e==n.__d&&(n.__d=fe(r,c+1)),Bt(x[c],x[c]));if(b)for(c=0;c<b.length;c++)Ot(b[c],b[++c],b[++c])}function Dt(e,t,n){for(var r,d=e.__k,u=0;d&&u<d.length;u++)(r=d[u])&&(r.__=e,t=typeof r.type=="function"?Dt(r,t,n):It(n,r,r,d,r.__e,t));return t}function xe(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){xe(n,t)}):t.push(e)),t}function It(e,t,n,r,d,u){var i,a,o;if(t.__d!==void 0)i=t.__d,t.__d=void 0;else if(n==null||d!=u||d.parentNode==null)e:if(u==null||u.parentNode!==e)e.appendChild(d),i=null;else{for(a=u,o=0;(a=a.nextSibling)&&o<r.length;o+=2)if(a==d)break e;e.insertBefore(d,u),i=u}return i!==void 0?i:d.nextSibling}function dr(e,t,n,r,d){var u;for(u in n)u==="children"||u==="key"||u in t||Ce(e,u,null,n[u],r);for(u in t)d&&typeof t[u]!="function"||u==="children"||u==="key"||u==="value"||u==="checked"||n[u]===t[u]||Ce(e,u,t[u],n[u],r)}function tt(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||rr.test(t)?n:n+"px"}function Ce(e,t,n,r,d){var u;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||tt(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||tt(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")u=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+u]=n,n?r||e.addEventListener(t,u?rt:nt,u):e.removeEventListener(t,u?rt:nt,u);else if(t!=="dangerouslySetInnerHTML"){if(d)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function nt(e){this.l[e.type+!1](C.event?C.event(e):e)}function rt(e){this.l[e.type+!0](C.event?C.event(e):e)}function Ne(e,t,n,r,d,u,i,a,o){var s,c,l,f,g,v,y,b,x,E,S,R=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(o=n.__h,a=t.__e=n.__e,t.__h=null,u=[a]),(s=C.__b)&&s(t);try{e:if(typeof R=="function"){if(b=t.props,x=(s=R.contextType)&&r[s.__c],E=s?x?x.props.value:s.__:r,n.__c?y=(c=t.__c=n.__c).__=c.__E:("prototype"in R&&R.prototype.render?t.__c=c=new R(b,E):(t.__c=c=new X(b,E),c.constructor=R,c.render=ir),x&&x.sub(c),c.props=b,c.state||(c.state={}),c.context=E,c.__n=r,l=c.__d=!0,c.__h=[]),c.__s==null&&(c.__s=c.state),R.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=te({},c.__s)),te(c.__s,R.getDerivedStateFromProps(b,c.__s))),f=c.props,g=c.state,l)R.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(R.getDerivedStateFromProps==null&&b!==f&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(b,E),!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(b,c.__s,E)===!1||t.__v===n.__v){c.props=b,c.state=c.__s,t.__v!==n.__v&&(c.__d=!1),c.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(M){M&&(M.__=t)}),c.__h.length&&i.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(b,c.__s,E),c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(f,g,v)})}c.context=E,c.props=b,c.state=c.__s,(s=C.__r)&&s(t),c.__d=!1,c.__v=t,c.__P=e,s=c.render(c.props,c.state,c.context),c.state=c.__s,c.getChildContext!=null&&(r=te(te({},r),c.getChildContext())),l||c.getSnapshotBeforeUpdate==null||(v=c.getSnapshotBeforeUpdate(f,g)),S=s!=null&&s.type===se&&s.key==null?s.props.children:s,Pt(e,Array.isArray(S)?S:[S],t,n,r,d,u,i,a,o),c.base=t.__e,t.__h=null,c.__h.length&&i.push(c),y&&(c.__E=c.__=null),c.__e=!1}else u==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=ur(n.__e,t,n,r,d,u,i,o);(s=C.diffed)&&s(t)}catch(M){t.__v=null,(o||u!=null)&&(t.__e=a,t.__h=!!o,u[u.indexOf(a)]=null),C.__e(M,t,n)}}function Ht(e,t){C.__c&&C.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){C.__e(r,n.__v)}})}function ur(e,t,n,r,d,u,i,a){var o,s,c,l=n.props,f=t.props,g=t.type,v=0;if(g==="svg"&&(d=!0),u!=null){for(;v<u.length;v++)if((o=u[v])&&"setAttribute"in o==!!g&&(g?o.localName===g:o.nodeType===3)){e=o,u[v]=null;break}}if(e==null){if(g===null)return document.createTextNode(f);e=d?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,f.is&&f),u=null,a=!1}if(g===null)l===f||a&&e.data===f||(e.data=f);else{if(u=u&&Se.call(e.childNodes),s=(l=n.props||we).dangerouslySetInnerHTML,c=f.dangerouslySetInnerHTML,!a){if(u!=null)for(l={},v=0;v<e.attributes.length;v++)l[e.attributes[v].name]=e.attributes[v].value;(c||s)&&(c&&(s&&c.__html==s.__html||c.__html===e.innerHTML)||(e.innerHTML=c&&c.__html||""))}if(dr(e,f,l,d,a),c)t.__k=[];else if(v=t.props.children,Pt(e,Array.isArray(v)?v:[v],t,n,r,d&&g!=="foreignObject",u,i,u?u[0]:n.__k&&fe(n,0),a),u!=null)for(v=u.length;v--;)u[v]!=null&&zt(u[v]);a||("value"in f&&(v=f.value)!==void 0&&(v!==l.value||v!==e.value||g==="progress"&&!v)&&Ce(e,"value",v,l.value,!1),"checked"in f&&(v=f.checked)!==void 0&&v!==e.checked&&Ce(e,"checked",v,l.checked,!1))}return e}function Ot(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){C.__e(r,n)}}function Bt(e,t,n){var r,d;if(C.unmount&&C.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Ot(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(u){C.__e(u,t)}r.base=r.__P=null}if(r=e.__k)for(d=0;d<r.length;d++)r[d]&&Bt(r[d],t,typeof e.type!="function");n||e.__e==null||zt(e.__e),e.__e=e.__d=void 0}function ir(e,t,n){return this.constructor(e,n)}function Ft(e,t,n){var r,d,u;C.__&&C.__(e,t),d=(r=typeof n=="function")?null:n&&n.__k||t.__k,u=[],Ne(t,e=(!r&&n||t).__k=Pe(se,null,[e]),d||we,we,t.ownerSVGElement!==void 0,!r&&n?[n]:d?null:t.firstChild?Se.call(t.childNodes):null,u,!r&&n?n:d?d.__e:t.firstChild,r),Ht(u,e)}Se=Mt.slice,C={__e:function(e,t){for(var n,r,d;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&r.getDerivedStateFromError!=null&&(n.setState(r.getDerivedStateFromError(e)),d=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),d=n.__d),d)return n.__E=n}catch(u){e=u}throw e}},Rt=0,X.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=te({},this.state),typeof e=="function"&&(e=e(te({},n),this.props)),e&&te(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),et(this))},X.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),et(this))},X.prototype.render=se,he=[],Tt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ke.__r=0;var or=0;function h(e,t,n,r,d){var u,i,a={};for(i in t)i=="ref"?u=t[i]:a[i]=t[i];var o={type:e,props:a,key:n,ref:u,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--or,__source:r,__self:d};if(typeof e=="function"&&(u=e.defaultProps))for(i in u)a[i]===void 0&&(a[i]=u[i]);return C.vnode&&C.vnode(o),o}function ar(e,t){try{window.localStorage[`emoji-mart.${e}`]=JSON.stringify(t)}catch{}}function cr(e){try{const t=window.localStorage[`emoji-mart.${e}`];if(t)return JSON.parse(t)}catch{}}var ne={set:ar,get:cr};const Re=new Map,sr=[{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function fr(){for(const{v:e,emoji:t}of sr)if(Nt(t))return e}function lr(){return!Nt("🇨🇦")}function Nt(e){if(Re.has(e))return Re.get(e);const t=hr(e);return Re.set(e,t),t}const hr=(()=>{let e=null;try{navigator.userAgent.includes("jsdom")||(e=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!e)return()=>!1;const t=25,n=20,r=Math.floor(t/2);return e.font=r+"px Arial, Sans-Serif",e.textBaseline="top",e.canvas.width=n*2,e.canvas.height=t,d=>{e.clearRect(0,0,n*2,t),e.fillStyle="#FF0000",e.fillText(d,0,22),e.fillStyle="#0000FF",e.fillText(d,n,22);const u=e.getImageData(0,0,n,t).data,i=u.length;let a=0;for(;a<i&&!u[a+3];a+=4);if(a>=i)return!1;const o=n+a/4%n,s=Math.floor(a/4/n),c=e.getImageData(o,s,1,1).data;return!(u[a]!==c[0]||u[a+2]!==c[2]||e.measureText(d).width>=n)}})();var dt={latestVersion:fr,noCountryFlags:lr};const De=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let H=null;function pr(e){H||(H=ne.get("frequently")||{});const t=e.id||e;t&&(H[t]||(H[t]=0),H[t]+=1,ne.set("last",t),ne.set("frequently",H))}function mr({maxFrequentRows:e,perLine:t}){if(!e)return[];H||(H=ne.get("frequently"));let n=[];if(!H){H={};for(let u in De.slice(0,t)){const i=De[u];H[i]=t-u,n.push(i)}return n}const r=e*t,d=ne.get("last");for(let u in H)n.push(u);if(n.sort((u,i)=>{const a=H[i],o=H[u];return a==o?u.localeCompare(i):a-o}),n.length>r){const u=n.slice(r);n=n.slice(0,r);for(let i of u)i!=d&&delete H[i];d&&n.indexOf(d)==-1&&(delete H[n[n.length-1]],n.splice(-1,1,d)),ne.set("frequently",H)}return n}var Ut={add:pr,get:mr,DEFAULTS:De},Vt={};Vt=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var Y={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:14,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","kr","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let B=null,L=null;const Te={};async function ut(e){if(Te[e])return Te[e];const n=await(await fetch(e)).json();return Te[e]=n,n}let Me=null,Wt=null,Kt=!1;function je(e,{caller:t}={}){return Me||(Me=new Promise(n=>{Wt=n})),e?br(e):t&&!Kt&&console.warn(`\`${t}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),Me}async function br(e){Kt=!0;let{emojiVersion:t,set:n,locale:r}=e;if(t||(t=Y.emojiVersion.value),n||(n=Y.set.value),r||(r=Y.locale.value),L)L.categories=L.categories.filter(o=>!o.name);else{L=(typeof e.data=="function"?await e.data():e.data)||await ut(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${t}/${n}.json`),L.emoticons={},L.natives={},L.categories.unshift({id:"frequent",emojis:[]});for(const o in L.aliases){const s=L.aliases[o],c=L.emojis[s];c&&(c.aliases||(c.aliases=[]),c.aliases.push(o))}L.originalCategories=L.categories}if(B=(typeof e.i18n=="function"?await e.i18n():e.i18n)||(r=="en"?Lt(Vt):await ut(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${r}.json`)),e.custom)for(let o in e.custom){o=parseInt(o);const s=e.custom[o],c=e.custom[o-1];if(!(!s.emojis||!s.emojis.length)){s.id||(s.id=`custom_${o+1}`),s.name||(s.name=B.categories.custom),c&&!s.icon&&(s.target=c.target||c),L.categories.push(s);for(const l of s.emojis)L.emojis[l.id]=l}}e.categories&&(L.categories=L.originalCategories.filter(o=>e.categories.indexOf(o.id)!=-1).sort((o,s)=>{const c=e.categories.indexOf(o.id),l=e.categories.indexOf(s.id);return c-l}));let d=null,u=null;n=="native"&&(d=dt.latestVersion(),u=e.noCountryFlags||dt.noCountryFlags());let i=L.categories.length,a=!1;for(;i--;){const o=L.categories[i];if(o.id=="frequent"){let{maxFrequentRows:l,perLine:f}=e;l=l>=0?l:Y.maxFrequentRows.value,f||(f=Y.perLine.value),o.emojis=Ut.get({maxFrequentRows:l,perLine:f})}if(!o.emojis||!o.emojis.length){L.categories.splice(i,1);continue}const{categoryIcons:s}=e;if(s){const l=s[o.id];l&&!o.icon&&(o.icon=l)}let c=o.emojis.length;for(;c--;){const l=o.emojis[c],f=l.id?l:L.emojis[l],g=()=>{o.emojis.splice(c,1)};if(!f||e.exceptEmojis&&e.exceptEmojis.includes(f.id)){g();continue}if(d&&f.version>d){g();continue}if(u&&o.id=="flags"&&!wr.includes(f.id)){g();continue}if(!f.search){if(a=!0,f.search=","+[[f.id,!1],[f.name,!0],[f.keywords,!1],[f.emoticons,!1]].map(([y,b])=>{if(y)return(Array.isArray(y)?y:[y]).map(x=>(b?x.split(/[-|_|\s]+/):[x]).map(E=>E.toLowerCase())).flat()}).flat().filter(y=>y&&y.trim()).join(","),f.emoticons)for(const y of f.emoticons)L.emoticons[y]||(L.emoticons[y]=f.id);let v=0;for(const y of f.skins){if(!y)continue;v++;const{native:b}=y;b&&(L.natives[b]=f.id,f.search+=`,${b}`);const x=v==1?"":`:skin-tone-${v}:`;y.shortcodes=`:${f.id}:${x}`}}}}a&&ce.reset(),Wt()}function qt(e,t,n){e||(e={});const r={};for(let d in t)r[d]=Gt(d,e,t,n);return r}function Gt(e,t,n,r){const d=n[e];let u=r&&r.getAttribute(e)||(t[e]!=null&&t[e]!=null?t[e]:null);return d&&(u!=null&&d.value&&typeof d.value!=typeof u&&(typeof d.value=="boolean"?u=u!="false":u=d.value.constructor(u)),d.transform&&u&&(u=d.transform(u)),(u==null||d.choices&&d.choices.indexOf(u)==-1)&&(u=d.value)),u}const vr=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let Ie=null;function gr(e){return e.id?e:L.emojis[e]||L.emojis[L.aliases[e]]||L.emojis[L.natives[e]]}function _r(){Ie=null}async function yr(e,{maxResults:t,caller:n}={}){if(!e||!e.trim().length)return null;t||(t=90),await je(null,{caller:n||"SearchIndex.search"});const r=e.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((a,o,s)=>a.trim()&&s.indexOf(a)==o);if(!r.length)return;let d=Ie||(Ie=Object.values(L.emojis)),u,i;for(const a of r){if(!d.length)break;u=[],i={};for(const o of d){if(!o.search)continue;const s=o.search.indexOf(`,${a}`);s!=-1&&(u.push(o),i[o.id]||(i[o.id]=0),i[o.id]+=o.id==a?0:s+1)}d=u}return u.length<2||(u.sort((a,o)=>{const s=i[a.id],c=i[o.id];return s==c?a.id.localeCompare(o.id):s-c}),u.length>t&&(u=u.slice(0,t))),u}var ce={search:yr,get:gr,reset:_r,SHORTCODES_REGEX:vr};const wr=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function kr(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((n,r)=>n==t[r])}async function xr(e=1){for(let t in[...Array(e).keys()])await new Promise(requestAnimationFrame)}function Cr(e,{skinIndex:t=0}={}){const n=e.skins[t]||(t=0,e.skins[t]),r={id:e.id,name:e.name,native:n.native,unified:n.unified,keywords:e.keywords,shortcodes:n.shortcodes||e.shortcodes};return e.skins.length>1&&(r.skin=t+1),n.src&&(r.src=n.src),e.aliases&&e.aliases.length&&(r.aliases=e.aliases),e.emoticons&&e.emoticons.length&&(r.emoticons=e.emoticons),r}const $r={activity:{outline:h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:h("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:h("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:h("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:h("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:h("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:h("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:h("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[h("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),h("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:h("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[h("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),h("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:h("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[h("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),h("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:h("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[h("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),h("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:h("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[h("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),h("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:h("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:h("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:h("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},Er={loupe:h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:h("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:h("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var $e={categories:$r,search:Er};function He(e){let{id:t,skin:n,emoji:r}=e;if(e.shortcodes){const a=e.shortcodes.match(ce.SHORTCODES_REGEX);a&&(t=a[1],a[2]&&(n=a[2]))}if(r||(r=ce.get(t||e.native)),!r)return e.fallback;const d=r.skins[n-1]||r.skins[0],u=d.src||(e.set!="native"&&!e.spritesheet?typeof e.getImageURL=="function"?e.getImageURL(e.set,d.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/64/${d.unified}.png`:void 0),i=typeof e.getSpritesheetURL=="function"?e.getSpritesheetURL(e.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/sheets-256/64.png`;return h("span",{class:"emoji-mart-emoji","data-emoji-set":e.set,children:u?h("img",{style:{maxWidth:e.size||"1em",maxHeight:e.size||"1em",display:"inline-block"},alt:d.native||d.shortcodes,src:u}):e.set=="native"?h("span",{style:{fontSize:e.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:d.native}):h("span",{style:{display:"block",width:e.size,height:e.size,backgroundImage:`url(${i})`,backgroundSize:`${100*L.sheet.cols}% ${100*L.sheet.rows}%`,backgroundPosition:`${100/(L.sheet.cols-1)*d.x}% ${100/(L.sheet.rows-1)*d.y}%`}})})}const Sr=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class Xt extends Sr{static get observedAttributes(){return Object.keys(this.Props)}update(t={}){for(let n in t)this.attributeChangedCallback(n,null,t[n])}attributeChangedCallback(t,n,r){if(!this.component)return;const d=Gt(t,{[t]:r},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[t]:d}):(this.component.props[t]=d,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(t={}){if(super(),this.props=t,t.parent||t.ref){let n=null;const r=t.parent||(n=t.ref&&t.ref.current);n&&(n.innerHTML=""),r&&r.appendChild(this)}}}class jr extends Xt{setShadow(){this.attachShadow({mode:"open"})}injectStyles(t){if(!t)return;const n=document.createElement("style");n.textContent=t,this.shadowRoot.insertBefore(n,this.shadowRoot.firstChild)}constructor(t,{styles:n}={}){super(t),this.setShadow(),this.injectStyles(n)}}var Jt={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:e=>/\D/.test(e)?e:`${e}px`},set:Y.set,skin:Y.skin};class Yt extends Xt{async connectedCallback(){const t=qt(this.props,Jt,this);t.element=this,t.ref=n=>{this.component=n},await je(),!this.disconnected&&Ft(h(He,{...t}),this)}constructor(t){super(t)}}W(Yt,"Props",Jt);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",Yt);var it,Oe=[],ot=C.__b,at=C.__r,ct=C.diffed,st=C.__c,ft=C.unmount;function Lr(){var e;for(Oe.sort(function(t,n){return t.__v.__b-n.__v.__b});e=Oe.pop();)if(e.__P)try{e.__H.__h.forEach(_e),e.__H.__h.forEach(Be),e.__H.__h=[]}catch(t){e.__H.__h=[],C.__e(t,e.__v)}}C.__b=function(e){ot&&ot(e)},C.__r=function(e){at&&at(e);var t=e.__c.__H;t&&(t.__h.forEach(_e),t.__h.forEach(Be),t.__h=[])},C.diffed=function(e){ct&&ct(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(Oe.push(t)!==1&&it===C.requestAnimationFrame||((it=C.requestAnimationFrame)||function(n){var r,d=function(){clearTimeout(u),lt&&cancelAnimationFrame(r),setTimeout(n)},u=setTimeout(d,100);lt&&(r=requestAnimationFrame(d))})(Lr))},C.__c=function(e,t){t.some(function(n){try{n.__h.forEach(_e),n.__h=n.__h.filter(function(r){return!r.__||Be(r)})}catch(r){t.some(function(d){d.__h&&(d.__h=[])}),t=[],C.__e(r,n.__v)}}),st&&st(e,t)},C.unmount=function(e){ft&&ft(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{_e(r)}catch(d){t=d}}),t&&C.__e(t,n.__v))};var lt=typeof requestAnimationFrame=="function";function _e(e){var t=e.__c;typeof t=="function"&&(e.__c=void 0,t())}function Be(e){e.__c=e.__()}function Rr(e,t){for(var n in t)e[n]=t[n];return e}function ht(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function Ee(e){this.props=e}(Ee.prototype=new X).isPureReactComponent=!0,Ee.prototype.shouldComponentUpdate=function(e,t){return ht(this.props,e)||ht(this.state,t)};var pt=C.__b;C.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),pt&&pt(e)};var Tr=C.__e;C.__e=function(e,t,n){if(e.then){for(var r,d=t;d=d.__;)if((r=d.__c)&&r.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),r.__c(e,t)}Tr(e,t,n)};var mt=C.unmount;function ze(){this.__u=0,this.t=null,this.__b=null}function Zt(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function me(){this.u=null,this.o=null}C.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),mt&&mt(e)},(ze.prototype=new X).__c=function(e,t){var n=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var d=Zt(r.__v),u=!1,i=function(){u||(u=!0,n.__R=null,d?d(a):a())};n.__R=i;var a=function(){if(!--r.__u){if(r.state.__e){var s=r.state.__e;r.__v.__k[0]=function l(f,g,v){return f&&(f.__v=null,f.__k=f.__k&&f.__k.map(function(y){return l(y,g,v)}),f.__c&&f.__c.__P===g&&(f.__e&&v.insertBefore(f.__e,f.__d),f.__c.__e=!0,f.__c.__P=v)),f}(s,s.__c.__P,s.__c.__O)}var c;for(r.setState({__e:r.__b=null});c=r.t.pop();)c.forceUpdate()}},o=t.__h===!0;r.__u++||o||r.setState({__e:r.__b=r.__v.__k[0]}),e.then(i,i)},ze.prototype.componentWillUnmount=function(){this.t=[]},ze.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function u(i,a,o){return i&&(i.__c&&i.__c.__H&&(i.__c.__H.__.forEach(function(s){typeof s.__c=="function"&&s.__c()}),i.__c.__H=null),(i=Rr({},i)).__c!=null&&(i.__c.__P===o&&(i.__c.__P=a),i.__c=null),i.__k=i.__k&&i.__k.map(function(s){return u(s,a,o)})),i}(this.__b,n,r.__O=r.__P)}this.__b=null}var d=t.__e&&Pe(se,null,e.fallback);return d&&(d.__h=null),[Pe(se,null,t.__e?null:e.children),d]};var bt=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(me.prototype=new X).__e=function(e){var t=this,n=Zt(t.__v),r=t.o.get(e);return r[0]++,function(d){var u=function(){t.props.revealOrder?(r.push(d),bt(t,e,r)):d()};n?n(u):u()}},me.prototype.render=function(e){this.u=null,this.o=new Map;var t=xe(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},me.prototype.componentDidUpdate=me.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){bt(e,n,t)})};var Mr=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,zr=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Ar=typeof document<"u",Pr=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};X.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(X.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var vt=C.event;function Dr(){}function Ir(){return this.cancelBubble}function Hr(){return this.defaultPrevented}C.event=function(e){return vt&&(e=vt(e)),e.persist=Dr,e.isPropagationStopped=Ir,e.isDefaultPrevented=Hr,e.nativeEvent=e};var gt={configurable:!0,get:function(){return this.class}},_t=C.vnode;C.vnode=function(e){var t=e.type,n=e.props,r=n;if(typeof t=="string"){var d=t.indexOf("-")===-1;for(var u in r={},n){var i=n[u];Ar&&u==="children"&&t==="noscript"||u==="value"&&"defaultValue"in n&&i==null||(u==="defaultValue"&&"value"in n&&n.value==null?u="value":u==="download"&&i===!0?i="":/ondoubleclick/i.test(u)?u="ondblclick":/^onchange(textarea|input)/i.test(u+t)&&!Pr(n.type)?u="oninput":/^onfocus$/i.test(u)?u="onfocusin":/^onblur$/i.test(u)?u="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(u)?u=u.toLowerCase():d&&zr.test(u)?u=u.replace(/[A-Z0-9]/,"-$&").toLowerCase():i===null&&(i=void 0),r[u]=i)}t=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=xe(n.children).forEach(function(a){a.props.selected=r.value.indexOf(a.props.value)!=-1})),t=="select"&&r.defaultValue!=null&&(r.value=xe(n.children).forEach(function(a){a.props.selected=r.multiple?r.defaultValue.indexOf(a.props.value)!=-1:r.defaultValue==a.props.value})),e.props=r,n.class!=n.className&&(gt.enumerable="className"in n,n.className!=null&&(r.class=n.className),Object.defineProperty(r,"className",gt))}e.$$typeof=Mr,_t&&_t(e)};var yt=C.__r;C.__r=function(e){yt&&yt(e),e.__c};const Or={light:"outline",dark:"solid"};class Br extends Ee{renderIcon(t){const{icon:n}=t;if(n){if(n.svg)return h("span",{class:"flex",dangerouslySetInnerHTML:{__html:n.svg}});if(n.src)return h("img",{src:n.src})}const r=$e.categories[t.id]||$e.categories.custom,d=this.props.icons=="auto"?Or[this.props.theme]:this.props.icons;return r[d]||r}render(){let t=null;return h("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:h("div",{class:"flex relative",children:[this.categories.map((n,r)=>{const d=n.name||B.categories[n.id],u=!this.props.unfocused&&n.id==this.state.categoryId;return u&&(t=r),h("button",{"aria-label":d,"aria-selected":u||void 0,title:d,type:"button",class:"flex flex-grow flex-center",onMouseDown:i=>i.preventDefault(),onClick:()=>{this.props.onClick({category:n,i:r})},children:this.renderIcon(n)})}),h("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:t==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${t*100}%)`:`translateX(${t*100}%)`}})]})})}constructor(){super(),this.categories=L.categories.filter(t=>!t.target),this.state={categoryId:this.categories[0].id}}}class Fr extends Ee{shouldComponentUpdate(t){for(let n in t)if(n!="children"&&t[n]!=this.props[n])return!0;return!1}render(){return this.props.children}}const be={rowsPerRender:10};class Nr extends X{getInitialState(t=this.props){return{skin:ne.get("skin")||t.skin,theme:this.initTheme(t.theme)}}componentWillMount(){this.dir=B.rtl?"rtl":"ltr",this.refs={menu:J(),navigation:J(),scroll:J(),search:J(),searchInput:J(),skinToneButton:J(),skinToneRadio:J()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:t}=this.refs;t.current&&t.current.focus()}}componentWillReceiveProps(t){this.nextState||(this.nextState={});for(const n in t)this.nextState[n]=t[n];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let n=!1;for(const d in this.nextState)this.props[d]=this.nextState[d],(d==="custom"||d==="categories")&&(n=!0);delete this.nextState;const r=this.getInitialState();if(n)return this.reset(r);this.setState(r)})}componentWillUnmount(){this.unregister()}async reset(t={}){await je(this.props),this.initGrid(),this.unobserve(),this.setState(t,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){document.removeEventListener("click",this.handleClickOutside),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:t=[]}={}){Array.isArray(t)||(t=[t]);for(const n of this.observers)t.includes(n)||n.disconnect();this.observers=[].concat(t)}initGrid(){const{categories:t}=L;this.refs.categories=new Map;const n=L.categories.map(d=>d.id).join(",");this.navKey&&this.navKey!=n&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=n,this.grid=[],this.grid.setsize=0;const r=(d,u)=>{const i=[];i.__categoryId=u.id,i.__index=d.length,this.grid.push(i);const a=this.grid.length-1,o=a%be.rowsPerRender?{}:J();return o.index=a,o.posinset=this.grid.setsize+1,d.push(o),i};for(let d of t){const u=[];let i=r(u,d);for(let a of d.emojis)i.length==this.getPerLine()&&(i=r(u,d)),this.grid.setsize+=1,i.push(a);this.refs.categories.set(d.id,{root:J(),rows:u})}}initTheme(t){if(t!="auto")return t;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addListener(()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})})}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(t=this.props){if(!t.dynamicWidth)return;const{element:n,emojiButtonSize:r}=t,d=()=>{const{width:i}=n.getBoundingClientRect();return Math.floor(i/r)},u=new ResizeObserver(()=>{this.unobserve({except:u}),this.setState({perLine:d()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return u.observe(n),this.observers.push(u),d()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([t,n]){const r=this.state.searchResults||this.grid,d=r[t]&&r[t][n];if(d)return ce.get(d)}observeCategories(){const t=this.refs.navigation.current;if(!t)return;const n=new Map,r=i=>{i!=t.state.categoryId&&t.setState({categoryId:i})},d={root:this.refs.scroll.current,threshold:[0,1]},u=new IntersectionObserver(i=>{for(const o of i){const s=o.target.dataset.id;n.set(s,o.intersectionRatio)}const a=[...n];for(const[o,s]of a)if(s){r(o);break}},d);for(const{root:i}of this.refs.categories.values())u.observe(i.current);this.observers.push(u)}observeRows(){const t={...this.state.visibleRows},n=new IntersectionObserver(r=>{for(const d of r){const u=parseInt(d.target.dataset.index);d.isIntersecting?t[u]=!0:delete t[u]}this.setState({visibleRows:t})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(be.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*be.rowsPerRender}px`});for(const{rows:r}of this.refs.categories.values())for(const d of r)d.current&&n.observe(d.current);this.observers.push(n)}preventDefault(t){t.preventDefault()}unfocusSearch(){const t=this.refs.searchInput.current;t&&t.blur()}navigate({e:t,input:n,left:r,right:d,up:u,down:i}){const a=this.state.searchResults||this.grid;if(!a.length)return;let[o,s]=this.state.pos;const c=(()=>{if(o==0&&s==0&&!t.repeat&&(r||u))return null;if(o==-1)return!t.repeat&&(d||i)&&n.selectionStart==n.value.length?[0,0]:null;if(r||d){let l=a[o];const f=r?-1:1;if(s+=f,!l[s]){if(o+=f,l=a[o],!l)return o=r?0:a.length-1,s=r?0:a[o].length-1,[o,s];s=r?l.length-1:0}return[o,s]}if(u||i){o+=u?-1:1;const l=a[o];return l?(l[s]||(s=l.length-1),[o,s]):(o=u?0:a.length-1,s=u?0:a[o].length-1,[o,s])}})();if(c)t.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:c,keyboard:!0},()=>{this.scrollTo({row:c[0]})})}scrollTo({categoryId:t,row:n}){const r=this.state.searchResults||this.grid;if(!r.length)return;const d=this.refs.scroll.current,u=d.getBoundingClientRect();let i=0;if(n>=0&&(t=r[n].__categoryId),t&&(i=(this.refs[t]||this.refs.categories.get(t).root).current.getBoundingClientRect().top-(u.top-d.scrollTop)+1),n>=0)if(!n)i=0;else{const a=r[n].__index,o=i+a*this.props.emojiButtonSize,s=o+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(o<d.scrollTop)i=o;else if(s>d.scrollTop+u.height)i=s-u.height;else return}this.ignoreMouse(),d.scrollTop=i}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(t){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:t||[-1,-1],keyboard:!1})}handleEmojiClick({e:t,emoji:n,pos:r}){if(this.props.onEmojiSelect&&(!n&&r&&(n=this.getEmojiByPos(r)),n)){const d=Cr(n,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&Ut.add(d,this.props),this.props.onEmojiSelect(d,t)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(t){this.setState({tempSkin:t})}handleSkinClick(t){this.ignoreMouse(),this.closeSkins(),this.setState({skin:t,tempSkin:null}),ne.set("skin",t)}renderNav(){return h(Br,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const t=this.getEmojiByPos(this.state.pos),n=this.state.searchResults&&!this.state.searchResults.length;return h("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[h("div",{class:"flex flex-middle flex-grow",children:[h("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:h(He,{emoji:t,id:n?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),h("div",{class:`margin-${this.dir[0]}`,children:t||n?h("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[h("div",{class:"preview-title ellipsis",children:t?t.name:B.search_no_results_1}),h("div",{class:"preview-subtitle ellipsis color-c",children:t?t.skins[0].shortcodes:B.search_no_results_2})]}):h("div",{class:"preview-placeholder color-c",children:B.pick})})]}),!t&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(t,{pos:n,posinset:r,grid:d}){const u=this.props.emojiButtonSize,i=this.state.tempSkin||this.state.skin,o=(t.skins[i-1]||t.skins[0]).native,s=kr(this.state.pos,n),c=n.concat(t.id).join("");return h(Fr,{selected:s,skin:i,size:u,children:h("button",{"aria-label":o,"aria-selected":s||void 0,"aria-posinset":r,"aria-setsize":d.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?t.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:l=>this.handleEmojiClick({e:l,emoji:t}),onMouseEnter:()=>this.handleEmojiOver(n),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[h("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(r-1)%this.props.emojiButtonColors.length]:void 0}}),h(He,{emoji:t,set:this.props.set,size:this.props.emojiSize,skin:i,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},c)}renderSearch(){const t=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return h("div",{children:[h("div",{class:"spacer"}),h("div",{class:"flex flex-middle",children:[h("div",{class:"search relative flex-grow",children:[h("input",{type:"search",ref:this.refs.searchInput,placeholder:B.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),h("span",{class:"icon loupe flex",children:$e.search.loupe}),this.state.searchResults&&h("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:$e.search.delete})]}),t&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:t}=this.state;return t?h("div",{class:"category",ref:this.refs.search,children:[h("div",{class:`sticky padding-small align-${this.dir[0]}`,children:B.categories.search}),h("div",{children:t.length?t.map((n,r)=>h("div",{class:"flex",children:n.map((d,u)=>this.renderEmojiButton(d,{pos:[r,u],posinset:r*this.props.perLine+u+1,grid:t}))})):h("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&h("a",{onClick:this.props.onAddCustomEmoji,children:B.add_custom})})})]}):null}renderCategories(){const{categories:t}=L,n=!!this.state.searchResults,r=this.getPerLine();return h("div",{style:{visibility:n?"hidden":void 0,display:n?"none":void 0,height:"100%"},children:t.map(d=>{const{root:u,rows:i}=this.refs.categories.get(d.id);return h("div",{"data-id":d.target?d.target.id:d.id,class:"category",ref:u,children:[h("div",{class:`sticky padding-small align-${this.dir[0]}`,children:d.name||B.categories[d.id]}),h("div",{class:"relative",style:{height:i.length*this.props.emojiButtonSize},children:i.map((a,o)=>{const s=a.index-a.index%be.rowsPerRender,c=this.state.visibleRows[s],l="current"in a?a:void 0;if(!c&&!l)return null;const f=o*r,g=f+r,v=d.emojis.slice(f,g);return v.length<r&&v.push(...new Array(r-v.length)),h("div",{"data-index":a.index,ref:l,class:"flex row",style:{top:o*this.props.emojiButtonSize},children:c&&v.map((y,b)=>{if(!y)return h("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const x=ce.get(y);return this.renderEmojiButton(x,{pos:[a.index,b],posinset:a.posinset+b,grid:this.grid})})},a.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:h("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:h("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":B.skins.choose,title:B.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:h("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const t=this.getEmojiByPos(this.state.pos),n=t?t.name:"";return h("div",{"aria-live":"polite",class:"sr-only",children:n})}renderSkins(){const n=this.refs.skinToneButton.current.getBoundingClientRect(),r=this.base.getBoundingClientRect(),d={};return this.dir=="ltr"?d.right=r.right-n.right-3:d.left=n.left-r.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?d.bottom=r.bottom-n.top+6:(d.top=n.bottom-r.top+3,d.bottom="auto"),h("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":B.skins.choose,class:"menu hidden","data-position":d.top?"top":"bottom",style:d,children:[...Array(6).keys()].map(u=>{const i=u+1,a=this.state.skin==i;return h("div",{children:[h("input",{type:"radio",name:"skin-tone",value:i,"aria-label":B.skins[i],ref:a?this.refs.skinToneRadio:null,defaultChecked:a,onChange:()=>this.handleSkinMouseOver(i),onKeyDown:o=>{(o.code=="Enter"||o.code=="Space"||o.code=="Tab")&&(o.preventDefault(),this.handleSkinClick(i))}}),h("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(i),onMouseEnter:()=>this.handleSkinMouseOver(i),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[h("span",{class:`skin-tone skin-tone-${i}`}),h("span",{class:"margin-small-lr",children:B.skins[i]})]})]})})})}render(){const t=this.props.perLine*this.props.emojiButtonSize;return h("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${t}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&h("div",{class:"padding-lr",children:this.renderSearch()}),h("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:h("div",{style:{width:this.props.dynamicWidth?"100%":t,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(t){super(),W(this,"handleClickOutside",n=>{const{element:r}=this.props;n.target!=r&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(n))}),W(this,"handleBaseClick",n=>{this.state.showSkins&&(n.target.closest(".menu")||(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins()))}),W(this,"handleBaseKeydown",n=>{this.state.showSkins&&n.key=="Escape"&&(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins())}),W(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),W(this,"handleSearchInput",async()=>{const n=this.refs.searchInput.current;if(!n)return;const{value:r}=n,d=await ce.search(r),u=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!d)return this.setState({searchResults:d,pos:[-1,-1]},u);const i=n.selectionStart==n.value.length?[0,0]:[-1,-1],a=[];a.setsize=d.length;let o=null;for(let s of d)(!a.length||o.length==this.getPerLine())&&(o=[],o.__categoryId="search",o.__index=a.length,a.push(o)),o.push(s);this.ignoreMouse(),this.setState({searchResults:a,pos:i},u)}),W(this,"handleSearchKeyDown",n=>{const r=n.currentTarget;switch(n.stopImmediatePropagation(),n.key){case"ArrowLeft":this.navigate({e:n,input:r,left:!0});break;case"ArrowRight":this.navigate({e:n,input:r,right:!0});break;case"ArrowUp":this.navigate({e:n,input:r,up:!0});break;case"ArrowDown":this.navigate({e:n,input:r,down:!0});break;case"Enter":n.preventDefault(),this.handleEmojiClick({e:n,pos:this.state.pos});break;case"Escape":n.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),W(this,"clearSearch",()=>{const n=this.refs.searchInput.current;n&&(n.value="",n.focus(),this.handleSearchInput())}),W(this,"handleCategoryClick",({category:n,i:r})=>{this.scrollTo(r==0?{row:-1}:{categoryId:n.id})}),W(this,"openSkins",n=>{const{currentTarget:r}=n,d=r.getBoundingClientRect();this.setState({showSkins:d},async()=>{await xr(2);const u=this.refs.menu.current;u&&(u.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(t),visibleRows:{0:!0},...this.getInitialState(t)}}}class Ue extends jr{async connectedCallback(){const t=qt(this.props,Y,this);t.element=this,t.ref=n=>{this.component=n},await je(t),!this.disconnected&&Ft(h(Nr,{...t}),this.shadowRoot)}constructor(t){super(t,{styles:Lt(Qt)})}}W(Ue,"Props",Y);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",Ue);var Qt={};Qt=`:host {
  width: min-content;
  height: 435px;
  min-height: 230px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  --border-radius: 10px;
  --category-icon-size: 18px;
  --font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
  --font-size: 15px;
  --preview-placeholder-size: 21px;
  --preview-title-size: 1.1em;
  --preview-subtitle-size: .9em;
  --shadow-color: 0deg 0% 0%;
  --shadow: .3px .5px 2.7px hsl(var(--shadow-color) / .14), .4px .8px 1px -3.2px hsl(var(--shadow-color) / .14), 1px 2px 2.5px -4.5px hsl(var(--shadow-color) / .14);
  display: flex;
}

[data-theme="light"] {
  --em-rgb-color: var(--rgb-color, 34, 36, 39);
  --em-rgb-accent: var(--rgb-accent, 34, 102, 237);
  --em-rgb-background: var(--rgb-background, 255, 255, 255);
  --em-rgb-input: var(--rgb-input, 255, 255, 255);
  --em-color-border: var(--color-border, rgba(0, 0, 0, .05));
  --em-color-border-over: var(--color-border-over, rgba(0, 0, 0, .1));
}

[data-theme="dark"] {
  --em-rgb-color: var(--rgb-color, 222, 222, 221);
  --em-rgb-accent: var(--rgb-accent, 58, 130, 247);
  --em-rgb-background: var(--rgb-background, 21, 22, 23);
  --em-rgb-input: var(--rgb-input, 0, 0, 0);
  --em-color-border: var(--color-border, rgba(255, 255, 255, .1));
  --em-color-border-over: var(--color-border-over, rgba(255, 255, 255, .2));
}

#root {
  --color-a: rgb(var(--em-rgb-color));
  --color-b: rgba(var(--em-rgb-color), .65);
  --color-c: rgba(var(--em-rgb-color), .45);
  --padding: 12px;
  --padding-small: calc(var(--padding) / 2);
  --sidebar-width: 16px;
  --duration: 225ms;
  --duration-fast: 125ms;
  --duration-instant: 50ms;
  --easing: cubic-bezier(.4, 0, .2, 1);
  width: 100%;
  text-align: left;
  border-radius: var(--border-radius);
  background-color: rgb(var(--em-rgb-background));
  position: relative;
}

@media (prefers-reduced-motion) {
  #root {
    --duration: 0;
    --duration-fast: 0;
    --duration-instant: 0;
  }
}

#root[data-menu] button {
  cursor: auto;
}

#root[data-menu] .menu button {
  cursor: pointer;
}

:host, #root, input, button {
  color: rgb(var(--em-rgb-color));
  font-family: var(--font-family);
  font-size: var(--font-size);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: normal;
}

*, :before, :after {
  box-sizing: border-box;
  min-width: 0;
  margin: 0;
  padding: 0;
}

.relative {
  position: relative;
}

.flex {
  display: flex;
}

.flex-auto {
  flex: none;
}

.flex-center {
  justify-content: center;
}

.flex-column {
  flex-direction: column;
}

.flex-grow {
  flex: auto;
}

.flex-middle {
  align-items: center;
}

.flex-wrap {
  flex-wrap: wrap;
}

.padding {
  padding: var(--padding);
}

.padding-t {
  padding-top: var(--padding);
}

.padding-lr {
  padding-left: var(--padding);
  padding-right: var(--padding);
}

.padding-r {
  padding-right: var(--padding);
}

.padding-small {
  padding: var(--padding-small);
}

.padding-small-b {
  padding-bottom: var(--padding-small);
}

.padding-small-lr {
  padding-left: var(--padding-small);
  padding-right: var(--padding-small);
}

.margin {
  margin: var(--padding);
}

.margin-r {
  margin-right: var(--padding);
}

.margin-l {
  margin-left: var(--padding);
}

.margin-small-l {
  margin-left: var(--padding-small);
}

.margin-small-lr {
  margin-left: var(--padding-small);
  margin-right: var(--padding-small);
}

.align-l {
  text-align: left;
}

.align-r {
  text-align: right;
}

.color-a {
  color: var(--color-a);
}

.color-b {
  color: var(--color-b);
}

.color-c {
  color: var(--color-c);
}

.ellipsis {
  white-space: nowrap;
  max-width: 100%;
  width: auto;
  text-overflow: ellipsis;
  overflow: hidden;
}

.sr-only {
  width: 1px;
  height: 1px;
  position: absolute;
  top: auto;
  left: -10000px;
  overflow: hidden;
}

a {
  cursor: pointer;
  color: rgb(var(--em-rgb-accent));
}

a:hover {
  text-decoration: underline;
}

.spacer {
  height: 10px;
}

[dir="rtl"] .scroll {
  padding-left: 0;
  padding-right: var(--padding);
}

.scroll {
  padding-right: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.scroll::-webkit-scrollbar {
  width: var(--sidebar-width);
  height: var(--sidebar-width);
}

.scroll::-webkit-scrollbar-track {
  border: 0;
}

.scroll::-webkit-scrollbar-button {
  width: 0;
  height: 0;
  display: none;
}

.scroll::-webkit-scrollbar-corner {
  background-color: rgba(0, 0, 0, 0);
}

.scroll::-webkit-scrollbar-thumb {
  min-height: 20%;
  min-height: 65px;
  border: 4px solid rgb(var(--em-rgb-background));
  border-radius: 8px;
}

.scroll::-webkit-scrollbar-thumb:hover {
  background-color: var(--em-color-border-over) !important;
}

.scroll:hover::-webkit-scrollbar-thumb {
  background-color: var(--em-color-border);
}

.sticky {
  z-index: 1;
  background-color: rgba(var(--em-rgb-background), .9);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  font-weight: 500;
  position: sticky;
  top: -1px;
}

[dir="rtl"] .search input[type="search"] {
  padding: 10px 2.2em 10px 2em;
}

[dir="rtl"] .search .loupe {
  left: auto;
  right: .7em;
}

[dir="rtl"] .search .delete {
  left: .7em;
  right: auto;
}

.search {
  z-index: 2;
  position: relative;
}

.search input, .search button {
  font-size: calc(var(--font-size)  - 1px);
}

.search input[type="search"] {
  width: 100%;
  background-color: var(--em-color-border);
  transition-duration: var(--duration);
  transition-property: background-color, box-shadow;
  transition-timing-function: var(--easing);
  border: 0;
  border-radius: 10px;
  outline: 0;
  padding: 10px 2em 10px 2.2em;
  display: block;
}

.search input[type="search"]::-ms-input-placeholder {
  color: inherit;
  opacity: .6;
}

.search input[type="search"]::placeholder {
  color: inherit;
  opacity: .6;
}

.search input[type="search"], .search input[type="search"]::-webkit-search-decoration, .search input[type="search"]::-webkit-search-cancel-button, .search input[type="search"]::-webkit-search-results-button, .search input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
}

.search input[type="search"]:focus {
  background-color: rgb(var(--em-rgb-input));
  box-shadow: inset 0 0 0 1px rgb(var(--em-rgb-accent)), 0 1px 3px rgba(65, 69, 73, .2);
}

.search .icon {
  z-index: 1;
  color: rgba(var(--em-rgb-color), .7);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.search .loupe {
  pointer-events: none;
  left: .7em;
}

.search .delete {
  right: .7em;
}

svg {
  fill: currentColor;
  width: 1em;
  height: 1em;
}

button {
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  cursor: pointer;
  color: currentColor;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
}

#nav {
  z-index: 2;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: var(--sidebar-width);
  position: relative;
}

#nav button {
  color: var(--color-b);
  transition: color var(--duration) var(--easing);
}

#nav button:hover {
  color: var(--color-a);
}

#nav svg, #nav img {
  width: var(--category-icon-size);
  height: var(--category-icon-size);
}

#nav[dir="rtl"] .bar {
  left: auto;
  right: 0;
}

#nav .bar {
  width: 100%;
  height: 3px;
  background-color: rgb(var(--em-rgb-accent));
  transition: transform var(--duration) var(--easing);
  border-radius: 3px 3px 0 0;
  position: absolute;
  bottom: -12px;
  left: 0;
}

#nav button[aria-selected] {
  color: rgb(var(--em-rgb-accent));
}

#preview {
  z-index: 2;
  padding: calc(var(--padding)  + 4px) var(--padding);
  padding-right: var(--sidebar-width);
  position: relative;
}

#preview .preview-placeholder {
  font-size: var(--preview-placeholder-size);
}

#preview .preview-title {
  font-size: var(--preview-title-size);
}

#preview .preview-subtitle {
  font-size: var(--preview-subtitle-size);
}

#nav:before, #preview:before {
  content: "";
  height: 2px;
  position: absolute;
  left: 0;
  right: 0;
}

#nav[data-position="top"]:before, #preview[data-position="top"]:before {
  background: linear-gradient(to bottom, var(--em-color-border), transparent);
  top: 100%;
}

#nav[data-position="bottom"]:before, #preview[data-position="bottom"]:before {
  background: linear-gradient(to top, var(--em-color-border), transparent);
  bottom: 100%;
}

.category:last-child {
  min-height: calc(100% + 1px);
}

.category button {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif;
  position: relative;
}

.category button > * {
  position: relative;
}

.category button .background {
  opacity: 0;
  background-color: var(--em-color-border);
  transition: opacity var(--duration-fast) var(--easing) var(--duration-instant);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.category button:hover .background {
  transition-duration: var(--duration-instant);
  transition-delay: 0s;
}

.category button[aria-selected] .background {
  opacity: 1;
}

.category button[data-keyboard] .background {
  transition: none;
}

.row {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.skin-tone-button {
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 100%;
}

.skin-tone-button:hover {
  border-color: var(--em-color-border);
}

.skin-tone-button:active .skin-tone {
  transform: scale(.85) !important;
}

.skin-tone-button .skin-tone {
  transition: transform var(--duration) var(--easing);
}

.skin-tone-button[aria-selected] {
  background-color: var(--em-color-border);
  border-top-color: rgba(0, 0, 0, .05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-width: 0;
  border-right-width: 0;
}

.skin-tone-button[aria-selected] .skin-tone {
  transform: scale(.9);
}

.menu {
  z-index: 2;
  white-space: nowrap;
  border: 1px solid var(--em-color-border);
  background-color: rgba(var(--em-rgb-background), .9);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  transition-property: opacity, transform;
  transition-duration: var(--duration);
  transition-timing-function: var(--easing);
  border-radius: 10px;
  padding: 4px;
  position: absolute;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, .05);
}

.menu.hidden {
  opacity: 0;
}

.menu[data-position="bottom"] {
  transform-origin: 100% 100%;
}

.menu[data-position="bottom"].hidden {
  transform: scale(.9)rotate(-3deg)translateY(5%);
}

.menu[data-position="top"] {
  transform-origin: 100% 0;
}

.menu[data-position="top"].hidden {
  transform: scale(.9)rotate(3deg)translateY(-5%);
}

.menu input[type="radio"] {
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  border: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  overflow: hidden;
}

.menu input[type="radio"]:checked + .option {
  box-shadow: 0 0 0 2px rgb(var(--em-rgb-accent));
}

.option {
  width: 100%;
  border-radius: 6px;
  padding: 4px 6px;
}

.option:hover {
  color: #fff;
  background-color: rgb(var(--em-rgb-accent));
}

.skin-tone {
  width: 16px;
  height: 16px;
  border-radius: 100%;
  display: inline-block;
  position: relative;
  overflow: hidden;
}

.skin-tone:after {
  content: "";
  mix-blend-mode: overlay;
  background: linear-gradient(rgba(255, 255, 255, .2), rgba(0, 0, 0, 0));
  border: 1px solid rgba(0, 0, 0, .8);
  border-radius: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: inset 0 -2px 3px #000, inset 0 1px 2px #fff;
}

.skin-tone-1 {
  background-color: #ffc93a;
}

.skin-tone-2 {
  background-color: #ffdab7;
}

.skin-tone-3 {
  background-color: #e7b98f;
}

.skin-tone-4 {
  background-color: #c88c61;
}

.skin-tone-5 {
  background-color: #a46134;
}

.skin-tone-6 {
  background-color: #5d4437;
}

[data-index] {
  justify-content: space-between;
}

[data-emoji-set="twitter"] .skin-tone:after {
  box-shadow: none;
  border-color: rgba(0, 0, 0, .5);
}

[data-emoji-set="twitter"] .skin-tone-1 {
  background-color: #fade72;
}

[data-emoji-set="twitter"] .skin-tone-2 {
  background-color: #f3dfd0;
}

[data-emoji-set="twitter"] .skin-tone-3 {
  background-color: #eed3a8;
}

[data-emoji-set="twitter"] .skin-tone-4 {
  background-color: #cfad8d;
}

[data-emoji-set="twitter"] .skin-tone-5 {
  background-color: #a8805d;
}

[data-emoji-set="twitter"] .skin-tone-6 {
  background-color: #765542;
}

[data-emoji-set="google"] .skin-tone:after {
  box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, .4);
}

[data-emoji-set="google"] .skin-tone-1 {
  background-color: #f5c748;
}

[data-emoji-set="google"] .skin-tone-2 {
  background-color: #f1d5aa;
}

[data-emoji-set="google"] .skin-tone-3 {
  background-color: #d4b48d;
}

[data-emoji-set="google"] .skin-tone-4 {
  background-color: #aa876b;
}

[data-emoji-set="google"] .skin-tone-5 {
  background-color: #916544;
}

[data-emoji-set="google"] .skin-tone-6 {
  background-color: #61493f;
}

[data-emoji-set="facebook"] .skin-tone:after {
  border-color: rgba(0, 0, 0, .4);
  box-shadow: inset 0 -2px 3px #000, inset 0 1px 4px #fff;
}

[data-emoji-set="facebook"] .skin-tone-1 {
  background-color: #f5c748;
}

[data-emoji-set="facebook"] .skin-tone-2 {
  background-color: #f1d5aa;
}

[data-emoji-set="facebook"] .skin-tone-3 {
  background-color: #d4b48d;
}

[data-emoji-set="facebook"] .skin-tone-4 {
  background-color: #aa876b;
}

[data-emoji-set="facebook"] .skin-tone-5 {
  background-color: #916544;
}

[data-emoji-set="facebook"] .skin-tone-6 {
  background-color: #61493f;
}

`;function Ur(e){const t=w.useRef(null),n=w.useRef(null);return n.current&&n.current.update(e),w.useEffect(()=>(n.current=new Ue({...e,ref:t}),()=>{n.current=null}),[]),j.createElement("div",{ref:t})}var wt="https://cdn.jsdelivr.net/npm/@emoji-mart/data",ae={};function Vr(e){var t=e.theme,n=e.onSelectEmoji,r=e.disableRecent,d=e.customEmojis,u=e.language,i=w.useMemo(function(){var l=[];return r||l.push("frequent"),l=[].concat(xt(l),["people","nature","foods","activity","places","objects","symbols","flags"]),l},[r]),a=w.useState(void 0),o=G(a,2),s=o[0],c=o[1];return w.useEffect(function(){var l;if(!u){var f;if(ae.en){c(ae.en);return}fetch("".concat(wt,"/i18n/en.json")).then(function(g){return(f=f||ye(Z().mark(function v(y){var b;return Z().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,y.json();case 2:b=E.sent,c(b),ae.en=b;case 5:case"end":return E.stop()}},v)}))).apply(this,arguments)}).catch(function(g){console.error("Failed to load translations:",g)});return}if(ae[u]){c(ae[u]);return}fetch("".concat(wt,"/i18n/").concat(u,".json")).then(function(g){return(l=l||ye(Z().mark(function v(y){var b;return Z().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,y.json();case 2:b=E.sent,c(b),ae[u]=b;case 5:case"end":return E.stop()}},v)}))).apply(this,arguments)}).catch(function(g){console.error("Failed to load translations:",g)})},[u]),s?j.createElement(Ur,{data:void 0,theme:t,previewPosition:"none",onEmojiSelect:n,custom:d,categories:i,set:"apple",i18n:s}):null}var Wr=w.memo(Vr);function kt(e){var t=e.showPicker,n=e.theme,r=e.handleSelectEmoji,d=e.disableRecent,u=e.customEmojis,i=e.position,a=e.language;return j.createElement("div",{className:"react-emoji-picker--container"},t&&j.createElement("div",{className:"react-emoji-picker--wrapper",onClick:function(s){return s.stopPropagation()},style:i==="below"?{top:"40px"}:{}},j.createElement("div",{className:"react-emoji-picker"},j.createElement(Wr,{theme:n,onSelectEmoji:r,disableRecent:d,customEmojis:u,language:a}))))}var Kr=435,qr=function(t){var n=t.theme,r=t.keepOpened,d=t.disableRecent,u=t.customEmojis,i=t.addSanitizeFn,a=t.addPolluteFn,o=t.appendContent,s=t.buttonElement,c=t.buttonRef,l=t.language,f=w.useState(!1),g=G(f,2),v=g[0],y=g[1],b=w.useState(),x=G(b,2),E=x[0],S=x[1],R=w.useState(),M=G(R,2),z=M[0],N=M[1];w.useEffect(function(){i(ve)},[i]),w.useEffect(function(){a($t)},[a]),w.useEffect(function(){function D(V){var K=V.target;K.classList.contains("react-input-emoji--button")||K.classList.contains("react-input-emoji--button--icon")||y(!1)}return document.addEventListener("click",D),function(){document.removeEventListener("click",D)}},[]);function F(D){D.stopPropagation(),D.preventDefault(),N(Q(D)),y(function(V){return!V})}function Q(D){var V=D.currentTarget,K=V.getBoundingClientRect(),re=Kr;return K.top>=re?"above":"below"}function ie(D){o(kn(D)),r||y(function(V){return!V})}return w.useEffect(function(){var D;c!=null&&(D=c.current)!==null&&D!==void 0&&D.style?(c.current.style.position="relative",S(c.current)):s!=null&&s.style&&(s.style.position="relative",S(s))},[c,s]),E?un.createPortal(j.createElement(j.Fragment,null,j.createElement(kt,{showPicker:v,theme:n,handleSelectEmoji:ie,disableRecent:d,customEmojis:u,position:z,language:l}),j.createElement(Ze,{showPicker:v,toggleShowPicker:F,buttonElement:E,buttonRef:c})),E):j.createElement(j.Fragment,null,j.createElement(kt,{showPicker:v,theme:n,handleSelectEmoji:ie,disableRecent:d,customEmojis:u,position:z,language:l}),j.createElement(Ze,{showPicker:v,toggleShowPicker:F}))};function Gr(){var e=en();if(!e)return null;var t=e.text.substring(e.begin,e.end);return t||null}function Xr(){var e=en();e&&e.element.deleteData(e.begin,e.end-e.begin)}function en(){var e=Fe();if(!e)return null;var t=e.element,n=e.caretOffset,r=t.textContent,d=r.lastIndexOf("@");return d===-1||d>=n||d!==0&&r[d-1]!==" "?null:{begin:d,end:n,text:r,element:t}}function Fe(){var e=Jr();if(e===null)return null;var t=0;if(typeof window.getSelection<"u"){var n=window.getSelection().getRangeAt(0),r=n.cloneRange();r.selectNodeContents(e),r.setEnd(n.endContainer,n.endOffset),t=r.toString().length}else if(typeof document.selection<"u"&&document.selection.type!="Control"){var d=document.selection.createRange(),u=document.body.createTextRange();u.moveToElementText(e),u.setEndPoint("EndToEnd",d),t=u.text.length}return{element:e,caretOffset:t}}function Jr(){var e=document.getSelection().anchorNode;return(e==null?void 0:e.nodeType)==3?e:null}function Yr(e){var t,n=w.useState(!1),r=G(n,2),d=r[0],u=r[1],i=w.useState([]),a=G(i,2),o=a[0],s=a[1],c=w.useState(null),l=G(c,2),f=l[0],g=l[1],v=w.useCallback(function(){Xr(),s([])},[]),y=w.useCallback(ye(Z().mark(function E(){var S,R;return Z().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:if(S=Gr(),g(S),S!==null){z.next=6;break}s([]),z.next=12;break;case 6:return u(!0),z.next=9,e(S);case 9:R=z.sent,u(!1),s(R);case 12:case"end":return z.stop()}},E)})),[e]),b=w.useCallback(function(E){return(t=t||ye(Z().mark(function S(R){var M,z;return Z().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:if(typeof e=="function"){F.next=2;break}return F.abrupt("return");case 2:R.key==="Backspace"&&(M=Fe())!==null&&M!==void 0&&M.element.parentElement.hasAttribute("data-mention-id")?(z=Fe(),z.element.parentElement.remove()):["ArrowUp","ArrowDown","Esc","Escape"].includes(R.key)||y();case 3:case"end":return F.stop()}},S)}))).apply(this,arguments)},[y,e]),x=w.useCallback(function(){y()},[y]);return{mentionSearchText:f,mentionUsers:o,onKeyUp:b,onFocus:x,onSelectUser:v,loading:d}}var Zr=function(t,n){var r=t.users,d=t.mentionSearchText,u=t.onSelect,i=t.addEventListener,a=w.useState(0),o=G(a,2),s=o[0],c=o[1];w.useImperativeHandle(n,function(){return{prevUser:function(){c(function(y){return y===0?0:y-1})},nextUser:function(){c(function(y){return y===r.length-1?r.length-1:y+1})}}}),w.useEffect(function(){c(0)},[r]);function l(v,y){return'<span class="react-input-emoji--mention--item--name__selected" data-testid="metion-selected-word">'.concat(v,"</span>").concat(y)}var f=w.useMemo(function(){var v=d?d.substring(1).toLocaleLowerCase():"";return r.map(function(y){var b=y.name;if(d&&d.length>1)if(y.name.toLowerCase().startsWith(v))b=l(y.name.substring(0,v.length),y.name.substring(v.length));else{var x=y.name.split(" ");b=x.map(function(E){return E.toLocaleLowerCase().startsWith(v)?l(E.substring(0,v.length),E.substring(v.length)):E}).join(" ")}return Ke(Ke({},y),{},{nameHtml:b})})},[d,r]);function g(v){return function(y){y.stopPropagation(),y.preventDefault(),u(v)}}return w.useEffect(function(){var v=i("enter",function(y){y.stopPropagation(),y.preventDefault(),u(f[s])});return function(){v()}},[i,u,s,f]),j.createElement("ul",{className:"react-input-emoji--mention--list","data-testid":"mention-user-list"},f.map(function(v,y){return j.createElement("li",{key:v.id},j.createElement("button",{type:"button",onClick:g(v),className:"react-input-emoji--mention--item".concat(s===y?" react-input-emoji--mention--item__selected":""),onMouseOver:function(){return c(y)}},j.createElement("img",{className:"react-input-emoji--mention--item--img",src:v.image}),j.createElement("div",{className:"react-input-emoji--mention--item--name",dangerouslySetInnerHTML:{__html:v.nameHtml}})))}))},Qr=w.forwardRef(Zr),ed=function(t){var n=t.searchMention,r=t.addEventListener,d=t.appendContent,u=t.addSanitizeFn,i=w.useRef(null),a=w.useState(!1),o=G(a,2),s=o[0],c=o[1],l=Yr(n),f=l.mentionSearchText,g=l.mentionUsers,v=l.loading,y=l.onKeyUp,b=l.onFocus,x=l.onSelectUser;w.useEffect(function(){u(function(S){var R=document.createElement("div");R.innerHTML=S;var M=Array.prototype.slice.call(R.querySelectorAll(".react-input-emoji--mention--text"));return M.forEach(function(z){R.innerHTML=R.innerHTML.replace(z.outerHTML,"@[".concat(z.dataset.mentionName,"](userId:").concat(z.dataset.mentionId,")"))}),R.innerHTML})},[u]),w.useEffect(function(){c(g.length>0)},[g]),w.useEffect(function(){function S(){c(!1)}return document.addEventListener("click",S),function(){document.removeEventListener("click",S)}},[]),w.useEffect(function(){var S=r("keyUp",y);return function(){S()}},[r,y]),w.useEffect(function(){function S(M){switch(M.key){case"Esc":case"Escape":c(!1);break}}var R=r("keyDown",S);return function(){R()}},[r]),w.useEffect(function(){var S=r("focus",b);return function(){S()}},[r,b]),w.useEffect(function(){if(s){var S=r("arrowUp",function(M){M.stopPropagation(),M.preventDefault(),i.current.prevUser()}),R=r("arrowDown",function(M){M.stopPropagation(),M.preventDefault(),i.current.nextUser()});return function(){S(),R()}}},[r,s]);function E(S){x(),d('<span class="react-input-emoji--mention--text" data-mention-id="'.concat(S.id,'" data-mention-name="').concat(S.name,'">@').concat(S.name,"</span> "))}return j.createElement(j.Fragment,null,v?j.createElement("div",{className:"react-input-emoji--mention--container"},j.createElement("div",{className:"react-input-emoji--mention--loading"},j.createElement("div",{className:"react-input-emoji--mention--loading--spinner"},"Loading..."))):s&&j.createElement("div",{className:"react-input-emoji--mention--container",onClick:function(R){return R.stopPropagation()}},j.createElement(Qr,{ref:i,mentionSearchText:f,users:g,onSelect:E,addEventListener:r})))};function ue(){var e=[];return{subscribe:function(n){return e.push(n),function(){e=e.filter(function(r){return r!==n})}},publish:function(n){e.forEach(function(r){return r(n)})},get currentListerners(){return e}}}function td(){var e=w.useMemo(function(){return{keyDown:ue(),keyUp:ue(),arrowUp:ue(),arrowDown:ue(),enter:ue(),focus:ue(),blur:ue()}},[]),t=w.useCallback(function(n,r){return e[n].subscribe(r)},[e]);return{addEventListener:t,listeners:e}}function nd(){var e=w.useRef([]),t=w.useCallback(function(r){e.current.push(r)},[]),n=w.useCallback(function(r){var d=e.current.reduce(function(u,i){return i(u)},r);return d},[]);return{addPolluteFn:t,pollute:n}}function rd(e,t){var n=e.onChange,r=e.onEnter,d=e.onResize,u=e.onClick,i=e.onFocus,a=e.onBlur,o=e.onKeyDown,s=e.theme,c=e.cleanOnEnter,l=e.placeholder,f=e.maxLength,g=e.keepOpened,v=e.inputClass,y=e.disableRecent,b=e.tabIndex,x=e.value,E=e.customEmojis,S=e.language,R=e.searchMention,M=e.buttonElement,z=e.buttonRef,N=e.shouldReturn,F=e.shouldConvertEmojiToImage,Q=e.borderRadius,ie=e.borderColor,D=e.fontSize,V=e.fontFamily,K=e.background,re=e.placeholderColor,le=e.color,p=w.useRef(null),m=td(),_=m.addEventListener,$=m.listeners,k=jt(N,F),T=k.addSanitizeFn,A=k.sanitize,P=k.sanitizedTextRef,O=nd(),ee=O.addPolluteFn,de=O.pollute,U=w.useCallback(function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";p.current!==null&&(p.current.html=$t(I),P.current=I)},[P]),Le=w.useCallback(function(I){U(I)},[U]),pe=Qn(p,d,n);Zn({ref:t,setValue:Le,textInputRef:p,emitChange:pe,shouldConvertEmojiToImage:F}),w.useEffect(function(){P.current!==x&&Le(x)},[P,Le,x]),w.useEffect(function(){function I(oe){if(typeof f<"u"&&oe.key!=="Backspace"&&p.current!==null&&Xe(p.current)>=f&&oe.preventDefault(),oe.key==="Enter"&&p.current){oe.preventDefault();var rn=A(p.current.html);return pe(P.current),typeof r=="function"&&$.enter.currentListerners.length===0&&r(rn),c&&$.enter.currentListerners.length===0&&U(""),typeof o=="function"&&o(oe.nativeEvent),!1}return typeof o=="function"&&o(oe.nativeEvent),!0}var q=_("keyDown",I);return function(){q()}},[_,c,pe,$.enter.currentListerners.length,f,r,o,A,P,U]),w.useEffect(function(){function I(){typeof u=="function"&&u(),typeof i=="function"&&i()}var q=_("focus",I);return function(){q()}},[_,u,i]),w.useEffect(function(){function I(){typeof a=="function"&&a()}var q=_("blur",I);return function(){q()}},[_,a]);function tn(I){A(I),x!==P.current&&pe(P.current)}function Ve(I){typeof f<"u"&&p.current!==null&&Xe(p.current)>=f||p.current!==null&&p.current.appendContent(I)}function nn(I){I.preventDefault();var q;I.clipboardData&&(q=I.clipboardData.getData("text/plain"),q=de(q),document.execCommand("insertHTML",!1,q))}return j.createElement("div",{className:"react-emoji"},j.createElement(ed,{searchMention:R,addEventListener:_,appendContent:Ve,addSanitizeFn:T}),j.createElement(nr,{ref:p,onCopy:xn,onPaste:nn,shouldReturn:N,onBlur:$.blur.publish,onFocus:$.focus.publish,onArrowUp:$.arrowUp.publish,onArrowDown:$.arrowDown.publish,onKeyUp:$.keyUp.publish,onKeyDown:$.keyDown.publish,onEnter:$.enter.publish,placeholder:l,style:{borderRadius:Q,borderColor:ie,fontSize:D,fontFamily:V,background:K,placeholderColor:re,color:le},tabIndex:b,className:v,onChange:tn}),j.createElement(qr,{theme:s,keepOpened:g,disableRecent:y,customEmojis:E,addSanitizeFn:T,addPolluteFn:ee,appendContent:Ve,buttonElement:M,buttonRef:z,language:S}))}var dd=w.forwardRef(rd);dd.defaultProps={theme:"auto",height:30,placeholder:"Type a message",borderRadius:21,borderColor:"#EAEAEA",color:"black",fontSize:15,fontFamily:"sans-serif",background:"white",tabIndex:0,shouldReturn:!1,shouldConvertEmojiToImage:!1,customEmojis:[],language:void 0};export{dd as I};
//# sourceMappingURL=react-input-emoji-qfbLTjXY.js.map
