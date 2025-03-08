$(document).ready(function(){

    // swiper
    var swiper = new Swiper(".visual_box", {
        autoplay: {
            delay: 4000, 
            disableOnInteraction: true, 
          },
        loop:true,
        speed:500,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // header
    $('.ham_menu').click(function(){
        $('nav').addClass('active');
    });
    
    $('.close').click(function(){
        $('nav').removeClass('active');
    });

    let scrollPosition = 0;

    $('.ham_menu').click(function(){
        scrollPosition = $(window).scrollTop();
        $('body').css({
            'position': 'fixed',
            'top': -scrollPosition + 'px',
            'width': '100%',
            'overflow': 'hidden'
        });
        $('nav').addClass('active');
    });
    
    $('.close').click(function(){
        $('nav').removeClass('active');
        $('body').css({
            'position': '',
            'top': '',
            'width': '',
            'overflow': ''
        });
        $(window).scrollTop(scrollPosition);
    });

    // sec01
    $('.sec01 li').each(function(index){
        $(this).attr('data-aos-delay',index * 100);
    });

    // sec02
    var sec02tit = $('.sec02 h2');
    var sec02des = $('.sec02 p');
    $(window).scroll(function(){
        $(sec02tit).add(sec02des).each(function(){
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var windowTop = $(window).scrollTop();
            var windowBottom = windowTop + $(window).height();

            if (elementBottom > windowTop && elementTop < windowBottom) {
                $(this).addClass('active');
              } else {
                $(this).removeClass('active');
            }
        });  
    });

    // topbtn
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.top_btn').addClass('active');
        }else{
            $('.top_btn').removeClass('active');
        }
    });
    $('.top_btn').click(function(){
        $('html, body').animate({scrollTop: 0}, 500);
        return false;
    });
});


AOS.init({
    duration:700
});

