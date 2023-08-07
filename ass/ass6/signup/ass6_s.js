function store() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    len = localStorage.length
    let flag = 1;
    for (let i = 0; i < len; i++) {
        let key = localStorage.key(i);
        // let value = localStorage[key.password];

        if (key == email) {
            flag = 0;
            break;
        }
    }
    if (flag == 1) {
        localStorage.setItem(email, password)
        alert("signup successfully");
    }
    else if (flag == 0) {
        alert("this email is registered please enter another email");
    }
    
    event.preventDefault();
}