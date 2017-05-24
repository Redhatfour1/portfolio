'use strict';

(function(module) {
  const aboutController = {};
  aboutController.index = () => {
    $('#removeImg').hide();
    $('#repos').hide();
    $('#aboutMe').show();
    $('#repo-tab').show();

    // repos.requestRepos(repoView.index);
  };
  module.aboutController = aboutController;
})(window);
