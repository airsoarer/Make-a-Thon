(function(){
    $(document).ready(init);

    function init(){
        $("#about").on("click", scrollAbout);
        $("#whenWhere").on("click", scrollWhen);
        $("#signUp").on("click", scrollSignUp);
        $("#sponsors").on("click", scrollSponsors);
    }

    function scrollWhen(){
        $("html, body").animate({
            scrollTop: $(".whenWhere").offset().top
        }, 1000);
    }

    function scrollSignUp(){
        $("html, body").animate({
            scrollTop: $(".whenWhere").offset().top
        }, 1000);
    }

    function scrollSponsors(){
        $("html, body").animate({
            scrollTop: $(".sponsors").offset().top
        }, 1000);
    }

    function scrollAbout(){
        $("html, body").animate({
            scrollTop: $(".about").offset().top
        }, 1000);
    }
})();