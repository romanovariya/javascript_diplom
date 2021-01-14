!function(){"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var n,i,o,r,s,l,a,d=function(){function n(t){var e=t.main,i=t.wrap,o=t.slides,r=t.next,s=t.prev,l=t.infinity,a=void 0!==l&&l,d=t.position,p=void 0===d?0:d,c=t.slidesToShow,u=void 0===c?1:c;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),e&&i||console.warn('sider-carousel: Необходимо два свойства: "main" и "wrap"'),this.main=document.querySelector(e),this.wrap=document.querySelector(i),this.slides=this.wrap.querySelectorAll(o),this.next=this.main.querySelector(r),this.prev=this.main.querySelector(s),this.slidesToShow=u,this.options={position:p,infinity:a,maxPosition:this.slides.length-this.slidesToShow,slideWidth:Math.floor(100/this.slidesToShow)}}var i,o;return i=n,(o=[{key:"init",value:function(){this.addGloClass(),this.addStyles(),this.prev&&this.next||this.addArrow(),this.controlSlider()}},{key:"addGloClass",value:function(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrapper");var e,n=function(e,n){var i;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(i=function(e,n){if(e){if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){i&&(e=i);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,l=!0,a=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var t=i.next();return l=t.done,t},e:function(t){a=!0,s=t},f:function(){try{l||null==i.return||i.return()}finally{if(a)throw s}}}}(this.slides);try{for(n.s();!(e=n.n()).done;)e.value.classList.add("glo-slider__item")}catch(t){n.e(t)}finally{n.f()}}},{key:"addStyles",value:function(){var t=document.createElement("style");t.id="sliderCarousel-style",t.textContent="\n           .glo-slider {\n               overflow: hidden !important;\n           }\n           .glo-slider__wrapper {\n               display: flex !important;\n               transition: transform 0.5s !important;\n               will-change: transform !important;\n           }\n           .glo-slider__item {\n               flex: 0 0 ".concat(this.options.slideWidth,"% !important;\n               margin: auto 0 !important;\n           }\n        "),document.head.appendChild(t)}},{key:"controlSlider",value:function(){var t=this;this.prev.addEventListener("click",(function(e){e.preventDefault(),t.prevSlider()})),this.next.addEventListener("click",(function(e){e.preventDefault(),t.nextSlider()}))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.slideWidth,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.slideWidth,"%)"))}},{key:"addArrow",value:function(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next);var t=document.createElement("style");t.textContent="\n            .glo-slider__prev,\n            .glo-slider__next {\n                margin: 0;\n                border: 20px solid transparent;\n                background: transparent;\n            }\n            .glo-slider__next {\n                border-left-color: #19b5fe;\n            }\n            .glo-slider__prev {\n                border-right-color: #19b5fe;\n            }\n            .glo-slider__prev:hover,\n            .glo-slider__next:hover,\n            .glo-slider__prev:focus,\n            .glo-slider__next:focus {\n                background: transparent;\n                outline: transparent;\n            }\n        ",document.head.appendChild(t)}}])&&e(i.prototype,o),n}();l=document.querySelector(".clubs-list"),a=l.querySelector("ul"),l.addEventListener("click",(function(){"none"===a.style.display||""===a.style.display?a.style.display="block":a.style.display="none"})),n=".main-slider",i=".slide",o=document.querySelector(n).querySelectorAll(i),r=0,s=function(){o[r].style.display="none",++r>=o.length&&(r=0),o[r].style.display="flex"},function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;setInterval(s,t)}(),new d({main:".services-slider",wrap:".services-slider__wrapper",slides:".slide",prev:".prev",next:".next",slidesToShow:5}).init()}();