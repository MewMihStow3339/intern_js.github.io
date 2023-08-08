function update() {
    // const email = document.getElementById("email").value
    const email = $("#email").val()
    // const password = document.getElementById("password").value
    const password = $("#password").val()
    // const passwordr = document.getElementById("password reset").value
    const passwordr = $("#passwordr").val()

    let len = localStorage.length;
    flag = 0;

    for (let i = 0; i < len; i++) {
        let key = localStorage.key(i);
        let value = localStorage[key];

        if (key == email && value == password) {
            flag = 1;
            break;
        }
    }
    if (flag == 1) {
        let data = localStorage.getItem(email);

        data = passwordr

        localStorage.setItem(email, data);

        console.log(data);
        alert(`profile ${email} is updated`)
    }
    else {
        alert("Enter correct email and password")
    }

    event.preventDefault();
}
