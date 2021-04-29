const responsive = {
  0: {
    items: 1
  },
  320: {
    items: 1
  },
  560: {
    items: 2
  },
  960: {
    items: 3
  }
}


$(document).ready(function () {
  $nav = $('.nav');
  $toggleCollapse = $('.toggle-collapse');

  $toggleCollapse.click(function () {
    $nav.toggleClass('collapse');
  })

  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    responsive: responsive,
  });

  AOS.init();

  $(window).on('scroll',function(){
    if($(window).scrollTop()){
      $('.nav').addClass('scrolled');
      $('.nav').removeClass('scroll-top');
    }
    else{
      $('.nav').removeClass('scrolled');
      $('.nav').addClass('scroll-top');
    }
  })
});