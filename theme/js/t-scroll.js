/*!
* tScroll v1.1.10 (https://t-scroll.com)
* Copyright 2017 Tuds - Crazychicken
* Licensed under the MIT license
*/

'use strict';

var Tu = {
    // include object
    tScroll: function ( options ) {

        var myArray = [];

        // Options Library => libSort
        var libArray = ['t-element', 't-animate','t-position', 't-delay', 't-direction', 't-duration', 't-count', 't-function'];

        libArray.forEach ( function(el) {
            myArray.push( options[el] );
        });

        // console.log(options['t-delay']);

        var objCheck = checkValueInput.apply( objCheck, myArray );
        // apply Array in param function
    }
}

// function check error value, number ...
function checkValueInput( pr_el, pr_ani, pr_position, pr_delay, pr_direction, pr_duration, pr_count, pr_timing_function ) {

    var elment_select_html = document.querySelectorAll( pr_el ); // find element
    elment_select_html = [].slice.call(elment_select_html);

    // Check value element selector default when do not value
    if ( pr_el === undefined ) { // t-element
        return console.log("%c'Thank you for using tScroll. Please, insert property for element selector t-element: 'element here'", 'background: #f16d99; color: #fff');
    }
    // Change Array -> forEach find '.' & '#' check element user custom
    pr_el.split(' ').forEach( function(el) { // t-element
        if ( el.slice(0,1) != '.' && el.slice(0,1) != '#' ) {
            return console.log("%c'Thank you for using tScroll. Please, insert property for element selector t-element: '.' or '#'", 'background: #f16d99; color: #fff');
        }
    })

    // Check value t-element & t-animate
    if ( pr_el === '.t-default' && pr_ani === undefined ) { // t-elemnt & t-animate
        return console.log("%c'Thank you for using tScroll. Please, insert property for element selector t-animate: 'options here'", 'background: #f16d99; color: #fff');
    }

    // Check value defualt css animation // t-position
    if ( pr_position != undefined && pr_position != 'top' && pr_position != 'bottom' && typeof( pr_position ) != 'number' ) {
        return console.log("%c'Thank you for using tScroll. Please, insert property for element selector t-position: 'number or string top, bottom here'", 'background: #f16d99; color: #fff');
    }
    // Check value element animation default when do not value
    if ( pr_position != undefined && pr_position === 'top' || pr_position === undefined ) {
        pr_position = 0;
    }
    if ( pr_position != undefined && pr_position === 'bottom') {
        elment_select_html.forEach( function(e) {
            pr_position = e.offsetHeight;
        });
    }

    // Check animation-delay user insert custom style // t-delay
    if ( pr_delay != undefined && typeof( pr_delay ) === 'string' ) {
        return console.log("%c'Thank you for using tScroll. Please, insert property for element selector t-delay: 'number here'", 'background: #f16d99; color: #fff');
    }

    // Check animation-direction user insert custom style // t-direction
    if ( pr_direction != undefined ) {
        elment_select_html.forEach( function(e) {
            e.style.animationDirection = pr_direction;
            e.style.WebkitAnimationDirection = pr_direction; // Safari4.0 - 8.0
        });
    }

    // Check animation-duration user insert custom style // t-duration
    if ( pr_duration != undefined && typeof( pr_duration ) === 'string' ) {
        return console.log("%c'Thank you for using tScroll. Please, insert property for element selector t-duration: 'number here'", 'background: #f16d99; color: #fff');
    }
    if ( pr_duration != undefined ) {
        elment_select_html.forEach( function(e) {
            pr_duration = pr_duration;
            e.style.animationDuration = pr_duration + 's';
            e.style.WebkitAnimationDuration = pr_duration + 's'; // Safari4.0 - 8.0
        });
    } else {
        elment_select_html.forEach( function(e) {
            pr_duration = 0.25;
        });
    }

    // Check animation-interation-count user insert custom style
    if ( pr_count != undefined ) {
        elment_select_html.forEach( function(e) {
            e.style.animationIterationCount = pr_count;
            e.style.WebkitAnimationIterationCount = pr_count; // Safari4.0 - 8.0
        });
    }

    // Check animation-timing-function user insert custom style
    if ( pr_timing_function != undefined ) {
        elment_select_html.forEach( function(e) {
            e.style.animationTimingFunction = pr_timing_function;
            e.style.WebkitAnimationTimingFunction = pr_timing_function; // Safari4.0 - 8.0
        });
    }
    // Call run function when myArray not error
    var myArray = [ pr_el, pr_ani, pr_position, pr_delay, pr_direction, pr_duration, pr_count, pr_timing_function ];
    // console.log(myArray) // result Array is checked
    var myObject = include.apply( myObject, myArray ); // apply Array in param function
}

function include( pr_el, pr_ani, pr_position, pr_delay, pr_direction, pr_duration, pr_count, pr_timing_function ) {
    var set_w_height = window.innerHeight; // set height window device
    var elment_select_html = document.querySelectorAll( pr_el ); // find element class or ID
    elment_select_html = [].slice.call(elment_select_html);
    // console.log(pr_position);

    // Set custom css and option animation
    elment_select_html.forEach( function(e) {
        e.style.opacity = 0.0000001 * pr_position; // hack position only element
        e.style.filter = 'alpha(opacity=' + 0.0000001*pr_position + ')';
        if ( e.classList.contains('t-animated') && e.hasAttribute('data-t-show') === false ) {
            var class_animation_css = e.className + " " + pr_ani + " " + "t-default"; // set add class
            setTimeout( function () {
                e.setAttribute('class', class_animation_css); // set class run animate
                e.style.opacity = 1;
                e.style.filter = 'alpha(opacity=' + 100 + ')'; // IE
            }, pr_delay * 1000);
        } // set run function first load, full screen with t-animated

        // check default data-t-show = 1 if it is not value
        if ( e.hasAttribute('data-t-show') === true && e.getAttribute('data-t-show') === '' ) {
            e.setAttribute('data-t-show', 1);
        }

        if ( e.hasAttribute('data-t-show') === true && pr_duration != undefined && e.classList.contains('t-animated') ) {
            if ( pr_delay === undefined ) {
                pr_delay = 0;
            }

            var num = Number(e.getAttribute('data-t-show'));
            var pr_delay_r = pr_duration*num + (pr_delay - pr_duration);
            // console.log(pr_delay_r);

            var class_animation_css = e.className + " " + "t-default"; // set add class
            setTimeout(function () {
                e.setAttribute('class', class_animation_css); // set class run animate
                e.style.opacity = 1;
                e.style.filter = 'alpha(opacity=' + 100 + ')'; // IE
            }, pr_delay_r * 1000);
        } // set run function first load, sort 1,2,3 ... full screen with t-animated
    });

    // Run animation when action scroll apply
    window.addEventListener( 'scroll', function () {
        var set_top = window.pageYOffset; // set scroll top
        elment_select_html.forEach( function(e) {
            // filter
            pr_position = e.style.opacity * 10000000; // include position only element
            var rect = e.getBoundingClientRect(); // jquery use check element if it has position: relative
            // var sum = set_top + rect.top + e.offsetHeight;
            var sum = set_top + rect.top;
            if (set_top + set_w_height - pr_position > sum && !e.classList.contains('t-animated')) {
                // console.log(pr_position);
                // set position element when event add class
                // 1. Scroll top window more than element
                // 2. Stop add class run animation
                // 3. Stop add class run animation if element has runed for t-animated
                var num = Number( e.getAttribute('data-t-show') );
                if ( pr_delay === undefined ) {
                    pr_delay = 0;
                }
                var pr_delay_r = pr_delay;
                // console.log(pr_delay);
                if (e.hasAttribute('data-t-show') === true) {
                    // Check show only item, sort 1,2,3,4 ...
                    pr_delay_r = pr_duration*num + (pr_delay - pr_duration);
                }
                // console.log(pr_delay_r);
                var class_animation_css = e.className + " " + pr_ani + " " + "t-animated t-default"; // set add class
                setTimeout( function () {
                    e.setAttribute('class', class_animation_css); // set class run animate
                    e.style.opacity = 1;
                    e.style.filter = 'alpha(opacity=' + 100 + ')'; // IE
                }, pr_delay_r * 1000);
            }
        });
    });
}