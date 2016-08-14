angular.module('expirit.factories').factory('FacebookLogin',FacebookLogin)

FacebookLogin.$inject=['$cordovaOauth'];

function FacebookLogin($cordovaOauth){
  console.log($cordovaOauth);
  return {
    login : function(){
      console.log("login called");
      $cordovaOauth.facebook("1054013634712673",["leebduk@nate.com"]).then(function(response){
        alert(result);
      },function(error){
        console.log(error);
      });
    }
  };
}
