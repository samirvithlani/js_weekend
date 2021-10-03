//get
//cookie
const username = document.querySelector("#name")

const email = document.querySelector("#email")
const phone = document.querySelector("#phone")
const form = document.querySelector("#form")


form.addEventListener("submit",function(e){


    //store //register...
    //keep true
    document.cookie = "name=" + username.value;
    document.cookie = "email=" + email.value;
    document.cookie = "phone=" + phone.value;
    document.cookie = "phone=" + phone.value;

    //no




    alert("signup success...")


})