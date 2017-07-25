(function($){
  "use strict";

  $(function(){




    $('.jcarousel').jcarousel();

    console.log($);

    // var next = function(){
    //   jcarouselControl({
    //     target: '+=1',
    //   })
    // };
    //
    // $('.jcarousel-next').on('click', next);

    $('.jcarousel-control-prev')
     .on('jcarouselcontrol:active', function() {
         $(this).removeClass('inactive');
     })
     .on('jcarouselcontrol:inactive', function() {
         $(this).addClass('inactive');
     })
     .jcarouselControl({
         target: '-=1'
     });



     $('.jcarousel-control-next')
      .on('jcarouselcontrol:active', function() {
          $(this).removeClass('inactive');
      })
      .on('jcarouselcontrol:inactive', function() {
          $(this).addClass('inactive');
      })
      .jcarouselControl({
          target: '+=1'
      });






  });
})(jQuery);
