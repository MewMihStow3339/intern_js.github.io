$(document).ready(function () {
    $("#event").click(function () {
        $('#event').css('background-color', 'red')
    });

    $("#event").dblclick(function () {
        $('#event').css('background-color', 'blue')
    });

    $("#event").contextmenu(function () {
        $('#event').css('background-color', 'orange')
    });

    $("#event").mouseenter(function () {
        $('#event').css('background-color', 'yellow')
    });

    $("#event").mouseleave(function () {
        $('#event').css('background-color', 'white')
    });
});