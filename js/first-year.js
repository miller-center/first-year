$(document).foundation({
  topbar : {
    custom_back_text: false,
    is_hover: true,
    mobile_show_parent_link: false
  }
});

$(document).ready(function() {
  // re-initialize Foundation after responsive image loading
  $(document).foundation('interchange', 'reflow');



  // give page a nudge if loading anywhere other than top
  var currentPosition = $(window).scrollTop();
  if (currentPosition > 0) {
    $(window).scrollTop(currentPosition + 1 );
  }

  // when clicking outside of navigation header, collapse menus
  $(document).mouseup(function (e){
      var container = $(".top-bar");
      if (!container.is(e.target) // if the target of the click isn't the container...
          && container.has(e.target).length === 0){ // ... nor a descendant of the container
          container.removeClass('expanded');
      }
  });
  // same for tap (mobile)
  $(document).on({'touchend': function (e){
      var container = $(".top-bar");
      if (!container.is(e.target) // if the target of the click isn't the container...
          && container.has(e.target).length === 0){ // ... nor a descendant of the container
          container.removeClass('expanded');
      }
    } });

  //
  // Side (Sharing) Bar Animation
  //

  $(window).scroll(function() {
    var wScroll = Number( $(this).scrollTop() );

    // reveal point for social sharing bar
    var sbReveal  = Number( $('.hero').height() );
    var sbConceal = $(document).height() - $('#bodyFooter').height() - ( $(window).height() / 1.05 );

    // slide in social sharing bar from off canvas
    if (wScroll > sbReveal) {
      $('#share-bar').addClass('shareBarReveal');
      $('#share-bar').removeClass('shareBarExit');      
    } else {
      $('#share-bar').addClass('shareBarExit');
      $('#share-bar').removeClass('shareBarReveal');
    }

    // gracefully exit at footer
    if (wScroll > sbConceal || wScroll < sbReveal) {
      $('#share-bar').addClass('shareBarExit');
      $('#share-bar').removeClass('shareBarReveal');
    } else {
      $('#share-bar').addClass('shareBarReveal');
      $('#share-bar').removeClass('shareBarExit');      
    }

  });


  //
  // News Ticker Animation
  //

  // rotate through the list of 'The Latest' headlines
  function changeNewsItem() {
    fadeTime = 300;
    listItems.eq(current++).fadeOut(fadeTime, function() {
      if (current === length) {
        current = 0;
      }
      listItems.eq(current).fadeIn(fadeTime);

    });
    setTimeout(changeNewsItem, timeout);
  }

  function rotateNewsItem() {
    fadeTime = 300;
    listItems.eq(current++).fadeOut(fadeTime, function() {
      if (current === length) {
        current = 0;
      }
      listItems.eq(current).fadeIn(fadeTime);      
    });
  }



  // if window is large enough, active newsfeed
  try {
    if(Foundation.utils.is_medium_up()) {
      var listItems = $('#the-latest ul li:not(.label)');
      length = listItems.length;
      var current = 0;
      timeout = 5000;
      // setTimeout(changeNewsItem, timeout);
      setInterval(rotateNewsItem, timeout);
    } else {
      console.log('news feed disabled for small device');
    }
  }
  catch(err) {
    console.log(err);
  }

});
