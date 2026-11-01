//Kirjoita ohjelma, joka kysyy kolme kokonaislukua. Ohjelma tulostaa lukujen summan, tulon ja keskiarvon HTML-dokumenttiin. (3p)
//Muista muuntaa merkkijonot luvuiksi ennen kuin lasket ne yhteen.

'use strict';

const luku1 = parseInt(prompt("luku1."));
const luku2 = parseInt(prompt("luku2."));
const luku3 = parseInt(prompt("luku3."));

const summa = luku1 + luku2 + luku3
const tulo = luku1 * luku2 * luku3
const avg = summa / 3

document.querySelector('#summa').innerHTML = 'summa = ' + summa;
document.querySelector('#tulo').innerHTML = 'tulo = ' + tulo;
document.querySelector('#avg').innerHTML = 'avg = ' + avg;