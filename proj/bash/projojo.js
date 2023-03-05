$(document).ready(function() {
    $('#carouselExampleControls').on('slide.bs.carousel', function(event) {
    var index = $(event.relatedTarget).index();
    var title = '';
    var content = '';
    if (index === 0) {
    title = 'Title for the first image';
    content = 'This is the content for the first image.';
    } else if (index === 1) {
    title = 'Title for the second image';
    content = 'This is the content for the second image.';
    } else if (index === 2) {
    title = 'Title for the third image';
    content = 'This is the content for the third image.';
    }
    $('#zozo h3').html(title);
    $('#zozo p').html(content);
    });

    
    $('#toto h3').click(function() {
        var title = $(this).text();
        $('.project-card').hide().filter('[data-title="' + title + '"]').show();
      });
    $('#allp').click(function() {
        $('.project-card').show();
      });
});
  