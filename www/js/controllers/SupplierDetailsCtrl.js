angular.module('App').controller("SupplierDetailsCtrl", ["$scope", "$stateParams", "SuppliersService", SupplierDetailsCtrl]);
function SupplierDetailsCtrl($scope, $stateParams, SuppliersService) {

  $scope.supplier = SuppliersService.getSupplier($stateParams.supplierId);
 
  $scope.callSupplier = function() {
    console.log('Call Supplier ', $scope.supplier.phone);
  }
 
}