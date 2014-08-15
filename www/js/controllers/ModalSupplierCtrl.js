angular.module('App').controller("ModalSupplierCtrl", ["$scope", ModalSupplierCtrl]);
function ModalSupplierCtrl($scope) {
  
  $scope.newSupplier = {}; 
  
  $scope.createSupplier = function() {
    console.log('Create Supplier', $scope.newSupplier);
    $scope.closeModalSupplier();
  };
  
}