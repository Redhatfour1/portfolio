'use strict';

const blogView = {};

blogView.populateFilters = function(){
  $('section').find('.blog-box').each(function(){
      let myCategory = $(this).attr('data-category');
      let optionTag = '<option value="' + myCategory + '">' + myCategory + '</option>';

      if ($('#category-filter option[value="' + myCategory + '"]').length === 0) {
        $('#category-filter').append(optionTag);
      }
  });
};

blogView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    console.log('working');
    if ($(this).val()) {
          $('#titleCategory').text($(this).val());
          $('article.blog-box').hide();
          // $('section.blog-box').fadeIn('slow');
          console.log('article[data-category="'+ $(this).val() + '"]');
          $('article[data-category="'+ $(this).val() + '"]').fadeIn();
        } else {
          $('article.blog-box').fadeIn();
          $('script.template').hide();
        }
        $('#category-filter').val('');
      });
    };

blogView.handleNav = function () {
  $('.nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  $('.nav .tab:first').click();
};

blogView.removeBackground = function () {
  $('#removeImg').on('click', function() {
    $('main').removeClass('background-container');
  });
};

blogView.addBackground = function () {
  $('#addImg').on('click', function() {
    $('main').addClass('background-container');
  });
};

blogView.initNewTopicPage = function() {
  $('.tab-content').show();
  $('#export-field').hide();
  $('#article-json').on('focus', function(){
    this.select();
  });

  $('#new-form').on('change', 'input, textarea', blogView.create);
};

blogView.create = function() {
  let article;
  $('#articles').empty();

  topic = new Topic({
    myCategory: $('#about-myCategory').val(),
    tvShows: $('#about-tvShows').val(),
    hobby: $('#about-hobby').val(),
    projectName: $('#about-projectName').val(),
    projectUrl: $('#about-project-url').val(),
    projectDiscription: $('#about-projectDescription').val(),
    jobName: $('#about-companyName').val(),
    jobTitle: $('#about-jobTitle').val(),
    jobDiscription: $('#about-jobDescription').val(),
    jobAchievments: $('#about-jobAchievements').val(),
    jobUrl: $('#about-job-url').val(),

  });

  $('#aboutMe').append(article.toHtml());
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });

  $('#export-field').show();
  $('#template-json').val(`${JSON.stringify(article)},`);
};


blogView.initIndexPage = function() {
  Topic.all.forEach(function(article) {
    $('#aboutMe').append(article.toHtml())
  });

$(document).ready(function() {
blogView.populateFilters();
blogView.handleCategoryFilter();
blogView.handleNav();
blogView.removeBackground();
blogView.addBackground();
blogView.handleTitle();
// blogView.setTeasers();
})
