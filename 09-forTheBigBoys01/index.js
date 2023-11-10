//CLASSES

//declaration
class myFirstTest{
    constructor(option){
        console.log(`Hi this was made with the ${option} option`);
        this.option = option;
    };
};
var someThing = new myFirstTest("speedy");//Hi this was made with the speedy option
console.log(someThing.option);//speedy

//inheritance
class superClass{
    constructor(){
        this.logger = console.log;
    };
    toLog(){
        this.logger(`Hello, this is ${this.name}`);
    };
};

class subClass extends superClass{
    constructor(){
        super();
        this.name = "Sam";
    };
};
var displayName = new subClass();
displayName.toLog();//Hello, this is Sam

//Static Methods
class staticClass{
    static myClassOps(){
        console.log("Hi fucker!!");
    };
    static get myClassGet(){
        console.log("You dnt need to call me with () hahaha!!.");
    };
}
staticClass.myClassOps();//Hi fucker!!
staticClass.myClassGet;//You dnt need to call me with () hahaha!!.
class someNewClass extends staticClass{};
var myNewClass = new staticClass();
//myNewClass.myClassGet;//won't work
someNewClass.myClassGet;//You dnt need to call me with () hahaha!!.
