/**
 * Created by cypher on 2016/6/22.
 */
window.onload = function () {

    //关闭和弹窗
    $(".Popup .guanbi").click(function () {
        $(".Popup").css("display", "none");
        $(".beijing").css("display", "none");
    })
    //返回首页
    $("#head h1 span").click(function () {
        window.location.href = "../home.html";
    });

    var name = $("#information .name");
    var adr = $("#information .adr");
    var id = $("#information  li form input.id");
    var mobile =$("#information  li form input.mobile");
    var pic = $("#information  li form input.pic");
    var i=0;
    //姓名验证
    name.blur(function(){
        var re= /^[\u4e00-\u9fa5]+$/;
        if(!re.test($(this).val()) && $(this).val()!==""){
            $("#information  li:nth-child(1) h3").text('含有非法字符！');
            $("#information  li:nth-child(1) ").removeClass("yes");
        }
        else if($(this).val()== "")
        {
            $("#information  li:nth-child(1) h3").text('不能为空！');
            $("#information  li:nth-child(1) ").removeClass("yes");
        }
        else{
            $("#information  li:nth-child(1) h3").text('');
            $("#information  li:nth-child(1) input").css("color","#000");
            $("#information  li:nth-child(1) ").addClass("yes");
            return true;
        }
    });

   //地址验证
    adr.blur(function(){
        var re= /^[\u4e00-\u9fa5]+$/;
        if(!re.test($(this).val()) && $(this).val()!==""){
            $("#information  li:nth-child(2) h3").text('含有非法字符！');
            $("#information  li:nth-child(2) ").removeClass("yes");
        }
        else if($(this).val()== ""){
            $("#information  li:nth-child(2) h3").text('不能为空！');
            $("#information  li:nth-child(2) ").removeClass("yes");
        }
         else{
            $("#information  li:nth-child(2) h3").text('');
            $("#information  li:nth-child(2) input").css("color","#000");
            $("#information  li:nth-child(2) ").addClass("yes");
            return true;
    }
});
    //身份证验证
    id.blur(function(){
        var re= /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/;
        if(!re.test($(this).val()) && $(this).val()!==""){
            $("#information  li:nth-child(3) h3").text('含有非法字符！');
            $("#information  li:nth-child(3) ").removeClass("yes");
        }
        else if($(this).val()== "")
        {
            $("#information  li:nth-child(3) h3").text('不能为空！');
            $("#information  li:nth-child(3) ").removeClass("yes");
        }
        else{
            $("#information  li:nth-child(3) h3").text('');
            $("#information  li:nth-child(3) input").css("color","#000");
            $("#information  li:nth-child(3) ").addClass("yes");
            return true;
        }
    });
    //电话验证
    mobile.blur(function(){
        var re= /(13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7}/;
        if(!re.test($(this).val()) && $(this).val()!==""){
            $("#information  li:nth-child(4) h3").text('含有非法字符！');
            $("#information  li:nth-child(4) ").removeClass("yes");
        }
        else if($(this).val()== "")
        {
            $("#information  li:nth-child(4) h3").text('不能为空！');
            $("#information  li:nth-child(4) ").removeClass("yes");
        }
        else{
            $("#information  li:nth-child(4) h3").text('');
            $("#information  li:nth-child(4) input").css("color","#000");
            $("#information  li:nth-child(4) ").addClass("yes");
            return true;
        }
    });
    pic.blur(function(){
        var re= /^\d{4}$/;
        if(!re.test($(this).val()) && $(this).val()!==""){
            $("#information  li:nth-child(5) h3").text('含有非法字符！');
            $("#information  li:nth-child(5) ").removeClass("yes");
        }
        else if($(this).val()== "")
        {
            $("#information  li:nth-child(5) h3").text('不能为空！');
            $("#information  li:nth-child(5) ").removeClass("yes");
        }
        else{
            $("#information  li:nth-child(5) h3").text('');
            $("#information  li:nth-child(5) input").css("color","#000");
            $("#information  li:nth-child(5) ").addClass("yes");
            return true;

        }
    });

    $(".gh p").click(function () {
        var i = $(".yes").length;
        console.log(i)
        if(i < 5) {
            alert("请输入完整的信息！谢谢配合");
        }
        else
            {
                $(".Popup").css("display", "block");
                $(".beijing").css("display", "block");
            }
    });
}





