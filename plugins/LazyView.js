import jQuery from "jquery";

if (process.browser) {
  window.jQuery = jQuery;
  window.$ = jQuery;
  require("bootstrap");
}

$(document).ready(function() {
  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop() + 100;
    var viewportBottom = viewportTop + $(window).height() - 200;
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  function watchForLazyLoaders() {
    $(window).on("scroll", function() {
      $(".lazy-fade:not(.show)").each(function(index) {
        if ($(this).isInViewport()) $(this).addClass("show");
      });

      if ($(".lazy-fade:not(.show)").length == 0) $(window).off("scroll");
    });
  }

  function showVisibleLazyLoaders() {
    $(".lazy-fade:not(.show)").each(function(index) {
      if ($(this).isInViewport()) $(this).addClass("show");
    });
  }

  watchForLazyLoaders();
  showVisibleLazyLoaders();
});
