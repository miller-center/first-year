$(document).ready(function() {

  // animations for changing text in Hero section
  $('.issue-link').click(function(event) {
    /* Act on the event */
    var issue_id = Number($(this).data('id'));
    var supertitle_text = $(this).data('supertitle');
    var title_text = $(this).data('title');
    var subtitle_text = $(this).data('subtitle');
    var video_text = $(this).data('videotitle');

    if (supertitle_text && title_text) {
      $('#hero-title h2.supertitle:eq(0)').fadeOut(400, function(){
        $(this).text(supertitle_text);
        $(this).fadeIn(400);
      });

      $('#hero-title h1.main-title:eq(0)').fadeOut(400, function(){
        $(this).text(title_text);
        $(this).fadeIn(400);
      });

      $('#hero-title h3.subtitle:eq(0)').fadeOut(400, function(){
        $(this).text(subtitle_text);
        $(this).fadeIn(400);
      });

      $('#videoRevealAnchor').fadeOut(400, function(){
        $(this).text(video_text);
        $(this).fadeIn(400);
      });

    } // end if
  });

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
