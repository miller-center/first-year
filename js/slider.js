$('.slider').each(function() { // For every slider
    var $this = $(this), // Current slider
        $group = $this.find('.slide-group'), // Get the slide-group (container)
        $slides = $this.find('.slide'), // Create jQuery object to hold all slides
        buttonArray = [], // Create array to hold navigation buttons
        currentIndex = 0, // Hold index number of the current slide
        timeout; // Sets gap between auto-sliding

    function move(newIndex) { // Creates the slide from old to new one
        var animateLeft, slideLeft; // Declare variables

        advance(); // When slide moves, call advance() again

        // If it is the current slide / animating do nothing
        if ($group.is(':animated') || currentIndex === newIndex) {
            return;
        }

        buttonArray[currentIndex].removeClass('active'); // Remove class from item
        buttonArray[newIndex].addClass('active'); // Add class to new item

        invisible = 0;
        visible = 1;

        // if (newIndex > currentIndex) { // If new item > current
        //     slideLeft = 'green'; // Sit the new slide to the right
        //     animateLeft = 'red'; // Animate the current group to the left
        // } else { // Otherwise
        //     slideLeft = 'yellow'; // Sit the new slide to the left
        //     animateLeft = 'blue'; // Animate the current group to the right
        // }
        // Position new slide to left (if less) or right (if more) of current
        // $slides.eq(newIndex).css({
        //     backgroundColor: slideLeft,
        // });

        // $group.animate({
        //     color: animateLeft
        // }, 400, "linear", function() { // Animate slides and
        //     $slides.eq(currentIndex).css({
        //         opacity: invisible
        //     }); // Hide previous slide      
        //     $slides.eq(newIndex).css({
        //         opacity: visible
        //     }); // Set position of the new item
        //     // $group.css({
        //     //     opacity: 1
        //     // }); // Set position of group of slides
        //     currentIndex = newIndex; // Set currentIndex to the new image
        // });

        $slides.eq(currentIndex).animate({ opacity: invisible }, 400, "linear", function() {
            $slides.eq(newIndex).animate({ opacity: visible   }, 400, "linear");
        });
    }

    function advance() { // Used to set 
        clearTimeout(timeout); // Clear previous timeout
        timeout = setTimeout(function() { // Set new timer
            if (currentIndex < ($slides.length - 1)) { // If slide < total slides
                move(currentIndex + 1); // Move to next slide
            } else { // Otherwise
                move(0); // Move to the first slide
            }
        }, 4000); // Milliseconds timer will wait
    }

    $.each($slides, function(index) {
        // Create a button element for the button
        var $button = $('<button type="button" class="slide-btn">&bull;</button>');
        if (index === currentIndex) { // If index is the current item
            $button.addClass('active'); // Add the active class
        }
        $button.on('click', function() { // Create event handler for the button
            move(index); // It calls the move() function
        }).appendTo('.slide-buttons'); // Add to the buttons holder
        buttonArray.push($button); // Add it to the button array
    });

    advance(); // Script is set up, advance() to move it


});