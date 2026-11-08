"use strict";

let tulos = document.getElementById("tulos");

let vastaus = confirm("Lasketaanko neliöjuuri?");

if (vastaus === true) {
    let luku = Number(prompt("Anna luku:"));

    if (luku < 0) {
        tulos.textContent = "Negatiivisen luvun neliöjuurta ei ole määritelty.";
    } else {
        let juuri = Math.sqrt(luku);
        tulos.textContent = "Neliöjuuri luvusta " + luku + " on " + juuri;
    }

} else {
    tulos.textContent = "Neliöjuurta ei lasketa.";
}
