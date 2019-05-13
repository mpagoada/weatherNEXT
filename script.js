// JavaScript File
/*global $*/

/* $(".enter").click(function(){
    $.ajax({
        url: "https://samples.openweathermap.org/data/2.5/forecast?zip=94040&appid=b6907d289e10d714a6e88b30761fae22",
        method: "GET",
        success: function(response) {
            $("#id").html("<img src='" + response.list.weather.description + "'/>");
        }
    });
}); */

var zipcodeInput = $("input").val();

$(".enter").click(function(){
    $("#zipcode").html(zipcodeInput);
});