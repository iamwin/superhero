<?php
    /*
        根据关键字搜索
        val=val(要搜索的关键字)
     */
    
    //连接数据库,并判断是用GET还是POST方式
    include 'connect.php';

    $val=$_GET{'val'};
    // echo $val;
    $sql="SELECT * FROM goodslist WHERE name LIKE '%$val%'";//查询语句
    $res=$conn->query($sql);//执行查询语句
    $data=$res->fetch_all(MYSQLI_ASSOC);//获取内容部分
    echo json_encode($data,JSON_UNESCAPED_UNICODE);

    //关闭结果集
    $res->close();
    //关闭数据库
    $conn->close();
?>