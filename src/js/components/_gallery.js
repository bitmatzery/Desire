import $ from "jquery";
import mixitup from 'mixitup';

$(function () {
// mixitup gallery
    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living'
        }
        });
})

console.log('On gallery');