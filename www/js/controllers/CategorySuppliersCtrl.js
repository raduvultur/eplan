angular.module('App').controller("CategorySuppliersCtrl", ["$scope", "$stateParams", "SuppliersService", CategorySuppliersCtrl]);
function CategorySuppliersCtrl($scope, $stateParams, SuppliersService) {

  $scope.categoryName = SuppliersService.getCategoryName($stateParams.categoryId);
  $scope.categorySuppliers = SuppliersService.listCategorySuppliers($stateParams.categoryId);
  
}