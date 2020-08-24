(function () {

    $(".blog-navicon").on('click', function() {
        $(".blog-navlist").slideToggle(800)
        $(".blog-navicon i").toggleClass("light")
    })

})();