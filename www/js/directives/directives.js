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