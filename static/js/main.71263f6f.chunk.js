(this["webpackJsonpyield-rodeo"]=this["webpackJsonpyield-rodeo"]||[]).push([[0],{11:function(e,t,r){"use strict";r.d(t,"b",(function(){return _})),r.d(t,"c",(function(){return l})),r.d(t,"e",(function(){return i})),r.d(t,"h",(function(){return d})),r.d(t,"g",(function(){return u})),r.d(t,"f",(function(){return p})),r.d(t,"d",(function(){return b})),r.d(t,"a",(function(){return f}));var n=r(9),a=r(20),o=function(e,t){var r,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=Object(a.a)(t);try{for(o.s();!(r=o.n()).done;){var s=r.value;if(n){if(e===s)return!0}else if(-1!==e.indexOf(s))return!0}}catch(c){o.e(c)}finally{o.f()}return!1},s=function(e,t){var r,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=Object(a.a)(t);try{for(o.s();!(r=o.n()).done;){var s=r.value;if(n){if(-1!==e.indexOf(s))return!0}else{var c,_=Object(a.a)(e);try{for(_.s();!(c=_.n()).done;){var l=c.value;if(-1!==l.indexOf(s))return!0}}catch(i){_.e(i)}finally{_.f()}}}}catch(i){o.e(i)}finally{o.f()}return!1},c=r(17),_=function(e){var t=Math.pow(10,Math.log10(e+1)/365)-1;return isNaN(t)?0:t},l=function(e){return e/12},i=function(e,t){var r=c(e).format(t);return-1!==r.indexOf("NaN")?"":r},d=function(e){return i(e,"0.00a%").toUpperCase()},u=function(e){return i(e,"0,0").toUpperCase()},p=function(e){return i(e,"$0,0.0a").toUpperCase()},b=function(e,t){var r=t.desiredCoins,n=t.strictFilter,c=t.exactMatch,_=t.desiredPlatforms,l=t.desiredNetworks,i=t.includeSingleAssets,d=t.includeLPs,u=_.trim().toUpperCase().split(" "),p=l.trim().toUpperCase().split(" ");return e.filter((function(e){var t=e.assets.map((function(e){return e.toLowerCase()}));if(!d&&e.assets.length>1)return!1;if(!i&&1===e.assets.length)return!1;var _=r.trim().toLowerCase().split(" ");if(_.length>0)if(1===e.assets.length){if(!s(t,_,c))return!1}else if(n){if(!function(e,t){var r,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=Object(a.a)(e);try{for(o.s();!(r=o.n()).done;){var s=r.value;if(n){if(-1===t.indexOf(s))return!1}else{var c,_=!1,l=Object(a.a)(t);try{for(l.s();!(c=l.n()).done;){var i=c.value;if(-1!==s.indexOf(i)){_=!0;break}}}catch(d){l.e(d)}finally{l.f()}if(!_)return!1}}}catch(d){o.e(d)}finally{o.f()}return!0}(t,_,c))return!1}else if(!s(t,_,c))return!1;return!(u.length>0&&!o(e.platform.toUpperCase(),u))&&!(p.length>0&&!o(e.network.toUpperCase(),p))}))},f=function(e,t){return 0===(t=t?parseFloat(t):0)?e:e.map((function(e){return Object(n.a)(Object(n.a)({},e),{},{totalApyAmount:c(e.totalApy).value()*t,dailyApyAmount:c(e.dailyApy).value()*t,monthlyApyAmount:c(e.monthlyApy).value()*t})}))}},124:function(e,t,r){},125:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(16),s=r.n(o),c=(r(74),r(75),r(9)),_=r(12),l=r.n(_),i=r(24),d=r(32),u=r(55),p=(r(77),r(18)),b=r(17),f=r.n(b),m=(r(78),r(65)),j=r.n(m),x=r(39),h=(r(67),r(25)),O=r(31),C=r(130),y=r(135),g=(r(139),r(11)),P=r(1),E={renderer:function(e){return Object(P.jsx)(h.a,{children:Object(P.jsxs)(O.a,{children:[Object(P.jsx)(h.a,{children:e.vaultUrl&&Object(P.jsx)(O.a,{children:Object(P.jsx)("b",{children:Object(P.jsx)("a",{href:e.vaultUrl,target:"_blank",rel:"noreferrer",children:"Deposit on Beefy / View APY Chart"})})})}),Object(P.jsxs)(h.a,{children:[(e.addLiquidityUrl||e.buyTokenUrl)&&Object(P.jsxs)(O.a,{children:[e.addLiquidityUrl&&Object(P.jsx)("a",{href:e.addLiquidityUrl,target:"_blank",rel:"noreferrer",children:"Add Liquidity"})," ",e.addLiquidityUrl&&e.buyTokenUrl&&" | "," ",e.buyTokenUrl&&Object(P.jsx)("a",{href:e.buyTokenUrl,target:"_blank",rel:"noreferrer",children:"Buy Token"})]}),e.tokenAddress&&Object(P.jsx)(O.a,{children:Object(P.jsx)("a",{href:Object(p.a)(e.network,e.tokenAddress),target:"_blank",rel:"noreferrer",children:e.tokenAddress})})]})]})})}},k=function(e){var t=Object(g.h)(e);return""===t?"\ud83d\udd25":t},A=function(e,t){return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("span",{children:k(e)}),t&&""!==Object(g.f)(t)?Object(P.jsx)("span",{className:"text-success apy-fiat-text",children:Object(g.f)(t)}):""]})},T=[{dataField:"network",text:"Network",sort:!0,formatter:function(e){return e.toUpperCase()}},{dataField:"platform",text:"Platform",sort:!0},{dataField:"name",text:"Pool",formatter:function(e,t){var r=t.logo,n=t.assets,a=t.name;return Object(P.jsx)("div",{className:"pool-name",children:Object(P.jsxs)("span",{children:[r?Object(P.jsx)(C.a,{src:Object(p.d)(r)}):1===n.length?Object(P.jsx)(C.a,{src:Object(p.b)(n[0],"svg"),onError:function(e){return Object(p.e)(e,Object(p.b)(n[0],"png"))},roundedCircle:!0}):n.map((function(e){return Object(P.jsx)(C.a,{className:"stacked-logo",src:Object(p.b)(e,"svg"),onError:function(t){return Object(p.e)(t,Object(p.b)(e,"png"))},roundedCircle:!0},e)}))," ",a]})})}},{dataField:"totalApy",text:"APY",sort:!0,formatter:function(e,t){var r=t.totalApyAmount;return A(e,r)}},{dataField:"monthlyApy",text:"Monthly",sort:!0,formatter:function(e,t){var r=t.monthlyApyAmount;return A(e,r)}},{dataField:"dailyApy",text:"Daily",sort:!0,formatter:function(e,t){var r=t.dailyApyAmount;return A(e,r)}},{dataField:"withdrawalFee",text:"Withdraw",sort:!0,formatter:function(e,t){var r=t.dailyApy;return Object(P.jsx)("span",{className:0===f()(e).value()?"":f()(e).value()>r?"text-danger":"",children:"0%"===e?"-":e})}},{dataField:"depositFee",text:"Deposit",sort:!0,formatter:function(e,t){var r=t.dailyApy;return Object(P.jsx)("span",{className:0===f()(e).value()?"":f()(e).value()>r?"text-danger":"",children:"0%"===e?"-":e})}},{dataField:"safetyScore",text:"Safe",sort:!0,formatter:function(e){return Object(P.jsx)("span",{className:1337===f()(e).value()?"text-warning":10===f()(e).value()?"text-success":f()(e).value()<=8?"text-danger":"",children:1337===e?"?":10===e?"\u2713":f()(e).format("0.0")})}},{dataField:"tvl",text:"TVL",sort:!0,formatter:function(e){return Object(P.jsx)("span",{className:f()(e).value()>=1e6?"text-success":f()(e).value()<1e5?"text-danger":"",children:Object(g.f)(e)})}}],v=function(e){var t=e.yields;return Object(P.jsx)(j.a,{keyField:"key",data:t,columns:T,expandRow:E,striped:!0,hover:!0,bootstrap4:!0,defaultSorted:[{dataField:"totalApy",order:"desc"}]})},L=r(28),w=(r(63),r(46)),M=r(136),D=r(131),U=r(132),I={desiredCoins:"",strictFilter:!0,exactMatch:!1,desiredPlatforms:"",desiredNetworks:"",includeSingleAssets:!0,includeLPs:!0},N=Object(c.a)(Object(c.a)({},I),{},{desiredCoins:"usdc dai busd usdt"}),F=Object(n.createContext)(N),B=function(e){var t=e.loading,r=e.poolCount,a=Object(n.useContext)(F),o=a.filters,s=a.setFilters,_=function(e){var t=e.target,r=t.value,n=t.name;s(Object(c.a)(Object(c.a)({},o),{},Object(L.a)({},n,r)))},l=function(e){var t=e.target,r=t.checked,n=t.name;s(Object(c.a)(Object(c.a)({},o),{},Object(L.a)({},n,r)))},i=o.desiredCoins,d=o.strictFilter,u=o.exactMatch,p=o.desiredPlatforms,b=o.desiredNetworks,f=o.includeSingleAssets,m=o.includeLPs;return Object(P.jsxs)(w.a,{className:"filters",children:[Object(P.jsxs)(M.a.Group,{children:[Object(P.jsx)(M.a.Label,{children:"\ud83d\udc8e Coins to Ride"}),Object(P.jsx)(M.a.Control,{name:"desiredCoins",value:i,size:"sm",type:"text",placeholder:"e.g. usdc dai busd",onChange:_}),Object(P.jsxs)(M.a.Check,{children:[Object(P.jsx)(M.a.Check.Input,{id:"strictFilter",name:"strictFilter",checked:d,type:"checkbox",onChange:l}),Object(P.jsxs)(M.a.Check.Label,{htmlFor:"strictFilter",children:["Show ONLY these coins ",Object(P.jsx)("span",{className:"silent",children:"(USDC won't show USDC-DAI)"})]})]}),Object(P.jsxs)(M.a.Check,{children:[Object(P.jsx)(M.a.Check.Input,{id:"exactMatch",name:"exactMatch",checked:u,type:"checkbox",onChange:l}),Object(P.jsxs)(M.a.Check.Label,{htmlFor:"exactMatch",children:["Exact Match ",Object(P.jsx)("span",{className:"silent",children:"(USDT won't match fUSDT)"})]})]})]}),Object(P.jsx)("hr",{}),Object(P.jsxs)(M.a.Group,{children:[Object(P.jsxs)(M.a.Check,{children:[Object(P.jsx)(M.a.Check.Input,{id:"includeLPs",name:"includeLPs",checked:m,type:"checkbox",onChange:l}),Object(P.jsx)(M.a.Check.Label,{htmlFor:"includeLPs",children:"Include Liquidity Pools"})]}),Object(P.jsxs)(M.a.Check,{children:[Object(P.jsx)(M.a.Check.Input,{id:"includeSingleAssets",name:"includeSingleAssets",checked:f,type:"checkbox",onChange:l}),Object(P.jsx)(M.a.Check.Label,{htmlFor:"includeSingleAssets",children:"Include Single Assets"})]})]}),Object(P.jsx)("hr",{}),Object(P.jsxs)(M.a.Group,{children:[Object(P.jsx)(M.a.Label,{children:"\ud83c\udff0 Platforms to Ride"}),Object(P.jsx)(M.a.Control,{name:"desiredPlatforms",value:p,size:"sm",type:"text",placeholder:"e.g. cake aave sushi",onChange:_})]}),Object(P.jsx)("hr",{}),Object(P.jsxs)(M.a.Group,{children:[Object(P.jsx)(M.a.Label,{children:"\ud83c\udf10 Networks to Ride"}),Object(P.jsx)(M.a.Control,{name:"desiredNetworks",value:b,size:"sm",type:"text",placeholder:"e.g. bsc polygon",onChange:_})]}),Object(P.jsx)("hr",{}),Object(P.jsx)("span",{children:t?Object(P.jsxs)(P.Fragment,{children:["Loading pools... ",Object(P.jsx)(D.a,{size:"sm",animation:"border",role:"status"})]}):0===r?"No pools found, please check your filters":"Found ".concat(r," pool").concat(1===r?"":"s"," on \ud83d\udc2e Beefy Finance.")}),Object(P.jsxs)(U.a,{className:"reset-filters-btn",children:[Object(P.jsx)(x.a,{size:"sm",variant:"info",onClick:function(){s(I)},children:"Clear Filters"}),Object(P.jsx)(x.a,{size:"sm",variant:"success",onClick:function(){s(N)},children:"Default Filters"})]})]})},R=r(138),S=r(137),W=r(133),K=r(68),q=(r(124),function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),r=t[0],a=t[1];return Object(P.jsxs)(R.a,{bg:"dark",variant:"dark",children:[Object(P.jsxs)(R.a.Brand,{href:"",children:[Object(P.jsx)("img",{alt:"",src:"/hat_short.png",className:"navbar-image"}),"   ",Object(P.jsx)("span",{className:"navbar-title",children:"yield.rodeo"})]}),Object(P.jsx)(S.a,{className:"ml-auto",children:Object(P.jsx)(y.a,{placement:"bottom",overlay:Object(P.jsx)(W.a,{children:r?"Copied!":"Click to copy!"}),children:Object(P.jsx)(K.CopyToClipboard,{text:"0x6e1b11ad54068dd3C7A2cAf334A7010f0B59511C",onCopy:function(){a(!0),setTimeout((function(){a(!1)}),1e3)},children:Object(P.jsx)("span",{children:"\u2764\ufe0f Donate: 0x6e1b11ad54068dd3C7A2cAf334A7010f0B59511C \u2764\ufe0f"})})})}),Object(P.jsx)(S.a,{children:Object(P.jsx)(S.a.Link,{className:"navbar-contact",href:"https://naezith.com/?id=contact",target:"_blank",rel:"noreferrer",children:"Contact"})})]})}),H=r(134),G=Object(c.a)({},{capital:1e5,amountBefore:1e5,amountAfter:125e3}),V=Object(n.createContext)(G),z=function(){var e=Object(n.useContext)(V),t=e.inputs,r=e.setInputs,a=function(e){var n=e.target,a=n.value,o=n.name;r(Object(c.a)(Object(c.a)({},t),{},Object(L.a)({},o,a)))},o=t.capital,s=t.amountBefore,_=t.amountAfter,l=_-s,i=l/s,d=""!==_&&""!==s,u=i>0?"+":"";return Object(P.jsxs)(w.a,{className:"filters",children:[Object(P.jsx)(M.a.Label,{children:"\ud83d\udcb0 Capital"}),Object(P.jsxs)(H.a,{className:"mb-3",size:"sm",children:[Object(P.jsx)(H.a.Prepend,{children:Object(P.jsx)(H.a.Text,{children:"$"})}),Object(P.jsx)(M.a.Control,{name:"capital",value:o,type:"number",placeholder:"e.g. 1000",onChange:a})]}),Object(P.jsx)("hr",{}),Object(P.jsx)(M.a.Label,{children:"\ud83d\udda9 Profit % Calculator "}),Object(P.jsxs)(H.a,{className:"mb-3",size:"sm",children:[Object(P.jsx)(H.a.Prepend,{children:Object(P.jsx)(H.a.Text,{children:"Before"})}),Object(P.jsx)(M.a.Control,{name:"amountBefore",value:s,type:"number",placeholder:"e.g. 1000",onChange:a}),Object(P.jsx)(H.a.Prepend,{children:Object(P.jsx)(H.a.Text,{children:"After"})}),Object(P.jsx)(M.a.Control,{name:"amountAfter",value:_,type:"number",placeholder:"e.g. 1000",onChange:a})]}),Object(P.jsx)(M.a.Label,{className:!d||i>0?"text-success":i<0?"text-danger":"",children:d?"P&L: "+u+Object(g.e)(l,"0,0.[000]")+" ("+u+Object(g.e)(i,"0.[000]%")+")":"Please fill the fields"})]})},Y=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),r=t[0],a=t[1],o=Object(n.useState)(G),s=Object(d.a)(o,2),_=s[0],b=s[1],f=Object(n.useState)(N),m=Object(d.a)(f,2),j=m[0],x=m[1],C=Object(n.useState)(!0),y=Object(d.a)(C,2),E=y[0],k=y[1];Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.next=3,Object(p.c)();case 3:t=e.sent,k(!1),a(t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var A=Object(g.a)(Object(g.d)(r,j).map((function(e){return Object(c.a)(Object(c.a)({},e),{},{self:e})})),_.capital);return Object(P.jsxs)("div",{className:"full-height",children:[Object(P.jsx)(u.a,{className:"p-3 App",children:Object(P.jsx)(h.a,{children:Object(P.jsx)(O.a,{children:Object(P.jsx)(q,{})})})}),Object(P.jsx)(V.Provider,{value:{inputs:_,setInputs:b},children:Object(P.jsx)(F.Provider,{value:{filters:j,setFilters:x},children:Object(P.jsxs)(u.a,{className:"p-3 App",children:[Object(P.jsxs)(h.a,{children:[Object(P.jsx)(O.a,{children:Object(P.jsx)(B,{loading:E,poolCount:A.length})}),Object(P.jsx)(O.a,{children:Object(P.jsx)(z,{})})]}),E?Object(P.jsx)(D.a,{animation:"border",role:"status",children:Object(P.jsx)("span",{className:"sr-only",children:"Loading..."})}):Object(P.jsx)(h.a,{children:Object(P.jsx)(O.a,{children:Object(P.jsx)(v,{yields:A})})})]})})})]})},X=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,140)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),o(e),s(e)}))};s.a.render(Object(P.jsx)(a.a.StrictMode,{children:Object(P.jsx)(Y,{})}),document.getElementById("root")),X()},18:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return getYieldsWithPrices})),__webpack_require__.d(__webpack_exports__,"e",(function(){return useFallbackImage})),__webpack_require__.d(__webpack_exports__,"b",(function(){return coinLogoUrl})),__webpack_require__.d(__webpack_exports__,"d",(function(){return poolLogoUrl})),__webpack_require__.d(__webpack_exports__,"a",(function(){return addressUrl}));var C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(9),C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(12),C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__),C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(20),C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(24),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(11),_safetyScore__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(64),getRandomParam=function(){return"?p="+(new Date).getTime()},networks=["avalanche","bsc","fantom","heco","polygon","arbitrum","harmony","celo","moonriver","cronos","fuse","metis"],network_info={bsc:{id:56,explorer:"https://bscscan.com/"},heco:{id:128,explorer:"https://hecoinfo.com/"},polygon:{id:137,explorer:"https://polygonscan.com/"},fantom:{id:250,explorer:"https://ftmscan.com/"},avalanche:{id:43114,explorer:"https://cchain.explorer.avax.network/"},arbitrum:{id:42161,explorer:"https://arbiscan.io/"},harmony:{id:16666e5,explorer:"https://explorer.harmony.one/"},celo:{id:42220,explorer:"https://explorer.celo.org/"},moonriver:{id:1285,explorer:"https://blockscout.moonriver.moonbeam.network/"},cronos:{id:25,explorer:"https://cronos.crypto.org/explorer/"},fuse:{id:122,explorer:"https://explorer.fuse.io/"},metis:{id:1088,explorer:"https://andromeda-explorer.metis.io/"}},getPools=function(){var _ref=Object(C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.a)(C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark((function _callee(network,type){var result,text,beginningText,endingText,jsonObj,_iterator,_step,pool;return C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,fetch(("stake"===type?"https://raw.githubusercontent.com/beefyfinance/beefy-app/prod/src/features/configure/stake/".concat(network,"_stake.js"):"https://raw.githubusercontent.com/beefyfinance/beefy-app/prod/src/features/configure/vault/".concat(network,"_pools.js"))+getRandomParam());case 2:return result=_context.sent,_context.next=5,result.text();case 5:text=_context.sent,beginningText=" = [",endingText="];",text=text.substr(text.indexOf(beginningText)+beginningText.length-1,text.indexOf(endingText)-endingText.length).replace(/earnContractAbi: govPoolABI,/g,"").replace(/, '4BELT'/g,"").replace(/partners: \[.*\]/g,"partners: []"),jsonObj=eval(text),_iterator=Object(C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__.a)(jsonObj);try{for(_iterator.s();!(_step=_iterator.n()).done;)pool=_step.value,pool.network=network,pool.network_id=network_info[network].id,pool.key=network+"-"+pool.id,pool.type=type,pool.withdrawalFee&&pool.withdrawalFee.length>0&&("0.0%"===pool.withdrawalFee&&(pool.withdrawalFee="0%"),"."===pool.withdrawalFee[0]&&(pool.withdrawalFee="0"+pool.withdrawalFee)),pool.depositFee&&pool.depositFee.length>0&&("."===pool.depositFee[0]&&(pool.depositFee="0"+pool.depositFee),pool.depositFee=pool.depositFee.replace("<",""))}catch(err){_iterator.e(err)}finally{_iterator.f()}return _context.abrupt("return",jsonObj);case 13:case"end":return _context.stop()}}),_callee)})));return function(e,t){return _ref.apply(this,arguments)}}(),fetchAllPools=function(){var e=Object(C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.a)(C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark((function e(){var t,r,n,a,o,s,c,_;return C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={stake:{},pool:{}},e.next=3,Promise.all(Object.keys(t).map(function(){var e=Object(C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.a)(C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark((function e(r){return C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(networks.map(function(){var e=Object(C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.a)(C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark((function e(n){return C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,getPools(n,r);case 2:t[r][n]=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:for(r=[],n=0,a=Object.keys(t);n<a.length;n++){o=a[n],s=Object(C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__.a)(networks);try{for(s.s();!(c=s.n()).done;)_=c.value,r=r.concat(t[o][_])}catch(l){s.e(l)}finally{s.f()}}return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getYieldsWithPrices=function(){var e=Object(C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.a)(C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark((function e(){var t,r,n,a;return C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetchAllPools();case 2:return t=e.sent,e.next=5,fetch("https://api.beefy.finance/lps"+getRandomParam());case 5:return e.next=7,e.sent.json();case 7:return r=e.sent,e.next=10,fetch("https://api.beefy.finance/apy/breakdown"+getRandomParam());case 10:return e.next=12,e.sent.json();case 12:return n=e.sent,e.next=15,fetch("https://api.beefy.finance/tvl"+getRandomParam());case 15:return e.next=17,e.sent.json();case 17:return a=e.sent,e.abrupt("return",t.map((function(e){var t=r[e.id],o=a[e.network_id]?a[e.network_id][e.id]:"",s=n[e.id],c=Object(_safetyScore__WEBPACK_IMPORTED_MODULE_5__.a)(e.risks);return Object(C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({vaultUrl:beefyUrl(e.network,e.id),withdrawalFee:"0.1%",depositFee:"0%",dailyApy:s&&Object(_utils__WEBPACK_IMPORTED_MODULE_4__.b)(s.totalApy),monthlyApy:s&&Object(_utils__WEBPACK_IMPORTED_MODULE_4__.c)(s.totalApy)},e),{},{lpPrice:t,tvl:o},s),{},{safetyScore:null===c?1337:c})})).filter((function(e){return e.tvl>0&&e.totalApy>1e-4})).sort((function(e,t){return e.totalApy<t.totalApy?1:-1})));case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),useFallbackImage=function(e,t){e.target.src=t},coinLogoUrl=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"svg";return"https://raw.githubusercontent.com/beefyfinance/beefy-app/master/src/images/single-assets/"+e+"."+t},poolLogoUrl=function(e){return"https://raw.githubusercontent.com/beefyfinance/beefy-app/master/src/images/"+e},addressUrl=function(e,t){return network_info[e].explorer+"address/"+t},beefyUrl=function(e,t){return"https://beta.beefy.finance/#/"+e+"/vault/"+t}},63:function(e,t,r){},64:function(e,t,r){"use strict";var n={COMPLEXITY_LOW:{category:"Categry-Beefy",score:0,title:"Complexity-Low-Titl",explanation:"Complexity-Low-Expl",condition:"Complexity-Low-Cond"},COMPLEXITY_MID:{category:"Categry-Beefy",score:.3,title:"Complexity-Mid-Titl",explanation:"Complexity-Mid-Expl",condition:"Complexity-Mid-Cond"},COMPLEXITY_HIGH:{category:"Categry-Beefy",score:.5,title:"Complexity-Hi-Titl",explanation:"Complexity-Hi-Expl",condition:"Complexity-Hi-Cond"},BATTLE_TESTED:{category:"Categry-Beefy",score:0,title:"Testd-Battle-Titl",explanation:"Testd-Battle-Expl",condition:"Testd-Battle-Cond"},NEW_STRAT:{category:"Categry-Beefy",score:.3,title:"Testd-New-Titl",explanation:"Testd-New-Expl",condition:"Testd-New-Cond"},EXPERIMENTAL_STRAT:{category:"Categry-Beefy",score:.7,title:"Testd-Experimtl-Titl",explanation:"Testd-Experimtl-Expl",condition:"Testd-Experimtl-Cond"},IL_NONE:{category:"Categry-Asset",score:0,title:"IL-None-Titl",explanation:"IL-None-Expl",condition:"IL-None-Cond"},IL_LOW:{category:"Categry-Asset",score:.2,title:"IL-Low-Titl",explanation:"IL-Low-Expl",condition:"IL-Low-Cond"},IL_HIGH:{category:"Categry-Asset",score:.5,title:"IL-High-Titl",explanation:"IL-High-Expl",condition:"IL-High-Cond"},ALGO_STABLE:{category:"Categry-Asset",score:.5,title:"IL-AlgoStable-Titl",explanation:"IL-AlgoStable-Expl",condition:"IL-AlgoStable-Cond"},LIQ_HIGH:{category:"Categry-Asset",score:0,title:"Liquidt-High-Titl",explanation:"Liquidt-High-Expl",condition:"Liquidt-High-Cond"},LIQ_LOW:{category:"Categry-Asset",score:.3,title:"Liquidt-Low-Titl",explanation:"Liquidt-Low-Expl",condition:"Liquidt-Low-Cond"},MCAP_LARGE:{category:"Categry-Asset",score:0,title:"MktCap-Large-Titl",explanation:"MktCap-Large-Expl",condition:"MktCap-Large-Cond"},MCAP_MEDIUM:{category:"Categry-Asset",score:.1,title:"MktCap-Mid-Titl",explanation:"MktCap-Mid-Expl",condition:"MktCap-Mid-Cond"},MCAP_SMALL:{category:"Categry-Asset",score:.3,title:"MktCap-Small-Titl",explanation:"MktCap-Small-Expl",condition:"MktCap-Small-Cond"},MCAP_MICRO:{category:"Categry-Asset",score:.5,title:"MktCap-Micro-Titl",explanation:"MktCap-Micro-Expl",condition:"MktCap-Micro-Cond"},SUPPLY_CENTRALIZED:{category:"Categry-Asset",score:1,title:"Concentrated-Titl",explanation:"Concentrated-Expl",condition:"Concentrated-Cond"},PLATFORM_ESTABLISHED:{category:"Categry-Platform",score:0,title:"Platfrm-Establshd-Titl",explanation:"Platfrm-Establshd-Expl",condition:"Platfrm-Establshd-Cond"},PLATFORM_NEW:{category:"Categry-Platform",score:.5,title:"Platfrm-New-Titl",explanation:"Platfrm-New-Expl",condition:"Platfrm-New-Cond"},NO_AUDIT:{category:"Categry-Platform",score:.3,title:"Platfrm-AuditNo-Titl",explanation:"Platfrm-AuditNo-Expl",condition:"Platfrm-AuditNo-Cond"},AUDIT:{category:"Categry-Platform",score:0,title:"Platfrm-Audit-Titl",explanation:"Platfrm-Audit-Expl",condition:"Platfrm-Audit-Cond"},CONTRACTS_VERIFIED:{category:"Categry-Platform",score:0,title:"Platfrm-Verified-Titl",explanation:"Platfrm-Verified-Expl",condition:"Platfrm-Verified-Cond"},CONTRACTS_UNVERIFIED:{category:"Categry-Platform",score:1,title:"Platfrm-VerifiedNo-Titl",explanation:"Platfrm-VerifiedNo-Expl",condition:"Platfrm-VerifiedNo-Cond"},ADMIN_WITH_TIMELOCK:{category:"Categry-Platform",score:0,title:"Platfrm-Timelock-Titl",explanation:"Platfrm-Timelock-Expl",condition:"Platfrm-Timelock-Cond"},ADMIN_WITHOUT_TIMELOCK:{category:"Categry-Platform",score:.5,title:"Platfrm-TimelockNo-Titl",explanation:"Platfrm-TimelockNo-Expl",condition:"Platfrm-TimelockNo-Cond"}},a={"Categry-Beefy":.2,"Categry-Asset":.2,"Categry-Platform":.6};t.a=function(e){return e&&0!==e.length?10*(1-function(e){var t={};for(var r in a)t[r]=[];e.forEach((function(e,r){if(e in n){var o=n[e].category;o in a?t[o].push(e):console.warn("unknown category",o)}else console.warn("unknown risk",e)}));var o=0;for(var s in a)o+=a[s]*Math.min(1,t[s].reduce((function(e,t){return e+n[t].score}),0));return o}(e)):null}},74:function(e,t,r){},77:function(e,t,r){},78:function(e,t,r){}},[[125,1,2]]]);
//# sourceMappingURL=main.71263f6f.chunk.js.map