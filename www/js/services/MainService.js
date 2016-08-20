angular.module('expirit.services').service('MainService',MainService);

MainService.$inject=[];
function MainService(){
	var exercise="데드리프트";
	var setNo=1;
	console.log(setNo);
   return {
		getEX: function() {
			return exercise;
		},
		Increment_setNo: function(){
			setNo++;
		},
		Get_setNo: function(){
			return setNo;
		},
		Init_setNo: function(){
			setNo=1;
		}
	};
})