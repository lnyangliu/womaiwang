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


//面向对象编程
function WaterFall(){}
$.extend(WaterFall.prototype,{
    //初始化
    init:function(){
        //当前页数
        this.page=1;
        this.main = $("#wrap");
        //判断是否在加载中
        this.loading = false;
        //和promise .then相似
        this.loadJson()     //返回值是deferred对象（promise前身）
            .then(function(res){
                // deferred 的 done 回调 this指向的都是 jquery 对象本身
                console.log(res);
                this.renderPage(res);
            }.bind(this))


    },
    //加载数据
    loadJson:function(){
      return new Promise(function(success,error){
                var xhr = new XMLHttpRequest();
                xhr.open("GET","php/data.json");
                xhr.send(null);
                xhr.onload = function(){
                    if(xhr.status == 200){
                        // 如果返回值是字符串那么将字符串转换为json;
                        var json = typeof xhr.response == "string" ?JSON.parse(xhr.response) : xhr.response;
                        success(json)
                    }else{
                        error("请求出错");
                    }
                }
            })


    },

    //渲染页面
    renderPage:function(json1){
        //console.log(json1.result.wall.list);
        console.log(json1)
        var json=json1.subjects;
        console.log(json,json[0].images.small)
        var sBig=document.querySelector(".big_case img")
        var oimg = document.querySelector("#preview img");
        console.log(oimg)
        var oTit = document.querySelector(".pro_tit_top h2");
        var nowPrice = document.querySelector(".nowPrice");
        // var i="";
        //判断cookie中是否有id
        // var res="";
        if( cookie("id")){
            i=cookie("id");   //cookie("id")一个参数，是查找，返回value
            console.log(i);
            oimg.src = json[i].images.small;
            oTit.innerHTML = json[i].title;
            nowPrice.innerHTML = json[i].rating.average;
            sBig.src=json[i].images.small;

        }
        
           
//          oimg.src = "http://pic1.womai.com/upload/601/603/606/64306/280375/219300/219301/599179/599179_1_pic500_6863.jpg";
//          oTit.innerHTML = "中粮凌鲜·大洋世家厄瓜多尔白虾40/50";
//          nowPrice.innerHTML = "149.00";
//          sBig.src="http://pic1.womai.com/upload/601/603/606/64306/280375/219300/219301/599179/599179_1_pic500_6863.jpg";

        
    }


})

var waterfall = new WaterFall();
waterfall.init()

