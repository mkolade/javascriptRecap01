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
/* class myClass{
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
console.log(nameClass.data);//Something worked */

//Dynamic Method Names
/* var printDetails = Symbol();
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
        return "Four";
    }
};
let taylor = new someCeleb("Taylor Swift","Musician");
console.log(taylor[printDetails]());//{name: 'Taylor Swift', job: 'Musician'}
console.log(taylor.add(2,5));//7
console.log(taylor[4]());//Four */

//Context (this)
/* var somePerson = {
    name:"Umar",
    height:"6'2 inch",
    age:21,
    bio: function (){
        return (`My name is ${this.name} and i'm a ${this.age}yr old ${this.height} striker.`);
    }
};
console.log(somePerson.bio());//My name is Umar and i'm a 21yr old 6'2 inch striker.
var bio = somePerson.bio;
console.log(bio());//My name is  and i'm a undefinedyr old undefined striker.



//hard-binding
function Person(){
    return console.log(`My name is ${this.name}`);
};
var person1 = {  name: 'Taiwo' }; 
var person2 = {  name: 'Kenny' }; 
var person3 = {  name: 'Idoqu' }; 

var origin = Person;
Person = function(){
    origin.call(person1);
};
Person();//My name is Taiwo
Person.apply(person2);//My name is Taiwo
Person.apply(person3);//My name is Taiwo */

//Setters and Getters
// Defining a Setter/Getter Using Object.defineProperty
/* var setValue;
var someObj = {};
Object.defineProperty(someObj,"objKey",{
    get: function(){
        return 'Your value is %s',this.value;
    },
    set: function(value){
        this.value = value;
        setValue = value;
    }
});

someObj.objKey = "Okay";
console.log(someObj);//{value: 'Okay'}
console.log(setValue);//Okay */

// Defining getters and setters in ES6 class

class Person{
    constructor(firstname,lastname){
        this._firstname = firstname;
        this._lastname = lastname;
    }
    
    get firstname(){
        return `This is my firstname ${this._firstname}`
    }
    
    set firstname(name){
        this._firstname = name;
    }

    get lastname(){
        return `This is my lastname ${this._lastname}`
    }
    
    set lastname(name){
        this._lastname = name;
    }

}

var newPerson = new Person("Akin","Tayo");
console.log(newPerson._firstname + " & " +newPerson.firstname);
console.log(newPerson._lastname + " & " +newPerson.lastname);