<?php
    /*
        根据价格区间排序('GET')
        high=high(价格最大值)
        low=low(价格最小值)
     */
    
    //连接数据库,并判断是用GET还是POST方式
    include 'connect.php';

    $high=$_GET{'high'};
    $low=$_GET{'low'};
    $sql="SELECT * FROM goodslist WHERE price BETWEEN $low AND $high";//查询语句
    $res=$conn->query($sql);//执行查询语句
    $data=$res->fetch_all(MYSQLI_ASSOC);//获取内容部分
    echo json_encode($data,JSON_UNESCAPED_UNICODE);

    //关闭结果集
    $res->close();
    //关闭数据库
    $conn->close();
?>