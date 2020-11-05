$(".navbar-link").hover(function () {
    $(this).toggleClass("active");
/*        Waves.ripple('.navbar-link')*/
});

$(".article-card").hover(function () {
    $(this).toggleClass("lighten-2");
});

/*$(document).ready(function () {
    if $("input[name=gender]:radio").click(function () {
        if ($("#small-btn").hasClass("active"))
            $(".plot-gui-box").addClass("plot-gui-sm").removeClass("plot-gui-st");
        else if ($("#standard-btn").hasClass("active"))
            $(".plot-gui-box").addClass("plot-gui-st").removeClass("plot-gui-sm");
        return false;
    });
});*/

const changePlot = (size) => {
    const addClass = size === "sm" ? "plot-small" : "plot-std";
    const remClass = size === "sm" ? "plot-std" : "plot-small";
    document.getElementById("plot-gui-box").classList.add(addClass);
    document.getElementById("plot-gui-box").classList.remove(remClass);
}

/*$(document).ready(function () {
    $(".plot-btn").click(function () {
        if ($("#small-btn").hasClass("active"))
            $(".plot-gui-box").addClass("plot-gui-sm").removeClass("plot-gui-st");
        else if ($("#standard-btn").hasClass("active"))
            $(".plot-gui-box").addClass("plot-gui-st").removeClass("plot-gui-sm");
        return false;
    });
});*/

/*$(document).ready(function () {
    setTimeout(function () { Waves.ripple('.myElement') }, 3000);
});*/