"use strict";(self.webpackChunkmorph_doc=self.webpackChunkmorph_doc||[]).push([[2668],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(r),h=o,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6247:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(8063),o=(r(9496),r(9613));const i={title:"Verify Your Smart Contracts",lang:"en-US",keywords:["morph","ethereum","rollup","layer2","validity proof","optimstic zk-rollup"],description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimstic zk-rollup solution. Try it now!"},a=void 0,l={unversionedId:"build-on-morph/build-on-morph/verify-your-smart-contracts",id:"build-on-morph/build-on-morph/verify-your-smart-contracts",title:"Verify Your Smart Contracts",description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimstic zk-rollup solution. Try it now!",source:"@site/docs/build-on-morph/build-on-morph/5-verify-your-smart-contracts.md",sourceDirName:"build-on-morph/build-on-morph",slug:"/build-on-morph/build-on-morph/verify-your-smart-contracts",permalink:"/docs/build-on-morph/build-on-morph/verify-your-smart-contracts",draft:!1,editUrl:"https://github.com/morph-l2/morph-doc/tree/main/docs/build-on-morph/build-on-morph/5-verify-your-smart-contracts.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Verify Your Smart Contracts",lang:"en-US",keywords:["morph","ethereum","rollup","layer2","validity proof","optimstic zk-rollup"],description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimstic zk-rollup solution. Try it now!"},sidebar:"DevSidebar",previous:{title:"Understand Transaction Cost on Morph",permalink:"/docs/build-on-morph/build-on-morph/understand-transaction-cost-on-morph"},next:{title:"Contract Address",permalink:"/docs/build-on-morph/developer-resources/contracts"}},s={},d=[{value:"Verify with develop framework",id:"verify-with-develop-framework",level:2},{value:"Hardhat",id:"hardhat",level:3},{value:"Vefiry with Morph explorer",id:"vefiry-with-morph-explorer",level:2},{value:"Method: Solidity (Flattened Sources Code)",id:"method-solidity-flattened-sources-code",level:3},{value:"Frontend:",id:"frontend",level:4},{value:"Flatten",id:"flatten",level:4},{value:"Method: Solidity (Standard JSON Input)",id:"method-solidity-standard-json-input",level:3},{value:"Obtain JSON File",id:"obtain-json-file",level:4},{value:"Method: Solidity (Multi-part files)",id:"method-solidity-multi-part-files",level:3},{value:"Frontend:",id:"frontend-1",level:4},{value:"SOL File Process",id:"sol-file-process",level:4},{value:"Method: Vyper (Contracts)",id:"method-vyper-contracts",level:3},{value:"Frontend:",id:"frontend-2",level:4},{value:"Method: Vyper (Standard Json Input)",id:"method-vyper-standard-json-input",level:3},{value:"Frontend:",id:"frontend-3",level:4},{value:"Method: Vyper (Multi-part files)",id:"method-vyper-multi-part-files",level:3},{value:"Frontend:",id:"frontend-4",level:4},{value:"After Verification",id:"after-verification",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...i}=e;return(0,o.kt)(c,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After deploying your smart contracts, it's important to verify your code on our ",(0,o.kt)("a",{parentName:"p",href:"https://explorer-testnet.morphl2.io"},"block explorer"),". This can be done in an automated way using your develop framework such as hardhat."),(0,o.kt)("h2",{id:"verify-with-develop-framework"},"Verify with develop framework"),(0,o.kt)("p",null,"Most smart contract tooling has plugins for verifying your contracts easily on Etherscan. Blockscout supports Etherscan's contract verification APIs, and it's straight forward to use these tools with the Morph Testnet."),(0,o.kt)("h3",{id:"hardhat"},"Hardhat"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Use ",(0,o.kt)("a",{parentName:"p",href:"https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-verify"},"harthat-verify plugin"))),(0,o.kt)("p",null,"First run this under hardhat contract project directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn add --dev @nomiclabs/hardhat-etherscan\n")),(0,o.kt)("p",null,"Then edit your 'hardhat.config.js' file to point to the Morph testnet RPC & explorer"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"hardhat.config.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\nrequire("@nomiclabs/hardhat-waffle");\nrequire("@nomiclabs/hardhat-etherscan");\nrequire(\'hardhat-deploy\');\n\nmodule.exports = {\n    ...\n    networks: {\n    tMorph: {\n      url: \'https://rpc-testnet.morphl2.io \' || \'\',\n      accounts:\n        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],\n     },\n    },\n    ...\n    etherscan: {\n        apiKey: {\n          tMorph: "abc",\n        },\n        customChains: [\n          {\n            network: "tMorph",\n            chainId: 2710,\n            urls: {\n              apiURL: "",\n              browserURL: "https://explorer-testnet.morphl2.io",\n            },\n          },\n        ],\n      }\n}\n\n')),(0,o.kt)("p",null,"When contract is deployed, adding a script: "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"scripts/lock.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'await hre.run("verify:verify", {\n    address: contract.address, \n    constructorArguments: [xxx], \n});\n')),(0,o.kt)("p",null,"Final step, execute"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NODE_ENV=devnet npx hardhat run scripts/lock.js --network devnet")),(0,o.kt)("p",null,"To verify the contract code"),(0,o.kt)("h2",{id:"vefiry-with-morph-explorer"},"Vefiry with Morph explorer"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Visit\uff1a",(0,o.kt)("a",{parentName:"li",href:"https://explorer-testnet.morphl2.io"},"Morph block explorer"))),(0,o.kt)("p",null,"We currently support 6 different ways to verify your contracts on our block explorer"),(0,o.kt)("p",null,"There are 2 general parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Compiler: Has to be consistent with what you select when deployment"),(0,o.kt)("li",{parentName:"ul"},"Optimization: Can be ignored if no contract optimizatin, if has, has to be consistent with deployment")),(0,o.kt)("h3",{id:"method-solidity-flattened-sources-code"},"Method: Solidity (Flattened Sources Code)"),(0,o.kt)("h4",{id:"frontend"},"Frontend:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"fscs",src:r(1080).Z,width:"1280",height:"1017"})),(0,o.kt)("h4",{id:"flatten"},"Flatten"),(0,o.kt)("p",null,"Flatten through ",(0,o.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/reference/forge/forge-flatten?highlight=flatten#forge-flatten"},"forge command"),", for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"forge flatten --output FlattenedL2StandardBridge.sol ./contracts/L2/L2StandardBridge.sol\n")),(0,o.kt)("h3",{id:"method-solidity-standard-json-input"},"Method: Solidity (Standard JSON Input)"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sjis1",src:r(4515).Z,width:"1280",height:"881"})),(0,o.kt)("h4",{id:"obtain-json-file"},"Obtain JSON File"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Can be obtained through solc"),(0,o.kt)("li",{parentName:"ul"},"Can be obatined through remix compiler")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sjis2",src:r(4172).Z,width:"934",height:"542"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sjis3",src:r(4172).Z,width:"934",height:"542"})),(0,o.kt)("h3",{id:"method-solidity-multi-part-files"},"Method: Solidity (Multi-part files)"),(0,o.kt)("h4",{id:"frontend-1"},"Frontend:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can submit multiple contract file by your own needs\n",(0,o.kt)("img",{alt:"mpfs1",src:r(9216).Z,width:"1280",height:"779"}))),(0,o.kt)("h4",{id:"sol-file-process"},"SOL File Process"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If there is any imported file, it needs to be modified to be referenced by the same level path, and these files must be submitted together.\n",(0,o.kt)("img",{alt:"mpfs2",src:r(6672).Z,width:"1280",height:"594"}))),(0,o.kt)("h3",{id:"method-vyper-contracts"},"Method: Vyper (Contracts)"),(0,o.kt)("h4",{id:"frontend-2"},"Frontend:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cv",src:r(2878).Z,width:"1280",height:"848"})),(0,o.kt)("h3",{id:"method-vyper-standard-json-input"},"Method: Vyper (Standard Json Input)"),(0,o.kt)("h4",{id:"frontend-3"},"Frontend:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sjiv",src:r(8789).Z,width:"1280",height:"552"})),(0,o.kt)("h3",{id:"method-vyper-multi-part-files"},"Method: Vyper (Multi-part files)"),(0,o.kt)("h4",{id:"frontend-4"},"Frontend:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mpfv",src:r(9284).Z,width:"1280",height:"822"})),(0,o.kt)("h3",{id:"after-verification"},"After Verification"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"avp",src:r(4992).Z,width:"1280",height:"503"})))}u.isMDXComponent=!0},4992:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/avp-fa162f2180b681e8807908f00d195c43.png"},2878:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/cv-4d3a7c9df0e287432f8b25c935cd1ea3.png"},1080:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/flatsourcesol-41a879112babbd6397b588b2b4e69daa.png"},9216:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/mpfsol-3a7d7ba4b61955208a7221a347c914c3.png"},6672:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/mpfsol2-53fcc6c9ea28eb6114b242e08ba8bb1a.png"},9284:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/mpfv-43dad07bd7fd43eb3721dc7611560ac4.png"},4515:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/sjisol1-d065f42e5cb024651428c3f700fc3662.png"},4172:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/sjisol3-71ed80d677f12848aba5fa829f7b6fb2.png"},8789:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/sjiv-2d889a272a34ef1415529bced91d39c2.png"}}]);