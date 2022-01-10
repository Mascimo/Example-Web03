const btMobile = document.getElementById('btn-mobile');

btMobile.addEventListener('click', toggleMenu);

function toggleMenu(){

    const nav = document.getElementById("menuVariable");
    const hamburger = document.getElementById("hamburger");

    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
}


//Desliga menu caso ativo fora do mobile
window.addEventListener('resize', function () {

    var tela = window.innerWidth
    if (window.innerWidth >= 769) {

        const menu = document.getElementById("menuVariable");
        menu.classList.remove("activer");
    }
})