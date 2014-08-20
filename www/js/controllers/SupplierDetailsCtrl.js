angular.module('App').controller("SupplierDetailsCtrl", ["$scope", "$stateParams", "$ionicModal", "SuppliersService", SupplierDetailsCtrl]);
function SupplierDetailsCtrl($scope, $stateParams, $ionicModal, SuppliersService) {

  $scope.supplier = SuppliersService.getSupplier($stateParams.supplierId);
 
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
  
}