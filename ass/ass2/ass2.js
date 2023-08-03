const buttons = document.getElementsByTagName("button");
const result = document.getElementById("result");
result.innerHTML = "0"
let rplc;
let flag = 0;
const buttonPressed = (e) => {
    const condition = result.innerText.charAt(result.innerText.length - 1)
    if (!(e.target.id == '0' || e.target.id == '=' || e.target.id == 'AC' || e.target.id == 'C' || e.target.id == '.')) {
        if (result.innerText == '0' || result.innerText == '/' || result.innerText == '-' || result.innerText == '+' || result.innerText == '*' || result.innerText == '%') {
            result.innerHTML = `${e.target.id}`;
        }
        else if (condition == '0' || condition == '/' || condition == '-' || condition == '+' || condition == '*' || condition == '%') {
            if ((e.target.id == '0' || e.target.id == '/' || e.target.id == '+' || e.target.id == '*' || e.target.id == '%' || e.target.id == '-')) {
                rplc = result.innerHTML.replace(result.innerHTML.charAt(result.innerText.length - 1), `${e.target.id}`)
                result.innerHTML = rplc;
            }
            else {
                result.innerHTML += `${e.target.id}`;
            }

            // console.log();

            // result.innerHTML = rplc
        }
        else {
            result.innerHTML += `${e.target.id}`;
        }
    }
    else if (e.target.id == '.') {
        let updatedr = result.innerHTML.split("")
        for (let el of updatedr) {
            if (el == '.') {
                flag = 1
            }
            else {
                flag = 0
            }
            console.log(updatedr);
            console.log(flag);
        }
        if (flag == 0) {
            result.innerHTML += `${e.target.id}`;
        } else {
            result.innerHTML += "";
        }
    }
    else if(e.target.id=='0'){
        result.innerHTML += `${e.target.id}`
    }
    else if (e.target.id == '=') {
        if (!(condition == '/' || condition == '-' || condition == '+' || condition == '*' || condition == '%')) {
            result.innerHTML = eval(result.innerHTML)
        }
        else {
            result.innerHTML = result.innerHTML.replace(result.innerHTML.charAt(result.innerHTML.length - 1), "");
        }
    }
    else if (e.target.id == 'AC') {
        result.innerHTML = '0'
    }
    else if (e.target.id == 'C') {
        if (result.innerHTML.charAt(0) != '0') {
            result.innerHTML = result.innerHTML.slice(0, -1)
            if (result.innerHTML.length == 0) {
                result.innerHTML = '0'
            }
        }
        if (result.innerHTML.charAt(0) == '0') {
            result.innerHTML = result.innerHTML.slice(0, -1)
            if (result.innerHTML.length == 0) {
                result.innerHTML = '0'
            }
        }
    }

}

for (let button of buttons) {
    button.addEventListener("click", buttonPressed);
}
