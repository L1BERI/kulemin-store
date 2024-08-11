import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

window.addEventListener('load', () => {
  const textItems = document.querySelectorAll('.ticker__slide-text');

  const isOdd = (num) => num % 2 === 0;
  for (let i = 0; i <= textItems.length; i++) {
    if (isOdd(i)) {
      textItems[i].style.color = 'var(--main-color-1)';
    }
  }
});

const tickerSwiper = new Swiper('.ticker__swiper', {
  modules: [Autoplay],
  loop: true,
  slidesPerView: 1,
  speed: 3000,
  spaceBetween: 50,
  simulateTouch: false,
  autoplay: {
    delay: 0,
  },
  breakpoints: {
    1300: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2.5,
    },
    594: {
      slidesPerView: 2,
    },
    380:{
        
        slidesPerView: 1.5,
    }
  },
});
