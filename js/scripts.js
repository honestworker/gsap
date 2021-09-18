/* --------------------    AOS Setting   -------------------- */
AOS.init();

/* -------------------- Count Up Setting -------------------- */
if ($('.count-up-number').length) {
    $('.count-up-number').each(function () {
        var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            step: function (func) {
                $(this).text(parseFloat(func).toFixed(size));
            }
        });
    });
}

/* -------------------- Navbar Setting -------------------- */
$(window).scroll(function () {
    if ($(".navbar").length) {
        $(".navbar").toggleClass("scroll", $(this).scrollTop() > 1);
    }
    if ($("#scroll-top").length) {
        $("#scroll-top").toggleClass("scroll", $(this).scrollTop() > 1);
    }
});

/* ------------------ Scroll To Setting ------------------- */
if ($('.scroll-to').length) {
    $(".scroll-to").click(function (event) {
        $('html, body').animate({ scrollTop: '+=850px' }, 600);
    });
}

/* -------------------- Slick Setting -------------------- */
/* Slick Center */
if ($('.slick-current').length) {
    $('.slick-current').onClick = function(){
        alert();
    }
}
$(document).ready(function() {
    if ($('.slick-responsive-auto-center').length) {
        $('.slick-responsive-auto-center').slick({
            dots: true,
            arrows: true,
            slidesToShow: 3,
            infinite: true,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }
});

/* ------------------- Animation Settings ------------------- */
let DEFAULT_TIMELINE = { 
    repeat: -1,
    yoyo: true
}
let DEFAULT_ANIM_PARAMS = {
    duration: 1,
    ease: "power2.inOut"
}

/* -------------------    Swipe Detect    ------------------- */
if ($(window).width() < 768) {
    swipedetect($('.home .contact .contact-text .title h3')[0], function(swipedir) {
        var contact_form = $('.home .contact .contact-form');
        var contact_toggle = $('.home .contact .contact-text .title h3 .contact-toggle');
        if (swipedir =='left') {
            if (!contact_toggle.hasClass('active')) {
                contact_toggle.addClass('active');
                contact_form.addClass('active');
            }
        }
        if (swipedir =='right') {
            if (contact_toggle.hasClass('active')) {
                contact_toggle.removeClass('active');
                contact_form.removeClass('active');
            }
        }
    });
} else {
    $('.home .contact .contact-text .title h3 .contact-toggle').draggable({
        containment: '.home .contact .contact-text .title h3',
        cursor: 'move',
        snap: '.home .contact .contact-text .title h3',
        stop: handleDragStopContactToggle
    });
    
    function handleDragStopContactToggle( event, ui ) {
        var contact_form = $('.home .contact .contact-form');
        var contact_title = $('.home .contact .contact-text .title h3');
        var contact_toggle = $('.home .contact .contact-text .title h3 .contact-toggle');
        var contact_toggle_left = contact_toggle.css('left').match(/(\d+)/);
        if (contact_toggle_left[0] > (contact_title.width() - contact_toggle.width()) / 2) {
            if (contact_toggle.hasClass('active')) {
                contact_toggle.removeClass('active');
                contact_form.removeClass('active');
            }
            contact_toggle.css('left', 'auto');
            contact_toggle.css('right', '-2px');
        } else {
            if (!contact_toggle.hasClass('active')) {
                contact_toggle.addClass('active');
                contact_form.addClass('active');
            }
            contact_toggle.css('right', 'auto');
            contact_toggle.css('left', '-2px');
        }
    }  
}
/* -------------------     Responsive     ------------------- */
