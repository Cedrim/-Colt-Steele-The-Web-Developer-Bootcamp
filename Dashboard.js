// ORIGIN AULA 2 = 10:20 MIN
// DISCOVER AULA 2 = 45:32 MIN

// 19 MIN HORA DO MODAL!!!!!!!!!!!!!!!!!


/* ◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘ SWIPER ◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘ */

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})


