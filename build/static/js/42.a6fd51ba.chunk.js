(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1233:function(e,a,t){"use strict";t.r(a);var l=t(141),n=t(0),c=t.n(n),r=t(966),s=t(272),o=t(960),u=t(961),m=t(963),i=t(967),d=t(964),E=t(6),f=t(34),p=t(4),b=t.n(p),j=t(49),g=t.n(j),O=t(29),N={tag:O.l,fluid:b.a.bool,className:b.a.string,cssModule:b.a.object},h=function(e){var a=e.className,t=e.cssModule,l=e.tag,n=e.fluid,r=Object(f.a)(e,["className","cssModule","tag","fluid"]),s=Object(O.h)(g()(a,"jumbotron",!!n&&"jumbotron-fluid"),t);return c.a.createElement(l,Object(E.a)({},r,{className:s}))};h.propTypes=N,h.defaultProps={tag:"div"};var y=h,v=t(213),M=t(265);a.default=function(){var e=Object(n.useState)({}),a=Object(l.a)(e,2),t=a[0],E=a[1],f=Object(n.useState)({}),p=Object(l.a)(f,2),b=p[0],j=p[1];return Object(n.useEffect)(function(){Object(r.O)(Object(s.b)().userId,function(e,a,t,l){j({isLoading:e,data:a,error:t,isSuccess:l})})},[]),Object(n.useEffect)(function(){b.data&&E(b.data[0])},[b]),c.a.createElement("div",{className:"profile client-profile"},c.a.createElement(o.a,null,c.a.createElement(u.a,{xl:12},b.error&&c.a.createElement(M.ErrorToast,{error:b.error}),c.a.createElement(m.a,null,c.a.createElement(i.a,null,c.a.createElement("i",{className:"fa fa-align-justify"})," ",Object(s.c)().username," ",c.a.createElement("small",{className:"text-muted"},"profile")),c.a.createElement(d.a,null,b.isLoading?c.a.createElement(M.Loading,null):c.a.createElement(y,null,c.a.createElement("h1",{className:"display-3"},t.name),c.a.createElement("p",{className:"lead",dangerouslySetInnerHTML:{__html:t.description}}),c.a.createElement("hr",{className:"my-2"}),c.a.createElement("p",null,c.a.createElement("strong",null,"Phone: "),t.phone),c.a.createElement("p",null,c.a.createElement("strong",null,"Address: "),t.phone),c.a.createElement("p",null,c.a.createElement("strong",null,"City: "),t.city),c.a.createElement("p",null,c.a.createElement("strong",null,"Country: "),t.country),c.a.createElement("p",{className:"lead"},c.a.createElement(v.a,{href:Object(s.f)(t.latitude,t.Longitude),color:"primary"},"Location"))))))))}},967:function(e,a,t){"use strict";var l=t(6),n=t(34),c=t(0),r=t.n(c),s=t(4),o=t.n(s),u=t(49),m=t.n(u),i=t(29),d={tag:i.l,className:o.a.string,cssModule:o.a.object},E=function(e){var a=e.className,t=e.cssModule,c=e.tag,s=Object(n.a)(e,["className","cssModule","tag"]),o=Object(i.h)(m()(a,"card-header"),t);return r.a.createElement(c,Object(l.a)({},s,{className:o}))};E.propTypes=d,E.defaultProps={tag:"div"},a.a=E}}]);