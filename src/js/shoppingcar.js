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
    $('.yiji').mouseleave(function(){
        $('.erji').css('display','none');
    });
    $('.erji').mouseenter(function(){
        $('.erji').css('display','block');
    });
    $('.erji').mouseleave(function(){
        $('.erji').css('display','none');
    });
    $('.lis_shouqi').click(function(){
        $('.erji').css('display','none');
    })
    //跳转列表页
    $('.erji').find('li').click(function(){
        location.href='../html/lists.html';
    });
    $('.three').find('div').find('span').click(function(){
        location.href='../html/lists.html';
    });

    //购物车内容
    $.ajax({
        type: "get",
        url: "../api/lists.php",
        async: "true",
        data:{},
        success: function(str){
            var arr=JSON.parse(str);
            creat2(arr);   
        }
    });

    //全选
    var isok=true;
    $('.shop_all').click(function(){
        // console.log(1);
        if(isok){
            $('.check').prop('checked', 'checked');
            $('.shop_all').prop('checked', 'checked');
        }else{
            $('.check').removeAttr('checked');
            $('.shop_all').removeAttr('checked');
        }
        isok=!isok;
        creat3();
    })
    
    //复选框如果全被选上上面和下面的复选框被勾选
    $('.shop_two').on('click','.check',function(){
        creat3(); 
    });



    //复选框
    // $('.shop_two').on('click','input',function(){
    // })
    
    // +1
    $('.shop_two').on('click','.shop_add',function(){
        var val=$(this).next().text();
        val++;//数量+1
        var val2=$(this).parent().next().next().text();//要+1的商品名称
        $.ajax({
            type: "get",
            url: "../api/add.php",
            async: "true",
            data: {
                'val':val,
                'val2':val2
            },
            success:function(str){
                if(str){
                    $.ajax({
                        type: "get",
                        url: "../api/lists.php",
                        async: "true",
                        data:{},
                        success: function(str){
                            var arr=JSON.parse(str);
                            creat2(arr);   
                        }
                    });
                }
            }
        });
    });

    // -1
    $('.shop_two').on('click','.shop_reduce',function(){
        var val=$(this).prev().text();
        val--;//数量-1
        var val2=$(this).parent().next().next().text();//要-1的商品名称
        $.ajax({
            type: "get",
            url: "../api/add.php",
            async: "true",
            data: {
                'val':val,
                'val2':val2
            },
            success:function(str){
                if(str){
                    $.ajax({
                        type: "get",
                        url: "../api/lists.php",
                        async: "true",
                        data:{},
                        success: function(str){
                            var arr=JSON.parse(str);
                            creat2(arr);   
                        }
                    });
                }
            }
        });
    });

    //删除
    $('.shop_two').on('click','.shop_det',function(){
        var val3=$(this).next().next().next().next().next().text();//要删除的商品名称
        // console.log(val3);
        var res=confirm('您确认要删除此商品吗？')
        // console.log(res);
        if(res){
            $.ajax({
                type: "get",
                url: "../api/dele_one.php",
                async: "true",
                data: {
                    'val3':val3
                },
                success:function(str){
                    // console.log(str);
                    if(str){
                        $.ajax({
                            type: "get",
                            url: "../api/lists.php",
                            async: "true",
                            data:{},
                            success: function(str){
                                var arr=JSON.parse(str);
                                creat2(arr);   
                            }
                        });
                    }
                }
            });
        }  
    })


    var brr=[];
    function creat2(arr){//渲染到购物车页
        var res=arr.map(function(item){
            return `<div class="moban2">
                        <input class="check" type="checkbox" checked/>
                        <div>
                            <img src="../img/lists/${item.img}.jpg" alt="" />
                        </div>
                        <div><a href="javascript:;">移入收藏</a></div>
                        <a class="shop_det" href="javascript:;">删除</a>
                        <div>15kg</div>
                        <div class="shop_allprice">￥${item.price*item.number}</div>
                        <div>
                            <input class="shop_add" type="button" value="+"/>
                            <em class="shop_num" style="font-size:12px">${item.number}</em>
                            <input class="shop_reduce" type="button" value="-"/>
                        </div>
                        <div class="shop_price">￥${item.price}</div>
                        <div class="shop_name">${item.name}</div>
                    </div>`
        }).join('');
        $('.shop_two').html(res);
        creat3();
    };
    function creat3(){//根据复选框个数总数和总价改变
        var car_sum=0;//总数量
        var car_totalprice=0//总价格
        brr.length=0;
        var le=$('.check').size();//复选框的总个数
        // console.log(le);
        for(var i=0;i<le;i++){
            if($('.check').eq(i).prop('checked')){
                brr.push(i);
            }
        }
        // console.log(brr);
        for(var j=0;j<brr.length;j++){
            car_sum+=$('.shop_num').eq(brr[j]).text()*1;//总数量
            car_totalprice+=$('.shop_allprice').eq(brr[j]).text().slice(1)*1;//总价格（没有￥）
            var new_totalprice=car_totalprice.toFixed(2);//加两位小数
        }
        $('.shop_sum').html(car_sum);
        $('.Shop_allprice').html('￥'+new_totalprice); 
        // console.log(brr.length);//判断复选框现在勾选了几个
        if(brr.length==0){
            $('.Shop_allprice').html('￥0.00');//当没有勾选时，总价格为0
        }
        if(brr.length==$('.check').size()){
            // console.log('已全部被勾选');
            $('.shop_all').prop('checked','checked');
            isok=false;
        }else{
            $('.shop_all').removeAttr('checked');
            isok=true;
        }
    };
































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