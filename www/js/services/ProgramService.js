angular.module('expirit.services').service('ProgramService',ProgramService);

ProgramService.$inject = ['UserApi','User','Program','Exercise','ProgramManager','HistoryApi','ExerciseApi','$rootScope','DBConnector',];

function ProgramService(UserApi,User,Program,Exercise,ProgramManager,HistoryApi,ExerciseApi,$rootScope,DBConnector){
  //console.log();
  //console.log(UserApi.getProgramList());
  //console.log($rootScope);
  //console.log(HistoryApi.getListByExerciseNo(120001));

  /*
   *  test
   */
   console.log(ExerciseApi);
   ExerciseApi.getList().then(function(response){
     if(response.status==200){
       console.log(response);
     }
   });

  /*
   * 유저의 프로그램 리스트 network call
   */
  //var parameters = [123];
  //DBConnector.query("INSERT INTO exercise (EX_NO) VALUES (?)",parameters);

  this.apiGetProgramList = function(){
    UserApi.getProgramList().then(function(response){
      console.log(response.status);
      if(response.status == 200){
        console.log(response);
        var resData = response.data.plain()[0];
        angular.forEach(resData, function(program, index){
          var exerciseJson = program.exercise;
          var exercise = Exercise.fromJson(exerciseJson);
          var program = new Program(exercise,program.day);
          ProgramManager.add(program);
          //console.log(ProgramManager);
        });

        // 이벤트 발생 "명칭",데이터
        $rootScope.$broadcast('loadProgramEvent',ProgramManager);
      }
    });
  }


  /*
   * day에 해당하는 프로그램 리스트 불러오기
   */
  this.getProgramListByDay = function (day){
    return ProgramManager.getListByDay(day);
  };

  this.deleteProgram = function (exNo){
     UserApi.deleteProgram(exNo).then(function(response){
       console.log(response.status);
       if(response.status==200){
         ProgramManager.delete(exNo);

         // 이벤트 발생
         $rootScope.$broadcast('loadProgramEvent',ProgramManager);
       }
     })

     //});
  };

}
