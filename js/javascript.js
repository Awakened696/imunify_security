$('.slider_slick').slick({

  lazyLoad: 'ondemand',
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '50px',
  prevArrow: "<img src='http://cdn.onlinewebfonts.com/svg/img_106235.png' class='prev' alt='1' style='width: 30px; margin-left: 20px;'>",
  nextArrow: "<img src='http://cdn.onlinewebfonts.com/svg/img_106235.png' class='next' alt='2' style='width: 30px; margin-right: 20px;'>",

});

$(".title").click(function(e) {
  $(".title").removeClass('active');
  $(this).addClass('active');

  $('.block').removeClass('block-active');
  $($(this).attr('data-class')).addClass('block-active');
})