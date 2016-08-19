angular.module('expirit.factories').factory('ProgramManager',ProgramManager)
ProgramManager.$inject = [];
function ProgramManager(){
  var programManager = {
    programList:[],
    getListByExerciseNo: function(exNo){
      return this.programList.find(function(program){
        return program.getExercise().getNo()==exNo;
      });//(item) => {return item.getExercise().getNo()==exNo});
    },
    getListByDay: function(day){
      return this.programList.filter(function(program){
        return program.getDay()==day;
      });
    },
    add: function(program){
      this.programList.push(program);
    },
    set: function(programList){
      this.programList=programList;
    },
    delete: function(exNo){
      for(var i=0;i<this.programList.length;i++){
        if(this.programList[i].getExercise().getNo()==exNo){
          this.programList.splice(i,1);
          break;
        }
      }
    },
  }

  return programManager;
}
