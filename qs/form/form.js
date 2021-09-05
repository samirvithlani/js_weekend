const usernameel = document.querySelector("#username")
const form = document.querySelector("#signup")
const userageel = document.querySelector("#age")

const checkUserAge = ()=>{


    let valid = false;
    const userage = userageel.value.trim();
    if(!isRequired(userage)){

        showError(userageel,"user age is required.....")

    }
    else{
        if(userage>18){
            showSuccess(userageel,"valid..")
            valid =true;
        }
        else{
                showError(userageel,"age must be > 18")
        }
        
    }



}

const checkUserName = ()=>{

    let valid = false;

    const username = usernameel.value.trim();
    
    if(!isRequired(username)){

        showError(usernameel,"user name is required.....")
    }
    else{

        showSuccess(usernameel,"valid..")
        valid =true;
    }

    return valid;
}

const showError=(input,message)=>{

    const error = document.querySelector("#msg")
    error.innerHTML =message

}

const showSuccess =(input,message)=>{

    document.querySelector("#usernametext").innerHTML = input.value
    document.querySelector("#useragetext").innerHTML = input.value;

}

form.addEventListener("submit",function(e){

    //e event
    e.preventDefault();  //action function

    let isUserNameValid = checkUserName() 
    let isAgeValid = checkUserAge()

    let isFormValid = isUserNameValid && isAgeValid;

    if(isFormValid){

        //logic
    }
    else{

        //eroor
    }

})

//tern
const isRequired = value =>value ===''?false:true

