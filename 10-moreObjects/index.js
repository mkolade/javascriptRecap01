//INHERITANCE

/* //Standard function prototype
function Killer(form){
    this.form = form;
};
Killer.color = "Red";
Killer.prototype.style = "Slick";
Killer.prototype.format = function(){
    return "I use hacksaw";
};
console.log(Killer.style + "!! " + Killer.color);//undefined!! Red

var oyenusi = new Killer("Horror");
console.log(oyenusi.style + "!! " + oyenusi.color);//Slick!! undefined
console.log(oyenusi.form + "!! " + oyenusi.format());//Horror!! I use hacksaw

//Prototypal inheritance
var myProto = {
    name:"Sammy Kenny",
    class:"3B",
    language:function(){
        return "English and Korean";
    }
};
var ken = Object.create(myProto);
console.log(ken.name,ken.class,ken.language())//Sammy Kenny 3B English and Korean
myProto.class = "3A";
console.log(ken.class)//3A */

//fun fact -: Object.prototype is for every single objects
//Object.prototype.killMethod = "Gun";
//console.log(Killer.killMethod,myProto.killMethod,ken.killMethod);//Gun Gun Gun

//Setting an Object's prototype
/* const main = {
    job:"doctor",
    hello(){
        return `${this.name} is a ${this.job}`;
    }
};
const second = {
    job:"killer",
    hi(){
        return `${this.name} is a ${this.job}`;
    }
};

var sam = Object.create(main);
sam.name = "Sam";
console.log(sam.hello());//Sam is a Killer


sam = Object.setPrototypeOf(sam,second);
//console.log(sam.hello());//error
console.log(sam.hi()); */

//Method Chaining
/* 
function Func(x = 0, y = 0){
    this.x = x;
    this.y = y;
};
Func.prototype = {
    add: function(value){
        this.x += value.x;
        this.y += value.y;
        return this;
    },
    mulByNum: function(num){
        this.x *= num;
        this.y *= num;
        return this;
    },
    clone: function(){
        return new Func(this.x,this.y);
    },
    log: function(){
        console.log(`${this.x} : ${this.y}`);
        return this;
    }
};

var myFunc = new Func();
myFunc.add({x:10, y:10})
.add({x:10, y:10})
.log()//20 : 20
.mulByNum(2)
.log()//40 : 40
var myFunc2 = myFunc.clone()
.log()//40 : 40
.mulByNum(1/4)
.log()//10 : 10 */

//more method chaining
/* function Door(){
    this.width = "";
    this.height = "";
    this.status = "";
};
Door.prototype.open = function(){
    this.status = "open";
    return this;
};
Door.prototype.close = function(){
    this.status = "closed";
    return this;
};
Door.prototype.setParams = function(width, height){
    this.width = width;
    this.height = height;
    return this;
};
Door.prototype.doorStatus = function(){
        console.log('The ' + this.width + ' x ' + this.height + ' door is ' + this.status);
        return this;
};

var newDoor = new Door();
newDoor.setParams(300,750)
    .open()
    .doorStatus()
    .close()
    .doorStatus() */

//CALLBACKS
/* function sumArray(array,callback){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        callback(array[i])
        sum += array[i];
    }
    return sum;
};
var myArray = [9,3,34,5,6,7,78,23,6,8,54];
sumArray(myArray, function(x){
    console.log(x)
}) */

//synchronous and asynchronous
/* //synchronous
function doSomething(then){
    console.log('I`m doing something');
    then();
};
function myThen(){
    console.log("Done!");
};
doSomething(myThen);
console.log("Sync is cool");
//order =: I`m doing something => Done! => Sync is cool

//asynchronous
function doSomethingAsync(then){
    setTimeout(then,1000)
    console.log('I`m doing something');
};
doSomethingAsync(myThen)
console.log("Async is cool");
//order =: I`m doing something => Async is cool => Done! */

//Callbacks and `this`
/* var anArray = [1,2,3,4,5];
function arrCompare(theArray){
    function getArrayWithNorm(someArray){
        var sum = 0;
        someArray.forEach(function(num){
            sum += (num * 2);
        })
        return sum;
    };

    function getArrayWithArrow(someArray){
        var sum = 0;
        someArray.forEach((num) => {
            sum += num;
        })
        return sum;
    };
    var sum1 = getArrayWithNorm(theArray);
    var sum2 = getArrayWithArrow(theArray);
    if(sum1 == (sum2 * 2)){
        return `This array is perfect. Total sum is == ${sum1 + sum2}`;
    }
}

const myButton = document.getElementById("myButton");

function getDetails(msg, elem){
    this.msg = msg;
    elem.addEventListener("click",(event) => {this.handleClick(event)})
}
getDetails.prototype.handleClick = function(event){
    console.log(this.msg,arrCompare(anArray,"And event type is:", event.type))
}
new getDetails("Hello!",myButton); */

//callbacks for error handling

/* var valExpected = true;
function onSuccess(){
    console.log("Success!! okay.");
};

function onFailure(){
    console.log("Failure!! okay.");
};
function dataCompare(data,success, failure){
    if(data == valExpected){
        success();
    }else{
        failure();
    };
};
function compAsync(data,success,failure){
    setTimeout(()=>{dataCompare(data,success,failure)},1000);
};
compAsync(valExpected,onSuccess,onFailure);//Success!! okay. */

//Intervals and Timeouts
/* function execSmtin(){
    console.log("I am a real nigga!!.");
};
var myInterval = setInterval(execSmtin,6000);
setTimeout(() => {
    clearInterval(myInterval);
},18000);
//using timeout in a for loop
for(var i = 0; i < 3; i++){
    setTimeout(function(j){
        console.log(j)
    }(i),1000);
} */

// Cookies Section -: test if cookies are enabled

/* if(navigator.cookieEnabled == false){
    alert("Cookie not enables");
}else{
    alert("cookie enabled");
}; */

//Using localStorage
/* localStorage.setItem("name","Mr Moshood");
console.log(localStorage.getItem("name"));//Mr Moshood
localStorage.removeItem("name");
console.log(localStorage.getItem("name"));//Null

var someObj = {
    name:"Arike",
    occupation:"pre-order",
    chant:"Arike pre-order",
    id:"77"
};
localStorage.setItem("userDetails",JSON.stringify(someObj));
console.log(JSON.parse(localStorage.getItem("userDetails")));//{name: 'Arike', occupation: 'pre-order', chant: 'Arike pre-order', id: '77'}

//easier way
localStorage.nameId = "Moshood Mohammed";
localStorage.year = 2000;
localStorage.userDetailId = JSON.stringify(someObj);
delete localStorage.year;
console.log(localStorage.nameId,JSON.parse(localStorage.userDetailId),localStorage.year);//Moshood Mohammed {name: 'Arike', occupation: 'pre-order', chant: 'Arike pre-order', id: '77'} undefined
//to clear local storage -;
//localStorage.clear();

console.log(localStorage.length)

//sessionStorage
sessionStorage.setItem("okay","Testing okay");
console.log(sessionStorage.getItem("okay"),sessionStorage.length);
sessionStorage.removeItem("okay") */

var myButton = document.querySelector("#myButton");


function changeBackground(elem){
    var mainDiv = document.querySelector(".mainDiv");
    var myTruth = false;
    elem.addEventListener("click",function(){
        if(myTruth == false){
            mainDiv.setAttribute("id","sucker");
            var myValue = mainDiv.getAttribute("id") + " Dark mode";
            myTruth = true;
        }else{
            mainDiv.setAttribute("id","");
            var myValue = mainDiv.getAttribute("id") +  "Light mode only ha ha!!";
            myTruth = false;
        }
        if(myValue){
            console.log(myValue);
        }
    })
    
};
changeBackground(myButton);

