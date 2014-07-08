'use strict';
/* global app:true */
/**
 * @ngdoc overview
 * @name thinksterTutorialApp
 * @description
 * # thinksterTutorialApp
 *
 * Main module of the application.
 */
var app = angular
  .module('thinksterTutorialApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ]);
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .when('/posts/:postId', {
        templateUrl: 'views/showpost.html',
        controller: 'PostViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
app.constant('FIREBASE_URL', 'https://fiery-fire-4368.firebaseio.com/posts/');
