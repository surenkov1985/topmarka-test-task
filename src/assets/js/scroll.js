const header = document.querySelector(".head");
const links = document.querySelectorAll(".nav-link");
const content = document.querySelector(".content");
const scrollTopBtn = document.querySelector(".scroll-top-btn");

// отслеживаем прокрутку документа на 15%

const observeOptions = {
	threshold: 0.15,
};
const observeCallback = (entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			console.log(entry.isIntersecting, entry.intersectionRatio);
			scrollTopBtn.classList.add("active");
		} else {
			scrollTopBtn.classList.remove("active");
		}
	});
};
const observer = new IntersectionObserver(observeCallback, observeOptions);

observer.observe(content);
const headHeight = header.clientHeight;

// прокрутка к блокам по клику по пункту меню

for (let link of links) {
	link.addEventListener("click", function (e) {
		e.preventDefault();

		const currentBlock = document.querySelector(e.target.hash);
		if (currentBlock) {
			window.scroll({
				top: currentBlock.offsetTop - headHeight,
				behavior: "smooth",
			});
		}

		console.log(currentBlock.offsetTop, headHeight);
	});
}

// прокрутка к началу документа

scrollTopBtn.addEventListener("click", function () {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
});
