$(document).ready(function() {

  // animations for changing text in Hero section

  function swapHeroImages(event) {
    event.preventDefault();
    /* Act on the event */
    var issue_id = Number($('a.issue-link', this).data('id'));
    var supertitle_text = $('a.issue-link', this).data('supertitle');
    var title_text = $('a.issue-link', this).data('title');
    var subtitle_text = $('a.issue-link', this).data('subtitle');
    var video_text = $('a.issue-link', this).data('videotitle');
    var issue_href = $('a.issue-link', this).attr('href');
    var background_image_url = $('a.issue-link', this).data('background-url');

    var currentActive = $('.tab-entry.is-active');
    currentActive.one('click tap', function (event) {
      swapHeroImages.call(this,event);
    });

    // move the is-active pointer to target of event
    currentActive.removeClass('is-active');
    $(this).addClass('is-active');

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
      console.log(background_image_url);

      // change link in 'Explore the Essays' button
      if (issue_href !== undefined) {
        console.log('changing explore anchor to ' + issue_href);
        $('#explore-anchor').attr('href',issue_href);        
      }

      // move hero contents into div and reveal
      var hero_contents = $(this).parentsUntil($('#hero-row'));
      $('#hero-row .hero:first').css('background-image', 'url('+background_image_url+')');

      // bind this behavior to the div that is about to lose '.is-active'
      // $('.tab-entry.is-active').on('click', function(event) {
      //   swapHeroImages.call(this,event);
      // });

  } // end swapHeroImages


  $('.tab-entry.released').not('.is-active').one('click tap', function (event) {
      swapHeroImages.call(this,event);
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
