angular.module('expirit.controllers')
.controller('homeController', function($scope,CONFIG,$http,FacebookLogin,DropDownList,ProgramService,UserApi) {
  $scope.appName=CONFIG.APP_NAME;
  $scope.userName="최현호";

  var dropDownList = new DropDownList();
  
  var d= new Date();
  var week = new Array('SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT');
  //var today=week[d.getDay()];
  var today='THU';
  console.log(today);

  var clickedExercise="";
  	 var programList=ProgramService.getProgramListByDay(today);
  $scope.programs=dropDownList.fromProgramList(programList);
  
  $scope.apiGetProgram = function(){
	UserApi.login().then(function(res){
      console.log(res.data[0].email);
    });
    ProgramService.apiGetProgramList();
	programList=ProgramService.getProgramListByDay(today);
  $scope.programs=dropDownList.fromProgramList(programList);
  }
	  
 
 
 $scope.facebookLogin=function(){
    console.log("clicked");
    FacebookLogin.login();
  }
  $scope.$on('$ionTreeList:ItemClicked', function(event, exercise) {
    if(exercise.depth==2){
		//기존꺼 false
      clickedExercise.clicked="false";
      //할당
      clickedExercise=exercise;
      //true
      clickedExercise.clicked="true";

		window.location.href="http://localhost:8100/#/main";
    }
    else{
      clickedExercise="";
    } 
	  console.log(exercise);
  }
);
})
