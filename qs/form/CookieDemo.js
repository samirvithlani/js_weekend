//UDF
function setCookie(){

    //prop
    document.cookie ="name=samir"
    document.cookie ="email=samir@gmail.com"
    document.cookie ="age=20"

    alert("cookie seted....")
}

//UDF
function getCookie(){

    var cookies = document.cookie;
    console.log(cookies)
    alert(cookies)
}