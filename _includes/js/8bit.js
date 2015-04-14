snippet = $('#post_header');
snippet.css("display", "block");
TweenMax.fromTo(snippet , 0.6, {position: "relative" , top: "-2000px"}, { top: "0px", display:'block', ease:Power3.easeOut}); 

posts = $('#all_posts');
posts.css("display", "block");
TweenMax.fromTo(posts , .5, {position: "relative" , left: "-2000px"}, { left: "0px", display:'block', ease:Power3.easeOut}); 

sidebar = $('#sidebar');
sidebar.css("display", "block");
TweenMax.fromTo(sidebar, .8, {position: "relative" , bottom: "-2000px"}, { bottom: "0px", display:'block', ease:Power3.easeOut});