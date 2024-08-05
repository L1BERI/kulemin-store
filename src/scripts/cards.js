import Swiper from 'swiper';
import { EffectFlip, Autoplay } from 'swiper/modules';

import 'swiper/css';

const swiperFirst = new Swiper('.first-swiper-cards', {
  modules: [EffectFlip],
  effect: 'flip',
  speed: 1000,
//   loop: true,
});

const cards = document.querySelectorAll('[data-card]')

cards.forEach(el => {
    el.addEventListener('mouseover', function(e){
        
        if(el.querySelector('.first-swiper-cards')){
            swiperFirst.slideNext;
        }
        if(el.querySelector('.second-swiper-cards')){
            swiperSecond.slideNext;
        }
        if(el.querySelector('.thirst-swiper-cards')){
            swiperThirst.slideNext;
        }

    })
    el.addEventListener('mouseout', function(e){
        
        if(el.querySelector('.first-swiper-cards')){
            swiperFirst.slidePrev;
        }
        if(el.querySelector('.second-swiper-cards')){
            swiperSecond.slidePrev;
        }
        if(el.querySelector('.thirst-swiper-cards')){
            swiperThirst.slidePrev;
        }
    })
    
});

const swiperSecond = new Swiper('.second-swiper-cards', {
  modules: [EffectFlip],
  effect: 'flip',
  speed: 1000,
});
const swiperThirst = new Swiper('.thirst-swiper-cards', {
  modules: [EffectFlip],
  effect: 'flip',
  speed: 1000,
});



