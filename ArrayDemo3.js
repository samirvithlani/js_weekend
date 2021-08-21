var price = [12,22,58,98,78,25]


function findeven(e){
 
    return  e %2 ==1;
}
var odd = price.find(findeven)

var even = price.find((e)=>{
    return e % 2 ==0;
})




console.log(odd)
console.log(even)