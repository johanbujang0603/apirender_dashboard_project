(this["webpackJsonpapirender-dashboard"]=this["webpackJsonpapirender-dashboard"]||[]).push([[19],{103:function(e,a,l){"use strict";l.d(a,"a",(function(){return t}));const t={DRAFT:"draft","WAITING FOR FILES":"waiting","REQUEST QUOTE":"waiting","IN PROGRESS":"progress",REVIEW:"review",COMPLETED:"completed"}},104:function(e,a,l){"use strict";l.d(a,"a",(function(){return r}));var t=l(3),n=l.n(t);const r=e=>{let{label:a,handleChange:l,orgData:r}=e;const[s,c]=Object(t.useState)(null),[u,i]=Object(t.useState)(r?"".concat(r):null);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"avatar-photo"},n.a.createElement("input",{type:"file",accept:"image/*",onChange:e=>(e=>{c(e.target.files[0]),i(URL.createObjectURL(e.target.files[0])),l(e.target.files[0])})(e)}),!s&&!r&&n.a.createElement("div",{className:"avatar-uploader-label"},n.a.createElement("span",null,a)),n.a.createElement("img",{src:u,className:"rounded-circle",width:"200",height:"200"})))}},105:function(e,a,l){"use strict";l.d(a,"a",(function(){return t}));const t=[{value:"AF",label:"Afghanistan"},{value:"AX",label:"Aland Islands"},{value:"AL",label:"Albania"},{value:"DZ",label:"Algeria"},{value:"AS",label:"American Samoa"},{value:"AD",label:"Andorra"},{value:"AO",label:"Angola"},{value:"AI",label:"Anguilla"},{value:"AQ",label:"Antarctica"},{value:"AG",label:"Antigua And Barbuda"},{value:"AR",label:"Argentina"},{value:"AM",label:"Armenia"},{value:"AW",label:"Aruba"},{value:"AU",label:"Australia"},{value:"AT",label:"Austria"},{value:"AZ",label:"Azerbaijan"},{value:"BS",label:"Bahamas"},{value:"BH",label:"Bahrain"},{value:"BD",label:"Bangladesh"},{value:"BB",label:"Barbados"},{value:"BY",label:"Belarus"},{value:"BE",label:"Belgium"},{value:"BZ",label:"Belize"},{value:"BJ",label:"Benin"},{value:"BM",label:"Bermuda"},{value:"BT",label:"Bhutan"},{value:"BO",label:"Bolivia"},{value:"BA",label:"Bosnia And Herzegovina"},{value:"BW",label:"Botswana"},{value:"BV",label:"Bouvet Island"},{value:"BR",label:"Brazil"},{value:"IO",label:"British Indian Ocean Territory"},{value:"BN",label:"Brunei Darussalam"},{value:"BG",label:"Bulgaria"},{value:"BF",label:"Burkina Faso"},{value:"BI",label:"Burundi"},{value:"KH",label:"Cambodia"},{value:"CM",label:"Cameroon"},{value:"CA",label:"Canada"},{value:"CV",label:"Cape Verde"},{value:"KY",label:"Cayman Islands"},{value:"CF",label:"Central African Republic"},{value:"TD",label:"Chad"},{value:"CL",label:"Chile"},{value:"CN",label:"China"},{value:"CX",label:"Christmas Island"},{value:"CC",label:"Cocos (Keeling) Islands"},{value:"CO",label:"Colombia"},{value:"KM",label:"Comoros"},{value:"CG",label:"Congo"},{value:"CD",label:"Congo, Democratic Republic"},{value:"CK",label:"Cook Islands"},{value:"CR",label:"Costa Rica"},{value:"CI",label:"Cote D'Ivoire"},{value:"HR",label:"Croatia"},{value:"CU",label:"Cuba"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"},{value:"DJ",label:"Djibouti"},{value:"DM",label:"Dominica"},{value:"DO",label:"Dominican Republic"},{value:"EC",label:"Ecuador"},{value:"EG",label:"Egypt"},{value:"SV",label:"El Salvador"},{value:"GQ",label:"Equatorial Guinea"},{value:"ER",label:"Eritrea"},{value:"EE",label:"Estonia"},{value:"ET",label:"Ethiopia"},{value:"FK",label:"Falkland Islands (Malvinas)"},{value:"FO",label:"Faroe Islands"},{value:"FJ",label:"Fiji"},{value:"FI",label:"Finland"},{value:"FR",label:"France"},{value:"GF",label:"French Guiana"},{value:"PF",label:"French Polynesia"},{value:"TF",label:"French Southern Territories"},{value:"GA",label:"Gabon"},{value:"GM",label:"Gambia"},{value:"GE",label:"Georgia"},{value:"DE",label:"Germany"},{value:"GH",label:"Ghana"},{value:"GI",label:"Gibraltar"},{value:"GR",label:"Greece"},{value:"GL",label:"Greenland"},{value:"GD",label:"Grenada"},{value:"GP",label:"Guadeloupe"},{value:"GU",label:"Guam"},{value:"GT",label:"Guatemala"},{value:"GG",label:"Guernsey"},{value:"GN",label:"Guinea"},{value:"GW",label:"Guinea-Bissau"},{value:"GY",label:"Guyana"},{value:"HT",label:"Haiti"},{value:"HM",label:"Heard Island & Mcdonald Islands"},{value:"VA",label:"Holy See (Vatican City State)"},{value:"HN",label:"Honduras"},{value:"HK",label:"Hong Kong"},{value:"HU",label:"Hungary"},{value:"IS",label:"Iceland"},{value:"IN",label:"India"},{value:"ID",label:"Indonesia"},{value:"IR",label:"Iran, Islamic Republic Of"},{value:"IQ",label:"Iraq"},{value:"IE",label:"Ireland"},{value:"IM",label:"Isle Of Man"},{value:"IL",label:"Israel"},{value:"IT",label:"Italy"},{value:"JM",label:"Jamaica"},{value:"JP",label:"Japan"},{value:"JE",label:"Jersey"},{value:"JO",label:"Jordan"},{value:"KZ",label:"Kazakhstan"},{value:"KE",label:"Kenya"},{value:"KI",label:"Kiribati"},{value:"KR",label:"Korea"},{value:"KW",label:"Kuwait"},{value:"KG",label:"Kyrgyzstan"},{value:"LA",label:"Lao People's Democratic Republic"},{value:"LV",label:"Latvia"},{value:"LB",label:"Lebanon"},{value:"LS",label:"Lesotho"},{value:"LR",label:"Liberia"},{value:"LY",label:"Libyan Arab Jamahiriya"},{value:"LI",label:"Liechtenstein"},{value:"LT",label:"Lithuania"},{value:"LU",label:"Luxembourg"},{value:"MO",label:"Macao"},{value:"MK",label:"Macedonia"},{value:"MG",label:"Madagascar"},{value:"MW",label:"Malawi"},{value:"MY",label:"Malaysia"},{value:"MV",label:"Maldives"},{value:"ML",label:"Mali"},{value:"MT",label:"Malta"},{value:"MH",label:"Marshall Islands"},{value:"MQ",label:"Martinique"},{value:"MR",label:"Mauritania"},{value:"MU",label:"Mauritius"},{value:"YT",label:"Mayotte"},{value:"MX",label:"Mexico"},{value:"FM",label:"Micronesia, Federated States Of"},{value:"MD",label:"Moldova"},{value:"MC",label:"Monaco"},{value:"MN",label:"Mongolia"},{value:"ME",label:"Montenegro"},{value:"MS",label:"Montserrat"},{value:"MA",label:"Morocco"},{value:"MZ",label:"Mozambique"},{value:"MM",label:"Myanmar"},{value:"NA",label:"Namibia"},{value:"NR",label:"Nauru"},{value:"NP",label:"Nepal"},{value:"NL",label:"Netherlands"},{value:"AN",label:"Netherlands Antilles"},{value:"NC",label:"New Caledonia"},{value:"NZ",label:"New Zealand"},{value:"NI",label:"Nicaragua"},{value:"NE",label:"Niger"},{value:"NG",label:"Nigeria"},{value:"NU",label:"Niue"},{value:"NF",label:"Norfolk Island"},{value:"MP",label:"Northern Mariana Islands"},{value:"NO",label:"Norway"},{value:"OM",label:"Oman"},{value:"PK",label:"Pakistan"},{value:"PW",label:"Palau"},{value:"PS",label:"Palestinian Territory, Occupied"},{value:"PA",label:"Panama"},{value:"PG",label:"Papua New Guinea"},{value:"PY",label:"Paraguay"},{value:"PE",label:"Peru"},{value:"PH",label:"Philippines"},{value:"PN",label:"Pitcairn"},{value:"PL",label:"Poland"},{value:"PT",label:"Portugal"},{value:"PR",label:"Puerto Rico"},{value:"QA",label:"Qatar"},{value:"RE",label:"Reunion"},{value:"RO",label:"Romania"},{value:"RU",label:"Russian Federation"},{value:"RW",label:"Rwanda"},{value:"BL",label:"Saint Barthelemy"},{value:"SH",label:"Saint Helena"},{value:"KN",label:"Saint Kitts And Nevis"},{value:"LC",label:"Saint Lucia"},{value:"MF",label:"Saint Martin"},{value:"PM",label:"Saint Pierre And Miquelon"},{value:"VC",label:"Saint Vincent And Grenadines"},{value:"WS",label:"Samoa"},{value:"SM",label:"San Marino"},{value:"ST",label:"Sao Tome And Principe"},{value:"SA",label:"Saudi Arabia"},{value:"SN",label:"Senegal"},{value:"RS",label:"Serbia"},{value:"SC",label:"Seychelles"},{value:"SL",label:"Sierra Leone"},{value:"SG",label:"Singapore"},{value:"SK",label:"Slovakia"},{value:"SI",label:"Slovenia"},{value:"SB",label:"Solomon Islands"},{value:"SO",label:"Somalia"},{value:"ZA",label:"South Africa"},{value:"GS",label:"South Georgia And Sandwich Isl."},{value:"ES",label:"Spain"},{value:"LK",label:"Sri Lanka"},{value:"SD",label:"Sudan"},{value:"SR",label:"Suriname"},{value:"SJ",label:"Svalbard And Jan Mayen"},{value:"SZ",label:"Swaziland"},{value:"SE",label:"Sweden"},{value:"CH",label:"Switzerland"},{value:"SY",label:"Syrian Arab Republic"},{value:"TW",label:"Taiwan"},{value:"TJ",label:"Tajikistan"},{value:"TZ",label:"Tanzania"},{value:"TH",label:"Thailand"},{value:"TL",label:"Timor-Leste"},{value:"TG",label:"Togo"},{value:"TK",label:"Tokelau"},{value:"TO",label:"Tonga"},{value:"TT",label:"Trinidad And Tobago"},{value:"TN",label:"Tunisia"},{value:"TR",label:"Turkey"},{value:"TM",label:"Turkmenistan"},{value:"TC",label:"Turks And Caicos Islands"},{value:"TV",label:"Tuvalu"},{value:"UG",label:"Uganda"},{value:"UA",label:"Ukraine"},{value:"AE",label:"United Arab Emirates"},{value:"GB",label:"United Kingdom"},{value:"US",label:"United States"},{value:"UM",label:"United States Outlying Islands"},{value:"UY",label:"Uruguay"},{value:"UZ",label:"Uzbekistan"},{value:"VU",label:"Vanuatu"},{value:"VE",label:"Venezuela"},{value:"VN",label:"Viet Nam"},{value:"VG",label:"Virgin Islands, British"},{value:"VI",label:"Virgin Islands, U.S."},{value:"WF",label:"Wallis And Futuna"},{value:"EH",label:"Western Sahara"},{value:"YE",label:"Yemen"},{value:"ZM",label:"Zambia"},{value:"ZW",label:"Zimbabwe"}]},174:function(e,a,l){"use strict";var t=l(3),n=l.n(t),r=l(8),s=l.n(r),c=l(216),u=l(96),i=l(120),m=l(403),o=l(404),b=l(151),d=l(20),v=l(91),p=l(99),E=l(84),f=l(78),N=l(79),h=l(104);a.a=Object(d.b)(null,{})(e=>{let{history:a,user:l}=e;const[r]=Object(t.useState)(l.email),[d]=Object(t.useState)(""),[g]=Object(t.useState)(""),[S]=Object(t.useState)(l.first_name),[y]=Object(t.useState)(l.last_name),[P]=Object(t.useState)("admin"),[w,C]=Object(t.useState)(!1),[M,O]=Object(t.useState)(null),j={email:r,firstName:S,lastName:y,password:d,confirmPassword:g};return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,n.a.createElement(f.a,{sm:{size:8,offset:2},className:"mb-4"},n.a.createElement(u.a,null,n.a.createElement(i.a,null,n.a.createElement(v.c,{initialValues:j,onSubmit:e=>{C(!0);const t=new FormData;t.append("avatar",M),t.append("id",l._id),t.append("first_name",e.firstName),t.append("last_name",e.lastName),t.append("email",e.email),t.append("password",e.password),t.append("is_new",!!M),s.a.post("/api/users/update-admin",t,{headers:{"content-type":"multipart/form-data"}}).then(e=>e.data).then(e=>{C(!1),E.b.success("The user has been updated successfully","Succcess!",3e3,null,null,""),a.push("/admin/users/list")}).catch(e=>{C(!1),E.b.success(e.message,"Error!",3e3,null,null,"")})},validationSchema:p.a().shape({firstName:p.c().required("First Name is required"),lastName:p.c().required("Last Name is required"),email:p.c().email("Email is invalid").required("Email is required"),password:p.c().min(6,"Password must be at least 6 characters"),confirmPassword:p.c().oneOf([p.b("password"),null],"Passwords must match")})},e=>{let{errors:a,touched:t}=e;return n.a.createElement(v.b,null,n.a.createElement(m.a,{row:!0},n.a.createElement(f.a,{sm:{size:4,offset:4}},n.a.createElement(m.a,{className:"form-group has-float-label mb-4 text-center"},n.a.createElement("div",{className:"d-flex justify-content-center p-1"},n.a.createElement(h.a,{label:"Upload Profile Pircutre or Company Logo",handleChange:e=>O(e),orgData:l.avatar}))))),n.a.createElement(m.a,{className:"form-group has-float-label  mb-4"},n.a.createElement(o.a,null,n.a.createElement(N.a,{id:"user.firstname"})),n.a.createElement(v.a,{className:"form-control",type:"text",name:"firstName"}),a.firstName&&t.firstName&&n.a.createElement("div",{className:"invalid-feedback d-block"},a.firstName)),n.a.createElement(m.a,{className:"form-group has-float-label  mb-4"},n.a.createElement(o.a,null,n.a.createElement(N.a,{id:"user.lastname"})),n.a.createElement(v.a,{className:"form-control",type:"text",name:"lastName"}),a.lastName&&t.lastName&&n.a.createElement("div",{className:"invalid-feedback d-block"},a.lastName)),n.a.createElement(m.a,{className:"form-group has-float-label  mb-4"},n.a.createElement(o.a,null,n.a.createElement(N.a,{id:"user.email"})),n.a.createElement(v.a,{className:"form-control",name:"email"}),a.email&&t.email&&n.a.createElement("div",{className:"invalid-feedback d-block"},a.email)),n.a.createElement(m.a,{className:"form-group has-float-label  mb-4"},n.a.createElement(o.a,null,n.a.createElement(N.a,{id:"user.password"})),n.a.createElement(v.a,{className:"form-control",type:"password",name:"password"}),a.password&&t.password&&n.a.createElement("div",{className:"invalid-feedback d-block"},a.password)),n.a.createElement(m.a,{className:"form-group has-float-label  mb-4"},n.a.createElement(o.a,null,n.a.createElement(N.a,{id:"user.confirm-password"})),n.a.createElement(v.a,{className:"form-control",type:"password",name:"confirmPassword"}),a.confirmPassword&&t.confirmPassword&&n.a.createElement("div",{className:"invalid-feedback d-block"},a.confirmPassword)),n.a.createElement("div",{className:"d-flex justify-content-end align-items-center"},n.a.createElement(b.a,{color:"primary",className:"btn-shadow btn-multiple-state ".concat(w?"show-spinner":""),size:"lg"},n.a.createElement("span",{className:"spinner d-inline-block"},n.a.createElement("span",{className:"bounce1"}),n.a.createElement("span",{className:"bounce2"}),n.a.createElement("span",{className:"bounce3"})),n.a.createElement("span",{className:"label"},n.a.createElement(N.a,{id:"users.save"})))))}))))))})},175:function(e,a,l){"use strict";var t=l(3),n=l.n(t),r=l(8),s=l.n(r),c=l(216),u=l(96),i=l(120),m=l(403),o=l(404),b=l(151),d=l(20),v=l(91),p=l(99),E=l(84),f=l(78),N=l(79),h=l(104),g=l(105);const S=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;a.a=Object(d.b)(null,{})(e=>{let{history:a,user:l}=e;const[r]=Object(t.useState)(l.email),[d]=Object(t.useState)(""),[y]=Object(t.useState)(""),[P]=Object(t.useState)(l.first_name),[w]=Object(t.useState)(l.last_name),[C]=Object(t.useState)(l.job_title),[M]=Object(t.useState)(l.phone_number),[O]=Object(t.useState)(l.company_name),[j]=Object(t.useState)(l.country),[A]=Object(t.useState)("customer"),[T,k]=Object(t.useState)(!1),[I,G]=Object(t.useState)(null),B={firstName:P,lastName:w,email:r,confirmPassword:y,password:d,companyName:O,jobTitle:C,country:j,role:A,phoneNumber:M};return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,n.a.createElement(f.a,{sm:{size:8,offset:2},className:"mb-4"},n.a.createElement(u.a,null,n.a.createElement(i.a,null,n.a.createElement(v.c,{initialValues:B,onSubmit:e=>{k(!0);let t=new FormData;t.append("avatar",I),t.append("id",l._id),t.append("first_name",e.firstName),t.append("last_name",e.lastName),t.append("phone_number",e.phoneNumber),t.append("email",e.email),t.append("password",e.password),t.append("job_title",e.jobTitle),t.append("company_name",e.companyName),t.append("country",e.country),t.append("is_new",!!I),s.a.post("/api/users/update-customer",t,{headers:{"content-type":"multipart/form-data"}}).then(e=>e.data).then(e=>{k(!1),E.b.success("The user has been updated successfully","Succcess!",3e3,null,null,""),a.push("/admin/users/list")}).catch(e=>{k(!1),E.b.success(e.message,"Error!",3e3,null,null,"")})},validationSchema:p.a().shape({firstName:p.c().required("Full Name is required"),lastName:p.c().required("Last Name is required"),jobTitle:p.c().required("Job title is required"),companyName:p.c().required("Company name is required"),email:p.c().email("Email is invalid").required("Email is required"),emailPreference:p.c().email("Email Preference is invalid").required("Email Preference is required"),password:p.c().min(6,"Password must be at least 6 characters"),confirmPassword:p.c().oneOf([p.b("password")],"Passwords must match"),country:p.c().required("Address is required"),phoneNumber:p.c().matches(S,"Phone number is not valid")})},e=>{let{errors:a,touched:t}=e;return n.a.createElement(v.b,null,n.a.createElement(m.a,{row:!0},n.a.createElement(f.a,{sm:{size:4,offset:4}},n.a.createElement(m.a,{className:"form-group has-float-label mb-4 text-center"},n.a.createElement("div",{className:"d-flex justify-content-center p-1"},n.a.createElement(h.a,{label:"Upload Profile Pircutre or Company Logo",handleChange:e=>G(e),orgData:l.avatar})))),n.a.createElement(f.a,{sm:6},n.a.createElement(m.a,{className:"form-group has-float-label  mb-4"},n.a.createElement(o.a,null,n.a.createElement(N.a,{id:"user.firstname"})),n.a.createElement(v.a,{className:"form-control",type:"text",name:"firstName"}),a.firstName&&t.firstName&&n.a.createElement("div",{className:"invalid-feedback d-block"},a.firstName))),n.a.createElement(f.a,{sm:6},n.a.createElement(m.a,{className:"form-group has-float-label  mb-4"},n.a.createElement(o.a,null,n.a.createElement(N.a,{id:"user.lastname"})),n.a.createElement(v.a,{className:"form-control",type:"text",name:"lastName"}),a.lastName&&t.lastName&&n.a.createElement("div",{className:"invalid-feedback d-block"},a.lastName))),n.a.createElement(f.a,{sm:12},n.a.createElement(m.a,{className:"form-group has-float-label  mb-4"},n.a.createElement(o.a,null,n.a.createElement(N.a,{id:"user.phone_number"})),n.a.createElement(v.a,{className:"form-control",name:"phoneNumber"}),a.phoneNumber&&t.phoneNumber&&n.a.createElement("div",{className:"invalid-feedback d-block"},a.phoneNumber))),n.a.createElement(f.a,{sm:12},n.a.createElement(m.a,{className:"form-group has-float-label  mb-4"},n.a.createElement(o.a,null,n.a.createElement(N.a,{id:"user.email"})),n.a.createElement(v.a,{className:"form-control",name:"email"}),a.email&&t.email&&n.a.createElement("div",{className:"invalid-feedback d-block"},a.email))),n.a.createElement(f.a,{sm:12},n.a.createElement(m.a,{className:"form-group has-float-label  mb-4"},n.a.createElement(o.a,null,n.a.createElement(N.a,{id:"user.password",defaultValue:d,value:d})),n.a.createElement(v.a,{className:"form-control",type:"password",name:"password"}),a.password&&t.password&&n.a.createElement("div",{className:"invalid-feedback d-block"},a.password))),n.a.createElement(f.a,{sm:12},n.a.createElement(m.a,{className:"form-group has-float-label  mb-4"},n.a.createElement(o.a,null,n.a.createElement(N.a,{id:"user.confirm-password",defaultValue:y,value:y})),n.a.createElement(v.a,{className:"form-control",type:"password",name:"confirmPassword"}),a.confirmPassword&&t.confirmPassword&&n.a.createElement("div",{className:"invalid-feedback d-block"},a.confirmPassword))),n.a.createElement(f.a,{sm:6},n.a.createElement(m.a,{className:"form-group has-float-label  mb-4"},n.a.createElement(o.a,null,n.a.createElement(N.a,{id:"user.companyname",defaultValue:O,value:O})),n.a.createElement(v.a,{className:"form-control",type:"text",name:"companyName"}),a.companyName&&t.companyName&&n.a.createElement("div",{className:"invalid-feedback d-block"},a.companyName))),n.a.createElement(f.a,{sm:6},n.a.createElement(m.a,{className:"form-group has-float-label  mb-4"},n.a.createElement(o.a,null,n.a.createElement(N.a,{id:"user.job-title",defaultValue:C,value:C})),n.a.createElement(v.a,{className:"form-control",type:"text",name:"jobTitle"}),a.jobTitle&&t.jobTitle&&n.a.createElement("div",{className:"invalid-feedback d-block"},a.jobTitle))),n.a.createElement(f.a,{sm:12},n.a.createElement(m.a,{className:"form-group has-float-label  mb-4"},n.a.createElement(o.a,null,n.a.createElement(N.a,{id:"user.country",defaultValue:j,value:j})),n.a.createElement(v.a,{name:"country",render:e=>{const{field:a}=e,{errors:l,touched:t}=e.form,r=l.country&&t.country?"hasError":"",s=[n.a.createElement("option",{key:"default",value:"Please Select"},"Please Select"),...g.a.map((e,a)=>n.a.createElement("option",{key:a,value:e.value}," ",e.label," "))];return n.a.createElement("select",Object.assign({className:"form-control",value:a.value},a,{id:r}),s)}}),a.country&&t.country&&n.a.createElement("div",{className:"invalid-feedback d-block"},a.country)))),n.a.createElement("div",{className:"d-flex justify-content-end align-items-center"},n.a.createElement(b.a,{type:"submit",color:"primary",className:"btn-shadow",size:"lg"},n.a.createElement(N.a,{id:"users.save"}))))}))))))})},417:function(e,a,l){"use strict";l.r(a);var t=l(3),n=l.n(t),r=l(89);const s=n.a.lazy(()=>Promise.all([l.e(5),l.e(35),l.e(2),l.e(20)]).then(l.bind(null,394))),c=n.a.lazy(()=>Promise.all([l.e(5),l.e(35),l.e(2),l.e(20)]).then(l.bind(null,400))),u=n.a.lazy(()=>Promise.all([l.e(5),l.e(35),l.e(2),l.e(20)]).then(l.bind(null,392))),i=n.a.lazy(()=>Promise.all([l.e(5),l.e(35),l.e(2),l.e(20)]).then(l.bind(null,395))),m=n.a.lazy(()=>Promise.all([l.e(5),l.e(35),l.e(2),l.e(20)]).then(l.bind(null,399))),o=n.a.lazy(()=>Promise.all([l.e(5),l.e(6),l.e(36),l.e(8)]).then(l.bind(null,391))),b=n.a.lazy(()=>Promise.all([l.e(6),l.e(37),l.e(9)]).then(l.bind(null,393)));a.default=e=>{let{match:a}=e;return n.a.createElement(t.Suspense,{fallback:n.a.createElement("div",{className:"loading"})},n.a.createElement(r.d,null,n.a.createElement(r.a,{exact:!0,from:"".concat(a.url,"/"),to:"".concat(a.url,"/new-project")}),n.a.createElement(r.b,{path:"".concat(a.url,"/new-project"),render:e=>n.a.createElement(s,e)}),n.a.createElement(r.b,{path:"".concat(a.url,"/list"),render:e=>n.a.createElement(m,e)}),n.a.createElement(r.b,{path:"".concat(a.url,"/details/:id"),render:e=>n.a.createElement(c,e)}),n.a.createElement(r.b,{path:"".concat(a.url,"/add-service/:id"),render:e=>n.a.createElement(u,e)}),n.a.createElement(r.b,{path:"".concat(a.url,"/payment/:id"),render:e=>n.a.createElement(i,e)}),n.a.createElement(r.b,{path:"".concat(a.url,"/briefing/:id"),render:e=>n.a.createElement(o,e)}),n.a.createElement(r.b,{path:"".concat(a.url,"/view-briefing/:id"),render:e=>n.a.createElement(b,e)}),n.a.createElement(r.a,{to:"/error"})))}},419:function(e,a,l){"use strict";l.r(a);var t=l(3),n=l.n(t),r=l(89);const s=n.a.lazy(()=>Promise.all([l.e(2),l.e(18)]).then(l.bind(null,398))),c=n.a.lazy(()=>Promise.all([l.e(2),l.e(17)]).then(l.bind(null,396))),u=n.a.lazy(()=>Promise.all([l.e(6),l.e(37),l.e(9)]).then(l.bind(null,390)));a.default=e=>{let{match:a}=e;return n.a.createElement(t.Suspense,{fallback:n.a.createElement("div",{className:"loading"})},n.a.createElement(r.d,null,n.a.createElement(r.a,{exact:!0,from:"".concat(a.url,"/"),to:"".concat(a.url,"/list")}),n.a.createElement(r.b,{path:"".concat(a.url,"/list"),render:e=>n.a.createElement(s,e)}),n.a.createElement(r.b,{path:"".concat(a.url,"/details/:id"),render:e=>n.a.createElement(c,e)}),n.a.createElement(r.b,{path:"".concat(a.url,"/briefing/:id"),render:e=>n.a.createElement(u,e)}),n.a.createElement(r.a,{to:"/error"})))}},420:function(e,a,l){"use strict";l.r(a);var t=l(3),n=l.n(t),r=l(128),s=l(20),c=l(216),u=l(8),i=l.n(u),m=l(79),o=l(78),b=l(174),d=l(175);a.default=Object(s.b)(e=>{let{authUser:a}=e;return{loginUser:a.user}},{})(Object(r.c)(n.a.memo(e=>{let{match:a,history:l,loginUser:r}=e;const[s,u]=Object(t.useState)({}),[v,p]=Object(t.useState)(!1),E=r.role;return Object(t.useEffect)(()=>{!async function(){const e=r._id;await i.a.post("/api/users/detail?id=".concat(e)).then(e=>e.data).then(e=>{u(e.data),p(!0)})}()},[r]),v?n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,n.a.createElement(o.a,{xxs:"12"},n.a.createElement("div",{className:"mb-2"},n.a.createElement("h1",null,n.a.createElement(m.a,{id:"menu.settings"}))),n.a.createElement(o.b,{className:"mb-5"}))),"admin"===E?n.a.createElement(b.a,{user:s,history:l}):n.a.createElement(d.a,{user:s,history:l})):n.a.createElement("div",{className:"loading"})})))},447:function(e,a,l){"use strict";l.r(a);var t=l(3),n=l.n(t),r=l(8),s=l.n(r),c=l(414),u=l(119),i=l(345),m=l(80),o=l.n(m),b=l(421),d=l(422),v=l(410),p=l(453),E=l(452),f=l(408),N=l(423);var h=e=>{let{page:a,pages:l,canPrevious:r,canNext:s,pageSizeOptions:c,showPageSizeOptions:u,showPageJump:i,defaultPageSize:m,onPageChange:o,onPageSizeChange:h,paginationMaxSize:g}=e;const[S,y]=Object(t.useState)(a),[P,w]=Object(t.useState)(m);Object(t.useEffect)(()=>{y(a)},[a]);const C=e=>{const t=(e=>{let t=e;return Number.isNaN(e)&&(t=a),Math.min(Math.max(t,0),l-1)})(e);t!==S&&(y(t),o(t))};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"text-center"},i&&n.a.createElement("div",{className:"float-left pt-2"},n.a.createElement("span",null,"Page "),n.a.createElement(p.a,{className:"d-inline-block"},n.a.createElement(E.a,{caret:!0,color:"outline-primary",size:"xs"},S+1),n.a.createElement(f.a,{direction:"left"},(()=>{const e=[];for(let a=0;a<l;a+=1)e.push(n.a.createElement(v.a,{key:a,onClick:()=>C(a)},a+1));return e})())),n.a.createElement("span",null," of "),l),n.a.createElement(N.a,{className:"d-inline-block",size:"sm",listClassName:"justify-content-center","aria-label":"Page navigation example"},n.a.createElement(b.a,{className:"".concat(!r&&"disabled")},n.a.createElement(d.a,{className:"prev",onClick:()=>{r&&C(a-1)},disabled:!r},n.a.createElement("i",{className:"simple-icon-arrow-left"}))),(()=>{const e=l;let a=l;const t=S;let r=0;const s=g;s&&a>s&&(r=Math.max(t+1-Math.floor(s/2),1),a=r+s-1,a>e&&(a=e,r=a-s+1),r-=1);const c=[];for(let l=r;l<a;l+=1){const e=t===l;c.push(n.a.createElement(b.a,{key:l,active:e},n.a.createElement(d.a,{onClick:()=>{C(l)}},l+1)))}return c})(),n.a.createElement(b.a,{className:"".concat(!s&&"disabled")},n.a.createElement(d.a,{className:"next",onClick:()=>{s&&C(a+1)},disabled:!s},n.a.createElement("i",{className:"simple-icon-arrow-right"})))),u&&n.a.createElement("div",{className:"float-right pt-2"},n.a.createElement("span",{className:"text-muted text-small mr-1"},"Items "),n.a.createElement(p.a,{className:"d-inline-block"},n.a.createElement(E.a,{caret:!0,color:"outline-primary",size:"xs"},P),n.a.createElement(f.a,{right:!0},c.map((e,a)=>n.a.createElement(v.a,{key:a,onClick:()=>(e=>{h(e),w(e)})(e)},e)))))))},g=l(103),S=l(100),y=l.n(S);function P(e){let{columns:a,data:l,divided:t=!1,defaultPageSize:r=6}=e;const{getTableProps:s,getTableBodyProps:c,prepareRow:u,headerGroups:m,page:b,canPreviousPage:d,canNextPage:v,pageCount:p,gotoPage:E,setPageSize:f,state:{pageIndex:N,pageSize:g}}=Object(i.useTable)({columns:a,data:l,initialState:{pageIndex:0,pageSize:r}},i.useSortBy,i.usePagination);return n.a.createElement(n.a.Fragment,null,n.a.createElement("table",Object.assign({},s(),{className:"r-table table ".concat(o()({"table-divided":t}))}),n.a.createElement("thead",null,m.map(e=>n.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((e,a)=>n.a.createElement("th",Object.assign({key:"th_".concat(a)},e.getHeaderProps(e.getSortByToggleProps()),{className:e.isSorted?e.isSortedDesc?"sorted-desc":"sorted-asc":""}),e.render("Header"),n.a.createElement("span",null)))))),n.a.createElement("tbody",c(),b.map(e=>(u(e),n.a.createElement("tr",e.getRowProps(),e.cells.map((e,a)=>n.a.createElement("td",Object.assign({key:"td_".concat(a)},e.getCellProps({className:e.column.cellClass})),e.render("Cell")))))))),n.a.createElement(h,{page:N,pages:p,canPrevious:d,canNext:v,pageSizeOptions:[4,10,20,30,40,50],showPageSizeOptions:!1,showPageJump:!1,defaultPageSize:g,onPageChange:e=>E(e),onPageSizeChange:e=>f(e),paginationMaxSize:p}))}a.default=e=>{let{match:a}=e;const[l,r]=n.a.useState([]);Object(t.useEffect)(()=>{!async function(){await s.a.get("/api/services/order-list").then(e=>e.data).then(e=>{console.log(e);let a=[];e.map(e=>{a.push({name:e.service_id.name,project_name:e.service_id.project.project_name,user_name:e.service_id.project.user_id.first_name+" "+e.service_id.project.user_id.last_name,total_price:e.service_id.total_price,status:e.service_id.status,payment_day:e.date})}),r(a)})}()},[]);const i=n.a.useMemo(()=>[{Header:"Name",accessor:"name",cellClass:"list-item-heading w-20",Cell:e=>n.a.createElement(n.a.Fragment,null,e.value)},{Header:"Project Name",accessor:"project_name",cellClass:"text-muted  w-20",Cell:e=>n.a.createElement(n.a.Fragment,null,e.value)},{Header:"User Name",accessor:"user_name",cellClass:"text-muted  w-20",Cell:e=>n.a.createElement(n.a.Fragment,null,e.value)},{Header:"Total Price",accessor:"total_price",cellClass:"text-muted  w-10",Cell:e=>n.a.createElement(n.a.Fragment,null,e.value)},{Header:"Status",accessor:"status",cellClass:"text-muted  w-10",Cell:e=>n.a.createElement(c.a,{color:g.a[e.value],pill:!0},e.value)},{Header:"Payment Date",accessor:"payment_day",cellClass:"text-muted  w-15",Cell:e=>n.a.createElement(n.a.Fragment,null,y()(e.value).format("LLLL"))}],[]);return n.a.createElement("div",{className:"mb-4"},n.a.createElement(u.a,null),n.a.createElement(P,{columns:i,data:l,divided:!0}))}}}]);
//# sourceMappingURL=projects.3fbbb5cc.chunk.js.map