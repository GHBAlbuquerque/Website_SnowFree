
$(".navbar-burguer").on('click', function () {
    $(".burguer-list").toggle("slow")
});

$(document).on('click', function (e) {
    if ($(".burguer-list").is(":visible") 
    && !$(e.target).hasClass("material-icons")) {
        $(".burguer-list").toggle("slow")
    }
})