(this["webpackJsonpverified-profile"]=this["webpackJsonpverified-profile"]||[]).push([[0],{164:function(e,t){},174:function(e,t){},192:function(e,t){},222:function(e,t,n){},227:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n.n(c),a=n(146),s=n.n(a),i=n(0),o=n.n(i),u=n(5),l=n(9),j=n(235),d=n(237),f=n(88),b=Object({NODE_ENV:"production",PUBLIC_URL:"/VerifiedProfileV2",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CONTRACT_NAME||"verify.kareemayman.testnet";var p=function(e){switch(e){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:b,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:b,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};default:throw Error("Unknown environment '".concat(e,"'."))}},h=n(60),O=p("testnet");function x(){return(x=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.connect)(Object.assign({deps:{keyStore:new f.keyStores.BrowserLocalStorageKeyStore}},O));case 2:t=e.sent,window.walletConnection=new f.WalletConnection(t),window.accountId=window.walletConnection.getAccountId(),window.contract=new f.Contract(window.walletConnection.account(),O.contractName,{viewMethods:["getUsers","verificationPerUser","getPendingUsers"],changeMethods:["verifyAccount","createProfile","isAccountVerified"]});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=h.formatNearAmount,e.next=3,window.walletConnection.account().getAccountBalance();case 3:return e.t1=e.sent.total,e.abrupt("return",(0,e.t0)(e.t1,2));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){window.walletConnection.requestSignIn(O.contractName)}function g(){window.walletConnection.signOut(),window.location.reload()}var y=n(147),k=n(4),S=function(e){var t=e.name,n=e.login,c=e.coverImg;return c?Object(k.jsxs)("div",{className:"d-flex justify-content-center flex-column text-center ",style:{background:"#000",minHeight:"100vh"},children:[Object(k.jsxs)("div",{className:"mt-auto text-light mb-5",children:[Object(k.jsx)("div",{className:" ratio ratio-1x1 mx-auto mb-2",style:{maxWidth:"320px"},children:Object(k.jsx)("img",{src:c,alt:""})}),Object(k.jsx)("h1",{children:t}),Object(k.jsx)("p",{children:"Please connect your wallet to create a profile."}),Object(k.jsx)(y.a,{onClick:n,variant:"outline-light",className:"rounded-pill px-3 mt-3",children:"Connect Wallet"})]}),Object(k.jsx)("p",{className:"mt-auto text-secondary",children:"internship project"})]}):null};S.defaultProps={name:""};var I=S,N=n(233),C=n(236),P=n(234),D=n(238),F=function(e){var t=e.address,n=e.amount,c=e.symbol,r=e.destroy;return t?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(N.a,{className:"me-3",bg:"info",text:"dark",children:t}),Object(k.jsxs)(C.a,{children:[Object(k.jsx)(C.a.Toggle,{variant:"light",align:"end",id:"dropdown-basic",className:"d-flex align-items-center border rounded-pill py-1",children:n?Object(k.jsxs)(k.Fragment,{children:[n," ",Object(k.jsxs)("span",{className:"ms-1",children:[" ",c]})]}):Object(k.jsx)(P.a,{animation:"border",size:"sm",className:"opacity-25"})}),Object(k.jsxs)(C.a.Menu,{className:"shadow-lg border-0",children:[Object(k.jsx)(C.a.Item,{href:"https://explorer.testnet.near.org/accounts/".concat(t),target:"_blank",children:Object(k.jsxs)(D.a,{direction:"horizontal",gap:2,children:[Object(k.jsx)("i",{className:"bi bi-person-circle fs-4"}),Object(k.jsx)("span",{className:"font-monospace",children:t})]})}),Object(k.jsx)(C.a.Divider,{}),Object(k.jsxs)(C.a.Item,{as:"button",className:"d-flex align-items-center",onClick:function(){r()},children:[Object(k.jsx)("i",{className:"bi bi-box-arrow-right me-2 fs-4"}),"Disconnect"]})]})]})]}):null},U=n.p+"static/media/cover.c2b96abe.png",T=(n(222),function(){return Object(k.jsx)("div",{className:"d-flex justify-content-center",children:Object(k.jsx)(P.a,{animation:"border",role:"status",className:"opacity-25",children:Object(k.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})}),E=n(14),A=n(149),V=n(78),_=n(150),R=Object(A.a)({apiKey:"AIzaSyBvcOeJbT0Sn6a40Aj2xTfzJRhDt5GnWek",authDomain:"verified-profile.firebaseapp.com",projectId:"verified-profile",databaseURL:"gs://verified-profile.appspot.com",storageBucket:"verified-profile.appspot.com",messagingSenderId:"811507154375",appId:"1:811507154375:web:a99a1d71c063273cc96de2",measurementId:"G-MKT1969NCS"}),B={storage:Object(V.b)(R),db:Object(_.a)(R)},L=1e14;function W(e){return window.contract.verificationPerUser({accountID:e})}function z(e,t){return K.apply(this,arguments)}function K(){return(K=Object(u.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.contract.verifyAccount({accountID:t,verification:n},L);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=function(e){var t=e.userID,n=Object(c.useState)(t),r=Object(l.a)(n,1)[0],a=Object(c.useState)(!1),s=Object(l.a)(a,2),i=s[0],j=s[1],d=Object(c.useState)(!0),f=Object(l.a)(d,2),b=f[0],p=f[1],h=Object(c.useState)([]),O=Object(l.a)(h,2),x=O[0],m=O[1],v=Object(c.useState)(0),w=Object(l.a)(v,2),g=(w[0],w[1],Object(c.useState)("")),y=Object(l.a)(g,2),S=y[0],I=y[1],N=Object(c.useState)([]),C=Object(l.a)(N,2),P=C[0],D=C[1],F=function(){var e=Object(u.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,z(t,n);case 4:p(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:return e.prev=10,j(!1),e.finish(10);case 13:case 14:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(t,n){return e.apply(this,arguments)}}();var U={padding:"10px",fontSize:"24px"};return Object(k.jsx)(k.Fragment,{children:i?Object(k.jsx)(T,{}):Object(k.jsx)("div",{children:b?Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{style:U,children:Object(k.jsx)("p1",{children:"To be verified successfully Please upload 3 Pictures"})}),Object(k.jsx)("div",{style:U,children:"1. Picture of the ID front"}),Object(k.jsx)("div",{style:U,children:"2. Picture of the ID back"}),Object(k.jsx)("div",{style:U,children:"3. Picture of you with the ID"}),Object(k.jsx)("div",{children:Object(k.jsx)("input",{type:"file",multiple:!0,onChange:function(e){for(var t=function(t){var n=e.target.files[t];m((function(e){return[].concat(Object(E.a)(e),[n])}))},n=0;n<e.target.files.length;n++)t(n)}})}),Object(k.jsx)("div",{children:Object(k.jsx)("button",{onClick:function(){if(3!==x.length)alert("Please upload 3 pictures");else{var e=[];x.map((function(t){var n=Object(V.c)(B,"/files/".concat(t.name)),c=Object(V.d)(n,t);e.push(c),c.on("state_changed",(function(e){return console.log(e)}),Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(V.a)(c.snapshot.ref).then((function(e){console.log(e),D((function(e){return[].concat(Object(E.a)(e),[P])}))}));case 1:case"end":return e.stop()}}),e)}))))})),F(r,1)}},children:" Submit Form "})}),Object(k.jsxs)("div",{children:[Object(k.jsx)("input",{type:"text",placeholder:"Name",value:S,onChange:function(e){return I(e.target.value)}}),Object(k.jsx)("button",{onClick:function(e){e.preventDefault(),B.collection("Profiles").add({name:S})},children:"Submit"})]})]}):Object(k.jsx)(J,{ID:r})})})},H=n(151),J=function(e){var t=e.ID,n=Object(c.useState)(" Verification Type Not Found"),r=Object(l.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(!1),j=Object(l.a)(i,2),d=j[0],f=j[1],b=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f(!0),e.t0=s,e.next=5,W(t);case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),console.log(e.t2);case 12:return e.prev=12,f(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(t){return e.apply(this,arguments)}}();if(Object(c.useEffect)(Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:case"end":return e.stop()}}),e)}))),[]),!d){if("New"===a)return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(M,{userID:t})});if("Spam"===a)return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("h1",{align:"middle",children:[" ",t," is marked as a spam account"]})});if("Pending"===a)return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("h1",{align:"middle",children:[" ",t," is Pending verification"]}),Object(k.jsx)(T,{})]});if("Verified"===a)return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("h1",{align:"middle",children:[" ",t," is verified successfully"]})," ",Object(k.jsx)(H.Checkmark,{size:"large"})]});if("Rejected"===a)return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("h1",{align:"middle",children:[" ",t," verification rejected"]})})}return Object(k.jsxs)("h1",{children:[" Error : ",a]})},G=function(){var e=Object(c.useState)("ID"),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),s=Object(l.a)(a,2),i=s[0],j=s[1],d=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),r(window.walletConnection.account().accountId),e.next=5,window.contract.createProfile();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:return e.prev=10,j(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)(Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:case"end":return e.stop()}}),e)}))),[]),Object(k.jsx)(k.Fragment,{children:i?Object(k.jsx)(T,{}):Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(J,{ID:n})})})},q=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),s=Object(l.a)(a,2),i=s[0],j=s[1],d=Object(c.useState)([]),f=Object(l.a)(d,2),b=f[0],p=f[1],h=Object(c.useState)([]),O=Object(l.a)(h,2),x=O[0],m=O[1],v=Object(c.useState)([]),w=Object(l.a)(v,2),g=w[0],y=w[1],S=Object(c.useState)(!1),I=Object(l.a)(S,2),N=I[0],C=I[1],P=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C(!0),e.t0=r,e.next=5,window.contract.getPendingUsers();case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),console.log(e.t2);case 12:return e.prev=12,C(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C(!0),e.next=4,z(t,3);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:return e.prev=9,C(!1),e.finish(9);case 12:case 13:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C(!0),e.t0=j,e.next=5,window.contract.getNewUsers();case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),console.log(e.t2);case 12:return e.prev=12,C(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C(!0),e.t0=p,e.next=5,window.contract.getRejectedUsers();case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),console.log(e.t2);case 12:return e.prev=12,C(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C(!0),e.t0=m,e.next=5,window.contract.getVerifiedUsers();case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),console.log(e.t2);case 12:return e.prev=12,C(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C(!0),e.t0=y,e.next=5,window.contract.getSpamUsers();case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),console.log(e.t2);case 12:return e.prev=12,C(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)(Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:return e.next=4,F();case 4:return e.next=6,U();case 6:return e.next=8,E();case 8:return e.next=10,A();case 10:case"end":return e.stop()}}),e)}))),[]),Object(k.jsx)(k.Fragment,{children:N?Object(k.jsx)(T,{}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("ol",{children:n.map((function(e){return Object(k.jsxs)("li",{children:[e," ",Object(k.jsx)("button",{onClick:function(){return D(e).then(P)},children:"Verify"})," "]})}))}),Object(k.jsx)("ol",{children:i.map((function(e){return Object(k.jsxs)("li",{children:[e,'   "New"']})}))}),Object(k.jsx)("ol",{children:b.map((function(e){return Object(k.jsxs)("li",{children:[e,'   "Rejected"']})}))}),Object(k.jsx)("ol",{children:x.map((function(e){return Object(k.jsxs)("li",{children:[e,'   "Verified"']})}))}),Object(k.jsx)("ol",{children:g.map((function(e){return Object(k.jsxs)("li",{children:[e,'   "Verified"']})}))})]})})},Q=function(){var e=window.walletConnection.account(),t=Object(c.useState)("0"),n=Object(l.a)(t,2),r=n[0],a=n[1],s=Object(c.useCallback)(Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.accountId){t.next=6;break}return t.t0=a,t.next=4,m();case 4:t.t1=t.sent,(0,t.t0)(t.t1);case 6:case"end":return t.stop()}}),t)}))));return Object(c.useEffect)((function(){s()}),[s]),Object(k.jsx)(k.Fragment,{children:e.accountId?Object(k.jsxs)(j.a,{fluid:"md",children:[Object(k.jsx)(d.a,{className:"justify-content-end pt-3 pb-5",children:Object(k.jsx)(d.a.Item,{children:Object(k.jsx)(F,{address:e.accountId,amount:r,symbol:"NEAR",destroy:g})})}),Object(k.jsxs)("dev",{children:[" ",Object(k.jsx)("h1",{align:"middle",children:"Verified Accounts"})]}),Object(k.jsx)("main",{children:"kareemayman.testnet"===e.accountId?Object(k.jsx)(q,{}):Object(k.jsx)(G,{})})]}):Object(k.jsx)(I,{name:"Verified Accounts",login:w,coverImg:U})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,239)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};n(228),n(225),n(226);window.nearInitPromise=function(){return x.apply(this,arguments)}().then((function(){s.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(Q,{})}),document.getElementById("root"))})).catch(console.error),X()}},[[227,1,2]]]);
//# sourceMappingURL=main.bcdde04f.chunk.js.map