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