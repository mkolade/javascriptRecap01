//INHERITANCE
//Standard function prototype
function Kill(form){
    this.form = form;
};
Kill.color = "Red";
Kill.prototype.style = "Slicky";
Kill.prototype.format = function(){
    return "I use hacksaw ahaha";
};
console.log(Kill.style + "!! " + Kill.color);//undefined!! Red

var someKiller = new Kill("Horror");
console.log(someKiller.style + "!! " + someKiller.color);//Slicky!! undefined
console.log(someKiller.form + "!! " + someKiller.format());//Horror!! I use hacksaw ahaha