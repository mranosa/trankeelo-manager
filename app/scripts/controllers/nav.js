'use strict';

trankeeloManagerApp.controller('NavCtrl', function($scope) {
  $scope.navs = [
  	{
  		name: 'Dashboard',
  		iconCls: 'icofont-dashboard',
  		url: '#/dashboard'
  	}, {
  		name: 'Stores',
  		iconCls: 'icofont-sitemap',
  		url: '#/stores'
  	}, {
  		name: 'Cashier',
  		iconCls: 'icofont-group',
  		url: '#/cashier'
  	}, {
  		name: 'Template',
  		iconCls: 'icofont-edit',
  		url: '#/template'
  	}, {
  		name: 'Items',
  		iconCls: 'icofont-qrcode',
  		url: '#/items'
  	}, {
  		name: 'Inventory',
  		iconCls: 'icofont-book',
  		url: '#/inventory'
  	}, {
  		name: 'Expenses',
  		iconCls: 'icofont-money',
  		url: '#/expenses'
  	}, {
  		name: 'History',
  		iconCls: 'icofont-calendar',
  		url: '#/history'
  	}
  ];
});
