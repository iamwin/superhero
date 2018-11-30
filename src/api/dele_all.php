<?php
    /*
        删除购物车所有商品('GET')
     */
    
    //连接数据库,并判断是用GET还是POST方式
    include 'connect.php';

    $sql="DELETE FROM gouwuche";
    $res=$conn->query($sql);
    if($res){
            echo 'yes';
        }else{
            echo 'no';
        }

    //关闭数据库
    $conn->close();

?>