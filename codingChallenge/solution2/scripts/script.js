$(document).ready(function(){
    // $("#image").hover(function(){
    //     var img = $("#image")
    //   img.fadeOut( 100 );
    // });
    var img = $("#image")


    $("#image").hover( function(event) {
        debugger;
        if(event.type == "mouseenter") {
             img.fadeOut( 500 );

        }
        else if (event.type == "mouseleave") {
            img.fadeIn( 500 );

        }
      });

  
  });

