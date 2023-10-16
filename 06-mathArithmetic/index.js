//ARITHMETICS

//constants
//console.log(Math.PI,Math.E,Math.SQRT2)
//console.log(Number.EPSILON,Number.MAX_VALUE,Number.MAX_SAFE_INTEGER,Number.MIN_VALUE,Number.MIN_SAFE_INTEGER)

//Remainder / Modulus (%)
/* console.log(42 % 13);//should be 2
var fraction = 42 / 10;
var fractionalPart = fraction % 1;
console.log(fraction,fractionalPart);//should be 4.2 0.200018

var n = 13;
var i = 0;
while (i = ((i + 1) % n)){
    //console.log(i);
    i++
};//1 3 5 7 9 11 */

//Math Rounding
/* //up - down
console.log(Math.round(2.2))//2
console.log(Math.round(2.5))//3
console.log(Math.round(-2.5))//-2
console.log(Math.round(-2.6))//-3
//up
console.log(Math.ceil(2.2))//3
console.log(Math.ceil(2.5))//3
console.log(Math.ceil(-2.5))//-2
//down
console.log(Math.floor(2.2))//2
console.log(Math.floor(2.5))//2
console.log(Math.floor(-2.5))//-3
//trunc
console.log(Math.trunc(7.9))//7
console.log(Math.trunc(-7.9))//-7
//to 2 decimal places
const myNum = 2/3;
const multiplier = 100;
console.log(Math.round(myNum * multiplier) / multiplier)//0.67
console.log(Math.floor(myNum * multiplier) / multiplier)//0.66
//to 2 digits
const newNum = 666666;
const newMultiplier = 1/10000;
console.log(Math.ceil(newNum * newMultiplier)/newMultiplier)//670000
console.log(Math.floor(newNum * newMultiplier)/newMultiplier)//660000
//usable function
function mathRound(value,power){
    //positive power for decimal places & negative for num of digits
    var power = Math.pow(10,power);
    return Math.round(value * power) / power;
};
console.log(mathRound(myNum,2));//0.67
console.log(mathRound(newNum,-2));//666700 */