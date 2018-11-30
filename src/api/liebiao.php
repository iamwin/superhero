<?php
    /*
        生成列表页的商品信息('GET')
        page=page(当前页数)
        qty=qty(每页显示数量)
     */
    
    //连接数据库,并判断是用GET还是POST方式
    include 'connect.php';

    $page=isset($_GET['page']) ? $_GET['page'] : '';
    $qty=isset($_GET['qty']) ? $_GET['qty'] : '';
    
     //写查询语句，搜索商品列表的数据库
    $index=($page-1)*$qty;
    $sql="SELECT * FROM goodslist LIMIT $index,$qty";
 
    //执行语句：得到一个结果集
    $res=$conn->query($sql);
    
    // var_dump($res);//检测已经可以查询到数据

    $row=$res->fetch_all(MYSQLI_ASSOC);//只要内容部分
    
    //  var_dump($row);//得到数组

    echo json_encode($row,JSON_UNESCAPED_UNICODE);

    //关闭结果集
    $res->close();
    //关闭数据库
    $conn->close();
?>