'use strict';

(function(module) {
  const topicController = {};
  // Setup a function that kicks off the fetching and rendering of topics, using the same
  // code that used to be in index.html.
  // window.Article.fetchAll(window.ArticleView.initIndexPage);
  // Also be sure to hide all the main section elements, and reveal the #articles section:
  topicController.index = () => {
    window.Topic.fetchAll();
    $('#aboutMe').hide();
    $('#topics').fadeIn('slow');
  };
  module.topicController = topicController;
})(window);
