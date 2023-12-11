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
            /* var jsonData = JSON.stringify(myObject, function (key,value){
                if(typeof value === "string"){
                    return;
                }
                return value;
            });
            console.log(JSON.parse(jsonData))//{week: 42, month: 87} */

        //other method
            var jsonData = JSON.stringify(myObject,["foundation","model"])
            console.log(JSON.parse(jsonData));
    //manipulating JSON.parse with reviver function
        //function method
        /*  var normalData = JSON.parse(jsonData,function reviver(key,value){
                return key === "foundation" ? value.toUpperCase()  : value
            }); */
        //arrow function method
            var normalData = JSON.parse(jsonData,(key,value) => key === "foundation" ? value.toUpperCase() : value);
            console.log(normalData);