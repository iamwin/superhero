<?php
    /*
        获取网页id，查询数据库数据('GET')
        date-id=date-id(自定义属性date-id的值)
     */
    
    //连接数据库,并判断是用GET还是POST方式
    include 'connect.php';

    $id=$_GET{'data-id'};//获取id
    $sql="SELECT * FROM project WHERE id=$id";
    $res=$conn->query($sql);
    // echo $res2;
    $data=$res->fetch_all(MYSQLI_ASSOC);
    $data=json_encode($data,JSON_UNESCAPED_UNICODE);
    echo $data;

    //关闭结果集
    $res->close();
    //关闭数据库
    $conn->close();
?>