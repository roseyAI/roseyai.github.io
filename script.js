// ================================
// Terminal Chic Portfolio - JavaScript
// ================================

// ================================
// Terminal Typing Animation
// ================================

const typingText = "echo 'Building AI-powered automations that save 10,000+ hours annually...'";
const typingElement = document.getElementById('typed-text');
let charIndex = 0;

function typeText() {
    if (charIndex < typingText.length) {
        typingElement.textContent = typingText.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeText, 50); // Adjust typing speed here
    }
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    setTimeout(typeText, 1000); // Delay before starting
});

// ================================
// Smooth Scroll Navigation
// ================================

const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.section');

// Handle navigation clicks
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = item.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ================================
// Active Navigation State (Scroll Spy)
// ================================

function updateActiveNav() {
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('data-section') === sectionId) {
                    item.classList.add('active');
                }
            });
        }
    });
}

// Update active nav on scroll
window.addEventListener('scroll', updateActiveNav);

// ================================
// Intersection Observer for Animations
// ================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.addEventListener('DOMContentLoaded', () => {
    // Observe project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => observer.observe(card));

    // Observe service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => observer.observe(card));

    // Observe stack categories
    const stackCategories = document.querySelectorAll('.stack-category');
    stackCategories.forEach(category => observer.observe(category));
});

// ================================
// Right Navigation - Always Visible
// ================================

const bottomNav = document.getElementById('bottomNav');

// Navigation is now always visible on the right side
// No scroll-based hiding/showing needed

// ================================
// Matrix Background Effect (Optional Enhanced Version)
// ================================

function createMatrixEffect() {
    const matrixBg = document.querySelector('.matrix-bg');
    if (!matrixBg) return;

    // Optional: Add random matrix characters
    const chars = '01';
    let matrixHTML = '';

    for (let i = 0; i < 50; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 3 + Math.random() * 5;

        matrixHTML += `
            <span style="
                position: absolute;
                left: ${left}%;
                top: -20px;
                color: var(--color-primary);
                font-family: var(--font-mono);
                font-size: 12px;
                opacity: 0.1;
                animation: matrixFall ${duration}s linear ${delay}s infinite;
            ">${char}</span>
        `;
    }

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes matrixFall {
            0% { transform: translateY(0); opacity: 0; }
            10% { opacity: 0.1; }
            90% { opacity: 0.1; }
            100% { transform: translateY(100vh); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    // Uncomment to enable falling characters effect
    // matrixBg.innerHTML = matrixHTML;
}

// Uncomment to enable matrix effect
// createMatrixEffect();

// ================================
// Stats Counter Animation
// ================================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (element.textContent.includes('+') ? '+' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '');
        }
    }, 16);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.replace('+', '').replace('%', ''));
                const hasPlus = text.includes('+');
                const hasPercent = text.includes('%');

                stat.textContent = '0' + (hasPlus ? '+' : '') + (hasPercent ? '%' : '');

                setTimeout(() => {
                    animateCounter(stat, number, 2000);
                    if (hasPercent) {
                        setTimeout(() => {
                            stat.textContent = stat.textContent.replace('+', '') + '%';
                        }, 2000);
                    }
                }, 100);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe hero stats
const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ================================
// Parallax Effect on Scroll (Subtle)
// ================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');

    if (heroSection) {
        const parallaxElements = heroSection.querySelectorAll('.hero-content > *');
        parallaxElements.forEach((el, index) => {
            const speed = (index + 1) * 0.05;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }
}, { passive: true });

// ================================
// Smooth Reveal on Load
// ================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// ================================
// Project Card Click (Optional - for future expansion)
// ================================

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        // Future: Open project modal or navigate to project detail page
        // For now, just add a subtle feedback
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
            card.style.transform = '';
        }, 150);
    });
});

// ================================
// Console Easter Egg
// ================================

console.log(
    '%c👋 Hello, fellow developer!',
    'color: #00FF41; font-size: 20px; font-weight: bold; font-family: monospace;'
);
console.log(
    '%c🤖 Looking to automate your workflows? Let\'s connect!',
    'color: #00FF41; font-size: 14px; font-family: monospace;'
);
console.log(
    '%c🔗 Upwork: https://www.upwork.com/freelancers/~01c86edb65b24f814a',
    'color: #ffffff; font-size: 12px; font-family: monospace;'
);
console.log(
    '%c💚 This site was built with vanilla HTML, CSS, and JavaScript',
    'color: #a0a0a0; font-size: 12px; font-family: monospace;'
);

// ================================
// Performance Optimization - Debounce
// ================================

function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events if needed
// const debouncedScrollHandler = debounce(updateActiveNav, 10);
// window.addEventListener('scroll', debouncedScrollHandler);

// ================================
// Keyboard Navigation
// ================================

document.addEventListener('keydown', (e) => {
    // Navigate with arrow keys (optional)
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
    }
});

// ================================
// Loading Complete
// ================================

console.log('%c✅ Portfolio loaded successfully!', 'color: #00FF41; font-weight: bold;');
