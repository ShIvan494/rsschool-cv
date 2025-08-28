// Select the "About Me" button by its class
const aboutBtn = document.querySelector('.section-button');

// Function to create and display the modal window
function createModalWindow() {

    // Create the semi-transparent overlay
    let overlay = document.createElement('div');
    overlay.className = 'modal-overlay';

    // Create the modal window container
    let modalWindow = document.createElement('div');
    modalWindow.className = 'modal-window';

    // Create the text block inside the modal
    let modalWindowText = document.createElement('p');
    modalWindowText.className = 'modal-window-text';
    modalWindowText.setAttribute ('data-translate-key', 'modal-window-text');
    modalWindowText.textContent = `I am a passionate Frontend developer with a strong attention to detail and a commitment to building responsive, user-friendly web interfaces. I have solid skills in HTML, CSS (including Flexbox and Grid), JavaScript (ES6+), and DOM manipulation. I am experienced in creating clean, maintainable code and transforming complex designs into efficient, accessible web pages. I am familiar with modern frontend tools and methodologies such as BEM, Git/GitHub, and responsive design principles. I continuously improve my skills and stay updated with the latest trends and best practices in web development. I enjoy working in collaborative environments and communicate effectively with designers and backend developers to deliver seamless user experiences. My projects demonstrate my ability to write functional, optimized, and clean code, with a focus on accessibility and performance. I am eager to grow professionally and contribute to innovative web development teams.`;

    // Create the close button
    let btnClose = document.createElement('button');
    btnClose.className = 'modal-close-button';
    btnClose.setAttribute ('data-translate-key', 'modal-close-button');
    btnClose.textContent = 'Close';

    // Add the text and close button to the modal window
    modalWindow.appendChild(modalWindowText);
    modalWindow.appendChild(btnClose);

    // Add the overlay and modal to the document body
    document.body.appendChild(overlay);
    document.body.appendChild(modalWindow);

    // Trigger animation by adding the "active" class after render
    requestAnimationFrame(() => {
        overlay.classList.add('active');
        modalWindow.classList.add('active');
    });

    // Function to close the modal and remove elements
    function closeModal() {
        modalWindow.classList.remove('active');
        overlay.classList.remove('active');

        // Wait for CSS transition to complete before removing from DOM
        setTimeout(() => {
            modalWindow.remove();
            overlay.remove();
        }, 300);
    }

    // Close the modal when clicking the button or overlay
    btnClose.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
}

// Attach event listener to the "About Me" button
aboutBtn.addEventListener('click', createModalWindow);