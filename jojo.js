$(document).ready(function() {
    $('#toto h3').click(function() {
        var title = $(this).text();
        $('.project-card').hide().filter('[data-title="' + title + '"]').show();
      });
    $('#allp').click(function() {
        $('.project-card').show();
      });
  });
