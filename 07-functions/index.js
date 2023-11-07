//FUNCTIONS

//declaration
/* function foo(){
    const a = 'Hello';
    console.log(a);
    function foo2(){
        const b = 12;
        const a = 'World!';
        console.log(a);
        console.log(b);
    }
    //console.log(b)//reference error
    foo2();
}
//console.log(a);//reference error
foo();//Hello World! 12 */

/* //currying
function foo( x, y, z){
    return x * y * z;
}
console.log(foo(1,2,3));//6
function prismVol(l){
    return function(w){
        return function(h){
            return l * w * h;
        }
    }
}
console.log(prismVol(1)(2)(3));//6

//IIFE=-Immediately invoked function Expressions
(function(){
    console.log(46);
}()); */

//recursive && named functions
/* var someSay = function sum(times){
    if(times > 0){
        console.log("Hello!");
        sum(times - 1);
    }
}
var saySomething = someSay;
saySomething(2);//Hello! Hello!
//sum(2);//reference error
console.log(saySomething.name)//sum */

//variadic functions
/* function argLogger(){
    var myArray = Array.from(arguments);
    for(var i = 0; i < arguments.length; ++i){
        console.log(arguments[i])
    }
    console.log(myArray);
}
argLogger("Hello","World");//Hello World, (2) ['Hello', 'World']

const list = [1,2,3]
function usingSpread(...arg){
    console.log(arg);
};
//usingSpread(...list,4,5,6,...789); WRONG!! 
usingSpread(...list,4,5,6,..."789");//(6) [1, 2, 3, 4, 5, 6, "7", "8", "9"]

function personLOgs(person,...msgs){
    msgs.forEach(msg =>(
        console.log(person,"says",msg)
    ));
};
personLOgs("MK","Hello","World!");//MK says Hello, MK says World! */

//Anonymous Function
/* //usage
var foo = function(){
    console.log('foo');
};
foo();//foo

var num = [1,2,3]
var doubleNum = num.map(function(element){
    return element * 2;
})
console.log(doubleNum)//(3) [2, 4, 6]

//used as iife - It executes once. only at runtime
(
    function(){
        var foo = 57;
        console.log(foo);//47
    }()
); */

//Default parameters
/* function printDefaultMsg(msg = "This is my default message"){
    console.log(msg);
}
printDefaultMsg();//This is my default message 
printDefaultMsg(undefined);//This is my default message
printDefaultMsg('No longer default message');//No longer default  message

function defaultFunc( callback = function (){console.log('Default')}){
    callback();
};
defaultFunc();//default
defaultFunc(undefined);//default
defaultFunc(function (){console.log("Fuck yes!!. We don't do default bitch")});//Fuck yes!!. We don't do default bitch

var num = 3;
function multiply(x){return x * 2};
function add(a = 1 + num, b = a, c = a + b, d = multiply(c)){
    return a * b * c + d;
};
console.log(Math.sqrt(add()));//12 */

//Call & Apply
/* var obj = {
    a:1,
    b:2,
    set: function(a,b){
        this.a = a,
        this.b = b
    }
};
console.log(obj);//{a: 1, b: 2, set: ƒ}
obj.set(3,7);//
console.log(obj);//{a: 3, b: 7, set: ƒ}
obj.set.call(obj,1,2);
//console.log(obj);//{a: 1, b: 2, set: ƒ}
obj.set.apply(obj,[1, 3]);
//console.log(obj)//{a: 1, b: 3, set: ƒ}
let myObj = {};
obj.set.apply(myObj, [4,7]);
console.log(myObj);//{a: 4, b: 7}
//bind
function bindName(label){
    console.log(label + ': ' + this.name);
};
var myStudent1 = {
    name:"Akolade"
};
var myStudent2 = {
    name:"Jato"
};
var bindStudentName = bindName.bind(myStudent1);
bindStudentName("myStudent1");//myStudent1: Akolade
var bindStudentName2 = bindName.bind(myStudent2,"studentName");
bindStudentName2();//studentName: Jato */

//Passing arguments by reference or value
var obj = {a:7};
function addToObj(someObj){
    //someObj = {a:5};//wont work
    //someObj = {b:9};//wont work
    someObj.a = 5;
    someObj.b = 9;
    return someObj;
};
console.log(addToObj(obj));//{a: 5, b: 9}

//function composition - intro