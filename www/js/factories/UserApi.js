angular.module('expirit.factories').factory('UserApi',
function (Restangular) {
    var users=Restangular.all('users');
    var user=Restangular.one('users','frontalnh@naver.com');

    return {
      getList : function(){
        return users.getList();
      },
      getProgramList: function(){
        return user.getList('programs');
      },
      deleteProgram: function(exNo){
        return user.one('programs',exNo).remove();
      },
      addProgram: function(exNo){
        return user.one('programs',exNo).post();
      }
    }
});
