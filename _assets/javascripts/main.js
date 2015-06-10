//= require vendor/jquery-1.11.0
//= require vendor/jquery.fitvids.js
//= require vendor/promoter.js

function init() {
	// Add your init code
}

function setupGallery() {
  $('.gallery img').click(function(event) {
    $('.gallery-image-zoomed-in').html($(event.target).clone());
    $('.gallery-image-zoomed-in, .backdrop').show();
  });
  
  $('.backdrop, .gallery-image-zoomed-in').click(function(event) {
    $('.backdrop, .gallery-image-zoomed-in').hide();
  });
}

$(document).ready(function() {
  $(".content").fitVids();
  
  setupGallery();
  init();
});