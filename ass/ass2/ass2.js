const buttons = document.getElementsByTagName("button");
const result = document.getElementById("result");
result.innerHTML = "0"
let rplc;
const buttonPressed = (e) => {
    if (!(e.target.id == '=' || e.target.id == 'AC' || e.target.id == 'C')) {
        if (result.innerText == '0' || result.innerText == '/' || result.innerText == '-' || result.innerText == '+' || result.innerText == '*' || result.innerText == '%') {
            result.innerHTML = `${e.target.id}`;
        }
        else if (result.innerText.charAt(result.innerText.length - 1) == '0' || result.innerText.charAt(result.innerText.length - 1) == '/' || result.innerText.charAt(result.innerText.length - 1) == '-' || result.innerText.charAt(result.innerText.length - 1) == '+' || result.innerText.charAt(result.innerText.length - 1) == '*' || result.innerText.charAt(result.innerText.length - 1) == '%') {
            if ((e.target.id == '0' || e.target.id == '/' || e.target.id == '+' || e.target.id == '*' || e.target.id == '%'|| e.target.id == '-')) {
                rplc = result.innerHTML.replace(result.innerHTML.charAt(result.innerText.length - 1), `${e.target.id}`)
                result.innerHTML = rplc;
            }
            else{
                result.innerHTML += `${e.target.id}`;
            }

            // console.log();

            // result.innerHTML = rplc
        }
        else {
            result.innerHTML += `${e.target.id}`;
        }
    }
    else if (e.target.id == '=') {
        result.innerHTML = eval(result.innerHTML)
    }
    else if (e.target.id == 'AC') {
        result.innerHTML = '0'
    }
    else if (e.target.id == 'C') {
        if (result.innerHTML != '0') {
            result.innerHTML = result.innerHTML.slice(0, -1)
        }
        else {

        }
    }

}

for (let button of buttons) {
    button.addEventListener("click", buttonPressed);
}
