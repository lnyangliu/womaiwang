$(function(){
	$.each($(".items li"),function(index,item){
	   $(item).on("mouseenter",index,function(event){
//		       console.log(event.data); //=>每个按钮的index;
			$($("#preview").children("img")[index]).addClass("big_active")
			.siblings().removeClass("big_active")
			$($(".big_case").children("img")[index]).addClass("big_case_active")
			.siblings().removeClass("big_case_active")
	    })
	})
	
	
	$("#preview").mouseenter(function(){
		$(".big_case").css({
			display:"block"
		})
		$(".small_case").css({
			display:"block"
		})
		$("#preview").mousemove(function(event){
			if(event.offsetX > 160 && event.offsetX < 240){
				$(".small_case").css({
					left: event.offsetX - 160 +"px"
				})
				$(".big_case img").css({
					left: -1.25*(event.offsetX - 160)+"px"
				})
			}else if(event.offsetX < 160){
				$(".small_case").css({
					left: "0"
				})
				$(".big_case img").css({
					left: "0"
				})
			}else{
				$(".small_case").css({
					left: "80px"
				})
				$(".big_case img").css({
					left: "-100px"
				})
			}
			
			if(event.offsetY > 160 && event.offsetY < 240){
				$(".small_case").css({
					top: event.offsetY - 160 +"px"
				})
				$(".big_case img").css({
					top: -1.25*(event.offsetY - 160)+"px"
				})
			}else if(event.offsetY < 160){
				$(".small_case").css({
					top: "0"
				})
				$(".big_case img").css({
					top: "0"
				})
			}else{
				$(".small_case").css({
					top: "80px"
				})
				$(".big_case img").css({
					top: "-100px"
				})
			}
			
			
		})
	})
	
	$("#preview").mouseleave(function(){
		$(".big_case").css({
			display:"none"
		})
		$(".small_case").css({
			display:"none"
		})
	})
	
})