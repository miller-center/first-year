$(document).foundation({
  topbar : {
    custom_back_text: false,
    is_hover: false,
    mobile_show_parent_link: false
  }
});

window.FirstYear = {}; // project globals

//
// do the following when page loads...
//
$(document).ready(function() {

  // re-initialize Foundation after responsive image loading
  $(document).foundation('interchange', 'reflow');

  // Intercept all anchor clicks
  $("body").on("click", "a[href^='#']", scroll_if_anchor);

  // Disable linking behavior on topbar Menu label
  $("#header-menu-icon a:first").click(function(e) {
    e.preventDefault();
  });

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
  FirstYear.sharingBar = function animateSharingBar(showClass, hideClass, revealPoint) {

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
  }

  // function rotateNewsItem() {
  //   fadeTime = 300;
  //   listItems.eq(current++).fadeOut(fadeTime, function() {
  //     if (current === length) {
  //       current = 0;
  //     }
  //     listItems.eq(current).fadeIn(fadeTime);      
  //   });
  // }


  // correct linking targets to accommodate topbar nav strip
  function scroll_if_anchor(href) {
    href = typeof(href) == "string" ? href : $(this).attr("href")


    // If href missing, ignore
    if(!href) return;

    // Amount of padding to add (in pixels)
    var topbarHeight = $('nav').height();
    var fromTop =  topbarHeight + 5;

    // If our Href points to a valid, non-empty anchor, and is on the same page
    var $target = $(href);

    // Redirect scroll point to desired position
    if($target.length) {
      $('html body').animate({ scrollTop: $target.offset().top - fromTop });
      if(history && "pushstate" in history) {
        history.pushState({}, document.title, window.location.pathname + href);
        return false;
      }
    }

  } // end function scroll_if_anchor

  // Check to see if requested href contained anchor
  // (this is intentionally called BEFORE $(document).ready() )
  scroll_if_anchor(window.location.hash);


  // if window is large enough do the following:
  //   1. describe your function here

  try {
    if(Foundation.utils.is_medium_up()) {

    } else {
      // console.log('some animations disabled for small device');
    }
  }
  catch(err) {
    console.log(err);
  }

});


