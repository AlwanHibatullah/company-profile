$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 10) {
        $(".bg-navbar").css({"background-color" : "#53A65E", "transition": "500ms ease"});
    } else {
        $(".bg-navbar").css({"background" : "transparent"});
    }
});