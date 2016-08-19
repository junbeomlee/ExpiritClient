angular.module('expirit.factories').factory('Exercise',Exercise)
Exercise.$inject = [];
function Exercise(){

  var Exercise = function(exNo,exNm,restSecond,method,exDesc,exLevel,exDepth1,exDepth2,exDepth3){
    this.exNo=exNo;
    this.exNm=exNm;
    this.restSecond=restSecond;
    this.method=method;
    this.exDesc=exDesc;
    this.exLevel=exLevel;
    this.exDepth1=exDepth1;
    this.exDepth2=exDepth2;
    this.exDepth3=exDepth3;
  }

  Exercise.fromJson = function(obj){
    //var obj = JSON.parse(json);
    return new Exercise(obj.exNo,obj.exNm,obj.restSecond,obj.method,obj.exDesc,obj.exLevel,obj.exDepth1,obj.exDepth2,obj.exDepth3);
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
    },
    getDepth1 : function(){
      return this.exDepth1;
    },
  };
  return Exercise;
}
