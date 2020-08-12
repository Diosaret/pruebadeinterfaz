var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav');
var title1 = document.getElementById('title');



btnMenu.addEventListener('click', function(){
nav.classList.toggle('mostrar');
title1.classList.toggle('title1');
btnMenu.classList.toggle('menu1');


})

