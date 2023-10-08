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
