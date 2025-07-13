const aboutBtn = document.querySelector('.section-button');

function createModalWindow() {

    let overlay = document.createElement('div');
    overlay.className = 'modal-overlay';

    let modalWindow = document.createElement('div');
    modalWindow.className = 'modal-window';

    let modalWindowText = document.createElement('p');
    modalWindowText.className = 'modal-window-text';
    modalWindowText.textContent = `I am a passionate Frontend developer with a strong attention to detail and a commitment to building responsive, user-friendly web interfaces. I have solid skills in HTML, CSS (including Flexbox and Grid), JavaScript (ES6+), and DOM manipulation. I am experienced in creating clean, maintainable code and transforming complex designs into efficient, accessible web pages. I am familiar with modern frontend tools and methodologies such as BEM, Git/GitHub, and responsive design principles. I continuously improve my skills and stay updated with the latest trends and best practices in web development. I enjoy working in collaborative environments and communicate effectively with designers and backend developers to deliver seamless user experiences. My projects demonstrate my ability to write functional, optimized, and clean code, with a focus on accessibility and performance. I am eager to grow professionally and contribute to innovative web development teams.`;

    let btnClose = document.createElement('button');
    btnClose.className = 'modal-close-button';
    btnClose.textContent = 'Close';

    modalWindow.appendChild(modalWindowText);
    modalWindow.appendChild(btnClose);

    document.body.appendChild(overlay);
    document.body.appendChild(modalWindow);

    requestAnimationFrame(() => {
        overlay.classList.add('active');
        modalWindow.classList.add('active');
    });


    function closeModal() {
        modalWindow.classList.remove('active');
        overlay.classList.remove('active');


        setTimeout(() => {
            modalWindow.remove();
            overlay.remove();
        }, 300);
    }


    btnClose.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
}

aboutBtn.addEventListener('click', createModalWindow);