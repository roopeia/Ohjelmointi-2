let luvut = [];

while (true) {
  let syote = Number(prompt("Anna luku "));

  if (luvut.includes(syote)) {
    console.log("Luku jo annettu ");
    break;
  }

  luvut.push(syote);
}

luvut.sort((a, b) => a - b);

console.log("Annetut luvut ");
for (let luku of luvut) {
  console.log(luku);
}