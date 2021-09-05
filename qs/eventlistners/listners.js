document.getElementById("btn").addEventListener("click",function(){
    
    alert("calling.......")
})

document.getElementById("btn").addEventListener("click",function(){
    
    alert("called1")
})


document.getElementById("text").addEventListener("mouseover",()=>{

    document.getElementById("text").style.color = "RED"
})

document.getElementById("text").addEventListener("mouseout",()=>{

    document.getElementById("text").style.color = "BLACK"
})

function demo(){

    alert("called....")
}


document.getElementById("param").addEventListener("click",()=>{

    add(10,20)
})

function add(a,b){

    var c =a +b;
    document.getElementById("print").innerHTML =c;
}

document.getElementById("divclick").removeEventListener("click",()=>{

    console.log("called////////")
    document.getElementById("abcd").style.color = 'PINK'
})

