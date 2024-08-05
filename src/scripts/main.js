import '../scss/main.scss';
import { burgerOpen } from './burger';
import './cards';
import {adaptiveSliderStart} from './splide';

burgerOpen();
let windowWidthTimeout = setTimeout(adaptiveSliderStart(), 1000)
windowWidthTimeout;
