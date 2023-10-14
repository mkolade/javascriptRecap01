//ARRAYS

//Converting Array-like Objects to Arrays
/* const arrayLike = {
    0: "Akolade",
    1: 44,
    2: "Mr",
    length: 3
};

const newArray = Array.from(arrayLike);//most straight-forward method
//arrayLike.forEach(newArray2 =>(console.log(newArray2) ))// error (index.js:11 Uncaught TypeError: arrayLike.forEach is not a function)
newArray.forEach(newArray2 =>(
    console.log(newArray2)
))// works fine
Array.prototype.forEach.call(arrayLike, function (){
    console.log(arrayLike[0]);
})// wow this works 

const actualArray = [].slice.call(arrayLike);
console.log(actualArray)// wow this works - (3) ['Akolade', 44, 'Mr'] */

//reducing array
/* const latestArrays = [4,5,7,8]
const arrayReduce = latestArrays.reduce(function(a,b){
    return a + b;
},5)
console.log(arrayReduce)// 14 */

//mapping and filtering array
/* var people =[{
    id:2,
    username:'Taiwo',
    age:44
},
{
    id:4,
    username:'Kehinde',
    age:23
},
{
    id:31,
    username:'Idowu',
    age:19
}
]
const filteredArray = people.filter((person) => (
    person.age > 19
))
filteredArray.map((person) =>(
    console.log(person.age)//44 23
)) */

//sorting array
/* var arrayToSort = [1, 2, 3, 4, 'E', 'a', 44, 'v'];
console.log(arrayToSort.sort())// [1, 2, 3, 4, 44, 'E', 'a', 'v']
const sortedArray = arrayToSort.sort((a,b) =>{
    //return a.toString().localeCompare(b)// accurate sorting but all input has to be in string format hence the use of toString()
    //return a - b// ascending order
    return b - a// descending order
})
console.log(sortedArray)//  [44, 4, 3, 2, 1, 'E', 'a', 'v'] */

//looping in arrays

//for loop
/*Simple multiplication table */
/* var i,j;
for (i = 1; i <= 12; i++){
    for(j = 1; j <= 12; j++){
        console.log("%i multiplied by %i = %i",i,j,i*j)
    }
} */
//for looping through array
/* const myArray = [23,2,3,4,5,8,9];
for (var i = 0; i < myArray.length && (myArray[i] != 9);i++){
    console.log(myArray[i])//23 2 3 4 5 8
}
//for(i in myArray) console.log(myArray[i]);//not recommended
//looping in reverse below
for(var i = myArray.length - 1;i > -1;i--){
    var twoValue = myArray[i] * 2;
    console.log(twoValue)//16 10 8 6 4 46
} */
//while loop
/* someArrayToWOrk = [1, 2, 3, 4,23,4,56,7,11]
var i = 0;
var someString;
while(i < someArrayToWOrk.length && i % 2 != 5){
    someString += someArrayToWOrk[i].toString();
    console.log(someArrayToWOrk[i]);//0 1 2 3 4 5 6
    i++;
};
console.log(someString)//undefined123423456711 use GPT for  why undefined is part of output */

/* //array destructuring
function area ([base, height]){
    return ((base*height)/2)
}
const triangle = [2,5,7,8];
console.log(area(triangle))//5 8
//array comparison
const compArray = [2,5,7,8]
latestCompArray = JSON.stringify(compArray);
latestCompArray2 = JSON.stringify(triangle);
if(latestCompArray === JSON.stringify(latestCompArray2)){
    console.log("Arrays" + latestCompArray + " and " + latestCompArray2 + " are same");
}else{
    console.log("Arrays" + latestCompArray + " and " + latestCompArray2 + " are not same");
}
//reversing an array
console.log(compArray.reverse());// [8, 7, 5, 2]
console.log(compArray);// [8, 7, 5, 2] hmmmm. interesting */

//concatenating arrays
/* var array1 = [2,5,7,8];
var array2 = [7,8,6];
//var array1 = array1.concat(array2);
//or
//var array1 = [...array1,...array2];
//or
//array1.push(...array1);
//array spreading and rest
array3 = [..."7894"].map(x => parseInt(x));
array1.push(...array2,17,19,...array3);
console.log(array1)//[2, 5, 7, 8, 7, 8, 6, 17, 19, 'a', 'b', 'c', 'g', 'h', 'g']
function addArray(a,b,c){
    return a + b + c;
};
console.log(addArray(...array2));//21
function usingRest(a,b,c,...rest){
    var sum = 0;
    console.log(rest);
    for(var i = 0; i < rest.length; i++){
        sum += rest[i];//[8, 7, 8, 6, 17, 19, 7, 8, 9, 4]
    }
    console.log(sum)//93
}
usingRest(...array1); */

//more on filter
/* function checkForLetterA(str){
    if(str && str[0].toLowerCase() == "a" ){
        return true;
    }
    return false;
}

var str = "Hello. Fuck umar and his shitty attitude.";
var splitStr = str.split(" ");
var words = splitStr.filter(checkForLetterA);
console.log(words)//['and', 'attitude.'] */

//searching an array
/* let people = [
    {
        name: "umar",
        age: 67,
        class: "SS3a",
    },
    {
        name: "Akanbi",
        age: 97,
        class: "SS3b",
    }
];
//traditional way
for(var i = 0; i < people.length;i++){
    if(people[i].name == "umar"){
        console.log(people[i])
        break;
    };
};
//using find method
let myGuy = people.find((person) => (
    person.name == "umar"
));
//using findIndex method to get index
let myGuyNum = people.findIndex((person) => (
    person.name == "umar"
));
let mySurestGee = people[myGuyNum]
//comparing the 2 arrays
function compareArrays(a,b){
    if(JSON.stringify(a) === JSON.stringify(b)){
        return console.log("Once a gee, Always a gee. 100. And yayy my code worked well");
    }else{
        return console.log("Oops there's obviously an error in your code. Trackback bruhhh");
    }
};
compareArrays(myGuy,mySurestGee); */

//converting a string into an array- This chapter might be a little confusing. comment out the console logs as you like
/* var strArray = "Hello My Neighbour".split(" ")
var newStrArray = [..."Neighbour"]
console.log(strArray)//['Hello', 'My', 'Neighbour']
console.log(newStrArray)//['N', 'e', 'i', 'g', 'h', 'b', 'o', 'u', 'r']
//removing an item from an array
strArray.pop();//remove last item
console.log(strArray)//['Hello', 'My']
delete strArray[0]
console.log(strArray)//[empty, 'My']

newStrArray.shift();//remove first item
console.log(newStrArray)//['e', 'i', 'g', 'h', 'b', 'o', 'u', 'r']
var someArray01 = newStrArray.splice(0,5) //remove item with index included in details
console.log(newStrArray)//['o', 'u', 'r']
console.log(someArray01)//['e', 'i', 'g', 'h', 'b']
newStrArray.length = 2;
console.log(newStrArray)//['o', 'u']
//removing all elements
strArray.length = 0;
someArray01 = [];
console.log(strArray,someArray01)//[] []
var someArray = newStrArray.splice(0);
console.log(newStrArray)//[]
console.log(someArray)//['o', 'u'] */

//finding max and min
/* var numArray = [1,2,3,4]
const intMinNum = Math.min.apply(null,numArray)
const minNum = Math.min(...numArray)
const maxNum = Math.max(...numArray)

console.log(intMinNum,minNum,maxNum)//1 1 4
 */

//initializing an array
/* var array01 = [1,2,3,4]
var array02 = new Array(1,2,3,4)
var array03 = new Array(3)//creates empty array with length 3
var array04 = new Array("foo")
var array05 = Array.of("Hell","Is","Real",".","Fear","666")
var someString = ""
if(JSON.stringify(array01) === JSON.stringify(array02)){
    console.log(array03)//[empty × 3]
    console.log(array04)//["foo"]

    var anotherString = array05.join(" ");
    for(var i = 0; i < array05.length;i++){
        if (i != 0 && i != 3)
        {
            someString += " "+array05[i];
        }else{
            someString += array05[i];
        }
    };

    console.log(array05)//["Hell","Is","Real",".","Fear","666"]
    console.log(someString)//Hell Is Real. Fear 666 - note the diff with the one below
    console.log(anotherString)//Hell Is Real . Fear 666
    console.log("Moh you're awesome")
}else{
    console.log("Fix the code to see something cool.Maybe not cool cool but at my current level of expertise as i type this, i find the correct output COOL!!!")
} */

//(Append and prepend into an  arrays) && (using instanceOf & .isArray)
/* var theArray = [3,4];
theArray.unshift(1,2);
theArray.push(5,6);
if((theArray instanceof Array) && Array.isArray(theArray)){
    console.log(theArray);//[1, 2, 3, 4, 5, 6]
    //inserting item into array at specific index
    var i = theArray.length;
    var qArray = theArray.splice(i,0,"x","y","d")
    console.log(theArray)//[1, 2, 3, 4, 5, 6, 'x', 'y', 'd']
} */

