angular.module('App').controller("PopoverAddToEventCtrl", ["$scope", "EventService", PopoverAddToEventCtrl]);
function PopoverAddToEventCtrl($scope, EventService) {
    
  $scope.events = EventService.list();
  
  $scope.addToEvent = function(eventGuid){
    EventService.addSupplier(eventGuid, $scope.supplier.ID);
    $scope.closePopover();
  };
  
}