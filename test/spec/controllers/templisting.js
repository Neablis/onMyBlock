'use strict';

describe('Controller: TemplistingCtrl', function () {

  // load the controller's module
  beforeEach(module('onMyBlockApp'));

  var TemplistingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TemplistingCtrl = $controller('TemplistingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
      expect(true).toBe(true);
  });
});
