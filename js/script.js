$(function () {
  'use strict';

  // popup
  $('.popup_close').on('click',function(){
    $('.popup_body').fadeOut()
  });

  // banner slider
  $('#banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrow: true,
    autoplaySpeed: 1000,
    nextArrow: '<i class="fas fa-chevron-right net-arrow"></i>',
    prevArrow: '<i class="fas fa-chevron-left pre-arrow"></i>',
  });

  // hot day seller slider

  $('.seller').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrow: true,
    autoplaySpeed: 1000,
    nextArrow: '<i class="fas fa-chevron-right net-arrow"></i>',
    prevArrow: '<i class="fas fa-chevron-left pre-arrow"></i>',
    // vertical:true,
    fade: true,
  });

  // counter down
  $('.coundown').countdown('2023/08/21', function (event) {
    $(this).html(event.strftime(' %n, %H:%m:%S'));
  });

  // Hide button
  $('.hide').click(function () {
    $('.btn-body').fadeOut();
  });

  // show button
  $('.show').click(function () {
    $('.btn-body').fadeIn();

  });

  // increment decrement handle counter index page
  $('#handleCounter').handleCounter();


  // increment decrement handle counter cart page
  $('#increment').handleCounter();


  // zoom_left_slider

  $('.zoom_left_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrow: true,
    autoplaySpeed: 1000,
    nextArrow: '<i class="fas fa-chevron-right net-arrow"></i>',
    prevArrow: '<i class="fas fa-chevron-left pre-arrow"></i>',
  });


  //  Zoom Slider start
  var myCarousel = document.querySelector('#carouselExampleIndicators')
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: false,
    wrap: false
  });

  // accordion js start
  $(".accordion-content").css("display", "none");


  $(".accordion-title").click(function () {

    $(".accordion-title").not(this).removeClass("open");

    $(".accordion-title").not(this).next().slideUp(300);

    $(this).toggleClass("open");

    $(this).next().slideToggle(300);
  });

  // vendor page counter down
  $('#abc').countdown('2022/08/30', function (event) {
    $(this).html(event.strftime(' %n <span>Days</span>'));
  });
  $('#abcd').countdown('2023/08/21', function (event) {
    $(this).html(event.strftime(' %H <span>Hours</span>'));
  });
  $('#abcde').countdown('2023/08/21', function (event) {
    $(this).html(event.strftime(' %M <span>Mins</span>'));
  });

  $('#abcdef').countdown('2023/08/21', function (event) {
    $(this).html(event.strftime(' %S <span>Secs</span>'));
  });

  // Blog slider
  $('.popular_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrow: true,
    autoplaySpeed: 1000,
    nextArrow: '<i class="fas fa-chevron-right net-arrow"></i>',
    prevArrow: '<i class="fas fa-chevron-left pre-arrow"></i>',
    fade: true,
  });

  // Blog page right side fix
    $(window).on('scroll',function(){
      var blogScroll = $(this).scrollTop();

      if(blogScroll > 500){
        $('.blog_widget').addClass('fix_wid')
      }
      
    });

  // come soon page ar counter down 

  $('#abc1').countdown('2022/08/30', function (event) {
    $(this).html(event.strftime(' %n <b>:</b> <span>Days</span>'));
  });
  $('#abcd2').countdown('2023/08/21', function (event) {
    $(this).html(event.strftime(' %H <b>:</b> <span>Hours</span>'));
  });
  $('#abcde3').countdown('2023/08/21', function (event) {
    $(this).html(event.strftime(' %M <b>:</b> <span>Mins</span>'));
  });

  $('#abcdef4').countdown('2023/08/21', function (event) {
    $(this).html(event.strftime(' %S <span>Secs</span>'));
  });

  // order complere page slider
  // banner slider
  $('.o_order').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: false,
    dots: false,
    arrow: false,
    autoplaySpeed: 1000,
    
  });



  // Back to top button

  $('.back-to-top').click(function () {
    $('html,body').animate({
      scrollTop: 0,
    });
  });

  $(window).scroll(function () {
    var scrolling2 = $(this).scrollTop();
    if (scrolling2 > 150) {
      $('.back-to-top').fadeIn();

    } else {
      $('.back-to-top').fadeOut();
    }
  });

  // About counter up 

  $('.counter').counterUp({
    delay: 10,
    time: 500,
  });


  // become success slider
  $('.success_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    arrows: false,
    autoplaySpeed: 1000,


  });


  // sticky menu
  var navOff = $('.navigation').offset().top;
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > navOff) {
      $('.navigation').addClass('manu-fix');
    } else {
      $('.navigation').removeClass('manu-fix');
    }
  });




});