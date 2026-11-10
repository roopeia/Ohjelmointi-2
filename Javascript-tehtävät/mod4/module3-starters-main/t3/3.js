'use strict';
const names = ['John', 'Paul', 'Jones'];

for (let i of names) {
    let lista = document.createElement("li");
    lista.textContent = i;
    document.getElementById("target").appendChild(lista);
}

