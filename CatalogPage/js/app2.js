(function(){
	var app=angular.module('myApp',[]);
	app.controller('panelController', function(){
		this.tab=1;
		this.setPanel=function(setTab){
			this.tab=setTab;
		};
		this.selectPanel=function(setTab) {
			return (this.tab===setTab)?true:false;
		}
	})
})()