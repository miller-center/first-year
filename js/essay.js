$(document).ready(function() {

  //
  // Give recent visitors a break from call-to-action modals
  //

  try {
    // when page loads, add time marker locally

    var d = new Date(), number_of_days = 1;
    d.setTime(d.getTime() + (number_of_days*24*60*60*1000)); // one week hence
    var stale = d.toUTCString(); 

    //
    // setting marker for new page visitor
    //
    FirstYear.useLocalStorage = true; // set true to prefer over cookies
    FirstYear.isFreshVisitor  = true; // assume as a default  

    //
    // reading marker to determine if visit is first in 7 days
    //
    
    if(typeof(Storage) !== "undefined" && FirstYear.useLocalStorage) {
      if ( localStorage.getItem('CTA_suppress') ) {
        if ( Date.now() < Date.parse(localStorage.getItem('CTA_suppress')) ) {
          FirstYear.isFreshVisitor = false;
          FirstYear.visitorGracePeriodEnds = localStorage.getItem('CTA_suppress');
          console.log("located localStorage grace period ending: " + FirstYear.visitorGracePeriodEnds);
        } else {
          // reset the clock
          FirstYear.isFreshVisitor = true;
          localStorage.remoteItem('CTA_suppress');
        }
      }
    } else {
      if ( Cookies.get('FirstYear') !== undefined ) {
        FirstYear.isFreshVisitor = false;
        storedDate = JSON.parse(Cookies.get('FirstYear'));
        if ( storedDate.CTA_suppress ) {
          FirstYear.visitorGracePeriodEnds = storedDate.CTA_suppress; 
          console.log("located cookie recording grace period ending: " + FirstYear.visitorGracePeriodEnds);     
        }
      }
    }

    // setting new data if this is a new visit

    if( FirstYear.isFreshVisitor ) {

      if(typeof(Storage) !== "undefined" && FirstYear.useLocalStorage) {
        // Code for localStorage/sessionStorage.
        if ( ! localStorage.getItem('CTA_suppress') ) {
          localStorage.setItem('CTA_suppress', stale); 
          console.log("setting " + number_of_days + " day grace period for popups in localStorage");
        }
      } else {
        // Sorry! No Web Storage support..
        // document.cookie = 'FirstYear' + "=" +'FY_PageVisitDate' + "; " + expires;
        if ( ! Cookies.get('FirstYear') ) {
          Cookies.set('FirstYear', {'CTA_suppress': stale }, {expires: number_of_days});
          console.log("setting " + number_of_days + " day grace period for popups with FirstYear cookie");
        }
      }
    } // end if FirstYear.isFreshVisitor

  } catch(err) {
    console.log(err);
  }

  // set email signup call-to-action to reveal at scroll point
  var hasPassedRevealPoint = 0;

  if (FirstYear.isFreshVisitor) {
    $(window).scroll(function() {
      var wScroll = Number( $(this).scrollTop() );

      // set the point at which to make the call to action
      // can be a percentage of window.height
      var revealPoint = Number($(document).height() / 2) ;
      // or a fixed amount (px), which is mobile-friendly
      revealPoint = Number(3000); // howard wants 3000px



      var ctaModal = $('#emailModal');

      // call the reveal() event
      try {
        if (wScroll > revealPoint && hasPassedRevealPoint === 0) {
          hasPassedRevealPoint = 1;

          // check for local storage, search for cookie if not found
          if(typeof(Storage) !== "undefined") {
              // Code for localStorage/sessionStorage.
          } else {
              // Sorry! No Web Storage support..look for a cookie instead
          }
          ctaModal.foundation('reveal', 'open');
        }
      } catch(err) {
        console.log(err);
      }
    });
  } // end if isFreshVisitor
  else {
    console.log('no popups until after:' + FirstYear.visitorGracePeriodEnds);
  }

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