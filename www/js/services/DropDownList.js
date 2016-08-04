angular.module('expirit.services').service('DropDownList',DropDownList);

DropDownList.$inject = [];

function DropDownList(){

  var dropDownData={};

  function DropDownData(){
    this.data=[
      {
        name: '스트레칭',
        tree:[]
      },
      {
        name: '코어 운동',
        tree:[]
      },
      {
        name: '메인 운동',
        tree:[]
      },
      {
        name: '유산소 운동',
        tree:[]
      }
    ];
  }

  function ExerciseItem(name,no){
    this.name=name;
    this.no=no;
  }

  //console.log(dropDownData.data);
  this.getData = function(){
    return dropDownData.data;
  }
  this.setData = function(programList){

    dropDownData= new DropDownData();

    for(var index in programList){
      var exercise=programList[index].getExercise();
      var exerciseItem = new ExerciseItem(exercise.getName(),exercise.getNo());
      switch (exercise.getType()) {
        case '스트레칭':
          //console.log(exercise);
          dropDownData.data[0].tree.push(exerciseItem);
        break;
        case '코어운동':
          dropDownData.data[1].tree.push(exerciseItem);
        break;
        case '메인운동':
          dropDownData.data[2].tree.push(exerciseItem);
        break;
        case '유산소운동':
          dropDownData.data[3].tree.push(exerciseItem);
        break;
        default:
      }
    }
  }

  this.getInitData = function(){
    return new DropDownData().data;
  }
}
