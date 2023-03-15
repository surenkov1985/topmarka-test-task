const reserveBtn = document.querySelector(".intro__description_btn");
const formBg = document.querySelector(".reserve");
const closeBtn = document.querySelector(".reserve__close_btn");
const contactsForm = document.querySelector(".reserve__form");
const submitBtn = contactsForm.querySelector(".form__submit");
const nameInput = contactsForm.querySelector(".name-input");
const phoneInput = contactsForm.querySelector(".phone-input");
const inputsList = contactsForm.querySelectorAll(".form__input");
const resultBlock = document.querySelector(".reserve__result");
const resultBtn = document.querySelector(".reserve__result_btn");
const errors = document.querySelectorAll(".err");

const inputEvents = ["input", "keydown", "blur"];

reserveBtn.addEventListener("click", function () {
	formBg.classList.add("active");
});

formBg.addEventListener("click", function (e) {
	if (e.target === formBg) closeForm();
});

closeBtn.addEventListener("click", function () {
	closeForm();
});

resultBtn.addEventListener("click", function () {
	closeForm();
});

contactsForm.addEventListener("submit", function (e) {
	e.preventDefault();
	let validateInput = [];

	for (let input of inputsList) {
		if (input.dataset.test === "true") {
			validateInput.push("true");
		} else {
			validateInput.push("false");
		}
	}

	if (validateInput.every((item) => item === "true")) {
		const data = new FormData(contactsForm);
		fetch("https://jsonplaceholder.typicode.com/users", { method: "POST", body: data })
			.then((res) => {
				console.log(res);
				return res.json();
			})
			.then((data) => {
				if (data && data.id) {
					contactsForm.style.display = "none";
					resultBlock.style.display = "flex";
				}
			});
	}
});

inputEvents.forEach((event) => {
	nameInput.addEventListener(event, function (e) {
		let key = e.key;
		let str = e.target.value;
		let testReg = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
		let testString = "Введите корректное имя";

		nameInput.value = str;

		testValue(nameInput, testReg, testString);

		if (key === "Enter" || e.type === "blur") {
			e.preventDefault();
			nameInput.dataset.reg = "true";

			testValue(nameInput, testReg, testString);

			if (nameInput.dataset.test === "true") {
				for (let i = 0; i < inputsList.length; i++) {
					if (inputsList[i].classList.contains("name")) {
						inputsList[i + 1].focus();
					}
				}
			}
		}
	});

	phoneInput.addEventListener(event, function (e) {
		let key = e.key;
		let testReg = /[(\+\d\s\(\d\d\d\)\s\d\d\d-\d\d-\d\d)(\d\s\(\d\d\d\)\s\d\d\d-\d\d-\d\d)]/gi;
		let valRegRu = /\D/gi;
		let valRegEur = /\+\d{15}/;
		let testString = "Введите валидный номер";

		const errElem = document.querySelector(".err-phone");

		let cursorPosition = e.target.selectionStart;
		let str = formatValueInput(phoneInput, valRegRu);
		let formatStr = "";

		let rusTel = ["7", "8", "9"];

		if (cursorPosition !== phoneInput.value.length) {
			if (e.data && valRegRu.test(e.data)) {
				phoneInput.value = str;
			}

			return;
		}

		if (rusTel.indexOf(str[0]) > -1) {
			if (str[0] === "7") formatStr = "+" + str[0];

			if (str[0] === "8") formatStr = str[0];

			if (str[0] === "9") formatStr = "+7" + str[0];

			if (str.length > 1) {
				formatStr += " (" + str.slice(1, 4);
			}

			if (str.length >= 5) {
				formatStr += ") " + str.slice(4, 7);
			}

			if (str.length >= 8) {
				formatStr += "-" + str.slice(7, 9);
			}

			if (str.length >= 10) {
				formatStr += "-" + str.slice(9, 11);
			}

			testValue(phoneInput, testReg, testString);
		} else {
			if (str.length >= 1) formatStr = "+" + str;

			testValue(phoneInput, valRegEur, testString);
		}

		phoneInput.value = formatStr;

		if (key === "Enter" || e.type === "blur") {
			e.preventDefault();

			phoneInput.dataset.reg = "true";

			if (str[0] === 0 || str[0] < 7) testValue(phoneInput, valRegEur, testString);

			if (str[0] <= 9 && str[0] >= 7) testValue(phoneInput, testReg, testString);

			if (str.length < 10) {
				errElem.innerHTML = testString;
				phoneInput.classList.add("error");
				phoneInput.dataset.test = "false";
			}

			if (phoneInput.dataset.test === "true") {
				for (let i = 0; i < inputsList.length; i++) {
					if (inputsList[i].classList.contains("phone")) {
						submitBtn.focus();
					}
				}
			}
		}
	});
});

function closeForm() {
	formBg.classList.remove("active");
	for (let error of errors) {
		error.innerHTML = "";
	}
	for (let input of inputsList) {
		input.value = "";
		input.dataset.test = "false";
		input.classList.remove("error");
	}

	contactsForm.style.display = "flex";
	resultBlock.style.display = "none";
}

function testValue(elem, reg, string) {
	if (elem.dataset.reg === "true") {
		let str = elem.value;
		const errElem = document.querySelector(`.err-${elem.id}`);

		if (!str.length) {
			errElem.innerHTML = "Заполните это поле";
			elem.classList.add("error");
			elem.dataset.test = "false";
		} else if (!reg.test(str)) {
			errElem.innerHTML = string;
			elem.classList.add("error");
			elem.dataset.test = "false";
		} else {
			elem.classList.remove("error");
			elem.dataset.test = "true";
			errElem.innerHTML = "";
		}
	}
}

function formatValueInput(elem, regexp) {
	let str = elem.value.replace(regexp, "");

	return str;
}
