'use strict';

describe('Controller: StoresCtrl', function() {

  // load the controller's module
  beforeEach(module('trankeeloManagerApp'));

  var StoresCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    StoresCtrl = $controller('StoresCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
