
var myButton = document.querySelector("#myButton");



function changeBackground(elem){
    var mainDiv = document.querySelector(".mainDiv");
    var myTruth = false;
    elem.addEventListener("click",function(){
        if(myTruth == false){
            mainDiv.setAttribute("id","sucker");
            var myValue = mainDiv.getAttribute("id") + " Dark mode!";
            var timeForClickOne = Math.ceil(performance.now()) / 1000;
            myTruth = true;
        }else{
            mainDiv.setAttribute("id","No id so");
            var myValue = mainDiv.getAttribute("id") +  ", Light mode only ha ha!!";
            var timeForClickTwo = Math.ceil(performance.now()) / 1000;
            myTruth = false;
        }
        if(myValue){
            console.log(myValue);
        }
        if(timeForClickOne){
            console.log("Time elapsed between clicks:- " + timeForClickOne);
        }else{
            console.log("Time elapsed between clicks:- " + timeForClickTwo);
        }
    })  
};
changeBackground(myButton);

//JSON

    //manipulating JSON.stringify with replacer function
        var myObject = [{ foundation: "Firefox", model: "browser", week: 42, transport: "bus", month: 17 },{ foundation: "Mozilla", model: "browser", week: 91, transport: "car", month: 3 }];
        //normal function method
            var jsonData01 = JSON.stringify(myObject, function (key,value){
                if(typeof value === "string"){
                    return;
                }
                return value;
            });
            //console.log(JSON.parse(jsonData01))//{week: 42, month: 87}

        //other method
            var jsonData = JSON.stringify(myObject,["foundation","model"])
            //console.log(JSON.parse(jsonData));
        //using the 3rd parameter
            var myData = {x: 1, y:7};
            //console.log(myData);
            //this is suppose to add space but i'm not sure it works
            var myJSON = JSON.stringify(myData,null,0);
            //console.log(JSON.parse(myJSON));

    //manipulating JSON.parse with reviver function
        //function method
        /*  var normalData = JSON.parse(jsonData,function reviver(key,value){
                return key === "foundation" ? value.toUpperCase()  : value
            }); */
        //arrow function method
            var normalData = JSON.parse(jsonData,(key,value) => key === "foundation" ? value.toUpperCase() : value);
            //console.log(normalData);
    
    //Serializing and restoring class instances - by serializing result of toJSON instead of object

        function Car(color,speed){
            this.color = color;
            this.speed = speed;
            this.Id = Math.random();
        };
        Car.prototype.toJSON = function(){
            return {
                type: "I am just a car",
                color: this.color,
                speed: this.speed
            }
        }
        Car.fromJSON = function (value){
            return new Car(value.color,value.speed);
        };

        var aCarJson = JSON.stringify({
            name:"Toyota Kia",
            car: new Car("Red", "Medium Fast")
        })
        //console.log(aCarJson);//{"name":"Toyota Kia","car":{"type":"I am just a car","color":"Red","speed":"Medium Fast"}}

        //console.log(JSON.parse(aCarJson));//{name: 'Toyota Kia', car: {…}}

        function reviver(key,value){
            if(value && value.type === "I am just a car"){
                return Car.fromJSON(value);
            }else{
                return value;
            }
        };
        var parsedJson = JSON.parse(aCarJson,reviver);//{name: 'Toyota Kia', car: {type: 'I am just a car', color: 'Red', speed: 'Medium Fast'}}

        //console.log(parsedJson);//{name: 'Toyota Kia', car: Car {color: 'Red', speed: 'Medium Fast', Id: 0.8509940686407131}}
    //Serializing with a replacer function
        var userRecords = [
            {name:"Mr Samuel", points:76, level: 40, YOP: 33},
            {name:"Mr Thomas", points:16, level: 33, YOP: 19},
            {name:"Mr Kenny", points:32, level: 31, YOP: 33},
            {name:"Mr Timmy", points:22, level: 20, YOP: 13}
        ];
        var recordInJson = JSON.stringify(userRecords,function replacer(key,value){
            if(key === "name"){
                return undefined;
            }else if(typeof value == "number"){
                return Math.floor(value * 0.76);
            }
            return value;
        });
        //console.log(JSON.parse(recordInJson));//(4) [{…}, {…}, {…}, {…}]
        //console.log(JSON.parse('["recordInJson"]'));//['recordInJson']

//AJAX => ("Asynchronous JavaScript and XML")
    //Sending and Receiving JSON Data via POST
        /* const myUserData = {
            details:"Molar Hus"
        };
        const postUser = fetch('file:///C:/Users/moham/Desktop/mySpace/Projects-Ongoing/javascriptRecap01/11-(JSON)(AJAX)andCo/index.html?/api',{
            method:"POST",
            body:JSON.stringify(myUserData)
        }).then((response) =>{
            if(!response.ok){
                throw new Error('Got non-2XX response from API server.')
            }
            return response.json();
        }); */


//Enumerations
    //defining using Object.freeze()
        var theEnumObj = {
            white:1,
            black:2,
            gray:3
        };
        Object.freeze(theEnumObj);
        theEnumObj.black = 77;
        //console.log(theEnumObj);//{white: 1, black: 77, gray: 3}
        const number = theEnumObj.black;
        if(number < 4){
            //console.log(number)
            var ce = theEnumObj;
            
            for(nameId in ce){
                if(ce[nameId] === number){
                    //console.log(nameId);//black
                }
            }
        }else{
            alert("Sorry your value wasn't in the required range")
        }
    // Implementing Enums Using Symbols
        const akolade = Symbol();
        const woods = Symbol();
        const timber = Symbol();

        function describe(symbol){
            switch(symbol){
                case akolade:
                    return "Manager Mohammed Akolade";
                case woods:
                    return "Tiger Woods";

                case timber:
                    return "July Timber";
            }
        };
        //console.log(describe(woods))//Tiger Woods

//MAP
    //creating and manipulating a Map
        const map = new Map([["theDate",new Date()],["ajibade","name"]]);
        /* console.log(map.size);//2
        console.log(map.get("theDate"));//Fri Dec 15 2023 17:20:03 GMT+0100 (West Africa Standard Time)
        console.log(map.get("ajibade"));//{name: 'sam'}
        map.delete("ajibade");
        console.log(map.has("ajibade"));//false
        console.log(map.size);//1
        map.clear();
        console.log(map.size);//0 */
    //Iterating Maps
        for([key,value] of map){
            //console.log(key +" -: "+ value);
        };
        for (const value of map.values()){
            for (const key of map.keys()){
                //console.log(key +" -: "+ value);
            };
        };
        //using forEach
            map.forEach((value,key,myMap) =>{
                //console.log(`The Key: ${key}, The Value: ${value}.`);
            });
    //Get and Set
        const someMap = new Map();
        someMap.set("My Name","Xbvasncvashnb");
        //console.log(someMap.size +"-:  "+ someMap.get("My Name"));

//TIMESTAMPS
    var timeNow = (new Date().getTime());//current time
    var tNow = (performance.now());//time since browser loaded
    var currentTime = Date.now();//current time
    var timeInSec = (Math.ceil(new Date().getTime()))/ 1000;
    //console.log( timeNow + " vs " + tNow + " vs " + currentTime + " vs " + timeInSec);//1702736714534 vs 81.70000004768372 vs 1702736714534 vs 1702737124862

//Unary Operators
    /* //typeof
        console.log(typeof someMap);//object
        console.log(typeof timeNow);//number
    //delete - doesn't work on variables and functions
        delete Math.PI;
        console.log(Math.PI);//3.141592653589793
        var foo = 38;
        delete foo;
        console.log(foo);//38
        var food = {carbs:"Rice"};
        delete food.carbs;
        console.log(food);//{}
    //The unary plus operator (+)
        var myNum = +"42";
        var anotherNum = +true;
        console.log(myNum , anotherNum);//42 1
    //The unary negation operator (-)
        var myNum = -"42";
        var anotherNum = -true;
        console.log(myNum , anotherNum);//-42 -1
    //void - returns undefined
        function myAss(){
            return void 127;;

        }
        console.log(myAss());//undefined
    // The logical NOT operator (!)
        console.log(!false)//true
        console.log(!true)//false
        console.log(!!!12)//false
        console.log(!!12)//true */

//Generator Functions
    function* logNums(){
        try{
            console.log("Starting count");
            yield 1;
            console.log("yielding 1");
            yield 2;
            console.log("yielding 2");
            yield 3;
            console.log("yielding 3");
        }catch(err){
            console.log(err.message);
        }
        
    }

    /* const generator = logNums();
    generator.next();//Starting count
    generator.next();//yielding 1
    generator.throw(new Error("Error!!"));
    generator.next();//nothing is displayed */

    //Sending Values to Generator
        function* sendValue(){
            var sum = 0, value;
            while(true){
                value = yield;
                if(value === null){
                    break;
                };
                sum += value;
            }
            return sum;
        };

        const theValues = sendValue();
        theValues.next();// initial next() to create the next yield
        theValues.next(100);
        theValues.next(10);
        theValues.next(1);
        var myValue = theValues.next(null).value;
        //console.log(myValue);//111
    //Iteration
        function* range(n){
            for(let i = 0; i < n; i++){
                yield `I yield ${i}`;
            }
        };

        for(n of range(2)){
            console.log(n);
        }
        let nums = [...range(3)];
        //console.log(nums);// ['I yield 0', 'I yield 1', 'I yield 2']

//Promises -: I am coming back to this. i hope i remember

// Set P -:Creating a Set
    let themArray = [1,2,4,5,67,7,8,8,9];
    var firstSet = new Set(themArray);
    console.log(firstSet);//Set(8) {1, 2, 4, 5, 67, 7, 8, 9}