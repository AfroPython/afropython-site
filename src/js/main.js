import $ from 'jquery';

window.jQuery = $;
window.$ = $;

$(() => {
  $('.open-modal').click(() => {
    $('#animatedModal').addClass('active');
  });

  $('.close-animatedModal').click(() => {
    $('#animatedModal').removeClass('active');
  });

  $(window).scroll(() => {
    if ($(this).scrollTop() > 430) {
      $('header').addClass('min');
    } else {
      $('header').removeClass('min');
    }
  });
});
