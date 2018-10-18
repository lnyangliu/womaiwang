$(function(){
	$(".floor-r-tit-left").mouseenter(function(){
			$(this).parents(".floor-r").find(".floor-r-bd-inner").css({
				left:"0px"
			})
			$(this).parents(".floor-r").find(".floor-r-bd-inner-last").css({
				left:"0px"
			})
		
		$(this).addClass("choice")
		.siblings().removeClass("choice")
	})
	
	$(".floor-r-tit-right").mouseenter(function(){
			$(this).parents(".floor-r").find(".floor-r-bd-inner").css({
				left:"-968px"
			})
			$(this).parents(".floor-r").find(".floor-r-bd-inner-last").css({
				left:"-484px"
			})
		
	
		$(this).addClass("choice")
		.siblings().removeClass("choice")
	})
})