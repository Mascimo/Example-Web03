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





window.onload = function (){

// Links Internos
var menuitens = document.querySelectorAll("#body a[href^='#']");

menuitens.forEach(item => {
    item.addEventListener("click", scrollId);
})

 }

function scrollId(event) {

    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');  // ta pegando a tag #css que coloquei de cada elemento

    const posicao = document.querySelector(id).offsetTop;   //especificando o local onde esta o link para saber distancia do topo

    window.scroll({
        top: posicao - 120,
        behavior: "smooth",
    });
}