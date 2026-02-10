// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-out-cubic'
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
let isMenuOpen = false;

if(menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        if(isMenuOpen) {
            mobileMenu.style.opacity = '1';
            mobileMenu.style.pointerEvents = 'auto';
            menuBtn.classList.add('open');
            // Change hamburger to X - simpler with CSS classes or just let it be a simple interaction
             menuBtn.children[0].classList.add('rotate-45', 'translate-y-2');
             menuBtn.children[1].style.opacity = '0';
             menuBtn.children[2].classList.add('-rotate-45', '-translate-y-2');
        } else {
            mobileMenu.style.opacity = '0';
            mobileMenu.style.pointerEvents = 'none';
            menuBtn.classList.remove('open');
            // Reset hamburger
            menuBtn.children[0].classList.remove('rotate-45', 'translate-y-2');
            menuBtn.children[1].style.opacity = '1';
            menuBtn.children[2].classList.remove('-rotate-45', '-translate-y-2');
        }
    });
}

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-md');
        navbar.classList.add('py-4');
        navbar.classList.remove('py-6');
    } else {
        navbar.classList.remove('shadow-md');
        navbar.classList.remove('py-4');
        navbar.classList.add('py-6');
    }
});

// Parallax Hero
const heroImage = document.getElementById('hero-image');
if(heroImage) {
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        heroImage.style.transform = `scale(1.05) translateY(${scrolled * 0.5}px)`;
    });
}
