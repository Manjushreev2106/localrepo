$(document).ready(function () {
  $('.question').click(function () {
    $(this).next('.answer').slideToggle();
    $('.answer').not($(this).next()).slideUp();
  });
});
