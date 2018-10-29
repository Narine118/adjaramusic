$(function () {
    // sliders
    if ($(".header-slider").length) {
        $(".header-slider").slick({
            dots: true,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            prevArrow: '<button type="button" class="slick-prev"><span class="icon-keyboard_arrow_left"></span></button>',
            nextArrow: '<button type="button" class="slick-next"><span class="icon-keyboard_arrow_right"></span></button>',
             responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                    
                        arrows:false,
                        dots:true
                    }
                }
            ]
          
  
  
        });
    }
    if ($(".music-slider").length) {
        $(".music-slider").slick({
            dots: false,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 2,
            prevArrow: '<button type="button" class="slick-prev"><span class="icon-keyboard_arrow_left"></span></button>',
            nextArrow: '<button type="button" class="slick-next"><span class="icon-keyboard_arrow_right"></span></button>',
             responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        infinite: true,
                        dots:false,
                        arrows:false
                    }
                },
                {
                    breakpoint: 860,
                    settings: {
                        slidesToShow: 2,
                    centerMode: false,
                        dots:false,
                        arrows:false
                    }
                },
               {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        centerMode: false,
                        dots:false,
                        arrows:false
                    }
                }
            ]
          
  
        });
    }
    if ($(".video-slider").length) {
        $(".video-slider").slick({
            dotvideos: false,
            arrows: false,
            slidesToShow: 6,
            slidesToScroll: 2,
             responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        infinite: true,
                        dots:false,
                    }
                },
                {
                    breakpoint: 860,
                    settings: {
                        slidesToShow: 2,
                    centerMode: false,
                        dots:false,
                    }
                },
               {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        centerMode: false,
                        dots:false,
                    }
                }
            ]
          
  
        });
    }
    if ($(".two-col-slider").length) {
        $(".two-col-slider").slick({
            dotvideos: false,
            arrows: false,
            slidesToShow: 6,
            slidesToScroll: 2,
             responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        infinite: true,
                        dots:false,
                    }
                },
                {
                    breakpoint: 860,
                    settings: {
                        slidesToShow: 2,
                    centerMode: false,
                        dots:false,
                    }
                },
               {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        centerMode: false,
                        dots:false,
                    }
                }
            ]
          
  
        });
    }
})