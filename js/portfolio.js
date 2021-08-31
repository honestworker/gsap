window.onload = function () {
    var portfolio_effected = false;
    $(window).on('scroll',function(e) {
        if (window.scrollY >= $('.section.portfolio .container').offset().top) {
            if (portfolio_effected) return;
            portfolio_effected = true;

            var t_portfolio = new TimelineMax({});
                t_portfolio.addLabel("start-portfolio", 0)
                    .add( TweenMax.from(".rocket-fire-artboard .takeoff",   0.5,    { scaleY: 0, y: -200, ease: Expo.easeInOut, delay: 3 }))
                    .add( TweenMax.to("#portfolio-rocket",                  1,      { className: "+=shake",  delay: -1 }) )
                    .add( TweenMax.to(".section.portfolio .firebubble",     1,      { scaleY: 1.5, opacity: 1, delay: -0.5 }) )
                    .add( TweenMax.to(".rocket-fire-artboard .smoke",       2,      { y: -50, delay: 1 }) )
                    .add( TweenMax.to("#portfolio-rocket",                  1,      { className: "-=shake" }) )
                    .add( TweenMax.to(".section.portfolio .firebubble",     1,      { y: -2500, delay: -1 }) )
                    .add( TweenMax.to(".section.portfolio .missilefire",    1,      { y: -2200, delay: -1 }) )
                    .add( TweenMax.to("#portfolio-rocket",                  1,      { y: -2800,  delay: -1 }) )
                    .add( TweenMax.to(".rocket-fire-artboard",              1,      { y: -2800, display: "none", delay: -1 }) )
                    .add( TweenMax.to(".section.portfolio",                 1,      { backgroundColor: "black", delay: -1 }) )
                    .add( TweenMax.to(".section.portfolio .missilefire",    1,      { opacity: 0, delay: -1 }) )
                    .add( TweenMax.to(".section.portfolio .shootingstar",   1,      { display: "block" }) )
                    .add( TweenMax.to(".section.portfolio .stars",          0.2,    { opacity: 1, delay: -0.2 }) )
                    .add( TweenMax.to(".section.portfolio .stars2",         0.2,    { opacity: 1, delay: -0.2 }) )
                    .add( TweenMax.to(".rocket-wrapper",                    1,      { display: "block", x: 200, y: -150 }) )
                    .add( TweenMax.to(".spacewalk-wrapper",                 1,      { display: "block" }) )
                    .add( TweenMax.to(".saturn-wrapper",                    1,      { display: "block" }) )
                    .add( TweenMax.to(".galaxy-wrapper",                    1,      { opacity: 1 }));
    
            var t_rocket = new TimelineMax({});
                t_rocket.addLabel('start-rocket', 0)
                    .add( TweenMax.to("#rocket-rocket",                     1,      { y: -10, delay: -3 }) )
                    .add( TweenMax.to(".rocket-artboard",                   0.2,    { rotate: 40 }) )
                    .add( TweenMax.to(".rocket-fire-artboard .smoke",       2,      { opacity: 0, delay: -2 }) );
            
            let mainTimeline = gsap.timeline(DEFAULT_TIMELINE);
                mainTimeline.to('.spacewalk-artboard .astronaut', { 
                    duration: 0.5,
                    ease:  "none",
                    rotate: -5
                });
            
            let rightHand = gsap.timeline(DEFAULT_TIMELINE);
                rightHand.to('.spacewalk-artboard .right-hand', {
                    ...DEFAULT_ANIM_PARAMS,
                    transformOrigin: "top left",
                    rotate: -60,
                    x: 16,
                    y: 18,
                    scaleY: 1.1
                });

            let leftHand = gsap.timeline(DEFAULT_TIMELINE);
                leftHand.to('.spacewalk-artboard .left-hand', {
                    ...DEFAULT_ANIM_PARAMS,
                    transformOrigin: "top left",
                    rotate: 65,
                    x: 4,
                    y: -10
                });

            let rightLeg = gsap.timeline(DEFAULT_TIMELINE);
                rightLeg.to('.spacewalk-artboard .right-leg', {
                    ...DEFAULT_ANIM_PARAMS,
                    transformOrigin: "top left",
                    rotate: 20,
                    y: 0,
                });

            let leftLeg = gsap.timeline(DEFAULT_TIMELINE);
                leftLeg.to('.spacewalk-artboard .left-leg', {
                    ...DEFAULT_ANIM_PARAMS,
                    transformOrigin: "top left",
                    rotate: -20,
                    y: -5
                });
            
            let leftLegTurn = gsap.timeline(DEFAULT_TIMELINE);            
                leftLegTurn.to('.spacewalk-artboard .left-leg .lower-leg', {
                    ...DEFAULT_ANIM_PARAMS,
                    rotate: 20,
                    x: 1,
                    y: 5
                });
            
            let rightLegTurn = gsap.timeline(DEFAULT_TIMELINE);
                rightLegTurn.to('.spacewalk-artboard .right-leg .lower-leg', {
                    ...DEFAULT_ANIM_PARAMS,
                    rotate: 10,
                    x: -5,
                    y: 0
                });

            TweenMax.from( ".spacewalk-artboard .head .face", 1, { rotate: 0, repeat: -1, yoyo: true }, 1 );
            TweenMax.to( ".spacewalk-artboard .head .face", 1, { rotate: -5, repeat: -1, yoyo: true }, 1 );

            let backpack = gsap.timeline(DEFAULT_TIMELINE);
                backpack.set('.spacewalk-artboard .backpack', {
                    zIndex: 4
                }).to('.spacewalk-artboard .backpack', {
                left: 30,
                ...DEFAULT_ANIM_PARAMS
                });
      
            let emblem = gsap.timeline(DEFAULT_TIMELINE);
                emblem.to('.spacewalk-artboard .emblem', {
                left: 58,
                ...DEFAULT_ANIM_PARAMS
                });

            TweenMax.from( ".spacewalk-artboard .backpack .lamp", 0.4, { background: "#c96281", opacity: 0, repeat: -1, yoyo: true }, 1 );
            TweenMax.to( ".spacewalk-artboard .backpack .lamp", 0.4, { background: "#f36476", opacity: 1, repeat: -1, yoyo: true }, 1 );
        }
    });
}