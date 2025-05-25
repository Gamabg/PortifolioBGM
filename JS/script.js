const hamburger = document.querySelector('.hamburger');
const headerMenu = document.querySelector('.header-menu');

hamburger.addEventListener('click', () => {
    headerMenu.classList.toggle('active');
});

