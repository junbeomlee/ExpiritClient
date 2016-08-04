angular.module('expirit.services').service('ProgramService',ProgramService);

ProgramService.$inject = ['UserApi','User','Program','Exercise','ProgramManager','HistoryApi','$rootScope'];

function ProgramService(UserApi,User,Program,Exercise,ProgramManager,HistoryApi,$rootScope){
  //console.log();
  //console.log(UserApi.getProgramList());
  //console.log($rootScope);
  //console.log(HistoryApi.getListByExerciseNo(120001));

  /*
   *
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
      $rootScope.$broadcast('loadProgramEvent',ProgramManager);
    }
  });
  //var jsonProgram ='{"user":"leebduk@gmail.com","exercise":{"exSeq":1,"exNo":1111,"exNm":"벤치","restSecond":1,"method":"1","exImage":"1","exUrl":"1","exImgSysName":"1","commonEntity":null,"exImgPath":"asd","exDefaultSet":1,"rest":1},"day":"MON"}';
  // var exercise = Exercise.fromJson(JsonExercise);
  // console.log(exercise);
  //var asd = angular.extend(new Exercise(), angular.fromJson(JsonExercise));
  //var programFromJson = angular.extend(new Program(), angular.fromJson(jsonProgram));
  // console.log(programFromJson);
  // var exercise = new Exercise(111,"bench");
  // var exercise2 = new Exercise(222,"dead");
  // var program = new Program(exercise,"MON");
  // var program2 = new Program(exercise2,"TUE");
  // ProgramManager.add(program);
  // ProgramManager.add(program2);
  // UserApi.getProgramList().then(function(programList){
  //   console.log(programList[0][0]);
  // });
  this.getProgramListByDay = function (day){
    return ProgramManager.getListByDay(day);
  };
  // this.getLoadProgram = function(){
  //   return ProgramManager.;
  // };
}
