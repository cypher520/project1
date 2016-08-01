// 首页JS代码
$(function(){
	$('.box .left').hover(function(){
		$('.box .list2').css('display','none');
		$('.box .left .list').stop().slideDown('slow');

	},function(){
		$('.box .list2').css('display','block');
		$('.box .left .list').stop().slideUp('fast');
	});

	$('.circle').click(function(){
		$('.opinion').css('display','none');
	});
	$('.circle img').hover(function(){
		$(this).addClass('closeOver');
	},function(){
		$(this).removeClass('closeOver');
	});
	


	var onOff = true;
	$('.main .cases .casesImg .left').click(function(){
		if (onOff) {
			onOff = false;
			var left=$('.main .cases .casesImg div ul').css('left');
			if (parseInt(left)<=-1029) {
				$('.main .cases .casesImg div ul').css('left',-9);
				$('.main .cases .casesImg div ul').animate({'left':'-=170'},1000,function(){onOff=true});
			}else{
			$('.main .cases .casesImg div ul').animate({'left':'-=170'},1000,function(){onOff=true});
			}
		}

	});
	$('.main .cases .casesImg .right').click(function(){
		if (onOff) {
			onOff = false;
			var left=$('.main .cases .casesImg div ul').css('left');
			if (parseInt(left)>=-9) {
				$('.main .cases .casesImg div ul').stop(false,true).css('left',-1029);
				$('.main .cases .casesImg div ul').stop(false,true).animate({'left':'+=170'},1000,function(){onOff=true});
			}else{
			$('.main .cases .casesImg div ul').stop(false,true).animate({'left':'+=170'},1000,function(){onOff=true});

			}
		}

	});



	$.ajax({
		url:"data/indexImg.json",
		type:"GET",
		dataType:"json",
		success:function(msg){
			//添加图片
			var imgUrl=msg.url;
			for(var i= 0;i<imgUrl.length;i++){
				var str="";
				str+="<li><a href='html/cases.html'><img src="+imgUrl[i].url+"></a></li>";
				$(".main .cases .casesImg>li:nth-child(2) div ul").append(str);
			}
		},
		error:function(){
			alert("error");
		}
	});


	// 图片轮播
	var imgTimer=null;
	var index=0;
	
	$('.main .cases .casesImg').hover(function(){
		clearInterval(imgTimer);
	},function(){
		imgTimer=setInterval(function(){
			var number = parseInt($('.main .cases .casesImg div ul').css('left'))+9;
			if(number == 0){
				index=0;
			}else{
				index =  -(number/170);

			}
			if(index>=6)
				{index=0;}
			if (index==0) {
			index=1;
			$('.main .cases .casesImg div ul').css('left',-9);
			$('.main .cases .casesImg div ul').animate({'left':-179},1000);
		}
		else{
			index++;
			$('.main .cases .casesImg div ul').animate({'left':-9-170*index},1000);
		}
		
		},2000)
	}).trigger('mouseleave');


	// 左偏移函数

	// function goLeft (index){
	// 	if (index==0) {
	// 		index=1;
	// 		$('.main .cases .casesImg div ul').css('left',-9);
	// 		$('.main .cases .casesImg div ul').animate({'left':-179},1000);
	// 	}
	// 	else{
	// 		index++;
	// 		$('.main .cases .casesImg div ul').animate({'left':-9-170*index},1000);
	// 	}
		
	// }



















});