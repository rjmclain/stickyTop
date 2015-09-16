// JavaScript source code
var distance = $('.stick-top').offset().top,
    $window = $(window);

$window.scroll(function () {
    if ($window.scrollTop() >= distance) {
        // Your div has reached the top
        $('.stick-top').addClass('stuck');
    }
    else {
        $('.stick-top').removeClass('stuck');
    }
});