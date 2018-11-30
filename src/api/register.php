<?php
    /*
        注册('POST')
        name=username(注册页填的用户名);
        password=password(注册页填的密码);
     */
    
    //连接数据库,并判断是用GET还是POST方式
    include 'connect.php';

    $name=$_POST{'name'};//获取用户名
    $pass=$_POST{'password'};//获取密码
    $sql="INSERT INTO login (name,password) VALUES ('$name','$pass')";
    $res=$conn->query($sql);

    if($res){
        echo 'yes';//注册成功
    }else{
        echo 'no';//注册失败
    };

    // //关闭结果集
    $res->close();
    // //关闭数据库
    $conn->close();
?>