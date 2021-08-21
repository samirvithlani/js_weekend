function sum(){

    //wo return type wo argsument..
    console.log("sum called...")
}

function sub(a,b){

    return a + b;
}
function mul(a,b,c){


    var ans = a * b * c;
    console.log("mul = ",ans)
}
function convert(name){

    return name.toUpperCase();
}

//arrow function callback ->

//function keyword

add = ()=>{

    console.log("add called...")
}


function convert1(name){

    res = ()=>{

        return name.toUpperCase();
    }

    console.log("inside conv1",name)
    
    return res();
}

sum()
var ans = sub(10,20)
console.log(sub(100,200))
console.log("sub  =",ans)

mul(10,10,10)
console.log(convert("sam"))
add()
console.log(convert1("raj"))