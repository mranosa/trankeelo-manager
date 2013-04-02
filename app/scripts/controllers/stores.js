'use strict';

trankeeloManagerApp.controller('StoresCtrl', [
	'NavService', '$scope', 'firebaseCollection', 'firebaseBinding',
	function(NavService, $scope, firebaseCollection, firebaseBinding) {
  NavService.updateActiveNav();

  $scope.stores = firebaseCollection('https://trankeelo.firebaseio.com/users/test_user/stores');
  $scope.store = {
  	name: '',
  	tin: '',
  	description: ''
  };

  $scope.addStore = function(){
  	$scope.stores.$add($scope.store);
	$scope.message = {
		name: '',
		tin: '',
		description: ''
	};
  }

}]);
