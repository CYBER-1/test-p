
'use strict';

$(function() {

  //settings for slider
  var width = '100vh';
  var animationSpeed = 1500;
  var pause = 20000;
  var currentSlide = 1;

  //cache DOM elements
  var $slider = $('#cs1');
  var $slideContainer = $('.slides', $slider);
  var $slides = $('.slide', $slider);

  var interval;

  function startSlider() {
    interval = setInterval(slide, pause);
  }

  function slide() {
    $slideContainer.animate({
      'margin-left': '-=' + width
    }, animationSpeed, function() {
      if (++currentSlide === $slides.length) {
        currentSlide = 1;
        $slideContainer.css('margin-left', 0);
      }
    });
  }

  function pauseSlider() {
    clearInterval(interval);
  }

  $slideContainer
    .on('mouseenter', pauseSlider)
    .on('mouseleave', startSlider)
    .on('click', slide);

  startSlider();


});
  

  