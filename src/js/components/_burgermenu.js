import $ from "jquery";

$(function () {
    $('.header__btn-menu').on('click', function(){
        $('.menu').toggleClass('menu--open')
    });
})

console.log('On burgermenu');