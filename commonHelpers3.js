import"./assets/common-75a3e929.js";import{l as n}from"./assets/vendor-d78ab9e0.js";const a=document.querySelector(".feedback-form"),r="feedback-form-state";a.addEventListener("input",n(s,500));a.addEventListener("submit",c);let e=JSON.parse(localStorage.getItem(r))||{};const{email:o,message:l}=a.elements;m();function m(){e&&(o.value=e.email||"",l.value=e.message||"")}function s(t){e[t.target.name]=t.target.value,localStorage.setItem(r,JSON.stringify(e))}function c(t){if(t.preventDefault(),o.value===""||l.value==="")return alert("Будь ласка, заповніть всі обов'язкові поля.");localStorage.removeItem(r),t.currentTarget.reset(),e={}}
//# sourceMappingURL=commonHelpers3.js.map