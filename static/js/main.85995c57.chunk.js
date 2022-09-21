(this["webpackJsonpverified-profile"]=this["webpackJsonpverified-profile"]||[]).push([[0],{164:function(e,t){},174:function(e,t){},192:function(e,t){},222:function(e,t,n){},227:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n.n(c),a=n(147),i=n.n(a),s=n(0),o=n.n(s),l=n(5),u=n(9),j=n(235),d=n(237),b=n(89),f=Object({NODE_ENV:"production",PUBLIC_URL:"/VerifiedProfileV2",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CONTRACT_NAME||"verify.kareemayman.testnet";var h=function(e){switch(e){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:f,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:f,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};default:throw Error("Unknown environment '".concat(e,"'."))}},p=n(62),O=h("testnet");function x(){return(x=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.connect)(Object.assign({deps:{keyStore:new b.keyStores.BrowserLocalStorageKeyStore}},O));case 2:t=e.sent,window.walletConnection=new b.WalletConnection(t),window.accountId=window.walletConnection.getAccountId(),window.contract=new b.Contract(window.walletConnection.account(),O.contractName,{viewMethods:["accountExist"],changeMethods:["verifyAccount","createProfile","getUsers","changeToPending","verificationPerUser"]});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return m.apply(this,arguments)}function m(){return(m=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p.formatNearAmount,e.next=3,window.walletConnection.account().getAccountBalance();case 3:return e.t1=e.sent.total,e.abrupt("return",(0,e.t0)(e.t1,2));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){window.walletConnection.requestSignIn(O.contractName)}function w(){window.walletConnection.signOut(),window.location.reload()}var y=n(148),k=n(4),S=function(e){var t=e.name,n=e.login,c=e.coverImg;return c?Object(k.jsxs)("div",{className:"d-flex justify-content-center flex-column text-center ",style:{background:"#000",minHeight:"100vh"},children:[Object(k.jsxs)("div",{className:"mt-auto text-light mb-5",children:[Object(k.jsx)("div",{className:" ratio ratio-1x1 mx-auto mb-2",style:{maxWidth:"320px"},children:Object(k.jsx)("img",{src:c,alt:""})}),Object(k.jsx)("h1",{children:t}),Object(k.jsx)("p",{children:"Please connect your wallet to create a profile."}),Object(k.jsx)(y.a,{onClick:n,variant:"outline-light",className:"rounded-pill px-3 mt-3",children:"Connect Wallet"})]}),Object(k.jsx)("p",{className:"mt-auto text-secondary",children:"internship project"})]}):null};S.defaultProps={name:""};var C=S,I=n(233),N=n(236),F=n(234),P=n(238),D=function(e){var t=e.address,n=e.amount,c=e.symbol,r=e.destroy;return t?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(I.a,{className:"me-3",bg:"info",text:"dark",children:t}),Object(k.jsxs)(N.a,{children:[Object(k.jsx)(N.a.Toggle,{variant:"light",align:"end",id:"dropdown-basic",className:"d-flex align-items-center border rounded-pill py-1",children:n?Object(k.jsxs)(k.Fragment,{children:[n," ",Object(k.jsxs)("span",{className:"ms-1",children:[" ",c]})]}):Object(k.jsx)(F.a,{animation:"border",size:"sm",className:"opacity-25"})}),Object(k.jsxs)(N.a.Menu,{className:"shadow-lg border-0",children:[Object(k.jsx)(N.a.Item,{href:"https://explorer.testnet.near.org/accounts/".concat(t),target:"_blank",children:Object(k.jsxs)(P.a,{direction:"horizontal",gap:1,children:[Object(k.jsx)("i",{className:"bi bi-person-circle fs-4"}),Object(k.jsx)("span",{className:"font-monospace",children:t})]})}),Object(k.jsx)(N.a.Divider,{}),Object(k.jsxs)(N.a.Item,{as:"button",className:"d-flex align-items-center",onClick:function(){r()},children:[Object(k.jsx)("i",{className:"bi bi-box-arrow-right me-2 fs-4"}),"Disconnect"]})]})]})]}):null},U=n.p+"static/media/cover.c2b96abe.png",R=(n(222),function(){return Object(k.jsx)("div",{className:"d-flex justify-content-center",children:Object(k.jsx)(F.a,{animation:"border",role:"status",className:"opacity-25",children:Object(k.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})}),z=n(150),T=n(37),E=n(56),A=Object(z.a)({apiKey:"AIzaSyBvcOeJbT0Sn6a40Aj2xTfzJRhDt5GnWek",authDomain:"verified-profile.firebaseapp.com",projectId:"verified-profile",databaseURL:"gs://verified-profile.appspot.com",storageBucket:"verified-profile.appspot.com",messagingSenderId:"811507154375",appId:"1:811507154375:web:a99a1d71c063273cc96de2",measurementId:"G-MKT1969NCS"}),_=Object(T.b)(A),B=Object(E.c)(A),V=Object(E.a)(B,"Profiles"),W=_,L=1e14;function K(e){return window.contract.verificationPerUser({accountID:e})}function M(e){return H.apply(this,arguments)}function H(){return(H=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.contract.changeToPending({accountID:t},L);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e,t){return G.apply(this,arguments)}function G(){return(G=Object(l.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.contract.verifyAccount({accountID:t,verification:n},L);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(){return Q.apply(this,arguments)}function Q(){return(Q=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",window.contract.getUsers());case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var X=function(e){var t=e.userID,n=Object(c.useState)(t),r=Object(u.a)(n,1)[0],a=Object(c.useState)(!1),i=Object(u.a)(a,2),s=i[0],j=i[1],d=Object(c.useState)(!0),b=Object(u.a)(d,2),f=b[0],h=b[1],p=Object(c.useState)([]),O=Object(u.a)(p,1)[0],x=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,M(t);case 4:h(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:return e.prev=10,j(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(t){return e.apply(this,arguments)}}();var g=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(O),3!==O.length){e.next=5;break}return e.next=4,Object(E.d)(Object(E.b)(V,r),{FrontID:O[0],BackID:O[1],PicWithID:O[2]});case 4:x(r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m={padding:"10px",fontSize:"24px"};return Object(k.jsx)(k.Fragment,{children:s?Object(k.jsx)(R,{}):Object(k.jsx)("div",{style:{padding:"10px",fontSize:"30px"},children:f?Object(k.jsxs)("div",{align:"middle",children:[Object(k.jsx)("div",{style:{fontSize:"35px"},children:Object(k.jsx)("p",{children:"To be verified successfully Please upload 3 Pictures"})}),Object(k.jsx)("div",{style:m,children:"1 - Picture of the ID front :"}),Object(k.jsx)("input",{type:"file",name:"FrontID",onChange:function(e){var n=e.target.files[0];if(n.size/1024>5e3)alert("File size is too big\nPlease Choose Another File"),e.target.value=null;else{var c=Object(T.c)(W,"/files/".concat(t," frontID")),r=Object(T.d)(c,n);r.on("state_changed",(function(e){}),(function(e){return console.log(e)}),(function(){Object(T.a)(r.snapshot.ref).then((function(e){console.log(e),O[0]=e}))}))}},style:{fontSize:"15px",paddingBottom:25}}),Object(k.jsx)("div",{style:m,children:"2 - Picture of the ID back :"}),Object(k.jsx)("input",{type:"file",onChange:function(e){var n=e.target.files[0];if(n.size/1024>10240)alert("File size is too big\nPlease Choose Another File"),e.target.value=null;else{var c=Object(T.c)(W,"/files/".concat(t," BackID")),r=Object(T.d)(c,n);r.on("state_changed",(function(e){}),(function(e){return console.log(e)}),(function(){Object(T.a)(r.snapshot.ref).then((function(e){console.log(e),O[1]=e}))}))}},style:{fontSize:"15px",paddingBottom:25}}),Object(k.jsx)("div",{style:m,children:"3 - Picture of you with the ID :"}),Object(k.jsx)("input",{type:"file",onChange:function(e){var n=e.target.files[0];if(n.size/1024>10240)alert("File size is too big\nPlease Choose Another File"),e.target.value=null;else{var c=Object(T.c)(W,"/files/".concat(t," PicWithID")),r=Object(T.d)(c,n);r.on("state_changed",(function(e){}),(function(e){return console.log(e)}),(function(){Object(T.a)(r.snapshot.ref).then((function(e){console.log(e),O[2]=e}))}))}},style:{fontSize:"15px",paddingBottom:35}}),Object(k.jsx)("div",{children:Object(k.jsx)("button",{onClick:g,style:{borderWidth:2,borderColor:"rgba(0,0,0,0.2)",alignItems:"center",justifyContent:"center",width:500,height:100,backgroundColor:"#fff",borderRadius:50},children:"Submit Form"})})]}):Object(k.jsx)(Z,{ID:r})})})},Y=n(151),Z=function(e){var t=e.ID,n=Object(c.useState)(" Verification Type Not Found"),r=Object(u.a)(n,2),a=r[0],i=r[1],s=Object(c.useState)(!1),j=Object(u.a)(s,2),d=j[0],b=j[1],f=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),e.t0=i,e.next=5,K(t);case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),console.log(e.t2);case 12:return e.prev=12,b(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(t){return e.apply(this,arguments)}}();if(Object(c.useEffect)(Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:case"end":return e.stop()}}),e)}))),[]),!d){if("New"===a)return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(X,{userID:t})});if("Spam"===a)return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("h1",{align:"middle",children:[" ",t," is marked as a spam account"]})});if("Pending"===a)return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("h1",{align:"middle",children:[" ",t," is Pending Verification"]})});if("Verified"===a)return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("h1",{align:"middle",children:[" ",t," is verified successfully"]})," ",Object(k.jsx)(Y.Checkmark,{size:"large"})]});if("Rejected"===a)return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("h1",{align:"middle",children:[" ",t," Verification Rejected"]}),Object(k.jsx)(X,{userID:t})]})}return Object(k.jsx)(R,{})},$=function(){var e=Object(c.useState)(window.walletConnection.account().accountId),t=Object(u.a)(e,1)[0],n=Object(c.useState)(!1),r=Object(u.a)(n,2),a=r[0],i=r[1],s=Object(c.useState)(!0),j=Object(u.a)(s,2),d=j[0],b=j[1],f=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("checking account"),i(!0),e.t0=b,e.next=6,n=t,window.contract.accountExist({accountID:n});case 6:e.t1=e.sent,(0,e.t0)(e.t1),i(!1),e.next=14;break;case 11:e.prev=11,e.t2=e.catch(0),console.log(e.t2);case 14:return e.prev=14,e.finish(14);case 16:case"end":return e.stop()}var n}),e,null,[[0,11,14,16]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,i(!0),d){e.next=5;break}return e.next=5,window.contract.createProfile();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:return e.prev=10,i(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)(Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f().then(h());case 2:case"end":return e.stop()}}),e)}))),[]),Object(k.jsx)(k.Fragment,{children:a?Object(k.jsx)(R,{}):Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(Z,{ID:t})})})},ee=function(e){var t=e.usersList,n=Object(c.useState)([]),r=Object(u.a)(n,1)[0],a=Object(c.useState)([]),i=Object(u.a)(a,1)[0],s=Object(c.useState)([]),j=Object(u.a)(s,1)[0],d=Object(c.useState)([]),b=Object(u.a)(d,1)[0],f=Object(c.useState)([]),h=Object(u.a)(f,1)[0],p=Object(c.useState)(!1),O=Object(u.a)(p,2),x=O[0],g=O[1],m=Object(c.useState)(!1),v=Object(u.a)(m,2),w=v[0],y=v[1],S=function(){var e=Object(l.a)(o.a.mark((function e(){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),0!==t.length){for(n=0;n<t.length;n++)"Verified"===(c=t[n].split(","))[1]?b.push(c[0]):"Pending"===c[1]?r.push(c[0]):"New"===c[1]?i.push(c[0]):"Rejected"===c[1]?j.push(c[0]):"Spam"===c[1]&&h.push(c[0]);g(!0)}case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(l.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!1),e.next=4,J(t,n);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:return e.prev=9,g(!0),y(!0),e.finish(9);case 13:case"end":return e.stop()}}),e,null,[[0,6,9,13]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){S()}),[]),!1===x?Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(R,{})}):!0===w?Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(te,{})}):Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("div",{style:{background:"#000"},children:[Object(k.jsx)("h1",{children:"New"}),0===i.length?Object(k.jsx)("p",{children:"No User Found"}):Object(k.jsx)("div",{children:Object(k.jsx)("ol",{children:i.map((function(e){return Object(k.jsx)("li",{children:e})}))})}),Object(k.jsx)("h1",{children:"Verified"}),0===b.length?Object(k.jsx)("p",{children:"No User Found"}):Object(k.jsx)("div",{children:Object(k.jsx)("ol",{children:b.map((function(e){return Object(k.jsxs)("li",{children:[e," ",Object(k.jsx)("button",{style:{width:150,height:30,backgroundColor:"#fff",borderRadius:50},onClick:function(){return C(e,0)},children:"Change to New"})]})}))})}),Object(k.jsx)("h1",{children:"Spam"}),0===h.length?Object(k.jsx)("p",{children:"No User Found"}):Object(k.jsx)("div",{children:Object(k.jsx)("ol",{children:h.map((function(e){return Object(k.jsxs)("li",{children:[e," ",Object(k.jsx)("button",{style:{width:150,height:30,backgroundColor:"#fff",borderRadius:50},onClick:function(){return C(b,0)},children:"Change to New"})]})}))})}),Object(k.jsx)("h1",{children:"Pending"}),0===r.length?Object(k.jsx)("p",{children:"No User Found"}):Object(k.jsx)("div",{children:Object(k.jsx)("ol",{children:r.map((function(e){return Object(k.jsxs)("li",{children:[e," ",Object(k.jsx)("button",{style:{width:150,height:30,backgroundColor:"#fff",borderRadius:50},onClick:function(){return C(e,3)},children:"Verify"}),Object(k.jsx)("button",{style:{width:150,height:30,backgroundColor:"#fff",borderRadius:50},onClick:function(){return C(b,2)},children:"Reject"}),Object(k.jsx)("button",{style:{width:150,height:30,backgroundColor:"#fff",borderRadius:50},onClick:function(){return C(b,4)},children:"Spam"})]})}))})}),Object(k.jsx)("h1",{children:"Rejected"}),0===j.length?Object(k.jsx)("p",{children:"No User Found"}):Object(k.jsx)("div",{children:Object(k.jsx)("ol",{children:j.map((function(e){return Object(k.jsxs)("li",{children:[e," ",Object(k.jsx)("button",{style:{width:150,height:30,backgroundColor:"#fff",borderRadius:50},onClick:function(){return C(e,3)},children:"verify"})]})}))})})]})})},te=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],a=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("setting users"),e.t0=r,e.next=5,q();case 5:e.t1=e.sent,(0,e.t0)(e.t1),console.log(" done"),e.next=13;break;case 10:e.prev=10,e.t2=e.catch(0),console.log(e.t2);case 13:return e.prev=13,e.finish(13);case 15:case"end":return e.stop()}}),e,null,[[0,10,13,15]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)(Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a();case 2:case"end":return e.stop()}}),e)}))),[]),0===n.length?Object(k.jsx)(R,{}):Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(ee,{usersList:n})})},ne=function(){var e=window.walletConnection.account(),t=Object(c.useState)("0"),n=Object(u.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)(["aliabdallah9.testnet","mhassanist.testnet","kareemayman.testnet","hamzatest.tesnet"]),s=Object(u.a)(i,1)[0];var b=Object(c.useCallback)(Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.accountId){t.next=6;break}return t.t0=a,t.next=4,g();case 4:t.t1=t.sent,(0,t.t0)(t.t1);case 6:case"end":return t.stop()}}),t)}))));return Object(c.useEffect)((function(){b()}),[b]),Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("div",{style:{background:"#000",backgroundPosition:"center",backgroundSize:"cover",width:"100vw",height:"100vh",color:"white"},children:e.accountId?Object(k.jsxs)(j.a,{fluid:"md",children:[Object(k.jsx)(d.a,{className:"justify-content-end pt-3 pb-3",children:Object(k.jsx)(d.a.Item,{children:Object(k.jsx)(D,{address:e.accountId,amount:r,symbol:"NEAR",destroy:w})})}),Object(k.jsxs)("div",{children:[" ",Object(k.jsx)("h1",{children:"VProfile"})]}),Object(k.jsx)("main",{children:function(){for(var t=0;t<s.length;t++)if(e.accountId===s[t])return!0;return!1}()?Object(k.jsx)(te,{}):Object(k.jsx)($,{})})]}):Object(k.jsx)(C,{name:"Verified Accounts",login:v,coverImg:U})})})},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,239)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};n(228),n(225),n(226);window.nearInitPromise=function(){return x.apply(this,arguments)}().then((function(){i.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(ne,{})}),document.getElementById("root"))})).catch(console.error),ce()}},[[227,1,2]]]);
//# sourceMappingURL=main.85995c57.chunk.js.map