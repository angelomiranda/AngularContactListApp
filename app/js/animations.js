var carAnimations = angular.module('carAnimations', []);

carAnimations.animation('.mainImg', function() {

  var animateUp = function(element, className, done) {

    jQuery('.mainImg').css({
      top: -500,
      position: 'absolute'
    });

    element.css({
      position: 'absolute',
      top: -500,
      left: 0
    });

    jQuery(element).animate({
      top: 0
    }, done);

    return function(cancel) {
      if(cancel) {
        element.stop();
      }
    };
  }

  var animateDown = function(element, className, done) {

    element.css({
      position: 'absolute',
      left: 0,
      top: 0
    });

    jQuery(element).animate({
      top: -500
    }, done);

    return function(cancel) {
      if(cancel) {
        element.stop();
      }
    };
  }

  return {
    addClass: animateUp,
    removeClass: animateDown
  };
});
