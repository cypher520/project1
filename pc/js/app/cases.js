// 案列JS

$(function(){
// 数字切换
	var index=0;
	var onOff=true;

	// 向左走
	$('.box .numTab .leftCaret').click(function(){
		var width = $('.main #allPro').css('left');
		if(parseInt(width)<=-2240)
		{if (onOff) {
			onOff = false;
			$('.main #allPro').css('left',0);
			$('.main #allPro').stop().animate({'left':'-=1120'},1000,function(){onOff = true;});
			if (index==0) {
				index=3;
				$('.box .numTab li').removeClass('show');
				$('.box .numTab li').eq(index).addClass('show');
			}else{
				index--;
				$('.box .numTab li').removeClass('show');
				$('.box .numTab li').eq(index).addClass('show');
			}

		}
			
		}else{if (onOff) {
				onOff = false;
				$('.main #allPro').animate({'left':'-=1120'},1000,function(){onOff = true;});
				if (index==0) {
					index=3;
					$('.box .numTab li').removeClass('show');
					$('.box .numTab li').eq(index).addClass('show');
				}else{
					index--;
					$('.box .numTab li').removeClass('show');
					$('.box .numTab li').eq(index).addClass('show');
				}
			}
		}
	});
	// 向右走


	$('.box .numTab .rightCaret').click(function(){
		var width = $('.main #allPro').css('left');
		if(parseInt(width)>=0)
		{if (onOff) {
			onOff=false;
			$('.main #allPro').css('left',-2240);
			$('.main #allPro').animate({'left':'+=1120'},1000,function(){onOff=true;});
			if (index==3) {
				index=0;
				$('.box .numTab li').removeClass('show');
				$('.box .numTab li').eq(index).addClass('show');
			}else{
				index++;
				$('.box .numTab li').removeClass('show');
				$('.box .numTab li').eq(index).addClass('show');
			}

		}

		}else{
			if (onOff) {
				onOff=false;
				$('.main #allPro').animate({'left':'+=1120'},1000,function(){onOff=true;});
				if (index==3) {
					index=0;
					$('.box .numTab li').removeClass('show');
					$('.box .numTab li').eq(index).addClass('show');
				}else{
					index++;
					$('.box .numTab li').removeClass('show');
					$('.box .numTab li').eq(index).addClass('show');
				}
			}
		}
	});


	$('.box .numTab li').click(function(){
		index =$(this).index()-1;
		if (onOff) {
			onOff=false;
			$('.main #allPro').animate({'left':-1120*index},1000,function(){onOff=true;});
			$('.box .numTab li').removeClass('show');
			$(this).addClass('show');
		}
	});






	// Tab 切换
		$('.main .caseTab li').click(function(){
			var index=$(this).index();
			$('.main .caseTab li').removeClass('liTab');
			$(this).addClass('liTab');
			$('.main .box').css('display','none');
			$('.main .box').eq(index).css('display','block');
		});












});