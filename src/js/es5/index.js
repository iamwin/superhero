'use strict';

$(function () {
    $('.register_').click(function () {
        location.href = 'html/register.html';
    });
    $('.login_').click(function () {
        location.href = 'html/login.html';
    });
    $('.shoppingcar_').click(function () {
        location.href = 'html/shoppingcar.html';
    });
    $('.sea_logo').click(function () {
        location.href = 'main.html'; //记得改为index.html
    });
    //top
    //登录时显示情况
    var cook1 = Cookie.get('name');
    // console.log(cook1);
    var cok = '\u60A8\u597D\uFF0C' + cook1;
    // console.log(cok);
    if (cook1) {
        //证明已开启三天免登录
        $('.not_check').css('display', 'block');
        $('.not_check').html(cok);
    } else {
        $('.not_check').css('display', 'none');
    }
    $('.not_check').click(function () {
        var re = confirm('您确认要退出吗？');
        if (re) {
            //确认要退出
            var day = new Date();
            day.setDate(day.getDate() - 1);
            Cookie.set('name', 1, { 'expires': day, 'path': '/' }); //清除cookie
            $('.not_check').css('display', 'none');
        }
    });

    //search
    //购物车按钮
    $('.sea_shop').mouseenter(function () {
        $('.sea_car').css('display', 'block');
    });
    $('.sea_shop').mouseleave(function () {
        $('.sea_car').css('display', 'none');
    });
    $('.sea_shop').click(function () {
        location.href = 'html/shoppingcar.html';
    });
    $('.sea_car').mouseenter(function () {
        $('.sea_car').css('display', 'block');
    });
    $('.sea_car').mouseleave(function () {
        $('.sea_car').css('display', 'none');
    });
    //滚动超距离时吸顶
    $(document).scroll(function () {
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop; //获取滚动距离
        // console.log(scrollTop);
        if (scrollTop >= 1) {
            $('#search').addClass('sea_push1');
            $('#search').css('background', 'rgba(51,51,51,0.8');
            $('.sea_car').addClass('sea_push2');
        } else {
            $('#search').removeClass('sea_push1');
            $('#search').css('background', '#E0E0E0');
            $('.sea_car').removeClass('sea_push2');
        }
    });
    //lists
    //二级菜单
    $('.yiji').mouseenter(function () {
        $('.erji').css('display', 'block');
    });
    $('.lis_shouqi').click(function () {
        $('.erji').css('display', 'none');
    });
    //跳转列表页
    $('.erji').find('li').click(function () {
        location.href = 'html/lists.html';
    });
    $('.three').find('div').find('span').click(function () {
        location.href = 'html/lists.html';
    });
    //轮播图
    var a = 0;
    timeone();
    function timeone() {
        clearInterval(timer1);
        var timer1 = setInterval(function () {
            a++;
            if (a > 5) {
                a = 0;
            };
            // console.log(a);
            $('.banner').find('div').removeClass('ban_act');
            $('.banner').find('div').eq(a).addClass('ban_act');
            $('.s_point').find('li').removeClass('actt');
            $('.s_point').find('li').eq(a).addClass('actt');
            // console.log($('.banner').find('div')[a]);

            $('.s_point').on('click', 'li', function () {
                // console.log($(this).index());//点击时获取下标
                a = $(this).index();
                $('.banner').find('div').removeClass('ban_act');
                $('.banner').find('div').eq(a).addClass('ban_act');
                $('.s_point').find('li').removeClass('actt');
                $('.s_point').find('li').eq(a).addClass('actt');
            });

            // $('.banner').mouseenter(function(){
            //     clearInterval(timer1);
            //     $('.banner').find('div').removeClass('ban_act');
            //     $('.banner').find('div').removeClass('ban_acti');
            //     $('.banner').find('div').eq(a).addClass('ban_acti');
            // });
            // $('.banner').mouseleave(function(){
            //     clearInterval(timer1)
            //     $('.banner').find('div').removeClass('ban_acti');
            //     $('.banner').find('div').eq(a).addClass('ban_act');
            //     timeone();
            // });
        }, 5000);
    };

    //购物车数量渲染到购物车中
    var sum_ = 0; //总数量
    var sum_pr = 0; //总价格
    $.ajax({
        type: "get",
        url: "api/lists.php",
        async: "true",
        data: {},
        success: function success(str) {
            var arr = JSON.parse(str);
            // console.log(arr);
            if (arr.length > 0) {
                $('.sea_che').css('display', 'none');
                $('.sea_null').css('display', 'none');
                var res = arr.map(function (item) {
                    return '<div class="moban">\n                                <img src="img/lists/' + item.img + '.jpg" alt="" />\n                                <a href="javascript:;">' + item.name + '</a>\n                                <span>\uFFE5' + item.price + '</span>\n                                <span>x</span>\n                                <span>' + item.number + '</span>\n                            </div>';
                }).join('');
                $('.small_car').html(res);
            } else {
                $('.sea_che').css('display', 'block');
                $('.sea_null').css('display', 'block');
            }
            for (var i = 0; i < arr.length; i++) {
                sum_ += arr[i].number * 1;
                sum_pr = sum_pr * 1 + arr[i].number * arr[i].price;
                sum_pr = sum_pr.toFixed(2);
            }
            // console.log(sum_);
            $('.sea_num').html(sum_);
            $('.sea_say').html(sum_);
            $('.sea_say2').html('￥' + sum_pr);
        }
    });

    //点击去结算跳到购物车页面
    $('.sea_go').click(function () {
        location.href = 'html/shoppingcar.html';
    });

    //广告
    $('.adv span').mouseenter(function () {
        $(this).animate({ 'marginLeft': '3px' }, 200);
    });
    $('.adv span').mouseleave(function () {
        $(this).animate({ 'marginLeft': '0px' }, 200);
    });
    $('.adv2 .right_tr').mouseenter(function () {
        $(this).animate({ 'marginLeft': '5px' }, 200);
    });
    $('.adv2 .right_tr').mouseleave(function () {
        $(this).animate({ 'marginLeft': '0px' }, 200);
    });
    $('.rit').mouseenter(function () {
        $(this).animate({ 'marginLeft': '5px' }, 200);
    });
    $('.rit').mouseleave(function () {
        $(this).animate({ 'marginLeft': '0px' }, 200);
    });
    $('.rit_one').mouseenter(function () {
        $(this).animate({ 'marginLeft': '25px' }, 200);
    });
    $('.rit_one').mouseleave(function () {
        $(this).animate({ 'marginLeft': '20px' }, 200);
    });
    $('.rit_two').mouseenter(function () {
        $(this).animate({ 'marginLeft': '21px' }, 200);
    });
    $('.rit_two').mouseleave(function () {
        $(this).animate({ 'marginLeft': '16px' }, 200);
    });
    $('.rit_three').mouseenter(function () {
        $(this).animate({ 'marginLeft': '19px' }, 200);
    });
    $('.rit_three').mouseleave(function () {
        $(this).animate({ 'marginLeft': '14px' }, 200);
    });
    $('.rit_four').mouseenter(function () {
        $(this).animate({ 'marginLeft': '23px' }, 200);
    });
    $('.rit_four').mouseleave(function () {
        $(this).animate({ 'marginLeft': '18px' }, 200);
    });
    $('.fru_one').mouseenter(function () {
        $('.fru_one').find('b').animate({ 'bottom': '0px' }, 300);
    });
    $('.fru_one').mouseleave(function () {
        $('.fru_one').find('b').animate({ 'bottom': '-35px' }, 300);
    });
    $('.fru_two').mouseenter(function () {
        $('.fru_two').find('b').animate({ 'bottom': '0px' }, 300);
    });
    $('.fru_two').mouseleave(function () {
        $('.fru_two').find('b').animate({ 'bottom': '-35px' }, 300);
    });
    $('.fru_three').mouseenter(function () {
        $('.fru_three').find('b').animate({ 'bottom': '0px' }, 300);
    });
    $('.fru_three').mouseleave(function () {
        $('.fru_three').find('b').animate({ 'bottom': '-35px' }, 300);
    });
    $('.fru_four').mouseenter(function () {
        $('.fru_four').find('b').animate({ 'bottom': '0px' }, 300);
    });
    $('.fru_four').mouseleave(function () {
        $('.fru_four').find('b').animate({ 'bottom': '-35px' }, 300);
    });
    //广告里的轮播图
    var b = 0;
    adv2();
    function adv2() {
        clearInterval(timer2);
        var timer2 = setInterval(function () {
            b++;
            if (b > 3) {
                b = 0;
            };
            // $('.adv2_big').find('img').eq(b);
            $('.adv2_big').find('img').removeClass('adv2block');
            $('.adv2_big').find('img').eq(b).addClass('adv2block');
            $('.adv2_small').find('img').removeClass('adv2block');
            $('.adv2_small').find('img').eq(b).addClass('adv2block');
        }, 2000);
        $('.adv2_big').find('img').mouseenter(function () {
            clearInterval(timer2);
        });
        $('.adv2_small').find('img').mouseenter(function () {
            clearInterval(timer2);
        });
    };
    $('.adv2_big').find('img').mouseleave(function () {
        adv2();
    });
    $('.adv2_small').find('img').mouseleave(function () {
        adv2();
    });

    //侧边栏
    $('.sid_one').mouseenter(function () {
        $('.sid_one>div').css('display', 'block');
        $('.sid_one>div').animate({ left: '-162px' }, function () {
            $('.sid_one>div').animate({ left: '-92px' });
        });
    });
    $('.sid_one').mouseleave(function () {
        $('.sid_one>div').css('display', 'none');
    });
    $('.sid_two').click(function () {
        location.href = 'html/shoppingcar.html';
    });
    $('.sid_three').mouseenter(function () {
        $('.sid_three>div').css('display', 'block');
        $('.sid_three>div').animate({ left: '-162px' }, function () {
            $('.sid_three>div').animate({ left: '-92px' });
        });
    });
    $('.sid_three').mouseleave(function () {
        $('.sid_three>div').css('display', 'none');
    });
    $('.sid_four').mouseenter(function () {
        $('.sid_four>div').css('display', 'block');
        $('.sid_four>div').animate({ left: '-162px' }, function () {
            $('.sid_four>div').animate({ left: '-92px' });
        });
    });
    $('.sid_four').mouseleave(function () {
        $('.sid_four>div').css('display', 'none');
    });
    $('.sid_five').mouseenter(function () {
        $('.sid_five>div').css('display', 'block');
        $('.sid_five>div').animate({ left: '-162px' }, function () {
            $('.sid_five>div').animate({ left: '-92px' });
        });
    });
    $('.sid_five').mouseleave(function () {
        $('.sid_five>div').css('display', 'none');
    });
    $('.sid_six').mouseenter(function () {
        $('.sid_six>div').css('display', 'block');
        $('.sid_six>div').animate({ left: '-162px' }, function () {
            $('.sid_six>div').animate({ left: '-92px' });
        });
    });
    $('.sid_six').mouseleave(function () {
        $('.sid_six>div').css('display', 'none');
    });
});