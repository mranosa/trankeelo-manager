'use strict';

trankeeloManagerApp.controller('NavCtrl', ['$location', '$scope', 
  function($location, $scope) {

  $scope.navs = [
  	{
  		name: 'Dashboard',
  		iconCls: 'icofont-dashboard',
  		url: '#/dashboard',
      active: false
  	}, {
  		name: 'Stores',
  		iconCls: 'icofont-sitemap',
  		url: '#/stores',
      active: false
  	}, {
  		name: 'Cashier',
  		iconCls: 'icofont-group',
  		url: '#/cashier',
      active: false
  	}, {
  		name: 'Template',
  		iconCls: 'icofont-edit',
  		url: '#/template',
      active: false
  	}, {
  		name: 'Items',
  		iconCls: 'icofont-qrcode',
  		url: '#/items',
      active: false
  	}, {
  		name: 'Inventory',
  		iconCls: 'icofont-book',
  		url: '#/inventory',
      active: false
  	}, {
  		name: 'Expenses',
  		iconCls: 'icofont-money',
  		url: '#/expenses',
      active: false
  	}, {
  		name: 'History',
  		iconCls: 'icofont-calendar',
  		url: '#/history',
      active: false
  	}
  ];

  $scope.updateActiveNav = function(){
    console.log($location.path());
  };

}]);
