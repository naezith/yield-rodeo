(this["webpackJsonpyield-rodeo"]=this["webpackJsonpyield-rodeo"]||[]).push([[0],{119:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),c=a.n(i),s=(a(69),a(70),a(9)),o=a(17),l=a.n(o),d=a(32),u=a(19),f=a(53),p=(a(72),a(16)),j=function(e,t){var a,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Object(p.a)(t);try{for(r.s();!(a=r.n()).done;){var i=a.value;if(n){if(e===i)return!0}else if(-1!==e.indexOf(i))return!0}}catch(c){r.e(c)}finally{r.f()}return!1},h=function(e,t){var a,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Object(p.a)(t);try{for(r.s();!(a=r.n()).done;){var i=a.value;if(n){if(-1!==e.indexOf(i))return!0}else{var c,s=Object(p.a)(e);try{for(s.s();!(c=s.n()).done;){var o=c.value;if(-1!==o.indexOf(i))return!0}}catch(l){s.e(l)}finally{s.f()}}}}catch(l){r.e(l)}finally{r.f()}return!1},x=a(15),b=function(e){var t=Math.pow(10,Math.log10(e+1)/365)-1;return isNaN(t)?0:t},m=function(e,t){var a=x(e).format(t);return-1!==a.indexOf("NaN")?"":a},y=function(e){return m(e,"$0,0.0a").toUpperCase()},O=function(e,t){var a=t.desiredCoins,n=t.strictFilter,r=t.exactMatch,i=t.desiredPlatforms,c=t.desiredNetworks,s=t.includeSingleAssets,o=t.includeLPs,l=i.trim().toUpperCase().split(" "),d=c.trim().toUpperCase().split(" ");return e.filter((function(e){var t=e.assets.map((function(e){return e.toLowerCase()}));if(!o&&e.assets.length>1)return!1;if(!s&&1===e.assets.length)return!1;var i=a.trim().toLowerCase().split(" ");if(i.length>0)if(1===e.assets.length){if(!h(t,i,r))return!1}else if(n){if(!function(e,t){var a,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Object(p.a)(e);try{for(r.s();!(a=r.n()).done;){var i=a.value;if(n){if(-1===t.indexOf(i))return!1}else{var c,s=!1,o=Object(p.a)(t);try{for(o.s();!(c=o.n()).done;){var l=c.value;if(-1!==i.indexOf(l)){s=!0;break}}}catch(d){o.e(d)}finally{o.f()}if(!s)return!1}}}catch(d){r.e(d)}finally{r.f()}return!0}(t,i,r))return!1}else if(!h(t,i,r))return!1;return!(l.length>0&&!j(e.platform.toUpperCase(),l))&&!(d.length>0&&!j(e.network.toUpperCase(),d))}))},g={COMPLEXITY_LOW:{category:"Categry-Beefy",score:0,title:"Complexity-Low-Titl",explanation:"Complexity-Low-Expl",condition:"Complexity-Low-Cond"},COMPLEXITY_MID:{category:"Categry-Beefy",score:.3,title:"Complexity-Mid-Titl",explanation:"Complexity-Mid-Expl",condition:"Complexity-Mid-Cond"},COMPLEXITY_HIGH:{category:"Categry-Beefy",score:.5,title:"Complexity-Hi-Titl",explanation:"Complexity-Hi-Expl",condition:"Complexity-Hi-Cond"},BATTLE_TESTED:{category:"Categry-Beefy",score:0,title:"Testd-Battle-Titl",explanation:"Testd-Battle-Expl",condition:"Testd-Battle-Cond"},NEW_STRAT:{category:"Categry-Beefy",score:.3,title:"Testd-New-Titl",explanation:"Testd-New-Expl",condition:"Testd-New-Cond"},EXPERIMENTAL_STRAT:{category:"Categry-Beefy",score:.7,title:"Testd-Experimtl-Titl",explanation:"Testd-Experimtl-Expl",condition:"Testd-Experimtl-Cond"},IL_NONE:{category:"Categry-Asset",score:0,title:"IL-None-Titl",explanation:"IL-None-Expl",condition:"IL-None-Cond"},IL_LOW:{category:"Categry-Asset",score:.2,title:"IL-Low-Titl",explanation:"IL-Low-Expl",condition:"IL-Low-Cond"},IL_HIGH:{category:"Categry-Asset",score:.5,title:"IL-High-Titl",explanation:"IL-High-Expl",condition:"IL-High-Cond"},ALGO_STABLE:{category:"Categry-Asset",score:.5,title:"IL-AlgoStable-Titl",explanation:"IL-AlgoStable-Expl",condition:"IL-AlgoStable-Cond"},LIQ_HIGH:{category:"Categry-Asset",score:0,title:"Liquidt-High-Titl",explanation:"Liquidt-High-Expl",condition:"Liquidt-High-Cond"},LIQ_LOW:{category:"Categry-Asset",score:.3,title:"Liquidt-Low-Titl",explanation:"Liquidt-Low-Expl",condition:"Liquidt-Low-Cond"},MCAP_LARGE:{category:"Categry-Asset",score:0,title:"MktCap-Large-Titl",explanation:"MktCap-Large-Expl",condition:"MktCap-Large-Cond"},MCAP_MEDIUM:{category:"Categry-Asset",score:.1,title:"MktCap-Mid-Titl",explanation:"MktCap-Mid-Expl",condition:"MktCap-Mid-Cond"},MCAP_SMALL:{category:"Categry-Asset",score:.3,title:"MktCap-Small-Titl",explanation:"MktCap-Small-Expl",condition:"MktCap-Small-Cond"},MCAP_MICRO:{category:"Categry-Asset",score:.5,title:"MktCap-Micro-Titl",explanation:"MktCap-Micro-Expl",condition:"MktCap-Micro-Cond"},SUPPLY_CENTRALIZED:{category:"Categry-Asset",score:1,title:"Concentrated-Titl",explanation:"Concentrated-Expl",condition:"Concentrated-Cond"},PLATFORM_ESTABLISHED:{category:"Categry-Platform",score:0,title:"Platfrm-Establshd-Titl",explanation:"Platfrm-Establshd-Expl",condition:"Platfrm-Establshd-Cond"},PLATFORM_NEW:{category:"Categry-Platform",score:.5,title:"Platfrm-New-Titl",explanation:"Platfrm-New-Expl",condition:"Platfrm-New-Cond"},NO_AUDIT:{category:"Categry-Platform",score:.3,title:"Platfrm-AuditNo-Titl",explanation:"Platfrm-AuditNo-Expl",condition:"Platfrm-AuditNo-Cond"},AUDIT:{category:"Categry-Platform",score:0,title:"Platfrm-Audit-Titl",explanation:"Platfrm-Audit-Expl",condition:"Platfrm-Audit-Cond"},CONTRACTS_VERIFIED:{category:"Categry-Platform",score:0,title:"Platfrm-Verified-Titl",explanation:"Platfrm-Verified-Expl",condition:"Platfrm-Verified-Cond"},CONTRACTS_UNVERIFIED:{category:"Categry-Platform",score:1,title:"Platfrm-VerifiedNo-Titl",explanation:"Platfrm-VerifiedNo-Expl",condition:"Platfrm-VerifiedNo-Cond"},ADMIN_WITH_TIMELOCK:{category:"Categry-Platform",score:0,title:"Platfrm-Timelock-Titl",explanation:"Platfrm-Timelock-Expl",condition:"Platfrm-Timelock-Cond"},ADMIN_WITHOUT_TIMELOCK:{category:"Categry-Platform",score:.5,title:"Platfrm-TimelockNo-Titl",explanation:"Platfrm-TimelockNo-Expl",condition:"Platfrm-TimelockNo-Cond"}},C={"Categry-Beefy":.2,"Categry-Asset":.2,"Categry-Platform":.6},v=function(e){return e&&0!==e.length?10*(1-function(e){var t={};for(var a in C)t[a]=[];e.forEach((function(e,a){if(e in g){var n=g[e].category;n in C?t[n].push(e):console.warn("unknown category",n)}}));var n=0;for(var r in C)n+=C[r]*Math.min(1,t[r].reduce((function(e,t){return e+g[t].score}),0));return n}(e)):null},k=function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:150;return fetch(t,a).then((function(r){if(r.ok)return r;if(n>0)return e(t,a,n-1);throw new Error(r.status)})).catch((function(e){return console.error(e.message)}))},A=function(){return"?p="+(new Date).getTime()},L=[],T={},w=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a,n,r,i,c,s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://raw.githubusercontent.com/beefyfinance/beefy-api/master/packages/address-book/types/chainid.ts"+A());case 2:return t=e.sent,e.next=5,t.text();case 5:for(a=(a=e.sent).substr(a.indexOf("{"),a.indexOf("}")+1).replace(/ = /g,": ").replace(",\n}","\n}"),n=JSON.parse(a.replace(/(['"])?([a-z0-9A-Z_]+)(['"])?:/g,'"$2": ')),L=[],T={},r=0,i=Object.entries(n);r<i.length;r++)c=Object(u.a)(i[r],2),s=c[0],o=c[1],L.push(s),T[s]={id:o};return e.abrupt("return",{networks:L,network_info:T});case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(e){var t,a=Object(p.a)(e);try{for(a.s();!(t=a.n()).done;){var n=t.value;if(n.network=n.chain,n.network_id=T[n.chain].id,n.key=n.network+"-"+n.id,n.withdrawalFee&&n.withdrawalFee.length>0&&("0.0%"===n.withdrawalFee&&(n.withdrawalFee="0%"),"."===n.withdrawalFee[0]&&(n.withdrawalFee="0"+n.withdrawalFee)),n.assets){n.assets=n.assets.sort(),n.name="";var r,i=Object(p.a)(n.assets);try{for(i.s();!(r=i.n()).done;){var c=r.value;""!==n.name&&(n.name+=" \xb7 "),n.name+=c}}catch(s){i.e(s)}finally{i.f()}}n.depositFee&&n.depositFee.length>0&&("."===n.depositFee[0]&&(n.depositFee="0"+n.depositFee),n.depositFee=n.depositFee.replace("<",""))}}catch(s){a.e(s)}finally{a.f()}return e},N=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:return e.t0=P,e.next=5,k("https://api.beefy.finance/vaults"+A());case 5:return e.next=7,e.sent.json();case 7:return e.t1=e.sent,t=(0,e.t0)(e.t1),e.next=11,k("https://api.beefy.finance/apy/breakdown"+A());case 11:return e.next=13,e.sent.json();case 13:return a=e.sent,e.next=16,k("https://api.beefy.finance/tvl"+A());case 16:return e.next=18,e.sent.json();case 18:return n=e.sent,e.abrupt("return",t.map((function(e){var t,r=n[e.network_id]?n[e.network_id][e.id]:"",i=a[e.id],c=v(e.risks);return Object(s.a)(Object(s.a)(Object(s.a)({vaultUrl:I(e.network,e.id),withdrawalFee:"0.1%",depositFee:"0%",dailyApy:i&&b(i.totalApy),monthlyApy:i&&(t=i.totalApy,t/12)},e),{},{tvl:r},i),{},{safetyScore:null===c?9.991337:c})})).filter((function(e){return e.tvl>0&&e.totalApy>1e-4})).sort((function(e,t){return e.totalApy<t.totalApy?1:-1})));case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=JSON.parse(window.localStorage.getItem("logosMap"));(function(){var e=Object(d.a)(l.a.mark((function e(){var t,a,n,r,i,c,s,o,d,u,f;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E&&!(E.nextRefreshTime<=Date.now())){e.next=47;break}return E={},t=2,e.next=5,fetch("https://api.github.com/rate_limit");case 5:return e.next=7,e.sent.json();case 7:if(e.t0=e.sent.rate.remaining,e.t1=t,!(e.t0>=e.t1)){e.next=47;break}return e.next=13,fetch("https://api.github.com/repos/beefyfinance/beefy-app/commits/master");case 13:return e.next=15,e.sent.json();case 15:return a=e.sent.sha,e.next=18,fetch("https://api.github.com/repos/beefyfinance/beefy-app/git/trees/".concat(a,"?recursive=1"));case 18:return e.next=20,e.sent.json();case 20:n=e.sent,r=Object(p.a)(n.tree),e.prev=22,r.s();case 24:if((i=r.n()).done){e.next=37;break}if("src/images/single-assets"!==(c=i.value).path){e.next=35;break}return e.next=29,fetch(c.url);case 29:return e.next=31,e.sent.json();case 31:s=e.sent,o=Object(p.a)(s.tree);try{for(o.s();!(d=o.n()).done;)u=d.value,f=u.path.split(".")[0],E[f]=u.path}catch(l){o.e(l)}finally{o.f()}return e.abrupt("break",37);case 35:e.next=24;break;case 37:e.next=42;break;case 39:e.prev=39,e.t2=e.catch(22),r.e(e.t2);case 42:return e.prev=42,r.f(),e.finish(42);case 45:E.nextRefreshTime=Date.now()+9e5,window.localStorage.setItem("logosMap",JSON.stringify(E));case 47:case"end":return e.stop()}}),e,null,[[22,39,42,45]])})));return function(){return e.apply(this,arguments)}})()();var F=function(e){return"https://raw.githubusercontent.com/beefyfinance/beefy-app/master/src/images/single-assets/"+E[e]},I=function(e,t){return"https://beta.beefy.finance/#/"+e+"/vault/"+t},M=a(15),S=a.n(M),_=(a(73),a(61)),U=a.n(_),B=a(23),D=a(34),H=a(126),R=a(1),q={renderer:function(e){return Object(R.jsx)(B.a,{children:Object(R.jsxs)(D.a,{children:[Object(R.jsx)(B.a,{children:e.vaultUrl&&Object(R.jsx)(D.a,{children:Object(R.jsx)("b",{children:Object(R.jsx)("a",{href:e.vaultUrl,target:"_blank",rel:"noreferrer",children:"Deposit on Beefy / View APY Chart"})})})}),Object(R.jsx)(B.a,{children:(e.addLiquidityUrl||e.buyTokenUrl)&&Object(R.jsxs)(D.a,{children:[e.addLiquidityUrl&&Object(R.jsx)("a",{href:e.addLiquidityUrl,target:"_blank",rel:"noreferrer",children:"Add Liquidity"})," ",e.addLiquidityUrl&&e.buyTokenUrl&&" | "," ",e.buyTokenUrl&&Object(R.jsx)("a",{href:e.buyTokenUrl,target:"_blank",rel:"noreferrer",children:"Buy Token"})]})})]})})}},z=function(e){var t=m(e,"0.00a%").toUpperCase();return""===t?"\ud83d\udd25":t},V=function(e,t){return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("span",{children:z(e)}),t&&""!==y(t)?Object(R.jsx)("span",{className:"text-success apy-fiat-text",children:y(t)}):""]})},G=[{dataField:"network",text:"Network",sort:!0,formatter:function(e){return e.toUpperCase()}},{dataField:"platform",text:"Platform",sort:!0},{dataField:"name",text:"Pool",formatter:function(e,t){var a,n=t.logo,r=t.assets,i=t.name;return Object(R.jsx)("div",{className:"pool-name",children:Object(R.jsxs)("span",{children:[n?Object(R.jsx)(H.a,{src:(a=n,"https://raw.githubusercontent.com/beefyfinance/beefy-app/master/src/images/"+a)}):1===r.length?Object(R.jsx)(H.a,{src:F(r[0]),roundedCircle:!0}):r.map((function(e){return Object(R.jsx)(H.a,{className:"stacked-logo",src:F(e),roundedCircle:!0},e)}))," ",i]})})}},{dataField:"totalApy",text:"APY",sort:!0,formatter:function(e,t){var a=t.totalApyAmount;return V(e,a)}},{dataField:"monthlyApy",text:"Monthly",sort:!0,formatter:function(e,t){var a=t.monthlyApyAmount;return V(e,a)}},{dataField:"dailyApy",text:"Daily",sort:!0,formatter:function(e,t){var a=t.dailyApyAmount;return V(e,a)}},{dataField:"withdrawalFee",text:"Withdraw",sort:!0,formatter:function(e,t){var a=t.dailyApy;return Object(R.jsx)("span",{className:0===S()(e).value()?"":S()(e).value()>a?"text-danger":"",children:"0%"===e?"-":e})}},{dataField:"depositFee",text:"Deposit",sort:!0,formatter:function(e,t){var a=t.dailyApy;return Object(R.jsx)("span",{className:0===S()(e).value()?"":S()(e).value()>a?"text-danger":"",children:"0%"===e?"-":e})}},{dataField:"safetyScore",text:"Safe",sort:!0,formatter:function(e){return Object(R.jsx)("span",{className:9.991337===S()(e).value()?"text-warning":10===S()(e).value()?"text-success":S()(e).value()<=8?"text-danger":"",children:9.991337===e?"?":10===e?"\u2713":S()(e).format("0.0")})}},{dataField:"tvl",text:"TVL",sort:!0,formatter:function(e){return Object(R.jsx)("span",{className:S()(e).value()>=1e6?"text-success":S()(e).value()<1e5?"text-danger":"",children:y(e)})}}],W=function(e){var t=e.yields;return Object(R.jsx)(U.a,{keyField:"key",data:t,columns:G,expandRow:q,striped:!0,hover:!0,bootstrap4:!0,defaultSorted:[{dataField:"totalApy",order:"desc"}]})},Y=a(26),J=(a(60),a(40)),X=a(52),$=a(132),K=a(127),Q=a(128),Z={desiredCoins:"",strictFilter:!0,exactMatch:!1,desiredPlatforms:"",desiredNetworks:"",includeSingleAssets:!0,includeLPs:!0},ee=Object(s.a)(Object(s.a)({},Z),{},{desiredCoins:"usdc dai busd usdt"}),te=Object(n.createContext)(ee),ae=function(e){var t=e.loading,a=e.poolCount,r=Object(n.useContext)(te),i=r.filters,c=r.setFilters,o=function(e){var t=e.target,a=t.value,n=t.name;c(Object(s.a)(Object(s.a)({},i),{},Object(Y.a)({},n,a)))},l=function(e){var t=e.target,a=t.checked,n=t.name;c(Object(s.a)(Object(s.a)({},i),{},Object(Y.a)({},n,a)))},d=i.desiredCoins,u=i.strictFilter,f=i.exactMatch,p=i.desiredPlatforms,j=i.desiredNetworks,h=i.includeSingleAssets,x=i.includeLPs;return Object(R.jsxs)(J.a,{className:"filters",children:[Object(R.jsxs)($.a.Group,{children:[Object(R.jsx)($.a.Label,{children:"\ud83d\udc8e Coins to Ride"}),Object(R.jsx)($.a.Control,{name:"desiredCoins",value:d,size:"sm",type:"text",placeholder:"e.g. usdc dai busd",onChange:o}),Object(R.jsxs)($.a.Check,{children:[Object(R.jsx)($.a.Check.Input,{id:"strictFilter",name:"strictFilter",checked:u,type:"checkbox",onChange:l}),Object(R.jsxs)($.a.Check.Label,{htmlFor:"strictFilter",children:["Show ONLY these coins ",Object(R.jsx)("span",{className:"silent",children:"(USDC won't show USDC-DAI)"})]})]}),Object(R.jsxs)($.a.Check,{children:[Object(R.jsx)($.a.Check.Input,{id:"exactMatch",name:"exactMatch",checked:f,type:"checkbox",onChange:l}),Object(R.jsxs)($.a.Check.Label,{htmlFor:"exactMatch",children:["Exact Match ",Object(R.jsx)("span",{className:"silent",children:"(USDT won't match fUSDT)"})]})]})]}),Object(R.jsx)("hr",{}),Object(R.jsxs)($.a.Group,{children:[Object(R.jsxs)($.a.Check,{children:[Object(R.jsx)($.a.Check.Input,{id:"includeLPs",name:"includeLPs",checked:x,type:"checkbox",onChange:l}),Object(R.jsx)($.a.Check.Label,{htmlFor:"includeLPs",children:"Include Liquidity Pools"})]}),Object(R.jsxs)($.a.Check,{children:[Object(R.jsx)($.a.Check.Input,{id:"includeSingleAssets",name:"includeSingleAssets",checked:h,type:"checkbox",onChange:l}),Object(R.jsx)($.a.Check.Label,{htmlFor:"includeSingleAssets",children:"Include Single Assets"})]})]}),Object(R.jsx)("hr",{}),Object(R.jsxs)($.a.Group,{children:[Object(R.jsx)($.a.Label,{children:"\ud83c\udff0 Platforms to Ride"}),Object(R.jsx)($.a.Control,{name:"desiredPlatforms",value:p,size:"sm",type:"text",placeholder:"e.g. cake aave sushi",onChange:o})]}),Object(R.jsx)("hr",{}),Object(R.jsxs)($.a.Group,{children:[Object(R.jsx)($.a.Label,{children:"\ud83c\udf10 Networks to Ride"}),Object(R.jsx)($.a.Control,{name:"desiredNetworks",value:j,size:"sm",type:"text",placeholder:"e.g. bsc polygon",onChange:o})]}),Object(R.jsx)("hr",{}),Object(R.jsx)("span",{children:t?Object(R.jsxs)(R.Fragment,{children:["Loading pools... ",Object(R.jsx)(K.a,{size:"sm",animation:"border",role:"status"})]}):0===a?"No pools found, please check your filters":"Found ".concat(a," pool").concat(1===a?"":"s"," on \ud83d\udc2e Beefy Finance.")}),Object(R.jsxs)(Q.a,{className:"reset-filters-btn",children:[Object(R.jsx)(X.a,{size:"sm",variant:"info",onClick:function(){c(Z)},children:"Clear Filters"}),Object(R.jsx)(X.a,{size:"sm",variant:"success",onClick:function(){c(ee)},children:"Default Filters"})]})]})},ne=a(134),re=a(133),ie=a(131),ce=a(129),se=a(62),oe=(a(119),function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],r=t[1];return Object(R.jsxs)(ne.a,{bg:"dark",variant:"dark",children:[Object(R.jsxs)(ne.a.Brand,{href:"",children:[Object(R.jsx)("img",{alt:"",src:"/hat_short.png",className:"navbar-image"}),"   ",Object(R.jsx)("span",{className:"navbar-title",children:"yield.rodeo"})]}),Object(R.jsx)(re.a,{className:"ml-auto",children:Object(R.jsx)(ie.a,{placement:"bottom",overlay:Object(R.jsx)(ce.a,{children:a?"Copied!":"Click to copy!"}),children:Object(R.jsx)(se.CopyToClipboard,{text:"0x6e1b11ad54068dd3C7A2cAf334A7010f0B59511C",onCopy:function(){r(!0),setTimeout((function(){r(!1)}),1e3)},children:Object(R.jsx)("span",{children:"\u2764\ufe0f Donate: 0x6e1b11ad54068dd3C7A2cAf334A7010f0B59511C \u2764\ufe0f"})})})}),Object(R.jsx)(re.a,{children:Object(R.jsx)(re.a.Link,{className:"navbar-contact",href:"https://naezith.com/?id=contact",target:"_blank",rel:"noreferrer",children:"Contact"})})]})}),le=a(130),de=Object(s.a)({},{capital:1e5,amountBefore:1e5,amountAfter:125e3}),ue=Object(n.createContext)(de),fe=function(){var e=Object(n.useContext)(ue),t=e.inputs,a=e.setInputs,r=function(e){var n=e.target,r=n.value,i=n.name;a(Object(s.a)(Object(s.a)({},t),{},Object(Y.a)({},i,r)))},i=t.capital,c=t.amountBefore,o=t.amountAfter,l=o-c,d=l/c,u=""!==o&&""!==c,f=d>0?"+":"";return Object(R.jsxs)(J.a,{className:"filters",children:[Object(R.jsx)($.a.Label,{children:"\ud83d\udcb0 Capital"}),Object(R.jsxs)(le.a,{className:"mb-3",size:"sm",children:[Object(R.jsx)(le.a.Prepend,{children:Object(R.jsx)(le.a.Text,{children:"$"})}),Object(R.jsx)($.a.Control,{name:"capital",value:i,type:"number",placeholder:"e.g. 1000",onChange:r})]}),Object(R.jsx)("hr",{}),Object(R.jsx)($.a.Label,{children:"\ud83d\udda9 Profit % Calculator "}),Object(R.jsxs)(le.a,{className:"mb-3",size:"sm",children:[Object(R.jsx)(le.a.Prepend,{children:Object(R.jsx)(le.a.Text,{children:"Before"})}),Object(R.jsx)($.a.Control,{name:"amountBefore",value:c,type:"number",placeholder:"e.g. 1000",onChange:r}),Object(R.jsx)(le.a.Prepend,{children:Object(R.jsx)(le.a.Text,{children:"After"})}),Object(R.jsx)($.a.Control,{name:"amountAfter",value:o,type:"number",placeholder:"e.g. 1000",onChange:r})]}),Object(R.jsx)($.a.Label,{className:!u||d>0?"text-success":d<0?"text-danger":"",children:u?"P&L: "+f+m(l,"0,0.[000]")+" ("+f+m(d,"0.[000]%")+")":"Please fill the fields"})]})},pe=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(de),c=Object(u.a)(i,2),o=c[0],p=c[1],j=Object(n.useState)(ee),h=Object(u.a)(j,2),b=h[0],m=h[1],y=Object(n.useState)(!0),g=Object(u.a)(y,2),C=g[0],v=g[1];Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,N();case 3:t=e.sent,v(!1),r(t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var k=function(e,t){return 0===(t=t?parseFloat(t):0)?e:e.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{totalApyAmount:x(e.totalApy).value()*t,dailyApyAmount:x(e.dailyApy).value()*t,monthlyApyAmount:x(e.monthlyApy).value()*t})}))}(O(a,b).map((function(e){return Object(s.a)(Object(s.a)({},e),{},{self:e})})),o.capital);return Object(R.jsxs)("div",{className:"full-height",children:[Object(R.jsx)(f.a,{className:"p-3 App",children:Object(R.jsx)(B.a,{children:Object(R.jsx)(D.a,{children:Object(R.jsx)(oe,{})})})}),Object(R.jsx)(ue.Provider,{value:{inputs:o,setInputs:p},children:Object(R.jsx)(te.Provider,{value:{filters:b,setFilters:m},children:Object(R.jsxs)(f.a,{className:"p-3 App",children:[Object(R.jsxs)(B.a,{children:[Object(R.jsx)(D.a,{children:Object(R.jsx)(ae,{loading:C,poolCount:k.length})}),Object(R.jsx)(D.a,{children:Object(R.jsx)(fe,{})})]}),C?Object(R.jsx)(K.a,{animation:"border",role:"status",children:Object(R.jsx)("span",{className:"sr-only",children:"Loading..."})}):Object(R.jsx)(B.a,{children:Object(R.jsx)(D.a,{children:Object(R.jsx)(W,{yields:k})})})]})})})]})},je=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,135)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),i(e),c(e)}))};c.a.render(Object(R.jsx)(r.a.StrictMode,{children:Object(R.jsx)(pe,{})}),document.getElementById("root")),je()},60:function(e,t,a){},69:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){}},[[121,1,2]]]);
//# sourceMappingURL=main.727c617e.chunk.js.map