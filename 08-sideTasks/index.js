//001 - Print numbers from 1 to 10
for (var a = 1; a <= 10; a++){
    //console.log(a);
}

//002 - Print the odd numbers less than 100
for(var a = 0; a <= 100; a++){
    if(a % 2 != 0){
        //console.log(a);
    }
}

//003 - Print the multiplication table with 7
var i, j;
for (i = 0; i <= 7; i++){
    for(j = 0; j <= 7; j++){
        //console.log(`${i} times ${j} = ${i * j}`);
    }
}

//004 - Print all the multiplication tables with numbers from 1 to 10
var k, l;
for (k = 1; k <= 10; k++){
    for(l = 1; l <= 10; l++){
        //console.log(`${k} times ${l} = ${k * l}`);
    }
}

//005 - Calculate the sum of numbers from 1 to 10
var s, sum = 0;
for (s = 0; s <= 10; s++){
    sum += s;
};
console.log(sum);

//006 - Calculate 10!
var s, multiple = 1;
for (s = 1; s <= 10; s++){
    multiple *= s;
};
console.log(multiple);

//007 - Calculate the sum of even numbers greater than 10 and less than 30
var s, sum = 0;
for (s; (s > 10) && (s < 30); s++){
    sum += s;
};
console.log(sum);

//008 - Create a function that will convert from Celsius to Fahrenheit
var div = (9/5);
function celToFah(n){
    var fah = (n * div) + 32;
    return `${n} in Celsius is ${fah} in Fahrenheit` ;
}
console.log(celToFah(35))

//009 - Create a function that will convert from Fahrenheit to Celsius
var div = (5/9);
function fahToCel(n){
    var cel = (n - 32) * div;
    return `${n} in Fahrenheit is ${cel} in Celsius` ;
}
console.log(fahToCel(95))

//010 - Calculate the sum of numbers in an array of numbers
var myArray = [1,2,3,4,5,6,7,8,9,10];
var sum = 0;
for (var i = 0; i < myArray.length; i++){
    sum += myArray[i];
}
console.log(sum)

//011 - Calculate the average of the numbers in an array of numbers
var myArray = [1,2,3,4,5,6,7,8,9,10];
var sum = 0, numI = 0;
for (var i = 0; i < myArray.length; i++){
    sum += myArray[i];
    numI += 1;
}
let average = sum / numI;
console.log(average);

//012 - Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers
var myArray = [1,2,3,4,5,6,7,8,9,10];
var posArray = [];
function findPosArray (array){
    for (let arr of array){
        if(arr % 2 === 0){
            posArray.push(arr)
        }
    }
    console.log(posArray);
    return posArray;
};
findPosArray(myArray);

//013 - Find the maximum number in an array of numbers