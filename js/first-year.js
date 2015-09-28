$(document).foundation({
  topbar : {
    custom_back_text: false,
    is_hover: false,
    mobile_show_parent_link: false
  }
});

window.FirstYear = {}; // project globals

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
    } 
  });

  //
  // Side (Sharing) Bar Animation
  //
  function animateSharingBar(showClass, hideClass, revealPoint) {

    showClass = showClass || "shareBarReveal"; 
    hideClass = hideClass || "shareBarExit";

    $(window).scroll(function() {
      var wScroll = Number( $(this).scrollTop() );

      // reveal point for social sharing bar
      var sbReveal  = revealPoint || Number( $('.hero').height() );
      var sbConceal = $(document).height() - $('#bodyFooter').height() - ( $(window).height() / 1.05 );

      // slide in social sharing bar from off canvas
      if (wScroll > sbReveal) {
        $('#share-bar').addClass(showClass);
        $('#share-bar').removeClass(hideClass);      
      } else {
        $('#share-bar').addClass(hideClass);
        $('#share-bar').removeClass(showClass);
      }

      // gracefully exit at footer
      if (wScroll > sbConceal || wScroll < sbReveal) {
        $('#share-bar').addClass(hideClass);
        $('#share-bar').removeClass(showClass);
      } else {
        $('#share-bar').addClass(showClass);
        $('#share-bar').removeClass(hideClass);      
      }

    });
    return true;

  }

  // if window is large enough do the following:
  //   1. activate newsfeed rotation
  //   2. reveal/conceal sharing sidebar

  try {
    if(Foundation.utils.is_medium_up()) {
      animateSharingBar();
    } else {
      console.log('some animations disabled for small device');
    }
  }
  catch(err) {
    console.log(err);
  }

});


