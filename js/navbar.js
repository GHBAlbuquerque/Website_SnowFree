
$(".navbar-burguer").on('click', function(){
    $(".navbar-list").toggle("slow")
});

$(".navbar-list").on('click', function(){
    if (!$(this).hasClass("navbar-item")) {
        $(this).toggle("slow")
    }

});