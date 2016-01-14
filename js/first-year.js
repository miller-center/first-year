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
  $("body").on("click", "a[href^='/about#']", scroll_if_anchor); // menu has these

  // Disable linking behavior on topbar Menu label
  $("#header-menu-icon a:first").click(function(e) {
    e.preventDefault();
  });


  // Sharing Bar Print Action
  $('a').has('.print-button').on("click tap", function(e) {
    // avoid this behavior on essay pages
    var name = window.location.pathname;
    // skip Issue 1 names
    var name_list = ["crucible","what-time","promise-and-peril","experience-of-others","avoiding-failure","letter-to-the-new"];
    if ( new RegExp(name_list.join("|")).test(name) ) {
      FirstYear.printHeroChange();
      window.print();
      return false;
    }
    else if (window.location.pathname.indexOf("essay") === -1 ) {
      FirstYear.printHeroChange();
      window.print();
      return false;
    }
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
  // Rewriting Print Hero Images Styling
  //
  FirstYear.printHeroChange = function printHeroChange() {
    try {
      hero_image = $('.hero').css('background-image')
      for_print_img = $('.hero .print-only img.print-hero-image');
      if (for_print_img != undefined) {
        console.log('rewriting $for_print_img content to ' + hero_image);
        for_print_img.css('content', hero_image);
      }
    } catch(err) {
      console.log(err);
      return false;
    }
  }

  //
  // Side (Sharing) Bar Animation
  //
  FirstYear.sharingBar = function animateSharingBar(showClass, hideClass, revealPoint) {

    showClass = showClass || "shareBarReveal"; 
    hideClass = hideClass || "shareBarExit";

    $(window).scroll(function() {
      var wScroll = Number( $(this).scrollTop() );

      // reveal point for social sharing bar
      var defaultReveal = Number( $('.hero').height() * 0.7 ) || 210;
      var sbReveal  = revealPoint || defaultReveal;
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



  // Adjust Modal Vertical Layout (center modal in viewport)
  FirstYear.adjustModal = function adjustModalVerticalLayout(el) { 
    myModal = el;
    if (myModal.length > 0) {
      viewport_h = $(window).height();
      position   = ( viewport_h - myModal.height() ) / 2;
      (position < 0) ? position  = 0: position = position;
  
      myModal.on('opened.fndtn.reveal', function() {
        console.log('setting modal position to top: ' + position);
        myModal.css('top', position + 'px');
      });

      myModal.on('close.fndtn.reveal', function() {
        myModal.css('top', '');
        console.log('clearing modal position: ' + myModal.css('top') + '.');
      });

      $(document).foundation('reveal', 'reflow');
    }
  } 

  // turn on auto play when reveal anchor clicked
  // using Foundation's reveal callbacks
  $(document).on('open.fndtn.reveal', '[data-reveal]', function () {
    var modal = $(this);
    if (modal.is('#videoModal')) {
      var iframe = modal.find('iframe');
      var url = iframe.attr('src');
      url = url.replace('autoplay=0', 'autoplay=1');
      iframe.attr('src', url);
    }
  });

  $(document).on('opened.fndtn.reveal', '[data-reveal]', function () {
    var modal = $(this);
    if (modal.is('#videoModal')) {
      FirstYear.videoModalOpen = true;
    }
  });

  $(document).on('close.fndtn.reveal', '[data-reveal]', function () {
    var modal = $(this);
    if (modal.is('#videoModal')) {
      var iframe = modal.find('iframe');
      var url = iframe.attr('src');
      url = url.replace('autoplay=1', 'autoplay=0');
      iframe.attr('src', url);      
    }
  });

  $(document).on('closed.fndtn.reveal', '[data-reveal]', function () {
    var modal = $(this);
    if (modal.is('#videoModal')) {
      FirstYear.videoModalOpen = false;
    }
  });

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

    // If target not at beginning, trim string
    href = href.replace(/^[^#]+/,"");

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


  // this function re-writes iFrames to ensure they are not too large for small viewports
  // el is parent element of iframe 
  FirstYear.rewriteIframe = function rewriteIframe(e, width) {
    var iframe = e.innerHTML;
    var newiframe = "";
    if (iframe !== undefined && iframe.indexOf('width') != -1) {
      newiframe = iframe.replace(/width="\d+"/, 'width="'+ width +'"');
      $(e).html(newiframe);
      console.log('iframe replaced with: ' + newiframe);
    }
  }

  // position VideoModal centered vertically in viewport
  try {

    var myModal = $('#videoModal');

    // dismiss modal on touch outside box
    $(document).on({'touchend': function (e){
      var container = $("#videoModal.open");
      if (!container.is(e.target) // if the target of the click isn't the container...
          && container.has(e.target).length === 0) { // ... nor a descendant of the container
          container.foundation('reveal', 'close');
        }
      } 
    });

    if (myModal.length > 0 && Foundation.utils.is_medium_up() ) { 
      FirstYear.adjustModal(myModal);
    } 
  } catch(err) {
    console.log("There was a problem re-positioning the video modal: " + err);
  }

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

  // if small device, rewrite iframes to ensure decent width
  try {
    if(Foundation.utils.is_small_only()) {
      $('figure').each(function() {
        if ( $(this).has('iframe') ) {
          FirstYear.rewriteIframe(this, '325');
        }
      });
      $('div#emailModal').each(function() {
        if ( $(this).has('iframe') ) {
          FirstYear.rewriteIframe(this, '325');
        }
      });
         

    }
    else {
      console.log('unable to rewrite iframe ');
    }
  }
  catch(err) {
    console.log(err);
  }

});


