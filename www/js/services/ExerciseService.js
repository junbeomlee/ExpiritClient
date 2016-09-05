/*
angular.module('expirit.services').service('ExerciseService',ExerciseService);

ExerciseService.$inject = ['HistoryApi','User','Program','Exercise','ProgramManager','HistoryApi','$rootScope'];

function ExerciseService(HistoryApi,User,Program,Exercise,ProgramManager,HistoryApi,$rootScope){
  /*
   * 유저의 프로그램 리스트 network call
  HistoryApi.getProgramList().then(function(response){
    console.log(response.status);
    if(response.status == 200){
      var resData = response.data.plain()[0];
      angular.forEach(resData, function(program, index){
        var exerciseJson = program.exercise;
        var exercise = Exercise.fromJson(exerciseJson);
        var program = new Program(exercise,program.day);
        ProgramManager.add(program);
      });

      // 이벤트 발생 "명칭",데이터
      $rootScope.$broadcast('loadExerciseEvent',ProgramManager);
    }
  });

}
*/


angular.module('expirit.services').service('ExerciseService',ExerciseService);

ExerciseService.$inject = ['UserApi','User','Program','Exercise','ProgramManager','HistoryApi','$rootScope'];

function ExerciseService(UserApi,User,Program,Exercise,ProgramManager,HistoryApi,$rootScope){
  //console.log();
  //console.log(UserApi.getProgramList());
  //console.log($rootScope);
  //console.log(HistoryApi.getListByExerciseNo(120001));

  /*
   * 유저의 프로그램 리스트 network call
   */
  UserApi.getProgramList().then(function(response){
    console.log(response.status);
    if(response.status == 200){
      var resData = response.data.plain()[0];
      angular.forEach(resData, function(program, index){
        var exerciseJson = program.exercise;
        var exercise = Exercise.fromJson(exerciseJson);
        var program = new Program(exercise,program.day);
        ProgramManager.add(program);
      });

      // 이벤트 발생 "명칭",데이터
      $rootScope.$broadcast('loadProgramEvent',ProgramManager);
    }
  });

  /*
   * day에 해당하는 프로그램 리스트 불러오기
   */
  this.getProgramListByDay = function (day){
    return ProgramManager.getListByDay(day);
  };

}
