const gnb = $('.gnb');
gnb.hover(
    function(){
        $('.sub').css('display','block');
        $('header').addClass('on');
    },
    function(){
        $('.sub').css('display','none');
        $('header').removeClass('on');
    }
);

  //main_slide
  $('.main_banner').bxSlider({
    // nextSelector : '.main_slide_btn .main_next_btn_inner',
    // prevSelector : '.main_slide_btn .main_prev_btn_inner',
    mode : 'fade',
    minSlides :1,
    maxSlides: 1,
    moveSlides:1,
    // slideWidth: '100%',
    // slideMargin: 10,
    auto:true,
    speed: 500,
    pause : 5000
  });