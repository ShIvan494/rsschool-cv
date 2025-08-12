//translation
let translations = {
"en": {
    "navi-link_1": "Contacts",
    "navi-link_2": "Myself",
    "navi-link_3": "Skills",
    "navi-link_4": "Code",
    "navi-link_5": "Courses",
    "navi-link_6": "Projects",
    "pageTitle": "Ivan Sharakhouski&#44;<br><span>frontend developer</span>",
    "pageSubTitle_1": "About Myself",
    "SectionButtonText": "About me",
    "pageSubTitle_2": "Code example",
    "sectionText": "This function sorts the array by tasks completed",
    "pageSubTitle_3": "Skills",
    "pageSubTitle_4": "Projects",
    "cardTitle_1": "CV&#45;Site",
    "cardButton_1": "Visit",
    "cardTitle_2": "Empty",
    "cardButton_2": "Visit",
    "cardTitle_3": "Empty",
    "cardButton_3": "Visit",
    "pageSubTitle_5": "Contacts",
    "city":  "Wrocław, Poland",
    "pageSubTitle_6": "Courses",
    "educationItem_1": "Faculty of Law&#44; Belarusian State University",
    "educationItem_2": "RS School ;Frontend Course&#41;",
    "educationItem_3": "Hi-Tech Park Educational Center; Minsk",
    "educationItem_4": "Languages:",
    "language-item_1": "Polish",
    "language-item_2": "English",
    "language-item_3": "Russian"
},

"pl": {
    "navi-link_1": "Kontakty",
    "navi-link_2": "O mnie",
    "navi-link_3": "Umiejętności",
    "navi-link_4": "Kod",
    "navi-link_5": "Kursy",
    "navi-link_6": "Projekty",
    "pageTitle": "Ivan Sharakhouski&#44;<br><span>web deweloper</span>",
    "pageSubTitle_1": "O mnie",
    "SectionButtonText": "O mnie",
    "pageSubTitle_2": "Przykład kodu",
    "sectionText": "Ta funkcja sortuje tablicę według ukończonych zadań",
    "pageSubTitle_3": "Umiejętności",
    "pageSubTitle_4": "Projekty",
    "cardTitle_1": "CV&#45;Site",
    "cardButton_1": "Odwiedź",
    "cardTitle_2": "Pustka",
    "cardButton_2": "Odwiedź",
    "cardTitle_3": "Pustka",
    "cardButton_3": "Odwiedź",
    "pageSubTitle_5": "Kontakty",
    "city":  "Wrocław, Polska",
    "pageSubTitle_6": "Kursy",
    "educationItem_1": "Wydział prawa; Białoruski Uniwersytet Państwowy.",
    "educationItem_2": "RS School -Frontend Course;",
    "educationItem_3": "Centrum Edukacyjne Hi-Tech Park; Mińsk",
    "educationItem_4": "Języki:",
    "language-item_1": "Polski",
    "language-item_2": "Angielski",
    "language-item_3": "Rosyjski"
},

"ru": {
    "navi-link_1": "Контакты",
    "navi-link_2": "Обо мне",
    "navi-link_3": "Навыки",
    "navi-link_4": "Код",
    "navi-link_5": "Образование",
    "navi-link_6": "Проекты",
    "pageTitle": "Иван Шараховский&#44;<br><span>веб-разработчик</span>",
    "pageSubTitle_1": "Обо мне",
    "SectionButtonText": "Обо мне",
    "pageSubTitle_2": "Пример кода",
    "sectionText": "Эта функция сортирует массив по количеству завершенных задач",
    "pageSubTitle_3": "навыки",
    "pageSubTitle_4": "Проекты",
    "cardTitle_1": "CV&#45;сайт",
    "cardButton_1": "Перейти",
    "cardTitle_2": "Пусто",
    "cardButton_2": "Перейти",
    "cardTitle_3": "Пусто",
    "cardButton_3": "Перейти",
    "pageSubTitle_5": "Контакт",
    "city":  "Вроцлав, Польша",
    "pageSubTitle_6": "Образование",
    "educationItem_1": "Юрилический факультет Белорусский государственный университет",
    "educationItem_2": "RS School &#40;курсы фронтэнда",
    "educationItem_3": "Образовательный центр парка ввысоких технологий; Минск",
    "educationItem_4": "Языки:",
    "language-item_1": "Польский",
    "language-item_2": "Английский",
    "language-item_3": "Русский"
}
}

//Get items
let transElem = document.querySelectorAll('[data-translate-key]');

//Get lang buttons
let langBtns = document.querySelectorAll ('.header__lang-item');

function translatePage (lang) {

    transElem.forEach (el => {

        const key = el.getAttribute('data-translate-key');
        const translation = translations[lang][key];
            if (translation) {
                if (translation.includes('<br>') || translation.includes('<span')) {
        el.innerHTML = translation;
    } else {
        el.textContent = translation;
    }
    } else {
    el.textContent = translations['en'][key] || el.textContent;
    }
});
}

langBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const selectedLang = btn.getAttribute('lang');
    translatePage(selectedLang);
  })
})
