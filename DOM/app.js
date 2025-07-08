//select element by id name
const img = document.getElementById("mainImg");
console.log(img);

//-------------select element by class name --------------
const box = document.getElementsByClassName("box");
console.log(box);

//------------------select element by tag name------------
const pr = document.getElementsByTagName("p");

//-----------------Query selector----------
const pra = document.querySelector("p"); //select first p element
console.log(pra);
const id = document.querySelector("#myId"); //select first element with id = myId
console.log(id);
const clas = document.querySelector(".myClass"); //select first element with class = myClass
console.log(clas);
const pragraph = document.querySelectorAll("p"); //select all p element
console.log(pragraph);