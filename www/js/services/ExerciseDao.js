angular.module('expirit.services').service('ExerciseDao',ExerciseDao)

ExerciseDao.$inject=['$cordovaSQLite','$q','$ionicPlatform','DBConnector'];

function ExerciseDao($cordovaSQLite,$q,$ionicPlatform,DBConnector){

  this.add = function(exercise){
    return DBConnector.query("INSERT INTO exercise (exNo,exName,restSecond,method,exImage,exUrl,exImgSysName,exDefaultSet,exImgPath,exEtc, exDesc,exLevel,exDepth1,exDepth2,exDepth3) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",exercise);
  };

  this.getAll = function(){
    return DBConnector.query("SELECT * FROM exercise")
    .then(function(result){
      return DBConnector.getAll(result);
    });
  }
  //console.log($cordovaSQLite);
  //var db = $cordovaSQLite.openDB({ name: 'expirit.db' });
  //$cordovaSQLite.execute(db,'CREATE TABLE IF NOT EXISTS CREATE TABLE "tb_exercise" ("EX_NO" varchar(6) NOT NULL,`EX_NM` varchar(100) NOT NULL,`REST_SECOND` int(11) DEFAULT NULL,`METHOD` longtext,`EX_IMAGE_NM` varchar(100) DEFAULT NULL,`EX_URL` varchar(100) DEFAULT NULL,`EX_IMG_SYS_NM` varchar(200) DEFAULT NULL,`DEL_YN` varchar(1) DEFAULT NULL,`CRE_DT` datetime DEFAULT NULL,`CRE_ID` varchar(50) DEFAULT NULL,`UPD_DT` datetime DEFAULT NULL,`UPD_ID` varchar(50) DEFAULT NULL,`EX_IMG_PATH` varchar(200) DEFAULT NULL,`EX_DEFAULT_SET` int(11) DEFAULT NULL,`EX_ETC` varchar(100) DEFAULT NULL,`EX_DESC` text,`EX_LEVEL` int(11) DEFAULT NULL,`EX_DEPTH2` varchar(6) DEFAULT NULL,`EX_DEPTH3` varchar(6) DEFAULT NULL,`EX_DEPTH1` varchar(6) DEFAULT NULL,`EX_TYPE` varchar(255) DEFAULT NULL,PRIMARY KEY (`EX_NO`)) ENGINE=InnoDB DEFAULT CHARSET=utf8;');
}
