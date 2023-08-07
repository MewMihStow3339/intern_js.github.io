const disp = document.getElementById("disp");

setInterval(() => {
    const date = new Date();
    disp.innerHTML = date.toLocaleTimeString();
},1000)

alarmAudio.src = "http://soundbible.com/grab.php?id=1252&type=mp3";
alarmAudio.load();