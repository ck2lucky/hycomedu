
$(".gnb a").click(
    function(){
        $(".gnb a").removeClass("active");
        $(this).addClass("active");
    }
);
$(".gnb > li > a").click(
    function(){
        $(this).parents("li").find(".sub").stop().slideToggle();
        if($(this).parents("li").hasClass("on") === true) {
            $(this).parents("li").removeClass("on");
            $(".gnb a").removeClass("active");
        }else{
            $(this).parents("li").addClass("on");            
        }
    }
);





$(".national").click(
    function(){
        $(".popup").hide();
        $(".popup_slide").show();
        $('#slide').slick({
            dots: true,
            infinite: true,
            speed: 900,    
            autoplay: true    
        });
    }
);
$(".close").click(
    function(){
        $('.popup').hide();
        $(".gnb li").removeClass("on");
        $(".gnb a").removeClass("active");  
        $(".sub").slideUp();
    }
);


$(".intro").click(
    function(){
        $(".popup").hide();
        $(".popup_intro").show();
        $('#intro').slick({
            dots: true,
            infinite: true,
            speed: 900,    
            autoplay: true    
        });
    }
);
$(".map").click(
    function(){
        $(".popup").hide();
        $(".popup_map").show();
    }
);
$(".cardInfo").click(
    function(){
        $(".popup").hide();
        $(".popup_cardInfo").show();
    }
);

