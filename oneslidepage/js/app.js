$(function () {

    //activate buttons for scrolling
    animateScroll(".btn-down");
    animateScroll(".btn-up");

    activatePanning();

});

var activatePanning = function () {
    if (Modernizr.touch) {
        $("#touch").addClass("touch-enabled");
    } else if (navigator.maxTouchPoints > 1) {
        $("#touch").addClass("touch-enabled");
    } else if (navigator.msMaxTouchPoints > 1) {
        $("#touch").addClass("touch-enabled");
    }
}

var animateScroll = function (triggerBtn) {
    $(triggerBtn).bind("click", function (event) {
        var $anchor = $(this);

        var scroll_top = $($anchor.attr("href")).offset().top;
        $('html, body').stop().animate({
            'scrollTop': scroll_top
        }, 900, 'easeInOutExpo');
        event.preventDefault();

        console.log(scroll_top);
        console.log("scrolled");
    });
};