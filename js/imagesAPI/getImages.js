import { getImg } from './useAPI.js'

let btnMainDish = document.querySelector('.mainDish'),
    btnDesserts = document.querySelector('.desserts'),
    btnBeverages = document.querySelector('.beverages'),
    btnWines = document.querySelector('.wines');

let btnOption;

const animation = () => {
    TweenMax.from(".menu__items", 2, {
        delay: 0.01,
        opacity: 0,
        ease: Expo.easeInOut,
    });
}

window.addEventListener('load', () => {
    btnOption = 'dish elegant'
    getImg(btnOption, "dish");
    TweenMax.from(".menu_ourMenu", 2, {
        delay: 0.1,
        opacity: 0,
        ease: Expo.easeInOut,
    });
});

btnMainDish.addEventListener('click', () => {
    btnOption = 'dish elegant';
    getImg(btnOption, "dish");
    animation();
})

btnDesserts.addEventListener('click', () => {
    btnOption = 'dessert sweet';
    getImg(btnOption, "dessert");
    animation();
})

btnBeverages.addEventListener('click', () => {
    btnOption = 'latté';
    getImg(btnOption, 'drinks');
    animation();
})

btnWines.addEventListener('click', () => {
    btnOption = 'wine elegant';
    getImg(btnOption, "wines");
    animation();
})