angular.module('App').controller("ModalEventCtrl", ["$scope", "EventService", ModalEventCtrl]);
function ModalEventCtrl($scope, EventService) {
  
  if ($scope.event.name){
    $scope.edit = true;
    $scope.modalEventTitle = 'Edit Event';
  } else {
    $scope.edit = false;
    $scope.modalEventTitle = 'New Event';
    $scope.event = {};
    $scope.event.ID = 0;
    $scope.event.guid = EventService.generateUUID();
  }
  
  $scope.saveEvent = function() {
    if ($scope.event.name.length===0)
      return;
    
    if ($scope.edit){
      console.log('Created Event', $scope.event);
    } else {
      console.log('Edited Event', $scope.event);
    }
    
    EventService.saveEvent($scope.event);
    
    $scope.closeModalEvent();
  };
  
}