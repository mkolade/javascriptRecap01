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
/* var obj = {a:7};
function addToObj(someObj){
    //someObj = {a:5};//wont work
    //someObj = {b:9};//wont work
    someObj.a = 5;
    someObj.b = 9;
    return someObj;
};
console.log(addToObj(obj));//{a: 5, b: 9}

//function composition - small intro
const compose = (...funs) =>   x =>   funs.reduce((ac, f) => f(ac), x);

const capitalize = function (x){
    return x.replace(/^\w/,m => m.toUpperCase());
}
const sign = function (x){
    return x + "\nmade with love";
}
const formatText = compose(capitalize,sign);
console.log(formatText("Hello Grand-kid"))
//getting a function's name
function getMe(){
    return null;
}
console.log(getMe.name);//getMe */
/* function functionName( func ) {
    var result = /^function\s+([\w\$]+)\(/.exec( func.toString() )       
    return result ? result[1] : '' 
}
console.log(functionName(getMe)) */

//Recursion. I know, AGAIN??!!!
/* //factorial
function factorial(n){
    if(n <= 1){
        return 1;
    }
    let facts = n * factorial(n - 1);
    return facts;
};
console.log(factorial(5));

//retrieve the sum of even numbers in an array
var newArray = [2,4,5,6,7,8,9];
function sumOfEven(arr){
    if (arr.length === 0){
        return 0;
    };
    var myValue = arr.shift();
    if(myValue % 2 === 0){
        return myValue + sumOfEven(arr);
    }else{
        return sumOfEven(arr);
    }
}
console.log(sumOfEven(newArray)) */

//understanding the return statement
/* function retFirstChar(str){
    console.log("Coding is fun");
    return str.charAt(0);
};
console.log(retFirstChar("Hi.babe"));//Coding is fun H */

//Higher order functions
/* function iAmCallBack(){
    console.log("You have reached callback");
}

function iDoStuff(callback){
    console.log("I do stuff.");
    return function iAmStuff(){
        console.log('I am stuff.'); 
        callback();
    }
};
iDoStuff(iAmCallBack);//I do stuff
iDoStuff(iAmCallBack)();//I do stuff. I am stuff. You have reached callback */

//Functions as Arguments
/* var myArray = [1,2,3,4,5];
function mul2(x){
    return x * 2;
}
function multiplyByTwo (func,arr){
    let result = [];
    for(comp of arr){
        result.push(func(comp));
    };
    return result;
};
var someArray = multiplyByTwo(mul2,myArray);
console.log(someArray);//Array(5) 0:2 1:4 2:6 3:8 4:10 length:5 */



//CLASSES
class speedyClass {
    constructor(option){
        console.log(`This is created with ${option} option`);
        this.option = option;
    };
};
const speedy = new speedyClass("speedy");//This is created with speedy option
console.log(speedy.option);//speedy

