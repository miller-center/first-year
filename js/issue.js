$(document).ready(function() {

  // turn on auto play when reveal anchor clicked
  // using Foundation's reveal callbacks
  $(document).on('open.fndtn.reveal', '[data-reveal]', function () {
    var modal = $(this);
    var iframe = modal.find('iframe');
    var url = iframe.attr('src');
    url = url.replace('autoplay=0', 'autoplay=1');
    iframe.attr('src', url);
  });

  // $(document).on('opened.fndtn.reveal', '[data-reveal]', function () {
  //   var modal = $(this);
  // });

  $(document).on('close.fndtn.reveal', '[data-reveal]', function () {
    var modal = $(this);
    var iframe = modal.find('iframe');
    var url = iframe.attr('src');
    url = url.replace('autoplay=1', 'autoplay=0');
    iframe.attr('src', url);
  });

  // $(document).on('closed.fndtn.reveal', '[data-reveal]', function () {
  //   var modal = $(this);
  // });

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