(this["webpackJsonpapirender-dashboard"]=this["webpackJsonpapirender-dashboard"]||[]).push([[11],{100:function(e,a,t){"use strict";var r=t(7),o=t(11),n=t(3),s=t.n(n),i=t(34),l=t.n(i),c=t(80),u=t.n(c),d=t(83),m=["className","cssModule","color","body","inverse","outline","tag","innerRef"],p={tag:d.q,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},h=function(e){var a=e.className,t=e.cssModule,n=e.color,i=e.body,l=e.inverse,c=e.outline,p=e.tag,h=e.innerRef,g=Object(o.a)(e,m),f=Object(d.m)(u()(a,"card",!!l&&"text-white",!!i&&"card-body",!!n&&(c?"border":"bg")+"-"+n),t);return s.a.createElement(p,Object(r.a)({},g,{className:f,ref:h}))};h.propTypes=p,h.defaultProps={tag:"div"},a.a=h},119:function(e,a,t){"use strict";var r=t(7),o=t(11),n=t(3),s=t.n(n),i=t(34),l=t.n(i),c=t(80),u=t.n(c),d=t(83),m=["className","cssModule","tag"],p={tag:d.q,className:l.a.string,cssModule:l.a.object},h=function(e){var a=e.className,t=e.cssModule,n=e.tag,i=Object(o.a)(e,m),l=Object(d.m)(u()(a,"card-title"),t);return s.a.createElement(n,Object(r.a)({},i,{className:l}))};h.propTypes=p,h.defaultProps={tag:"div"},a.a=h},134:function(e,a,t){"use strict";var r=t(7),o=t(11),n=t(3),s=t.n(n),i=t(34),l=t.n(i),c=t(80),u=t.n(c),d=t(83),m=["className","cssModule","innerRef","tag"],p={tag:d.q,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},h=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,i=e.tag,l=Object(o.a)(e,m),c=Object(d.m)(u()(a,"card-body"),t);return s.a.createElement(i,Object(r.a)({},l,{className:c,ref:n}))};h.propTypes=p,h.defaultProps={tag:"div"},a.a=h},160:function(e,a,t){"use strict";var r=t(7),o=t(11),n=t(88),s=t(87),i=t(3),l=t.n(i),c=t(34),u=t.n(c),d=t(80),m=t.n(d),p=t(83),h=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],g={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(n.a)(t)),t.focus=t.focus.bind(Object(n.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,n=e.type,s=e.bsSize,i=e.valid,c=e.invalid,u=e.tag,d=e.addon,g=e.plaintext,f=e.innerRef,b=Object(o.a)(e,h),y=["radio","checkbox"].indexOf(n)>-1,v=new RegExp("\\D","g"),w=u||("select"===n||"textarea"===n?n:"input"),E="form-control";g?(E+="-plaintext",w=u||"input"):"file"===n?E+="-file":"range"===n?E+="-range":y&&(E=d?null:"form-check-input"),b.size&&v.test(b.size)&&(Object(p.s)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=b.size,delete b.size);var j=Object(p.m)(m()(a,c&&"is-invalid",i&&"is-valid",!!s&&"form-control-"+s,E),t);return("input"===w||u&&"function"===typeof u)&&(b.type=n),b.children&&!g&&"select"!==n&&"string"===typeof w&&"select"!==w&&(Object(p.s)('Input with a type of "'+n+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),l.a.createElement(w,Object(r.a)({},b,{ref:f,className:j,"aria-invalid":c}))},a}(l.a.Component);f.propTypes=g,f.defaultProps={type:"text"},a.a=f},227:function(e,a,t){"use strict";var r=t(7),o=t(11),n=t(88),s=t(87),i=t(3),l=t.n(i),c=t(34),u=t.n(c),d=t(80),m=t.n(d),p=t(83),h=["className","cssModule","inline","tag","innerRef"],g={children:u.a.node,inline:u.a.bool,tag:p.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(n.a)(t)),t.submit=t.submit.bind(Object(n.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,n=e.inline,s=e.tag,i=e.innerRef,c=Object(o.a)(e,h),u=Object(p.m)(m()(a,!!n&&"form-inline"),t);return l.a.createElement(s,Object(r.a)({},c,{ref:i,className:u}))},a}(i.Component);f.propTypes=g,f.defaultProps={tag:"form"},a.a=f},344:function(e,a,t){"use strict";var r=t(7),o=t(11),n=t(3),s=t.n(n),i=t(34),l=t.n(i),c=t(80),u=t.n(c),d=t(83),m=["className","cssModule","tag"],p={tag:d.q,className:l.a.string,cssModule:l.a.object},h=function(e){var a=e.className,t=e.cssModule,n=e.tag,i=Object(o.a)(e,m),l=Object(d.m)(u()(a,"card-text"),t);return s.a.createElement(n,Object(r.a)({},i,{className:l}))};h.propTypes=p,h.defaultProps={tag:"p"},a.a=h},436:function(e,a,t){"use strict";t.r(a);var r=t(3),o=t.n(r),n=t(216),s=t(100),i=t(134),l=t(119),c=t(344),u=t(227),d=t(401),m=t(160),p=t(150),h=t(7),g=t(11),f=t(34),b=t.n(f),y=t(80),v=t.n(y),w=t(83),E=["className","listClassName","cssModule","children","tag","listTag","aria-label"],j={tag:w.q,listTag:w.q,className:b.a.string,listClassName:b.a.string,cssModule:b.a.object,children:b.a.node,"aria-label":b.a.string},N=function(e){var a=e.className,t=e.listClassName,r=e.cssModule,n=e.children,s=e.tag,i=e.listTag,l=e["aria-label"],c=Object(g.a)(e,E),u=Object(w.m)(v()(a),r),d=Object(w.m)(v()("breadcrumb",t),r);return o.a.createElement(s,Object(h.a)({},c,{className:u,"aria-label":l}),o.a.createElement(i,{className:d},n))};N.propTypes=j,N.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"};var O=N,q=["className","cssModule","active","tag"],x={tag:w.q,active:b.a.bool,className:b.a.string,cssModule:b.a.object},k=function(e){var a=e.className,t=e.cssModule,r=e.active,n=e.tag,s=Object(g.a)(e,q),i=Object(w.m)(v()(a,!!r&&"active","breadcrumb-item"),t);return o.a.createElement(n,Object(h.a)({},s,{className:i,"aria-current":r?"page":void 0}))};k.propTypes=x,k.defaultProps={tag:"li"};var M=k,P=t(82),R=t(79);const T=e=>o.a.createElement(R.a,{id:"menu.".concat(e)}),I=(e,a,t)=>0===t?"":e.split(a)[0]+a,S=e=>{let{match:a}=e;const t=a.path.substr(1);let r=t.split("/");return r[r.length-1].indexOf(":")>-1&&(r=r.filter(e=>-1===e.indexOf(":"))),o.a.createElement(o.a.Fragment,null,o.a.createElement(O,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},r.map((e,a)=>o.a.createElement(M,{key:a,active:r.length===a+1},r.length!==a+1?o.a.createElement(P.b,{to:"/".concat(I(t,e,a))},T(e)):T(e)))))};var D=e=>{let{heading:a,match:t}=e;return o.a.createElement(o.a.Fragment,null,a&&o.a.createElement("h1",null,o.a.createElement(R.a,{id:a})),o.a.createElement(S,{match:t}))},z=t(78);a.default=e=>{let{match:a}=e;return o.a.createElement(o.a.Fragment,null,o.a.createElement(n.a,null,o.a.createElement(z.a,{xxs:"12"},o.a.createElement(D,{heading:"menu.contact-us",match:a}),o.a.createElement(z.b,{className:"mb-5"})),o.a.createElement(z.a,{xxs:"12",className:"mb-4"},o.a.createElement(n.a,null,o.a.createElement(z.a,{xxs:"6"},o.a.createElement(s.a,null,o.a.createElement(i.a,null,o.a.createElement(l.a,null,"Contact Info"),o.a.createElement(c.a,null,o.a.createElement("p",null,"General Enquires: hello@propertyrender.com"),o.a.createElement("p",null,"Sales Enquires: sales@propertyrender.com"),o.a.createElement("p",null,"Orders: orders@propertyrender.com"),o.a.createElement("p",null,"Managing Director: Steven@propertyrender.com"))))),o.a.createElement(z.a,{xxs:"6"},o.a.createElement(s.a,null,o.a.createElement(i.a,null,o.a.createElement(l.a,null,"Send a Message"),o.a.createElement(u.a,null,o.a.createElement(d.a,null,o.a.createElement(m.a,{className:"form-control",name:"name",placeholder:"Name",type:"text"})),o.a.createElement(d.a,null,o.a.createElement(m.a,{className:"form-control",name:"email",placeholder:"E-mail",type:"email"})),o.a.createElement(d.a,null,o.a.createElement(m.a,{className:"form-control",name:"phone",placeholder:"Phone Number",type:"text"})),o.a.createElement(d.a,null,o.a.createElement(m.a,{className:"form-control",name:"message",placeholder:"Your Message Here",type:"textarea"})),o.a.createElement(d.a,null,o.a.createElement(p.a,{type:"submit",color:"danger"},"Submit"))))))))))}},442:function(e,a,t){"use strict";t.r(a);var r=t(3),o=t.n(r),n=t(216),s=t(100),i=t(150),l=t(411),c=t(79),u=t(78);var d=[{question:"How do I obtain a brochure outlining all of your services and prices?",answer:"Please send an email to hello@propertyrender.com or fill out our contact form here, and we will send you a copy of our brochure."},{question:"Do you have any discounts or promotional offers?",answer:"Occasionally we advertise promotional offers and discounts for our services. Please register your business on our platform to receive email updates on our latest promotions and discounts."},{question:"Do we have to sign a contract?",answer:'We may ask you to sign a contract outlining services, fees and schedule for very large 3D rendering projects, however, all orders submitted via phone, email or directly through the client dashboard are bound to our terms and conditions. Please click <a href="https://www.propertyrender.com/terms-conditions/"><b>here</b></a> to view our terms and conditions.'},{question:"What currency are your prices in?",answer:"Our default pricing is in US Dollars, however, the currency can easily be changed in the currency tab on the website and client dashboard."},{question:"Can I change the language on the website?",answer:"You can change the language of the text on the website and dashboard by clicking on the language tab and selecting from 8 different languages including English, Spanish, French, Japanese, German, Chinese, Arabic and Swedish."},{question:"I would like to get a quote for my large 3D rendering project. How do I do this?",answer:"If you would like a quote for a large project, please contact us and provide an overview of the project requirements. Alternatively, you can proceed with ordering your required 3D rendering service via our client dashboard and we will provide you with a quote after you have submitted your order. We will get in touch with you shortly with a quote for your project. You can also use our online chat feature to discuss your project with someone from our customer service team."},{question:"Do you offer residential and commercial virtual staging services?",answer:"We sure do! Virtual Staging is one of the most popular services on our platform. Starting from only $35AUD per image, we provide dozens of interior styles for both commercial and residential interior and exterior spaces. Turn-around time is only 24 hours. "},{question:"Can you tell me how to photograph a room for virtual staging orders?",answer:"We provide many guides and useful tips on how to photography spaces for virtual staging on the Tools section of our client dashboard. Please register your company to access these free resources. The tools sections also provides detailed guides on photographing real estate using all types of cameras and techniques to achieve the best results."},{question:"I only have photos of the property taken on my phone. Are these enough to work with?",answer:"Yes :) Our team do a fantastic job editing photos and video footage from all types of camera phones and digital cameras."},{question:"I am interested in your interactive 360 virtual tours. Can you tell me the about pricing and how the process works?",answer:"To create a 360 Virtual Tour, all you need to do is upload the 360 image files straight from your 360 camera to our platform. We can stitch and edit each of the spherical images and then create a Virtual Tour of the residential or commercial space. Once complete, we provide you with a branded web link to your virtual tour. \n          Pricing is only 9AUD per room which includes professional stitching and editing, tour creation, and online hosting for 12 months. The turnaround time is approximately 48-72 hours depending on the size of the property.\n          "},{question:"I would like to order virtual staging, but my photos have furniture in them already. Is virtual staging still possible?",answer:"It sure is! If your existing photos have furniture in them, simply select the Item Removal option when placing your order for Virtual Staging. Pricing is from $5AUD for Item Removal. This will allow us to work with a blank slate when we add Virtual Staging to the room or spaces."},{question:"Can you add virtual furniture to 360 images?",answer:"Yes, we can add Virtual Staging to 360 images of residential and commercial properties. Virtual staging for residential properties is priced at $85, and $120 for commercial properties. Turnaround time is 24 hours for residential properties and 48 hours for commercial properties."},{question:"Do you provide a white label service for property portals?",answer:"Whether you are an online property portal, real estate agency, or marketing service provider we can provide a white label solution for your cmpany using our API technology. Your customers will be able to order any of the services you wish to be available to them from our client dashboard. Our most popular services for real estate portals are virtual tours, virtual staging, image enhancement, floor plans and item removal."},{question:"Do you provide discounts to resellers?",answer:"We have a Reseller program available to online property portals and large real estate agencies and advertising agencies to access many of our popular services at a wholesale price. Please submit an inquiry on our Reseller Page, and we will be in touch with more information. "},{question:"Do your services cater to real estate photographers?",answer:"Providing services to real estate photographers is a core part of the image enhancement business. We are happy to be able to provide real estate photographers a reliable and affordable outsourcing solution for image enhancement, floor plans, item removal, video editing, virtual staging, and many more services."},{question:"What if I don\u2019t like the final image you provide?",answer:"If you are unsatisfied with the final image you have received, we are happy to provide unlimited revisions until you or your client are 100% happy. Please check the sample images and videos provided for the service you wish to order so that you have a solid understanding of what the final result will look like."},{question:"Is the virtual stage pricing per room?",answer:"Our Virtual Staging service is priced per image. For example, if you would like Virtual Staging added to two separate photos of a living room to show different angles, this would count as two Virtual Staging orders."},{question:"Can I see some more photos for the virtual staging residential by any chance?",answer:"Samples of our residential and commercial virtual staging products can be seen on the Product Page. If you would like to see a specific room or style that is not displayed on our website, please Contact Us. "},{question:"How do I make payment?",answer:"Payment is made at the time of ordering the services for your project through the client dashboard. Payments are accepted through two trusted payment gateways; Stripe and PayPal."},{question:"When do I need to pay for my order?",answer:"Full payment is required for all services prior to commencement of the services, except for 3D Rendering Services which may require a quote to be provided to the client by us before proceeding with an initial deposit prior to commencement of rendering service. "}];a.default=e=>{let{match:a}=e;const[t,m]=Object(r.useState)(0);return o.a.createElement(o.a.Fragment,null,o.a.createElement(n.a,null,o.a.createElement(u.a,{xxs:"12"},o.a.createElement("h1",null,o.a.createElement(c.a,{id:"menu.faq"})),o.a.createElement(u.b,{className:"mb-5"})),o.a.createElement(u.a,{xxs:"12",className:"mb-4"},o.a.createElement(o.a.Fragment,null,d.map((e,a)=>o.a.createElement(s.a,{className:"d-flex mb-3",key:"faqItem_".concat(a)},o.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},o.a.createElement(i.a,{color:"link",className:"card-body  btn-empty btn-link list-item-heading text-left text-one",onClick:()=>m(a),"aria-expanded":t===a},e.question)),o.a.createElement(l.a,{isOpen:t===a},o.a.createElement("div",{className:"card-body accordion-content pt-0",dangerouslySetInnerHTML:{__html:e.answer}}))))))))}}}]);
//# sourceMappingURL=faq.47c40f32.chunk.js.map