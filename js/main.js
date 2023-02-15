$(function () {

    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
    });

    $('#mainVisual .main_arrows i:first-child').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });
    $('#mainVisual .main_arrows i:last-child').on('click', function () {
        $('.main_slide').slick('slickNext')
    });

    $('.product_slide').slick({
        arrows: false,
        dots: false,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $('.map_menu>li').on('click', function (event) {
        event.preventDefault();
        var idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.inner .map').eq(idx).addClass('on').siblings().removeClass('on')
    })

})