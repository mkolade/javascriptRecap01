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
        const map = new Map([["theDate",new Date()],["ajibade",{name:"sam"}]]);
        /* console.log(map.size);//2
        console.log(map.get("theDate"));//Fri Dec 15 2023 17:20:03 GMT+0100 (West Africa Standard Time)
        console.log(map.get("ajibade"));//{name: 'sam'}
        map.delete("ajibade");
        console.log(map.has("ajibade"));//false
        console.log(map.size);//1
        map.clear();
        console.log(map.size);//0 */
