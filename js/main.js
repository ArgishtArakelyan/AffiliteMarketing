


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
 
    $('.review .slider .item-wrap').owlCarousel({
	    loop:true,
        nav: true,
        margin: 20,
		dots:true,
		autoplayHoverPause:true,
        navText : ["<img src='/wp-content/themes/blankslate/assets/img/nav4.png'>","<img src='/wp-content/themes/blankslate/assets/img/nav5.png'>"],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
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


$(document).on("click",".setting .edit_information_btn",function() {
    $(this).parents('.item').find('.edit-wrap').slideDown();

    if($(this).parents('.item').find('.edit-wrap').css('display') == 'block'){
        $(this).parent().parent('.hide').slideUp();
    } 
});

$(document).on("click",".setting .cancel",function() {
    $(this).parents('.edit-wrap').slideUp();
    $(this).parents('.item').find('.hide').slideDown();
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



// dropdown-open
$('.drop-toggle').on('click', function(e) {
    $('.drop-toggle').not(this).removeClass('open');
    $(this).toggleClass('open');
    e.stopPropagation(); 
});

$('.dropdown-wrap').on('click', function(e) {
     e.stopPropagation(); 
});
 
$('html').click(function() {
    $('.drop-toggle').removeClass('open');
});
// dropdown-open









// pagination
let pages = 17;

document.getElementById('pagination').innerHTML = createPagination(pages, 1);

function createPagination(pages, page) {
  let str = '<ul>';
  let active;
  let pageCutLow = page - 1;
  let pageCutHigh = page + 1;

  if (page > 1) {
    str += '<li class="page-item previous no"><a onclick="createPagination(pages, '+(page-1)+')"><i class="fas fa-chevron-left"></i></a></li>';
  }
  
  if (pages < 6) {
    for (let p = 1; p <= pages; p++) {
      active = page == p ? "active" : "no";
      str += '<li class="'+active+'"><a onclick="createPagination(pages, '+p+')">'+ p +'</a></li>';
    }
  }

  else {

    if (page > 2) {
      str += '<li class="no page-item"><a onclick="createPagination(pages, 1)">1</a></li>';
      if (page > 3) {
          str += '<li class="out-of-range"><a onclick="createPagination(pages,'+(page-2)+')">...</a></li>';
      }
    }
  
    if (page === 1) {
      pageCutHigh += 2;
    } else if (page === 2) {
      pageCutHigh += 1;
    }
 
    if (page === pages) {
      pageCutLow -= 2;
    } else if (page === pages-1) {
      pageCutLow -= 1;
    }

    for (let p = pageCutLow; p <= pageCutHigh; p++) {
      if (p === 0) {
        p += 1;
      }
      if (p > pages) {
        continue
      }
      active = page == p ? "active" : "no";
      str += '<li class="page-item '+active+'"><a onclick="createPagination(pages, '+p+')">'+ p +'</a></li>';
    }
  
    if (page < pages-1) {
      if (page < pages-2) {
        str += '<li class="out-of-range"><a onclick="createPagination(pages,'+(page+2)+')">...</a></li>';
      }
      str += '<li class="page-item no"><a onclick="createPagination(pages, pages)">'+pages+'</a></li>';
    }
  }

  if (page < pages) {
    str += '<li class="page-item next no"><a onclick="createPagination(pages, '+(page+1)+')"><i class="fas fa-chevron-right"></i></a></li>';
  }
  str += '</ul>';
 
  document.getElementById('pagination').innerHTML = str;
  return str;
}

 // pagination