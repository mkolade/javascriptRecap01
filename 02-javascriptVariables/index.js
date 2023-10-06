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
console.log(falseString,intString,intString2)//output false 34 33 */

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
/* function stringReversal02(str){
    var revStr = "";
    var i;
    for (i = (str.length -1); i >= 0; i--){
        revStr += str[i];
    }
    return revStr;
}

var reversedString02 = stringReversal02('racecar');
console.log(reversedString02);//output racecar; */

/* //calling string with index
var string = "Hello, World!";
console.log(string.charAt(7));//output W
console.log(string[7]);//output W
//trimming whitespace
var someString = " Hello, World! ";
console.log(someString.trim());//output "Hello, World!"
console.log(someString.trimStart());//output "Hello, World! "
console.log(someString.trimEnd());//output " Hello, World!"
//splitting array
var stringArray = someString.split(", ")
console.log(stringArray[0],stringArray[1])//output " Hello World! "
//joining initially split Array
var joinedArray = stringArray.join("-")
console.log(joinedArray);//output " Hello-World! " */

/* //using substring and slice
var useSubString = "Any string"
console.log(useSubString.substring(4,7))//output str
console.log(useSubString.slice(4,7))//output str
console.log(useSubString.slice(4))//output string
//detecting a string - use typeof
if(typeof useSubString === 'string'){
    console.log(useSubString + ' itself Indeed has it\'s own subString '.trimEnd())//output "Any string itself Indeed has it's own subString"
}
//using character code
var abcd = "ABCDEF";
var charCode = abcd.charCodeAt(4)
console.log(charCode)//output The character code for index 4(E) = 69. WHatever i'll ever need if for hahaha
 */

/* //string number conversion
var int1 = 102342;//base 10
var base16 = int1.toString(16);
console.log(int1 + " in Hexadecimal is " + base16);//output 102342 in Hexadecimal is 18fc6
var backToInt = parseInt(base16,16);
console.log(base16 + " back to Decimal is " + backToInt);//output 18fc6 back to Decimal is 102342 */

/* //using string indexOf, replace & includes
var simpleString = "Hello, World!";
console.log(simpleString.indexOf('l'))//output 2
console.log(simpleString.indexOf('Wor'))//output 7
console.log(simpleString.lastIndexOf('l'))//output 10

if(simpleString.includes("Hello")){
    var newSimpleString = simpleString.replace("Hello","New");
    console.log(newSimpleString);//"New, World!"
}
//(to upper and lower case) & repeat
var lowerCase = newSimpleString.toLowerCase();
var upperCase = newSimpleString.toUpperCase();
var latestString = "Hello"
console.log(lowerCase, upperCase);//"new, world! NEW, WORLD!"
console.log(latestString.repeat(3))//HelloHelloHello
 */

//Date
var newDate = new Date(2023,11);
console.log(newDate.toString());//Fri Dec 01 2023 00:00:00 GMT+0100 (West Africa Standard Time)
//time string
console.log(newDate.toTimeString());//00:00:00 GMT+0100 (West Africa Standard Time)
console.log(newDate.toDateString());//My favorite - Fri Dec 01 2023
console.log(newDate.toLocaleDateString());//2nd favorite - Fri Dec 01 2023
console.log(newDate.toUTCString());//Thu, 30 Nov 2023 23:00:00 GMT
console.log(newDate.getFullYear());//2023
console.log(newDate.getMonth());//11
var latestDate = new Date();
console.log(latestDate.getHours());//output varies. mine was - 18
console.log(latestDate.getMinutes());//output varies. mine was - 41
