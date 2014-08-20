angular.module('App').controller("MainCtrl", ["$scope", "$state", "$log", "$ionicSideMenuDelegate", "$ionicNavBarDelegate", "$ionicModal", "LocalStorageService", "EventService", MainCtrl]);
function MainCtrl($scope, $state, $log, $ionicSideMenuDelegate, $ionicNavBarDelegate, $ionicModal, LocalStorageService, EventService) {

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
  
  $scope.deleteEvent = function(eventID) {
    EventService.deleteEvent(eventID);
    $scope.events = EventService.list();
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
  
  $scope.openModalEditEvent = function(eventID) {
    $scope.event = EventService.getEvent(eventID);
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
  
}