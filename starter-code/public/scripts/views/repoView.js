'use strict';

(function(module) {
  const repoView = {};

  // Private methods declared here live only within the scope of the wrapping IIFE.
  const ui = function() {
    let $about = $('#aboutMe'); // Best practice: Cache the DOM query if it's used more than once.

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };
  let render = Handlebars.compile($('#template').text());
  // Remember that new Handlebars template? Let's compile it!
  // Save the result in this `render` variable.

  repoView.index = function(repos) {
    ui();

    // The jQuery `append` method lets us append an entire array of HTML elements at once:
    $('#aboutMe ul').append(
      repos.with('name').map(render) // Want to filter by a different property other than name?
    );
  };

  module.repoView = repoView;
})(window);
