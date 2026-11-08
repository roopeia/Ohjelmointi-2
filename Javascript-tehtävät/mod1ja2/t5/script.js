let vuosi = Number(prompt("Syötä vuosiluku:"));

let tulos = document.getElementById("tulos");

if (vuosi % 400 === 0) {
    tulos.textContent = vuosi + " on karkausvuosi.";
} 
else if (vuosi % 100 === 0) {
    tulos.textContent = vuosi + " ei ole karkausvuosi.";
} 
else if (vuosi % 4 === 0) {
    tulos.textContent = vuosi + " on karkausvuosi.";
} 
else {
    tulos.textContent = vuosi + " ei ole karkausvuosi.";
}
