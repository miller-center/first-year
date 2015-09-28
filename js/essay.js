$(document).ready(function() {

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