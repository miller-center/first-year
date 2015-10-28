$(document).ready(function() {



  // email signup call to action trigger

  // set email call-to-action to reveal at scroll point
  var hasPassedRevealPoint = 0;
  $(window).scroll(function() {
    var wScroll = Number( $(this).scrollTop() );

    // set the point at which to make the call to action
    // can be a percentage of window.height
    var revealPoint = Number($(document).height() / 2) ;
    // or a fixed amount (px), which is mobile-friendly
    revealPoint = Number(1000);

    var ctaModal = $('#emailModal');

    // call the reveal() event
    try {
      if (wScroll > revealPoint && hasPassedRevealPoint === 0) {
        // do nothing if video modal is open
        if (FirstYear.videoModalOpen == true) {
          console.log('disabled cta because video modal is open');
        } else  {
          hasPassedRevealPoint = 1;
          ctaModal.foundation('reveal', 'open');
        }
      }
    } catch(err) {
      console.log(err);
    }
  });

  // initialize slick carousel
  // with three break points, we configure for
  // x-large, large, medium and small viewports
  var carousel = jQuery('#hero-slider').slick({
    dots: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: false,
    responsive: [ 
      {
        breakpoint: 1024, // active if less than
        settings: {
          dots: true,
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: false
        }
      },
      {
        breakpoint: 640,
        settings: {
          dots: true,
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: false       
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: false       
        }      
      }
    ]
  }); // end Slick carousel

  // if window is large enough do the following:
  //   1. reveal/conceal sharing sidebar

  try {
    if(Foundation.utils.is_medium_up()) {
      FirstYear.sharingBar();
    } else {
      console.log('some animations disabled for small device');
    }
  }
  catch(err) {
    console.log(err);
  }


});