(this["webpackJsonpapirender-dashboard"]=this["webpackJsonpapirender-dashboard"]||[]).push([[29],{145:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return c}));var n=a(3),s=a.n(n);var l=()=>s.a.createElement(s.a.Fragment,null,s.a.createElement("svg",{className:"main",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 9 17"},s.a.createElement("rect",{x:"0.48",y:"0.5",width:"7",height:"1"}),s.a.createElement("rect",{x:"0.48",y:"7.5",width:"7",height:"1"}),s.a.createElement("rect",{x:"0.48",y:"15.5",width:"7",height:"1"})),s.a.createElement("svg",{className:"sub",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 17"},s.a.createElement("rect",{x:"1.56",y:"0.5",width:"16",height:"1"}),s.a.createElement("rect",{x:"1.56",y:"7.5",width:"16",height:"1"}),s.a.createElement("rect",{x:"1.56",y:"15.5",width:"16",height:"1"})));var c=()=>s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 26 17"},s.a.createElement("rect",{x:"0.5",y:"0.5",width:"25",height:"1"}),s.a.createElement("rect",{x:"0.5",y:"7.5",width:"25",height:"1"}),s.a.createElement("rect",{x:"0.5",y:"15.5",width:"25",height:"1"}))},149:function(e,t,a){"use strict";var n=a(3),s=a.n(n),l=a(453),c=a(452),i=a(408),r=a(82),o=a(79);t.a=()=>s.a.createElement("div",{className:"position-relative d-none d-sm-inline-block"},s.a.createElement(l.a,{className:"dropdown-menu-right"},s.a.createElement(c.a,{className:"header-icon",color:"empty"},s.a.createElement("i",{className:"simple-icon-grid"})),s.a.createElement(i.a,{className:"position-absolute mt-3",right:!0,id:"iconMenuDropdown"},s.a.createElement(r.b,{to:"/app/dashboard",className:"icon-menu-item"},s.a.createElement("i",{className:"iconsminds-shop-4 d-block"})," ",s.a.createElement(o.a,{id:"menu.dashboard"})),s.a.createElement(r.b,{to:"/app/projects/list",className:"icon-menu-item"},s.a.createElement("i",{className:"simple-icon-briefcase d-block"})," ",s.a.createElement(o.a,{id:"menu.project-list"})),s.a.createElement(r.b,{to:"/app/tools",className:"icon-menu-item"},s.a.createElement("i",{className:"simple-icon-wrench d-block"})," ",s.a.createElement(o.a,{id:"menu.tools"})),s.a.createElement(r.b,{to:"/app/support",className:"icon-menu-item"},s.a.createElement("i",{className:"simple-icon-question d-block"})," ",s.a.createElement(o.a,{id:"menu.support"})),s.a.createElement(r.b,{to:"/app/settings",className:"icon-menu-item"},s.a.createElement("i",{className:"simple-icon-settings d-block"})," ",s.a.createElement(o.a,{id:"menu.settings"})))))},158:function(e,t,a){"use strict";var n=a(3),s=a.n(n),l=a(82),c=a(216),i=a(78);t.a=()=>s.a.createElement("footer",{className:"page-footer"},s.a.createElement("div",{className:"footer-content"},s.a.createElement("div",{className:"container-fluid"},s.a.createElement(c.a,null,s.a.createElement(i.a,{xxs:"12",sm:"6"},s.a.createElement("p",{className:"mb-0 text-muted"},"\xa9 APIRender.com Pty Ltd")),s.a.createElement(i.a,{className:"col-sm-6 d-none d-sm-flex justify-content-end"},s.a.createElement("p",{className:"mb-0 text-muted text-sm"},"All Prices are in Australian Dollars and currency can be converted at checkout."),s.a.createElement("ul",{className:"breadcrumb pt-0 pr-0 float-right"},s.a.createElement("li",{className:"breadcrumb-item mb-0"},s.a.createElement(l.b,{className:"btn-link",to:"/app/privacy"},"Privacy Policy")),s.a.createElement("li",{className:"breadcrumb-item mb-0"},s.a.createElement(l.b,{className:"btn-link",to:"/app/terms"},"Terms & Conditions"))))))))},434:function(e,t,a){"use strict";a.r(t);var n=a(3),s=a.n(n),l=a(89),c=a(20),i=a(128),r=a(160),o=a(453),m=a(452),u=a(408),d=a(410),p=a(82),h=a(1),E=a(6),b=a(145),g=a(149),v=a(95),w=a.n(v);a(8),a(100);var N=a(189),f=(a(159),a(441));const k=()=>localStorage.getItem(E.l)?localStorage.getItem(E.l):E.b;var C=()=>{const[e,t]=Object(n.useState)(!1),[a,l]=Object(n.useState)(!1);Object(n.useEffect)(()=>{const e=k();t(e.indexOf("dark")>-1)},[]);return s.a.createElement("div",{className:"d-none d-md-inline-block align-middle mr-3"},s.a.createElement(N.a,{id:"tooltip_switch",className:"custom-switch custom-switch-primary custom-switch-small",checked:e,onChange:()=>{let e=k();e.indexOf("dark")>-1?e=e.replace("dark","light"):e.indexOf("light")>-1&&(e=e.replace("light","dark")),localStorage.setItem(E.l,e),t(e.indexOf("dark")>-1),setTimeout(()=>{window.location.reload()},500)}}),s.a.createElement(f.a,{placement:"left",isOpen:a,target:"tooltip_switch",toggle:()=>l(!a)},"Dark Mode"))},S=a(16);var y=Object(i.c)(Object(c.b)(e=>{let{menu:t,settings:a,authUser:n}=e;const{containerClassnames:s,menuClickCount:l,selectedMenuHasSubItems:c}=t,{locale:i}=a;return{containerClassnames:s,menuClickCount:l,selectedMenuHasSubItems:c,locale:i,loginUser:n.user}},{setContainerClassnamesAction:h.L,clickOnMobileMenuAction:h.F,logoutUserAction:h.I,changeLocaleAction:h.D})(e=>{let{intl:t,history:a,containerClassnames:l,menuClickCount:c,selectedMenuHasSubItems:i,locale:h,setContainerClassnamesAction:v,clickOnMobileMenuAction:w,logoutUserAction:N,changeLocaleAction:f,loginUser:k}=e;const[y,M]=Object(n.useState)(""),x=()=>{a.push("".concat(E.j,"?key=").concat(y)),M("")},L=e=>{let t=!1;if(e.target&&e.target.classList&&(e.target.classList.contains("navbar")||e.target.classList.contains("simple-icon-magnifier"))?(t=!0,e.target.classList.contains("simple-icon-magnifier")&&x()):e.target.parentElement&&e.target.parentElement.classList&&e.target.parentElement.classList.contains("search")&&(t=!0),!t){const e=document.querySelector(".mobile-view");e&&e.classList&&e.classList.remove("mobile-view"),j(),M("")}},j=()=>{document.removeEventListener("click",L,!0)},P=()=>{document.addEventListener("click",L,!0)},{messages:O}=t;return s.a.createElement("nav",{className:"navbar fixed-top"},s.a.createElement("div",{className:"d-flex align-items-center navbar-left"},s.a.createElement(p.b,{to:"#",location:{},className:"menu-button d-none d-md-block",onClick:e=>((e,t,a)=>{e.preventDefault(),setTimeout(()=>{const e=document.createEvent("HTMLEvents");e.initEvent("resize",!1,!1),window.dispatchEvent(e)},350),v(t+1,a,i)})(e,c,l)},s.a.createElement(b.a,null)),s.a.createElement(p.b,{to:"#",location:{},className:"menu-button-mobile d-xs-block d-sm-block d-md-none",onClick:e=>((e,t)=>{e.preventDefault(),w(t)})(e,l)},s.a.createElement(b.b,null)),s.a.createElement("div",{className:"search","data-search-path":"/app/pages/search"},s.a.createElement(r.a,{name:"searchKeyword",id:"searchKeyword",placeholder:O["menu.search"],value:y,onChange:e=>M(e.target.value),onKeyPress:e=>(e=>{"Enter"===e.key&&x()})(e)}),s.a.createElement("span",{className:"search-icon",onClick:e=>(e=>{if(window.innerWidth<E.i){let t=e.target;e.target.classList.contains("search")||(e.target.parentElement.classList.contains("search")?t=e.target.parentElement:e.target.parentElement.parentElement.classList.contains("search")&&(t=e.target.parentElement.parentElement)),t.classList.contains("mobile-view")?(x(),t.classList.remove("mobile-view"),j()):(t.classList.add("mobile-view"),P())}else x();e.stopPropagation()})(e)},s.a.createElement("i",{className:"simple-icon-magnifier"}))),s.a.createElement("div",{className:"d-inline-block"},s.a.createElement(o.a,{className:"ml-2"},s.a.createElement(m.a,{caret:!0,color:"light",size:"sm",className:"language-button"},s.a.createElement("span",{className:"name"},h.toUpperCase())),s.a.createElement(u.a,{className:"mt-3",right:!0},E.h.map(e=>s.a.createElement(d.a,{onClick:()=>((e,t)=>{f(e);t!==Object(S.d)().direction&&(Object(S.f)(t),setTimeout(()=>{window.location.reload()},500))})(e.id,e.direction),key:e.id},e.name)))))),s.a.createElement("a",{className:"navbar-logo",href:"/"},s.a.createElement("span",{className:"logo d-none d-xs-block"}),s.a.createElement("span",{className:"logo-mobile d-block d-xs-none"})),s.a.createElement("div",{className:"navbar-right"},E.f&&s.a.createElement(C,null),s.a.createElement("div",{className:"header-icons d-inline-block align-middle"},s.a.createElement(g.a,null),s.a.createElement("button",{className:"header-icon btn btn-empty d-none d-sm-inline-block",type:"button",id:"fullScreenButton",onClick:()=>{const e=document.fullscreenElement&&null!==document.fullscreenElement||document.webkitFullscreenElement&&null!==document.webkitFullscreenElement||document.mozFullScreenElement&&null!==document.mozFullScreenElement||document.msFullscreenElement&&null!==document.msFullscreenElement,t=document.documentElement;e?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen()}},s.a.createElement("i",{className:"simple-icon-plus d-block"}))),s.a.createElement("div",{className:"user d-inline-block"},s.a.createElement(o.a,{className:"dropdown-menu-right"},s.a.createElement(m.a,{className:"p-0",color:"empty"},s.a.createElement("span",{className:"name mr-1"},k.first_name," ",k.last_name),s.a.createElement("span",null,null!=k.avatar?s.a.createElement("img",{alt:"avatar",src:"/".concat(k.avatar),width:"40px",height:"40px"}):s.a.createElement("img",{alt:"avatar",src:"/assets/img/avatar.png"}))),s.a.createElement(u.a,{className:"mt-3",right:!0},s.a.createElement(d.a,null,"Dashboard"),s.a.createElement(d.a,null,"Projects"),s.a.createElement(d.a,null,"Tools"),s.a.createElement(d.a,null,s.a.createElement(p.b,{to:"/admin/settings"},"Settings")),s.a.createElement(d.a,{divider:!0}),s.a.createElement(d.a,{onClick:()=>{N(a)}},"Sign out"))))))})),M=a(17),x=a.n(M),L=a(411),j=a(412),P=a(413),O=a(414),F=a(80),I=a.n(F),H=a(79);var z=[{id:"dashboard",icon:"simple-icon-home",label:"menu.dashboard",to:"/admin/dashboard"},{id:"users",icon:"simple-icon-people",label:"menu.users",to:"/admin/users",subs:[{icon:"simple-icon-plus",label:"menu.new-user",to:"/admin/users/new"},{icon:"simple-icon-list",label:"menu.users-list",to:"/admin/users/list"}]},{id:"projects",icon:"simple-icon-briefcase",label:"menu.projects",to:"/admin/projects"},{id:"orders",icon:"simple-icon-docs",label:"menu.orders",to:"/admin/orders"},{id:"coupons",icon:"simple-icon-docs",label:"menu.coupons",to:"/admin/coupons"}];class A extends n.Component{constructor(e){super(e),this.handleWindowResize=e=>{if(e&&!e.isTrusted)return;const{containerClassnames:t}=this.props,a=this.getMenuClassesForResize(t);this.props.setContainerClassnames(0,a.join(" "),this.props.selectedMenuHasSubItems)},this.handleDocumentClick=e=>{const t=this.getContainer();let a=!1;(e.target&&e.target.classList&&(e.target.classList.contains("menu-button")||e.target.classList.contains("menu-button-mobile"))||e.target.parentElement&&e.target.parentElement.classList&&(e.target.parentElement.classList.contains("menu-button")||e.target.parentElement.classList.contains("menu-button-mobile"))||e.target.parentElement&&e.target.parentElement.parentElement&&e.target.parentElement.parentElement.classList&&(e.target.parentElement.parentElement.classList.contains("menu-button")||e.target.parentElement.parentElement.classList.contains("menu-button-mobile")))&&(a=!0),t.contains(e.target)||t===e.target||a||(this.setState({viewingParentMenu:""}),this.toggle())},this.getMenuClassesForResize=e=>{const{menuHiddenBreakpoint:t,subHiddenBreakpoint:a}=this.props;let n=e.split(" ").filter(e=>""!==e);const s=window.innerWidth;return s<t?n.push("menu-mobile"):s<a?(n=n.filter(e=>"menu-mobile"!==e),n.includes("menu-default")&&!n.includes("menu-sub-hidden")&&n.push("menu-sub-hidden")):(n=n.filter(e=>"menu-mobile"!==e),n.includes("menu-default")&&n.includes("menu-sub-hidden")&&(n=n.filter(e=>"menu-sub-hidden"!==e))),n},this.getContainer=()=>x.a.findDOMNode(this),this.toggle=()=>{const e=this.getIsHasSubItem();this.props.changeSelectedMenuHasSubItems(e);const{containerClassnames:t,menuClickCount:a}=this.props,n=t?t.split(" ").filter(e=>""!==e):"";let s=-1;e?n.includes("menu-sub-hidden")&&3===a?s=2:(n.includes("menu-hidden")||n.includes("menu-mobile"))&&(s=0):!n.includes("menu-default")||a%4!==0&&a%4!==3?!n.includes("menu-sub-hidden")||2!==a&&3!==a?(n.includes("menu-hidden")||n.includes("menu-mobile"))&&(s=0):s=0:s=1,s>=0&&this.props.setContainerClassnames(s,t,e)},this.handleProps=()=>{this.addEvents()},this.addEvents=()=>{["click","touchstart","touchend"].forEach(e=>document.addEventListener(e,this.handleDocumentClick,!0))},this.removeEvents=()=>{["click","touchstart","touchend"].forEach(e=>document.removeEventListener(e,this.handleDocumentClick,!0))},this.setSelectedLiActive=e=>{const t=document.querySelector(".sub-menu  li.active");null!=t&&t.classList.remove("active");const a=document.querySelector(".third-level-menu  li.active");null!=a&&a.classList.remove("active");const n=document.querySelector(".third-level-menu  a.active");null!=n&&n.parentElement.classList.add("active");const s=document.querySelector(".sub-menu  a.active");if(null!=s)s.parentElement.classList.add("active"),this.setState({selectedParentMenu:s.parentElement.parentElement.getAttribute("data-parent")},e);else{const t=document.querySelector(".main-menu  li a.active");null!=t?this.setState({selectedParentMenu:t.getAttribute("data-flag")},e):""===this.state.selectedParentMenu&&this.setState({selectedParentMenu:z[0].id},e)}},this.setHasSubItemStatus=()=>{const e=this.getIsHasSubItem();this.props.changeSelectedMenuHasSubItems(e),this.toggle()},this.getIsHasSubItem=()=>{const{selectedParentMenu:e}=this.state,t=z.find(t=>t.id===e);return!!t&&!!(t&&t.subs&&t.subs.length>0)},this.openSubMenu=(e,t)=>{const a=t.id,n=t.subs&&t.subs.length>0;if(this.props.changeSelectedMenuHasSubItems(n),n){e.preventDefault();const{containerClassnames:t,menuClickCount:s}=this.props,l=t?t.split(" ").filter(e=>""!==e):"";l.includes("menu-mobile")?this.props.addContainerClassname("sub-show-temporary",t):!l.includes("menu-sub-hidden")||2!==s&&0!==s?!l.includes("menu-hidden")||1!==s&&3!==s?!l.includes("menu-default")||l.includes("menu-sub-hidden")||1!==s&&3!==s||this.props.setContainerClassnames(0,t,n):this.props.setContainerClassnames(2,t,n):this.props.setContainerClassnames(3,t,n),this.setState({viewingParentMenu:a})}else this.setState({viewingParentMenu:a,selectedParentMenu:a}),this.toggle()},this.toggleMenuCollapse=(e,t)=>{e.preventDefault();const{collapsedMenus:a}=this.state;return a.indexOf(t)>-1?this.setState({collapsedMenus:a.filter(e=>e!==t)}):(a.push(t),this.setState({collapsedMenus:a})),!1},this.state={selectedParentMenu:"",viewingParentMenu:"",collapsedMenus:[]}}componentDidUpdate(e){this.props.location.pathname!==e.location.pathname&&(this.setSelectedLiActive(this.setHasSubItemStatus),window.scrollTo(0,0)),this.handleProps()}componentDidMount(){window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize(),this.handleProps(),this.setSelectedLiActive(this.setHasSubItemStatus),this.props.setProjectMenuItems({userId:this.props.loginUser._id,role:this.props.loginUser.role})}componentWillUnmount(){this.removeEvents(),window.removeEventListener("resize",this.handleWindowResize)}render(){const{selectedParentMenu:e,viewingParentMenu:t,collapsedMenus:a}=this.state;return s.a.createElement("div",{className:"sidebar"},s.a.createElement("div",{className:"main-menu"},s.a.createElement("div",{className:"scroll"},s.a.createElement(w.a,{options:{suppressScrollX:!0,wheelPropagation:!1}},s.a.createElement(L.a,{vertical:!0,className:"list-unstyled"},z&&z.map(a=>s.a.createElement(j.a,{key:a.id,className:I()({active:e===a.id&&""===t||t===a.id})},a.newWindow?s.a.createElement("a",{href:a.to,rel:"noopener noreferrer",target:"_blank"},s.a.createElement("i",{className:a.icon})," ",s.a.createElement(H.a,{id:a.label})):s.a.createElement(p.b,{to:a.to,onClick:e=>this.openSubMenu(e,a),"data-flag":a.id},s.a.createElement("i",{className:a.icon})," ",s.a.createElement(H.a,{id:a.label})))))))),s.a.createElement("div",{className:"sub-menu"},s.a.createElement("div",{className:"scroll"},s.a.createElement(w.a,{options:{suppressScrollX:!0,wheelPropagation:!1}},z&&z.map(e=>s.a.createElement(L.a,{key:e.id,className:I()({"d-block":this.state.selectedParentMenu===e.id&&""===this.state.viewingParentMenu||this.state.viewingParentMenu===e.id}),"data-parent":e.id},e.subs&&e.subs.map((t,n)=>s.a.createElement(j.a,{key:"".concat(e.id,"_").concat(n),className:"".concat(t.subs&&t.subs.length>0?"has-sub-item":"")},t.newWindow?s.a.createElement("a",{href:t.to,rel:"noopener noreferrer",target:"_blank"},s.a.createElement("i",{className:t.icon})," ",s.a.createElement(H.a,{id:t.label})):t.subs&&t.subs.length>0?s.a.createElement(s.a.Fragment,null,s.a.createElement(p.b,{className:"rotate-arrow-icon opacity-50 ".concat(-1===a.indexOf("".concat(e.id,"_").concat(n))?"":"collapsed"),to:t.to,id:"".concat(e.id,"_").concat(n),onClick:t=>this.toggleMenuCollapse(t,"".concat(e.id,"_").concat(n))},s.a.createElement("i",{className:"simple-icon-arrow-down"})," ",s.a.createElement(H.a,{id:t.label})),s.a.createElement(P.a,{isOpen:-1===a.indexOf("".concat(e.id,"_").concat(n))},s.a.createElement(L.a,{className:"third-level-menu"},t.subs.map((t,a)=>s.a.createElement(j.a,{key:"".concat(e.id,"_").concat(n,"_").concat(a)},t.newWindow?s.a.createElement("a",{href:t.to,rel:"noopener noreferrer",target:"_blank"},s.a.createElement("i",{className:t.icon})," ",s.a.createElement(H.a,{id:t.label})):s.a.createElement(p.b,{to:t.to},s.a.createElement("i",{className:t.icon})," ",s.a.createElement(H.a,{id:t.label}))))))):s.a.createElement(p.b,{to:t.to},s.a.createElement("i",{className:t.icon})," ",s.a.createElement(H.a,{id:t.label}),"projects"===e.id&&"projects-list"===t.id&&s.a.createElement(O.a,{pill:!0,color:"primary",className:"position-absolute badge-top-right",style:{right:"15px"}},this.props.totalProjectsNumber)))),"projects"===e.id&&this.props.latestProjectMenus.map((e,t)=>s.a.createElement(j.a,{key:e._id},s.a.createElement(p.b,{className:"d-flex align-items-center pr-2",to:"/admin/projects/details/".concat(e._id)},s.a.createElement("i",{className:"simple-icon-doc"})," ",e.project_name)))))))))}}var _=Object(l.i)(Object(c.b)(e=>{let{menu:t,authUser:a}=e;const{containerClassnames:n,subHiddenBreakpoint:s,menuHiddenBreakpoint:l,menuClickCount:c,selectedMenuHasSubItems:i,latestProjectMenus:r,totalProjectsNumber:o}=t;return{containerClassnames:n,subHiddenBreakpoint:s,menuHiddenBreakpoint:l,menuClickCount:c,selectedMenuHasSubItems:i,latestProjectMenus:r,totalProjectsNumber:o,loginUser:a.user}},{setContainerClassnames:h.L,addContainerClassname:h.B,changeDefaultClassnames:h.C,changeSelectedMenuHasSubItems:h.E,setProjectMenuItems:h.M})(A)),U=a(158);const D={receiveAuthUserAction:h.J};var q=Object(l.i)(Object(c.b)(e=>{let{menu:t,authUser:a}=e;const{containerClassnames:n}=t;return{containerClassnames:n,loginUser:a.user}},D)(e=>{let{containerClassnames:t,children:a,history:l,receiveAuthUserAction:c,loginUser:i}=e;return Object(n.useEffect)(()=>{c(l)},[]),0==Object.keys(i).length?s.a.createElement("div",{className:"loading"}):s.a.createElement("div",{id:"app-container",className:t},s.a.createElement(y,{history:l}),s.a.createElement(_,null),s.a.createElement("main",null,s.a.createElement("div",{className:"container-fluid"},a)),s.a.createElement(U.a,null))}));const R=s.a.lazy(()=>Promise.all([a.e(3),a.e(2),a.e(11)]).then(a.bind(null,439))),B=s.a.lazy(()=>a.e(26).then(a.bind(null,418))),W=s.a.lazy(()=>Promise.all([a.e(0),a.e(1),a.e(3),a.e(39),a.e(19)]).then(a.bind(null,419))),T=s.a.lazy(()=>Promise.all([a.e(0),a.e(1),a.e(3),a.e(39),a.e(19)]).then(a.bind(null,420))),J=s.a.lazy(()=>Promise.all([a.e(0),a.e(1),a.e(3),a.e(39),a.e(19)]).then(a.bind(null,447))),K=s.a.lazy(()=>a.e(10).then(a.bind(null,437)));t.default=Object(l.i)(Object(c.b)(e=>{let{menu:t}=e;const{containerClassnames:a}=t;return{containerClassnames:a}},{})(e=>{let{match:t}=e;return s.a.createElement(q,null,s.a.createElement("div",{className:"dashboard-wrapper"},s.a.createElement(n.Suspense,{fallback:s.a.createElement("div",{className:"loading"})},s.a.createElement(l.d,null,s.a.createElement(l.a,{exact:!0,from:"".concat(t.url,"/"),to:"".concat(t.url,"/dashboard")}),s.a.createElement(l.b,{path:"".concat(t.url,"/settings"),render:e=>s.a.createElement(T,e)}),s.a.createElement(l.b,{path:"".concat(t.url,"/dashboard"),render:e=>s.a.createElement(R,e)}),s.a.createElement(l.b,{path:"".concat(t.url,"/users"),render:e=>s.a.createElement(B,e)}),s.a.createElement(l.b,{path:"".concat(t.url,"/projects"),render:e=>s.a.createElement(W,e)}),s.a.createElement(l.b,{path:"".concat(t.url,"/orders"),render:e=>s.a.createElement(J,e)}),s.a.createElement(l.b,{path:"".concat(t.url,"/coupons"),render:e=>s.a.createElement(K,e)}),s.a.createElement(l.a,{to:"/error"})))))}))},78:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return i}));var n=a(3),s=a.n(n),l=a(215);const c=e=>s.a.createElement(l.a,Object.assign({},e,{widths:["xxs","xs","sm","md","lg","xl","xxl"]})),i=e=>{let{className:t}=e;return s.a.createElement("div",{className:"separator ".concat(t)})}},79:function(e,t,a){"use strict";var n=a(3),s=a.n(n),l=a(198),c=a(128);t.a=Object(c.c)(e=>s.a.createElement(l.a,e),{withRef:!1})}}]);
//# sourceMappingURL=views-admin.ca2166c0.chunk.js.map