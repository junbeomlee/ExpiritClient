angular.module('expirit.controllers')
.controller('programController', function($scope,CONFIG,DropDownList,ProgramService) {

  $scope.appName=CONFIG.APP_PROGRAM;

  /*
   *  오늘 요일
   */
  function getTodayLabel(){
    var week = new Array('SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT');
    var today = new Date().getDay();
    var todayLabel = week[today];
    return todayLabel;
  }
  /*
   *  오늘 요일을 기준으로 프로그램 목록 가져오기
   */
  function initProgramData(){
    var ProgramList=ProgramService.getProgramListByDay("MON");
    DropDownList.setData(ProgramList);
    $scope.programs=DropDownList.getData();
    //console.log("init");
  }

  /*
  *  Program Page에서 요일을 클릭했을 경우 이벤트
  *  해당요일에 해당하는 운동리스트를 표시
  */
  $scope.getListByDay = function(e){

    var day = e.target.attributes.data.value;
    var ProgramList=ProgramService.getProgramListByDay(day);
    DropDownList.setData(ProgramList);
    $scope.programs=DropDownList.getData();
  }

  /*
  *  Program Page에서 해당 운동의 히스토리를 보기위해 클릭했을 경우 이벤트
  *  History Page로 이동
  */
  $scope.$on('$ionTreeList:ItemClicked', function(event, item) {
    // process 'item'
    console.log(item);
  });

  /*
   * programManager의 변동을 체크
   */
  $scope.$on('loadProgramEvent',function(event,programManager){
      var programList=programManager.getListByDay(getTodayLabel());
      DropDownList.setData(programList);
      $scope.programs=DropDownList.getData();
  });

  /*
   * 편집 버튼 눌었을 경우 이벤트
   * 편집버튼들을 보여준다
   */
  $scope.showEditButton=function(){
    console.log("cliked edit button");
  }

  ////////////////////
  $scope.programs=DropDownList.getInitData();

})
