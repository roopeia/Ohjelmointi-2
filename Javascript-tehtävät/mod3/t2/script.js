let maara = Number(prompt("Anna osallistujien lukumäärä:"));
let nimet = [];


for (let i = 0; i < maara; i++) {
    let nimi = prompt("Anna osallistujan nimi ");
    nimet.push(nimi);
}


nimet.sort();

let ol = document.getElementById("tulos");

for (let i = 0; i < maara; i++) {
    let li = document.createElement("li");
    li.textContent = nimet[i];
    ol.appendChild(li);
}
