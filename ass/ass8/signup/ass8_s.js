const reader = new FileReader();
const imgval = document.getElementById("img").value

function store() {
    const ch1 = document.getElementById("ch1").checked
    const ch2 = document.getElementById("ch2").checked
    const ch3 = document.getElementById("ch3").checked
    const ch4 = document.getElementById("ch4").checked
    if (ch1 == false && ch2 == false && ch3 == false && ch4 == false) {
        debugger
        alert("please check any one check box")
        event.preventDefault()
        document.getElementById("ch1").focus();
    }
    // event.preventDefault()
    const email = document.getElementById("email")
    const password = document.getElementById("password").value
    const contact = document.getElementById("cono").value
    const texta = document.getElementById("texta").value

    const radio = document.getElementsByName("radio")
    const radiosearch = Array.from(radio).find(radio => radio.checked)
    const radioval = radiosearch.value

    const info = JSON.parse(JSON.stringify(`{
                                "password":"${password}", 
                                "contact":"${contact}", 
                                "texta":"${texta}", 
                                "chval":"${chval}", 
                                "radioval":"${radioval}", 
                                "dropval":"${dropval}", 
                                "fileval":"${null}"
                                }`))

    len = localStorage.length
    let flag = 1;
    for (let i = 0; i < len; i++) {
        let key = localStorage.key(i);

        if (key == email.value) {
            flag = 0;
            break;
        }
    }
    if (flag == 1) {
        localStorage.setItem(email.value, info)
        alert("signup successfully");
        imgup()
    }
    else if (flag == 0) {
        alert("this email is registered please enter another email");
    }
    event.preventDefault();
}


let dropval;
function btn(val) {
    if (val == "computer") {
        dropval = "computer";
    } else if (val == "mechanical") {
        dropval = "mechanical";
    } else if (val == "electrical") {
        dropval = "electical";
    } else if (val == "civil") {
        dropval = "civil";
    }
}

function imgup() {
    const imgInput = document.getElementById("img").files[0]

    // imgInput.addEventListener("change", (event) => {
    const selectedFile = imgInput;
    reader.readAsDataURL(selectedFile);

    reader.onload = function () {
        const imageData = reader.result;
        const email = document.getElementById("email").value;

        const storedInfo = JSON.parse(localStorage.getItem(email));
        storedInfo.fileval = imageData;

        localStorage.setItem(email, JSON.stringify(storedInfo));
    };
    // });
}