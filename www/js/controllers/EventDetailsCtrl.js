angular.module('App').controller("EventDetailsCtrl", ["$scope", "$state", "$stateParams", "$ionicModal", "$ionicPopup", "EventService", EventDetailsCtrl]);
function EventDetailsCtrl($scope, $state, $stateParams, $ionicModal, $ionicPopup, EventService) {

  $scope.event = EventService.getEvent($stateParams.eventId);
  $scope.eventSuppliers = EventService.suppliers($scope.event.guid);

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
  
  $scope.addSuppliers = function() {
    $state.go('eplanmenu.categories');
  };
  
  $scope.removeSupplier = function(eventGuid, idsupplier) {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Delete Supplier',
      template: 'Are you sure you want to delete this supplier?'
    });
    confirmPopup.then(function(res) {
      if(res) {
        EventService.removeSupplier(eventGuid, idsupplier);
        $scope.eventSuppliers = EventService.suppliers($scope.event.guid);
      }
    });
  };
  
}