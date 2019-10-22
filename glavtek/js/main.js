$(document).ready(function() {
    $("body").on('click', '[href*="#"]', function(e){
        var fixed_offset = 0;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
        e.preventDefault();
    });
 });
$(function() {$(window).scroll(function() {
    if($(this).scrollTop() != 0) {
        $('.scroll-top').fadeIn();
    } else {
        $('.scroll-top').fadeOut();
    }
    });
    $('scroll-top').click(function() {
        $('body,html').animate({scrollTop:0},1000);
    });
});