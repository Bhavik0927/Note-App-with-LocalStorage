let card = document.querySelectorAll('.card');
let p = document.querySelector('p');
let random = [];
let randomNumber = Math.floor(Math.random()* 9);
let randomColor = [];

let randomColor1  = Math.floor(Math.random() * 256);
let randomColor2  = Math.floor(Math.random() * 256);
let randomColor3  = Math.floor(Math.random() * 256);

console.log(randomColor1,randomColor2,randomColor3);
console.log(randomNumber);

const checkanswer = (e) => {
    alert(e);
}