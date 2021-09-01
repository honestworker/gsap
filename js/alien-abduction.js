$(document).ready(function() {
    var alien_text_effected = false;
    var alien_effected = false;
    
    $(window).on('scroll',function(e) {
        if (window.scrollY >= $('.section.instagram').offset().top) {
            if (!alien_effected) {
                alien_effected = true;
                gsap.to(".section.instagram .star", {
                    duration: 1,
                    opacity: 0.2,
                    stagger: {
                        each: 0.5,
                        yoyo: true,
                        repeat: -1,
                        repeatDelay: 0,
                        ease: "Power1.easeInOut",
                        from: "start"
                    }
                });
    
                var message = new TimelineMax({ repeat : -1, repeatDelay : .1 });
                    message.to(".section.instagram .typing-indicator-heart", .1, { scale : 1, opacity : 1, delay: -.1 })
                    .to(".section.instagram .typing-indicator-heart", .1, { scale : 0.5, opacity : 0, delay : .1})
                    .to(".section.instagram .typing-indicator-hashtag", .1, { scale : 1, opacity : 1})
                    .to(".section.instagram .typing-indicator-hashtag", .1, { scale : 0.5, opacity : 0, delay : .1});
                var message_blink_for_girl = new TimelineMax({ repeat : -1, repeatDelay : .1 });
                    message_blink_for_girl.to(".section.instagram .typing-indicator-heart-women", 0.5, { scale : 1, opacity : 1, delay : -.1 })
                    .to(".section.instagram .typing-indicator-heart-women", 0.5, { scale : 0.5, opacity : 0, delay : -.1 })
                    .to(".section.instagram .typing-indicator-hashtag-women", 0.5, { scale : 1, opacity : 1, })
                    .to(".section.instagram .typing-indicator-hashtag-women", 0.5, { scale : 0.5, opacity : 0,delay : 0.5,});
                var message_blink_for_boy = new TimelineMax({ repeat : -1, repeatDelay : .1});
                    message_blink_for_boy.to(".section.instagram .typing-indicator-heart-otherguy", 0.5, { scale : 1, opacity : 1})
                    .to(".section.instagram .typing-indicator-heart-otherguy", 0.5, { scale : 0.5, opacity : 0, delay : -1 });
            }
        }        

        if (window.scrollY >= $('.section.instagram .instagram-text').offset().top) {
            if (!alien_text_effected) {                
                alien_text_effected = true;

                //register the plugin
                gsap.registerPlugin(MotionPathPlugin);

                const motionPathData = "M-399.25379,-340.71797 C-399.25379,-340.71797 386.70813,-284.92113 420.50613,-152.49513 454.28013,-20.09013 -159.91287,-245.09513 -159.91287,-91.90313 -159.91287,61.26087 378.10113,-103.60513 384.90413,21.27287 391.70213,146.13787 122.70503,104.22685 122.70503,104.22685 ";
                const exitPathData = "M579.41621,-174.11096 C579.41621,-174.11096 502.92821,-184.48396 411.31121,-159.05496 309.72221,-130.85696 292.54621,-121.82696 196.91321,-90.59496 134.95521,-70.35696 62.36621,-19.28196 55.60721,29.13604 48.81421,77.74604 120.07209,102.90601 120.07209,102.90601 ";

                gsap.set(".section.instagram .alien", {
                    xPercent: -50,
                    yPercent: -20,
                    autoAlpha: 1,
                    transformOrigin: "50% 50%"
                });

                function alien() {
                    var tl = gsap.timeline({ defaults: { ease: Power1.easeOut } })
                        .addLabel("tiltOne", 0.2)
                        .addLabel("tiltTwo", 0.7)
                        .addLabel("tiltThree", 1.6)
                        .to(".section.instagram .alien", {
                            duration: 10,
                            immediateRender: true,
                            ease: Elastic.easeOut.config(1, 1.2),
                            motionPath: motionPathData
                        }, 0)
                        .from(".section.instagram .alien", {
                            duration: 4,
                            scale: 1,
                            immediateRender: false
                        }, 0)
                        .to(".section.instagram .alien", {
                            duration: 0.5,
                            rotate: "15deg",
                            ease: Power1.easeInOut
                        }, "tiltOne")
                        .to(".section.instagram .alien", {
                            duration: 0.5,
                            rotate: "-15deg",
                            ease: Power1.easeInOut
                        }, "tiltTwo")
                        .to(".section.instagram .alien", {
                            duration: 0.5,
                            rotate: "15deg",
                            ease: Power1.easeInOut
                        }, "tiltThree")
                        .to(".section.instagram .alien", {
                            duration: 0.7,
                            rotate: "0deg",
                            ease: Back.easeOut.config(8)
                        }, "tiltThree+=1");

                    return tl;
                }
                function sheep() {
                    var tl = gsap.timeline({ defaults: { ease: Power1.easeOut } })
                        .from(".section.instagram .head", {
                            duration: 0.2,
                            ease: Power1.easeInOut,
                            rotate: "30deg",
                            transformOrigin: "0% 50%",
                            xPercent: 5,
                            yPercent: 32
                        })
                        .to(".section.instagram .head", {
                            duration: 0.4,
                            ease: Power1.easeInOut,
                            rotate: "-80deg",
                            transformOrigin: "0% 50%",
                            xPercent: 10,
                            yPercent: 10
                        }, "+=1")

                        .to(".section.instagram .sheep", {
                            duration: 0.4,
                            ease: Power1.easeInOut,
                            rotate: "50deg",
                            transformOrigin: "100% 50%",
                            yPercent: -30,
                            xPercent: -20
                        })
                        .to(".section.instagram .head", {
                            duration: 0.4,
                            ease: Power1.easeInOut,
                            rotate: "-15deg",
                            transformOrigin: "0% 50%"
                        }, "+=0.2")
                        .fromTo(".section.instagram .leg", {
                            duration: 0.1,
                            rotate: "30deg",
                            transformOrigin: "50% 0%",
                            immediateRender: false
                        },
                            {
                                duration: 0.1,
                                rotate: "-30deg",
                                transformOrigin: "50% 0%",
                                immediateRender: false,
                                stagger: {
                                    each: 0.1,
                                    yoyo: true,
                                    repeat: 12,
                                    repeatDelay: 0,
                                    ease: "Power1.easeInOut",
                                    from: "start"
                                }
                            }, "-=1")
                        .to(".section.instagram .sheep", {
                            duration: 0.4,
                            ease: Power1.easeInOut,
                            transformOrigin: "50% 50%",
                            yPercent: -250,
                            scale: 0.6,
                            opacity: 0
                        }, "-=0.8");

                    return tl;
                }
                function lightOpen() {
                    var tl = gsap.timeline({ defaults: { ease: Power1.easeOut } })
                        .to(".section.instagram .sheep", { duration: 0.01, autoAlpha: 1 })
                        .from(".section.instagram .light", {
                            duration: 0.2,
                            scaleX: 0,
                            transformOrigin: "50% 0%"
                        }, 0)
                        .to(".section.instagram .groundlight", {
                            autoAlpha: 1
                        }, 0)
                        .from(".section.instagram .groundlight", {
                            duration: 0.2,
                            scale: 0,
                            transformOrigin: "50%, 50%"
                        }, 0)
                        .to(".section.instagram .lightcircle", {
                            duration: 0.2,
                            opacity: 1
                        }, 0)
                        .to(".section.instagram .lightring", {
                            fill: "#9bf1ed"
                        }, 0)
                    return tl;
                }
                function alienExit() {
                    var tl = gsap.timeline({ defaults: { ease: Power1.easeOut } })
                        .to(".section.instagram .light", {
                            duration: 0.2,
                            scaleX: 0,
                            transformOrigin: "50% 0%"
                        }, 0)
                        .to(".section.instagram .groundlight", {
                            duration: 0.2,
                            scale: 0,
                            transformOrigin: "50%, 50%"
                        }, 0)
                        .to(".section.instagram .lightcircle", {
                            duration: 0.2,
                            opacity: 0
                        }, 0)
                        .to(".section.instagram .lightring", {
                            fill: "#fff"
                        }, 0)
                        .to(".section.instagram .alien", {
                            ease: Power2.easeOut,
                            duration: 1.5,
                            scale: 0,
                            motionPath: {
                                path: exitPathData,
                                start: 1,
                                end: 0,
                            }
                        }, "-=0.3")
                    return tl;
                }

                const mainTimeline = gsap.timeline({ defaults: { ease: Power1.easeOut } })
                    .add(alien(), 0.5)
                    .add(lightOpen(), 3.2)
                    .add(sheep(), 3.4)
                    .add(alienExit(), 7);
            }
        }
    });
});