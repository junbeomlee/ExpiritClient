angular.module('expirit.services')
.factory('userApi',function (Restangular) {
    var users=Restangular.all('users');
    return {
      getList : function(){
        return users.getList();
      }
    }
  });
