import"./hoist-non-react-statics-178b73a1.js";import"./react-3ca98b8e.js";function C(r){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=r(n)),e[n]}}function w(r){for(var e=0,n,t=0,o=r.length;o>=4;++t,o-=4)n=r.charCodeAt(t)&255|(r.charCodeAt(++t)&255)<<8|(r.charCodeAt(++t)&255)<<16|(r.charCodeAt(++t)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(o){case 3:e^=(r.charCodeAt(t+2)&255)<<16;case 2:e^=(r.charCodeAt(t+1)&255)<<8;case 1:e^=r.charCodeAt(t)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var y={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},O=!1,A=/[A-Z]|^ms/g,S=/_EMO_([^_]+?)_([^]*?)_EMO_/g,b=function(e){return e.charCodeAt(1)===45},h=function(e){return e!=null&&typeof e!="boolean"},x=C(function(r){return b(r)?r:r.replace(A,"-$&").toLowerCase()}),v=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(S,function(t,o,a){return c={name:o,styles:a,next:c},o})}return y[e]!==1&&!b(e)&&typeof n=="number"&&n!==0?n+"px":n},E="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function m(r,e,n){if(n==null)return"";var t=n;if(t.__emotion_styles!==void 0)return t;switch(typeof n){case"boolean":return"";case"object":{var o=n;if(o.anim===1)return c={name:o.name,styles:o.styles,next:c},o.name;var a=n;if(a.styles!==void 0){var f=a.next;if(f!==void 0)for(;f!==void 0;)c={name:f.name,styles:f.styles,next:c},f=f.next;var i=a.styles+";";return i}return R(r,e,n)}case"function":{if(r!==void 0){var u=c,l=n(r);return c=u,m(r,e,l)}break}}var s=n;if(e==null)return s;var d=e[s];return d!==void 0?d:s}function R(r,e,n){var t="";if(Array.isArray(n))for(var o=0;o<n.length;o++)t+=m(r,e,n[o])+";";else for(var a in n){var f=n[a];if(typeof f!="object"){var i=f;e!=null&&e[i]!==void 0?t+=a+"{"+e[i]+"}":h(i)&&(t+=x(a)+":"+v(a,i)+";")}else{if(a==="NO_COMPONENT_SELECTOR"&&O)throw new Error(E);if(Array.isArray(f)&&typeof f[0]=="string"&&(e==null||e[f[0]]===void 0))for(var u=0;u<f.length;u++)h(f[u])&&(t+=x(a)+":"+v(a,f[u])+";");else{var l=m(r,e,f);switch(a){case"animation":case"animationName":{t+=x(a)+":"+l+";";break}default:t+=a+"{"+l+"}"}}}}return t}var p=/label:\s*([^\s;{]+)\s*(;|$)/g,c;function g(r,e,n){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var t=!0,o="";c=void 0;var a=r[0];if(a==null||a.raw===void 0)t=!1,o+=m(n,e,a);else{var f=a;o+=f[0]}for(var i=1;i<r.length;i++)if(o+=m(n,e,r[i]),t){var u=a;o+=u[i]}p.lastIndex=0;for(var l="",s;(s=p.exec(o))!==null;)l+="-"+s[1];var d=w(o)+l;return{name:d,styles:o,next:c}}function M(){for(var r=arguments.length,e=new Array(r),n=0;n<r;n++)e[n]=arguments[n];return g(e)}export{M as c};
