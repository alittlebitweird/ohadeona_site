var ready; 
ready = function() { 

$("a[href^=#]").click(function(e) { e.preventDefault(); var dest = $(this).attr('href'); console.log(dest); $('html,body').animate({ scrollTop: $(dest).offset().top }, 500); });

}; 
$(document).ready(ready); 
$(document).on('page:load', ready);
