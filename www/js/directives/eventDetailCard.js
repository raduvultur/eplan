angular.module('App').directive('eventDetailCard', function() {
  return {
      restrict: 'AE',
      replace: 'true',
      templateUrl: 'js/directives/templates/eventDetailCard.html'
  };
});