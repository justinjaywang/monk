+function ($) {
  'use strict';

  // wrap images in a figure and append figcaption
  $('.post-content').each(function (i) {
    $(this).find('img').each(function () {
      $(this).wrap('<figure class="figure"></figure>');
      var alt = this.alt;
      if (alt) $(this).parent().append('<figcaption class="figure-caption">' + alt + '</figcaption>');
    });
  });

}(jQuery);
