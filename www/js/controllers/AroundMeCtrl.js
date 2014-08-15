angular.module('App').controller("AroundMeCtrl", ["$scope", "$ionicLoading", "$compile", AroundMeCtrl]);
function AroundMeCtrl($scope, $ionicLoading, $compile) {

      function initialize() {
        var myLatlng = new google.maps.LatLng(45.757924, 21.228982);
        
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        
        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'>Info</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Piata Unirii (Timisoara)'
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });

        $scope.map = map;
      }
      //google.maps.event.addDomListener(window, 'load', initialize);  
      ionic.Platform.ready(initialize);
      //initialize();
      
      $scope.centerOnMe = function() {
        if(!$scope.map) {
          return;
        }
        
        var geo_timeout = 20000;

        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false,
          duration: geo_timeout
        });

        var geo_options = {
          //enableHighAccuracy: true,
          timeout: geo_timeout,
          maximumAge: 20000 //cache for 20s
        };

        function geo_success(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();
        };
    
        function geo_error(err) {
          alert('Unable to get location: ' + error.message);
          $scope.loading.hide();
        };

        navigator.geolocation.getCurrentPosition(geo_success, geo_error, geo_options);
      };
      
      $scope.clickTest = function() {
        alert('Example of infowindow with ng-click')
      };  
}