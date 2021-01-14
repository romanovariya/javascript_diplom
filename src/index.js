import clubsList from './modules/clubsList';
import autoSlider from './modules/autoSlider';
import SliderCarousel from './modules/sliderCarousel';


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
    slidesToShow: 5
});
carousel.init();