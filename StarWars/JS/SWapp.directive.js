(function(){
	
	var app=angular.module('SWapp-directive',[]);

	app.directive("starWarUnit", function(){
		return {
			restrict:'E',
			templateUrl:'unit/unit.tmp.html'
		}
	})

	app.directive("modalWindow", function(){
		return {
			restrict:'E',
			templateUrl:'unit/modal.tmp.html'
		}
	})

})()
