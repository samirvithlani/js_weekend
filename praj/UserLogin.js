const uname = document.querySelector("#name")
const email = document.querySelector("#email")
const form = document.querySelector("#form")
const id = document.querySelector("#id")


function validateUser() {

    //read data from cookie...
    var cookieData = document.cookie;
    //cookie data is string please split it
    console.log("cookie data =", cookieData)
    var userArray = cookieData.split("; ")

    console.log("userarray = ",userArray)
    //var name  =userArray[0].split("=")[1]
    //console.log("name from cookie =",name)
    var username, useremail

    username = userArray[0].split("=")[1]
    useremail = userArray[1].split("=")[1]
   
    if(uname.value===username && email.value === useremail){

        document.getElementById("error").innerHTML =""
        alert("login success...")
        document.getElementById("pname").innerHTML = username
        document.getElementById("pemail").innerHTML= useremail
    }
    else{

        document.getElementById("error").innerHTML ="Please check username or email.."
        document.getElementById("pname").innerHTML = ""
        document.getElementById("pemail").innerHTML= ""
    }

   



}

form.addEventListener("submit", function (e) {

    e.preventDefault();

    //console.log("username in login",username.value)
    //console.log("username in login",username.value)

    //
    //login press -->  step 1

    validateUser()



})


