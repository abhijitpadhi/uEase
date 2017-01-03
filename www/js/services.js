var srvs = angular.module('services', []);

srvs.service('LoginService', function($q){
	return{
		loginUser: function(name, pw) {
			var deferred = $q.defer();
			var promise = deferred.promise;

			if (name == 'admin' && pw == 'password') {
				deferred.resolve('Welcome ' + name + '1');
			} else {
				deferred.reject('Wrong credentials');
			}

			promise.success = function(fn) {
				promise.then(fn);
				return promise;
			}

			promise.error = function(fn) {
				promise.then(null, fn);
				return promise;
			}

			return promise;
		}
	}

});