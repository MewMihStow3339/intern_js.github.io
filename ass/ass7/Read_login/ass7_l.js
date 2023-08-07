function get() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    len = localStorage.length
    let flag = 0;
    for (let i = 0; i < len; i++) {
        let key = localStorage.key(i);
        let value = localStorage[key];
        
        if (key == email && value == password) {
            flag = 1;
            break;
        }
    }
    if (flag == 1) {
        alert(`logged in successfully your data is \nemail: ${email} \npassword is: ${password}`);
    }
    else {
        alert("not logged in");
    }
    
    event.preventDefault();
}
