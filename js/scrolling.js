var $doc = $('html, body');
    $('.scrollSuave').click(function() {
        $doc.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1000);
    return false;
});

$(function(){
    $(window).scroll(function(){
        var wscroll = $(window).scrollTop();
        if(wscroll > 150) {
            $('#navbar').removeClass("navbar-default").addClass("navbar-default-2");
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        }
        else{
            $('#navbar').removeClass("navbar-default-2").addClass("navbar-default");
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });
});
//Efeito skills
$(function(){
    $(window).scroll(function(){
        var cscroll = $(window).scrollTop();
        if(cscroll > 1000) {
            $("#php-1").addClass("progress-bar");
            $("#php-2").addClass("progress-bar");
            $("#csharp-1").addClass("progress-bar");
            $("#csharp-2").addClass("progress-bar");
            $("#mysql-1").addClass("progress-bar");
            $("#mysql-2").addClass("progress-bar");
            $("#java-1").addClass("progress-bar");
            $("#java-2").addClass("progress-bar");
        }
    });
});