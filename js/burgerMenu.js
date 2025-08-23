// Get html elements
let burgerBtn = document.querySelector('.header__burger');
let burgerBody = document.querySelector('.header');
let headerSetting = document.querySelector('.header__settings');
let nav = document.querySelector('.nav');
let pageAnchor = document.querySelectorAll ('.nav-link');
let logo = document.querySelector ('.header__logo');

// switch header classname
function switchHeaderClassName () {

    burgerBody.classList.toggle ('header__nav--active');
    burgerBtn.classList.toggle('burger--active');

}

//open menu
burgerBtn.addEventListener ('click', switchHeaderClassName);

//close menu
pageAnchor.forEach(link => {

    link.addEventListener('click', switchHeaderClassName);

});
logo.addEventListener ("click", switchHeaderClassName);