angular.module('expirit.services').factory('DropDownList',DropDownList);

DropDownList.$inject = [];

function DropDownList(){

  var DropDownList = function(){

  };

  var dropDownData={};

  function DropDownData(){
    this.data=[
      {
        exName: '스트레칭',
        tree:[]
      },
      {
        exName: '코어 운동',
        tree:[]
      },
      {
        exName: '메인 운동',
        tree:[]
      },
      {
        exName: '유산소 운동',
        tree:[]
      }
    ];
  }

  function ExerciseItem(name,no){
    this.name=name;
    this.no=no;
  }
  DropDownList.prototype={

    fromProgramList : function(programList){
      dropDownData= new DropDownData();

      for(var index in programList){
        var exercise=programList[index].getExercise();
        // var exerciseItem = new ExerciseItem(exercise.getName(),exercise.getNo());
        // var asd =exercise.getDepth1();
        //console.log(asd);
        //console.log(ExerciseCode.stretching);
        switch (exercise.getDepth1()) {
          case ExerciseCode.stretching:
            //console.log(exercise);
            dropDownData.data[0].tree.push(exercise);
          break;
          case ExerciseCode.coreExercise:
            dropDownData.data[1].tree.push(exercise);
          break;
          case ExerciseCode.mainExercise:
            dropDownData.data[2].tree.push(exercise);
          break;
          case ExerciseCode.aerobicExercise:
            dropDownData.data[3].tree.push(exercise);
          break;
          default:
        }
      }

      return dropDownData.data;
    },
    getInitData : function(){
      dropDownData= new DropDownData();
      //console.log(dropDownData.data);
      return dropDownData.data;
    },
    fromExerciseList : function(exerciseList){
      dropDownData= new DropDownData();
      angular.forEach(exerciseList,function(exercise,index){
        //console.log(exercise);
        switch (exercise.exDepth1) {
          case ExerciseCode.stretching:
            //console.log(exercise);
            dropDownData.data[0].tree.push(exercise);
          break;
          case ExerciseCode.coreExercise:
            dropDownData.data[1].tree.push(exercise);
          break;
          case ExerciseCode.mainExercise:
            dropDownData.data[2].tree.push(exercise);
          break;
          case ExerciseCode.aerobicExercise:
            dropDownData.data[3].tree.push(exercise);
          break;
          default:
        }
      });
      return dropDownData.data;
    }
  };
  // DropDownList.fromProgramList = function(programList){
  //
  //   dropDownData= new DropDownData();
  //
  //   for(var index in programList){
  //     var exercise=programList[index].getExercise();
  //     var exerciseItem = new ExerciseItem(exercise.getName(),exercise.getNo());
  //     var asd =exercise.getDepth1();
  //     console.log(asd);
  //     console.log(ExerciseCode.stretching);
  //     switch (exercise.getDepth1()) {
  //       case ExerciseCode.stretching:
  //         //console.log(exercise);
  //         dropDownData.data[0].tree.push(exerciseItem);
  //       break;
  //       case ExerciseCode.coreExercise:
  //         dropDownData.data[1].tree.push(exerciseItem);
  //       break;
  //       case ExerciseCode.mainExercise:
  //         dropDownData.data[2].tree.push(exerciseItem);
  //       break;
  //       case ExerciseCode.aerobicExercise:
  //         dropDownData.data[3].tree.push(exerciseItem);
  //       break;
  //       default:
  //     }
  //   }
  //
  //   return dropDownData.data;
  // }
  // DropDownList.fromExerciseList = function(){
  //
  // }
  // DropDownList.getInitData = function(){
  //   dropDownData= new DropDownData();
  //   return dropDownData.data;
  // }

  return DropDownList;
}
