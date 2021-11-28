(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(9),r=n.n(s),o=(n(17),n(12)),i=n(3),u=n(0);var l=function(){return Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("a",{className:"header__logo",href:"#",target:"_blank"})})},p=c.a.createContext();var d=function(e){var t=c.a.useContext(p),n=e.card.owner._id===t._id,a="card__remove ".concat(n?"card__remove_active":""),s=e.card.likes.some((function(e){return e._id===t._id})),r="card__like ".concat(s?"card__like_active":"");return Object(u.jsxs)("article",{className:"card",children:[Object(u.jsx)("img",{className:"card__photo",src:e.card.link,alt:e.card.name,onClick:function(){e.onCardClick(e.card)}}),Object(u.jsx)("button",{className:a,type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",onClick:function(){e.onCardDelete(e.card)}}),Object(u.jsxs)("div",{className:"card__info",children:[Object(u.jsx)("h2",{className:"card__title",children:e.card.name}),Object(u.jsxs)("div",{className:"card__like-group",children:[Object(u.jsx)("button",{className:r,type:"button","aria-label":"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043b\u0430\u0439\u043a",onClick:function(){e.onCardLike(e.card)}}),Object(u.jsx)("p",{className:"card__likes-count",children:e.card.likes.length})]})]})]})};var j=function(e){var t=Object(a.useContext)(p);return Object(u.jsxs)("main",{children:[Object(u.jsxs)("section",{className:"profile",children:[Object(u.jsx)("div",{className:"profile__avatar-overlay",onClick:e.onEditAvatar,children:Object(u.jsx)("div",{className:"profile__change-avatar-icon"})}),Object(u.jsx)("img",{className:"profile__avatar",src:t.avatar,alt:"\u0430\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(u.jsxs)("div",{className:"profile__intro",children:[Object(u.jsx)("h1",{className:"profile__name",children:t.name}),Object(u.jsx)("button",{className:"profile__edit",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:e.onEditProfile}),Object(u.jsx)("p",{className:"profile__description",children:t.about})]}),Object(u.jsx)("button",{className:"profile__add-element",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",onClick:e.onAddPlace})]}),Object(u.jsx)("section",{className:"cards",children:e.cards.map((function(t){return Object(u.jsx)(d,{onCardDelete:e.onCardDelete,onCardLike:e.onCardLike,onCardClick:e.onCardClick,card:t},t._id)}))})]})};var h=function(){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)("p",{className:"footer__copyright",children:" \xa9 2021 Mesto Russia"})})},_=n(10),b=n(11),m=new(function(){function e(t){Object(_.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(b.a)(e,[{key:"_checkResponse",value:function(e){if(e.ok)return e.json();throw new Error("Response is not ok with status ".concat(e.status))}},{key:"_putLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"_removeLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"getUserInformation",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"setUserInformation",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._checkResponse)}},{key:"addNewCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-27/cards/".concat(e),{method:"DELETE",headers:this._headers})}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.link})}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return t?this._putLike(e):this._removeLike(e)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-27",headers:{authorization:"cf50944a-ccaa-46b0-8cc3-ef5baa3fd45f","Content-Type":"application/json"}});var f=function(e){return Object(u.jsx)("div",{className:"popup popup_type_photo-view ".concat(e.card.link&&"popup_opened"),children:Object(u.jsxs)("div",{className:"popup__container popup__container_type_photo",children:[Object(u.jsx)("img",{className:"popup__photo",src:e.card.link,alt:e.card.name}),Object(u.jsx)("p",{className:"popup__photo-caption",children:e.card.name}),Object(u.jsx)("button",{className:"popup__close",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e",onClick:e.onClose})]})})};var O=function(e){return Object(u.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen&&"popup_opened"),children:Object(u.jsxs)("div",{className:"popup__container",children:[Object(u.jsx)("button",{className:"popup__close",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e",onClick:e.onClose}),Object(u.jsx)("h2",{className:"popup__title",children:e.title}),Object(u.jsxs)("form",{className:"popup__form",name:e.name,autoComplete:"off",onSubmit:e.onSubmit,children:[Object(u.jsx)("div",{children:e.children}),Object(u.jsx)("button",{className:"popup__save",type:"submit",children:e.buttonText})]})]})})};function x(e){var t=Object(a.useContext)(p),n=Object(a.useState)(""),s=Object(i.a)(n,2),r=s[0],o=s[1],l=Object(a.useState)(""),d=Object(i.a)(l,2),j=d[0],h=d[1];return c.a.useEffect((function(){o(t.name),h(t.about)}),[t]),Object(u.jsxs)(O,{isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:r,about:j})},title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit-profile",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:[Object(u.jsxs)("div",{className:"popup__section",children:[Object(u.jsx)("input",{value:r||"",onChange:function(e){o(e.target.value)},id:"name-input",name:"name",className:"popup__input popup__input_type_name",type:"text",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"40"}),Object(u.jsx)("span",{className:"popup__input-error name-input-error"})]}),Object(u.jsxs)("div",{className:"popup__section",children:[Object(u.jsx)("input",{value:j||"",onChange:function(e){h(e.target.value)},id:"description-input",name:"about",className:"popup__input popup__input_type_description",type:"text",placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",required:!0,minLength:"2",maxLength:"200"}),Object(u.jsx)("span",{className:"popup__input-error description-input-error"})]})]})}function v(e){var t=Object(a.useRef)();return Object(u.jsx)(O,{isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({link:t.current.value}),t.current.value=""},title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"change-avatar",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:Object(u.jsxs)("div",{className:"popup__section",children:[Object(u.jsx)("input",{ref:t,id:"avatar-link-input",name:"link",className:"popup__input popup__input_type_description",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(u.jsx)("span",{className:"popup__input-error avatar-link-input-error"})]})})}function k(e){var t=Object(a.useRef)(),n=Object(a.useRef)();return Object(u.jsxs)(O,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"create-place",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(a){a.preventDefault(),e.onAddPlace({name:t.current.value,link:n.current.value}),t.current.value="",n.current.value=""},buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",children:[Object(u.jsxs)("div",{className:"popup__section",children:[Object(u.jsx)("input",{ref:t,id:"place-name-input",name:"name",className:"popup__input popup__input_type_name",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"2",maxLength:"30"}),Object(u.jsx)("span",{className:"popup__input-error place-name-input-error"})]}),Object(u.jsxs)("div",{className:"popup__section",children:[Object(u.jsx)("input",{ref:n,id:"link-input",name:"link",className:"popup__input popup__input_type_description",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(u.jsx)("span",{className:"popup__input-error link-input-error"})]})]})}function N(){return Object(u.jsx)(O,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"delete-confirm",isOpen:!1,buttonText:"\u0414\u0430"})}var C=n(2);function y(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:"popup__title",children:"\u0412\u0445\u043e\u0434"}),Object(u.jsxs)("form",{children:[Object(u.jsx)("input",{placeholder:"Email"}),Object(u.jsx)("input",{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(u.jsx)("button",{children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}var g=function(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(!0),d=Object(i.a)(r,2),_=(d[0],d[1],Object(a.useState)(!1)),b=Object(i.a)(_,2),O=b[0],g=b[1],S=Object(a.useState)(!1),U=Object(i.a)(S,2),L=U[0],E=U[1],R=Object(a.useState)(!1),A=Object(i.a)(R,2),T=A[0],P=A[1],w=Object(a.useState)({}),D=Object(i.a)(w,2),I=D[0],q=D[1],J=Object(a.useState)([]),F=Object(i.a)(J,2),H=F[0],M=F[1],z=function(){g(!1),P(!1),E(!1),q({})};return c.a.useEffect((function(){m.getUserInformation().then((function(e){s(e)})).catch((function(e){console.error(e)}))}),[]),c.a.useEffect((function(){m.getInitialCards().then((function(e){M(e)})).catch((function(e){console.error(e)}))}),[]),Object(u.jsx)("div",{className:"page__container",children:Object(u.jsxs)(p.Provider,{value:n,children:[Object(u.jsx)(l,{}),Object(u.jsxs)(C.c,{children:[Object(u.jsx)(C.a,{path:"/sign-in",element:Object(u.jsx)(y,{})}),Object(u.jsx)(C.a,{path:"/",element:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j,{onEditAvatar:function(){P(!0)},onEditProfile:function(){g(!0)},onAddPlace:function(){E(!0)},onCardClick:function(e){q(e)},cards:H,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===n._id}));m.changeLikeCardStatus(e._id,!t).then((function(t){M((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))}))},onCardDelete:function(e){m.deleteCard(e._id).then((function(){M(H.filter((function(t){return t._id!==e._id})))})).catch((function(e){console.error(e)}))}}),Object(u.jsx)(h,{})]})})]}),Object(u.jsx)(x,{isOpen:O,onClose:z,onUpdateUser:function(e){var t=e.name,n=e.about;m.setUserInformation(t,n).then((function(e){s(e),z()})).catch((function(e){console.error(e)}))}}),Object(u.jsx)(v,{isOpen:T,onClose:z,onUpdateAvatar:function(e){m.changeAvatar(e).then((function(e){s(e),z()})).catch((function(e){console.error(e)}))}}),Object(u.jsx)(k,{isOpen:L,onClose:z,onAddPlace:function(e){var t=e.name,n=e.link;m.addNewCard(t,n).then((function(e){M([e].concat(Object(o.a)(H))),z()})).catch((function(e){console.error(e)}))}}),Object(u.jsx)(f,{card:I,onClose:z}),Object(u.jsx)(N,{})]})})},S=n(8);r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(S.a,{children:Object(u.jsx)(g,{})})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.495903c3.chunk.js.map