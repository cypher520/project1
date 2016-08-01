/**
 * Created by lenovo on 2016/6/22.
 */
window.onload = function(){
        $(".pic1 .chuo").one('click',function(){
            var timer=null;
            var i=0;
            var n=0;
            var m=-1;
            timer=setInterval(function(){
                $(".pic1 li").eq(i).css("border","3px solid #ffd820");
                $(".pic1 li").eq(i-1).css("border","");
                i++;
                if(i==8){
                    i=0;
                    n++;
                }
                if(n==2){
                    m = Math.floor(Math.random()*7);  //取随机数(0~7)
                }
                if(i==m){
                    clearInterval(timer);
                    if(i%2==0){
                        $(".beijing").css("display","block");
                        $(".Popup2").css("display","block");
                    }if(i==1){
                        $(".beijing").css("display","block");
                        $(".Popup3").css("display","block");
                    }if(i == 3){
                        $(".beijing").css("display","block");
                        $(".Popup4").css("display","block");
                    }if(i == 5){
                        $(".beijing").css("display","block");
                        $(".Popup5").css("display","block");
                    }if(i == 7){
                        $(".beijing").css("display","block");
                        $(".Popup6").css("display","block");
                    }
                }
            },300);
            $(".pic1 .chuo").click(function () {
                $(".Popup1").css("display", "block");
                $(".beijing").css("display", "block");
            })
             //关闭和弹窗
            $(".guanbi").click(function () {
                $(".Popup1").css("display", "none");
                $(".beijing").css("display", "none");
            })
        });
        $(".guanbi").click(function(){
            $(".beijing").css("display","none");
            $(".Popup2").css("display","none");
            $(".Popup3").css("display","none");
            $(".Popup4").css("display","none");
            $(".Popup5").css("display","none");
            $(".Popup6").css("display","none");

        });
        $(".Popup3 .lingqu").click(function(){
            window.location.href="../html/submit.html";
        });
        $(".Popup4 .lingqu").click(function(){
        window.location.href="../html/submit.html";
        });
        $(".Popup5 .lingqu").click(function(){
        window.location.href="../html/submit.html";
        });
        $(".Popup6 .lingqu").click(function(){
        window.location.href="../html/submit.html";
        });
        $(".content .zoubian").click(function(){
           window.location.href="../home.html";
    });

}


