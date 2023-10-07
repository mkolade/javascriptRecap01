//equality and non-equality
/* const nan = NaN;
console.log((32*3) == nan);// false
//to check for NaN compare a value to itself
if(nan !== nan)
{
    console.error('Input is Nan and typeof NaN is: %s',typeof NaN)// Input is Nan and typeof NaN is: number
}else{
    console.log("Input is valid")
}
//using && and ||
const f = 43;
function fa(){
    console.log({} || f)
    return {} || f;
}
fa();// this returns {} cause it came first
console.log("Hello" + "World!");// HelloWorld!
console.log("Hello" - "World!");// NaN */

// Logic Operators with Non-boolean values (boolean coercion)
/* var x1 = '' || 3;
var x2 = 1 || 3;
var x3 = '' || 'Yayy' || undefined;
console.log(x1,x2,x3)// 3 1 'Yayy'

function andOr(val){
    return val && 'default'; //if val evaluates to true, return 'default'
}
function andOr2(val){
    return val || 'default'; //if val evaluates to false, return 'default'
}
console.log(andOr(0))// 0
console.log(andOr2(''))// default */

//relational operators
var number = 123;
//console.log(number.toString() >= 124 )// false
/* 
Operator    Comparison      Example 
==          Equal            i == 0 
===   Equal Value and Type   i === "5" 
!=          Not Equal        i != 5 
!==  Not Equal Value or Type i !== 5 
>           Greater than     i > 5 
<           Less than        i < 5 
>=    Greater than or equal  i >= 5 
<=    Less than or equal     i <= 5 */

/* // Grouping multiple logic statements
if((age >= 18 && height >= 5.8) || (lifeStatus === 'royalty'&& hasInvite)){
    console.log('You can have access to the club')
} */

/* //conditional statements(ternary operators)
var a = 0;
var str = "Not a";
var b = '';
(a === 0) ? (a = 1, str += " test") :(a = 2);
console.log(a + ' is ' + str)// 1 is Not a test
//control statements cant be used with ternary operators;eg return, break
//only valid way
var animal = 'kitty'
return (animal === 'kitty') ?  'meow' :  'roar'; */

//Switch statements
function gay(){
    return 'homo';
}
function fag(){
    return 'small dick';
}
function hornyMess(){
    return 'always horny';
}
function straight(){
    return 'hetero';
}
var value = 'small dick';
switch (value){
    case gay():
    case fag():
    case hornyMess():
        console.log('I fuck  ass.  Eww ikr');
        break;
    case straight():
        console.log('I fuck pussy')// This is displayed 
        break;
    default:
        console.log('I am celibate. Which also translates to Gayyy hahaha')
}