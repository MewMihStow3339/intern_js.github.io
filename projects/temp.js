$(document).ready(function(){
    i = 1
    $("#h"+i.toString()).click(function(){
        $("#h"+i.toString()).attr("id", "hello"); // Change the ID of the clicked h1 element
    });
});