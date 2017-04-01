(function(){
	(function(){
	var SW=angular.module('SWapp',[]);


	SW.controller('httpRequest', function ($http, $scope){


        $scope.unit=[];
    	/* Рекурсия, наверное не лучший вариант :)
	    	$scope.label=true;

			var i=1;

			function HttpRequest() {
				if ($scope.label) {
					var request='http://swapi.co/api/people/'+i;
					i++;
					$http.get(request).then(
		        	function(response) {
		        		$scope.label=true;
		        		$scope.unit.push(response.data);
			        	console.log(response.data);
			        	HttpRequest();
		            }, function(){
		            	HttpRequest(); //перескок 17го :)
		            	$scope.label=false;
		            	console.log("error check PATH")});
		        }	
	    	};
		    console.log('Рекурсия на 17ом нет данных :(');
		   	//HttpRequest(); // Старт рекурсии
		    //console.log($scope.unit);
	    */


	    function RequestGet() {
	    	var units=[];
	    	//first request
    		$http.get('http://swapi.co/api/people/').then(
        	function(response) {
	        	console.log(response.data);
	        	units=response.data.results;
	        	var total=response.data.count;
	        	console.log(units.length, total);
	        	if (units.length<total) {
		        	for (var i = units.length+1; i < total+1; i++) {
		        		var request='http://swapi.co/api/people/'+i;
		        		nextRequest(request);
		        	}
	        	}
            }, function(){
            	console.log("error check PATH")});

	    	function nextRequest(request){
	    		$http.get(request).then(
	        	function(response) {
	        		units.push(response.data);
		        	console.log(response.data);
	            }, function(){
	            	console.log("error check PATH")})
	    	};
	    }

	    RequestGet(); // старт
    });

	})()
})()