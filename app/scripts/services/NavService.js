'use strict';

trankeeloManagerApp.factory('NavService', ['$rootScope', function($rootScope) {
  	var NavService = function() {
		
	};

	NavService.prototype = {
		updateActiveNav: function(){
			$rootScope.$broadcast('update_active_nav');
		}
	}

	return new NavService();
}]);
