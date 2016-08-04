angular.module('expirit.factories').factory('Program',Program)
Program.$inject = [];
function Program(){
  var Program = function (exercise,day){
    this.exercise= exercise;
    this.day= day;
  };
  Program.fromJson = function(json){
    var obj = JSON.parse(json);
  }
  Program.prototype={
    getExercise: function(){
      return this.exercise;
    },
    getDay : function(){
      return this.day;
    }
  };
  return Program;
}
