(this["webpackJsonpfrontend-tricks"]=this["webpackJsonpfrontend-tricks"]||[]).push([[3],{101:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(0),l=a.n(o),c=(a(4),a(3)),i=a(5),u=a(11),s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},d=l.a.forwardRef((function(e,t){var a=e.align,o=void 0===a?"inherit":a,i=e.classes,d=e.className,p=e.color,f=void 0===p?"initial":p,m=e.component,g=e.display,h=void 0===g?"initial":g,b=e.gutterBottom,v=void 0!==b&&b,y=e.noWrap,E=void 0!==y&&y,O=e.paragraph,j=void 0!==O&&O,w=e.variant,C=void 0===w?"body1":w,S=e.variantMapping,k=void 0===S?s:S,x=Object(r.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),I=m||(j?"p":k[C]||s[C])||"span";return l.a.createElement(I,Object(n.a)({className:Object(c.a)(i.root,d,"inherit"!==C&&i[C],"initial"!==f&&i["color".concat(Object(u.a)(f))],E&&i.noWrap,v&&i.gutterBottom,j&&i.paragraph,"inherit"!==o&&i["align".concat(Object(u.a)(o))],"initial"!==h&&i["display".concat(Object(u.a)(h))]),ref:t},x))}));t.a=Object(i.a)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(d)},102:function(e,t,a){"use strict";a.d(t,"DEFAULT_ICONS",(function(){return g}));var n=a(0),r=a.n(n),o=a(3),l=a(119),c=a(92),i=a(109),u=a.n(i),s=a(111),d=a.n(s),p=a(106),f=a(103),m=(a(104),a(105));a.d(t,"CustomMultipleSelect",(function(){return m.a}));var g={closeIcon:r.a.createElement(u.a,null),openIcon:r.a.createElement(d.a,null)};var h=r.a.memo((function(e){var t=e.defaultTitle,a=e.selection,i=e.SelectIcons,u=(i=void 0===i?g:i).openIcon,s=i.closeIcon,d=Object(f.a)(),m=Object(p.b)(e),h=m.open,b=m.selectedItem,v=m.handleToggle,y=m.handleSelectItem,E=m.isSelectedItem,O=m.stopPropagation,j=m.closeSelection,w=Object(n.useMemo)((function(){return(null===b||void 0===b?void 0:b.label)||t}),[t,b]);return r.a.createElement(l.a,{onClickAway:j},r.a.createElement("div",{className:d.selectWrapper},r.a.createElement(c.a,{container:!0,justify:"space-between",wrap:"nowrap",className:Object(o.a)(d.selectHeader,{"no-value":!b}),onClick:v},r.a.createElement(c.a,{item:!0,className:d.selectHeaderTitle},w),r.a.createElement(c.a,{item:!0,xs:"auto"},h?u:s)),h&&r.a.createElement("ul",{className:d.selectList,onClick:O},a.map((function(e){var t=E(e);return r.a.createElement(c.a,{container:!0,component:"li",justify:"space-between",wrap:"nowrap",alignItems:"center",className:Object(o.a)(d.selectListItem,{selected:t}),key:"".concat(e.value,"-").concat(e.label),onClick:y(e)},r.a.createElement(c.a,{item:!0},e.label))})))))}));h.displayName="CustomSelect",t.default=h},103:function(e,t,a){"use strict";var n=a(122),r=a(38);t.a=Object(r.a)((function(e){return Object(n.a)({selectWrapper:{position:"relative",userSelect:"none",width:"100%"},selectHeader:{backgroundColor:"#f2f3f4",border:"1px solid #cfd2d4",borderRadius:e.spacing(.5),color:"#3f4b53",cursor:"default",height:40,padding:e.spacing(1,2),position:"relative","&.no-value":{color:"#b7bbbf",fontSize:14,lineHeight:1.29,overflow:"hidden"}},selectHeaderTitle:{lineHeight:"24px",marginRight:e.spacing(.5),overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},selectList:{backgroundColor:"#ffffff",borderRadius:e.spacing(.5),boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.1)",fontWeight:700,listStyleType:"none",margin:0,marginTop:e.spacing(1),maxHeight:300,overflowY:"auto",padding:0,position:"absolute",width:"100%",zIndex:10},selectListItem:{width:"100%",fontSize:14,padding:e.spacing(2),lineHeight:1.29,color:"#6f787e",cursor:"default",height:"48px",backgroundColor:"#ffffff","&:hover":{backgroundColor:"#f2f3f4"},"& > div":{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},"&.selected":{color:"#3f4b53",backgroundColor:"#f2f3f4"}}})}),{classNamePrefix:"CustomSelect"})},104:function(e,t){},105:function(e,t,a){"use strict";var n=a(34),r=a(36),o=a(35);var l=a(0),c=a.n(l),i=a(3),u=a(112),s=a.n(u),d=a(119),p=a(92),f=a(102),m=a(106),g=a(122),h=a(38),b=Object(h.a)((function(e){return Object(g.a)({pill:{width:"100%",backgroundColor:"#cfd2d4",borderRadius:e.spacing(.5),display:"inline-block",fontSize:12,fontWeight:"bold",lineHeight:1.33,overflow:"hidden",padding:e.spacing(.5,1),textAlign:"center",textOverflow:"ellipsis",whiteSpace:"nowrap","&.pill-primary":{backgroundColor:e.palette.primary.main,fontWeight:"bold",color:"#ffffff"}}})}),{classNamePrefix:"CustomMultipleSelect"}),v=a(103);var y=c.a.memo((function(e){var t=e.defaultTitle,a=e.selection,u=e.SelectIcons,g=(u=void 0===u?f.DEFAULT_ICONS:u).openIcon,h=u.closeIcon,y=Object(v.a)(),E=b(),O=Object(m.a)(e),j=O.open,w=O.selectedItems,C=O.handleToggle,S=O.handleSelectItem,k=O.isSelectedItem,x=O.stopPropagation,I=O.closeSelection,L=Object(l.useMemo)((function(){if(w.length>0){var e=(i=w,Object(n.a)(i)||Object(r.a)(i)||Object(o.a)()),a=e[0],l=e.slice(1);return{title:c.a.createElement("div",{className:E.pill},a.label),restLength:l.length,selectedLength:w.length}}var i;return{title:t,restLength:0,selectedLength:0}}),[E.pill,t,w]),N=L.title,T=L.selectedLength,M=L.restLength;return c.a.createElement(d.a,{onClickAway:I},c.a.createElement("div",{className:y.selectWrapper},c.a.createElement(p.a,{container:!0,justify:"space-between",wrap:"nowrap",className:Object(i.a)(y.selectHeader,{"no-value":!T}),onClick:C},c.a.createElement(p.a,{item:!0,className:y.selectHeaderTitle},N),c.a.createElement(p.a,{item:!0,xs:"auto"},c.a.createElement(p.a,{container:!0,className:"icon",alignItems:"center",justify:"flex-end",spacing:1,wrap:"nowrap"},M>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{item:!0},c.a.createElement("span",null,"...")),c.a.createElement(p.a,{item:!0},c.a.createElement("span",{className:Object(i.a)(E.pill,"pill-primary")},M))),c.a.createElement(p.a,{item:!0},j?g:h)))),j&&c.a.createElement("ul",{className:y.selectList,onClick:x},a.map((function(e){var t=k(e);return c.a.createElement(p.a,{container:!0,component:"li",justify:"space-between",wrap:"nowrap",alignItems:"center",className:Object(i.a)(y.selectListItem,{selected:t}),key:"".concat(e.value,"-").concat(e.label),onClick:S(e,t)},c.a.createElement(p.a,{item:!0,xs:!0},e.label),t&&c.a.createElement(p.a,{item:!0,xs:"auto"},c.a.createElement(s.a,{color:"primary"})))})))))}));y.displayName="CustomMultipleSelect";t.a=y},106:function(e,t,a){"use strict";var n=a(10),r=a(14),o=a(0);a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var l=function(){var e=Object(o.useState)(!1),t=Object(r.a)(e,2),a=t[0],n=t[1],l=Object(o.useCallback)((function(){n(!a)}),[a]),c=Object(o.useCallback)((function(e){return e.stopPropagation()}),[]),i=Object(o.useCallback)((function(){return n(!1)}),[]);return{open:a,setOpen:n,handleToggle:l,closeSelection:i,stopPropagation:c}},c=function(e){var t=e.onChange,a=l(),n=a.open,c=a.setOpen,i=a.handleToggle,u=a.closeSelection,s=a.stopPropagation,d=Object(o.useState)(),p=Object(r.a)(d,2),f=p[0],m=p[1],g=Object(o.useCallback)((function(e){return function(){c(!1),m(e),t(e)}}),[t,c]),h=Object(o.useCallback)((function(e){return function(e,t){return!!t&&[e.label===t.label,e.value===t.value].every(Boolean)}(e,f)}),[f]);return{open:n,selectedItem:f,isSelectedItem:h,setOpen:c,handleToggle:i,handleSelectItem:g,closeSelection:u,stopPropagation:s}},i=function(e){var t=e.onChange,a=l(),c=a.open,i=a.setOpen,u=a.handleToggle,s=a.closeSelection,d=a.stopPropagation,p=Object(o.useState)(),f=Object(r.a)(p,2),m=f[0],g=void 0===m?[]:m,h=f[1],b=Object(o.useCallback)((function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(){var r=Object(n.a)(g);a?r=r.filter((function(t){return[t.label!==e.label,t.value!==e.value].some(Boolean)})):r.push(e),h(r),t(r)}}),[t,g]),v=Object(o.useCallback)((function(e){return g.includes(e)}),[g]);return{open:c,selectedItems:g,isSelectedItem:v,setOpen:i,handleToggle:u,handleSelectItem:b,closeSelection:s,stopPropagation:d}}},109:function(e,t,a){"use strict";var n=a(98);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(99)).default)(r.default.createElement("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");t.default=o},110:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},111:function(e,t,a){"use strict";var n=a(98);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(99)).default)(r.default.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");t.default=o},112:function(e,t,a){"use strict";var n=a(98);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(99)).default)(r.default.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");t.default=o},118:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(101),l=a(96),c=a(92),i=a(102),u=[{id:1,name:"Nguyen Tan Phat - very long long text here!",gender:"male"},{id:2,name:"Nguyen Tan Tai",gender:"male"},{id:3,name:"Nguyen Thi Gai",gender:"female"}].map((function(e){var t=e.id,a=e.name;return{gender:e.gender,label:a,value:t}}));t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a,{variant:"h5"},"CustomSelect Page"),r.a.createElement(c.a,{container:!0,spacing:2},r.a.createElement(c.a,{item:!0,xs:!0},r.a.createElement(c.a,{container:!0,direction:"column"},r.a.createElement(c.a,{item:!0},"CustomSelect with single value"),r.a.createElement(c.a,{item:!0},r.a.createElement(l.a,{maxWidth:200},r.a.createElement(i.default,{selection:u,defaultTitle:"Choose person",onChange:function(e){return console.log("[CustomSelect]",e)}}))))),r.a.createElement(c.a,{item:!0,xs:!0},r.a.createElement(c.a,{container:!0,direction:"column"},r.a.createElement(c.a,{item:!0},"CustomMultipleSelect with multiple values"),r.a.createElement(c.a,{item:!0},r.a.createElement(l.a,{maxWidth:300},r.a.createElement(i.CustomMultipleSelect,{selection:u,defaultTitle:"Choose person",onChange:function(e){return console.log("[CustomMultipleSelect]",e)}})))))))}},119:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(7),l=a.n(o),c=(a(4),a(9)),i=a(6),u=a(17),s=a(13);function d(e){return e.substring(2).toLowerCase()}var p=r.a.forwardRef((function(e,t){var a=e.children,n=e.mouseEvent,o=void 0===n?"onClick":n,p=e.touchEvent,f=void 0===p?"onTouchEnd":p,m=e.onClickAway,g=r.a.useRef(!1),h=r.a.useRef(null),b=r.a.useRef(!1);r.a.useEffect((function(){return b.current=!0,function(){b.current=!1}}),[]);var v=Object(i.a)(h,t),y=r.a.useCallback((function(e){Object(u.a)(v,l.a.findDOMNode(e))}),[v]),E=Object(i.a)(a.ref,y),O=Object(s.a)((function(e){if(b.current)if(g.current)g.current=!1;else if(h.current){var t=Object(c.a)(h.current);t.documentElement&&t.documentElement.contains(e.target)&&!h.current.contains(e.target)&&m(e)}})),j=r.a.useCallback((function(){g.current=!0}),[]);return r.a.useEffect((function(){if(!1!==f){var e=d(f),t=Object(c.a)(h.current);return t.addEventListener(e,O),t.addEventListener("touchmove",j),function(){t.removeEventListener(e,O),t.removeEventListener("touchmove",j)}}}),[O,j,f]),r.a.useEffect((function(){if(!1!==o){var e=d(o),t=Object(c.a)(h.current);return t.addEventListener(e,O),function(){t.removeEventListener(e,O)}}}),[O,o]),r.a.createElement(r.a.Fragment,null,r.a.cloneElement(a,{ref:E}))}));t.a=p},122:function(e,t,a){"use strict";function n(e){return e}a.d(t,"a",(function(){return n}))},61:function(e,t,a){"use strict";a.r(t);var n=a(60);a.d(t,"default",(function(){return n.a}))},98:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},99:function(e,t,a){"use strict";var n=a(98);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=o.default.memo(o.default.forwardRef((function(t,a){return o.default.createElement(l.default,(0,r.default)({ref:a},t),e)})));0;return a.muiName=l.default.muiName,a};var r=n(a(110)),o=n(a(0)),l=n(a(61))}}]);
//# sourceMappingURL=3.7b5e68e4.chunk.js.map