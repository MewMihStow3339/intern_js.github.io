i = 0
function hovereffecrt(event) {
    event.preventDefault()
    const idname = document.getElementById('effect')
    if (i % 2 == 0) {
        let eff = idname.style.backgroundColor = 'black'
    }
    else if (i % 2 == 1) {
        let eff = idname.style.backgroundColor = 'white'
    }
    i++;
}
submit.addEventListener("mouseover", hovereffecrt)