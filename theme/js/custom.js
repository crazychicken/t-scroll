/*!
* tScroll v1.1.10 (https://t-scroll.com)
* Copyright 2017 Tuds - Crazychicken
* Licensed under the MIT license
*/

'use strict';

$(function () {
    // getLink active
    function getLink() {
        var path = window.location.pathname;
        if (path === "/") {
            path = "";
        }
        var getPath = $('.navbar-nav li a');
        $('.navbar-nav').find('.active').removeClass('active')
        getPath.each(function(){
            var a = $(this).attr('href');
            var b = a.replace('http://t-scroll.com', "");
            if ( path === b ) {
                $(this).parent().addClass('active');
            }
        })
    }
    if ($('body').find('.navbar-nav').hasClass('navbar-nav') === true) {
        getLink();
    }

    $('.topbar-close').on('click', function () {
        $(this).parents('.topbar-wrapper').hide(400);
        setCookie("close-banner", 1)
    });

    $('.topbar-close').on('click', function () {
        $(this).parents('.topbar-wrapper').hide(400);
        setCookie("close-banner", 1) // call action cookie
    });
    $(window).scroll(function (){
        if ($(window).scrollTop() > 5) {
            $('.topbar').addClass('topbar-scroll');
        } else {
            $('.topbar').removeClass('topbar-scroll');
        }
    });
    // set the value, save data browser
    function setCookie(pr_name, exdays) {
        var d = new Date();
        d = (d.getTime() + (exdays*24*60*60*1000));
        document.cookie = pr_name+"="+d + ";" + ";path=/";
    }
    // get the cookie and check value
    function getCookie(pr_name) {
        var name = pr_name + "=";
        var ca = document.cookie.split(';');

        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            c = c.trim();
            if (c.indexOf(pr_name+"=") === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    function start_cookies(pr_name_action_cookie, pr_set_cookie) {
        var setClass = pr_name_action_cookie.slice(1, pr_name_action_cookie.length)
        if ($('body').find(pr_name_action_cookie).hasClass(setClass) === true) {
            var c = new Date();
            c = c.getTime();
            var get = getCookie(pr_set_cookie);
            if ( get > c ) {
                $(pr_name_action_cookie).hide();
            } else {
                $(pr_name_action_cookie).show();
            }
        }    
    }

    start_cookies('.topbar-wrapper', 'close-banner'); // run action cookies topbar
    start_cookies('.modal-subscribe', 'close-modal-sub') // run action cookies subscribe form

    $('.modal-subscribe').on('click', $(this), function(e){
        if($(e.target).is($(this))) {
            $(this).hide();
        }
        setCookie("close-modal-sub", 1)
    });
    $('.modal-subscribe .modal-sub-close').on('click', $(this), function(e){
        $(this).parents('.modal-subscribe').hide();
        setCookie("close-modal-sub", 1)
    });
    // set js show modal
    Tu.tScroll({
        't-element': '.modal-subscribe.fadeIn',
        't-delay': 7,
        't-duration': 0.75
    })
    $('.open-modal').on('click', function(){
        $('.modal-subscribe').show();
    });
});
