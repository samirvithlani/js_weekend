var no = 10
console.log(no)

//json object java script object notation

var employee =
{
    name:"samir",
    eId:101,
    eSalary:12345.50,
    eStatus:false
}

function getEmployeeDetails(){


    console.log(employee.eId)
    console.log(employee.name)
    console.log(employee.eSalary)
    console.log(employee.eStatus)

    document.getElementById("name").innerHTML = employee.name
    document.getElementById("salary").innerHTML = employee.eSalary
    if(employee.eStatus == true){

        document.getElementById("status").innerHTML = "ACTIVE"
    }
    else{

        document.getElementById("status").innerHTML = "NOT - ACTIVE"
    }

}

