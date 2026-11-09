let alku = Number(prompt("anna v1"));
let loppu = Number(prompt("anna v2"));

let vuodet = [];
let maara = 0

for (let i = alku; i <= loppu; i++) {
    if (i % 4 == 0) {
        vuodet.push(i);
        maara += 1
    }
}

let ul = document.getElementById("tulos");

for (let i = 0; i < maara; i++) {
    let li = document.createElement("li");
    li.textContent = vuodet[i];
    ul.appendChild(li);
}

