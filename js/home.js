$(document).ready(function() {

  // if window is large enough do the following:
  //   1. activate newsfeed rotation
  //   2. reveal/conceal sharing sidebar
  try {
    delay = 5000;
    if (Foundation.utils.is_large_up()) {
      FirstYear.sharingBar();

      if(Foundation.utils.is_medium_up()) {

      //
      // News Ticker Animation
      //

      // init  
      $('.slider').trigger('activateTicker', 2);

      // pause
      $('#stopSlide').mouseenter(function() {
          console.log('pausing ticker (timeout = ' + FirstYear.timeout + ')');
          clearTimeout(FirstYear.timeout);
          FirstYear.timeout = null;
      });

      // resume
      $('#stopSlide').mouseleave(function() {
          console.log('resuming ticker...');
          if (FirstYear.timeout) clearTimeout(FirstYear.timeout);

          currentSlide = $('.slider li.slide').filter('.current');
          index = currentSlide.index('.slider li.slide');
          $('.slider').trigger('activateTicker', index);
      });

      // start/stop for touch devices
      $(document).on("touchstart", function (e) {

          // check to see if ticker's stoped, restart if it is
          console.log('FirstYear.timeout='+ FirstYear.timeout);
          if (FirstYear.timeout === null) {
              console.log('restarting ticker');
              $('#the-latest').removeClass('active');
              currentSlide = $('.slider li.slide').filter('.current');
              index = currentSlide.index('.slider li.slide');
              $('.slider').trigger('activateTicker', index);
          } else {
              console.log('pausing ticker (timeout = ' + FirstYear.timeout + ')');
              $('#the-latest').addClass('active');
              clearTimeout(FirstYear.timeout);
              FirstYear.timeout = null;
          }
      });




      } else {
        console.log('news feed animations disabled for small device');
      }
    } else {
      console.log('sharing sidebar disabled for medium/small device');
    }

  }
  catch(err) {
    console.log(err);
  }

});
