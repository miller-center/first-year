/* functions for news ticker aka slider */

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
        


        $slides.eq(newIndex).animate({ opacity: 0 }, 400, "linear", function() {
            $slides.eq(successor).css("display", "block");
            $slides.eq(newIndex).removeClass('current');
            $slides.eq(successor).addClass('current');
            $slides.eq(successor).animate({ opacity: 1   }, 400, "linear");
        });
        advance(); // When slide moves, call advance() again
    }

    function advance() { // Used to set 
        clearTimeout(timeout); // Clear previous timeout
        FirstYear.timeout = null;

        // ensure those not current are not displaying
        // $slides.not('.current').css("display", "none");


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