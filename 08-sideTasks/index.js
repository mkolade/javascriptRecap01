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