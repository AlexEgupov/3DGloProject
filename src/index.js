import timer from './modules/timer';
import menu from './modules/menu';
import modal from "./modules/modal";
import smoothScroll from './modules/smoothScroll';
import inputCheck from './modules/inputCheck';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

timer('6 jule 2022');
menu();
modal();
smoothScroll();
inputCheck();
tabs();
slider('.portfolio-content', '.portfolio-item', '.portfolio-dots');
calc(100);
sendForm({
    formId: 'form1',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
});
sendForm({ formId: 'form2' });
sendForm({ formId: 'form3' });