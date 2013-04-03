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

  // datatables
  $('#datatables').dataTable( {
      "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
      "sPaginationType": "bootstrap",
      "oLanguage": {
              "sLengthMenu": "_MENU_ records per page"
      },
  });

}]);
