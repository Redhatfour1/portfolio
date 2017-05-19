'use strict';

(function(module) {
  const aboutController = {};
  aboutController.index = () => {
    $('#removeImg').hide();
    $('#aboutMe').fadeIn('slow');

    repos.requestRepos(repoView.index);
  };
  module.aboutController = aboutController;
})(window);
