(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{73:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var a=r(2),n=(r(0),r(87));const i={id:"why",title:"Why?"},o={unversionedId:"why",id:"why",isDocsHomePage:!1,title:"Why?",description:"Problem",source:"@site/docs/why.md",slug:"/why",permalink:"/docs/why",editUrl:"https://github.com/tiagob/create-full-stack/edit/master/packages/docusaurus/docs/why.md",version:"current",sidebar:"someSidebar",next:{title:"Backend",permalink:"/docs/backend"}},c=[{value:"Problem",id:"problem",children:[]},{value:"Solution",id:"solution",children:[{value:"Curated libraries and Frameworks",id:"curated-libraries-and-frameworks",children:[]},{value:"Guard rails",id:"guard-rails",children:[]},{value:"Production ready",id:"production-ready",children:[]}]}],l={rightToc:c};function u({components:e,...t}){return Object(n.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"problem"},"Problem"),Object(n.b)("p",null,"Focus on building your ideas and delighting your users, not fitting libraries and frameworks together. Get started today without the need to rewrite tomorrow."),Object(n.b)("h2",{id:"solution"},"Solution"),Object(n.b)("h3",{id:"curated-libraries-and-frameworks"},"Curated libraries and Frameworks"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Best tools in class",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Every ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/libraries_and_frameworks"}),"library and framework")," has a large community"),Object(n.b)("li",{parentName:"ul"},"Ensures fewer edge cases and better support"))),Object(n.b)("li",{parentName:"ul"},"CFS provides the glue and cross-platform consistent ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/configuration"}),"configuration"))),Object(n.b)("h3",{id:"guard-rails"},"Guard rails"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Catch bugs early without sacrificing developer velocity"),Object(n.b)("li",{parentName:"ul"},"Static type checking from the DB (Postgres) to UI and back",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"API layer is type checked with GraphQL"),Object(n.b)("li",{parentName:"ul"},"TypeScript types are generated from the GraphQL schema"))),Object(n.b)("li",{parentName:"ul"},"Strict linting (",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/airbnb/javascript"}),"Airbnb"),") and code formatting (",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://prettier.io/"}),"Prettier"),")",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Almost everything is autofix on save in VSCode")))),Object(n.b)("h3",{id:"production-ready"},"Production ready"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"No need to mess around with the AWS console"),Object(n.b)("li",{parentName:"ul"},"Deploy with one command in minutes using ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/cloud"}),"Pulumi")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/cicd"}),"CI/CD"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"No \ud83d\udca9 gets checked in"),Object(n.b)("li",{parentName:"ul"},"Run tests automatically on GitHub"),Object(n.b)("li",{parentName:"ul"},"Pushes to master automatically deploy your full stack"))),Object(n.b)("li",{parentName:"ul"},"Change DB schema safely with ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/migrations"}),"migration support"))))}u.isMDXComponent=!0},87:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),b=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=b(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=b(r),d=a,m=s["".concat(o,".").concat(d)]||s[d]||p[d]||i;return r?n.a.createElement(m,c(c({ref:t},u),{},{components:r})):n.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);