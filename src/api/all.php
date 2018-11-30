<?php
    /*
        一共多少件商品
     */
    
    //连接数据库,并判断是用GET还是POST方式
    include 'connect.php';

    $sql="SELECT * FROM goodslist WHERE id";
    $res=$conn->query($sql);
    $res=$conn->query($sql);
    echo $res->num_rows;

    // //关闭结果集
    $res->close();
    // //关闭数据库
    $conn->close();