import{_ as Ko}from"./tslib-6635c9de.js";import{o as _h}from"./idb-81bdbf9b.js";/**
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
 */const qo={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const b=function(n,e){if(!n)throw Ct(e)},Ct=function(n){return new Error("Firebase Database ("+qo.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Yo=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},gh=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=n[t++];e[i++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=n[t++],l=n[t++],c=n[t++],d=((r&7)<<18|(o&63)<<12|(l&63)<<6|c&63)-65536;e[i++]=String.fromCharCode(55296+(d>>10)),e[i++]=String.fromCharCode(56320+(d&1023))}else{const o=n[t++],l=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(o&63)<<6|l&63)}}return e.join("")},_s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const o=n[r],l=r+1<n.length,c=l?n[r+1]:0,d=r+2<n.length,f=d?n[r+2]:0,C=o>>2,T=(o&3)<<4|c>>4;let S=(c&15)<<2|f>>6,N=f&63;d||(N=64,l||(S=64)),i.push(t[C],t[T],t[S],t[N])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Yo(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):gh(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const o=t[n.charAt(r++)],c=r<n.length?t[n.charAt(r)]:0;++r;const f=r<n.length?t[n.charAt(r)]:64;++r;const T=r<n.length?t[n.charAt(r)]:64;if(++r,o==null||c==null||f==null||T==null)throw new mh;const S=o<<2|c>>4;if(i.push(S),f!==64){const N=c<<4&240|f>>2;if(i.push(N),T!==64){const R=f<<6&192|T;i.push(R)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class mh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xo=function(n){const e=Yo(n);return _s.encodeByteArray(e,!0)},Hn=function(n){return Xo(n).replace(/\./g,"")},Bn=function(n){try{return _s.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function yh(n){return Jo(void 0,n)}function Jo(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!vh(t)||(n[t]=Jo(n[t],e[t]));return n}function vh(n){return n!=="__proto__"}/**
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
 */function Eh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ih=()=>Eh().__FIREBASE_DEFAULTS__,Th=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},wh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Bn(n[1]);return e&&JSON.parse(e)},gs=()=>{try{return Ih()||Th()||wh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ch=n=>{var e,t;return(t=(e=gs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Sh=n=>{const e=Ch(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Qo=()=>{var n;return(n=gs())===null||n===void 0?void 0:n.config},Ah=n=>{var e;return(e=gs())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class ms{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function bh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",r=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n),c="";return[Hn(JSON.stringify(t)),Hn(JSON.stringify(l)),c].join(".")}/**
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
 */function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ys(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function Rh(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Nh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Zo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ea(){return qo.NODE_ADMIN===!0}function kh(){try{return typeof indexedDB=="object"}catch{return!1}}function Ph(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var o;e(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
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
 */const Oh="FirebaseError";class Ge extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Oh,Object.setPrototypeOf(this,Ge.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cn.prototype.create)}}class cn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],l=o?Dh(o,i):"Error",c=`${this.serviceName}: ${l} (${r}).`;return new Ge(r,c,i)}}function Dh(n,e){return n.replace(Lh,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Lh=/\{\$([^}]+)}/g;/**
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
 */function on(n){return JSON.parse(n)}function Z(n){return JSON.stringify(n)}/**
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
 */const ta=function(n){let e={},t={},i={},r="";try{const o=n.split(".");e=on(Bn(o[0])||""),t=on(Bn(o[1])||""),r=o[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:r}},Mh=function(n){const e=ta(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},xh=function(n){const e=ta(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Me(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function It(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Vr(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function jn(n,e,t){const i={};for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(i[r]=e.call(t,n[r],r,n));return i}function Xi(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const o=n[r],l=e[r];if(Wr(o)&&Wr(l)){if(!Xi(o,l))return!1}else if(o!==l)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function Wr(n){return n!==null&&typeof n=="object"}/**
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
 */function vs(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class Uh{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)i[T]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let T=0;T<16;T++)i[T]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let T=16;T<80;T++){const S=i[T-3]^i[T-8]^i[T-14]^i[T-16];i[T]=(S<<1|S>>>31)&4294967295}let r=this.chain_[0],o=this.chain_[1],l=this.chain_[2],c=this.chain_[3],d=this.chain_[4],f,C;for(let T=0;T<80;T++){T<40?T<20?(f=c^o&(l^c),C=1518500249):(f=o^l^c,C=1859775393):T<60?(f=o&l|c&(o|l),C=2400959708):(f=o^l^c,C=3395469782);const S=(r<<5|r>>>27)+f+d+C+i[T]&4294967295;d=c,c=l,l=(o<<30|o>>>2)&4294967295,o=r,r=S}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+l&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+d&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let r=0;const o=this.buf_;let l=this.inbuf_;for(;r<t;){if(l===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(o[l]=e.charCodeAt(r),++l,++r,l===this.blockSize){this.compress_(o),l=0;break}}else for(;r<t;)if(o[l]=e[r],++l,++r,l===this.blockSize){this.compress_(o),l=0;break}}this.inbuf_=l,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let o=24;o>=0;o-=8)e[i]=this.chain_[r]>>o&255,++i;return e}}function Fh(n,e){const t=new Hh(n,e);return t.subscribe.bind(t)}class Hh{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Bh(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=Fi),r.error===void 0&&(r.error=Fi),r.complete===void 0&&(r.complete=Fi);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bh(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Fi(){}function jh(n,e){return`${n} failed: ${e} argument `}/**
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
 */const Vh=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);if(r>=55296&&r<=56319){const o=r-55296;i++,b(i<n.length,"Surrogate pair missing trail surrogate.");const l=n.charCodeAt(i)-56320;r=65536+(o<<10)+l}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},ni=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function St(n){return n&&n._delegate?n._delegate:n}class $e{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Je="[DEFAULT]";/**
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
 */class Wh{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new ms;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zh(e))try{this.getOrInitializeService({instanceIdentifier:Je})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:r});i.resolve(o)}catch{}}}}clearInstance(e=Je){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Je){return this.instances.has(e)}getOptions(e=Je){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[o,l]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);i===c&&l.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),o=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(r,o);const l=this.instances.get(r);return l&&e(l,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:$h(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Je){return this.component?this.component.multipleInstances?e:Je:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $h(n){return n===Je?void 0:n}function zh(n){return n.instantiationMode==="EAGER"}/**
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
 */class Gh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Wh(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var F;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(F||(F={}));const Kh={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},qh=F.INFO,Yh={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},Xh=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=Yh[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ii{constructor(e){this.name=e,this._logLevel=qh,this._logHandler=Xh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Kh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}}/**
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
 */class Jh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Qh(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Qh(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ji="@firebase/app",$r="0.10.13";/**
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
 */const De=new ii("@firebase/app"),Zh="@firebase/app-compat",ec="@firebase/analytics-compat",tc="@firebase/analytics",nc="@firebase/app-check-compat",ic="@firebase/app-check",sc="@firebase/auth",rc="@firebase/auth-compat",oc="@firebase/database",ac="@firebase/data-connect",lc="@firebase/database-compat",hc="@firebase/functions",cc="@firebase/functions-compat",uc="@firebase/installations",dc="@firebase/installations-compat",fc="@firebase/messaging",pc="@firebase/messaging-compat",_c="@firebase/performance",gc="@firebase/performance-compat",mc="@firebase/remote-config",yc="@firebase/remote-config-compat",vc="@firebase/storage",Ec="@firebase/storage-compat",Ic="@firebase/firestore",Tc="@firebase/vertexai-preview",wc="@firebase/firestore-compat",Cc="firebase",Sc="10.14.1";/**
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
 */const Qi="[DEFAULT]",Ac={[Ji]:"fire-core",[Zh]:"fire-core-compat",[tc]:"fire-analytics",[ec]:"fire-analytics-compat",[ic]:"fire-app-check",[nc]:"fire-app-check-compat",[sc]:"fire-auth",[rc]:"fire-auth-compat",[oc]:"fire-rtdb",[ac]:"fire-data-connect",[lc]:"fire-rtdb-compat",[hc]:"fire-fn",[cc]:"fire-fn-compat",[uc]:"fire-iid",[dc]:"fire-iid-compat",[fc]:"fire-fcm",[pc]:"fire-fcm-compat",[_c]:"fire-perf",[gc]:"fire-perf-compat",[mc]:"fire-rc",[yc]:"fire-rc-compat",[vc]:"fire-gcs",[Ec]:"fire-gcs-compat",[Ic]:"fire-fst",[wc]:"fire-fst-compat",[Tc]:"fire-vertex","fire-js":"fire-js",[Cc]:"fire-js-all"};/**
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
 */const Vn=new Map,bc=new Map,Zi=new Map;function zr(n,e){try{n.container.addComponent(e)}catch(t){De.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function nt(n){const e=n.name;if(Zi.has(e))return De.debug(`There were multiple attempts to register component ${e}.`),!1;Zi.set(e,n);for(const t of Vn.values())zr(t,n);for(const t of bc.values())zr(t,n);return!0}function Rc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Jt(n){return n.settings!==void 0}/**
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
 */const Nc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ve=new cn("app","Firebase",Nc);/**
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
 */class kc{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new $e("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ve.create("app-deleted",{appName:this._name})}}/**
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
 */const un=Sc;function Pc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Qi,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Ve.create("bad-app-name",{appName:String(r)});if(t||(t=Qo()),!t)throw Ve.create("no-options");const o=Vn.get(r);if(o){if(Xi(t,o.options)&&Xi(i,o.config))return o;throw Ve.create("duplicate-app",{appName:r})}const l=new Gh(r);for(const d of Zi.values())l.addComponent(d);const c=new kc(t,i,l);return Vn.set(r,c),c}function Oc(n=Qi){const e=Vn.get(n);if(!e&&n===Qi&&Qo())return Pc();if(!e)throw Ve.create("no-app",{appName:n});return e}function Pe(n,e,t){var i;let r=(i=Ac[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);const o=r.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const c=[`Unable to register library "${r}" with version "${e}":`];o&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),De.warn(c.join(" "));return}nt(new $e(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Dc="firebase-heartbeat-database",Lc=1,an="firebase-heartbeat-store";let Hi=null;function na(){return Hi||(Hi=_h(Dc,Lc,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(an)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ve.create("idb-open",{originalErrorMessage:n.message})})),Hi}async function Mc(n){try{const t=(await na()).transaction(an),i=await t.objectStore(an).get(ia(n));return await t.done,i}catch(e){if(e instanceof Ge)De.warn(e.message);else{const t=Ve.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});De.warn(t.message)}}}async function Gr(n,e){try{const i=(await na()).transaction(an,"readwrite");await i.objectStore(an).put(e,ia(n)),await i.done}catch(t){if(t instanceof Ge)De.warn(t.message);else{const i=Ve.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});De.warn(i.message)}}}function ia(n){return`${n.name}!${n.options.appId}`}/**
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
 */const xc=1024,Uc=30*24*60*60*1e3;class Fc{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Bc(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Kr();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const c=new Date(l.date).valueOf();return Date.now()-c<=Uc}),this._storage.overwrite(this._heartbeatsCache))}catch(i){De.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Kr(),{heartbeatsToSend:i,unsentEntries:r}=Hc(this._heartbeatsCache.heartbeats),o=Hn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return De.warn(t),""}}}function Kr(){return new Date().toISOString().substring(0,10)}function Hc(n,e=xc){const t=[];let i=n.slice();for(const r of n){const o=t.find(l=>l.agent===r.agent);if(o){if(o.dates.push(r.date),qr(t)>e){o.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),qr(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Bc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kh()?Ph().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Mc(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Gr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Gr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function qr(n){return Hn(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function jc(n){nt(new $e("platform-logger",e=>new Jh(e),"PRIVATE")),nt(new $e("heartbeat",e=>new Fc(e),"PRIVATE")),Pe(Ji,$r,n),Pe(Ji,$r,"esm2017"),Pe("fire-js","")}jc("");const Yr="@firebase/database",Xr="1.0.8";/**
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
 */let sa="";function Vc(n){sa=n}/**
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
 */class Wc{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Z(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:on(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class $c{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Me(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ra=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Wc(e)}}catch{}return new $c},Ze=ra("localStorage"),es=ra("sessionStorage");/**
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
 */const gt=new ii("@firebase/database"),zc=function(){let n=1;return function(){return n++}}(),oa=function(n){const e=Vh(n),t=new Uh;t.update(e);const i=t.digest();return _s.encodeByteArray(i)},dn=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=dn.apply(null,i):typeof i=="object"?e+=Z(i):e+=i,e+=" "}return e};let tt=null,Jr=!0;const Gc=function(n,e){b(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(gt.logLevel=F.VERBOSE,tt=gt.log.bind(gt),e&&es.set("logging_enabled",!0)):typeof n=="function"?tt=n:(tt=null,es.remove("logging_enabled"))},se=function(...n){if(Jr===!0&&(Jr=!1,tt===null&&es.get("logging_enabled")===!0&&Gc(!0)),tt){const e=dn.apply(null,n);tt(e)}},fn=function(n){return function(...e){se(n,...e)}},ts=function(...n){const e="FIREBASE INTERNAL ERROR: "+dn(...n);gt.error(e)},Le=function(...n){const e=`FIREBASE FATAL ERROR: ${dn(...n)}`;throw gt.error(e),new Error(e)},pe=function(...n){const e="FIREBASE WARNING: "+dn(...n);gt.warn(e)},Kc=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&pe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},aa=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},qc=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Tt="[MIN_NAME]",it="[MAX_NAME]",At=function(n,e){if(n===e)return 0;if(n===Tt||e===it)return-1;if(e===Tt||n===it)return 1;{const t=Qr(n),i=Qr(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Yc=function(n,e){return n===e?0:n<e?-1:1},Kt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Z(e))},Es=function(n){if(typeof n!="object"||n===null)return Z(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=Z(e[i]),t+=":",t+=Es(n[e[i]]);return t+="}",t},la=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let r=0;r<t;r+=e)r+e>t?i.push(n.substring(r,t)):i.push(n.substring(r,r+e));return i};function me(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const ha=function(n){b(!aa(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let r,o,l,c,d;n===0?(o=0,l=0,r=1/n===-1/0?1:0):(r=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(c=Math.min(Math.floor(Math.log(n)/Math.LN2),i),o=c+i,l=Math.round(n*Math.pow(2,t-c)-Math.pow(2,t))):(o=0,l=Math.round(n/Math.pow(2,1-i-t))));const f=[];for(d=t;d;d-=1)f.push(l%2?1:0),l=Math.floor(l/2);for(d=e;d;d-=1)f.push(o%2?1:0),o=Math.floor(o/2);f.push(r?1:0),f.reverse();const C=f.join("");let T="";for(d=0;d<64;d+=8){let S=parseInt(C.substr(d,8),2).toString(16);S.length===1&&(S="0"+S),T=T+S}return T.toLowerCase()},Xc=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Jc=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Qc=new RegExp("^-?(0*)\\d{1,10}$"),Zc=-2147483648,eu=2147483647,Qr=function(n){if(Qc.test(n)){const e=Number(n);if(e>=Zc&&e<=eu)return e}return null},pn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw pe("Exception was thrown by user callback.",t),e},Math.floor(0))}},tu=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Qt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class nu{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){pe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class iu{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(se("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',pe(e)}}class mt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}mt.OWNER="owner";/**
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
 */const Is="5",ca="v",ua="s",da="r",fa="f",pa=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,_a="ls",ga="p",ns="ac",ma="websocket",ya="long_polling";/**
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
 */class va{constructor(e,t,i,r,o=!1,l="",c=!1,d=!1){this.secure=t,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=o,this.persistenceKey=l,this.includeNamespaceInQueryParams=c,this.isUsingEmulator=d,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ze.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ze.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function su(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Ea(n,e,t){b(typeof e=="string","typeof type must == string"),b(typeof t=="object","typeof params must == object");let i;if(e===ma)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===ya)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);su(n)&&(t.ns=n.namespace);const r=[];return me(t,(o,l)=>{r.push(o+"="+l)}),i+r.join("&")}/**
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
 */class ru{constructor(){this.counters_={}}incrementCounter(e,t=1){Me(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return yh(this.counters_)}}/**
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
 */const Bi={},ji={};function Ts(n){const e=n.toString();return Bi[e]||(Bi[e]=new ru),Bi[e]}function ou(n,e){const t=n.toString();return ji[t]||(ji[t]=e()),ji[t]}/**
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
 */class au{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&pn(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Zr="start",lu="close",hu="pLPCommand",cu="pRTLPCB",Ia="id",Ta="pw",wa="ser",uu="cb",du="seg",fu="ts",pu="d",_u="dframe",Ca=1870,Sa=30,gu=Ca-Sa,mu=25e3,yu=3e4;class pt{constructor(e,t,i,r,o,l,c){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=r,this.authToken=o,this.transportSessionId=l,this.lastSessionId=c,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=fn(e),this.stats_=Ts(t),this.urlFn=d=>(this.appCheckToken&&(d[ns]=this.appCheckToken),Ea(t,ya,d))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new au(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(yu)),qc(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ws((...o)=>{const[l,c,d,f,C]=o;if(this.incrementIncomingBytes_(o),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,l===Zr)this.id=c,this.password=d;else if(l===lu)c?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(c,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+l)},(...o)=>{const[l,c]=o;this.incrementIncomingBytes_(o),this.myPacketOrderer.handleResponse(l,c)},()=>{this.onClosed_()},this.urlFn);const i={};i[Zr]="t",i[wa]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[uu]=this.scriptTagHolder.uniqueCallbackIdentifier),i[ca]=Is,this.transportSessionId&&(i[ua]=this.transportSessionId),this.lastSessionId&&(i[_a]=this.lastSessionId),this.applicationId&&(i[ga]=this.applicationId),this.appCheckToken&&(i[ns]=this.appCheckToken),typeof location<"u"&&location.hostname&&pa.test(location.hostname)&&(i[da]=fa);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){pt.forceAllow_=!0}static forceDisallow(){pt.forceDisallow_=!0}static isAvailable(){return pt.forceAllow_?!0:!pt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Xc()&&!Jc()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Z(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Xo(t),r=la(i,gu);for(let o=0;o<r.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[o]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[_u]="t",i[Ia]=e,i[Ta]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Z(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ws{constructor(e,t,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=zc(),window[hu+this.uniqueCallbackIdentifier]=e,window[cu+this.uniqueCallbackIdentifier]=t,this.myIFrame=ws.createIFrame_();let o="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(o='<script>document.domain="'+document.domain+'";<\/script>');const l="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(l),this.myIFrame.doc.close()}catch(c){se("frame writing exception"),c.stack&&se(c.stack),se(c)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||se("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ia]=this.myID,e[Ta]=this.myPW,e[wa]=this.currentSerial;let t=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Sa+i.length<=Ca;){const l=this.pendingSegs.shift();i=i+"&"+du+r+"="+l.seg+"&"+fu+r+"="+l.ts+"&"+pu+r+"="+l.d,r++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(i,Math.floor(mu)),o=()=>{clearTimeout(r),i()};this.addTag(e,o)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{se("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const vu=16384,Eu=45e3;let Wn=null;typeof MozWebSocket<"u"?Wn=MozWebSocket:typeof WebSocket<"u"&&(Wn=WebSocket);class ve{constructor(e,t,i,r,o,l,c){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=fn(this.connId),this.stats_=Ts(t),this.connURL=ve.connectionURL_(t,l,c,r,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,r,o){const l={};return l[ca]=Is,typeof location<"u"&&location.hostname&&pa.test(location.hostname)&&(l[da]=fa),t&&(l[ua]=t),i&&(l[_a]=i),r&&(l[ns]=r),o&&(l[ga]=o),Ea(e,ma,l)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ze.set("previous_websocket_failure",!0);try{let i;ea(),this.mySock=new Wn(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){ve.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Wn!==null&&!ve.forceDisallow_}static previouslyFailed(){return Ze.isInMemoryStorage||Ze.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ze.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=on(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=Z(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=la(t,vu);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Eu))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ve.responsesRequiredToBeHealthy=2;ve.healthyTimeout=3e4;/**
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
 */class ln{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[pt,ve]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ve&&ve.isAvailable();let i=t&&!ve.previouslyFailed();if(e.webSocketOnly&&(t||pe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ve];else{const r=this.transports_=[];for(const o of ln.ALL_TRANSPORTS)o&&o.isAvailable()&&r.push(o);ln.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ln.globalTransportInitialized_=!1;/**
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
 */const Iu=6e4,Tu=5e3,wu=10*1024,Cu=100*1024,Vi="t",eo="d",Su="s",to="r",Au="e",no="o",io="a",so="n",ro="p",bu="h";class Ru{constructor(e,t,i,r,o,l,c,d,f,C){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=o,this.onMessage_=l,this.onReady_=c,this.onDisconnect_=d,this.onKill_=f,this.lastSessionId=C,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=fn("c:"+this.id+":"),this.transportManager_=new ln(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Qt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Cu?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>wu?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Vi in e){const t=e[Vi];t===io?this.upgradeIfSecondaryHealthy_():t===to?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===no&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Kt("t",e),i=Kt("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ro,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:io,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:so,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Kt("t",e),i=Kt("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Kt(Vi,e);if(eo in e){const i=e[eo];if(t===bu){const r=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(t===so){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Su?this.onConnectionShutdown_(i):t===to?this.onReset_(i):t===Au?ts("Server Error: "+i):t===no?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ts("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Is!==i&&pe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Qt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Iu))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Tu))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ro,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ze.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Aa{put(e,t,i,r){}merge(e,t,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class ba{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const r=this.getInitialEvent(e);r&&t.apply(i,r)}off(e,t,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let o=0;o<r.length;o++)if(r[o].callback===t&&(!i||i===r[o].context)){r.splice(o,1);return}}validateEventType_(e){b(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class $n extends ba{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ys()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new $n}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const oo=32,ao=768;class z{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function B(){return new z("")}function L(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ze(n){return n.pieces_.length-n.pieceNum_}function $(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new z(n.pieces_,e)}function Ra(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Nu(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Na(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function ka(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new z(e,0)}function J(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof z)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&t.push(i[r])}return new z(t,0)}function O(n){return n.pieceNum_>=n.pieces_.length}function ge(n,e){const t=L(n),i=L(e);if(t===null)return e;if(t===i)return ge($(n),$(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Pa(n,e){if(ze(n)!==ze(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function Te(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(ze(n)>ze(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class ku{constructor(e,t){this.errorPrefix_=t,this.parts_=Na(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=ni(this.parts_[i]);Oa(this)}}function Pu(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=ni(e),Oa(n)}function Ou(n){const e=n.parts_.pop();n.byteLength_-=ni(e),n.parts_.length>0&&(n.byteLength_-=1)}function Oa(n){if(n.byteLength_>ao)throw new Error(n.errorPrefix_+"has a key path longer than "+ao+" bytes ("+n.byteLength_+").");if(n.parts_.length>oo)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+oo+") or object contains a cycle "+Qe(n))}function Qe(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Cs extends ba{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Cs}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const qt=1e3,Du=60*5*1e3,lo=30*1e3,Lu=1.3,Mu=3e4,xu="server_kill",ho=3;class Oe extends Aa{constructor(e,t,i,r,o,l,c,d){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=o,this.authTokenProvider_=l,this.appCheckTokenProvider_=c,this.authOverride_=d,this.id=Oe.nextPersistentConnectionId_++,this.log_=fn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=qt,this.maxReconnectDelay_=Du,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,d&&!ea())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Cs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&$n.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const r=++this.requestNumber_,o={r,a:e,b:t};this.log_(Z(o)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const t=new ms,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:l=>{const c=l.d;l.s==="ok"?t.resolve(c):t.reject(c)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const o=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(o),t.promise}listen(e,t,i,r){this.initConnection_();const o=e._queryIdentifier,l=e._path.toString();this.log_("Listen called for "+l+" "+o),this.listens.has(l)||this.listens.set(l,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(l).has(o),"listen() called twice for same path/queryId.");const c={onComplete:r,hashFn:t,query:e,tag:i};this.listens.get(l).set(o,c),this.connected_&&this.sendListen_(c)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+i+" for "+r);const o={p:i},l="q";e.tag&&(o.q=t._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest(l,o,c=>{const d=c.d,f=c.s;Oe.warnOnListenWarnings_(d,t),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",c),f!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(f,d))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Me(e,"w")){const i=It(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',o=t._path.toString();pe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${o} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||xh(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=lo)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Mh(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,r=>{const o=r.s,l=r.d||"error";this.authToken_===e&&(o==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(o,l))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,t)}sendUnlisten_(e,t,i,r){this.log_("Unlisten on "+e+" for "+t);const o={p:e},l="n";r&&(o.q=i,o.t=r),this.sendRequest(l,o)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,r){const o={p:t,d:i};this.log_("onDisconnect "+e,o),this.sendRequest(e,o,l=>{r&&setTimeout(()=>{r(l.s,l.d)},Math.floor(0))})}put(e,t,i,r){this.putInternal("p",e,t,i,r)}merge(e,t,i,r){this.putInternal("m",e,t,i,r)}putInternal(e,t,i,r,o){this.initConnection_();const l={p:t,d:i};o!==void 0&&(l.h=o),this.outstandingPuts_.push({action:e,request:l,onComplete:r}),this.outstandingPutCount_++;const c=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(c):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,o=>{this.log_(t+" response",o),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(o.s,o.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const o=i.d;this.log_("reportStats","Error sending stats: "+o)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Z(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):ts("Unrecognized action received from server: "+Z(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=qt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=qt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Mu&&(this.reconnectDelay_=qt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Lu)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Oe.nextConnectionId_++,o=this.lastSessionId;let l=!1,c=null;const d=function(){c?c.close():(l=!0,i())},f=function(T){b(c,"sendRequest call when we're not connected not allowed."),c.sendRequest(T)};this.realtime_={close:d,sendRequest:f};const C=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,S]=await Promise.all([this.authTokenProvider_.getToken(C),this.appCheckTokenProvider_.getToken(C)]);l?se("getToken() completed but was canceled"):(se("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=S&&S.token,c=new Ru(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,N=>{pe(N+" ("+this.repoInfo_.toString()+")"),this.interrupt(xu)},o))}catch(T){this.log_("Failed to get token: "+T),l||(this.repoInfo_.nodeAdmin&&pe(T),d())}}}interrupt(e){se("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){se("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Vr(this.interruptReasons_)&&(this.reconnectDelay_=qt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(o=>Es(o)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const i=new z(e).toString();let r;if(this.listens.has(i)){const o=this.listens.get(i);r=o.get(t),o.delete(t),o.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,t){se("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ho&&(this.reconnectDelay_=lo,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){se("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ho&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+sa.replace(/\./g,"-")]=1,ys()?e["framework.cordova"]=1:Zo()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=$n.getInstance().currentlyOnline();return Vr(this.interruptReasons_)&&e}}Oe.nextPersistentConnectionId_=0;Oe.nextConnectionId_=0;/**
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
 */class M{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new M(e,t)}}/**
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
 */class si{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new M(Tt,e),r=new M(Tt,t);return this.compare(i,r)!==0}minPost(){return M.MIN}}/**
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
 */let Dn;class Da extends si{static get __EMPTY_NODE(){return Dn}static set __EMPTY_NODE(e){Dn=e}compare(e,t){return At(e.name,t.name)}isDefinedOn(e){throw Ct("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return M.MIN}maxPost(){return new M(it,Dn)}makePost(e,t){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new M(e,Dn)}toString(){return".key"}}const yt=new Da;/**
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
 */class Ln{constructor(e,t,i,r,o=null){this.isReverse_=r,this.resultGenerator_=o,this.nodeStack_=[];let l=1;for(;!e.isEmpty();)if(e=e,l=t?i(e.key,t):1,r&&(l*=-1),l<0)this.isReverse_?e=e.left:e=e.right;else if(l===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class X{constructor(e,t,i,r,o){this.key=e,this.value=t,this.color=i??X.RED,this.left=r??ce.EMPTY_NODE,this.right=o??ce.EMPTY_NODE}copy(e,t,i,r,o){return new X(e??this.key,t??this.value,i??this.color,r??this.left,o??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let r=this;const o=i(e,r.key);return o<0?r=r.copy(null,null,null,r.left.insert(e,t,i),null):o===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return ce.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,r;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return ce.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,X.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,X.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}X.RED=!0;X.BLACK=!1;class Uu{copy(e,t,i,r,o){return this}insert(e,t,i){return new X(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ce{constructor(e,t=ce.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ce(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,X.BLACK,null,null))}remove(e){return new ce(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,X.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,r=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ln(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ln(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ln(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ln(this.root_,null,this.comparator_,!0,e)}}ce.EMPTY_NODE=new Uu;/**
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
 */function Fu(n,e){return At(n.name,e.name)}function Ss(n,e){return At(n,e)}/**
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
 */let is;function Hu(n){is=n}const La=function(n){return typeof n=="number"?"number:"+ha(n):"string:"+n},Ma=function(n){if(n.isLeafNode()){const e=n.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Me(e,".sv"),"Priority must be a string or number.")}else b(n===is||n.isEmpty(),"priority of unexpected type.");b(n===is||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let co;class Y{constructor(e,t=Y.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ma(this.priorityNode_)}static set __childrenNodeConstructor(e){co=e}static get __childrenNodeConstructor(){return co}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Y(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Y.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return O(e)?this:L(e)===".priority"?this.priorityNode_:Y.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Y.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=L(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(b(i!==".priority"||ze(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Y.__childrenNodeConstructor.EMPTY_NODE.updateChild($(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+La(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=ha(this.value_):e+=this.value_,this.lazyHash_=oa(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Y.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Y.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,r=Y.VALUE_TYPE_ORDER.indexOf(t),o=Y.VALUE_TYPE_ORDER.indexOf(i);return b(r>=0,"Unknown leaf type: "+t),b(o>=0,"Unknown leaf type: "+i),r===o?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:o-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Y.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let xa,Ua;function Bu(n){xa=n}function ju(n){Ua=n}class Vu extends si{compare(e,t){const i=e.node.getPriority(),r=t.node.getPriority(),o=i.compareTo(r);return o===0?At(e.name,t.name):o}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return M.MIN}maxPost(){return new M(it,new Y("[PRIORITY-POST]",Ua))}makePost(e,t){const i=xa(e);return new M(t,new Y("[PRIORITY-POST]",i))}toString(){return".priority"}}const oe=new Vu;/**
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
 */const Wu=Math.log(2);class $u{constructor(e){const t=o=>parseInt(Math.log(o)/Wu,10),i=o=>parseInt(Array(o+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const zn=function(n,e,t,i){n.sort(e);const r=function(d,f){const C=f-d;let T,S;if(C===0)return null;if(C===1)return T=n[d],S=t?t(T):T,new X(S,T.node,X.BLACK,null,null);{const N=parseInt(C/2,10)+d,R=r(d,N),P=r(N+1,f);return T=n[N],S=t?t(T):T,new X(S,T.node,X.BLACK,R,P)}},o=function(d){let f=null,C=null,T=n.length;const S=function(R,P){const k=T-R,ue=T;T-=R;const q=r(k+1,ue),K=n[k],de=t?t(K):K;N(new X(de,K.node,P,null,q))},N=function(R){f?(f.left=R,f=R):(C=R,f=R)};for(let R=0;R<d.count;++R){const P=d.nextBitIsOne(),k=Math.pow(2,d.count-(R+1));P?S(k,X.BLACK):(S(k,X.BLACK),S(k,X.RED))}return C},l=new $u(n.length),c=o(l);return new ce(i||e,c)};/**
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
 */let Wi;const ft={};class ke{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return b(ft&&oe,"ChildrenNode.ts has not been loaded"),Wi=Wi||new ke({".priority":ft},{".priority":oe}),Wi}get(e){const t=It(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ce?t:null}hasIndex(e){return Me(this.indexSet_,e.toString())}addIndex(e,t){b(e!==yt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const o=t.getIterator(M.Wrap);let l=o.getNext();for(;l;)r=r||e.isDefinedOn(l.node),i.push(l),l=o.getNext();let c;r?c=zn(i,e.getCompare()):c=ft;const d=e.toString(),f=Object.assign({},this.indexSet_);f[d]=e;const C=Object.assign({},this.indexes_);return C[d]=c,new ke(C,f)}addToIndexes(e,t){const i=jn(this.indexes_,(r,o)=>{const l=It(this.indexSet_,o);if(b(l,"Missing index implementation for "+o),r===ft)if(l.isDefinedOn(e.node)){const c=[],d=t.getIterator(M.Wrap);let f=d.getNext();for(;f;)f.name!==e.name&&c.push(f),f=d.getNext();return c.push(e),zn(c,l.getCompare())}else return ft;else{const c=t.get(e.name);let d=r;return c&&(d=d.remove(new M(e.name,c))),d.insert(e,e.node)}});return new ke(i,this.indexSet_)}removeFromIndexes(e,t){const i=jn(this.indexes_,r=>{if(r===ft)return r;{const o=t.get(e.name);return o?r.remove(new M(e.name,o)):r}});return new ke(i,this.indexSet_)}}/**
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
 */let Yt;class H{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Ma(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Yt||(Yt=new H(new ce(Ss),null,ke.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Yt}updatePriority(e){return this.children_.isEmpty()?this:new H(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Yt:t}}getChild(e){const t=L(e);return t===null?this:this.getImmediateChild(t).getChild($(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(b(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new M(e,t);let r,o;t.isEmpty()?(r=this.children_.remove(e),o=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,t),o=this.indexMap_.addToIndexes(i,this.children_));const l=r.isEmpty()?Yt:this.priorityNode_;return new H(r,l,o)}}updateChild(e,t){const i=L(e);if(i===null)return t;{b(L(e)!==".priority"||ze(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild($(e),t);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,r=0,o=!0;if(this.forEachChild(oe,(l,c)=>{t[l]=c.val(e),i++,o&&H.INTEGER_REGEXP_.test(l)?r=Math.max(r,Number(l)):o=!1}),!e&&o&&r<2*i){const l=[];for(const c in t)l[c]=t[c];return l}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+La(this.getPriority().val())+":"),this.forEachChild(oe,(t,i)=>{const r=i.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":oa(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const r=this.resolveIndex_(i);if(r){const o=r.getPredecessorKey(new M(e,t));return o?o.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new M(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new M(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,M.Wrap);let o=r.peek();for(;o!=null&&t.compare(o,e)<0;)r.getNext(),o=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,M.Wrap);let o=r.peek();for(;o!=null&&t.compare(o,e)>0;)r.getNext(),o=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===_n?-1:0}withIndex(e){if(e===yt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new H(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===yt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(oe),r=t.getIterator(oe);let o=i.getNext(),l=r.getNext();for(;o&&l;){if(o.name!==l.name||!o.node.equals(l.node))return!1;o=i.getNext(),l=r.getNext()}return o===null&&l===null}else return!1;else return!1}}resolveIndex_(e){return e===yt?null:this.indexMap_.get(e.toString())}}H.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class zu extends H{constructor(){super(new ce(Ss),H.EMPTY_NODE,ke.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return H.EMPTY_NODE}isEmpty(){return!1}}const _n=new zu;Object.defineProperties(M,{MIN:{value:new M(Tt,H.EMPTY_NODE)},MAX:{value:new M(it,_n)}});Da.__EMPTY_NODE=H.EMPTY_NODE;Y.__childrenNodeConstructor=H;Hu(_n);ju(_n);/**
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
 */const Gu=!0;function re(n,e=null){if(n===null)return H.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Y(t,re(e))}if(!(n instanceof Array)&&Gu){const t=[];let i=!1;if(me(n,(l,c)=>{if(l.substring(0,1)!=="."){const d=re(c);d.isEmpty()||(i=i||!d.getPriority().isEmpty(),t.push(new M(l,d)))}}),t.length===0)return H.EMPTY_NODE;const o=zn(t,Fu,l=>l.name,Ss);if(i){const l=zn(t,oe.getCompare());return new H(o,re(e),new ke({".priority":l},{".priority":oe}))}else return new H(o,re(e),ke.Default)}else{let t=H.EMPTY_NODE;return me(n,(i,r)=>{if(Me(n,i)&&i.substring(0,1)!=="."){const o=re(r);(o.isLeafNode()||!o.isEmpty())&&(t=t.updateImmediateChild(i,o))}}),t.updatePriority(re(e))}}Bu(re);/**
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
 */class Ku extends si{constructor(e){super(),this.indexPath_=e,b(!O(e)&&L(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),r=this.extractChild(t.node),o=i.compareTo(r);return o===0?At(e.name,t.name):o}makePost(e,t){const i=re(e),r=H.EMPTY_NODE.updateChild(this.indexPath_,i);return new M(t,r)}maxPost(){const e=H.EMPTY_NODE.updateChild(this.indexPath_,_n);return new M(it,e)}toString(){return Na(this.indexPath_,0).join("/")}}/**
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
 */class qu extends si{compare(e,t){const i=e.node.compareTo(t.node);return i===0?At(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return M.MIN}maxPost(){return M.MAX}makePost(e,t){const i=re(e);return new M(t,i)}toString(){return".value"}}const Yu=new qu;/**
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
 */function Xu(n){return{type:"value",snapshotNode:n}}function Ju(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Qu(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function uo(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Zu(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class As{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=oe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Tt}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:it}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===oe}copy(){const e=new As;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function fo(n){const e={};if(n.isDefault())return e;let t;if(n.index_===oe?t="$priority":n.index_===Yu?t="$value":n.index_===yt?t="$key":(b(n.index_ instanceof Ku,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Z(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=Z(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+Z(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=Z(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+Z(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function po(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==oe&&(e.i=n.index_.toString()),e}/**
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
 */class Gn extends Aa{constructor(e,t,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=fn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,r){const o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);const l=Gn.getListenId_(e,i),c={};this.listens_[l]=c;const d=fo(e._queryParams);this.restRequest_(o+".json",d,(f,C)=>{let T=C;if(f===404&&(T=null,f=null),f===null&&this.onDataUpdate_(o,T,!1,i),It(this.listens_,l)===c){let S;f?f===401?S="permission_denied":S="rest_error:"+f:S="ok",r(S,null)}})}unlisten(e,t){const i=Gn.getListenId_(e,t);delete this.listens_[i]}get(e){const t=fo(e._queryParams),i=e._path.toString(),r=new ms;return this.restRequest_(i+".json",t,(o,l)=>{let c=l;o===404&&(c=null,o=null),o===null?(this.onDataUpdate_(i,c,!1,null),r.resolve(c)):r.reject(new Error(c))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,o])=>{r&&r.accessToken&&(t.auth=r.accessToken),o&&o.token&&(t.ac=o.token);const l=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+vs(t);this.log_("Sending REST request for "+l);const c=new XMLHttpRequest;c.onreadystatechange=()=>{if(i&&c.readyState===4){this.log_("REST Response for "+l+" received. status:",c.status,"response:",c.responseText);let d=null;if(c.status>=200&&c.status<300){try{d=on(c.responseText)}catch{pe("Failed to parse JSON response for "+l+": "+c.responseText)}i(null,d)}else c.status!==401&&c.status!==404&&pe("Got unsuccessful REST response for "+l+" Status: "+c.status),i(c.status);i=null}},c.open("GET",l,!0),c.send()})}}/**
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
 */class ed{constructor(){this.rootNode_=H.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Kn(){return{value:null,children:new Map}}function Fa(n,e,t){if(O(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=L(e);n.children.has(i)||n.children.set(i,Kn());const r=n.children.get(i);e=$(e),Fa(r,e,t)}}function ss(n,e,t){n.value!==null?t(e,n.value):td(n,(i,r)=>{const o=new z(e.toString()+"/"+i);ss(r,o,t)})}function td(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class nd{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&me(this.last_,(i,r)=>{t[i]=t[i]-r}),this.last_=e,t}}/**
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
 */const _o=10*1e3,id=30*1e3,sd=5*60*1e3;class rd{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new nd(e);const i=_o+(id-_o)*Math.random();Qt(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;me(e,(r,o)=>{o>0&&Me(this.statsToReport_,r)&&(t[r]=o,i=!0)}),i&&this.server_.reportStats(t),Qt(this.reportStats_.bind(this),Math.floor(Math.random()*2*sd))}}/**
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
 */var Se;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Se||(Se={}));function Ha(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ba(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ja(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class qn{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Se.ACK_USER_WRITE,this.source=Ha()}operationForChild(e){if(O(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new z(e));return new qn(B(),t,this.revert)}}else return b(L(this.path)===e,"operationForChild called for unrelated child."),new qn($(this.path),this.affectedTree,this.revert)}}/**
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
 */class st{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Se.OVERWRITE}operationForChild(e){return O(this.path)?new st(this.source,B(),this.snap.getImmediateChild(e)):new st(this.source,$(this.path),this.snap)}}/**
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
 */class hn{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Se.MERGE}operationForChild(e){if(O(this.path)){const t=this.children.subtree(new z(e));return t.isEmpty()?null:t.value?new st(this.source,B(),t.value):new hn(this.source,B(),t)}else return b(L(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new hn(this.source,$(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class bs{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(O(e))return this.isFullyInitialized()&&!this.filtered_;const t=L(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function od(n,e,t,i){const r=[],o=[];return e.forEach(l=>{l.type==="child_changed"&&n.index_.indexedValueChanged(l.oldSnap,l.snapshotNode)&&o.push(Zu(l.childName,l.snapshotNode))}),Xt(n,r,"child_removed",e,i,t),Xt(n,r,"child_added",e,i,t),Xt(n,r,"child_moved",o,i,t),Xt(n,r,"child_changed",e,i,t),Xt(n,r,"value",e,i,t),r}function Xt(n,e,t,i,r,o){const l=i.filter(c=>c.type===t);l.sort((c,d)=>ld(n,c,d)),l.forEach(c=>{const d=ad(n,c,o);r.forEach(f=>{f.respondsTo(c.type)&&e.push(f.createEvent(d,n.query_))})})}function ad(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function ld(n,e,t){if(e.childName==null||t.childName==null)throw Ct("Should only compare child_ events.");const i=new M(e.childName,e.snapshotNode),r=new M(t.childName,t.snapshotNode);return n.index_.compare(i,r)}/**
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
 */function Va(n,e){return{eventCache:n,serverCache:e}}function Zt(n,e,t,i){return Va(new bs(e,t,i),n.serverCache)}function Wa(n,e,t,i){return Va(n.eventCache,new bs(e,t,i))}function rs(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function rt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let $i;const hd=()=>($i||($i=new ce(Yc)),$i);class W{constructor(e,t=hd()){this.value=e,this.children=t}static fromObject(e){let t=new W(null);return me(e,(i,r)=>{t=t.set(new z(i),r)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:B(),value:this.value};if(O(e))return null;{const i=L(e),r=this.children.get(i);if(r!==null){const o=r.findRootMostMatchingPathAndValue($(e),t);return o!=null?{path:J(new z(i),o.path),value:o.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(O(e))return this;{const t=L(e),i=this.children.get(t);return i!==null?i.subtree($(e)):new W(null)}}set(e,t){if(O(e))return new W(t,this.children);{const i=L(e),o=(this.children.get(i)||new W(null)).set($(e),t),l=this.children.insert(i,o);return new W(this.value,l)}}remove(e){if(O(e))return this.children.isEmpty()?new W(null):new W(null,this.children);{const t=L(e),i=this.children.get(t);if(i){const r=i.remove($(e));let o;return r.isEmpty()?o=this.children.remove(t):o=this.children.insert(t,r),this.value===null&&o.isEmpty()?new W(null):new W(this.value,o)}else return this}}get(e){if(O(e))return this.value;{const t=L(e),i=this.children.get(t);return i?i.get($(e)):null}}setTree(e,t){if(O(e))return t;{const i=L(e),o=(this.children.get(i)||new W(null)).setTree($(e),t);let l;return o.isEmpty()?l=this.children.remove(i):l=this.children.insert(i,o),new W(this.value,l)}}fold(e){return this.fold_(B(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((r,o)=>{i[r]=o.fold_(J(e,r),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,B(),t)}findOnPath_(e,t,i){const r=this.value?i(t,this.value):!1;if(r)return r;if(O(e))return null;{const o=L(e),l=this.children.get(o);return l?l.findOnPath_($(e),J(t,o),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,B(),t)}foreachOnPath_(e,t,i){if(O(e))return this;{this.value&&i(t,this.value);const r=L(e),o=this.children.get(r);return o?o.foreachOnPath_($(e),J(t,r),i):new W(null)}}foreach(e){this.foreach_(B(),e)}foreach_(e,t){this.children.inorderTraversal((i,r)=>{r.foreach_(J(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class Ce{constructor(e){this.writeTree_=e}static empty(){return new Ce(new W(null))}}function en(n,e,t){if(O(e))return new Ce(new W(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let o=i.value;const l=ge(r,e);return o=o.updateChild(l,t),new Ce(n.writeTree_.set(r,o))}else{const r=new W(t),o=n.writeTree_.setTree(e,r);return new Ce(o)}}}function go(n,e,t){let i=n;return me(t,(r,o)=>{i=en(i,J(e,r),o)}),i}function mo(n,e){if(O(e))return Ce.empty();{const t=n.writeTree_.setTree(e,new W(null));return new Ce(t)}}function os(n,e){return ot(n,e)!=null}function ot(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ge(t.path,e)):null}function yo(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(oe,(i,r)=>{e.push(new M(i,r))}):n.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new M(i,r.value))}),e}function We(n,e){if(O(e))return n;{const t=ot(n,e);return t!=null?new Ce(new W(t)):new Ce(n.writeTree_.subtree(e))}}function as(n){return n.writeTree_.isEmpty()}function wt(n,e){return $a(B(),n.writeTree_,e)}function $a(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((r,o)=>{r===".priority"?(b(o.value!==null,"Priority writes must always be leaf nodes"),i=o.value):t=$a(J(n,r),o,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(J(n,".priority"),i)),t}}/**
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
 */function za(n,e){return Xa(e,n)}function cd(n,e,t,i,r){b(i>n.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:r}),r&&(n.visibleWrites=en(n.visibleWrites,e,t)),n.lastWriteId=i}function ud(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function dd(n,e){const t=n.allWrites.findIndex(c=>c.writeId===e);b(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let r=i.visible,o=!1,l=n.allWrites.length-1;for(;r&&l>=0;){const c=n.allWrites[l];c.visible&&(l>=t&&fd(c,i.path)?r=!1:Te(i.path,c.path)&&(o=!0)),l--}if(r){if(o)return pd(n),!0;if(i.snap)n.visibleWrites=mo(n.visibleWrites,i.path);else{const c=i.children;me(c,d=>{n.visibleWrites=mo(n.visibleWrites,J(i.path,d))})}return!0}else return!1}function fd(n,e){if(n.snap)return Te(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Te(J(n.path,t),e))return!0;return!1}function pd(n){n.visibleWrites=Ga(n.allWrites,_d,B()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function _d(n){return n.visible}function Ga(n,e,t){let i=Ce.empty();for(let r=0;r<n.length;++r){const o=n[r];if(e(o)){const l=o.path;let c;if(o.snap)Te(t,l)?(c=ge(t,l),i=en(i,c,o.snap)):Te(l,t)&&(c=ge(l,t),i=en(i,B(),o.snap.getChild(c)));else if(o.children){if(Te(t,l))c=ge(t,l),i=go(i,c,o.children);else if(Te(l,t))if(c=ge(l,t),O(c))i=go(i,B(),o.children);else{const d=It(o.children,L(c));if(d){const f=d.getChild($(c));i=en(i,B(),f)}}}else throw Ct("WriteRecord should have .snap or .children")}}return i}function Ka(n,e,t,i,r){if(!i&&!r){const o=ot(n.visibleWrites,e);if(o!=null)return o;{const l=We(n.visibleWrites,e);if(as(l))return t;if(t==null&&!os(l,B()))return null;{const c=t||H.EMPTY_NODE;return wt(l,c)}}}else{const o=We(n.visibleWrites,e);if(!r&&as(o))return t;if(!r&&t==null&&!os(o,B()))return null;{const l=function(f){return(f.visible||r)&&(!i||!~i.indexOf(f.writeId))&&(Te(f.path,e)||Te(e,f.path))},c=Ga(n.allWrites,l,e),d=t||H.EMPTY_NODE;return wt(c,d)}}}function gd(n,e,t){let i=H.EMPTY_NODE;const r=ot(n.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(oe,(o,l)=>{i=i.updateImmediateChild(o,l)}),i;if(t){const o=We(n.visibleWrites,e);return t.forEachChild(oe,(l,c)=>{const d=wt(We(o,new z(l)),c);i=i.updateImmediateChild(l,d)}),yo(o).forEach(l=>{i=i.updateImmediateChild(l.name,l.node)}),i}else{const o=We(n.visibleWrites,e);return yo(o).forEach(l=>{i=i.updateImmediateChild(l.name,l.node)}),i}}function md(n,e,t,i,r){b(i||r,"Either existingEventSnap or existingServerSnap must exist");const o=J(e,t);if(os(n.visibleWrites,o))return null;{const l=We(n.visibleWrites,o);return as(l)?r.getChild(t):wt(l,r.getChild(t))}}function yd(n,e,t,i){const r=J(e,t),o=ot(n.visibleWrites,r);if(o!=null)return o;if(i.isCompleteForChild(t)){const l=We(n.visibleWrites,r);return wt(l,i.getNode().getImmediateChild(t))}else return null}function vd(n,e){return ot(n.visibleWrites,e)}function Ed(n,e,t,i,r,o,l){let c;const d=We(n.visibleWrites,e),f=ot(d,B());if(f!=null)c=f;else if(t!=null)c=wt(d,t);else return[];if(c=c.withIndex(l),!c.isEmpty()&&!c.isLeafNode()){const C=[],T=l.getCompare(),S=o?c.getReverseIteratorFrom(i,l):c.getIteratorFrom(i,l);let N=S.getNext();for(;N&&C.length<r;)T(N,i)!==0&&C.push(N),N=S.getNext();return C}else return[]}function Id(){return{visibleWrites:Ce.empty(),allWrites:[],lastWriteId:-1}}function ls(n,e,t,i){return Ka(n.writeTree,n.treePath,e,t,i)}function qa(n,e){return gd(n.writeTree,n.treePath,e)}function vo(n,e,t,i){return md(n.writeTree,n.treePath,e,t,i)}function Yn(n,e){return vd(n.writeTree,J(n.treePath,e))}function Td(n,e,t,i,r,o){return Ed(n.writeTree,n.treePath,e,t,i,r,o)}function Rs(n,e,t){return yd(n.writeTree,n.treePath,e,t)}function Ya(n,e){return Xa(J(n.treePath,e),n.writeTree)}function Xa(n,e){return{treePath:n,writeTree:e}}/**
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
 */class wd{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;b(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),b(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const o=r.type;if(t==="child_added"&&o==="child_removed")this.changeMap.set(i,uo(i,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&o==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&o==="child_changed")this.changeMap.set(i,Qu(i,r.oldSnap));else if(t==="child_changed"&&o==="child_added")this.changeMap.set(i,Ju(i,e.snapshotNode));else if(t==="child_changed"&&o==="child_changed")this.changeMap.set(i,uo(i,e.snapshotNode,r.oldSnap));else throw Ct("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Cd{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Ja=new Cd;class Ns{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new bs(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Rs(this.writes_,e,i)}}getChildAfterChild(e,t,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:rt(this.viewCache_),o=Td(this.writes_,r,t,1,i,e);return o.length===0?null:o[0]}}function Sd(n,e){b(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Ad(n,e,t,i,r){const o=new wd;let l,c;if(t.type===Se.OVERWRITE){const f=t;f.source.fromUser?l=hs(n,e,f.path,f.snap,i,r,o):(b(f.source.fromServer,"Unknown source."),c=f.source.tagged||e.serverCache.isFiltered()&&!O(f.path),l=Xn(n,e,f.path,f.snap,i,r,c,o))}else if(t.type===Se.MERGE){const f=t;f.source.fromUser?l=Rd(n,e,f.path,f.children,i,r,o):(b(f.source.fromServer,"Unknown source."),c=f.source.tagged||e.serverCache.isFiltered(),l=cs(n,e,f.path,f.children,i,r,c,o))}else if(t.type===Se.ACK_USER_WRITE){const f=t;f.revert?l=Pd(n,e,f.path,i,r,o):l=Nd(n,e,f.path,f.affectedTree,i,r,o)}else if(t.type===Se.LISTEN_COMPLETE)l=kd(n,e,t.path,i,o);else throw Ct("Unknown operation type: "+t.type);const d=o.getChanges();return bd(e,l,d),{viewCache:l,changes:d}}function bd(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),o=rs(n);(t.length>0||!n.eventCache.isFullyInitialized()||r&&!i.getNode().equals(o)||!i.getNode().getPriority().equals(o.getPriority()))&&t.push(Xu(rs(e)))}}function Qa(n,e,t,i,r,o){const l=e.eventCache;if(Yn(i,t)!=null)return e;{let c,d;if(O(t))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const f=rt(e),C=f instanceof H?f:H.EMPTY_NODE,T=qa(i,C);c=n.filter.updateFullNode(e.eventCache.getNode(),T,o)}else{const f=ls(i,rt(e));c=n.filter.updateFullNode(e.eventCache.getNode(),f,o)}else{const f=L(t);if(f===".priority"){b(ze(t)===1,"Can't have a priority with additional path components");const C=l.getNode();d=e.serverCache.getNode();const T=vo(i,t,C,d);T!=null?c=n.filter.updatePriority(C,T):c=l.getNode()}else{const C=$(t);let T;if(l.isCompleteForChild(f)){d=e.serverCache.getNode();const S=vo(i,t,l.getNode(),d);S!=null?T=l.getNode().getImmediateChild(f).updateChild(C,S):T=l.getNode().getImmediateChild(f)}else T=Rs(i,f,e.serverCache);T!=null?c=n.filter.updateChild(l.getNode(),f,T,C,r,o):c=l.getNode()}}return Zt(e,c,l.isFullyInitialized()||O(t),n.filter.filtersNodes())}}function Xn(n,e,t,i,r,o,l,c){const d=e.serverCache;let f;const C=l?n.filter:n.filter.getIndexedFilter();if(O(t))f=C.updateFullNode(d.getNode(),i,null);else if(C.filtersNodes()&&!d.isFiltered()){const N=d.getNode().updateChild(t,i);f=C.updateFullNode(d.getNode(),N,null)}else{const N=L(t);if(!d.isCompleteForPath(t)&&ze(t)>1)return e;const R=$(t),k=d.getNode().getImmediateChild(N).updateChild(R,i);N===".priority"?f=C.updatePriority(d.getNode(),k):f=C.updateChild(d.getNode(),N,k,R,Ja,null)}const T=Wa(e,f,d.isFullyInitialized()||O(t),C.filtersNodes()),S=new Ns(r,T,o);return Qa(n,T,t,r,S,c)}function hs(n,e,t,i,r,o,l){const c=e.eventCache;let d,f;const C=new Ns(r,e,o);if(O(t))f=n.filter.updateFullNode(e.eventCache.getNode(),i,l),d=Zt(e,f,!0,n.filter.filtersNodes());else{const T=L(t);if(T===".priority")f=n.filter.updatePriority(e.eventCache.getNode(),i),d=Zt(e,f,c.isFullyInitialized(),c.isFiltered());else{const S=$(t),N=c.getNode().getImmediateChild(T);let R;if(O(S))R=i;else{const P=C.getCompleteChild(T);P!=null?Ra(S)===".priority"&&P.getChild(ka(S)).isEmpty()?R=P:R=P.updateChild(S,i):R=H.EMPTY_NODE}if(N.equals(R))d=e;else{const P=n.filter.updateChild(c.getNode(),T,R,S,C,l);d=Zt(e,P,c.isFullyInitialized(),n.filter.filtersNodes())}}}return d}function Eo(n,e){return n.eventCache.isCompleteForChild(e)}function Rd(n,e,t,i,r,o,l){let c=e;return i.foreach((d,f)=>{const C=J(t,d);Eo(e,L(C))&&(c=hs(n,c,C,f,r,o,l))}),i.foreach((d,f)=>{const C=J(t,d);Eo(e,L(C))||(c=hs(n,c,C,f,r,o,l))}),c}function Io(n,e,t){return t.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function cs(n,e,t,i,r,o,l,c){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let d=e,f;O(t)?f=i:f=new W(null).setTree(t,i);const C=e.serverCache.getNode();return f.children.inorderTraversal((T,S)=>{if(C.hasChild(T)){const N=e.serverCache.getNode().getImmediateChild(T),R=Io(n,N,S);d=Xn(n,d,new z(T),R,r,o,l,c)}}),f.children.inorderTraversal((T,S)=>{const N=!e.serverCache.isCompleteForChild(T)&&S.value===null;if(!C.hasChild(T)&&!N){const R=e.serverCache.getNode().getImmediateChild(T),P=Io(n,R,S);d=Xn(n,d,new z(T),P,r,o,l,c)}}),d}function Nd(n,e,t,i,r,o,l){if(Yn(r,t)!=null)return e;const c=e.serverCache.isFiltered(),d=e.serverCache;if(i.value!=null){if(O(t)&&d.isFullyInitialized()||d.isCompleteForPath(t))return Xn(n,e,t,d.getNode().getChild(t),r,o,c,l);if(O(t)){let f=new W(null);return d.getNode().forEachChild(yt,(C,T)=>{f=f.set(new z(C),T)}),cs(n,e,t,f,r,o,c,l)}else return e}else{let f=new W(null);return i.foreach((C,T)=>{const S=J(t,C);d.isCompleteForPath(S)&&(f=f.set(C,d.getNode().getChild(S)))}),cs(n,e,t,f,r,o,c,l)}}function kd(n,e,t,i,r){const o=e.serverCache,l=Wa(e,o.getNode(),o.isFullyInitialized()||O(t),o.isFiltered());return Qa(n,l,t,i,Ja,r)}function Pd(n,e,t,i,r,o){let l;if(Yn(i,t)!=null)return e;{const c=new Ns(i,e,r),d=e.eventCache.getNode();let f;if(O(t)||L(t)===".priority"){let C;if(e.serverCache.isFullyInitialized())C=ls(i,rt(e));else{const T=e.serverCache.getNode();b(T instanceof H,"serverChildren would be complete if leaf node"),C=qa(i,T)}C=C,f=n.filter.updateFullNode(d,C,o)}else{const C=L(t);let T=Rs(i,C,e.serverCache);T==null&&e.serverCache.isCompleteForChild(C)&&(T=d.getImmediateChild(C)),T!=null?f=n.filter.updateChild(d,C,T,$(t),c,o):e.eventCache.getNode().hasChild(C)?f=n.filter.updateChild(d,C,H.EMPTY_NODE,$(t),c,o):f=d,f.isEmpty()&&e.serverCache.isFullyInitialized()&&(l=ls(i,rt(e)),l.isLeafNode()&&(f=n.filter.updateFullNode(f,l,o)))}return l=e.serverCache.isFullyInitialized()||Yn(i,B())!=null,Zt(e,f,l,n.filter.filtersNodes())}}function Od(n,e){const t=rt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!O(e)&&!t.getImmediateChild(L(e)).isEmpty())?t.getChild(e):null}function To(n,e,t,i){e.type===Se.MERGE&&e.source.queryId!==null&&(b(rt(n.viewCache_),"We should always have a full cache before handling merges"),b(rs(n.viewCache_),"Missing event cache, even though we have a server cache"));const r=n.viewCache_,o=Ad(n.processor_,r,e,t,i);return Sd(n.processor_,o.viewCache),b(o.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=o.viewCache,Dd(n,o.changes,o.viewCache.eventCache.getNode(),null)}function Dd(n,e,t,i){const r=i?[i]:n.eventRegistrations_;return od(n.eventGenerator_,e,t,r)}/**
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
 */let wo;function Ld(n){b(!wo,"__referenceConstructor has already been defined"),wo=n}function ks(n,e,t,i){const r=e.source.queryId;if(r!==null){const o=n.views.get(r);return b(o!=null,"SyncTree gave us an op for an invalid query."),To(o,e,t,i)}else{let o=[];for(const l of n.views.values())o=o.concat(To(l,e,t,i));return o}}function Ps(n,e){let t=null;for(const i of n.views.values())t=t||Od(i,e);return t}/**
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
 */let Co;function Md(n){b(!Co,"__referenceConstructor has already been defined"),Co=n}class So{constructor(e){this.listenProvider_=e,this.syncPointTree_=new W(null),this.pendingWriteTree_=Id(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function xd(n,e,t,i,r){return cd(n.pendingWriteTree_,e,t,i,r),r?oi(n,new st(Ha(),e,t)):[]}function _t(n,e,t=!1){const i=ud(n.pendingWriteTree_,e);if(dd(n.pendingWriteTree_,e)){let o=new W(null);return i.snap!=null?o=o.set(B(),!0):me(i.children,l=>{o=o.set(new z(l),!0)}),oi(n,new qn(i.path,o,t))}else return[]}function ri(n,e,t){return oi(n,new st(Ba(),e,t))}function Ud(n,e,t){const i=W.fromObject(t);return oi(n,new hn(Ba(),e,i))}function Fd(n,e,t,i){const r=nl(n,i);if(r!=null){const o=il(r),l=o.path,c=o.queryId,d=ge(l,e),f=new st(ja(c),d,t);return sl(n,l,f)}else return[]}function Hd(n,e,t,i){const r=nl(n,i);if(r){const o=il(r),l=o.path,c=o.queryId,d=ge(l,e),f=W.fromObject(t),C=new hn(ja(c),d,f);return sl(n,l,C)}else return[]}function Za(n,e,t){const r=n.pendingWriteTree_,o=n.syncPointTree_.findOnPath(e,(l,c)=>{const d=ge(l,e),f=Ps(c,d);if(f)return f});return Ka(r,e,o,t,!0)}function oi(n,e){return el(e,n.syncPointTree_,null,za(n.pendingWriteTree_,B()))}function el(n,e,t,i){if(O(n.path))return tl(n,e,t,i);{const r=e.get(B());t==null&&r!=null&&(t=Ps(r,B()));let o=[];const l=L(n.path),c=n.operationForChild(l),d=e.children.get(l);if(d&&c){const f=t?t.getImmediateChild(l):null,C=Ya(i,l);o=o.concat(el(c,d,f,C))}return r&&(o=o.concat(ks(r,n,i,t))),o}}function tl(n,e,t,i){const r=e.get(B());t==null&&r!=null&&(t=Ps(r,B()));let o=[];return e.children.inorderTraversal((l,c)=>{const d=t?t.getImmediateChild(l):null,f=Ya(i,l),C=n.operationForChild(l);C&&(o=o.concat(tl(C,c,d,f)))}),r&&(o=o.concat(ks(r,n,i,t))),o}function nl(n,e){return n.tagToQueryMap.get(e)}function il(n){const e=n.indexOf("$");return b(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new z(n.substr(0,e))}}function sl(n,e,t){const i=n.syncPointTree_.get(e);b(i,"Missing sync point for query tag that we're tracking");const r=za(n.pendingWriteTree_,e);return ks(i,t,r,null)}/**
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
 */class Os{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Os(t)}node(){return this.node_}}class Ds{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=J(this.path_,e);return new Ds(this.syncTree_,t)}node(){return Za(this.syncTree_,this.path_)}}const Bd=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Ao=function(n,e,t){if(!n||typeof n!="object")return n;if(b(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return jd(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Vd(n[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},jd=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:b(!1,"Unexpected server value: "+n)}},Vd=function(n,e,t){n.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&b(!1,"Unexpected increment value: "+i);const r=e.node();if(b(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const l=r.getValue();return typeof l!="number"?i:l+i},Wd=function(n,e,t,i){return Ls(e,new Ds(t,n),i)},$d=function(n,e,t){return Ls(n,new Os(e),t)};function Ls(n,e,t){const i=n.getPriority().val(),r=Ao(i,e.getImmediateChild(".priority"),t);let o;if(n.isLeafNode()){const l=n,c=Ao(l.getValue(),e,t);return c!==l.getValue()||r!==l.getPriority().val()?new Y(c,re(r)):n}else{const l=n;return o=l,r!==l.getPriority().val()&&(o=o.updatePriority(new Y(r))),l.forEachChild(oe,(c,d)=>{const f=Ls(d,e.getImmediateChild(c),t);f!==d&&(o=o.updateImmediateChild(c,f))}),o}}/**
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
 */class Ms{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function xs(n,e){let t=e instanceof z?e:new z(e),i=n,r=L(t);for(;r!==null;){const o=It(i.node.children,r)||{children:{},childCount:0};i=new Ms(r,i,o),t=$(t),r=L(t)}return i}function bt(n){return n.node.value}function rl(n,e){n.node.value=e,us(n)}function ol(n){return n.node.childCount>0}function zd(n){return bt(n)===void 0&&!ol(n)}function ai(n,e){me(n.node.children,(t,i)=>{e(new Ms(t,n,i))})}function al(n,e,t,i){t&&!i&&e(n),ai(n,r=>{al(r,e,!0,i)}),t&&i&&e(n)}function Gd(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function gn(n){return new z(n.parent===null?n.name:gn(n.parent)+"/"+n.name)}function us(n){n.parent!==null&&Kd(n.parent,n.name,n)}function Kd(n,e,t){const i=zd(t),r=Me(n.node.children,e);i&&r?(delete n.node.children[e],n.node.childCount--,us(n)):!i&&!r&&(n.node.children[e]=t.node,n.node.childCount++,us(n))}/**
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
 */const qd=/[\[\].#$\/\u0000-\u001F\u007F]/,Yd=/[\[\].#$\u0000-\u001F\u007F]/,zi=10*1024*1024,ll=function(n){return typeof n=="string"&&n.length!==0&&!qd.test(n)},Xd=function(n){return typeof n=="string"&&n.length!==0&&!Yd.test(n)},Jd=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Xd(n)},hl=function(n,e,t){const i=t instanceof z?new ku(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Qe(i));if(typeof e=="function")throw new Error(n+"contains a function "+Qe(i)+" with contents = "+e.toString());if(aa(e))throw new Error(n+"contains "+e.toString()+" "+Qe(i));if(typeof e=="string"&&e.length>zi/3&&ni(e)>zi)throw new Error(n+"contains a string greater than "+zi+" utf8 bytes "+Qe(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,o=!1;if(me(e,(l,c)=>{if(l===".value")r=!0;else if(l!==".priority"&&l!==".sv"&&(o=!0,!ll(l)))throw new Error(n+" contains an invalid key ("+l+") "+Qe(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Pu(i,l),hl(n,c,i),Ou(i)}),r&&o)throw new Error(n+' contains ".value" child '+Qe(i)+" in addition to actual children.")}},Qd=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ll(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Jd(t))throw new Error(jh(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Zd{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ef(n,e){let t=null;for(let i=0;i<e.length;i++){const r=e[i],o=r.getPath();t!==null&&!Pa(o,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:o}),t.events.push(r)}t&&n.eventLists_.push(t)}function at(n,e,t){ef(n,t),tf(n,i=>Te(i,e)||Te(e,i))}function tf(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const r=n.eventLists_[i];if(r){const o=r.path;e(o)?(nf(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function nf(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();tt&&se("event: "+t.toString()),pn(i)}}}/**
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
 */const sf="repo_interrupt",rf=25;class of{constructor(e,t,i,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Zd,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Kn(),this.transactionQueueTree_=new Ms,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function af(n,e,t){if(n.stats_=Ts(n.repoInfo_),n.forceRestClient_||tu())n.server_=new Gn(n.repoInfo_,(i,r,o,l)=>{bo(n,i,r,o,l)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Ro(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Z(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Oe(n.repoInfo_,e,(i,r,o,l)=>{bo(n,i,r,o,l)},i=>{Ro(n,i)},i=>{hf(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=ou(n.repoInfo_,()=>new rd(n.stats_,n.server_)),n.infoData_=new ed,n.infoSyncTree_=new So({startListening:(i,r,o,l)=>{let c=[];const d=n.infoData_.getNode(i._path);return d.isEmpty()||(c=ri(n.infoSyncTree_,i._path,d),setTimeout(()=>{l("ok")},0)),c},stopListening:()=>{}}),Us(n,"connected",!1),n.serverSyncTree_=new So({startListening:(i,r,o,l)=>(n.server_.listen(i,o,r,(c,d)=>{const f=l(c,d);at(n.eventQueue_,i._path,f)}),[]),stopListening:(i,r)=>{n.server_.unlisten(i,r)}})}function lf(n){const t=n.infoData_.getNode(new z(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function cl(n){return Bd({timestamp:lf(n)})}function bo(n,e,t,i,r){n.dataUpdateCount++;const o=new z(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let l=[];if(r)if(i){const d=jn(t,f=>re(f));l=Hd(n.serverSyncTree_,o,d,r)}else{const d=re(t);l=Fd(n.serverSyncTree_,o,d,r)}else if(i){const d=jn(t,f=>re(f));l=Ud(n.serverSyncTree_,o,d)}else{const d=re(t);l=ri(n.serverSyncTree_,o,d)}let c=o;l.length>0&&(c=Hs(n,o)),at(n.eventQueue_,c,l)}function Ro(n,e){Us(n,"connected",e),e===!1&&uf(n)}function hf(n,e){me(e,(t,i)=>{Us(n,t,i)})}function Us(n,e,t){const i=new z("/.info/"+e),r=re(t);n.infoData_.updateSnapshot(i,r);const o=ri(n.infoSyncTree_,i,r);at(n.eventQueue_,i,o)}function cf(n){return n.nextWriteId_++}function uf(n){ul(n,"onDisconnectEvents");const e=cl(n),t=Kn();ss(n.onDisconnect_,B(),(r,o)=>{const l=Wd(r,o,n.serverSyncTree_,e);Fa(t,r,l)});let i=[];ss(t,B(),(r,o)=>{i=i.concat(ri(n.serverSyncTree_,r,o));const l=_f(n,r);Hs(n,l)}),n.onDisconnect_=Kn(),at(n.eventQueue_,B(),i)}function df(n){n.persistentConnection_&&n.persistentConnection_.interrupt(sf)}function ul(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),se(t,...e)}function dl(n,e,t){return Za(n.serverSyncTree_,e,t)||H.EMPTY_NODE}function Fs(n,e=n.transactionQueueTree_){if(e||li(n,e),bt(e)){const t=pl(n,e);b(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&ff(n,gn(e),t)}else ol(e)&&ai(e,t=>{Fs(n,t)})}function ff(n,e,t){const i=t.map(f=>f.currentWriteId),r=dl(n,e,i);let o=r;const l=r.hash();for(let f=0;f<t.length;f++){const C=t[f];b(C.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),C.status=1,C.retryCount++;const T=ge(e,C.path);o=o.updateChild(T,C.currentOutputSnapshotRaw)}const c=o.val(!0),d=e;n.server_.put(d.toString(),c,f=>{ul(n,"transaction put response",{path:d.toString(),status:f});let C=[];if(f==="ok"){const T=[];for(let S=0;S<t.length;S++)t[S].status=2,C=C.concat(_t(n.serverSyncTree_,t[S].currentWriteId)),t[S].onComplete&&T.push(()=>t[S].onComplete(null,!0,t[S].currentOutputSnapshotResolved)),t[S].unwatcher();li(n,xs(n.transactionQueueTree_,e)),Fs(n,n.transactionQueueTree_),at(n.eventQueue_,e,C);for(let S=0;S<T.length;S++)pn(T[S])}else{if(f==="datastale")for(let T=0;T<t.length;T++)t[T].status===3?t[T].status=4:t[T].status=0;else{pe("transaction at "+d.toString()+" failed: "+f);for(let T=0;T<t.length;T++)t[T].status=4,t[T].abortReason=f}Hs(n,e)}},l)}function Hs(n,e){const t=fl(n,e),i=gn(t),r=pl(n,t);return pf(n,r,i),i}function pf(n,e,t){if(e.length===0)return;const i=[];let r=[];const l=e.filter(c=>c.status===0).map(c=>c.currentWriteId);for(let c=0;c<e.length;c++){const d=e[c],f=ge(t,d.path);let C=!1,T;if(b(f!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),d.status===4)C=!0,T=d.abortReason,r=r.concat(_t(n.serverSyncTree_,d.currentWriteId,!0));else if(d.status===0)if(d.retryCount>=rf)C=!0,T="maxretry",r=r.concat(_t(n.serverSyncTree_,d.currentWriteId,!0));else{const S=dl(n,d.path,l);d.currentInputSnapshot=S;const N=e[c].update(S.val());if(N!==void 0){hl("transaction failed: Data returned ",N,d.path);let R=re(N);typeof N=="object"&&N!=null&&Me(N,".priority")||(R=R.updatePriority(S.getPriority()));const k=d.currentWriteId,ue=cl(n),q=$d(R,S,ue);d.currentOutputSnapshotRaw=R,d.currentOutputSnapshotResolved=q,d.currentWriteId=cf(n),l.splice(l.indexOf(k),1),r=r.concat(xd(n.serverSyncTree_,d.path,q,d.currentWriteId,d.applyLocally)),r=r.concat(_t(n.serverSyncTree_,k,!0))}else C=!0,T="nodata",r=r.concat(_t(n.serverSyncTree_,d.currentWriteId,!0))}at(n.eventQueue_,t,r),r=[],C&&(e[c].status=2,function(S){setTimeout(S,Math.floor(0))}(e[c].unwatcher),e[c].onComplete&&(T==="nodata"?i.push(()=>e[c].onComplete(null,!1,e[c].currentInputSnapshot)):i.push(()=>e[c].onComplete(new Error(T),!1,null))))}li(n,n.transactionQueueTree_);for(let c=0;c<i.length;c++)pn(i[c]);Fs(n,n.transactionQueueTree_)}function fl(n,e){let t,i=n.transactionQueueTree_;for(t=L(e);t!==null&&bt(i)===void 0;)i=xs(i,t),e=$(e),t=L(e);return i}function pl(n,e){const t=[];return _l(n,e,t),t.sort((i,r)=>i.order-r.order),t}function _l(n,e,t){const i=bt(e);if(i)for(let r=0;r<i.length;r++)t.push(i[r]);ai(e,r=>{_l(n,r,t)})}function li(n,e){const t=bt(e);if(t){let i=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[i]=t[r],i++);t.length=i,rl(e,t.length>0?t:void 0)}ai(e,i=>{li(n,i)})}function _f(n,e){const t=gn(fl(n,e)),i=xs(n.transactionQueueTree_,e);return Gd(i,r=>{Gi(n,r)}),Gi(n,i),al(i,r=>{Gi(n,r)}),t}function Gi(n,e){const t=bt(e);if(t){const i=[];let r=[],o=-1;for(let l=0;l<t.length;l++)t[l].status===3||(t[l].status===1?(b(o===l-1,"All SENT items should be at beginning of queue."),o=l,t[l].status=3,t[l].abortReason="set"):(b(t[l].status===0,"Unexpected transaction status in abort"),t[l].unwatcher(),r=r.concat(_t(n.serverSyncTree_,t[l].currentWriteId,!0)),t[l].onComplete&&i.push(t[l].onComplete.bind(null,new Error("set"),!1,null))));o===-1?rl(e,void 0):t.length=o+1,at(n.eventQueue_,gn(e),r);for(let l=0;l<i.length;l++)pn(i[l])}}/**
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
 */function gf(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let r=t[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function mf(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):pe(`Invalid query segment '${t}' in query '${n}'`)}return e}const No=function(n,e){const t=yf(n),i=t.namespace;t.domain==="firebase.com"&&Le(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Le("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Kc();const r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new va(t.host,t.secure,i,r,e,"",i!==t.subdomain),path:new z(t.pathString)}},yf=function(n){let e="",t="",i="",r="",o="",l=!0,c="https",d=443;if(typeof n=="string"){let f=n.indexOf("//");f>=0&&(c=n.substring(0,f-1),n=n.substring(f+2));let C=n.indexOf("/");C===-1&&(C=n.length);let T=n.indexOf("?");T===-1&&(T=n.length),e=n.substring(0,Math.min(C,T)),C<T&&(r=gf(n.substring(C,T)));const S=mf(n.substring(Math.min(n.length,T)));f=e.indexOf(":"),f>=0?(l=c==="https"||c==="wss",d=parseInt(e.substring(f+1),10)):f=e.length;const N=e.slice(0,f);if(N.toLowerCase()==="localhost")t="localhost";else if(N.split(".").length<=2)t=N;else{const R=e.indexOf(".");i=e.substring(0,R).toLowerCase(),t=e.substring(R+1),o=i}"ns"in S&&(o=S.ns)}return{host:e,port:d,domain:t,subdomain:i,secure:l,scheme:c,pathString:r,namespace:o}};/**
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
 */class Bs{constructor(e,t,i,r){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=r}get key(){return O(this._path)?null:Ra(this._path)}get ref(){return new Rt(this._repo,this._path)}get _queryIdentifier(){const e=po(this._queryParams),t=Es(e);return t==="{}"?"default":t}get _queryObject(){return po(this._queryParams)}isEqual(e){if(e=St(e),!(e instanceof Bs))return!1;const t=this._repo===e._repo,i=Pa(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+Nu(this._path)}}class Rt extends Bs{constructor(e,t){super(e,t,new As,!1)}get parent(){const e=ka(this._path);return e===null?null:new Rt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}Ld(Rt);Md(Rt);/**
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
 */const vf="FIREBASE_DATABASE_EMULATOR_HOST",ds={};let Ef=!1;function If(n,e,t,i){n.repoInfo_=new va(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function Tf(n,e,t,i,r){let o=i||n.options.databaseURL;o===void 0&&(n.options.projectId||Le("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),se("Using default host for project ",n.options.projectId),o=`${n.options.projectId}-default-rtdb.firebaseio.com`);let l=No(o,r),c=l.repoInfo,d,f;typeof process<"u"&&process.env&&(f=process.env[vf]),f?(d=!0,o=`http://${f}?ns=${c.namespace}`,l=No(o,r),c=l.repoInfo):d=!l.repoInfo.secure;const C=r&&d?new mt(mt.OWNER):new iu(n.name,n.options,e);Qd("Invalid Firebase Database URL",l),O(l.path)||Le("Database URL must point to the root of a Firebase Database (not including a child path).");const T=Cf(c,n,C,new nu(n.name,t));return new Sf(T,n)}function wf(n,e){const t=ds[e];(!t||t[n.key]!==n)&&Le(`Database ${e}(${n.repoInfo_}) has already been deleted.`),df(n),delete t[n.key]}function Cf(n,e,t,i){let r=ds[e.name];r||(r={},ds[e.name]=r);let o=r[n.toURLString()];return o&&Le("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new of(n,Ef,t,i),r[n.toURLString()]=o,o}class Sf{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(af(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Rt(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&(wf(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Le("Cannot call "+e+" on a deleted database.")}}function Cp(n=Oc(),e){const t=Rc(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Sh("database");i&&Af(t,...i)}return t}function Af(n,e,t,i={}){n=St(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Le("Cannot call useEmulator() after instance has already been initialized.");const r=n._repoInternal;let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&Le('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new mt(mt.OWNER);else if(i.mockUserToken){const l=typeof i.mockUserToken=="string"?i.mockUserToken:bh(i.mockUserToken,n.app.options.projectId);o=new mt(l)}If(r,e,t,o)}/**
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
 */function bf(n){Vc(un),nt(new $e("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return Tf(i,r,o,t)},"PUBLIC").setMultipleInstances(!0)),Pe(Yr,Xr,n),Pe(Yr,Xr,"esm2017")}Oe.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Oe.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};bf();function gl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rf=gl,ml=new cn("auth","Firebase",gl());/**
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
 */const Jn=new ii("@firebase/auth");function Nf(n,...e){Jn.logLevel<=F.WARN&&Jn.warn(`Auth (${un}): ${n}`,...e)}function Un(n,...e){Jn.logLevel<=F.ERROR&&Jn.error(`Auth (${un}): ${n}`,...e)}/**
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
 */function ko(n,...e){throw js(n,...e)}function yl(n,...e){return js(n,...e)}function vl(n,e,t){const i=Object.assign(Object.assign({},Rf()),{[e]:t});return new cn("auth","Firebase",i).create(e,{appName:n.name})}function Fn(n){return vl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function js(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return ml.create(n,...e)}function U(n,e,...t){if(!n)throw js(e,...t)}function tn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Un(e),new Error(e)}function Qn(n,e){n||tn(e)}function kf(){return Po()==="http:"||Po()==="https:"}function Po(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Pf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kf()||Nh()||"connection"in navigator)?navigator.onLine:!0}function Of(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class mn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Qn(t>e,"Short delay should be less than long delay!"),this.isMobile=ys()||Zo()}get(){return Pf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Df(n,e){Qn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class El{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Lf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Mf=new mn(3e4,6e4);function Il(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function hi(n,e,t,i,r={}){return Tl(n,r,async()=>{let o={},l={};i&&(e==="GET"?l=i:o={body:JSON.stringify(i)});const c=vs(Object.assign({key:n.config.apiKey},l)).slice(1),d=await n._getAdditionalHeaders();d["Content-Type"]="application/json",n.languageCode&&(d["X-Firebase-Locale"]=n.languageCode);const f=Object.assign({method:e,headers:d},o);return Rh()||(f.referrerPolicy="no-referrer"),El.fetch()(wl(n,n.config.apiHost,t,c),f)})}async function Tl(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Lf),e);try{const r=new xf(n),o=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const l=await o.json();if("needConfirmation"in l)throw Mn(n,"account-exists-with-different-credential",l);if(o.ok&&!("errorMessage"in l))return l;{const c=o.ok?l.errorMessage:l.error.message,[d,f]=c.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mn(n,"credential-already-in-use",l);if(d==="EMAIL_EXISTS")throw Mn(n,"email-already-in-use",l);if(d==="USER_DISABLED")throw Mn(n,"user-disabled",l);const C=i[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw vl(n,C,f);ko(n,C)}}catch(r){if(r instanceof Ge)throw r;ko(n,"network-request-failed",{message:String(r)})}}function wl(n,e,t,i){const r=`${e}${t}?${i}`;return n.config.emulator?Df(n.config,r):`${n.config.apiScheme}://${r}`}class xf{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(yl(this.auth,"network-request-failed")),Mf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Mn(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=yl(n,e,i);return r.customData._tokenResponse=t,r}/**
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
 */async function Uf(n,e){return hi(n,"POST","/v1/accounts:delete",e)}async function Cl(n,e){return hi(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function nn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ff(n,e=!1){const t=St(n),i=await t.getIdToken(e),r=Sl(i);U(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const o=typeof r.firebase=="object"?r.firebase:void 0,l=o==null?void 0:o.sign_in_provider;return{claims:r,token:i,authTime:nn(Ki(r.auth_time)),issuedAtTime:nn(Ki(r.iat)),expirationTime:nn(Ki(r.exp)),signInProvider:l||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ki(n){return Number(n)*1e3}function Sl(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Un("JWT malformed, contained fewer than 3 sections"),null;try{const r=Bn(t);return r?JSON.parse(r):(Un("Failed to decode base64 JWT payload"),null)}catch(r){return Un("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Oo(n){const e=Sl(n);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function fs(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Ge&&Hf(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Hf({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Bf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ps{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=nn(this.lastLoginAt),this.creationTime=nn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Zn(n){var e;const t=n.auth,i=await n.getIdToken(),r=await fs(n,Cl(t,{idToken:i}));U(r==null?void 0:r.users.length,t,"internal-error");const o=r.users[0];n._notifyReloadListener(o);const l=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Al(o.providerUserInfo):[],c=Vf(n.providerData,l),d=n.isAnonymous,f=!(n.email&&o.passwordHash)&&!(c!=null&&c.length),C=d?f:!1,T={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new ps(o.createdAt,o.lastLoginAt),isAnonymous:C};Object.assign(n,T)}async function jf(n){const e=St(n);await Zn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Vf(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Al(n){return n.map(e=>{var{providerId:t}=e,i=Ko(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Wf(n,e){const t=await Tl(n,{},async()=>{const i=vs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:o}=n.config,l=wl(n,r,"/v1/token",`key=${o}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",El.fetch()(l,{method:"POST",headers:c,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function $f(n,e){return hi(n,"POST","/v2/accounts:revokeToken",Il(n,e))}/**
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
 */class vt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Oo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){U(e.length!==0,"internal-error");const t=Oo(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:o}=await Wf(e,t);this.updateTokensAndExpiration(i,r,Number(o))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:o}=t,l=new vt;return i&&(U(typeof i=="string","internal-error",{appName:e}),l.refreshToken=i),r&&(U(typeof r=="string","internal-error",{appName:e}),l.accessToken=r),o&&(U(typeof o=="number","internal-error",{appName:e}),l.expirationTime=o),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vt,this.toJSON())}_performRefresh(){return tn("not implemented")}}/**
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
 */function Be(n,e){U(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class je{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,o=Ko(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Bf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ps(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await fs(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ff(this,e)}reload(){return jf(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new je(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Zn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jt(this.auth.app))return Promise.reject(Fn(this.auth));const e=await this.getIdToken();return await fs(this,Uf(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,o,l,c,d,f,C;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,S=(r=t.email)!==null&&r!==void 0?r:void 0,N=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,R=(l=t.photoURL)!==null&&l!==void 0?l:void 0,P=(c=t.tenantId)!==null&&c!==void 0?c:void 0,k=(d=t._redirectEventId)!==null&&d!==void 0?d:void 0,ue=(f=t.createdAt)!==null&&f!==void 0?f:void 0,q=(C=t.lastLoginAt)!==null&&C!==void 0?C:void 0,{uid:K,emailVerified:de,isAnonymous:Ke,providerData:he,stsTokenManager:E}=t;U(K&&E,e,"internal-error");const p=vt.fromJSON(this.name,E);U(typeof K=="string",e,"internal-error"),Be(T,e.name),Be(S,e.name),U(typeof de=="boolean",e,"internal-error"),U(typeof Ke=="boolean",e,"internal-error"),Be(N,e.name),Be(R,e.name),Be(P,e.name),Be(k,e.name),Be(ue,e.name),Be(q,e.name);const g=new je({uid:K,auth:e,email:S,emailVerified:de,displayName:T,isAnonymous:Ke,photoURL:R,phoneNumber:N,tenantId:P,stsTokenManager:p,createdAt:ue,lastLoginAt:q});return he&&Array.isArray(he)&&(g.providerData=he.map(m=>Object.assign({},m))),k&&(g._redirectEventId=k),g}static async _fromIdTokenResponse(e,t,i=!1){const r=new vt;r.updateFromServerResponse(t);const o=new je({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Zn(o),o}static async _fromGetAccountInfoResponse(e,t,i){const r=t.users[0];U(r.localId!==void 0,"internal-error");const o=r.providerUserInfo!==void 0?Al(r.providerUserInfo):[],l=!(r.email&&r.passwordHash)&&!(o!=null&&o.length),c=new vt;c.updateFromIdToken(i);const d=new je({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:l}),f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new ps(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(o!=null&&o.length)};return Object.assign(d,f),d}}/**
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
 */const Do=new Map;function et(n){Qn(n instanceof Function,"Expected a class definition");let e=Do.get(n);return e?(Qn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Do.set(n,e),e)}/**
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
 */class bl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}bl.type="NONE";const Lo=bl;/**
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
 */function qi(n,e,t){return`firebase:${n}:${e}:${t}`}class Et{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:o}=this.auth;this.fullUserKey=qi(this.userKey,r.apiKey,o),this.fullPersistenceKey=qi("persistence",r.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?je._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Et(et(Lo),e,i);const r=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=r[0]||et(Lo);const l=qi(i,e.config.apiKey,e.name);let c=null;for(const f of t)try{const C=await f._get(l);if(C){const T=je._fromJSON(e,C);f!==o&&(c=T),o=f;break}}catch{}const d=r.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!d.length?new Et(o,e,i):(o=d[0],c&&await o._set(l,c.toJSON()),await Promise.all(t.map(async f=>{if(f!==o)try{await f._remove(l)}catch{}})),new Et(o,e,i))}}/**
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
 */function Mo(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xf(e))return"Blackberry";if(Jf(e))return"Webos";if(Gf(e))return"Safari";if((e.includes("chrome/")||Kf(e))&&!e.includes("edge/"))return"Chrome";if(Yf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function zf(n=Ae()){return/firefox\//i.test(n)}function Gf(n=Ae()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kf(n=Ae()){return/crios\//i.test(n)}function qf(n=Ae()){return/iemobile/i.test(n)}function Yf(n=Ae()){return/android/i.test(n)}function Xf(n=Ae()){return/blackberry/i.test(n)}function Jf(n=Ae()){return/webos/i.test(n)}/**
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
 */function Rl(n,e=[]){let t;switch(n){case"Browser":t=Mo(Ae());break;case"Worker":t=`${Mo(Ae())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${un}/${i}`}/**
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
 */class Qf{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=o=>new Promise((l,c)=>{try{const d=e(o);l(d)}catch(d){c(d)}});i.onAbort=t,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function Zf(n,e={}){return hi(n,"GET","/v2/passwordPolicy",Il(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const ep=6;class tp{constructor(e){var t,i,r,o;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=l.minPasswordLength)!==null&&t!==void 0?t:ep,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,r,o,l,c;const d={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,d),this.validatePasswordCharacterOptions(e,d),d.isValid&&(d.isValid=(t=d.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),d.isValid&&(d.isValid=(i=d.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),d.isValid&&(d.isValid=(r=d.containsLowercaseLetter)!==null&&r!==void 0?r:!0),d.isValid&&(d.isValid=(o=d.containsUppercaseLetter)!==null&&o!==void 0?o:!0),d.isValid&&(d.isValid=(l=d.containsNumericCharacter)!==null&&l!==void 0?l:!0),d.isValid&&(d.isValid=(c=d.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),d}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,r,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class np{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xo(this),this.idTokenSubscription=new xo(this),this.beforeStateQueue=new Qf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ml,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=et(t)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Et.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Cl(this,{idToken:e}),i=await je._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Jt(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=r==null?void 0:r._redirectEventId,d=await this.tryRedirectSignIn(e);(!l||l===c)&&(d!=null&&d.user)&&(r=d.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(l){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Zn(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Of()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jt(this.app))return Promise.reject(Fn(this));const t=e?St(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jt(this.app)?Promise.reject(Fn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jt(this.app)?Promise.reject(Fn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(et(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Zf(this),t=new tp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new cn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await $f(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&et(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await Et.create(this,[et(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let l=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(c,this,"internal-error"),c.then(()=>{l||o(this.currentUser)}),typeof t=="function"){const d=e.addObserver(t,i,r);return()=>{l=!0,d()}}else{const d=e.addObserver(t);return()=>{l=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Nf(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ip(n){return St(n)}class xo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fh(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function sp(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(et);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}new mn(3e4,6e4);/**
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
 */new mn(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
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
 */new mn(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
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
 */new mn(5e3,15e3);var Uo="@firebase/auth",Fo="1.7.9";/**
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
 */class rp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function op(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ap(n){nt(new $e("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:l,authDomain:c}=i.options;U(l&&!l.includes(":"),"invalid-api-key",{appName:i.name});const d={apiKey:l,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rl(n)},f=new np(i,r,o,d);return sp(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),nt(new $e("auth-internal",e=>{const t=ip(e.getProvider("auth").getImmediate());return(i=>new rp(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pe(Uo,Fo,op(n)),Pe(Uo,Fo,"esm2017")}/**
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
 */const lp=5*60;Ah("authIdTokenMaxAge");ap("Browser");var Ho=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,p){function g(){}g.prototype=p.prototype,E.D=p.prototype,E.prototype=new g,E.prototype.constructor=E,E.C=function(m,y,I){for(var _=Array(arguments.length-2),be=2;be<arguments.length;be++)_[be-2]=arguments[be];return p.prototype[y].apply(m,_)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(E,p,g){g||(g=0);var m=Array(16);if(typeof p=="string")for(var y=0;16>y;++y)m[y]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(y=0;16>y;++y)m[y]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=E.g[0],g=E.g[1],y=E.g[2];var I=E.g[3],_=p+(I^g&(y^I))+m[0]+3614090360&4294967295;p=g+(_<<7&4294967295|_>>>25),_=I+(y^p&(g^y))+m[1]+3905402710&4294967295,I=p+(_<<12&4294967295|_>>>20),_=y+(g^I&(p^g))+m[2]+606105819&4294967295,y=I+(_<<17&4294967295|_>>>15),_=g+(p^y&(I^p))+m[3]+3250441966&4294967295,g=y+(_<<22&4294967295|_>>>10),_=p+(I^g&(y^I))+m[4]+4118548399&4294967295,p=g+(_<<7&4294967295|_>>>25),_=I+(y^p&(g^y))+m[5]+1200080426&4294967295,I=p+(_<<12&4294967295|_>>>20),_=y+(g^I&(p^g))+m[6]+2821735955&4294967295,y=I+(_<<17&4294967295|_>>>15),_=g+(p^y&(I^p))+m[7]+4249261313&4294967295,g=y+(_<<22&4294967295|_>>>10),_=p+(I^g&(y^I))+m[8]+1770035416&4294967295,p=g+(_<<7&4294967295|_>>>25),_=I+(y^p&(g^y))+m[9]+2336552879&4294967295,I=p+(_<<12&4294967295|_>>>20),_=y+(g^I&(p^g))+m[10]+4294925233&4294967295,y=I+(_<<17&4294967295|_>>>15),_=g+(p^y&(I^p))+m[11]+2304563134&4294967295,g=y+(_<<22&4294967295|_>>>10),_=p+(I^g&(y^I))+m[12]+1804603682&4294967295,p=g+(_<<7&4294967295|_>>>25),_=I+(y^p&(g^y))+m[13]+4254626195&4294967295,I=p+(_<<12&4294967295|_>>>20),_=y+(g^I&(p^g))+m[14]+2792965006&4294967295,y=I+(_<<17&4294967295|_>>>15),_=g+(p^y&(I^p))+m[15]+1236535329&4294967295,g=y+(_<<22&4294967295|_>>>10),_=p+(y^I&(g^y))+m[1]+4129170786&4294967295,p=g+(_<<5&4294967295|_>>>27),_=I+(g^y&(p^g))+m[6]+3225465664&4294967295,I=p+(_<<9&4294967295|_>>>23),_=y+(p^g&(I^p))+m[11]+643717713&4294967295,y=I+(_<<14&4294967295|_>>>18),_=g+(I^p&(y^I))+m[0]+3921069994&4294967295,g=y+(_<<20&4294967295|_>>>12),_=p+(y^I&(g^y))+m[5]+3593408605&4294967295,p=g+(_<<5&4294967295|_>>>27),_=I+(g^y&(p^g))+m[10]+38016083&4294967295,I=p+(_<<9&4294967295|_>>>23),_=y+(p^g&(I^p))+m[15]+3634488961&4294967295,y=I+(_<<14&4294967295|_>>>18),_=g+(I^p&(y^I))+m[4]+3889429448&4294967295,g=y+(_<<20&4294967295|_>>>12),_=p+(y^I&(g^y))+m[9]+568446438&4294967295,p=g+(_<<5&4294967295|_>>>27),_=I+(g^y&(p^g))+m[14]+3275163606&4294967295,I=p+(_<<9&4294967295|_>>>23),_=y+(p^g&(I^p))+m[3]+4107603335&4294967295,y=I+(_<<14&4294967295|_>>>18),_=g+(I^p&(y^I))+m[8]+1163531501&4294967295,g=y+(_<<20&4294967295|_>>>12),_=p+(y^I&(g^y))+m[13]+2850285829&4294967295,p=g+(_<<5&4294967295|_>>>27),_=I+(g^y&(p^g))+m[2]+4243563512&4294967295,I=p+(_<<9&4294967295|_>>>23),_=y+(p^g&(I^p))+m[7]+1735328473&4294967295,y=I+(_<<14&4294967295|_>>>18),_=g+(I^p&(y^I))+m[12]+2368359562&4294967295,g=y+(_<<20&4294967295|_>>>12),_=p+(g^y^I)+m[5]+4294588738&4294967295,p=g+(_<<4&4294967295|_>>>28),_=I+(p^g^y)+m[8]+2272392833&4294967295,I=p+(_<<11&4294967295|_>>>21),_=y+(I^p^g)+m[11]+1839030562&4294967295,y=I+(_<<16&4294967295|_>>>16),_=g+(y^I^p)+m[14]+4259657740&4294967295,g=y+(_<<23&4294967295|_>>>9),_=p+(g^y^I)+m[1]+2763975236&4294967295,p=g+(_<<4&4294967295|_>>>28),_=I+(p^g^y)+m[4]+1272893353&4294967295,I=p+(_<<11&4294967295|_>>>21),_=y+(I^p^g)+m[7]+4139469664&4294967295,y=I+(_<<16&4294967295|_>>>16),_=g+(y^I^p)+m[10]+3200236656&4294967295,g=y+(_<<23&4294967295|_>>>9),_=p+(g^y^I)+m[13]+681279174&4294967295,p=g+(_<<4&4294967295|_>>>28),_=I+(p^g^y)+m[0]+3936430074&4294967295,I=p+(_<<11&4294967295|_>>>21),_=y+(I^p^g)+m[3]+3572445317&4294967295,y=I+(_<<16&4294967295|_>>>16),_=g+(y^I^p)+m[6]+76029189&4294967295,g=y+(_<<23&4294967295|_>>>9),_=p+(g^y^I)+m[9]+3654602809&4294967295,p=g+(_<<4&4294967295|_>>>28),_=I+(p^g^y)+m[12]+3873151461&4294967295,I=p+(_<<11&4294967295|_>>>21),_=y+(I^p^g)+m[15]+530742520&4294967295,y=I+(_<<16&4294967295|_>>>16),_=g+(y^I^p)+m[2]+3299628645&4294967295,g=y+(_<<23&4294967295|_>>>9),_=p+(y^(g|~I))+m[0]+4096336452&4294967295,p=g+(_<<6&4294967295|_>>>26),_=I+(g^(p|~y))+m[7]+1126891415&4294967295,I=p+(_<<10&4294967295|_>>>22),_=y+(p^(I|~g))+m[14]+2878612391&4294967295,y=I+(_<<15&4294967295|_>>>17),_=g+(I^(y|~p))+m[5]+4237533241&4294967295,g=y+(_<<21&4294967295|_>>>11),_=p+(y^(g|~I))+m[12]+1700485571&4294967295,p=g+(_<<6&4294967295|_>>>26),_=I+(g^(p|~y))+m[3]+2399980690&4294967295,I=p+(_<<10&4294967295|_>>>22),_=y+(p^(I|~g))+m[10]+4293915773&4294967295,y=I+(_<<15&4294967295|_>>>17),_=g+(I^(y|~p))+m[1]+2240044497&4294967295,g=y+(_<<21&4294967295|_>>>11),_=p+(y^(g|~I))+m[8]+1873313359&4294967295,p=g+(_<<6&4294967295|_>>>26),_=I+(g^(p|~y))+m[15]+4264355552&4294967295,I=p+(_<<10&4294967295|_>>>22),_=y+(p^(I|~g))+m[6]+2734768916&4294967295,y=I+(_<<15&4294967295|_>>>17),_=g+(I^(y|~p))+m[13]+1309151649&4294967295,g=y+(_<<21&4294967295|_>>>11),_=p+(y^(g|~I))+m[4]+4149444226&4294967295,p=g+(_<<6&4294967295|_>>>26),_=I+(g^(p|~y))+m[11]+3174756917&4294967295,I=p+(_<<10&4294967295|_>>>22),_=y+(p^(I|~g))+m[2]+718787259&4294967295,y=I+(_<<15&4294967295|_>>>17),_=g+(I^(y|~p))+m[9]+3951481745&4294967295,E.g[0]=E.g[0]+p&4294967295,E.g[1]=E.g[1]+(y+(_<<21&4294967295|_>>>11))&4294967295,E.g[2]=E.g[2]+y&4294967295,E.g[3]=E.g[3]+I&4294967295}i.prototype.u=function(E,p){p===void 0&&(p=E.length);for(var g=p-this.blockSize,m=this.B,y=this.h,I=0;I<p;){if(y==0)for(;I<=g;)r(this,E,I),I+=this.blockSize;if(typeof E=="string"){for(;I<p;)if(m[y++]=E.charCodeAt(I++),y==this.blockSize){r(this,m),y=0;break}}else for(;I<p;)if(m[y++]=E[I++],y==this.blockSize){r(this,m),y=0;break}}this.h=y,this.o+=p},i.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var p=1;p<E.length-8;++p)E[p]=0;var g=8*this.o;for(p=E.length-8;p<E.length;++p)E[p]=g&255,g/=256;for(this.u(E),E=Array(16),p=g=0;4>p;++p)for(var m=0;32>m;m+=8)E[g++]=this.g[p]>>>m&255;return E};function o(E,p){var g=c;return Object.prototype.hasOwnProperty.call(g,E)?g[E]:g[E]=p(E)}function l(E,p){this.h=p;for(var g=[],m=!0,y=E.length-1;0<=y;y--){var I=E[y]|0;m&&I==p||(g[y]=I,m=!1)}this.g=g}var c={};function d(E){return-128<=E&&128>E?o(E,function(p){return new l([p|0],0>p?-1:0)}):new l([E|0],0>E?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return T;if(0>E)return k(f(-E));for(var p=[],g=1,m=0;E>=g;m++)p[m]=E/g|0,g*=4294967296;return new l(p,0)}function C(E,p){if(E.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(E.charAt(0)=="-")return k(C(E.substring(1),p));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=f(Math.pow(p,8)),m=T,y=0;y<E.length;y+=8){var I=Math.min(8,E.length-y),_=parseInt(E.substring(y,y+I),p);8>I?(I=f(Math.pow(p,I)),m=m.j(I).add(f(_))):(m=m.j(g),m=m.add(f(_)))}return m}var T=d(0),S=d(1),N=d(16777216);n=l.prototype,n.m=function(){if(P(this))return-k(this).m();for(var E=0,p=1,g=0;g<this.g.length;g++){var m=this.i(g);E+=(0<=m?m:4294967296+m)*p,p*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(R(this))return"0";if(P(this))return"-"+k(this).toString(E);for(var p=f(Math.pow(E,6)),g=this,m="";;){var y=de(g,p).g;g=ue(g,y.j(p));var I=((0<g.g.length?g.g[0]:g.h)>>>0).toString(E);if(g=y,R(g))return I+m;for(;6>I.length;)I="0"+I;m=I+m}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function R(E){if(E.h!=0)return!1;for(var p=0;p<E.g.length;p++)if(E.g[p]!=0)return!1;return!0}function P(E){return E.h==-1}n.l=function(E){return E=ue(this,E),P(E)?-1:R(E)?0:1};function k(E){for(var p=E.g.length,g=[],m=0;m<p;m++)g[m]=~E.g[m];return new l(g,~E.h).add(S)}n.abs=function(){return P(this)?k(this):this},n.add=function(E){for(var p=Math.max(this.g.length,E.g.length),g=[],m=0,y=0;y<=p;y++){var I=m+(this.i(y)&65535)+(E.i(y)&65535),_=(I>>>16)+(this.i(y)>>>16)+(E.i(y)>>>16);m=_>>>16,I&=65535,_&=65535,g[y]=_<<16|I}return new l(g,g[g.length-1]&-2147483648?-1:0)};function ue(E,p){return E.add(k(p))}n.j=function(E){if(R(this)||R(E))return T;if(P(this))return P(E)?k(this).j(k(E)):k(k(this).j(E));if(P(E))return k(this.j(k(E)));if(0>this.l(N)&&0>E.l(N))return f(this.m()*E.m());for(var p=this.g.length+E.g.length,g=[],m=0;m<2*p;m++)g[m]=0;for(m=0;m<this.g.length;m++)for(var y=0;y<E.g.length;y++){var I=this.i(m)>>>16,_=this.i(m)&65535,be=E.i(y)>>>16,Nt=E.i(y)&65535;g[2*m+2*y]+=_*Nt,q(g,2*m+2*y),g[2*m+2*y+1]+=I*Nt,q(g,2*m+2*y+1),g[2*m+2*y+1]+=_*be,q(g,2*m+2*y+1),g[2*m+2*y+2]+=I*be,q(g,2*m+2*y+2)}for(m=0;m<p;m++)g[m]=g[2*m+1]<<16|g[2*m];for(m=p;m<2*p;m++)g[m]=0;return new l(g,0)};function q(E,p){for(;(E[p]&65535)!=E[p];)E[p+1]+=E[p]>>>16,E[p]&=65535,p++}function K(E,p){this.g=E,this.h=p}function de(E,p){if(R(p))throw Error("division by zero");if(R(E))return new K(T,T);if(P(E))return p=de(k(E),p),new K(k(p.g),k(p.h));if(P(p))return p=de(E,k(p)),new K(k(p.g),p.h);if(30<E.g.length){if(P(E)||P(p))throw Error("slowDivide_ only works with positive integers.");for(var g=S,m=p;0>=m.l(E);)g=Ke(g),m=Ke(m);var y=he(g,1),I=he(m,1);for(m=he(m,2),g=he(g,2);!R(m);){var _=I.add(m);0>=_.l(E)&&(y=y.add(g),I=_),m=he(m,1),g=he(g,1)}return p=ue(E,y.j(p)),new K(y,p)}for(y=T;0<=E.l(p);){for(g=Math.max(1,Math.floor(E.m()/p.m())),m=Math.ceil(Math.log(g)/Math.LN2),m=48>=m?1:Math.pow(2,m-48),I=f(g),_=I.j(p);P(_)||0<_.l(E);)g-=m,I=f(g),_=I.j(p);R(I)&&(I=S),y=y.add(I),E=ue(E,_)}return new K(y,E)}n.A=function(E){return de(this,E).h},n.and=function(E){for(var p=Math.max(this.g.length,E.g.length),g=[],m=0;m<p;m++)g[m]=this.i(m)&E.i(m);return new l(g,this.h&E.h)},n.or=function(E){for(var p=Math.max(this.g.length,E.g.length),g=[],m=0;m<p;m++)g[m]=this.i(m)|E.i(m);return new l(g,this.h|E.h)},n.xor=function(E){for(var p=Math.max(this.g.length,E.g.length),g=[],m=0;m<p;m++)g[m]=this.i(m)^E.i(m);return new l(g,this.h^E.h)};function Ke(E){for(var p=E.g.length+1,g=[],m=0;m<p;m++)g[m]=E.i(m)<<1|E.i(m-1)>>>31;return new l(g,E.h)}function he(E,p){var g=p>>5;p%=32;for(var m=E.g.length-g,y=[],I=0;I<m;I++)y[I]=0<p?E.i(I+g)>>>p|E.i(I+g+1)<<32-p:E.i(I+g);return new l(y,E.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=f,l.fromString=C,Nl=l}).apply(typeof Ho<"u"?Ho:typeof self<"u"?self:typeof window<"u"?window:{});var xn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,h){return s==Array.prototype||s==Object.prototype||(s[a]=h.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof xn=="object"&&xn];for(var a=0;a<s.length;++a){var h=s[a];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var i=t(this);function r(s,a){if(a)e:{var h=i;s=s.split(".");for(var u=0;u<s.length-1;u++){var v=s[u];if(!(v in h))break e;h=h[v]}s=s[s.length-1],u=h[s],a=a(u),a!=u&&a!=null&&e(h,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var h=0,u=!1,v={next:function(){if(!u&&h<s.length){var w=h++;return{value:a(w,s[w]),done:!1}}return u=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}r("Array.prototype.values",function(s){return s||function(){return o(this,function(a,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function d(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function C(s,a,h){return s.call.apply(s.bind,arguments)}function T(s,a,h){if(!s)throw Error();if(2<arguments.length){var u=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,u),s.apply(a,v)}}return function(){return s.apply(a,arguments)}}function S(s,a,h){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?C:T,S.apply(null,arguments)}function N(s,a){var h=Array.prototype.slice.call(arguments,1);return function(){var u=h.slice();return u.push.apply(u,arguments),s.apply(this,u)}}function R(s,a){function h(){}h.prototype=a.prototype,s.aa=a.prototype,s.prototype=new h,s.prototype.constructor=s,s.Qb=function(u,v,w){for(var A=Array(arguments.length-2),j=2;j<arguments.length;j++)A[j-2]=arguments[j];return a.prototype[v].apply(u,A)}}function P(s){const a=s.length;if(0<a){const h=Array(a);for(let u=0;u<a;u++)h[u]=s[u];return h}return[]}function k(s,a){for(let h=1;h<arguments.length;h++){const u=arguments[h];if(d(u)){const v=s.length||0,w=u.length||0;s.length=v+w;for(let A=0;A<w;A++)s[v+A]=u[A]}else s.push(u)}}class ue{constructor(a,h){this.i=a,this.j=h,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function q(s){return/^[\s\xa0]*$/.test(s)}function K(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function de(s){return de[" "](s),s}de[" "]=function(){};var Ke=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function he(s,a,h){for(const u in s)a.call(h,s[u],u,s)}function E(s,a){for(const h in s)a.call(void 0,s[h],h,s)}function p(s){const a={};for(const h in s)a[h]=s[h];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function m(s,a){let h,u;for(let v=1;v<arguments.length;v++){u=arguments[v];for(h in u)s[h]=u[h];for(let w=0;w<g.length;w++)h=g[w],Object.prototype.hasOwnProperty.call(u,h)&&(s[h]=u[h])}}function y(s){var a=1;s=s.split(":");const h=[];for(;0<a&&s.length;)h.push(s.shift()),a--;return s.length&&h.push(s.join(":")),h}function I(s){c.setTimeout(()=>{throw s},0)}function _(){var s=ui;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class be{constructor(){this.h=this.g=null}add(a,h){const u=Nt.get();u.set(a,h),this.h?this.h.next=u:this.g=u,this.h=u}}var Nt=new ue(()=>new Dl,s=>s.reset());class Dl{constructor(){this.next=this.g=this.h=null}set(a,h){this.h=a,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let kt,Pt=!1,ui=new be,Ws=()=>{const s=c.Promise.resolve(void 0);kt=()=>{s.then(Ll)}};var Ll=()=>{for(var s;s=_();){try{s.h.call(s.g)}catch(h){I(h)}var a=Nt;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}Pt=!1};function xe(){this.s=this.s,this.C=this.C}xe.prototype.s=!1,xe.prototype.ma=function(){this.s||(this.s=!0,this.N())},xe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ee(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ee.prototype.h=function(){this.defaultPrevented=!0};var Ml=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const h=()=>{};c.addEventListener("test",h,a),c.removeEventListener("test",h,a)}catch{}return s}();function Ot(s,a){if(ee.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var h=this.type=s.type,u=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(Ke){e:{try{de(a.nodeName);var v=!0;break e}catch{}v=!1}v||(a=null)}}else h=="mouseover"?a=s.fromElement:h=="mouseout"&&(a=s.toElement);this.relatedTarget=a,u?(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:xl[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Ot.aa.h.call(this)}}R(Ot,ee);var xl={2:"touch",3:"pen",4:"mouse"};Ot.prototype.h=function(){Ot.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Dt="closure_listenable_"+(1e6*Math.random()|0),Ul=0;function Fl(s,a,h,u,v){this.listener=s,this.proxy=null,this.src=a,this.type=h,this.capture=!!u,this.ha=v,this.key=++Ul,this.da=this.fa=!1}function yn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function vn(s){this.src=s,this.g={},this.h=0}vn.prototype.add=function(s,a,h,u,v){var w=s.toString();s=this.g[w],s||(s=this.g[w]=[],this.h++);var A=fi(s,a,u,v);return-1<A?(a=s[A],h||(a.fa=!1)):(a=new Fl(a,this.src,w,!!u,v),a.fa=h,s.push(a)),a};function di(s,a){var h=a.type;if(h in s.g){var u=s.g[h],v=Array.prototype.indexOf.call(u,a,void 0),w;(w=0<=v)&&Array.prototype.splice.call(u,v,1),w&&(yn(a),s.g[h].length==0&&(delete s.g[h],s.h--))}}function fi(s,a,h,u){for(var v=0;v<s.length;++v){var w=s[v];if(!w.da&&w.listener==a&&w.capture==!!h&&w.ha==u)return v}return-1}var pi="closure_lm_"+(1e6*Math.random()|0),_i={};function $s(s,a,h,u,v){if(u&&u.once)return Gs(s,a,h,u,v);if(Array.isArray(a)){for(var w=0;w<a.length;w++)$s(s,a[w],h,u,v);return null}return h=vi(h),s&&s[Dt]?s.K(a,h,f(u)?!!u.capture:!!u,v):zs(s,a,h,!1,u,v)}function zs(s,a,h,u,v,w){if(!a)throw Error("Invalid event type");var A=f(v)?!!v.capture:!!v,j=mi(s);if(j||(s[pi]=j=new vn(s)),h=j.add(a,h,u,A,w),h.proxy)return h;if(u=Hl(),h.proxy=u,u.src=s,u.listener=h,s.addEventListener)Ml||(v=A),v===void 0&&(v=!1),s.addEventListener(a.toString(),u,v);else if(s.attachEvent)s.attachEvent(qs(a.toString()),u);else if(s.addListener&&s.removeListener)s.addListener(u);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Hl(){function s(h){return a.call(s.src,s.listener,h)}const a=Bl;return s}function Gs(s,a,h,u,v){if(Array.isArray(a)){for(var w=0;w<a.length;w++)Gs(s,a[w],h,u,v);return null}return h=vi(h),s&&s[Dt]?s.L(a,h,f(u)?!!u.capture:!!u,v):zs(s,a,h,!0,u,v)}function Ks(s,a,h,u,v){if(Array.isArray(a))for(var w=0;w<a.length;w++)Ks(s,a[w],h,u,v);else u=f(u)?!!u.capture:!!u,h=vi(h),s&&s[Dt]?(s=s.i,a=String(a).toString(),a in s.g&&(w=s.g[a],h=fi(w,h,u,v),-1<h&&(yn(w[h]),Array.prototype.splice.call(w,h,1),w.length==0&&(delete s.g[a],s.h--)))):s&&(s=mi(s))&&(a=s.g[a.toString()],s=-1,a&&(s=fi(a,h,u,v)),(h=-1<s?a[s]:null)&&gi(h))}function gi(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[Dt])di(a.i,s);else{var h=s.type,u=s.proxy;a.removeEventListener?a.removeEventListener(h,u,s.capture):a.detachEvent?a.detachEvent(qs(h),u):a.addListener&&a.removeListener&&a.removeListener(u),(h=mi(a))?(di(h,s),h.h==0&&(h.src=null,a[pi]=null)):yn(s)}}}function qs(s){return s in _i?_i[s]:_i[s]="on"+s}function Bl(s,a){if(s.da)s=!0;else{a=new Ot(a,this);var h=s.listener,u=s.ha||s.src;s.fa&&gi(s),s=h.call(u,a)}return s}function mi(s){return s=s[pi],s instanceof vn?s:null}var yi="__closure_events_fn_"+(1e9*Math.random()>>>0);function vi(s){return typeof s=="function"?s:(s[yi]||(s[yi]=function(a){return s.handleEvent(a)}),s[yi])}function te(){xe.call(this),this.i=new vn(this),this.M=this,this.F=null}R(te,xe),te.prototype[Dt]=!0,te.prototype.removeEventListener=function(s,a,h,u){Ks(this,s,a,h,u)};function ae(s,a){var h,u=s.F;if(u)for(h=[];u;u=u.F)h.push(u);if(s=s.M,u=a.type||a,typeof a=="string")a=new ee(a,s);else if(a instanceof ee)a.target=a.target||s;else{var v=a;a=new ee(u,s),m(a,v)}if(v=!0,h)for(var w=h.length-1;0<=w;w--){var A=a.g=h[w];v=En(A,u,!0,a)&&v}if(A=a.g=s,v=En(A,u,!0,a)&&v,v=En(A,u,!1,a)&&v,h)for(w=0;w<h.length;w++)A=a.g=h[w],v=En(A,u,!1,a)&&v}te.prototype.N=function(){if(te.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var h=s.g[a],u=0;u<h.length;u++)yn(h[u]);delete s.g[a],s.h--}}this.F=null},te.prototype.K=function(s,a,h,u){return this.i.add(String(s),a,!1,h,u)},te.prototype.L=function(s,a,h,u){return this.i.add(String(s),a,!0,h,u)};function En(s,a,h,u){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var v=!0,w=0;w<a.length;++w){var A=a[w];if(A&&!A.da&&A.capture==h){var j=A.listener,Q=A.ha||A.src;A.fa&&di(s.i,A),v=j.call(Q,u)!==!1&&v}}return v&&!u.defaultPrevented}function Ys(s,a,h){if(typeof s=="function")h&&(s=S(s,h));else if(s&&typeof s.handleEvent=="function")s=S(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(s,a||0)}function Xs(s){s.g=Ys(()=>{s.g=null,s.i&&(s.i=!1,Xs(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class jl extends xe{constructor(a,h){super(),this.m=a,this.l=h,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Xs(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Lt(s){xe.call(this),this.h=s,this.g={}}R(Lt,xe);var Js=[];function Qs(s){he(s.g,function(a,h){this.g.hasOwnProperty(h)&&gi(a)},s),s.g={}}Lt.prototype.N=function(){Lt.aa.N.call(this),Qs(this)},Lt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ei=c.JSON.stringify,Vl=c.JSON.parse,Wl=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function Ii(){}Ii.prototype.h=null;function Zs(s){return s.h||(s.h=s.i())}function $l(){}var Mt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ti(){ee.call(this,"d")}R(Ti,ee);function wi(){ee.call(this,"c")}R(wi,ee);var lt={},er=null;function Ci(){return er=er||new te}lt.La="serverreachability";function tr(s){ee.call(this,lt.La,s)}R(tr,ee);function xt(s){const a=Ci();ae(a,new tr(a))}lt.STAT_EVENT="statevent";function nr(s,a){ee.call(this,lt.STAT_EVENT,s),this.stat=a}R(nr,ee);function le(s){const a=Ci();ae(a,new nr(a,s))}lt.Ma="timingevent";function ir(s,a){ee.call(this,lt.Ma,s),this.size=a}R(ir,ee);function Ut(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},a)}function Ft(){this.g=!0}Ft.prototype.xa=function(){this.g=!1};function zl(s,a,h,u,v,w){s.info(function(){if(s.g)if(w)for(var A="",j=w.split("&"),Q=0;Q<j.length;Q++){var x=j[Q].split("=");if(1<x.length){var ne=x[0];x=x[1];var ie=ne.split("_");A=2<=ie.length&&ie[1]=="type"?A+(ne+"="+x+"&"):A+(ne+"=redacted&")}}else A=null;else A=w;return"XMLHTTP REQ ("+u+") [attempt "+v+"]: "+a+`
`+h+`
`+A})}function Gl(s,a,h,u,v,w,A){s.info(function(){return"XMLHTTP RESP ("+u+") [ attempt "+v+"]: "+a+`
`+h+`
`+w+" "+A})}function ht(s,a,h,u){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+ql(s,h)+(u?" "+u:"")})}function Kl(s,a){s.info(function(){return"TIMEOUT: "+a})}Ft.prototype.info=function(){};function ql(s,a){if(!s.g)return a;if(!a)return null;try{var h=JSON.parse(a);if(h){for(s=0;s<h.length;s++)if(Array.isArray(h[s])){var u=h[s];if(!(2>u.length)){var v=u[1];if(Array.isArray(v)&&!(1>v.length)){var w=v[0];if(w!="noop"&&w!="stop"&&w!="close")for(var A=1;A<v.length;A++)v[A]=""}}}}return Ei(h)}catch{return a}}var Si={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Yl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ai;function In(){}R(In,Ii),In.prototype.g=function(){return new XMLHttpRequest},In.prototype.i=function(){return{}},Ai=new In;function Ue(s,a,h,u){this.j=s,this.i=a,this.l=h,this.R=u||1,this.U=new Lt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new sr}function sr(){this.i=null,this.g="",this.h=!1}var rr={},bi={};function Ri(s,a,h){s.L=1,s.v=Sn(Re(a)),s.m=h,s.P=!0,or(s,null)}function or(s,a){s.F=Date.now(),Tn(s),s.A=Re(s.v);var h=s.A,u=s.R;Array.isArray(u)||(u=[String(u)]),Er(h.i,"t",u),s.C=0,h=s.j.J,s.h=new sr,s.g=Fr(s.j,h?a:null,!s.m),0<s.O&&(s.M=new jl(S(s.Y,s,s.g),s.O)),a=s.U,h=s.g,u=s.ca;var v="readystatechange";Array.isArray(v)||(v&&(Js[0]=v.toString()),v=Js);for(var w=0;w<v.length;w++){var A=$s(h,v[w],u||a.handleEvent,!1,a.h||a);if(!A)break;a.g[A.key]=A}a=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),xt(),zl(s.i,s.u,s.A,s.l,s.R,s.m)}Ue.prototype.ca=function(s){s=s.target;const a=this.M;a&&Ne(s)==3?a.j():this.Y(s)},Ue.prototype.Y=function(s){try{if(s==this.g)e:{const ie=Ne(this.g);var a=this.g.Ba();const dt=this.g.Z();if(!(3>ie)&&(ie!=3||this.g&&(this.h.h||this.g.oa()||br(this.g)))){this.J||ie!=4||a==7||(a==8||0>=dt?xt(3):xt(2)),Ni(this);var h=this.g.Z();this.X=h;t:if(ar(this)){var u=br(this.g);s="";var v=u.length,w=Ne(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qe(this),Ht(this);var A="";break t}this.h.i=new c.TextDecoder}for(a=0;a<v;a++)this.h.h=!0,s+=this.h.i.decode(u[a],{stream:!(w&&a==v-1)});u.length=0,this.h.g+=s,this.C=0,A=this.h.g}else A=this.g.oa();if(this.o=h==200,Gl(this.i,this.u,this.A,this.l,this.R,ie,h),this.o){if(this.T&&!this.K){t:{if(this.g){var j,Q=this.g;if((j=Q.g?Q.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(j)){var x=j;break t}}x=null}if(h=x)ht(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ki(this,h);else{this.o=!1,this.s=3,le(12),qe(this),Ht(this);break e}}if(this.P){h=!0;let ye;for(;!this.J&&this.C<A.length;)if(ye=Xl(this,A),ye==bi){ie==4&&(this.s=4,le(14),h=!1),ht(this.i,this.l,null,"[Incomplete Response]");break}else if(ye==rr){this.s=4,le(15),ht(this.i,this.l,A,"[Invalid Chunk]"),h=!1;break}else ht(this.i,this.l,ye,null),ki(this,ye);if(ar(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ie!=4||A.length!=0||this.h.h||(this.s=1,le(16),h=!1),this.o=this.o&&h,!h)ht(this.i,this.l,A,"[Invalid Chunked Response]"),qe(this),Ht(this);else if(0<A.length&&!this.W){this.W=!0;var ne=this.j;ne.g==this&&ne.ba&&!ne.M&&(ne.j.info("Great, no buffering proxy detected. Bytes received: "+A.length),xi(ne),ne.M=!0,le(11))}}else ht(this.i,this.l,A,null),ki(this,A);ie==4&&qe(this),this.o&&!this.J&&(ie==4?Lr(this.j,this):(this.o=!1,Tn(this)))}else fh(this.g),h==400&&0<A.indexOf("Unknown SID")?(this.s=3,le(12)):(this.s=0,le(13)),qe(this),Ht(this)}}}catch{}finally{}};function ar(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Xl(s,a){var h=s.C,u=a.indexOf(`
`,h);return u==-1?bi:(h=Number(a.substring(h,u)),isNaN(h)?rr:(u+=1,u+h>a.length?bi:(a=a.slice(u,u+h),s.C=u+h,a)))}Ue.prototype.cancel=function(){this.J=!0,qe(this)};function Tn(s){s.S=Date.now()+s.I,lr(s,s.I)}function lr(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Ut(S(s.ba,s),a)}function Ni(s){s.B&&(c.clearTimeout(s.B),s.B=null)}Ue.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Kl(this.i,this.A),this.L!=2&&(xt(),le(17)),qe(this),this.s=2,Ht(this)):lr(this,this.S-s)};function Ht(s){s.j.G==0||s.J||Lr(s.j,s)}function qe(s){Ni(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,Qs(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function ki(s,a){try{var h=s.j;if(h.G!=0&&(h.g==s||Pi(h.h,s))){if(!s.K&&Pi(h.h,s)&&h.G==3){try{var u=h.Da.g.parse(a)}catch{u=null}if(Array.isArray(u)&&u.length==3){var v=u;if(v[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<s.F)Pn(h),Nn(h);else break e;Mi(h),le(18)}}else h.za=v[1],0<h.za-h.T&&37500>v[2]&&h.F&&h.v==0&&!h.C&&(h.C=Ut(S(h.Za,h),6e3));if(1>=ur(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Xe(h,11)}else if((s.K||h.g==s)&&Pn(h),!q(a))for(v=h.Da.g.parse(a),a=0;a<v.length;a++){let x=v[a];if(h.T=x[0],x=x[1],h.G==2)if(x[0]=="c"){h.K=x[1],h.ia=x[2];const ne=x[3];ne!=null&&(h.la=ne,h.j.info("VER="+h.la));const ie=x[4];ie!=null&&(h.Aa=ie,h.j.info("SVER="+h.Aa));const dt=x[5];dt!=null&&typeof dt=="number"&&0<dt&&(u=1.5*dt,h.L=u,h.j.info("backChannelRequestTimeoutMs_="+u)),u=h;const ye=s.g;if(ye){const On=ye.g?ye.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(On){var w=u.h;w.g||On.indexOf("spdy")==-1&&On.indexOf("quic")==-1&&On.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Oi(w,w.h),w.h=null))}if(u.D){const Ui=ye.g?ye.g.getResponseHeader("X-HTTP-Session-Id"):null;Ui&&(u.ya=Ui,V(u.I,u.D,Ui))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-s.F,h.j.info("Handshake RTT: "+h.R+"ms")),u=h;var A=s;if(u.qa=Ur(u,u.J?u.ia:null,u.W),A.K){dr(u.h,A);var j=A,Q=u.L;Q&&(j.I=Q),j.B&&(Ni(j),Tn(j)),u.g=A}else Or(u);0<h.i.length&&kn(h)}else x[0]!="stop"&&x[0]!="close"||Xe(h,7);else h.G==3&&(x[0]=="stop"||x[0]=="close"?x[0]=="stop"?Xe(h,7):Li(h):x[0]!="noop"&&h.l&&h.l.ta(x),h.v=0)}}xt(4)}catch{}}var Jl=class{constructor(s,a){this.g=s,this.map=a}};function hr(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function cr(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function ur(s){return s.h?1:s.g?s.g.size:0}function Pi(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Oi(s,a){s.g?s.g.add(a):s.h=a}function dr(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}hr.prototype.cancel=function(){if(this.i=fr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function fr(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const h of s.g.values())a=a.concat(h.D);return a}return P(s.i)}function Ql(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(d(s)){for(var a=[],h=s.length,u=0;u<h;u++)a.push(s[u]);return a}a=[],h=0;for(u in s)a[h++]=s[u];return a}function Zl(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(d(s)||typeof s=="string"){var a=[];s=s.length;for(var h=0;h<s;h++)a.push(h);return a}a=[],h=0;for(const u in s)a[h++]=u;return a}}}function pr(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(d(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var h=Zl(s),u=Ql(s),v=u.length,w=0;w<v;w++)a.call(void 0,u[w],h&&h[w],s)}var _r=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eh(s,a){if(s){s=s.split("&");for(var h=0;h<s.length;h++){var u=s[h].indexOf("="),v=null;if(0<=u){var w=s[h].substring(0,u);v=s[h].substring(u+1)}else w=s[h];a(w,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function Ye(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Ye){this.h=s.h,wn(this,s.j),this.o=s.o,this.g=s.g,Cn(this,s.s),this.l=s.l;var a=s.i,h=new Vt;h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),gr(this,h),this.m=s.m}else s&&(a=String(s).match(_r))?(this.h=!1,wn(this,a[1]||"",!0),this.o=Bt(a[2]||""),this.g=Bt(a[3]||"",!0),Cn(this,a[4]),this.l=Bt(a[5]||"",!0),gr(this,a[6]||"",!0),this.m=Bt(a[7]||"")):(this.h=!1,this.i=new Vt(null,this.h))}Ye.prototype.toString=function(){var s=[],a=this.j;a&&s.push(jt(a,mr,!0),":");var h=this.g;return(h||a=="file")&&(s.push("//"),(a=this.o)&&s.push(jt(a,mr,!0),"@"),s.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&s.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&s.push("/"),s.push(jt(h,h.charAt(0)=="/"?ih:nh,!0))),(h=this.i.toString())&&s.push("?",h),(h=this.m)&&s.push("#",jt(h,rh)),s.join("")};function Re(s){return new Ye(s)}function wn(s,a,h){s.j=h?Bt(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function Cn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function gr(s,a,h){a instanceof Vt?(s.i=a,oh(s.i,s.h)):(h||(a=jt(a,sh)),s.i=new Vt(a,s.h))}function V(s,a,h){s.i.set(a,h)}function Sn(s){return V(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Bt(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function jt(s,a,h){return typeof s=="string"?(s=encodeURI(s).replace(a,th),h&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function th(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var mr=/[#\/\?@]/g,nh=/[#\?:]/g,ih=/[#\?]/g,sh=/[#\?@]/g,rh=/#/g;function Vt(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Fe(s){s.g||(s.g=new Map,s.h=0,s.i&&eh(s.i,function(a,h){s.add(decodeURIComponent(a.replace(/\+/g," ")),h)}))}n=Vt.prototype,n.add=function(s,a){Fe(this),this.i=null,s=ct(this,s);var h=this.g.get(s);return h||this.g.set(s,h=[]),h.push(a),this.h+=1,this};function yr(s,a){Fe(s),a=ct(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function vr(s,a){return Fe(s),a=ct(s,a),s.g.has(a)}n.forEach=function(s,a){Fe(this),this.g.forEach(function(h,u){h.forEach(function(v){s.call(a,v,u,this)},this)},this)},n.na=function(){Fe(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),h=[];for(let u=0;u<a.length;u++){const v=s[u];for(let w=0;w<v.length;w++)h.push(a[u])}return h},n.V=function(s){Fe(this);let a=[];if(typeof s=="string")vr(this,s)&&(a=a.concat(this.g.get(ct(this,s))));else{s=Array.from(this.g.values());for(let h=0;h<s.length;h++)a=a.concat(s[h])}return a},n.set=function(s,a){return Fe(this),this.i=null,s=ct(this,s),vr(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function Er(s,a,h){yr(s,a),0<h.length&&(s.i=null,s.g.set(ct(s,a),P(h)),s.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var h=0;h<a.length;h++){var u=a[h];const w=encodeURIComponent(String(u)),A=this.V(u);for(u=0;u<A.length;u++){var v=w;A[u]!==""&&(v+="="+encodeURIComponent(String(A[u]))),s.push(v)}}return this.i=s.join("&")};function ct(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function oh(s,a){a&&!s.j&&(Fe(s),s.i=null,s.g.forEach(function(h,u){var v=u.toLowerCase();u!=v&&(yr(this,u),Er(this,v,h))},s)),s.j=a}function ah(s,a){const h=new Ft;if(c.Image){const u=new Image;u.onload=N(He,h,"TestLoadImage: loaded",!0,a,u),u.onerror=N(He,h,"TestLoadImage: error",!1,a,u),u.onabort=N(He,h,"TestLoadImage: abort",!1,a,u),u.ontimeout=N(He,h,"TestLoadImage: timeout",!1,a,u),c.setTimeout(function(){u.ontimeout&&u.ontimeout()},1e4),u.src=s}else a(!1)}function lh(s,a){const h=new Ft,u=new AbortController,v=setTimeout(()=>{u.abort(),He(h,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:u.signal}).then(w=>{clearTimeout(v),w.ok?He(h,"TestPingServer: ok",!0,a):He(h,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(v),He(h,"TestPingServer: error",!1,a)})}function He(s,a,h,u,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),u(h)}catch{}}function hh(){this.g=new Wl}function ch(s,a,h){const u=h||"";try{pr(s,function(v,w){let A=v;f(v)&&(A=Ei(v)),a.push(u+w+"="+encodeURIComponent(A))})}catch(v){throw a.push(u+"type="+encodeURIComponent("_badmap")),v}}function An(s){this.l=s.Ub||null,this.j=s.eb||!1}R(An,Ii),An.prototype.g=function(){return new bn(this.l,this.j)},An.prototype.i=function(s){return function(){return s}}({});function bn(s,a){te.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(bn,te),n=bn.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,$t(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wt(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,$t(this)),this.g&&(this.readyState=3,$t(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ir(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ir(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Wt(this):$t(this),this.readyState==3&&Ir(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Wt(this))},n.Qa=function(s){this.g&&(this.response=s,Wt(this))},n.ga=function(){this.g&&Wt(this)};function Wt(s){s.readyState=4,s.l=null,s.j=null,s.v=null,$t(s)}n.setRequestHeader=function(s,a){this.u.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var h=a.next();!h.done;)h=h.value,s.push(h[0]+": "+h[1]),h=a.next();return s.join(`\r
`)};function $t(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(bn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Tr(s){let a="";return he(s,function(h,u){a+=u,a+=":",a+=h,a+=`\r
`}),a}function Di(s,a,h){e:{for(u in h){var u=!1;break e}u=!0}u||(h=Tr(h),typeof s=="string"?h!=null&&encodeURIComponent(String(h)):V(s,a,h))}function G(s){te.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(G,te);var uh=/^https?$/i,dh=["POST","PUT"];n=G.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,a,h,u){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ai.g(),this.v=this.o?Zs(this.o):Zs(Ai),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(w){wr(this,w);return}if(s=h||"",h=new Map(this.headers),u)if(Object.getPrototypeOf(u)===Object.prototype)for(var v in u)h.set(v,u[v]);else if(typeof u.keys=="function"&&typeof u.get=="function")for(const w of u.keys())h.set(w,u.get(w));else throw Error("Unknown input type for opt_headers: "+String(u));u=Array.from(h.keys()).find(w=>w.toLowerCase()=="content-type"),v=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(dh,a,void 0))||u||v||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,A]of h)this.g.setRequestHeader(w,A);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ar(this),this.u=!0,this.g.send(s),this.u=!1}catch(w){wr(this,w)}};function wr(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,Cr(s),Rn(s)}function Cr(s){s.A||(s.A=!0,ae(s,"complete"),ae(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,ae(this,"complete"),ae(this,"abort"),Rn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Rn(this,!0)),G.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Sr(this):this.bb())},n.bb=function(){Sr(this)};function Sr(s){if(s.h&&typeof l<"u"&&(!s.v[1]||Ne(s)!=4||s.Z()!=2)){if(s.u&&Ne(s)==4)Ys(s.Ea,0,s);else if(ae(s,"readystatechange"),Ne(s)==4){s.h=!1;try{const A=s.Z();e:switch(A){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break e;default:a=!1}var h;if(!(h=a)){var u;if(u=A===0){var v=String(s.D).match(_r)[1]||null;!v&&c.self&&c.self.location&&(v=c.self.location.protocol.slice(0,-1)),u=!uh.test(v?v.toLowerCase():"")}h=u}if(h)ae(s,"complete"),ae(s,"success");else{s.m=6;try{var w=2<Ne(s)?s.g.statusText:""}catch{w=""}s.l=w+" ["+s.Z()+"]",Cr(s)}}finally{Rn(s)}}}}function Rn(s,a){if(s.g){Ar(s);const h=s.g,u=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||ae(s,"ready");try{h.onreadystatechange=u}catch{}}}function Ar(s){s.I&&(c.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Ne(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Ne(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Vl(a)}};function br(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function fh(s){const a={};s=(s.g&&2<=Ne(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let u=0;u<s.length;u++){if(q(s[u]))continue;var h=y(s[u]);const v=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const w=a[v]||[];a[v]=w,w.push(h)}E(a,function(u){return u.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function zt(s,a,h){return h&&h.internalChannelParams&&h.internalChannelParams[s]||a}function Rr(s){this.Aa=0,this.i=[],this.j=new Ft,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zt("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zt("baseRetryDelayMs",5e3,s),this.cb=zt("retryDelaySeedMs",1e4,s),this.Wa=zt("forwardChannelMaxRetries",2,s),this.wa=zt("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new hr(s&&s.concurrentRequestLimit),this.Da=new hh,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Rr.prototype,n.la=8,n.G=1,n.connect=function(s,a,h,u){le(0),this.W=s,this.H=a||{},h&&u!==void 0&&(this.H.OSID=h,this.H.OAID=u),this.F=this.X,this.I=Ur(this,null,this.W),kn(this)};function Li(s){if(Nr(s),s.G==3){var a=s.U++,h=Re(s.I);if(V(h,"SID",s.K),V(h,"RID",a),V(h,"TYPE","terminate"),Gt(s,h),a=new Ue(s,s.j,a),a.L=2,a.v=Sn(Re(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=a.v,h=!0),h||(a.g=Fr(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Tn(a)}xr(s)}function Nn(s){s.g&&(xi(s),s.g.cancel(),s.g=null)}function Nr(s){Nn(s),s.u&&(c.clearTimeout(s.u),s.u=null),Pn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function kn(s){if(!cr(s.h)&&!s.s){s.s=!0;var a=s.Ga;kt||Ws(),Pt||(kt(),Pt=!0),ui.add(a,s),s.B=0}}function ph(s,a){return ur(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Ut(S(s.Ga,s,a),Mr(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const v=new Ue(this,this.j,s);let w=this.o;if(this.S&&(w?(w=p(w),m(w,this.S)):w=this.S),this.m!==null||this.O||(v.H=w,w=null),this.P)e:{for(var a=0,h=0;h<this.i.length;h++){t:{var u=this.i[h];if("__data__"in u.map&&(u=u.map.__data__,typeof u=="string")){u=u.length;break t}u=void 0}if(u===void 0)break;if(a+=u,4096<a){a=h;break e}if(a===4096||h===this.i.length-1){a=h+1;break e}}a=1e3}else a=1e3;a=Pr(this,v,a),h=Re(this.I),V(h,"RID",s),V(h,"CVER",22),this.D&&V(h,"X-HTTP-Session-Id",this.D),Gt(this,h),w&&(this.O?a="headers="+encodeURIComponent(String(Tr(w)))+"&"+a:this.m&&Di(h,this.m,w)),Oi(this.h,v),this.Ua&&V(h,"TYPE","init"),this.P?(V(h,"$req",a),V(h,"SID","null"),v.T=!0,Ri(v,h,null)):Ri(v,h,a),this.G=2}}else this.G==3&&(s?kr(this,s):this.i.length==0||cr(this.h)||kr(this))};function kr(s,a){var h;a?h=a.l:h=s.U++;const u=Re(s.I);V(u,"SID",s.K),V(u,"RID",h),V(u,"AID",s.T),Gt(s,u),s.m&&s.o&&Di(u,s.m,s.o),h=new Ue(s,s.j,h,s.B+1),s.m===null&&(h.H=s.o),a&&(s.i=a.D.concat(s.i)),a=Pr(s,h,1e3),h.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Oi(s.h,h),Ri(h,u,a)}function Gt(s,a){s.H&&he(s.H,function(h,u){V(a,u,h)}),s.l&&pr({},function(h,u){V(a,u,h)})}function Pr(s,a,h){h=Math.min(s.i.length,h);var u=s.l?S(s.l.Na,s.l,s):null;e:{var v=s.i;let w=-1;for(;;){const A=["count="+h];w==-1?0<h?(w=v[0].g,A.push("ofs="+w)):w=0:A.push("ofs="+w);let j=!0;for(let Q=0;Q<h;Q++){let x=v[Q].g;const ne=v[Q].map;if(x-=w,0>x)w=Math.max(0,v[Q].g-100),j=!1;else try{ch(ne,A,"req"+x+"_")}catch{u&&u(ne)}}if(j){u=A.join("&");break e}}}return s=s.i.splice(0,h),a.D=s,u}function Or(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;kt||Ws(),Pt||(kt(),Pt=!0),ui.add(a,s),s.v=0}}function Mi(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Ut(S(s.Fa,s),Mr(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Dr(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Ut(S(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,le(10),Nn(this),Dr(this))};function xi(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function Dr(s){s.g=new Ue(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Re(s.qa);V(a,"RID","rpc"),V(a,"SID",s.K),V(a,"AID",s.T),V(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&V(a,"TO",s.ja),V(a,"TYPE","xmlhttp"),Gt(s,a),s.m&&s.o&&Di(a,s.m,s.o),s.L&&(s.g.I=s.L);var h=s.g;s=s.ia,h.L=1,h.v=Sn(Re(a)),h.m=null,h.P=!0,or(h,s)}n.Za=function(){this.C!=null&&(this.C=null,Nn(this),Mi(this),le(19))};function Pn(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function Lr(s,a){var h=null;if(s.g==a){Pn(s),xi(s),s.g=null;var u=2}else if(Pi(s.h,a))h=a.D,dr(s.h,a),u=1;else return;if(s.G!=0){if(a.o)if(u==1){h=a.m?a.m.length:0,a=Date.now()-a.F;var v=s.B;u=Ci(),ae(u,new ir(u,h)),kn(s)}else Or(s);else if(v=a.s,v==3||v==0&&0<a.X||!(u==1&&ph(s,a)||u==2&&Mi(s)))switch(h&&0<h.length&&(a=s.h,a.i=a.i.concat(h)),v){case 1:Xe(s,5);break;case 4:Xe(s,10);break;case 3:Xe(s,6);break;default:Xe(s,2)}}}function Mr(s,a){let h=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(h*=2),h*a}function Xe(s,a){if(s.j.info("Error code "+a),a==2){var h=S(s.fb,s),u=s.Xa;const v=!u;u=new Ye(u||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||wn(u,"https"),Sn(u),v?ah(u.toString(),h):lh(u.toString(),h)}else le(2);s.G=0,s.l&&s.l.sa(a),xr(s),Nr(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),le(2)):(this.j.info("Failed to ping google.com"),le(1))};function xr(s){if(s.G=0,s.ka=[],s.l){const a=fr(s.h);(a.length!=0||s.i.length!=0)&&(k(s.ka,a),k(s.ka,s.i),s.h.i.length=0,P(s.i),s.i.length=0),s.l.ra()}}function Ur(s,a,h){var u=h instanceof Ye?Re(h):new Ye(h);if(u.g!="")a&&(u.g=a+"."+u.g),Cn(u,u.s);else{var v=c.location;u=v.protocol,a=a?a+"."+v.hostname:v.hostname,v=+v.port;var w=new Ye(null);u&&wn(w,u),a&&(w.g=a),v&&Cn(w,v),h&&(w.l=h),u=w}return h=s.D,a=s.ya,h&&a&&V(u,h,a),V(u,"VER",s.la),Gt(s,u),u}function Fr(s,a,h){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new G(new An({eb:h})):new G(s.pa),a.Ha(s.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Hr(){}n=Hr.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function _e(s,a){te.call(this),this.g=new Rr(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!q(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!q(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new ut(this)}R(_e,te),_e.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_e.prototype.close=function(){Li(this.g)},_e.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var h={};h.__data__=s,s=h}else this.u&&(h={},h.__data__=Ei(s),s=h);a.i.push(new Jl(a.Ya++,s)),a.G==3&&kn(a)},_e.prototype.N=function(){this.g.l=null,delete this.j,Li(this.g),delete this.g,_e.aa.N.call(this)};function Br(s){Ti.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){e:{for(const h in a){s=h;break e}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}R(Br,Ti);function jr(){wi.call(this),this.status=1}R(jr,wi);function ut(s){this.g=s}R(ut,Hr),ut.prototype.ua=function(){ae(this.g,"a")},ut.prototype.ta=function(s){ae(this.g,new Br(s))},ut.prototype.sa=function(s){ae(this.g,new jr)},ut.prototype.ra=function(){ae(this.g,"b")},_e.prototype.send=_e.prototype.o,_e.prototype.open=_e.prototype.m,_e.prototype.close=_e.prototype.close,Si.NO_ERROR=0,Si.TIMEOUT=8,Si.HTTP_ERROR=6,Yl.COMPLETE="complete",$l.EventType=Mt,Mt.OPEN="a",Mt.CLOSE="b",Mt.ERROR="c",Mt.MESSAGE="d",te.prototype.listen=te.prototype.K,G.prototype.listenOnce=G.prototype.L,G.prototype.getLastError=G.prototype.Ka,G.prototype.getLastErrorCode=G.prototype.Ba,G.prototype.getStatus=G.prototype.Z,G.prototype.getResponseJson=G.prototype.Oa,G.prototype.getResponseText=G.prototype.oa,G.prototype.send=G.prototype.ea,G.prototype.setWithCredentials=G.prototype.Ha}).apply(typeof xn<"u"?xn:typeof self<"u"?self:typeof window<"u"?window:{});const Bo="@firebase/firestore";/**
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
 */class fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}fe.UNAUTHENTICATED=new fe(null),fe.GOOGLE_CREDENTIALS=new fe("google-credentials-uid"),fe.FIRST_PARTY=new fe("first-party-uid"),fe.MOCK_USER=new fe("mock-user");/**
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
 */let ci="10.14.0";/**
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
 */const ei=new ii("@firebase/firestore");function we(n,...e){if(ei.logLevel<=F.DEBUG){const t=e.map(Pl);ei.debug(`Firestore (${ci}): ${n}`,...t)}}function kl(n,...e){if(ei.logLevel<=F.ERROR){const t=e.map(Pl);ei.error(`Firestore (${ci}): ${n}`,...t)}}function Pl(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function Ol(n="Unexpected state"){const e=`FIRESTORE (${ci}) INTERNAL ASSERTION FAILED: `+n;throw kl(e),new Error(e)}function sn(n,e){n||Ol()}/**
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
 */const Ee={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ie extends Ge{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class rn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class hp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(fe.UNAUTHENTICATED))}shutdown(){}}class up{constructor(e){this.t=e,this.currentUser=fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){sn(this.o===void 0);let i=this.i;const r=d=>this.i!==i?(i=this.i,t(d)):Promise.resolve();let o=new rn;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new rn,e.enqueueRetryable(()=>r(this.currentUser))};const l=()=>{const d=o;e.enqueueRetryable(async()=>{await d.promise,await r(this.currentUser)})},c=d=>{we("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(d=>c(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?c(d):(we("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new rn)}},0),l()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(we("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(sn(typeof i.accessToken=="string"),new hp(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return sn(e===null||typeof e=="string"),new fe(e)}}class dp{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=fe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class fp{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new dp(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _p{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){sn(this.o===void 0);const i=o=>{o.error!=null&&we("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,we("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>i(o))};const r=o=>{we("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>r(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?r(o):we("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(sn(typeof t.token=="string"),this.R=t.token,new pp(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function gp(n){return n.name==="IndexedDbTransactionError"}class ti{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ti("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ti&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var jo,D;(D=jo||(jo={}))[D.OK=0]="OK",D[D.CANCELLED=1]="CANCELLED",D[D.UNKNOWN=2]="UNKNOWN",D[D.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",D[D.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",D[D.NOT_FOUND=5]="NOT_FOUND",D[D.ALREADY_EXISTS=6]="ALREADY_EXISTS",D[D.PERMISSION_DENIED=7]="PERMISSION_DENIED",D[D.UNAUTHENTICATED=16]="UNAUTHENTICATED",D[D.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",D[D.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",D[D.ABORTED=10]="ABORTED",D[D.OUT_OF_RANGE=11]="OUT_OF_RANGE",D[D.UNIMPLEMENTED=12]="UNIMPLEMENTED",D[D.INTERNAL=13]="INTERNAL",D[D.UNAVAILABLE=14]="UNAVAILABLE",D[D.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Nl([4294967295,4294967295],0);function Yi(){return typeof document<"u"?document:null}/**
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
 */class mp{constructor(e,t,i=1e3,r=1.5,o=6e4){this.ui=e,this.timerId=t,this.ko=i,this.qo=r,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),r=Math.max(0,t-i);r>0&&we("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Vs{constructor(e,t,i,r,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=r,this.removalCallback=o,this.deferred=new rn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,r,o){const l=Date.now()+i,c=new Vs(e,t,l,r,o);return c.start(i),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ie(Ee.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Vo,Wo;(Wo=Vo||(Vo={})).ea="default",Wo.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function yp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const $o=new Map;function vp(n,e,t,i){if(e===!0&&i===!0)throw new Ie(Ee.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}/**
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
 */class zo{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new Ie(Ee.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Ie(Ee.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yp((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Ie(Ee.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Ie(Ee.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Ie(Ee.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ep{constructor(e,t,i,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zo({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Ie(Ee.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Ie(Ee.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zo(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new cp;switch(i.type){case"firstParty":return new fp(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new Ie(Ee.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=$o.get(t);i&&(we("ComponentProvider","Removing Datastore"),$o.delete(t),i.terminate())}(this),Promise.resolve()}}/**
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
 */class Go{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new mp(this,"async_queue_retry"),this.Vu=()=>{const i=Yi();i&&we("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=e;const t=Yi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Yi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new rn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!gp(e))throw e;we("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(i=>{this.Eu=i,this.du=!1;const r=function(l){let c=l.message||"";return l.stack&&(c=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),c}(i);throw kl("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.du=!1,i))));return this.mu=t,t}enqueueAfterDelay(e,t,i){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const r=Vs.createAndSchedule(this,e,t,i,o=>this.yu(o));return this.Tu.push(r),r}fu(){this.Eu&&Ol()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class Ip extends Ep{constructor(e,t,i,r){super(e,t,i,r),this.type="firestore",this._queue=new Go,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Go(e),this._firestoreClient=void 0,await e}}}(function(e,t=!0){(function(r){ci=r})(un),nt(new $e("firestore",(i,{instanceIdentifier:r,options:o})=>{const l=i.getProvider("app").getImmediate(),c=new Ip(new up(i.getProvider("auth-internal")),new _p(i.getProvider("app-check-internal")),function(f,C){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new Ie(Ee.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ti(f.options.projectId,C)}(l,r),l);return o=Object.assign({useFetchStreams:t},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Pe(Bo,"4.7.3",e),Pe(Bo,"4.7.3","esm2017")})();export{Cp as g,Pc as i,Pe as r};
