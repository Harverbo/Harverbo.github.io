(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/harold.3363d5c5.jpg"},function(e,a,t){e.exports=t.p+"static/media/carrionlogo.68819cca.png"},function(e,a,t){e.exports=t.p+"static/media/Proofread.16da654a.jpg"},function(e,a,t){e.exports=t.p+"static/media/article-write.2ef0ce6b.jpg"},function(e,a,t){e.exports=t.p+"static/media/backend.b83d9a91.png"},function(e,a,t){e.exports=t.p+"static/media/desarrollo.c6e7958a.jpg"},function(e,a,t){e.exports=t.p+"static/media/desarrolloweb.4ac49777.jpg"},function(e,a,t){e.exports=t.p+"static/media/mysql.9f1d06d2.jpg"},function(e,a,t){e.exports=t.p+"static/media/laravel.7a8e2a6c.jpg"},function(e,a,t){e.exports=t.p+"static/media/oopphp.c66fa963.jpg"},function(e,a,t){e.exports=t(26)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(7),c=t.n(o),l=(t(24),t(1)),i=t(2),s=t(4),m=t(3),u=t(5),p=t(8),d=t.n(p),f=function(e){return n.a.createElement("header",null,n.a.createElement("nav",null,n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/Harverbo"},n.a.createElement("i",{className:"fab fa-facebook-f"}))),n.a.createElement("li",null,n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/HaroldAHatake"},n.a.createElement("i",{className:"fab fa-twitter"}))),n.a.createElement("li",null,n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/haroldhatake/"},n.a.createElement("i",{className:"fab fa-instagram"}))),n.a.createElement("li",null,n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/harverbo/"},n.a.createElement("i",{className:"fab fa-linkedin-in"}))),n.a.createElement("li",null,n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.fiverr.com/harverbo"},n.a.createElement("i",{className:"fiverr"},"Fi"))))),n.a.createElement("div",{className:"foto"},n.a.createElement("img",{src:d.a,alt:"Foto de Harold"})),n.a.createElement("h1",null,e.titulo),n.a.createElement("h2",null,n.a.createElement("span",null,"Desarrollador Web BackEnd"),n.a.createElement("span",null,"(PHP ",n.a.createElement("i",{className:"fab fa-php"})," - Laravel ",n.a.createElement("i",{className:"fab fa-laravel"})," - ReactJS ",n.a.createElement("i",{className:"fab fa-react"}),")")))},b=function(e){var a="Imagen de proyecto ".concat(e.proyecto.nombre);return n.a.createElement("div",{className:"carta carta-hover"},n.a.createElement("h3",null,e.proyecto.nombre),n.a.createElement("img",{src:e.proyecto.img,alt:a,className:"logo-proyectos"}),n.a.createElement("p",null,e.proyecto.descripcion),n.a.createElement("a",{href:e.proyecto.url,target:"_blank",rel:"noopener noreferrer",className:"btn"},"Visitar"))},E=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"Proyectos"),n.a.createElement("article",null,this.props.proyectos.map(function(e){return n.a.createElement(b,{key:e.nombre,proyecto:e})})))}}]),a}(r.Component),h=function(e){var a="Imagen de servicio ".concat(e.servicio.nombre);return n.a.createElement("div",{className:"carta carta-hover"},n.a.createElement("h3",null,e.servicio.nombre),n.a.createElement("img",{src:e.servicio.img,alt:a,className:"logo-proyectos"}),n.a.createElement("p",null,e.servicio.descripcion),n.a.createElement("a",{href:e.servicio.url,target:e.servicio.target,rel:"noopener noreferrer",className:"btn"},"Solicitar"))},v=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"Servicios"),n.a.createElement("article",null,this.props.servicios.map(function(e){return n.a.createElement(h,{key:e.nombre,servicio:e})})))}}]),a}(r.Component),g=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"Aprendizaje"),n.a.createElement("article",null,e.aprendizaje.map(function(e){return n.a.createElement("div",{className:"carta carta-hover",key:e.url},n.a.createElement("h3",null,e.nombre),n.a.createElement("img",{src:e.img,alt:e.nombre,className:"logo-proyectos"}),n.a.createElement("p",null,e.descripcion),n.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"btn"},"Ver certificado"))})))},w=function(e){var a=e.mensaje;return n.a.createElement("div",null,n.a.createElement("p",{className:"error"},a))},j=function(e){var a=e.mensaje;return n.a.createElement("div",null,n.a.createElement("p",{className:"success"},a))},y=(t(25),function(e){function a(){var e,t;Object(l.a)(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).state={error:!1,success:!1,mensaje:""},t.nombreRef=n.a.createRef(),t.correoRef=n.a.createRef(),t.mensajeRef=n.a.createRef(),t.contactMsg=function(e){e.preventDefault();var a={nombre:t.nombreRef.current.value,correo:t.correoRef.current.value,mensaje:t.mensajeRef.current.value};if(""!==a.nombre&&""!==a.correo&&""!==a.mensaje){var r={user_name:a.nombre,user_email:a.correo,text:a.mensaje};document.querySelector(".spinner").classList.remove("d-none"),window.emailjs.send("default_service","harverbo",r).then(function(e){document.querySelector(".spinner").classList.add("d-none"),t.setState({success:!0,mensaje:"Su correo ha sido enviado. Pronto me pondr\xe9 en contacto con usted desde el correo ".concat(a.correo)},function(){setTimeout(function(){t.setState({success:!1,mensaje:""})},5e3)})},function(e){document.querySelector(".spinner").classList.add("d-none"),t.setState({error:!0,mensaje:"Debe comprobar que no es un robot"},function(){setTimeout(function(){t.setState({error:!1,mensaje:""})},3e3)})})}else t.setState({error:!0,mensaje:"Todos los campos son obligatorios"},function(){setTimeout(function(){t.setState({error:!1,mensaje:""})},3e3)})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state.error?n.a.createElement(w,{mensaje:this.state.mensaje}):"",a=this.state.success?n.a.createElement(j,{mensaje:this.state.mensaje}):"";return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"Contacto"),n.a.createElement("article",{id:"contacto"},n.a.createElement("div",{className:"carta"},e,a,n.a.createElement("form",{onSubmit:this.contactMsg},n.a.createElement("div",{className:"input-field"},n.a.createElement("label",{htmlFor:"nombre"},"Nombre"),n.a.createElement("input",{className:"form-control",ref:this.nombreRef,type:"text",id:"nombre",placeholder:"Nombre de pila"})),n.a.createElement("div",{className:"input-field"},n.a.createElement("label",{htmlFor:"correo"},"Correo"),n.a.createElement("input",{className:"form-control",ref:this.correoRef,type:"email",id:"correo",placeholder:"Correo electr\xf3nico"})),n.a.createElement("div",{className:"input-field"},n.a.createElement("label",{htmlFor:"mensaje"},"Mensaje"),n.a.createElement("textarea",{className:"form-control",ref:this.mensajeRef,id:"mensaje",cols:"30",rows:"10",placeholder:"Mensaje"})),n.a.createElement("div",{className:"g-recaptcha","data-sitekey":"6Lc-y6EUAAAAAGPb6jr4SabxXsZ2rhRAHZ5AAJol"}),n.a.createElement("div",{className:"input-field input-btn"},n.a.createElement("input",{type:"submit",className:"btn",value:"Enviar"}),n.a.createElement("div",{className:"spinner d-none"},n.a.createElement("div",{className:"rect1"}),n.a.createElement("div",{className:"rect2"}),n.a.createElement("div",{className:"rect3"}),n.a.createElement("div",{className:"rect4"}),n.a.createElement("div",{className:"rect5"})))))))}}]),a}(r.Component)),N=t(9),k=t.n(N),O=t(10),S=t.n(O),C=t(11),P=t.n(C),R=t(12),x=t.n(R),D=t(13),A=t.n(D),H=t(14),L=t.n(H),_=t(15),M=t.n(_),F=t(16),q=t.n(F),z=t(17),J=t.n(z),U=function(e){function a(){var e,t;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={proyectos:[],servicios:[],aprendizaje:[]},t.cargarProyectos=function(){var e=[{nombre:"Carri\xf3n Soluciones",img:k.a,descripcion:"Sitio web de la empresa Carri\xf3n Soluciones, dedicada a la venta e instalaci\xf3n de puertas automatizadas, operadores y shutters.",url:"http://www.carrionsoluciones.com"}],a=[{nombre:"Desarrollo de aplicaci\xf3n web",img:A.a,target:"",descripcion:"Desarrollo de sitio o aplicaci\xf3n web completa con OOP PHP, Laravel o ReactJS",url:"#contacto"},{nombre:"Correcci\xf3n de BackEnd",img:x.a,target:"",descripcion:"Correcci\xf3n de cualquier funci\xf3n o parte de BackEnd de un sitio o aplicaci\xf3n web desarrollado en PHP o Laravel",url:"#contacto"},{nombre:"Redacci\xf3n de art\xedculo",img:S.a,target:"_blank",descripcion:"Redacci\xf3n de art\xedculo de cualquier tema",url:"https://www.fiverr.com/harverbo/write-a-400-or-more-words-spanish-article"},{nombre:"Correcci\xf3n de art\xedculo o documento",img:P.a,target:"_blank",descripcion:"Correcci\xf3n de errores de cualquier art\xedculo o documento en espa\xf1ol",url:"https://www.fiverr.com/harverbo/proofread-or-edit-your-spanish-document"}],r=[{nombre:"Desarrollo Web Completo",img:L.a,descripcion:"Desarrollo Web Completo con HTML5, CSS3, JavaScript, JQuery, Ajax, PHP y MySQL desde la plataforma web de Udemy",url:"https://www.udemy.com/certificate/UC-H16XIP7C/"},{nombre:"Desarrollo con MySQL",img:M.a,descripcion:"Desarrollo completo de bases de datos y aplicaciones CRUD con MySQL",url:"https://www.udemy.com/certificate/UC-L0OD3ISD/"},{nombre:"Desarrollo con Laravel",img:q.a,descripcion:"Desarrollo completo con Laravel",url:"https://www.udemy.com/certificate/UC-0ZE88EJ8/"},{nombre:"Desarrollo con OOP PHP",img:J.a,descripcion:"Desarrollo de sitio web con PHP Orientado a Objeto y el modelo MVC",url:"https://www.eduonix.com/certificate/7d73661716"}];t.setState({proyectos:e,servicios:a,aprendizaje:r})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.cargarProyectos()}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(f,{titulo:"Harold Abreu Ram\xedrez"}),n.a.createElement(E,{proyectos:this.state.proyectos}),n.a.createElement(v,{servicios:this.state.servicios}),n.a.createElement(g,{aprendizaje:this.state.aprendizaje}),n.a.createElement(y,null))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[18,1,2]]]);
//# sourceMappingURL=main.5ac163e3.chunk.js.map