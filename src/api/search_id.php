<?php
    /*
        根据id搜索('GET')
        id=id(要搜索的id)
     */
    
    //连接数据库,并判断是用GET还是POST方式
    include 'connect.php';

    $id=$_GET{'id'};
    $sql="SELECT * FROM goodslist WHERE id=$id";//查询语句
    $res=$conn->query($sql);//执行查询语句
    $data=$res->fetch_all(MYSQLI_ASSOC);//获取内容部分
    echo json_encode($data,JSON_UNESCAPED_UNICODE);

    //关闭结果集
    $res->close();
    //关闭数据库
    $conn->close();
?>