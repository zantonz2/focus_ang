
(function(){
	var app=angular.module('myApp',['myApp-directive']);
	/*app.controller('StoreController', function(){
		this.products=prod;
	})
	
	/*app.controller('drawProduct', function(httpq){
		var prod=this;
		httpq.get('js/app/pod.json').then(function(response){
			var complete=response.data
			prod.products=complete;
		})
		this.click=alert('ffff');

	});

	app.factory('httpq',function($http,$q){
		return {
			get:function(){
				var deff=$q.defer();
				$http.get.apply(null,arguments)
				.then(deff.resolve)
				.catch(deff.resolve);
				return deff.promise;
			}
		}
	});*/

	app.controller('drawProduct', function ($http){
        var aliasThis=this;
        $scope.showListProduct=true;
        $http.get('js/app/pod.json').then(
        	function(response) {
	        	console.log(response.data);
	        	var complete=response.data;
	        	for (var i = 0; i < complete.length; i++) {
	        		complete[i].lastUpdate=addDate(complete[i].lastUpdate);
        		}
            	aliasThis.products=complete;

        	}, function(){console.log("error check PATH")});
    
        function addDate(time) {
				var option={
					day: 'numeric',
					month: 'long',
					year: 'numeric'
				};
				var date=new Date(time);
				return date.toLocaleString("ru",option);
		}

		this.click=function(id){
			//чтоб не писать draw.drawApp в scope
			$scope.drawApp=this.products[id-1];
			$scope.showListProduct=(id>0)?false:true;
		};


		this.tab=1;
		this.setPanel=function(setTab){
			this.tab=setTab;
		};
		this.selectPanel=function(setTab) {
			return (this.tab===setTab)?true:false;
		}

    });

})()