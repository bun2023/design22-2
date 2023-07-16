"use strict";

{
  const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 9000,
      disableOnInteraction:false,
    },
    speed: 3000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // タブ
  // 任意のタブにURLからリンクするための設定
  function GethashID (hashIDName) {
    if (hashIDName) {
      $('.tab li').find('a').each(function() {
        let idName = $(this).attr('href');
        
        if(idName === hashIDName) {
          let parentElm = $(this).parent();
          $('.tab li').removeClass("active");
          $(parentElm).addClass("active");
          $(".area").removeClass("is-active");
          $(hashIDName).addClass("is-active");
        }
      });
    }
  }
  
}