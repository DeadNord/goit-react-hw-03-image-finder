(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={form:"Form_form__2NAkM",label:"Form_label__2D4G-",name:"Form_name__34STM",input:"Form_input__1n6AA",button:"Form_button__1utmD"}},12:function(t,e,n){t.exports={name:"Filter_name__1eBKi",input:"Filter_input__3EeIc"}},25:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),s=n(13),r=n.n(s),i=n(3),o=n(11),l=n(15),u=n(5),m=n(6),b=n(8),j=n(7),d=n(9),h=n.n(d),f=n(0),p=function(t){var e=t.children,n=t.title;return Object(f.jsx)("section",{className:h.a.section,children:Object(f.jsxs)("div",{className:h.a.container,children:[Object(f.jsx)("h2",{className:h.a.title,children:n}),e]})})},O=n(1),_=n.n(O),x=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(i.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(m.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:_.a.form,onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{className:_.a.label,children:[Object(f.jsx)("p",{className:_.a.name,children:"Name"}),Object(f.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:this.state.name,onChange:this.handleChange,className:_.a.input})]}),Object(f.jsxs)("label",{className:_.a.label,children:[Object(f.jsx)("p",{className:_.a.name,children:"Number"}),Object(f.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:this.state.number,onChange:this.handleChange,className:_.a.input})]}),Object(f.jsx)("button",{className:_.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),C=x,v=n(4),g=n.n(v),N=function(t){var e=t.name,n=t.number,a=t.id,c=t.deleteContact;return Object(f.jsxs)("li",{className:g.a.contact,children:[Object(f.jsxs)("p",{children:[Object(f.jsx)("span",{className:g.a.name,children:e}),": ",n]}),Object(f.jsx)("button",{className:g.a.button,onClick:function(){return c(a)},children:"Delete"})]})},S=function(t){var e=t.contacts,n=t.deleteContact;return Object(f.jsx)("ul",{className:g.a.contactsList,children:e.length>0&&e.map((function(t){return Object(f.jsx)(N,{name:t.name,number:t.number,id:t.id,deleteContact:n},t.id)}))})},y=n(12),A=n.n(y),w=function(t){var e=t.value,n=t.onChange;return Object(f.jsxs)("label",{children:[Object(f.jsx)("p",{className:A.a.name,children:"Find contacts by name"}),Object(f.jsx)("input",{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",onChange:n,value:e,className:A.a.input})]})},F=n(14),k=(n(23),n(24),n(16)),z=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.formSubmit=function(e){var n=t.state.contacts.find((function(t){return t.name.includes(e.name)}));if(n)Object(F.alert)({title:"Alert",text:"".concat(n.name," is already in contacts")});else{var a={id:Object(k.a)()};t.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[Object(o.a)(Object(o.a)({},a),e)])}}))}},t.filterChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(i.a)({},a,c))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.filterContacts=function(){var e=t.state.filter.toLowerCase();return t.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}))},t}return Object(m.a)(n,[{key:"render",value:function(){var t=this.filterContacts();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(p,{title:"Phonebook",children:Object(f.jsx)(C,{onSubmit:this.formSubmit})}),Object(f.jsxs)(p,{title:"Contacts",children:[Object(f.jsx)(w,{value:this.state.filter,onChange:this.filterChange}),Object(f.jsx)(S,{contacts:t,deleteContact:this.deleteContact})]})]})}}]),n}(a.Component),Z=z;n(25);r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(Z,{})}),document.querySelector("#root"))},4:function(t,e,n){t.exports={contactsList:"Contacts_contactsList__25ybg",contact:"Contacts_contact__36zc9",name:"Contacts_name__3BGmW",button:"Contacts_button__2pvJQ"}},9:function(t,e,n){t.exports={section:"Section_section__3dWsp",container:"Section_container__19OVw",title:"Section_title__DIsR2"}}},[[26,1,2]]]);
//# sourceMappingURL=main.91bdcb64.chunk.js.map