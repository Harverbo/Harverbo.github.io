(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,a,r){e.exports=r.p+"static/media/Proofread.16da654a.jpg"},function(e,a,r){e.exports=r.p+"static/media/carrionlogo.68819cca.png"},,,function(e,a,r){e.exports=r.p+"static/media/harold.3363d5c5.jpg"},function(e,a,r){e.exports=r.p+"static/media/article-write.2ef0ce6b.jpg"},function(e,a,r){e.exports=r(19)},,,,,,function(e,a,r){},function(e,a,r){"use strict";r.r(a);var t=r(0),n=r.n(t),c=r(9),o=r.n(c),l=(r(18),r(1)),i=r(2),m=r(4),s=r(3),u=r(5),p=r(10),d=r.n(p),f=function(e){return n.a.createElement("header",null,n.a.createElement("nav",null,n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/Harverbo"},n.a.createElement("i",{className:"fab fa-facebook-f"}))),n.a.createElement("li",null,n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/HaroldAHatake"},n.a.createElement("i",{className:"fab fa-twitter"}))),n.a.createElement("li",null,n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/haroldhatake/"},n.a.createElement("i",{className:"fab fa-instagram"}))),n.a.createElement("li",null,n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/harverbo/"},n.a.createElement("i",{className:"fab fa-linkedin-in"}))),n.a.createElement("li",null,n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.fiverr.com/harverbo"},n.a.createElement("i",{className:"fiverr"},"Fi"))))),n.a.createElement("div",{className:"foto"},n.a.createElement("img",{src:d.a,alt:"Foto de Harold"})),n.a.createElement("h1",null,e.titulo),n.a.createElement("h2",null,n.a.createElement("span",null,"Desarrollador Web BackEnd"),n.a.createElement("span",null,"(PHP ",n.a.createElement("i",{className:"fab fa-php"})," - Laravel ",n.a.createElement("i",{className:"fab fa-laravel"})," - ReactJS ",n.a.createElement("i",{className:"fab fa-react"}),")")))},E=function(e){var a="Imagen de proyecto ".concat(e.proyecto.nombre);return n.a.createElement("div",{className:"carta"},n.a.createElement("h3",null,e.proyecto.nombre),n.a.createElement("img",{src:e.proyecto.img,alt:a,className:"logo-proyectos"}),n.a.createElement("p",null,e.proyecto.descripcion),n.a.createElement("a",{href:e.proyecto.url,target:"_blank",rel:"noopener noreferrer",className:"btn"},"Visitar"))},b=function(e){function a(){return Object(l.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"Proyectos"),n.a.createElement("article",null,this.props.proyectos.map(function(e){return n.a.createElement(E,{key:e.nombre,proyecto:e})})))}}]),a}(t.Component),h=function(e){var a="Imagen de servicio ".concat(e.servicio.nombre);return n.a.createElement("div",{className:"carta"},n.a.createElement("h3",null,e.servicio.nombre),n.a.createElement("img",{src:e.servicio.img,alt:a,className:"logo-proyectos"}),n.a.createElement("p",null,e.servicio.descripcion),n.a.createElement("a",{href:e.servicio.url,target:"_blank",rel:"noopener noreferrer",className:"btn"},"Solicitar"))},v=function(e){function a(){return Object(l.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"Servicios"),n.a.createElement("article",null,this.props.servicios.map(function(e){return n.a.createElement(h,{key:e.nombre,servicio:e})})))}}]),a}(t.Component),w=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"Aprendizaje"),n.a.createElement("article",null,e.aprendizaje.map(function(e){return n.a.createElement("div",{className:"carta"},n.a.createElement("h3",null,e.nombre),n.a.createElement("p",null,e.descripcion),n.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"btn"},"Ver certificado"))})))},g=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"Contacto"),n.a.createElement("article",null,n.a.createElement("div",{className:"carta"},n.a.createElement("form",null,n.a.createElement("label",{htmlFor:"nombre"},"Nombre"),n.a.createElement("input",{type:"text",id:"nombre",placeholder:"Nombre"})))))},y=r(7),k=r.n(y),j=r(6),N=r.n(j),O=r(11),C=r.n(O),P=function(e){function a(){var e,r;Object(l.a)(this,a);for(var t=arguments.length,n=new Array(t),c=0;c<t;c++)n[c]=arguments[c];return(r=Object(m.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(n)))).state={proyectos:[],servicios:[],aprendizaje:[]},r.cargarProyectos=function(){var e=[{nombre:"Carri\xf3n Soluciones",img:k.a,descripcion:"Sitio web de la empresa Carri\xf3n Soluciones, dedicada a la venta e instalaci\xf3n de puertas automatizadas, operadores y shutters.",url:"http://www.carrionsoluciones.com"}],a=[{nombre:"Desarrollo de aplicaci\xf3n web",img:N.a,descripcion:"Desarrollo de sitio o aplicaci\xf3n web completa con OOP PHP, Laravel o ReactJS",url:"#"},{nombre:"Correcci\xf3n de BackEnd",img:N.a,descripcion:"Correcci\xf3n de cualquier funci\xf3n o parte de BackEnd de un sitio o aplicaci\xf3n web desarrollado en PHP o Laravel",url:"#"},{nombre:"Redacci\xf3n de art\xedculo",img:N.a,descripcion:"Redacci\xf3n de art\xedculo de cualquier tema",url:"https://www.fiverr.com/harverbo/write-a-400-or-more-words-spanish-article"},{nombre:"Correcci\xf3n de art\xedculo o documento",img:C.a,descripcion:"Correcci\xf3n de errores de cualquier art\xedculo o documento en espa\xf1ol",url:"https://www.fiverr.com/harverbo/proofread-or-edit-your-spanish-document"}],t=[{nombre:"Desarrollo Web Completo",img:k.a,descripcion:"Desarrollo Web Completo con HTML5, CSS3, JavaScript, JQuery, Ajax, PHP y MySQL",url:"https://www.udemy.com/certificate/UC-H16XIP7C/"}];r.setState({proyectos:e,servicios:a,aprendizaje:t})},r}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.cargarProyectos()}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(f,{titulo:"Harold Abreu Ram\xedrez"}),n.a.createElement(b,{proyectos:this.state.proyectos}),n.a.createElement(v,{servicios:this.state.servicios}),n.a.createElement(w,{aprendizaje:this.state.aprendizaje}),n.a.createElement(g,null))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.41cbfdb3.chunk.js.map