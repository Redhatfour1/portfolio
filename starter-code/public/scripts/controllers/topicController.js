'use strict';

(function(module) {
  const topicController = {};
  // TODO: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // window.Article.fetchAll(window.ArticleView.initIndexPage);
  // Also be sure to hide all the main section elements, and reveal the #articles section:
  topicController.showArticles = function() {
    $('#aboutMe').show();
    $('#topics').hide();
  }
  module.topicController = topicController;
})(window);
