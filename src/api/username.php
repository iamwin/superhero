<?php
    /*
        获取注册页的用户名，查询数据库数据是否有重复('GET')
        name=username(注册页填的用户名);
     */
    
    //连接数据库,并判断是用GET还是POST方式
    include 'connect.php';

    $name=$_GET{'name'};//获取用户名
    $sql="SELECT * FROM login WHERE name='$name'";
    $res=$conn->query($sql);
    if($res->num_rows>0){
        echo 1;//用户名已被注册
    }else{
        echo 0;//用户名可用
    };

    //关闭结果集
    $res->close();
    //关闭数据库
    $conn->close();
?>