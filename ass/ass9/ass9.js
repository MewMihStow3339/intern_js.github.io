const disp = document.getElementById("disp");

setInterval(() => {
    const date = new Date();
    disp.innerHTML = date.toLocaleTimeString();
},1000)

