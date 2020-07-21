


// $(window).resize(function(){
//     $('body').css('padding-bottom', $('footer').height() + 32);
// });

// $(document).on("click","",function() {
 
// }); 

$(document).ready(function() {
     //$('body').css('padding-bottom', $('footer').height() + 32);

    $('.top_slider .slider ,.brands .item-wrap').owlCarousel({
	    loop:true,
        nav:false,
        margin: 40,
		dots:true,
		autoplay:true,
		autoplayTimeout:4000,
		autoplayHoverPause:true,
        //navText : ["<img src='../img/nav2.png'>","<img src='../img/nav1.png'>"],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
    });

    $('.product_wrap .slider').owlCarousel({
	    loop:true,
        nav:true,
        margin: 40,
        dots:true,
        navText : ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
    });
});

$(document).on("click",".m-lines",function() {
	$(this).toggleClass('open');

    if ($(this).hasClass("open")) {
        $('.popup_menu').fadeIn();
        $('body').addClass('hidden-b');
    }else{
        $('.popup_menu').fadeOut();
        $('body').removeClass('hidden-b');
    }
}); 


$(document).on("click",".close-popup",function() {
    $('.popup').fadeOut();
    $('.m-lines').removeClass('open');
    $('body').removeClass('hidden-b');
});

$(document).on("click",".popup_menu .bottom-wrap .right",function() {
	$(this).toggleClass('active');

    if ($(this).hasClass("active")) {
        $('.popup_menu ul.dropdown').addClass('open');
    }else{
        $('.popup_menu ul.dropdown').removeClass('open');
    }
}); 


 



$(window).scroll(function() {
	if(!$('.back_home').length) return;
	
    var fixtop = $('main').offset().top + 10;
    var fixbottom = $('main').height() + ($('main').offset().top) - $('.back_home').height();
    var fixbottomTop = $('main').height() - $('.back_home').height() +320;
    var scroll = $(window).scrollTop();

    if ($('.back_home a').length > 0) { 

        if(scroll >= fixtop && scroll <= fixbottom) {
            $('.back_home').css({
                position: 'fixed',
				top: '76' + '%',
				display: 'block'
            });
        }

        if(scroll < fixtop ) {
            $('.back_home').css({
				position: 'static',
				display: 'none'
            });
        }else{
            if(scroll >= fixbottom) {
                $('.back_home').css({
                    position: 'absolute',
					top: fixbottomTop + 'px',
					display: 'block'
                });
            }
        }

 
    }else{
        $('.back_home').css({
			position: 'static',
			display: 'none'
        });
    }
});



