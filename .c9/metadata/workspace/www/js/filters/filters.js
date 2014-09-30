{"filter":false,"title":"filters.js","tooltip":"/www/js/filters/filters.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":77}},"text":"angular.module('App').filter('filterMultiple',['$filter',function ($filter) {"},{"action":"insertText","range":{"start":{"row":0,"column":77},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":47,"column":0}},"lines":["return function (items, keyObj) {","    var filterObj = {","        data:items,","        filteredData:[],","        applyFilter : function(obj,key){","            var fData = [];","            if (this.filteredData.length == 0)","                this.filteredData = this.data;","            if (obj){","                var fObj = {};","                if (!angular.isArray(obj)){","                    fObj[key] = obj;","                    if (key === 'capacity'){","                      var iCapacity = parseInt(obj);","                      angular.forEach(this.filteredData, function ( item ) {","                          if ( parseInt(item.capacity) >= iCapacity ) {","                              fData.push(item);","                          }","                      });","                    }else{","                      fData = fData.concat($filter('filter')(this.filteredData,fObj));","                    }","                } else if (angular.isArray(obj)){","                    if (obj.length > 0){","                        for (var i=0;i<obj.length;i++){","                            if (angular.isDefined(obj[i])){","                                fObj[key] = obj[i];","                                fData = fData.concat($filter('filter')(this.filteredData,fObj));    ","                            }","                        }","","                    }","                }","                //if (fData.length > 0){","                    this.filteredData = fData;","                //}","            }","        }","    };","    if (keyObj){","        angular.forEach(keyObj,function(obj,key){","            filterObj.applyFilter(obj,key);","        });","    }","    return filterObj.filteredData;","}"]},{"action":"insertText","range":{"start":{"row":47,"column":0},"end":{"row":47,"column":4}},"text":"}]);"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":30},"end":{"row":0,"column":44},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1411027095670,"hash":"97786f42457899121a25f0757b4c176c9bda27ff"}