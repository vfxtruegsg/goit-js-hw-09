import"./assets/modulepreload-polyfill-B5Qt9EMX.js";let e={email:"",message:""};const t=document.querySelector(".feedback-form"),s=t.querySelector('input[name="email"]'),m=t.querySelector('textarea[name="message"]');function o(){const a=localStorage.getItem("feedback-form-state");a&&(e=JSON.parse(a),s.value=e.email,m.value=e.message)}o();t.addEventListener("input",a=>{const l=a.target;l.name&&(e[l.name]=l.value,localStorage.setItem("feedback-form-state",JSON.stringify(e)))});t.addEventListener("submit",a=>{a.preventDefault(),!e.email||!e.message?alert("Fill please all fields"):(console.log(e),localStorage.removeItem("feedback-form-state"),e={email:"",message:""},s.value="",m.value="")});
//# sourceMappingURL=2-form.js.map
