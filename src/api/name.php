<?php
    /*
        通过name搜索数据('GET')
        name=name（要搜索商品的商品名称）
     */
    
    //连接数据库,并判断是用GET还是POST方式
    include 'connect.php';

    $name=$_GET{'name'};
    $sql="SELECT * FROM shoppingcar WHERE name='$name'";//查询语句
    $res=$conn->query($sql);//执行查询语句
    $data=$res->fetch_all(MYSQLI_ASSOC);//获取内容部分
    echo json_encode($data,JSON_UNESCAPED_UNICODE);

    //关闭结果集
    $res->close();
    //关闭数据库
    $conn->close();
?>