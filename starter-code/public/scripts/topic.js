'use strict';
(function(module){

  function Topic (blogDataObj){
    this.myCategory = blogDataObj.myCategory;
    this.projects = blogDataObj.projects;
    this.tvShows = blogDataObj.tvShows;
    this.hobby = blogDataObj.hobby;
    this.projectName = blogDataObj.projectName;
    this.projectUrl = blogDataObj.projectUrl;
    this.projectDescription = blogDataObj.projectDescription;
    this.jobName = blogDataObj.jobName;
    this.jobTitle = blogDataObj.jobTitle;
    this.jobDescription = blogDataObj.jobDescription;
    this.jobAchievements = blogDataObj.jobAchievements;
    this.jobUrl = blogDataObj.jobUrl;
    this.numOfWords = blogDataObj.numOfWords;
  }

  Topic.all = [];

  Topic.prototype.toHtml = function(){
    var templateScript = $('#template').html();
    var template = Handlebars.compile(templateScript);

    return template(this);
  };
  Topic.loadAll = function(blogData) {
    blogData.forEach(function(ele) {
      Topic.all.push(new Topic(ele));
    });
  }
  // This function will retrieve the data from either a local or remote source,
  // and process it, then hand off control to the View.
  Topic.numOfWordsAll = () => {
    return Topic.all.map(topic => topic.split(' ').length).reduce((acc,
    words) => {
      return acc + words;
  },0)
  console.log('words');
};


  Topic.fetchAll = function() {
    // console.log('from fetchAll');
    if (localStorage.blogData) {
      // When rawData is already in localStorage,
      // we can load it with the .loadAll function above,
      // and then render the index page (using the proper method on the articleView object).
      // console.log('fetchAll if');
      Topic.loadAll(JSON.parse(localStorage.blogData)); //What do we pass in to loadAll()?
      blogView.initIndexPage();
      //What method do we call to render the index page?
    } else {
      // When we don't already have the rawData,
      // we need to retrieve the JSON file from the server with AJAX (which jQuery method is best for this?),
      // cache it in localStorage so we can skip the server call next time,
      // then load all the data into Article.all with the .loadAll function above,
      // and then render the index page.
      $(()=> {
        // console.log('from else');
        $.ajax({url: '/data/blogData.json'})
        .done(function(data) {
          localStorage.setItem('blogData', JSON.stringify(data));
          Topic.loadAll(JSON.parse(localStorage.blogData));
          blogView.initIndexPage();
        });
      });
    }
  }
  module.Topic = Topic;
})(window);
