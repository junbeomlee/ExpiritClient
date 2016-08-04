angular.module('expirit.services')
.factory('UserApi',function (Restangular) {
    var users=Restangular.all('users');
    return {
      getList : function(){
        return users.getList();
      }
    }
  });
