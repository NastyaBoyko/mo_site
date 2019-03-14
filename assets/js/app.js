$(document).ready(function(){
	$('.owl-subordinate').owlCarousel({
    loop:true,
    navigation: true,
    navText: ["<div class='round square-btn btn left'><img src='assets/img/right-arrow.svg'></div>","<div class='round square-btn btn right'><img src='assets/img/right-arrow.svg'></div>"],
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
	});
  $('.owl-news').owlCarousel({
    loop:true,
    navigation: true,
    navText: ["<div class='round square-btn btn left'><img src='assets/img/right-arrow.svg'></div>","<div class='round square-btn btn right'><img src='assets/img/right-arrow.svg'></div>"],
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items: 1,
            nav:true,
            loop:false
        }
    }
	});

	$('.actual-links-menu').hide();

	$('#additions-btn').click(function(e){
		e.preventDefault();
		$('.actual-links-menu').slideToggle( "normal");
	});

	$('.news-main').css('height', calcNewsHeight());
});

function calcNewsHeight() {
	var mainHeight = $('.main').outerHeight();
	var bannersHeight = $('.banners').outerHeight();
	return (mainHeight - bannersHeight - 170);
}