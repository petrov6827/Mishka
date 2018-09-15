var navMain = document.querySelector('main-nav');
var navToggle = document.querySelector('page-header__toggle');
var navTop = document.querySelector('page-header__top');

navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');

        
    } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');

    }
});