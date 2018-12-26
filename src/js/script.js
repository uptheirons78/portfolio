import { toggle } from './modules/Menu';
import { yearInTheFooter } from './modules/FooterDate';
import Swiper from 'swiper';
import swiper from './modules/SwipeMe';
import sal from 'sal.js';

toggle();
yearInTheFooter();

sal({
  threshold: 0.5,
  once: false,
});




