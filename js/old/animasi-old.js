// NAVBAR
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const burgerMenu = document.querySelector('.burgerMenu');
    const navBarLinks = document.querySelector('.navBarLinks');

    if (!navbar) {
        return;
    }

    const updateNavbarState = () => {
        navbar.classList.toggle('navbarScrolled', window.scrollY > 0);
    };

    updateNavbarState();
    window.addEventListener('scroll', updateNavbarState, { passive: true });

    if (burgerMenu && navBarLinks) {
        burgerMenu.addEventListener('click', () => {
            navBarLinks.classList.toggle('active');
        });

        const navItems = navBarLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navBarLinks.classList.remove('active');
            });
        });
    }
});
