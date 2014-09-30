angular.module('App').controller("SettingsCtrl", ["$scope", "$state", "LocalStorageService", SettingsCtrl]);
function SettingsCtrl($scope, $state, LocalStorageService) {
  
  $scope.signIn = function(user) {
    console.log('Setup user info ', user);
    LocalStorageService.setObject('userinfo', user);
    $state.go('eplanmenu.home');
  };
  
  $scope.deleteDB = function() {
    console.log('Drop DB');
    var eplanDB = new localStorageDB('eplan', localStorage);
    eplanDB.drop('eplan');
    
    LocalStorageService.clear();
    $scope.events = {};
    $scope.user = {};
    InitDB();
  };
  
}