angular.module('expirit.services').service('HistoryService',HistoryService);

HistoryService.$inject = ['HistoryApi','Exercise','$rootScope'];

function HistoryService(HistoryApi,Exercise,$rootScope){

 /*
  * day에 해당하는 프로그램 리스트 불러오기
  */
  this.apiGetHistoryList = function (exNo){
    HistoryApi.getAll().then(function(response){
      console.log(response.status);
      if(response.status==200){
        var exerciseList=[];
        var resData = response.data.plain()[0];
        angular.forEach(resData, function(histories, index){
          var exerciseJson = histories.exercise;
          var exercise = Exercise.fromJson(exerciseJson);
          exerciseList.push(exercise);
          //ProgramManager.add(program);
          //console.log(ProgramManager);
        });
        $rootScope.$broadcast('changeHistoryEvent',exerciseList);
        //console.log(response);
        // ProgramManager.delete(exNo);
        //
        // // 이벤트 발생
        // $rootScope.$broadcast('changeProgramManagerEvent',ProgramManager);
      }
    })

    //});
  };

}
