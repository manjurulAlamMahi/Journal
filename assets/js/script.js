$(function () {
  'use strict';

  // Menu fix

  var navtop = $('#main_menu').offset().top;

  $(window).scroll(function () {

    var navscroll = $(this).scrollTop();

    if (navscroll > navtop) {
      $('#main_menu').addClass('fix_nav');
    } 
    else {
      $('#main_menu').removeClass('fix_nav');
    }
  });

  // venobox

  $('.venobox').venobox();

  // Festival Slider

  $('.award_slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: '<i class="fas fa-chevron-circle-right award_next"></i>',
    prevArrow: '<i class="fas fa-chevron-circle-left award_prev"></i>',
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Bact to Top

  $('.backtotop').click(function () {

    $('html,body').animate({
      scrollTop: 0,
    }, 3000);

  });

  $(window).scroll(function () {

    var scrolltop = $(this).scrollTop();

    if (scrolltop > 200) {

      $('.backtotop').addClass('fix_backtotop');

      $('.backtotop').fadeIn('fix_backtotop');

    } else {

      $('.backtotop').removeClass('fix_backtotop');

      $('.backtotop').fadeOut('fix_backtotop');

    }
  });




});