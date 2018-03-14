(function() {

    var dashboardController =  function() {
        
    	var vm = this;
    	
    	vm.angular = "AngularJS";
    	
    	vm.bootstrap = "Twitter Bootstrap";
    	
    	vm.html = "HTML5";
    	
    	vm.javaEE = "JavaEE";
            
    };

    angular.module('emailApp').controller('dashboardController', [dashboardController]);
}());