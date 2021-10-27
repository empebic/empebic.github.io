$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      var $brand = $("#brand");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $brand.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });