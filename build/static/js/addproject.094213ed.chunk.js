(self.webpackChunkreact17_webpack5_cli=self.webpackChunkreact17_webpack5_cli||[]).push([[300],{3429:(e,t,a)=>{"use strict";a.d(t,{Z:()=>g,$:()=>f});var r=a(7294),n=a(7835),c=a(4586);const l="carousel--3b9GF";var i=a(706),o=a(8207),s=e=>{var[t]=(0,o.i)(),[a,n]=(0,r.useState)("auto");return r.createElement(i.Z,{className:l,autoplay:!0},t.banners.map((e=>r.createElement("img",{key:e.src,src:e.src,onLoad:e=>{var{height:t}=e.target;t>a&&n(t)},alt:""}))))};s.defaultProps={banners:[{src:"http://19446153.s61i.faiusr.com/2/AD0IifOiCRACGAAg6_zU5gUowsiZ_AQw7gU46AI!900x900.jpg.webp"},{src:"http://19446153.s61i.faiusr.com/2/AD0IifOiCRACGAAg6_zU5gUoqJOuhwEw7gU46AI!900x900.jpg.webp"}]},s.editFields=["banner"];const m=s;function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){v(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function v(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function h(){var[{text:e="\u6309\u94ae",width:t,height:a}]=(0,o.i)();return r.createElement(Button,{style:{width:t,height:a},type:"primary"},e)}h.editFields=["width","height","text","link"],h.defaultProps={width:64,height:32};var d=()=>{var[{src:e,text:t,width:a,height:n}]=(0,o.i)();return r.createElement("div",{style:{width:a,height:n}},r.createElement("img",{style:{width:"100%"},src:e}),r.createElement("p",null,t))};d.defaultProps={src:"http://19446153.s61i.faiusr.com/2/AD0IifOiCRACGAAg6_zU5gUoqJOuhwEw7gU46AI!900x900.jpg.webp",text:"demo",width:"100%"},d.editFields=["width","height","text"];var f={ImageCom:d,ButtonDemo:h,Demo:function(){var[{background:e="black"},t]=(0,o.i)();return r.createElement("div",{className:css.test,style:{background:e}},"\u989c\u8272\u53ef\u7f16\u8f91\uff1a",r.createElement("input",{type:"text",onBlur:e=>t({background:e.target.value})}))},Carousel:m};const g=e=>{var{elementType:t,cardList:a,changeCardList:l,children:i,accept:s,containerType:m}=e,[p,v]=(0,o.i)(),h={type:s||"card",elementType:t,containerType:m||"normal",update:v},[,d]=(0,n.useDrag)({item:h,begin:e=>(a.find((e=>-1===e.id))||l([{bg:"aqua",category:"\u653e\u8fd9\u91cc",id:-1},...a]),h),end(e,t){var r=t.getDropResult(),n=a.findIndex((e=>-1===e.id)),i=[...a];if(r.update)return i.splice(n,1),r.update({children:[u(u({},t.getItem()),{},{id:(0,c.Z)()})]}),void l(i);t.didDrop()?i.splice(n,1,u(u({},t.getItem()),{},{id:(0,c.Z)()})):i.splice(n,1),l(i)}});return r.createElement("div",{ref:d,style:{cursor:"move"}},i)}},8526:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var r=a(3032),n="/api/getData",c="24f4e35b-8330-4982-a993-734a95c4fd2b";function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;return r.Z.post(n,{id:e}).then((e=>{try{return JSON.parse(e.data.data)}catch(t){return null}}))}},3090:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Fe});var r=a(7294);const n="wrapper--2YgFV",c="list--Y8ccz",l="item--2nZsY",i="active--1Gf6J",o="text--3vrCK",s="content--1s0ty";function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var p=r.createElement("path",{d:"M16.755 3C20.59 3 23 5.392 23 9.253v2.568a.756.756 0 01-.765.757v-.018a.765.765 0 01-.765-.765V9.253c0-3.052-1.671-4.723-4.715-4.723H9.253C6.21 4.53 4.53 6.21 4.53 9.253v7.502c0 3.035 1.68 4.715 4.723 4.715h7.502c3.044 0 4.715-1.68 4.715-4.715a.765.765 0 011.53 0C23 20.608 20.608 23 16.755 23H9.253C5.393 23 3 20.608 3 16.755V9.253C3 5.393 5.392 3 9.253 3zM13.07 14.645a.756.756 0 01.74.791v.968l-.014.12a.765.765 0 01-.778.618.774.774 0 01-.74-.791v-.968a.765.765 0 01.792-.738zm-.035-5.796c.085 0 .169.014.248.041a.765.765 0 01.544.733l-.001 2.391 2.604.001a.756.756 0 01.255.041.759.759 0 01.537.733.765.765 0 01-.748.765H9.658a.775.775 0 01-.206-.033.773.773 0 01-.586-.74.757.757 0 01.757-.766h2.638V9.614a.783.783 0 01.774-.765z",fill:"#131746",fillRule:"nonzero",opacity:.7});const u=function(e){return r.createElement("svg",m({width:25,height:25,xmlns:"http://www.w3.org/2000/svg"},e),p)};function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var h=r.createElement("defs",null,r.createElement("filter",{id:"icon-project_svg__a"},r.createElement("feColorMatrix",{in:"SourceGraphic",values:"0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"}))),d=r.createElement("g",{transform:"translate(-16 -16)",filter:"url(#icon-project_svg__a)",fill:"none",fillRule:"evenodd"},r.createElement("path",{d:"M16 16h24v24H16z"}),r.createElement("path",{d:"M23.623 28c.775 0 1.353.14 1.842.4.49.262.873.646 1.134 1.135.262.489.401 1.067.401 1.842v1.246c0 .775-.14 1.353-.4 1.842a2.726 2.726 0 01-1.135 1.134c-.489.262-1.067.401-1.842.401h-.246c-.775 0-1.353-.14-1.842-.4a2.726 2.726 0 01-1.134-1.135c-.262-.489-.401-1.067-.401-1.842v-1.246c0-.775.14-1.353.4-1.842a2.726 2.726 0 011.135-1.134c.489-.262 1.067-.401 1.842-.401h.246zM33 30a3 3 0 010 6h-1a3 3 0 010-6h1zm-.377-10c.775 0 1.353.14 1.842.4.49.262.873.646 1.134 1.135.262.489.401 1.067.401 1.842v1.246c0 .775-.14 1.353-.4 1.842a2.726 2.726 0 01-1.135 1.134c-.489.262-1.067.401-1.842.401h-.246c-.775 0-1.353-.14-1.842-.4a2.726 2.726 0 01-1.134-1.135c-.262-.489-.401-1.067-.401-1.842v-1.246c0-.775.14-1.353.4-1.842a2.726 2.726 0 011.135-1.134c.489-.262 1.067-.401 1.842-.401h.246zM24 20a3 3 0 110 6h-1a3 3 0 110-6h1z",fill:"#131746"}));const f=function(e){return r.createElement("svg",v({width:24,height:25,xmlns:"http://www.w3.org/2000/svg"},e),h,d)};var g=a(1752);const E={flex:"flex--1n_b4","flex-center":"flex-center--1xRVp","flex-algin-center":"flex-algin-center--CEpvJ","lg-button-primary":"lg-button-primary--3z3v4","text-p":"text-p--3KkPv",addModal:"addModal--2EeJ2",title:"title--2DHnP","project-body":"project-body--3RltP","project-name":"project-name--2uXmu",input:"input--q-rcQ","project-type":"project-type--1PuuI",devices:"devices--1p2j-"};var y=a(4184),b=a.n(y);const w={flex:"flex--95Qoa","flex-center":"flex-center--2nPJd","flex-algin-center":"flex-algin-center--2anJO","lg-button-primary":"lg-button-primary--2878K","text-p":"text-p--snIT0",button:"button--q9mhz",primary:"primary--2zJHe"};var z=e=>{var{children:t,htmlType:a="button",type:n="primary",width:c=100,onClick:l=(()=>{})}=e,i=b()({["".concat(w.button)]:!0,["".concat(w[n])]:!0}),o={width:"number"===typeof c?"".concat(c,"px"):c};return r.createElement("button",{type:a,className:i,css:o,onClick:l},t)};z.defaultProps={htmlType:"button",width:"100%"};const x=z,j="type--1_5Ui",O="typename--2Dve9",C="size--1wdB6",M="iconbox--ly8rE",D="icon--sbxXB",H="custom--1QfaP",V="input--2bicR";const P=(0,r.createContext)({value:{},setValue:()=>{}});const k=e=>{var{value:t,setValue:a}=(0,r.useContext)(P),{icon:n,name:c,size:l,custom:i}=e,o=b()({"is-active":t.name===c,["".concat(j)]:!0});return r.createElement("div",{className:o,onClick:()=>{a(e)},"aria-hidden":!0},r.createElement("div",{className:M},r.createElement("i",{className:D},n)),c&&r.createElement("div",{className:O},c),i?r.createElement("div",{className:H},r.createElement("input",{type:"number",className:V,placeholder:"\u5bbd\u5ea6"}),"x",r.createElement("input",{type:"number",className:V,placeholder:"\u9ad8\u5ea6"})):r.createElement("div",{className:C},l))};var N=a(4586);function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var A=r.createElement("g",{fillRule:"nonzero",fill:"none"},r.createElement("path",{d:"M11.703 13.14h24.594c.469 0 .703.23.703.686v18.629c0 .457-.234.686-.703.686H11.703c-.469 0-.703-.229-.703-.686V13.826c0-.457.234-.685.703-.685z",fill:"#D0D1DA"}),r.createElement("path",{d:"M35.953 32.484H12.047V13.797h23.906v18.687zM12.047 12.422c-.76 0-1.375.615-1.375 1.375v18.687c0 .76.615 1.375 1.375 1.375h23.906c.76 0 1.375-.615 1.375-1.375V13.797c0-.76-.615-1.375-1.375-1.375H12.047z",fill:"#595C7D"}),r.createElement("path",{fill:"#FFF",d:"M12.39 14.14h23.22v16.626H12.39z"}),r.createElement("path",{d:"M24 13.238a.172.172 0 100-.343.172.172 0 000 .343z",fill:"#FFCD46"}),r.createElement("path",{d:"M9.297 31.797h29.406c.459 0 .688.23.688.687v1.375c0 .459-.23.688-.688.688H9.297c-.458 0-.688-.23-.688-.688v-1.375c0-.458.23-.687.688-.687z",fill:"#D0D1DA"}),r.createElement("path",{d:"M38.703 33.86H9.297v-1.376h29.406v1.375zM9.297 31.11c-.76 0-1.375.615-1.375 1.374v1.375c0 .76.615 1.375 1.375 1.375h29.406c.76 0 1.375-.615 1.375-1.375v-1.375c0-.759-.615-1.375-1.375-1.375H9.297z",fill:"#595C7D"}),r.createElement("path",{fill:"#FFCD46",d:"M20.906 32.14h6.188v1.032h-6.188z"}),r.createElement("path",{d:"M26.75 32.828h-5.5v-.344h5.5v.344zm-5.844-1.031a.344.344 0 00-.343.344v1.03c0 .19.153.345.343.345h6.188c.19 0 .344-.154.344-.344V32.14a.344.344 0 00-.344-.344h-6.188z",fill:"#595C7D"}));const Z=function(e){return r.createElement("svg",F({width:48,height:48,xmlns:"http://www.w3.org/2000/svg"},e),A)};function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var I=r.createElement("g",{fillRule:"nonzero",fill:"none"},r.createElement("path",{d:"M8.703 11.14h30.594c.469 0 .703.23.703.686v22.629c0 .457-.234.686-.703.686H8.703c-.469 0-.703-.229-.703-.686V11.826c0-.457.234-.685.703-.685z",fill:"#D0D1DA"}),r.createElement("path",{d:"M38.953 11.797v22.687H9.047V11.797h29.906m0-1.375H9.047c-.76 0-1.375.615-1.375 1.375v22.687c0 .76.615 1.375 1.375 1.375h29.906c.76 0 1.375-.615 1.375-1.375V11.797c0-.76-.615-1.375-1.375-1.375z",fill:"#595C7D"}),r.createElement("path",{fill:"#FFF",d:"M9.39 12.14h29.22v20.626H9.39z"}),r.createElement("path",{d:"M23.828 11.066a.172.172 0 10.344 0 .172.172 0 10-.344 0z",fill:"#FFCD46"}),r.createElement("path",{d:"M6.297 33.797h35.406c.459 0 .688.23.688.687v1.375c0 .459-.23.688-.688.688H6.297c-.458 0-.688-.23-.688-.688v-1.375c0-.458.23-.687.688-.687z",fill:"#D0D1DA"}),r.createElement("path",{d:"M41.703 34.484v1.375H6.297v-1.375h35.406m0-1.375H6.297c-.76 0-1.375.616-1.375 1.375v1.375c0 .76.615 1.375 1.375 1.375h35.406c.76 0 1.375-.615 1.375-1.375v-1.375c0-.759-.615-1.375-1.375-1.375z",fill:"#595C7D"}),r.createElement("path",{fill:"#FFCD46",d:"M20.906 34.14h6.188v1.032h-6.188z"}),r.createElement("path",{d:"M26.75 34.484v.344h-5.5v-.344h5.5m.344-.687h-6.188a.344.344 0 00-.343.344v1.03c0 .19.153.345.343.345h6.188c.19 0 .344-.154.344-.344V34.14a.344.344 0 00-.344-.344z",fill:"#595C7D"}));const R=function(e){return r.createElement("svg",T({width:48,height:48,xmlns:"http://www.w3.org/2000/svg"},e),I)};function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var S=r.createElement("g",{fill:"#595C7D",fillRule:"nonzero"},r.createElement("path",{d:"M35.364 8.827H12.6a3.806 3.806 0 00-3.794 3.794v22.765a3.806 3.806 0 003.794 3.795h22.765a3.806 3.806 0 003.794-3.795V12.621a3.806 3.806 0 00-3.794-3.794zm1.897 26.56a1.9 1.9 0 01-1.897 1.896H12.6a1.9 1.9 0 01-1.897-1.897V18.312h26.56v17.074zm0-18.972h-26.56v-3.794a1.9 1.9 0 011.898-1.897h22.765a1.9 1.9 0 011.897 1.897v3.794z"}),r.createElement("path",{d:"M12.599 13.57a.95.95 0 00.948.948.95.95 0 00.949-.948.948.948 0 10-1.897 0zm3.794 0a.95.95 0 00.949.948.95.95 0 00.948-.948.948.948 0 10-1.897 0zm3.794 0a.95.95 0 00.949.948.95.95 0 00.948-.948.948.948 0 10-1.897 0z"}));const U=function(e){return r.createElement("svg",_({width:48,height:48,xmlns:"http://www.w3.org/2000/svg"},e),S)};function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var L=r.createElement("path",{d:"M37.333 10c.74 0 1.371.26 1.89.778.517.518.777 1.148.777 1.889v16c0 .74-.26 1.37-.778 1.889a2.572 2.572 0 01-1.889.777H26.667L28 36.667h4c.26 0 .472.083.64.25.167.169.257.4.249.639a.865.865 0 01-.25.639.865.865 0 01-.639.249H16a.865.865 0 01-.639-.25.865.865 0 01-.25-.64c0-.257.084-.47.25-.637.17-.168.401-.259.64-.25h4l1.333-5.334H10.667a2.572 2.572 0 01-1.889-.777A2.572 2.572 0 018 28.666V12.668c0-.741.26-1.37.778-1.889A2.572 2.572 0 0110.667 10h26.666zM21.834 36.667h4.333l-.889-3.556h-2.555l-.889 3.556zm16.388-8v-16a.865.865 0 00-.25-.64.865.865 0 00-.639-.249H10.667a.865.865 0 00-.639.25.865.865 0 00-.25.639v16c0 .26.084.472.25.639.17.167.4.257.64.249h26.665a.865.865 0 00.64-.25.865.865 0 00.25-.64v.002z",fill:"#595C7D",fillRule:"nonzero"});const B=function(e){return r.createElement("svg",J({width:48,height:48,xmlns:"http://www.w3.org/2000/svg"},e),L)};function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var G=r.createElement("path",{d:"M31.429 8.635H17.7a1.923 1.923 0 00-1.919 1.919v27.244c0 1.056.863 1.919 1.919 1.919h13.728a1.923 1.923 0 001.918-1.919V10.554a1.923 1.923 0 00-1.918-1.919m-8.959.827h4.19a.39.39 0 01.386.388.39.39 0 01-.387.387H22.47a.39.39 0 01-.387-.387.38.38 0 01.387-.388m2.095 28.988a1.03 1.03 0 01-1.039-1.039c0-.58.476-1.038 1.039-1.038.58 0 1.038.457 1.038 1.038a1.04 1.04 0 01-1.038 1.039m7.445-2.975H17.12V11.03h14.89v24.446z",fill:"#595C7D",fillRule:"nonzero"});const Q=function(e){return r.createElement("svg",q({width:48,height:48,xmlns:"http://www.w3.org/2000/svg"},e),G)};function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var X=r.createElement("g",{fillRule:"nonzero",fill:"none"},r.createElement("path",{d:"M29.151 8.188H18.343a2.731 2.731 0 00-2.728 2.728v26.196a2.731 2.731 0 002.728 2.728h10.808a2.731 2.731 0 002.728-2.728V10.916a2.731 2.731 0 00-2.728-2.728z",fill:"#FFF"}),r.createElement("path",{d:"M29.151 39.84H18.343a2.731 2.731 0 01-2.728-2.728V10.916a2.731 2.731 0 012.728-2.728h10.808a2.731 2.731 0 012.728 2.728v26.196a2.731 2.731 0 01-2.728 2.728zM18.343 9.084a1.834 1.834 0 00-1.832 1.832v26.196c0 1.012.824 1.832 1.832 1.832h10.808a1.834 1.834 0 001.832-1.832V10.916a1.834 1.834 0 00-1.832-1.832H18.343z",fill:"#595C7D"}),r.createElement("path",{d:"M31.895 15.78a.142.142 0 01-.14-.14v-1.692c0-.076.064-.14.14-.14.076 0 .14.064.14.14v1.692a.137.137 0 01-.14.14zm-16.308 0a.142.142 0 01-.14-.14v-1.692c0-.076.064-.14.14-.14.076 0 .14.064.14.14v1.692c0 .076-.064.14-.14.14zm0 3.636a.142.142 0 01-.14-.14v-1.692c0-.076.064-.14.14-.14.076 0 .14.064.14.14v1.692c0 .076-.064.14-.14.14zm11.196-8.996h-6.068a.901.901 0 01-.9-.9v-.852h7.868v.852c0 .496-.404.9-.9.9zm-1.028 28.184H21.74a.232.232 0 010-.464h4.012c.128 0 .232.104.232.232a.229.229 0 01-.228.232z",fill:"#595C7D"}));const Y=function(e){return r.createElement("svg",K({width:48,height:48,xmlns:"http://www.w3.org/2000/svg"},e),X)};function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var W=r.createElement("g",{fillRule:"nonzero",fill:"none"},r.createElement("path",{d:"M29.151 8.188H18.343a2.731 2.731 0 00-2.728 2.728v26.196a2.731 2.731 0 002.728 2.728h10.808a2.731 2.731 0 002.728-2.728V10.916a2.731 2.731 0 00-2.728-2.728z",fill:"#FFF"}),r.createElement("path",{d:"M29.151 39.84H18.343a2.731 2.731 0 01-2.728-2.728V10.916a2.731 2.731 0 012.728-2.728h10.808a2.731 2.731 0 012.728 2.728v26.196a2.731 2.731 0 01-2.728 2.728zM18.343 9.084a1.834 1.834 0 00-1.832 1.832v26.196c0 1.012.824 1.832 1.832 1.832h10.808a1.834 1.834 0 001.832-1.832V10.916a1.834 1.834 0 00-1.832-1.832H18.343z",fill:"#595C7D"}),r.createElement("path",{d:"M31.895 15.78a.142.142 0 01-.14-.14v-1.692c0-.076.064-.14.14-.14.076 0 .14.064.14.14v1.692a.137.137 0 01-.14.14zm-16.308 0a.142.142 0 01-.14-.14v-1.692c0-.076.064-.14.14-.14.076 0 .14.064.14.14v1.692c0 .076-.064.14-.14.14zm0 3.636a.142.142 0 01-.14-.14v-1.692c0-.076.064-.14.14-.14.076 0 .14.064.14.14v1.692c0 .076-.064.14-.14.14zm11.196-8.996h-6.068a.901.901 0 01-.9-.9v-.852h7.868v.852c0 .496-.404.9-.9.9zm-1.028 28.184H21.74a.232.232 0 010-.464h4.012c.128 0 .232.104.232.232a.229.229 0 01-.228.232z",fill:"#595C7D"}));const ee=function(e){return r.createElement("svg",$({width:48,height:48,xmlns:"http://www.w3.org/2000/svg"},e),W)};function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var ae=r.createElement("g",{fillRule:"nonzero",fill:"none"},r.createElement("path",{d:"M29.151 8.188H18.343a2.731 2.731 0 00-2.728 2.728v26.196a2.731 2.731 0 002.728 2.728h10.808a2.731 2.731 0 002.728-2.728V10.916a2.731 2.731 0 00-2.728-2.728z",fill:"#FFF"}),r.createElement("path",{d:"M29.151 39.84H18.343a2.731 2.731 0 01-2.728-2.728V10.916a2.731 2.731 0 012.728-2.728h10.808a2.731 2.731 0 012.728 2.728v26.196a2.731 2.731 0 01-2.728 2.728zM18.343 9.084a1.834 1.834 0 00-1.832 1.832v26.196c0 1.012.824 1.832 1.832 1.832h10.808a1.834 1.834 0 001.832-1.832V10.916a1.834 1.834 0 00-1.832-1.832H18.343z",fill:"#595C7D"}),r.createElement("path",{d:"M31.895 15.78a.142.142 0 01-.14-.14v-1.692c0-.076.064-.14.14-.14.076 0 .14.064.14.14v1.692a.137.137 0 01-.14.14zm-16.308 0a.142.142 0 01-.14-.14v-1.692c0-.076.064-.14.14-.14.076 0 .14.064.14.14v1.692c0 .076-.064.14-.14.14zm0 3.636a.142.142 0 01-.14-.14v-1.692c0-.076.064-.14.14-.14.076 0 .14.064.14.14v1.692c0 .076-.064.14-.14.14zm11.196-8.996h-6.068a.901.901 0 01-.9-.9v-.852h7.868v.852c0 .496-.404.9-.9.9zm-1.028 28.184H21.74a.232.232 0 010-.464h4.012c.128 0 .232.104.232.232a.229.229 0 01-.228.232z",fill:"#595C7D"}));const re=function(e){return r.createElement("svg",te({width:48,height:48,xmlns:"http://www.w3.org/2000/svg"},e),ae)};var ne=[{uuid:(0,N.Z)(),name:"\u5c0f\u7b14\u8bb0\u672c",size:"1024 x 1024",icon:r.createElement(Z,null)},{uuid:(0,N.Z)(),name:"\u7b14\u8bb0\u672c",size:"1440 x 1024",icon:r.createElement(R,null)},{uuid:(0,N.Z)(),name:"\u684c\u9762",size:"1920 x 1080",icon:r.createElement(B,null)}],ce=[{uuid:(0,N.Z)(),name:"iPhone SE",size:"320 x 568",icon:r.createElement(Y,null)},{uuid:(0,N.Z)(),name:"iPhone",size:"375 x 812",icon:r.createElement(ee,null)},{uuid:(0,N.Z)(),name:"iPhone 12",size:"390 x 844",icon:r.createElement(re,null)},{uuid:(0,N.Z)(),name:"Android",size:"360 x 640",icon:r.createElement(Q,null)}],le=[{uuid:(0,N.Z)(),icon:r.createElement(U,null),custom:!0}],ie=a(4261);function oe(){return(oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var{TabPane:se}=g.Z;function me(e){}var pe=e=>r.createElement("div",{className:E.devices},e.map((e=>{var{name:t,size:a,icon:n,custom:c=!1,uuid:l}=e;return r.createElement(k,oe({key:l},{name:t,size:a,icon:n,custom:c,uuid:l}))})));const ue=e=>{var{handleOk:t,visible:a,setVisible:n}=e,[c,l]=(0,r.useState)({}),[i,o]=(0,r.useState)("");return r.createElement(ie.Z,{visible:a,className:E.addModal,title:null,footer:null,width:666,onCancel:()=>n(!1),maskClosable:!1},r.createElement("div",{className:E.project},r.createElement("div",{className:E.title},"\u521b\u5efa\u9879\u76ee"),r.createElement("div",{className:E["project-body"]},r.createElement("div",{className:E["project-name"]},r.createElement("input",{className:E.input,type:"text",name:"",value:i,onChange:e=>o(e.target.value),placeholder:"\u8bf7\u8f93\u5165\u9879\u76ee\u540d\u79f0"})),r.createElement("div",{className:E["project-type"]},r.createElement(P.Provider,{value:{value:c,setValue:l}},r.createElement(g.Z,{defaultActiveKey:"1",onChange:me,centered:!0,className:"lego-tabs"},r.createElement(se,{tab:"PC\u7aef",key:"1"},pe(ne)),r.createElement(se,{tab:"\u79fb\u52a8H5",key:"2"},pe(ce)),r.createElement(se,{tab:"\u81ea\u5b9a\u4e49",key:"3"},pe(le))))),r.createElement(x,{type:"primary",width:320,onClick:()=>{t(c,i),n(!1)}},"\u7acb\u5373\u521b\u5efa"))))},ve="projects--VQxAF",he="container--23-CC",de="is-empty--3CAuN",fe="title--1I1U5",ge="wrapper--1M2cT";var Ee=a(2977);const ye={flex:"flex--3V71i","flex-center":"flex-center--2XgxD","flex-algin-center":"flex-algin-center--3SNFg","lg-button-primary":"lg-button-primary--1gZXc","text-p":"text-p--3FgIS","project-item":"project-item--2IdMT","project-name":"project-name--VoExM","project-info":"project-info--1cpaP","project-cover":"project-cover--2BoVM","project-time":"project-time--2B2Z2"};const be=e=>{var{name:t,cover:a,creatTime:n}=e;return r.createElement("div",{className:ye["project-item"]},r.createElement("div",{className:ye["project-cover"]},"string"===typeof a?r.createElement("img",{src:a,alt:t}):a),r.createElement("div",{className:ye["project-name"]},t),r.createElement("div",{className:ye["project-info"]},r.createElement("div",{className:ye["project-time"]},n),r.createElement("div",{className:ye["project-more"]},r.createElement(Ee.Z,null))))},we="empty--1fRVk",ze="des--3tytk";function xe(){return(xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var je=r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("path",{d:"M64 81c35.346 0 64-6.268 64-14S99.346 53 64 53c-22.18 0-41.726 2.468-53.209 6.218C3.975 61.443 0 64.12 0 67c0 7.732 28.654 14 64 14z",fill:"#F5F5F5"}),r.createElement("g",{fillRule:"nonzero",stroke:"#D9D9D9",strokeWidth:2},r.createElement("path",{d:"M110 26.521L89.709 3.515C88.735 1.948 87.312 1 85.814 1H42.186c-1.498 0-2.92.948-3.895 2.515L18 26.52V45h92V26.521z"}),r.createElement("path",{d:"M40.32 27c2.466 0 4.453 2.646 4.453 5.857h0v.042c0 3.212 2.01 5.803 4.476 5.803H78.75c2.466 0 4.476-2.615 4.476-5.827h0v-.012c0-3.211 1.987-5.863 4.452-5.863H110v36.274c0 4.244-2.641 7.726-5.9 7.726h0-80.2c-3.259 0-5.9-3.482-5.9-7.726h0V27z",fill:"#FAFAFA"})));const Oe=function(e){return r.createElement("svg",xe({width:128,height:81,xmlns:"http://www.w3.org/2000/svg"},e),je)},Ce={flex:"flex--2fEE3","flex-center":"flex-center--wAut3","flex-algin-center":"flex-algin-center--2cu4y","lg-button-primary":"lg-button-primary--332-u","text-p":"text-p--3x_iF",button:"button--3ec3k",primary:"primary--1rmfA"};var Me=e=>{var{children:t,htmlType:a="button",type:n="primary",width:c=100,onClick:l}=e,i=b()({["".concat(Ce.button)]:!0,["".concat(Ce[n])]:!0}),o={width:"number"===typeof c?"".concat(c,"px"):c};return r.createElement("button",{type:a,className:i,css:o,onClick:l},t)};Me.defaultProps={htmlType:"button",width:"100%",onClick:()=>{}};const De=Me;const He=e=>{var{setVisible:t}=e;return r.createElement("div",{className:we},r.createElement(Oe,null),r.createElement("div",{className:ze},"\u8fd9\u91cc\u4ec0\u4e48\u4e5f\u6ca1\u6709\u54e6\uff0c\u53bb\u521b\u5efa\u9879\u76ee\u5427\uff5e"),r.createElement(De,{onClick:()=>t(!0),type:"primary"},"\u521b\u5efa\u9879\u76ee"))};function Ve(){return(Ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var Pe=[{uuid:(0,N.Z)(),name:"\u79fb\u52a8\u7aefH5",creatTime:"2012-12-21",cover:a(4329)},{uuid:(0,N.Z)(),name:"\u79fb\u52a8\u7aefH5",creatTime:"2012-12-21",cover:a(6372)},{uuid:(0,N.Z)(),name:"\u79fb\u52a8\u7aefH5",creatTime:"2012-12-21",cover:a(143)},{uuid:(0,N.Z)(),name:"\u79fb\u52a8\u7aefH5",creatTime:"2012-12-21",cover:a(9729)}];const ke=e=>{var{setVisible:t}=e;return r.createElement("div",{className:ve},r.createElement("div",{className:fe},"\u5168\u90e8\u9879\u76ee"),r.createElement("div",{className:ge},r.createElement("div",{className:"".concat(he," ").concat(Pe.length<=0&&de)},Pe.length<=0?r.createElement(He,{setVisible:t}):Pe.map((e=>{var{name:t,creatTime:a,cover:n,uuid:c}=e;return r.createElement(be,Ve({key:c},{name:t,creatTime:a,cover:n}))})))))};var Ne={};const Fe=()=>{(0,r.useEffect)((()=>{}),[]);var[e,t]=(0,r.useState)(!1),a=(e=>{if(Ne.setVisible===e)return Ne.menuList;var t=[{icon:r.createElement(f,null),text:"\u5168\u90e8\u9879\u76ee",active:!0,onClick:()=>{}},{icon:r.createElement(u,null),text:"\u65b0\u5efa\u9879\u76ee",active:!1,onClick:()=>{e(!0)}}];return Ne.menuList=t,Ne.setVisible=e,t})(t);return r.createElement("div",{className:n},r.createElement("ul",{className:c},a.map((e=>{var{icon:t,text:a,onClick:n,active:c}=e;return r.createElement("li",{className:b()(l,{[i]:c}),onClick:n},t,r.createElement("span",{className:o},a))}))),r.createElement("div",{className:s},r.createElement(ke,{setVisible:t})),r.createElement(ue,{handleOk:(e,t)=>{},visible:e,setVisible:t}))}},7999:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>v});var r=a(7294),n=a(3429),c=a(3039),l=a(5977),i=a(8526),o=a(2633),s=a(6919),m=a(5776);const p="inline--mx0Ic";var u={backgroundColor:"white"};const v=e=>{var{pageId:t,projectId:a}=(0,l.UO)(),[v,h]=(0,m.I)(t),d=(0,o.L)((e=>e[t])),f=d&&d.list||[],g=(0,s.I0)();return(0,r.useEffect)((()=>{(0,i.Z)(a).then((e=>{g({type:"reset_project_data",data:e})}))}),[t]),r.createElement(v,null,r.createElement("div",{className:p,style:u},f.map(((e,t)=>{return n.$[e.elementType]&&(a=e.id,l=n.$[e.elementType],r.createElement(c.Y2,{id:a,defaultProps:l.defaultProps,enable:l.enable,isEdit:!1},r.createElement(l,null)));var a,l}))))}},3032:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var r=a(9669),n=a.n(r),c=a(8086),l=n().create({headers:{"Content-Type":"application/json"},timeout:1e4,withCredentials:!0});l.interceptors.request.use((e=>(e.headers.token="token",e))),l.interceptors.response.use((e=>{var t=e.data;return 0===t.code?t:1e4===t.code?(c.ZP.warning(t.message),window.location.href="/login",t):t}),(()=>{c.ZP.error("\u7f51\u7edc\u8bf7\u6c42\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5!")}));const i=l},4329:(e,t,a)=>{"use strict";e.exports=a.p+"static/media/cover-1@2x.dfcf1e44..png"},6372:(e,t,a)=>{"use strict";e.exports=a.p+"static/media/cover-2@2x.e2993d67..png"},143:(e,t,a)=>{"use strict";e.exports=a.p+"static/media/cover-3@2x.98cf49c3..png"},9729:(e,t,a)=>{"use strict";e.exports=a.p+"static/media/cover-4@2x.e415eb2a..png"}}]);