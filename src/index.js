'use strict';
import clubsList from './modules/clubsList';
import autoSlider from './modules/autoSlider';
import SliderCarousel from './modules/sliderCarousel';
import gallerySlider from './modules/gallerySlider';
import formToggle from './modules/formToggle';
import showGift from './modules/showGift';
import sendForm from './modules/sendForm';
import sendFormModal from './modules/sendFormModal';
import footerForm from './modules/footerForm';
import maskPhone from './modules/maskPhone';

import closeModal from './modules/closeModal';
import scrollToTop from './modules/scrollToTop';
import modalMenu from './modules/modalMenu';
import menuToggle from './modules/menuToggle';
import stickyNav from './modules/stickyNav';

//выпадающий список залов
clubsList();

//слайдер на главной
autoSlider('.main-slider', '.slide');

//карусель
const carousel = new SliderCarousel({
    main: '.services-slider',
    wrap: '.services-slider__wrapper',
    slides: '.slide',
    prev: '.prev',
    next: '.next',
    slidesToShow: 5,

    responsive: [{
        breakpoint: 1024,
        slidesToShow: 4
    },
    {
        breakpoint: 768,
        slidesToShow: 3
    },
    {
        breakpoint: 576,
        slidesToShow: 2
    }
]

});
carousel.init();

//gallery
gallerySlider('.gallery-slider', '.slide', '.slider-dots');

//popup
formToggle('.free-visit', '#free_visit_form', '.form-content', '.close-form');
formToggle('.callme-btn', '#callback_form', '.form-content', '.close-form');

//gift
showGift('.fixed-gift', '#gift', '.form-content', '.close-btn');

//ajax
sendForm('.form2');
sendForm('.form1');

sendFormModal('.formfree', '#thanks');
footerForm('#footer_form', '#thanks');

closeModal('#thanks', '.form-content', '.close-btn');

scrollToTop();

maskPhone('._phone');

modalMenu();
menuToggle();

stickyNav();