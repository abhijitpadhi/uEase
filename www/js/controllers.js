var ctrl = angular.module('controllers', []);

	ctrl.controller('LoginCtrl', function($scope, LoginService, $state, $ionicPopup){

		$scope.user = {};
		
		$scope.login =function(){
			console.log("LOGIN user: " + $scope.user.customerID + " - PW: " + $scope.user.password);
			
			LoginService.loginUser($scope.user.customerID, $scope.user.password)
				.success(function(user) {
					$state.go('main');
				})

				.error(function(user) {
					var alertPopup = $ionicPopup.alert(
							{
								title: 'Login Failed!',
								template: 'Please check your credentials!'
							});
				});
		};

	});
