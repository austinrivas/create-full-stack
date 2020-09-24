(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(87)),c={id:"folder_structure",title:"Folder Structure"},i={unversionedId:"folder_structure",id:"folder_structure",isDocsHomePage:!1,title:"Folder Structure",description:"After creation, your project should look something like this:",source:"@site/docs/folder_structure.md",slug:"/folder_structure",permalink:"/docs/folder_structure",editUrl:"https://github.com/tiagob/create-full-stack/edit/master/packages/docusaurus/docs/folder_structure.md",version:"current",sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/docs/"},next:{title:"Available Scripts",permalink:"/docs/available_scripts"}},l=[],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"After creation, your project should look something like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"hasura/  # If hasura backend is selected\npackages/\n  common/\n  mobile/  # If mobile is included\n  pulumi-aws/  # If pulumi aws is included\n  server/  # If apollo-server-express backend is selected\n  web/  # If web is included\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"common/")," contains shared mobile and web code. Any updates to common must first be built before used in ",Object(o.b)("inlineCode",{parentName:"p"},"mobile/")," or ",Object(o.b)("inlineCode",{parentName:"p"},"web/"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd packages/common\nyarn build\n# Or to constantly check for updates\nyarn watch\n")),Object(o.b)("p",null,"If changes are made to any ",Object(o.b)("inlineCode",{parentName:"p"},".graphql")," files you must update the TS types and React hooks."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn generate\n# Or to constantly check for updates\nyarn generate --watch\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"mobile/")," and ",Object(o.b)("inlineCode",{parentName:"p"},"web/")," share a similar folder structure."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"src/\n  components/\n  containers/\n  utils/\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"containers/")," includes React routes or React Native navigation screens. ",Object(o.b)("inlineCode",{parentName:"p"},"components/")," includes any other react components used in the containers. If components are container specific it's preferred to include them in the container itself. ",Object(o.b)("inlineCode",{parentName:"p"},"utils/")," includes common TS utility functions."))}u.isMDXComponent=!0},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);