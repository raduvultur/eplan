angular.module('App').controller("EventDetailsCtrl", ["$scope", "$stateParams", "$ionicModal", "EventService", EventDetailsCtrl]);
function EventDetailsCtrl($scope, $stateParams, $ionicModal, EventService) {

  $scope.event = EventService.getEvent($stateParams.eventId);

  $scope.eventSuppliers = [
    { id: 1, categoryId: 1, name: 'Karena', thumb: 'ionic.png', image: 'flowers.png', email:'office@karena.ro', url: 'https://www.karena.ro', phone: '+33 65 11 22 33', address: '21 Rue Maginot, 75001 Paris, France' },
    { id: 2, categoryId: 1, name: 'Fashion Princess', thumb: 'ionic.png', image: 'flowers.png', email:'office@fashionprincess.ro', url: 'https://www.fashionprincess.ro', phone: '+33 65 11 22 33', address: '21 Rue Maginot, 75001 Paris, France' },
    { id: 3, categoryId: 1, name: 'Sophia Princess', thumb: 'ionic.png', image: 'flowers.png', email:'office@sophiaprincess.ro', url: 'https://www.sophiaprincess.ro', phone: '+33 65 11 22 33', address: '21 Rue Maginot, 75001 Paris, France' },
    { id: 4, categoryId: 1, name: 'Sposa Toscana', thumb: 'ionic.png', image: 'flowers.png', email:'office@sposatoscana.ro', url: 'https://www.sposatoscana.ro', phone: '+33 65 11 22 33', address: '21 Rue Maginot, 75001 Paris, France' },
    { id: 5, categoryId: 1, name: 'Noela Style', thumb: 'ionic.png', image: 'flowers.png', email:'office@noelastyle.ro', url: 'https://www.noelastyle.ro', phone: '+33 65 11 22 33', address: '21 Rue Maginot, 75001 Paris, France' },
    
    { id: 6, categoryId: 2, name: 'Cofetaria Sava', thumb: 'ionic.png', image: 'flowers.png', email:'office@noelastyle.ro', url: 'https://www.noelastyle.ro', phone: '+33 65 11 22 33', address: '21 Rue Maginot, 75001 Paris, France' },
    { id: 7, categoryId: 2, name: 'Cofetaria Codrina', thumb: 'ionic.png', image: 'flowers.png', email:'office@noelastyle.ro', url: 'https://www.noelastyle.ro', phone: '+33 65 11 22 33', address: '21 Rue Maginot, 75001 Paris, France' },
    { id: 8, categoryId: 2, name: 'Cofetaria Trandafirul', thumb: 'ionic.png', image: 'flowers.png', email:'office@noelastyle.ro', url: 'https://www.noelastyle.ro', phone: '+33 65 11 22 33', address: '21 Rue Maginot, 75001 Paris, France' },
    { id: 9, categoryId: 2, name: 'Cofetaria Adi Dia', thumb: 'ionic.png', image: 'flowers.png', email:'office@noelastyle.ro', url: 'https://www.noelastyle.ro', phone: '+33 65 11 22 33', address: '21 Rue Maginot, 75001 Paris, France' }
  ];

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