angular.module('App').directive('eventCard', function() {
  return {
      restrict: 'AE',
      replace: 'true',
      templateUrl: 'js/directives/templates/eventCard.html'
  };
});