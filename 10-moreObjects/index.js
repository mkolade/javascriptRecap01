//INHERITANCE
//Standard function prototype
function Kill(form){
    this.form = form;
};
Kill.color = "Red";
Kill.prototype.style = "Slick";
Kill.prototype.format = function(){
    return "I use hacksaw";
};
console.log(Kill.style + "!! " + Kill.color);//undefined!! Red

var someKiller = new Kill("Horror");
console.log(someKiller.style + "!! " + someKiller.color);//Slick!! undefined
console.log(someKiller.form + "!! " + someKiller.format());//Horror!! I use hacksaw

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
console.log(ken.class)//3A

//fun fact -: Object.prototype is for every single objects
//Object.prototype.killMethod = "Gun";
//console.log(Kill.killMethod,myProto.killMethod,ken.killMethod);//Gun Gun Gun