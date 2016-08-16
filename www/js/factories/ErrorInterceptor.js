angular.module('expirit.factories')
  .factory('ErrorInterceptor', ErrorInterceptor);

ErrorInterceptor.$inject = [];

function ErrorInterceptor() {
  return {
    response: function ( response ) {
      if ( response.status == 401 ) {
        alert("needLogin");
      }
      else {
        // Some other unknown Error.
        console.log( response );
        // dialogs.error(response.statusText + " - Error " + response.status,
        //"An unknown error has occurred.<br>Details: " + response.data);
      }
      // Stop the promise chain.
      return false;
    }
  };
}
