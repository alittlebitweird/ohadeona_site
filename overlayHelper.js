$(document).on('click', '.contact', function() {
  $('#supreme-overlay').fadeIn('400');
});

$(document).on('click', 'submit', function() {
  $('#supreme-overlay').fadeOut('400');
});

$(document).on('click', '.close', function() {
  $('#supreme-overlay').fadeOut('400');
});

