 divisor = 5;

 var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onLeave'
      }
    });


  new ScrollMagic.Scene({triggerElement: "#logo_trigger", duration: "35%"})
                .setTween(logoSlideIn)
                .addIndicators({name: "logo"})
                .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#header_pin_trigger", duration: "65%"})
                .setPin("#header_pin", {pushFollowers: false})
                .addIndicators({name: "header_pin"})
                .addTo(controller);
