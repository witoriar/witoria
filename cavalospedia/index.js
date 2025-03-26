alert ("Bem vindo a Cavalospedia :)")

const box = document.querySelector(".container");
const imgens = document.querySelectorAll(".container img");

let contador = 0;

function slider() {
    contador++;

    if(contador > imgens.length - 1) {
        contador = 0;
    }

    box.style.transform = `translatex(${-contador * 500}px)`;
}

setInterval(slider, 1800);
