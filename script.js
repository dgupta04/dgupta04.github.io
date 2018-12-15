$(document).ready(function(){
	$('.name').mouseover(function(){
		$('.under').animate({
			width : "15%",
			left : "42.5%"
		},200);
	});
	$('.name').mouseout(function(){
		$('.under').animate({
			width : "10%",
			left : "45%"
		},200);
	});
	$('.explore').click(function(){
		$('html').animate({
			scrollTop : $('.page1').offset().top
		});		
	});
	paddP = $('.page2').innerHeight() - $('.page2').height()
	$('.page2').css({'top': $('.page1').offset().top + $('.page1').height()});
	$('.genSubHead').css('margin-left', -($('.genSubHead').width()/2))
	$('.page3').css({'top': $('.page2').offset().top + $('.page2').height() + paddP});
	$('.connectCont').css('margin-left', -($('.connectCont').width()/2));
	// $('nav').css('top', '-60px');
	var scroll = 0;
	$(window).on('scroll',function(){
	if($(window).scrollTop() > $('.page1').offset().top -60)
		{$('nav').css('top',"0px");}
	else{ $('nav').css('top', "-60px");}
	if($(window).scrollTop() > $('.page2').offset().top -60 && $(window).scrollTop() < $('.page3').offset().top -60 ){
		$('.nameAbb').css('color', "#fff");
		$('nav').css('background-color', "#000");
		$('li').addClass('scrollLi');
	}
	else{
		$('.nameAbb').css('color', "#000");
		$('nav').css('background-color', "rgba(255,255,255,0.9)");
		$('li').removeClass('scrollLi');
	}
	});
	$('#navItem1 , .nameAbb').click(function(){
		$('html').animate({
			scrollTop : 0
		});		
	});
	$('#navItem2').click(function(){
		$('html').animate({
			scrollTop : $('.page1').offset().top
		});		
	});
	$('#navItem3').click(function(){
		$('html').animate({
			scrollTop : $('.page2').offset().top
		});		
	});
	$('#navItem4').click(function(){
		$('html').animate({
			scrollTop : $('.page3').offset().top
		});		
	});
});

