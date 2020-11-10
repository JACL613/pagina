var btnMenu = document.getElementById("btn_menu");
var nav = document.getElementById("nav");

btnMenu.addEventListener('click', function(){
    nav.classList.toggle('mostrar');
})