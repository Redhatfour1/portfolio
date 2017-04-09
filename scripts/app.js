'use strict';

var topics = [];

function Topic (blogDataObj){
  this.category = blogDataObj.category;
  this.projects = blogDataObj.projects;
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
  var templateScript = $('#topic-template').html();
  var template = Handlebars.compile(templateScript);

  return template(this);
};

// blogData.sort(function(a,b) {
//   return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
// });

blogData.forEach(function(topicObject){
  topics.push(new Topic(topicObject));
});

topics.forEach(function(topic){
  $('#topics').append(topic.toHtml());
});
