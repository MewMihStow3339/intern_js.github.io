function startt() {
    const username = document.getElementById("username");
    const url = 'https://api.github.com/users/' + username.value;

    fetch(url)
        .then((responce) => {
            // return responce.json()
            return responce.text()
        })
        .then((data) => {
            document.getElementById("result").innerHTML = data
            console.log(data);
        }).catch((error) => console.log(error))

}
document.getElementById("start").addEventListener("click", startt)
