'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];


for (let i in students) {
    let elem = document.createElement("option");
    elem.textContent = students[i].name;
    document.getElementById("target").appendChild(elem);
    elem.setAttribute("value", students[i].id);
}

