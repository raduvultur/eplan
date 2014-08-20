angular.module('App').controller("ModalSupplierCtrl", ["$scope", ModalSupplierCtrl]);
function ModalSupplierCtrl($scope) {
  
  if ($scope.supplier){
    $scope.edit = true;
    $scope.modalSupplierTitle = 'Edit Supplier';
  } else {
    $scope.edit = false;
    $scope.modalSupplierTitle = 'New Supplier';
  }
  
  $scope.saveSupplier = function() {
    if ($scope.edit){
      console.log('Created Supplier', $scope.supplier);
    } else {
      console.log('Edited Supplier', $scope.supplier);
    }
    
    $scope.closeModalSupplier();
  };
  
}