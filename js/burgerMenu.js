// Get burger-menu button
let burgerBtn = document.querySelector('.header__burger');

// switch class
function openBurgerMenu () {
    let burgerBody = document.querySelector ('.header')
    burgerBody.classList.toggle('header__nav--active');
}

burgerBtn.addEventListener ('click', openBurgerMenu());

