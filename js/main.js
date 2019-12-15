$( document ).ready(function() {
    console.log( "ready!" );

    $( "#button" ).click(function() {
        $( "#button" ).addClass( "red" );
    });

    
$('#remove btn').click(function () {
    $('#remove').removeClass('red');
    });

   // setTimeout(function(){
    //    $( "#title" ).addClass( "red" );
     // }, 2000);
})
