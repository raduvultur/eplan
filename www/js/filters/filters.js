angular.module('App').filter('filterMultiple',['$filter',function ($filter) {
return function (items, keyObj) {
    var filterObj = {
        data:items,
        filteredData:[],
        applyFilter : function(obj,key){
            var fData = [];
            if (this.filteredData.length == 0)
                this.filteredData = this.data;
            if (obj){
                var fObj = {};
                if (!angular.isArray(obj)){
                    fObj[key] = obj;
                    if (key === 'capacity'){
                      var iCapacity = parseInt(obj);
                      angular.forEach(this.filteredData, function ( item ) {
                          if ( parseInt(item.capacity) >= iCapacity ) {
                              fData.push(item);
                          }
                      });
                    }else{
                      fData = fData.concat($filter('filter')(this.filteredData,fObj));
                    }
                } else if (angular.isArray(obj)){
                    if (obj.length > 0){
                        for (var i=0;i<obj.length;i++){
                            if (angular.isDefined(obj[i])){
                                fObj[key] = obj[i];
                                fData = fData.concat($filter('filter')(this.filteredData,fObj));    
                            }
                        }

                    }
                }
                //if (fData.length > 0){
                    this.filteredData = fData;
                //}
            }
        }
    };
    if (keyObj){
        angular.forEach(keyObj,function(obj,key){
            filterObj.applyFilter(obj,key);
        });
    }
    return filterObj.filteredData;
}
}]);