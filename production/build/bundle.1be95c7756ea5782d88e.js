!function(){"use strict";function e(e,n){if(e){if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,n):void 0}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=function(){function o(e){var t=e.main,n=e.wrap,i=e.slides,s=e.next,r=e.prev,l=e.infinity,a=void 0!==l&&l,c=e.position,d=void 0===c?0:c,u=e.slidesToShow,p=void 0===u?1:u,h=e.responsive,f=void 0===h?[]:h;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),t&&n||console.warn('sider-carousel: Необходимо два свойства: "main" и "wrap"'),this.main=document.querySelector(t),this.wrap=document.querySelector(n),this.slides=this.wrap.querySelectorAll(i),this.next=this.main.querySelector(s),this.prev=this.main.querySelector(r),this.slidesToShow=p,this.options={position:d,infinity:a,maxPosition:this.slides.length-this.slidesToShow,slideWidth:Math.floor(100/this.slidesToShow)},this.responsive=f}var i,s;return i=o,(s=[{key:"init",value:function(){this.addGloClass(),this.addStyles(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}},{key:"addGloClass",value:function(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrapper");var t,n=function(t,n){var o;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(o=e(t))){o&&(t=o);var i=0,s=function(){};return{s,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,a=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var e=o.next();return l=e.done,e},e:function(e){a=!0,r=e},f:function(){try{l||null==o.return||o.return()}finally{if(a)throw r}}}}(this.slides);try{for(n.s();!(t=n.n()).done;)t.value.classList.add("glo-slider__item")}catch(e){n.e(e)}finally{n.f()}}},{key:"addStyles",value:function(){var e=document.getElementById("sliderCarousel-style");e||((e=document.createElement("style")).id="sliderCarousel-style"),e.textContent="\n           .glo-slider {\n               overflow: hidden !important;\n           }\n           .glo-slider__wrapper {\n               display: flex !important;\n               transition: transform 0.5s !important;\n               will-change: transform !important;\n           }\n           .glo-slider__item {\n               flex: 0 0 ".concat(this.options.slideWidth,"% !important;\n               margin: auto 0 !important;\n           }\n        "),document.head.appendChild(e)}},{key:"controlSlider",value:function(){var e=this;this.prev.addEventListener("click",(function(t){t.preventDefault(),e.prevSlider()})),this.next.addEventListener("click",(function(t){t.preventDefault(),e.nextSlider()}))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.slideWidth,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.slideWidth,"%)"))}},{key:"addArrow",value:function(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next);var e=document.createElement("style");e.textContent="\n            .glo-slider__prev,\n            .glo-slider__next {\n                margin: 0;\n                border: 20px solid transparent;\n                background: transparent;\n            }\n            .glo-slider__next {\n                border-left-color: #19b5fe;\n            }\n            .glo-slider__prev {\n                border-right-color: #19b5fe;\n            }\n            .glo-slider__prev:hover,\n            .glo-slider__next:hover,\n            .glo-slider__prev:focus,\n            .glo-slider__next:focus {\n                background: transparent;\n                outline: transparent;\n            }\n        ",document.head.appendChild(e)}},{key:"responseInit",value:function(){var n,o=this,i=this.slidesToShow,s=this.responsive.map((function(e){return e.breakpoint})),r=Math.max.apply(Math,function(e){if(Array.isArray(e))return t(e)}(n=s)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(n)||e(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=function(){var e=document.documentElement.clientWidth;if(e<r)for(var t=0;t<s.length;t++)e<s[t]&&(o.slidesToShow=o.responsive[t].slidesToShow,o.options.slideWidth=Math.floor(100/o.slidesToShow),o.addStyles());else o.slidesToShow=i,o.options.slideWidth=Math.floor(100/o.slidesToShow),o.addStyles()};l(),window.addEventListener("resize",l)}}])&&n(i.prototype,s),o}();const i=function(e,t,n,o){var i=document.querySelector(e),s=document.querySelector(t),r=s.querySelector(n);i.addEventListener("click",(function(){s.style.display="block"}));var l=function(){r.querySelectorAll("input").forEach((function(e){e.value=""}))};s.addEventListener("click",(function(e){var t=e.target;t.closest(o)?(s.style.display="none",l()):(t=t.closest(n))||(s.style.display="none",l())}))},s=function(e){var t=document.querySelector(e),n=t.querySelector("form"),o=document.createElement("div");o.style.cssText="font-size: 2rem; color: white;",t.appendChild(o),document.querySelector("body"),t.addEventListener("submit",(function(e){e.preventDefault();var t=e.target;t.parentElement.appendChild(o),o.textContent="Загрузка...";var i=t.querySelectorAll("input"),s=new FormData(t),r={};s.forEach((function(e,t){r[t]=e})),function(e){return fetch("../server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(r).then((function(e){if(200!==e.status)throw new Error("status network not 200");n.style.display="none",o.textContent="Спасибо! Мы скоро с вами свяжемся!",i.forEach((function(e){e.value=""}))})).catch((function(e){n.style.display="none",o.textContent="Что-то пошло не так",console.error(e)}))})),t.addEventListener("input",(function(e){var n;(n=e.target).classList.contains("_phone")?n.value=n.value.replace(/[^0-9+]/gi,""):n.classList.contains("_name")&&(n.value=n.value.replace(/([^А-Яа-яёЁ])/,"")),function(e){var t=e.querySelectorAll("input"),n=e.querySelector("button"),o=!1;n.disabled=!1,t.forEach((function(e){""===e.value.trim()?(n.disabled=!0,o=!0):e.classList.contains("_phone")?e.value.length>=6&&e.value.length<=11||(n.disabled=!0,o=!0):e.classList.contains("_name")?e.value.length<2&&(n.disabled=!0,o=!0):e.classList.contains("checkbox")&&(e.checked||(n.disabled=!0,o=!0))})),!1===o&&(n.disabled=!1)}(t)}))};var r,l,a,c,d,u,p,h,f,v,y,m,g,S,b,w,k,_;k=document.querySelector(".clubs-list"),_=k.querySelector("ul"),k.addEventListener("click",(function(){"none"===_.style.display||""===_.style.display?_.style.display="block":_.style.display="none"})),m=".main-slider",g=".slide",S=document.querySelector(m).querySelectorAll(g),b=0,w=function(){S[b].style.display="none",++b>=S.length&&(b=0),S[b].style.display="flex"},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;setInterval(w,e)}(),new o({main:".services-slider",wrap:".services-slider__wrapper",slides:".slide",prev:".prev",next:".next",slidesToShow:5,responsive:[{breakpoint:1024,slidesToShow:4},{breakpoint:768,slidesToShow:3},{breakpoint:576,slidesToShow:2}]}).init(),function(e,t,n){for(var o=document.querySelector(e),i=o.querySelectorAll(t),s=o.querySelector(n),r=0;r<i.length;r++){var l=document.createElement("li");l.classList.add("dot"),0===r&&l.classList.add("slick-active"),s.appendChild(l)}var a,c=document.querySelectorAll(".dot"),d=0,u=function(e,t,n){e[t].classList.remove(n)},p=function(e,t,n){e[t].classList.add(n)},h=function(){u(i,d,"slide-active"),u(c,d,"slick-active"),++d>=i.length&&(d=0),p(i,d,"slide-active"),p(c,d,"slick-active")},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;a=setInterval(h,e)};o.addEventListener("click",(function(e){e.preventDefault();var t=e.target;t.closest(".gallery-arrow, .dot")&&(u(i,d,"slide-active"),u(c,d,"slick-active"),t.closest(".next")?d++:t.closest(".prev")?d--:t.closest(".dot")&&c.forEach((function(e,n){e===t&&(d=n)})),d>=i.length&&(d=0),d<0&&(d=i.length-1),p(i,d,"slide-active"),p(c,d,"slick-active"))})),o.addEventListener("mouseover",(function(e){(e.target.closest(".gallery-arrow")||e.target.closest(".dot"))&&clearInterval(a)})),o.addEventListener("mouseout",(function(e){(e.target.closest(".gallery-arrow")||e.target.closest(".dot"))&&f()})),f(1500)}(".gallery-slider",".slide",".slider-dots"),i(".free-visit","#free_visit_form",".form-content",".close-form"),i(".callme-btn","#callback_form",".form-content",".close-form"),u=".fixed-gift",p="#gift",h=".form-content",f=".close-btn",v=document.querySelector(u),y=document.querySelector(p),v&&(v.addEventListener("click",(function(){y.style.display="block",v.style.display="none"})),y.addEventListener("click",(function(e){var t=e.target;t.closest(f)?y.style.display="none":(t=t.closest(h))||(y.style.display="none")}))),s(".form2"),s(".form1"),r=".formfree",l="#thanks",a=document.querySelector(r),c=document.querySelector(l),d=c.querySelector(".thanks-message"),a.addEventListener("submit",(function(e){e.preventDefault();var t=e.target,n=t.querySelectorAll("input"),o=new FormData(t),i={};o.forEach((function(e,t){i[t]=e})),function(e){return fetch("../server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(i).then((function(e){if(200!==e.status)throw new Error("status network not 200");c.style.display="block",n.forEach((function(e){e.value=""}))})).catch((function(e){c.style.display="block",d.textContent="Что-то пошло не так",console.error(e)}))})),a.addEventListener("input",(function(e){var t;(t=e.target).classList.contains("_phone")?t.value=t.value.replace(/[^0-9+]/gi,""):t.classList.contains("_name")&&(t.value=t.value.replace(/([^А-Яа-яёЁ])/,"")),function(e){var t=e.querySelectorAll("input"),n=e.querySelector("button"),o=!1;n.disabled=!1,t.forEach((function(e){""===e.value.trim()?(n.disabled=!0,o=!0):e.classList.contains("_phone")?e.value.length>=6&&e.value.length<=11||(n.disabled=!0,o=!0):e.classList.contains("_name")?e.value.length<2&&(n.disabled=!0,o=!0):e.classList.contains("checkbox")&&(e.checked||(n.disabled=!0,o=!0))})),!1===o&&(n.disabled=!1)}(a)})),function(e,t,n){var o=document.querySelector(e);o.addEventListener("click",(function(e){var i=e.target;i.closest(n)?o.style.display="none":(i=i.closest(t))||(o.style.display="none")}))}("#thanks",".form-content",".close-btn")}();