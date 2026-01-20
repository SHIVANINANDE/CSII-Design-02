// JavaScript Document

AOS.init(); // For on scroll Animation
feather.replace(); // For Icon   

function scrollToTop(){
  window.scrollTo(0, 0);
}

$(window).scroll(function () {

  var scroll = $(window).scrollTop();
  if (scroll >=5) 
  {
    $('.main-nav').addClass('fixed-top red shadow');
    $('.main-nav').removeClass('position-absolute');
  }
  if (scroll < 5) 
  {
    setTimeout(function () 
    {
      $('.main-nav').removeClass('fixed-top red shadow');
      $('.main-nav').addClass('position-absolute');
    }, 100);
  }

  if (scroll >= 400) 
  {
    $('.scrollTop').addClass('opacity-100');
    $('.scrollTop').removeClass('opacity-0');
    $('.wordsapp-wrap').addClass('d-block');
  }
  if (scroll < 400) 
  {
    $('.scrollTop').removeClass('opacity-100');
    $('.scrollTop').addClass('opacity-0');
    $('.wordsapp-wrap').removeClass('d-block');
  }

});
