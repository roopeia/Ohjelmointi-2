"use strict";

let tulos = document.getElementById("tulos");

let luku = Number(prompt("Anna kokonaisluku:"));

let onAlkuluku = true;


if (luku < 2) {
    onAlkuluku = false;
} else {
    
    for (let i = 2; i < luku; i++) {
        if (luku % i === 0) {
            onAlkuluku = false;
            break;
        }
    }
}


if (onAlkuluku) {
    tulos.textContent = luku + " on alkuluku.";
} else {
    tulos.textContent = luku + " ei ole alkuluku.";
}