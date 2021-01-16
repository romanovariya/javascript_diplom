!function(){"use strict";function e(e,n){if(e){if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,n):void 0}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=function(){function o(e){var t=e.main,n=e.wrap,r=e.slides,i=e.next,s=e.prev,l=e.infinity,a=void 0!==l&&l,c=e.position,d=void 0===c?0:c,u=e.slidesToShow,f=void 0===u?1:u,p=e.responsive,h=void 0===p?[]:p;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),t&&n||console.warn('sider-carousel: Необходимо два свойства: "main" и "wrap"'),this.main=document.querySelector(t),this.wrap=document.querySelector(n),this.slides=this.wrap.querySelectorAll(r),this.next=this.main.querySelector(i),this.prev=this.main.querySelector(s),this.slidesToShow=f,this.options={position:d,infinity:a,maxPosition:this.slides.length-this.slidesToShow,slideWidth:Math.floor(100/this.slidesToShow)},this.responsive=h}var r,i;return r=o,(i=[{key:"init",value:function(){this.addGloClass(),this.addStyles(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}},{key:"addGloClass",value:function(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrapper");var t,n=function(t,n){var o;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(o=e(t))){o&&(t=o);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,l=!0,a=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var e=o.next();return l=e.done,e},e:function(e){a=!0,s=e},f:function(){try{l||null==o.return||o.return()}finally{if(a)throw s}}}}(this.slides);try{for(n.s();!(t=n.n()).done;)t.value.classList.add("glo-slider__item")}catch(e){n.e(e)}finally{n.f()}}},{key:"addStyles",value:function(){var e=document.getElementById("sliderCarousel-style");e||((e=document.createElement("style")).id="sliderCarousel-style"),e.textContent="\n           .glo-slider {\n               overflow: hidden !important;\n           }\n           .glo-slider__wrapper {\n               display: flex !important;\n               transition: transform 0.5s !important;\n               will-change: transform !important;\n           }\n           .glo-slider__item {\n               flex: 0 0 ".concat(this.options.slideWidth,"% !important;\n               margin: auto 0 !important;\n           }\n        "),document.head.appendChild(e)}},{key:"controlSlider",value:function(){var e=this;this.prev.addEventListener("click",(function(t){t.preventDefault(),e.prevSlider()})),this.next.addEventListener("click",(function(t){t.preventDefault(),e.nextSlider()}))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.slideWidth,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.slideWidth,"%)"))}},{key:"addArrow",value:function(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next);var e=document.createElement("style");e.textContent="\n            .glo-slider__prev,\n            .glo-slider__next {\n                margin: 0;\n                border: 20px solid transparent;\n                background: transparent;\n            }\n            .glo-slider__next {\n                border-left-color: #19b5fe;\n            }\n            .glo-slider__prev {\n                border-right-color: #19b5fe;\n            }\n            .glo-slider__prev:hover,\n            .glo-slider__next:hover,\n            .glo-slider__prev:focus,\n            .glo-slider__next:focus {\n                background: transparent;\n                outline: transparent;\n            }\n        ",document.head.appendChild(e)}},{key:"responseInit",value:function(){var n,o=this,r=this.slidesToShow,i=this.responsive.map((function(e){return e.breakpoint})),s=Math.max.apply(Math,function(e){if(Array.isArray(e))return t(e)}(n=i)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(n)||e(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=function(){var e=document.documentElement.clientWidth;if(e<s)for(var t=0;t<i.length;t++)e<i[t]&&(o.slidesToShow=o.responsive[t].slidesToShow,o.options.slideWidth=Math.floor(100/o.slidesToShow),o.addStyles());else o.slidesToShow=r,o.options.slideWidth=Math.floor(100/o.slidesToShow),o.addStyles()};l(),window.addEventListener("resize",l)}}])&&n(r.prototype,i),o}();const r=function(e,t,n,o){var r=document.querySelector(e),i=document.querySelector(t),s=i.querySelector(n);r.addEventListener("click",(function(){i.style.display="block"}));var l=function(){s.querySelectorAll("input").forEach((function(e){e.value=""}))};i.addEventListener("click",(function(e){var t=e.target;t.closest(o)?(i.style.display="none",l()):(t=t.closest(n))||(i.style.display="none",l())}))},i=function(e){var t=document.querySelector(e),n=t.querySelector("form"),o=document.createElement("div");o.style.cssText="font-size: 2rem; color: white;",t.appendChild(o),document.querySelector("body"),t.addEventListener("submit",(function(e){e.preventDefault();var t=e.target;t.parentElement.appendChild(o),o.textContent="Загрузка...";var r=t.querySelectorAll("input"),i=new FormData(t),s={};i.forEach((function(e,t){s[t]=e})),function(e){return fetch("../server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(s).then((function(e){if(200!==e.status)throw new Error("status network not 200");n.style.display="none",o.textContent="Спасибо! Мы скоро с вами свяжемся!",r.forEach((function(e){e.value=""}))})).catch((function(e){n.style.display="none",o.textContent="Что-то пошло не так",console.error(e)}))})),t.addEventListener("input",(function(e){var n=e.target;!function(e){var t=e.querySelectorAll("input"),n=e.querySelector("button"),o=!1;n.disabled=!1,t.forEach((function(e){""===e.value.trim()?(n.disabled=!0,e.classList.add("_error"),o=!0):e.classList.contains("_phone")?18!==e.value.length||!1===/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(e.value)?(n.disabled=!0,o=!0,e.classList.add("_error")):(o=!1,e.classList.remove("_error")):e.classList.contains("_name")?e.value.length<2?(n.disabled=!0,o=!0,e.classList.add("_error")):(o=!1,e.classList.remove("_error")):e.classList.contains("checkbox")&&(e.checked?o=!1:(n.disabled=!0,o=!0))})),!1===o&&(n.disabled=!1)}(t),function(e){e.classList.contains("_phone")?e.value=e.value.replace(/[^0-9+]/gi,""):e.classList.contains("_name")&&(e.value=e.value.replace(/([^А-Яа-яёЁ])/,""))}(n)}))};function s(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){a=!0,i=e},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw i}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var a,c,d,u,f,p,h,v,y,m,g,b,S,_,w,L,k,E;k=document.querySelector(".clubs-list"),E=k.querySelector("ul"),k.addEventListener("click",(function(){"none"===E.style.display||""===E.style.display?E.style.display="block":E.style.display="none"})),b=".main-slider",S=".slide",_=document.querySelector(b).querySelectorAll(S),w=0,L=function(){_[w].style.display="none",++w>=_.length&&(w=0),_[w].style.display="flex"},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;setInterval(L,e)}(),new o({main:".services-slider",wrap:".services-slider__wrapper",slides:".slide",prev:".prev",next:".next",slidesToShow:5,responsive:[{breakpoint:1024,slidesToShow:4},{breakpoint:768,slidesToShow:3},{breakpoint:576,slidesToShow:2}]}).init(),function(e,t,n){for(var o=document.querySelector(e),r=o.querySelectorAll(t),i=o.querySelector(n),s=0;s<r.length;s++){var l=document.createElement("li");l.classList.add("dot"),0===s&&l.classList.add("slick-active"),i.appendChild(l)}var a,c=document.querySelectorAll(".dot"),d=0,u=function(e,t,n){e[t].classList.remove(n)},f=function(e,t,n){e[t].classList.add(n)},p=function(){u(r,d,"slide-active"),u(c,d,"slick-active"),++d>=r.length&&(d=0),f(r,d,"slide-active"),f(c,d,"slick-active")},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;a=setInterval(p,e)};o.addEventListener("click",(function(e){e.preventDefault();var t=e.target;t.closest(".gallery-arrow, .dot")&&(u(r,d,"slide-active"),u(c,d,"slick-active"),t.closest(".next")?d++:t.closest(".prev")?d--:t.closest(".dot")&&c.forEach((function(e,n){e===t&&(d=n)})),d>=r.length&&(d=0),d<0&&(d=r.length-1),f(r,d,"slide-active"),f(c,d,"slick-active"))})),o.addEventListener("mouseover",(function(e){(e.target.closest(".gallery-arrow")||e.target.closest(".dot"))&&clearInterval(a)})),o.addEventListener("mouseout",(function(e){(e.target.closest(".gallery-arrow")||e.target.closest(".dot"))&&h()})),h(1500)}(".gallery-slider",".slide",".slider-dots"),r(".free-visit","#free_visit_form",".form-content",".close-form"),r(".callme-btn","#callback_form",".form-content",".close-form"),p=".fixed-gift",h="#gift",v=".form-content",y=".close-btn",m=document.querySelector(p),g=document.querySelector(h),m&&(m.addEventListener("click",(function(){g.style.display="block",m.style.display="none"})),g.addEventListener("click",(function(e){var t=e.target;t.closest(y)?g.style.display="none":(t=t.closest(v))||(g.style.display="none")}))),i(".form2"),i(".form1"),a=".formfree",c="#thanks",d=document.querySelector(a),u=document.querySelector(c),f=u.querySelector(".thanks-message"),d.addEventListener("submit",(function(e){e.preventDefault();var t=e.target,n=t.querySelectorAll("input"),o=new FormData(t),r={};o.forEach((function(e,t){r[t]=e})),function(e){return fetch("../server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(r).then((function(e){if(200!==e.status)throw new Error("status network not 200");u.style.display="block",n.forEach((function(e){e.value=""}))})).catch((function(e){u.style.display="block",f.textContent="Что-то пошло не так",console.error(e)}))})),d.addEventListener("input",(function(e){var t;(t=e.target).classList.contains("_phone")?t.value=t.value.replace(/[^0-9+]/gi,""):t.classList.contains("_name")&&(t.value=t.value.replace(/([^А-Яа-яёЁ])/,"")),function(e){var t=e.querySelectorAll("input"),n=e.querySelector("button"),o=!1;n.disabled=!1,t.forEach((function(e){""===e.value.trim()?(n.disabled=!0,e.classList.add("_error"),o=!0):e.classList.contains("_phone")?e.value.length>=11&&e.value.length<=18?!1===/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(e.value)?(n.disabled=!0,o=!0,e.classList.add("_error")):(n.disabled=!1,o=!1,e.classList.remove("_error")):(n.disabled=!0,o=!0,e.classList.add("_error")):e.classList.contains("_name")?e.value.length<2?(n.disabled=!0,o=!0,e.classList.add("_error")):(o=!1,e.classList.remove("_error")):e.classList.contains("checkbox")&&(e.checked?o=!1:(n.disabled=!0,o=!0))})),!1===o&&(n.disabled=!1)}(d)})),function(e,t){var n=document.querySelector(e),o=document.querySelector(t),r=o.querySelector(".thanks-message");n.addEventListener("submit",(function(e){e.preventDefault();var t=e.target,n=t.querySelectorAll("input"),i=new FormData(t),s={};i.forEach((function(e,t){s[t]=e})),function(e){return fetch("../server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(s).then((function(e){if(200!==e.status)throw new Error("status network not 200");o.style.display="block",n.forEach((function(e){e.value=""}))})).catch((function(e){o.style.display="block",r.textContent="Что-то пошло не так",console.error(e)}))}));var i=!1,s=!1,l=n.querySelector("button"),a=function(e){var t=e.querySelectorAll("input");l.disabled=!1,t.forEach((function(e){e.classList.contains("_phone")&&(e.value=e.value.replace(/[^0-9+]/gi,""),e.value.length>=11&&e.value.length<=18?!1===/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(e.value)?(l.disabled=!0,i=!0,e.classList.add("_error")):(i=!1,e.classList.remove("_error")):(l.disabled=!0,i=!0,e.classList.add("_error")))})),!1===i&&(l.disabled=!1)},c=function(){var e=n.querySelectorAll(".radio");!1===e[0].checked&&!1===e[1].checked?(l.disabled=!0,s=!0):s=!1},d=function(){l.disabled=!1!==s||!1!==i};n.addEventListener("input",(function(e){e.target,a(n),c(),d()})),n.addEventListener("click",(function(e){c(),a(n),d()}))}("#footer_form","#thanks"),function(e,t,n){var o=document.querySelector(e);o.addEventListener("click",(function(e){var r=e.target;r.closest(n)?o.style.display="none":(r=r.closest(t))||(o.style.display="none")}))}("#thanks",".form-content",".close-btn"),window.addEventListener("scroll",(function(){var e=window.pageYOffset||document.documentElement.scrollTop;document.getElementById("totop").style.display=e>700?"block":"none"})),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",n=document.querySelectorAll(e);function o(e){var n=e.keyCode,o=t,r=o.replace(/\D/g,""),i=this.value.replace(/\D/g,"");console.log(o);var s=0,l=o.replace(/[_\d]/g,(function(e){return s<i.length?i.charAt(s++)||r.charAt(s):e}));-1!==(s=l.indexOf("_"))&&(l=l.slice(0,s));var a=o.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(a=new RegExp("^"+a+"$")).test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=l),"blur"===e.type&&this.value.length<5&&(this.value="")}var r,i=s(n);try{for(i.s();!(r=i.n()).done;){var l=r.value;l.addEventListener("input",o),l.addEventListener("focus",o),l.addEventListener("blur",o)}}catch(e){i.e(e)}finally{i.f()}}("._phone")}();