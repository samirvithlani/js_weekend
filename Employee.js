//json object JAVA script object notation key value pair 

//dictnory 
var employee = 
{
    eName:"samir",
    eAge:20,
    eStatus:false,
    eSalary:1253.50
}






function getData(){

    console.log(employee.eName)
    console.log(employee.eSalary)
    console.log(employee.eStatus)
    console.log(employee.eAge)

    document.getElementById("name").innerHTML = employee.eName
    document.getElementById("salary").innerHTML = employee.eSalary
    document.getElementById("age").innerHTML = employee.eAge
    if(employee.eStatus == false){
        document.getElementById("status").innerHTML = "Not Active"
    }
    else{

        document.getElementById("status").innerHTML = "ACtive"
    }

}