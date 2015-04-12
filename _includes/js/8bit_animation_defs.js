 $.fn.isOnScreen = function(){
  var win = $(window);

  var viewport = {
    top : win.scrollTop(),
    left : win.scrollLeft()
  };
  viewport.right = viewport.left + win.width();
  viewport.bottom = viewport.top + win.height();

  var bounds = this.offset();
  bounds.right = bounds.left + this.outerWidth();
  bounds.bottom = bounds.top + this.outerHeight();

  return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};

function slidePost(){
  window.slidingPost = true;
  if (window.postCount < window.total){
    post = document.getElementById("page_post-" + (window.postCount ));
    TweenLite.fromTo(post, 1.75, {left: "-200%"},{left: "0%",position: "relative", display: "block", force3D:true, ease:Power4.easeOut,onComplete: increment_post});
  } else {
    showFooter();
  }
}

function showFooter() {
 if (window.postCount == window.total) { 
  page_footer  = $('#arch_btn');
  TweenLite.fromTo(page_footer, 0.25 ,{bottom: "-500px"},{position: "relative", bottom: "0", display: "block", force3D:true, ease:Power4.easeIn,onComplete: increment_post});
 }
}
function increment_post(){
  window.slidingPost = false;
  window.postCount = window.postCount + 1;
}