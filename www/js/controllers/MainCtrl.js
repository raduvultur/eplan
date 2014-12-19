angular.module('App').controller("MainCtrl", ["$scope", "$state", "$log", "$ionicSideMenuDelegate", "$ionicNavBarDelegate", "$ionicModal", "$ionicPopup", "$window", "$interval", "LocalStorageService", "EventService", MainCtrl]);
function MainCtrl($scope, $state, $log, $ionicSideMenuDelegate, $ionicNavBarDelegate, $ionicModal, $ionicPopup, $window, $interval, LocalStorageService, EventService) {

  if (LocalStorageService.getObject('userinfo').username) {
    // got the userinfo
  }  else {
    $state.go('eplanmenu.settings');
  }
  
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
  
  $scope.user = LocalStorageService.getObject('userinfo');
  
  $scope.events = EventService.list();
  
  $scope.goBack = function() {
    $ionicNavBarDelegate.back();
  };

  var createModal = function() {
      
  };  

  $scope.openModalNewEvent = function() {
    $scope.event = {};
    $scope.event.guid = EventService.generateUUID();
    $ionicModal.fromTemplateUrl('js/templates/modalEvent.html', {
      scope: $scope,
      animation: 'slide-in-up',
      focusFirstInput: true
    }).then(function(modal) {
      $scope.modalEvent = modal;
      $scope.modalEvent.show();
    });
  };
  
  $scope.closeModalEvent = function() {
    $scope.modalEvent.hide();
    $scope.events = EventService.list();
  };
  
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    if ($scope.modalEvent)
      $scope.modalEvent.remove();
  });
  
  $scope.$on('LastRepeaterElement', function(){
    /*var controls = document.querySelectorAll('.card-drag');
    [].forEach.call(controls, function (ctl) {
      var element = angular.element(ctl);               
      $ionicGesture.on('dragleft', function (event) {
        console.log('event ', event.srcElement);
      }, element);
    });*/
  });
  
  $scope.stopDrag = function(){
    $ionicSideMenuDelegate.canDragContent(false);
  };
  
  $scope.letDrag = function(){
    $ionicSideMenuDelegate.canDragContent(true);
  };

 // Confirm delete dialog
 $scope.showConfirm = function(eventId) {
   var selectedEvent = EventService.getEvent(eventId);
   var confirmPopup = $ionicPopup.confirm({
     title: 'Delete Event',
     template: 'Are you sure you want to delete '+selectedEvent.name+'?'
   });
   confirmPopup.then(function(res) {
     if(res) {
       console.log('Deleting '+selectedEvent.name);
       EventService.deleteEvent(eventId);
       $scope.events = EventService.list();
     }
   });
 }; 
 
  //knobs
  $scope.knobOptions = {
      'height':60,
      'width':60,
      'displayInput': true,
      'readOnly': true,
      'fgColor':'#4A87EE',
      'bgColor':'#F9F9F9'
  };
}