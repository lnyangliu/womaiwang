;+function($){
    // 1. 加分号;
    // 2. 写匿名函数;
    // 3. jQuery 一定全程引入;   

    $.fn.extend({
        nav:function(){
            this.children().children("ul").hide();
            this.children().has("ul").on("click",function(event){
                var target = event.target;
                // this 是绑定事件的元素; 
                if(this != target) return ;
                $(this).children().toggle()
                .end().siblings().children().hide();
            });
        }
    })

}(jQuery)
