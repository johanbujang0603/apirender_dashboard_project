(this["webpackJsonpapirender-dashboard"]=this["webpackJsonpapirender-dashboard"]||[]).push([[11],{108:function(e,a,t){"use strict";var r=t(9),n=t(15),o=t(4),s=t.n(o),i=t(37),l=t.n(i),c=t(84),u=t.n(c),d=t(87),m={tag:d.q,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},p=function(e){var a=e.className,t=e.cssModule,o=e.color,i=e.body,l=e.inverse,c=e.outline,m=e.tag,p=e.innerRef,h=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(d.m)(u()(a,"card",!!l&&"text-white",!!i&&"card-body",!!o&&(c?"border":"bg")+"-"+o),t);return s.a.createElement(m,Object(r.a)({},h,{className:f,ref:p}))};p.propTypes=m,p.defaultProps={tag:"div"},a.a=p},126:function(e,a,t){"use strict";var r=t(9),n=t(15),o=t(4),s=t.n(o),i=t(37),l=t.n(i),c=t(84),u=t.n(c),d=t(87),m={tag:d.q,className:l.a.string,cssModule:l.a.object},p=function(e){var a=e.className,t=e.cssModule,o=e.tag,i=Object(n.a)(e,["className","cssModule","tag"]),l=Object(d.m)(u()(a,"card-title"),t);return s.a.createElement(o,Object(r.a)({},i,{className:l}))};p.propTypes=m,p.defaultProps={tag:"div"},a.a=p},137:function(e,a,t){"use strict";var r=t(9),n=t(15),o=t(4),s=t.n(o),i=t(37),l=t.n(i),c=t(84),u=t.n(c),d=t(87),m={tag:d.q,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},p=function(e){var a=e.className,t=e.cssModule,o=e.innerRef,i=e.tag,l=Object(n.a)(e,["className","cssModule","innerRef","tag"]),c=Object(d.m)(u()(a,"card-body"),t);return s.a.createElement(i,Object(r.a)({},l,{className:c,ref:o}))};p.propTypes=m,p.defaultProps={tag:"div"},a.a=p},157:function(e,a,t){"use strict";var r=t(9),n=t(15),o=t(92),s=t(91),i=t(4),l=t.n(i),c=t(37),u=t.n(c),d=t(84),m=t.n(d),p=t(87),h={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(o.a)(t)),t.focus=t.focus.bind(Object(o.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.type,s=e.bsSize,i=e.valid,c=e.invalid,u=e.tag,d=e.addon,h=e.plaintext,f=e.innerRef,g=Object(n.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),b=["radio","checkbox"].indexOf(o)>-1,y=new RegExp("\\D","g"),v=u||("select"===o||"textarea"===o?o:"input"),w="form-control";h?(w+="-plaintext",v=u||"input"):"file"===o?w+="-file":b&&(w=d?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(p.s)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=g.size,delete g.size);var E=Object(p.m)(m()(a,c&&"is-invalid",i&&"is-valid",!!s&&"form-control-"+s,w),t);return("input"===v||u&&"function"===typeof u)&&(g.type=o),g.children&&!h&&"select"!==o&&"string"===typeof v&&"select"!==v&&(Object(p.s)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),l.a.createElement(v,Object(r.a)({},g,{ref:f,className:E}))},a}(l.a.Component);f.propTypes=h,f.defaultProps={type:"text"},a.a=f},223:function(e,a,t){"use strict";var r=t(9),n=t(15),o=t(92),s=t(91),i=t(4),l=t.n(i),c=t(37),u=t.n(c),d=t(84),m=t.n(d),p=t(87),h={children:u.a.node,inline:u.a.bool,tag:p.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(o.a)(t)),t.submit=t.submit.bind(Object(o.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.inline,s=e.tag,i=e.innerRef,c=Object(n.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(p.m)(m()(a,!!o&&"form-inline"),t);return l.a.createElement(s,Object(r.a)({},c,{ref:i,className:u}))},a}(i.Component);f.propTypes=h,f.defaultProps={tag:"form"},a.a=f},338:function(e,a,t){"use strict";var r=t(9),n=t(15),o=t(4),s=t.n(o),i=t(37),l=t.n(i),c=t(84),u=t.n(c),d=t(87),m={tag:d.q,className:l.a.string,cssModule:l.a.object},p=function(e){var a=e.className,t=e.cssModule,o=e.tag,i=Object(n.a)(e,["className","cssModule","tag"]),l=Object(d.m)(u()(a,"card-text"),t);return s.a.createElement(o,Object(r.a)({},i,{className:l}))};p.propTypes=m,p.defaultProps={tag:"p"},a.a=p},417:function(e,a,t){"use strict";t.r(a);var r=t(4),n=t.n(r),o=t(212),s=t(108),i=t(137),l=t(126),c=t(338),u=t(223),d=t(384),m=t(157),p=t(153),h=t(9),f=t(15),g=t(37),b=t.n(g),y=t(84),v=t.n(y),w=t(87),E={tag:w.q,listTag:w.q,className:b.a.string,listClassName:b.a.string,cssModule:b.a.object,children:b.a.node,"aria-label":b.a.string},j=function(e){var a=e.className,t=e.listClassName,r=e.cssModule,o=e.children,s=e.tag,i=e.listTag,l=e["aria-label"],c=Object(f.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),u=Object(w.m)(v()(a),r),d=Object(w.m)(v()("breadcrumb",t),r);return n.a.createElement(s,Object(h.a)({},c,{className:u,"aria-label":l}),n.a.createElement(i,{className:d},o))};j.propTypes=E,j.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"};var N=j,O={tag:w.q,active:b.a.bool,className:b.a.string,cssModule:b.a.object},q=function(e){var a=e.className,t=e.cssModule,r=e.active,o=e.tag,s=Object(f.a)(e,["className","cssModule","active","tag"]),i=Object(w.m)(v()(a,!!r&&"active","breadcrumb-item"),t);return n.a.createElement(o,Object(h.a)({},s,{className:i,"aria-current":r?"page":void 0}))};q.propTypes=O,q.defaultProps={tag:"li"};var x=q,k=t(86),M=t(83),P=function(e){return n.a.createElement(M.a,{id:"menu.".concat(e)})},R=function(e,a,t){return 0===t?"":e.split(a)[0]+a},T=function(e){var a=e.match.path.substr(1),t=a.split("/");return t[t.length-1].indexOf(":")>-1&&(t=t.filter((function(e){return-1===e.indexOf(":")}))),n.a.createElement(n.a.Fragment,null,n.a.createElement(N,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},t.map((function(e,r){return n.a.createElement(x,{key:r,active:t.length===r+1},t.length!==r+1?n.a.createElement(k.b,{to:"/".concat(R(a,e,r))},P(e)):P(e))}))))},I=function(e){var a=e.heading,t=e.match;return n.a.createElement(n.a.Fragment,null,a&&n.a.createElement("h1",null,n.a.createElement(M.a,{id:a})),n.a.createElement(T,{match:t}))},S=t(82);a.default=function(e){var a=e.match;return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,null,n.a.createElement(S.a,{xxs:"12"},n.a.createElement(I,{heading:"menu.contact-us",match:a}),n.a.createElement(S.b,{className:"mb-5"})),n.a.createElement(S.a,{xxs:"12",className:"mb-4"},n.a.createElement(o.a,null,n.a.createElement(S.a,{xxs:"6"},n.a.createElement(s.a,null,n.a.createElement(i.a,null,n.a.createElement(l.a,null,"Contact Info"),n.a.createElement(c.a,null,n.a.createElement("p",null,"General Enquires: hello@propertyrender.com"),n.a.createElement("p",null,"Sales Enquires: sales@propertyrender.com"),n.a.createElement("p",null,"Orders: orders@propertyrender.com"),n.a.createElement("p",null,"Managing Director: Steven@propertyrender.com"))))),n.a.createElement(S.a,{xxs:"6"},n.a.createElement(s.a,null,n.a.createElement(i.a,null,n.a.createElement(l.a,null,"Send a Message"),n.a.createElement(u.a,null,n.a.createElement(d.a,null,n.a.createElement(m.a,{className:"form-control",name:"name",placeholder:"Name",type:"text"})),n.a.createElement(d.a,null,n.a.createElement(m.a,{className:"form-control",name:"email",placeholder:"E-mail",type:"email"})),n.a.createElement(d.a,null,n.a.createElement(m.a,{className:"form-control",name:"phone",placeholder:"Phone Number",type:"text"})),n.a.createElement(d.a,null,n.a.createElement(m.a,{className:"form-control",name:"message",placeholder:"Your Message Here",type:"textarea"})),n.a.createElement(d.a,null,n.a.createElement(p.a,{type:"submit",color:"danger"},"Submit"))))))))))}},423:function(e,a,t){"use strict";t.r(a);var r=t(81),n=t(4),o=t.n(n),s=t(212),i=t(108),l=t(153),c=t(393),u=t(83),d=t(82),m=[{question:"How do I obtain a brochure outlining all of your services and prices?",answer:"Please send an email to hello@propertyrender.com or fill out our contact form here, and we will send you a copy of our brochure."},{question:"Do you have any discounts or promotional offers?",answer:"Occasionally we advertise promotional offers and discounts for our services. Please register your business on our platform to receive email updates on our latest promotions and discounts."},{question:"Do we have to sign a contract?",answer:'We may ask you to sign a contract outlining services, fees and schedule for very large 3D rendering projects, however, all orders submitted via phone, email or directly through the client dashboard are bound to our terms and conditions. Please click <a href="https://www.propertyrender.com/terms-conditions/"><b>here</b></a> to view our terms and conditions.'},{question:"What currency are your prices in?",answer:"Our default pricing is in US Dollars, however, the currency can easily be changed in the currency tab on the website and client dashboard."},{question:"Can I change the language on the website?",answer:"You can change the language of the text on the website and dashboard by clicking on the language tab and selecting from 8 different languages including English, Spanish, French, Japanese, German, Chinese, Arabic and Swedish."},{question:"I would like to get a quote for my large 3D rendering project. How do I do this?",answer:"If you would like a quote for a large project, please contact us and provide an overview of the project requirements. Alternatively, you can proceed with ordering your required 3D rendering service via our client dashboard and we will provide you with a quote after you have submitted your order. We will get in touch with you shortly with a quote for your project. You can also use our online chat feature to discuss your project with someone from our customer service team."},{question:"Do you offer residential and commercial virtual staging services?",answer:"We sure do! Virtual Staging is one of the most popular services on our platform. Starting from only $35AUD per image, we provide dozens of interior styles for both commercial and residential interior and exterior spaces. Turn-around time is only 24 hours. "},{question:"Can you tell me how to photograph a room for virtual staging orders?",answer:"We provide many guides and useful tips on how to photography spaces for virtual staging on the Tools section of our client dashboard. Please register your company to access these free resources. The tools sections also provides detailed guides on photographing real estate using all types of cameras and techniques to achieve the best results."},{question:"I only have photos of the property taken on my phone. Are these enough to work with?",answer:"Yes :) Our team do a fantastic job editing photos and video footage from all types of camera phones and digital cameras."},{question:"I am interested in your interactive 360 virtual tours. Can you tell me the about pricing and how the process works?",answer:"To create a 360 Virtual Tour, all you need to do is upload the 360 image files straight from your 360 camera to our platform. We can stitch and edit each of the spherical images and then create a Virtual Tour of the residential or commercial space. Once complete, we provide you with a branded web link to your virtual tour. \n          Pricing is only 9AUD per room which includes professional stitching and editing, tour creation, and online hosting for 12 months. The turnaround time is approximately 48-72 hours depending on the size of the property.\n          "},{question:"I would like to order virtual staging, but my photos have furniture in them already. Is virtual staging still possible?",answer:"It sure is! If your existing photos have furniture in them, simply select the Item Removal option when placing your order for Virtual Staging. Pricing is from $5AUD for Item Removal. This will allow us to work with a blank slate when we add Virtual Staging to the room or spaces."},{question:"Can you add virtual furniture to 360 images?",answer:"Yes, we can add Virtual Staging to 360 images of residential and commercial properties. Virtual staging for residential properties is priced at $85, and $120 for commercial properties. Turnaround time is 24 hours for residential properties and 48 hours for commercial properties."},{question:"Do you provide a white label service for property portals?",answer:"Whether you are an online property portal, real estate agency, or marketing service provider we can provide a white label solution for your cmpany using our API technology. Your customers will be able to order any of the services you wish to be available to them from our client dashboard. Our most popular services for real estate portals are virtual tours, virtual staging, image enhancement, floor plans and item removal."},{question:"Do you provide discounts to resellers?",answer:"We have a Reseller program available to online property portals and large real estate agencies and advertising agencies to access many of our popular services at a wholesale price. Please submit an inquiry on our Reseller Page, and we will be in touch with more information. "},{question:"Do your services cater to real estate photographers?",answer:"Providing services to real estate photographers is a core part of the image enhancement business. We are happy to be able to provide real estate photographers a reliable and affordable outsourcing solution for image enhancement, floor plans, item removal, video editing, virtual staging, and many more services."},{question:"What if I don\u2019t like the final image you provide?",answer:"If you are unsatisfied with the final image you have received, we are happy to provide unlimited revisions until you or your client are 100% happy. Please check the sample images and videos provided for the service you wish to order so that you have a solid understanding of what the final result will look like."},{question:"Is the virtual stage pricing per room?",answer:"Our Virtual Staging service is priced per image. For example, if you would like Virtual Staging added to two separate photos of a living room to show different angles, this would count as two Virtual Staging orders."},{question:"Can I see some more photos for the virtual staging residential by any chance?",answer:"Samples of our residential and commercial virtual staging products can be seen on the Product Page. If you would like to see a specific room or style that is not displayed on our website, please Contact Us. "},{question:"How do I make payment?",answer:"Payment is made at the time of ordering the services for your project through the client dashboard. Payments are accepted through two trusted payment gateways; Stripe and PayPal."},{question:"When do I need to pay for my order?",answer:"Full payment is required for all services prior to commencement of the services, except for 3D Rendering Services which may require a quote to be provided to the client by us before proceeding with an initial deposit prior to commencement of rendering service. "}];a.default=function(e){e.match;var a=Object(n.useState)(0),t=Object(r.a)(a,2),p=t[0],h=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,null,o.a.createElement(d.a,{xxs:"12"},o.a.createElement("h1",null,o.a.createElement(u.a,{id:"menu.faq"})),o.a.createElement(d.b,{className:"mb-5"})),o.a.createElement(d.a,{xxs:"12",className:"mb-4"},o.a.createElement(o.a.Fragment,null,m.map((function(e,a){return o.a.createElement(i.a,{className:"d-flex mb-3",key:"faqItem_".concat(a)},o.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},o.a.createElement(l.a,{color:"link",className:"card-body  btn-empty btn-link list-item-heading text-left text-one",onClick:function(){return h(a)},"aria-expanded":p===a},e.question)),o.a.createElement(c.a,{isOpen:p===a},o.a.createElement("div",{className:"card-body accordion-content pt-0",dangerouslySetInnerHTML:{__html:e.answer}})))}))))))}}}]);
//# sourceMappingURL=faq.93a6f296.chunk.js.map