
	/* MENU RESPONSIVE
	============================================== */
	$(function() {
		console.log('@@@@@@@@@@@@@@@@')
	});

/* HOME SLIDER / MAPS
	============================================== */
	var $menuHeight   = parseInt($('header').height(), 10);       // MENU HEIGHT
	var $windowHeight = parseInt($(window).height(), 10);         // WINDOW HEIGHT
	var $pageHeight   = $windowHeight - $menuHeight;              // AVAILABLE HEIGHT
	$('.fixed-height', document.body).css({'height': $pageHeight+'px'})          // SETTING HEIGHT
	$('.fixed-height-map', document.body).css({'height': ($pageHeight-78)+'px'}) // SETTING HEIGHT

	var $homeSlider = $('.home-slider', '#home-slide');
	$(document).ready(function($) {
		$homeSlider.carousel({ visible: 1, autoRotate : 7000, speed: 1000});
		$homeSlider.find('figure').each(function(index, object){
			var $image = $(this).data('image');
			$(this).css({'background': 'url('+$image+')'});
		});
	});

