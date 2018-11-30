'use strict';

$(function () {
    // var isok1=false;//用户名开关
    // var isok2=false;//密码开关
    var isok3 = false; //验证码开关
    var isok4 = false; //3天免登录开关
    var num = '';

    //验证码
    randomyzm(); //一开始就生成一次验证码
    function randomyzm() {
        //随机生成4位大小写英文字母加数字验证码
        var str = '0123456789zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP';
        for (var i = 0; i < 4; i++) {
            num += str.charAt(parseInt(Math.random() * str.length));
        }
        // console.log(num);
        $('.yzm').html(num);
    };
    $('.yzm').click(function () {
        //按验证码换验证码
        randomyzm();
    });
    $('.val_yzm').blur(function () {
        //验证验证码是否输入正确
        if ($('.val_yzm').val() == num) {
            $('.yes').css('display', 'block');
            $('.no').css('display', 'none');
            isok3 = true;
        } else {
            $('.yes').css('display', 'none');
            $('.no').css('display', 'block');
        };
    });

    //账号
    // $('.val_username').blur(function(){
    //     if($('.val_username').val().trim()){
    //         console.log(1);
    //     }else{
    //         console.log(2);
    //     }
    // })

    //三天免登录
    $('.remember').blur(function () {
        if ($('.remember').is(':checked')) {
            //检验多选框是否被勾上
            isok4 = true;
        }
    });

    //登录
    $('#register').click(function () {
        var uname = $('.val_username').val();
        var day = new Date();
        day.setDate(day.getDate() + 3); //cookie失效时间
        // console.log(day);
        var arr = {
            'expires': 3,
            'path': '',
            'domain': ''
        };
        // console.log(uname);
        if (isok3 == true) {
            $.ajax({
                type: "post",
                url: "../api/denglu.php",
                async: "true",
                data: {
                    'username': uname,
                    'password': $('.val_password').val()
                },
                success: function success(str) {
                    // console.log(str);
                    if (str == 0) {
                        if (isok4 == true) {
                            Cookie.set('name', uname, { 'expires': day, 'path': '/' });
                        };
                        location.href = '../index.html';
                    } else {
                        alert('您输入的用户名/密码错误');
                    };
                }
            });
        };
    });
});