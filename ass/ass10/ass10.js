const disp = document.getElementById("disp");
const alarmAudio = document.getElementById("alarm-audio");
alarmAudio.src = "http://soundbible.com/grab.php?id=1252&type=mp3";
alarmAudio.load();
let alaram;
let flagA = 1;

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

    if (alaram == atime && flagA==1) {
        alarmAudio.play();
    }else if(flagA == 0){
        window.location.reload();
    }

}, 1000)

function aclockstop(){
    alarmAudio.pause();
    flagA=0;
}