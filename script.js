// ================================
// Modern Card Nav Portfolio - Rose
// Hamburger Menu Animation
// ================================

const menuToggle = document.getElementById('menuToggle');
const cardNav = document.getElementById('cardNav');

if (menuToggle && cardNav) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        cardNav.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !cardNav.contains(e.target)) {
            menuToggle.classList.remove('active');
            cardNav.classList.remove('active');
        }
    });

    // Close menu on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            menuToggle.classList.remove('active');
            cardNav.classList.remove('active');
        }
    });
}

console.log('%c✨ Portfolio loaded successfully!', 'color: #7dd3a0; font-weight: bold; font-size: 14px;');
