(()=>{var e={655:()=>{function e(e){window.scrollTo({behavior:"smooth",top:e.offsetTop})}window.scrollTo&&document.querySelector(".btn").addEventListener("click",(t=>{t.preventDefault(),e(document.querySelector(".controls"))})),document.querySelector(".menu").addEventListener("click",(()=>{document.querySelector(".menu-screen").classList.add("active")})),document.querySelector(".close").addEventListener("click",(()=>{document.querySelector(".menu-screen").classList.remove("active")})),document.querySelectorAll(".menu-screen a").forEach((t=>{t.addEventListener("click",(function(t){document.querySelector(".menu-screen").classList.remove("active");let s=this.href.split("/");const i=s[s.length-1];return window.scrollTo&&t.preventDefault(),e(document.querySelector(i)),!!window.scrollTo}))}))}},t={};function s(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,s),o.exports}(()=>{"use strict";const e=[{title:"Torres",subtitle:"Sobre Nosotros",image:"../../public/temit-images/slider/antena_op.jpg",text:"Es una empresa de profesionales dedicados a: - Proporcionar servicios en la venta<br/> - Mantenimiento e instalación de torres arriostradas y auto soportadas<br/> - Sistemas de pararrayos, sistemas de tierras físicas<br/> - Instalación de antenas de micro ondas"},{title:"Instalaciones",subtitle:"Sobre Nosotros",image:"../../public/temit-images/slider/construccion_op.jpg",text:"- Instalación de antenas parabólicas<br/> - Instalación de equipos gps<br/> - Instalación de conmutadores netpbx<br/> - Instalaciones eléctricas, sistemas de protección eléctrica<br/> - Instalación de cableados estructurados"},{title:"Sistemas | Fabricación",subtitle:"Sobre Nosotros",image:"../../public/temit-images/slider/camaras_pantallas_daniel_otro_optimized.jpg",text:"- Sistemas de video vigilancia local<br/> - Por internet sistemas de seguridad<br/> - Control de acceso iluminarias para alumbrado público<br/> - Naves industriales y almacén con sistema en leds"},{title:"Redes | Venta",subtitle:"Sobre Nosotros",image:"../../public/temit-images/slider/cableado_op.jpg",text:"- Instalación de cableados en fibra óptica <br/> - Implementación de redes estructuradas e inalámbricas<br/> - Fabricación y venta de materiales para sistemas de tierras y pararrayos <br/> - Venta de equipos para adiocomunicación y accesorios"},{title:"Soporte Técnico | Informatica",subtitle:"Sobre Nosotros",image:"../../public/temit-images/slider/soporte_op.jpg",text:"- Laptops y servidores por contrato o por evento<br/> - Enlaces punto a punto y multipunto<br/> - Integración y desarrollo de sistemas de electrónica  <br/> - Venta de equipo de computo y redes"},{title:"Valores y Compromiso",subtitle:"TEMIT",image:"../../public/temit-images/slider/torres_op.jpg",text:"- Puntualidad: permanente en nuestro trabajo diario y <br/>refleja el respeto por el tiempo de nuestros clientes<br/>Compromiso: Con todos nuestros clientes al ofrecerles servicios de calidad..."},{title:"¿Qué Ofrecemos?",subtitle:"Sobre Nosotros",image:"../../public/temit-images/slider/temit-i (2).png",text:"- Construcciones, Torres-redes sistemas y cctv<br/> - Mantenimientos e instalaciones de telecomunicaciones y construcciones <br/> - Soporte técnico a computadoras<br/> - laptop y servidores por contrato o por evento"}];class t{static preloadImages({images:e,completed:s}){const i=e.map((e=>t.preloadImage({imagePath:e})));Promise.all(i).then(s)}static preloadImage({imagePath:e}){return new Promise(((t,s)=>{let i=new Image;i.src=e,i.onload=t}))}}let i=document.querySelector("#slider-text"),r=document.querySelector("#slider-title"),o=document.querySelector("#slider-subtitle"),a=document.querySelector("#slider-image"),n=document.querySelector("#slider-text-content"),c=document.querySelector(".left-arrow"),l=document.querySelector(".right-arrow"),d=new class{constructor({elements:e,animationFunc:t,speed:s}){this.elements=e,this.animationFunc=t,this.index=0,this.size=e.length,this.speed=s,this.innerNext=this.innerNext.bind(this),this.stop=this.stop.bind(this),this.next=this.next.bind(this),this.prev=this.prev.bind(this)}innerNext(){this.index++,this.index>=this.size&&(this.index=0),this.animationFunc(this.elements[this.index])}innerPrev(){this.index--,this.index<0&&(this.index=this.size-1),this.animationFunc(this.elements[this.index])}next(){this.innerNext(),this.interval&&(this.stop(),this.play())}prev(){this.innerPrev(),this.interval&&(this.stop(),this.play())}play(){this.interval=setInterval(this.innerNext,this.speed)}stop(){clearInterval(this.interval)}}({elements:e,animationFunc:function(e){n.classList.add("hide"),a.classList.add("hide"),setTimeout((function(){r.innerHTML=e.title,o.innerHTML=e.subtitle,a.src=e.image,i.innerHTML=e.text,n.classList.remove("hide"),a.classList.remove("hide")}),600)},speed:11e3});d.play(),c.addEventListener("click",d.prev),l.addEventListener("click",d.next);const m=e.map((e=>e.image));t.preloadImages({images:m,completed:()=>{document.querySelector(".controls").style.display="block"}});s(655);navigator.serviceWorker&&navigator.serviceWorker.register("../sw.js")})()})();