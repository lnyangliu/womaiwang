function cookie(name,value,options){
            if(arguments.length==1 && typeof name == "string"){
                var cookielist = document.cookie.split("; ");
                for(var i =0; i<cookielist.length; i++){
                    if(cookielist[i].split("=")[0]==name){
                        return cookielist[i].split("=")[1];
                    }
                }
                return "";
            }
            var cookiestr = name+"="+value;
            if(options == undefined || typeof options!=object){
                return document.cookie = cookiestr;
            }
            if(typeof options.path == "string"){
                cookiestr += ";path="+options.path;
            }
            if(typeof options.expires=="number" || typeof options.expires == "string"){
                cookiestr +=";expires="+options.expires; 
            }
            return document.cookie = cookiestr;

        }
     function removecookie(name,path){
            setCookie(name,"",{
                path: path ? path : "",
                expires:-1

            })

        }