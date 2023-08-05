const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '60561d8320mshd3bfc8a6d0ddcc3p154f0bjsn3bbcd3a3607b',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const sub = document.getElementById("cityname")
const city = document.getElementById("city")
const disp = document.getElementById("disp")
const hidden = document.querySelector(".visually-hidden")
submit.addEventListener("click", weather)

function weather() {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + sub.value, options)
        .then(responce => responce.json())
        .then(responce => {
            if (responce.feels_like != undefined) {
                console.log(responce);
                disp.innerHTML = responce.feels_like;
                city.innerHTML = sub.value;
                hidden.setAttribute("class", "")
                console.log(responce.feels_like);
            }
            else {
                hidden.innerHTML = "Pls enter valid place name"
                hidden.setAttribute("class", "")
                // event.reload()
            }
        })
        .catch((error) => {
            console.error(error);

        })
}