<?php
    /*
        删除购物车所选商品('GET')
        name=name(要删除的商品name)
     */
    
    //连接数据库,并判断是用GET还是POST方式
    include 'connect.php';

    $val4=isset($_GET['name']) ? $_GET['name'] : '';
    $sql="DELETE FROM shoppingcar WHERE name='$val4'";
    $res=$conn->query($sql);
    if($res){
            echo 'yes';
        }else{
            echo 'no';
        }

    //关闭数据库
    $conn->close();
?>