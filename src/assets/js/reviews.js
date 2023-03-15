import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";

const reviewsSlider = new Swiper(".reviews__content", {
	loop: true,
	direction: "horizontal",
	slidesPerView: 4,
	slidesPerGroup: 4,
	spaceBetween: 20,
	zoom: true,
	grabCursor: true,
	breakpoints: {
		320: {
			slidesPerView: 1.1,
			slidesPerGroup: 1,
			spaceBetween: 18,
		},
		550: {
			slidesPerView: 1.5,
			slidesPerGroup: 1,
			spaceBetween: 18,
		},
		768: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 20,
		},
		991: {
			slidesPerView: 3,
			slidesPerGroup: 3,
			spaceBetween: 20,
		},
		1350: {
			slidesPerView: 4,
			slidesPerGroup: 4,
			spaceBetween: 20,
		},
	},
});
