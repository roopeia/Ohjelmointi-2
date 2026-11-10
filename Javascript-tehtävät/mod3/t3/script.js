let nimet = [];

for (let i = 0; i < 6; i++) {
    x = prompt("nimi ");
    nimet.push(x);
}

nimet.sort();

let ul = document.getElementById("tulos");

for (let i = 5; i >= 0; i--) {
    let li = document.createElement("li");
    li.textContent = nimet[i];
    ul.appendChild(li);
}