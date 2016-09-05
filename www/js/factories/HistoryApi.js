angular.module('expirit.factories').factory('HistoryApi',
function (Restangular) {
    var histories=Restangular.all('histories');
    //var history=Restangular.one('histories','frontalnh@naver.com');

    return {
      getListByExerciseNo : function(exNo){
        /*
         *  /histories/search?userEmail='frontalnh@naver.com'&exNo:"120001";
         */
        return histories.customGET("search",{'userEmail':'frontalnh@naver.com','exNo':exNo});
      },
      getAll : function(){
        return histories.getList();
      }
    }
});
