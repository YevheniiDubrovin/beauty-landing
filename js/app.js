$(document).ready(function() {
//burger 
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    let powerHouse = $("#power_house");
    let topup = $("#topup");

// scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
    
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
    
        $("html, body").animate({
            scrollTop: elementOffset 
        }, 800);
    });
});
