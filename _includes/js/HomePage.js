 divisor = 1;

 var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onLeave'
      }
    });


  new ScrollMagic.Scene({triggerElement: "#logo_trigger", duration: "35%", offset: "-60%"})
                .setTween(logoSlideIn)
                .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#header_pin_trigger", duration: "32%", offset: "-40%"})
                .setPin("#header_pin", {pushFollowers: false})
                .addTo(controller);

   new ScrollMagic.Scene({triggerElement: "#indimg-2-trigger", duration: "500%"})
                .setPin("#indimg-1", {pushFollowers: false})
                .addTo(controller);

              