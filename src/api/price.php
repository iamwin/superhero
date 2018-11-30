<?php
    /*
        价格排序('GET')
        a=asc(升序)/desc(降序)
     */
    
    //连接数据库,并判断是用GET还是POST方式
    include 'connect.php';

    $a=$_GET{'a'};//获取a,判断是升序还是降序
    // echo $a;
    $a=strtoupper($a);//转成大写
    $sql="SELECT * FROM goodslist ORDER BY price $a";
    $res=$conn->query($sql);//执行查询语句
    // echo $res2;
    $data=$res->fetch_all(MYSQLI_ASSOC);//获取内容部分
    // echo $data;
    echo json_encode($data,JSON_UNESCAPED_UNICODE);

    //关闭结果集
    $res->close();
    //关闭数据库
    $conn->close();
?>