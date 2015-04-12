
$(window).load(function() {
  var navb = $('.navbar');
  var lastScroll = 0;
});

 $(window).scroll(function() {
    st = $(this).scrollTop();

    if(st < lastScroll) {
      window.navb.show();
    } else {
      window.navb.hide();
    }
    lastScroll = st;
});