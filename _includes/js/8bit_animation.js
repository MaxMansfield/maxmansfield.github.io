
$(window).load(function() {
  window.postCount = 1;
  window.navb = $('.navbar');
  if ($('div.post_pagin').isOnScreen)
    slideFooter();


    lastScroll = 0;
 $(window).scroll(function() {
    st = $(this).scrollTop();

    if(st < lastScroll) {
      window.navb.show();
    } else {
      window.navb.hide();
    }
    lastScroll = st;

    if ( ($(this).scrollTop() > ($('#page_post' + window.postCount).height() / 3)) || $('div.post_pagin').isOnScreen() ) { 
      slideFooter();
    }
  });
});


