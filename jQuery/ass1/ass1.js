$(document).ready(function () {

    $("#submit").click(function () {

        const settings = {
            async: true,
            crossDomain: true,
            url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+$("#cityname").val(),
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '60561d8320mshd3bfc8a6d0ddcc3p154f0bjsn3bbcd3a3607b',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };

        $.ajax(settings).done(function (response) {
            if (response.feels_like != undefined) {
                console.log(response);
                $("#disp").html(response.feels_like)
                $("#city").html($("#cityname").val());
                $(".visually-hidden").attr("class","")
                console.log(response.feels_like);
            }
            else {
                $(".visually-hidden").html("Pls enter valid place name")
                $(".visually-hidden").attr("class", "")
            }
        });
    });
});
