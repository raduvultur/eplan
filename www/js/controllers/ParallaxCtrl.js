angular.module('App').controller("ParallaxCtrl", ["$scope", ParallaxCtrl]);
function ParallaxCtrl($scope) {
    
  //Timisoara, Piata Unirii
  $scope.myLatlng = new google.maps.LatLng(45.755139, 21.232109);
  
  var mapOptions = {
    center: $scope.myLatlng,
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    draggable: false,
    scrollwheel: false,
    zoomControl: false,
    keyboardShortcuts: false
  };
      
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  
  var marker = new google.maps.Marker({
    position: $scope.myLatlng,
    map: map,
    title: 'Continental'
  });
  marker.setAnimation(google.maps.Animation.DROP);
  marker.setClickable(false);
  
}

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