// Get button
let contWindBut = document.querySelector('.contact-item-button');

//Get contact-list
let socialContactList = document.querySelector('.contacts__social-list');

//Get overlay

let overlay = document.querySelector('.page');


//Open contact-list

function openContactList () {
    socialContactList.classList.add ( 'active');
    overlay.classList.add ('active');
}

contWindBut.addEventListener ('click', openContactList);
