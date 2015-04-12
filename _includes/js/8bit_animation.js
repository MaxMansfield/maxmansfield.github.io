
$(window).load(function() {
  window.postCount = 1;
  window.slidingPost= false;
  window.navb = $('.navbar');

  lastScroll = 0;
 $(window).scroll(function() {
    st = $(this).scrollTop();

    if(st < lastScroll) {
      window.navb.show();
    } else {
      window.navb.hide();
    }
    lastScroll = st;
    footer = $('div.post_pagin');
    atCard = ($(this).scrollTop() > ($('#page_post' + window.postCount).height() / 2));
    atBottom = ($(window).scrollTop() + $(window).height() >= $(document).height() - 512);

    if ((atCard || atBottom || footer.isOnScreen) && !window.slidingPost) 
      slidePost();
  });
});