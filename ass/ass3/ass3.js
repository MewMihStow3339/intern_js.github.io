let i = 1;
let btni = 1;
const add = () => {
    const newli = document.createElement("li")
    newli.setAttribute("class", "btn-group col-md-6")
    newli.setAttribute("id", `li${i}`)
    document.querySelector("#ul").appendChild(newli)

    const newinp = document.createElement("input")
    newinp.type = "text"
    newinp.disabled = true
    const input = document.getElementById("inp")
    newinp.value = `${input.value}`
    newinp.setAttribute("class", "form-control")
    newinp.setAttribute("id", "fc")

    document.querySelector(`#li${i}`).appendChild(newinp)

    const newbtn = document.createElement("button")
    newbtn.type = "button"
    newbtn.innerHTML = "clear"
    newbtn.setAttribute("class", "btn btn-danger")
    newbtn.setAttribute("id", `btn${btni}`)
    newbtn.setAttribute("onclick", `remove(li${i})`)
    document.querySelector(`#li${i}`).appendChild(newbtn)

    // const br = document.createElement("br")
    // document.querySelector(`#ul`).appendChild(br)
    i++
    btni++
}
function remove(id) {
    // console.log(id);
    // i--
    // btni--
    // let el = document.getElementById(`li${i}`);
    const newli = document.getElementById("ul")
    // newli.removeChild(newli.lastElementChild)
    newli.removeChild(id)
}
function removeall(){
    const removeallli = document.getElementById("ul")
    removeallli.innerHTML = ""
}   