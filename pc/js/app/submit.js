// 提交页面JS
$(function(){
	var that=null;
	focusOnOff($('.main .content .left .details li input'),"#dd4012","#fff","#f0f1f1","#dbdde1");
	focusOnOff($('.main .content .right textarea'),"#f0f1f1","#dbdde1","#f0f1f1","#dbdde1");
	



	$('.main .content .left .writeWeb li span').click(function(){
		$('.main .content .left .writeWeb li span').css('background','url(../../images/submit/negtive.png) no-repeat 33px 4px');
		$(this).css('background','url(../../images/submit/selected.png) no-repeat 33px 4px');
		if ($(this).index()==2) {
			$('.main .content .left .writeWeb li input').val('您没有网址，此项不用填');
			$('.main .content .left .writeWeb li input').css('background','#dbdde1');
		}else{
			$('.main .content .left .writeWeb li input').val('http://');
			$('.main .content .left .writeWeb li input').css('background','#fff');

		}
	});




	$('.main .content .left #serverType li').click(function(){
		if(!$(this).attr('class')){
			$(this).addClass('selected');
		}else{
			$(this).removeClass('selected');
		}
	});



	$('.main .bottom ul li').click(function(){
		$('.main .bottom ul li').removeClass('selected');
		$(this).addClass('selected');
	});



	// 预算和时间选择
	$('#budget').click(function(e){
		var divWidth = $(this).offset().left;
		var X = e.pageX - divWidth;
		$('#budget .show').width(X);
		var price = X*500;
		$('#budget .price').css('left',X-40).html(price);
	});



	$('#proTime').click(function(e){
		var divWidth = $(this).offset().left;
		var X = e.pageX - divWidth;
		$('#proTime .show').width(X);
		var time = parseInt(X/100);
		if(time<=0){
			time = parseInt(X/13);
			$('#proTime .time').css('left',X-40);
			$('#proTime .time').html(time+'周');

		}else{
			$('#proTime .time').css('left',X-40);
			$('#proTime .time').html(time+'月');
		}
	});
















	$('#submitD').click(function(){
		$('.allCover').css('display','block');
	});


	focusOnOff ($('.allCover .submitBox .inputTime input'),'#dd4012','#fff','#dd4012','#fff');


	$('.allCover .submitBox .sub input').click(function(){
		$('.allCover').css('display','none');
		alert('恭喜！！！~~提交成功！！');
	});



	$('.allCover .submitBox div').click(function(){
		$('.allCover').css('display','none');
	});

	function focusOnOff(obj,bColor1,bColor2,bColor3,bColor4){
		obj.focus(function(){
		that=$(this).val();
		$(this).val('');
		$(this).css({"border-color":bColor1,"background":bColor2});
	});

		obj.blur(function(){
			if(!$(this).val()){
				$(this).val(that);
			}
		$(this).css({"border-color":bColor3,"background":bColor4});
	});


	}



});