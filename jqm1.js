
$(document).on("load", function(){

    $('#time').timepicker(
        {
            timeFormat: 'h:mm p',
            minTime: '06:00',
            maxHour: '11:00',
            interval: 30,
            scrollbar: true 
        });

    $('#time').on('changeTime', function(){
        $('#onselectTarget1').text($(this).val());
    });


    
    $('#time').on('changeTime', function(){
        $('#onselectTarget2').text($(this).val());
    });


