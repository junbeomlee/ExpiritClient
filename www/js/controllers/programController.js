angular.module('expirit.controllers')
.controller('programController', function($scope,CONFIG,DropDownList,ProgramService,$ionicActionSheet,UserApi,$cookies,$cookieStore,$timeout) {

/*
테스트용
*/
  $scope.login = function(){
    UserApi.login().then(function(res){
      $timeout(function(){
        console.log($cookies.session)
      });
      console.log(res.data[0].email);
      //console.log($cookies.get(JSESSIONID));
      //console.log($cookieStore);
      console.log($cookieStore.get("Set-Cookie"));
      //console.log($cookieStore);
      //console.log($cookies);
      //console.log($cookieStore.get('JESSIONID'));
      //console.log($cookies.get('JSESSIONID'));
      console.log(res);
      console.log(res.headers("asd"));
      //console.log($cookies.JSESSIONID);
      //console.log();
    });
  }

  $scope.logout = function(){
    UserApi.logout().then(function(res){
      console.log("logout");
    });
  }

  $scope.test = function(){
    UserApi.getList().then(function(res){
      console.log(res);
    });
  }
  $scope.apiGetProgram = function(){
    ProgramService.apiGetProgramList();
  }
  $scope.appName=CONFIG.APP_PROGRAM;
  var editButtonHide=false;

  // 현재 눌린 운동
  var clickedExercise="";
  // 현재 눌린 운동 리스트 -> css 적용하기위해getListByExerciseNo
  var clickedExerciseItem="";
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
  }

  /*
  *  Program Page에서 요일을 클릭했을 경우 이벤트
  *  해당요일에 해당하는 운동리스트를 표시
  */
  $scope.getListByDay = function(e){

    var day = e.target.attributes.data.value;
    var programList=ProgramService.getProgramListByDay(day);
    $scope.programs=DropDownList.fromProgramList(programList);
  }

  /*
  *
  */
  $scope.$on('$ionTreeList:ItemClicked', function(event, item) {
    if(item.depth==2){

      clickedExercise=item.name;
      clickedExerciseItem.clicked="false";
      item.clicked="true";
      clickedExerciseItem=item;
      //console.log(item);

      //$scope.asd="click-active";
    }
    else{
      clickedExercise="";
    }


  });

  /*
  * programManager의 변동을 체크 programService 에서 loadProgramEvent를 발생시킬 경우
  * call 되는 부분
  * 해당 데이터가 변경되었음을 의미
  */
  $scope.$on('loadProgramEvent',function(event,programManager){
    var programList=programManager.getListByDay(getTodayLabel());
    $scope.programs=DropDownList.fromProgramList(programList);
  });

  /*
  * 편집 버튼 눌었을 경우 이벤트
  * 편집버튼들을 보여준다
  */
  $scope.showEditButton=function(){
    if(editButtonHide)
    editButtonHide=false;
    else
    editButtonHide=true;

    $scope.myValue = editButtonHide;
  }

  /*
  * 편집 버튼중 add 버튼 눌렀을 경우 이벤트
  *
  */
  $scope.addButtonClick = function(){

    if(clickedExercise){
      var hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: '머신 운동으로 대체' },
          { text: '맨몸' }
        ],
        titleText: clickedExercise,
        cancelText: '취소',
        cancel: function() {
          // add cancel code..
        },
        buttonClicked: function(index) {
          return true;
        }
      });
    }else{
      alert("choose exericse");
    }
  }

  /*
  * 편집 버튼중 delete 버튼 눌렀을 경우 이벤트
  *
  */
  $scope.deleteButtonClick = function(){

    if(clickedExercise){
      var hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: '오늘만 삭제' },
          { text: '향후 모든 삭제' }
        ],
        titleText: clickedExercise,
        cancelText: '취소',
        cancel: function() {
          // add cancel code..
        },
        buttonClicked: function(index) {
          console.log(index);
          switch (index) {
            case 0:
            console.log("오늘만 삭제");
            break;

            case 1:
              var exNo=clickedExerciseItem.no;
              ProgramService.deleteProgram(exNo);
              console.log("delete", exNo);
            break;
            default:

          }
          return true;
        }

      });
    }else{
      alert("choose exericse");
    }
  }

  /*
  * 편집 버튼중 change 버튼 눌렀을 경우 이벤트
  *
  */
  $scope.changeButtonClick = function(){

    if(clickedExercise){
      var hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: '머신 운동으로 대체' },
          { text: '맨몸 운동으로 대체' },
          { text: '증상별 맞춤 운동'}
        ],
        titleText: clickedExercise,
        cancelText: '취소',
        cancel: function() {
          // add cancel code..
        },
        buttonClicked: function(index) {
          console.log(buttons[index].text);
          return true;
        }

      });
    }else{
      alert("choose exericse");
    }
  }

  //////////////////// init settings
  $scope.programs=DropDownList.getInitData();
  $scope.myValue = editButtonHide;
})
