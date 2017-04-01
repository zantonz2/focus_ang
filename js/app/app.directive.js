(function(){
	
	var app=angular.module('myApp-directive',[]);

	app.directive("rowProduct", function(){

		return {
			restrict:'A',
			templateUrl:'js/app/product.html'
		}
	});

	app.directive("application", function(){
		return {
			restrict:'E',
			templateUrl:'js/app/tmp.application.html'
		}
	})

})()
