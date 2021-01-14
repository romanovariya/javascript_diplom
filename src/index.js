import clubsList from './modules/clubsList';
import autoSlider from './modules/autoSlider';
import SliderCarousel from './modules/sliderCarousel';
import gallerySlider from './modules/gallerySlider';


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