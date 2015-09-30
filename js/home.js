$(document).ready(function() {

  //
  // News Ticker Animation
  //

  var newsListCounter = 0;
  FirstYear.animateNews = function rotateNewsItem() {
    var listItems = jQuery('#the-latest ul li:not(.label)');
    var fadeTime  = 300;
    listItems.eq(newsListCounter++).fadeOut(fadeTime, function() {
      if (newsListCounter === listItems.length) {
        newsListCounter = 0;
      }
      listItems.eq(newsListCounter).fadeIn(fadeTime);      
    });
  }
  function newSetInterval(callback, duration, callbackArguments) {
    callback.apply(this, callbackArguments);
    var args = arguments,
        scope = this;

    setTimeout(function() {
        newSetInterval.apply(scope, args);
    }, duration);
  }

  var listItems = $("#the-latest ul > li:not(.label)");
  listItems.not(":eq(0)").hide();

  var startSlideShow = function() { 
        $("#the-latest ul > li:not(.label):eq(0)")
            .fadeOut(300)
            .next()
            .fadeIn(300)
            .end()
            .appendTo('#the-latest ul');
        }, interval = setInterval(startSlideShow,  2000);

  $('#stopSlide').mouseover(function() {
      clearInterval(interval);
  });

  $('#stopSlide').mouseout(function() {
      interval = setInterval(startSlideShow, 2000);
  });
  // if window is large enough do the following:
  //   1. activate newsfeed rotation
  //   2. reveal/conceal sharing sidebar
  try {
    if(Foundation.utils.is_medium_up()) {
      delay = 5000;
     // FirstYear.newsTickerId = newSetInterval(FirstYear.animateNews, delay);

      FirstYear.sharingBar();

    } else {
      console.log('some animations disabled for small device');
    }
  }
  catch(err) {
    console.log(err);
  }

});
