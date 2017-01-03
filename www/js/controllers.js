(function(){

var ctrl = angular.module('controllers', ['ionic']);


	ctrl.controller('LoginCtrl', function($scope, $state){

		$scope.user = {
			customerID: 'admin',
			password: 'password'
		};
		
		$scope.logIn =function(user){
			console.log(user);
			$state.go('main');
		};

	});

/*
	$ionicPopup.showAlert = function(){
		
		var alertPopup = $ionicPopup.alert({
			title: 'Login Alert',
			template: 'Either email ID or password is wrong'
		});

		alertPopup.then(function(res){
			if(!res) {
				console.log('Either email ID or password is wrong')
			}
		});
	};
*/
}());