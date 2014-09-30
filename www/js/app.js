angular.module('App', ['ionic', 'ui.calendar']);

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
    .state('eplanmenu.calendar', {
      url: '/calendar',
      views: {
        'menuContent' :{
          templateUrl: 'js/templates/calendar.html',
          controller: 'CalendarCtrl'
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

angular.module('App').run(['$state', '$templateCache', '$http', (function ($state, $templateCache, $http) {
  InitDB();
  $http.get('js/templates/categories.html', { cache: $templateCache });
  $http.get('js/templates/calendar.html', { cache: $templateCache });
  $http.get('js/templates/eventDetails.html', { cache: $templateCache });
  $http.get('js/templates/modalSupplier.html', { cache: $templateCache });
  $http.get('js/templates/modalEvent.html', { cache: $templateCache });
  $http.get('js/templates/suppliers.html', { cache: $templateCache });
  $http.get('js/templates/supplierDetails.html', { cache: $templateCache });
  $http.get('js/directives/templates/eventDetailCard.html', { cache: $templateCache });
    })
]);

function InitDB () {
  console.log('ePlan is initializing...');
  // Initialise. If the database doesn't exist, it is created
  var eplanDB = new localStorageDB('eplan', localStorage);

  if( !eplanDB.tableExists('categories') ) {
  
      // create the 'events' table
      eplanDB.createTable('categories', ['iid', 'name', 'icon']);
  
      // insert some data
      eplanDB.insert('categories', {iid: '1', name: 'Bridal Stores', icon: 'ion-bag'});
      eplanDB.insert('categories', {iid: '2', name: 'Cakes', icon: 'ion-icecream'});
      eplanDB.insert('categories', {iid: '3', name: 'DJ & Entertainment', icon: 'ion-music-note'});
      eplanDB.insert('categories', {iid: '4', name: 'Florists', icon: 'ion-leaf'});
      eplanDB.insert('categories', {iid: '5', name: 'Hair & Makeup', icon: 'ion-scissors'});
      eplanDB.insert('categories', {iid: '6', name: 'Invitations', icon: 'ion-document-text'});
      eplanDB.insert('categories', {iid: '7', name: 'Photographers', icon: 'ion-camera'});
      eplanDB.insert('categories', {iid: '8', name: 'Transportation', icon: 'ion-model-s'});
      eplanDB.insert('categories', {iid: '9', name: 'Venues', icon: 'ion-wineglass'});
      eplanDB.insert('categories', {iid: '10', name: 'Videographers', icon: 'ion-videocamera'});

      // commit the database to localStorage
      // all create/drop/insert/update/delete operations should be committed
      eplanDB.commit();
  } 
  
  if( !eplanDB.tableExists('suppliers') ) {
  
      // create the 'events' table
      eplanDB.createTable('suppliers', ['categoryId', 'name', 'feedrss', 'email', 'url', 'phone', 'address', 'latitude', 'longitude', 'capacity']);
      
      eplanDB.insert('suppliers', { categoryId: 1, name: 'Karena', feedrss: 'http://feeds.feedburner.com/TEDTalks_video', email:'office@karena.ro', url: 'https://www.karena.ro', phone: '+33 65 11 22 33', address: '21 Rue Maginot, 75001 Paris, France' });
      eplanDB.insert('suppliers', { categoryId: 1, name: 'Fashion Princess', feedrss: 'http://feeds.feedburner.com/DigitalPhotographySchool', email:'office@fashionprincess.ro', url: 'https://www.fashionprincess.ro', phone: '+33 65 11 22 33', address: '21 Rue Maginot, 75001 Paris, France' });
      eplanDB.insert('suppliers', { categoryId: 1, name: 'Sophia Princess', feedrss: 'http://scottkelby.com/feed/', email:'office@sophiaprincess.ro', url: 'https://www.sophiaprincess.ro', phone: '+33 65 11 22 33', address: '21 Rue Maginot, 75001 Paris, France' });
      eplanDB.insert('suppliers', { categoryId: 1, name: 'Sposa Toscana', feedrss: 'http://feeds.feedburner.com/TEDTalks_video', email:'office@sposatoscana.ro', url: 'https://www.sposatoscana.ro', phone: '+33 65 11 22 33', address: '21 Rue Maginot, 75001 Paris, France' });
      eplanDB.insert('suppliers', { categoryId: 1, name: 'Noela Style', feedrss: 'http://feeds.feedburner.com/TEDTalks_video', email:'office@noelastyle.ro', url: 'https://www.noelastyle.ro', phone: '+33 65 11 22 33', address: '21 Rue Maginot, 75001 Paris, France' });
      
      eplanDB.insert('suppliers', { categoryId: 2, name: 'Cofetaria Sava', feedrss: 'http://feeds.feedburner.com/TEDTalks_video', email:'office@noelastyle.ro', url: 'https://www.noelastyle.ro', phone: '+33 65 11 22 33', address: '21 Rue Maginot, 75001 Paris, France' });
      eplanDB.insert('suppliers', { categoryId: 2, name: 'Cofetaria Codrina', feedrss: 'http://feeds.feedburner.com/TEDTalks_video', email:'office@noelastyle.ro', url: 'https://www.noelastyle.ro', phone: '+33 65 11 22 33', address: '21 Rue Maginot, 75001 Paris, France' });
      eplanDB.insert('suppliers', { categoryId: 2, name: 'Cofetaria Trandafirul', feedrss: 'http://feeds.feedburner.com/TEDTalks_video', email:'office@noelastyle.ro', url: 'https://www.noelastyle.ro', phone: '+33 65 11 22 33', address: '21 Rue Maginot, 75001 Paris, France' });
      eplanDB.insert('suppliers', { categoryId: 2, name: 'Cofetaria Adi Dia', feedrss: 'http://feeds.feedburner.com/TEDTalks_video', email:'office@cofetariaadidia.ro', url: 'http://cofetariaadidia.ro/', phone: '+40 256 488 512', address: 'Strada Aries 20, Timisoara', latitude: 45.739382, longitude: 21.239782 });

      eplanDB.insert('suppliers', { categoryId: 4, name: 'Carm d\'Or', feedrss: 'http://feeds.feedburner.com/TEDTalks_video', email:'office@carmdor.ro', url: 'http://carmdor.ro/', phone: '+40 256 488 512', address: 'Strada Dragoș Vodă 21-23, Timisoara', latitude: 45.763588, longitude: 21.198334 });

      eplanDB.insert('suppliers', { categoryId: 5, name: 'Salon Monica', feedrss: 'http://feeds.feedburner.com/TEDTalks_video', email:'office@salonmonica.ro', url: 'http://www.salonmonica.ro/', phone: '+40 256 202 899', address: 'Strada Barbu Iscovescu 2, Timisoara', latitude: 45.752567, longitude: 21.240648 });

      eplanDB.insert('suppliers', { categoryId: 7, name: 'Futurevideo Production', feedrss: 'http://feeds.feedburner.com/TEDTalks_video', email:'office@mariuscondrea.com', url: 'http://www.mariuscondrea.com/', phone: '+40 722 302 153', address: 'Strada Pepinierei, Timișoara', latitude: 45.732054, longitude: 21.240581 });

      eplanDB.insert('suppliers', { categoryId: 8, name: 'Maya Rent a Car', feedrss: 'http://feeds.feedburner.com/TEDTalks_video', email:'office@rentacarmaya.ro', url: 'http://www.rentacarmaya.ro/', phone: '+40 748 503 780', address: 'Piaţa Nicolae Bălcescu 1, Timișoara', latitude: 45.7410646, longitude: 21.2165899 });

      eplanDB.insert('suppliers', { categoryId: 9, name: 'Continental', feedrss: 'http://feeds.feedburner.com/TEDTalks_video', email:'rezervari@hotelcontinental.ro', url: 'http://www.hotelcontinental.ro', phone: '+40 256 494 144', address: 'B-dul Revolutiei 1989, nr.5, Timisoara', capacity: '300', latitude: 45.755139, longitude: 21.232109 });
      eplanDB.insert('suppliers', { categoryId: 9, name: 'Hotel Neon', feedrss: 'http://feeds.feedburner.com/TEDTalks_video', email:'office@hotel-neon.ro', url: 'http://www.hotel-neon.ro', phone: '+40 356 807 600', address: 'Calea Aradului nr. 85, Timisoara', capacity: '120', latitude: 45.773622, longitude: 21.221745 });
      eplanDB.insert('suppliers', { categoryId: 9, name: 'Casa del Sole', feedrss: 'http://feeds.feedburner.com/TEDTalks_video', email:'hotel@casadelsole.ro', url: 'http://www.casadelsole.ro', phone: '+40 356 457 771', address: 'Strada Romulus 12, Timisoara', capacity: '80', latitude: 45.744455, longitude: 21.221474 });
      eplanDB.insert('suppliers', { categoryId: 9, name: 'Pensiunea Nora', feedrss: 'http://feeds.feedburner.com/TEDTalks_video', email:'office@pensiuneanora.ro', url: 'http://www.pensiuneanora.ro', phone: '+40 752 241 206', address: 'Bv. Dambovita nr. 40, Timisoara', capacity: '150', latitude: 45.7347285, longitude: 21.200904 });
      
      eplanDB.commit();
  }  
  
  if( !eplanDB.tableExists('events') ) {

      // create the 'events' table
      eplanDB.createTable('events', ['guid', 'name', 'date', 'time', 'location', 'background', 'details']);
  
      // insert some data
      eplanDB.insert('events', {guid: 'fdbaf625-8598-4643-e564-5ed74c7cd3a6', name: 'Our Wedding', date: '\"2014-08-31\"', time: '\"18:45\"', location: '70 Avenue des Champs-Élysées, Paris, France', details: 'some details'});
      eplanDB.insert('events', {guid: 'aaaaf625-8598-4643-e564-5ed74c7cd3a7', name: 'My Birthday Party', date: '\"2014-09-15\"', time: '\"12:30\"', location: '6 Rue Balzac, Paris, France', details: 'my bday, yay!'});

      // commit the database to localStorage
      // all create/drop/insert/update/delete operations should be committed
      eplanDB.commit();
  }
  
  if( !eplanDB.tableExists('eventSuppliers') ) {
  
      // create the 'events' table
      eplanDB.createTable('eventSuppliers', ['guidevent', 'idsupplier']);
  
      // insert some data
      /*
      eplanDB.insert('eventSuppliers', {guidevent: 'fdbaf625-8598-4643-e564-5ed74c7cd3a6', idsupplier: '1'});
      eplanDB.insert('eventSuppliers', {guidevent: 'fdbaf625-8598-4643-e564-5ed74c7cd3a6', idsupplier: '2'});
      eplanDB.insert('eventSuppliers', {guidevent: 'aaaaf625-8598-4643-e564-5ed74c7cd3a7', idsupplier: '3'});
      eplanDB.insert('eventSuppliers', {guidevent: 'aaaaf625-8598-4643-e564-5ed74c7cd3a7', idsupplier: '4'});
      eplanDB.insert('eventSuppliers', {guidevent: 'aaaaf625-8598-4643-e564-5ed74c7cd3a7', idsupplier: '5'});
      eplanDB.insert('eventSuppliers', {guidevent: 'aaaaf625-8598-4643-e564-5ed74c7cd3a7', idsupplier: '6'});
      */
      // commit the database to localStorage
      // all create/drop/insert/update/delete operations should be committed
      eplanDB.commit();
  } 
  
}