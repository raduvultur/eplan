angular.module('App').controller("CategoriesCtrl", ["$scope", "SuppliersService", CategoriesCtrl]);
function CategoriesCtrl($scope, SuppliersService) {
  $scope.categories = SuppliersService.listCategories();
}