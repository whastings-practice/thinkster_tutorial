"use strict";

app.controller('PostsCtrl', function($location, $scope, Post) {
  $scope.posts = Post.all;
  $scope.post = {url: 'http://', title: ''};

  $scope.deletePost = function(postId) {
    Post.delete(postId);
  };

  $scope.submitPost = function() {
    Post.create($scope.post).then(function(ref) {
      $location.path('/posts/' + ref.name());
    });
  };
});
