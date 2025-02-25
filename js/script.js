$(".gnb > li > a").click(
    function(){
        $(this).parents("li").find(".sub").stop().slideToggle();
        if($(this).parents("li").hasClass("on") === true) {
            $(this).parents("li").removeClass("on");
        }else{
            $(this).parents("li").addClass("on");
        }    
        
    }
);


$('#slide').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    fade: true,
});

