"use strict";(self.webpackChunkmorph_doc=self.webpackChunkmorph_doc||[]).push([[591],{9613:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(9496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=s(t),u=a,f=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return t?n.createElement(f,o(o({ref:r},l),{},{components:t})):n.createElement(f,o({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var d={};for(var p in r)hasOwnProperty.call(r,p)&&(d[p]=r[p]);d.originalType=e,d[c]="string"==typeof e?e:a,o[1]=d;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},343:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var n=t(8063),a=(t(9496),t(9613));const i={},o=void 0,d={unversionedId:"build-on-morph/sdk/interfaces/BridgeAdapterData",id:"build-on-morph/sdk/interfaces/BridgeAdapterData",title:"BridgeAdapterData",description:"@morph-l2/sdk / Exports / BridgeAdapterData",source:"@site/docs/build-on-morph/sdk/interfaces/BridgeAdapterData.md",sourceDirName:"build-on-morph/sdk/interfaces",slug:"/build-on-morph/sdk/interfaces/BridgeAdapterData",permalink:"/docs/build-on-morph/sdk/interfaces/BridgeAdapterData",draft:!1,editUrl:"https://github.com/morph-l2/morph-doc/tree/main/docs/build-on-morph/sdk/interfaces/BridgeAdapterData.md",tags:[],version:"current",frontMatter:{},sidebar:"DevSidebar",previous:{title:"MessageStatus",permalink:"/docs/build-on-morph/sdk/enums/MessageStatus"},next:{title:"BridgeAdapters",permalink:"/docs/build-on-morph/sdk/interfaces/BridgeAdapters"}},p={},s=[{value:"Indexable",id:"indexable",level:2}],l={toc:s},c="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(c,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/build-on-morph/sdk/intro"},"@morph-l2/sdk")," / ",(0,a.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / BridgeAdapterData"),(0,a.kt)("h1",{id:"interface-bridgeadapterdata"},"Interface: BridgeAdapterData"),(0,a.kt)("p",null,"Something that looks like the list of custom bridges."),(0,a.kt)("h2",{id:"indexable"},"Indexable"),(0,a.kt)("p",null,"\u25aa ","[name: ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"]",": { ",(0,a.kt)("inlineCode",{parentName:"p"},"Adapter"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"opts"),": { ",(0,a.kt)("inlineCode",{parentName:"p"},"l1Bridge"),": ",(0,a.kt)("a",{parentName:"p",href:"../modules#addresslike"},(0,a.kt)("inlineCode",{parentName:"a"},"AddressLike"))," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"l2Bridge"),": ",(0,a.kt)("a",{parentName:"p",href:"../modules#addresslike"},(0,a.kt)("inlineCode",{parentName:"a"},"AddressLike"))," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"messenger"),": ",(0,a.kt)("a",{parentName:"p",href:"../classes/CrossChainMessenger"},(0,a.kt)("inlineCode",{parentName:"a"},"CrossChainMessenger")),"  }) => ",(0,a.kt)("a",{parentName:"p",href:"IBridgeAdapter"},(0,a.kt)("inlineCode",{parentName:"a"},"IBridgeAdapter"))," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"l1Bridge"),": ",(0,a.kt)("a",{parentName:"p",href:"../modules#addresslike"},(0,a.kt)("inlineCode",{parentName:"a"},"AddressLike"))," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"l2Bridge"),": ",(0,a.kt)("a",{parentName:"p",href:"../modules#addresslike"},(0,a.kt)("inlineCode",{parentName:"a"},"AddressLike")),"  }"))}m.isMDXComponent=!0}}]);