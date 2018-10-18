$(function(){
	
	$(".verticaImg").mouseenter(function(){
		$(".aImg").css({
			left:"242px",
			transition :"1s"
		})
	})
	$(".verticaImg").mouseleave(function(){
		
		$(".aImg").css({
			left:"-242px",
			transition :"0s"
		})
	})
	$(".conImg").mouseenter(function(){
		$(this).children(".aConImg").css({
			left:"242px",
			transition :"1s"
		})
	})
	$(".conImg").mouseleave(function(){
		
		$(this).children(".aConImg").css({
			left:"-242px",
			transition :"0s"
		})
	})
})
