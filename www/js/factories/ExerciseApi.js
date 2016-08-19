angular.module('expirit.factories').factory('ExerciseApi',ExerciseApi);

ExerciseApi.inject=['Restangular'];

function ExerciseApi(Restangular) {
    var exercises=Restangular.all('exercises');
    //var user=Restangular.one('users','frontalnh@naver.com');
    //var userProgram=Restangular.all('programs');
    //Restangular.setDefaultHeaders({ 'Set-Cookie': "JSESSIONID=C223C1F8151C839F90556F27D9236898" });
    return {
      getList : function(){
        return exercises.getList();
      }
    };
}
