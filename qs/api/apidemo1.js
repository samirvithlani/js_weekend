

async function callapi() {

    
    var data;
    //fetch
    var res = await fetch("https://reqres.in/api/users?page=2") //database --> res -->api
    var data = await res.json();
    
    var users = data.data;
    document.getElementById("uname").innerHTML= users[0].first_name;
    document.getElementById("uemail").innerHTML=users[0].email;
    document.getElementById("avatar").src=users[0].avatar;


    // for(var i=0;i<users.length;i++){

    //     console.warn(users[i])
    // }


    //data

    
    


}