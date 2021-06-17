(this["webpackJsonpreact-18"]=this["webpackJsonpreact-18"]||[]).push([[3],{100:function(t,e,n){t.exports={form__label:"ContactForm_form__label__29wai",form__input:"ContactForm_form__input__2Da0Y"}},101:function(t,e,n){t.exports={contact__item:"ContactList_contact__item__2VxF3"}},102:function(t,e,n){t.exports={contact:"ContactItem_contact__3qq0R"}},103:function(t,e,n){t.exports={filter__label:"Filter_filter__label__-R5N8",filter__input:"Filter_filter__input__3tnPC"}},107:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return y}));var r=n(0),a=n(8),c=(n(99),n(43)),i=n.n(c),o=n(98),l=n(100),u=n.n(l),s=n(33),b=n(1);function f(){var t=Object(a.c)(),e=Object(r.useState)(""),n=Object(o.a)(e,2),c=n[0],i=n[1],l=Object(r.useState)(""),f=Object(o.a)(l,2),j=f[0],d=f[1];return Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e,n){t(s.b.addContact(e,n))}(c,j),i(""),d("")},children:[Object(b.jsxs)("label",{className:u.a.form__label,children:["Name",Object(b.jsx)("input",{className:u.a.form__input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:c,onChange:function(t){i(t.target.value)}})]}),Object(b.jsxs)("label",{className:u.a.form__label,children:["Number",Object(b.jsx)("input",{className:u.a.form__input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:j,onChange:function(t){d(t.target.value)}})]}),Object(b.jsx)("button",{type:"submit",children:"Add contact"})]})}var j=n(101),d=n.n(j),_=n(102),m=n.n(_),h=function(t){var e=t.name,n=t.number,r=t.onDelete;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("span",{className:m.a.contact,children:[e,": ",n]}),Object(b.jsx)("button",{type:"button",onClick:r,children:"Delete"})]})},p=Object(a.b)((function(t){return{contacts:s.d.getVisibleContacts(t)}}),(function(t){return{onDelete:function(e){return t(s.b.deleteContact(e))}}}))((function(t){var e=t.contacts,n=t.onDelete;return Object(b.jsx)("ul",{children:e.map((function(t){var e=t.id,r=t.name,a=t.number;return Object(b.jsx)("li",{className:d.a.contact__item,children:Object(b.jsx)(h,{name:r,number:a,id:e,onDelete:function(){return n(e)}})},e)}))})})),O=n(103),x=n.n(O);function v(){var t=Object(a.c)(),e=Object(a.d)(s.d.getFilter);return Object(b.jsxs)("label",{className:x.a.filter__label,children:["Find contacts by name",Object(b.jsx)("input",{className:x.a.filter__input,type:"text",name:"filter",value:e,onChange:function(e){return t(s.a.changeFilter(e.target.value))}})]})}function y(){var t=Object(a.c)(),e=Object(a.d)(s.d.getLoading);return Object(r.useEffect)((function(){t(s.b.fetchContacts())}),[t]),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Phonebook"}),Object(b.jsx)(f,{}),Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)(v,{}),e&&Object(b.jsx)(i.a,{type:"Circles",color:"#b2ee8e",height:50,width:50,timeout:3e3,className:"Loader"}),Object(b.jsx)(p,{})]})}},98:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(34);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,c=void 0;try{for(var i,o=t[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(l){a=!0,c=l}finally{try{r||null==o.return||o.return()}finally{if(a)throw c}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},99:function(t,e,n){}}]);
//# sourceMappingURL=3.103fd452.chunk.js.map