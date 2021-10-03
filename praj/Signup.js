const username = document.querySelector("#name")

const email = document.querySelector("#email")
const phone = document.querySelector("#phone")
const form = document.querySelector("#form")


form.addEventListener("submit", function (e) {

    //e event
    e.preventDefault();  //action function
    console.log("email =", email.value)
    console.log("phone =", phone.value)
    console.log("name", username.value)



    document.cookie = "name=" + username.value;
    document.cookie = "email=" + email.value;
    document.cookie = "phone=" + phone.value;
    document.cookie = "phone=" + phone.value;
    document.cookie = "id=1"



    alert("signup success...")




})
