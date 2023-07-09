let accord_title = document.getElementsByClassName ('accordition_title');
console.log (accord_title);
let accord_body = document.getElementsByClassName ('accordition_body');
console.log (accord_body);
let accord_arrow = document.getElementsByClassName ('accordition_title_arrow')

for (let i = 0; i < accord_title.length; i++) {

    accord_title[i].addEventListener ('click', () => {

        accord_body[i].classList.toggle ('accordition_body_click');
        accord_arrow[i].classList.toggle ('accordition_title_arrow_click');
    }

    );
}