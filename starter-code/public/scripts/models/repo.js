'use strict';

(function(module) {
  const repos = {};
  repos.all = [];
  repos.requestRepos = function(callback) {

    $.get('https://api.github.com/user?access_token=' + window.gitToken)
    .then(user => {
      $.get(user.repos_url + '?access_token=' + window.gitToken)
      .then(repo => {
        repo.forEach(results => {
          repos.all.push(results);
        })
        callback(repos);
      }, error => {
        console.log(error);
      });
    }, error => {
      console.log(error);
    });
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
