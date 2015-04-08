 window.slidingFooter = false;
  ran_already = false;

  function hide_elements(){

    for(i=1; i <= window.total;i++){
      post = document.getElementById("page_post-" + i);

      if (post)
        TweenLite.to(post, 0, {position: "absolute", left: "-=500%",force3D:true });
    }

  }

  function slideFooter(){
    page_footer  = $('div.post_pagin');
    if ( window.slidingFooter == false && window.postCount < window.total){
      window.slidingFooter = true;
      TweenLite.to(page_footer, 0.25 ,{position: "relative", bottom: "-50px" ,  force3D:true, ease:Power4.easeIn,onComplete: slidePost});
    } else {
      window.slidingFooter = false; 
      TweenLite.to(page_footer, 2 ,{position: "relative", bottom: "+0px", force3D:true,  ease:Power4.easeOut});
    }
  }


  function slidePost(){
    post = document.getElementById("page_post-" + (window.postCount ));
    window.postCount = window.postCount + 1;
    TweenLite.to(post, 1.75, {left: "0%",position: "relative", force3D:true, ease:Power4.easeOut, onComplete:slideFooter});
  }
