(this["webpackJsonpapirender-dashboard"]=this["webpackJsonpapirender-dashboard"]||[]).push([[16],{129:function(e,a,t){"use strict";var n=t(9),c=t(15),l=t(92),r=t(91),s=t(4),o=t.n(s),i=t(37),m=t.n(i),u=t(84),d=t.n(u),p=t(87),b={tag:p.q,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),disabled:m.a.bool,active:m.a.bool,className:m.a.string,cssModule:m.a.object,onClick:m.a.func,href:m.a.any},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(l.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.active,r=e.tag,s=e.innerRef,i=Object(c.a)(e,["className","cssModule","active","tag","innerRef"]),m=Object(p.m)(d()(a,"nav-link",{disabled:i.disabled,active:l}),t);return o.a.createElement(r,Object(n.a)({},i,{ref:s,onClick:this.onClick,className:m}))},a}(o.a.Component);f.propTypes=b,f.defaultProps={tag:"a"},a.a=f},179:function(e,a,t){"use strict";var n=t(4),c=t.n(n),l=t(391),r=t(392),s=t(129),o=t(82);a.a=function(e){var a=e.totalPage,t=void 0===a?0:a,n=e.currentPage,i=void 0===n?1:n,m=e.numberLimit,u=void 0===m?5:m,d=e.lastIsActive,p=void 0===d||d,b=e.firstIsActive,f=void 0===b||b,g=e.onChangePage,E=1,h=u;u>t?(E=1,h=t):i<=parseInt(u/2,10)?(E=1,h=u):i+parseInt(u/2,10)<=t?(E=i-parseInt(u/2,10),h=i+parseInt(u/2,10)):(E=t-(u-1),h=t);for(var v=[],N=E=0===E?1:E;N<=h;N+=1)v.push(N);var j=i<=1?"disabled":"",O=i>=t?"disabled":"",k=i<=1?"disabled":"",y=i>=t?"disabled":"";return t>1?c.a.createElement(o.a,{xxs:"12",className:"mt-3 mb-3"},c.a.createElement(l.a,{className:"pagination justify-content-center"},f&&c.a.createElement(r.a,{className:"page-item ".concat(j)},c.a.createElement(s.a,{className:"page-link first c-pointer",onClick:function(){return g(1)}},c.a.createElement("i",{className:"simple-icon-control-start"}))),c.a.createElement(r.a,{className:"page-item ".concat(k)},c.a.createElement(s.a,{className:"page-link prev c-pointer",onClick:function(){return g(i-1)}},c.a.createElement("i",{className:"simple-icon-arrow-left"}))),v.map((function(e){return c.a.createElement(r.a,{key:e,className:"page-item ".concat(i===e&&"active")},c.a.createElement(s.a,{className:"page-link c-pointer",onClick:function(){return g(e)}},e))})),c.a.createElement(r.a,{className:"page-item ".concat(y)},c.a.createElement(s.a,{className:"page-link next c-pointer",onClick:function(){return g(i+1)}},c.a.createElement("i",{className:"simple-icon-arrow-right"}))),p&&c.a.createElement(r.a,{className:"page-item ".concat(O)},c.a.createElement(s.a,{className:"page-link last c-pointer",onClick:function(){return g(t)}},c.a.createElement("i",{className:"simple-icon-control-end"}))))):c.a.createElement(o.a,{xxs:"12",className:"mt-2"})}},226:function(e,a,t){"use strict";var n=t(9),c=t(15),l=t(4),r=t.n(l),s=t(37),o=t.n(s),i=t(84),m=t.n(i),u=t(87),d={className:o.a.string,cssModule:o.a.object,size:o.a.string,bordered:o.a.bool,borderless:o.a.bool,striped:o.a.bool,dark:o.a.bool,hover:o.a.bool,responsive:o.a.oneOfType([o.a.bool,o.a.string]),tag:u.q,responsiveTag:u.q,innerRef:o.a.oneOfType([o.a.func,o.a.string,o.a.object])},p=function(e){var a=e.className,t=e.cssModule,l=e.size,s=e.bordered,o=e.borderless,i=e.striped,d=e.dark,p=e.hover,b=e.responsive,f=e.tag,g=e.responsiveTag,E=e.innerRef,h=Object(c.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),v=Object(u.m)(m()(a,"table",!!l&&"table-"+l,!!s&&"table-bordered",!!o&&"table-borderless",!!i&&"table-striped",!!d&&"table-dark",!!p&&"table-hover"),t),N=r.a.createElement(f,Object(n.a)({},h,{ref:E,className:v}));if(b){var j=Object(u.m)(!0===b?"table-responsive":"table-responsive-"+b,t);return r.a.createElement(g,{className:j},N)}return N};p.propTypes=d,p.defaultProps={tag:"table",responsiveTag:"div"},a.a=p},381:function(e,a,t){"use strict";t.r(a);var n=t(2),c=t.n(n),l=t(12),r=t(81),s=t(4),o=t.n(s),i=t(11),m=t.n(i),u=t(212),d=t(153),p=t(393),b=t(429),f=t(430),g=t(388),E=t(390),h=t(134),v=t(82),N=t(83),j=Object(h.c)((function(e){var a=e.intl,t=e.changeOrderBy,n=e.changePageSize,c=e.selectedPageSize,l=e.totalItemCount,i=e.selectedOrderOption,m=(e.match,e.startIndex),h=e.endIndex,j=e.onSearchKey,O=e.orderOptions,k=e.pageSizes,y=e.heading,C=Object(s.useState)(!1),x=Object(r.a)(C,2),P=x[0],w=x[1],S=a.messages;return o.a.createElement(u.a,null,o.a.createElement(v.a,{xxs:"12"},o.a.createElement("div",{className:"mb-2"},o.a.createElement("h1",null,o.a.createElement(N.a,{id:y}))),o.a.createElement("div",{className:"mb-2"},o.a.createElement(d.a,{color:"empty",className:"pt-0 pl-0 d-inline-block d-md-none",onClick:function(){return w(!P)}},o.a.createElement(N.a,{id:"pages.display-options"})," ",o.a.createElement("i",{className:"simple-icon-arrow-down align-middle"})),o.a.createElement(p.a,{isOpen:P,className:"d-md-block",id:"displayOptions"},o.a.createElement("div",{className:"d-block d-md-inline-block pt-1"},o.a.createElement(b.a,{className:"mr-1 float-md-left btn-group mb-1"},o.a.createElement(f.a,{caret:!0,color:"outline-dark",size:"xs"},i.label),o.a.createElement(g.a,null,O.map((function(e,a){return o.a.createElement(E.a,{key:a,onClick:function(){return t(e.column)}},e.label)})))),o.a.createElement("div",{className:"search-sm d-inline-block float-md-left mr-1 mb-1 align-top"},o.a.createElement("input",{type:"text",name:"keyword",id:"search",placeholder:S["menu.search"],onKeyPress:function(e){return j(e)}}))),o.a.createElement("div",{className:"float-md-right pt-1"},o.a.createElement("span",{className:"text-muted text-small mr-1"},"".concat(m,"-").concat(h," of ").concat(l," ")),o.a.createElement(b.a,{className:"d-inline-block"},o.a.createElement(f.a,{caret:!0,color:"outline-dark",size:"xs"},c),o.a.createElement(g.a,{right:!0},k.map((function(e,a){return o.a.createElement(E.a,{key:a,onClick:function(){return n(e)}},e)}))))))),o.a.createElement(v.b,{className:"mb-5"})))})),O=t(93),k=t(226),y=t(394),C=t(86),x=t(179),P=t(102),w=t(110),S=t(107),I=t.n(S);var _=o.a.memo((function(e){var a=e.items,t=(e.onCheckItem,e.currentPage),n=e.totalPage,c=e.onChangePage,l=Object(O.g)();return o.a.createElement(u.a,null,o.a.createElement(v.a,{xxs:"12",className:"mb-3"},o.a.createElement(k.a,{responsive:!0,className:"r-table table table-divided"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Project Title"),o.a.createElement("th",null,"Customer"),o.a.createElement("th",null,"Company"),o.a.createElement("th",null,"Reference"),o.a.createElement("th",null,"Project Category"),o.a.createElement("th",null,"Cost"),o.a.createElement("th",null,"Order Date"),o.a.createElement("th",null,"Status"))),o.a.createElement("tbody",null,a.map((function(e,a){return o.a.createElement("tr",{role:"row",key:a,className:"p-5",style:{cursor:"pointer"},onClick:function(a){return l.push("/admin/projects/details/".concat(e._id))}},o.a.createElement("td",{role:"cell",className:"p-4 list-item-heading w-20"},o.a.createElement(C.b,{to:"/admin/projects/details/".concat(e._id),className:"w-sm-100"},o.a.createElement("p",{className:"mb-1 truncate"},e.project_name))),o.a.createElement("td",{role:"cell",className:"p-4 text-theme-6 w-10"},e.user_details[0].first_name+" "+e.user_details[0].last_name),o.a.createElement("td",{role:"cell",className:"p-4 w-10"},e.user_details[0].company_name),o.a.createElement("td",{role:"cell",className:"p-4 text-primary w-5"},e.unique_id),o.a.createElement("td",{role:"cell",className:"p-4 text-muted w-15 w-sm-100"},P.b.find((function(a){return a.value===e.category})).desc),o.a.createElement("td",{role:"cell",className:"p-4 text-muted w-5 text-muted text-small w-sm-100"},"$",e.total_amount),o.a.createElement("td",{role:"cell",className:"p-4 w-20"},o.a.createElement("p",{className:"truncate text-muted text-small w-sm-100"},I()(e.date).format("LLLL"))),o.a.createElement("td",{role:"cell",className:"p-4 text-muted w-15"},o.a.createElement(y.a,{color:w.a[e.status],pill:!0},e.status)))}))))),o.a.createElement(x.a,{currentPage:t,totalPage:n,onChangePage:function(e){return c(e)}}))})),z=[{column:"project_name",label:"Project Name"},{column:"category",label:"Category"},{column:"status",label:"Status"},{column:"unique_id",label:"Reference"}],M=[10,20,50,100];a.default=function(e){var a=e.match,t=Object(s.useState)(!1),n=Object(r.a)(t,2),i=n[0],u=n[1],d=Object(s.useState)("list"),p=Object(r.a)(d,2),b=p[0],f=p[1],g=Object(s.useState)(1),E=Object(r.a)(g,2),h=E[0],v=E[1],N=Object(s.useState)(10),O=Object(r.a)(N,2),k=O[0],y=O[1],C=Object(s.useState)({column:"project_name",label:"Project Name"}),x=Object(r.a)(C,2),P=x[0],w=x[1],S=Object(s.useState)(!1),I=Object(r.a)(S,2),T=I[0],L=I[1],R=Object(s.useState)(0),q=Object(r.a)(R,2),D=q[0],B=q[1],K=Object(s.useState)(1),A=Object(r.a)(K,2),J=A[0],F=A[1],$=Object(s.useState)(""),G=Object(r.a)($,2),H=G[0],Q=G[1],U=Object(s.useState)([]),V=Object(r.a)(U,2),W=V[0],X=V[1],Y=Object(s.useState)([]),Z=Object(r.a)(Y,2),ee=Z[0],ae=Z[1];Object(s.useEffect)((function(){v(1)}),[k,P]),Object(s.useEffect)((function(){function e(){return(e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("/api/projects/list?pageSize=".concat(k,"&currentPage=").concat(h,"&orderBy=").concat(P.column,"&search=").concat(H)).then((function(e){return e.data})).then((function(e){F(e.totalPage),ae(e.data),X([]),B(e.totalItem),u(!0)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[k,h,P,H]);var te=(h-1)*k,ne=h*k;return i?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"disable-text-selection"},o.a.createElement(j,{heading:"projects.all",displayMode:b,changeDisplayMode:f,changeOrderBy:function(e){w(z.find((function(a){return a.column===e})))},changePageSize:y,selectedPageSize:k,totalItemCount:D,selectedOrderOption:P,match:a,startIndex:te,endIndex:ne,selectedItemsLength:W?W.length:0,itemsLength:ee?ee.length:0,onSearchKey:function(e){"Enter"===e.key&&Q(e.target.value.toLowerCase())},orderOptions:z,pageSizes:M,projectID:a.params.id,toggleModal:function(){return L(!T)}}),o.a.createElement(_,{items:ee,displayMode:b,currentPage:h,totalPage:J,onChangePage:v}))):o.a.createElement("div",{className:"loading"})}}}]);
//# sourceMappingURL=project-list.a09423db.chunk.js.map