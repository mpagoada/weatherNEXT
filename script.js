// JavaScript File
/*global $*/

$(".enter").click(function(){
   var zipcodeInput = $('input').val();
   $('#zipcode').html(zipcodeInput);
   var zipcodeUrl = 'https://samples.openweathermap.org/data/2.5/forecast?zip=' + zipcodeInput + '&appid=b6907d289e10d714a6e88b30761fae22';
  
   
   
    $.ajax({
        url: zipcodeUrl,
        method: "GET",
        success: function(response) {
            var minTemp = response.data.list[0].temp_min;
            var maxTemp = response.data[0].temp_max;
            var skyLook = response.data[1].description;
            
            $('#mintemp').html('minTemp');
            $('#maxtemp').html('maxTemp');
            $('#skylook').html('skyLook');
        }
    });
});