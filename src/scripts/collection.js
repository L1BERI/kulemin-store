import Swiper from 'swiper';
import { EffectCards, Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';

window.addEventListener('DOMContentLoaded', () => {

    const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
      let swiper;
  
      breakpoint = window.matchMedia(breakpoint);
  
      const enableSwiper = function(className, settings) {
        swiper = new Swiper(className, settings);
  
      
      }
  
      const checker = function() {
        if (breakpoint.matches) {
          return enableSwiper(swiperClass, swiperSettings);
        } else {
          if (swiper !== undefined) swiper.destroy(true, true);
          return;
        }
      };
  
      breakpoint.addEventListener('change', checker);
      checker();
    }
  
   
  
    resizableSwiper(
      '(max-width: 992px)',
      '.collection__swiper',
      {
        modules: [EffectCards, Navigation, Autoplay],
        slidesPerView: 1,
        effect: 'cards',
        // autoplay: {
        //     delay: 3000,
        // },
       cardsEffect:{
        slideShadows: false,
       },
       navigation:{
        nextEl: '.button-next',
        prevEl: '.button-prev',
       },            
       
      },
    );
  
    // inside button

    const collectionItem = document.querySelectorAll('[data-collection-item]')
    
    collectionItem.forEach(el => {
        el.addEventListener('mouseover', function(){
            el.classList.toggle('card-active')
            
        })
        el.addEventListener('mouseout', function(){
            el.classList.remove('card-active')
        })
        el.addEventListener('click', function(){
          el.classList.toggle('card-active')
        })
    });
    
  });


  