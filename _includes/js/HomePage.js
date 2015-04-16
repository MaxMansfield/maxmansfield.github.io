 divisor = 1;

 var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onLeave'
      }
    });

var dskBubbl = $(".desktop-bubble");
var webBubbl = $(".web-bubble");
var mobBubbl = $(".mobile-bubble");
var embBubbl = $(".embedded-bubble");


   TweenMax.set(dskBubbl, {x: "-4000",y: "-4000"});
   TweenMax.set(webBubbl, {x: "-4000", y: "4000"});
   TweenMax.set(mobBubbl, {x: "4000", y: "4000"});
   TweenMax.set(embBubbl, {x: "4000", y: "-4000"});


var tl = new TimelineMax()
  .fromTo(dskBubbl, 0.4, {x: "-4000", y: "-4000"}, {x: "0", y: "0", ease:Power3.easeOut})
  .fromTo(webBubbl, 0.4, {x: "-4000", y: "4000"}, {x: "0", y: "0", ease:Power3.easeOut})
  .fromTo(mobBubbl, 0.4, {x: "4000", y: "4000"}, {x: "0", y: "0", ease:Power3.easeOut})
  .fromTo(embBubbl, 0.4, {x: "4000", y: "-500"}, {x: "0", y: "0", ease:Power3.easeOut});




  new ScrollMagic.Scene({triggerElement: "#logo_trigger", duration: "35%", offset: "-60%"})
                .setTween(logoSlideIn)
                .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#header_pin_trigger", duration: "32%", offset: "-40%"})
                .setPin("#header_pin", {pushFollowers: false})
                .addTo(controller);

   new ScrollMagic.Scene({triggerElement: "#indimg-2-trigger", duration: "500%"})
                .setPin("#indimg-1", {pushFollowers: false})
                .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#indimg-2-trigger", duration: "100%"})
                .setTween(tl)
                .addIndicators({name: "timeline"})
                .addTo(controller);

              