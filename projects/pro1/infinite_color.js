let intr;
const start = document.getElementById("start").addEventListener("click", function () {
    intr = setInterval(infinite_color, 500);
})
const stop = document.getElementById("stop").addEventListener("click", function () {
    clearInterval(intr)
    document.getElementById("infinite_color").style.backgroundColor = "white"
})

function infinite_color() {
    const hexa = '0123456789ABCDEF'
    let clr = '#';
    for (let i = 0; i < 6; i++) {
        clr += hexa[Math.floor(Math.random() * 16)];
    }
    document.getElementById("infinite_color").style.backgroundColor = clr;
};