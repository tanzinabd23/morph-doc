"use strict";(self.webpackChunkmorph_doc=self.webpackChunkmorph_doc||[]).push([[3457],{5500:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var o=n(3274),r=n(2333);const i={title:"Bridge between Morph and Ethereum",lang:"en-US",keywords:["morph","ethereum","rollup","layer2","validity proof","optimistic zk-rollup"],description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimistic zk-rollup solution. Try it now!"},s=void 0,d={id:"build-on-morph/build-on-morph/bridge-between-morph-and-ethereum",title:"Bridge between Morph and Ethereum",description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimistic zk-rollup solution. Try it now!",source:"@site/docs/build-on-morph/build-on-morph/3-bridge-between-morph-and-ethereum.md",sourceDirName:"build-on-morph/build-on-morph",slug:"/build-on-morph/build-on-morph/bridge-between-morph-and-ethereum",permalink:"/docs/build-on-morph/build-on-morph/bridge-between-morph-and-ethereum",draft:!1,unlisted:!1,editUrl:"https://github.com/morph-l2/morph-doc/tree/main/docs/build-on-morph/build-on-morph/3-bridge-between-morph-and-ethereum.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Bridge between Morph and Ethereum",lang:"en-US",keywords:["morph","ethereum","rollup","layer2","validity proof","optimistic zk-rollup"],description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimistic zk-rollup solution. Try it now!"},sidebar:"DeveloperSidebar",previous:{title:"Verify Your Smart Contracts",permalink:"/docs/build-on-morph/build-on-morph/verify-your-smart-contracts"},next:{title:"Create a Safe Multi-Signature Wallet",permalink:"/docs/build-on-morph/developer-resources/create-a-safe-multi-signature-wallet"}},a={},h=[{value:"Deposit ETH and ERC20 Tokens from L1\u200b",id:"deposit-eth-and-erc20-tokens-from-l1",level:2},{value:"Withdraw ETH and ERC20 tokens from L2",id:"withdraw-eth-and-erc20-tokens-from-l2",level:2},{value:"Finalize your Withdrawal",id:"finalize-your-withdrawal",level:3},{value:"Add your Token to the Official Bridge",id:"add-your-token-to-the-official-bridge",level:2},{value:"Add Tokens to the gateway through Morph Bridge Frontend",id:"add-tokens-to-the-gateway-through-morph-bridge-frontend",level:3},{value:"Add token support to the bridge frontend",id:"add-token-support-to-the-bridge-frontend",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Please first review our documentation on ",(0,o.jsx)(t.a,{href:"/docs/how-morph-works/general-protocol-design/communicate-between-morph-and-ethereum",children:"Communication Between Morph and Ethereum"})," for some required fundamental knowledge."]}),"\n",(0,o.jsx)(t.h2,{id:"deposit-eth-and-erc20-tokens-from-l1",children:"Deposit ETH and ERC20 Tokens from L1\u200b"}),"\n",(0,o.jsx)(t.p,{children:"The Gateway Router allows ETH and ERC20 token bridging from L1 to L2 using the depositETH and depositERC20 functions respectively. It is a permissionless bridge deployed on L1. Notice that ERC20 tokens will have a different address on L2, you can use the getL2ERC20Address function to query the new address."}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"depositETH"})})," and ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"depositERC20"})})," are payable functions, the amount of ETH sent to these functions will be used\nto pay for L2 fees. If the amount is not enough, the transaction will not be sent. All excess ETH will be sent back to\nthe sender. ",(0,o.jsx)(t.code,{children:"0.00001 ETH"})," should be more than enough to process a token deposit."]})}),"\n",(0,o.jsxs)(t.p,{children:["When bridging ERC20 tokens, you don\u2019t have to worry about selecting the right Gateway. This is because the ",(0,o.jsx)(t.code,{children:"L1GatewayRouter"})," will choose the correct underlying entry point to send the message:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsxs)(t.strong,{children:[(0,o.jsx)(t.code,{children:"L1StandardERC20Gateway"}),":"]})," This Gateway permits any ERC20 deposit and will be selected as the default by the L1GatewayRouter for an ERC20 token that doesn\u2019t need custom logic on L2. On the very first token bridging, a new token will be created on L2 that implements the MorphStandardERC20. To bridge a token, call the ",(0,o.jsx)(t.code,{children:"depositERC20"})," function on the ",(0,o.jsx)(t.code,{children:"L1GatewayRouter"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["All Gateway contracts will form the message and send it to the ",(0,o.jsx)(t.code,{children:"L1CrossDomainMessenger"})," which can send arbitrary messages to L2. The ",(0,o.jsx)(t.code,{children:"L1CrossDomainMessenger"})," passes the message to the ",(0,o.jsx)(t.code,{children:"L1MessageQueueWithGasPriceOracle"}),". Any user can send messages directly to the Messenger to execute arbitrary data on L2."]}),"\n",(0,o.jsx)(t.p,{children:"This means they can execute any function on L2 from a transaction made on L1 via the bridge. Although an application could directly pass messages to existing token contracts, the Gateway abstracts the specifics and simplifies making transfers and calls."}),"\n",(0,o.jsxs)(t.p,{children:["When a new block gets created on L1, the Sequencer will detect the message on the ",(0,o.jsx)(t.code,{children:"L1MessageQueue"}),", and submit the transaction to the L2 via the its L2 node. Finally, the L2 node will pass the transaction to the ",(0,o.jsx)(t.code,{children:"L2CrossDomainMessenger"})," contract for execution on L2."]}),"\n",(0,o.jsx)(t.h2,{id:"withdraw-eth-and-erc20-tokens-from-l2",children:"Withdraw ETH and ERC20 tokens from L2"}),"\n",(0,o.jsxs)(t.p,{children:["The L2 Gateway is very similar to the L1 Gateway. We can withdraw ETH and ERC20 tokens back to L1 using the ",(0,o.jsx)(t.code,{children:"withdrawETH"})," and ",(0,o.jsx)(t.code,{children:"withdrawERC20"})," functions. The contract address is deployed on L2. We use the ",(0,o.jsx)(t.code,{children:"getL1ERC20Address"})," to retrieve the token address on L1."]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"withdrawETH"})})," and ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"withdrawERC20"})})," are payable functions, and the amount of ETH sent to these functions will be used to pay for L1 fees. If the amount is not enough, the transaction will not be sent. All excess ETH will be sent back to the sender. Fees will depend on L1 activity but ",(0,o.jsx)(t.code,{children:"0.005 ETH"})," should be enough to process a token withdrawal."]})}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Ensure transactions won\u2019t revert on L1 while sending from L2"}),"  There is no way to recover bridged ETH, tokens, or NFTs if your transaction reverts on L1. All assets are burned on Morph when the transaction is sent, and it's impossible to mint them again"]})}),"\n",(0,o.jsx)(t.h3,{id:"finalize-your-withdrawal",children:"Finalize your Withdrawal"}),"\n",(0,o.jsx)(t.p,{children:"Besides start a withdraw request on Morph, there is one additional step to do. You need to finalize your withdraw on Ethereum."}),"\n",(0,o.jsxs)(t.p,{children:["This is because of Morph's optimistic zkEVM design, you can read the details ",(0,o.jsx)(t.a,{href:"/docs/how-morph-works/general-protocol-design/communicate-between-morph-and-ethereum",children:"here"}),":"]}),"\n",(0,o.jsx)(t.p,{children:"To do this, First you need to make sure:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["TThe batch containing the withdraw transactions has passed the challenge period and is marked as finalized (meaning in the ",(0,o.jsx)(t.code,{children:"Rollup"}),"contract, ",(0,o.jsx)(t.strong,{children:"withdrawalRoots[batchDataStore[_batchIndex].withdrawalRoot] = true"}),")"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Once confirmed, you can call our backend services interface:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:"/getProof?nonce=withdraw.index"})}),"\n",(0,o.jsx)(t.p,{children:"to obtain all the information you need to finalize your withdraw, which include:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Index: The position of the withdrawal transaction in the withdraw tree, or rank of your transaction among all the L2->L1 transactions."}),"\n",(0,o.jsx)(t.li,{children:"Leaf: The hash value of your withdraw transaction that stored in the tree"}),"\n",(0,o.jsx)(t.li,{children:"Proof: The merkel proof of your withdraw transaction"}),"\n",(0,o.jsx)(t.li,{children:"Root: The withdraw tree root"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:[", you need to use the ",(0,o.jsx)(t.code,{children:"proveAndRelayMessage"})," function of the ",(0,o.jsx)(t.code,{children:"L1CrossDomainMessenger"})," contract."]}),"\n",(0,o.jsxs)(t.p,{children:["After obtaining the above information, the finalization of the withdraw operation can be carried out by calling ",(0,o.jsx)(t.code,{children:"L1CrossDomainMessenger.proveAndRelayMessage()"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"The required parameters are"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-solidity",children:"  address _from, \n  address _to, \n  uint256 _value, \n  uint256 _nonce, \n  bytes memory _message, \n  bytes32[32] calldata _withdrawalProof, \n  bytes32 _withdrawalRoot\n"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"_from"}),",",(0,o.jsx)(t.code,{children:"_to"}),", ",(0,o.jsx)(t.code,{children:"_value"}),", ",(0,o.jsx)(t.code,{children:"_nonce"}),", and ",(0,o.jsx)(t.code,{children:"_message"})," are the original content of the withdraw transaction, which can be obtained from the Event ",(0,o.jsx)(t.code,{children:"SentMessage"})," included in the transaction initiated by the L2 layer withdraw."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"_withdrawalProof"})," and ",(0,o.jsx)(t.code,{children:"_withdrawalRoot"})," can be obtained from the aforementioned backend API interface."]}),"\n",(0,o.jsx)(t.h2,{id:"add-your-token-to-the-official-bridge",children:"Add your Token to the Official Bridge"}),"\n",(0,o.jsx)(t.p,{children:"Currently, our official bridge only support certain pre-defined tokens to be bridged, if you want to bridge your own tokens, you need to manually add the token, and here is how to do it."}),"\n",(0,o.jsx)(t.h3,{id:"add-tokens-to-the-gateway-through-morph-bridge-frontend",children:"Add Tokens to the gateway through Morph Bridge Frontend"}),"\n",(0,o.jsxs)(t.p,{children:["The easiest way to support your token is to manually add it on our ",(0,o.jsx)(t.a,{href:"https://bridge-holesky.morphl2.io/",children:"official bridge frontend"}),", you can simply do it with the following steps:"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Click the token selection button on Morph Holesky Bridge"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"tokenlist1",src:n(1354).A+"",width:"2826",height:"1722"})}),"\n",(0,o.jsxs)(t.ol,{start:"2",children:["\n",(0,o.jsx)(t.li,{children:"Input & Confirm your desire Ethereum token contract address under the custom token section"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"tokenlist2",src:n(2465).A+"",width:"2838",height:"1750"})}),"\n",(0,o.jsxs)(t.ol,{start:"3",children:["\n",(0,o.jsx)(t.li,{children:"Get the Layer 2 token contract address and confirm it."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"tokenlist3",src:n(2248).A+"",width:"2852",height:"1752"})}),"\n",(0,o.jsxs)(t.ol,{start:"4",children:["\n",(0,o.jsx)(t.li,{children:"Now it is supported and you and other users can start to bridge it!"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"tokenlist4",src:n(1863).A+"",width:"2870",height:"1758"})}),"\n",(0,o.jsx)(t.h3,{id:"add-token-support-to-the-bridge-frontend",children:"Add token support to the bridge frontend"}),"\n",(0,o.jsx)(t.p,{children:"By add token to the gateway, you and other users can bridge the token by input the token address. Step further, if you want your token shows on the bridge frontend token list. You need to raise a PR to our bridge repo."}),"\n",(0,o.jsxs)(t.p,{children:["You can find how to do it in the ",(0,o.jsx)(t.a,{href:"https://github.com/morph-l2/morph-list",children:"morph list repo"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Keep in mind that:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"You need to add both your L1 & L2 token to the list"}),"\n",(0,o.jsx)(t.li,{children:"The L2 token contract address is obtained by adding your tokens through Morph bridge frontend"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Here is an ",(0,o.jsx)(t.a,{href:"https://github.com/morph-l2/morph-list/pull/27/commits/228481db6b8d69b8f40e7369dae62722aa570eb7",children:"example PR commit"})," for your reference."]})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1354:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/tokenlist1-ec52b3b1b3f60e802cf106df55eb4090.png"},2465:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/tokenlist2-0fbc5cfcd77ce1b4d2306b9afd179a98.png"},2248:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/tokenlist3-28ed57c8d69932cab63386f505f5c970.png"},1863:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/tokenlist4-0c123dddfae82f9b16ef1bedc26e5476.png"},2333:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>d});var o=n(9474);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);