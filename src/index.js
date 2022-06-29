import timer from './modules/timer';
import menu from './modules/menu';
import modal from "./modules/modal";
import smoothScroll from './modules/smoothScroll';
import inputCheck from './modules/inputCheck';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';

timer('30 june 2022');
menu();
modal();
smoothScroll();
inputCheck();
tabs();
slider('.portfolio-content', '.portfolio-item', '.portfolio-dots');
calc(100);