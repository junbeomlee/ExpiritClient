angular.module('expirit.factories')
  .factory('AuthInterceptor', AuthenInterceptor);

AuthenInterceptor.$inject = ['$q'];

function AuthenInterceptor($localStorage,$q) {
  return {
    response: function (response) {
      console.log("intercepted!!");
      if(response.status==401){

      }
      return $q.reject(response);
    }
  };
}
