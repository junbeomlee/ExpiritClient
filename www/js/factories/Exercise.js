angular.module('expirit.factories').factory('Exercise',Exercise)
Exercise.$inject = [];
function Exercise(){

  var Exercise = function(exNo,exNm,restSecond,method,exType){
    this.exNo=exNo;
    this.exNm=exNm;
    this.restSecond=restSecond;
    this.method=method;
    this.exType=exType;
  }

  Exercise.fromJson = function(obj){
    //var obj = JSON.parse(json);
    return new Exercise(obj.exNo,obj.exNm,obj.restSecond,obj.method,obj.exType);
  };

  Exercise.prototype={
    getName: function(){
      return this.exNm;
    },
    getNo: function(){
      return this.exNo;
    },
    getType : function(){
      return this.exType;
    }
  };
  return Exercise;
}
