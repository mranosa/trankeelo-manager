'use strict';

trankeeloManagerApp.controller('MainCtrl', ['$location', 'NavService', '$scope', 
	function($location, NavService, $scope) {
		$location.path('/dashboard');
}]);
