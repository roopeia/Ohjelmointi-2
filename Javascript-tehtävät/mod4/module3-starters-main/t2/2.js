let f1 = document.createElement("li")
let f2 = document.createElement("li")
let f3 = document.createElement("li")

f1.textContent = "first"
f2.textContent = "second"
f3.textContent = "third"

document.getElementById("target").appendChild(f1);
document.getElementById("target").appendChild(f2);
document.getElementById("target").appendChild(f3);

f2.setAttribute("class", "my-item");


