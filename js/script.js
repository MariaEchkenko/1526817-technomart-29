let buyButton = document.querySelectorAll(".buy");
const basketPopup = document.querySelector(".modal-basket");
const basketClose = basketPopup.querySelector(".modal-close");
const buttonContinue = basketPopup.querySelector(".next-buy");

buyButton.forEach(function (button) {
  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    basketPopup.classList.add("modal-show");
  });
});

basketClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketPopup.classList.remove("modal-show");
});

buttonContinue.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (basketPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      basketPopup.classList.remove("modal-show");
    }
  }
});

const mapLink = document.querySelector(".cart-link");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

const feedbackLink = document.querySelector(".feedback-link");
const feedbackPopup = document.querySelector(".modal-feedback");
const feedbackClose = feedbackPopup.querySelector(".modal-close");
const feedbackForm = feedbackPopup.querySelector(".feedback-form");
const userName = feedbackPopup.querySelector(".user-info");
const userMail = feedbackPopup.querySelector(".user-mail");


let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
  if (storage) {
    userName.value = storage;
    userMail.focus();
  } else {
    userName.focus();
  }
});
feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!userName.value || !userMail.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", userName.value);
    }
  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove("modal-error");
    }
  }
});


const next = document.querySelector(".next");
const back = document.querySelector(".back");
const slideFirst = document.querySelector(".first-slide");
const slideSecond = document.querySelector(".second-slide");
const radioFirst = document.querySelector(".first-radio");
const radioSecond = document.querySelector(".second-radio");

next.addEventListener("click", function (evt) {
  evt.preventDefault();
  slideFirst.classList.remove("slide-current");
  slideSecond.classList.add("slide-current");
  radioFirst.classList.remove("current");
  radioSecond.classList.add("current");
});

back.addEventListener("click", function (evt) {
  evt.preventDefault();
  slideSecond.classList.remove("slide-current");
  slideFirst.classList.add("slide-current");
  radioSecond.classList.remove("current");
  radioFirst.classList.add("current");
});

const deliveryLink = document.querySelector(".button-delivery");
const deliverySlide = document.querySelector(".slide-delivery");
const guaranteeLink = document.querySelector(".button-guarantee");
const guaranteeSlide = document.querySelector(".slide-guarantee");
const creditLink = document.querySelector(".button-credit");
const creditSlide = document.querySelector(".slide-credit");

deliveryLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (guaranteeLink.classList.contains("slider-button-current")) {
    guaranteeLink.classList.remove("slider-button-current");
  } else {
    creditLink.classList.remove("slider-button-current");
  }
  deliveryLink.classList.add("slider-button-current");
  deliverySlide.classList.add("services-slide-current");
  guaranteeSlide.classList.remove("services-slide-current");
  creditSlide.classList.remove("services-slide-current");
});

guaranteeLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (deliveryLink.classList.contains("slider-button-current")) {
    deliveryLink.classList.remove("slider-button-current");
  } else {
    creditLink.classList.remove("slider-button-current");
  }
  guaranteeLink.classList.add("slider-button-current");
  guaranteeSlide.classList.add("services-slide-current");
  deliverySlide.classList.remove("services-slide-current");
  creditSlide.classList.remove("services-slide-current");
});

creditLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (deliveryLink.classList.contains("slider-button-current")) {
    deliveryLink.classList.remove("slider-button-current");
  } else {
    guaranteeLink.classList.remove("slider-button-current");
  }
  creditLink.classList.add("slider-button-current");
  creditSlide.classList.add("services-slide-current");
  deliverySlide.classList.remove("services-slide-current");
  guaranteeSlide.classList.remove("services-slide-current");
});
