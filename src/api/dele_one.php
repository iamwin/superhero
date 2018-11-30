<?php
    /*
        删除购物车所选商品('GET')
        id=id(要删除的商品id)
     */
    
    //连接数据库,并判断是用GET还是POST方式
    include 'connect.php';

    $val3=isset($_GET['val3']) ? $_GET['val3'] : '';
    $sql="DELETE FROM shoppingcar WHERE name='$val3'";
    $res=$conn->query($sql);
    if($res){
            echo 'yes';
        }else{
            echo 'no';
        }

    //关闭数据库
    $conn->close();
?>