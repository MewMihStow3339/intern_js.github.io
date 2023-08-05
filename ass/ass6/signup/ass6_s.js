function store() {
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    localStorage.setItem(email.value, password.value);
}