$('.slider').bind('activateTicker', function activateTicker( someIndex ) { // For every slider
    var $this = $(this), // Current slider
        $group = $this.find('.slide-group'), // Get the slide-group (container)
        $slides = $this.find('.slide'), // Create jQuery object to hold all slides
        buttonArray = [], // Create array to hold navigation buttons
        currentIndex = someIndex || 0, // Hold index number of the current slide
        timeout, // Sets gap between auto-sliding
        interval = 4000;  // Milliseconds timer will wait

    function move(newIndex) { // Creates the slide from old to new one

        successor = newIndex < ($slides.length - 1) ? newIndex + 1 : 0
        
        $slides.eq(newIndex).removeClass('current');
        $slides.eq(newIndex).animate({ opacity: 0 }, 400, "linear", function() {
            $slides.eq(successor).animate({ opacity: 1   }, 400, "linear");
            $slides.eq(successor).addClass('current');
        });
        advance(); // When slide moves, call advance() again
    }

    function advance(lastTime) { // Used to set 
        clearTimeout(timeout); // Clear previous timeout
        FirstYear.timeout = null;

        timeout = setTimeout(function() { // Set new timer
            if (currentIndex < ($slides.length - 1)) { // If slide < total slides
                move(currentIndex++); // Move to next slide and increment counter
            } else { // Otherwise
                move(currentIndex); // Process the last slide
                currentIndex = 0; // reset counter
            }
        }, interval); 
        FirstYear.timeout = timeout;

    }

    advance(); // Script is set up, advance() to move it


});

$(document).ready(function() {
    $('.slider').trigger('activateTicker');

    $('#stopSlide').mouseenter(function() {
        console.log('pausing ticker (timeout = ' + FirstYear.timeout + ')');
        clearTimeout(FirstYear.timeout);
        FirstYear.timeout = null;
    });


    $('#stopSlide').mouseleave(function() {
        console.log('resuming ticker...');
        if (FirstYear.timeout) clearTimeout(FirstYear.timeout);

        currentSlide = $('.slider li.slide').filter('.current');
        index = currentSlide.index('.slider li.slide');
        $('.slider').trigger('activateTicker', index);
    });

    // start/stop for touch devices
    $(document).on("touchstart", function (e) {
        var container = $('#stopSlide');
        console.log('touchstart detected');

        // if the target of the click isn't the container...
        if ( container.is(e.target) && container.has(e.target).length === 0) {
            // stop the ticker
            console.log('touchstart detected in slider');
            console.log('pausing ticker (timeout = ' + FirstYear.timeout + ')');
            clearTimeout(FirstYear.timeout);
            FirstYear.timeout = null;

        } else {
            console.log('touchstart detected outside');
            // check to see if ticker's stoped, restart if it is
            console.log('FirstYear.timeout='+ FirstYear.timeout);
            if (FirstYear.timeout === null) {
                console.log('restarting ticker');
                currentSlide = $('.slider li.slide').filter('.current');
                index = currentSlide.index('.slider li.slide');
                $('.slider').trigger('activateTicker', index);
            }

        }

    });

});