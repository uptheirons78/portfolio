import { toggle } from './modules/Menu';
import { yearInTheFooter } from './modules/FooterDate';
import Swiper from 'swiper';
import swiper from './modules/SwipeMe';
import sal from 'sal.js';
import jump from 'jump.js';

toggle();
yearInTheFooter();

// sal js 
sal({
  threshold: 0.5,
  once: false,
});

// jump js
const btnOne = document.querySelector('#btn-1');
const btnTwo = document.querySelector('#btn-2');
const btnThree = document.querySelector('#btn-3');

btnOne.addEventListener('click', () => jump('#portfolio', {duration:2000}));
btnTwo.addEventListener('click', () => jump('#contact', {duration:2000}));
btnThree.addEventListener('click', () => jump('#contact', {duration:2000}));





