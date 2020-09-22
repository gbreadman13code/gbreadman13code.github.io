$(document).ready(function () {
    $('.casual-btn').click(function (e) {
        e.preventDefault();
        if ($('.erotic').hasClass('show')) {
            $('.erotic').removeClass('show');
            $('.erotic').addClass('hide');
            $('.casual').removeClass('hide');
            $('.casual').addClass('show');
            $(this).addClass('btn-bg_active');
            $('.erotic-btn').removeClass('btn-bg_active');
        }
    });
    $('.erotic-btn').click(function (e) {
        e.preventDefault();
        if ($('.erotic').hasClass('hide')) {
            $('.erotic').removeClass('hide');
            $('.erotic').addClass('show');
            $('.casual').removeClass('show');
            $('.casual').addClass('hide');
            $(this).addClass('btn-bg_active');
            $('.casual-btn').removeClass('btn-bg_active');
        }
    });
    $('.nav a').on('click', function () {
        let href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, {
            duration: 500,
            easing: "linear"
        });
        return false;
    });
    $('.buy').click(function (e) {
        e.preventDefault();
        $('.modal').fadeIn(200);
        var img = $(this).parent().prevObject.context.parentElement.children[1].currentSrc;
        $('.modal img').attr('src', img);
        var name = $(this).parent().prevObject.context.parentElement.children[2].innerText;
        $('.modal .name').text(name);
    });
    $('.close').click(function (e) {
        e.preventDefault();
        $('.modal').fadeOut(200);
    });
    $('.modal .buy').click(function (e) { 
        $('.modal').fadeOut(1);
        $('.modal-thanks').fadeIn(1);
        $('.modal-thanks').fadeOut(3000, 'linear');
    });
});
