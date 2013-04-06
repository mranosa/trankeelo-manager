'use strict';

trankeeloManagerApp.controller('StoresCtrl', [
	'NavService', '$scope', 'angularFire',
	function(NavService, $scope, angularFire) {
  NavService.updateActiveNav();

  var url = 'https://trankeelo.firebaseio.com/users/test_user/stores';
  $scope.stores = angularFire(url, $scope, 'stores', []);
  $scope.store = {
    name: '',
    tin: '',
    description: ''
  };

  $scope.stores.then(function(stores) {
    console.log(stores);
    $('#datatables').dataTable( {
        "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
        "sPaginationType": "bootstrap",
        "oLanguage": {
                "sLengthMenu": "_MENU_ records per page"
        },
        "aaData" : $scope.stores,
        "aoColumns": [
          { "sTitle": "Name",   "mData": "name", "mDataProp" : "name" },
          { "sTitle": "TIN",  "mData": "tin", "mDataProp" : "tin" },
          { "sTitle": "Description", "mData": "description", "mDataProp" : "description" }
        ]
    });

    $scope.addStore = function(){
      $scope.stores.push($scope.store);
      addStoreInDatatable($scope.store);
      $scope.store = {
        name: '',
        tin: '',
        description: ''
      };
    };

    $scope.removeStore = function (store) {
      $scope.stores.splice($scope.stores.indexOf(store), 1);
    };

    //TODO implement edit
  });

  function addStoreInDatatable(store){
  $('#datatables').dataTable().fnAddData({
    "name" : store.name,
    "tin" : store.tin,
    "description" : store.description 
  });
  }

}]);
