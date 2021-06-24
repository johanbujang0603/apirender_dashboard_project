(this["webpackJsonpapirender-dashboard"]=this["webpackJsonpapirender-dashboard"]||[]).push([[22],{428:function(e,a,t){"use strict";t.r(a);var n=t(81),s=t(4),r=t.n(s),l=t(212),c=t(108),o=t(126),i=t(385),m=t(386),d=t(153),u=t(93),E=t(86),b=t(25),p=t(97),g=t(88),f=t(1),N=t(82),h=t(83),v=function(e){var a;return e?e.length<4&&(a="Password must be longer than 3 characters"):a="Please enter your password",a},w=function(e){var a;return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||(a="Invalid email address"):a="Please enter your email address",a};a.default=Object(b.b)((function(e){var a=e.authUser;return{loading:a.loading,loginError:a.loginError,isAuthenticated:a.isAuthenticated}}),{loginUserAction:f.H})((function(e){var a=e.history,t=e.loading,b=e.loginError,f=e.isAuthenticated,j=e.loginUserAction,y=Object(s.useState)(""),A=Object(n.a)(y,1)[0],k=Object(s.useState)(""),O=Object(n.a)(k,1)[0];Object(s.useEffect)((function(){b&&g.b.warning(b,"Login Error",3e3,null,null,"")}),[b]);var x={email:A,password:O};return f?r.a.createElement(u.a,{to:"/"}):r.a.createElement(l.a,{className:"h-100"},r.a.createElement(N.a,{xxs:"12",md:"10",className:"mx-auto my-auto"},r.a.createElement(c.a,{className:"auth-card"},r.a.createElement("div",{className:"position-relative image-side "}),r.a.createElement("div",{className:"form-side"},r.a.createElement(E.b,{to:"/",className:"white"},r.a.createElement("span",{className:"logo-single"})),r.a.createElement(o.a,{className:"mb-4"},r.a.createElement(h.a,{id:"user.login-title"})),r.a.createElement(p.c,{initialValues:x,onSubmit:function(e){t||""!==e.email&&""!==e.password&&j(e,a)}},(function(e){var a=e.errors,n=e.touched;return r.a.createElement(p.b,{className:"av-tooltip tooltip-label-bottom"},r.a.createElement(i.a,{className:"form-group has-float-label"},r.a.createElement(m.a,null,r.a.createElement(h.a,{id:"user.email"})),r.a.createElement(p.a,{className:"form-control",name:"email",validate:w}),a.email&&n.email&&r.a.createElement("div",{className:"invalid-feedback d-block"},a.email)),r.a.createElement(i.a,{className:"form-group has-float-label"},r.a.createElement(m.a,null,r.a.createElement(h.a,{id:"user.password"})),r.a.createElement(p.a,{className:"form-control",type:"password",name:"password",validate:v}),a.password&&n.password&&r.a.createElement("div",{className:"invalid-feedback d-block"},a.password)),r.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},r.a.createElement(E.b,{to:"/user/register"},"You don't have an account? Sign up now."),r.a.createElement(d.a,{color:"primary",className:"btn-shadow btn-multiple-state ".concat(t?"show-spinner":""),size:"lg"},r.a.createElement("span",{className:"spinner d-inline-block"},r.a.createElement("span",{className:"bounce1"}),r.a.createElement("span",{className:"bounce2"}),r.a.createElement("span",{className:"bounce3"})),r.a.createElement("span",{className:"label"},r.a.createElement(h.a,{id:"user.login-button"})))),r.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},r.a.createElement(E.b,{to:"/user/forgot-password"},"Foreget password?")))}))))))}))}}]);
//# sourceMappingURL=user-login.d23b2691.chunk.js.map