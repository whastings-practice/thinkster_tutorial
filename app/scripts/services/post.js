"use strict";

app.factory('Post', function($resource) {
  return $resource('https://fiery-fire-4368.firebaseio.com/posts/:id.json');
});
