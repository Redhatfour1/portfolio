'use strict';

(function(module) {
  const blogController = {};

  // TODO: Define a function that hides all main section elements, and then reveals just the #about section:
  blogController.showAbout = function() {
    $('#aboutMe').hide();
    $('#topics').show();
  };
  module.blogController = blogController;
})(window);
