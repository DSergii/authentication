;(function (){
	'use strict'
	
	angular
		.module('Authentication', [
			'firebase'
		])
		.factory('authentication', socialAuthFactory);
		
		function socialAuthFactory($firebaseAuth, $firebaseObject, $rootScope, FIREBASE_URL){
			
			// получение ссылки на нашу БД 
			var ref = new Firebase(FIREBASE_URL);
			
			var auth = $firebaseAuth(ref);
			
			var curUser = '';
			
			
			/* обработчик, если authHndl не известен */
			function authHandle(error, authData){
				if(error){
					console.log('Login error: ', error);
				}else{
					console.log('Login successes! ', authData);
				}
			}
						
			
			/* т.к. фабрика должна возвращать объект, возвращаем объект с функциями */
			var authObj = {
				
				facebookAuth: function (error, authData){
					ref.authWithOAuthPopup("facebook", function(error, authData){
						if (error) {
							console.log("Login Failed!", error);
						}
						else {
							console.log("Authenticated successfully:", authData);
						}
					});
				},
				googleAuth: function (error, authData){
					ref.authWithOAuthPopup("google", function(error, authData){
						if (error) {
							console.log("Login with google Failed!", error);
						}
						else {
							console.log("Authenticated with google successfully", authData);
						}
					});
				},
				/* фун-ция логин (если пользователь есть в базе)*/
				login: function(_user, authHndl){
					authHndl = typeof authHndl !== 'undefined' ? authHndl : authHandle;
					auth.$authWithPassword(_user, authHndl)
					},
				logOut: function(){
					ref.unauth();
				},
				getAuth: function(){
					return ref.getAuth();
				}
			};
			
			
			
			return authObj;
		}
	
})();
