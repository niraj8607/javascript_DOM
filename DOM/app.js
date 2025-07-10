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

//------------------Getter and Setter-----------------------------
const imgs = document.querySelector("img");
console.log(imgs);
imgs.getAttribute("id");
imgs.setAttribute("id","spiderman");

//-------------------Navigation------------------
let h4 = document.querySelector("h4");
console.log(h4.parentElement);

let div = document.querySelector("div");
console.log(div.children);


//-----------------Adding Element------------
let body = document.querySelector("body");
let heading = document.createElement("h1");
heading.textContent = "Dom se banaya gaya heading";
body.appendChild(heading);

let para = document.createElement("p");
para.textContent = "yh paragraph dom se add kiya gaya hain";
body.append(para);




