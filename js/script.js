

var nav = document.querySelector('.menu');        //меню
var navToggle = document.querySelector('.main-nav__toggle'); //открыть меню
var navClose = document.querySelector('.main-nav__close');   //закрыть меню

navToggle.addEventListener('click', function(event) {        //клик на тогл
    event.preventDefault();
    navToggle.classList.add('main-nav__toggle--hidden');      //добавить класс к тоглу
    navClose.classList.remove('main-nav__close--hidden');     //убрать класс у кнопки закрыть
    nav.classList.add('menu-show');          //+ класс показывающий меню
});

navClose.addEventListener('click', function(event) {         //клик на закрыть
    event.preventDefault();
    navToggle.classList.remove('main-nav__toggle--hidden');   //убрать класс у тогла
    navClose.classList.add('main-nav__close--hidden');        //добавить класс кнопке закрыть
    //nav.classList.add('main-nav__items-hidden');             
    nav.classList.remove('menu--show');            //убрать класс показывающий меню
});


// navToggle.addEventListener('click', function() {
//     if (navMain.classList.contains('main-nav__items-hidden')) {
//         navMain.classList.remove('page-header__hidden');
//         navMain.classList.add('main-nav--opened');

        
//     } else {
//         navMain.classList.add('main-nav--closed');
//         navMain.classList.remove('main-nav--opened');

//     }
// });