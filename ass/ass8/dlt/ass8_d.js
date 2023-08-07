function dlt() {
    const email = document.getElementById("email")
    const password = document.getElementById("password").value

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
        localStorage.removeItem(email.value);
        alert(`profile ${email.value} is deleted`)
    }
    else {
        alert("Enter correct email and password")
    }

    event.preventDefault();
}
