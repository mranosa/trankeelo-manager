'use strict';

trankeeloManagerApp.controller('StoresCtrl', [
	'NavService', '$scope', 'angularFire',
	function(NavService, $scope, angularFire) {
  NavService.updateActiveNav();

  var url = 'https://trankeelo.firebaseio.com/users/test_user/stores';
  $scope.bound = angularFire(url, $scope, 'stores', []);
  $scope.store = {
    name: '',
    tin: '',
    description: ''
  };

  $scope.page = {
    show_list_loading : true,
    show_list_table : false,
    show_list : true,
    show_add_item : false,
    show_add_button : false,
  };

  $scope.bound.then(function(stores) {
    $scope.hideList();
    console.log(stores);

    // $('#datatables').dataTable( {
    //     "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
    //     "sPaginationType": "bootstrap",
    //     "oLanguage": {
    //             "sLengthMenu": "_MENU_ records per page"
    //     },
    //     "aaData" : $scope.stores,
    //     "aoColumns": [
    //       { "sTitle": "Name",   "mData": "name", "mDataProp" : "name" },
    //       { "sTitle": "TIN",  "mData": "tin", "mDataProp" : "tin" },
    //       { "sTitle": "Description", "mData": "description", "mDataProp" : "description" }
    //     ]
    // });
    console.log($scope.stores);

    $scope.page.show_add_button = true;
    $scope.addStore = function(){
      $scope.showList();
      $scope.stores.push($scope.store);
      // addStoreInDatatable($scope.store);
      $scope.store = {
        name: '',
        tin: '',
        description: ''
      };
    };

    $scope.removeStore = function (store) {
      console.log('-------');
      console.log(store);
      console.log($scope.stores.indexOf(store));
      console.log('-------');
      $scope.stores.splice($scope.stores.indexOf(store), 1);
    };

    //TODO implement edit and delete
  });
  
  $scope.showAddStore = function(){
    $scope.page.show_add_item = true;
    $scope.page.show_list = false;
  }

  $scope.cancelAddStore = function(){
    $scope.hideList();
  }

  $scope.showList = function(){
    $scope.page.show_add_item = false;
    $scope.page.show_list = true;
  };

  $scope.hideList = function(){
    $scope.page.show_list_loading = false;
    $scope.page.show_list_table = true;
  };

  // function addStoreInDatatable(store){
  //   $('#datatables').dataTable().fnAddData({
  //     "name" : store.name,
  //     "tin" : store.tin,
  //     "description" : store.description 
  //   });
  // };

  $scope.showList();

  $scope.storeTableOptions = { 
    data: 'stores',
    multiSelect: false,
    enableCellSelection: true,
    columnDefs: [
                  { field: "name", enableCellEdit: true},
                  { field: "tin", enableCellEdit: true},
                  { field: "description", enableCellEdit: true},
                  { field:'', cellTemplate: '<button ng-click="removeStore(row.entity)">Delete</button>', enableCellEdit: false}
                ]
  };

}]);
