<?php
    /*
        将传过来的商品信息更新数据库（'GET'）
        id=id(商品名字)
        number=number(商品的购买数量)
     */

    //连接数据库,并判断是用GET还是POST方式
    include 'connect.php';

    $name=isset($_GET['name']) ? $_GET['name'] : '';
    $number=isset($_GET['number']) ? $_GET['number'] : '';
    $sql="UPDATE shoppingcar SET number=$number WHERE name='$name'";
    // echo $sql;
    $res=$conn->query($sql);
    if($res){
        echo 'yes';//成功
    }else{
        echo 'no';//失败
    };

    //   //关闭结果集
    // $res->close();
    // //关闭数据库
    $conn->close();
?>