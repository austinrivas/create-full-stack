(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{101:function(e,t,n){"use strict";const r=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let o=!1;a.rangeCount>0&&(o=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch(l){}return n.remove(),o&&(a.removeAllRanges(),a.addRange(o)),r&&r.focus(),c};e.exports=r,e.exports.default=r},102:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],r=t[2],a=t[3];if(n&&a){var o=[],c=(n=parseInt(n))<(a=parseInt(a))?1:-1;"-"!=r&&".."!=r&&"\u2025"!=r||(a+=c);for(var l=n;l!=a;l+=c)o.push(l);return o}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},106:function(e,t,n){"use strict";var r=n(2),a=n(0),o=n.n(a),c=n(92),l={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:n(20).a,theme:l};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,y=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},f=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=u({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=u({},n,{backgroundColor:null}),a};function h(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var g=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?f(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=u({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(o.style=c.plain),void 0!==a&&(o.style=void 0!==o.style?u({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),s(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var c=r?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[c].concat(l))}})),s(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,c=u({},h(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(c.style=void 0!==c.style?u({},c.style,a):a),void 0!==n&&(c.key=n),r&&(c.className+=" "+r),c}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),c=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,c=0,l=[],i=[l];c>-1;){for(;(o=r[c]++)<a[c];){var s=void 0,u=t[c],f=n[c][o];if("string"==typeof f?(u=c>0?u:["plain"],s=f):(u=d(u,f.type),f.alias&&(u=d(u,f.alias)),s=f.content),"string"==typeof s){var h=s.split(p),g=h.length;l.push({types:u,content:h[0]});for(var m=1;m<g;m++)y(l),i.push(l=[]),l.push({types:u,content:h[m]})}else c++,t.push(u),n.push(s),r.push(0),a.push(s.length)}c--,t.pop(),n.pop(),r.pop(),a.pop()}return y(l),i}(void 0!==c?t.tokenize(r,c,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),m=n(101),v=n.n(m),b=n(102),j=n.n(b),k=n(91),O={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},E=n(98),x=function(){var e=Object(k.a)().siteConfig.themeConfig.prism,t=void 0===e?{}:e,n=Object(E.a)().isDarkTheme,r=t.theme||O,a=t.darkTheme||r;return n?a:r},w=n(49),P=n.n(w),T=/{([\d,-]+)}/,N=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")},C=/title=".*"/;t.a=function(e){var t=e.children,n=e.className,l=e.metastring,s=Object(k.a)().siteConfig.themeConfig.prism,u=void 0===s?{}:s,p=Object(a.useState)(!1),y=p[0],d=p[1],f=Object(a.useState)(!1),h=f[0],m=f[1];Object(a.useEffect)((function(){m(!0)}),[]);var b=Object(a.useRef)(null),O=[],E="",w=x();if(l&&T.test(l)){var S=l.match(T)[1];O=j.a.parse(S).filter((function(e){return e>0}))}l&&C.test(l)&&(E=l.match(C)[0].split("title=")[1].replace(/"+/g,""));var D=n&&n.replace(/language-/,"");!D&&u.defaultLanguage&&(D=u.defaultLanguage);var B=t.replace(/\n$/,"");if(0===O.length&&void 0!==D){for(var A,L="",I=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return N(["js","jsBlock"]);case"jsx":case"tsx":return N(["js","jsBlock","jsx"]);case"html":return N(["js","jsBlock","html"]);case"python":case"py":return N(["python"]);default:return N()}}(D),R=t.replace(/\n$/,"").split("\n"),F=0;F<R.length;){var $=F+1,_=R[F].match(I);if(null!==_){switch(_.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":L+=$+",";break;case"highlight-start":A=$;break;case"highlight-end":L+=A+"-"+($-1)+","}R.splice(F,1)}else F+=1}O=j.a.parse(L),B=R.join("\n")}var W=function(){v()(B),d(!0),setTimeout((function(){return d(!1)}),2e3)};return o.a.createElement(g,Object(r.a)({},i,{key:String(h),theme:w,code:B,language:D}),(function(e){var t,n,a=e.className,l=e.style,i=e.tokens,s=e.getLineProps,u=e.getTokenProps;return o.a.createElement(o.a.Fragment,null,E&&o.a.createElement("div",{style:l,className:P.a.codeBlockTitle},E),o.a.createElement("div",{className:P.a.codeBlockContent},o.a.createElement("button",{ref:b,type:"button","aria-label":"Copy code to clipboard",className:Object(c.a)(P.a.copyButton,(t={},t[P.a.copyButtonWithTitle]=E,t)),onClick:W},y?"Copied":"Copy"),o.a.createElement("div",{tabIndex:0,className:Object(c.a)(a,P.a.codeBlock,(n={},n[P.a.codeBlockWithTitle]=E,n))},o.a.createElement("div",{className:P.a.codeBlockLines,style:l},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=s({line:e,key:t});return O.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(r.a)({key:t},n),e.map((function(e,t){return o.a.createElement("span",Object(r.a)({key:t},u({token:e,key:t})))})))}))))))}))}},109:function(e,t,n){"use strict";var r=n(2),a=n(0),o=n.n(a),c=n(93),l=n(106),i=n(6),s=n(92),u=n(91),p=(n(59),n(60)),y=n.n(p),d=function(e){return function(t){var n,r=t.id,a=Object(i.a)(t,["id"]),c=Object(u.a)().siteConfig,l=(c=void 0===c?{}:c).themeConfig,p=(l=void 0===l?{}:l).navbar,d=(p=void 0===p?{}:p).hideOnScroll,f=void 0!==d&&d;return r?o.a.createElement(e,a,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(s.a)("anchor",(n={},n[y.a.enhancedAnchor]=!f,n)),id:r}),a.children,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:"hash-link",href:"#"+r,title:"Direct link to heading"},"#")):o.a.createElement(e,a)}},f=n(61),h=n.n(f),g={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?o.a.createElement(l.a,e):o.a.createElement("code",e):t},a:function(e){return o.a.createElement(c.a,e)},pre:function(e){return o.a.createElement("div",Object(r.a)({className:h.a.mdxCodeBlock},e))},h1:d("h1"),h2:d("h2"),h3:d("h3"),h4:d("h4"),h5:d("h5"),h6:d("h6")};t.a=g},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||y[d]||o;return n?a.a.createElement(f,l(l({ref:t},s),{},{components:n})):a.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);