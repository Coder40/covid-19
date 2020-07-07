$(function() {
    'use strict';

    //navbar_fixed
    $(document).ready(function() {

        // sticky navigation menu

        let nav_offset_top = $('.header_area').height() + 50;

        function navbarFixed() {
            if ($('.header_area').length) {
                $(window).scroll(function() {
                    let scroll = $(window).scrollTop();
                    if (scroll >= nav_offset_top) {
                        $('.header_area').addClass('navbar_fixed');
                    } else {
                        $('.header_area').removeClass('navbar_fixed');
                    }
                })
            }
        }

        navbarFixed();

    });
    // nav active
    $(document).on('click', '.navbar-nav .nav-item', function() {
            $(this).addClass('active').siblings().removeClass('active')
        })
        /*-----------------------------------
         * scrolling  MENU - HEADER
         *-----------------------------------*/
    function menuscroll() {
        var $navmenu = $('.nav-menu');
        if ($(window).scrollTop() > 50) {
            $navmenu.addClass('is-scrolling');
        } else {
            $navmenu.removeClass('is-scrolling');
        }
    }
    menuscroll();
    $(window).on('scroll', function() {
        menuscroll();
    });
    /*-----------------------------------
     * NAVBAR CLOSE ON CLICK
     *-----------------------------------*/

    $('.navbar-nav > li:not(.dropdown) > a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });
    /*
     * NAVBAR TOGGLE BG
     *-----------------*/
    var siteNav = $('#navbar');
    siteNav.on('show.bs.collapse', function(e) {
        $(this)
            .parents('.nav-menu')
            .addClass('menu-is-open');
    });
    siteNav.on('hide.bs.collapse', function(e) {
        $(this)
            .parents('.nav-menu')
            .removeClass('menu-is-open');
    });

    /*-----------------------------------
     * ONE PAGE SCROLLING
     *-----------------------------------*/
    // Select all links with hashes
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .not('[data-toggle="tab"]')
        .on('click', function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') ==
                this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ?
                    target :
                    $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                            scrollTop: target.offset().top
                        },
                        1000,
                        function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(':focus')) {
                                // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            }
                        }
                    );
                }
            }
        });
    /*-----------------------------------
     * OWL CAROUSEL
     *-----------------------------------*/
    var $testimonialsDiv = $('.testimonials');
    if ($testimonialsDiv.length && $.fn.owlCarousel) {
        $testimonialsDiv.owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            navText: [
                '<span class="ti-arrow-left"></span>',
                '<span class="ti-arrow-right"></span>'
            ]
        });
    }

    var $galleryDiv = $('.img-gallery');
    if ($galleryDiv.length && $.fn.owlCarousel) {
        $galleryDiv.owlCarousel({
            nav: false,
            center: true,
            loop: true,
            autoplay: true,
            dots: true,
            navText: [
                '<span class="ti-arrow-left"></span>',
                '<span class="ti-arrow-right"></span>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                }
            }
        });
    }
});
/* End Fn */
var $window = $(window);
var $root = $('html, body');

$(document).ready(function() {

    "use strict";

    colorScheme();
    menuToggler();
    sliderOwlCarousel();
    swiperSlider();
    typedJS();
    skills();
    countup();
    portfolioPopup();
    mapInit();
    validateEmail();
    sendEmail();
    $('.owl-item.active .hero-slide').addClass('zoom');


});
$window.on("load", (function() {
    $("#overlayer").delay(200).fadeOut('slow');
    $(".loader").delay(500).fadeOut('slow');
    pagePilling();
    portfolioIsotop();
}));

//ainmation js
AOS.init();