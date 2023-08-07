function check() {
    const ch1 = document.getElementById("ch1")
    const ch2 = document.getElementById("ch2")

    if (ch1.checked == true && ch2.checked == true) {
        alert("Please check only one checkbox")
    } else if (ch1.checked == false && ch2.checked == false) {
        alert("Please check any one checkbox")
    } else if (ch1.checked == true) {
        alert(`Checkbox ${ch1.value} is checked`)
    } else if (ch2.checked == true) {
        alert(`Checkbox ${ch2.value} is checked`)
    }4
    
    event.preventDefault();
}