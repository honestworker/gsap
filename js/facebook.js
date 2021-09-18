$(document).ready(function() {
    var facebook_effected = false;

    var facebook_preview_image = $('.section.facebook .container .facebook-preview .preview-image');
    var facebook_preview_video = $('.section.facebook .container .facebook-preview .preview-image video');
    var facebook_preview_image_offset_top = facebook_preview_image.offset().top;
    var facebook_preview_video_offset_top = facebook_preview_video.offset().top;
    var facebook_video_play = false;
    facebook_preview_image.on('scroll', function(e) {
        if (facebook_preview_video_offset_top - facebook_preview_image_offset_top - facebook_preview_image.height() < facebook_preview_image.scrollTop()) {
            if (!facebook_video_play) {
                facebook_preview_video.trigger('play');
                facebook_video_play = true;
            }
        }
    });

    $(window).on('scroll', function(e) {
        if ($(window).scrollTop() >= $('.section.facebook .container .facebook-text').offset().top - 150 && window.scrollY <  $('.section.about').offset().top) {
            if (!facebook_effected) {
                facebook_effected = true;
    
                TweenMax.to( ".section.facebook .feturbulence", 5, {attr: { baseFrequency: "0.06 0" }, repeat: -1, yoyo: true, ease: Linear.easeNone } );
                TweenMax.to( ".section.facebook .jellyfish", 3, { y: -30, repeat: -1, yoyo: true, ease: Linear.easeNone}, 0.2 );
                TweenMax.staggerFrom( ".section.facebook .bubble", 4, { scale: 0.2, opacity: 0.2, repeat: -1, yoyo: true, svgOrigin: "center", ease: Linear.easeNone }, 1 );
    
                var blink = new TimelineMax({ repeat: -1, repeatDelay: 5,});
                    blink.to(".section.facebook .eye", 0.5, {scaleY: 0.5,opacity: 0.2, svgOrigin: "center", delay: 3, ease: Back.easeOut.config(1.7) })
                    .to(".section.facebook .eye", 0.5, { scaleY: 1, opacity: 1,  svgOrigin: "center", ease: Back.easeOut.config(1.7) });
                
                if ($(window).width() >= 768) {
                    var diver = new TimelineMax({})
                    diver.to(".section.facebook .left-driver", 10, { y: 560 })
                    .to(".section.facebook .right-driver", 10, { y: 560, delay: -10 });
                }
            }
        }
    });

    let mainTimeline = gsap.timeline(DEFAULT_TIMELINE);
    mainTimeline.to('.section.facebook .astronaut', { 
        duration: 0.9,
        ease:  "none",
        rotate: -6
    });

    let rightLeg = gsap.timeline(DEFAULT_TIMELINE);
    rightLeg.to('.section.facebook .right-leg', {
        ...DEFAULT_ANIM_PARAMS,
        transformOrigin: "top right",
        rotate: 3,
    });

    let leftLeg = gsap.timeline(DEFAULT_TIMELINE);
    leftLeg.to('.section.facebook .left-leg', {
        ...DEFAULT_ANIM_PARAMS,
        transformOrigin: "top right",
        rotate: -3,
    });

    let mainTimelinerevert = gsap.timeline(DEFAULT_TIMELINE);
    mainTimelinerevert.to('.section.facebook .astronaut-revert', { 
        duration: 0.9,
        ease:  "none",
        rotate: -6
    });

    let rightLegrevert = gsap.timeline(DEFAULT_TIMELINE);
    rightLegrevert.to('.section.facebook .right-leg-revert', {
        ...DEFAULT_ANIM_PARAMS,
        transformOrigin: "top left",
        rotate: 3,
    });

    let leftLegrevert = gsap.timeline(DEFAULT_TIMELINE);
    leftLegrevert.to('.section.facebook .left-leg-revert', {
        ...DEFAULT_ANIM_PARAMS,
        transformOrigin: "top left",
        rotate: -3,
    });
});

function texthide() {
    var textBtn = $(event.target);
    var textCard = textBtn.closest('.card-body');
    var dots = textCard.find(".dots");
    var moreText = textCard.find(".more");

    if (dots.css('display') === "none") {
        dots.css('display', 'inline');
        textBtn.html("Read more"); 
        moreText.css('display', 'none');
    } else {
        dots.css('display', 'none');
        textBtn.html("Read less");
        moreText.css('display', 'inline');
    }
}