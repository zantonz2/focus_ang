(function(){
	
	var app=angular.module('SW-unit',[]);

	app.directive("unit", function(){
		return {
			restrict:'E',
			templateUrl:'js/app/tmp.application.html'
		}
	})

})()
