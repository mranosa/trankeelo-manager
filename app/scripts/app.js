'use strict';

var trankeeloManagerApp = angular.module('trankeeloManagerApp', [])
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
      .otherwise({
        redirectTo: '/'
      });
  }]);
