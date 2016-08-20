function toParams(obj)
{
  var res={};
  for(var propertyName in obj) {
    if (typeof obj[propertyName] != 'function'){
      res[propertyName]=obj[propertyName];
    }
  }
  return res;
}

angular.module('expirit.factories').factory('UserApi',
function (Restangular,$cookieStore) {
  var users=Restangular.all('users');
  var user=Restangular.one('users','frontalnh@naver.com');
  var userProgram=Restangular.all('programs');
  //Restangular.setDefaultHeaders({ 'Set-Cookie': "JSESSIONID=C223C1F8151C839F90556F27D9236898" });
  return {
    getList : function(){
      return users.getList();
    },
    getProgramList: function(){
      return userProgram.getList();
    },
    deleteProgram: function(exNo){
      return Restangular.one("programs",exNo).remove();
    },
    addProgram: function(program){
      var params=toParams(program.getExercise());
      params.day=program.getDay();
      return userProgram.post('',params);
    },
    login: function(){
      return Restangular.one("").customGET("login",{'email':'frontalnh@naver.com','password':61351});
    },
    logout: function(){
      return Restangular.one("").customGET("logout");
    }
  }
});
