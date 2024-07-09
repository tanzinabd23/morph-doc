"use strict";(self.webpackChunkmorph_doc=self.webpackChunkmorph_doc||[]).push([[2708],{2316:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var i=r(3274),n=r(2333);const o={title:"Verify Your Smart Contracts",lang:"en-US",keywords:["morph","ethereum","rollup","layer2","validity proof","optimistic zk-rollup"],description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimistic zk-rollup solution. Try it now!"},s=void 0,d={id:"build-on-morph/build-on-morph/verify-your-smart-contracts",title:"Verify Your Smart Contracts",description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimistic zk-rollup solution. Try it now!",source:"@site/docs/build-on-morph/build-on-morph/5-verify-your-smart-contracts.md",sourceDirName:"build-on-morph/build-on-morph",slug:"/build-on-morph/build-on-morph/verify-your-smart-contracts",permalink:"/docs/build-on-morph/build-on-morph/verify-your-smart-contracts",draft:!1,unlisted:!1,editUrl:"https://github.com/morph-l2/morph-doc/tree/main/docs/build-on-morph/build-on-morph/5-verify-your-smart-contracts.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Verify Your Smart Contracts",lang:"en-US",keywords:["morph","ethereum","rollup","layer2","validity proof","optimistic zk-rollup"],description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimistic zk-rollup solution. Try it now!"},sidebar:"DeveloperSidebar",previous:{title:"Deploy Contracts on Morph",permalink:"/docs/build-on-morph/code-examples/deploy-contract-on-morph"},next:{title:"Bridge between Morph and Ethereum",permalink:"/docs/build-on-morph/build-on-morph/bridge-between-morph-and-ethereum"}},l={},a=[{value:"Verify with develop framework",id:"verify-with-develop-framework",level:2},{value:"Vefiry with Morph explorer",id:"vefiry-with-morph-explorer",level:2},{value:"Method: Solidity (Flattened Sources Code)",id:"method-solidity-flattened-sources-code",level:3},{value:"Frontend:",id:"frontend",level:4},{value:"Flatten",id:"flatten",level:4},{value:"Method: Solidity (Standard JSON Input)",id:"method-solidity-standard-json-input",level:3},{value:"Obtain JSON File",id:"obtain-json-file",level:4},{value:"Method: Solidity (Multi-part files)",id:"method-solidity-multi-part-files",level:3},{value:"Frontend:",id:"frontend-1",level:4},{value:"SOL File Process",id:"sol-file-process",level:4},{value:"Method: Vyper (Contracts)",id:"method-vyper-contracts",level:3},{value:"Frontend:",id:"frontend-2",level:4},{value:"Method: Vyper (Standard Json Input)",id:"method-vyper-standard-json-input",level:3},{value:"Frontend:",id:"frontend-3",level:4},{value:"Method: Vyper (Multi-part files)",id:"method-vyper-multi-part-files",level:3},{value:"Frontend:",id:"frontend-4",level:4},{value:"After Verification",id:"after-verification",level:3}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["After deploying your smart contracts, it's crucial to verify your code on our ",(0,i.jsx)(t.a,{href:"https://explorer-holesky.morphl2.io",children:"block explorer"}),". his can be automated using your development framework, such as Hardhat."]}),"\n",(0,i.jsx)(t.h2,{id:"verify-with-develop-framework",children:"Verify with develop framework"}),"\n",(0,i.jsx)(t.p,{children:"Most smart contract tools have plugins for verifying contracts on Etherscan. Blockscout supports Etherscan's contract verification APIs, making it straightforward to use these tools with the Morph Testnet."}),"\n",(0,i.jsx)(t.p,{children:"We provide a comprehensive example of deploying contracts on Morph using Hardhat and Foundry, which includes the verification process."}),"\n",(0,i.jsxs)(t.p,{children:["Check ",(0,i.jsx)(t.a,{href:"/docs/build-on-morph/code-examples/deploy-contract-on-morph",children:"Deploy Conrtacts on Morph"})," for examples."]}),"\n",(0,i.jsx)(t.h2,{id:"vefiry-with-morph-explorer",children:"Vefiry with Morph explorer"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Visit\uff1a",(0,i.jsx)(t.a,{href:"https://explorer-holesky.morphl2.io",children:"Morph block explorer"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"We currently support 6 different ways to verify your contracts on our block explorer"}),"\n",(0,i.jsx)(t.p,{children:"There are 2 general parameters:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Compiler: Has to be consistent with what you select when deployment"}),"\n",(0,i.jsx)(t.li,{children:"Optimization: Can be ignored if no contract optimizatin, if has, has to be consistent with deployment"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"method-solidity-flattened-sources-code",children:"Method: Solidity (Flattened Sources Code)"}),"\n",(0,i.jsx)(t.h4,{id:"frontend",children:"Frontend:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"fscs",src:r(2813).A+"",width:"1280",height:"1017"})}),"\n",(0,i.jsx)(t.h4,{id:"flatten",children:"Flatten"}),"\n",(0,i.jsxs)(t.p,{children:["Flatten through ",(0,i.jsx)(t.a,{href:"https://book.getfoundry.sh/reference/forge/forge-flatten?highlight=flatten#forge-flatten",children:"forge command"}),", for example:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"forge flatten --output FlattenedL2StandardBridge.sol ./contracts/L2/L2StandardBridge.sol\n"})}),"\n",(0,i.jsx)(t.h3,{id:"method-solidity-standard-json-input",children:"Method: Solidity (Standard JSON Input)"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"sjis1",src:r(9222).A+"",width:"1280",height:"881"})}),"\n",(0,i.jsx)(t.h4,{id:"obtain-json-file",children:"Obtain JSON File"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Can be obtained through solc"}),"\n",(0,i.jsx)(t.li,{children:"Can be obatined through remix compiler"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"sjis2",src:r(1396).A+"",width:"934",height:"542"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"sjis3",src:r(1396).A+"",width:"934",height:"542"})}),"\n",(0,i.jsx)(t.h3,{id:"method-solidity-multi-part-files",children:"Method: Solidity (Multi-part files)"}),"\n",(0,i.jsx)(t.h4,{id:"frontend-1",children:"Frontend:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["You can submit multiple contract file by your own needs\n",(0,i.jsx)(t.img,{alt:"mpfs1",src:r(1986).A+"",width:"1280",height:"779"})]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"sol-file-process",children:"SOL File Process"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["If there is any imported file, it needs to be modified to be referenced by the same level path, and these files must be submitted together.\n",(0,i.jsx)(t.img,{alt:"mpfs2",src:r(490).A+"",width:"1280",height:"594"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"method-vyper-contracts",children:"Method: Vyper (Contracts)"}),"\n",(0,i.jsx)(t.h4,{id:"frontend-2",children:"Frontend:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"cv",src:r(2598).A+"",width:"1280",height:"848"})}),"\n",(0,i.jsx)(t.h3,{id:"method-vyper-standard-json-input",children:"Method: Vyper (Standard Json Input)"}),"\n",(0,i.jsx)(t.h4,{id:"frontend-3",children:"Frontend:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"sjiv",src:r(7411).A+"",width:"1280",height:"552"})}),"\n",(0,i.jsx)(t.h3,{id:"method-vyper-multi-part-files",children:"Method: Vyper (Multi-part files)"}),"\n",(0,i.jsx)(t.h4,{id:"frontend-4",children:"Frontend:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"mpfv",src:r(7254).A+"",width:"1280",height:"822"})}),"\n",(0,i.jsx)(t.h3,{id:"after-verification",children:"After Verification"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"avp",src:r(7446).A+"",width:"1280",height:"503"})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},7446:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/avp-fa162f2180b681e8807908f00d195c43.png"},2598:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/cv-4d3a7c9df0e287432f8b25c935cd1ea3.png"},2813:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/flatsourcesol-41a879112babbd6397b588b2b4e69daa.png"},1986:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/mpfsol-3a7d7ba4b61955208a7221a347c914c3.png"},490:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/mpfsol2-53fcc6c9ea28eb6114b242e08ba8bb1a.png"},7254:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/mpfv-43dad07bd7fd43eb3721dc7611560ac4.png"},9222:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/sjisol1-d065f42e5cb024651428c3f700fc3662.png"},1396:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/sjisol3-71ed80d677f12848aba5fa829f7b6fb2.png"},7411:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/sjiv-2d889a272a34ef1415529bced91d39c2.png"},2333:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>d});var i=r(9474);const n={},o=i.createContext(n);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);