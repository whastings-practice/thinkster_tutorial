'use strict';

/**
 * @ngdoc function
 * @name thinksterTutorialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the thinksterTutorialApp
 */
angular.module('thinksterTutorialApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
