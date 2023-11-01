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

//Incrementing (++)
/* var a = 5;//5
console.log(a)//5
var b = a++;//a + 1 = 6; b = 5
console.log(a,b)//6 5
var c = ++a;//a(6) + 1 = 7; c =  7
console.log(a,b,c)//7 5 7
var d = a;//a = 7 d = 7
console.log(a,b,c,d)//7 5 7 7 */
/* for(var a = 0; a < 10; ++a){
    var sum1 = a;
    console.log(a,sum1);
    sum1 += a;
}
console.log(`This is the total sum of a: %d`,sum1)
for(var b = 0; b < 10; b++){
    var sum2s = b;
    console.log(b,sum2s);
    sum2s += b;
}
console.log(`This is the total sum of b: %d`,sum2s)//hmm weird */
//Math.pow() or **
/* var a = 2; b = 7, c = 8;
console.log(Math.pow(b,a));//49
console.log(b ** a);//49
console.log(Math.pow(c,1/3));//2
//Math.random() -- returns between 0 and 1
console.log(Math.random()); */
//addition
/* var a = 2; b = 18;; c = 98;
console.log(a + b + c + "1");//1181 */

//get random number with min and max specified
/* function minAndMax(max,min){
    return Math.floor(Math.random() * (max - min ) + min);//with math.floor(), it releases a whole number
}
console.log(minAndMax(10,37));// wow this works */

//Simulating events with different probabilities
/* function rollDice (numPick){
    return Math.floor(Math.random() * numPick)
}
console.log("Rolled a: " + (rollDice(6) + 1));//added a +1 so outcome 0 would never be possible */

//subtraction
/* var a = 11;
console.log(5 - "false");//should be NaN
console.log(5 - false);//should be 5
console.log(5 - true);//should be 4
console.log(5 - a);//should be -6
//multiplication
console.log(-3 * 5);//-15
console.log(3 * 5);//15
//math max and min
var a = 57; var b = 89;
console.log(Math.max(a,b))//89
console.log(Math.min(a,b))//57
//for arrays
var numArray = [1,4,7,8,34];
var min = Math.min(...numArray)
var max = Math.max(...numArray)
console.log(min,max);//1 34 */

/* //Ceiling and Floor again
var myRandomNum = Math.random();
var ceilNum = Math.ceil(myRandomNum + 3);//4
var someRand = Math.random();
console.log(`for ${myRandomNum}: the ceil is ${ceilNum}`,someRand);
//sqrt cube root an nth root
var n = 3;
var mathSqrt = Math.sqrt(16);
var cubeRoot = Math.cbrt(8);
var nthRoot = Math.pow(16,1/n);
console.log(mathSqrt,cubeRoot,nthRoot);//4,2,2.5

//random in gaussian
var gaussRandom = (Math.random() + Math.random()) / 2;
console.log(gaussRandom) */

//division
/* console.log(15 / 3);//5
//decrement
for (var a = 16; a >= 0; --a){
    if (a % 2 == 0){
        console.log(a);
    }
};//16 14 12 10 8 6 4 2 0 */

//Constructor functions
/* 
//declaring
function Cat(name,age){
    this.name = name;
    this.age = age;
    this.sound = "Meow";
};

let newCat = new Cat("Uncle sam",32);
console.log(newCat.sound,newCat.age,newCat.name);//Meow 32 Uncle sam
Cat.prototype.speak = function() {
    console.log(this.sound);//Meow
};
newCat.speak();
console.log(newCat.constructor)// returns the function Cat
console.log(newCat instanceof Cat)// true */

//Declaring and initializing constants
/* var foo;
foo = 300;
const setImmediate = 566; */

//Mathematic operations
/* var myA = 7;
var myB = 4;
myB += myA;
console.log(myB)// 4 + 7 = 11

var myC = 7;
var myD = 4;
myD -= myC;
console.log(myD)// 4 - 7 = -3

var multiplier = 7;
var multi = 4;
multi *= multiplier;
console.log(multi)// 4 * 7 = 28


var exponent = 3;
var power = 2;
exponent **= power;
console.log(exponent)// 3 ^ 2 = 9 */

//LOOPS

//for loop
/* var i,j;
const array = ['a','b','c','d','e'];
for (i = 0; i < 8; i += 2){
    for (j = (array.length - 1); j >= 0; j--){
        console.log("%i-%s",i,array[j])
        //0-e 0-d 0-c 0-b 0-a 2-e 2-d 2-c 2-b 2-a 4-e 4-d 4-c 4-b 4-a 6-e 6-d 6-c 6-b 6-a
    };
}; */

/* //for of loop - Best for arrays. 
const numArray = [0,2,4,2,5,4]
const editedNum = new Set(numArray);// use set to remove duplicates
for (let arrEle of editedNum){
    console.log(arrEle)//0 2 4 5
}

const string = 'akolade';
for (let str of string){
    console.log(str)//a k o l a d e
}

//for of Doesn't work directly on objects but it can still be manipulated
const someObject = {
    name:'Mike Dean',
    age:98,
    Profession:'Engineer'
}
for (var key of Object.keys(someObject)){
    console.log(key + ':' + someObject[key]);//name:Mike Dean age:9 Profession:Engineer
};


//for in loop - Used for object iteration. Can't be used for arrays
Object.defineProperty(someObject,'age',{
    enumerable:false
});
for (var key in someObject){
    console.log(key + ':' + someObject[key])//name:Mike Dean Profession:Engineer
} */