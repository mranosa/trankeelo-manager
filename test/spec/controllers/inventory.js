'use strict';

describe('Controller: InventoryCtrl', function() {

  // load the controller's module
  beforeEach(module('trankeeloManagerApp'));

  var InventoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    InventoryCtrl = $controller('InventoryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
