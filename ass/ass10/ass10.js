const disp = document.getElementById("disp");
const alarmAudio = document.getElementById("alarm-audio");
alarmAudio.src = "http://soundbible.com/grab.php?id=1252&type=mp3";
let alaram;

function aclock() {
    alaram = document.getElementById("time").value
}
setInterval(() => {
    const date = new Date();

    const currtime = date.toLocaleTimeString()
    disp.innerHTML = currtime;

    const atime = date.toLocaleTimeString(navigator.language, {
        hour: 'numeric', minute: 'numeric', hour12: false
    });

    if (alaram == atime) {
        alarmAudio.load();
        alarmAudio.play();
    }

}, 1000)