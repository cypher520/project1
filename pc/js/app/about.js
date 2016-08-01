// 关于我们的JS

$(function(){
	$('.main .tabTop li').click(function(){
		$('.main .tabTop li').removeClass('show');
		$(this).addClass('show');
		$('.main .tabClass').css('display','none');
		$('.main .tabClass').eq($(this).index()).css('display','block');
	});


	$('.tabDoc ul li').click(function(){
		$('.tabDoc ul li').removeClass('tabDocShow');
		$(this).addClass('tabDocShow');
	});














});