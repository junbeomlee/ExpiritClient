angular.module('expirit.services').service('ProgramService',ProgramService);

ProgramService.$inject = ['UserApi','User','Program','Exercise','ProgramManager','HistoryApi','ExerciseApi','$rootScope','DBConnector','ExerciseDao'];

function ProgramService(UserApi,User,Program,Exercise,ProgramManager,HistoryApi,ExerciseApi,$rootScope,DBConnector,ExerciseDao){
  //console.log();
  //console.log(UserApi.getProgramList());
  //console.log($rootScope);
  //console.log(HistoryApi.getListByExerciseNo(120001));

  /*
  *  test
  */
  // ExerciseDao.getAll().then(function(resultList){
  //   console.log(resultList);
  // });
  // console.log(ExerciseApi);
  /*ExerciseApi.getList().then(function(response){
    if(response.status==200){
      //console.log(response.data.plain()[0]);
      var ExerciseArray = response.data.plain()[0];
      var exerciseArrayDB=[];
      for(var i=0;i<ExerciseArray.length;i++){
        var exercise = ExerciseArray[i];
        var exerciseDB=[];
        Object.keys(exercise).forEach(function(key) {
          exerciseDB.push(exercise[key]);
        });
        exerciseArrayDB.push(exerciseDB);
      }
      for(var i=0;i<ExerciseArray.length;i++){
        var exercisePropertyArray=exerciseArrayDB[i];
        ExerciseDao.add(exercisePropertyArray);
        //DBConnector.query("INSERT INTO exercise (EX_NO,EX_NM,REST_SECOND,METHOD,EX_IMAGE_NM,EX_URL,EX_IMG_SYS_NM,EX_DEFAULT_SET,EX_IMG_PATH,EX_ETC, EX_DESC,EX_LEVEL,EX_DEPTH1,EX_DEPTH2,EX_DEPTH3) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",parameters);
      }
    }
  });*/

  /*
  * 유저의 프로그램 리스트 network call
  */
  //var parameters = [123];
  //DBConnector.query("INSERT INTO exercise (EX_NO) VALUES (?)",parameters);

  this.apiGetProgramList = function(){
    UserApi.getProgramList().then(function(response){
      //console.log(response.status);
      if(response.status == 200){
        //console.log(response);
        //ProgramManager.clear();
        var programList = [];
        var resData = response.data.plain()[0];
        angular.forEach(resData, function(program, index){
          var exerciseJson = program.exercise;
          var exercise = Exercise.fromJson(exerciseJson);
          var program = new Program(exercise,program.day);
          programList.push(program);
          //ProgramManager.add(program);
          //console.log(ProgramManager);
        });
        ProgramManager.set(programList);
        console.log(ProgramManager);
        // 이벤트 발생 "명칭",데이터
        $rootScope.$broadcast('changeProgramManagerEvent',ProgramManager);
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
