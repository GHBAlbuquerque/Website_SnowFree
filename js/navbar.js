$(window).scroll(function() {
    if ($(window).scrollTop() > $(".navbar").height()) {
        $(".navbar").addClass('bg-white')
        $(".navbar-link").addClass("dark")
        $(".navbar-logo").addClass('logodark')
        $(".navbar .material-icons").addClass('burguer-black')
    } else {
        $(".navbar").removeClass('bg-white')
        $(".navbar-link").removeClass("dark")
        $(".navbar-logo").removeClass('logodark')
        $(".navbar .material-icons").removeClass('burguer-black')
    }
});


$(".navbar-burguer").on('click', function () {
    $(".burguer-list").toggle("slow")
});

$(document).on('click', function (e) {
    if ($(".burguer-list").is(":visible") 
    && !$(e.target).hasClass("material-icons")) {
        $(".burguer-list").toggle("slow")
    }
})