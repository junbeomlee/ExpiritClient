angular.module('expirit.services').service('QuestService', QuestService)

QuestService.$inject=[$rootScope];

function QuestService($rootScope){

  this.setBirth = function(birth){
	$rootScope.birth=birth;
	console.log($rootScope.birth);
  }
  
  this.setSex = function(sex){
	$rootScope.sex=birth;
	console.log($rootScope.sex);
  }
	
  this.addExercise = function(exerciseJson,day){

    var exercise = Exercise.fromJson(exerciseJson);
    var program = new Program(exercise,day);
    //console.log(exercise);
    UserApi.addProgram(program).then(function(response){
      ProgramManager.add(program);
      $rootScope.$broadcast('changeProgramManagerEvent',ProgramManager);
    });
  }
}
