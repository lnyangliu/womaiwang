$(function(){
	setTimeout(function(){
		$(".img_top1").css({
			height:"0"
		})
	},3000)
	setTimeout(function(){
		$(".img_top2").css({
			height:"100px"
		})
	},4000)
	$(".img_top2").click(function(){
		location.href = "list.html"
	})
	
	$("#register").click(function(){
		location.href = "register.html"
	})
	
	
	$("#login").click(function(){
		location.href = "login.html"
	})
	
	
})
