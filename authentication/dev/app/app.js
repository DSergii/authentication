;(function(){
	'use strict'
	
	angular
		.module('SocialAuth', [
			'firebase',
			'Authentication',
			'socialAuth.authctrl',
			'socialAuth.login'
		])
		.constant('FIREBASE_URL', 'https://paganel.firebaseio.com/')
		.controller('MainCtrl', MainCtrl);
		
		function MainCtrl($scope){
			
		}
	
})();
