;(function(){
	'use strict'
	
	angular
		.module('socialAuth.authctrl', [
			'firebase'
		])
		.controller('authCtrl', authCtrl);
		
		function authCtrl($scope, authentication, FIREBASE_URL){
			
			var vm = this;
			
			vm.fbUser = authentication.getAuth();
			
			vm.facebookLogin = function(){
				authentication.facebookAuth();
			}
			console.log(vm.fbUser);
			vm.googleLogin = function(){
				authentication.googleAuth();
			}
			
		}
	
})();
