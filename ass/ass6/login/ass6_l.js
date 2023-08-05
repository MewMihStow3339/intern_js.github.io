function get() {
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const check =  localStorage.getItem(password.value);
    console.log(check);
    if(check!=null){
        alert("successfully logedin")
    }else{
        alert("pls Enter valid email or password")
    }
}