//OBJECTS

//shallow cloning
/* const someObj = {
    0:"kd",
    1:"ok",
    2:"mk",
    3:"md",
    4:{
        sake:"Japan"
    },
    length:5
}

const cloneObj = Object.assign({},someObj);
//for deep cloning
const deepClone = JSON.parse(JSON.stringify(someObj))
//for obj to array
const arrayObj = Array.from(someObj);

someObj[3] = "notMd";

console.log(cloneObj);// {0: 'kd', 1: 'ok', 2: 'mk', 3: 'md', 4: {…}, length: 5}
console.log(arrayObj);// ['kd', 'ok', 'mk', 'md', {…}]
console.log(deepClone);// {0: 'kd', 1: 'ok', 2: 'mk', 3: 'md', 4: {…}, length: 5}
//iterating over an object
for(var props in someObj){
    if(someObj.hasOwnProperty(props)){
        console.log(props);// 0 1 2 3 4 length
    }
} */

/* //Object assign
var someUser = {
    firstName:"John"
}
var otherUserDetails = {
    lastName:"Kentucky",
    dob:"05-1-2004",
    mainPassword:"#Manager2442",
    favoriteKink:"Boobs"
}
var latestDetails = {
    tod:"unAssigned"
}
Object.assign(someUser,latestDetails,undefined,{...otherUserDetails});
console.log(someUser)//{firstName: 'John', lastName: 'Kentucky', dob: '05-1-2004', mainPassword: '#Manager2442', favoriteKink: 'Boobs', tod: "unAssigned"} */

// Dynamic / variable property names
/* var favoriteFruit = "pineapple";
var dictionary = {
    veggie:"acronym for vegetables",
    apple:"a for apple",
    lettuce:"a form of veggie",
    [favoriteFruit]:"The most amazing fruit ever"
}
const p = "Enter unique word to be found.For bonus points, try to guess my favorite fruit by guessing it"
var word = prompt(p).toLowerCase();
var definition = dictionary[word]
if(word){
    if(word == favoriteFruit){
        console.log(`4Pts\nConfirmed!!. You have great taste \n${word.toUpperCase()}-: ${definition}`)
    }
    else console.log(`2Pts \n${word.toUpperCase()} - ${definition}`);
} */

