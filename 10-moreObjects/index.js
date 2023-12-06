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
function Door(){
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
    .doorStatus()