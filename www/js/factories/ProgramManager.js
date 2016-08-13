angular.module('expirit.factories').factory('ProgramManager',ProgramManager)
ProgramManager.$inject = [];
function ProgramManager(){
  var programManager = {
    _programList:[],
    getListByExerciseNo: function(exNo){
      return this._programList.find((item) => {return item.getExercise().getNo()==exNo});
    },
    getListByDay: function(day){
      return this._programList.filter((item) => {
        return item.getDay()==day;
      });
    },
    add: function(program){
      this._programList.push(program);
    },
    delete: function(exNo){
      for(var i=0;i<this._programList.length;i++){
        if(this._programList[i].getExercise().getNo()==exNo){
          this._programList.splice(i,1);
          break;
        }
      }
    }
  }

  return programManager;
}
