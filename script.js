 document.getElementById("registrationForm").addEventListener("submit",function(e){
    e.preventDefault();
    
let name = document.getElementById("name").value ;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let confirmPassword = document.getElementById("confirmpassword").value;
 let gender = document.querySelector("input[name='gender']:checked");
let country = document.getElementById("country").value;
  
let isValid = true;

if( name === ""){
    document.getElementById("nameError").innerText = "Name is required.";
    isValid = false;
}
if ( email=== ""){
document.getElementById("emailError").innerText="Email is required ";
isValid = false;
}

else if (!email.includes ("@")|| !email.includes(".") ) {
    document.getElementById("emailError").innerText = " Email is required";
    isValid = false;
}

if( password.length < 6 ){
    document.getElementById("passwordError").innerText= "Password is required";
    isValid=false;
}
if( confirmPassword !== password){
    document.getElementById("confirmPasswordError").innerText = "Password didn't match.Try again!"
    isValid = false

}

if( !gender){
    document.getElementById("genderError").innerText =" Gender is Required";
isValid = false
}

if( country === "select"){
    document.getElementById("countryError").innerText =" Select Country";
    isValid=false;
}
if (isValid){
alert("REGISTRATION SUCCESSFUL ✅ ")
document.getElementById("registrationForm").reset();
}
    
})
