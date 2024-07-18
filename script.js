const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".promo-swiper-right-arrow",
    prevEl: ".promo-swiper-left-arrow",
  },
  // autoplay: {
  //   delay: 2000,
  // },
});

const swiper2 = new Swiper(".products-slider", {
  spaceBetween: 30,
  direction: "horizontal",
  loop: true,
  slidesPerView: 4,
  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".promo-swiper-right",
    prevEl: ".promo-swiper-left",
  },
  breakpoints: {
    // when window width is >= 320px
    1180: {
      slidesPerView: 4,
      spaceBetween: 20,
    },

    826: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    545: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 0,
    },

    // when window width is >= 480px
  },
});
