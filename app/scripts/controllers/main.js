'use strict';

trankeeloManagerApp.controller('MainCtrl', ['NavService', '$scope', function(NavService, $scope) {
  NavService.updateActiveNav();
}]);
