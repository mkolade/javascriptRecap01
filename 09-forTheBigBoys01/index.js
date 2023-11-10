//CLASSES

//declaration
class speedyClass {
    constructor(option){
        console.log(`This is created with ${option} option`);
        this.option = option;
    };
};
const speedy = new speedyClass("speedy");//This is created with speedy option
console.log(speedy.option);//speedy

//inheritance
class bigClass{
    constructor(){
        this.logger = console.log;
    }
    toLog(){
        this.logger(`Hello class, this is ${this.name}`)
    }
}
class smallClass extends bigClass{
    constructor(){
        super();
        this.name = "Mike";
    };
};

const newClass = new smallClass();
newClass.toLog();

//Static Methods