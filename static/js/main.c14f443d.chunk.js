(this["webpackJsonpfrontend-tricks"]=this["webpackJsonpfrontend-tricks"]||[]).push([[0],{20:function(e,t,a){"use strict";a.d(t,"DEFAULT_ICONS",(function(){return g}));var n=a(0),l=a.n(n),o=a(3),c=a(77),r=a(16),i=a(47),s=a.n(i),u=a(48),m=a.n(u),p=a(32),d=a(30),f=(a(40),a(41));a.d(t,"CustomMultipleSelect",(function(){return f.a}));var g={closeIcon:l.a.createElement(s.a,null),openIcon:l.a.createElement(m.a,null)};var b=l.a.memo((function(e){var t=e.defaultTitle,a=e.selection,i=e.SelectIcons,s=(i=void 0===i?g:i).openIcon,u=i.closeIcon,m=Object(d.a)(),f=Object(p.b)(e),b=f.open,h=f.handleToggle,v=f.handleSelectItem,E=f.isSelectedItem,O=f.stopPropagation,w=f.closeSelection,S=f.selectedItem,j=Object(n.useMemo)((function(){return(null===S||void 0===S?void 0:S.label)||t}),[t,S]);return l.a.createElement(c.a,{onClickAway:w},l.a.createElement("div",{className:m.selectWrapper},l.a.createElement(r.a,{container:!0,justify:"space-between",wrap:"nowrap",className:Object(o.a)(m.selectHeader,{"no-value":!S}),onClick:h},l.a.createElement(r.a,{item:!0,className:m.selectHeaderTitle},j),l.a.createElement(r.a,{item:!0,xs:"auto"},b?s:u)),b&&l.a.createElement("ul",{className:m.selectList,onClick:O},a.map((function(e){var t=E(e);return l.a.createElement(r.a,{container:!0,component:"li",justify:"space-between",wrap:"nowrap",alignItems:"center",className:Object(o.a)(m.selectListItem,{selected:t}),key:"".concat(e.value,"-").concat(e.label),onClick:v(e)},l.a.createElement(r.a,{item:!0},e.label))})))))}));b.displayName="CustomSelect",t.default=b},30:function(e,t,a){"use strict";var n=a(78),l=a(74);t.a=Object(l.a)((function(e){return Object(n.a)({selectWrapper:{position:"relative",userSelect:"none",width:"100%"},selectHeader:{backgroundColor:"#f2f3f4",border:"1px solid #cfd2d4",borderRadius:e.spacing(.5),color:"#3f4b53",cursor:"default",height:40,padding:e.spacing(1,2),position:"relative","&.no-value":{color:"#b7bbbf",fontSize:14,lineHeight:1.29,overflow:"hidden"}},selectHeaderTitle:{lineHeight:"24px",marginRight:e.spacing(.5),overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},selectList:{backgroundColor:"#ffffff",borderRadius:e.spacing(.5),boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.1)",fontWeight:700,listStyleType:"none",margin:0,marginTop:e.spacing(1),maxHeight:300,overflowY:"auto",padding:0,position:"absolute",width:"100%",zIndex:10},selectListItem:{width:"100%",fontSize:14,padding:e.spacing(2),lineHeight:1.29,color:"#6f787e",cursor:"default",height:"48px",backgroundColor:"#ffffff","&:hover":{backgroundColor:"#f2f3f4"},"& > div":{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},"&.selected":{color:"#3f4b53",backgroundColor:"#f2f3f4"}}})}),{classNamePrefix:"CustomSelect"})},32:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return i}));var n=a(53),l=a(6),o=a(0),c=function(){var e=Object(o.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],c=Object(o.useCallback)((function(){n(!a)}),[a]),r=Object(o.useCallback)((function(e){return e.stopPropagation()}),[]),i=Object(o.useCallback)((function(){return n(!1)}),[]);return{open:a,setOpen:n,handleToggle:c,closeSelection:i,stopPropagation:r}},r=function(e){var t=e.onChange,a=e.selectedItem,n=c(),r=n.open,i=n.setOpen,s=n.handleToggle,u=n.closeSelection,m=n.stopPropagation,p=Object(o.useState)(),d=Object(l.a)(p,2),f=d[0],g=void 0===f?a:f,b=d[1],h=Object(o.useCallback)((function(e){return function(){i(!1),b(e),t(e)}}),[t,i]),v=Object(o.useCallback)((function(e){return function(e,t){return!!t&&[e.label===t.label,e.value===t.value].every(Boolean)}(e,g)}),[g]);return{open:r,selectedItem:g,isSelectedItem:v,setOpen:i,handleToggle:s,handleSelectItem:h,closeSelection:u,stopPropagation:m}},i=function(e){var t=e.onChange,a=e.selectedItem,r=void 0===a?[]:a,i=c(),s=i.open,u=i.setOpen,m=i.handleToggle,p=i.closeSelection,d=i.stopPropagation,f=Object(o.useState)(r),g=Object(l.a)(f,2),b=g[0],h=void 0===b?[]:b,v=g[1],E=Object(o.useCallback)((function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(){var l=Object(n.a)(h);a?l=l.filter((function(t){return[t.label!==e.label,t.value!==e.value].some(Boolean)})):l.push(e),v(l),t(l)}}),[t,h]),O=Object(o.useCallback)((function(e){return h.includes(e)}),[h]);return{open:s,selectedItems:h,isSelectedItem:O,setOpen:u,handleToggle:m,handleSelectItem:E,closeSelection:p,stopPropagation:d}}},40:function(e,t){},41:function(e,t,a){"use strict";var n=a(49),l=a(0),o=a.n(l),c=a(3),r=a(50),i=a.n(r),s=a(77),u=a(16),m=a(20),p=a(32),d=a(78),f=a(74),g=Object(f.a)((function(e){return Object(d.a)({pill:{width:"100%",backgroundColor:"#cfd2d4",borderRadius:e.spacing(.5),display:"inline-block",fontSize:12,fontWeight:"bold",lineHeight:1.33,overflow:"hidden",padding:e.spacing(.5,1),textAlign:"center",textOverflow:"ellipsis",whiteSpace:"nowrap","&.pill-primary":{backgroundColor:e.palette.primary.main,fontWeight:"bold",color:"#ffffff"}}})}),{classNamePrefix:"CustomMultipleSelect"}),b=a(30);var h=o.a.memo((function(e){var t=e.defaultTitle,a=e.selection,r=e.SelectIcons,d=(r=void 0===r?m.DEFAULT_ICONS:r).openIcon,f=r.closeIcon,h=Object(b.a)(),v=g(),E=Object(p.a)(e),O=E.open,w=E.selectedItems,S=E.handleToggle,j=E.handleSelectItem,C=E.isSelectedItem,k=E.stopPropagation,I=E.closeSelection,y=Object(l.useMemo)((function(){if(w.length>0){var e=Object(n.a)(w),a=e[0],l=e.slice(1);return{title:o.a.createElement("div",{className:v.pill},a.label),restLength:l.length,selectedLength:w.length}}return{title:t,restLength:0,selectedLength:0}}),[v.pill,t,w]),N=y.title,x=y.selectedLength,T=y.restLength;return o.a.createElement(s.a,{onClickAway:I},o.a.createElement("div",{className:h.selectWrapper},o.a.createElement(u.a,{container:!0,justify:"space-between",wrap:"nowrap",className:Object(c.a)(h.selectHeader,{"no-value":!x}),onClick:S},o.a.createElement(u.a,{item:!0,className:h.selectHeaderTitle},N),o.a.createElement(u.a,{item:!0,xs:"auto"},o.a.createElement(u.a,{container:!0,className:"icon",alignItems:"center",justify:"flex-end",spacing:1,wrap:"nowrap"},T>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{item:!0},o.a.createElement("span",null,"...")),o.a.createElement(u.a,{item:!0},o.a.createElement("span",{className:Object(c.a)(v.pill,"pill-primary")},T))),o.a.createElement(u.a,{item:!0},O?d:f)))),O&&o.a.createElement("ul",{className:h.selectList,onClick:k},a.map((function(e){var t=C(e);return o.a.createElement(u.a,{container:!0,component:"li",justify:"space-between",wrap:"nowrap",alignItems:"center",className:Object(c.a)(h.selectListItem,{selected:t}),key:"".concat(e.value,"-").concat(e.label),onClick:j(e,t)},o.a.createElement(u.a,{item:!0,xs:!0},e.label),t&&o.a.createElement(u.a,{item:!0,xs:"auto"},o.a.createElement(i.a,{color:"primary"})))})))))}));h.displayName="CustomMultipleSelect";t.a=h},42:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(78),c=a(74),r=Object(c.a)((function(e){return Object(o.a)({loadingContainer:{left:"50%",position:"absolute",top:"50%",transform:"translate(-50%, -50%)"},loader:{border:"3px solid #cfd2d4",borderRadius:"50%",borderTop:"3px solid ".concat(e.palette.primary.main),width:"64px",height:"64px",animation:"$spin 2s linear infinite"},"@keyframes spin":{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(1turn)"}}})}),{classNamePrefix:"Loading"}),i=l.a.memo((function(){var e=r();return l.a.createElement("div",null,l.a.createElement("div",{className:e.loadingContainer},l.a.createElement("div",{className:e.loader})))}));i.displayName="Loading";t.a=i},51:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},58:function(e,t,a){e.exports=a(71)},63:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(21),c=a.n(o),r=(a(63),a(6)),i=a(88),s=a(90),u=a(89),m=a(16),p=a(43),d=a.n(p);var f=function(e,t){var a=Object(n.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return console.log(n),t}})),l=Object(r.a)(a,2),o=l[0],c=l[1];return[o,function(t){try{c(String(t)),window.localStorage.setItem(e,JSON.stringify(t))}catch(a){console.log(a)}}]},g=a(52),b={MuiTableHead:{root:{backgroundColor:"#000000"}},MuiTableCell:{head:{fontWeight:"bold",color:"#ffffff"}}},h=Object(g.a)({overrides:b}),v={foo:{component:l.a.lazy((function(){return a.e(5).then(a.bind(null,113))})),name:"Foo Component"},loading:{component:l.a.lazy((function(){return a.e(6).then(a.bind(null,103))})),name:"Loading Component"},table:{component:l.a.lazy((function(){return Promise.all([a.e(3),a.e(7)]).then(a.bind(null,112))})),name:"Table Component"},CustomSelect:{component:l.a.lazy((function(){return a.e(4).then(a.bind(null,111))})),name:"CustomSelect"}},E=a(42),O=a(20),w=a(51),S=a.n(w),j=(a(70),Object.keys(v).map((function(e){return{value:e,label:v[e].name,component:v[e].component}}))),C=j[0],k=function(){var e=f("page",C.value),t=Object(r.a)(e,2),a=t[0],n=t[1],o=l.a.useMemo((function(){return j.find((function(e){return e.value===a}))}),[a]),c=l.a.useState(o),p=Object(r.a)(c,2),g=p[0],b=p[1],v=l.a.useCallback((function(e){b(e),n(String(e.value))}),[b,n]),w=(g||C).component;return l.a.createElement(i.a,{theme:h},l.a.createElement(u.a,null),l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:S.a,className:"App-logo",alt:"logo"}),"Learn React!"),l.a.createElement(d.a,{href:"https://github.com/phatnguyenuit/frontend-tricks"})),l.a.createElement("main",{className:"App-content"},l.a.createElement(m.a,{container:!0,spacing:1,alignItems:"center"},l.a.createElement(m.a,{item:!0,xs:"auto"},"Choose page to show:"),l.a.createElement(m.a,{item:!0,xs:!0,sm:6,md:2},l.a.createElement(O.default,{defaultTitle:"Choose Page",selection:j,selectedItem:g,onChange:v}))),l.a.createElement(l.a.Suspense,{fallback:l.a.createElement(E.a,null)},l.a.createElement(s.a,{mt:2},l.a.createElement(w,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[58,1,2]]]);
//# sourceMappingURL=main.c14f443d.chunk.js.map