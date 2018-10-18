$(function(){
	$("#current_city_detail,.closebtn,.hot_city_name a,.city_name a").click(function(){
		if($("#cover").css("display") == "none"){
			$("#cover").css({
				opacity : "0.5",
				display:"block"
			})
			$("#current_city_detail").css({
				background : "#fff",
				border: "1px solid #3a9900",
				borderBottomColor : "#fff"
			})
			$(".site_cont").css({
				display : "block"
			})
		}else{
			$("#cover").css({
				display:"none"
			})
			$("#current_city_detail").css({
				background : "#f5f5f5",
				border: "none"
			})
			$(".site_cont").css({
				display : "none"
			})
		}
	})
	$(".hot_city_name a,.city_name a").click(function(){
		$(".choosed_city").html($(this).html())
	})
	$(".province_name a").click(function(){
		$("#province").html($(this).html())
		$("#city").css({
			display : "block"
		})
		$(".abridge_province").css({
			display : "none"
		})
//		$(".abridge_city").css({
//			display : ""
//		})
	})
		$.each($(".provence_detail a"),function(index,item){
		   $(item).on("click",index,function(event){
//		       console.log(event.data); //=>每个按钮的index;
				$($(".abridge_city_all").children("div")[index]).css({"display":"block"})
				.end().siblings().css({"display":"none"})
		    })
		})
		
		$(".city_name a").click(function(){
			$("#city").html($(this).html())
		})
//		$("#province").click(function(){
//			$(".abridge_province").css({
//				display : "block"
//			})
//			$(".abridge_city_all").css({
//				display : "none"
//			})
//			
//		})
//		$.each($(".provence_detail a"),function(index,item){
//		   $(item).on("click",index,function(event){
////		       console.log(event.data); //=>每个按钮的index;
//				$($(".abridge_city_all").children("div")[index]).css({"display":"block"})
//				.end().siblings().css({"display":"none"})
//		    })
//		})
//		$.each($(".items li"),function(index,item){
//		   $(item).on("mouseenter",index,function(event){
////		       console.log(event.data); //=>每个按钮的index;
//				$($("#preview").children("img")[index]).css({"display":"block"})
//				.end().siblings().css({"display":"none"})
//		    })
//		})
})





























