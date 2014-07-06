'use strict';

/**
 * @ngdoc function
 * @name thinksterTutorialApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the thinksterTutorialApp
 */
angular.module('thinksterTutorialApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
