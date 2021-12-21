      var swiper = new Swiper('.swiper-news', 
      {
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
          250: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          720: {
            slidesPerView: 3,
            spaceBetween: 30,
          }
        },
        mousewheel: true,
        autoplay: 
        {
          delay: 2750,
          disableOnInteraction: false,
        },
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
      });