import $ from "jquery";

$(function () {
    $('.header__btn').on('click', function(){
        $('.rightside-menu').removeClass('rightside-menu--close')
    });
    $('.rightside-menu__close').on('click', function(){
        $('.rightside-menu').addClass('rightside-menu--close')
    });

    // Альтернативный слайдер через jquery
    //$('.top__slider').slick();
})

console.log('On rightside-menu');