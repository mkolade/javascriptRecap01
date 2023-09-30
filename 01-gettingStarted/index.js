/* const foo = " Chocolate Bar";
const foo2 = "Bread buns";

console.log("List of foods i love best are:%s and %s",foo,foo2);

console.log({
    firstName:"Akolade",
    lastName:"Emmanuel",
    isAboveGrade:false,
    ID:33
}) */
/* const testing1 = document.getElementById('test1');
testing1.textContent = 'Hello world'
console.log(document.body); */

const newPart = document.getElementById('newPart');
const paragraph = document.createElement('p');
paragraph.innerHTML = "Hello, World!";
newPart.appendChild(paragraph);
//Windows
/* 
window.alert('Hello alerter');
var code = prompt("Enter password");
if(window.confirm("Are you sure That's the correct code!!")){
    if (code == '1234'){
        console.log('%s is indeed the correct code.Alert dismissed. yay]y!!',code);
    }else{
        console.log("Wrong password")
    }
}else{
    console.log("refresh page to get enter password again")
} */

//Creating canvas
/* const newCanvas = document.createElement('canvas')
var ctx = newCanvas.getContext("2d");
ctx.font = '30px Cursive'; 
ctx.fillText("Hello world!", 50, 50);
newPart.appendChild(newCanvas); */

//creating img
/* var img = document.createElement("img");
img.src = './img/firstImg.png';
img.alt = 'Test image linking';
newPart.appendChild(img); */



