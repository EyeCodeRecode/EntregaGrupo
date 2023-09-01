document.addEventListener("DOMContentLoaded", function () {
    const hamburguer = document.querySelector('.hamburguer');
    const navMenu = document.querySelector('.nav-menu');
    const navLink = document.querySelectorAll('.nav-link');


    hamburguer.addEventListener("click", menuHamb);
    navLink.forEach(n => n.addEventListener("click", fecharMenu));

    function menuHamb() {
        hamburguer.classList.toggle('active');
        navMenu.classList.toggle('active');
    }

    function fecharMenu() {
        hamburguer.classList.remove('active');
        navMenu.classList.remove('active');
    }
})