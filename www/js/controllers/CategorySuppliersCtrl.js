angular.module('App').controller("CategorySuppliersCtrl", ["$scope", "$stateParams", "$ionicModal", "SuppliersService", CategorySuppliersCtrl]);
function CategorySuppliersCtrl($scope, $stateParams, $ionicModal, SuppliersService) {

  $scope.categoryId = $stateParams.categoryId;
  $scope.categoryName = SuppliersService.getCategoryName($stateParams.categoryId);
  $scope.categorySuppliers = SuppliersService.listCategorySuppliers($stateParams.categoryId);
  $scope.filterCapacity = 0;
  
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

};