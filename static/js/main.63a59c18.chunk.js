(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={section:"Section_section__1ZPbA",container:"Section_container__1H6SL"}},12:function(e,t,a){e.exports={gallery:"ImageGallery_gallery__3hjD0",button:"ImageGallery_button__2oFHB"}},13:function(e,t,a){e.exports={overlay:"Modal_overlay__3isGu",modal:"Modal_modal__16eo7"}},16:function(e,t,a){e.exports={button:"Button_button__2nD6U"}},18:function(e,t,a){e.exports={loader:"Loader_loader__2O5Rc"}},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(9),c=a.n(r),s=a(3),i=a(4),l=a(6),u=a(5),h=a(11),m=a.n(h),d=a(0),b=function(e){var t=e.children;return Object(d.jsx)("section",{className:m.a.section,children:Object(d.jsx)("div",{className:m.a.container,children:t})})},j=a(7),p=a.n(j),f=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={name:""},e.handleNameChange=function(t){e.setState({name:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.name),e.setState({name:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(d.jsx)("header",{className:p.a.searchbar,children:Object(d.jsxs)("form",{className:p.a.form,onSubmit:this.handleSubmit,children:[Object(d.jsx)("button",{type:"submit",className:p.a.formButton,children:Object(d.jsx)("span",{className:p.a.formButtonLabel,children:"Search"})}),Object(d.jsx)("input",{className:p.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.name,onChange:this.handleNameChange})]})})}}]),a}(n.PureComponent),g=f,O=a(14),y=a(15),_=a(8),x=a.n(_),v=function(e){var t=e.srs,a=e.alt,n=e.onClick,o=e.largeImageURL,r=e.myRef;return Object(d.jsx)(d.Fragment,{children:r?Object(d.jsx)("li",{ref:r,className:x.a.item,onClick:function(){return n(o,a)},children:Object(d.jsx)("img",{className:x.a.image,src:t,alt:a,loading:"lazy"})}):Object(d.jsx)("li",{className:x.a.item,onClick:function(){return n(o,a)},children:Object(d.jsx)("img",{className:x.a.image,src:t,alt:a,loading:"lazy"})})})},S=a(16),k=a.n(S),N=function(e){var t=e.onClick;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("button",{type:"button",className:k.a.button,onClick:function(){return t()},children:"Load more"})})},w=a(17),C=a.n(w),L=(a(44),a(18)),R=a.n(L),B=function(){return Object(d.jsx)(C.a,{className:R.a.loader,type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e5})},M=a(12),A=a.n(M),F=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={image:[],status:"",page:1,myRef:o.a.createRef()},e.nextPage=function(){e.setState({page:e.state.page+1})},e.scroll=function(e){e.current.scrollIntoView({behavior:"smooth",block:"end"})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;e.searchName===this.props.searchName&&t.page===this.state.page||(e.searchName!==this.props.searchName&&this.setState({image:[],status:"load"}),this.fetchApi(this.props.searchName,this.state.page).then((function(e){e.hits[0]=Object(y.a)(Object(y.a)({},e.hits[0]),{},{myRef:a.state.myRef}),a.setState({image:[].concat(Object(O.a)(a.state.image),Object(O.a)(e.hits)),status:"done"}),a.scroll(a.state.myRef)})))}},{key:"fetchApi",value:function(e,t){var a="https://pixabay.com/api/"+"?q=".concat(e,"&page=").concat(t,"&key=").concat("24007253-6cc56fa6c42aef75df557ae25","&image_type=photo&orientation=horizontal&per_page=12");return fetch(a).then((function(e){return e.ok?e.json():Promise.reject(new Error("Oops, something went wrong."))}))}},{key:"render",value:function(){var e=this;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("ul",{className:A.a.gallery,children:[this.state.image.map((function(t){return Object(d.jsx)(v,{onClick:e.props.onClick,srs:t.webformatURL,alt:t.tags,largeImageURL:t.largeImageURL,myRef:t.myRef},t.id)})),"load"===this.state.status&&Object(d.jsx)(B,{})]}),"done"===this.state.status&&Object(d.jsx)("div",{className:A.a.button,children:Object(d.jsx)(N,{onClick:this.nextPage})})]})}}]),a}(n.PureComponent),I=F,P=a(13),D=a.n(P),U=document.querySelector("#modal-root"),G=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(r.createPortal)(Object(d.jsx)("div",{className:D.a.overlay,onClick:this.handleBackdropClick,children:Object(d.jsx)("div",{className:D.a.modal,children:Object(d.jsx)("img",{src:this.props.src,alt:this.props.alt})})}),U)}}]),a}(n.PureComponent),E=G,q=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={searchName:"",showModal:!1,option:{}},e.toggleModal=function(t,a){e.setState((function(e){return{showModal:!e.showModal,option:{imageSrc:t,imageAlt:a}}}))},e.handleFormSubmit=function(t){e.setState({searchName:t})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(g,{onSubmit:this.handleFormSubmit}),Object(d.jsx)(b,{children:Object(d.jsx)(I,{searchName:this.state.searchName,onClick:this.toggleModal})}),this.state.showModal&&Object(d.jsx)(E,{src:this.state.option.imageSrc,alt:this.state.option.imageAlt,onClose:this.toggleModal})]})}}]),a}(n.Component),z=q;a(45);c.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(z,{})}),document.querySelector("#root"))},7:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__3N-mD",form:"Searchbar_form__tSQP-",formButton:"Searchbar_formButton__SUA_-",formButtonLabel:"Searchbar_formButtonLabel__15MRd",input:"Searchbar_input__1PyBW"}},8:function(e,t,a){e.exports={item:"ImageGalleyItem_item__1LAQY",image:"ImageGalleyItem_image__2OI2f"}}},[[46,1,2]]]);
//# sourceMappingURL=main.63a59c18.chunk.js.map