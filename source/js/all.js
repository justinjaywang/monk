+function ($) {
  'use strict';

  var narrowContainerClasses = 'container container--narrow';

  $('.post-content').each(function (i, postContent) {
    // (1) remove container classes from .post-content
    $(postContent).each(function () {
      $(this).removeClass(narrowContainerClasses);
    });
    // (2) add container--narrow to each of the children
    $(postContent).children().each(function () {
      $(this).addClass(narrowContainerClasses);
    });
    // (3) wrap images in a figure and append figcaption
    $(postContent).find('img').each(function (j, image) {
      var $imageWrap = $(image).parent();
      if ($imageWrap.hasClass('container')) {
        $imageWrap.find('br').remove(); // remove extra <br>
        $(image).unwrap(); // remove .container wrap performed in (2)
      }
      $(image).wrap('<figure class="post-figure container container--wide"></figure>');
      var alt = image.alt;
      var $figure = $(image).parent();
      if (alt) {
        $figure.append('<figcaption class="post-figure-caption">' + alt + '</figcaption>');
      }
    });
    // (4) remove container classes from hr
    $(postContent).find('hr').each(function () {
      $(this).removeClass(narrowContainerClasses)
    });
  });

}(jQuery);
