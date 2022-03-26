import $ from "jquery";

$(function () {

if($(window).width() < 651){
    $('works-path__item--measurements').appendTo($('works-path__items-box'));
};

})

console.log('On @media');

