/* 

Version: 1.7

*/
(function ($) {

    $(window).load(function () {
	if($('body').width()>780){
		$('#ho-header img').height($('#ho-header').height()-230);
		$('#z1-section-2 img').height($('#z1-section-2').height()-40);
		$('#z1-section-5 img').height($('#z1-section-5').height()-40);
		$('#z1-section-5 .wpb_single_image').css("top",-($('#z1-section-5 img').height()-250)/2);
		$('#home-section-3 img').height($('#home-section-3').height()-40);
		$('#home-section-7 img').height($('#home-section-7').height()-40);
		$('#home-section-7 .wpb_single_image').css("top",-($('#home-section-7 img').height()-250)/2);
		$('#home-section-9 img').height($('#home-section-9').height()/2+175);
		$('#home-section-12 img').height($('#home-section-12').height()-40);
		$('#home-section-12 .wpb_single_image').css("top",-($('#home-section-12 img').height()-250)/2);
		$('#z1-section-10 img').height($('#z1-section-10').height()-40);
		$('#z1-section-10 .wpb_single_image').css("top",-($('#z1-section-10 img').height()-250)/2);
	}
	
	$('#xd-section-2').append('<div class="vd-bg"><video autoplay loop><source src="http://zaxe.com/wp-content/uploads/2019/09/desktop_ekran_02.mp4" type="video/mp4"></video></div>');
	$('#xd-section-4').append('<div class="vd-bg"><video autoplay loop><source src="http://zaxe.com/wp-content/uploads/2019/09/desktop_ekran_04.mp4" type="video/mp4"></video></div>');
	$('#xd-section-3 .cont').append('<video autoplay loop><source src="http://zaxe.com/wp-content/uploads/2019/09/zaxe_bolum3_v2.mp4" type="video/mp4"></video>');
    
	var stop=0;
	var pos=0;
	var nextpos=0;
		
	$('a').bind('click', function(e){
		if($(this).attr('href')){
			window.location.href = $(this).attr('href');
		}
	});
	
	$('#material-pla li').mouseover(function(e) {
		var plaurl = 'https://www.efeefeoglu.com/zx/wp-content/uploads/2019/09/' + $(this).attr('data-color') + '.jpg'
		$('#material-pla img').attr('src', plaurl);
	});
	
	$('#material-abs li').mouseover(function(e) {
		var absurl = 'https://www.efeefeoglu.com/zx/wp-content/uploads/2019/09/' + $(this).attr('data-color') + '.jpg'
		$('#material-abs img').attr('src', absurl);
	});
	
	$('#material-flex li').mouseover(function(e) {
		var flexurl = 'https://www.efeefeoglu.com/zx/wp-content/uploads/2019/09/' + $(this).attr('data-color') + '.jpg'
		$('#material-flex img').attr('src', flexurl);
	});
	
	$('#z1-section-10 .vc_pagination-trigger').click(function(e) {
		$('body').animate({top: $("body").offset().top-$("#z1-section-10").offset().top}, 1);
	});
	
	
	function getCookie(name) {
	  var value = "; " + document.cookie;
	  var parts = value.split("; " + name + "=");
	  if (parts.length == 2) return parts.pop().split(";").shift();
	}
	if(!getCookie("trlang")){
		$('body').addClass( "showredirect" );
		console.log("showredirect");
	}
	
	$('.redirect-close').bind('click', function(e){
		document.cookie = "trlang=hide; path=/";
		$('.tr-redirect').css("display","none");
		$('header').animate({top:0}, 100);
	});
	
	$('.scrolltotop').bind('click', function(e){
		pos=0;
		$('body').animate({top: 0}, 500, function(){stop=0;});
		$('#home-header .vc_custom_heading').animate({ fontSize: '8vh', lineHeight: '8vh', paddingTop: 200}, 10);
		$('.text').animate({opacity:0}, 100);
		$('.image').animate({opacity:0}, 100);
		$('.slide1').animate({opacity:0}, 100);
		$('.slide2').animate({opacity:0}, 100);
		$('.slide3').animate({opacity:0}, 100);
		$('.slide1-text').animate({opacity:0}, 100);
		$('.slide2-text').animate({opacity:0}, 100);
		$('.slide3-text').animate({opacity:0}, 100);
		$('.not1').animate({opacity:0}, 100);
		$('.not2').animate({opacity:0}, 100);
		$('.not3').animate({opacity:0}, 100);
		$('.scrolltotop').css("display","none");
	});
	$.fn.z1plusUP = function() {
		  if(stop==0){
			stop=1;
			if(pos==1 ){
				$('#home-header .vc_custom_heading').animate({ fontSize: '8vh', lineHeight: '8vh', paddingTop: 200}, 500, function(){stop=0;});
				$('.scrolltotop').css("display","none");
			}
			if(pos==2){
				$('body').animate({top: 0}, 500, function(){stop=0;});
				$('#home-section-2 .text').animate({left: "-100%", opacity:0}, 500, function(){stop=0;});
				$('#home-section-2 .image').animate({right: "-100%", opacity:0}, 500, function(){stop=0;});
			}
			if(pos==3){
				$('body').animate({top: $("body").offset().top-$("#home-section-2").offset().top}, 500);
				$('#home-section-3 .slide1').animate({opacity:0}, 500);
				$('#home-section-3 .slide1-text').animate({opacity:0}, 500, function(){stop=0;});
			}
			if(pos==4){
				$('#home-section-3 .slide2').animate({opacity:0}, 500);
				$('#home-section-3 .slide3').animate({opacity:1}, 500);
				$('#home-section-3 .slide2-text').animate({opacity:0}, 500, function(){stop=0;});
			}
			if(pos==5){
				$('#home-section-3 .slide1').animate({opacity:0}, 500);
				$('#home-section-3 .slide2').animate({opacity:1}, 500);
				$('#home-section-3 .slide1-text').animate({opacity:0}, 500, function(){stop=0;});
			}
			if(pos==6){
				$('body').animate({top: $("body").offset().top-$("#home-section-3").offset().top}, 500);
				$('#home-section-4 .slide1').animate({opacity:0}, 500, function(){stop=0;});
				$('#home-section-4 .slide1-text').animate({opacity:0}, 500, function(){stop=0;});
			}
			if(pos==7){
				$('#home-section-4 .slide2').animate({opacity:0}, 500, function(){stop=0;});
				$('#home-section-4 .slide2-text').animate({opacity:0}, 500, function(){stop=0;});
			}
			if(pos==8){
				$('#home-section-4 .slide3').animate({opacity:0}, 500, function(){stop=0;});
				$('#home-section-4 .slide3-text').animate({opacity:0}, 500, function(){stop=0;});
			}
			if(pos==9){
				$('body').animate({top: $("body").offset().top-$("#home-section-4").offset().top}, 500);
				$('#home-section-5').animate({opacity:0}, 500, function(){stop=0;});
			}
			if(pos==10){
				$('body').animate({top: $("body").offset().top-$("#home-section-5").offset().top}, 500);
				$('#home-section-6 .text').animate({left: "-100%", opacity:0}, 500, function(){stop=0;});
				$('#home-section-6 .image').animate({right: "-100%", opacity:0}, 500, function(){stop=0;});
			}
			if(pos==11){
				$('body').animate({top: $("body").offset().top-$("#home-section-5-5").offset().top}, 500, function(){stop=0;});
			}
			if(pos==12){
				$('body').animate({top: $("body").offset().top-$("#home-section-6").offset().top}, 500);
				$('#home-section-7 .slide1').animate({opacity:0}, 500, function(){stop=0;});
			}
			if(pos==13){
				$('#home-section-7').delay(50).css("background-color","#FFF");
				$('#home-section-7 .slide1').animate({opacity:1}, 500);
				$('#home-section-7 .slide2').animate({opacity:0}, 500, function(){stop=0;});
			}
			if(pos==14){
				$('#home-section-7').delay(50).css("background-color","#020303");
				$('#home-section-7 .text p').delay(50).css("color","#FFF");
				$('#home-section-7 .slide1').animate({opacity:0}, 500);
				$('#home-section-7 .slide2').animate({opacity:1}, 500, function(){stop=0;});
			}
			if(pos==15){
				$('body').animate({top: $("body").offset().top-$("#home-section-7").offset().top}, 500);
				$('#home-section-8 .text').animate({opacity:0}, 500, function(){stop=0;});
				$('#home-section-8 .slide1').animate({opacity:0}, 500);
				$('#home-section-8 .not1').animate({opacity:0}, 500);
				$('#home-section-8 .slide2').animate({opacity:0}, 500);
				$('#home-section-8 .not2').animate({opacity:0}, 500);
				$('#home-section-8 .slide3').animate({opacity:0}, 500);
				$('#home-section-8 .not3').animate({opacity:0}, 500);
			}
			if(pos==16){
				$('body').animate({top: $("body").offset().top-$("#home-section-8").offset().top}, 500);
				$('#home-section-9 .text').animate({opacity:0}, 500, function(){stop=0;});
				$('#home-section-9 .slide1').animate({opacity:0}, 500, function(){stop=0;});
			}
			if(pos==17){
				$('body').animate({top: $("body").offset().top-$("#home-section-9").offset().top}, 500);
				$('#home-section-10').animate({opacity:0}, 500, function(){stop=0;});
			}
			if(pos==18){
				$('body').animate({top: $("body").offset().top-$("#home-section-10").offset().top}, 500);
				$('#home-section-11').animate({opacity:0}, 500, function(){stop=0;});
			}
			if(pos==19){
				$('body').animate({top: $("body").offset().top-$("#home-section-11").offset().top}, 500, function(){stop=0;});
			}
			if(pos==20){
				$('body').animate({top: $("body").offset().top-$("#home-section-12").offset().top}, 500, function(){stop=0;});
			}
			pos=pos-1;
			if(pos<0){pos=0;stop=0;}
		}
	}; 
	
	$.fn.z1plusDOWN = function() {
		if(stop==0){
			stop=1;
			pos=pos+1;
			if(pos>20){pos=20;}
			if(pos==1){
				$('#home-header .vc_custom_heading').animate({ fontSize: '50vh', lineHeight: '50vh', paddingTop: 0}, 500, function(){stop=0;});
			}
			if(pos==2){
				$('body').animate({top: $("body").offset().top-$("#home-section-2").offset().top}, 500);
				$('#home-section-2 .text').delay(500).animate({left: 0, opacity:1}, 500, function(){stop=0;});
				$('#home-section-2 .image').delay(500).animate({right: 0, opacity:1}, 500, function(){stop=0;});
				$('.scrolltotop').css("display","block");
			}
			if(pos==3){
				$('body').animate({top: $("body").offset().top-$("#home-section-3").offset().top}, 500);
				$('#home-section-3 .slide3').delay(600).animate({opacity:1}, 500);
				$('#home-section-3 .slide3-text').delay(600).animate({opacity:1}, 500, function(){stop=0;});
			}
			if(pos==4){
				$('#home-section-3 .slide2').animate({opacity:1}, 500);
				$('#home-section-3 .slide3').animate({opacity:0});
				$('#home-section-3 .slide2-text').animate({opacity:1}, 500, function(){stop=0;});
			}
			if(pos==5){
				$('#home-section-3 .slide1').animate({opacity:1}, 500);
				$('#home-section-3 .slide2').animate({opacity:0}, 500);
				$('#home-section-3 .slide1-text').animate({opacity:1}, 500, function(){stop=0;});
			}
			if(pos==6){
				$('body').animate({top: $("body").offset().top-$("#home-section-4").offset().top}, 500);
				$('#home-section-4 .slide1-text').delay(600).animate({opacity:1}, 500, function(){stop=0;});
				$('#home-section-4 .slide1').delay(600).animate({opacity:1}, 500, function(){stop=0;});
			}
			if(pos==7){
				$('#home-section-4 .slide2-text').animate({opacity:1}, 500, function(){stop=0;});
				$('#home-section-4 .slide2').animate({opacity:1}, 500, function(){stop=0;});
			}
			if(pos==8){
				$('#home-section-4 .slide3-text').animate({opacity:1}, 500, function(){stop=0;});
				$('#home-section-4 .slide3').animate({opacity:1}, 500, function(){stop=0;});
			}
			if(pos==9){
				$('body').animate({top: $("body").offset().top-$("#home-section-5").offset().top}, 500);
				$('#home-section-5').animate({opacity:1}, 500, function(){stop=0;});
			}
			if(pos==10){
				$('body').animate({top: $("body").offset().top-$("#home-section-5-5").offset().top}, 500, function(){stop=0;});
			}
			if(pos==11){
				$('body').animate({top: $("body").offset().top-$("#home-section-6").offset().top}, 500);
				$('#home-section-6 .text').delay(500).animate({left: 0, opacity:1}, 500, function(){stop=0;});
				$('#home-section-6 .image').delay(500).animate({right: 0, opacity:1}, 500, function(){stop=0;});
			}
			if(pos==12){
				$('body').animate({top: $("body").offset().top-$("#home-section-7").offset().top}, 500);
				$('#home-section-7 .text').delay(500).animate({left: 0, opacity:1}, 500);
				$('#home-section-7 .slide1').delay(500).animate({opacity:1}, 500, function(){stop=0;});
			}
			if(pos==13){
				$('#home-section-7 .slide1').animate({opacity:0});
				$('#home-section-7 .slide2').animate({opacity:1});
				$('#home-section-7').delay(50).css("background-color","#020303");
				$('#home-section-7 .text').delay(500).animate({opacity:1}, 500, function(){stop=0;});
			}
			if(pos==14){
				$('#home-section-7').delay(50).css("background-color","#FFF");
				$('#home-section-7 .text p').css("color","#020303");
				$('#home-section-7 .slide1').animate({opacity:1});
				$('#home-section-7 .slide2').animate({opacity:0}, function(){stop=0;});
			}
			if(pos==15){
				$('body').animate({top: $("body").offset().top-$("#home-section-8").offset().top}, 500);
				$('#home-section-8 .text').delay(500).animate({opacity:1}, 500);
				$('#home-section-8 .slide1').delay(500).animate({opacity:1}, 500, function(){stop=0;});
				$('#home-section-8 .not1').delay(1500).animate({opacity:1}, 500).delay(1500).animate({opacity:0}, 500);
				$('#home-section-8 .slide2').delay(4500).animate({opacity:1}, 500);
				$('#home-section-8 .not2').delay(5500).animate({opacity:1}, 500).delay(1500).animate({opacity:0}, 500);
				$('#home-section-8 .slide3').delay(8500).animate({opacity:1}, 500);
				$('#home-section-8 .not3').delay(9500).animate({opacity:1}, 500);
			}
			if(pos==16){
				$('body').animate({top: $("body").offset().top-$("#home-section-9").offset().top}, 500);
				$('#home-section-9 .text').delay(600).animate({opacity:1}, 500, function(){stop=0;});
				$('#home-section-9 .slide1').delay(600).animate({opacity:1}, 500, function(){stop=0;});
			}
			if(pos==17){
				$('body').animate({top: $("body").offset().top-$("#home-section-10").offset().top}, 500);
				$('#home-section-10').delay(500).animate({opacity:1}, 500, function(){stop=0;});
			}
			if(pos==18){
				$('body').animate({top: $("body").offset().top-$("#home-section-11").offset().top}, 500);
				$('#home-section-11').delay(500).animate({opacity:1}, 500, function(){stop=0;});
			}
			if(pos==19){
				$('body').animate({top: $("body").offset().top-$("#home-section-12").offset().top}, 500, function(){stop=0;});
			}
			if(pos==20){
				$('body').animate({top: $("body").offset().top-$(".footer-box").offset().top}, 500, function(){stop=0;});
			}
		}
	}; 
	
	$.fn.z1UP = function() {
		if(stop==0){
			stop=1;
			if(pos==1){
				$('body').animate({top: 0}, 500);
				$('#z1-section-2 .slide3').delay(600).animate({opacity:0}, 500);
				$('#z1-section-2 .slide3-text').delay(600).animate({opacity:0}, 500, function(){stop=0;});
				$('.scrolltotop').css("display","none");
			}
			if(pos==2){
				$('#z1-section-2 .slide2').animate({opacity:0}, 500);
				$('#z1-section-2 .slide3').animate({opacity:1});
				$('#z1-section-2 .slide2-text').animate({opacity:0}, 500, function(){stop=0;});
			}
			if(pos==3){
				$('#z1-section-2 .slide1').animate({opacity:0}, 500);
				$('#z1-section-2 .slide2').animate({opacity:1}, 500);
				$('#z1-section-2 .slide1-text').animate({opacity:0}, 500, function(){stop=0;});
			}
			if(pos==4){
				$('body').animate({top: $("body").offset().top-$("#z1-section-2").offset().top}, 500);
				$('#z1-section-3').animate({opacity:0}, 500, function(){stop=0;});
			}
			if(pos==5){
				$('body').animate({top: $("body").offset().top-$("#z1-section-3").offset().top}, 500);
				$('#z1-section-4 .text').animate({left: "-100%", opacity:0}, 500, function(){stop=0;});
				$('#z1-section-4 .image').animate({right: "-100%", opacity:0}, 500, function(){stop=0;});
			}
			if(pos==6){
				$('body').animate({top: $("body").offset().top-$("#z1-section-4").offset().top}, 500);
				$('#z1-section-5 .text').delay(500).animate({left: "-100%", opacity:0}, 500);
				$('#z1-section-5 .slide1').delay(500).animate({opacity:0}, 500, function(){stop=0;});
			}
			if(pos==7){
				$('#z1-section-5 .slide1').animate({opacity:1});
				$('#z1-section-5 .slide2').animate({opacity:0});
				$('#z1-section-5').delay(50).css("background-color","#FFF");
				$('#z1-section-5 .text').delay(500).animate({opacity:1}, 500, function(){stop=0;});
			}
			if(pos==8){
				$('#z1-section-5').delay(50).css("background-color","#020303");
				$('#z1-section-5 .text p').css("color","#FFF");
				$('#z1-section-5 .slide1').animate({opacity:0});
				$('#z1-section-5 .slide2').animate({opacity:1}, function(){stop=0;});
			}
			if(pos==9){
				$('body').animate({top: $("body").offset().top-$("#z1-section-5").offset().top}, 500);
				$('#z1-section-6 .text').delay(500).animate({opacity:0}, 500);
				$('#z1-section-6 .slide1').delay(500).animate({opacity:0}, 500, function(){stop=0;});
				$('#z1-section-6 .not1').delay(1500).animate({opacity:1}, 500).delay(1500).animate({opacity:0}, 500);
				$('#z1-section-6 .slide2').delay(4500).animate({opacity:0}, 500);
				$('#z1-section-6 .not2').delay(5500).animate({opacity:1}, 500).delay(1500).animate({opacity:0}, 500);
				$('#z1-section-6 .slide3').delay(8500).animate({opacity:0}, 500);
				$('#z1-section-6 .not3').delay(9500).animate({opacity:0}, 500);
			}
			if(pos==10){
				$('body').animate({top: $("body").offset().top-$("#z1-section-6").offset().top}, 500);
				$('#z1-section-7 .text').animate({left: "-100%", opacity:0}, 500, function(){stop=0;});
				$('#z1-section-7 .image').animate({right: "-100%", opacity:0}, 500, function(){stop=0;});
			}
			if(pos==11){
				$('body').animate({top: $("body").offset().top-$("#z1-section-7").offset().top}, 500);
				$('#z1-section-8').delay(500).animate({opacity:0}, 500, function(){stop=0;});
			}
			if(pos==12){
				$('body').animate({top: $("body").offset().top-$("#z1-section-8").offset().top}, 500);
				$('#z1-section-9').delay(500).animate({opacity:0}, 500, function(){stop=0;});
			}
			if(pos==13){
				$('body').animate({top: $("body").offset().top-$("#z1-section-9").offset().top}, 500, function(){stop=0;});
			}
			if(pos==14){
				$('body').animate({top: $("body").offset().top-$("#z1-section-10").offset().top}, 500, function(){stop=0;});
			}
			pos=pos-1;
			if(pos<0){pos=0;stop=0;}
		}
	}; 
	
	$.fn.z1DOWN = function() {
		if(stop==0){
			stop=1;
			pos=pos+1;
			if(pos>14){pos=14;}
			if(pos==1){
				$('body').animate({top: $("body").offset().top-$("#z1-section-2").offset().top}, 500);
				$('#z1-section-2 .slide3').delay(600).animate({opacity:1}, 500);
				$('#z1-section-2 .slide3-text').delay(600).animate({opacity:1}, 500, function(){stop=0;});
				$('.scrolltotop').css("display","block");
			}
			if(pos==2){
				$('#z1-section-2 .slide2').animate({opacity:1}, 500);
				$('#z1-section-2 .slide3').animate({opacity:0});
				$('#z1-section-2 .slide2-text').animate({opacity:1}, 500, function(){stop=0;});
			}
			if(pos==3){
				$('#z1-section-2 .slide1').animate({opacity:1}, 500);
				$('#z1-section-2 .slide2').animate({opacity:0}, 500);
				$('#z1-section-2 .slide1-text').animate({opacity:1}, 500, function(){stop=0;});
			}
			if(pos==4){
				$('body').animate({top: $("body").offset().top-$("#z1-section-3").offset().top}, 500);
				$('#z1-section-3').animate({opacity:1}, 500, function(){stop=0;});
			}
			if(pos==5){
				$('body').animate({top: $("body").offset().top-$("#z1-section-4").offset().top}, 500);
				$('#z1-section-4 .text').animate({left: 0, opacity:1}, 500, function(){stop=0;});
				$('#z1-section-4 .image').animate({right: 0, opacity:1}, 500, function(){stop=0;});
			}
			if(pos==6){
				$('body').animate({top: $("body").offset().top-$("#z1-section-5").offset().top}, 500);
				$('#z1-section-5 .text').delay(500).animate({left: 0, opacity:1}, 500);
				$('#z1-section-5 .slide1').delay(500).animate({opacity:1}, 500, function(){stop=0;});
			}
			if(pos==7){
				$('#z1-section-5 .slide1').animate({opacity:0});
				$('#z1-section-5 .slide2').animate({opacity:1});
				$('#z1-section-5').delay(50).css("background-color","#020303");
				$('#z1-section-5 .text').delay(500).animate({opacity:1}, 500, function(){stop=0;});
			}
			if(pos==8){
				$('#z1-section-5').delay(50).css("background-color","#FFF");
				$('#z1-section-5 .text p').css("color","#020303");
				$('#z1-section-5 .slide1').animate({opacity:1});
				$('#z1-section-5 .slide2').animate({opacity:0}, function(){stop=0;});
			}
			if(pos==9){
				$('body').animate({top: $("body").offset().top-$("#z1-section-6").offset().top}, 500);
				$('#z1-section-6 .text').delay(500).animate({opacity:1}, 500);
				$('#z1-section-6 .slide1').delay(500).animate({opacity:1}, 500, function(){stop=0;});
				$('#z1-section-6 .not1').delay(1500).animate({opacity:1}, 500).delay(1500).animate({opacity:0}, 500);
				$('#z1-section-6 .slide2').delay(4500).animate({opacity:1}, 500);
				$('#z1-section-6 .not2').delay(5500).animate({opacity:1}, 500).delay(1500).animate({opacity:0}, 500);
				$('#z1-section-6 .slide3').delay(8500).animate({opacity:1}, 500);
				$('#z1-section-6 .not3').delay(9500).animate({opacity:1}, 500);
			}
			if(pos==10){
				$('body').animate({top: $("body").offset().top-$("#z1-section-7").offset().top}, 500);
				$('#z1-section-7 .text').animate({left: 0, opacity:1}, 500, function(){stop=0;});
				$('#z1-section-7 .image').animate({right: 0, opacity:1}, 500, function(){stop=0;});
			}
			if(pos==11){
				$('body').animate({top: $("body").offset().top-$("#z1-section-8").offset().top}, 500);
				$('#z1-section-8').delay(500).animate({opacity:1}, 500, function(){stop=0;});
			}
			if(pos==12){
				$('body').animate({top: $("body").offset().top-$("#z1-section-9").offset().top}, 500);
				$('#z1-section-9').delay(500).animate({opacity:1}, 500, function(){stop=0;});
			}
			if(pos==13){
				$('body').animate({top: $("body").offset().top-$("#z1-section-10").offset().top}, 500, function(){stop=0;});
			}
			if(pos==14){
				$('body').animate({top: $("body").offset().top-$(".footer-box").offset().top}, 500, function(){stop=0;});
			}
		}
	}; 
	
	$.fn.xdesktopUP = function() {
		if(stop==0){
			stop=1;
			if(pos==1){
				$('body').animate({top: 0}, 500, function(){stop=0;});
				$('#xd-section-2 .text').animate({right: "-100%", opacity:0}, 500);
				$('#xd-section-2 .image').animate({left: "-100%", opacity:0}, 500, function(){stop=0;});
				$('.scrolltotop').css("display","none");
			}
			if(pos==2){
				$('body').animate({top: $("body").offset().top-$("#xd-section-2").offset().top}, 500);
				$('#xd-section-3').animate({opacity:0}, 500, function(){stop=0;});
			}
			if(pos==3){
				$('body').animate({top: $("body").offset().top-$("#xd-section-3").offset().top}, 500, function(){stop=0;});
			}
			if(pos==4){
				$('body').animate({top: $("body").offset().top-$("#xd-section-4").offset().top}, 500);
				$('#xd-section-5 .text').animate({left: "-100%", opacity:0}, 500);
				$('#xd-section-5 .image').animate({right: "-100%", opacity:0}, 500, function(){stop=0;});
			}
			if(pos==5){
				$('body').animate({top: $("body").offset().top-$("#xd-section-5").offset().top}, 500, function(){stop=0;});
			}
			if(pos==6){
				$('body').animate({top: $("body").offset().top-$("#xd-section-6").offset().top}, 500, function(){stop=0;});
			}
			pos=pos-1;
			if(pos<0){pos=0;stop=0;}
		}
	}; 
	
	$.fn.xdesktopDOWN = function() {
		if(stop==0){
			stop=1;
			pos=pos+1;
			if(pos>6){pos=6;}
			if(pos==1){
				$('body').animate({top: $("body").offset().top-$("#xd-section-2").offset().top}, 500);
				$('#xd-section-2 .text').animate({right: 0, opacity:1}, 500, function(){stop=0;});
				$('.scrolltotop').css("display","block");
			}
			if(pos==2){
				$('body').animate({top: $("body").offset().top-$("#xd-section-3").offset().top}, 500);
				$('#xd-section-3').animate({opacity:1}, 500, function(){stop=0;});
			}
			if(pos==3){
				$('body').animate({top: $("body").offset().top-$("#xd-section-4").offset().top}, 500);
				$('#xd-section-4 .text').animate({left: 0, opacity:1}, 500, function(){stop=0;});
			}
			if(pos==4){
				$('body').animate({top: $("body").offset().top-$("#xd-section-5").offset().top}, 500);
				$('#xd-section-5 .text').animate({left: 0, opacity:1}, 500);
				$('#xd-section-5 .image').animate({right: 0, opacity:1}, 500, function(){stop=0;});
			}
			if(pos==5){
				$('body').animate({top: $("body").offset().top-$("#xd-section-6").offset().top}, 500, function(){stop=0;});
			}
			if(pos==6){
				$('body').animate({top: $("body").offset().top-$("#xd-section-7").offset().top}, 500, function(){stop=0;});
			}
		}
	}; 
	
	if($('body').width()>780){
		$('body.page-id-2438').bind('mousewheel', function(e){
			console.log(pos);
			if(e.originalEvent.wheelDelta > 100 ) {
				$('body').z1plusUP();
			}
			if(e.originalEvent.wheelDelta < -100 ) {
				$('body').z1plusDOWN();
			}
		});
		
		
		
		$('body.page-id-2461').bind('mousewheel', function(e){
			console.log(pos);
			if(e.originalEvent.wheelDelta > 100 ) {
				$('body').z1UP();
			}
			if(e.originalEvent.wheelDelta < -100 ) {
				$('body').z1DOWN();
			}
		});
		
		
		$('body.page-id-2459').bind('mousewheel', function(e){
			if(e.originalEvent.wheelDelta > 100 ) {
				$('body').xdesktopUP();
			}
			if(e.originalEvent.wheelDelta < -100 ) {
				$('body').xdesktopDOWN();
			}
		});
		
		$('body.page-id-2438').on('touchstart', function(e) {

			var swipe = e.originalEvent.touches,
			start = swipe[0].pageY;

			$(this).on('touchmove', function(e) {

				var contact = e.originalEvent.touches,
				end = contact[0].pageY,
				distance = end-start;

				if (distance < -30) {$('body').z1plusUP();}
				if (distance > 30) {$('body').z1plusDOWN();}
			})
			.one('touchend', function() {

				$(this).off('touchmove touchend');
			});
		});
		
		$('body.page-id-2461').on('touchstart', function(e) {

			var swipe = e.originalEvent.touches,
			start = swipe[0].pageY;

			$(this).on('touchmove', function(e) {

				var contact = e.originalEvent.touches,
				end = contact[0].pageY,
				distance = end-start;

				if (distance < -30) {$('body').z1UP();}
				if (distance > 30) {$('body').z1DOWN();}
			})
			.one('touchend', function() {

				$(this).off('touchmove touchend');
			});
		});
		
		$('body.page-id-2459').on('touchstart', function(e) {

			var swipe = e.originalEvent.touches,
			start = swipe[0].pageY;

			$(this).on('touchmove', function(e) {

				var contact = e.originalEvent.touches,
				end = contact[0].pageY,
				distance = end-start;

				if (distance < -30) {$('body').xdesktopUP();}
				if (distance > 30) {$('body').xdesktopDOWN();}
			})
			.one('touchend', function() {

				$(this).off('touchmove touchend');
			});
		});
	}
	
	$("#ho-section-3 .slide1").mouseover(function() {
		$("#ho-section-3 .not1").animate({opacity:1},100);
		$("#ho-section-3 .not2").animate({opacity:0},100);
		$("#ho-section-3 .not3").animate({opacity:0},100);
    });
	
	$("#ho-section-3 .slide2").mouseover(function() {
		$("#ho-section-3 .not1").animate({opacity:0},100);
		$("#ho-section-3 .not2").animate({opacity:1},100);
		$("#ho-section-3 .not3").animate({opacity:0},100);
    });
	
	$("#ho-section-3 .slide3").mouseover(function() {
		$("#ho-section-3 .not1").animate({opacity:0},100);
		$("#ho-section-3 .not2").animate({opacity:0},100);
		$("#ho-section-3 .not3").animate({opacity:1},100);
    });

    });
	
	
	$('body.page-id-13').bind('mousewheel', function(e){
		if(e.originalEvent.wheelDelta > 0) {
			if(stop==0){
				stop=1;
				if(pos==1){
					$('body').animate({top: 0}, 500, function(){stop=0;});
					$('#ho-section-2 .text').animate({right: "-100%", opacity:0}, 500);
					$('#ho-section-2 .image').animate({left: "-100%", opacity:0}, 500, function(){stop=0;});
					$('.scrolltotop').css("display","none");
				}
				if(pos==2){
					$('body').animate({top: $("body").offset().top-$("#ho-section-2").offset().top}, 500);
					$('#ho-section-3 .text').delay(500).animate({opacity:0}, 500);
					$('#ho-section-3 .slide1').delay(500).animate({opacity:0}, 500, function(){stop=0;});
					$('#ho-section-3 .not1').delay(1500).animate({opacity:1}, 500).delay(1500).animate({opacity:0}, 500);
					$('#ho-section-3 .slide2').delay(4500).animate({opacity:0}, 500);
					$('#ho-section-3 .not2').delay(5500).animate({opacity:0}, 500).delay(1500).animate({opacity:0}, 500);
					$('#ho-section-3 .slide3').delay(8500).animate({opacity:0}, 500);
					$('#ho-section-3 .not3').delay(9500).animate({opacity:0}, 500);
				}
				if(pos==3){
					$('body').animate({top: $("body").offset().top-$("#ho-section-3").offset().top}, 500, function(){stop=0;});
				}
				if(pos==4){
					$('body').animate({top: $("body").offset().top-$("#ho-section-4").offset().top}, 500, function(){stop=0;});
				}
				if(pos==5){
					$('body').animate({top: $("body").offset().top-$("#ho-section-5").offset().top}, 500, function(){stop=0;});
				}
				if(pos==6){
					$('body').animate({top: $("body").offset().top-$("#ho-section-6").offset().top}, 500, function(){stop=0;});
				}
				if(pos==7){
					$('body').animate({top: $("body").offset().top-$("#ho-section-7").offset().top}, 500, function(){stop=0;});
				}
				pos=pos-1;
				if(pos<0){pos=0;stop=0;}
			}
		}else{
			if(stop==0){
				stop=1;
				pos=pos+1;
				if(pos>7){pos=7;}
				if(pos==1){
					$('body').animate({top: $("body").offset().top-$("#ho-section-2").offset().top}, 500);
					$('#ho-section-2 .text').animate({right: 0, opacity:1}, 500);
					$('#ho-section-2 .image').animate({left: 0, opacity:1}, 500, function(){stop=0;});
					$('.scrolltotop').css("display","block");
				}
				if(pos==2){
					$('body').animate({top: $("body").offset().top-$("#ho-section-3").offset().top}, 500);
					$('#ho-section-3 .text').delay(500).animate({opacity:1}, 500);
					$('#ho-section-3 .slide1').delay(500).animate({opacity:1}, 500, function(){stop=0;});
					$('#ho-section-3 .not1').delay(1500).animate({opacity:1}, 500).delay(1500).animate({opacity:0}, 500);
					$('#ho-section-3 .slide2').delay(4500).animate({opacity:1}, 500);
					$('#ho-section-3 .not2').delay(5500).animate({opacity:1}, 500).delay(1500).animate({opacity:0}, 500);
					$('#ho-section-3 .slide3').delay(8500).animate({opacity:1}, 500);
					$('#ho-section-3 .not3').delay(9500).animate({opacity:1}, 500);
				}
				if(pos==3){
					$('body').animate({top: $("body").offset().top-$("#ho-section-4").offset().top}, 500, function(){stop=0;});
				}
				if(pos==4){
					$('body').animate({top: $("body").offset().top-$("#ho-section-5").offset().top}, 500, function(){stop=0;});
				}
				if(pos==5){
					$('body').animate({top: $("body").offset().top-$("#ho-section-6").offset().top}, 500, function(){stop=0;});
				}
				if(pos==6){
					$('body').animate({top: $("body").offset().top-$("#ho-section-7").offset().top}, 500, function(){stop=0;});
				}
				if(pos==7){
					$('body').animate({top: $("body").offset().top-$("#ho-section-8").offset().top}, 500, function(){stop=0;});
				}
			}
		}
	});
})(jQuery);
