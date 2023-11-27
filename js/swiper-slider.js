/************************************************************************ Slider - Swiper **************************************************************************************/
new Swiper('.sponsors-block-slider', {

	simulateTouch: true,
	touchRatio: 1,
	touchAngle: 90,
	grabCursor: true,

	// slideToClickedSlide: true,

	autoHeight: true,

	watchOverflow: true,

	spaceBetween: 30,
	freeMode: true,

	breakpoints: {
		1366: {
			slidesPerView: 8.5,
		},
		1024: {
			slidesPerView: 7.2,
		},
		768: {
			slidesPerView: 6.2,
		},
		360: {
			slidesPerView: 3.2,
		},
		140: {
			slidesPerView: 1.2,
		},
	},

	autoplay: {
		delay: 3000,
		stopOnLastslide: false,
		disableOnIntrection: false,
	}
});
/******************************************************************/

new Swiper('.cards-block-slider', {

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	simulateTouch: true,
	touchRatio: 1,
	touchAngle: 90,
	grabCursor: true,

	autoHeight: true,
	watchOverflow: true,
	slideToClickedSlide: true,
	spaceBetween: 30,

	breakpoints: {
		1920: {
			slidesPerView: 4.9,
		},
		1366: {
			slidesPerView: 3.9,
		},
		1024: {
			slidesPerView: 2.9,
		},
		768: {
			slidesPerView: 1.9,
		},
		360: {
			slidesPerView: 1,
		},
		140: {
			slidesPerView: 1,
		},
	},
});
/************************************************************************ Slider - Swiper **************************************************************************************/