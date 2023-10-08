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

/* //mapping and filtering array
var people =[{
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
people.map((person)=>(
    console.log(person)// works fine
))

const filteredArray = people.filter((person) => (
    person.age > 19
))
console.log(filteredArray)// works fine */

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
/* //looping through array
const myArray = [23,2,3,4,5,8];
for (var i = 0,length = myArray.length; i < length;i++){
    console.log(myArray[i])//23 2 3 4 5 8 
}
//for(i in myArray) console.log(myArray[i]);//not recommended
//looping in reverse below
for(var i = myArray.length - 1;i > -1;i--){
    var twoValue = myArray[i] * 2;
    console.log(twoValue)//16 10 8 6 4 46
} */

//while loop
var i = 0;
while(i < 7 && i % 2 != 5){
    console.log(i);//0 1 2 3 4 5 6
    i++;
};