import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Используется библиотека Swiper
export const swiper = new Swiper(".swiper", {
  roundLengths: true,
  modules: [Navigation, Pagination],

  loop: true, // Повторение слайдов заного
  navigation: {
    // Стрелки для прокрутки
    nextEl: ".bt-arrow_type_left",
    prevEl: ".bt-arrow_type_right",
  },

  slidesPerView: 1,
  spaceBetween: 40,

  autoHeight: true,
});
export default swiper;
