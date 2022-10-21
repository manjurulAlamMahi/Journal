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

  // Slider 



$('.annousment_details_carousel').slick({
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    asNavFor: '.annousment_details_carousel_nav'
});
$('.annousment_details_carousel_nav').slick({
    dots: false,
    arrows: false,
    vertical: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    verticalSwiping: true,
    asNavFor: '.annousment_details_carousel',
    responsive: [
        {
            breakpoint: 376,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 426,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 4
            }
        }
    ]
});



});