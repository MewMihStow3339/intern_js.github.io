function update() {
    const email = document.getElementById("email")
    const password = document.getElementById("password").value
    const passwordr = document.getElementById("password reset").value

    let len = localStorage.length;
    flag = 0;

    for (let i = 0; i < len; i++) {
        let key = localStorage.key(i);
        let value = localStorage[key];

        if (key == email.value && value == password) {
            flag = 1;
            break;
        }
    }
    if (flag == 1) {
        let data = localStorage.getItem(email.value);

        data = passwordr

        localStorage.setItem(email.value, data);
        
        console.log(data);
        alert(`profile ${email.value} is updated`)
    }
    else {
        alert("Enter correct email and password")
    }

    event.preventDefault();
}
