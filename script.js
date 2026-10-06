$(function () {
  var $reveals = $('.reveal');

  function showInView() {
    var bottom = $(window).scrollTop() + $(window).height() - 80;
    $reveals.each(function () {
      if ($(this).offset().top < bottom) {
        $(this).addClass('visible');
      }
    });
  }

  $(window).on('scroll resize', showInView);
  showInView();

  $('.hero-caption').hide().delay(300).fadeIn(1400);

  $('a[href^="#"]').on('click', function (e) {
    var $target = $($(this).attr('href'));
    if ($target.length) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $target.offset().top }, 600);
    }
  });
});
