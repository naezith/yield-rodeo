(this["webpackJsonpyield-rodeo"]=this["webpackJsonpyield-rodeo"]||[]).push([[0],{118:function(e,t,r){},123:function(e,t,r){},125:function(e,t,r){"use strict";r.r(t);var n=r(0),_=r.n(n),s=r(16),a=r.n(s),c=(r(72),r(73),r(11)),o=r(12),l=r.n(o),i=r(21),d=r(32),u=r(54),b=(r(75),r(26)),j=r(40),p=r.n(j),h=(r(76),r(62)),O=r.n(h),f=r(37),m=r(64),x=r(31),P=r(36),C=r(129),y=r(133),g=r(137),k=r(9),v=r(1),D={renderer:function(e){return Object(v.jsxs)(x.a,{children:[(e.addLiquidityUrl||e.buyTokenUrl)&&Object(v.jsxs)(P.a,{children:[e.addLiquidityUrl&&Object(v.jsx)("a",{href:e.addLiquidityUrl,target:"_blank",rel:"noreferrer",children:"Add Liquidity"})," ",e.addLiquidityUrl&&e.buyTokenUrl&&" | "," ",e.buyTokenUrl&&Object(v.jsx)("a",{href:e.buyTokenUrl,target:"_blank",rel:"noreferrer",children:"Buy Token"})]}),e.tokenAddress&&Object(v.jsx)(P.a,{children:Object(v.jsx)("a",{href:Object(b.a)(e.network,e.tokenAddress),target:"_blank",rel:"noreferrer",children:e.tokenAddress})})]})}},E=[{dataField:"network",text:"Network",sort:!0,formatter:function(e){return e.toUpperCase()}},{dataField:"platform",text:"Platform",sort:!0},{dataField:"name",text:"Pool",formatter:function(e,t){var r=t.logo,n=t.assets,_=t.name;return Object(v.jsx)("div",{className:"pool-name",children:Object(v.jsxs)("span",{children:[r?Object(v.jsx)(C.a,{src:Object(b.d)(r)}):1===n.length?Object(v.jsx)(C.a,{src:Object(b.b)(n[0]),roundedCircle:!0}):n.map((function(e){return Object(v.jsx)(C.a,{className:"stacked-logo",src:Object(b.b)(e),roundedCircle:!0},e)}))," ",_]})})}},{dataField:"totalApy",text:"APY",sort:!0,formatter:function(e){return Object(k.e)(e)}},{dataField:"dailyApy",text:"Daily",sort:!0,formatter:function(e){return Object(k.e)(e)}},{dataField:"withdrawalFee",text:"Withdraw Fee",sort:!0,formatter:function(e,t){var r=t.dailyApy;return Object(v.jsx)("span",{className:0===p()(e).value()?"text-success":p()(e).value()>r?"text-danger":"",children:e})}},{dataField:"tradingApr",text:"Trading Fees",formatter:function(e,t){return t.tradingApr?Object(v.jsx)(y.a,{overlay:Object(v.jsxs)(g.a,{id:"popover-basic",children:[Object(v.jsx)(g.a.Title,{as:"h3",children:"APY Breakdown"}),Object(v.jsx)(g.a.Content,{children:Object(v.jsx)(m.a,{striped:!0,bordered:!0,hover:!0,children:Object(v.jsxs)("tbody",{children:[t.compoundingsPerYear&&Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"Compounds"}),Object(v.jsx)("td",{children:Object(k.d)(t.compoundingsPerYear)})]}),t.vaultApr&&Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"Vault APR"}),Object(v.jsx)("td",{children:Object(k.e)(t.vaultApr)})]}),t.beefyPerformanceFee&&Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"Beefy Fee"}),Object(v.jsx)("td",{children:Object(k.e)(t.beefyPerformanceFee)})]}),t.callFee&&Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"Call Fee"}),Object(v.jsx)("td",{children:Object(k.e)(t.callFee/100)})]}),t.vaultApy&&Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"Vault APY"}),Object(v.jsx)("td",{children:Object(k.e)(t.vaultApy)})]}),t.lpFee&&Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"LP Fee"}),Object(v.jsx)("td",{children:Object(k.e)(t.lpFee)})]}),t.tradingApr&&Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"Trading APR"}),Object(v.jsx)("td",{children:Object(k.e)(t.tradingApr)})]}),t.totalApy&&Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"Total APY"}),Object(v.jsx)("td",{children:Object(k.e)(t.totalApy)})]}),t.totalApy&&Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"Total APY"}),Object(v.jsx)("td",{children:Object(k.e)(t.totalApy)})]})]})})})]}),children:Object(v.jsx)(f.a,{variant:"success",children:"Included"})}):1===t.assets.length?"-":"Unknown"}},{dataField:"tvl",text:"TVL",sort:!0,formatter:function(e){return Object(k.c)(e)}}],A=function(e){var t=e.yields;return Object(v.jsx)(O.a,{keyField:"key",data:t,columns:E,expandRow:D,striped:!0,hover:!0,bootstrap4:!0,defaultSorted:[{dataField:"totalApy",order:"desc"}]})},U=r(35),w=(r(118),r(65)),M=r(134),L=r(130),T=r(131),F={desiredCoins:"",strictFilter:!0,exactMatch:!1,desiredPlatforms:"",desiredNetworks:"",includeSingleAssets:!0,includeLPs:!0},I=Object(c.a)(Object(c.a)({},F),{},{desiredCoins:"usdc dai busd usdt"}),B=Object(n.createContext)(I),R=function(e){var t=e.loading,r=e.poolCount,_=Object(n.useContext)(B),s=_.filters,a=_.setFilters,o=function(e){var t=e.target,r=t.value,n=t.name;a(Object(c.a)(Object(c.a)({},s),{},Object(U.a)({},n,r)))},l=function(e){var t=e.target,r=t.checked,n=t.name;a(Object(c.a)(Object(c.a)({},s),{},Object(U.a)({},n,r)))},i=s.desiredCoins,d=s.strictFilter,u=s.exactMatch,b=s.desiredPlatforms,j=s.desiredNetworks,p=s.includeSingleAssets,h=s.includeLPs;return Object(v.jsxs)(w.a,{className:"filters",children:[Object(v.jsxs)(M.a.Group,{children:[Object(v.jsx)(M.a.Label,{children:"\ud83d\udc8e Coins to Ride"}),Object(v.jsx)(M.a.Control,{name:"desiredCoins",value:i,size:"sm",type:"text",placeholder:"e.g. usdc dai busd",onChange:o}),Object(v.jsxs)(M.a.Check,{children:[Object(v.jsx)(M.a.Check.Input,{id:"strictFilter",name:"strictFilter",checked:d,type:"checkbox",onChange:l}),Object(v.jsxs)(M.a.Check.Label,{htmlFor:"strictFilter",children:["Show ONLY these coins ",Object(v.jsx)("span",{className:"silent",children:"(USDC won't show USDC-DAI)"})]})]}),Object(v.jsxs)(M.a.Check,{children:[Object(v.jsx)(M.a.Check.Input,{id:"exactMatch",name:"exactMatch",checked:u,type:"checkbox",onChange:l}),Object(v.jsxs)(M.a.Check.Label,{htmlFor:"exactMatch",children:["Exact Match ",Object(v.jsx)("span",{className:"silent",children:"(USDT won't match fUSDT)"})]})]})]}),Object(v.jsx)("hr",{}),Object(v.jsxs)(M.a.Group,{children:[Object(v.jsxs)(M.a.Check,{children:[Object(v.jsx)(M.a.Check.Input,{id:"includeLPs",name:"includeLPs",checked:h,type:"checkbox",onChange:l}),Object(v.jsx)(M.a.Check.Label,{htmlFor:"includeLPs",children:"Include Liquidity Pools"})]}),Object(v.jsxs)(M.a.Check,{children:[Object(v.jsx)(M.a.Check.Input,{id:"includeSingleAssets",name:"includeSingleAssets",checked:p,type:"checkbox",onChange:l}),Object(v.jsx)(M.a.Check.Label,{htmlFor:"includeSingleAssets",children:"Include Single Assets"})]})]}),Object(v.jsx)("hr",{}),Object(v.jsxs)(M.a.Group,{children:[Object(v.jsx)(M.a.Label,{children:"\ud83c\udff0 Platforms to Ride"}),Object(v.jsx)(M.a.Control,{name:"desiredPlatforms",value:b,size:"sm",type:"text",placeholder:"e.g. cake aave sushi",onChange:o})]}),Object(v.jsx)("hr",{}),Object(v.jsxs)(M.a.Group,{children:[Object(v.jsx)(M.a.Label,{children:"\ud83c\udf10 Networks to Ride"}),Object(v.jsx)(M.a.Control,{name:"desiredNetworks",value:j,size:"sm",type:"text",placeholder:"e.g. bsc polygon",onChange:o})]}),Object(v.jsx)("hr",{}),Object(v.jsx)("span",{children:t?Object(v.jsxs)(v.Fragment,{children:["Loading pools... ",Object(v.jsx)(L.a,{size:"sm",animation:"border",role:"status"})]}):0===r?"No pools found, please check your filters":"Found ".concat(r," pool").concat(1===r?"":"s"," on \ud83d\udc2e Beefy Finance.")}),Object(v.jsxs)(T.a,{className:"reset-filters-btn",children:[Object(v.jsx)(f.a,{size:"sm",variant:"info",onClick:function(){a(F)},children:"Clear Filters"}),Object(v.jsx)(f.a,{size:"sm",variant:"success",onClick:function(){a(I)},children:"Default Filters"})]})]})},W=r(136),K=r(135),N=r(132),S=r(66),q=(r(123),function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),r=t[0],_=t[1];return Object(v.jsxs)(W.a,{bg:"dark",variant:"dark",children:[Object(v.jsxs)(W.a.Brand,{href:"",children:[Object(v.jsx)("img",{alt:"",src:"/hat_short.png",className:"navbar-image"}),"   ",Object(v.jsx)("span",{className:"navbar-title",children:"yield.rodeo"})]}),Object(v.jsx)(K.a,{className:"ml-auto",children:Object(v.jsx)(y.a,{placement:"bottom",overlay:Object(v.jsx)(N.a,{children:r?"Copied!":"Click to copy!"}),children:Object(v.jsx)(S.CopyToClipboard,{text:"0x6e1b11ad54068dd3C7A2cAf334A7010f0B59511C",onCopy:function(){_(!0),setTimeout((function(){_(!1)}),1e3)},children:Object(v.jsx)("span",{children:"\u2764\ufe0f 0x6e1b11ad54068dd3C7A2cAf334A7010f0B59511C \u2764\ufe0f"})})})}),Object(v.jsx)(K.a,{children:Object(v.jsx)(K.a.Link,{className:"navbar-contact",href:"https://naezith.com/?id=contact",target:"_blank",rel:"noreferrer",children:"Contact"})})]})}),G=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),r=t[0],_=t[1],s=Object(n.useState)(I),a=Object(d.a)(s,2),o=a[0],j=a[1],p=Object(n.useState)(!0),h=Object(d.a)(p,2),O=h[0],f=h[1];Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,Object(b.c)();case 3:t=e.sent,f(!1),_(t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var m=Object(k.b)(r,o).map((function(e){return Object(c.a)(Object(c.a)({},e),{},{self:e})}));return Object(v.jsxs)("div",{className:"full-height",children:[Object(v.jsx)(u.a,{className:"p-3 App",children:Object(v.jsx)(x.a,{children:Object(v.jsx)(P.a,{children:Object(v.jsx)(q,{})})})}),Object(v.jsx)(B.Provider,{value:{filters:o,setFilters:j},children:Object(v.jsxs)(u.a,{className:"p-3 App",children:[Object(v.jsx)(x.a,{children:Object(v.jsx)(P.a,{children:Object(v.jsx)(R,{loading:O,poolCount:m.length})})}),O?Object(v.jsx)(L.a,{animation:"border",role:"status",children:Object(v.jsx)("span",{className:"sr-only",children:"Loading..."})}):Object(v.jsx)(x.a,{children:Object(v.jsx)(P.a,{children:Object(v.jsx)(A,{yields:m})})})]})})]})},Y=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,138)).then((function(t){var r=t.getCLS,n=t.getFID,_=t.getFCP,s=t.getLCP,a=t.getTTFB;r(e),n(e),_(e),s(e),a(e)}))};a.a.render(Object(v.jsx)(_.a.StrictMode,{children:Object(v.jsx)(G,{})}),document.getElementById("root")),Y()},26:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return getYieldsWithPrices})),__webpack_require__.d(__webpack_exports__,"b",(function(){return coinLogoUrl})),__webpack_require__.d(__webpack_exports__,"d",(function(){return poolLogoUrl})),__webpack_require__.d(__webpack_exports__,"a",(function(){return addressUrl}));var C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(11),C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(12),C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__),C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(18),C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(21),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9),networks=["avalanche","bsc","fantom","heco","polygon"],network_info={bsc:{id:56,explorer:"https://bscscan.com/address/"},heco:{id:128,explorer:"https://hecoinfo.com/address/"},polygon:{id:137,explorer:"https://polygonscan.com/address/"},fantom:{id:250,explorer:"https://ftmscan.com/address/"},avalanche:{id:43114,explorer:"https://cchain.explorer.avax.network/address/"}},getPools=function(){var _ref=Object(C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.a)(C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark((function _callee(network,type){var result,text,beginningText,endingText,jsonObj,_iterator,_step,pool;return C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,fetch("stake"===type?"https://raw.githubusercontent.com/beefyfinance/beefy-app/prod/src/features/configure/stake/".concat(network,"_stake.js"):"https://raw.githubusercontent.com/beefyfinance/beefy-app/prod/src/features/configure/vault/".concat(network,"_pools.js"));case 2:return result=_context.sent,_context.next=5,result.text();case 5:text=_context.sent,beginningText=" = [",endingText="];",text=text.substr(text.indexOf(beginningText)+beginningText.length-1,text.indexOf(endingText)-endingText.length).replaceAll("earnContractAbi: govPoolABI,","").replaceAll(", '4BELT'",""),jsonObj=eval(text),_iterator=Object(C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__.a)(jsonObj);try{for(_iterator.s();!(_step=_iterator.n()).done;)pool=_step.value,pool.network=network,pool.network_id=network_info[network].id,pool.key=network+"-"+pool.id,pool.type=type}catch(err){_iterator.e(err)}finally{_iterator.f()}return _context.abrupt("return",jsonObj);case 13:case"end":return _context.stop()}}),_callee)})));return function(e,t){return _ref.apply(this,arguments)}}(),fetchAllPools=function(){var e=Object(C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.a)(C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark((function e(){var t,r,n,_,s,a,c,o;return C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={stake:{},pool:{}},e.next=3,Promise.all(Object.keys(t).map(function(){var e=Object(C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.a)(C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark((function e(r){return C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(networks.map(function(){var e=Object(C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.a)(C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark((function e(n){return C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,getPools(n,r);case 2:t[r][n]=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:for(r=[],n=0,_=Object.keys(t);n<_.length;n++){s=_[n],a=Object(C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__.a)(networks);try{for(a.s();!(c=a.n()).done;)o=c.value,r=r.concat(t[s][o])}catch(l){a.e(l)}finally{a.f()}}return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getYieldsWithPrices=function(){var e=Object(C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.a)(C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark((function e(){var t,r,n,_;return C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetchAllPools();case 2:return t=e.sent,e.next=5,fetch("https://api.beefy.finance/lps");case 5:return e.next=7,e.sent.json();case 7:return r=e.sent,e.next=10,fetch("https://api.beefy.finance/apy/breakdown");case 10:return e.next=12,e.sent.json();case 12:return n=e.sent,e.next=15,fetch("https://api.beefy.finance/tvl");case 15:return e.next=17,e.sent.json();case 17:return _=e.sent,e.abrupt("return",t.map((function(e){var t=r[e.id],s=_[e.network_id][e.id],a=n[e.id];return Object(C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(C_Users_PC_Documents_Projects_yield_rodeo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({depositFee:"0.0%",withdrawalFee:"0.1%",dailyApy:a&&Object(_utils__WEBPACK_IMPORTED_MODULE_4__.a)(a.totalApy)},e),{},{lpPrice:t,tvl:s},a)})).filter((function(e){return e.tvl>0&&e.totalApy>1e-4})).sort((function(e,t){return e.totalApy<t.totalApy?1:-1})));case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),coinLogoUrl=function(e){return"https://trustwallet-assets-api.vercel.app/api/symbol/"+e},poolLogoUrl=function(e){return"https://raw.githubusercontent.com/beefyfinance/beefy-app/master/src/images/"+e},addressUrl=function(e,t){return network_info[e].explorer+t}},72:function(e,t,r){},75:function(e,t,r){},76:function(e,t,r){},9:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"e",(function(){return o})),r.d(t,"d",(function(){return l})),r.d(t,"c",(function(){return i})),r.d(t,"b",(function(){return d}));var n=r(18),_=function(e,t){var r,_=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=Object(n.a)(t);try{for(s.s();!(r=s.n()).done;){var a=r.value;if(_){if(e===a)return!0}else if(-1!==e.indexOf(a))return!0}}catch(c){s.e(c)}finally{s.f()}return!1},s=function(e,t){var r,_=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=Object(n.a)(t);try{for(s.s();!(r=s.n()).done;){var a=r.value;if(_){if(-1!==e.indexOf(a))return!0}else{var c,o=Object(n.a)(e);try{for(o.s();!(c=o.n()).done;){var l=c.value;if(-1!==l.indexOf(a))return!0}}catch(i){o.e(i)}finally{o.f()}}}}catch(i){s.e(i)}finally{s.f()}return!1},a=r(40),c=function(e){var t=Math.pow(10,Math.log10(e+1)/365)-1;return isNaN(t)?0:t},o=function(e){var t=a(e).format("0.00a%");return-1!==t.indexOf("NaN")?"\ud83d\udd25":t},l=function(e){return a(e).format("0,0")},i=function(e){return a(e).format("$0,0.0a")},d=function(e,t){var r=t.desiredCoins,a=t.strictFilter,c=t.exactMatch,o=t.desiredPlatforms,l=t.desiredNetworks,i=t.includeSingleAssets,d=t.includeLPs,u=o.trim().toUpperCase().split(" "),b=l.trim().toUpperCase().split(" ");return e.filter((function(e){var t=e.assets.map((function(e){return e.toLowerCase()}));if(!d&&e.assets.length>1)return!1;if(!i&&1===e.assets.length)return!1;var o=r.trim().toLowerCase().split(" ");if(o.length>0)if(1===e.assets.length){if(!s(t,o,c))return!1}else if(a){if(!function(e,t){var r,_=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=Object(n.a)(e);try{for(s.s();!(r=s.n()).done;){var a=r.value;if(_){if(-1===t.indexOf(a))return!1}else{var c,o=!1,l=Object(n.a)(t);try{for(l.s();!(c=l.n()).done;){var i=c.value;if(-1!==a.indexOf(i)){o=!0;break}}}catch(d){l.e(d)}finally{l.f()}if(!o)return!1}}}catch(d){s.e(d)}finally{s.f()}return!0}(t,o,c))return!1}else if(!s(t,o,c))return!1;return!(u.length>0&&!_(e.platform.toUpperCase(),u))&&!(b.length>0&&!_(e.network.toUpperCase(),b))}))}}},[[125,1,2]]]);
//# sourceMappingURL=main.50cfc76e.chunk.js.map