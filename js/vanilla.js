  //popup close

  let closeButton = document.getElementById("closeButton");
  let popup = document.querySelector(".popup");

  closeButton.addEventListener("click", function() {
    popup.remove();
      
  });

  //main_slide
$('.main_banner').bxSlider({
    // nextSelector : '.main_slide_btn .main_next_btn_inner',
    // prevSelector : '.main_slide_btn .main_prev_btn_inner',
    mode : 'horizontal',
    minSlides :1,
    maxSlides: 1,
    moveSlides:1,
    // slideWidth: '100%',
    // slideMargin: 10,
    auto:true,
    speed: 500,
    pause : 5000
  });
  
  