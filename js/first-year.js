$(document).foundation();
window.FirstYear = {}; // project globals

$(document).ready(function() {
  // re-initialize Foundation after responsive image loading
  $(document).foundation('interchange', 'reflow');

  // test for screen size, for responsive JS execution
  FirstYear.viewportSmall = $(window).isSmallDevice();
  FirstYear.viewportMedium = $(window).isMediumDevice();
  FirstYear.viewportLarge = $(window).isLargeDevice();

  // reset values upon change in window size
  $(window).resize(function () {
    if (FirstYear.viewportSmall !== $(window).isSmallDevice()) {
      FirstYear.viewportSmall = $(window).isSmallDevice();  
      console.log('re-setting viewportSmall');
    }
    if (FirstYear.viewportMedium !== $(window).isMediumDevice()) {
      FirstYear.viewportMedium = $(window).isMediumDevice();  
      console.log('re-setting viewportMedium');
    }
    if (FirstYear.viewportLarge !== $(window).isLargeDevice()) {
      FirstYear.viewportLarge = $(window).isLargeDevice();  
      console.log('re-setting viewportLarge');
    }
  });

  // give page a nudge if loading anywhere other than top
  var currentPosition = $(window).scrollTop();
  if (currentPosition > 0) {
    $(window).scrollTop(currentPosition + 1 );
  }

  // navigation header expand/contract
  // $('#navigation-container').addClass('shrinkMenu');

  $(window).scroll(function() {

    // var threshold = $('#hero-container').height() * 0.01;
    var threshold = $('#navigation-container').height();
    // if ($(this).scrollTop() <= threshold) { 
    //   $('#navigation-container').addClass('shrinkMenu');
    //   $('#navigation-container').removeClass('expandMenu');
    // }
    // else {
    //   // $('#navigation-container').show(); 
    //   $('#navigation-container').addClass('expandMenu');
    //   $('#navigation-container').removeClass('shrinkMenu');
    // }

    // var belowHero = $('section.hero').scrollTop() + $('section.hero').height() - $('#navigation-container').height();
    if ($(this).scrollTop() >=  threshold ) {
      $('#navigation-container').addClass('belowHero');
    } else {
      $('#navigation-container').removeClass('belowHero');
    }

  });

  //
  // News Ticker Animation
  //

  // rotate through the list of 'The Latest' headlines
  var listItems = $('#the-latest ul li:not(.label)');
      length = listItems.length;
      current = 0;
      timeout = 5000;

  function changeNewsItem() {
    listItems.eq(current++).fadeOut(300, function() {
      if (current === length) {
        current = 0;
      }
      listItems.eq(current).fadeIn(300);

    });
    setTimeout(changeNewsItem, timeout);
  }


  // if window is large enough, active newsfeed
  try {
    var isSmallDevice = $(window).isSmallDevice();
    if(! isSmallDevice) {
      setTimeout(changeNewsItem, timeout);
    } else {
      console.log('news feed disabled for small device');
    }
  }
  catch(err) {
    console.log(err);
  }

});

//
// utilities
//

// sniff window and detect flag indicating small device
jQuery.fn.isSmallDevice = function() {
  var floatValue = $('.responsiveFlag').css("float");
  if (floatValue !== undefined) {
    if (floatValue === 'none') {
      return true;
    } else {
      return false;
    }
  }
}

jQuery.fn.isMediumDevice = function() {
  var floatValue = $('.responsiveFlag').css("float");
  if (floatValue !== undefined) {
    if (floatValue === 'left') {
      return true;
    } else {
      return false;
    }
  }
}

jQuery.fn.isLargeDevice = function() {
  var floatValue = $('.responsiveFlag').css("float");
  if (floatValue !== undefined) {
    if (floatValue === 'right') {
      return true;
    } else {
      return false;
    }
  }
}
