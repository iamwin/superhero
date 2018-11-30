$(function(){
    //点击条款协议，显示条款协议
    $('.tiaokuanxiangqing').click(function(){
        $('#tiaokuan').css('display','block');
    });
    //点击关闭按钮，关闭条款协议
    $('.close').click(function(){
        $('#tiaokuan').css('display','none');
    });
    var isok1=false;
    var isok2=false;
    var isok3=false;
    var isok4=false;
    var isok5=false;
    var val_phone='';
    var val_passagain='';

    //手机号
    $('.phone').blur(function(){
        val_phone=$('.phone').val();
        val_phone=val_phone.trim();
        // console.log(val_phone);
        if(checkReg.tel(val_phone)){
            $.ajax({
                type:"get",
                url:"../api/username.php",
                async:"true",
                data:{
                    'name':val_phone
                },
                success:function(str){
                    str=JSON.parse(str);
                    // console.log(str);//0为可以注册，1为该用户已经注册
                    if(str==0){
                        $('.phonenumber').find('.dui').css('display','block');
                        $('.phonenumber').find('.chuo').css('display','none');
                        $('.phonenumber').find('.error').css('display','none');
                        $('.phonenumber').find('.say').css('display','none');
                        isok1=true;//当手机号可以注册时，开关为true
                    }else{
                        $('.phonenumber').find('.chuo').css('display','block');
                        $('.phonenumber').find('.error').css('display','block');
                        $('.phonenumber').find('.say').css('display','block');
                        $('.phonenumber').find('.say').html('该手机号已经注册')
                    };
                }
            });
        }else{
            $('.phonenumber').find('.dui').css('display','none');
            $('.phonenumber').find('.chuo').css('display','block');
            $('.phonenumber').find('.error').css('display','block');
            $('.phonenumber').find('.say').css('display','block');
        };
    });

    //验证码
    function Code(){
        var code='';
        var str='0123456789';
        for(var i=0;i<4;i++){
            code += str.charAt(parseInt(Math.random() * str.length));
        };
        // console.log(code);
        $('.getcode').val(code);//按钮框显示内容变成验证码
    }
    $('.getcode').click(function(){
        Code();//点击按钮的时候生成验证码
    });
    $('.val_code').blur(function(){
        var code=$('.getcode').val();//验证框里的的验证码
        var val_code=$('.val_code').val();//输入框里的验证码
        if(val_code==code){
            $('.yanzhengma').find('.dui').css('display','block');
            $('.yanzhengma').find('.chuo').css('display','none');
            $('.yanzhengma').find('.error').css('display','none');
            $('.yanzhengma').find('.say').css('display','none');
            isok2=true;
        }else{
            $('.yanzhengma').find('.dui').css('display','none');
            $('.yanzhengma').find('.chuo').css('display','block');
            $('.yanzhengma').find('.error').css('display','block');
            $('.yanzhengma').find('.say').css('display','block');
        };
    });

    
    //密码
    $('.pass').blur(function(){
        var val_password=$('.pass').val();
        // console.log(val_password);
        if(checkReg.pswnormal(val_password)){//密码正则验证
            $('.password').find('.dui').css('display','block');
            $('.password').find('.chuo').css('display','none');
            $('.password').find('.error').css('display','none');
            $('.password').find('.say').css('display','none');
            isok3=true;//当密码符合正则时，开关为true
        }else{
            $('.password').find('.dui').css('display','none');
            $('.password').find('.chuo').css('display','block');
            $('.password').find('.error').css('display','block');
            $('.password').find('.say').css('display','block');
        };
    });

    //再次输入密码
    $('.passagain').blur(function(){
        var val_password=$('.pass').val();//密码
        val_passagain=$('.passagain').val();//再次输入密码
        // console.log(val_passagain);
        if(val_passagain==val_password){
            $('.passwordagain').find('.dui').css('display','block');
            $('.passwordagain').find('.chuo').css('display','none');
            $('.passwordagain').find('.error').css('display','none');
            $('.passwordagain').find('.say').css('display','none');
            isok4=true;//当再次输入密码与密码相同时，开关为true
        }else{
            $('.passwordagain').find('.dui').css('display','none');
            $('.passwordagain').find('.chuo').css('display','block');
            $('.passwordagain').find('.error').css('display','block');
            $('.passwordagain').find('.say').css('display','block');
        };
        if(!val_passagain){
            $('.passwordagain').find('.dui').css('display','none');
            $('.passwordagain').find('.chuo').css('display','block');
            $('.passwordagain').find('.error').css('display','block');
            $('.passwordagain').find('.say').css('display','block');
        }
    });

    //条款框
    $('.pass').blur(function(){
        if($('.tiaokuan').is(':checked')){//多选框有没有被选中
            isok5=true;
        };
    });

    //注册
    $('#login').click(function(){
        if(isok1&&isok2&&isok3&&isok4&&isok5){
        //需要填的全都完成且都符合规则
            $.ajax({
                type:"post",
                url:"../api/register.php",
                async:"true",
                data:{
                    'name':val_phone,
                    'password':val_passagain
                },
                success:function(str){
                    // console.log(str);
                    if(str){
                        location.href='register.html';
                    };
                }
            });
        };
    });
})