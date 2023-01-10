$(document).ready(function(){

    // 햄버거 메뉴
    var $ham = $('.ham_menu');
    var $hamMenu1 = $('.ham_menu span:nth-child(1)');
    var $hamMenu2 = $('.ham_menu span:nth-child(2)');
    var $hamMenu3 = $('.ham_menu span:nth-child(3)');

    $($ham).on('click', function(){
        $(this).toggleClass('active')
        $('.ham_slide_wrap').toggleClass('active');
        $('.ham_slide_bg').toggleClass('active');

        if($(this).hasClass('active')){
            $(this).children($hamMenu1).addClass('on');
            $(this).children($hamMenu2).addClass('on');
            $(this).children($hamMenu3).addClass('on');
            $('body').css('overflow', 'hidden');
            window.onresize = function(){
                document.location.reload();
          };
        }else{
            $(this).children($hamMenu1).removeClass('on');
            $(this).children($hamMenu2).removeClass('on');
            $(this).children($hamMenu3).removeClass('on');
            $('body').css('overflow', 'unset');
        }

    });

    // 햄버거 메뉴 슬라이드

    var $hamTitle =$('.ham_slide_wrap .ham_slide_menu > .ham_slide_title');
    var $hamsubTitle =$('.ham_slide_wrap .ham_slide_menu .ham_sub_title > li > .ham_slide_title');

    $($hamTitle).on('click', function(){

        $('.ham_sub_title').slideUp();
        // $('.ham_sub_menu').slideUp();

        if($(this).next().css('display') == 'none'){
            $(this).next().slideDown();
            // $(this).children().addClass('on');
        }else{
            $(this).next().slideUp();
            // $(this).children().removeClass('on');
        }

    });

    $($hamsubTitle).on('click', function(){

        $('.ham_sub_menu').slideUp();

        if($(this).next().css('display') == 'none'){
            $(this).next().slideDown();
            // $(this).children().addClass('on');
        }else{
            $(this).next().slideUp();
            // $(this).children().removeClass('on');
        }

    });

    // 푸터 메뉴
    var $footMenu = $('.m_menubox_title');
    var $footsubMenu = $('.footer .foot_top .foot_menu ul');
    var $footIcon = $('.m_menubox_title i');

    $($footMenu).on('click', function(){

        $($footsubMenu).slideUp();

        if($(this).next().css('display') == 'none'){
            $(this).next().slideDown();
            $(this).children().addClass('on');
        }else{
            $(this).next().slideUp();
            $(this).children().removeClass('on');
        }

    });

     // header 스크롤 다운
     var didScroll;
     var lastScrollTop = 0;
     var delta = 5;
     var navbarHeight = $('.header').outerHeight();
 
     $(window).scroll(function (event) {
         didScroll = true;
     });
 
     setInterval(function () {
         if (didScroll) {
             hasScrolled();
             didScroll = false;
         }
     }, 250);
 
     function hasScrolled() {
         var st = $(this).scrollTop();
 
         if (Math.abs(lastScrollTop - st) <= delta)
             return;
 
         if (st > lastScrollTop && st > navbarHeight) {
             // Scroll Down
             $('header').removeClass('nav-down').addClass('nav-up');
         } else {
             // Scroll Up
             if (st + $(window).height() < $(document).height()) {
                 $('header').removeClass('nav-up').addClass('nav-down');
             }
         }
 
         lastScrollTop = st;
     }
 
    
})