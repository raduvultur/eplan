angular.module('App').controller("MainCtrl", ["$scope", "$state", "$log", "$ionicSideMenuDelegate", "$ionicModal", "$ionicNavBarDelegate", "LocalStorageService", MainCtrl]);
function MainCtrl($scope, $state, $log, $ionicSideMenuDelegate, $ionicModal, $ionicNavBarDelegate, LocalStorageService) {

  if (!LocalStorageService.getObject('userinfo').username) {
    $state.go('eplanmenu.settings');
  }  
  
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
  
  $scope.user = LocalStorageService.getObject('userinfo');
  
  $scope.events = [
    { name: 'Wedding', id: 1, icon:'ion-bag' },
    { name: 'Davids Birthday Party', id: 2, icon:'ion-icecream' }
  ];  
  
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
  
  $scope.goBack = function() {
    $ionicNavBarDelegate.back();
  };  
}