<?php
    /*
        列表页数据查询('GET'/'POST')
     */
    
    //连接数据库,并判断是用GET还是POST方式
    include 'connect.php';

    $sql="SELECT * FROM shoppingcar";
    $res=$conn->query($sql);
    // echo $res;
    $data=$res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($data,JSON_UNESCAPED_UNICODE);

    //关闭结果集
    $res->close();
    //关闭数据库
    $conn->close();
?>