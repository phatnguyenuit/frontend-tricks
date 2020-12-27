(this["webpackJsonpfrontend-tricks"]=this["webpackJsonpfrontend-tricks"]||[]).push([[0],{101:function(e,t,n){e.exports=n(116)},106:function(e,t,n){},113:function(e,t,n){},116:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),l=n(27),r=n.n(l),c=n(121),i=n(140),s=n(91),u=(n(106),n(17)),p=n(137),m=n(141),d=n(138),f=n(41),g=n(80),b=n.n(g);var h=function(e,t){var n=Object(a.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),o=Object(u.a)(n,2),l=o[0],r=o[1];return[l,function(t){try{r(String(t)),window.localStorage.setItem(e,JSON.stringify(t))}catch(n){console.log(n)}}]},v=n(92),y={MuiTableHead:{root:{backgroundColor:"#000000"}},MuiTableCell:{head:{fontWeight:"bold",color:"#ffffff"}}},w=Object(v.a)({overrides:y}),E={foo:{component:o.a.lazy((function(){return n.e(5).then(n.bind(null,164))})),name:"Foo Component"},loading:{component:o.a.lazy((function(){return n.e(6).then(n.bind(null,154))})),name:"Loading Component"},table:{component:o.a.lazy((function(){return Promise.all([n.e(3),n.e(7)]).then(n.bind(null,163))})),name:"Table Component"},CustomSelect:{component:o.a.lazy((function(){return n.e(4).then(n.bind(null,162))})),name:"CustomSelect"}},k=n(78),j=n(44),O=n(88),S=n.n(O),C=(n(113),Object.keys(E).map((function(e){return{value:e,label:E[e].name,component:E[e].component}}))),x=C[0],I=function(){var e=h("page",x.value),t=Object(u.a)(e,2),n=t[0],a=t[1],l=o.a.useMemo((function(){return C.find((function(e){return e.value===n}))}),[n]),r=o.a.useState(l),c=Object(u.a)(r,2),i=c[0],s=c[1],g=o.a.useCallback((function(e){s(e),a(String(e.value))}),[s,a]),v=(i||x).component;return o.a.createElement(p.a,{theme:w},o.a.createElement(d.a,null),o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("a",{className:"App-link",href:"https://github.com/phatnguyenuit/frontend-tricks",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:S.a,className:"App-logo",alt:"logo"}),"Frontend Tricks"),o.a.createElement(b.a,{href:"https://github.com/phatnguyenuit/frontend-tricks"})),o.a.createElement("main",{className:"App-content"},o.a.createElement(f.a,{container:!0,spacing:1,alignItems:"center"},o.a.createElement(f.a,{item:!0,xs:"auto"},"Choose page to show:"),o.a.createElement(f.a,{item:!0,xs:!0,sm:6,md:2},o.a.createElement(j.default,{defaultTitle:"Choose Page",selection:C,selectedItem:i,onChange:g}))),o.a.createElement(o.a.Suspense,{fallback:o.a.createElement(k.a,null)},o.a.createElement(m.a,{mt:2},o.a.createElement(v,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=n(67);c.a({dsn:"https://d818eead91ee42fdb82bb41b0b8b9d54@o496727.ingest.sentry.io/5571838",autoSessionTracking:!0,release:"".concat(N.name,"@").concat(N.version),integrations:[new s.a.BrowserTracing],tracesSampleRate:1}),r.a.render(o.a.createElement(i.a,{fallback:"An error has occurred"},o.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},44:function(e,t,n){"use strict";n.d(t,"DEFAULT_ICONS",(function(){return g}));var a=n(1),o=n.n(a),l=n(12),r=n(120),c=n(41),i=n(84),s=n.n(i),u=n(85),p=n.n(u),m=n(58),d=n(55),f=(n(73),n(79));n.d(t,"CustomMultipleSelect",(function(){return f.a}));var g={closeIcon:o.a.createElement(s.a,null),openIcon:o.a.createElement(p.a,null)};var b=o.a.memo((function(e){var t=e.defaultTitle,n=e.selection,i=e.SelectIcons,s=(i=void 0===i?g:i).openIcon,u=i.closeIcon,p=Object(d.a)(),f=Object(m.b)(e),b=f.open,h=f.handleToggle,v=f.handleSelectItem,y=f.isSelectedItem,w=f.stopPropagation,E=f.closeSelection,k=f.selectedItem,j=Object(a.useMemo)((function(){return(null===k||void 0===k?void 0:k.label)||t}),[t,k]);return o.a.createElement(r.a,{onClickAway:E},o.a.createElement("div",{className:p.selectWrapper},o.a.createElement(c.a,{container:!0,justify:"space-between",wrap:"nowrap",className:Object(l.a)(p.selectHeader,{"no-value":!k}),onClick:h},o.a.createElement(c.a,{item:!0,className:p.selectHeaderTitle},j),o.a.createElement(c.a,{item:!0,xs:"auto"},b?s:u)),b&&o.a.createElement("ul",{className:p.selectList,onClick:w},n.map((function(e){var t=y(e);return o.a.createElement(c.a,{container:!0,component:"li",justify:"space-between",wrap:"nowrap",alignItems:"center",className:Object(l.a)(p.selectListItem,{selected:t}),key:"".concat(e.value,"-").concat(e.label),onClick:v(e)},o.a.createElement(c.a,{item:!0},e.label))})))))}));b.displayName="CustomSelect",t.default=b},55:function(e,t,n){"use strict";var a=n(123),o=n(118);t.a=Object(o.a)((function(e){return Object(a.a)({selectWrapper:{position:"relative",userSelect:"none",width:"100%"},selectHeader:{backgroundColor:"#f2f3f4",border:"1px solid #cfd2d4",borderRadius:e.spacing(.5),color:"#3f4b53",cursor:"default",height:40,padding:e.spacing(1,2),position:"relative","&.no-value":{color:"#b7bbbf",fontSize:14,lineHeight:1.29,overflow:"hidden"}},selectHeaderTitle:{lineHeight:"24px",marginRight:e.spacing(.5),overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},selectList:{backgroundColor:"#ffffff",borderRadius:e.spacing(.5),boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.1)",fontWeight:700,listStyleType:"none",margin:0,marginTop:e.spacing(1),maxHeight:300,overflowY:"auto",padding:0,position:"absolute",width:"100%",zIndex:10},selectListItem:{width:"100%",fontSize:14,padding:e.spacing(2),lineHeight:1.29,color:"#6f787e",cursor:"default",height:"48px",backgroundColor:"#ffffff","&:hover":{backgroundColor:"#f2f3f4"},"& > div":{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},"&.selected":{color:"#3f4b53",backgroundColor:"#f2f3f4"}}})}),{classNamePrefix:"CustomSelect"})},58:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var a=n(93),o=n(17),l=n(1),r=function(){var e=Object(l.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(l.useCallback)((function(){a(!n)}),[n]),c=Object(l.useCallback)((function(e){return e.stopPropagation()}),[]),i=Object(l.useCallback)((function(){return a(!1)}),[]);return{open:n,setOpen:a,handleToggle:r,closeSelection:i,stopPropagation:c}},c=function(e){var t=e.onChange,n=e.selectedItem,a=r(),c=a.open,i=a.setOpen,s=a.handleToggle,u=a.closeSelection,p=a.stopPropagation,m=Object(l.useState)(),d=Object(o.a)(m,2),f=d[0],g=void 0===f?n:f,b=d[1],h=Object(l.useCallback)((function(e){return function(){i(!1),b(e),t(e)}}),[t,i]),v=Object(l.useCallback)((function(e){return function(e,t){return!!t&&[e.label===t.label,e.value===t.value].every(Boolean)}(e,g)}),[g]);return{open:c,selectedItem:g,isSelectedItem:v,setOpen:i,handleToggle:s,handleSelectItem:h,closeSelection:u,stopPropagation:p}},i=function(e){var t=e.onChange,n=e.selectedItem,c=void 0===n?[]:n,i=r(),s=i.open,u=i.setOpen,p=i.handleToggle,m=i.closeSelection,d=i.stopPropagation,f=Object(l.useState)(c),g=Object(o.a)(f,2),b=g[0],h=void 0===b?[]:b,v=g[1],y=Object(l.useCallback)((function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(){var o=Object(a.a)(h);n?o=o.filter((function(t){return[t.label!==e.label,t.value!==e.value].some(Boolean)})):o.push(e),v(o),t(o)}}),[t,h]),w=Object(l.useCallback)((function(e){return h.includes(e)}),[h]);return{open:s,selectedItems:h,isSelectedItem:w,setOpen:u,handleToggle:p,handleSelectItem:y,closeSelection:m,stopPropagation:d}}},67:function(e){e.exports=JSON.parse('{"name":"frontend-tricks","version":"0.1.0","private":true,"license":"MIT","homepage":"https://phatnguyenuit.github.io/frontend-tricks","dependencies":{"@material-ui/core":"^4.11.1","@material-ui/icons":"^4.9.1","@sentry/react":"^5.29.2","@sentry/tracing":"^5.29.2","@testing-library/jest-dom":"^5.5.0","@testing-library/react":"^11.2.2","@testing-library/user-event":"^12.2.2","@types/jest":"^26.0.15","@types/node":"^14.14.10","@types/react":"^16.9.34","@types/react-dom":"^16.9.7","react":"^16.13.1","react-dom":"^16.13.1","react-github-corner":"^2.3.0","react-scripts":"3.4.1","typescript":"~3.8.3"},"scripts":{"start":"react-scripts start","build":"react-scripts build","predeploy":"yarn build","deploy":"gh-pages -d build","test":"react-scripts test","lint":"eslint src/**/*.{ts,tsx}","lint:fix":"eslint --fix src/**/*.{ts,tsx}","type-check":"tsc --noEmit","eject":"react-scripts eject"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"@typescript-eslint/eslint-plugin":"^3.7.1","@typescript-eslint/parser":"^3.7.1","eslint":"^6.8.0","eslint-config-prettier":"^6.15.0","eslint-plugin-import":"^2.22.1","eslint-plugin-prettier":"^3.1.3","eslint-plugin-react":"^7.19.0","eslint-plugin-react-hooks":"^4.2.0","gh-pages":"3.0.0","husky":"^4.2.5","lint-staged":"^10.2.2","prettier":"^2.0.5"},"husky":{"hooks":{"pre-commit":"yarn type-check && lint-staged"}},"lint-staged":{"*.{js,jsx,ts,tsx}":["yarn lint:fix"],"{*.{json,md}}":["prettier --write"]},"jest":{"coverageThreshold":{"global":{"branches":10,"functions":10,"lines":10,"statements":10}},"collectCoverageFrom":["**/*.{ts,tsx}","!**/node_modules/**","!**/coverage/**","!src/serviceWorker.ts"]}}')},73:function(e,t){},78:function(e,t,n){"use strict";var a=n(1),o=n.n(a),l=n(123),r=n(118),c=Object(r.a)((function(e){return Object(l.a)({loadingContainer:{left:"50%",position:"absolute",top:"50%",transform:"translate(-50%, -50%)"},loader:{border:"3px solid #cfd2d4",borderRadius:"50%",borderTop:"3px solid ".concat(e.palette.primary.main),width:"64px",height:"64px",animation:"$spin 2s linear infinite"},"@keyframes spin":{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(1turn)"}}})}),{classNamePrefix:"Loading"}),i=o.a.memo((function(){var e=c();return o.a.createElement("div",null,o.a.createElement("div",{className:e.loadingContainer},o.a.createElement("div",{className:e.loader})))}));i.displayName="Loading";t.a=i},79:function(e,t,n){"use strict";var a=n(86),o=n(1),l=n.n(o),r=n(12),c=n(87),i=n.n(c),s=n(120),u=n(41),p=n(44),m=n(58),d=n(123),f=n(118),g=Object(f.a)((function(e){return Object(d.a)({pill:{width:"100%",backgroundColor:"#cfd2d4",borderRadius:e.spacing(.5),display:"inline-block",fontSize:12,fontWeight:"bold",lineHeight:1.33,overflow:"hidden",padding:e.spacing(.5,1),textAlign:"center",textOverflow:"ellipsis",whiteSpace:"nowrap","&.pill-primary":{backgroundColor:e.palette.primary.main,fontWeight:"bold",color:"#ffffff"}}})}),{classNamePrefix:"CustomMultipleSelect"}),b=n(55);var h=l.a.memo((function(e){var t=e.defaultTitle,n=e.selection,c=e.SelectIcons,d=(c=void 0===c?p.DEFAULT_ICONS:c).openIcon,f=c.closeIcon,h=Object(b.a)(),v=g(),y=Object(m.a)(e),w=y.open,E=y.selectedItems,k=y.handleToggle,j=y.handleSelectItem,O=y.isSelectedItem,S=y.stopPropagation,C=y.closeSelection,x=Object(o.useMemo)((function(){if(E.length>0){var e=Object(a.a)(E),n=e[0],o=e.slice(1);return{title:l.a.createElement("div",{className:v.pill},n.label),restLength:o.length,selectedLength:E.length}}return{title:t,restLength:0,selectedLength:0}}),[v.pill,t,E]),I=x.title,N=x.selectedLength,T=x.restLength;return l.a.createElement(s.a,{onClickAway:C},l.a.createElement("div",{className:h.selectWrapper},l.a.createElement(u.a,{container:!0,justify:"space-between",wrap:"nowrap",className:Object(r.a)(h.selectHeader,{"no-value":!N}),onClick:k},l.a.createElement(u.a,{item:!0,className:h.selectHeaderTitle},I),l.a.createElement(u.a,{item:!0,xs:"auto"},l.a.createElement(u.a,{container:!0,className:"icon",alignItems:"center",justify:"flex-end",spacing:1,wrap:"nowrap"},T>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{item:!0},l.a.createElement("span",null,"...")),l.a.createElement(u.a,{item:!0},l.a.createElement("span",{className:Object(r.a)(v.pill,"pill-primary")},T))),l.a.createElement(u.a,{item:!0},w?d:f)))),w&&l.a.createElement("ul",{className:h.selectList,onClick:S},n.map((function(e){var t=O(e);return l.a.createElement(u.a,{container:!0,component:"li",justify:"space-between",wrap:"nowrap",alignItems:"center",className:Object(r.a)(h.selectListItem,{selected:t}),key:"".concat(e.value,"-").concat(e.label),onClick:j(e,t)},l.a.createElement(u.a,{item:!0,xs:!0},e.label),t&&l.a.createElement(u.a,{item:!0,xs:"auto"},l.a.createElement(i.a,{color:"primary"})))})))))}));h.displayName="CustomMultipleSelect";t.a=h},88:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[101,1,2]]]);
//# sourceMappingURL=main.c35b4cc3.chunk.js.map