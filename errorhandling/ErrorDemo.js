function calc() {

    try {
        demo()
    }
    catch (error) {

        console.log("pls check function....", error)
    }


}


function demo2() {


    try {

        var name = "sam";

        if (name.length < 5) {

            // throw "pls check name size"

            throw {

                errmsg: "pls check name size...",
                statusCode: 500
            }
        }


    }
    catch (error) {
        console.log(error)
    }

}


//error object has 2 props message and name.. 
//name will return error type
//message will retuenn error message..
function demo3() {


    try {
        demo()
    }
    catch (error) {

        console.log("pls check function....", error.name)
        console.log("pls check function....", error.message)
        document.getElementById("error").innerHTML = error.message
    }


}

// if error comes or not finally block will exceute any how

function finallyDemo(){


    try{

        var n = n / 100;

    }catch(e){

        console.log("catch block called....")
    }
    
    finally{
        //cleanup or transaction management...
        console.warn("finally blcok called....")
        
    }


}

function RangeDemo(n) {

    try {
        if (!(n >= -500 && n <= 500)) {

            throw new RangeError("pls check range...")
        }
    } catch (error) {

        console.log(error.name)
        console.log(error.message)
    }


}
