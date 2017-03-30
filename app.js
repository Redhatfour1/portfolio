'use strict'

var portfolioTopics = []
var portfolio = [];
console.log(portfolio);
//using a constructor function to create portfolio objects
function Topics (workExperience, accomplishments, projects, hobbies, photos){
  this.workExperience = workExperience;
  this.accomplishments = accomplishments;
  this.projects = projects;
  this.hobbies = hobbies;
  this.photos = photos;
  portfolio.push(this);
}
//this IIFE creates the topics objects upon loading
(function() {
  for (var i = 0; i < portfolioTopics.length; i++) {
    new Topics (portfolioTopics[i]);
  }
  console.log(portfolioTopics);
})();
