$(document).ready(function() {
  
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 380) {
      $('#top').addClass('fixed');
      $('#music').addClass('above-fold');
    }
    if ($(window).scrollTop() < 380) {
      $('#top').removeClass('fixed');
      $('#music').removeClass('above-fold')
    }
  });
});
