<?php
    /*
        人气排序('GET')
     */
    
    //连接数据库,并判断是用GET还是POST方式
    include 'connect.php';

    $sql="SELECT * FROM project ORDER BY sales DESC";
    $res=$conn->query($sql);
    // echo $res;
    $data=$res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($data,JSON_UNESCAPED_UNICODE);

    //关闭结果集
    $res->close();
    //关闭数据库
    $conn->close();
?>