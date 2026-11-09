"use strict";

let nopatluku = Number(prompt("Kuinka monta noppaa"));
let luku = Number(prompt("Toivottu luku"));

let osuma = 0;

for (let i = 0; i < 10000; i++) {
    let summa = 0;

    for (let j = 0; j < nopatluku; j++) {
        let heitto = Math.floor(Math.random() * 6) + 1;
        summa += heitto;
    }

    if (summa === luku) {
        osuma++;
    }
}

let prosentti = (osuma / 10000) * 100;

document.getElementById("tulos").textContent = "Todennäköisyys = " + prosentti.toFixed(2) + "%";