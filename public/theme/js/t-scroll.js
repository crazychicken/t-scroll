/*!
 * t-scroll v1.0.6 (https://t-scroll.com)
 * Copyright 2017 Tuds - Crazychicken
 * Licensed under the MIT license
 */

'use strict';

var Tu = {
    // include object
    t_scroll: function ( options ) {

        var myArray = [];

        // Options Library => libSort
        var libArray = ['t_element', 't_animate','t_position', 't_delay', 't_direction', 't_duration', 't_count', 't_function'];

        libArray.forEach (el => {
            myArray.push( options[el] );
        });

        // console.log(options['t_delay']);

        var objCheck = checkValueInput.apply( objCheck, myArray );
        // apply Array in param function
    }
}

// function check error value, number ...
function checkValueInput( pr_el, pr_ani, pr_position, pr_delay, pr_direction, pr_duration, pr_count, pr_timing_function ) {

    var elment_select_html = document.querySelectorAll( pr_el ); // find element
    elment_select_html = [].slice.call(elment_select_html);

    // Check value element selector default when do not value
    if ( pr_el === undefined ) { // t_element
        return console.log("%c'Thank you for useing t-scroll. Please, insert property for element selector t_element: 'element here'", 'background: #f16d99; color: #fff');
    }
    // Change Array -> forEach find '.' & '#' check element user custom
    pr_el.split(' ').forEach( el => { // t_element
        if ( el.slice(0,1) != '.' && el.slice(0,1) != '#' ) {
            return console.log("%c'Thank you for useing t-scroll. Please, insert property for element selector t_element: '.' or '#'", 'background: #f16d99; color: #fff');
        }
    })

    // Check value t_element & t_animate
    if ( pr_el === '.t_default' && pr_ani === undefined ) { // t_elemnt & t_animate
        return console.log("%c'Thank you for useing t-scroll. Please, insert property for element selector t_animate: 'options here'", 'background: #f16d99; color: #fff');
    }

    // Check value defualt css animation // t_position
    if ( pr_position != undefined && typeof( pr_position ) === 'string' ) {
        return console.log("%c'Thank you for useing t-scroll. Please, insert property for element selector t_position: 'number here'", 'background: #f16d99; color: #fff');
    }
    // Check value element animation default when do not value
    if ( pr_position === undefined ) {
        pr_position = 0;
    }

    // Check animation-delay user insert custom style // t_delay
    if ( pr_delay != undefined && typeof( pr_delay ) === 'string' ) {
        return console.log("%c'Thank you for useing t-scroll. Please, insert property for element selector t_delay: 'number here'", 'background: #f16d99; color: #fff');
    }

    // Check animation-direction user insert custom style // t_direction
    if ( pr_direction != undefined ) {
        elment_select_html.forEach( e => {
            e.style.animationDirection = pr_direction;
            e.style.WebkitAnimationDirection = pr_direction; // Safari4.0 - 8.0
        });
    }

    // Check animation-duration user insert custom style // t_duration
    if ( pr_duration != undefined && typeof( pr_duration ) === 'string' ) {
        return console.log("%c'Thank you for useing t-scroll. Please, insert property for element selector t_duration: 'number here'", 'background: #f16d99; color: #fff');
    }
    if ( pr_duration != undefined ) {
        elment_select_html.forEach( e => {
            pr_duration = pr_duration;
            e.style.animationDuration = pr_duration + 's';
            e.style.WebkitAnimationDuration = pr_duration + 's'; // Safari4.0 - 8.0
        });
    } else {
        elment_select_html.forEach( e => {
            pr_duration = 0.25;
        });
    }

    // Check animation-interation-count user insert custom style
    if ( pr_count != undefined ) {
        elment_select_html.forEach( e => {
            e.style.animationIterationCount = pr_count;
            e.style.WebkitAnimationIterationCount = pr_count; // Safari4.0 - 8.0
        });
    }

    // Check animation-timing-function user insert custom style
    if ( pr_timing_function != undefined ) {
        elment_select_html.forEach( e => {
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
    // console.log(t_position);

    // Set custom css and option animation
    elment_select_html.forEach( e => {
        e.style.opacity = 0.0000001 * pr_position; // hack position only element
        if ( e.classList.contains('t_animated') && e.hasAttribute('t_show') === false ) {
            var class_animation_css = e.className + " " + pr_ani + " " + "t_default"; // set add class
            setTimeout( function () {
                e.setAttribute('class', class_animation_css); // set class run animate
                e.style.opacity = 1;
            }, pr_delay * 1000);
        } // set run function first load, full screen with t_animated

        // check default t_show = 1 if it is not value
        if ( e.hasAttribute('t_show') === true && e.getAttribute('t_show') === '' ) {
            e.setAttribute('t_show', 1);
        }

        if ( e.hasAttribute('t_show') === true && pr_duration != undefined && e.classList.contains('t_animated') ) {
            if ( pr_delay === undefined ) {
                pr_delay = pr_duration;
            }

            var num = Number(e.getAttribute('t_show'));
            var pr_delay_r = pr_duration*num + (pr_delay - pr_duration);
            // console.log(pr_delay_r);

            var class_animation_css = e.className + " " + "t_default"; // set add class
            setTimeout(function () {
                e.setAttribute('class', class_animation_css); // set class run animate
                e.style.opacity = 1;
            }, pr_delay_r * 1000);
        } // set run function first load, sort 1,2,3 ... full screen with t_animated
    });

    // Run animation when action scroll apply
    window.addEventListener( 'scroll', function () {
        var set_top = window.scrollY; // set scroll top
        elment_select_html.forEach( e => {
            // filter
            pr_position = e.style.opacity *  10000000; // include position only element
            var rect = e.getBoundingClientRect(); // jquery use check element if it has position: relative
            var sum = set_top + rect.top + e.offsetHeight;
            if (set_top + set_w_height + pr_position > sum && !e.classList.contains('t_animated')) {
                // set position element when event add class
                // 1. Scroll top window more than element
                // 2. Stop add class run animation
                // 3. Stop add class run animation if element has runed for t_animated
                var num = Number( e.getAttribute('t_show') );
                if ( pr_delay === undefined ) {
                    pr_delay = pr_duration;
                }
                if (e.hasAttribute('t_show') === true) {
                    // Check show only item, sort 1,2,3,4 ...
                    var pr_delay_r = pr_duration*num + (pr_delay - pr_duration);
                }
                // console.log(pr_delay_r);
                var class_animation_css = e.className + " " + pr_ani + " " + "t_animated t_default"; // set add class
                setTimeout( function () {
                    e.setAttribute('class', class_animation_css); // set class run animate
                    e.style.opacity = 1;
                }, pr_delay_r * 1000);
            }
        });
    });
}