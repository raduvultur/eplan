angular.module('App').controller("EventDetailsCtrl", ["$scope", "$stateParams", "$ionicModal", "EventService", EventDetailsCtrl]);
function EventDetailsCtrl($scope, $stateParams, $ionicModal, EventService) {

  $scope.event = EventService.getEvent($stateParams.eventId);

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