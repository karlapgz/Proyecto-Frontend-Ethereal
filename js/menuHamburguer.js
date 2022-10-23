let menuHamburguer = document.querySelector('.menu_hamburguer'),
    menu = document.querySelector('.menu'),
    menu_close = document.querySelector('.close');

menuHamburguer.addEventListener('click', () => {
    menu.classList.toggle('menu_close');
});