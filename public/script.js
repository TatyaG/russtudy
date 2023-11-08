// Бургер-меню

let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let body = document.querySelector("body");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("noscroll");
});

// Очистка

function updateButtonVisibility(input) {
  const button = input.nextElementSibling;
  if (input.value.length === 0) {
    button.classList.add("hidden");
  } else {
    button.classList.remove("hidden");
  }
}

function clearField(input) {
  input.value = "";
  updateButtonVisibility(input);
}

const inputWithClear = document.querySelectorAll(".form__input");

inputWithClear.forEach((item) => {
  item.addEventListener("input", () => {
    updateButtonVisibility(item);
    if (
      !document.querySelector(".modal__btn").classList.contains("hidden") &&
      item.classList.contains("just-validate-error-field")
    ) {
      item.style.backgroundImage = "none";
    }
    if (
      document.querySelector(".modal__btn").classList.contains("hidden") &&
      item.classList.contains("just-validate-error-field")
    ) {
      item.style.backgroundImage = "url(../img/error.svg)";
    }
  });

  const clearButton = item.nextElementSibling;
  clearButton.addEventListener("click", (event) => {
    event.preventDefault();
    clearField(item);
    if (
      item.value.length == 0 &&
      item.classList.contains("just-validate-error-field")
    ) {
      item.style.backgroundImage = "url(../img/error.svg)";
    }
  });
});

// Валидация

let validation = new JustValidate("#form");
validation.addField("#emailForma", [
  {
    rule: "required",
    errorMessage: "Введите E-mail",
  },
  {
    rule: "email",
    errorMessage: "Введите корректный E-mail",
  },
]);

// Слайдер

var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
