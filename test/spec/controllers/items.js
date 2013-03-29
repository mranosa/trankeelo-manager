'use strict';

describe('Controller: ItemsCtrl', function() {

  // load the controller's module
  beforeEach(module('trankeeloManagerApp'));

  var ItemsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    ItemsCtrl = $controller('ItemsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
