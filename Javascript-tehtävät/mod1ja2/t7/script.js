"use strict";

let tulos = document.getElementById("tulos");

let maara = Number(prompt("Montako kertaa heitetään noppaa?"));

let summa = 0;

for (let i = 0; i < maara; i++) {
    let heitto = Math.floor(Math.random() * 6) + 1;
    summa += heitto;
}

tulos.textContent = "Heittojen silmälukujen summa on: " + summa;