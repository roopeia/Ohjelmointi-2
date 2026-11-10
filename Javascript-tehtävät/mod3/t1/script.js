"use strict";

let luvut = [];


for (let i = 0; i < 5; i++) {
    let luku = Number(prompt("Anna luku "));
    luvut.push(luku);
}

console.log("V Luvut V");
for (let i = luvut.length - 1; i >= 0; i--) {
    console.log(luvut[i]);
}