// Get html elements
let burgerBtn = document.querySelector('.header__burger');
let burgerBody = document.querySelector('.header');
let headerSetting = document.querySelector('.header__settings');
let nav = document.querySelector('.nav');
let pageAnchor = document.querySelectorAll ('.nav-link');
console.log (pageAnchor);

// switch header classname
function switchHeaderClassName () {
    let burgerBody = document.querySelector ('.header');
    burgerBody.classList.toggle ('header__nav--active');
     burgerBtn.classList.toggle('burger--active');
}

pageAnchor.forEach(link => {
    link.addEventListener('click', switchHeaderClassName);
});

burgerBtn.addEventListener ('click', switchHeaderClassName);

