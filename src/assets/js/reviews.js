import Swiper from "swiper";

const reviews = document.querySelectorAll(".reviews__card");
const fullReview = document.querySelector(".review");
const reviewCloseBtn = fullReview.querySelector(".review__close_btn");
const fullReviewName = fullReview.querySelector(".review__name");
const fullReviewAge = fullReview.querySelector(".review__age");
const fullReviewText = fullReview.querySelector(".review__text");
const fullReviewRating = fullReview.querySelector(".review__rating");

// открываем окно с отзывом

for (let card of reviews) {
	card.addEventListener("click", function (e) {
		const name = card.querySelector(".reviews__name").textContent;
		const age = card.querySelector(".reviews__age").textContent;
		const text = card.querySelector(".reviews__text").textContent;
		const rating = card.querySelector(".reviews__rating").innerHTML;
		console.log(rating);

		fullReviewName.innerHTML = name;
		fullReviewAge.innerHTML = age;
		fullReviewText.innerHTML = text;
		fullReviewRating.innerHTML = rating;

		fullReview.classList.add("active");
		document.body.style.overflow = "hidden";
	});
}

// закрываем окно с отзыва

reviewCloseBtn.addEventListener("click", function (e) {
	closeReview();
});

fullReview.addEventListener("click", function (e) {
	if (e.target === fullReview) {
		closeReview();
	}
});

function closeReview() {
	fullReview.classList.remove("active");
	fullReviewName.innerHTML = "";
	fullReviewAge.innerHTML = "";
	fullReviewText.innerHTML = "";
	fullReviewRating.innerHTML = "";
	document.body.style.overflow = "inherit";
}

// слайдер отзывов

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
