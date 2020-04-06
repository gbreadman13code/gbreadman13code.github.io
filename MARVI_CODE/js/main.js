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
        $('.cuts-img').html('<div class="row"><div class="col-6 col-md-4"><img src="./img/cuts/cuts1.jpg" alt=""></div><div class="col-6 col-md-4"><img src="./img/cuts/cuts2.jpg" alt=""></div><div class="col-6 col-md-4"><img src="./img/cuts/cuts3.jpg" alt=""></div><div class="col-6 col-md-4"><img src="./img/cuts/cuts4.jpg" alt=""></div><div class="col-6 col-md-4"><img src="./img/cuts/cuts5.jpg" alt=""></div><div class="col-6 col-md-4"><img src="./img/cuts/cuts6.jpg" alt=""></div></div>');
    });
    $('.nail').click(function (e) { 
        e.preventDefault();
        $('.slideNail').slideToggle(400)
        $('.nail-img').html('<div class="row"><div class="col-6 col-md-4"><img src="./img/manicure/man1.jpg" alt=""></div><div class="col-6 col-md-4"><img src="./img/manicure/man2.jpg" alt=""></div><div class="col-6 col-md-4"><img src="./img/manicure/man3.jpg" alt=""></div><div class="col-6 col-md-4"><img src="./img/manicure/man4.jpg" alt=""></div><div class="col-6 col-md-4"><img src="./img/manicure/man5.jpg" alt=""></div><div class="col-6 col-md-4"><img src="./img/manicure/man6.jpg" alt=""></div></div>');
    });
    $('.express').click(function (e) { 
        e.preventDefault();
        $('.slideExpress').slideToggle(400)
        $('.express-img').html('<div class="row"><div class="col-6 col-md-4"><img src="./img/4hands/4hands1.jpg" alt=""></div><div class="col-6 col-md-4"><img src="./img/4hands/4hands2.jpg" alt=""></div><div class="col-6 col-md-4"><img src="./img/4hands/4hands3.jpg" alt=""></div><div class="col-6 col-md-4"><img src="./img/4hands/4hands4.jpg" alt=""></div></div>')
    });
    $('.brows').click(function (e) { 
        e.preventDefault();
        $('.slideBrows').slideToggle(400)
        $('.brows-img').html('<div class="row"><div class="col-6 col-md-4"><img src="./img/brows/brows1.jpg" alt=""></div><div class="col-6 col-md-4"><img src="./img/brows/brows2.jpg" alt=""></div><div class="col-6 col-md-4"><img src="./img/brows/brows3.jpg" alt=""></div><div class="col-6 col-md-4"><img src="./img/brows/brows4.jpg" alt=""></div><div class="col-6 col-md-4"><img src="./img/brows/brows5.jpg" alt=""></div><div class="col-6 col-md-4"><img src="./img/brows/brows6.jpg" alt=""></div></div>')
    });
    $('.makeup').click(function (e) { 
        e.preventDefault();
        $('.slideMakeUp').slideToggle(400)
        $('.makeup-img').html('<div class="row"><div class="col-6 col-md-4"><img src="./img/make/make1.jpg" alt=""></div><div class="col-6 col-md-4"><img src="./img/make/make2.jpg" alt=""></div><div class="col-6 col-md-4"><img src="./img/make/make3.jpg" alt=""></div><div class="col-6 col-md-4"><img src="./img/make/make4.jpg" alt=""></div><div class="col-6 col-md-4"><img src="./img/make/make5.jpg" alt=""></div><div class="col-6 col-md-4"><img src="./img/make/make6.jpg" alt=""></div></div>')
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
        $(window).unbind('scroll');
        $('.map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A6f395da07b4cc10029b3d2589ad9899f17ad6d15aed62d554f3955a7e1fe09f9&amp;width=100%25&amp;height=373&amp;lang=ru_RU&amp;scroll=true"> </script>');
    }
}));