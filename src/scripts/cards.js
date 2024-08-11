import Swiper from 'swiper';
import { EffectFlip, Autoplay } from 'swiper/modules';

import 'swiper/css';

const swiperFirst = new Swiper('.first-swiper-cards', {
    modules: [EffectFlip, Autoplay],
    effect: 'flip',
    speed: 1000,
    loop: true,
    simulateTouch: true,
    allowTouchMove: true,
    breakpoints: {
      992:{
          allowTouchMove: false,
          loop: false,
          simulateTouch: false,
      }
    },
    autoplay:{
      delay: 3500,
      pauseOnMouseEnter: true,
    }
});

const cards = document.querySelectorAll('[data-card]')



window.addEventListener('load', function(){
    const windowWidth = window.innerWidth;
  
    if (windowWidth > 992){
        cards.forEach(el => {
            el.addEventListener('mouseover', function(e){
                
                if(el.querySelector('.first-swiper-cards')){
                    swiperFirst.slideNext();
                }
                if(el.querySelector('.second-swiper-cards')){
                    swiperSecond.slideNext();
                }
                if(el.querySelector('.thirst-swiper-cards')){
                    swiperThirst.slideNext();
                }
        
            })
            el.addEventListener('mouseout', function(e){
                
                if(el.querySelector('.first-swiper-cards')){
                    swiperFirst.slidePrev();
                }
                if(el.querySelector('.second-swiper-cards')){
                    swiperSecond.slidePrev();
                }
                if(el.querySelector('.thirst-swiper-cards')){
                    swiperThirst.slidePrev();
                }
            })
            
        });

    }
})




const swiperSecond = new Swiper('.second-swiper-cards', {
    modules: [EffectFlip, Autoplay],
    effect: 'flip',
    speed: 1000,
    loop: false,
    simulateTouch: true,
    allowTouchMove: true,
    breakpoints: {
      992:{
          allowTouchMove: false,
          loop: false,
          simulateTouch: false,
      }
    },
    autoplay:{
      delay: 4000,
      pauseOnMouseEnter: true,
    }
  
});
const swiperThirst = new Swiper('.thirst-swiper-cards', {
    modules: [EffectFlip, Autoplay],
    effect: 'flip',
    speed: 1000,
    loop: true,
    simulateTouch: true,
    allowTouchMove: true,
    breakpoints: {
      992:{
          allowTouchMove: false,
          loop: false,
          simulateTouch: false,
      }
    },
  autoplay:{
    delay: 4500,
    pauseOnMouseEnter: true,
  }
});



