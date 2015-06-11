//= require vendor/jquery-1.11.0
//= require vendor/jquery.backstretch.js
//= require vendor/jquery.fitvids.js
//= require vendor/promoter.js
//= require vendor/cookiechoices.js

function init() {
  setupVideos();
  setupGallery();
  setupBackgroundImage();
}

function setupVideos() {
  $(".content").fitVids();  
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

function setupBackgroundImage() {
  
}