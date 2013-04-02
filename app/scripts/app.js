'use strict';

var trankeeloManagerApp = angular.module('trankeeloManagerApp', ['ngResource', 'angular-underscore', 'ng-firebase'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .when('/stores', {
        templateUrl: 'views/stores.html',
        controller: 'StoresCtrl'
      })
      .when('/cashier', {
        templateUrl: 'views/cashier.html',
        controller: 'CashierCtrl'
      })
      .when('/template', {
        templateUrl: 'views/template.html',
        controller: 'TemplateCtrl'
      })
      .when('/items', {
        templateUrl: 'views/items.html',
        controller: 'ItemsCtrl'
      })
      .when('/inventory', {
        templateUrl: 'views/inventory.html',
        controller: 'InventoryCtrl'
      })
      .when('/expenses', {
        templateUrl: 'views/expenses.html',
        controller: 'ExpensesCtrl'
      })
      .when('/history', {
        templateUrl: 'views/history.html',
        controller: 'HistoryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
