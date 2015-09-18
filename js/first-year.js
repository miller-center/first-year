$(document).foundation();

$(document).ready(function() {
  // re-initialize Foundation after responsive image loading
  $(document).foundation('interchange', 'reflow');



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
    if(Foundation.utils.is_medium_up()) {
      setTimeout(changeNewsItem, timeout);
    } else {
      console.log('news feed disabled for small device');
    }
  }
  catch(err) {
    console.log(err);
  }

});
