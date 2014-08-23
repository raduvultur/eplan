angular.module('App', ['ionic']);

angular.module('App').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('eplanmenu', {
      url: '/eplan',
      abstract: true,
      templateUrl: 'js/templates/eplanMenu.html'
    })
    .state('eplanmenu.home', {
      url: '/home',
      views: {
        'menuContent' :{
          templateUrl: 'js/templates/home.html',
          controller: 'MainCtrl'
        }
      }
    })
    .state('eplanmenu.settings', {
      url: '/settings',
      views: {
        'menuContent' :{
          templateUrl: 'js/templates/settings.html',
          controller: 'SettingsCtrl'
        }
      }
    })     
    .state('eplanmenu.categories', {
      url: '/categories',
      views: {
        'menuContent' :{
          templateUrl: 'js/templates/categories.html',
          controller: 'CategoriesCtrl'
        }
      }
    })
    .state('eplanmenu.aroundme', {
      url: '/aroundme',
      views: {
        'menuContent' :{
          templateUrl: 'js/templates/aroundme.html',
          controller: 'AroundMeCtrl'
        }
      }
    })    
    .state('eplanmenu.suppliers', {
      url: '/suppliers/:categoryId',
      views: {
        'menuContent' :{
          templateUrl: 'js/templates/suppliers.html',
          controller: 'CategorySuppliersCtrl'
        }
      }
    })
    .state('eplanmenu.supplierdetails', {
      url: '/supplier/:supplierId',
      views: {
        'menuContent' :{
          templateUrl: 'js/templates/supplierDetails.html',
          controller: 'SupplierDetailsCtrl'
        }
      }
    })    
    .state('eplanmenu.eventdetails', {
      url: '/event/:eventId',
      views: {
        'menuContent' :{
          templateUrl: 'js/templates/eventDetails.html',
          controller: 'EventDetailsCtrl'
        }
      }
    });
    
  $urlRouterProvider.otherwise("/eplan/home");
});

angular.module('App').run([
    '$state', '$templateCache', '$http', (function ($state, $templateCache, $http) {
        var url;
        /*for (var i in $route.routes) {
            if ($route.routes[i].preload) {
                if (url = $route.routes[i].templateUrl) {
                    $http.get(url, { cache: $templateCache });
                }
            }
        }*/
    })
]);

angular.module('App').directive('emitLastRepeaterElement', function() {
  return function(scope) {
    if (scope.$last){
      scope.$emit('LastRepeaterElement');
    }
  };
});
