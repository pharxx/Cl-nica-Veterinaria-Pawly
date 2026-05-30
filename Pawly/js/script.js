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

//efecto de zoom
    const container = document.querySelector(".diagrama-flujo");
    const img = document.querySelector("#diagrama-f");

    container.addEventListener("mousemove", (e)=>{

    const rect = container.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    img.style.transformOrigin = `${x}% ${y}%`;
    img.style.transform = "scale(2)";

    });

    container.addEventListener("mouseleave", ()=>{

    img.style.transform = "scale(1)";
    img.style.transformOrigin = "center";

    });
