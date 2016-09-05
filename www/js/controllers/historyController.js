angular.module('expirit.controllers')
.controller('historyController', function($scope,$rootScope,CONFIG,DropDownList,HistoryService) {
  $scope.appName=CONFIG.APP_NAME;
  console.log(HistoryService);
  var dropDownList=new DropDownList();

  $rootScope.$on('changeHistoryEvent',function(event,exerciseList){
    //console.log("load!!");
    console.log(exerciseList);
    $scope.DropDownlistData=dropDownList.fromExerciseList(exerciseList);
  });

  HistoryService.apiGetHistoryList();
  $scope.DropDownlistData=dropDownList.getInitData();
})
