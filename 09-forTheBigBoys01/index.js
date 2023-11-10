//CLASSES

/* //declaration
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
 */

/* //Static Methods
class staticClass{
    static myClassOps(){
        console.log("Hi fucker!!");
    };
    static get myClassGet(){
        console.log("You dnt need to call me with () so nice!!.");
    };
}
staticClass.myClassOps();//Hi fucker!!
staticClass.myClassGet;//You dnt need to call me with () so nice!!.
class someNewClass extends staticClass{};
var myNewClass = new staticClass();
//myNewClass.myClassGet;//won't work
someNewClass.myClassGet;//You dnt need to call me with () so nice!!. */

//get and set - must be used together for it to work
class myClass{
    constructor(){
        this.nameArray = [];
    };
    set name(value){
        this.nameArray.push(value);
    };
    get name(){
        return this.nameArray[this.nameArray.length - 1];
    };
    //using methods
    tryingSomething(data){
        this.data = data
        return data;
    };
};
var nameClass = new myClass();
nameClass.tryingSomething("Something worked");
nameClass.name = "john";
nameClass.name = "weird";
nameClass.name = "amir";
console.log(nameClass.name);//amir
console.log(nameClass.nameArray);//(3) ['john', 'weird', 'amir']
console.log(nameClass.data);//Something worked

//Dynamic Method Names
var printDetails = Symbol();
class someCeleb{
    constructor(name,job){
        this.name = name;
        this.job = job;
    };
    [printDetails](){
        return{
            name: this.name,
            job: this.job
        };
    };
    ["add"](a,b){
        return a + b;
    }
    [1 + 3](){
        return "Three";
    }
};
let taylor = new someCeleb("Taylor Swift","Musician");
console.log(taylor[printDetails]());//{name: 'Taylor Swift', job: 'Musician'}
console.log(taylor.add(2,5));//7
console.log(taylor[4]());//three
