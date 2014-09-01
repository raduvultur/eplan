angular.module('App').controller("SupplierDetailsCtrl", ["$scope", "$stateParams", "$ionicModal", "SuppliersService", "FeedService", SupplierDetailsCtrl]);
function SupplierDetailsCtrl($scope, $stateParams, $ionicModal, SuppliersService, FeedService) {

  $scope.supplier = SuppliersService.getSupplier($stateParams.supplierId);
 
//----- MAP

  //Supplier coordonates
  $scope.myLatlng = new google.maps.LatLng($scope.supplier.latitude, $scope.supplier.longitude);
  
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
    title: $scope.supplier.name
  });
  marker.setAnimation(google.maps.Animation.DROP);
  marker.setClickable(false);

//----- MAP END
 
  $scope.callSupplier = function() {
    console.log('Call Supplier ', $scope.supplier.phone);
  }

  $ionicModal.fromTemplateUrl('js/templates/modalSupplier.html', {
    scope: $scope,
    animation: 'slide-in-up',
    focusFirstInput: true
  }).then(function(modal) {
    $scope.modalSupplier = modal;
  });
  $scope.openModalSupplier = function() {
    $scope.modalSupplier.show();
  };
  $scope.closeModalSupplier = function() {
    $scope.modalSupplier.hide();
  }; 
  
	$scope.loadFeed = function(url, addFeed) {
		$scope.setLoading(true);
		FeedService.get(url).then(function(result) {
			//console.log(result);
			if (result.error) {
				alert("ERROR " + result.error.code + ": " + result.error.message + "\nurl: " + url);
				$scope.setLoading(false);
			}
			else {
				$scope.feed_result = result.feed;
				$scope.setLoading(false);
			}
		});
	};
	
	$scope.mediaOne = function(entry) { // return first media object for 'entry'
		return (entry && entry.mediaGroups) ? entry.mediaGroups[0].contents[0] : {url:''};
	}	
	
	$scope.setLoading = function(loading) {
		$scope.isLoading = loading;
	}
		
}