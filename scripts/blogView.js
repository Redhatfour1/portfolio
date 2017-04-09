'use strict';

var blogView = {};

blogView.populateFilters = function(){
  $('topic').each(function(){
    if (!$(this).hasClass('template')){
      var val = $(this).find('address a').text();
      var optionTag = '<option value="${val}">${val}</option>';

      if ($('#category-filter option[value="${val}"]').length === 0) {
        $('#category-filter').append(optionTag);
      }

      val = $(this).attr('data-category');
      optionTag = '<option value="${val}">${val}</option>';
      if ($('#category-filter option[value="${val}"]').length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};

// blogView.handleNameFilter = function() {
//   $('#name-filter').on('change', function() {
//     if ($(this).val()) {
//       $('topic').hide();
//       $('topic[data-name="${$(this).val()}"]').fadeIn();
//     } else {
//       $('topic').fadeIn();
//       $('topic.template').hide();
//     }
//     $('#category-filter').val('');
//   });
// };

blogView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
          $('topic').hide();
          $('topic[data-category="${$(this).val()}"]').fadeIn();
        } else {
          $('topic').fadeIn();
          $('topic.template').hide();
        }
        $('#name-filter').val('');
      });
    };

blogView.handleNav = function () {
  $('.nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  $('.nav .tab:first').click();
};

// blogView.setTeasers = function() {
//   $('.topic-body *:nth-of-type(n+2)').hide();
//   $('#topics').on('click', 'a.read-on', function(e) {
//   e.preventDefault();
//   $(this).parent().find('*').fadeIn();
//   $(this).hide();
// });
// };

$(document).ready(function() {
blogView.populateFilters();
blogView.handleCategoryFilter();
// blogView.handleNameFilter();
blogView.handleNav();
blogView.setTeasers();
})
