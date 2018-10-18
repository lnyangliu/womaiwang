
		function Banner(){}
        $.extend(Banner.prototype,{
            init: function(options){
                this.item_list = $(options.item_list);
//              console.log(this.item_list)
                this.left_btn = $(options.left_btn);
                this.right_btn = $(options.right_btn);
                this.btn_list = $(options.btn_list);
                this.nowIndex = 0;
                this.item_num = this.item_list.length;
                this.ul = $(".banner_inner li");
//              this.item_width = this.item_list.width();
//              if(this.left_btn.length == 0 && this.right_btn.lenght ==0 && this.btn_list.length == 0){
//                  this.autoPlay();
//                  return 0 ;
//              }
                this.bindEvent();
                this.autoPlay();
            },
            bindEvent : function(){
                this.left_btn.click($.proxy(this.prev , this));
                this.right_btn.click($.proxy(this.next , this));
                this.btn_list.mouseover($.proxy(this.toIndex , this));
                this.btn_list.mouseover($.proxy(this.stopPlay , this));
                this.btn_list.mouseout($.proxy(this.autoPlay , this))
                this.item_list.mouseover($.proxy(this.stopPlay , this));
                this.item_list.mouseout($.proxy(this.autoPlay , this));
                $(".slider_btn").mouseover($.proxy(this.stopPlay , this));
                $(".slider_btn").mouseout($.proxy(this.autoPlay , this))
            },
            next:function(){
                if(this.nowIndex == this.item_num-1 ){
                    this.nowIndex = 0 ;
//                  this.ul.css({
//                      left : 0
//                  })
                }else{
                    this.nowIndex ++;
                }
                this.animate();
//              console.log(2)
            },
            prev:function(){
                // console.log(this);
                if( this.nowIndex == 0){
                    this.nowIndex = this.item_num - 1;
//                  this.li.css({
//                      left : -(this.item_num - 1) * this.item_width
//                  })
                }else{
                    this.nowIndex --;
                }

                this.animate();
            },
            toIndex:function(event){
                var target = event.target || event.scrElement;
                this.nowIndex = $(target).index();
                this.animate();
            },
            animate:function(){
//          	console.log(this)
                this.ul.eq(this.nowIndex).css({
                    display : "block"
                }).siblings("li").css({
                    display : "none"
                })
//              var index = this.nowIndex == this.item_num ? 0 :this.nowIndex;
                this.btn_list.eq(this.nowIndex).addClass("banner_active")
                .siblings("span").removeClass("banner_active");
            },
            autoPlay : function(){
                this.autoTimer = setInterval(function(){
                    this.next();
                }.bind(this),3000)
//              console.log(1)
            },
            stopPlay : function(){
               clearInterval(this.autoTimer)    
            }
        })

        var banner = new Banner();

        banner.init({
            item_list : ".banner_inner li",
            left_btn : ".turn_left",
            right_btn : ".turn_right",
            btn_list : ".btn_group span" 
        })
