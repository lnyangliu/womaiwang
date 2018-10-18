$(function(){
	$(".turn span").click(function(){
		
		if($(".verticabox_bd").css("left") == "0px"){
			$(".verticabox_bd").css({
				left:"-972px"
			})
		}else{
			$(".verticabox_bd").css({
				left:"0px"
			})
		}
	})
	$(".turn1 span").click(function(){
		
		if($(".commend-pro-inner").css("left") == "0px"){
			$(".commend-pro-inner").css({
				left:"-1210px"
			})
		}else{
			$(".commend-pro-inner").css({
				left:"0px"
			})
		}
	})
})