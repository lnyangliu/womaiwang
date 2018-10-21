function Pagination(){}
        Pagination.prototype.init = function(){
            // 选择;
            this.wrap = document.querySelector("#wrap ul");
            this.clientHeight = document.documentElement.clientHeight;
            // 一个开关避免高频词进行数据请求;
            this.loading = false;
            this.now_page = 0;
            this.loadJson()
            .then(function(json){
                this.data = json;
                this.total = Math.ceil(json.count / 5);
                this.renderPage();
            }.bind(this))

            this.handleEvent() 
        }
        // 因为加载数据是异步;
        // 又因为整个功能没有数据就没正常执行，所以把其余代码要放在数据加载成功的回调函数里; => promise;
        Pagination.prototype.loadJson = function(){
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
        }
        Pagination.prototype.renderPage = function(){
            // 渲染页面;
            var list =  this.data.subjects;
            var html = "";
            // 起始点和终止点;
            // 第几页   	范围 	for循环起始点	for循环终止点
            // 0	        0~3	            0	        3
            // 1	        4~7	            4	        7
            // 2	        8~11	        8	        11
            // 3	        12~15	        12	        15
            // 4	        16~19	        16	        19
            // 5	        20~23	        20	        23
            // 6	        24~27	        24	        27
            // n	                     4 * n       	4 * n  + 3
            for(var i = 5 * this.now_page ; i <= 5* this.now_page + 4; i ++){
                html += `
                        <li>
                            <img src="${list[i].images.small}" data-id=${i} alt="">
                            <p>${list[i].title}</p>
                            <div class="similar" data-id="${list[i].id}">加入</br>购物车</div>
                        </li>`
            }
            this.wrap.innerHTML += html;
            this.loading = false;   
        }
        Pagination.prototype.handleEvent = function(){
            onscroll = this.load.bind(this)
            
            //购物车绑定事件
            $("#wrap ul").on("click",".similar",this.addCar.bind(this));

                $(".min_cart").on("mouseenter",this.showList.bind(this));
                $(".min_cart").on("mouseleave",function(){
                    $(".cart_more").children().remove();
                });
                $(".min_cart").on("click",function(event){

                	var event = event || window.event;
                    var target = event.target ; 
                    console.log(target)
//                  if(target != $(".cart_more")[0]) return 0;

                    removeCookie("shopCar","/womai");
                    // 执行鼠标移出事件;
                    $(".min_cart").triggerHandler("mouseleave");
                    this.listSum();
                }.bind(this));
                
                
        }
        Pagination.prototype.load = function(event){
            if(this.loading) return 0 ;

            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            var showHeight = scrollTop + this.clientHeight;
            
           //最后一个元素的高度;
            var eleChildren = this.wrap.getElementsByTagName("li");
            var lastChildren = eleChildren[eleChildren.length - 1];
            var lastTop = lastChildren.offsetTop;
            // console.log(showHeight,lastTop);
            // 判断是否该加载数据;
            if(lastTop <= showHeight){
                // 加载数据;
                // 加载过程之中 不重复加载;
                // console.log("加载数据");
                this.loading = true;
                this.now_page ++;  

                if(this.now_page > this.total){
                    return 0;
                }

                this.renderPage();
                // document.documentElement.scrollTop = 0;
                // console.log(1);
            }


           // 获取 几个值;
           // 显示的高度;
           // 最后一张图片的高度;

        }
        Pagination.prototype.addCar = function(event){
                // 我怎么知道把谁加入到购物车之中那?;
                var target = event.target ;
                var goodsId = $(target).attr("data-id");
               console.log(goodsId)
                var cookie1;
                if(cookie1 = cookie("shopCar")){
                    // 将字符串转换为数组, 方便插入操作;
                    // console.log(cookie1);
                    var cookieArray = JSON.parse(cookie1);
                    // 判定当前要添加的商品 是否已经存在在购物车里;
                    // 表示是否存在商品;
                    var hasGoods = false;
                    for(var i = 0 ; i < cookieArray.length ; i ++){
                        if(cookieArray[i].id == goodsId ) {
                            // 存在 商品;
                            hasGoods = true;
                            cookieArray[i].num ++;
                            break;
                        }
                    }
                    // 如果没有商品;
                    if(hasGoods == false){
                        var goods = {
                            id : goodsId,
                            num : "1"
                        }
                        cookieArray.push(goods);
                    }

//                  console.log(cookieArray)
                    cookie("shopCar",JSON.stringify(cookieArray));
                }else{
                    cookie("shopCar",`[{"id":"${goodsId}","num":"1"}]`);
                }
                console.log(cookie("shopCar"));
                this.listSum();
            }
            Pagination.prototype.showList = function(){
                // 判定是否存在购物车,如果不存在购物车就没必要拼接列表了;
//              var e = event || window.event;
//              var target = e.target;
//				console.log(target)
//              if(target != $(".cart_more")[0]) return 0;

                var cookie1;
                if(!(cookie1 = cookie("shopCar"))){ return 0; };
                var cookieArray = JSON.parse(cookie1);

                var html = "";
//              console.log(cookieArray[0].data-id)
                // for 购物车里有多少商品就拼接多少个;
                for(var i = 0 ; i < cookieArray.length ; i ++){
//                     console.log(this.data.subjects.length);
                    // for 判断哪一个商品是购物车里的商品;
                    
                    for(var j = 0 ; j < this.data.subjects.length ; j ++){
                        if(cookieArray[i].id == this.data.subjects[j].id){
                            html += `<li data-id="${cookieArray[i].id}">
                                        <img src="${this.data.subjects[j].images.small}" alt="">
                                        <h3>${this.data.subjects[j].title}</h3>
                                        <strong>${cookieArray[i].num}</strong>
                                    </li>`;
                            break;
                        }
                    }
                }
                console.log(html)
                $(".cart_more").html(html).show();
            }
            Pagination.prototype.listSum = function(){
                var cookie1;
                if(!(cookie1 = cookie("shopCar"))){ 
                    $(".cart_total").html(0);
                    return 0;
                };
                var cookieArray = JSON.parse(cookie1);
                var sum = 0;
                for(var i = 0 ; i < cookieArray.length ; i ++){
                    sum += Number(cookieArray[i].num);
                }
                $(".cart_total").html(sum);
            }

        
        
        
        
        
        
        
        var pagination = new Pagination();
        pagination.init();
        
var olist = document.querySelector("#wrap ul");
//console.log(olist)
//事件委托：
olist.onclick =function(event){
    var imglist = document.querySelectorAll("#wrap img");
    var imgArr = Array.from(imglist);
//  console.log(imgArr)
    var e =event || window.event;
    var target = e.target || e.srcElement;
    if(imgArr.indexOf(target)!=-1){

        cookie("id",target.getAttribute("data-id"))
        location.href="detail.html"
    }

}





























