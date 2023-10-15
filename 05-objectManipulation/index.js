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
        console.log(props);
    }
} */