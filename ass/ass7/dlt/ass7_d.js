function dlt() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    let len = localStorage.length;
    flag = 0;

    for (let i = 0; i < len; i++) {
        const key = localStorage.key(i);
        const value = localStorage[key];

        if(key == email && value == password) {
            flag = 1;
            break;
        }
    }
    if(flag == 1){
        localStorage.removeItem(email);
        alert(`profile ${email} is deleted`)
    }
    else{
        alert("Enter right email and password")
    }

}
