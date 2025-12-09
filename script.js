$(document).ready(function () {
    $("h2").click(function () {
        $(this).nextUntil("h2").slideToggle();
    });
});
