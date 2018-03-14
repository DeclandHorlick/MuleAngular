"use strict";
(function(){
	function LoginDal(dal,$log){
		this.login = function(user){
			$log.log("user: "+JSON.stringify(user).toString());
			return dal.http.POST("http://localhost:5002/webapp/user/json",user);
		}
	}
    angular.module("emailApp").service("loginDal", ["dal",'$log', LoginDal]);
}());