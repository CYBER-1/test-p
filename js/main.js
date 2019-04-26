/*$(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });
  
  

$(function () {
  $(window).scroll(function () {
    var scrollval = $(window).scrollTop();
    if (scrollval < 50){
      $("#topname").hide();
    }
    else{
      $("#topname").show();
    }
  });
});


$(function() {
  var documentEl = $(document),
  fadeElem = $('.overflow-mykola');

  documentEl.on('scroll', function() {
    var currScrollPos = documentEl.scrollTop();

    fadeElem.each(function() {
      var $this = $(this),
          elemOffsetTop = $this.offset().top;
      if (currScrollPos > elemOffsetTop) $this.css('opacity', 1 -(currScrollPos-elemOffsetTop)/400);
    });
  });
});
*/
/* Slides */

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
  

  