//FUNCTIONS

//declaration
function foo(){
    const a = 11;
    console.log(a);
    function foo2(){
        const b = 12;
        console.log(a);
        console.log(b);
    }
    //console.log(b)//reference error
    foo2();
}
//console.log(a);//reference error
foo();//11 11 12