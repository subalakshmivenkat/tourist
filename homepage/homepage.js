document.addEventListener('DOMContentLoaded', () => {
    const exploreBtn = document.querySelector('.explore-btn');
    
    exploreBtn.addEventListener('click', () => {
        window.location.href = "login.html"; // Opens the login page
    });

    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});
