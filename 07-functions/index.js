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

//currying
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
}());
