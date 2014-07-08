"use strict";

app.controller('PostViewCtrl', function($routeParams, $scope, Post) {
  $scope.post = Post.find($routeParams.postId);
})
