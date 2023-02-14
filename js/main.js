$(function () {

    $('.main_slide').slick({
        arrows: false,
    });

    $('#mainVisual .main_arrows i:first-child').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });
    $('#mainVisual .main_arrows i:last-child').on('click', function () {
        $('.main_slide').slick('slickNext')
    });
})