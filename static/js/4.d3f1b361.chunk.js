(this["webpackJsonpfrontend-tricks"]=this["webpackJsonpfrontend-tricks"]||[]).push([[4],{145:function(e,t,a){"use strict";var o=a(2),n=a(7),r=a(1),i=(a(15),a(12)),l=a(24),c=a(34),p={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},h=r.forwardRef((function(e,t){var a=e.align,l=void 0===a?"inherit":a,h=e.classes,s=e.className,m=e.color,g=void 0===m?"initial":m,u=e.component,y=e.display,d=void 0===y?"initial":y,b=e.gutterBottom,v=void 0!==b&&b,f=e.noWrap,E=void 0!==f&&f,x=e.paragraph,w=void 0!==x&&x,C=e.variant,O=void 0===C?"body1":C,S=e.variantMapping,T=void 0===S?p:S,j=Object(n.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),B=u||(w?"p":T[O]||p[O])||"span";return r.createElement(B,Object(o.a)({className:Object(i.a)(h.root,s,"inherit"!==O&&h[O],"initial"!==g&&h["color".concat(Object(c.a)(g))],E&&h.noWrap,v&&h.gutterBottom,w&&h.paragraph,"inherit"!==l&&h["align".concat(Object(c.a)(l))],"initial"!==d&&h["display".concat(Object(c.a)(d))]),ref:t},j))}));t.a=Object(l.a)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(h)},162:function(e,t,a){"use strict";a.r(t);var o=a(1),n=a.n(o),r=a(145),i=a(141),l=a(41),c=a(44),p=[{id:1,name:"Nguyen Tan Phat",gender:"male"},{id:2,name:"Nguyen Tan Tai",gender:"male"},{id:3,name:"Nguyen Thi Gai",gender:"female"}].map((function(e){var t=e.id,a=e.name;return{gender:e.gender,label:a,value:t}}));t.default=function(){return n.a.createElement("div",null,n.a.createElement(r.a,{variant:"h5"},"CustomSelect Page"),n.a.createElement(l.a,{container:!0,spacing:2},n.a.createElement(l.a,{item:!0,xs:!0},n.a.createElement(l.a,{container:!0,direction:"column"},n.a.createElement(l.a,{item:!0},"CustomSelect with single value"),n.a.createElement(l.a,{item:!0},n.a.createElement(i.a,{maxWidth:200},n.a.createElement(c.default,{selection:p,defaultTitle:"Choose person",onChange:function(e){return console.log("[CustomSelect]",e)}}))))),n.a.createElement(l.a,{item:!0,xs:!0},n.a.createElement(l.a,{container:!0,direction:"column"},n.a.createElement(l.a,{item:!0},"CustomMultipleSelect with multiple values"),n.a.createElement(l.a,{item:!0},n.a.createElement(i.a,{maxWidth:300},n.a.createElement(c.CustomMultipleSelect,{selection:p,defaultTitle:"Choose person",onChange:function(e){return console.log("[CustomMultipleSelect]",e)}})))))))}}}]);
//# sourceMappingURL=4.d3f1b361.chunk.js.map