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
