$(function(){
    //top
    //登录时显示情况
    var cook1=Cookie.get('name');
    // console.log(cook1);
    var cok=`您好，${cook1}`;
    // console.log(cok);
    if(cook1){//证明已开启三天免登录
        $('.not_check').css('display','block');
        $('.not_check').html(cok);
    }else{
        $('.not_check').css('display','none');
    }
    $('.not_check').click(function(){
        var re=confirm('您确认要退出吗？')
        if(re){//确认要退出
            var day=new Date;
            day.setDate(day.getDate()-1);
            Cookie.set('name',1,{'expires':day,'path':'/'});//清除cookie
            $('.not_check').css('display','none');
        }
    })
    
    //search
    //购物车按钮
    $('.sea_shop').mouseenter(function(){
        $('.sea_car').css('display','block');
    });
    $('.sea_shop').mouseleave(function(){
        $('.sea_car').css('display','none');
    })
    $('.sea_shop').click(function(){
        location.href='../html/shoppingcar.html';
    })
    $('.sea_car').mouseenter(function(){
        $('.sea_car').css('display','block');
    });
    $('.sea_car').mouseleave(function(){
        $('.sea_car').css('display','none');
    })
    //滚动超距离时吸顶
    $(document).scroll(function(){
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;//获取滚动距离
        // console.log(scrollTop);
        if(scrollTop>=1){
            $('#search').addClass('sea_push1');
            $('#search').css('background','rgba(51,51,51,0.8');
            $('.sea_car').addClass('sea_push2');
        }else{
            $('#search').removeClass('sea_push1');
            $('#search').css('background','#E0E0E0');
            $('.sea_car').removeClass('sea_push2');
        }
    });
    //lists
    //二级菜单
    $('.yiji').mouseenter(function(){
        $('.erji').css('display','block');
    });
    $('.lis_shouqi').click(function(){
        $('.erji').css('display','none');
    })
    //跳转列表页
    $('.erji').find('li').click(function(){
        location.href='lists.html';
    });
    $('.three').find('div').find('span').click(function(){
        location.href='lists.html';
    });

    //轮播图
    var a=0;
    timeone()
    function timeone(){
        clearInterval(timer1)
        var timer1=setInterval(function(){
            a++
            if(a>5){
                a=0;
            };
            // console.log(a);
            $('.banner').find('div').removeClass('ban_act');
            $('.banner').find('div').eq(a).addClass('ban_act');
            $('.s_point').find('li').removeClass('actt');
            $('.s_point').find('li').eq(a).addClass('actt');
            // console.log($('.banner').find('div')[a]);
            
            $('.s_point').on('click','li',function(){
                // console.log($(this).index());//点击时获取下标
                a=$(this).index();
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
        },5000);
    };

    //购物车数量渲染到购物车中
    var sum_=0; //总数量
    var sum_pr=0;//总价格
    $.ajax({
        type: "get",
        url: "../api/lists.php",
        async: "true",
        data: {},
        success: function(str){
            var arr=JSON.parse(str);
            // console.log(arr);
            if(arr.length>0){
                $('.sea_che').css('display','none');
                $('.sea_null').css('display','none');
                var res=arr.map(function(item){
                    return `<div class="moban">
                                <img src="../img/lists/${item.img}.jpg" alt="" />
                                <a href="javascript:;">${item.name}</a>
                                <span>￥${item.price}</span>
                                <span>x</span>
                                <span>${item.number}</span>
                            </div>`
                }).join('');
                $('.small_car').html(res);
            }else{
                $('.sea_che').css('display','block');
                $('.sea_null').css('display','block');
            }
            for(var i=0;i<arr.length;i++){
                sum_+=arr[i].number*1;
                sum_pr=(sum_pr*1)+(arr[i].number*arr[i].price);
                sum_pr=sum_pr.toFixed(2);
            }
            // console.log(sum_);
            $('.sea_num').html(sum_);
            $('.sea_say').html(sum_);
            $('.sea_say2').html('￥'+sum_pr);
        }
    })
    
    //点击去结算跳到购物车页面
    $('.sea_go').click(function(){
        location.href='../html/shoppingcar.html';
    })

    //列表页内容
    $.ajax({
        tyep: "get",
        url: "../api/liebiao.php",
        async: "true",
        data: {
            'page': 1,
            'qty': 30
        },
        success:function(str){
            // console.log(str);
            var arr=JSON.parse(str);
            // console.log(ret);
            creat(arr);
        }
    });
    var isok1=false;//价格排序开关
    var i=1;
    $('.lie_next').click(function(){//下一页
        var val=$('.lie_pageall').html();
        // console.log(val);
        i++
        if(i>=val){
            i=val;
        };
        if(isok1){
            lis_price(i,n);
        }else{
            $.ajax({
                tyep: "get",
                url: "../api/liebiao.php",
                async: "true",
                data: {
                    'page': i,
                    'qty': 30
                },
                success:function(str){
                    // console.log(str);
                    var arr=JSON.parse(str);
                    // console.log(ret);
                    creat(arr);
                }
            });
        };
        $('.lie_page').html(i);
    })
    $('.lie_pre').click(function(){//上一页
        var val=$('.lie_pageall').html();
        // console.log(val);
        i--
        if(i<1){
            i=1;
        };
        if(isok1){
            lis_price(i,n);
        }else{
            $.ajax({
                tyep: "get",
                url: "../api/liebiao.php",
                async: "true",
                data: {
                    'page': i,
                    'qty': 30
                },
                success:function(str){
                    // console.log(str);
                    var arr=JSON.parse(str);
                    // console.log(ret);
                    creat(arr);
                }
            });
        };
        $('.lie_page').html(i);
    })
    $('.lie_last').click(function(){//尾页
        var val=$('.lie_pageall').html();
        if(isok1){
            i=val;
            // console.log(i);
            // console.log(n);
            lis_price(i,n);
        }else{
            $.ajax({
                tyep: "get",
                url: "../api/liebiao.php",
                async: "true",
                data: {
                    'page': val,
                    'qty': 30
                },
                success:function(str){
                    // console.log(str);
                    var arr=JSON.parse(str);
                    // console.log(ret);
                    creat(arr);
                }
            });
        }
        $('.lie_page').html(val);
    })
    $('.lie_first').click(function(){//头页
        if(isok1){
            i=1;
            // console.log(i);
            // console.log(n);
            lis_price(i,n);
        }else{
            $.ajax({
                tyep: "get",
                url: "../api/liebiao.php",
                async: "true",
                data: {
                    'page': 1,
                    'qty': 30
                },
                success:function(str){
                    // console.log(str);
                    var arr=JSON.parse(str);
                    // console.log(ret);
                    creat(arr);
                }
            });
        }
        $('.lie_page').html(1);
    })
    function creat(arr){
        var res=arr.map(function(item){
            return `<div data-id="${item.id}" class="lie_mode">
                    <img src="../img/lists/${item.img}.jpg" alt="" />
                    <img src="../img/lists/ygzx.png" alt="" />
                    <a href="javascript:;">${item.name}</a>
                    <span>￥${item.price}</span>
                    <span>已有
                        <span>${item.buy}+</span>人购买
                    </span>
                    <div>加入购物车>></div>
                    </div>`;
        }).join('');
        $('.lie_xr').html(res);
        //渲染商品共多少件，页数
        $.ajax({
            tyep: "get",
            url: "../api/all.php",
            async: "true",
            data: {},
            success:function(str){
                // console.log(str);总商品数量
                $('.lie_num').html(str);
                if(str<=30){
                    $('.lie_pageall').html(1);
                }else{
                    var num=Math.ceil(str/30);
                    $('.lie_pageall').html(num);
                }
            }
        });

    }
    //跳转详情页
    $('.lie_xr').on('click','.lie_mode',function(){
        var id=$(this).attr('data-id');
        // console.log(id);
        location.href='../html/details.html?'+id;
    });
    //点击价格,进行价格排序
    var n=0;
    $('.lie_pri').click(function(){
        // console.log(i);
        n++;
        lis_price(i,n);
    });
    function lis_price(i,n){
        isok1=true;
        $('.lie_pri').css({'background':'#fd7400','color':'#fff'});
        $('.lie_pri').mouseenter(function(){
            $('.lie_pri').css('color','#fff');
        });
        $('.lie_pri').mouseleave(function(){
            $('.lie_pri').css('color','#fff');
        });
        if(n%2==0){//价格升序
            // console.log('偶数');
            $('.lie_desc').css('display','none');
            $('.lie_asc').css('display','block');
            $.ajax({
                type: "get",
                url: "../api/price2.php",
                async: "true",
                data: {
                    'a':'ASC',
                    'page':i
                },
                success:function(str){
                    var arr=JSON.parse(str);
                    creat(arr);
                }
            })
        }else{//价格降序
            // console.log('奇数');
            $('.lie_desc').css('display','block');
            $('.lie_asc').css('display','none');
            $.ajax({
                type: "get",
                url: "../api/price2.php",
                async: "true",
                data: {
                    'a':'DESC',
                    'page':i
                },
                success:function(str){
                    // console.log(str);
                    var arr=JSON.parse(str);
                    creat(arr);
                }
            })
        };
    }

    //输入要搜寻的价格区间，点击确定，搜索价格区间内的商品
    $('.lie_sou').click(function(){
        isok1=false;
        $('.lie_pri').css({'background':'#f1edec','color':'#000'});
        $('.lie_pri').mouseenter(function(){
            $('.lie_pri').css('color','#9fbe06');
        });
        $('.lie_pri').mouseleave(function(){
            $('.lie_pri').css('color','#000');
        });
        $('.lie_asc').css('display','block');
        $('.lie_desc').css('display','none');




        var price1=$('.lie_up').val().trim();//最大值
        var price2=$('.lie_down').val().trim();//最小值
        // console.log(price1);
        // console.log(price2);
        if(price1&&price2){
            $('.lie_search').val('');
            $.ajax({
                type: "get",
                url: "../api/ptop.php",
                async: "true",
                data: {
                    'high':price1,
                    'low':price2
                },
                success:function(str){
                    var arr=JSON.parse(str);
                    creat(arr);
                }
            });
        }else{//搜索带有关键字的商品
            var val=$('.lie_search').val().trim();
            // console.log(val1);
            $.ajax({
                type: "get",
                url: "../api/search.php",
                async: "true",
                data: {
                    'val':val
                },
                success:function(str){
                    var arr=JSON.parse(str);
                    // console.log(arr);
                    creat(arr);
                }
            })
        }
    });
    
    //侧边栏
    $('.sid_one').mouseenter(function(){
        $('.sid_one>div').css('display','block');
        $('.sid_one>div').animate({left:'-162px'},function(){
            $('.sid_one>div').animate({left:'-92px'});
        });
    });
    $('.sid_one').mouseleave(function(){
        $('.sid_one>div').css('display','none');
    });
    $('.sid_two').click(function(){
        location.href='../html/shoppingcar.html';
    })
    $('.sid_three').mouseenter(function(){
        $('.sid_three>div').css('display','block');
        $('.sid_three>div').animate({left:'-162px'},function(){
            $('.sid_three>div').animate({left:'-92px'});
        });
    });
    $('.sid_three').mouseleave(function(){
        $('.sid_three>div').css('display','none');
    });
    $('.sid_four').mouseenter(function(){
        $('.sid_four>div').css('display','block');
        $('.sid_four>div').animate({left:'-162px'},function(){
            $('.sid_four>div').animate({left:'-92px'});
        });
    });
    $('.sid_four').mouseleave(function(){
        $('.sid_four>div').css('display','none');
    });
    $('.sid_five').mouseenter(function(){
        $('.sid_five>div').css('display','block');
        $('.sid_five>div').animate({left:'-162px'},function(){
            $('.sid_five>div').animate({left:'-92px'});
        });
    });
    $('.sid_five').mouseleave(function(){
        $('.sid_five>div').css('display','none');
    });
    $('.sid_six').mouseenter(function(){
        $('.sid_six>div').css('display','block');
        $('.sid_six>div').animate({left:'-162px'},function(){
            $('.sid_six>div').animate({left:'-92px'});
        });
    });
    $('.sid_six').mouseleave(function(){
        $('.sid_six>div').css('display','none');
    });
})