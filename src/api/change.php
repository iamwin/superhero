<?php
    /*
        修改目标商品的购买数量('GET')
     */
    
    //连接数据库,并判断是用GET还是POST方式
    include 'connect.php';

    $id=isset($_GET['id']) ? $_GET['id'] : '';
    $num=isset($_GET['num']) ? $_GET['num'] : '';
    $sql="UPDATA liebiao set num=$num where id=$id;";

    $res=$conn->query($sql);
        if($res){
            echo 'yes';//成功
        }else{
            echo 'no';//失败
        };
          //关闭结果集
        $res->close();
        //关闭数据库
        $conn->close();

?>