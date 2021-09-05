
var demo;
var exam;
var int;

function start(){

    btnid = document.getElementById('btn')

    demo = setTimeout(() => {
        //logic...
        btnid.disabled = true;

    }, 5000);

    demo = setTimeout(() => {
        //logic...
        btnid.disabled = false;

    }, 10000);

}


function startexam(){


    console.log("called....")
    exam = setTimeout(() => {
        
        document.getElementById('submit').disabled=true;
    }, 1000);


}

function interval(){


    console.log("called....")
    int = setInterval(() => {
        
        alert("intervals....")
    }, 3500);


}
function stop(){

    clearInterval(int)
}