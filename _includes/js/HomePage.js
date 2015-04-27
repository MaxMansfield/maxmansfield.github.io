 divisor = 1;

 var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onLeave'
      },
      container: "body"

    });

var dskBubbl = $(".desktop-bubble");
var webBubbl = $(".web-bubble");
var mobBubbl = $(".mobile-bubble");
var embBubbl = $(".embedded-bubble");


   TweenMax.set(dskBubbl, {autoAlpha: 0});
   TweenMax.set(webBubbl, {autoAlpha: 0});
   TweenMax.set(mobBubbl, {autoAlpha: 0});
   TweenMax.set(embBubbl, {autoAlpha: 0});


var tl = new TimelineMax()
  .fromTo(dskBubbl, 0.4, {autoAlpha:0, scale: 0 }, {autoAlpha:1, scale: 1.0 , ease:Power3.easeOut})
  .fromTo(webBubbl, 0.4, {autoAlpha:0, scale: 0 }, {autoAlpha:1, scale: 1.0 , ease:Power3.easeOut})
  .fromTo(mobBubbl, 0.4, {autoAlpha:0, scale: 0 }, {autoAlpha:1, scale: 1.0 , ease:Power3.easeOut})
  .fromTo(embBubbl, 0.4, {autoAlpha:0, scale: 0 }, {autoAlpha:1, scale: 1.0 , ease:Power3.easeOut});




  new ScrollMagic.Scene({triggerElement: "#logo_trigger", duration: "45%", offset: "-40%"})
                .setTween(logoSlideIn)
                .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#header_pin_trigger", duration: "32%", offset: "-40%"})
                .setPin("#header_pin", {pushFollowers: false})
                .addTo(controller);

   new ScrollMagic.Scene({triggerElement: "#indimg-2-trigger", duration: "900%"})
                .setPin("#indimg-1", {pushFollowers: false})
                .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#indimg-2-trigger", duration: "85%"})
                .setTween(tl)
                .addTo(controller);
