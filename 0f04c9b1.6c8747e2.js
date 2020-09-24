(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{55:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var a=r(2),n=r(6),o=(r(0),r(87)),s={id:"backend",title:"Backend"},c={unversionedId:"backend",id:"backend",isDocsHomePage:!1,title:"Backend",description:"Backend choices for Create Full Stack.",source:"@site/docs/backend.md",slug:"/backend",permalink:"/docs/backend",editUrl:"https://github.com/tiagob/create-full-stack/edit/master/packages/docusaurus/docs/backend.md",version:"current",sidebar:"someSidebar",previous:{title:"Why?",permalink:"/docs/why"},next:{title:"Auth",permalink:"/docs/auth"}},l=[{value:"Apollo Server Express",id:"apollo-server-express",children:[]},{value:"Hasura",id:"hasura",children:[]}],i={rightToc:l};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Backend choices for Create Full Stack."),Object(o.b)("h2",{id:"apollo-server-express"},"Apollo Server Express"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/apollographql/apollo-server/stargazers/"}),Object(o.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/github/stars/apollographql/apollo-server.svg?style=social&label=Star&maxAge=2592000",alt:"GitHub stars"})))),Object(o.b)("p",null,"This choice scaffolds out a TypeScript Node server at ",Object(o.b)("inlineCode",{parentName:"p"},"packages/server/"),"."),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/apollo-server-express"}),"Apollo Server Express")," uses Node.js and the Express web framework to create a GraphQL API. Developers explicitly define the GraphQL resolvers. This makes use cases with lots of custom business logic simpler at the expense of manually defining everything."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"GraphQL: Yes"),Object(o.b)("li",{parentName:"ul"},"Automatic resolvers: No"),Object(o.b)("li",{parentName:"ul"},"Developer console: No"),Object(o.b)("li",{parentName:"ul"},"GraphQL playground: Yes"),Object(o.b)("li",{parentName:"ul"},"Permissions/Auth support: Yes"),Object(o.b)("li",{parentName:"ul"},"Database: Postgres"),Object(o.b)("li",{parentName:"ul"},"ORM: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://typeorm.io/#/"}),"TypeORM")),Object(o.b)("li",{parentName:"ul"},"Migration support: Yes")),Object(o.b)("h2",{id:"hasura"},"Hasura"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/hasura/graphql-engine/stargazers/"}),Object(o.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/github/stars/hasura/graphql-engine.svg?style=social&label=Star&maxAge=2592000",alt:"GitHub stars"})))),Object(o.b)("p",null,"This choice includes the Hasura Docker image and configuration files at ",Object(o.b)("inlineCode",{parentName:"p"},"hasura/"),"."),Object(o.b)("p",null,"Given a Postgres database ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://hasura.io/opensource"}),"Hasura")," provides a GraphQL API and a web console. From the web console developers can modify the Postgres schema, API permissions on a column level or add hooks for custom business logic. Schema changes from the console automatically create migration files which are applied anytime Hasura is spun up. Hasura is open-source and runs in a Docker container."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"GraphQL: Yes"),Object(o.b)("li",{parentName:"ul"},"Automatic resolvers: Yes"),Object(o.b)("li",{parentName:"ul"},"Developer console: No"),Object(o.b)("li",{parentName:"ul"},"GraphQL playground: Yes"),Object(o.b)("li",{parentName:"ul"},"Permissions/Auth support: Yes"),Object(o.b)("li",{parentName:"ul"},"Database: Postgres"),Object(o.b)("li",{parentName:"ul"},"ORM: N/A"),Object(o.b)("li",{parentName:"ul"},"Migration support: Yes")))}p.isMDXComponent=!0},87:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),p=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,d=u["".concat(s,".").concat(m)]||u[m]||b[m]||o;return r?n.a.createElement(d,c(c({ref:t},i),{},{components:r})):n.a.createElement(d,c({ref:t},i))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var i=2;i<o;i++)s[i]=r[i];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);