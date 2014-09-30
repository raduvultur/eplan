angular.module('App').directive('stellax', function ($timeout) {
	return {
		restrict: 'A',
		link: function ($scope, $element, $attr) {

			$timeout(function () {
			  $('.scroll').stellar({
          scrollProperty: 'transform',
          positionProperty: 'transform',
          horizontalScrolling: false
          //,verticalOffset: -150
        });
      });

		}
	};
});

angular.module('App').directive('emitLastRepeaterElement', function() {
  return function(scope) {
    if (scope.$last){
      scope.$emit('LastRepeaterElement');
    }
  };
});