var typed = new Typed('.typing', {
    strings: ['Web Developer', 'CEO DevFolio', 'Web Designer', 'Graphic Designer', 'Frontend Developer '],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true
});
let aboutSectionOffset = $("#about").offset().top;
let counterSectionOffset = $("#counters").offset().top;
let counterindex = 0;
$(window).scroll(function () {
    let scrollTop = window.scrollY;

    if (scrollTop > 300) {
        $(".navbar").css({ "background-color": "white", "box-shadow": "0 10px 30px -8px rgba(0, 0, 0, 0.3)", "padding": "10px" });
        $(".line").css("background-color", "#0078FF");
        $(".nav-link,.navbar-brand").css("color", "#0078FF");
        $("#scrollUp").fadeIn(750);
        $("nav").addClass("navbar-light");
        $("nav").removeClass("navbar-dark");

        if (scrollTop > counterSectionOffset - 600) {
            for (counterindex; counterindex < 1; counterindex++) {
                jQuery(function ($) {
                    "use strict";

                    var counterUp = window.counterUp["default"];

                    var $counters = $(".counter");


                    $counters.each(function (ignore, counter) {
                        counterUp(counter, {
                            duration: 1500,
                            delay: 16
                        });
                    });

                });
            }

        }



    }

    else {
        $(".navbar").css({ "background-color": "transparent", "box-shadow": "none", "padding": "15px" });
        $(".nav-link,.navbar-brand").css("color", "white");
        $(".line").css("background-color", "white");
        $("#scrollUp").fadeOut(750);
        $("nav").removeClass("navbar-light");
        $("nav").addClass("navbar-dark")
    }

})

$(".nav-link").click(function () {
    let currentLink = $(this).attr("href");
    let secOffset = $(currentLink).offset().top;
    $("body", "html").animate({ scrollTop: secOffset }, 1000);

})
$(document).ready(function () {
    $(".loadingScreen").fadeOut(1500);
})
$("#scrollUp").click(function () {
    $("body").animate({ scrollTop: 0 }, 2000);

})