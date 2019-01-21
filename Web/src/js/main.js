window.onload = function() {
  $('.loading').removeClass('visible');
  $('body').css("overflow-y", "auto");
  setTimeout(function() {
    $('.loading').css('display', 'none');
    AOS.init({
      offset: 50,
      easing: 'ease',
      once: 1
    });
  }, 1000);
};
$(document).ready(function(){
  var $document = $(document),
      $element = $('.menu'),
      className = 'menu--colored';

  $document.scroll(function() {
    $element.toggleClass(className, $document.scrollTop() >= 1);
  });

  var $root = $('html, body');

  $('a[href^="#"]').click(function () {
    $root.animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 90
    }, 500);

    return false;
  });
});
