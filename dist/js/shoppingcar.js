"use strict";$(function(){var e=Cookie.get("name"),s="您好，"+e;e?($(".not_check").css("display","block"),$(".not_check").html(s)):$(".not_check").css("display","none"),$(".not_check").click(function(){if(confirm("您确认要退出吗？")){var e=new Date;e.setDate(e.getDate()-1),Cookie.set("name",1,{expires:e,path:"/"}),$(".not_check").css("display","none")}}),$(".sea_shop").mouseenter(function(){$(".sea_car").css("display","block")}),$(".sea_shop").mouseleave(function(){$(".sea_car").css("display","none")}),$(".sea_shop").click(function(){location.href="../html/shoppingcar.html"}),$(".sea_car").mouseenter(function(){$(".sea_car").css("display","block")}),$(".sea_car").mouseleave(function(){$(".sea_car").css("display","none")}),$(document).scroll(function(){1<=(document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop)?($("#search").addClass("sea_push1"),$("#search").css("background","rgba(51,51,51,0.8"),$(".sea_car").addClass("sea_push2")):($("#search").removeClass("sea_push1"),$("#search").css("background","#E0E0E0"),$(".sea_car").removeClass("sea_push2"))}),$(".yiji").mouseenter(function(){$(".erji").css("display","block")}),$(".yiji").mouseleave(function(){$(".erji").css("display","none")}),$(".erji").mouseenter(function(){$(".erji").css("display","block")}),$(".erji").mouseleave(function(){$(".erji").css("display","none")}),$(".lis_shouqi").click(function(){$(".erji").css("display","none")}),$(".erji").find("li").click(function(){location.href="../html/lists.html"}),$(".three").find("div").find("span").click(function(){location.href="../html/lists.html"}),$.ajax({type:"get",url:"../api/lists.php",async:"true",data:{},success:function(e){i(JSON.parse(e))}});var a=!0;$(".shop_all").click(function(){a?($(".check").prop("checked","checked"),$(".shop_all").prop("checked","checked")):($(".check").removeAttr("checked"),$(".shop_all").removeAttr("checked")),a=!a,n()}),$(".shop_two").on("click",".check",function(){n()}),$(".shop_two").on("click",".shop_add",function(){var e=$(this).next().text();e++;var s=$(this).parent().next().next().text();$.ajax({type:"get",url:"../api/add.php",async:"true",data:{val:e,val2:s},success:function(e){e&&$.ajax({type:"get",url:"../api/lists.php",async:"true",data:{},success:function(e){i(JSON.parse(e))}})}})}),$(".shop_two").on("click",".shop_reduce",function(){var e=$(this).prev().text();e--;var s=$(this).parent().next().next().text();$.ajax({type:"get",url:"../api/add.php",async:"true",data:{val:e,val2:s},success:function(e){e&&$.ajax({type:"get",url:"../api/lists.php",async:"true",data:{},success:function(e){i(JSON.parse(e))}})}})}),$(".shop_two").on("click",".shop_det",function(){var e=$(this).next().next().next().next().next().text();confirm("您确认要删除此商品吗？")&&$.ajax({type:"get",url:"../api/dele_one.php",async:"true",data:{val3:e},success:function(e){e&&$.ajax({type:"get",url:"../api/lists.php",async:"true",data:{},success:function(e){i(JSON.parse(e))}})}})});var o=[];function i(e){var s=e.map(function(e){return'<div class="moban2">\n                        <input class="check" type="checkbox" checked/>\n                        <div>\n                            <img src="../img/lists/'+e.img+'.jpg" alt="" />\n                        </div>\n                        <div><a href="javascript:;">移入收藏</a></div>\n                        <a class="shop_det" href="javascript:;">删除</a>\n                        <div>15kg</div>\n                        <div class="shop_allprice">￥'+e.price*e.number+'</div>\n                        <div>\n                            <input class="shop_add" type="button" value="+"/>\n                            <em class="shop_num" style="font-size:12px">'+e.number+'</em>\n                            <input class="shop_reduce" type="button" value="-"/>\n                        </div>\n                        <div class="shop_price">￥'+e.price+'</div>\n                        <div class="shop_name">'+e.name+"</div>\n                    </div>"}).join("");$(".shop_two").html(s),n()}function n(){var e=0,s=0;o.length=0;for(var i=$(".check").size(),n=0;n<i;n++)$(".check").eq(n).prop("checked")&&o.push(n);for(var c=0;c<o.length;c++){e+=1*$(".shop_num").eq(o[c]).text();var t=(s+=1*$(".shop_allprice").eq(o[c]).text().slice(1)).toFixed(2)}$(".shop_sum").html(e),$(".Shop_allprice").html("￥"+t),0==o.length&&$(".Shop_allprice").html("￥0.00"),a=o.length==$(".check").size()?($(".shop_all").prop("checked","checked"),!1):($(".shop_all").removeAttr("checked"),!0)}$(".sid_one").mouseenter(function(){$(".sid_one>div").css("display","block"),$(".sid_one>div").animate({left:"-162px"},function(){$(".sid_one>div").animate({left:"-92px"})})}),$(".sid_one").mouseleave(function(){$(".sid_one>div").css("display","none")}),$(".sid_two").click(function(){location.href="../html/shoppingcar.html"}),$(".sid_three").mouseenter(function(){$(".sid_three>div").css("display","block"),$(".sid_three>div").animate({left:"-162px"},function(){$(".sid_three>div").animate({left:"-92px"})})}),$(".sid_three").mouseleave(function(){$(".sid_three>div").css("display","none")}),$(".sid_four").mouseenter(function(){$(".sid_four>div").css("display","block"),$(".sid_four>div").animate({left:"-162px"},function(){$(".sid_four>div").animate({left:"-92px"})})}),$(".sid_four").mouseleave(function(){$(".sid_four>div").css("display","none")}),$(".sid_five").mouseenter(function(){$(".sid_five>div").css("display","block"),$(".sid_five>div").animate({left:"-162px"},function(){$(".sid_five>div").animate({left:"-92px"})})}),$(".sid_five").mouseleave(function(){$(".sid_five>div").css("display","none")}),$(".sid_six").mouseenter(function(){$(".sid_six>div").css("display","block"),$(".sid_six>div").animate({left:"-162px"},function(){$(".sid_six>div").animate({left:"-92px"})})}),$(".sid_six").mouseleave(function(){$(".sid_six>div").css("display","none")})});