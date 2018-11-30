<?php
    //写好配置信息
    $servername='localhost'; //服务器名
    $username='root'; //用户名
    $password=''; //密码
    $dbname='666'; //数据库名
    
    //创建数据库连接
    $conn=new mysqli($servername,$username,$password,$dbname);
    
    // 检测连接
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    } 

    //查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');

    // echo "连接成功";
    
    //判断前端是用GET/POST方式传过来的
    $method=$_SERVER['REQUEST_METHOD'];
    $method=strtoupper($method);//转大写
    // echo($method);
?>