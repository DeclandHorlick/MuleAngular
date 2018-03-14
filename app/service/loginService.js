"use strict";
(function(){
	function LoginService(loginDal){
		this.login = function(jsonInfo){
			return loginDal.login(jsonInfo);
		};
	}

    angular.module("emailApp").service("loginService", ['loginDal', LoginService]);

}());