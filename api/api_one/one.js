function startt() {
    const api = new XMLHttpRequest();
    const username = document.getElementById("username");
    const url = 'https://api.github.com/users/' + username.value;
    api.open("GET", url);

    api.onreadystatechange = () => {
        console.log(api.responseText);

        // let userinfo = JSON.parse(api.responseText)

        // for (let i in userinfo) {
        //     arr.push([i, userinfo[i]]);
        // }

        // for (let i = 0; i <= 32; i++)
        //     for (let j = 0; j < 1; j++)
        //         arr2.push(`${arr[i][j]}: ${arr[i][j+1]}`);

        document.getElementById("result").innerHTML = api.responseText;

    }
    api.send();
}
document.getElementById("start").addEventListener("click", startt)
