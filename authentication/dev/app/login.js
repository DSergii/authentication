;(function(){
	'use strict'
	
	angular
		.module('socialAuth.login', [
			'firebase'
		])
		.controller('loginCtrl', loginCtrl);
		
		function loginCtrl($scope, FIREBASE_URL, $log, authentication, $rootScope){
			
			var vm = this;
			
			vm.curUser = authentication.getAuth()
			
			vm.credentials = {
				email: null,
				password: null
			}
			
			vm.login = function(){
				authentication.login(vm.credentials);
			}
			vm.logout = function(){
				authentication.logOut();
			}
			

			
		}
	
})();
