function get() {

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    len = localStorage.length
    let flag = 0;
    for (let i = 0; i < len; i++) {
        let key = localStorage.key(i);
        let value = localStorage[key];
        let valj = JSON.parse(value)

        if (key == email && valj.password == password) {
            flag = 1;
            break;
        }
    }
    if (flag == 1) {
        alert(`logged in successfully your data is \nemail: ${email} \ninfo is: ${localStorage[email]}`);
        window.location.href = "http://127.0.0.1:5500/ass/ass8/dlt/ass8_d.html";
    }
    else {
        alert("not logged in");
    }
}