'use strict';

describe('Controller: CashierCtrl', function() {

  // load the controller's module
  beforeEach(module('trankeeloManagerApp'));

  var CashierCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    CashierCtrl = $controller('CashierCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
