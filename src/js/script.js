/* $(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron left solid.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron right solid.svg"></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
      });
  }); */



  $(document).ready(function(){
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    

    function toggleSlide(item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      })
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
  });

  const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    navPosition: "bottom",
    swipeAngle: false,
    responsive: {
      320: {
        edgePadding: 10,
        gutter: 10,
        items: 1,
        nav: true,
        navPosition: "bottom"
      },
      575: {
        edgePadding: 10,
        gutter: 10,
        items: 1,
        nav: true,
        navPosition: "bottom"
      },
      767: {
        items: 1,
        nav: true,
        navPosition: "bottom"
      },
      991: {
        items: 1,
        nav: true,
        navPosition: "bottom"
      },
      1100: {
        items: 1,
        nav: false
      }
    }
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });