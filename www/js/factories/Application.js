angular.module('expirit.factories').factory('Application',Application)

Application.$inject=['$window'];

function Application($window){
  return {
      setInitialRun : function (initial) {
          $window.localStorage["initialRun"] = (initial ? "true" : "false");
      },
      isInitialRun : function () {
         var value = $window.localStorage["initialRun"] || "true";
         return value == "true";
      }
  };
}
