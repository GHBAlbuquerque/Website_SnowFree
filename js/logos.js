(function() {

let carousel_container = $('.carousel-container');
let carousel = $('.logos-carousel');
let logo = $(carousel).find('li');
let clickCount = 0
let canClick = true;

let itemWidth = carousel.find('li:first').width()+50; //margin

carousel.width(itemWidth*logo.length);

$('#right').on('click', function() {
    if(canClick == true) {
        canClick = false;
        clickCount++;

    }
});

})();