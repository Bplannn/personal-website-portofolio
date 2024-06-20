$(document).ready(function() {

    $("#about_scroll").fadeOut();
    $("#Project_scroll").fadeOut();
    $("#contact_scroll").fadeOut();

    $("#about").click(function() {
        $("#index").fadeOut();
        $("#about_scroll").fadeIn();
        $('#about_left').addClass('animated  slideInRight');
        $('#about_right').addClass('animated slideInLeft');
    });
    $("#Project").click(function() {
        $("#index").fadeOut();
        $("#Project_scroll").fadeIn();
        $('#Project_left').addClass('animated slideInLeft');
        $('#Project_right').addClass('animated slideInRight');
    });
    $("#contact").click(function() {
        $("#index").fadeOut();
        $("#contact_scroll").fadeIn();
        $('#contact_left').addClass('animated slideInLeft');
        $('#contact_right').addClass('animated slideInRight');
    });

    $(".back").click(function() {
        $(".pages").fadeOut();
        $("#index").fadeIn();
        $('#index_left').addClass('animated slideInRight');
        $('#index_right').addClass('animated slideInLeft');
    });

});