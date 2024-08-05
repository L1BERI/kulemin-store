import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
export const adaptiveSliderStart = () => {
  const adaptiveSlider = document.querySelector('.splide');

  if (window.innerWidth <= 992) {
    adaptiveSlider.style.display = 'block';
    new Splide('.splide', {
      pagination: false,
      perPage: 1,
      gap: 120,
      padding: 100,
      autoplay: true,
    }).mount();
  } else {
    adaptiveSlider.style.display = 'none';
  }
};
