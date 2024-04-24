import "./components/swiper/swiper";
import "./styles/index.css";
import "./components/accordion/accordion.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
const burgerBtn = document.querySelector(".header__burger-btn");
const forms = document.querySelector(".popup_type_feedback");
const burgerBtn2 = document.querySelector(".burger-popup-btn");
const popupBurger = document.querySelector(".burger-popup");
const feedbackButton = document.querySelector(".header__feedback-btn");
const popupFeedbackForm = new PopupWithForm(".popup_type_feedback");
popupFeedbackForm.setEventListeners();
feedbackButton.addEventListener("click", () => {
  popupFeedbackForm.open();
});
burgerBtn.addEventListener("click", () => {
  popupBurger.classList.toggle("open-burger");
});
burgerBtn2.addEventListener("click", () => {
  forms.classList.toggle("popup_opened");
});
