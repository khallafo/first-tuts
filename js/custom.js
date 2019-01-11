//start our js
$(document).ready(function () {
    "use strict";
    //start coursel
    $('.carousel').carousel({
        
        interval:500
    });
    $(".testimonials .carousel-indicators li").click(function() {
    $(this).addClass("active").siblings().removeClass("active")
});
    
    //start our select box
    
    $(".option-box .check").click(function(){
        
        $(".option-box .color-option").fadeToggle();
        
    });
   
    //start loading
$(window).on('load', function(){
     $("body").css("overflow","auto");
  $(".loading").fadeOut(5000);

});
    
    //nicescroll
    $("html").niceScroll({
cursorcolor:" #E60024",
cursorwidth:"10px"
});
    
    

var scrollButton = $("#scroll-top")
 
 $(window).on("scroll",function(){
  console.log($(this).scrollTop());
  
  if($(this).scrollTop()>=700)
   {
    scrollButton.show();
   }
  else
   {
    scrollButton.hide();
   }
  
  scrollButton.click(function(){
   $("html,body").stop().animate({scrollTop:0},600);
  });
 });
  
});
    