/* -------------------- AOS Setting -------------------- */
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

/* -------------------- Scroll To Setting -------------------- */

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
    $('.home .contact .contact-text .title h3 .contact-toggle').click(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.home .contact .contact-form').removeClass('active');            
        } else {
            $(this).addClass('active');
            $('.home .contact .contact-form').addClass('active');  
        }
    });
});

let DEFAULT_TIMELINE = { 
    repeat: -1,
    yoyo: true
}
let DEFAULT_ANIM_PARAMS = {
    duration: 1,
    ease: "power2.inOut"
}