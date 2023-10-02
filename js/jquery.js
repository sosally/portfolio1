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

