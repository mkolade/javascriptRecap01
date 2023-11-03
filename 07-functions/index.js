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
var someSay = function sum(times){
    if(times > 0){
        console.log("Hello!");
        sum(times - 1);
    }
}
var saySomething = someSay;
saySomething(2);//Hello! Hello!
//sum(2);//reference error
console.log(saySomething.name)//sum