'use strict';

$(function () {
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
        location.href = '../html/shoppingcar.html';
    });
    $('.sea_car').mouseenter(function () {
        $('.sea_car').css('display', 'block');
    });
    $('.sea_car').mouseleave(function () {
        $('.sea_car').css('display', 'none');
    });

    //购物车下拉栏删除功能
    $('.small_car').on('click', '.delete', function () {
        var sea_dete = $(this).prev().prev().prev().prev().html();
        // console.log(sea_dete);
        var sea_que = confirm('您确认要删除此商品吗？');
        // console.log(sea_que);
        if (sea_que) {
            //确认要删除
            $.ajax({
                type: "get",
                url: "../api/dele_one_byname.php",
                async: "true",
                data: {
                    'name': sea_dete
                },
                success: function success(str) {
                    // console.log(str);
                    if (str) {
                        sum();
                    }
                }
            });
        };
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
    $('.yiji').mouseleave(function () {
        $('.erji').css('display', 'none');
    });
    $('.erji').mouseenter(function () {
        $('.erji').css('display', 'block');
    });
    $('.erji').mouseleave(function () {
        $('.erji').css('display', 'none');
    });
    $('.lis_shouqi').click(function () {
        $('.erji').css('display', 'none');
    });
    //跳转列表页
    $('.erji').find('li').click(function () {
        location.href = '../html/lists.html';
    });
    $('.three').find('div').find('span').click(function () {
        location.href = '../html/lists.html';
    });

    //详情页内容
    var id = window.location.search;
    id = id.slice(1); //获得列表页传过来的id，在数据库里寻找数据并渲染
    // console.log(id);
    $.ajax({
        type: "get",
        url: "../api/search_id.php",
        async: "true",
        data: { "id": id },
        success: function success(str) {
            // console.log(str);
            var arr = JSON.parse(str);
            $('.det_name').html(arr[0].name);
            $('.det_price').html(arr[0].price);
            $('.det_sales').html(arr[0].buy);
        }
    });
    $('.det_small').find('div').mouseenter(function () {
        var s_index = $(this).index();
        // console.log(s_index); 
        $('.det_picb').find('div').css('display', 'none');
        $('.det_picb').find('div').eq(s_index).css('display', 'block');
        var src = '../img/details/det_s' + (s_index + 1) + '.jpg';
        $('.det_plus img').attr('src', src);
    });
    //放大镜
    $('.det_picb').mousemove(function (e) {
        var pagex = e.pageX;
        var pagey = e.pageY;
        var pictop = $('.det_picb').offset().top;
        var picleft = $('.det_picb').offset().left;
        var magnifyw = $('.fdj').width();
        var magnifyh = $('.fdj').height();
        var magnifytop = pagey - pictop - magnifyh / 2;
        var magnifyleft = pagex - picleft - magnifyw / 2;
        var picw = $('.det_picb').width() - magnifyw;
        var pich = $('.det_picb').height() - magnifyh;
        magnifytop = magnifytop < 0 ? 0 : magnifytop;
        magnifyleft = magnifyleft < 0 ? 0 : magnifyleft;
        magnifytop = magnifytop > pich ? pich : magnifytop;
        magnifyleft = magnifyleft > picw ? picw : magnifyleft;
        //放大镜的镜片随鼠标移动而移动
        $('.fdj').css({ top: magnifytop, left: magnifyleft });
        var minl = $('.det_plus').width() - $('.det_img').width();
        var mint = $('.det_plus').height() - $('.det_img').height();
        // console.log(minl);
        // console.log(mint);
        var objimgl = -magnifyleft * 2;
        var objimgt = -magnifytop * 2;
        // console.log(objimgl);
        // console.log(objimgt);
        objimgl = objimgl < minl ? minl : objimgl;
        objimgt = objimgt < mint ? mint : objimgt;
        $('.det_img').css({ top: objimgt, left: objimgl });
    });

    //数量+1-1
    var det_num = 1;
    $('.det_add').click(function () {
        det_num++;
        $('.det_num').val(det_num);
    });
    $('.det_reduce').click(function () {
        det_num--;
        if (det_num < 1) {
            det_num = 1;
            window.alert("数量至少为1!");
        }
        $('.det_num').val(det_num);
    });

    //点击加入购物车，商品飞向侧边栏购物车
    $('.addcar').click(function () {
        // console.log(id);
        $('#sid_fly').css('display', 'block');
        var src_ = '../img/lists/' + id + '.jpg';
        $('#sid_fly').attr('src', src_);
        $('#sid_fly').animate({ 'left': '601px' }, function () {
            $('#sid_fly').css('display', 'none');
            $('#sid_fly').animate({ 'left': '101px' }, 1);
        });
    });

    sum(); //购物车数量渲染
    $('.addcar').click(function () {
        //加入购物车
        var price = $('.det_price').html(); //单价
        var number = $('.det_num').val(); //购买的数量
        var bb = $('.det_name').html(); //商品名称
        // console.log(bb);
        $.ajax({ //查看是否有同名商品
            type: "get",
            url: "../api/search_.php",
            async: "true",
            data: {
                'name': bb
            },
            success: function success(str1) {
                // console.log(str1);
                if (str1 == 1) {
                    //添加相同商品，修改购买数量
                    $.ajax({
                        type: "get",
                        url: "../api/name.php",
                        async: "true",
                        data: {
                            'name': bb
                        },
                        success: function success(str3) {
                            var arr4 = JSON.parse(str3);
                            var oldnum = arr4[0].number; //原来数据库里的商品数量
                            // console.log(oldnum);
                            var newnum = oldnum * 1 + number * 1;
                            // console.log(newnum);
                            $.ajax({
                                type: "get",
                                url: "../api/updata.php",
                                async: "true",
                                data: {
                                    'name': bb,
                                    'number': newnum
                                },
                                success: function success(str2) {
                                    // console.log(str2);
                                    if (str2) {
                                        sum();
                                    }
                                }
                            });
                        }
                    });
                } else {
                    //添加不同商品，添加商品到购物车
                    $.ajax({
                        type: "get",
                        url: "../api/addtocar.php",
                        async: "true",
                        data: {
                            'name': bb,
                            'id': id,
                            'number': number,
                            'price': price
                        },
                        success: function success(str) {
                            // console.log(str);
                            if (str) {
                                sum();
                            }
                        }
                    });
                }
            }
        });
    });
    function sum() {
        $.ajax({
            type: "get",
            url: "../api/search_car.php",
            async: "true",
            data: { "id": id },
            success: function success(str) {
                // console.log(str);
                var arr = JSON.parse(str);
                // console.log(arr);
                var sum = 0; //总数量
                var sum_pr = 0; //总价格
                for (var i = 0; i < arr.length; i++) {
                    sum = sum * 1 + arr[i].number * 1;
                    sum_pr = sum_pr * 1 + arr[i].number * arr[i].price;
                    sum_pr = sum_pr.toFixed(2);
                }
                // console.log(sum_pr);
                $('.sea_num').html(sum);
                $('.sid_num').html(sum);
                $('.sea_say').html(sum); //总数量
                $('.sea_say2').html('￥' + sum_pr); //总价格

                if (arr.length > 0) {
                    $('.sea_null').css('display', 'none');
                    $('.sea_che').css('display', 'none');
                    // console.log(arr);
                    var aa = $('.det_name').html();
                    // console.log(aa);
                    $.ajax({
                        type: "get",
                        url: "../api/lists.php",
                        async: "true",
                        data: {},
                        success: function success(str) {
                            var arr2 = JSON.parse(str);
                            // console.log(arr2);
                            var res = arr2.map(function (item) {
                                return '<div class="moban">\n                                            <img src="../img/lists/' + item.img + '.jpg" alt="" />\n                                            <a href="javascript:;">' + item.name + '</a>\n                                            <span>\uFFE5' + item.price + '</span>\n                                            <span>x</span>\n                                            <span>' + item.number + '</span>\n                                            <a class="delete" href="javascript:;">\u5220\u9664</a>\n                                        </div>';
                            }).join('');
                            $('.small_car').html(res);
                        }
                    });
                } else {
                    $('.sea_null').css('display', 'block');
                    $('.sea_che').css('display', 'block');
                }
            }
        });
    };
    //立即购买
    $('.buynow').click(function () {
        var price = $('.det_price').html(); //单价
        var number = $('.det_num').val(); //购买的数量
        var bb = $('.det_name').html(); //商品名称
        $.ajax({ //查看是否有同名商品
            type: "get",
            url: "../api/search_.php",
            async: "true",
            data: {
                'name': bb
            },
            success: function success(str1) {
                // console.log(str1);
                if (str1 == 1) {
                    //添加相同商品，修改购买数量
                    $.ajax({
                        type: "get",
                        url: "../api/name.php",
                        async: "true",
                        data: {
                            'name': bb
                        },
                        success: function success(str3) {
                            var arr4 = JSON.parse(str3);
                            var oldnum = arr4[0].number; //原来数据库里的商品数量
                            // console.log(oldnum);
                            var newnum = oldnum * 1 + number * 1;
                            // console.log(newnum);
                            $.ajax({
                                type: "get",
                                url: "../api/updata.php",
                                async: "true",
                                data: {
                                    'name': bb,
                                    'number': newnum
                                },
                                success: function success(str2) {
                                    // console.log(str2);
                                    if (str2) {
                                        sum();
                                        location.href = '../html/shoppingcar.html';
                                    }
                                }
                            });
                        }
                    });
                } else {
                    //添加不同商品，添加商品到购物车
                    $.ajax({
                        type: "get",
                        url: "../api/addtocar.php",
                        async: "true",
                        data: {
                            'name': bb,
                            'id': id,
                            'number': number,
                            'price': price
                        },
                        success: function success(str) {
                            // console.log(str);
                            if (str) {
                                sum();
                                location.href = '../html/shoppingcar.html';
                            }
                        }
                    });
                }
            }
        });
    });
    $('.sea_go').click(function () {
        location.href = '../html/shoppingcar.html';
    });

    //商品介绍、售后服务、评价
    $('.det_change4').find('li').click(function () {
        var cc = $('.det_change4').find('li');
        var dd = $(this).index();
        cc.removeClass('det_color'); //排他
        $(this).addClass('det_color'); //点哪个哪个就亮
        if (dd == 0) {
            $('.det_change').css('display', 'block');
            $('.det_change2').css('display', 'none');
            $('.det_change3').css('display', 'none');
        }
        if (dd == 1) {
            $('.det_change2').css('display', 'block');
            $('.det_change').css('display', 'none');
            $('.det_change3').css('display', 'none');
        }
        if (dd == 2) {
            $('.det_change3').css('display', 'block');
            $('.det_change2').css('display', 'none');
            $('.det_change').css('display', 'none');
        }
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
        location.href = '../html/shoppingcar.html';
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