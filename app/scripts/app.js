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
      .otherwise({
        redirectTo: '/'
      });
  }]);
