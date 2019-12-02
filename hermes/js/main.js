$(document).ready(function () {
    $('.mobile-menu-button').click(function (e) { 
        $('.all-wrap').toggleClass('slide');
        $('.burger-menu-line1').toggleClass('burger-menu-line1-active');
        $('.burger-menu-line2').toggleClass('burger-menu-line2-active');
        $('.burger-menu-line3').toggleClass('burger-menu-line3-active');
    });
    $('.question1').click(function () { 
        $('.answer1').toggleClass('slide-up');
        $('.answer-wrap1').toggleClass('answer-wrap-empty')
    });
    $('.question2').click(function () { 
        $('.answer2').toggleClass('slide-up');
        $('.answer-wrap2').toggleClass('answer-wrap-empty')
    });
    $('.question3').click(function () { 
        $('.answer3').toggleClass('slide-up');
        $('.answer-wrap3').toggleClass('answer-wrap-empty')
    });
    $('.question4').click(function () { 
        $('.answer4').toggleClass('slide-up');
        $('.answer-wrap4').toggleClass('answer-wrap-empty')
    });
    $('.question5').click(function () { 
        $('.answer5').toggleClass('slide-up');
        $('.answer-wrap5').toggleClass('answer-wrap-empty')
    });
    $('.question6').click(function () { 
        $('.answer6').toggleClass('slide-up');
        $('.answer-wrap6').toggleClass('answer-wrap-empty')
    });
    $('.question7').click(function () { 
        $('.answer7').toggleClass('slide-up');
        $('.answer-wrap7').toggleClass('answer-wrap-empty')
    });
    $("a").click(function() {
    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
        duration: 500,
        easing: "swing"
    });
    return false;
    });
});