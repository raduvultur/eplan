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
          templateUrl: 'js/templates/home.html'
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
    });
    
  $urlRouterProvider.otherwise("/eplan/home");
});