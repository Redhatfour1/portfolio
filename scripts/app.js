'use strict'

var portfolioTopics = []
var portfolio = [];
console.log(portfolio);
//using a constructor function to create portfolio objects
function workExperience (jobName, jobTitle, jobDiscription){
  this.jobName = jobName;
  this.jobTitle = jobTitle;
  this.jobDiscription = jobDiscription;
  this.jobAchievments = jobAchievments;
  portfolio.push(this);
}
//this IIFE creates the topics objects upon loading
// (function() {
//   for (var i = 0; i < portfolioTopics.length; i++) {
//     new Topics (portfolioTopics[i]);
//   }
//   console.log(portfolioTopics);
// })();
Topics.prototype.toHtml = function() {
  var $newTopic = $('topic.template').clone();

  $newTopic.find('h1').html(this.workExperience);
  $newTopic.find('a').attr('href', this.accomplishments);
  $newTopic.find('address').html(this.projects);
  $newTopic.find('section').html(this.hobbies);

  console.log($newTopic);

//   $newTopic.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
//   $newTopic.append('<hr>');
//   return $newTopic;
// };

// rawData.sort(function(a,b) {
// // REVIEW: Take a look at this sort method; This may be the first time we've seen it.
//   return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
// });

rawData.forEach(function(topicObject) {
  // REVIEW: Take a look at this forEach method; This may be the first time we've seen it.
  topics.push(new Article(topicObject));
});

topics.forEach(function(a) {
  $('#topics').append(a.toHtml());
});
