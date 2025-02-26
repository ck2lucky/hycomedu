
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



$('#slide').slick({
    dots: true,
    infinite: true,
    speed: 900,    
    autoplay: true    
});

$(".national").click(
    function(){
        $(".popup").hide();
        $(".popup_slide").show();
    }
);
$(".close").click(
    function(){
        $(".popup").hide();
    }
);


$('#intro').slick({
    dots: true,
    infinite: true,
    speed: 900,    
    autoplay: true    
});

$(".intro").click(
    function(){
        $(".popup").hide();
        $(".popup_intro").show();
    }
);
$(".map").click(
    function(){
        $(".popup").hide();
        $(".popup_map").show();
    }
);

