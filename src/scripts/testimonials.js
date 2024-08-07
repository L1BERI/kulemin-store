import Swiper from 'swiper';
import { Autoplay, Scrollbar } from 'swiper/modules';

import 'swiper/css';

const testimonialsSwiper = new Swiper('.testimonials__swiper',{
    modules: [Autoplay, Scrollbar],
    slidesPerView: 1,
    spaceBetween: 35,
    slidesPerGroup: 1,
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        dragSize: 76,
    },
    autoplay:{
        delay: 3000,
        pauseOnMouseEnter: true,
    },
    breakpoints:{
        1200:{
            slidesPerView: 3.3,
            scrollbar: {
                dragSize: 176,
            },
        },
        576:{
            slidesPerView: 2.3,
            
        },
        456:{
            slidesPerView:1.4,
        },
    }

})