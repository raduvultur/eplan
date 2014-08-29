function SuppliersService () {

  var SuppliersService = {};
  
  // Initialise. If the database doesn't exist, it is created
  var eplanDB = new localStorageDB('eplan', localStorage);
  
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
