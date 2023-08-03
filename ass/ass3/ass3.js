const buttons = document.getElementsByTagName("button");
const result = document.getElementById("result");
let str = "";

const buttonPressed = (e) => {
    if (e.target.id != '=') {
        console.log(e.target.innerText);
        str += e.target.innerHTML;
        result.innerHTML += `${e.target.id}`;
    }
    else if (e.target.id == '=') {
        result.innerHTML = eval(result.innerHTML)
    }
}

for (let button of buttons) {
    button.addEventListener("click", buttonPressed);
}

result.innerHTML = ""