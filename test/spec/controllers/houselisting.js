'use strict';

describe('Controller: HouselistingCtrl', function () {

  // load the controller's module
  beforeEach(module('onMyBlockApp'));

  var HouselistingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HouselistingCtrl = $controller('HouselistingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(true).toBe(true);
  });
});
