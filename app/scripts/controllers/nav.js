'use strict';

trankeeloManagerApp.controller('NavCtrl', ['$location', '$scope', 
  function($location, $scope) {

  $scope.navs = [
  	{
  		name: 'Dashboard',
  		iconCls: 'icofont-dashboard',
  		url: '#/dashboard',
      navCls: ''
  	}, {
  		name: 'Stores',
  		iconCls: 'icofont-sitemap',
  		url: '#/stores',
      navCls: ''
  	}, {
  		name: 'Cashier',
  		iconCls: 'icofont-group',
  		url: '#/cashier',
      navCls: ''
  	}, {
  		name: 'Template',
  		iconCls: 'icofont-edit',
  		url: '#/template',
      navCls: ''
  	}, {
  		name: 'Items',
  		iconCls: 'icofont-qrcode',
  		url: '#/items',
      navCls: ''
  	}, {
  		name: 'Inventory',
  		iconCls: 'icofont-book',
  		url: '#/inventory',
      navCls: ''
  	}, {
  		name: 'Expenses',
  		iconCls: 'icofont-money',
  		url: '#/expenses',
      navCls: ''
  	}, {
  		name: 'History',
  		iconCls: 'icofont-calendar',
  		url: '#/history',
      navCls: ''
  	}
  ];

  $scope.updateActiveNav = function(){
    var navs = _.map($scope.navs, 
      function(nav){ 
        nav.navCls = '';
        if($location.path() !== '/' && nav.url.indexOf($location.path()) === 1) {
          nav.navCls = 'active';
        }

        return nav; 
      }
    );
  };

  $scope.$on('update_active_nav', $scope.updateActiveNav);

}]);
