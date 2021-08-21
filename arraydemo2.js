var price = [1,23,48,45,98,78,7]

function isEven(element){

    return element %2 ==0;
}

var firstEven = price.findIndex(isEven)
//console.log(firstEven)


function isAdult(mem){

    return mem.age >= 18;
}

var team = [

    {
        name:"samir",
        age:25
    },
    
    {
        name:"raj",
        age:32
    },
    
    {
        name:"jay",
        age:15
    }

]



var index = team.find(isAdult);
console.log(index)