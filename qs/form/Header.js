function getCookie(){

    var cookies = document.cookie;
    console.log(cookies)
    alert(cookies)
}
function deleteCookie(){

    document.cookie ="name=;expires=Thu, 01 Jan 2010 00:00:00 IST"
    document.cookie ="email=;expires=Thu, 01 Jan 2010 00:00:00 IST"
    document.cookie ="age=;expires=Thu, 01 Jan 2010 00:00:00 IST"
    alert("logout")
}