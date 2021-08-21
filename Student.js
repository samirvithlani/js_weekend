//var students = ["samir","raj","jay",12,false,12.65]

var students = [

    {
        sName:"samir",
        sAge:20,
        sId:1
    },
    {
        sName:"raj",
        sAge:22,
        sId:2
    },
    {
        sName:"jay",
        sAge:24,
        sId:3
    },

]


for(var i=0;i<students.length;i++){

    console.log(students[i].sName)
}


var languages = ["malayalam","a","abc","java","c++","python","c","node"]

var price = [11,100000,5,20,78,96]

console.log("languages = ",languages)

//languages.reverse()
//languages.sort();
//price.sort()

//console.log("languages = ",languages)
//console.log(price)


function name_len_compare(a,b)
{
    return a.length - b.length;
}



//by defaulr alph...
//languages.sort(name_len_compare)

languages.sort((a,b)=>{return a.length - b.length})
price.sort((a,b)=>{return a - b});


console.log("AFTER SORTING...")
console.log("languages = ",languages)

console.log("price = ",price)

var lan_stirng = languages.toString()
console.log(lan_stirng.toUpperCase())











