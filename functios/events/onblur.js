
function demo(){


    console.log("blur called...")
    var x = document.getElementById("name").value;
    console.log("value of x = ",x)
    
    if(x == ""){

        console.log("inside if")
        document.getElementById("print").innerHTML = "Please enter name*"
    }

    else{
        console.log("inseide else")
        document.getElementById("print").innerHTML =x
    }

}