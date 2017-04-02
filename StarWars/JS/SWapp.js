(function(){
	(function(){
	var SW=angular.module('SWapp',['SWapp-directive']);


	SW.controller('httpRequest', function ($http, $scope){

		$scope.checkGender='all';
        $scope.units=[];
    	/*// Рекурсия, наверное не лучший вариант :)
	    	$scope.label=true;

			var i=1;

			function HttpRequest() {
				if ($scope.label) {
					var request='http://swapi.co/api/people/'+i;
					i++;
					$http.get(request).then(
		        	function(response) {
		        		$scope.label=true;
		        		var unit=response.data;
		        		findPlanet(unit);
		        		$scope.units.push(unit);
			        	console.log(response.data);
			        	HttpRequest();
		            }, function(){
		            	HttpRequest(); //перескок 17го :)
		            	$scope.label=false;
		            	console.log("error check PATH")});
		        }	
	    	};
		    console.log('Рекурсия на 17ом нет данных :(');
		   	HttpRequest(); // Старт рекурсии
		    //console.log($scope.unit);
	    */
	    function RequestGet() {
	    	//first request
    		$http.get('http://swapi.co/api/people/').then(
        	function(response) {
	        	console.log(response.data);
	        	$scope.units=response.data.results;
	        	var total=response.data.count;
	        	//console.log($scope.units.length, total);

	        	//поиск родных планет :)
	        	for (var i = 0; i < $scope.units.length; i++) {
	        		findPlanet($scope.units[i]);
	        	}

	        	if ($scope.units.length<total) {
		        	for (var i = $scope.units.length+1; i < total+2; i++) {
		        		var request='http://swapi.co/api/people/'+i;
		        		nextRequest(request);
		        	}
	        	}
            }, function(){
            	console.log("error check PATH")});

	    	function nextRequest(request){
	    		$http.get(request).then(
	        	function(response) {
		        	//console.log(response.data);
	        		var unit=response.data;
		        	findPlanet(unit);
	        		$scope.units.push(unit);
	            }, function(){
	            	console.log("error check PATH")})
	    	};
	    }

	    RequestGet(); // старт

	    function findPlanet(unit){
	    	$http.get(unit.homeworld).then(
	    		function(response) {
	    			unit.planet=response.data.name;
	    		}, function(){unit.planet='нет данных'}
	    	);
	    }

	    this.clickUnit=function(ind){
    		$scope.ind=ind;
    		console.log(ind);
    		$(".myModal").modal('show');
    	};

    	this.showUnit=function(index){
    		return ($scope.units[index].gender===$scope.checkGender||$scope.checkGender==='all')?true:false;
    	};

    	this.setGender=function(gender){
    		$scope.checkGender=gender;
    	};



    });

	SW.filter('gender', function(){
		return function(filterInput){
			var filterResult="";
			switch (filterInput) {
				case 'male': filterResult='мужской';
					break;
				case 'female': filterResult='женский';
					break;
				case 'n/a': filterResult='сложно определить :)';
					break;
				case 'hermaphrodite': filterResult='самодостаточная тварь - гермофродит';
					break;
				case 'none': filterResult='бесполое существо';
					break;
			}
			return	filterResult;
		}
	})

	})()
})()