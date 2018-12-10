$(window).scroll(function(){
    $(".mouse").css("opacity", 1 - $(window).scrollTop() / 250);
  });