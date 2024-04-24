$(document).ready(function () {

 
  $('.open-popup-link').magnificPopup({
    type: 'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});

  var swiper = new Swiper(".Swiper01", {
 
    initialSlide: 0,
    cssMode: true,
    slidesPerView: 4,
    height: 300,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    //    autoplay: true,
       loop: false,
       
       breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup:1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup:3,
        spaceBetween: 20,
      },
      1080: {
        slidesPerView: 4,
        slidesPerGroup:4,
        spaceBetween: 20,
      },
    },
  });
  var swiper = new Swiper(".Swiper02", {
    initialSlide: 0,
    cssMode: true,
    slidesPerView: 4,
    height: 300,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    //    autoplay: true,
       loop: false,
       
       breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup:1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup:3,
        spaceBetween: 20,
      },
      1080: {
        slidesPerView: 4,
        slidesPerGroup:4,
        spaceBetween: 20,
      },
    },
  });
  var swiper = new Swiper(".Swiper03", {
    initialSlide: 0,
    cssMode: true,
    slidesPerView: 3,
    height: 300,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    //    autoplay: true,
       loop: false,
       
       breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup:1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup:3,
        spaceBetween: 20,
      },
      1080: {
        slidesPerView: 4,
        slidesPerGroup:4,
        spaceBetween: 20,
      },
    },
  });
  var swiper = new Swiper(".Swiper04", {
    initialSlide: 0,
    cssMode: true,
    slidesPerView: 2,
    height: 300,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    //    autoplay: true,
       loop: false,
       
       breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup:1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup:2,
        spaceBetween: 20,
      },
      1080: {
        slidesPerView: 4,
        slidesPerGroup:4,
        spaceBetween: 20,
      },
    },
  });
  var swiper = new Swiper(".Swiper05", {
    initialSlide: 0,
    cssMode: true,
    slidesPerView: 3,
    height: 300,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    //    autoplay: true,
       loop: false,
       
       breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup:1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup:2,
        spaceBetween: 20,
      },
      1080: {
        slidesPerView: 4,
        slidesPerGroup:4,
        spaceBetween: 20,
      },
    },
  });
  var swiper = new Swiper(".Swiper06", {
 
    initialSlide: 0,
    cssMode: true,
    slidesPerView: 4,
    height: 300,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    //    autoplay: true,
       loop: false,
       
       breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup:1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup:3,
        spaceBetween: 20,
      },
      1080: {
        slidesPerView: 4,
        slidesPerGroup:4,
        spaceBetween: 20,
      },
    },
  });
   //tab
   function tabCutover() {

    $(".tab-category li.active").each(function () {
       var tablink = $(this).find("a").data("tablink");
   
       $('#'+tablink).show().siblings(".tab-inner").hide();
     });
   
    $(".tab-category li").click(function () {
       $('#'+$(this).find("a").data("tablink")).show().siblings(".tab-inner").hide();
       $(this).addClass("active").siblings(".active").removeClass("active");
     });
   }
  tabCutover();

  //
  if ($(window).width() < 1080){
    $('.col-6 p').after($('.conference-pic'));
  }
  
    //anchor
    $('.nav a').click(function () {

      //Animate
      $('html, body').stop().animate({
          scrollTop: $($(this).attr('href')).offset().top - 70
      }, 400);
      return false;
  });
 
})

