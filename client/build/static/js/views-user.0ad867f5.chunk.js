(this["webpackJsonpapirender-dashboard"]=this["webpackJsonpapirender-dashboard"]||[]).push([[31],{100:function(e,a,t){"use strict";var n=t(7),r=t(11),o=t(3),s=t.n(o),c=t(34),l=t.n(c),i=t(80),u=t.n(i),m=t(83),d=["className","cssModule","color","body","inverse","outline","tag","innerRef"],f={tag:m.q,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},p=function(e){var a=e.className,t=e.cssModule,o=e.color,c=e.body,l=e.inverse,i=e.outline,f=e.tag,p=e.innerRef,b=Object(r.a)(e,d),g=Object(m.m)(u()(a,"card",!!l&&"text-white",!!c&&"card-body",!!o&&(i?"border":"bg")+"-"+o),t);return s.a.createElement(f,Object(n.a)({},b,{className:g,ref:p}))};p.propTypes=f,p.defaultProps={tag:"div"},a.a=p},119:function(e,a,t){"use strict";var n=t(7),r=t(11),o=t(3),s=t.n(o),c=t(34),l=t.n(c),i=t(80),u=t.n(i),m=t(83),d=["className","cssModule","tag"],f={tag:m.q,className:l.a.string,cssModule:l.a.object},p=function(e){var a=e.className,t=e.cssModule,o=e.tag,c=Object(r.a)(e,d),l=Object(m.m)(u()(a,"card-title"),t);return s.a.createElement(o,Object(n.a)({},c,{className:l}))};p.propTypes=f,p.defaultProps={tag:"div"},a.a=p},150:function(e,a,t){"use strict";var n=t(7),r=t(11),o=t(88),s=t(87),c=t(3),l=t.n(c),i=t(34),u=t.n(i),m=t(80),d=t.n(m),f=t(83),p=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],b={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:f.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(o.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],o=e.block,s=e.className,c=e.close,i=e.cssModule,u=e.color,m=e.outline,b=e.size,g=e.tag,h=e.innerRef,y=Object(r.a)(e,p);c&&"undefined"===typeof y.children&&(y.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(m?"-outline":"")+"-"+u,E=Object(f.m)(d()(s,{close:c},c||"btn",c||v,!!b&&"btn-"+b,!!o&&"btn-block",{active:a,disabled:this.props.disabled}),i);y.href&&"button"===g&&(g="a");var N=c?"Close":null;return l.a.createElement(g,Object(n.a)({type:"button"===g&&y.onClick?"button":void 0},y,{className:E,ref:h,onClick:this.onClick,"aria-label":t||N}))},a}(l.a.Component);g.propTypes=b,g.defaultProps={color:"secondary",tag:"button"},a.a=g},198:function(e,a,t){"use strict";var n=t(3),r=t(127),o=t(117),s=t(126),c=t.n(s),l=function(){var e=function(a,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,a){e.__proto__=a}||function(e,a){for(var t in a)a.hasOwnProperty(t)&&(e[t]=a[t])})(a,t)};return function(a,t){function n(){this.constructor=a}e(a,t),a.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}(),i=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]])}return t},u=function(){for(var e=0,a=0,t=arguments.length;a<t;a++)e+=arguments[a].length;var n=Array(e),r=0;for(a=0;a<t;a++)for(var o=arguments[a],s=0,c=o.length;s<c;s++,r++)n[r]=o[s];return n},m=c.a||s,d=function(e){function a(){return null!==e&&e.apply(this,arguments)||this}return l(a,e),a.prototype.shouldComponentUpdate=function(e){var a=this.props,t=a.values,n=i(a,["values"]),r=e.values,o=i(e,["values"]);return!m(r,t)||!m(n,o)},a.prototype.render=function(){var e=this;return n.createElement(r.a.Consumer,null,(function(a){Object(o.c)(a);var t=a.formatMessage,r=a.textComponent,s=void 0===r?n.Fragment:r,c=e.props,l=c.id,i=c.description,m=c.defaultMessage,d=c.values,f=c.children,p=c.tagName,b=void 0===p?s:p,g=t({id:l,description:i,defaultMessage:m},d);return Array.isArray(g)||(g=[g]),"function"===typeof f?f(g):b?n.createElement.apply(n,u([b,null],g)):g}))},a.displayName="FormattedMessage",a}(n.Component);a.a=d},215:function(e,a,t){"use strict";var n=t(7),r=t(11),o=t(3),s=t.n(o),c=t(34),l=t.n(c),i=t(80),u=t.n(i),m=t(83),d=["className","cssModule","widths","tag"],f=l.a.oneOfType([l.a.number,l.a.string]),p=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:f,offset:f})]),b={tag:m.q,xs:p,sm:p,md:p,lg:p,xl:p,className:l.a.string,cssModule:l.a.object,widths:l.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},y=function(e){var a=e.className,t=e.cssModule,o=e.widths,c=e.tag,l=Object(r.a)(e,d),i=[];o.forEach((function(a,n){var r=e[a];if(delete l[a],r||""===r){var o=!n;if(Object(m.k)(r)){var s,c=o?"-":"-"+a+"-",d=h(o,a,r.size);i.push(Object(m.m)(u()(((s={})[d]=r.size||""===r.size,s["order"+c+r.order]=r.order||0===r.order,s["offset"+c+r.offset]=r.offset||0===r.offset,s)),t))}else{var f=h(o,a,r);i.push(f)}}})),i.length||i.push("col");var f=Object(m.m)(u()(a,i),t);return s.a.createElement(c,Object(n.a)({},l,{className:f}))};y.propTypes=b,y.defaultProps=g,a.a=y},216:function(e,a,t){"use strict";var n=t(7),r=t(11),o=t(3),s=t.n(o),c=t(34),l=t.n(c),i=t(80),u=t.n(i),m=t(83),d=["className","cssModule","noGutters","tag","form","widths"],f=l.a.oneOfType([l.a.number,l.a.string]),p={tag:m.q,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},b={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var a=e.className,t=e.cssModule,o=e.noGutters,c=e.tag,l=e.form,i=e.widths,f=Object(r.a)(e,d),p=[];i.forEach((function(a,t){var n=e[a];if(delete f[a],n){var r=!t;p.push(r?"row-cols-"+n:"row-cols-"+a+"-"+n)}}));var b=Object(m.m)(u()(a,o?"no-gutters":null,l?"form-row":"row",p),t);return s.a.createElement(c,Object(n.a)({},f,{className:b}))};g.propTypes=p,g.defaultProps=b,a.a=g},414:function(e,a,t){"use strict";t.r(a);var n=t(3),r=t.n(n),o=t(216),s=t(100),c=t(119),l=t(150),i=t(82),u=t(78),m=t(79);a.default=e=>{let{match:a}=e;const[t,d]=Object(n.useState)(null),f=new URLSearchParams(window.location.search),p=f.get("quote"),b=f.get("printing");return Object(n.useEffect)(()=>(d(a.params.action),document.body.classList.add("background"),document.body.classList.add("no-footer"),()=>{document.body.classList.remove("background"),document.body.classList.remove("no-footer")}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"fixed-background"}),r.a.createElement("main",null,r.a.createElement("div",{className:"container"},r.a.createElement(o.a,{className:"h-100"},r.a.createElement(u.a,{xxs:"12",md:"10",className:"mx-auto my-auto"},r.a.createElement(s.a,{className:"auth-card"},r.a.createElement("div",{className:"position-relative image-side thankyou-side"}),r.a.createElement("div",{className:"form-side"},r.a.createElement(i.b,{to:"/",className:"white"},r.a.createElement("span",{className:"logo-single"})),r.a.createElement(c.a,{className:"mb-4"},t&&"payment"===t&&r.a.createElement(r.a.Fragment,null,"Payment Confirmed.",r.a.createElement("br",null),"Thank you for your order!"),t&&"briefing"===t&&"true"===p&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:""},"Thank you for submitting your quote request."),r.a.createElement("p",{className:""},"One of our team members will be in touch shortly to discuss your project and provide a quote."),r.a.createElement("p",{className:""},"If you have any questions in the meantime, please contact your account manager via the dashboard.")),t&&"briefing"===t&&"true"!==p&&r.a.createElement(r.a.Fragment,null,"true"===b?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:""},"Thank you, the order has been submitted successfully and is now in progress."),r.a.createElement("p",{className:""},"We will contact you if we require any further information. "),r.a.createElement("p",{className:""},"If you have any questions, please contact your account manager via the dashboard.")):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:""},"Thank you, the project brief has been submitted successfully."),r.a.createElement("p",{className:""},"Your order is now in progress. "),r.a.createElement("p",{className:""},"We will contact you if we require any further information. "),r.a.createElement("p",{className:""},"If you have any questions, please contact your account manager via the dashboard.")))),r.a.createElement(l.a,{href:"payment"===t?"/app/projects/details/".concat(a.params.id):"/app/projects/view-briefing/".concat(a.params.id),color:"primary",className:"btn-shadow",size:"lg"},t&&"payment"===t&&r.a.createElement(m.a,{id:"pages.start-project-briefing"}),t&&"briefing"===t&&r.a.createElement(m.a,{id:"pages.view-service-briefing"})))))))))}},449:function(e,a,t){"use strict";t.r(a);var n=t(3),r=t.n(n),o=t(89);var s=e=>{let{children:a}=e;return Object(n.useEffect)(()=>(document.body.classList.add("background"),document.body.classList.add("no-footer"),()=>{document.body.classList.remove("background"),document.body.classList.remove("no-footer")}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"fixed-background"}),r.a.createElement("main",null,r.a.createElement("div",{className:"container"},a)))};const c=r.a.lazy(()=>Promise.all([t.e(0),t.e(23)]).then(t.bind(null,444))),l=r.a.lazy(()=>Promise.all([t.e(0),t.e(1),t.e(24)]).then(t.bind(null,422))),i=r.a.lazy(()=>Promise.all([t.e(0),t.e(12)]).then(t.bind(null,423))),u=r.a.lazy(()=>Promise.all([t.e(0),t.e(1),t.e(14)]).then(t.bind(null,424)));a.default=e=>{let{match:a}=e;return r.a.createElement(s,null,r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",{className:"loading"})},r.a.createElement(o.d,null,r.a.createElement(o.a,{exact:!0,from:"".concat(a.url,"/"),to:"".concat(a.url,"/login")}),r.a.createElement(o.b,{path:"".concat(a.url,"/login"),render:e=>r.a.createElement(c,e)}),r.a.createElement(o.b,{path:"".concat(a.url,"/register"),render:e=>r.a.createElement(l,e)}),r.a.createElement(o.b,{path:"".concat(a.url,"/forgot-password"),render:e=>r.a.createElement(i,e)}),r.a.createElement(o.b,{path:"".concat(a.url,"/password-reset/:userId/:token"),render:e=>r.a.createElement(u,e)}),r.a.createElement(o.a,{to:"/error"}))))}},78:function(e,a,t){"use strict";t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return c}));var n=t(3),r=t.n(n),o=t(215);const s=e=>r.a.createElement(o.a,Object.assign({},e,{widths:["xxs","xs","sm","md","lg","xl","xxl"]})),c=e=>{let{className:a}=e;return r.a.createElement("div",{className:"separator ".concat(a)})}},79:function(e,a,t){"use strict";var n=t(3),r=t.n(n),o=t(198),s=t(127);a.a=Object(s.c)(e=>r.a.createElement(o.a,e),{withRef:!1})}}]);
//# sourceMappingURL=views-user.0ad867f5.chunk.js.map