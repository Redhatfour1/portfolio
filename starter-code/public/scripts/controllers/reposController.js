'use strict';

(function(module) {
  const reposController = {};
  reposController.index = () => {
    $('.repos-box').remove();
    $('#repo-tab').hide();
    $('#removeImg').show();
    $('#repos').show();
    console.log('did it append');
    repos.requestRepos(repoView.index);
    console.log(repos.all);
  };

  module.reposController = reposController;
})(window);
