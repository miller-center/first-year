$(document).ready(function() {

  //
  // News Ticker Animation
  //

  var newsListCounter = 0;

  function hideSiblings(list, index) {
    list.not(":eq("+index+")").hide();
  }

  var listItems = $("#the-latest ul > li:not(.label)");
  listItems.not(":eq(0)").hide();
  item = 0;

  var startSlideShow = function() {
    listItems.eq(item++).each(function (e) {

        me = listItems.index($(this));
        hideSiblings(listItems, me);

        $(this).fadeOut('300', function() {
        if (item === 3) {
          item = 0;
        }
        listItems.not(":eq("+item+")").hide();
        listItems.eq(item).fadeIn('400');
      })
    });
  };


  // if window is large enough do the following:
  //   1. activate newsfeed rotation
  //   2. reveal/conceal sharing sidebar
  try {
    if(Foundation.utils.is_medium_up()) {
      delay = 5000;

      var interval = setInterval(startSlideShow,  delay);

      $('#stopSlide').mouseover(function() {
          clearInterval(interval);
      });

      $('#stopSlide').mouseout(function() {
          interval = setInterval(startSlideShow, delay);
      });

      FirstYear.sharingBar();

    } else {
      console.log('some animations disabled for small device');
    }
  }
  catch(err) {
    console.log(err);
  }

});
