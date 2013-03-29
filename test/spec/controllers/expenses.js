'use strict';

describe('Controller: ExpensesCtrl', function() {

  // load the controller's module
  beforeEach(module('trankeeloManagerApp'));

  var ExpensesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    ExpensesCtrl = $controller('ExpensesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
