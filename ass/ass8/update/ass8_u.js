function update() {
    const email = document.getElementById("email")
    const password = document.getElementById("password").value
    const passwordr = document.getElementById("password reset").value

    let len = localStorage.length;
    flag = 0;

    for (let i = 0; i < len; i++) {
        let key = localStorage.key(i);
        let value = localStorage[key];
        let valj = JSON.parse(value)

        if (key == email.value && valj.password == password) {
            flag = 1;
            break;
        }
    }
    if (flag == 1) {
        let data = localStorage.getItem(email.value);
        let val = JSON.parse(data)

        val.password = passwordr

        localStorage.setItem(email.value, JSON.stringify(val));
        
        console.log(val.password);
        alert(`profile ${email.value} is updated`)
    }
    else {
        alert("Enter correct email and password")
    }

    event.preventDefault();
}
