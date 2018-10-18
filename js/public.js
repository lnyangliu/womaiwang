$(function(){
	$.each($(".public_top_tit a"),function(index,item){
	   $(item).on("mouseenter",index,function(event){
//		       console.log(event.data); //=>每个按钮的index;
			$($(".public_detail").children("ul")[index]).css({"display":"block"})
			.siblings().css({"display":"none"})
			$(this).addClass("public_top_tit_active")
			.siblings().removeClass("public_top_tit_active")
	    })
	})
})