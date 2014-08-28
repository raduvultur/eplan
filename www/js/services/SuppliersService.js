function SuppliersService () {

  var SuppliersService = {};
  
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
  
  SuppliersService.listCategories = function () {
    var catList = eplanDB.queryAll('categories', { sort: ['name', 'ASC'] });
    angular.forEach(catList, function(category, key) {
      var countSupp = eplanDB.query("suppliers", {categoryId: category.iid }).length;
      category.suppliers = countSupp;
     });
     
    return catList;
  };
  
  SuppliersService.listCategorySuppliers = function (categoryId) {
    return eplanDB.queryAll("suppliers", { 
                        query: {"categoryId": categoryId},
                        sort: [["name", "ASC"]]
                      });
  };
  
  SuppliersService.getCategoryName = function (categoryId) {
    var catName = eplanDB.query("categories", {ID: categoryId})[0].name;
    return catName;
  };
  
  SuppliersService.getSupplier = function (supplierId) {
    var supplier = eplanDB.query("suppliers", {ID: supplierId})[0];
    return supplier;
  };
  
  SuppliersService.distance = function (lat1, lon1, lat2, lon2) {
    var deg2rad = 0.017453292519943295; // === Math.PI / 180
    var cos = Math.cos;
    lat1 *= deg2rad;
    lon1 *= deg2rad;
    lat2 *= deg2rad;
    lon2 *= deg2rad;
    var a = (
      (1 - cos(lat2 - lat1)) +
      (1 - cos(lon2 - lon1)) * cos(lat1) * cos(lat2)
    ) / 2;
  
    return 12742 * Math.asin(Math.sqrt(a)); // Diameter of the earth in km (2 * 6371)
  }
  
  //distance(48, -122, 49, -121);  
  
  return SuppliersService;
}
angular.module('App').factory('SuppliersService', SuppliersService);
