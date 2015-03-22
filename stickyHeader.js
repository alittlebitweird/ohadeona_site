$(document).ready(function() {
  
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 377) {
      $('#top').addClass('fixed');
      $('#music').css({'margin': '75px auto 0 auto'});
    }
    if ($(window).scrollTop() < 377) {
      $('#top').removeClass('fixed');
      $('#music').css({'margin': '0 auto'});
    }
  });
});
