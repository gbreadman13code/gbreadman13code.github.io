$(document).ready(function () {
    $('.mobile-menu-button').click(function (e) { 
        $('.all-wrap').toggleClass('slide');
        $('.burger-menu-line1').toggleClass('burger-menu-line1-active');
        $('.burger-menu-line2').toggleClass('burger-menu-line2-active');
        $('.burger-menu-line3').toggleClass('burger-menu-line3-active');
    });
});