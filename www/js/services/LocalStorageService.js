function LocalStorageService ($window) {
  var LocalStorageService = {};
  
  LocalStorageService.set = function(key, value) {
      $window.localStorage[key] = value;
  };
    
  LocalStorageService.get = function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
  };
    
  LocalStorageService.setObject = function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
  };
  
  LocalStorageService.getObject = function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
  };
    
  return LocalStorageService;
}
angular.module('App').factory('LocalStorageService', ['$window', LocalStorageService]);