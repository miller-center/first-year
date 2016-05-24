$(document).ready(function() {

  // animations for changing text in Hero section

// carousel for navigation strip
var carousel = jQuery('#nav-tabs').slick({
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: false,
    responsive: [ 
      {
        breakpoint: 1024, // active if less than
        settings: {
          dots: false,
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: false
        }
      },
      {
        breakpoint: 640,
        settings: {
          dots: false,
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: false       
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: false       
        }      
      }
    ]
  }); // end Slick carousel


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
