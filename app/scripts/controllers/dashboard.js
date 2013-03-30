'use strict';

trankeeloManagerApp.controller('DashboardCtrl', ['NavService', '$scope', function(NavService, $scope) {
  NavService.updateActiveNav();
}]);
