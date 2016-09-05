angular.module('expirit.services').service('DBConnector',DBConnector)

DBConnector.$inject=['$cordovaSQLite','$q','$ionicPlatform'];

function DBConnector($cordovaSQLite,$q,$ionicPlatform){

  //$cordovaSQLite.execute(db,'CREATE TABLE IF NOT EXISTS CREATE TABLE "tb_exercise" ("EX_NO" varchar(6) NOT NULL,`EX_NM` varchar(100) NOT NULL,`REST_SECOND` int(11) DEFAULT NULL,`METHOD` longtext,`EX_IMAGE_NM`varchar(100) DEFAULT NULL,`EX_URL` varchar(100) DEFAULT NULL,`EX_IMG_SYS_NM` varchar(200) DEFAULT NULL,`DEL_YN` varchar(1) DEFAULT NULL,`CRE_DT` datetime DEFAULT NULL,`CRE_ID` varchar(50) DEFAULT NULL,`UPD_DT` datetime DEFAULT NULL,`UPD_ID` varchar(50) DEFAULT NULL,`EX_IMG_PATH` varchar(200) DEFAULT NULL,`EX_DEFAULT_SET` int(11) DEFAULT NULL,`EX_ETC` varchar(100) DEFAULT NULL,`EX_DESC` text,`EX_LEVEL` int(11) DEFAULT NULL,`EX_DEPTH2` varchar(6) DEFAULT NULL,`EX_DEPTH3` varchar(6) DEFAULT NULL,`EX_DEPTH1` varchar(6) DEFAULT NULL,`EX_TYPE` varchar(255) DEFAULT NULL,PRIMARY KEY (`EX_NO`)) ENGINE=InnoDB DEFAULT CHARSET=utf8;');
  //this.create
  var db = null;

  this.query = function(query,parameters){
    parameters = parameters || [];
    var q=$q.defer();

    $ionicPlatform.ready(function () {
      $cordovaSQLite.execute(db, query, parameters)
      .then(function (result) {
        q.resolve(result);
      }, function (error) {
        console.warn('I found an error');
        console.warn(error);
        q.reject(error);
      });
    });
    return q.promise;
  };

  this.getAll = function(result){
    var output=[];

    for(var i=0;i<result.rows.length;i++){
      output.push(result.rows.item(i));
    }

    return output;
  };

  this.getById = function(result){
    var output = null;
    output = angular.copy(result.rows.item(0));
    return output;
  };
  this.connectDatabase = function(whichPlatform){
    if(whichPlatform){ // android 인경우
      $cordovaSQLite.openDB({ name: 'expirit.db' });
    }else{
      db = window.openDatabase("expirit.db", "1.0", "My app", -1);
    }
  };

  this.createExerciseTable = function(){
    $cordovaSQLite.execute(db,"CREATE TABLE IF NOT EXISTS exercise (exNo varchar primary key NOT NULL, exName varchar, restSecond integer,method text,exImage varchar, exUrl varchar, exImgSysName varchar,exDefaultSet varchar,exImgPath varchar,exEtc varchar, exDesc text, exLevel integer, exDepth1 varchar,exDepth2 varchar, exDepth3 varchar)");
  };

  this.createUserTable = function(){
    
  }
  //console.log($cordovaSQLite);
  //var db = $cordovaSQLite.openDB({ name: 'expirit.db' });
  //$cordovaSQLite.execute(db,'CREATE TABLE IF NOT EXISTS CREATE TABLE "tb_exercise" ("EX_NO" varchar(6) NOT NULL,`EX_NM` varchar(100) NOT NULL,`REST_SECOND` int(11) DEFAULT NULL,`METHOD` longtext,`EX_IMAGE_NM` varchar(100) DEFAULT NULL,`EX_URL` varchar(100) DEFAULT NULL,`EX_IMG_SYS_NM` varchar(200) DEFAULT NULL,`DEL_YN` varchar(1) DEFAULT NULL,`CRE_DT` datetime DEFAULT NULL,`CRE_ID` varchar(50) DEFAULT NULL,`UPD_DT` datetime DEFAULT NULL,`UPD_ID` varchar(50) DEFAULT NULL,`EX_IMG_PATH` varchar(200) DEFAULT NULL,`EX_DEFAULT_SET` int(11) DEFAULT NULL,`EX_ETC` varchar(100) DEFAULT NULL,`EX_DESC` text,`EX_LEVEL` int(11) DEFAULT NULL,`EX_DEPTH2` varchar(6) DEFAULT NULL,`EX_DEPTH3` varchar(6) DEFAULT NULL,`EX_DEPTH1` varchar(6) DEFAULT NULL,`EX_TYPE` varchar(255) DEFAULT NULL,PRIMARY KEY (`EX_NO`)) ENGINE=InnoDB DEFAULT CHARSET=utf8;');
}
