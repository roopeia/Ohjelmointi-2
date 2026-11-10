'use strict';

let luvut = [];

let luku = 1

while (luku != 0) {
    luku = Number(prompt("anna luku "));
    luvut.push(luku);
}

luvut.sort((a, b) => b - a);

for (let i of luvut) {
    console.log(i);
}