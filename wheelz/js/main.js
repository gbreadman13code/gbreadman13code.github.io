$(document).ready(function () {
    $('.menu-button').click(function (e) { 
        e.preventDefault();
        $('.menu-desktop , .close-menu').toggleClass('d-none');
    });
    $('.close-menu').click(function (e) {
        e.preventDefault();
        $('.menu-desktop , .close-menu').toggleClass('d-none');
    })
});