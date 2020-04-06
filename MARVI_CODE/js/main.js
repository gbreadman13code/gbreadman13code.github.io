$(document).ready(function () {

    $("#phone").mask("+7 (999) 999-99-99");

    jQuery("a.scrollto").click(function () {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
        return false;
        });

// слайдер услуг

    $('.cuts').click(function (e) { 
        e.preventDefault();
        $('.slideCuts').slideToggle(400)
    });
    $('.nail').click(function (e) { 
        e.preventDefault();
        $('.slideNail').slideToggle(400)
    });
    $('.express').click(function (e) { 
        e.preventDefault();
        $('.slideExpress').slideToggle(400)
    });
    $('.brows').click(function (e) { 
        e.preventDefault();
        $('.slideBrows').slideToggle(400)
    });
    $('.makeup').click(function (e) { 
        e.preventDefault();
        $('.slideMakeUp').slideToggle(400)
    });

// слайдер цен

    $('.eyelashes').click(function (e) { 
        e.preventDefault();
        $('.eyelashesSlide').slideToggle(400)
    });
    $('.eyebrows').click(function (e) { 
        e.preventDefault();
        $('.eyebrowsSlide').slideToggle(400)
    });
    $('.manicure').click(function (e) { 
        e.preventDefault();
        $('.manicureSlide').slideToggle(400)
    });
    $('.pedicure').click(function (e) { 
        e.preventDefault();
        $('.pedicureSlide').slideToggle(400)
    });
    $('.haircut').click(function (e) { 
        e.preventDefault();
        $('.haircutSlide').slideToggle(400)
    });
    $('.styling').click(function (e) { 
        e.preventDefault();
        $('.stylingSlide').slideToggle(400)
    });
    $('.eyemakeup').click(function (e) { 
        e.preventDefault();
        $('.eyemakeupSlide').slideToggle(400)
    });
    $('.combo').click(function (e) { 
        e.preventDefault();
        $('.comboSlide').slideToggle(400)
    });
    $('.coloring').click(function (e) { 
        e.preventDefault();
        $('.coloringSlide').slideToggle(400)
    });
    $('.care').click(function (e) { 
        e.preventDefault();
        $('.careSlide').slideToggle(400)
    });
    
// модальное окно

    $('.promotion_item').click(function (e) { 
        e.preventDefault();
    });

// мобильное меню

    $('.menu-btn').click(function (e) { 
        e.preventDefault();
        $('.mobile-menu-list').slideToggle(400)
    });

    


});

var prices = $('.prices');
var pricesTop = prices.offset().top;

$(window).bind('scroll', (function(){
    var windowTop = $(this).scrollTop();
    if (windowTop > pricesTop) {
        $('.map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A6f395da07b4cc10029b3d2589ad9899f17ad6d15aed62d554f3955a7e1fe09f9&amp;width=100%25&amp;height=373&amp;lang=ru_RU&amp;scroll=true"></script>');
        $(window).unbind('scroll');
    }
}));