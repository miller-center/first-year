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

    var threshold = $('#hero-container').height() * 0.01;
    // if ($(this).scrollTop() <= threshold) { 
    //   $('#navigation-container').addClass('shrinkMenu');
    //   $('#navigation-container').removeClass('expandMenu');
    // }
    // else {
    //   // $('#navigation-container').show(); 
    //   $('#navigation-container').addClass('expandMenu');
    //   $('#navigation-container').removeClass('shrinkMenu');
    // }

    var belowHero = $('section.hero').scrollTop() + $('section.hero').height() - $('#navigation-container').height();
    if ($(this).scrollTop() >=  belowHero ) {
      $('#navigation-container').addClass('belowHero');
    } else {
      $('#navigation-container').removeClass('belowHero');
    }

  });

});