angular.module('expirit.services').service('AddExerciseService',AddExerciseService)

AddExerciseService.$inject=['ExerciseDao','$rootScope','ProgramManager','Program','Exercise','$rootScope','UserApi'];

function AddExerciseService(ExerciseDao,$rootScope,ProgramManager,Program,Exercise,$rootScope,UserApi){
  
  this.dbLoadExerciseList = function(){
    ExerciseDao.getAll().then(function(exerciseList){
      $rootScope.$broadcast('dbLoadExerciseListEvent',exerciseList);
    });
  }

  this.addExercise = function(exerciseJson,day){

    var exercise = Exercise.fromJson(exerciseJson);
    var program = new Program(exercise,day);
    console.log(exercise);
    UserApi.addProgram(program).then(function(response){
      console.log(response);
    });

    ProgramManager.add(program);
    $rootScope.$broadcast('changeProgramManagerEvent',ProgramManager);
  }
}
