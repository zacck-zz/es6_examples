'use strict';
$(function(){

  //variables
  var width = 720;
  var animatinSpeed = 1000;
  var pause = 3000;
  var currentSlide = 1;

  //cache DOM
  var $slider = $('#slider');
  var $slideContainer = $slider.find('.slides');
  var $slides = $slideContainer.find('.slide');

  var interval;

  function startSlider() {
    //set Interval
    interval = setInterval(function() {
      //animate margin left
      $slideContainer.animate({'margin-left':'-='+width}, animatinSpeed, function(){
        currentSlide++;
          //if its last slide go to pos 1
        if(currentSlide === $slides.length) {
          currentSlide = 1;
          $slideContainer.css('margin-left',0);
        }
      });
    }, pause);
  }

  function stopSlider()
  {
    clearInterval(interval);
  }

  //listen for mouse over and pause
  $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

  startSlider();

});
