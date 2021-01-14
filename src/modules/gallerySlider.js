const gallerySlider = (wrapper, item, dots) => {
    const slider = document.querySelector(wrapper),
        slide = slider.querySelectorAll(item),
		ulDots = slider.querySelector(dots);

	for (let i = 0; i < slide.length; i++) {
        const li = document.createElement('li');
        li.classList.add('dot');
		if (i === 0) {
			li.classList.add('slick-active');
        }
		ulDots.appendChild(li);
	}

	const dot = document.querySelectorAll('.dot');
	let currentSlide = 0,
		interval;

	const prevSlide = (elem, index, strClass) => {
		elem[index].classList.remove(strClass);
	};

	const nextSlide = (elem, index, strClass) => {
		elem[index].classList.add(strClass);
	};

	const autoPlaySlide = () => {

		prevSlide(slide, currentSlide, 'slide-active');
		prevSlide(dot, currentSlide, 'slick-active');
		currentSlide++;

		if (currentSlide >= slide.length) {
			currentSlide = 0;
		}
		nextSlide(slide, currentSlide, 'slide-active');
		nextSlide(dot, currentSlide, 'slick-active');

	};

	const startSlide = (time = 3000) => {
		interval = setInterval(autoPlaySlide, time);
	};

	const stopSlide = () => {
		clearInterval(interval);
	};

	slider.addEventListener('click', event => {
		event.preventDefault();

		const target = event.target;

		if (!target.closest('.gallery-arrow, .dot')) {
			return;
		}

		prevSlide(slide, currentSlide, 'slide-active');
		prevSlide(dot, currentSlide, 'slick-active');

		if (target.closest('.next')) {
			currentSlide++;
		} else if (target.closest('.prev')) {
			currentSlide--;
		} else if (target.closest('.dot')) {
			dot.forEach((elem, index) => {
				if (elem === target) {
					currentSlide = index;
				}
			});
		}

		if (currentSlide >= slide.length) {
			currentSlide = 0;
		}
		if (currentSlide < 0) {
			currentSlide = slide.length - 1;
		}

		nextSlide(slide, currentSlide, 'slide-active');
		nextSlide(dot, currentSlide, 'slick-active');
	});

	slider.addEventListener('mouseover', event => {
        if (event.target.closest('.gallery-arrow') ||
		event.target.closest('.dot')) {
			stopSlide();
		}

	});

	slider.addEventListener('mouseout', event => {
        if (event.target.closest('.gallery-arrow') ||
        event.target.closest('.dot')) {
			startSlide();
		}
	});


	startSlide(1500);
};

export default gallerySlider;