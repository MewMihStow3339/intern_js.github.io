let dropval;

function store() {
    if(document.getElementsByName("ch")){
        alert("must check any one checkbox")
        event.preventDefault()
    }
    const email = document.getElementById("email")
    const password = document.getElementById("password").value
    const contact = document.getElementById("cono").value
    const texta = document.getElementById("texta").value

    const ch = document.getElementsByName("ch")
    const chsearch = Array.from(ch).find(ch => ch.checked)
    const chval = chsearch.value

    const radio = document.getElementsByName("radio")
    const radiosearch = Array.from(radio).find(radio => radio.checked)
    const radioval = radiosearch.value

    const file = document.getElementById("img").value
    const fileval = file.slice((file.lastIndexOf("\\")) + 1, file.length)
    // console.log(fileval);
    // console.log(dropval);
    const info = JSON.parse(JSON.stringify(`{
                            "password":"${password}", 
                            "contact":"${contact}", 
                            "texta":"${texta}", 
                            "chval":"${chval}", 
                            "radioval":"${radioval}", 
                            "dropval":"${dropval}", 
                            "fileval":"${fileval}"
                            }`))

    // console.log(info);

    len = localStorage.length
    console.log(len);
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
    }
    else if (flag == 0) {
        alert("this email is registered please enter another email");
    }
    // console.log(chval);
    // console.log(radioval);
    // console.log(drop);
    event.preventDefault();
}

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