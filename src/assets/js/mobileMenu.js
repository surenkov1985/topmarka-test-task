const burgerBtn = document.querySelector(".mobile__menu_btn");
const mobileBg = document.querySelector(".mobile");
const closeBtn = document.querySelector(".mobile__close_btn");
const links = document.querySelectorAll(".link");

burgerBtn.addEventListener("click", function (e) {
	mobileBg.classList.add("active");
	document.body.style.overflow = "hidden" ;
});

closeBtn.addEventListener("click", function (e) {
	mobileBg.classList.remove("active");
	document.body.style.overflow = "inherit" ;
});
mobileBg.addEventListener("click", function (e) {
	if (e.target === mobileBg) {
		mobileBg.classList.remove("active");
		document.body.style.overflow = "inherit";
	}
});

for (let link of links) {
	link.addEventListener("click", function (e) {
		mobileBg.classList.remove("active");
	});
}
