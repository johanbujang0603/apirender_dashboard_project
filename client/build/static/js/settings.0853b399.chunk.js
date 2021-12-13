(this["webpackJsonpapirender-dashboard"]=this["webpackJsonpapirender-dashboard"]||[]).push([[22],{104:function(e,a,l){"use strict";l.d(a,"a",(function(){return r}));var t=l(3),n=l.n(t);const r=e=>{let{label:a,handleChange:l,orgData:r}=e;const[s,u]=Object(t.useState)(null),[c,i]=Object(t.useState)(r?"".concat(r):null);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"avatar-photo"},n.a.createElement("input",{type:"file",accept:"image/*",onChange:e=>(e=>{u(e.target.files[0]),i(URL.createObjectURL(e.target.files[0])),l(e.target.files[0])})(e)}),!s&&!r&&n.a.createElement("div",{className:"avatar-uploader-label"},n.a.createElement("span",null,a)),n.a.createElement("img",{src:c,className:"rounded-circle",width:"200",height:"200"})))}},105:function(e,a,l){"use strict";l.d(a,"a",(function(){return t}));const t=[{value:"AF",label:"Afghanistan"},{value:"AX",label:"Aland Islands"},{value:"AL",label:"Albania"},{value:"DZ",label:"Algeria"},{value:"AS",label:"American Samoa"},{value:"AD",label:"Andorra"},{value:"AO",label:"Angola"},{value:"AI",label:"Anguilla"},{value:"AQ",label:"Antarctica"},{value:"AG",label:"Antigua And Barbuda"},{value:"AR",label:"Argentina"},{value:"AM",label:"Armenia"},{value:"AW",label:"Aruba"},{value:"AU",label:"Australia"},{value:"AT",label:"Austria"},{value:"AZ",label:"Azerbaijan"},{value:"BS",label:"Bahamas"},{value:"BH",label:"Bahrain"},{value:"BD",label:"Bangladesh"},{value:"BB",label:"Barbados"},{value:"BY",label:"Belarus"},{value:"BE",label:"Belgium"},{value:"BZ",label:"Belize"},{value:"BJ",label:"Benin"},{value:"BM",label:"Bermuda"},{value:"BT",label:"Bhutan"},{value:"BO",label:"Bolivia"},{value:"BA",label:"Bosnia And Herzegovina"},{value:"BW",label:"Botswana"},{value:"BV",label:"Bouvet Island"},{value:"BR",label:"Brazil"},{value:"IO",label:"British Indian Ocean Territory"},{value:"BN",label:"Brunei Darussalam"},{value:"BG",label:"Bulgaria"},{value:"BF",label:"Burkina Faso"},{value:"BI",label:"Burundi"},{value:"KH",label:"Cambodia"},{value:"CM",label:"Cameroon"},{value:"CA",label:"Canada"},{value:"CV",label:"Cape Verde"},{value:"KY",label:"Cayman Islands"},{value:"CF",label:"Central African Republic"},{value:"TD",label:"Chad"},{value:"CL",label:"Chile"},{value:"CN",label:"China"},{value:"CX",label:"Christmas Island"},{value:"CC",label:"Cocos (Keeling) Islands"},{value:"CO",label:"Colombia"},{value:"KM",label:"Comoros"},{value:"CG",label:"Congo"},{value:"CD",label:"Congo, Democratic Republic"},{value:"CK",label:"Cook Islands"},{value:"CR",label:"Costa Rica"},{value:"CI",label:"Cote D'Ivoire"},{value:"HR",label:"Croatia"},{value:"CU",label:"Cuba"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"},{value:"DJ",label:"Djibouti"},{value:"DM",label:"Dominica"},{value:"DO",label:"Dominican Republic"},{value:"EC",label:"Ecuador"},{value:"EG",label:"Egypt"},{value:"SV",label:"El Salvador"},{value:"GQ",label:"Equatorial Guinea"},{value:"ER",label:"Eritrea"},{value:"EE",label:"Estonia"},{value:"ET",label:"Ethiopia"},{value:"FK",label:"Falkland Islands (Malvinas)"},{value:"FO",label:"Faroe Islands"},{value:"FJ",label:"Fiji"},{value:"FI",label:"Finland"},{value:"FR",label:"France"},{value:"GF",label:"French Guiana"},{value:"PF",label:"French Polynesia"},{value:"TF",label:"French Southern Territories"},{value:"GA",label:"Gabon"},{value:"GM",label:"Gambia"},{value:"GE",label:"Georgia"},{value:"DE",label:"Germany"},{value:"GH",label:"Ghana"},{value:"GI",label:"Gibraltar"},{value:"GR",label:"Greece"},{value:"GL",label:"Greenland"},{value:"GD",label:"Grenada"},{value:"GP",label:"Guadeloupe"},{value:"GU",label:"Guam"},{value:"GT",label:"Guatemala"},{value:"GG",label:"Guernsey"},{value:"GN",label:"Guinea"},{value:"GW",label:"Guinea-Bissau"},{value:"GY",label:"Guyana"},{value:"HT",label:"Haiti"},{value:"HM",label:"Heard Island & Mcdonald Islands"},{value:"VA",label:"Holy See (Vatican City State)"},{value:"HN",label:"Honduras"},{value:"HK",label:"Hong Kong"},{value:"HU",label:"Hungary"},{value:"IS",label:"Iceland"},{value:"IN",label:"India"},{value:"ID",label:"Indonesia"},{value:"IR",label:"Iran, Islamic Republic Of"},{value:"IQ",label:"Iraq"},{value:"IE",label:"Ireland"},{value:"IM",label:"Isle Of Man"},{value:"IL",label:"Israel"},{value:"IT",label:"Italy"},{value:"JM",label:"Jamaica"},{value:"JP",label:"Japan"},{value:"JE",label:"Jersey"},{value:"JO",label:"Jordan"},{value:"KZ",label:"Kazakhstan"},{value:"KE",label:"Kenya"},{value:"KI",label:"Kiribati"},{value:"KR",label:"Korea"},{value:"KW",label:"Kuwait"},{value:"KG",label:"Kyrgyzstan"},{value:"LA",label:"Lao People's Democratic Republic"},{value:"LV",label:"Latvia"},{value:"LB",label:"Lebanon"},{value:"LS",label:"Lesotho"},{value:"LR",label:"Liberia"},{value:"LY",label:"Libyan Arab Jamahiriya"},{value:"LI",label:"Liechtenstein"},{value:"LT",label:"Lithuania"},{value:"LU",label:"Luxembourg"},{value:"MO",label:"Macao"},{value:"MK",label:"Macedonia"},{value:"MG",label:"Madagascar"},{value:"MW",label:"Malawi"},{value:"MY",label:"Malaysia"},{value:"MV",label:"Maldives"},{value:"ML",label:"Mali"},{value:"MT",label:"Malta"},{value:"MH",label:"Marshall Islands"},{value:"MQ",label:"Martinique"},{value:"MR",label:"Mauritania"},{value:"MU",label:"Mauritius"},{value:"YT",label:"Mayotte"},{value:"MX",label:"Mexico"},{value:"FM",label:"Micronesia, Federated States Of"},{value:"MD",label:"Moldova"},{value:"MC",label:"Monaco"},{value:"MN",label:"Mongolia"},{value:"ME",label:"Montenegro"},{value:"MS",label:"Montserrat"},{value:"MA",label:"Morocco"},{value:"MZ",label:"Mozambique"},{value:"MM",label:"Myanmar"},{value:"NA",label:"Namibia"},{value:"NR",label:"Nauru"},{value:"NP",label:"Nepal"},{value:"NL",label:"Netherlands"},{value:"AN",label:"Netherlands Antilles"},{value:"NC",label:"New Caledonia"},{value:"NZ",label:"New Zealand"},{value:"NI",label:"Nicaragua"},{value:"NE",label:"Niger"},{value:"NG",label:"Nigeria"},{value:"NU",label:"Niue"},{value:"NF",label:"Norfolk Island"},{value:"MP",label:"Northern Mariana Islands"},{value:"NO",label:"Norway"},{value:"OM",label:"Oman"},{value:"PK",label:"Pakistan"},{value:"PW",label:"Palau"},{value:"PS",label:"Palestinian Territory, Occupied"},{value:"PA",label:"Panama"},{value:"PG",label:"Papua New Guinea"},{value:"PY",label:"Paraguay"},{value:"PE",label:"Peru"},{value:"PH",label:"Philippines"},{value:"PN",label:"Pitcairn"},{value:"PL",label:"Poland"},{value:"PT",label:"Portugal"},{value:"PR",label:"Puerto Rico"},{value:"QA",label:"Qatar"},{value:"RE",label:"Reunion"},{value:"RO",label:"Romania"},{value:"RU",label:"Russian Federation"},{value:"RW",label:"Rwanda"},{value:"BL",label:"Saint Barthelemy"},{value:"SH",label:"Saint Helena"},{value:"KN",label:"Saint Kitts And Nevis"},{value:"LC",label:"Saint Lucia"},{value:"MF",label:"Saint Martin"},{value:"PM",label:"Saint Pierre And Miquelon"},{value:"VC",label:"Saint Vincent And Grenadines"},{value:"WS",label:"Samoa"},{value:"SM",label:"San Marino"},{value:"ST",label:"Sao Tome And Principe"},{value:"SA",label:"Saudi Arabia"},{value:"SN",label:"Senegal"},{value:"RS",label:"Serbia"},{value:"SC",label:"Seychelles"},{value:"SL",label:"Sierra Leone"},{value:"SG",label:"Singapore"},{value:"SK",label:"Slovakia"},{value:"SI",label:"Slovenia"},{value:"SB",label:"Solomon Islands"},{value:"SO",label:"Somalia"},{value:"ZA",label:"South Africa"},{value:"GS",label:"South Georgia And Sandwich Isl."},{value:"ES",label:"Spain"},{value:"LK",label:"Sri Lanka"},{value:"SD",label:"Sudan"},{value:"SR",label:"Suriname"},{value:"SJ",label:"Svalbard And Jan Mayen"},{value:"SZ",label:"Swaziland"},{value:"SE",label:"Sweden"},{value:"CH",label:"Switzerland"},{value:"SY",label:"Syrian Arab Republic"},{value:"TW",label:"Taiwan"},{value:"TJ",label:"Tajikistan"},{value:"TZ",label:"Tanzania"},{value:"TH",label:"Thailand"},{value:"TL",label:"Timor-Leste"},{value:"TG",label:"Togo"},{value:"TK",label:"Tokelau"},{value:"TO",label:"Tonga"},{value:"TT",label:"Trinidad And Tobago"},{value:"TN",label:"Tunisia"},{value:"TR",label:"Turkey"},{value:"TM",label:"Turkmenistan"},{value:"TC",label:"Turks And Caicos Islands"},{value:"TV",label:"Tuvalu"},{value:"UG",label:"Uganda"},{value:"UA",label:"Ukraine"},{value:"AE",label:"United Arab Emirates"},{value:"GB",label:"United Kingdom"},{value:"US",label:"United States"},{value:"UM",label:"United States Outlying Islands"},{value:"UY",label:"Uruguay"},{value:"UZ",label:"Uzbekistan"},{value:"VU",label:"Vanuatu"},{value:"VE",label:"Venezuela"},{value:"VN",label:"Viet Nam"},{value:"VG",label:"Virgin Islands, British"},{value:"VI",label:"Virgin Islands, U.S."},{value:"WF",label:"Wallis And Futuna"},{value:"EH",label:"Western Sahara"},{value:"YE",label:"Yemen"},{value:"ZM",label:"Zambia"},{value:"ZW",label:"Zimbabwe"}]},119:function(e,a,l){"use strict";var t=l(7),n=l(11),r=l(3),s=l.n(r),u=l(34),c=l.n(u),i=l(80),o=l.n(i),b=l(83),m=["className","cssModule","tag"],v={tag:b.q,className:c.a.string,cssModule:c.a.object},d=function(e){var a=e.className,l=e.cssModule,r=e.tag,u=Object(n.a)(e,m),c=Object(b.m)(o()(a,"card-title"),l);return s.a.createElement(r,Object(t.a)({},u,{className:c}))};d.propTypes=v,d.defaultProps={tag:"div"},a.a=d},120:function(e,a,l){"use strict";var t=l(7),n=l(11),r=l(3),s=l.n(r),u=l(34),c=l.n(u),i=l(80),o=l.n(i),b=l(83),m=["className","cssModule","innerRef","tag"],v={tag:b.q,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},d=function(e){var a=e.className,l=e.cssModule,r=e.innerRef,u=e.tag,c=Object(n.a)(e,m),i=Object(b.m)(o()(a,"card-body"),l);return s.a.createElement(u,Object(t.a)({},c,{className:i,ref:r}))};d.propTypes=v,d.defaultProps={tag:"div"},a.a=d},124:function(e,a,l){"use strict";var t=l(7),n=l(11),r=l(88),s=l(87),u=l(3),c=l.n(u),i=l(34),o=l.n(i),b=l(80),m=l.n(b),v=l(83),d=["className","cssModule","active","tag","innerRef"],p={tag:v.q,innerRef:o.a.oneOfType([o.a.object,o.a.func,o.a.string]),disabled:o.a.bool,active:o.a.bool,className:o.a.string,cssModule:o.a.object,onClick:o.a.func,href:o.a.any},E=function(e){function a(a){var l;return(l=e.call(this,a)||this).onClick=l.onClick.bind(Object(r.a)(l)),l}Object(s.a)(a,e);var l=a.prototype;return l.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},l.render=function(){var e=this.props,a=e.className,l=e.cssModule,r=e.active,s=e.tag,u=e.innerRef,i=Object(n.a)(e,d),o=Object(v.m)(m()(a,"nav-link",{disabled:i.disabled,active:r}),l);return c.a.createElement(s,Object(t.a)({},i,{ref:u,onClick:this.onClick,className:o}))},a}(c.a.Component);E.propTypes=p,E.defaultProps={tag:"a"},a.a=E},125:function(e,a,l){"use strict";l.d(a,"a",(function(){return n}));var t=l(3),n=l.n(t).a.createContext({})},342:function(e,a,l){"use strict";var t=l(7),n=l(87),r=l(3),s=l.n(r),u=l(34),c=l.n(u),i=l(80),o=l.n(i),b=l(125),m=l(83),v={tag:m.q,activeTab:c.a.any,className:c.a.string,cssModule:c.a.object},d=function(e){function a(a){var l;return(l=e.call(this,a)||this).state={activeTab:l.props.activeTab},l}return Object(n.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,l=e.cssModule,n=e.tag,r=Object(m.n)(this.props,Object.keys(v)),u=Object(m.m)(o()("tab-content",a),l);return s.a.createElement(b.a.Provider,{value:{activeTabId:this.state.activeTab}},s.a.createElement(n,Object(t.a)({},r,{className:u})))},a}(r.Component);a.a=d,d.propTypes=v,d.defaultProps={tag:"div"}},343:function(e,a,l){"use strict";l.d(a,"a",(function(){return p}));var t=l(7),n=l(11),r=l(3),s=l.n(r),u=l(34),c=l.n(u),i=l(80),o=l.n(i),b=l(125),m=l(83),v=["className","cssModule","tabId","tag"],d={tag:m.q,className:c.a.string,cssModule:c.a.object,tabId:c.a.any};function p(e){var a=e.className,l=e.cssModule,r=e.tabId,u=e.tag,c=Object(n.a)(e,v),i=function(e){return Object(m.m)(o()("tab-pane",a,{active:r===e}),l)};return s.a.createElement(b.a.Consumer,null,(function(e){var a=e.activeTabId;return s.a.createElement(u,Object(t.a)({},c,{className:i(a)}))}))}p.propTypes=d,p.defaultProps={tag:"div"}},440:function(e,a,l){"use strict";l.r(a);var t=l(3),n=l.n(t),r=l(128),s=l(20),u=l(80),c=l.n(u),i=l(216),o=l(411),b=l(412),m=l(124),v=l(342),d=l(343),p=l(79),E=l(78),f=l(8),N=l.n(f),h=l(96),g=l(120),y=l(403),M=l(404),S=l(151),T=l(91),C=l(99),A=l(84),j=l(104),O=l(105),I=l(1);const P=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;var w=Object(s.b)(null,{receiveAuthUserAction:I.J})(e=>{let{history:a,user:l,receiveAuthUserAction:r}=e;const[s,u]=Object(t.useState)(!1),[c,o]=Object(t.useState)(null),b={firstName:l.first_name,lastName:l.last_name,email:l.email,companyName:l.company_name?l.company_name:"",jobTitle:l.job_title?l.job_title:"",country:l.country?l.country:"",role:l.role,phoneNumber:l.phone_number?l.phone_number:""};return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,null,n.a.createElement(E.a,{sm:{size:8,offset:2},className:"mb-4"},n.a.createElement(h.a,null,n.a.createElement(g.a,null,n.a.createElement(T.c,{initialValues:b,onSubmit:e=>{u(!0);let t=new FormData;t.append("avatar",c),t.append("id",l._id),t.append("first_name",e.firstName),t.append("last_name",e.lastName),t.append("phone_number",e.phoneNumber),t.append("email",e.email),t.append("job_title",e.jobTitle),t.append("company_name",e.companyName),t.append("country",e.country),t.append("is_new",!!c),N.a.post("/api/users/update-customer",t,{headers:{"content-type":"multipart/form-data"}}).then(e=>e.data).then(e=>{r(a),u(!1),A.b.success("The user has been updated successfully","Succcess!")}).catch(e=>{u(!1),A.b.warning(e.message,"Error!")})},validationSchema:C.a().shape({firstName:C.c().required("Full Name is required"),lastName:C.c().required("Last Name is required"),jobTitle:C.c().required("Job title is required"),companyName:C.c().required("Company name is required"),email:C.c().email("Email is invalid").required("Email is required"),country:C.c().required("Address is required"),phoneNumber:C.c().matches(P,"Phone number is not valid").required("Phone number is required")})},e=>{let{errors:a,touched:t}=e;return n.a.createElement(T.b,null,n.a.createElement(y.a,{row:!0},n.a.createElement(E.a,{sm:{size:4,offset:4}},n.a.createElement(y.a,{className:"form-group has-float-label mb-4 text-center"},n.a.createElement("div",{className:"d-flex justify-content-center p-1"},n.a.createElement(j.a,{label:"Upload Profile Pircutre or Company Logo",handleChange:e=>o(e),orgData:l.avatar?l.avatar:"/assets/img/profile_pic.png"})))),n.a.createElement(E.a,{sm:6},n.a.createElement(y.a,{className:"form-group has-float-label  mb-4"},n.a.createElement(M.a,null,n.a.createElement(p.a,{id:"user.firstname"})),n.a.createElement(T.a,{className:"form-control",type:"text",name:"firstName"}),a.firstName&&t.firstName&&n.a.createElement("div",{className:"invalid-feedback d-block"},a.firstName))),n.a.createElement(E.a,{sm:6},n.a.createElement(y.a,{className:"form-group has-float-label  mb-4"},n.a.createElement(M.a,null,n.a.createElement(p.a,{id:"user.lastname"})),n.a.createElement(T.a,{className:"form-control",type:"text",name:"lastName"}),a.lastName&&t.lastName&&n.a.createElement("div",{className:"invalid-feedback d-block"},a.lastName))),n.a.createElement(E.a,{sm:12},n.a.createElement(y.a,{className:"form-group has-float-label  mb-4"},n.a.createElement(M.a,null,n.a.createElement(p.a,{id:"user.phone_number"})),n.a.createElement(T.a,{className:"form-control",name:"phoneNumber"}),a.phoneNumber&&t.phoneNumber&&n.a.createElement("div",{className:"invalid-feedback d-block"},a.phoneNumber))),n.a.createElement(E.a,{sm:6},n.a.createElement(y.a,{className:"form-group has-float-label  mb-4"},n.a.createElement(M.a,null,n.a.createElement(p.a,{id:"user.email"})),n.a.createElement(T.a,{className:"form-control",name:"email"}),a.email&&t.email&&n.a.createElement("div",{className:"invalid-feedback d-block"},a.email))),n.a.createElement(E.a,{sm:6},n.a.createElement(y.a,{className:"form-group has-float-label  mb-4"},n.a.createElement(M.a,null,n.a.createElement(p.a,{id:"user.companyname"})),n.a.createElement(T.a,{className:"form-control",type:"text",name:"companyName"}),a.companyName&&t.companyName&&n.a.createElement("div",{className:"invalid-feedback d-block"},a.companyName))),n.a.createElement(E.a,{sm:6},n.a.createElement(y.a,{className:"form-group has-float-label  mb-4"},n.a.createElement(M.a,null,n.a.createElement(p.a,{id:"user.job-title"})),n.a.createElement(T.a,{className:"form-control",type:"text",name:"jobTitle"}),a.jobTitle&&t.jobTitle&&n.a.createElement("div",{className:"invalid-feedback d-block"},a.jobTitle))),n.a.createElement(E.a,{sm:6},n.a.createElement(y.a,{className:"form-group has-float-label  mb-4"},n.a.createElement(M.a,null,n.a.createElement(p.a,{id:"user.country"})),n.a.createElement(T.a,{name:"country",render:e=>{const{field:a}=e,{errors:l,touched:t}=e.form,r=l.country&&t.country?"hasError":"",s=[n.a.createElement("option",{key:"default",value:"Please Select"},"Please Select"),...O.a.map((e,a)=>n.a.createElement("option",{key:a,value:e.value}," ",e.label," "))];return n.a.createElement("select",Object.assign({className:"form-control",value:a.value},a,{id:r}),s)}}),a.country&&t.country&&n.a.createElement("div",{className:"invalid-feedback d-block"},a.country)))),n.a.createElement("div",{className:"d-flex justify-content-end align-items-center"},n.a.createElement(S.a,{color:"primary",className:"btn-shadow btn-multiple-state ".concat(s?"show-spinner":""),size:"lg"},n.a.createElement("span",{className:"spinner d-inline-block"},n.a.createElement("span",{className:"bounce1"}),n.a.createElement("span",{className:"bounce2"}),n.a.createElement("span",{className:"bounce3"})),n.a.createElement("span",{className:"label"},n.a.createElement(p.a,{id:"users.save"})))))}))))))}),k=l(119);var G=e=>{let{history:a,user:l}=e;const[r,s]=Object(t.useState)(!1);return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,null,n.a.createElement(E.a,{sm:{size:8,offset:2},className:"mb-4"},n.a.createElement(h.a,null,n.a.createElement(k.a,{className:"pt-4 pl-4"},n.a.createElement("span",null,"Change Password")),n.a.createElement(g.a,null,n.a.createElement(T.c,{initialValues:{password:"",confirmPassword:""},onSubmit:e=>{s(!0);const a={...e};a.userId=l._id,N.a.post("/api/users/change-password",a).then(e=>e.data).then(e=>{s(!1),A.b.success("The password has been changed successfully","Succcess!")}).catch(e=>{s(!1),A.b.warning(e.message,"Error!")})},validationSchema:C.a().shape({password:C.c().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:C.c().oneOf([C.b("password"),null],"Passwords must match").required("Confirm Password is required")})},e=>{let{errors:a,touched:l}=e;return n.a.createElement(T.b,null,n.a.createElement(y.a,{row:!0},n.a.createElement(E.a,{sm:12},n.a.createElement(y.a,{className:"form-group has-float-label  mb-4"},n.a.createElement(M.a,null,n.a.createElement(p.a,{id:"user.new-password"})),n.a.createElement(T.a,{className:"form-control",type:"password",name:"password"}),a.password&&l.password&&n.a.createElement("div",{className:"invalid-feedback d-block"},a.password))),n.a.createElement(E.a,{sm:12},n.a.createElement(y.a,{className:"form-group has-float-label  mb-4"},n.a.createElement(M.a,null,n.a.createElement(p.a,{id:"user.confirm-password"})),n.a.createElement(T.a,{className:"form-control",type:"password",name:"confirmPassword"}),a.confirmPassword&&l.confirmPassword&&n.a.createElement("div",{className:"invalid-feedback d-block"},a.confirmPassword)))),n.a.createElement("div",{className:"d-flex justify-content-end align-items-center"},n.a.createElement(S.a,{color:"primary",className:"btn-shadow btn-multiple-state ".concat(r?"show-spinner":""),size:"lg"},n.a.createElement("span",{className:"spinner d-inline-block"},n.a.createElement("span",{className:"bounce1"}),n.a.createElement("span",{className:"bounce2"}),n.a.createElement("span",{className:"bounce3"})),n.a.createElement("span",{className:"label"},n.a.createElement(p.a,{id:"users.save"})))))}))))))};a.default=Object(s.b)(e=>{let{authUser:a}=e;return{loginUser:a.user}},{})(Object(r.c)(n.a.memo(e=>{let{match:a,history:l,loginUser:r}=e;const[s,u]=Object(t.useState)("details");return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,null,n.a.createElement(E.a,{xxs:"12"},n.a.createElement("div",{className:"mb-2"},n.a.createElement("h1",null,n.a.createElement(p.a,{id:"menu.settings"}))),n.a.createElement(o.a,{tabs:!0,className:"separator-tabs ml-0 mb-5"},n.a.createElement(b.a,null,n.a.createElement(m.a,{className:c()({active:"details"===s,"nav-link":!0}),onClick:()=>u("details"),to:"#",location:{}},n.a.createElement(p.a,{id:"profile.details"}))),n.a.createElement(b.a,null,n.a.createElement(m.a,{className:c()({active:"change-password"===s,"nav-link":!0}),onClick:()=>u("change-password"),to:"#",location:{}},n.a.createElement(p.a,{id:"profile.change-password"})))))),n.a.createElement(i.a,null,n.a.createElement(E.a,{sm:12},n.a.createElement(v.a,{activeTab:s},n.a.createElement(d.a,{tabId:"details"},0!==Object.keys(r).length&&r.constructor===Object&&n.a.createElement(w,{user:r,history:l})),n.a.createElement(d.a,{tabId:"change-password"},0!==Object.keys(r).length&&r.constructor===Object&&n.a.createElement(G,{user:r,history:l}))))))})))},96:function(e,a,l){"use strict";var t=l(7),n=l(11),r=l(3),s=l.n(r),u=l(34),c=l.n(u),i=l(80),o=l.n(i),b=l(83),m=["className","cssModule","color","body","inverse","outline","tag","innerRef"],v={tag:b.q,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},d=function(e){var a=e.className,l=e.cssModule,r=e.color,u=e.body,c=e.inverse,i=e.outline,v=e.tag,d=e.innerRef,p=Object(n.a)(e,m),E=Object(b.m)(o()(a,"card",!!c&&"text-white",!!u&&"card-body",!!r&&(i?"border":"bg")+"-"+r),l);return s.a.createElement(v,Object(t.a)({},p,{className:E,ref:d}))};d.propTypes=v,d.defaultProps={tag:"div"},a.a=d}}]);
//# sourceMappingURL=settings.0853b399.chunk.js.map