//simple variable manipulation

/* var number1 = 5;
number1  = 3;
number1 = number1 + 2;
const number2 = 15;
var output = number2 / number1;

var myString = 'Total Output ' + 'is: ';
var notDefined;

console.log(notDefined) //output is 'undefined'
console.log(myString + output); */

//arrays
/* var numArray = ["One", "Two", "Three"];
const myNumber = 2;

console.log(numArray[myNumber]) */;

//objects
/* john = {
    firstName: "John",
    lastName: "Baptist",
    Id: 77
}
billea = {
    firstName: "Billea",
    lastName: "Jean",
    Id: 78
}

var kid = john.firstName + ' ' + billea.lastName;
console.log(kid); */

// use '===' when checking for null and typeof(null) = object;.use isNaN() to test for NaN which in turn stands for Not a Number;

/* //Infinity
console.log(1/0);//output is Infinity
//Number constant usage
Number.MAX_SAFE_INTEGER */

/* //consoleLog CSS
console.log('%cHello %cWorld!','font-size:30px;color:red','color:blue'); */

/* //using typeof
console.log(typeof null); */

//STRINGS

/* //stringCreation
var falseString = String(false)
var intString = String(34)
var intString2 = (33).toString()
console.log(falseString,intString,intString2) */

/* //stringConcatenation
var foo = "Foo";
var bar = "Bar";
console.log(foo + ' ' + bar)// output Foo Bar;
console.log(foo + bar)// output FooBar;
console.log(foo.concat(" ",bar))// output Foo Bar ;
console.log(foo + " " + 32 + " " + bar)// output Foo 32 Bar; 32 is converted into a str*/

//stringReversal
/* //method01
function stringReversal(str){
    return (
        str.split('').reverse(str).join('')
        //can also be done using spread operator like below
        //[...String(str)].reverse().join('') 
    )
}
var reversedString = stringReversal('string')
console.log(reversedString);//output gnirts */
//method02
function stringReversal02(str){
    var revStr = "";
    var i;
    for (i = (str.length - 1); i >= 0; i--){
        revStr += str[i]
    }
    return revStr;
}
var reversedString02 = stringReversal02('string')
console.log(reversedString02);//output gnirts
