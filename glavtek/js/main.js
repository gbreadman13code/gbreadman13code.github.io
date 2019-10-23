$(document).ready(function() {
    $("body").on('click', '[href*="#"]', function(e){
        var fixed_offset = 0;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
        e.preventDefault();
    });
    $(function() {$(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('.scroll-top').fadeIn(500);
        } else {
            $('.scroll-top').fadeOut(500);
        }
        });
        $('scroll-top').click(function() {
            $('body,html').animate({scrollTop:0},300);
        });
    });
    $('.burger-menu').click(function (e) { 
        $(this).css('transform', 'translate(1000px)');
        $('.content-wrap').css({'transform': 'translate(-300px)',
                                'transition': '0.7s'});
        $('.mobile-menu .close, .nav-link').click(function (){
            $('.content-wrap').css({'transform': 'translate(0px)',
                                    'transition': '0.00000000001s'});
                                    $('.burger-menu').css('transform', 'translate(0px)');
        });
    });
});