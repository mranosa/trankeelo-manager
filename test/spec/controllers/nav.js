'use strict';

describe('Controller: NavCtrl', function() {

  // load the controller's module
  beforeEach(module('trankeeloManagerApp'));

  var NavCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    NavCtrl = $controller('NavCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
