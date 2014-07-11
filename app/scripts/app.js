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
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl'
      })
      .when('/posts/:postId', {
        templateUrl: 'views/showpost.html',
        controller: 'PostViewCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
app.constant('FIREBASE_URL', 'https://fiery-fire-4368.firebaseio.com/posts/');
