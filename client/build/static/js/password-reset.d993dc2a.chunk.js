(this["webpackJsonpapirender-dashboard"]=this["webpackJsonpapirender-dashboard"]||[]).push([[14],{424:function(e,a,s){"use strict";s.r(a);var t=s(3),r=s.n(t),l=s(216),n=s(100),c=s(119),o=s(401),m=s(402),i=s(150),d=s(89),p=s(82),u=s(91),b=s(98),w=s(20),E=s(8),f=s.n(E),h=s(78),N=s(79),g=s(84);const P=b.a().shape({password:b.c().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:b.c().oneOf([b.b("password"),null],"Passwords must match").required("Confirm Password is required")});a.default=Object(w.b)(null,{})(e=>{let{history:a,loading:s}=e;const t=Object(d.h)();return r.a.createElement(l.a,{className:"h-100"},r.a.createElement(h.a,{xxs:"12",md:"10",className:"mx-auto my-auto"},r.a.createElement(n.a,{className:"auth-card"},r.a.createElement("div",{className:"position-relative image-side "}),r.a.createElement("div",{className:"form-side"},r.a.createElement(p.b,{to:"/",className:"white"},r.a.createElement("span",{className:"logo-single"})),r.a.createElement(c.a,{className:"mb-4"},"Password Reset"),r.a.createElement(u.c,{initialValues:{password:"",confirmPassword:""},validationSchema:P,onSubmit:e=>{f.a.post("/api/password-reset/".concat(t.userId,"/").concat(t.token),{password:e.password}).then(e=>{g.b.success(e.data,"Forgot Password Success",3e3,null,null,""),a.push("/user/login")}).catch(e=>{g.b.warning(e.response.data,"Error",3e3,null,null,"")})}},e=>{let{errors:a,touched:t}=e;return r.a.createElement(u.b,{className:"av-tooltip tooltip-label-bottom"},r.a.createElement(o.a,{className:"form-group has-float-label  mb-4"},r.a.createElement(m.a,null,r.a.createElement(N.a,{id:"user.password"})),r.a.createElement(u.a,{className:"form-control",type:"password",name:"password"}),a.password&&t.password&&r.a.createElement("div",{className:"invalid-feedback d-block"},a.password)),r.a.createElement(o.a,{className:"form-group has-float-label  mb-4"},r.a.createElement(m.a,null,r.a.createElement(N.a,{id:"user.confirm-password"})),r.a.createElement(u.a,{className:"form-control",type:"password",name:"confirmPassword"}),a.confirmPassword&&t.confirmPassword&&r.a.createElement("div",{className:"invalid-feedback d-block"},a.confirmPassword)),r.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},r.a.createElement(p.b,{to:"/user/login"},"Sign in ?"),r.a.createElement(i.a,{color:"primary",className:"btn-shadow btn-multiple-state ".concat(s?"show-spinner":""),size:"lg"},r.a.createElement("span",{className:"spinner d-inline-block"},r.a.createElement("span",{className:"bounce1"}),r.a.createElement("span",{className:"bounce2"}),r.a.createElement("span",{className:"bounce3"})),r.a.createElement("span",{className:"label"},r.a.createElement(N.a,{id:"user.reset-password-button"})))))})))))})}}]);
//# sourceMappingURL=password-reset.d993dc2a.chunk.js.map