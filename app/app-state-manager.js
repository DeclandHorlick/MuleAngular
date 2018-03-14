"use strict";
(function (){
	angular.module('emailApp').config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise("/home");
		
		$stateProvider.state("home",{
			url:"/home",
			templateUrl: "/webapp/app/feature/home/home.html"
		}).state("login",{
			url:"/login",
			templateUrl: "/webapp/app/feature/login/login.html"
		})
	});
}());