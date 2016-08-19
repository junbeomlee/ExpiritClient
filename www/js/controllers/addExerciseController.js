angular.module('expirit.controllers')
.controller('addExerciseController', function($scope,CONFIG,DropDownList,AddExerciseService,$window,$stateParams) {
  $scope.appName=CONFIG.APP_NAME;

  var day = $stateParams.day; // from url
  var dropDownList = new DropDownList();
  //console.log(dropDownList);
  $scope.programs=dropDownList.getInitData();
  AddExerciseService.dbLoadExerciseList();

  //db에서 운동리스트 load event
  $scope.$on('dbLoadExerciseListEvent',function(event,exerciseList){
    $scope.programs=dropDownList.fromExerciseList(exerciseList);
  });

  $scope.$on('$ionTreeList:ItemClicked', function(event, exercise) {
    if(exercise.depth==2){
      //운동이 클릭되는 경우
      AddExerciseService.addExercise(exercise,day);
      $window.history.back();
    }
    else{

    }


  });

  $scope.$on('')
})
