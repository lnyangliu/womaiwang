 var oUsr = document.getElementById("usrname");
        var oTips = document.getElementById("tip2");        
        oUsr.onfocus = function(){
            var sUsr = oUsr.value;
            if(sUsr==""){
                oTips.innerHTML = " 支持中文、英文 、 数字、 _ , 4 ~ 20 位 "
            }            
        } 
        oUsr.onblur = function(){
            var sUsr = oUsr.value;
            var regUsr = /^[\u4e00-\u9fa5a-z0-9\-_]{4,20}$/;
            var numreg = /^\d+$/;
            var elsreg = /^[\u4e00-\u9fa5a-z0-9\-_]/;
            // if( sUsr == ""){
            //     oTips.innerHTML ='不能为空';
            //     return 0;
            // }
            if(numreg.test(sUsr)){
                oTips.innerHTML =' 不能为纯数字 ';
                return 0;
            } 
            if(regUsr.test(sUsr)){
                
                oTips.innerHTML = "";
            }else{
                if(!elsreg.test(sUsr)){
                    oTips.innerHTML =' 仅支持汉字、字母、数字、“-”、“_”的组合 '
                    return 0;
                    }
                if(sUsr.length<4 || sUsr.length>20){
                    oTips.innerHTML =' 长度在4-20之间 ';
                    return 0;
                }
            }
        }

        // 2. 密码 
        // 长度只能在6-20个字符之间任意字符
        var oPwd = document.getElementById("password");
        var oPwdTips = document.getElementById("tip3")
        oPwd.onfocus = function(){
            var sPwd = oPwd.value;
            if(sPwd ==""){
                oPwdTips.innerHTML = " 建议使用字母、数字和符号两种及以上的组合 "
            }            
        }
        oPwd.onblur = function(){
            var sPwd = oPwd.value;
            
            if(sPwd.length<6 || sPwd.length>20){
                oPwdTips.innerHTML = " 密码长度只能在6-20个字符之间 ";
                return 0;
            }
            
        }
        oPwd.oninput = function(){
            var sPwd = oPwd.value;
            var regNumber = /\d/;
            var regWord = /[a-zA-Z]/;
            var regSmbol = /[^\da-zA-Z]/;
            var rate = 0;
            if(regNumber.test(sPwd)){
                rate ++;
                //oPwdTips.innerHTML = "弱!有被盗风险,建议使用字母、数字和符号两种及以上组合" 
            }
            if(regWord.test(sPwd)){
                rate ++;
            }
            if(regSmbol.test(sPwd)){
                rate ++;
            }
//          console.log(rate);
            switch(rate){
                case 1 :
                oPwdTips.innerHTML = " 弱!有被盗风险,建议使用字母、数字和符号两种及以上组合 " ;
                oPwdTips.style.color = "red"
                break;
                case 2 :
                oPwdTips.innerHTML = " 中!安全强度适中，可以使用三种以上的组合来提高安全强度 " ;
                oPwdTips.style.color = "yellow"
                break;
                case 3 :
                oPwdTips.innerHTML = " 强!你的密码很安全 " ;
                oPwdTips.style.color = "green"
                break;
            }          
        }
        // 3. 再次输入密码        
        var oSaPwd = document.getElementById("password_again");
        //console.log(oSaPwd);
        var oTwiceTips = document.getElementById("tip4");
        oSaPwd.onfocus =  function(){
            var sSaPwd = oSaPwd.value;
            if(sSaPwd == ""){
                oTwiceTips.innerHTML = " 请再次输入密码 ";
            }            
        }
        oSaPwd.onblur = function(){
            var sPwd = oPwd.value;
            //console.log(sPwd);
            var sSaPwd = oSaPwd.value;
            //console.log(sSaPwd);
            if(sSaPwd !=""){
                if(sPwd == sSaPwd){
                    oTwiceTips.innerHTML = "";
                    oTwiceTips.style.color = "orange";
                }else{
                    oTwiceTips.innerHTML = " 两次输入的密码不一致 ";
                    oTwiceTips.style.color = "orange";
                }
            }            
        }
        //4. 邮箱验证
        // 只能以数字字母开头 数字字母下划线 6 ~ 20位;
        // 在正则之中有意义的字符，如果想使用字符本身，那么需要 \ 转义; 
        var oEmial = document.getElementById("form-email");
        var oEmTips = document.getElementById("tip1");        
        oEmial.onfocus = function(){
            var sEmial = oEmial.value;
            if(sEmial == ""){
                oEmTips.innerHTML = " 验证完成后，你可以使用该邮箱或手机登陆 ";
            }            
        }
        oEmial.onblur = function(){
            var reg1 = /^[0-9a-z][0-9a-z_]{5,19}@[0-9a-z]{2,6}\.[a-z]{2,5}$/;
            var reg2 = /^1[34578]\d{9}$/;
            var sEmial = oEmial.value;
            if(sEmial!=""){
                if(reg1.test(sEmial) || reg2.test(sEmial)){
                    oEmTips.innerHTML = "";
                }else{
                    oEmTips.innerHTML = " 邮箱活手机号格式错误 ";
                    oEmTips.style.color = "orange";
                }
            }            
        }        
        var oBtn = document.getElementById("reigister");
//      console.log(oBtn);
        oBtn.onclick = function(){
            var sUsr = oUsr.value;
            var sPwd = oPwd.value;
            var sSaPwd = oSaPwd.value;
            var sEmial = oEmial.value;
            if(sUsr==""){
                oTips.innerHTML =' 用户名不能为空 ';
                return 0;
            }
            if(sPwd==""){
                oPwdTips.innerHTML = " 密码不能为空 ";
                return 0;
            }
            if(sSaPwd==""){
                oTwiceTips.innerHTML = " 密码不能为空 ";
                return 0;
            }
            if(sEmial ==""){
                oEmTips.innerHTML = " 邮箱或手机号不能为空 ";
                return 0;
            }
            var url = "http://localhost:8888/proxy/localhost/womai/php/register.2.php";
            ajaxPost(url,`username=${oUsr.value}&password=${oPwd.value}`)
            .then(function(res){
                if(res){
                	console.log(res)
                	location.href = "http://localhost/jd/jdlogin.html"
                }
            })
        }