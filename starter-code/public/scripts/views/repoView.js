'use strict';

(function(module) {
  const repoView = {};
  const render = Handlebars.compile($('#repoTemplate').text());
  repoView.index = function() {

  // Private methods declared here live only within the scope of the wrapping IIFE.
  // Remember that new Handlebars template? Let's compile it!
  // Save the result in this `render` variable.
    $('#reposUl').append(repos.with('name').map(render));
    console.log('append it');
  // The jQuery `append` method lets us append an entire array of HTML elements at once:
  };
  repos.requestRepos(repoView.index);
  module.repoView = repoView;
})(window);
