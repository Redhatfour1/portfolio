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

blogView.initIndexPage = function() {
  Topic.all.forEach(function(about) {
    $('#homePage').append(about.toHtml())
  });
console.log('working');

  blogView.populateFilters();
  blogView.handleCategoryFilter();
  blogView.handleNav();
  blogView.removeBackground();
  blogView.addBackground();
  blogView.handleTitle();
};
