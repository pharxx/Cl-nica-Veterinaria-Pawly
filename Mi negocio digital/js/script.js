document.getElementById("year").textContent =  new  Date().getFullYear();

// EFECTO DE CARGA
window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

// ANIMACION AL HACER CLICK
const botones = document.querySelectorAll("a");

botones.forEach(boton => {

    boton.addEventListener("click", function(){

        this.style.transform = "scale(0.95)";

        setTimeout(() => {

            this.style.transform = "scale(1)";

        }, 150);

    });

});
