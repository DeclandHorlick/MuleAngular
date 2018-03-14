(function() {
    var LoginController = function(LoginService,$log,$window,$cookies) {
        $log.log("emailController controller created");
    	var vm = this;
    	vm.username;
    	vm.password;
        vm.login = function() {
        	vm.user={username:vm.username,password:vm.password};
        	LoginService.login(vm.user).then(function(results){
                console.log(results);
        		if(results=="successful login"){
                    $cookies.put('login',vm.username);
                    console.log($cookies.get('login'));
        			//$window.location.href='index.html';

        		}
        	});
       }
    };
    angular.module('emailApp').controller('loginController', ['loginService','$log','$window','$cookies',LoginController]);
}());