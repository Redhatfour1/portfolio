'use strict';

var topicsArray = [];

function Topic (blogDataObj){
  this.myCategory = blogDataObj.myCategory;
  // this.projects = blogDataObj.projects;
  this.tvShows = blogDataObj.tvShows;
  this.hobby = blogDataObj.hobby;
  this.projectName = blogDataObj.projectName;
  this.projectUrl = blogDataObj.projectUrl;
  this.projectDiscription = blogDataObj.projectDiscription;
  this.jobName = blogDataObj.jobName;
  this.jobTitle = blogDataObj.jobTitle;
  this.jobDiscription = blogDataObj.jobDiscription;
  this.jobAchievments = blogDataObj.jobAchievments;
  this.jobUrl = blogDataObj.jobUrl;
}

Topic.prototype.toHtml = function(){
  var templateScript = $('#template').html();
  var template = Handlebars.compile(templateScript);

  return template(this);
};

blogData.forEach(function(topicObject){
  topicsArray.push(new Topic(topicObject));
});

topicsArray.forEach(function(about){
  $('#aboutTopics').append(about.toHtml());
});
