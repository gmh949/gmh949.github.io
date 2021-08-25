$(function(){
	$(".nnav li").mouseover(function(){
		$(this).css("background","rgba(255,255,255,.4)")
		$(this).stop().animate({opacity:'1'},1000)
	}).mouseout(function(){
		$(this).stop().animate({opacity:'.5'},1000)
		$(this).css("background","rgba(1,1,1,.0)")
	})
	// $(".butt").mouseover(function(){
	// 	$(this).css("background","rgba(1,1,1,.5)")
	// }).mouseout(function(){
	// 	$(this).css("background","rgba(1,1,1,1)")
	// })
	$(".fh").mouseover(function(){
		$(this).css({
			'background':'rgba(1,1,1,.5)',
		})
		$(".fh a").css({
			'color':'white',
		})
	}).mouseout(function(){
		$(this).css({
			'background':'rgba(1,1,1,.0)',
		})
		$(".fh a").css({
			'color':'black',
		})
	})
	$(".butt").click(function(){
		$(".ts").css("display","block")
		$(".ts").stop().animate({opacity:'1'},200)
		setInterval(function(){
			$(".ts").stop().animate({opacity:'0'},200,function(){
				$(".ts").css("display","none")
			})
		},2000)
	})
	$(".load").click(function(){
		$(".ts").css("display","block")
		$(".ts").stop().animate({opacity:'1'},200)
		setInterval(function(){
			$(".ts").stop().animate({opacity:'0'},200,function(){
				$(".ts").css("display","none")
			})
		},2000)
	})
	$("#bbt,#btn1,.butt").click(function(){
		$(".ts").css("display","block")
		$(".ts").stop().animate({opacity:'1'},500)
		setInterval(function(){
			$(".ts").animate({opacity:'0'},500,function(){
				$(".ts").css("display","none")
			})
		},2000)
	}).mouseover(function(){
		$(this).stop().animate({opacity:'.5'},1000)
	}).mouseout(function(){
		$(this).animate({opacity:'1'},1000)
	})
	
})