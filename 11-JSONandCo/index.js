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

//manipulating JSON

var jsonString = '[{"name":"Lionel","number":10},{"name":"Andres","number":8}]';
//old method
/* var data = JSON.parse(jsonString,function reviver(key,value){
    return key === "name" ? value.toUpperCase()  : value
}); */
//new method
var data = JSON.parse(jsonString,(key,value) => key === "name" ? value.toUpperCase : value);
//console.log(data);