$(function(){
	$(window).scroll(function(){ 
		
        if($(this).scrollTop() > 1800 || $(this).scrollTop() <= 8300){
            $(".float-nav").css({
                display : "block"
            })
        }
        if($(this).scrollTop() <= 1800 || $(this).scrollTop() > 8300){
            $(".float-nav").css({
                display : "none"
            })
        }
        
        var index = Math.floor(($(this).scrollTop()-1800)/550)
        $($(".float-nav li")[index]).css({
        	background : "#3EA600"
        })
        .siblings("li").css({
        	background : "#fff"
        })
        
        $($(".float-nav li")[index]).find("a").css({
        	color : "#fff"
        })
		$($(".float-nav li")[index]).siblings().find("a").css({
        	color : "#606060"
        })
		
		
		var clientHeight = document.documentElement.clientHeight;
		if($(this).scrollTop() > clientHeight){
	            $(".divSou").stop().animate({
	                top:0
	            })
	        }
	        if($(this).scrollTop() <= clientHeight){
	            $(".divSou").stop().animate({
	                top:"-83"
	            })
	        }
	})
	
	turn_top.onclick = function(){
    		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    		scrollTop = "0"
    	}
})
