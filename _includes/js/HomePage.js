 divisor = 5;

 var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onLeave'
      }
    });


  new ScrollMagic.Scene({triggerElement: "#logo_trigger", duration: "35%"})
                .setTween(logoSlideIn)
                .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#header_pin_trigger", duration: "45%", offset: "-40%"})
                .setPin("#header_pin", {pushFollowers: false})
                .addTo(controller);
