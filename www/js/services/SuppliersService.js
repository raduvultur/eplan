function SuppliersService ($filter) {

  var SuppliersService = {};
  
  var categories = [
    { name: 'Bridal Stores', id: 1, icon:'ion-bag' },
    { name: 'Cakes', id: 2, icon:'ion-icecream' },
    { name: 'DJ & Entertainment', id: 3, icon:'ion-music-note' },
    { name: 'Florists', id: 4, icon:'ion-leaf' },
    { name: 'Hair & Makeup', id: 5, icon:'ion-scissors' },
    { name: 'Invitations', id: 6, icon:'ion-document-text' },
    { name: 'Photographers', id: 8, icon:'ion-camera' },
    { name: 'Transportation', id: 9, icon:'ion-model-s' },
    { name: 'Venues', id: 10, icon:'ion-wineglass' },
    { name: 'Videographers', id: 11, icon:'ion-videocamera' }
  ];
  
  var suppliers = [
    { id: 1, categoryId: 1, name: 'Karena', thumb: 'ionic.png', image: 'flowers.png', email:'office@karena.ro', url: 'https://www.karena.ro', phone: '+33 65 11 22 33', address: '21 Rue Maginot, 75001 Paris, France' },
    { id: 2, categoryId: 1, name: 'Fashion Princess', thumb: 'ionic.png', image: 'flowers.png', email:'office@fashionprincess.ro', url: 'https://www.fashionprincess.ro', phone: '+33 65 11 22 33', address: '21 Rue Maginot, 75001 Paris, France' },
    { id: 3, categoryId: 1, name: 'Sophia Princess', thumb: 'ionic.png', image: 'flowers.png', email:'office@sophiaprincess.ro', url: 'https://www.sophiaprincess.ro', phone: '+33 65 11 22 33', address: '21 Rue Maginot, 75001 Paris, France' },
    { id: 4, categoryId: 1, name: 'Sposa Toscana', thumb: 'ionic.png', image: 'flowers.png', email:'office@sposatoscana.ro', url: 'https://www.sposatoscana.ro', phone: '+33 65 11 22 33', address: '21 Rue Maginot, 75001 Paris, France' },
    { id: 5, categoryId: 1, name: 'Noela Style', thumb: 'ionic.png', image: 'flowers.png', email:'office@noelastyle.ro', url: 'https://www.noelastyle.ro', phone: '+33 65 11 22 33', address: '21 Rue Maginot, 75001 Paris, France' },
    
    { id: 6, categoryId: 2, name: 'Cofetaria Sava', thumb: 'ionic.png', image: 'flowers.png', email:'office@noelastyle.ro', url: 'https://www.noelastyle.ro', phone: '+33 65 11 22 33', address: '21 Rue Maginot, 75001 Paris, France' },
    { id: 7, categoryId: 2, name: 'Cofetaria Codrina', thumb: 'ionic.png', image: 'flowers.png', email:'office@noelastyle.ro', url: 'https://www.noelastyle.ro', phone: '+33 65 11 22 33', address: '21 Rue Maginot, 75001 Paris, France' },
    { id: 8, categoryId: 2, name: 'Cofetaria Trandafirul', thumb: 'ionic.png', image: 'flowers.png', email:'office@noelastyle.ro', url: 'https://www.noelastyle.ro', phone: '+33 65 11 22 33', address: '21 Rue Maginot, 75001 Paris, France' },
    { id: 9, categoryId: 2, name: 'Cofetaria Adi Dia', thumb: 'ionic.png', image: 'flowers.png', email:'office@noelastyle.ro', url: 'https://www.noelastyle.ro', phone: '+33 65 11 22 33', address: '21 Rue Maginot, 75001 Paris, France' }

  ];  

  SuppliersService.listCategories = function () {
    return categories;
  };
  
  SuppliersService.listCategorySuppliers = function (categoryId) {
    var categorySuppliers = $filter('filter')(suppliers, {categoryId: categoryId});
    return categorySuppliers;
  };
  
  SuppliersService.getCategoryName = function (categoryId) {
    var catName = $filter('filter')(categories, {id: categoryId})[0].name;
    return catName;
  };
  
  SuppliersService.getSupplier = function (supplierId) {
    var supplier = $filter('filter')(suppliers, {id: supplierId})[0];
    return supplier;
  };
  
  return SuppliersService;
}
angular.module('App').factory('SuppliersService', ['$filter', SuppliersService]);
