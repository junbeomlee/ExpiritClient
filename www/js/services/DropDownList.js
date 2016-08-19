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

  this.fromProgramList = function(programList){

    dropDownData= new DropDownData();

    for(var index in programList){
      var exercise=programList[index].getExercise();
      var exerciseItem = new ExerciseItem(exercise.getName(),exercise.getNo());
      var asd =exercise.getDepth1();
      console.log(asd);
      console.log(ExerciseCode.stretching);
      switch (exercise.getDepth1()) {
        case ExerciseCode.stretching:
          //console.log(exercise);
          dropDownData.data[0].tree.push(exerciseItem);
        break;
        case ExerciseCode.coreExercise:
          dropDownData.data[1].tree.push(exerciseItem);
        break;
        case ExerciseCode.mainExercise:
          dropDownData.data[2].tree.push(exerciseItem);
        break;
        case ExerciseCode.aerobicExercise:
          dropDownData.data[3].tree.push(exerciseItem);
        break;
        default:
      }
    }

    return dropDownData.data;
  }

  this.getInitData = function(){
    dropDownData= new DropDownData();
    return dropDownData.data;
  }
}
