(this["webpackJsonpverified-profile"]=this["webpackJsonpverified-profile"]||[]).push([[0],{142:function(e,t){},152:function(e,t){},170:function(e,t){},201:function(e,t,n){},207:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(127),s=n.n(a),i=n(4),o=n.n(i),l=n(12),u=n(5),j=n(214),d=n(216),b=n(72),f=Object({NODE_ENV:"production",PUBLIC_URL:"/verifiedprofilev2",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CONTRACT_NAME||"verify.kareemayman.testnet";var h=function(e){switch(e){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:f,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:f,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};default:throw Error("Unknown environment '".concat(e,"'."))}},p=n(46),x=h("testnet");function O(){return(O=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.connect)(Object.assign({deps:{keyStore:new b.keyStores.BrowserLocalStorageKeyStore}},x));case 2:t=e.sent,window.walletConnection=new b.WalletConnection(t),window.accountId=window.walletConnection.getAccountId(),window.contract=new b.Contract(window.walletConnection.account(),x.contractName,{viewMethods:["getusers","verificationPerUser","getPendingUsers"],changeMethods:["verifyAccount","createProfile","isAccountVerified"]});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return w.apply(this,arguments)}function w(){return(w=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p.formatNearAmount,e.next=3,window.walletConnection.account().getAccountBalance();case 3:return e.t1=e.sent.total,e.abrupt("return",(0,e.t0)(e.t1,2));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){window.walletConnection.requestSignIn(x.contractName)}function v(){window.walletConnection.signOut(),window.location.reload()}var k=n(128),y=n(1),N=function(e){var t=e.name,n=e.login,c=e.coverImg;return c?Object(y.jsxs)("div",{className:"d-flex justify-content-center flex-column text-center ",style:{background:"#000",minHeight:"100vh"},children:[Object(y.jsxs)("div",{className:"mt-auto text-light mb-5",children:[Object(y.jsx)("div",{className:" ratio ratio-1x1 mx-auto mb-2",style:{maxWidth:"320px"},children:Object(y.jsx)("img",{src:c,alt:""})}),Object(y.jsx)("h1",{children:t}),Object(y.jsx)("p",{children:"Please connect your wallet to create a profile."}),Object(y.jsx)(k.a,{onClick:n,variant:"outline-light",className:"rounded-pill px-3 mt-3",children:"Connect Wallet"})]}),Object(y.jsx)("p",{className:"mt-auto text-secondary",children:"internship project"})]}):null};N.defaultProps={name:""};var I=N,S=n(212),C=n(215),F=n(213),E=n(217),P=function(e){var t=e.address,n=e.amount,c=e.symbol,r=e.destroy;return t?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(S.a,{className:"me-3",bg:"info",text:"dark",children:t}),Object(y.jsxs)(C.a,{children:[Object(y.jsx)(C.a.Toggle,{variant:"light",align:"end",id:"dropdown-basic",className:"d-flex align-items-center border rounded-pill py-1",children:n?Object(y.jsxs)(y.Fragment,{children:[n," ",Object(y.jsxs)("span",{className:"ms-1",children:[" ",c]})]}):Object(y.jsx)(F.a,{animation:"border",size:"sm",className:"opacity-25"})}),Object(y.jsxs)(C.a.Menu,{className:"shadow-lg border-0",children:[Object(y.jsx)(C.a.Item,{href:"https://explorer.testnet.near.org/accounts/".concat(t),target:"_blank",children:Object(y.jsxs)(E.a,{direction:"horizontal",gap:2,children:[Object(y.jsx)("i",{className:"bi bi-person-circle fs-4"}),Object(y.jsx)("span",{className:"font-monospace",children:t})]})}),Object(y.jsx)(C.a.Divider,{}),Object(y.jsxs)(C.a.Item,{as:"button",className:"d-flex align-items-center",onClick:function(){r()},children:[Object(y.jsx)("i",{className:"bi bi-box-arrow-right me-2 fs-4"}),"Disconnect"]})]})]})]}):null},U=n.p+"static/media/cover.c2b96abe.png",D=(n(201),function(){return Object(y.jsx)("div",{className:"d-flex justify-content-center",children:Object(y.jsx)(F.a,{animation:"border",role:"status",className:"opacity-25",children:Object(y.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})}),A=1e14;function T(e){return window.contract.verificationPerUser({accountID:e})}function _(e,t){return V.apply(this,arguments)}function V(){return(V=Object(l.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.contract.verifyAccount({accountID:t,verification:n},A);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var R=function(e){var t=e.userID,n=Object(c.useState)(t),r=Object(u.a)(n,2),a=r[0],s=(r[1],Object(c.useState)(!1)),i=Object(u.a)(s,2),j=i[0],d=i[1],b=Object(c.useState)(!0),f=Object(u.a)(b,2),h=f[0],p=f[1],x=function(){var e=Object(l.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,_(t,n);case 4:p(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:return e.prev=10,d(!1),e.finish(10);case 13:case 14:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(y.jsx)(y.Fragment,{children:j?Object(y.jsx)(D,{}):Object(y.jsx)("div",{children:h?Object(y.jsx)("button",{align:"middle",onClick:function(){return x(a,1)},children:" Submit Form "}):Object(y.jsx)(L,{ID:a})})})},B=n(130),L=function(e){var t=e.ID,n=Object(c.useState)(" Verification Type Not Found"),r=Object(u.a)(n,2),a=r[0],s=r[1],i=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=s,e.next=4,T(t);case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.log(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)(Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(t);case 2:case"end":return e.stop()}}),e)}))),[]),"New"===a?Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(R,{userID:t})}):"Spam"===a?Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("h1",{align:"middle",children:[" ",t," is marked as a spam account"]})}):"Pending"===a?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("h1",{align:"middle",children:[" ",t," is Pending verification"]}),Object(y.jsx)(D,{})]}):"Verified"===a?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("h1",{align:"middle",children:[" ",t," is verified successfully"]})," ",Object(y.jsx)(B.Checkmark,{size:"large"})]}):"Rejected"===a?Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("h1",{align:"middle",children:[" ",t," verification rejected"]})}):Object(y.jsxs)("h1",{children:[" Error : ",a]})},W=function(){var e=Object(c.useState)("ID"),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),s=Object(u.a)(a,2),i=s[0],j=s[1],d=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),r(window.walletConnection.account().accountId),e.next=5,window.contract.createProfile();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:return e.prev=10,j(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)(Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:case"end":return e.stop()}}),e)}))),[]),Object(y.jsx)(y.Fragment,{children:i?Object(y.jsx)(D,{}):Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(L,{ID:n})})})},H=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),s=Object(u.a)(a,2),i=s[0],j=s[1],d=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.t0=r,e.next=5,window.contract.getPendingUsers();case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),console.log(e.t2);case 12:return e.prev=12,j(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,_(t,3);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:return e.prev=9,j(!1),e.finish(9);case 12:case 13:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)(Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:case"end":return e.stop()}}),e)}))),[]),0===n.length?Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("h1",{align:"middle",children:" All Users Have Been Verified!"})}):Object(y.jsx)(y.Fragment,{children:i?Object(y.jsx)(D,{}):Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("ol",{children:n.map((function(e){return Object(y.jsxs)("li",{children:[e," ",Object(y.jsx)("button",{onClick:function(){return b(e).then(d)},children:"Verify"})," "]})}))})})})},M=function(){var e=window.walletConnection.account(),t=Object(c.useState)("0"),n=Object(u.a)(t,2),r=n[0],a=n[1],s=Object(c.useCallback)(Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.accountId){t.next=6;break}return t.t0=a,t.next=4,m();case 4:t.t1=t.sent,(0,t.t0)(t.t1);case 6:case"end":return t.stop()}}),t)}))),[e]);return Object(c.useEffect)((function(){s()}),[s]),Object(y.jsx)(y.Fragment,{children:e.accountId?Object(y.jsxs)(j.a,{fluid:"md",children:[Object(y.jsx)(d.a,{className:"justify-content-end pt-3 pb-5",children:Object(y.jsx)(d.a.Item,{children:Object(y.jsx)(P,{address:e.accountId,amount:r,symbol:"NEAR",destroy:v})})}),Object(y.jsxs)("dev",{children:[" ",Object(y.jsx)("h1",{align:"middle",children:"Verified Accounts"})]}),Object(y.jsx)("main",{children:"kareemayman.testnet"===e.accountId?Object(y.jsx)(H,{}):Object(y.jsx)(W,{})})]}):Object(y.jsx)(I,{name:"Verified Accounts",login:g,coverImg:U})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,218)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};n(206),n(204),n(205);window.nearInitPromise=function(){return O.apply(this,arguments)}().then((function(){s.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(M,{})}),document.getElementById("root"))})).catch(console.error),K()}},[[207,1,2]]]);
//# sourceMappingURL=main.7a9a8ddf.chunk.js.map