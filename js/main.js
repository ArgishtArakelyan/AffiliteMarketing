


// $(window).resize(function(){
//     $('body').css('padding-bottom', $('footer').height() + 32);
// });

// $(document).on("click","",function() {
 
// }); 

$(document).ready(function() {
     //$('body').css('padding-bottom', $('footer').height() + 32);

    $('.top_slider .slider').owlCarousel({
	    loop:true,
        nav:false,
        margin: 40,
		dots:true,
		autoplay:true,
		autoplayTimeout:3000,
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
        $('.mobail_menu').addClass('open');
    }else{
        $('.mobail_menu').removeClass('open');
    }
}); 
