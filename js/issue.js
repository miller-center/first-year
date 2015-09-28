$(document).ready(function() {

  // initialize slick carousel
  // with three break points, we configure for
  // x-large, large, medium and small viewports
  var carousel = jQuery('#hero-slider').slick({
    dots: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 2,
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